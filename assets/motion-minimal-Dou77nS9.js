import{r as l,d as j,l as ut}from"./index-Bv95bFYi.js";const z=l.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),P=l.createContext({}),X=l.createContext(null),Y=typeof document<"u",lt=Y?l.useLayoutEffect:l.useEffect,Z=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),ft="framerAppearId",dt="data-"+Z(ft),mt={skipAnimations:!1,useManualTiming:!1};class B{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function gt(t){let e=new B,n=new B,r=0,s=!1,a=!1;const c=new WeakSet,u={schedule:(g,f=!1,m=!1)=>{const o=m&&s,d=o?e:n;return f&&c.add(g),d.add(g)&&o&&s&&(r=e.order.length),g},cancel:g=>{n.remove(g),c.delete(g)},process:g=>{if(s){a=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let f=0;f<r;f++){const m=e.order[f];c.has(m)&&(u.schedule(m),t()),m(g)}s=!1,a&&(a=!1,u.process(g))}};return u}const v=["prepare","read","update","preRender","render","postRender"],ht=40;function N(t,e){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=v.reduce((o,d)=>(o[d]=gt(()=>n=!0),o),{}),c=o=>{a[o].process(s)},u=()=>{const o=mt.useManualTiming?s.timestamp:performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(o-s.timestamp,ht),1),s.timestamp=o,s.isProcessing=!0,v.forEach(c),s.isProcessing=!1,n&&e&&(r=!1,t(u))},g=()=>{n=!0,r=!0,s.isProcessing||t(u)};return{schedule:v.reduce((o,d)=>{const h=a[d];return o[d]=(y,p=!1,W=!1)=>(n||g(),h.schedule(y,p,W)),o},{}),cancel:o=>v.forEach(d=>a[d].cancel(o)),state:s,steps:a}}const{schedule:yt,cancel:ye}=N(queueMicrotask,!1);function pt(t,e,n,r){const{visualElement:s}=l.useContext(P),a=l.useContext(j),c=l.useContext(X),u=l.useContext(z).reducedMotion,g=l.useRef();r=r||a.renderer,!g.current&&r&&(g.current=r(t,{visualState:e,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=g.current;l.useInsertionEffect(()=>{f&&f.update(n,c)});const m=l.useRef(!!(n[dt]&&!window.HandoffComplete));return lt(()=>{f&&(yt.postRender(f.render),m.current&&f.animationState&&f.animationState.animateChanges())}),l.useEffect(()=>{f&&(f.updateFeatures(),!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),f}function xt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function bt(t,e,n){return l.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):xt(n)&&(n.current=r))},[e])}function k(t){return typeof t=="string"||Array.isArray(t)}function U(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const wt=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ct=["initial",...wt];function L(t){return U(t.animate)||Ct.some(e=>k(t[e]))}function St(t){return!!(L(t)||t.variants)}function vt(t,e){if(L(t)){const{initial:n,animate:r}=t;return{initial:n===!1||k(n)?n:void 0,animate:k(r)?r:void 0}}return t.inherit!==!1?e:{}}function Vt(t){const{initial:e,animate:n}=vt(t,l.useContext(P));return l.useMemo(()=>({initial:e,animate:n}),[$(e),$(n)])}function $(t){return Array.isArray(t)?t.join(" "):t}const Mt=l.createContext({}),Pt=l.createContext({}),Tt=Symbol.for("motionComponentSymbol");function At({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:s}){t&&ut(t);function a(u,g){let f;const m={...l.useContext(z),...u,layoutId:Rt(u)},{isStatic:o}=m,d=Vt(u),h=r(u,o);if(!o&&Y){d.visualElement=pt(s,h,m,e);const y=l.useContext(Pt),p=l.useContext(j).strict;d.visualElement&&(f=d.visualElement.loadFeatures(m,p,t,y))}return l.createElement(P.Provider,{value:d},f&&d.visualElement?l.createElement(f,{visualElement:d.visualElement,...m}):null,n(s,u,bt(h,d.visualElement,g),h,o,d.visualElement))}const c=l.forwardRef(a);return c[Tt]=s,c}function Rt({layoutId:t}){const e=l.useContext(Mt).id;return e&&t!==void 0?e+"-"+t:t}function kt(t){function e(r,s={}){return At(t(r,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const Lt=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function q(t){return typeof t!="string"||t.includes("-")?!1:!!(Lt.indexOf(t)>-1||/[A-Z]/.test(t))}const K={};function pe(t){Object.assign(K,t)}const T=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_=new Set(T);function Q(t,{layout:e,layoutId:n}){return _.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!K[t]||t==="opacity")}const b=t=>!!(t&&t.getVelocity),Et={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ot=T.length;function Wt(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let a="";for(let c=0;c<Ot;c++){const u=T[c];if(t[u]!==void 0){const g=Et[u]||u;a+=`${g}(${t[u]}) `}}return e&&!t.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(t,r?"":a):n&&r&&(a="none"),a}const J=t=>e=>typeof e=="string"&&e.startsWith(t),Ft=J("--"),Bt=J("var(--"),xe=t=>Bt(t)?$t.test(t.split("/*")[0].trim()):!1,$t=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,Dt=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ht=(t,e,n)=>n>e?e:n<t?t:n,E={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},A={...E,transform:t=>Ht(0,1,t)},V={...E,default:1},be=t=>Math.round(t*1e5)/1e5,we=/(-)?([\d]*\.?[\d])+/g,Ce=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Se=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function It(t){return typeof t=="string"}const S=t=>({test:e=>It(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),x=S("deg"),R=S("%"),i=S("px"),ve=S("vh"),Ve=S("vw"),D={...R,parse:t=>R.parse(t)/100,transform:t=>R.transform(t*100)},H={...E,transform:Math.round},Gt={borderWidth:i,borderTopWidth:i,borderRightWidth:i,borderBottomWidth:i,borderLeftWidth:i,borderRadius:i,radius:i,borderTopLeftRadius:i,borderTopRightRadius:i,borderBottomRightRadius:i,borderBottomLeftRadius:i,width:i,maxWidth:i,height:i,maxHeight:i,size:i,top:i,right:i,bottom:i,left:i,padding:i,paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i,margin:i,marginTop:i,marginRight:i,marginBottom:i,marginLeft:i,rotate:x,rotateX:x,rotateY:x,rotateZ:x,scale:V,scaleX:V,scaleY:V,scaleZ:V,skew:x,skewX:x,skewY:x,distance:i,translateX:i,translateY:i,translateZ:i,x:i,y:i,z:i,perspective:i,transformPerspective:i,opacity:A,originX:D,originY:D,originZ:i,zIndex:H,fillOpacity:A,strokeOpacity:A,numOctaves:H};function tt(t,e,n,r){const{style:s,vars:a,transform:c,transformOrigin:u}=t;let g=!1,f=!1,m=!0;for(const o in e){const d=e[o];if(Ft(o)){a[o]=d;continue}const h=Gt[o],y=Dt(d,h);if(_.has(o)){if(g=!0,c[o]=y,!m)continue;d!==(h.default||0)&&(m=!1)}else o.startsWith("origin")?(f=!0,u[o]=y):s[o]=y}if(e.transform||(g||r?s.transform=Wt(t.transform,n,m,r):s.transform&&(s.transform="none")),f){const{originX:o="50%",originY:d="50%",originZ:h=0}=u;s.transformOrigin=`${o} ${d} ${h}`}}const O=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function et(t,e,n){for(const r in e)!b(e[r])&&!Q(r,n)&&(t[r]=e[r])}function jt({transformTemplate:t},e,n){return l.useMemo(()=>{const r=O();return tt(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function zt(t,e,n){const r=t.style||{},s={};return et(s,r,t),Object.assign(s,jt(t,e,n)),s}function Xt(t,e,n){const r={},s=zt(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const Yt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function M(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Yt.has(t)}let nt=t=>!M(t);function Zt(t){t&&(nt=e=>e.startsWith("on")?!M(e):t(e))}try{Zt(require("@emotion/is-prop-valid").default)}catch{}function Nt(t,e,n){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||(nt(s)||n===!0&&M(s)||!e&&!M(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}function I(t,e,n){return typeof t=="string"?t:i.transform(e+n*t)}function Ut(t,e,n){const r=I(e,t.x,t.width),s=I(n,t.y,t.height);return`${r} ${s}`}const qt={offset:"stroke-dashoffset",array:"stroke-dasharray"},Kt={offset:"strokeDashoffset",array:"strokeDasharray"};function _t(t,e,n=1,r=0,s=!0){t.pathLength=1;const a=s?qt:Kt;t[a.offset]=i.transform(-r);const c=i.transform(e),u=i.transform(n);t[a.array]=`${c} ${u}`}function st(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:g=0,...f},m,o,d){if(tt(t,f,m,d),o){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:y,dimensions:p}=t;h.transform&&(p&&(y.transform=h.transform),delete h.transform),p&&(s!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=Ut(p,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),c!==void 0&&_t(h,c,u,g,!1)}const rt=()=>({...O(),attrs:{}}),at=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Qt(t,e,n,r){const s=l.useMemo(()=>{const a=rt();return st(a,e,{enableHardwareAcceleration:!1},at(r),t.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};et(a,t.style,t),s.style={...a,...s.style}}return s}function Jt(t=!1){return(n,r,s,{latestValues:a},c)=>{const g=(q(n)?Qt:Xt)(r,a,c,n),f=Nt(r,typeof n=="string",t),m=n!==l.Fragment?{...f,...g,ref:s}:{},{children:o}=r,d=l.useMemo(()=>b(o)?o.get():o,[o]);return l.createElement(n,{...m,children:d})}}function te(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const a in n)t.style.setProperty(a,n[a])}const ee=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ne(t,e,n,r){te(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(ee.has(s)?s:Z(s),e.attrs[s])}function ot(t,e){const{style:n}=t,r={};for(const s in n)(b(n[s])||e.style&&b(e.style[s])||Q(s,t))&&(r[s]=n[s]);return r}function se(t,e){const n=ot(t,e);for(const r in t)if(b(t[r])||b(e[r])){const s=T.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function re(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}function ae(t){const e=l.useRef(null);return e.current===null&&(e.current=t()),e.current}const oe=t=>Array.isArray(t),ie=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Me=t=>oe(t)?t[t.length-1]||0:t;function ce(t){const e=b(t)?t.get():t;return ie(e)?e.toValue():e}function ue({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,s,a){const c={latestValues:le(r,s,a,t),renderState:e()};return n&&(c.mount=u=>n(r,u,c)),c}const it=t=>(e,n)=>{const r=l.useContext(P),s=l.useContext(X),a=()=>ue(t,e,r,s);return n?a():ae(a)};function le(t,e,n,r){const s={},a=r(t,{});for(const d in a)s[d]=ce(a[d]);let{initial:c,animate:u}=t;const g=L(t),f=St(t);e&&f&&!g&&t.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=n?n.initial===!1:!1;m=m||c===!1;const o=m?u:c;return o&&typeof o!="boolean"&&!U(o)&&(Array.isArray(o)?o:[o]).forEach(h=>{const y=re(t,h);if(!y)return;const{transitionEnd:p,transition:W,...F}=y;for(const C in F){let w=F[C];if(Array.isArray(w)){const ct=m?w.length-1:0;w=w[ct]}w!==null&&(s[C]=w)}for(const C in p)s[C]=p[C]}),s}const fe=t=>t,{schedule:G,cancel:Pe,state:Te,steps:Ae}=N(typeof requestAnimationFrame<"u"?requestAnimationFrame:fe,!0),de={useVisualState:it({scrapeMotionValuesFromProps:se,createRenderState:rt,onMount:(t,e,{renderState:n,latestValues:r})=>{G.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{st(n,r,{enableHardwareAcceleration:!1},at(e.tagName),t.transformTemplate),ne(e,n)})}})},me={useVisualState:it({scrapeMotionValuesFromProps:ot,createRenderState:O})};function ge(t,{forwardMotionProps:e=!1},n,r){return{...q(t)?de:me,preloadedFeatures:n,useRender:Jt(e),createVisualElement:r,Component:t}}const Re=kt(ge);export{v as $,St as A,_ as B,re as C,Ct as D,Ft as E,tt as F,ot as G,te as H,ee as I,Z as J,se as K,Mt as L,z as M,st as N,ne as O,X as P,at as Q,q as R,Pt as S,kt as T,At as U,ge as V,Zt as W,Tt as X,ft as Y,it as Z,P as _,lt as a,M as a0,Wt as a1,mt as a2,dt as a3,Nt as a4,It as a5,Se as a6,we as a7,be as a8,A as a9,Ce as aa,Gt as ab,x as ac,Ve as ad,ve as ae,Me as af,U as b,Pe as c,oe as d,k as e,G as f,Te as g,Ht as h,b as i,xt as j,i as k,pe as l,Re as m,fe as n,yt as o,R as p,K as q,ce as r,Ae as s,xe as t,ae as u,wt as v,T as w,Y as x,E as y,L as z};