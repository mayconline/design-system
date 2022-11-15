var B=Object.defineProperty;var d=(e,t)=>B(e,"name",{value:t,configurable:!0});import{a as O,_ as S,$ as z}from"./index.module.d83c3041.js";import{r as o}from"./index.2dd405ac.js";import{r as D}from"./index.8fb9bc8d.js";import{j as p,F as y}from"./jsx-runtime.e007a7da.js";import{I as j,r as W}from"./IconBase.esm.c63bc2ac.js";function q(e,t=[]){let n=[];function r(s,f){const a=o.exports.createContext(f),u=n.length;n=[...n,f];function i(l){const{scope:h,children:b,...m}=l,N=(h==null?void 0:h[e][u])||a,$=o.exports.useMemo(()=>m,Object.values(m));return o.exports.createElement(N.Provider,{value:$},b)}d(i,"Provider");function x(l,h){const b=(h==null?void 0:h[e][u])||a,m=o.exports.useContext(b);if(m)return m;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${s}\``)}return d(x,"useContext"),i.displayName=s+"Provider",[i,x]}d(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=d(()=>{const s=n.map(f=>o.exports.createContext(f));return d(function(a){const u=(a==null?void 0:a[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...a,[e]:u}}),[a,u])},"useScope")},"createScope");return c.scopeName=e,[r,F(c,...t)]}d(q,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function F(...e){const t=e[0];if(e.length===1)return t;const n=d(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return d(function(s){const f=r.reduce((a,{useScope:u,scopeName:i})=>{const l=u(s)[`__scope${i}`];return{...a,...l}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}d(F,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return d(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}d(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function R(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}d(R,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function K({prop:e,defaultProp:t,onChange:n=d(()=>{},"onChange")}){const[r,c]=X({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:r,a=R(n),u=o.exports.useCallback(i=>{if(s){const l=typeof i=="function"?i(e):i;l!==e&&a(l)}else c(i)},[s,e,c,a]);return[f,u]}d(K,"$71cd76cc60e0454e$export$6f32135080cb4c3");function X({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=R(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}d(X,"$71cd76cc60e0454e$var$useUncontrolledState");function Y(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}d(Y,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const P=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function H(e){const[t,n]=o.exports.useState(void 0);return P(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let f,a;if("borderBoxSize"in s){const u=s.borderBoxSize,i=Array.isArray(u)?u[0]:u;f=i.inlineSize,a=i.blockSize}else f=e.offsetWidth,a=e.offsetHeight;n({width:f,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}d(H,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Z(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}d(Z,"$fe963b355347cc68$export$3e6543de14f8614f");const M=d(e=>{const{present:t,children:n}=e,r=G(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=O(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function G(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),f=e?"mounted":"unmounted",[a,u]=Z(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const i=g(r.current);s.current=a==="mounted"?i:"none"},[a]),P(()=>{const i=r.current,x=c.current;if(x!==e){const h=s.current,b=g(i);e?u("MOUNT"):b==="none"||(i==null?void 0:i.display)==="none"?u("UNMOUNT"):u(x&&h!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,u]),P(()=>{if(t){const i=d(l=>{const b=g(r.current).includes(l.animationName);l.target===t&&b&&D.exports.flushSync(()=>u("ANIMATION_END"))},"handleAnimationEnd"),x=d(l=>{l.target===t&&(s.current=g(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",x),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",x),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:o.exports.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}d(G,"$921a889cee6df7e8$var$usePresence");function g(e){return(e==null?void 0:e.animationName)||"none"}d(g,"$921a889cee6df7e8$var$getAnimationName");const J=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],w=J.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...f}=r,a=s?z:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(a,S({},f,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),I="Checkbox",[Q,xe]=q(I),[V,ee]=Q(I),te=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:c,defaultChecked:s,required:f,disabled:a,value:u="on",onCheckedChange:i,...x}=e,[l,h]=o.exports.useState(null),b=O(t,v=>h(v)),m=o.exports.useRef(!1),N=l?Boolean(l.closest("form")):!0,[$=!1,U]=K({prop:c,defaultProp:s,onChange:i});return o.exports.createElement(V,{scope:n,state:$,disabled:a},o.exports.createElement(w.button,S({type:"button",role:"checkbox","aria-checked":k($)?"mixed":$,"aria-required":f,"data-state":T($),"data-disabled":a?"":void 0,disabled:a,value:u},x,{ref:b,onKeyDown:A(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:A(e.onClick,v=>{U(_=>k(_)?!0:!_),N&&(m.current=v.isPropagationStopped(),m.current||v.stopPropagation())})})),N&&o.exports.createElement(re,{control:l,bubbles:!m.current,name:r,value:u,checked:$,required:f,disabled:a,style:{transform:"translateX(-100%)"}}))}),ne="CheckboxIndicator",oe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=ee(ne,n);return o.exports.createElement(M,{present:r||k(s.state)||s.state===!0},o.exports.createElement(w.span,S({"data-state":T(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),re=d(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),f=Y(n),a=H(t);return o.exports.useEffect(()=>{const u=s.current,i=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(i,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:r});u.indeterminate=k(n),l.call(u,k(n)?!1:n),u.dispatchEvent(h)}},[f,n,r]),o.exports.createElement("input",S({type:"checkbox","aria-hidden":!0,defaultChecked:k(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function k(e){return e==="indeterminate"}d(k,"$e698a72e93240346$var$isIndeterminate");function T(e){return k(e)?"indeterminate":e?"checked":"unchecked"}d(T,"$e698a72e93240346$var$getState");const ce=te,se=oe;var C=new Map;C.set("bold",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return p(y,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var ie=d(function(t,n){return W(t,n,C)},"renderPath"),L=o.exports.forwardRef(function(e,t){return p(j,{...Object.assign({ref:t},e,{renderPath:ie})})});L.displayName="Check";const ae=L;function E(e){return p(ce,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded hover:opacity-70",...e,children:p(se,{asChild:!0,children:p(ae,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}d(E,"Checkbox");try{E.displayName="Checkbox",E.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:E.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch{}export{E as C};
//# sourceMappingURL=index.127e0698.js.map
