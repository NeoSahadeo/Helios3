import { s as T, n as g, r as j } from "../chunks/scheduler.Ce_0Mfso.js";
import {
  S as D,
  i as I,
  e as r,
  s as x,
  c,
  k as m,
  f as C,
  a as L,
  d as u,
  l as w,
  g as b,
  h as d,
  m as M,
  p as N,
} from "../chunks/index.BEC4av9B.js";
import { u as P } from "../chunks/utils.D2i4nqSq.js";
function F(h) {
  let t,
    p = "Message",
    l,
    e,
    s,
    k = "Helios 3",
    f,
    i,
    y = "Created Neo Sahadeo",
    v,
    a,
    S =
      '<input type="text" name="username" placeholder="Username"/> <input type="password" name="password" placeholder="Password"/> <p>Remember Session?</p> <label class="switch"><input type="checkbox" name="session" id="session" checked=""/> <span class="slider round"></span></label> <input type="submit" value="Log In"/>',
    _,
    H;
  return {
    c() {
      (t = r("button")),
        (t.textContent = p),
        (l = x()),
        (e = r("div")),
        (s = r("h1")),
        (s.textContent = k),
        (f = x()),
        (i = r("span")),
        (i.textContent = y),
        (v = x()),
        (a = r("form")),
        (a.innerHTML = S),
        this.h();
    },
    l(o) {
      (t = c(o, "BUTTON", { "data-svelte-h": !0 })),
        m(t) !== "svelte-1jc0a81" && (t.textContent = p),
        (l = C(o)),
        (e = c(o, "DIV", { class: !0 }));
      var n = L(e);
      (s = c(n, "H1", { "data-svelte-h": !0 })),
        m(s) !== "svelte-v46f9k" && (s.textContent = k),
        (f = C(n)),
        (i = c(n, "SPAN", { "data-svelte-h": !0 })),
        m(i) !== "svelte-1li5tu8" && (i.textContent = y),
        (v = C(n)),
        (a = c(n, "FORM", { class: !0, id: !0, "data-svelte-h": !0 })),
        m(a) !== "svelte-i87w0r" && (a.innerHTML = S),
        n.forEach(u),
        this.h();
    },
    h() {
      w(a, "class", "mt-12"),
        w(a, "id", "login"),
        w(e, "class", "logo login rounded-md shadow-lg");
    },
    m(o, n) {
      b(o, t, n),
        b(o, l, n),
        b(o, e, n),
        d(e, s),
        d(e, f),
        d(e, i),
        d(e, v),
        d(e, a),
        _ ||
          ((H = [M(t, "click", gen_message), M(a, "submit", N(h[0]))]),
          (_ = !0));
    },
    p: g,
    i: g,
    o: g,
    d(o) {
      o && (u(t), u(l), u(e)), (_ = !1), j(H);
    },
  };
}
function O(h) {
  async function t(p) {
    const l = new FormData(p.target),
      e = await fetch(P("api") + "login", { method: "post", body: l });
    if (e.ok) {
      const s = await e.json();
      console.log(s),
        s.token &&
          (localStorage.setItem("helios3token", s.token),
          (window.location.href = "home"));
    }
  }
  return [t];
}
class q extends D {
  constructor(t) {
    super(), I(this, t, O, F, T, {});
  }
}
export { q as component };
