(exports.id = 331),
  (exports.ids = [331]),
  (exports.modules = {
    5943: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 3571)),
        Promise.resolve().then(r.bind(r, 322)),
        Promise.resolve().then(r.bind(r, 9339)),
        Promise.resolve().then(r.bind(r, 7797));
    },
    3446: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 3642, 23)),
        Promise.resolve().then(r.t.bind(r, 7586, 23)),
        Promise.resolve().then(r.t.bind(r, 7838, 23)),
        Promise.resolve().then(r.t.bind(r, 8057, 23)),
        Promise.resolve().then(r.t.bind(r, 7741, 23)),
        Promise.resolve().then(r.t.bind(r, 3118, 23));
    },
    4334: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 4080, 23));
    },
    3571: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => o });
      var a = r(7247),
        i = r(322);
      function o() {
        let { setOpen: e } = (0, i.d)();
        return a.jsx("footer", {
          className:
            "border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-6",
                children: [
                  a.jsx("button", {
                    onClick: () => e("terms"),
                    className: "hover:text-cyan-400 transition",
                    children: "Terms",
                  }),
                  a.jsx("button", {
                    onClick: () => e("privacy"),
                    className: "hover:text-cyan-400 transition",
                    children: "Privacy",
                  }),
                  a.jsx("button", {
                    onClick: () => e("cookies"),
                    className: "hover:text-cyan-400 transition",
                    children: "Cookies",
                  }),
                  a.jsx("button", {
                    onClick: () => e("disclaimer"),
                    className: "hover:text-cyan-400 transition",
                    children: "Disclaimer",
                  }),
                ],
              }),
              a.jsx("p", {
                className: "mt-4 text-xs",
                children: "\xa9 2025 Predixio • Not financial advice • 18+",
              }),
            ],
          }),
        });
      }
    },
    322: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => i, default: () => o });
      var a = r(7247);
      let i = (0, r(9713).U)((e) => ({
        open: null,
        setOpen: (t) => e({ open: t }),
      }));
      function o() {
        let { open: e, setOpen: t } = i(),
          r = {
            terms: {
              title: "Terms of Service",
              body: `By accessing Predixio ("Service"), you agree to be bound by these Terms. If you disagree, do not use the Service.

1. Nature of Service  
Predixio is a non-custodial data aggregator that displays publicly available prediction market information. We do not facilitate bets, hold funds, or operate as a prediction market.

2. No Financial Advice  
All data is for informational purposes only. Nothing constitutes investment, legal, or betting advice.

3. Affiliate Disclosure  
We may receive compensation when you click certain affiliate links or sign up on third-party platforms.

4. Age Restriction  
You must be 18+ (or the legal age in your jurisdiction) to use this Service.

5. Prohibited Jurisdictions  
Users from restricted countries where prediction markets are illegal are prohibited.

6. Limitation of Liability  
To the fullest extent permitted by law, Predixio and its operators shall not be liable for any indirect, incidental, or consequential damages.

Last updated: December 5, 2025`,
            },
            privacy: {
              title: "Privacy Policy",
              body: `Predixio collects zero personal data by default.

1. No Accounts  
No user accounts, emails, or KYC required.

2. Analytics  
We use Vercel Web Analytics (EU-hosted, privacy-first) — anonymous, no cookies, no cross-site tracking.

3. IP Addresses  
Anonymized within 24 hours.

4. Third-Party Links  
When you click affiliate links, those platforms set their own cookies (we have no control).

5. No Data Sales  
We never sell data. Period.

Last updated: December 5, 2025`,
            },
            cookies: {
              title: "Cookie Policy",
              body: `Predixio uses zero first-party cookies.

1. Essential  
Local storage for theme preference (dark/light mode only).

2. Analytics  
Vercel Web Analytics — cookie-less, anonymous, EU-hosted.

3. Third-Party  
Affiliate links may set cookies when clicked (controlled by partners like Polymarket).

4. Opt-Out  
Clear browser cookies or use ad blockers anytime.

Last updated: December 5, 2025`,
            },
            disclaimer: {
              title: "Disclaimer",
              body: `Predixio is not a gambling or prediction-market platform.

1. Independent Aggregator  
We only display publicly available market data. You are solely responsible for activity on third-party platforms.

2. No Warranties  
Data is provided "as is" without guarantee of accuracy or completeness.

3. Risk Warning  
Prediction markets involve substantial risk. Consult a financial advisor before trading.

Last updated: December 5, 2025`,
            },
          };
        return e
          ? a.jsx("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
              onClick: () => t(null),
              children: (0, a.jsxs)("div", {
                className:
                  "max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gray-950 border border-cyan-500/50 rounded-2xl p-8",
                onClick: (e) => e.stopPropagation(),
                children: [
                  a.jsx("h2", {
                    className:
                      "text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6",
                    children: r[e].title,
                  }),
                  a.jsx("div", {
                    className:
                      "prose prose-invert max-w-none text-gray-300 leading-relaxed prose-p:mb-4 prose-h2:text-xl prose-h2:font-bold prose-h2:mb-3 prose-h2:text-cyan-400",
                    children: a.jsx("p", {
                      className: "whitespace-pre-wrap",
                      children: r[e].body,
                    }),
                  }),
                  a.jsx("button", {
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
    9339: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => d });
      var a = r(7247),
        i = r(8964),
        o = r(9906),
        s = r(2662),
        n = r(5495),
        l = r(7013),
        c = r(6683);
      function d() {
        let [e, t] = (0, i.useState)(!1);
        return a.jsx("nav", {
          className:
            "fixed top-0 inset-x-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-800",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6 py-4",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsxs)(o.default, {
                    href: "/",
                    className: "flex items-center gap-3 group",
                    children: [
                      a.jsx("div", {
                        className:
                          "w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition",
                      }),
                      a.jsx("span", {
                        className: "text-2xl font-black hero-gradient",
                        children: "Predixio",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [
                      a.jsx(o.default, {
                        href: "/",
                        className: "text-gray-300 hover:text-white transition",
                        children: "Markets",
                      }),
                      a.jsx(o.default, {
                        href: "/about",
                        className: "text-gray-300 hover:text-white transition",
                        children: "About",
                      }),
                      a.jsx("a", {
                        href: "https://twitter.com/predixio",
                        target: "_blank",
                        rel: "noopener",
                        className: "text-gray-300 hover:text-white transition",
                        children: "Twitter",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      (0, a.jsxs)("button", {
                        onClick: () => {
                          document.documentElement.classList.toggle("dark");
                        },
                        "aria-label": "Toggle dark mode",
                        className:
                          "p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition",
                        children: [
                          a.jsx(s.Z, {
                            className: "w-5 h-5 block dark:hidden",
                          }),
                          a.jsx(n.Z, {
                            className: "w-5 h-5 hidden dark:block",
                          }),
                        ],
                      }),
                      a.jsx("button", {
                        onClick: () => t(!e),
                        className:
                          "md:hidden p-3 rounded-full hover:bg-gray-800 transition",
                        children: e
                          ? a.jsx(l.Z, { className: "w-6 h-6" })
                          : a.jsx(c.Z, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                ],
              }),
              e &&
                a.jsx("div", {
                  className:
                    "md:hidden mt-4 pb-4 border-t border-gray-800 pt-4",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      a.jsx(o.default, {
                        href: "/",
                        className: "text-lg hover:text-primary transition",
                        children: "Markets",
                      }),
                      a.jsx(o.default, {
                        href: "/about",
                        className: "text-lg hover:text-primary transition",
                        children: "About",
                      }),
                      a.jsx("a", {
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
    8168: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, { default: () => x, metadata: () => p, viewport: () => m });
      var a = r(2051),
        i = r(7513),
        o = r.n(i);
      r(7272);
      var s = r(5003),
        n = r(5347);
      let l = (0, n.createProxy)(
          String.raw`/workspaces/predixio/components/Navbar.tsx#default`,
        ),
        c = (0, n.createProxy)(
          String.raw`/workspaces/predixio/components/ClientFooter.tsx#default`,
        ),
        d = (0, n.createProxy)(
          String.raw`/workspaces/predixio/components/LegalModal.tsx#default`,
        );
      (0, n.createProxy)(
        String.raw`/workspaces/predixio/components/LegalModal.tsx#useModal`,
      );
      let m = {
          width: "device-width",
          initialScale: 1,
          maximumScale: 1,
          themeColor: [
            { media: "(prefers-color-scheme: light)", color: "#ffffff" },
            { media: "(prefers-color-scheme: dark)", color: "#000000" },
          ],
        },
        p = {
          title: {
            default: "Predixio – Real-Time Prediction Markets",
            template: "%s | Predixio",
          },
          description:
            "All Polymarket, Kalshi, Manifold & prediction markets in one fast, real-time dashboard.",
          keywords:
            "prediction markets, polymarket, kalshi, manifold, crypto, real-time odds, blockchain betting",
          authors: [{ name: "Predixio", url: "https://predixio.com" }],
          creator: "Predixio",
          publisher: "Predixio",
          metadataBase: new URL("https://predixio.com"),
          alternates: { canonical: "/" },
          openGraph: {
            title: "Predixio – All Prediction Markets in One Place",
            description:
              "Real-time prices, volume, liquidity — Polymarket + Kalshi + more",
            url: "https://predixio.com",
            siteName: "Predixio",
            images: [
              { url: "/og.png", width: 1200, height: 630, alt: "Predixio" },
            ],
            locale: "en_US",
            type: "website",
          },
          twitter: {
            card: "summary_large_image",
            title: "Predixio – Real-Time Prediction Markets",
            description: "Polymarket + Kalshi + all platforms in one dashboard",
            images: ["/og.png"],
            creator: "@predixio",
          },
          robots: {
            index: !0,
            follow: !0,
            googleBot: {
              index: !0,
              follow: !0,
              "max-video-preview": -1,
              "max-image-preview": "large",
              "max-snippet": -1,
            },
          },
          manifest: "/manifest.json",
          icons: { icon: ["/favicon.ico"], apple: ["/apple-touch-icon.png"] },
        };
      function x({ children: e }) {
        return (0, a.jsxs)("html", {
          lang: "en",
          suppressHydrationWarning: !0,
          children: [
            (0, a.jsxs)("head", {
              children: [
                a.jsx("meta", {
                  name: "application-name",
                  content: "Predixio",
                }),
                a.jsx("meta", {
                  name: "mobile-web-app-capable",
                  content: "yes",
                }),
                a.jsx("meta", {
                  name: "apple-mobile-web-app-capable",
                  content: "yes",
                }),
                a.jsx("meta", {
                  name: "apple-mobile-web-app-status-bar-style",
                  content: "black-translucent",
                }),
                a.jsx("meta", {
                  name: "format-detection",
                  content: "telephone=no",
                }),
                a.jsx("link", { rel: "manifest", href: "/manifest.json" }),
                a.jsx("link", {
                  rel: "apple-touch-icon",
                  href: "/apple-touch-icon.png",
                }),
                a.jsx("link", { rel: "icon", href: "/favicon.ico" }),
                a.jsx("script", {
                  dangerouslySetInnerHTML: {
                    __html: "window.TronLink={disabled:true};",
                  },
                }),
              ],
            }),
            a.jsx("body", {
              className: `${o().variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`,
              children: (0, a.jsxs)(s.f, {
                attribute: "class",
                defaultTheme: "dark",
                enableSystem: !0,
                disableTransitionOnChange: !0,
                children: [
                  a.jsx(l, {}),
                  a.jsx("main", {
                    className: "flex-1 pt-20 pb-24 md:pb-20",
                    children: e,
                  }),
                  a.jsx("footer", {
                    className:
                      "fixed inset-x-0 bottom-0 bg-black/95 backdrop-blur-xl border-t border-gray-800 z-50 supports-[backdrop-filter]:bg-black/80",
                    children: a.jsx("div", {
                      className: "pb-safe",
                      children: a.jsx(c, {}),
                    }),
                  }),
                  a.jsx(d, {}),
                ],
              }),
            }),
          ],
        });
      }
    },
    546: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, { default: () => n, metadata: () => s, viewport: () => o });
      var a = r(2051),
        i = r(2349);
      let o = { themeColor: "#000000", width: "device-width", initialScale: 1 },
        s = {
          title: "404 – Page Not Found | Predixio",
          description: "The page you're looking for doesn't exist.",
        };
      function n() {
        return a.jsx("div", {
          className:
            "min-h-screen bg-black text-white flex items-center justify-center px-6",
          children: (0, a.jsxs)("div", {
            className: "text-center",
            children: [
              a.jsx("h1", {
                className:
                  "text-9xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
                children: "404",
              }),
              a.jsx("p", {
                className: "text-2xl text-gray-400 mt-8 mb-12",
                children: "Page not found",
              }),
              a.jsx(i.default, {
                href: "/",
                className:
                  "inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full hover:scale-105 transition shadow-lg",
                children: "Back to Markets",
              }),
            ],
          }),
        });
      }
    },
    7272: () => {},
  });
