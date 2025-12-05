(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9868:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(996),r(37);var i=r(170),o=r(5002),s=r(3876),a=r.n(s),n=r(6299),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,546)),"/workspaces/predixio/app/not-found.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,37)),"/workspaces/predixio/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,546)),"/workspaces/predixio/app/not-found.tsx"]}],c=[],u="/_not-found/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1607:(e,t,r)=>{Promise.resolve().then(r.bind(r,3571)),Promise.resolve().then(r.bind(r,322))},3446:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},5303:()=>{},3571:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var i=r(7247),o=r(322);function s(){let{setOpen:e}=(0,o.d)();return i.jsx("footer",{className:"border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,i.jsxs)("div",{className:"flex flex-wrap justify-center gap-6",children:[i.jsx("button",{onClick:()=>e("terms"),className:"hover:text-cyan-400 transition",children:"Terms"}),i.jsx("button",{onClick:()=>e("privacy"),className:"hover:text-cyan-400 transition",children:"Privacy"}),i.jsx("button",{onClick:()=>e("cookies"),className:"hover:text-cyan-400 transition",children:"Cookies"}),i.jsx("button",{onClick:()=>e("disclaimer"),className:"hover:text-cyan-400 transition",children:"Disclaimer"})]}),i.jsx("p",{className:"mt-4 text-xs",children:"\xa9 2025 Predixio • Not financial advice • 18+"})]})})}},322:(e,t,r)=>{"use strict";r.d(t,{d:()=>o,default:()=>s});var i=r(7247);let o=(0,r(9713).U)(e=>({open:null,setOpen:t=>e({open:t})}));function s(){let{open:e,setOpen:t}=o(),r={terms:{title:"Terms of Service",body:`By accessing Predixio ("Service"), you agree to be bound by these Terms. If you disagree, do not use the Service.

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

Last updated: December 5, 2025`},privacy:{title:"Privacy Policy",body:`Predixio collects zero personal data by default.

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

Last updated: December 5, 2025`},cookies:{title:"Cookie Policy",body:`Predixio uses zero first-party cookies.

1. Essential  
Local storage for theme preference (dark/light mode only).

2. Analytics  
Vercel Web Analytics — cookie-less, anonymous, EU-hosted.

3. Third-Party  
Affiliate links may set cookies when clicked (controlled by partners like Polymarket).

4. Opt-Out  
Clear browser cookies or use ad blockers anytime.

Last updated: December 5, 2025`},disclaimer:{title:"Disclaimer",body:`Predixio is not a gambling or prediction-market platform.

1. Independent Aggregator  
We only display publicly available market data. You are solely responsible for activity on third-party platforms.

2. No Warranties  
Data is provided "as is" without guarantee of accuracy or completeness.

3. Risk Warning  
Prediction markets involve substantial risk. Consult a financial advisor before trading.

Last updated: December 5, 2025`}};return e?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",onClick:()=>t(null),children:(0,i.jsxs)("div",{className:"max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gray-950 border border-cyan-500/50 rounded-2xl p-8",onClick:e=>e.stopPropagation(),children:[i.jsx("h2",{className:"text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6",children:r[e].title}),i.jsx("div",{className:"prose prose-invert max-w-none text-gray-300 leading-relaxed prose-p:mb-4 prose-h2:text-xl prose-h2:font-bold prose-h2:mb-3 prose-h2:text-cyan-400",children:i.jsx("p",{className:"whitespace-pre-wrap",children:r[e].body})}),i.jsx("button",{onClick:()=>t(null),className:"mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition",children:"Close"})]})}):null}},37:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var i=r(2051),o=r(3576),s=r.n(o);r(7272);var a=r(5347);let n=(0,a.createProxy)(String.raw`/workspaces/predixio/components/LegalModal.tsx#default`);(0,a.createProxy)(String.raw`/workspaces/predixio/components/LegalModal.tsx#useModal`);let l=(0,a.createProxy)(String.raw`/workspaces/predixio/components/ClientFooter.tsx#default`),d={title:"Predixio – Real-Time Prediction Markets",description:"Polymarket • Kalshi • All markets in one place"};function c({children:e}){return(0,i.jsxs)("html",{lang:"en",className:"dark scroll-smooth",children:[i.jsx("head",{children:i.jsx("script",{dangerouslySetInnerHTML:{__html:"window.TronLink={disabled:true};"}})}),(0,i.jsxs)("body",{className:`${s().variable} font-sans antialiased bg-black text-white min-h-screen flex flex-col`,children:[i.jsx("div",{className:"flex-1",children:e}),i.jsx("footer",{className:"fixed inset-x-0 bottom-0 bg-black border-t border-gray-800 z-50",children:i.jsx(l,{})}),i.jsx(n,{})]})]})}},546:(e,t,r)=>{"use strict";function i(){return null}r.r(t),r.d(t,{default:()=>i})},996:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r(6484);let i=r(2051);r(6269);let o={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block"},h1:{display:"inline-block",margin:"0 20px 0 0",padding:"0 23px 0 0",fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}};function s(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:"404: This page could not be found."}),(0,i.jsx)("div",{style:o.error,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}),(0,i.jsx)("h1",{className:"next-error-h1",style:o.h1,children:"404"}),(0,i.jsx)("div",{style:o.desc,children:(0,i.jsx)("h2",{style:o.h2,children:"This page could not be found."})})]})})]})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7272:()=>{},6484:(e,t,r)=>{"use strict";function i(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:()=>i,_interop_require_default:()=>i})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[379,590],()=>r(9868));module.exports=i})();