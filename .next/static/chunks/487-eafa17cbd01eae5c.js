"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [487],
  {
    7648: function (e, t, n) {
      n.d(t, {
        default: function () {
          return a.a;
        },
      });
      var r = n(2972),
        a = n.n(r);
    },
    5922: function (e, t, n) {
      n.d(t, {
        F: function () {
          return m;
        },
        ThemeProvider: function () {
          return u;
        },
      });
      var r = n(2265),
        a = (e, t, n, r, a, o, s, l) => {
          let i = document.documentElement,
            c = ["light", "dark"];
          function m(t) {
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let n = "class" === e,
                r = n && o ? a.map((e) => o[e] || e) : a;
              n
                ? (i.classList.remove(...r),
                  i.classList.add(o && o[t] ? o[t] : t))
                : i.setAttribute(e, t);
            }),
              l && c.includes(t) && (i.style.colorScheme = t);
          }
          if (r) m(r);
          else
            try {
              let e = localStorage.getItem(t) || n,
                r =
                  s && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              m(r);
            } catch (e) {}
        },
        o = ["light", "dark"],
        s = "(prefers-color-scheme: dark)",
        l = "undefined" == typeof window,
        i = r.createContext(void 0),
        c = { setTheme: (e) => {}, themes: [] },
        m = () => {
          var e;
          return null != (e = r.useContext(i)) ? e : c;
        },
        u = (e) =>
          r.useContext(i)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(h, { ...e }),
        d = ["light", "dark"],
        h = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: a = !0,
              enableColorScheme: l = !0,
              storageKey: c = "theme",
              themes: m = d,
              defaultTheme: u = a ? "system" : "light",
              attribute: h = "data-theme",
              value: g,
              children: v,
              nonce: w,
              scriptProps: E,
            } = e,
            [S, k] = r.useState(() => y(c, u)),
            [C, T] = r.useState(() => ("system" === S ? b() : S)),
            L = g ? Object.values(g) : m,
            A = r.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && a && (t = b());
                let r = g ? g[t] : t,
                  s = n ? p(w) : null,
                  i = document.documentElement,
                  c = (e) => {
                    "class" === e
                      ? (i.classList.remove(...L), r && i.classList.add(r))
                      : e.startsWith("data-") &&
                        (r ? i.setAttribute(e, r) : i.removeAttribute(e));
                  };
                if ((Array.isArray(h) ? h.forEach(c) : c(h), l)) {
                  let e = o.includes(u) ? u : null,
                    n = o.includes(t) ? t : e;
                  i.style.colorScheme = n;
                }
                null == s || s();
              },
              [w],
            ),
            _ = r.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(S) : e;
                k(t);
                try {
                  localStorage.setItem(c, t);
                } catch (e) {}
              },
              [S],
            ),
            M = r.useCallback(
              (e) => {
                T(b(e)), "system" === S && a && !t && A("system");
              },
              [S, t],
            );
          r.useEffect(() => {
            let e = window.matchMedia(s);
            return e.addListener(M), M(e), () => e.removeListener(M);
          }, [M]),
            r.useEffect(() => {
              let e = (e) => {
                e.key === c && (e.newValue ? k(e.newValue) : _(u));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [_]),
            r.useEffect(() => {
              A(null != t ? t : S);
            }, [t, S]);
          let P = r.useMemo(
            () => ({
              theme: S,
              setTheme: _,
              forcedTheme: t,
              resolvedTheme: "system" === S ? C : S,
              themes: a ? [...m, "system"] : m,
              systemTheme: a ? C : void 0,
            }),
            [S, _, t, C, a, m],
          );
          return r.createElement(
            i.Provider,
            { value: P },
            r.createElement(f, {
              forcedTheme: t,
              storageKey: c,
              attribute: h,
              enableSystem: a,
              enableColorScheme: l,
              defaultTheme: u,
              value: g,
              themes: m,
              nonce: w,
              scriptProps: E,
            }),
            v,
          );
        },
        f = r.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: n,
              attribute: o,
              enableSystem: s,
              enableColorScheme: l,
              defaultTheme: i,
              value: c,
              themes: m,
              nonce: u,
              scriptProps: d,
            } = e,
            h = JSON.stringify([o, n, i, t, m, c, s, l]).slice(1, -1);
          return r.createElement("script", {
            ...d,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? u : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(a.toString(), ")(").concat(h, ")"),
            },
          });
        }),
        y = (e, t) => {
          let n;
          if (!l) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        p = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
              ),
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        b = (e) => (
          e || (e = window.matchMedia(s)), e.matches ? "dark" : "light"
        );
    },
    8287: function (e, t, n) {
      n(2265);
    },
    4299: function (e, t, n) {
      n(7437);
      var r = n(2265);
      "u" > typeof window ? r.useLayoutEffect : r.useEffect;
    },
  },
]);
