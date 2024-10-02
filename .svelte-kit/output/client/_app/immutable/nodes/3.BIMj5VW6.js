import {
  s as Pe,
  n as _e,
  r as be,
  o as Ae,
} from "../chunks/scheduler.Ce_0Mfso.js";
import {
  S as Se,
  i as Ue,
  e as i,
  t as he,
  s as E,
  c as m,
  a as $,
  b as ge,
  d as w,
  f as T,
  l as p,
  g as Q,
  h as n,
  m as we,
  p as Ee,
  j as Te,
  k as De,
  r as V,
  q as Me,
  o as ie,
  B as Re,
  x as Le,
  y as ke,
  z as Be,
  A as Fe,
  v as He,
} from "../chunks/index.BEC4av9B.js";
import { d as Ce, e as qe, f as Oe } from "../chunks/utils.D2i4nqSq.js";
function $e(s) {
  return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function je(s) {
  let e,
    v,
    t,
    f,
    g,
    c = s[0].nickname + "",
    a,
    k,
    l,
    r,
    u = s[0].site_name + "",
    R,
    W,
    N,
    I,
    B,
    Z,
    F,
    x,
    o,
    P,
    H,
    ee,
    C,
    te,
    S,
    q,
    ae,
    U,
    O,
    le,
    b,
    j,
    ne,
    L,
    z,
    se,
    A,
    y,
    ue,
    D,
    X,
    re,
    M,
    Y,
    G,
    oe,
    me;
  return {
    c() {
      (e = i("details")),
        (v = i("summary")),
        (t = i("table")),
        (f = i("tr")),
        (g = i("td")),
        (a = he(c)),
        (k = E()),
        (l = i("tr")),
        (r = i("td")),
        (R = he(u)),
        (W = E()),
        (N = i("form")),
        (I = i("input")),
        (Z = E()),
        (F = i("input")),
        (x = E()),
        (o = i("form")),
        (P = i("input")),
        (ee = E()),
        (C = i("input")),
        (te = E()),
        (S = i("input")),
        (ae = E()),
        (U = i("input")),
        (le = E()),
        (b = i("input")),
        (ne = E()),
        (L = i("input")),
        (se = E()),
        (A = i("textarea")),
        (ue = E()),
        (D = i("input")),
        (re = E()),
        (M = i("input")),
        this.h();
    },
    l(_) {
      e = m(_, "DETAILS", { class: !0, id: !0 });
      var d = $(e);
      v = m(d, "SUMMARY", {});
      var de = $(v);
      t = m(de, "TABLE", {});
      var J = $(t);
      f = m(J, "TR", {});
      var pe = $(f);
      g = m(pe, "TD", {});
      var fe = $(g);
      (a = ge(fe, c)),
        fe.forEach(w),
        pe.forEach(w),
        (k = T(J)),
        (l = m(J, "TR", {}));
      var ce = $(l);
      r = m(ce, "TD", {});
      var ve = $(r);
      (R = ge(ve, u)),
        ve.forEach(w),
        ce.forEach(w),
        J.forEach(w),
        de.forEach(w),
        (W = T(d)),
        (N = m(d, "FORM", {}));
      var K = $(N);
      (I = m(K, "INPUT", { name: !0 })),
        (Z = T(K)),
        (F = m(K, "INPUT", { type: !0 })),
        K.forEach(w),
        (x = T(d)),
        (o = m(d, "FORM", {}));
      var h = $(o);
      (P = m(h, "INPUT", { name: !0 })),
        (ee = T(h)),
        (C = m(h, "INPUT", { type: !0 })),
        (te = T(h)),
        (S = m(h, "INPUT", { name: !0, placeholder: !0 })),
        (ae = T(h)),
        (U = m(h, "INPUT", { name: !0, placeholder: !0 })),
        (le = T(h)),
        (b = m(h, "INPUT", { name: !0, placeholder: !0 })),
        (ne = T(h)),
        (L = m(h, "INPUT", { name: !0 })),
        (se = T(h)),
        (A = m(h, "TEXTAREA", { name: !0, placeholder: !0 })),
        $(A).forEach(w),
        (ue = T(h)),
        (D = m(h, "INPUT", { name: !0, placeholder: !0 })),
        (re = T(h)),
        (M = m(h, "INPUT", { name: !0, placeholder: !0 })),
        h.forEach(w),
        d.forEach(w),
        this.h();
    },
    h() {
      p(I, "name", "id"),
        (I.value = B = s[0].id.toString()),
        (I.hidden = !0),
        p(F, "type", "submit"),
        (F.value = "Delete"),
        p(P, "name", "id"),
        (P.value = H = s[0].id.toString()),
        (P.hidden = !0),
        p(C, "type", "submit"),
        (C.value = "Edit"),
        p(S, "name", "username"),
        (S.value = q = s[0].username),
        p(S, "placeholder", "Username"),
        p(U, "name", "password"),
        (U.value = O = s[0].password),
        p(U, "placeholder", "Password"),
        p(b, "name", "email"),
        (b.value = j = s[0].email),
        p(b, "placeholder", "Email"),
        p(L, "name", "nickname"),
        (L.value = z = s[0].nickname),
        p(A, "name", "notes"),
        p(A, "placeholder", "Notes"),
        (A.value = y = s[0].notes),
        p(D, "name", "site_name"),
        (D.value = X = s[0].site_name),
        p(D, "placeholder", "Site Name"),
        p(M, "name", "site_url"),
        (M.value = Y = s[0].site_url),
        p(M, "placeholder", "Site URL"),
        p(e, "class", "password-container"),
        p(e, "id", (G = s[0].id.toString()));
    },
    m(_, d) {
      Q(_, e, d),
        n(e, v),
        n(v, t),
        n(t, f),
        n(f, g),
        n(g, a),
        n(t, k),
        n(t, l),
        n(l, r),
        n(r, R),
        n(e, W),
        n(e, N),
        n(N, I),
        n(N, Z),
        n(N, F),
        n(e, x),
        n(e, o),
        n(o, P),
        n(o, ee),
        n(o, C),
        n(o, te),
        n(o, S),
        n(o, ae),
        n(o, U),
        n(o, le),
        n(o, b),
        n(o, ne),
        n(o, L),
        n(o, se),
        n(o, A),
        n(o, ue),
        n(o, D),
        n(o, re),
        n(o, M),
        oe ||
          ((me = [we(N, "submit", Ee(s[1])), we(o, "submit", Ee(s[2]))]),
          (oe = !0));
    },
    p(_, [d]) {
      d & 1 && c !== (c = _[0].nickname + "") && Te(a, c),
        d & 1 && u !== (u = _[0].site_name + "") && Te(R, u),
        d & 1 &&
          B !== (B = _[0].id.toString()) &&
          I.value !== B &&
          (I.value = B),
        d & 1 &&
          H !== (H = _[0].id.toString()) &&
          P.value !== H &&
          (P.value = H),
        d & 1 && q !== (q = _[0].username) && S.value !== q && (S.value = q),
        d & 1 && O !== (O = _[0].password) && U.value !== O && (U.value = O),
        d & 1 && j !== (j = _[0].email) && b.value !== j && (b.value = j),
        d & 1 && z !== (z = _[0].nickname) && L.value !== z && (L.value = z),
        d & 1 && y !== (y = _[0].notes) && (A.value = y),
        d & 1 && X !== (X = _[0].site_name) && D.value !== X && (D.value = X),
        d & 1 && Y !== (Y = _[0].site_url) && M.value !== Y && (M.value = Y),
        d & 1 && G !== (G = _[0].id.toString()) && p(e, "id", G);
    },
    i: _e,
    o: _e,
    d(_) {
      _ && w(e), (oe = !1), be(me);
    },
  };
}
function ze(s, e, v) {
  let { _password: t } = e;
  async function f(c) {
    const a = new FormData(c.target);
    (await Ce(a)) != null && document.getElementById(a.get("id")).remove();
  }
  async function g(c) {
    const a = new FormData(c.target);
    await qe(a);
  }
  return (
    (s.$$set = (c) => {
      "_password" in c && v(0, (t = c._password));
    }),
    [t, f, g]
  );
}
class Xe extends Se {
  constructor(e) {
    super(), Ue(this, e, ze, je, Pe, { _password: 0 });
  }
}
function Ne(s, e, v) {
  const t = s.slice();
  return (t[1] = e[v]), t;
}
function Ie(s) {
  let e, v;
  return (
    (e = new Xe({ props: { _password: s[1] } })),
    {
      c() {
        Le(e.$$.fragment);
      },
      l(t) {
        ke(e.$$.fragment, t);
      },
      m(t, f) {
        Be(e, t, f), (v = !0);
      },
      p(t, f) {
        const g = {};
        f & 1 && (g._password = t[1]), e.$set(g);
      },
      i(t) {
        v || (V(e.$$.fragment, t), (v = !0));
      },
      o(t) {
        ie(e.$$.fragment, t), (v = !1);
      },
      d(t) {
        Fe(e, t);
      },
    }
  );
}
function Ye(s) {
  let e,
    v =
      '<div class="logo ml-2"><h1>Helios 3</h1> <span>Created Neo Sahadeo</span></div>',
    t,
    f,
    g,
    c = $e(s[0]),
    a = [];
  for (let l = 0; l < c.length; l += 1) a[l] = Ie(Ne(s, c, l));
  const k = (l) =>
    ie(a[l], 1, 1, () => {
      a[l] = null;
    });
  return {
    c() {
      (e = i("header")), (e.innerHTML = v), (t = E()), (f = i("main"));
      for (let l = 0; l < a.length; l += 1) a[l].c();
      this.h();
    },
    l(l) {
      (e = m(l, "HEADER", { "data-svelte-h": !0 })),
        De(e) !== "svelte-1ind219" && (e.innerHTML = v),
        (t = T(l)),
        (f = m(l, "MAIN", { class: !0 }));
      var r = $(f);
      for (let u = 0; u < a.length; u += 1) a[u].l(r);
      r.forEach(w), this.h();
    },
    h() {
      p(f, "class", "mt-8");
    },
    m(l, r) {
      Q(l, e, r), Q(l, t, r), Q(l, f, r);
      for (let u = 0; u < a.length; u += 1) a[u] && a[u].m(f, null);
      g = !0;
    },
    p(l, [r]) {
      if (r & 1) {
        c = $e(l[0]);
        let u;
        for (u = 0; u < c.length; u += 1) {
          const R = Ne(l, c, u);
          a[u]
            ? (a[u].p(R, r), V(a[u], 1))
            : ((a[u] = Ie(R)), a[u].c(), V(a[u], 1), a[u].m(f, null));
        }
        for (He(), u = c.length; u < a.length; u += 1) k(u);
        Me();
      }
    },
    i(l) {
      if (!g) {
        for (let r = 0; r < c.length; r += 1) V(a[r]);
        g = !0;
      }
    },
    o(l) {
      a = a.filter(Boolean);
      for (let r = 0; r < a.length; r += 1) ie(a[r]);
      g = !1;
    },
    d(l) {
      l && (w(e), w(t), w(f)), Re(a, l);
    },
  };
}
function ye(s, e, v) {
  let t = [];
  return (
    Ae(async () => {
      v(0, (t = await Oe())), console.log(t);
    }),
    [t]
  );
}
class Qe extends Se {
  constructor(e) {
    super(), Ue(this, e, ye, Ye, Pe, {});
  }
}
export { Qe as component };
