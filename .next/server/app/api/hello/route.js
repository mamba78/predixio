"use strict";
(() => {
  var e = {};
  (e.id = 234),
    (e.ids = [234]),
    (e.modules = {
      399: (e) => {
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      517: (e) => {
        e.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
      },
      4408: (e, r, t) => {
        t.r(r),
          t.d(r, {
            originalPathname: () => c,
            patchFetch: () => h,
            requestAsyncStorage: () => u,
            routeModule: () => s,
            serverHooks: () => l,
            staticGenerationAsyncStorage: () => d,
          });
        var o = {};
        t.r(o), t.d(o, { GET: () => n });
        var a = t(3278),
          p = t(5002),
          i = t(4877);
        async function n() {
          return Response.json({ status: "dynamic mode forced" });
        }
        let s = new a.AppRouteRouteModule({
            definition: {
              kind: p.x.APP_ROUTE,
              page: "/api/hello/route",
              pathname: "/api/hello",
              filename: "route",
              bundlePath: "app/api/hello/route",
            },
            resolvedPagePath: "/workspaces/predixio/app/api/hello/route.ts",
            nextConfigOutput: "export",
            userland: o,
          }),
          {
            requestAsyncStorage: u,
            staticGenerationAsyncStorage: d,
            serverHooks: l,
          } = s,
          c = "/api/hello/route";
        function h() {
          return (0, i.patchFetch)({
            serverHooks: l,
            staticGenerationAsyncStorage: d,
          });
        }
      },
      3278: (e, r, t) => {
        e.exports = t(517);
      },
    });
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    o = r.X(0, [379], () => t(4408));
  module.exports = o;
})();
