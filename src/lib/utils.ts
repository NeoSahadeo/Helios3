import { base } from "$app/paths";
import { notify } from "./store";
import { password_state_update, get_password_state } from "$lib/state.svelte";

export interface Password_Object {
  created: string;
  email: string;
  id: number;
  nickname: string;
  notes: string;
  password: string;
  site_name: string;
  site_url: string;
  username: string;
}

export function get_token(): string | null {
  let token = localStorage.getItem("helios3token");
  if (token) return token;

  token = sessionStorage.getItem("helios3token");
  if (token) return token;

  return null;
}
export function remove_token() {
  sessionStorage.removeItem("helios3token");
  localStorage.removeItem("helios3token");
}

export async function fetch_passwords() {
  const token = get_token();
  if (token == null) {
    return undefined;
  }

  try {
    const response = await fetch(url_resolver("api") + "passwords", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (response.ok) {
      const json_response = await response.json();
      if (json_response.error) {
        return undefined;
      }
      return json_response;
    }
  } catch (error) {
    console.log(error);
  }
}

export function url_resolver(_type: "api" | "local"): string {
  // local
  if (base === "") {
    if (_type === "api") {
      return "http://127.0.0.1:8000/";
    }
    if (_type === "local") {
      return "http://localhost:5173/";
    }
  }
  // External
  if (_type === "api") {
    return "https://neosahadeo.pythonanywhere.com/";
  }
  if (_type === "local") {
    return "https://neosahadeo.co.za/Helios3/";
  }

  // This is for typescript-- ignore it
  return "";
}

export async function is_loggedin() {
  const token = get_token();
  if (!token) {
    return false;
  }
  try {
    const response = await fetch(url_resolver("api") + "loggedin", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (response.ok) {
      return true;
    } else {
      remove_token();
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}

async function password_crud(
  formData: FormData,
  method: "put" | "get" | "post" | "delete",
): Promise<undefined | Password_Object> {
  const token = get_token();
  if (!token) {
    return undefined;
  }
  try {
    let response;
    if (method !== "get") {
      response = await fetch(url_resolver("api") + "passwords", {
        method: method,
        headers: {
          Authorization: `Token ${token}`,
        },
        body: formData,
      });
    } else {
      response = await fetch(
        url_resolver("api") + `passwords?q=${formData.get("q")}`,
        {
          method: method,
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
    }
    if (response.ok) {
      const json_response = await response.json();
      if (json_response.error) {
        notify.send({
          message: json_response.error,
          type: "error",
        });
      } else if (method !== "get") {
        notify.send({
          message: json_response.success,
          type: "success",
        });
      }
      return json_response;
    }
    return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function delete_password(formData: FormData) {
  return password_crud(formData, "delete");
}

export async function edit_password(formData: FormData) {
  return password_crud(formData, "put");
}

export async function create_password(formData: FormData) {
  passwords_listener.dispatch("refresh_passwords");
  return await password_crud(formData, "post");
}

export async function search(formData: FormData) {
  return password_crud(formData, "get");
}

export async function refresh() {
  // periodically check the validity of the session
  // periodically check for password
  const passwords = await fetch_passwords();
  password_state_update(passwords);
}

export class Events {
  private events: any = {};

  on(name: string, callback: (...args: any) => void) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }
  remove(name: string, callback: () => void) {
    if (this.events[name] && this.events.length > 0) {
      this.events.filter((e: () => void) => e !== callback);

      if (this.events[name].length === 0) delete this.events[name];
    }
  }
  dispatch(name: string, data?: any) {
    if (this.events[name])
      for (let x = 0; x < this.events[name].length; x++) {
        this.events[name][x](data);
      }
  }
}

export const passwords_listener = new Events();
export const drawer_listener = new Events();

function csv_download(csv_data: string) {
  const blob = new Blob([csv_data], { type: "text/csv" });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  const date = new Date();

  anchor.href = url;
  anchor.download = `helios3passwords-${date.getDay()}-${date.getTime()}`;
  anchor.click();
}

export async function export_csv() {
  const passwords = await fetch_passwords();
  const headers = Object.keys(passwords[0]).join(",");

  const export_array = [headers];

  passwords.forEach((e: Password_Object) => {
    export_array.push(Object.values(e).join(","));
  });

  csv_download(export_array.join("\n"));
}

export function import_csv() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "text/csv,.csv";

  input.addEventListener("change", () => {
    if (input.files == null) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const csv_text = e.target?.result;
      if (!csv_text) return;
      // Parse data
      const passwords = parse_csv(csv_text.toString());
      passwords?.reverse();
      if (!passwords) return;

      // Ask for confirmation
      if (
        !confirm(
          "Are you sure you want to import: " +
          file.name +
          "\n This import cannot be undone",
        )
      )
        return;

      for (let x = 0; x < passwords.length; x++) {
        const form = document.createElement("form");

        const nickname = document.createElement("input");
        nickname.name = "nickname";
        nickname.value = passwords[x].nickname;

        const password = document.createElement("input");
        password.name = "password";
        password.value = passwords[x].password;

        const site_url = document.createElement("input");
        site_url.name = "site_url";
        site_url.value = passwords[x].site_url;

        const site_name = document.createElement("input");
        site_name.name = "site_name";
        site_name.value = passwords[x].site_name;

        const notes = document.createElement("textarea");
        notes.name = "notes";
        notes.value = passwords[x].notes;

        const email = document.createElement("input");
        email.name = "email";
        email.value = passwords[x].email;

        const username = document.createElement("input");
        username.name = "username";
        username.value = passwords[x].username;

        form.appendChild(nickname);
        form.appendChild(password);
        form.appendChild(site_url);
        form.appendChild(site_name);
        form.appendChild(notes);
        form.appendChild(email);
        form.appendChild(username);

        const form_data = new FormData(form);
        await create_password(form_data);
      }
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };

    reader.readAsText(file);
  });

  input.click();
}

function parse_csv(csv_text: string) {
  const lines = csv_text.split("\n");
  const header = lines.shift()?.split(",");
  if (!header) return;

  const csv_data: Password_Object[] = [];

  lines.forEach((e) => {
    const obj: any = {};
    const data = e.split(",");
    for (let x = 0; x < header?.length; x++) {
      obj[header[x]] = data[x];
    }
    csv_data.push(obj);
  });

  return csv_data;
}
