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
        l = a(4299),
        n = a(8287),
        i = a(7648),
        o = a(5922);
      let d = (e) =>
        e && 0 !== e
          ? e >= 1e9
            ? "$".concat((e / 1e9).toFixed(1), "B")
            : e >= 1e6
              ? "$".concat((e / 1e6).toFixed(1), "M")
              : "$".concat(e.toLocaleString())
          : "$0";
      function c(e) {
        let { market: t, isGrid: a } = e,
          { resolvedTheme: s } = (0, o.F)(),
          l = Math.round(100 * parseFloat(t.yes_price || "0")),
          n = Math.round(100 * parseFloat(t.no_price || "0")),
          c = () =>
            (0, r.jsxs)("div", {
              className:
                "w-full h-10 md:h-11 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex relative shadow-inner border border-gray-300 dark:border-gray-700",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2",
                  style: {
                    width: "".concat(l, "%"),
                    backgroundColor: l > 50 ? "#10b981" : "#34d399",
                  },
                  children: (0, r.jsxs)("span", {
                    className: "drop-shadow-md",
                    children: [l, "\xa2 YES"],
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2",
                  style: {
                    width: "".concat(n, "%"),
                    backgroundColor: n > 50 ? "#ef4444" : "#f87171",
                  },
                  children: (0, r.jsxs)("span", {
                    className: "drop-shadow-md",
                    children: [n, "\xa2 NO"],
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
                      children: d(t.volume),
                    }),
                    (0, r.jsx)(i.default, {
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
          : (0, r.jsx)(i.default, {
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
                        children: d(t.volume),
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
      function x(e) {
        var t;
        let { className: a = "" } = e,
          [l, n] = (0, s.useState)({ platforms: 1, markets: 0, volume24h: 0 }),
          [i, o] = (0, s.useState)(!0);
        return ((0, s.useEffect)(() => {
          fetch("/api/stats")
            .then((e) => e.json())
            .then((e) => {
              n({
                platforms: e.platforms || 1,
                markets: e.markets || 1247,
                volume24h: e.volume24h || 21e8,
              }),
                o(!1);
            })
            .catch(() => {
              n({ platforms: 1, markets: 1247, volume24h: 2147832109 }), o(!1);
            });
        }, []),
        i)
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
      function m(e) {
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
      function g(e) {
        let { isGrid: t, toggle: a } = e;
        return (0, r.jsx)("button", {
          onClick: a,
          className:
            "px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-2xl hover:scale-105 transition shadow-lg whitespace-nowrap",
          children: t ? "List View" : "Grid View",
        });
      }
      function h(e) {
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
          [a, i] = (0, s.useState)(""),
          [o, d] = (0, s.useState)("All"),
          [u, p] = (0, s.useState)(!0),
          [f, b] = (0, s.useState)("volume"),
          [y, v] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          fetch("/api/markets")
            .then((e) => e.json())
            .then((e) => {
              t(e || []), v(!1);
            })
            .catch(() => v(!1));
        }, []);
        let j = (0, s.useMemo)(() => {
          let t = e
            .filter((e) => e.title.toLowerCase().includes(a.toLowerCase()))
            .filter((e) => "All" === o || e.category === o);
          return (
            t.sort((e, t) =>
              "volume" === f
                ? (t.volume || 0) - (e.volume || 0)
                : "yes" === f
                  ? parseFloat(t.yes_price || "0") -
                    parseFloat(e.yes_price || "0")
                  : e.title.localeCompare(t.title),
            ),
            t
          );
        }, [e, a, o, f]);
        (0, s.useEffect)(() => {
          window.scrollTo(0, 0);
        }, [a, o, f]);
        let N = j.length,
          w = (e) => {
            let { index: t, style: a } = e,
              s = j[t];
            return (0, r.jsx)("div", {
              style: a,
              className: "px-6",
              children: s
                ? (0, r.jsx)(c, { market: s, isGrid: u })
                : (0, r.jsx)(h, { isGrid: u }),
            });
          };
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
                    (0, r.jsx)(x, { className: "mt-16" }),
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
                          onChange: (e) => i(e.target.value),
                          className:
                            "w-full pl-16 pr-6 py-5 bg-gray-900/90 border border-gray-800 rounded-2xl text-lg focus:outline-none focus:border-primary transition",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex gap-4",
                      children: [
                        (0, r.jsxs)("select", {
                          value: f,
                          onChange: (e) => b(e.target.value),
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
                        (0, r.jsx)(g, { isGrid: u, toggle: () => p(!u) }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(m, { active: o, onChange: d, markets: e }),
                y
                  ? (0, r.jsx)("div", {
                      className: u
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        : "space-y-6",
                      children: [...Array(12)].map((e, t) =>
                        (0, r.jsx)(h, { isGrid: u }, t),
                      ),
                    })
                  : (0, r.jsx)(n.default, {
                      isItemLoaded: (e) => e < j.length,
                      itemCount: N,
                      loadMoreItems: () => Promise.resolve(),
                      children: (e) => {
                        let { onItemsRendered: t, ref: a } = e;
                        return (0, r.jsx)(l.FixedSizeList, {
                          height: window.innerHeight - 300,
                          itemCount: N,
                          itemSize: 420,
                          width: "100%",
                          onItemsRendered: t,
                          ref: a,
                          children: w,
                        });
                      },
                    }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [972, 487, 971, 117, 744], function () {
      return e((e.s = 4225));
    }),
      (_N_E = e.O());
  },
]);
