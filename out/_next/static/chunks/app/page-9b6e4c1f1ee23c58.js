(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    4225: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 9704));
    },
    9704: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var r = a(7437),
        s = a(2265),
        l = a(7648),
        n = a(5922);
      let o = (e) =>
        e && 0 !== e
          ? e >= 1e9
            ? "$".concat((e / 1e9).toFixed(1), "B")
            : e >= 1e6
              ? "$".concat((e / 1e6).toFixed(1), "M")
              : "$".concat(e.toLocaleString())
          : "$0";
      function i(e) {
        let { market: t, isGrid: a } = e,
          { resolvedTheme: s } = (0, n.F)(),
          i = Math.round(100 * parseFloat(t.yes_price || "0")),
          d = Math.round(100 * parseFloat(t.no_price || "0")),
          c = () =>
            (0, r.jsxs)("div", {
              className:
                "w-full h-10 md:h-11 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex relative shadow-inner border border-gray-300 dark:border-gray-700",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2",
                  style: {
                    width: "".concat(i, "%"),
                    backgroundColor: i > 50 ? "#10b981" : "#34d399",
                  },
                  children: (0, r.jsxs)("span", {
                    className: "drop-shadow-md",
                    children: [i, "\xa2 YES"],
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2",
                  style: {
                    width: "".concat(d, "%"),
                    backgroundColor: d > 50 ? "#ef4444" : "#f87171",
                  },
                  children: (0, r.jsxs)("span", {
                    className: "drop-shadow-md",
                    children: [d, "\xa2 NO"],
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 flex justify-center pointer-events-none",
                  children: (0, r.jsx)("div", {
                    className: "w-px bg-white/30 dark:bg-black/30",
                  }),
                }),
              ],
            });
        return a
          ? (0, r.jsxs)("div", {
              className:
                "group bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 rounded-2xl p-6 hover:border-primary/70 dark:hover:border-primary/60 transition-all shadow-md hover:shadow-2xl flex flex-col h-full",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex justify-between text-xs mb-4",
                  children: [
                    (0, r.jsx)("span", {
                      className: "font-bold text-primary uppercase",
                      children: t.platform,
                    }),
                    (0, r.jsx)("span", {
                      className: "text-gray-500 dark:text-gray-400",
                      children: t.category,
                    }),
                  ],
                }),
                (0, r.jsx)("h3", {
                  className:
                    "text-lg md:text-xl font-bold text-gray-900 dark:text-white line-clamp-3 flex-1 group-hover:text-primary transition",
                  children: t.title,
                }),
                (0, r.jsx)("div", {
                  className: "my-6",
                  children: (0, r.jsx)(c, {}),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex justify-between items-center pt-4 border-t border-gray-300 dark:border-gray-700 mt-auto",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "text-sm text-gray-600 dark:text-gray-400 font-medium",
                      children: o(t.volume),
                    }),
                    (0, r.jsx)(l.default, {
                      href: t.link || "https://polymarket.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-105 transition shadow-lg",
                      children: "Trade Now",
                    }),
                  ],
                }),
              ],
            })
          : (0, r.jsx)(l.default, {
              href: t.link || "https://polymarket.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "block bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 rounded-xl p-4 hover:border-primary/70 dark:hover:border-primary/60 transition-all group shadow-sm hover:shadow-lg",
              children: (0, r.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center gap-2 text-xs",
                        children: [
                          (0, r.jsx)("span", {
                            className: "font-bold text-primary",
                            children: t.platform,
                          }),
                          (0, r.jsx)("span", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: "•",
                          }),
                          (0, r.jsx)("span", {
                            className: "text-cyan-400",
                            children: t.category,
                          }),
                        ],
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "text-gray-500 dark:text-gray-400 text-xs hidden sm:block",
                        children: o(t.volume),
                      }),
                    ],
                  }),
                  (0, r.jsx)("h3", {
                    className:
                      "font-semibold text-gray-900 dark:text-white group-hover:text-primary transition line-clamp-2 text-sm md:text-base",
                    children: t.title,
                  }),
                  (0, r.jsx)(c, {}),
                  (0, r.jsx)("div", {
                    className: "flex justify-end",
                    children: (0, r.jsx)("span", {
                      className:
                        "px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-105 transition shadow-md",
                      children: "Trade Now",
                    }),
                  }),
                ],
              }),
            });
      }
      function d(e) {
        var t;
        let { className: a = "" } = e,
          [l, n] = (0, s.useState)({ platforms: 1, markets: 0, volume24h: 0 }),
          [o, i] = (0, s.useState)(!0);
        return ((0, s.useEffect)(() => {
          fetch("/api/stats")
            .then((e) => e.json())
            .then((e) => {
              n({
                platforms: e.platforms || 1,
                markets: e.markets || 1247,
                volume24h: e.volume24h || 21e8,
              }),
                i(!1);
            })
            .catch(() => {
              n({ platforms: 1, markets: 1247, volume24h: 2147832109 }), i(!1);
            });
        }, []),
        o)
          ? (0, r.jsx)("div", {
              className: "grid grid-cols-3 gap-8 text-center ".concat(a),
              children: [1, 2, 3].map((e) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: "animate-pulse",
                    children: [
                      (0, r.jsx)("div", {
                        className: "h-12 bg-gray-800 rounded w-24 mx-auto mb-2",
                      }),
                      (0, r.jsx)("div", {
                        className: "h-4 bg-gray-800 rounded w-20 mx-auto",
                      }),
                    ],
                  },
                  e,
                ),
              ),
            })
          : (0, r.jsxs)("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center ".concat(
                  a,
                ),
              children: [
                (0, r.jsxs)("div", {
                  className: "group",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent",
                      children:
                        1 === l.platforms ? "1" : "".concat(l.platforms, "+"),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "text-gray-400 text-sm sm:text-base mt-2 uppercase tracking-wider",
                      children: ["Live Platform", l.platforms > 1 && "s"],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "group",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent",
                      children: l.markets.toLocaleString(),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "text-gray-400 text-sm sm:text-base mt-2 uppercase tracking-wider",
                      children: "Active Markets",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "group",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",
                      children:
                        (t = l.volume24h) >= 1e9
                          ? "$".concat((t / 1e9).toFixed(2), "B")
                          : t >= 1e6
                            ? "$".concat((t / 1e6).toFixed(1), "M")
                            : "$".concat(t.toLocaleString()),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "text-gray-400 text-sm sm:text-base mt-2 uppercase tracking-wider",
                      children: "24h Volume",
                    }),
                  ],
                }),
              ],
            });
      }
      function c(e) {
        let { active: t, onChange: a, markets: l } = e,
          n = (0, s.useMemo)(
            () => ["All", ...new Set(l.map((e) => e.category).filter(Boolean))],
            [l],
          );
        return (0, r.jsx)("div", {
          className: "flex flex-wrap justify-center gap-3 mb-12",
          children: n.map((e) =>
            (0, r.jsx)(
              "button",
              {
                onClick: () => a(e),
                className:
                  "px-6 py-3 rounded-full font-medium transition-all ".concat(
                    t === e
                      ? "bg-gradient-to-r from-primary to-accent text-black shadow-lg"
                      : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700",
                  ),
                children: e,
              },
              e,
            ),
          ),
        });
      }
      function m(e) {
        let { isGrid: t, toggle: a } = e;
        return (0, r.jsx)("button", {
          onClick: a,
          className:
            "px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-2xl hover:scale-105 transition shadow-lg whitespace-nowrap",
          children: t ? "List View" : "Grid View",
        });
      }
      function x(e) {
        let { isGrid: t } = e;
        return t
          ? (0, r.jsxs)("div", {
              className:
                "bg-gray-900/80 border border-gray-800 rounded-2xl p-6 animate-pulse",
              children: [
                (0, r.jsx)("div", {
                  className: "h-6 bg-gray-700 rounded w-32 mb-4",
                }),
                (0, r.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, r.jsx)("div", { className: "h-5 bg-gray-700 rounded" }),
                    (0, r.jsx)("div", {
                      className: "h-5 bg-gray-700 rounded w-11/12",
                    }),
                    (0, r.jsx)("div", {
                      className: "h-5 bg-gray-700 rounded w-8/12",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "h-10 bg-gray-700 rounded-full my-6",
                }),
                (0, r.jsxs)("div", {
                  className: "flex justify-between items-center mt-6",
                  children: [
                    (0, r.jsx)("div", {
                      className: "h-6 bg-gray-700 rounded w-20",
                    }),
                    (0, r.jsx)("div", {
                      className: "h-12 bg-gray-700 rounded-full w-32",
                    }),
                  ],
                }),
              ],
            })
          : (0, r.jsxs)("div", {
              className:
                "bg-gray-900/70 border border-gray-800 rounded-xl p-4 animate-pulse",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center justify-between gap-4 mb-3",
                  children: [
                    (0, r.jsx)("div", {
                      className: "h-5 bg-gray-700 rounded w-32",
                    }),
                    (0, r.jsx)("div", {
                      className: "h-10 bg-gray-700 rounded-full w-28",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    (0, r.jsx)("div", { className: "h-5 bg-gray-700 rounded" }),
                    (0, r.jsx)("div", {
                      className: "h-5 bg-gray-700 rounded w-4/5",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "h-10 bg-gray-700 rounded-full mt-4",
                }),
              ],
            });
      }
      function u() {
        let [e, t] = (0, s.useState)([]),
          [a, l] = (0, s.useState)(""),
          [n, o] = (0, s.useState)("All"),
          [u, h] = (0, s.useState)(!0),
          [g, p] = (0, s.useState)("volume"),
          [f, y] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          fetch("/api/markets")
            .then((e) => e.json())
            .then((e) => {
              t(e || []), y(!1);
            })
            .catch(() => y(!1));
        }, []);
        let b = (0, s.useMemo)(() => {
          let t = e
            .filter((e) => e.title.toLowerCase().includes(a.toLowerCase()))
            .filter((e) => "All" === n || e.category === n);
          return (
            t.sort((e, t) =>
              "volume" === g
                ? (t.volume || 0) - (e.volume || 0)
                : "yes" === g
                  ? parseFloat(t.yes_price || "0") -
                    parseFloat(e.yes_price || "0")
                  : e.title.localeCompare(t.title),
            ),
            t
          );
        }, [e, a, n, g]);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("section", {
              className: "relative py-24 lg:py-32 overflow-hidden",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none",
                }),
                (0, r.jsxs)("div", {
                  className: "relative z-10 max-w-7xl mx-auto px-6 text-center",
                  children: [
                    (0, r.jsx)("h1", {
                      className:
                        "text-6xl md:text-8xl font-black hero-gradient",
                      children: "PREDIXIO",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xl md:text-2xl mt-6 text-gray-300",
                      children:
                        "All Prediction Markets • Real-Time • One Dashboard",
                    }),
                    (0, r.jsx)(d, { className: "mt-16" }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("section", {
              className: "relative z-20 max-w-7xl mx-auto px-6 pb-32",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row gap-6 items-center justify-between mb-10",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "relative flex-1 max-w-xl",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg",
                          children: "Search",
                        }),
                        (0, r.jsx)("input", {
                          type: "text",
                          placeholder: "Search any market...",
                          value: a,
                          onChange: (e) => l(e.target.value),
                          className:
                            "w-full pl-16 pr-6 py-5 bg-gray-900/90 border border-gray-800 rounded-2xl text-lg focus:outline-none focus:border-primary transition",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex gap-4",
                      children: [
                        (0, r.jsxs)("select", {
                          value: g,
                          onChange: (e) => p(e.target.value),
                          className:
                            "px-6 py-4 bg-gray-900/90 border border-gray-800 rounded-2xl focus:outline-none focus:border-primary",
                          children: [
                            (0, r.jsx)("option", {
                              value: "volume",
                              children: "Highest Volume",
                            }),
                            (0, r.jsx)("option", {
                              value: "yes",
                              children: "Highest Yes",
                            }),
                            (0, r.jsx)("option", {
                              value: "alpha",
                              children: "A-Z",
                            }),
                          ],
                        }),
                        (0, r.jsx)(m, { isGrid: u, toggle: () => h(!u) }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(c, { active: n, onChange: o, markets: e }),
                (0, r.jsx)("div", {
                  className: u
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-6",
                  children: f
                    ? [...Array(12)].map((e, t) =>
                        (0, r.jsx)(x, { isGrid: u }, t),
                      )
                    : 0 === b.length
                      ? (0, r.jsx)("div", {
                          className:
                            "col-span-full text-center py-24 text-2xl text-gray-500",
                          children: "No markets found",
                        })
                      : b.map((e) =>
                          (0, r.jsx)(i, { market: e, isGrid: u }, e.title),
                        ),
                }),
              ],
            }),
          ],
        });
      }
    },
    7648: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return s.a;
        },
      });
      var r = a(2972),
        s = a.n(r);
    },
    5922: function (e, t, a) {
      "use strict";
      a.d(t, {
        F: function () {
          return c;
        },
        ThemeProvider: function () {
          return m;
        },
      });
      var r = a(2265),
        s = (e, t, a, r, s, l, n, o) => {
          let i = document.documentElement,
            d = ["light", "dark"];
          function c(t) {
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let a = "class" === e,
                r = a && l ? s.map((e) => l[e] || e) : s;
              a
                ? (i.classList.remove(...r),
                  i.classList.add(l && l[t] ? l[t] : t))
                : i.setAttribute(e, t);
            }),
              o && d.includes(t) && (i.style.colorScheme = t);
          }
          if (r) c(r);
          else
            try {
              let e = localStorage.getItem(t) || a,
                r =
                  n && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              c(r);
            } catch (e) {}
        },
        l = ["light", "dark"],
        n = "(prefers-color-scheme: dark)",
        o = "undefined" == typeof window,
        i = r.createContext(void 0),
        d = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null != (e = r.useContext(i)) ? e : d;
        },
        m = (e) =>
          r.useContext(i)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(u, { ...e }),
        x = ["light", "dark"],
        u = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: a = !1,
              enableSystem: s = !0,
              enableColorScheme: o = !0,
              storageKey: d = "theme",
              themes: c = x,
              defaultTheme: m = s ? "system" : "light",
              attribute: u = "data-theme",
              value: y,
              children: b,
              nonce: v,
              scriptProps: j,
            } = e,
            [N, w] = r.useState(() => g(d, m)),
            [k, S] = r.useState(() => ("system" === N ? f() : N)),
            C = y ? Object.values(y) : c,
            E = r.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && s && (t = f());
                let r = y ? y[t] : t,
                  n = a ? p(v) : null,
                  i = document.documentElement,
                  d = (e) => {
                    "class" === e
                      ? (i.classList.remove(...C), r && i.classList.add(r))
                      : e.startsWith("data-") &&
                        (r ? i.setAttribute(e, r) : i.removeAttribute(e));
                  };
                if ((Array.isArray(u) ? u.forEach(d) : d(u), o)) {
                  let e = l.includes(m) ? m : null,
                    a = l.includes(t) ? t : e;
                  i.style.colorScheme = a;
                }
                null == n || n();
              },
              [v],
            ),
            T = r.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(N) : e;
                w(t);
                try {
                  localStorage.setItem(d, t);
                } catch (e) {}
              },
              [N],
            ),
            L = r.useCallback(
              (e) => {
                S(f(e)), "system" === N && s && !t && E("system");
              },
              [N, t],
            );
          r.useEffect(() => {
            let e = window.matchMedia(n);
            return e.addListener(L), L(e), () => e.removeListener(L);
          }, [L]),
            r.useEffect(() => {
              let e = (e) => {
                e.key === d && (e.newValue ? w(e.newValue) : T(m));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [T]),
            r.useEffect(() => {
              E(null != t ? t : N);
            }, [t, N]);
          let A = r.useMemo(
            () => ({
              theme: N,
              setTheme: T,
              forcedTheme: t,
              resolvedTheme: "system" === N ? k : N,
              themes: s ? [...c, "system"] : c,
              systemTheme: s ? k : void 0,
            }),
            [N, T, t, k, s, c],
          );
          return r.createElement(
            i.Provider,
            { value: A },
            r.createElement(h, {
              forcedTheme: t,
              storageKey: d,
              attribute: u,
              enableSystem: s,
              enableColorScheme: o,
              defaultTheme: m,
              value: y,
              themes: c,
              nonce: v,
              scriptProps: j,
            }),
            b,
          );
        },
        h = r.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: a,
              attribute: l,
              enableSystem: n,
              enableColorScheme: o,
              defaultTheme: i,
              value: d,
              themes: c,
              nonce: m,
              scriptProps: x,
            } = e,
            u = JSON.stringify([l, a, i, t, c, d, n, o]).slice(1, -1);
          return r.createElement("script", {
            ...x,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? m : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(s.toString(), ")(").concat(u, ")"),
            },
          });
        }),
        g = (e, t) => {
          let a;
          if (!o) {
            try {
              a = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return a || t;
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
        f = (e) => (
          e || (e = window.matchMedia(n)), e.matches ? "dark" : "light"
        );
    },
  },
  function (e) {
    e.O(0, [972, 971, 117, 744], function () {
      return e((e.s = 4225));
    }),
      (_N_E = e.O());
  },
]);
