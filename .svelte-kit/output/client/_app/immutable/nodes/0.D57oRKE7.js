import {
  s as g,
  n as u,
  o as S,
  q as T,
  u as z,
  v as D,
  w as H,
} from "../chunks/scheduler.Ce_0Mfso.js";
import {
  S as h,
  i as v,
  e as b,
  c as w,
  k as M,
  l as p,
  g as $,
  d as m,
  x as k,
  a as I,
  y as x,
  z as j,
  r as _,
  o as d,
  A as q,
  s as N,
  n as L,
  f as V,
  q as O,
  v as A,
} from "../chunks/index.BEC4av9B.js";
import { i as E, u as P } from "../chunks/utils.D2i4nqSq.js";
const B = !0,
  ne = Object.freeze(
    Object.defineProperty(
      { __proto__: null, prerender: B },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
function F(l) {
  let e,
    o = "<p>Helios3 is loading...</p> <p>[Log]:</p>";
  return {
    c() {
      (e = b("div")), (e.innerHTML = o), this.h();
    },
    l(t) {
      (e = w(t, "DIV", { id: !0, class: !0, "data-svelte-h": !0 })),
        M(e) !== "svelte-1uiyadt" && (e.innerHTML = o),
        this.h();
    },
    h() {
      p(e, "id", "loading"), p(e, "class", "svelte-1oo8a4x");
    },
    m(t, n) {
      $(t, e, n);
    },
    p: u,
    i: u,
    o: u,
    d(t) {
      t && m(e);
    },
  };
}
class G extends h {
  constructor(e) {
    super(), v(this, e, null, F, g, {});
  }
}
function J(l) {
  let e,
    o = "This is a notification";
  return {
    c() {
      (e = b("div")), (e.textContent = o), this.h();
    },
    l(t) {
      (e = w(t, "DIV", { class: !0, "data-svelte-h": !0 })),
        M(e) !== "svelte-ijqjpk" && (e.textContent = o),
        this.h();
    },
    h() {
      p(e, "class", "notify");
    },
    m(t, n) {
      $(t, e, n);
    },
    p: u,
    i: u,
    o: u,
    d(t) {
      t && m(e);
    },
  };
}
class K extends h {
  constructor(e) {
    super(), v(this, e, null, J, g, {});
  }
}
function Q(l) {
  let e, o, t;
  return (
    (o = new K({})),
    {
      c() {
        (e = b("div")), k(o.$$.fragment), this.h();
      },
      l(n) {
        e = w(n, "DIV", { id: !0, class: !0 });
        var r = I(e);
        x(o.$$.fragment, r), r.forEach(m), this.h();
      },
      h() {
        p(e, "id", "notify-container"), p(e, "class", "svelte-pzqj0");
      },
      m(n, r) {
        $(n, e, r), j(o, e, null), (t = !0);
      },
      p: u,
      i(n) {
        t || (_(o.$$.fragment, n), (t = !0));
      },
      o(n) {
        d(o.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && m(e), q(o);
      },
    }
  );
}
class R extends h {
  constructor(e) {
    super(), v(this, e, null, Q, g, {});
  }
}
function U(l) {
  let e;
  const o = l[2].default,
    t = T(o, l, l[1], null);
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, r) {
      t && t.m(n, r), (e = !0);
    },
    p(n, r) {
      t &&
        t.p &&
        (!e || r & 2) &&
        z(t, o, n, n[1], e ? H(o, n[1], r, null) : D(n[1]), null);
    },
    i(n) {
      e || (_(t, n), (e = !0));
    },
    o(n) {
      d(t, n), (e = !1);
    },
    d(n) {
      t && t.d(n);
    },
  };
}
function W(l) {
  let e, o;
  return (
    (e = new G({})),
    {
      c() {
        k(e.$$.fragment);
      },
      l(t) {
        x(e.$$.fragment, t);
      },
      m(t, n) {
        j(e, t, n), (o = !0);
      },
      p: u,
      i(t) {
        o || (_(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        d(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function X(l) {
  let e, o, t, n, r, i;
  e = new R({});
  const f = [W, U],
    a = [];
  function C(s, c) {
    return s[0] ? 0 : 1;
  }
  return (
    (t = C(l)),
    (n = a[t] = f[t](l)),
    {
      c() {
        k(e.$$.fragment), (o = N()), n.c(), (r = L());
      },
      l(s) {
        x(e.$$.fragment, s), (o = V(s)), n.l(s), (r = L());
      },
      m(s, c) {
        j(e, s, c), $(s, o, c), a[t].m(s, c), $(s, r, c), (i = !0);
      },
      p(s, [c]) {
        let y = t;
        (t = C(s)),
          t === y
            ? a[t].p(s, c)
            : (A(),
              d(a[y], 1, 1, () => {
                a[y] = null;
              }),
              O(),
              (n = a[t]),
              n ? n.p(s, c) : ((n = a[t] = f[t](s)), n.c()),
              _(n, 1),
              n.m(r.parentNode, r));
      },
      i(s) {
        i || (_(e.$$.fragment, s), _(n), (i = !0));
      },
      o(s) {
        d(e.$$.fragment, s), d(n), (i = !1);
      },
      d(s) {
        s && (m(o), m(r)), q(e, s), a[t].d(s);
      },
    }
  );
}
function Y(l, e, o) {
  let { $$slots: t = {}, $$scope: n } = e,
    r = !0;
  return (
    S(async () => {
      const i = await E();
      o(0, (r = !1));
      const f = P("local");
      i
        ? window.location.href == f && (window.location.href = f + "home")
        : window.location.href != f && (window.location.href = f);
    }),
    (l.$$set = (i) => {
      "$$scope" in i && o(1, (n = i.$$scope));
    }),
    [r, n, t]
  );
}
class oe extends h {
  constructor(e) {
    super(), v(this, e, Y, X, g, {});
  }
}
export { oe as component, ne as universal };
