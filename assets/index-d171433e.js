import{C as A,r as S,b as te,d as P,u as he,z as h,aR as $,a as O,c as L,e as ne,E as z,w as N,V as oe,h as M,n as w,f as a,l as ae,W as re,T as le,q as Oe,g as H,bB as we,b8 as Ce,o as _e,j as E,P as Ee,L as T,k as Ie,O as Te,N as Se,bC as Q,U as V,b9 as ie,an as x,ba as W,b5 as Ne,bD as ke}from"./index-984efd80.js";import{t as ue,j as ce,c as D,k as Pe,n as de,l as Be,m as $e,f as Le,i as Me,d as q,E as G,T as xe,u as Ae}from"./index-c7325122.js";import{_ as pe}from"./plugin-vue_export-helper-1cff8a04.js";import{m as ze}from"./typescript-defaf979.js";function C(s){var t;const e=ce(s);return(t=e==null?void 0:e.$el)!=null?t:e}const R=D?window:void 0;function k(...s){let t,e,n,o;if(Pe(s[0])||Array.isArray(s[0])?([e,n,o]=s,t=R):[t,e,n,o]=s,!t)return de;Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]);const i=[],l=()=>{i.forEach(d=>d()),i.length=0},p=(d,g,r,c)=>(d.addEventListener(g,r,c),()=>d.removeEventListener(g,r,c)),f=A(()=>[C(t),ce(o)],([d,g])=>{l(),d&&i.push(...e.flatMap(r=>n.map(c=>p(d,r,c,g))))},{immediate:!0,flush:"post"}),v=()=>{f(),l()};return ue(v),v}let Z=!1;function Os(s,t,e={}){const{window:n=R,ignore:o=[],capture:i=!0,detectIframe:l=!1}=e;if(!n)return;Le&&!Z&&(Z=!0,Array.from(n.document.body.children).forEach(r=>r.addEventListener("click",de)));let p=!0;const f=r=>o.some(c=>{if(typeof c=="string")return Array.from(n.document.querySelectorAll(c)).some(y=>y===r.target||r.composedPath().includes(y));{const y=C(c);return y&&(r.target===y||r.composedPath().includes(y))}}),d=[k(n,"click",r=>{const c=C(s);if(!(!c||c===r.target||r.composedPath().includes(c))){if(r.detail===0&&(p=!f(r)),!p){p=!0;return}t(r)}},{passive:!0,capture:i}),k(n,"pointerdown",r=>{const c=C(s);c&&(p=!r.composedPath().includes(c)&&!f(r))},{passive:!0}),l&&k(n,"blur",r=>{var c;const y=C(s);((c=n.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(y!=null&&y.contains(n.document.activeElement))&&t(r)})].filter(Boolean);return()=>d.forEach(r=>r())}function De(s,t=!1){const e=S(),n=()=>e.value=!!s();return n(),Be(n,t),e}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="__vueuse_ssr_handlers__";K[J]=K[J]||{};var X=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,je=(s,t)=>{var e={};for(var n in s)Re.call(s,n)&&t.indexOf(n)<0&&(e[n]=s[n]);if(s!=null&&X)for(var n of X(s))t.indexOf(n)<0&&Ue.call(s,n)&&(e[n]=s[n]);return e};function Fe(s,t,e={}){const n=e,{window:o=R}=n,i=je(n,["window"]);let l;const p=De(()=>o&&"ResizeObserver"in o),f=()=>{l&&(l.disconnect(),l=void 0)},v=A(()=>C(s),g=>{f(),p.value&&o&&g&&(l=new ResizeObserver(t),l.observe(g,i))},{immediate:!0,flush:"post"}),d=()=>{f(),v()};return ue(d),{isSupported:p,stop:d}}var Y;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(Y||(Y={}));var He=Object.defineProperty,ee=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,se=(s,t,e)=>t in s?He(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,We=(s,t)=>{for(var e in t||(t={}))Qe.call(t,e)&&se(s,e,t[e]);if(ee)for(var e of ee(t))Ve.call(t,e)&&se(s,e,t[e]);return s};const qe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};We({linear:$e},qe);const Ge={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Ze=te({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Ke=["textContent"],Je=P({name:"ElBadge"}),Xe=P({...Je,props:Ze,setup(s,{expose:t}){const e=s,n=he("badge"),o=h(()=>e.isDot?"":$(e.value)&&$(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:o}),(i,l)=>(O(),L("div",{class:w(a(n).b())},[ne(i.$slots,"default"),z(le,{name:`${a(n).namespace.value}-zoom-in-center`,persisted:""},{default:N(()=>[oe(M("sup",{class:w([a(n).e("content"),a(n).em("content",i.type),a(n).is("fixed",!!i.$slots.default),a(n).is("dot",i.isDot)]),textContent:ae(a(o))},null,10,Ke),[[re,!i.hidden&&(a(o)||i.isDot)]])]),_:1},8,["name"])],2))}});var Ye=pe(Xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const es=Oe(Ye),fe=["success","info","warning","error"],m=ze({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:D?document.body:void 0}),ss=te({customClass:{type:String,default:m.customClass},center:{type:Boolean,default:m.center},dangerouslyUseHTMLString:{type:Boolean,default:m.dangerouslyUseHTMLString},duration:{type:Number,default:m.duration},icon:{type:Me,default:m.icon},id:{type:String,default:m.id},message:{type:H([String,Object,Function]),default:m.message},onClose:{type:H(Function),required:!1},showClose:{type:Boolean,default:m.showClose},type:{type:String,values:fe,default:m.type},offset:{type:Number,default:m.offset},zIndex:{type:Number,default:m.zIndex},grouping:{type:Boolean,default:m.grouping},repeatNum:{type:Number,default:m.repeatNum}}),ts={destroy:()=>!0},b=we([]),ns=s=>{const t=b.findIndex(o=>o.id===s),e=b[t];let n;return t>0&&(n=b[t-1]),{current:e,prev:n}},os=s=>{const{prev:t}=ns(s);return t?t.vm.exposed.bottom.value:0},as=(s,t)=>b.findIndex(n=>n.id===s)>0?20:t,rs=["id"],ls=["innerHTML"],is=P({name:"ElMessage"}),us=P({...is,props:ss,emits:ts,setup(s,{expose:t}){const e=s,{Close:n}=xe,{ns:o,zIndex:i}=Ce("message"),{currentZIndex:l,nextZIndex:p}=i,f=S(),v=S(!1),d=S(0);let g;const r=h(()=>e.type?e.type==="error"?"danger":e.type:"info"),c=h(()=>{const u=e.type;return{[o.bm("icon",u)]:u&&q[u]}}),y=h(()=>e.icon||q[e.type]||""),ge=h(()=>os(e.id)),U=h(()=>as(e.id,e.offset)+ge.value),ye=h(()=>d.value+U.value),ve=h(()=>({top:`${U.value}px`,zIndex:l.value}));function B(){e.duration!==0&&({stop:g}=Ae(()=>{I()},e.duration))}function j(){g==null||g()}function I(){v.value=!1}function be({code:u}){u===Ge.esc&&I()}return _e(()=>{B(),p(),v.value=!0}),A(()=>e.repeatNum,()=>{j(),B()}),k(document,"keydown",be),Fe(f,()=>{d.value=f.value.getBoundingClientRect().height}),t({visible:v,bottom:ye,close:I}),(u,F)=>(O(),E(le,{name:a(o).b("fade"),onBeforeLeave:u.onClose,onAfterLeave:F[0]||(F[0]=gs=>u.$emit("destroy")),persisted:""},{default:N(()=>[oe(M("div",{id:u.id,ref_key:"messageRef",ref:f,class:w([a(o).b(),{[a(o).m(u.type)]:u.type&&!u.icon},a(o).is("center",u.center),a(o).is("closable",u.showClose),u.customClass]),style:Ee(a(ve)),role:"alert",onMouseenter:j,onMouseleave:B},[u.repeatNum>1?(O(),E(a(es),{key:0,value:u.repeatNum,type:a(r),class:w(a(o).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),a(y)?(O(),E(a(G),{key:1,class:w([a(o).e("icon"),a(c)])},{default:N(()=>[(O(),E(Ie(a(y))))]),_:1},8,["class"])):T("v-if",!0),ne(u.$slots,"default",{},()=>[u.dangerouslyUseHTMLString?(O(),L(Te,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:w(a(o).e("content")),innerHTML:u.message},null,10,ls)],2112)):(O(),L("p",{key:0,class:w(a(o).e("content"))},ae(u.message),3))]),u.showClose?(O(),E(a(G),{key:2,class:w(a(o).e("closeBtn")),onClick:Se(I,["stop"])},{default:N(()=>[z(a(n))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,rs),[[re,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var cs=pe(us,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let ds=1;const me=s=>{const t=!s||V(s)||ie(s)||x(s)?{message:s}:s,e={...m,...t};if(!e.appendTo)e.appendTo=document.body;else if(V(e.appendTo)){let n=document.querySelector(e.appendTo);Ne(n)||(n=document.body),e.appendTo=n}return e},ps=s=>{const t=b.indexOf(s);if(t===-1)return;b.splice(t,1);const{handler:e}=s;e.close()},fs=({appendTo:s,...t},e)=>{const n=`message_${ds++}`,o=t.onClose,i=document.createElement("div"),l={...t,id:n,onClose:()=>{o==null||o(),ps(d)},onDestroy:()=>{W(null,i)}},p=z(cs,l,x(l.message)||ie(l.message)?{default:x(l.message)?l.message:()=>l.message}:null);p.appContext=e||_._context,W(p,i),s.appendChild(i.firstElementChild);const f=p.component,d={id:n,vnode:p,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:p.component.props};return d},_=(s={},t)=>{if(!D)return{close:()=>{}};if($(Q.max)&&b.length>=Q.max)return{close:()=>{}};const e=me(s);if(e.grouping&&b.length){const o=b.find(({vnode:i})=>{var l;return((l=i.props)==null?void 0:l.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const n=fs(e,t);return b.push(n),n.handler};fe.forEach(s=>{_[s]=(t={},e)=>{const n=me(t);return _({...n,type:s},e)}});function ms(s){for(const t of b)(!s||s===t.props.type)&&t.handler.close()}_.closeAll=ms;_._context=null;const ws=ke(_,"$message");export{Ge as E,Fe as a,ws as b,C as c,Os as o,k as u};
