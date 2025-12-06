(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    643: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 7960, 23)),
        Promise.resolve().then(r.bind(r, 5332)),
        Promise.resolve().then(r.bind(r, 3747)),
        Promise.resolve().then(r.bind(r, 710)),
        Promise.resolve().then(r.bind(r, 5922)),
        Promise.resolve().then(r.t.bind(r, 8444, 23));
    },
    5332: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i;
        },
      });
      var n = r(7437),
        a = r(3747);
      function i() {
        let { setOpen: e } = (0, a.d)();
        return (0, n.jsx)("footer", {
          className:
            "border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500",
          children: (0, n.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              (0, n.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-6",
                children: [
                  (0, n.jsx)("button", {
                    onClick: () => e("terms"),
                    className: "hover:text-cyan-400 transition",
                    children: "Terms",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => e("privacy"),
                    className: "hover:text-cyan-400 transition",
                    children: "Privacy",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => e("cookies"),
                    className: "hover:text-cyan-400 transition",
                    children: "Cookies",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => e("disclaimer"),
                    className: "hover:text-cyan-400 transition",
                    children: "Disclaimer",
                  }),
                ],
              }),
              (0, n.jsx)("p", {
                className: "mt-4 text-xs",
                children: "\xa9 2025 Predixio • Not financial advice • 18+",
              }),
            ],
          }),
        });
      }
    },
    3747: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        default: function () {
          return m;
        },
        d: function () {
          return d;
        },
      });
      var a = r(7437),
        i = r(2265);
      let s = (e) => {
          let t;
          let r = new Set(),
            n = (e, n) => {
              let a = "function" == typeof e ? e(t) : e;
              if (!Object.is(a, t)) {
                let e = t;
                (t = (null != n ? n : "object" != typeof a || null === a)
                  ? a
                  : Object.assign({}, t, a)),
                  r.forEach((r) => r(t, e));
              }
            },
            a = () => t,
            i = {
              setState: n,
              getState: a,
              getInitialState: () => s,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
            },
            s = (t = e(n, a, i));
          return i;
        },
        o = (e) => (e ? s(e) : s),
        l = (e) => e,
        c = (e) => {
          let t = o(e),
            r = (e) =>
              (function (e, t = l) {
                let r = i.useSyncExternalStore(
                  e.subscribe,
                  i.useCallback(() => t(e.getState()), [e, t]),
                  i.useCallback(() => t(e.getInitialState()), [e, t]),
                );
                return i.useDebugValue(r), r;
              })(t, e);
          return Object.assign(r, t), r;
        },
        d = (n = (e) => ({ open: null, setOpen: (t) => e({ open: t }) }))
          ? c(n)
          : c;
      function m() {
        let { open: e, setOpen: t } = d(),
          r = {
            terms: {
              title: "Terms of Service",
              body: 'By accessing Predixio ("Service"), you agree to be bound by these Terms. If you disagree, do not use the Service.\n\n1. Nature of Service  \nPredixio is a non-custodial data aggregator that displays publicly available prediction market information. We do not facilitate bets, hold funds, or operate as a prediction market.\n\n2. No Financial Advice  \nAll data is for informational purposes only. Nothing constitutes investment, legal, or betting advice.\n\n3. Affiliate Disclosure  \nWe may receive compensation when you click certain affiliate links or sign up on third-party platforms.\n\n4. Age Restriction  \nYou must be 18+ (or the legal age in your jurisdiction) to use this Service.\n\n5. Prohibited Jurisdictions  \nUsers from restricted countries where prediction markets are illegal are prohibited.\n\n6. Limitation of Liability  \nTo the fullest extent permitted by law, Predixio and its operators shall not be liable for any indirect, incidental, or consequential damages.\n\nLast updated: December 5, 2025',
            },
            privacy: {
              title: "Privacy Policy",
              body: "Predixio collects zero personal data by default.\n\n1. No Accounts  \nNo user accounts, emails, or KYC required.\n\n2. Analytics  \nWe use Vercel Web Analytics (EU-hosted, privacy-first) — anonymous, no cookies, no cross-site tracking.\n\n3. IP Addresses  \nAnonymized within 24 hours.\n\n4. Third-Party Links  \nWhen you click affiliate links, those platforms set their own cookies (we have no control).\n\n5. No Data Sales  \nWe never sell data. Period.\n\nLast updated: December 5, 2025",
            },
            cookies: {
              title: "Cookie Policy",
              body: "Predixio uses zero first-party cookies.\n\n1. Essential  \nLocal storage for theme preference (dark/light mode only).\n\n2. Analytics  \nVercel Web Analytics — cookie-less, anonymous, EU-hosted.\n\n3. Third-Party  \nAffiliate links may set cookies when clicked (controlled by partners like Polymarket).\n\n4. Opt-Out  \nClear browser cookies or use ad blockers anytime.\n\nLast updated: December 5, 2025",
            },
            disclaimer: {
              title: "Disclaimer",
              body: 'Predixio is not a gambling or prediction-market platform.\n\n1. Independent Aggregator  \nWe only display publicly available market data. You are solely responsible for activity on third-party platforms.\n\n2. No Warranties  \nData is provided "as is" without guarantee of accuracy or completeness.\n\n3. Risk Warning  \nPrediction markets involve substantial risk. Consult a financial advisor before trading.\n\nLast updated: December 5, 2025',
            },
          };
        return e
          ? (0, a.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
              onClick: () => t(null),
              children: (0, a.jsxs)("div", {
                className:
                  "max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gray-950 border border-cyan-500/50 rounded-2xl p-8",
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6",
                    children: r[e].title,
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "prose prose-invert max-w-none text-gray-300 leading-relaxed prose-p:mb-4 prose-h2:text-xl prose-h2:font-bold prose-h2:mb-3 prose-h2:text-cyan-400",
                    children: (0, a.jsx)("p", {
                      className: "whitespace-pre-wrap",
                      children: r[e].body,
                    }),
                  }),
                  (0, a.jsx)("button", {
                    onClick: () => t(null),
                    className:
                      "mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition",
                    children: "Close",
                  }),
                ],
              }),
            })
          : null;
      }
    },
    710: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return x;
        },
      });
      var n = r(7437),
        a = r(2265),
        i = r(7648);
      let s = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase(),
          ),
        l = (e) => {
          let t = o(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        c = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        },
        d = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      var m = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let u = (0, a.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: n = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: s,
            className: o = "",
            children: l,
            iconNode: u,
            ...h
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...m,
              width: n,
              height: n,
              stroke: r,
              strokeWidth: s ? (24 * Number(i)) / Number(n) : i,
              className: c("lucide", o),
              ...(!l && !d(h) && { "aria-hidden": "true" }),
              ...h,
            },
            [
              ...u.map((e) => {
                let [t, r] = e;
                return (0, a.createElement)(t, r);
              }),
              ...(Array.isArray(l) ? l : [l]),
            ],
          );
        }),
        h = (e, t) => {
          let r = (0, a.forwardRef)((r, n) => {
            let { className: i, ...o } = r;
            return (0, a.createElement)(u, {
              ref: n,
              iconNode: t,
              className: c("lucide-".concat(s(l(e))), "lucide-".concat(e), i),
              ...o,
            });
          });
          return (r.displayName = l(e)), r;
        },
        p = h("sun", [
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          ["path", { d: "M12 2v2", key: "tus03m" }],
          ["path", { d: "M12 20v2", key: "1lh1kg" }],
          ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
          ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
          ["path", { d: "M2 12h2", key: "1t8f8n" }],
          ["path", { d: "M20 12h2", key: "1q8mjw" }],
          ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
          ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
        ]),
        f = h("moon", [
          [
            "path",
            {
              d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
              key: "kfwtm",
            },
          ],
        ]),
        b = h("x", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        y = h("menu", [
          ["path", { d: "M4 5h16", key: "1tepv9" }],
          ["path", { d: "M4 12h16", key: "1lakjw" }],
          ["path", { d: "M4 19h16", key: "1djgab" }],
        ]);
      function x() {
        let [e, t] = (0, a.useState)(!1);
        return (0, n.jsx)("nav", {
          className:
            "fixed top-0 inset-x-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-800",
          children: (0, n.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6 py-4",
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, n.jsxs)(i.default, {
                    href: "/",
                    className: "flex items-center gap-3 group",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition",
                      }),
                      (0, n.jsx)("span", {
                        className: "text-2xl font-black hero-gradient",
                        children: "Predixio",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [
                      (0, n.jsx)(i.default, {
                        href: "/",
                        className: "text-gray-300 hover:text-white transition",
                        children: "Markets",
                      }),
                      (0, n.jsx)(i.default, {
                        href: "/about",
                        className: "text-gray-300 hover:text-white transition",
                        children: "About",
                      }),
                      (0, n.jsx)("a", {
                        href: "https://twitter.com/predixio",
                        target: "_blank",
                        rel: "noopener",
                        className: "text-gray-300 hover:text-white transition",
                        children: "Twitter",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      (0, n.jsxs)("button", {
                        onClick: () => {
                          document.documentElement.classList.toggle("dark");
                        },
                        "aria-label": "Toggle dark mode",
                        className:
                          "p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition",
                        children: [
                          (0, n.jsx)(p, {
                            className: "w-5 h-5 block dark:hidden",
                          }),
                          (0, n.jsx)(f, {
                            className: "w-5 h-5 hidden dark:block",
                          }),
                        ],
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => t(!e),
                        className:
                          "md:hidden p-3 rounded-full hover:bg-gray-800 transition",
                        children: e
                          ? (0, n.jsx)(b, { className: "w-6 h-6" })
                          : (0, n.jsx)(y, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                ],
              }),
              e &&
                (0, n.jsx)("div", {
                  className:
                    "md:hidden mt-4 pb-4 border-t border-gray-800 pt-4",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, n.jsx)(i.default, {
                        href: "/",
                        className: "text-lg hover:text-primary transition",
                        children: "Markets",
                      }),
                      (0, n.jsx)(i.default, {
                        href: "/about",
                        className: "text-lg hover:text-primary transition",
                        children: "About",
                      }),
                      (0, n.jsx)("a", {
                        href: "https://twitter.com/predixio",
                        target: "_blank",
                        rel: "noopener",
                        className: "text-lg hover:text-primary transition",
                        children: "Twitter",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      }
    },
    7648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return a.a;
        },
      });
      var n = r(2972),
        a = r.n(n);
    },
    7960: function () {},
    8444: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_d0be19', '__Inter_Fallback_d0be19'",
          fontStyle: "normal",
        },
        className: "__className_d0be19",
        variable: "__variable_d0be19",
      };
    },
    5922: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return d;
        },
        ThemeProvider: function () {
          return m;
        },
      });
      var n = r(2265),
        a = (e, t, r, n, a, i, s, o) => {
          let l = document.documentElement,
            c = ["light", "dark"];
          function d(t) {
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let r = "class" === e,
                n = r && i ? a.map((e) => i[e] || e) : a;
              r
                ? (l.classList.remove(...n),
                  l.classList.add(i && i[t] ? i[t] : t))
                : l.setAttribute(e, t);
            }),
              o && c.includes(t) && (l.style.colorScheme = t);
          }
          if (n) d(n);
          else
            try {
              let e = localStorage.getItem(t) || r,
                n =
                  s && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              d(n);
            } catch (e) {}
        },
        i = ["light", "dark"],
        s = "(prefers-color-scheme: dark)",
        o = "undefined" == typeof window,
        l = n.createContext(void 0),
        c = { setTheme: (e) => {}, themes: [] },
        d = () => {
          var e;
          return null != (e = n.useContext(l)) ? e : c;
        },
        m = (e) =>
          n.useContext(l)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(h, { ...e }),
        u = ["light", "dark"],
        h = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: r = !1,
              enableSystem: a = !0,
              enableColorScheme: o = !0,
              storageKey: c = "theme",
              themes: d = u,
              defaultTheme: m = a ? "system" : "light",
              attribute: h = "data-theme",
              value: x,
              children: g,
              nonce: k,
              scriptProps: v,
            } = e,
            [w, N] = n.useState(() => f(c, m)),
            [j, C] = n.useState(() => ("system" === w ? y() : w)),
            P = x ? Object.values(x) : d,
            S = n.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && a && (t = y());
                let n = x ? x[t] : t,
                  s = r ? b(k) : null,
                  l = document.documentElement,
                  c = (e) => {
                    "class" === e
                      ? (l.classList.remove(...P), n && l.classList.add(n))
                      : e.startsWith("data-") &&
                        (n ? l.setAttribute(e, n) : l.removeAttribute(e));
                  };
                if ((Array.isArray(h) ? h.forEach(c) : c(h), o)) {
                  let e = i.includes(m) ? m : null,
                    r = i.includes(t) ? t : e;
                  l.style.colorScheme = r;
                }
                null == s || s();
              },
              [k],
            ),
            A = n.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(w) : e;
                N(t);
                try {
                  localStorage.setItem(c, t);
                } catch (e) {}
              },
              [w],
            ),
            E = n.useCallback(
              (e) => {
                C(y(e)), "system" === w && a && !t && S("system");
              },
              [w, t],
            );
          n.useEffect(() => {
            let e = window.matchMedia(s);
            return e.addListener(E), E(e), () => e.removeListener(E);
          }, [E]),
            n.useEffect(() => {
              let e = (e) => {
                e.key === c && (e.newValue ? N(e.newValue) : A(m));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [A]),
            n.useEffect(() => {
              S(null != t ? t : w);
            }, [t, w]);
          let T = n.useMemo(
            () => ({
              theme: w,
              setTheme: A,
              forcedTheme: t,
              resolvedTheme: "system" === w ? j : w,
              themes: a ? [...d, "system"] : d,
              systemTheme: a ? j : void 0,
            }),
            [w, A, t, j, a, d],
          );
          return n.createElement(
            l.Provider,
            { value: T },
            n.createElement(p, {
              forcedTheme: t,
              storageKey: c,
              attribute: h,
              enableSystem: a,
              enableColorScheme: o,
              defaultTheme: m,
              value: x,
              themes: d,
              nonce: k,
              scriptProps: v,
            }),
            g,
          );
        },
        p = n.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: r,
              attribute: i,
              enableSystem: s,
              enableColorScheme: o,
              defaultTheme: l,
              value: c,
              themes: d,
              nonce: m,
              scriptProps: u,
            } = e,
            h = JSON.stringify([i, r, l, t, d, c, s, o]).slice(1, -1);
          return n.createElement("script", {
            ...u,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? m : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(a.toString(), ")(").concat(h, ")"),
            },
          });
        }),
        f = (e, t) => {
          let r;
          if (!o) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        b = (e) => {
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
        y = (e) => (
          e || (e = window.matchMedia(s)), e.matches ? "dark" : "light"
        );
    },
  },
  function (e) {
    e.O(0, [691, 972, 971, 117, 744], function () {
      return e((e.s = 643));
    }),
      (_N_E = e.O());
  },
]);
