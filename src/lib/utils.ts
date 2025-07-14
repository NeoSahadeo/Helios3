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
    return "https://neosahadeo.github.io/Helios3/";
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
    if (this.events[name]) {
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
