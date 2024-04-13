import{R as a,j as t,r as C}from"./index-Bv95bFYi.js";import{C as P,c as F,d as W,a as m,e as E}from"./viewport-Cdg5FG6T.js";import{x as H}from"./request-BaIgPWdV.js";import{c as A,C as $,d as _,e as V,f as G,h as Z,i as I,j,k as b,U as y,s as v,l as c,m as K,n as h,E as q,o as Y}from"./utils-CQgwmhHL.js";import{A as T}from"./ShikiWrapper-CcEWqLP5.js";import{a as l,c as B}from"./helper-CaAdfMs7.js";import{c as D}from"./alert-BPIcOufA.js";import{A as X}from"./index-Br86Hxby.js";import{m as f}from"./motion-minimal-Dou77nS9.js";import{b as L,d as J}from"./toast-DcnsCoJV.js";import{I as Q}from"./Gallery-BHgTWze5.js";import{F as ee,b as te}from"./FormInput-CYLl-qic.js";import{u as ne,b as re}from"./provider-BEvFnhDo.js";import{S,M as se}from"./StyledButton-UszMzkUx.js";import{F as oe}from"./FloatPopover-CxtwGunq.js";import"./env-CUAg77w2.js";import"./spring-BiPrtYZ-.js";import"./LinkCard-CxwD57DJ.js";import"./image-DYLRkmyE.js";import"./use-is-client-yRbM6QMH.js";import"./dom-XXNktKeO.js";import"./use-motion-template-BsOvr48s.js";import"./visual-element-D8bvYVEn.js";import"./useQuery-nDhe6Fc8.js";import"./use-event-callback-mZpuvDyq.js";import"./use-is-dark-B6VE3KzZ.js";import"./customParseFormat--wHdktCa.js";import"./SocialSourceLink-BeYW2pkR.js";import"./use-animation-CevcbFiv.js";import"./lodash-B3VVwmZe.js";import"./CodeHighlighter-CokbpWGB.js";import"./Collapse-BTd5_s3h.js";import"./use-is-unmounted-DaqUP80-.js";var ae=()=>{try{return!1}catch{}return!1},ie=()=>{try{return!0}catch{}return!1},z=new Set,ce=(e,n,r)=>{const s=ae()||ie(),o=r??e;z.has(o)||s||(z.add(o),console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${n}`))},le={Expired:"expired",Failed:"failed"};new Proxy(le,{get(e,n,r){return ce("MagicLinkErrorCode","Use `EmailLinkErrorCode` instead."),Reflect.get(e,n,r)}});const de="Clerk: You must wrap your application in a <ClerkProvider> component.",ue=e=>`Clerk: You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,me=e=>n=>{try{return a.Children.only(e)}catch{throw new Error(ue(n))}},xe=(e,n)=>(e||(e=n),typeof e=="string"&&(e=a.createElement("button",null,e)),e),pe=e=>(...n)=>{if(e&&typeof e=="function")return e(...n)},[vt,ge]=[P,F];function he(e){if(!e)throw new Error(de)}const fe=Object.freeze({noGuarantees:Object.freeze({guaranteedLoaded:!1}),guaranteedLoaded:Object.freeze({guaranteedLoaded:!0})}),k=a.createContext(void 0);k.displayName="StructureContext";const Ce=()=>{const e=a.useContext(k);return he(e),e},je=({children:e})=>Ce().guaranteedLoaded?a.createElement(a.Fragment,null,e):a.createElement(k.Provider,{value:fe.guaranteedLoaded},e),u=(e,n)=>{n=n||e.displayName||e.name||"Component",e.displayName=n;const r=s=>{const o=ge();return o.loaded?a.createElement(je,null,a.createElement(e,{...s,clerk:o})):null};return r.displayName=`withClerk(${n})`,r},[kt,M]=W("AuthContext"),be=({children:e})=>{const{userId:n}=M();return n?a.createElement(a.Fragment,null,e):null},ye=({children:e})=>{const{userId:n}=M();return n===null?a.createElement(a.Fragment,null,e):null};u(({clerk:e,...n})=>{const{client:r,session:s}=e,{__unstable__environment:o}=e,i=r.activeSessions&&r.activeSessions.length>0;return a.useEffect(()=>{if(s===null&&i&&o){const{afterSignOutOneUrl:d}=o.displayConfig;e.navigate(d)}else e.redirectToSignIn(n)},[]),null},"RedirectToSignIn");u(({clerk:e,...n})=>(a.useEffect(()=>{e.redirectToSignUp(n)},[]),null),"RedirectToSignUp");u(({clerk:e})=>(a.useEffect(()=>{e.redirectToUserProfile()},[]),null),"RedirectToUserProfile");u(({clerk:e})=>(a.useEffect(()=>{e.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");u(({clerk:e})=>(a.useEffect(()=>{e.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");u(({clerk:e,...n})=>(a.useEffect(()=>{e.handleRedirectCallback(n)},[]),null),"AuthenticateWithRedirectCallback");const ve=u(({clerk:e,children:n,...r})=>{const{afterSignInUrl:s,afterSignUpUrl:o,redirectUrl:i,mode:d,...p}=r;n=xe(n,"Sign in");const N=me(n)("SignInButton"),O=()=>{const x={afterSignInUrl:s,afterSignUpUrl:o,redirectUrl:i};return d==="modal"?e.openSignIn(x):e.redirectToSignIn(x)},U={...p,onClick:async x=>(await pe(N.props.onClick)(x),O())};return a.cloneElement(N,U)},"SignInButton"),ke=be,we=ye;function Ne({className:e}){return t.jsx("i",{className:l("icon-[mingcute--send-plane-line]",e)})}const Se=()=>{const e=V(),n=G();return t.jsxs("span",{className:l("font-mono text-[10px]",e?"text-red-500":"text-zinc-500"),children:[n.length,"/",Z]})},ze=()=>{const e=m(),n=I(),r=L(j().isWhisper),s=b();return e||n?null:t.jsxs("label",{className:"label mx-2 flex items-center",children:[t.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:r,type:"checkbox",onChange:o=>{const i=o.target.checked;s("isWhisper",i)}}),t.jsx("span",{className:"label-text text-sm",children:"悄悄话"})]})},Ee=()=>{const e=m(),n=L(j().syncToRecently),r=b(),s=I();return!e||s?null:t.jsxs("label",{className:"label mx-2 flex items-center",children:[t.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:n,type:"checkbox",onChange:o=>{const i=o.target.checked;r("syncToRecently",i)}}),t.jsx("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},w=({className:e})=>{const n=A();return t.jsxs("footer",{className:B("mt-3 flex h-5 w-full min-w-0 items-center justify-between",e),children:[t.jsxs("span",{className:l("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[t.jsxs("span",{className:"hidden md:inline",children:["支持 ",t.jsx("b",{children:"Markdown"})," 与"," ",t.jsx(D,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),t.jsx($,{})]}),t.jsx(X,{children:n&&t.jsxs(f.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[t.jsx(Se,{}),t.jsx(ze,{}),t.jsx(Ee,{}),t.jsx(Ae,{})]},"send-button-wrapper")})]})},Ae=()=>{const[e,n]=_();return t.jsxs(f.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:n,onClick:e,children:[t.jsx(Ne,{className:"size-5 text-zinc-800 dark:text-zinc-200"}),t.jsx(f.span,{className:"text-sm",layout:"size",children:n?"送信...":"送信"})]})},Ie=()=>{const e="bg-gray-200/50 dark:bg-zinc-800/50";return t.jsxs("div",{className:"flex animate-pulse gap-4",children:[t.jsx("div",{className:l("size-12 self-end overflow-hidden rounded-full",e)}),t.jsx("div",{className:l("h-[150px] w-full rounded-lg",e)})]})},Te=()=>{const{user:e}=E(),n=b(),r=e?e.fullName||e.lastName||e.firstName||"Anonymous":"";return C.useEffect(()=>{if(!e)return;n("author",r),n("avatar",e.imageUrl),n("mail",e.primaryEmailAddress?.emailAddress||"");const s=e.primaryEmailAddress?.verification.strategy;s&&n("source",s)},[r,n,e]),e?t.jsxs("div",{className:"flex space-x-4",children:[t.jsx("div",{className:l("mb-2 shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:t.jsx("img",{className:"rounded-full object-cover",src:e.imageUrl,alt:`${r}'s avatar`,width:48,height:48})}),t.jsx("div",{className:"relative h-[150px] w-full rounded-xl bg-gray-200/50 dark:bg-zinc-800/50",children:t.jsx(y,{className:"pb-5"})}),t.jsx(w,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]}):t.jsx(Ie,{})},Be=()=>m()?t.jsx(Oe,{}):t.jsx(Re,{}),R="relative h-[150px] w-full rounded-xl bg-gray-200/50 dark:bg-zinc-800/50",Le={author:"昵称",mail:"邮箱",url:"网址"},Me={author:{validator:e=>e.length>0&&e.length<=20,message:"昵称长度应在 1-20 之间"},mail:{validator:e=>/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e),message:"邮箱格式不正确"},url:{validator:e=>/^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(e),message:"网址格式不正确"}},g=e=>{const{fieldKey:n,required:r}=e,[s,o]=J(j()[n]);return t.jsx(te,{type:"text",value:s,onChange:i=>o(i.target.value),required:r,placeholder:Le[n]+(r?" *":""),name:n,className:"border-0 bg-gray-200/50 dark:bg-zinc-800/50",rules:[Me[n]]})},Re=()=>t.jsxs(ee,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[t.jsxs("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[t.jsx(g,{fieldKey:"author",required:!0}),t.jsx(g,{fieldKey:"mail",required:!0}),t.jsx(g,{fieldKey:"url"})]}),t.jsx("div",{className:R,children:t.jsx(y,{className:"pb-8"})}),t.jsx(w,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-4 w-auto px-4"})]}),Oe=()=>{const e=H(n=>n.user);return t.jsxs("div",{className:"flex space-x-4",children:[t.jsx("div",{className:l("mb-2 shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:t.jsx(Q,{className:"rounded-full object-cover",src:e.avatar,alt:`${e.name||e.username}'s avatar`,width:48,height:48})}),t.jsx("div",{className:R,children:t.jsx(y,{className:"pb-5"})}),t.jsx(w,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]})};function Ue(e){return t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M11 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H15M16.8744 13C16.2164 13.4935 15.6221 14.066 15.1049 14.7043C15.035 14.7906 15 14.8953 15 15M16.8744 17C16.2164 16.5065 15.6221 15.934 15.1049 15.2957C15.035 15.2094 15 15.1047 15 15M15 15H21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Pe(){const e=re(),{dismissAll:n}=ne();return t.jsxs("div",{className:"flex h-[150px] w-full space-x-4 rounded-lg bg-gray-100/80 center dark:bg-zinc-900/80",children:[t.jsx(S,{variant:"secondary",type:"button",onClick:()=>{v(c.legacy)},children:"免登录评论"}),t.jsx(ve,{mode:"modal",redirectUrl:K(e).href,children:t.jsxs(S,{onClick:()=>{n()},variant:"primary",type:"button",children:[t.jsx(Ue,{className:"mr-1 size-5"}),"登录后才可以留言噢"]})})]})}const Fe=()=>{const e=h(),n=`转换到${e===c.legacy?"新":"旧"}版评论`,r=A(),s=!!E(),o=C.useRef(function(){const p=h();return t.jsxs(t.Fragment,{children:[t.jsx("i",{className:l(p===c.legacy?"icon-[mingcute--user-4-line]":"icon-[material-symbols--dynamic-form-outline]")}),t.jsx("span",{className:"sr-only",children:n})]})}).current;return m()?null:t.jsx(se,{className:l("absolute left-0 top-0 z-10 rounded-full text-sm","size-6 border border-slate-200 dark:border-neutral-800","bg-slate-100 dark:bg-neutral-900","flex cursor-pointer center","text-base-content/50","opacity-0 transition-opacity duration-200 group-[:hover]:opacity-100",e===c.legacy&&"bottom-0 top-auto",r||s&&e===c["with-auth"]&&"invisible opacity-0"),onClick:()=>{v(e===c.legacy?c["with-auth"]:c.legacy)},children:t.jsx(oe,{TriggerComponent:o,children:n})})},wt=e=>{const{refId:n,className:r,afterSubmit:s,initialValue:o}=e,i=h(),d=m();return C.useEffect(()=>{d&&v(c.legacy)},[d]),t.jsx(q,{children:t.jsx(Y,{refId:n,afterSubmit:s,initialValue:o,children:t.jsxs("div",{className:B("group relative w-full min-w-0",r),"data-hide-print":!0,children:[t.jsx(Fe,{}),t.jsx("div",{className:"relative w-full",children:i===c.legacy?t.jsx(We,{}):t.jsx(He,{})})]})})})},We=()=>t.jsx(T,{children:t.jsx(Be,{})}),He=()=>t.jsxs(T,{children:[t.jsx(we,{children:t.jsx(Pe,{})}),t.jsx(ke,{children:t.jsx(Te,{})})]});export{wt as CommentBoxRoot};
