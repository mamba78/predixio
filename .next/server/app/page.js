(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      586: (e, r, t) => {
        "use strict";
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => m,
            originalPathname: () => x,
            pages: () => c,
            routeModule: () => g,
            tree: () => d,
          }),
          t(8646),
          t(8168),
          t(546);
        var a = t(170),
          s = t(5002),
          l = t(3876),
          i = t.n(l),
          o = t(6299),
          n = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (n[e] = () => o[e]);
        t.d(r, n);
        let d = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(t.bind(t, 8646)),
                    "/workspaces/predixio/app/page.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 8168)),
                "/workspaces/predixio/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.bind(t, 546)),
                "/workspaces/predixio/app/not-found.tsx",
              ],
            },
          ],
          c = ["/workspaces/predixio/app/page.tsx"],
          x = "/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          g = new a.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      19: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 8593));
      },
      8593: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => b });
        var a = {};
        t.r(a);
        var s = {};
        t.r(s);
        var l = t(7247),
          i = t(8964);
        "u" > typeof window ? i.useLayoutEffect : i.useEffect;
        let o = null;
        function n(e, r = "Assertion error") {
          if (!e) throw (console.error(r), Error(r));
        }
        var d = t(9906),
          c = t(7797);
        let x = (e) =>
          e && 0 !== e
            ? e >= 1e9
              ? `$${(e / 1e9).toFixed(1)}B`
              : e >= 1e6
                ? `$${(e / 1e6).toFixed(1)}M`
                : `$${e.toLocaleString()}`
            : "$0";
        function m({ market: e, isGrid: r }) {
          let { resolvedTheme: t } = (0, c.F)(),
            a = Math.round(100 * parseFloat(e.yes_price || "0")),
            s = Math.round(100 * parseFloat(e.no_price || "0")),
            i = () =>
              (0, l.jsxs)("div", {
                className:
                  "w-full h-10 md:h-11 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex relative shadow-inner border border-gray-300 dark:border-gray-700",
                children: [
                  l.jsx("div", {
                    className:
                      "flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2",
                    style: {
                      width: `${a}%`,
                      backgroundColor: a > 50 ? "#10b981" : "#34d399",
                    },
                    children: (0, l.jsxs)("span", {
                      className: "drop-shadow-md",
                      children: [a, "\xa2 YES"],
                    }),
                  }),
                  l.jsx("div", {
                    className:
                      "flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2",
                    style: {
                      width: `${s}%`,
                      backgroundColor: s > 50 ? "#ef4444" : "#f87171",
                    },
                    children: (0, l.jsxs)("span", {
                      className: "drop-shadow-md",
                      children: [s, "\xa2 NO"],
                    }),
                  }),
                  l.jsx("div", {
                    className:
                      "absolute inset-0 flex justify-center pointer-events-none",
                    children: l.jsx("div", {
                      className: "w-px bg-white/30 dark:bg-black/30",
                    }),
                  }),
                ],
              });
          return r
            ? (0, l.jsxs)("div", {
                className:
                  "group bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 rounded-2xl p-6 hover:border-primary/70 dark:hover:border-primary/60 transition-all shadow-md hover:shadow-2xl flex flex-col h-full",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex justify-between text-xs mb-4",
                    children: [
                      l.jsx("span", {
                        className: "font-bold text-primary uppercase",
                        children: e.platform,
                      }),
                      l.jsx("span", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: e.category,
                      }),
                    ],
                  }),
                  l.jsx("h3", {
                    className:
                      "text-lg md:text-xl font-bold text-gray-900 dark:text-white line-clamp-3 flex-1 group-hover:text-primary transition",
                    children: e.title,
                  }),
                  l.jsx("div", { className: "my-6", children: l.jsx(i, {}) }),
                  (0, l.jsxs)("div", {
                    className:
                      "flex justify-between items-center pt-4 border-t border-gray-300 dark:border-gray-700 mt-auto",
                    children: [
                      l.jsx("span", {
                        className:
                          "text-sm text-gray-600 dark:text-gray-400 font-medium",
                        children: x(e.volume),
                      }),
                      l.jsx(d.default, {
                        href: e.link || "https://polymarket.com",
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
            : l.jsx(d.default, {
                href: e.link || "https://polymarket.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "block bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 rounded-xl p-4 hover:border-primary/70 dark:hover:border-primary/60 transition-all group shadow-sm hover:shadow-lg",
                children: (0, l.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "flex items-center justify-between gap-3",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex items-center gap-2 text-xs",
                          children: [
                            l.jsx("span", {
                              className: "font-bold text-primary",
                              children: e.platform,
                            }),
                            l.jsx("span", {
                              className: "text-gray-500 dark:text-gray-400",
                              children: "•",
                            }),
                            l.jsx("span", {
                              className: "text-cyan-400",
                              children: e.category,
                            }),
                          ],
                        }),
                        l.jsx("span", {
                          className:
                            "text-gray-500 dark:text-gray-400 text-xs hidden sm:block",
                          children: x(e.volume),
                        }),
                      ],
                    }),
                    l.jsx("h3", {
                      className:
                        "font-semibold text-gray-900 dark:text-white group-hover:text-primary transition line-clamp-2 text-sm md:text-base",
                      children: e.title,
                    }),
                    l.jsx(i, {}),
                    l.jsx("div", {
                      className: "flex justify-end",
                      children: l.jsx("span", {
                        className:
                          "px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-105 transition shadow-md",
                        children: "Trade Now",
                      }),
                    }),
                  ],
                }),
              });
        }
        function g({ className: e = "" }) {
          var r;
          let [t, a] = (0, i.useState)({
              platforms: 1,
              markets: 0,
              volume24h: 0,
            }),
            [s, o] = (0, i.useState)(!0);
          return s
            ? l.jsx("div", {
                className: `grid grid-cols-3 gap-8 text-center ${e}`,
                children: [1, 2, 3].map((e) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      className: "animate-pulse",
                      children: [
                        l.jsx("div", {
                          className:
                            "h-12 bg-gray-800 rounded w-24 mx-auto mb-2",
                        }),
                        l.jsx("div", {
                          className: "h-4 bg-gray-800 rounded w-20 mx-auto",
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              })
            : (0, l.jsxs)("div", {
                className: `grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center ${e}`,
                children: [
                  (0, l.jsxs)("div", {
                    className: "group",
                    children: [
                      l.jsx("div", {
                        className:
                          "text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent",
                        children: 1 === t.platforms ? "1" : `${t.platforms}+`,
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "text-gray-400 text-sm sm:text-base mt-2 uppercase tracking-wider",
                        children: ["Live Platform", t.platforms > 1 && "s"],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "group",
                    children: [
                      l.jsx("div", {
                        className:
                          "text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent",
                        children: t.markets.toLocaleString(),
                      }),
                      l.jsx("div", {
                        className:
                          "text-gray-400 text-sm sm:text-base mt-2 uppercase tracking-wider",
                        children: "Active Markets",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "group",
                    children: [
                      l.jsx("div", {
                        className:
                          "text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",
                        children:
                          (r = t.volume24h) >= 1e9
                            ? `$${(r / 1e9).toFixed(2)}B`
                            : r >= 1e6
                              ? `$${(r / 1e6).toFixed(1)}M`
                              : `$${r.toLocaleString()}`,
                      }),
                      l.jsx("div", {
                        className:
                          "text-gray-400 text-sm sm:text-base mt-2 uppercase tracking-wider",
                        children: "24h Volume",
                      }),
                    ],
                  }),
                ],
              });
        }
        function p({ active: e, onChange: r, markets: t }) {
          let a = (0, i.useMemo)(
            () => ["All", ...new Set(t.map((e) => e.category).filter(Boolean))],
            [t],
          );
          return l.jsx("div", {
            className: "flex flex-wrap justify-center gap-3 mb-12",
            children: a.map((t) =>
              l.jsx(
                "button",
                {
                  onClick: () => r(t),
                  className: `px-6 py-3 rounded-full font-medium transition-all ${e === t ? "bg-gradient-to-r from-primary to-accent text-black shadow-lg" : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,
                  children: t,
                },
                t,
              ),
            ),
          });
        }
        function u({ isGrid: e, toggle: r }) {
          return l.jsx("button", {
            onClick: r,
            className:
              "px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-2xl hover:scale-105 transition shadow-lg whitespace-nowrap",
            children: e ? "List View" : "Grid View",
          });
        }
        function h({ isGrid: e }) {
          return e
            ? (0, l.jsxs)("div", {
                className:
                  "bg-gray-900/80 border border-gray-800 rounded-2xl p-6 animate-pulse",
                children: [
                  l.jsx("div", {
                    className: "h-6 bg-gray-700 rounded w-32 mb-4",
                  }),
                  (0, l.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      l.jsx("div", { className: "h-5 bg-gray-700 rounded" }),
                      l.jsx("div", {
                        className: "h-5 bg-gray-700 rounded w-11/12",
                      }),
                      l.jsx("div", {
                        className: "h-5 bg-gray-700 rounded w-8/12",
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "h-10 bg-gray-700 rounded-full my-6",
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex justify-between items-center mt-6",
                    children: [
                      l.jsx("div", {
                        className: "h-6 bg-gray-700 rounded w-20",
                      }),
                      l.jsx("div", {
                        className: "h-12 bg-gray-700 rounded-full w-32",
                      }),
                    ],
                  }),
                ],
              })
            : (0, l.jsxs)("div", {
                className:
                  "bg-gray-900/70 border border-gray-800 rounded-xl p-4 animate-pulse",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center justify-between gap-4 mb-3",
                    children: [
                      l.jsx("div", {
                        className: "h-5 bg-gray-700 rounded w-32",
                      }),
                      l.jsx("div", {
                        className: "h-10 bg-gray-700 rounded-full w-28",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      l.jsx("div", { className: "h-5 bg-gray-700 rounded" }),
                      l.jsx("div", {
                        className: "h-5 bg-gray-700 rounded w-4/5",
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "h-10 bg-gray-700 rounded-full mt-4",
                  }),
                ],
              });
        }
        function b() {
          let [e, r] = (0, i.useState)([]),
            [t, o] = (0, i.useState)(""),
            [n, d] = (0, i.useState)("All"),
            [c, x] = (0, i.useState)(!0),
            [b, y] = (0, i.useState)("volume"),
            [f, v] = (0, i.useState)(!0),
            j = (0, i.useMemo)(() => {
              let r = e
                .filter((e) => e.title.toLowerCase().includes(t.toLowerCase()))
                .filter((e) => "All" === n || e.category === n);
              return (
                r.sort((e, r) =>
                  "volume" === b
                    ? (r.volume || 0) - (e.volume || 0)
                    : "yes" === b
                      ? parseFloat(r.yes_price || "0") -
                        parseFloat(e.yes_price || "0")
                      : e.title.localeCompare(r.title),
                ),
                r
              );
            }, [e, t, n, b]),
            N = j.length,
            w = ({ index: e, style: r }) => {
              let t = j[e];
              return l.jsx("div", {
                style: r,
                className: "px-6",
                children: t
                  ? l.jsx(m, { market: t, isGrid: c })
                  : l.jsx(h, { isGrid: c }),
              });
            };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("section", {
                className: "relative py-24 lg:py-32 overflow-hidden",
                children: [
                  l.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none",
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "relative z-10 max-w-7xl mx-auto px-6 text-center",
                    children: [
                      l.jsx("h1", {
                        className:
                          "text-6xl md:text-8xl font-black hero-gradient",
                        children: "PREDIXIO",
                      }),
                      l.jsx("p", {
                        className: "text-xl md:text-2xl mt-6 text-gray-300",
                        children:
                          "All Prediction Markets • Real-Time • One Dashboard",
                      }),
                      l.jsx(g, { className: "mt-16" }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("section", {
                className: "relative z-20 max-w-7xl mx-auto px-6 pb-32",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row gap-6 items-center justify-between mb-10",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "relative flex-1 max-w-xl",
                        children: [
                          l.jsx("span", {
                            className:
                              "absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg",
                            children: "Search",
                          }),
                          l.jsx("input", {
                            type: "text",
                            placeholder: "Search any market...",
                            value: t,
                            onChange: (e) => o(e.target.value),
                            className:
                              "w-full pl-16 pr-6 py-5 bg-gray-900/90 border border-gray-800 rounded-2xl text-lg focus:outline-none focus:border-primary transition",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                          (0, l.jsxs)("select", {
                            value: b,
                            onChange: (e) => y(e.target.value),
                            className:
                              "px-6 py-4 bg-gray-900/90 border border-gray-800 rounded-2xl focus:outline-none focus:border-primary",
                            children: [
                              l.jsx("option", {
                                value: "volume",
                                children: "Highest Volume",
                              }),
                              l.jsx("option", {
                                value: "yes",
                                children: "Highest Yes",
                              }),
                              l.jsx("option", {
                                value: "alpha",
                                children: "A-Z",
                              }),
                            ],
                          }),
                          l.jsx(u, { isGrid: c, toggle: () => x(!c) }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx(p, { active: n, onChange: d, markets: e }),
                  f
                    ? l.jsx("div", {
                        className: c
                          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                          : "space-y-6",
                        children: [...Array(12)].map((e, r) =>
                          l.jsx(h, { isGrid: c }, r),
                        ),
                      })
                    : l.jsx(s.default, {
                        isItemLoaded: (e) => e < j.length,
                        itemCount: N,
                        loadMoreItems: () => Promise.resolve(),
                        children: ({ onItemsRendered: e, ref: r }) =>
                          l.jsx(a.FixedSizeList, {
                            height: window.innerHeight - 300,
                            itemCount: N,
                            itemSize: 420,
                            width: "100%",
                            onItemsRendered: e,
                            ref: r,
                            children: w,
                          }),
                      }),
                ],
              }),
            ],
          });
        }
      },
      8646: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => a });
        let a = (0, t(5347).createProxy)(
          String.raw`/workspaces/predixio/app/page.tsx#default`,
        );
      },
    });
  var r = require("../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    a = r.X(0, [379, 898, 331], () => t(586));
  module.exports = a;
})();
