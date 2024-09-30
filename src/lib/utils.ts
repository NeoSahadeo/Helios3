import { base } from "$app/paths";

export async function fetch_passwords(token: string) {
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
  if (base === "") {
    // local
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
  const token = localStorage.getItem("helios3token");
  if (token) {
    try {
      const response = await fetch(url_resolver("api") + "loggedin", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.ok) {
        return true;
      } else {
        localStorage.removeItem("helios3token");
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return false;
  }
}
