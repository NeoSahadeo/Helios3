import { b as i } from "./paths.DJJFl3Fx.js";
async function l() {
  const o = localStorage.getItem("helios3token");
  if (o != null)
    try {
      const e = await fetch(n("api") + "passwords", {
        headers: { Authorization: `Token ${o}` },
      });
      if (e.ok) {
        const r = await e.json();
        return r.error ? void 0 : r;
      }
    } catch (e) {
      console.log(e);
    }
}
function n(o) {
  if (i === "") {
    if (o === "api") return "http://127.0.0.1:8000/";
    if (o === "local") return "http://localhost:5173/";
  }
  return o === "api"
    ? "https://neosahadeo.pythonanywhere.com/"
    : o === "local"
      ? "https://neosahadeo.github.io/Helios3/"
      : "";
}
async function u() {
  const o = localStorage.getItem("helios3token");
  if (!o) return !1;
  try {
    return (
      await fetch(n("api") + "loggedin", {
        headers: { Authorization: `Token ${o}` },
      })
    ).ok
      ? !0
      : (localStorage.removeItem("helios3token"), !1);
  } catch (e) {
    console.error(e);
  }
}
async function a(o, e) {
  const r = localStorage.getItem("helios3token");
  if (r)
    try {
      const t = await fetch(n("api") + "passwords", {
        method: e,
        headers: { Authorization: `Token ${r}` },
        body: o,
      });
      if (t.ok) {
        const s = await t.json();
        return console.log(s), s;
      }
      return;
    } catch (t) {
      console.error(t);
      return;
    }
}
async function h(o) {
  return a(o, "delete");
}
async function f(o) {
  return a(o, "put");
}
export { h as d, f as e, l as f, u as i, n as u };
