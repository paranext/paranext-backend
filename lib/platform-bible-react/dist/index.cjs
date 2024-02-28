"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const O=require("react/jsx-runtime"),ke=require("react"),xt=require("platform-bible-utils"),De=require("@mui/material"),$i=require("react-data-grid"),Rs=require("@mui/styled-engine");function Hl(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const I=Hl(ke);var Ps="";function Ms(e){Ps=e}function jl(e=""){if(!Ps){const t=[...document.getElementsByTagName("script")],o=t.find(r=>r.hasAttribute("data-shoelace"));if(o)Ms(o.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";r&&(s=r.getAttribute("src")),Ms(s.split("/").slice(0,-1).join("/"))}}return Ps.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Bn=Object.defineProperty,ql=Object.defineProperties,Wl=Object.getOwnPropertyDescriptor,Kl=Object.getOwnPropertyDescriptors,zi=Object.getOwnPropertySymbols,Xl=Object.prototype.hasOwnProperty,Yl=Object.prototype.propertyIsEnumerable,ds=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ei=(e,t,o)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Lt=(e,t)=>{for(var o in t||(t={}))Xl.call(t,o)&&Ei(e,o,t[o]);if(zi)for(var o of zi(t))Yl.call(t,o)&&Ei(e,o,t[o]);return e},mr=(e,t)=>ql(e,Kl(t)),l=(e,t,o,r)=>{for(var s=r>1?void 0:r?Wl(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Bn(t,o,s),s},Gl=function(e,t){this[0]=e,this[1]=t},Jl=e=>{var t=e[ds("asyncIterator")],o=!1,r,s={};return t==null?(t=e[ds("iterator")](),r=i=>s[i]=n=>t[i](n)):(t=t.call(e),r=i=>s[i]=n=>{if(o){if(o=!1,i==="throw")throw n;return n}return o=!0,{done:!1,value:new Gl(new Promise(c=>{var a=t[i](n);if(!(a instanceof Object))throw TypeError("Object expected");c(a)}),1)}}),s[ds("iterator")]=()=>s,r("next"),"throw"in t?r("throw"):s.throw=i=>{throw i},"return"in t&&r("return"),s};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir=globalThis,Zs=Ir.ShadowRoot&&(Ir.ShadyCSS===void 0||Ir.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qs=Symbol(),Ai=new WeakMap;let Vn=class{constructor(t,o,r){if(this._$cssResult$=!0,r!==Qs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(Zs&&t===void 0){const r=o!==void 0&&o.length===1;r&&(t=Ai.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ai.set(o,t))}return t}toString(){return this.cssText}};const Zl=e=>new Vn(typeof e=="string"?e:e+"",void 0,Qs),L=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Vn(o,e,Qs)},Ql=(e,t)=>{if(Zs)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const r=document.createElement("style"),s=Ir.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=o.cssText,e.appendChild(r)}},Ti=Zs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const r of t.cssRules)o+=r.cssText;return Zl(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ea,defineProperty:ta,getOwnPropertyDescriptor:oa,getOwnPropertyNames:ra,getOwnPropertySymbols:sa,getPrototypeOf:ia}=Object,Xt=globalThis,Oi=Xt.trustedTypes,na=Oi?Oi.emptyScript:"",us=Xt.reactiveElementPolyfillSupport,tr=(e,t)=>e,No={toAttribute(e,t){switch(t){case Boolean:e=e?na:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},ei=(e,t)=>!ea(e,t),Ni={attribute:!0,type:String,converter:No,reflect:!1,hasChanged:ei};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Xt.litPropertyMetadata??(Xt.litPropertyMetadata=new WeakMap);class zo extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=Ni){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,o);s!==void 0&&ta(this.prototype,t,s)}}static getPropertyDescriptor(t,o,r){const{get:s,set:i}=oa(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);i.call(this,n),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ni}static _$Ei(){if(this.hasOwnProperty(tr("elementProperties")))return;const t=ia(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tr("properties"))){const o=this.properties,r=[...ra(o),...sa(o)];for(const s of r)this.createProperty(s,o[s])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[r,s]of o)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const s=this._$Eu(o,r);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)o.unshift(Ti(s))}else t!==void 0&&o.push(Ti(t));return o}static _$Eu(t,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(o=>o(this))}addController(t){var o;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)==null||o.call(t))}removeController(t){var o;(o=this._$EO)==null||o.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ql(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostConnected)==null?void 0:r.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostDisconnected)==null?void 0:r.call(o)})}attributeChangedCallback(t,o,r){this._$AK(t,r)}_$EC(t,o){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:No).toAttribute(o,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,o){var i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:No;this._$Em=s,this[s]=c.fromAttribute(o,n.type),this._$Em=null}}requestUpdate(t,o,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ei)(this[t],o))return;this.P(t,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,o,r){this._$AL.has(t)||this._$AL.set(t,o),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(o)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(o)}willUpdate(t){}_$AE(t){var o;(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(t){}firstUpdated(t){}}zo.elementStyles=[],zo.shadowRootOptions={mode:"open"},zo[tr("elementProperties")]=new Map,zo[tr("finalized")]=new Map,us==null||us({ReactiveElement:zo}),(Xt.reactiveElementVersions??(Xt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or=globalThis,Lr=or.trustedTypes,Ii=Lr?Lr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Fn="$lit$",qt=`lit$${(Math.random()+"").slice(9)}$`,Un="?"+qt,la=`<${Un}>`,uo=document,dr=()=>uo.createComment(""),ur=e=>e===null||typeof e!="object"&&typeof e!="function",Hn=Array.isArray,aa=e=>Hn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",hs=`[ 	
\f\r]`,Wo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ri=/-->/g,Pi=/>/g,ro=RegExp(`>|${hs}(?:([^\\s"'>=/]+)(${hs}*=${hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mi=/'/g,Di=/"/g,jn=/^(?:script|style|textarea|title)$/i,ca=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),C=ca(1),at=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),Li=new WeakMap,ao=uo.createTreeWalker(uo,129);function qn(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ii!==void 0?Ii.createHTML(t):t}const da=(e,t)=>{const o=e.length-1,r=[];let s,i=t===2?"<svg>":"",n=Wo;for(let c=0;c<o;c++){const a=e[c];let d,f,h=-1,p=0;for(;p<a.length&&(n.lastIndex=p,f=n.exec(a),f!==null);)p=n.lastIndex,n===Wo?f[1]==="!--"?n=Ri:f[1]!==void 0?n=Pi:f[2]!==void 0?(jn.test(f[2])&&(s=RegExp("</"+f[2],"g")),n=ro):f[3]!==void 0&&(n=ro):n===ro?f[0]===">"?(n=s??Wo,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,d=f[1],n=f[3]===void 0?ro:f[3]==='"'?Di:Mi):n===Di||n===Mi?n=ro:n===Ri||n===Pi?n=Wo:(n=ro,s=void 0);const m=n===ro&&e[c+1].startsWith("/>")?" ":"";i+=n===Wo?a+la:h>=0?(r.push(d),a.slice(0,h)+Fn+a.slice(h)+qt+m):a+qt+(h===-2?c:m)}return[qn(e,i+(e[o]||"<?>")+(t===2?"</svg>":"")),r]};let Ds=class Wn{constructor({strings:t,_$litType$:o},r){let s;this.parts=[];let i=0,n=0;const c=t.length-1,a=this.parts,[d,f]=da(t,o);if(this.el=Wn.createElement(d,r),ao.currentNode=this.el.content,o===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=ao.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Fn)){const p=f[n++],m=s.getAttribute(h).split(qt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:g[2],strings:m,ctor:g[1]==="."?ha:g[1]==="?"?pa:g[1]==="@"?fa:Yr}),s.removeAttribute(h)}else h.startsWith(qt)&&(a.push({type:6,index:i}),s.removeAttribute(h));if(jn.test(s.tagName)){const h=s.textContent.split(qt),p=h.length-1;if(p>0){s.textContent=Lr?Lr.emptyScript:"";for(let m=0;m<p;m++)s.append(h[m],dr()),ao.nextNode(),a.push({type:2,index:++i});s.append(h[p],dr())}}}else if(s.nodeType===8)if(s.data===Un)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(qt,h+1))!==-1;)a.push({type:7,index:i}),h+=qt.length-1}i++}}static createElement(t,o){const r=uo.createElement("template");return r.innerHTML=t,r}};function Io(e,t,o=e,r){var n,c;if(t===at)return t;let s=r!==void 0?(n=o._$Co)==null?void 0:n[r]:o._$Cl;const i=ur(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=s:o._$Cl=s),s!==void 0&&(t=Io(e,s._$AS(e,t.values),s,r)),t}let ua=class{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??uo).importNode(o,!0);ao.currentNode=s;let i=ao.nextNode(),n=0,c=0,a=r[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new ti(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new ma(i,this,t)),this._$AV.push(d),a=r[++c]}n!==(a==null?void 0:a.index)&&(i=ao.nextNode(),n++)}return ao.currentNode=uo,s}p(t){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}},ti=class Kn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,r,s){this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Io(this,t,o),ur(t)?t===Se||t==null||t===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):t!==this._$AH&&t!==at&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):aa(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Se&&ur(this._$AH)?this._$AA.nextSibling.data=t:this.T(uo.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ds.createElement(qn(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new ua(s,this),c=n.u(this.options);n.p(o),this.T(c),this._$AH=n}}_$AC(t){let o=Li.get(t.strings);return o===void 0&&Li.set(t.strings,o=new Ds(t)),o}k(t){Hn(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,s=0;for(const i of t)s===o.length?o.push(r=new Kn(this.S(dr()),this.S(dr()),this,this.options)):r=o[s],r._$AI(i),s++;s<o.length&&(this._$AR(r&&r._$AB.nextSibling,s),o.length=s)}_$AR(t=this._$AA.nextSibling,o){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,o);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}},Yr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,s,i){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=t,this.name=o,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Se}_$AI(t,o=this,r,s){const i=this.strings;let n=!1;if(i===void 0)t=Io(this,t,o,0),n=!ur(t)||t!==this._$AH&&t!==at,n&&(this._$AH=t);else{const c=t;let a,d;for(t=i[0],a=0;a<i.length-1;a++)d=Io(this,c[r+a],o,a),d===at&&(d=this._$AH[a]),n||(n=!ur(d)||d!==this._$AH[a]),d===Se?t=Se:t!==Se&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ha=class extends Yr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Se?void 0:t}},pa=class extends Yr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Se)}},fa=class extends Yr{constructor(t,o,r,s,i){super(t,o,r,s,i),this.type=5}_$AI(t,o=this){if((t=Io(this,t,o,0)??Se)===at)return;const r=this._$AH,s=t===Se&&r!==Se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Se&&(r===Se||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}},ma=class{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Io(this,t)}};const ps=or.litHtmlPolyfillSupport;ps==null||ps(Ds,ti),(or.litHtmlVersions??(or.litHtmlVersions=[])).push("3.1.2");const ga=(e,t,o)=>{const r=(o==null?void 0:o.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const i=(o==null?void 0:o.renderBefore)??null;r._$litPart$=s=new ti(t.insertBefore(dr(),i),i,void 0,o??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rr=class extends zo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ga(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return at}};var Ln;rr._$litElement$=!0,rr.finalized=!0,(Ln=globalThis.litElementHydrateSupport)==null||Ln.call(globalThis,{LitElement:rr});const fs=globalThis.litElementPolyfillSupport;fs==null||fs({LitElement:rr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var ba=L`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,F=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const va={attribute:!0,type:String,converter:No,reflect:!1,hasChanged:ei},ya=(e=va,t,o)=>{const{kind:r,metadata:s}=o;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(o.name,e),r==="accessor"){const{name:n}=o;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,e)},init(c){return c!==void 0&&this.P(n,void 0,e),c}}}if(r==="setter"){const{name:n}=o;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+r)};function u(e){return(t,o)=>typeof o=="object"?ya(e,t,o):((r,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e){return u({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oi(e){return(t,o)=>{const r=typeof t=="function"?t:t[o];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(e,t){return(o,r,s)=>{const i=n=>{var c;return((c=n.renderRoot)==null?void 0:c.querySelector(e))??null};if(t){const{get:n,set:c}=typeof r=="object"?o:s??(()=>{const a=Symbol();return{get(){return this[a]},set(d){this[a]=d}}})();return Ls(o,r,{get(){let a=n.call(this);return a===void 0&&(a=i(this),(a!==null||this.hasUpdated)&&c.call(this,a)),a}})}return Ls(o,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wa(e){return(t,o)=>Ls(t,o,{async get(){var r;return await this.updateComplete,((r=this.renderRoot)==null?void 0:r.querySelector(e))??null}})}var R=class extends rr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,Lt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},o);return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${i} has already been registered.`)}};R.version="2.14.0";R.dependencies={};l([u()],R.prototype,"dir",2);l([u()],R.prototype,"lang",2);var Gr=class extends R{render(){return C` <slot></slot> `}};Gr.styles=[F,ba];/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa=new Set(["children","localName","ref","style","className"]),Bi=new WeakMap,_a=(e,t,o,r,s)=>{const i=s==null?void 0:s[t];i===void 0||o===r?(e[t]=o,o==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((n,c,a)=>{let d=Bi.get(n);d===void 0&&Bi.set(n,d=new Map);let f=d.get(c);a!==void 0?f===void 0?(d.set(c,f={handleEvent:a}),n.addEventListener(c,f)):f.handleEvent=a:f!==void 0&&(d.delete(c),n.removeEventListener(c,f))})(e,i,o)},D=({react:e,tagName:t,elementClass:o,events:r,displayName:s})=>{const i=new Set(Object.keys(r??{})),n=e.forwardRef((c,a)=>{const d=e.useRef(null),f=e.useRef(null),h={},p={};for(const[m,g]of Object.entries(c))xa.has(m)?h[m==="className"?"class":m]=g:i.has(m)||m in o.prototype?p[m]=g:h[m]=g;return e.useLayoutEffect(()=>{if(f.current!==null){for(const m in p)_a(f.current,m,c[m],d.current?d.current[m]:void 0,r);d.current=c}}),e.useLayoutEffect(()=>{var m;(m=f.current)==null||m.removeAttribute("defer-hydration")},[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e.useCallback(m=>{f.current=m,typeof a=="function"?a(m):a!==null&&(a.current=m)},[a])})});return n.displayName=s??o.name,n};var ka="sl-visually-hidden";Gr.define("sl-visually-hidden");D({tagName:ka,elementClass:Gr,react:I,events:{},displayName:"SlVisuallyHidden"});var Ca=L`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Sa=L`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,mo=(e="value")=>(t,o)=>{const r=t.constructor,s=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,n,c){var a;const d=r.getPropertyOptions(e),f=typeof d.attribute=="string"?d.attribute:e;if(i===f){const h=d.converter||No,m=(typeof h=="function"?h:(a=h==null?void 0:h.fromAttribute)!=null?a:No.fromAttribute)(c,d.type);this[e]!==m&&(this[o]=m)}s.call(this,i,n,c)}},Ko=new WeakMap,Xo=new WeakMap,Yo=new WeakMap,ms=new WeakSet,$r=new WeakMap,Bt=class{constructor(e,t){this.handleFormData=o=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(c=>{o.formData.append(s,c.toString())}):o.formData.append(s,i.toString()))},this.handleFormSubmit=o=>{var r;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Ko.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),$r.set(this.host,[])},this.handleInteraction=o=>{const r=$r.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Lt({form:o=>{const r=o.form;if(r){const i=o.getRootNode().getElementById(r);if(i)return i}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),$r.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),$r.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ko.has(this.form)?Ko.get(this.form).add(this.host):Ko.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Xo.has(this.form)||(Xo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Yo.has(this.form)||(Yo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ko.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Xo.has(this.form)&&(this.form.reportValidity=Xo.get(this.form),Xo.delete(this.form)),Yo.has(this.form)&&(this.form.checkValidity=Yo.get(this.form),Yo.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ms.add(e):ms.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&o.setAttribute(r,t.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!ms.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Jr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),$a=Object.freeze(mr(Lt({},Jr),{valid:!1,valueMissing:!0})),za=Object.freeze(mr(Lt({},Jr),{valid:!1,customError:!0})),Ze=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Ea(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(o+=r.textContent)}),o}var Aa={name:"default",resolver:e=>jl(`assets/icons/${e}.svg`)},Ta=Aa,Vi={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Oa={name:"system",resolver:e=>e in Vi?`data:image/svg+xml,${encodeURIComponent(Vi[e])}`:""},Na=Oa,Ia=[Ta,Na],Bs=[];function Ra(e){Bs.push(e)}function Pa(e){Bs=Bs.filter(t=>t!==e)}function Fi(e){return Ia.find(t=>t.name===e)}var Ma=L`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function z(e,t){const o=Lt({waitUntilFirstUpdate:!1},t);return(r,s)=>{const{update:i}=r,n=Array.isArray(e)?e:[e];r.update=function(c){n.forEach(a=>{const d=a;if(c.has(d)){const f=c.get(d),h=this[d];f!==h&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,h)}}),i.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Da=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Xn=e=>e.strings===void 0,La={},Ba=(e,t=La)=>e._$AH=t;var Go=Symbol(),zr=Symbol(),gs,bs=new Map,we=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let r;if(t!=null&&t.spriteSheet)return C`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Go:zr}catch{return zr}try{const s=document.createElement("div");s.innerHTML=await r.text();const i=s.firstElementChild;if(((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())!=="svg")return Go;gs||(gs=new DOMParser);const c=gs.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Go}catch{return Go}}connectedCallback(){super.connectedCallback(),Ra(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Pa(this)}getIconSource(){const e=Fi(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),r=o?Fi(this.library):void 0;if(!t){this.svg=null;return}let s=bs.get(t);if(s||(s=this.resolveIcon(t,r),bs.set(t,s)),!this.initialRender)return;const i=await s;if(i===zr&&bs.delete(t),t===this.getIconSource().url){if(Da(i)){this.svg=i;return}switch(i){case zr:case Go:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};we.styles=[F,Ma];l([H()],we.prototype,"svg",2);l([u({reflect:!0})],we.prototype,"name",2);l([u()],we.prototype,"src",2);l([u()],we.prototype,"label",2);l([u({reflect:!0})],we.prototype,"library",2);l([z("label")],we.prototype,"handleLabelChange",1);l([z(["name","src","library"])],we.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gr=e=>(...t)=>({_$litDirective$:e,values:t});let br=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=gr(class extends br{constructor(e){var t;if(super(e),e.type!==Tt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const o=e.element.classList;for(const i of this.st)i in t||(o.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(n?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return at}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=e=>e??Se;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=gr(class extends br{constructor(e){if(super(e),e.type!==Tt.PROPERTY&&e.type!==Tt.ATTRIBUTE&&e.type!==Tt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Xn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===at||t===Se)return t;const o=e.element,r=e.name;if(e.type===Tt.PROPERTY){if(t===o[r])return at}else if(e.type===Tt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return at}else if(e.type===Tt.ATTRIBUTE&&o.getAttribute(r)===t+"")return at;return Ba(e),t}});var Be=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ze(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return C`
      <div
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${U({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${P(this.value)}
            .indeterminate=${ho(this.indeterminate)}
            .checked=${ho(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?C`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?C`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Be.styles=[F,Sa];Be.dependencies={"sl-icon":we};l([A('input[type="checkbox"]')],Be.prototype,"input",2);l([H()],Be.prototype,"hasFocus",2);l([u()],Be.prototype,"title",2);l([u()],Be.prototype,"name",2);l([u()],Be.prototype,"value",2);l([u({reflect:!0})],Be.prototype,"size",2);l([u({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],Be.prototype,"checked",2);l([u({type:Boolean,reflect:!0})],Be.prototype,"indeterminate",2);l([mo("checked")],Be.prototype,"defaultChecked",2);l([u({reflect:!0})],Be.prototype,"form",2);l([u({type:Boolean,reflect:!0})],Be.prototype,"required",2);l([u({attribute:"help-text"})],Be.prototype,"helpText",2);l([z("disabled",{waitUntilFirstUpdate:!0})],Be.prototype,"handleDisabledChange",1);l([z(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Be.prototype,"handleStateChange",1);var Va=L`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Vs=new Set,Fa=new MutationObserver(Zn),Eo=new Map;let Yn=document.documentElement.dir||"ltr",Gn=document.documentElement.lang||navigator.language,no;Fa.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Jn(...e){e.map(t=>{const o=t.$code.toLowerCase();Eo.has(o)?Eo.set(o,Object.assign(Object.assign({},Eo.get(o)),t)):Eo.set(o,t),no||(no=t)}),Zn()}function Zn(){Yn=document.documentElement.dir||"ltr",Gn=document.documentElement.lang||navigator.language,[...Vs.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ua=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Vs.add(this.host)}hostDisconnected(){Vs.delete(this.host)}dir(){return`${this.host.dir||Yn}`.toLowerCase()}lang(){return`${this.host.lang||Gn}`.toLowerCase()}getTranslationData(t){var o,r;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s==null?void 0:s.language.toLowerCase(),n=(r=(o=s==null?void 0:s.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",c=Eo.get(`${i}-${n}`),a=Eo.get(i);return{locale:s,language:i,region:n,primary:c,secondary:a}}exists(t,o){var r;const{primary:s,secondary:i}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[t]||i&&i[t]||o.includeFallback&&no&&no[t])}term(t,...o){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(s&&s[t])i=s[t];else if(no&&no[t])i=no[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...o):i}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,o)}};var Qn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Jn(Qn);var Ha=Qn,ue=class extends Ua{};Jn(Ha);var Do=class extends R{constructor(){super(...arguments),this.localize=new ue(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Do.styles=[F,Va];var el=new Map,ja=new WeakMap;function qa(e){return e??{keyframes:[],options:{duration:0}}}function Ui(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ve(e,t){el.set(e,qa(t))}function $e(e,t,o){const r=ja.get(e);if(r!=null&&r[t])return Ui(r[t],o.dir);const s=el.get(t);return s?Ui(s,o.dir):{keyframes:[],options:{duration:0}}}function Ne(e,t,o){return new Promise(r=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,mr(Lt({},o),{duration:Fs()?0:o.duration}));s.addEventListener("cancel",r,{once:!0}),s.addEventListener("finish",r,{once:!0})})}function Hi(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Fs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Le(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{t.cancel(),requestAnimationFrame(o)})))}function Br(e,t){return e.map(o=>mr(Lt({},o),{height:o.height==="auto"?`${t}px`:o.height}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ji(e,t,o){return e?t(e):o==null?void 0:o(e)}var Ie=class Us extends R{constructor(){super(...arguments),this.localize=new ue(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Le(this.childrenContainer);const{keyframes:t,options:o}=$e(this,"tree-item.collapse",{dir:this.localize.dir()});await Ne(this.childrenContainer,Br(t,this.childrenContainer.scrollHeight),o),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&Us.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Le(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:o}=$e(this,"tree-item.expand",{dir:this.localize.dir()});await Ne(this.childrenContainer,Br(t,this.childrenContainer.scrollHeight),o),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(o=>Us.isTreeItem(o)&&(t||!o.disabled)):[]}render(){const t=this.localize.dir()==="rtl",o=!this.loading&&(!this.isLeaf||this.lazy);return C`
      <div
        part="base"
        class="${U({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":o,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${U({"tree-item__expand-button":!0,"tree-item__expand-button--visible":o})}
            aria-hidden="true"
          >
            ${ji(this.loading,()=>C` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${ji(this.selectable,()=>C`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${ho(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Ie.styles=[F,Ca];Ie.dependencies={"sl-checkbox":Be,"sl-icon":we,"sl-spinner":Do};l([H()],Ie.prototype,"indeterminate",2);l([H()],Ie.prototype,"isLeaf",2);l([H()],Ie.prototype,"loading",2);l([H()],Ie.prototype,"selectable",2);l([u({type:Boolean,reflect:!0})],Ie.prototype,"expanded",2);l([u({type:Boolean,reflect:!0})],Ie.prototype,"selected",2);l([u({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],Ie.prototype,"lazy",2);l([A("slot:not([name])")],Ie.prototype,"defaultSlot",2);l([A("slot[name=children]")],Ie.prototype,"childrenSlot",2);l([A(".tree-item__item")],Ie.prototype,"itemElement",2);l([A(".tree-item__children")],Ie.prototype,"childrenContainer",2);l([A(".tree-item__expand-button slot")],Ie.prototype,"expandButtonSlot",2);l([z("loading",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleLoadingChange",1);l([z("disabled")],Ie.prototype,"handleDisabledChange",1);l([z("selected")],Ie.prototype,"handleSelectedChange",1);l([z("expanded",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleExpandedChange",1);l([z("expanded",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleExpandAnimation",1);l([z("lazy",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleLazyChange",1);var Ao=Ie;ve("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});ve("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var Wa="sl-tree-item";Ao.define("sl-tree-item");D({tagName:Wa,elementClass:Ao,react:I,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Ka=L`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Lo=L`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Ke=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ze(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return C`
      <div
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${U({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${P(this.value)}
            .checked=${ho(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ke.styles=[F,Lo,Ka];l([A('input[type="checkbox"]')],Ke.prototype,"input",2);l([H()],Ke.prototype,"hasFocus",2);l([u()],Ke.prototype,"title",2);l([u()],Ke.prototype,"name",2);l([u()],Ke.prototype,"value",2);l([u({reflect:!0})],Ke.prototype,"size",2);l([u({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],Ke.prototype,"checked",2);l([mo("checked")],Ke.prototype,"defaultChecked",2);l([u({reflect:!0})],Ke.prototype,"form",2);l([u({type:Boolean,reflect:!0})],Ke.prototype,"required",2);l([u({attribute:"help-text"})],Ke.prototype,"helpText",2);l([z("checked",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleCheckedChange",1);l([z("disabled",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleDisabledChange",1);var Xa="sl-switch";Ke.define("sl-switch");D({tagName:Xa,elementClass:Ke,react:I,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var Ya=L`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ga=L`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=Symbol.for(""),Ja=e=>{if((e==null?void 0:e.r)===tl)return e==null?void 0:e._$litStatic$},Vr=(e,...t)=>({_$litStatic$:t.reduce((o,r,s)=>o+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[s+1],e[0]),r:tl}),qi=new Map,Za=e=>(t,...o)=>{const r=o.length;let s,i;const n=[],c=[];let a,d=0,f=!1;for(;d<r;){for(a=t[d];d<r&&(i=o[d],(s=Ja(i))!==void 0);)a+=s+t[++d],f=!0;d!==r&&c.push(i),n.push(a),d++}if(d===r&&n.push(t[r]),f){const h=n.join("$$lit$$");(t=qi.get(h))===void 0&&(n.raw=n,qi.set(h,t=n)),o=c}return e(t,...o)},sr=Za(C);var Ve=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Vr`a`:Vr`button`;return sr`
      <${t}
        part="base"
        class=${U({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${P(e?void 0:this.disabled)}
        type=${P(e?void 0:"button")}
        href=${P(e?this.href:void 0)}
        target=${P(e?this.target:void 0)}
        download=${P(e?this.download:void 0)}
        rel=${P(e&&this.target?"noreferrer noopener":void 0)}
        role=${P(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${P(this.name)}
          library=${P(this.library)}
          src=${P(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ve.styles=[F,Ga];Ve.dependencies={"sl-icon":we};l([A(".icon-button")],Ve.prototype,"button",2);l([H()],Ve.prototype,"hasFocus",2);l([u()],Ve.prototype,"name",2);l([u()],Ve.prototype,"library",2);l([u()],Ve.prototype,"src",2);l([u()],Ve.prototype,"href",2);l([u()],Ve.prototype,"target",2);l([u()],Ve.prototype,"download",2);l([u()],Ve.prototype,"label",2);l([u({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);var Qa=0,Ct=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.attrId=++Qa,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,C`
      <div
        part="base"
        class=${U({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Ct.styles=[F,Ya];Ct.dependencies={"sl-icon-button":Ve};l([A(".tab")],Ct.prototype,"tab",2);l([u({reflect:!0})],Ct.prototype,"panel",2);l([u({type:Boolean,reflect:!0})],Ct.prototype,"active",2);l([u({type:Boolean})],Ct.prototype,"closable",2);l([u({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);l([z("active")],Ct.prototype,"handleActiveChange",1);l([z("disabled")],Ct.prototype,"handleDisabledChange",1);var ec="sl-tab";Ct.define("sl-tab");D({tagName:ec,elementClass:Ct,react:I,events:{onSlClose:"sl-close"},displayName:"SlTab"});var tc=L`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,oc=0,Bo=class extends R{constructor(){super(...arguments),this.attrId=++oc,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return C`
      <slot
        part="base"
        class=${U({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Bo.styles=[F,tc];l([u({reflect:!0})],Bo.prototype,"name",2);l([u({type:Boolean,reflect:!0})],Bo.prototype,"active",2);l([z("active")],Bo.prototype,"handleActiveChange",1);var rc="sl-tab-panel";Bo.define("sl-tab-panel");D({tagName:rc,elementClass:Bo,react:I,events:{},displayName:"SlTabPanel"});var sc=L`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function ic(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Hs=new Set;function nc(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ir(e){if(Hs.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=nc();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function nr(e){Hs.delete(e),Hs.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function js(e,t,o="vertical",r="smooth"){const s=ic(e,t),i=s.top+t.scrollTop,n=s.left+t.scrollLeft,c=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,d=t.scrollTop,f=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(n<c?t.scrollTo({left:n,behavior:r}):n+e.clientWidth>a&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:r})),(o==="vertical"||o==="both")&&(i<d?t.scrollTo({top:i,behavior:r}):i+e.clientHeight>f&&t.scrollTo({top:i-t.offsetHeight+e.clientHeight,behavior:r}))}var et=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((o,r)=>{var s;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),r.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(o=>e.includeDisabled?o.tagName.toLowerCase()==="sl-tab":o.tagName.toLowerCase()==="sl-tab"&&!o.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const o=e.target.closest("sl-tab");(o==null?void 0:o.closest("sl-tab-group"))===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(e){const o=e.target.closest("sl-tab");if((o==null?void 0:o.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const s=this.tabs.find(n=>n.matches(":focus")),i=this.localize.dir()==="rtl";if((s==null?void 0:s.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(s);e.key==="Home"?n=0:e.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&js(this.tabs[n],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Lt({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const o=this.activeTab;this.activeTab=e,this.tabs.forEach(r=>r.active=r===this.activeTab),this.panels.forEach(r=>{var s;return r.active=r.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&js(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(o=>o.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,o=e.clientHeight,r=this.localize.dir()==="rtl",s=this.getAllTabs(),n=s.slice(0,s.indexOf(e)).reduce((c,a)=>({left:c.left+a.clientWidth,top:c.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(o=>o.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${U({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};et.styles=[F,sc];et.dependencies={"sl-icon-button":Ve};l([A(".tab-group")],et.prototype,"tabGroup",2);l([A(".tab-group__body")],et.prototype,"body",2);l([A(".tab-group__nav")],et.prototype,"nav",2);l([A(".tab-group__indicator")],et.prototype,"indicator",2);l([H()],et.prototype,"hasScrollControls",2);l([u()],et.prototype,"placement",2);l([u()],et.prototype,"activation",2);l([u({attribute:"no-scroll-controls",type:Boolean})],et.prototype,"noScrollControls",2);l([z("noScrollControls",{waitUntilFirstUpdate:!0})],et.prototype,"updateScrollControls",1);l([z("placement",{waitUntilFirstUpdate:!0})],et.prototype,"syncIndicator",1);var lc="sl-tab-group";et.define("sl-tab-group");D({tagName:lc,elementClass:et,react:I,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var ac=L`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Vt=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${U({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?C`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Vt.styles=[F,ac];Vt.dependencies={"sl-icon-button":Ve};l([u({reflect:!0})],Vt.prototype,"variant",2);l([u({reflect:!0})],Vt.prototype,"size",2);l([u({type:Boolean,reflect:!0})],Vt.prototype,"pill",2);l([u({type:Boolean})],Vt.prototype,"removable",2);var cc="sl-tag";Vt.define("sl-tag");D({tagName:cc,elementClass:Vt,react:I,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var dc=L`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,uc=L`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Yt=Math.min,nt=Math.max,Fr=Math.round,Er=Math.floor,Gt=e=>({x:e,y:e}),hc={left:"right",right:"left",bottom:"top",top:"bottom"},pc={start:"end",end:"start"};function qs(e,t,o){return nt(e,Yt(t,o))}function Vo(e,t){return typeof e=="function"?e(t):e}function Jt(e){return e.split("-")[0]}function Fo(e){return e.split("-")[1]}function ol(e){return e==="x"?"y":"x"}function ri(e){return e==="y"?"height":"width"}function vr(e){return["top","bottom"].includes(Jt(e))?"y":"x"}function si(e){return ol(vr(e))}function fc(e,t,o){o===void 0&&(o=!1);const r=Fo(e),s=si(e),i=ri(s);let n=s==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(n=Ur(n)),[n,Ur(n)]}function mc(e){const t=Ur(e);return[Ws(e),t,Ws(t)]}function Ws(e){return e.replace(/start|end/g,t=>pc[t])}function gc(e,t,o){const r=["left","right"],s=["right","left"],i=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:r:t?r:s;case"left":case"right":return t?i:n;default:return[]}}function bc(e,t,o,r){const s=Fo(e);let i=gc(Jt(e),o==="start",r);return s&&(i=i.map(n=>n+"-"+s),t&&(i=i.concat(i.map(Ws)))),i}function Ur(e){return e.replace(/left|right|bottom|top/g,t=>hc[t])}function vc(e){return{top:0,right:0,bottom:0,left:0,...e}}function rl(e){return typeof e!="number"?vc(e):{top:e,right:e,bottom:e,left:e}}function Hr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Wi(e,t,o){let{reference:r,floating:s}=e;const i=vr(t),n=si(t),c=ri(n),a=Jt(t),d=i==="y",f=r.x+r.width/2-s.width/2,h=r.y+r.height/2-s.height/2,p=r[c]/2-s[c]/2;let m;switch(a){case"top":m={x:f,y:r.y-s.height};break;case"bottom":m={x:f,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:h};break;case"left":m={x:r.x-s.width,y:h};break;default:m={x:r.x,y:r.y}}switch(Fo(t)){case"start":m[n]-=p*(o&&d?-1:1);break;case"end":m[n]+=p*(o&&d?-1:1);break}return m}const yc=async(e,t,o)=>{const{placement:r="bottom",strategy:s="absolute",middleware:i=[],platform:n}=o,c=i.filter(Boolean),a=await(n.isRTL==null?void 0:n.isRTL(t));let d=await n.getElementRects({reference:e,floating:t,strategy:s}),{x:f,y:h}=Wi(d,r,a),p=r,m={},g=0;for(let b=0;b<c.length;b++){const{name:v,fn:_}=c[b],{x,y:k,data:w,reset:y}=await _({x:f,y:h,initialPlacement:r,placement:p,strategy:s,middlewareData:m,rects:d,platform:n,elements:{reference:e,floating:t}});if(f=x??f,h=k??h,m={...m,[v]:{...m[v],...w}},y&&g<=50){g++,typeof y=="object"&&(y.placement&&(p=y.placement),y.rects&&(d=y.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:s}):y.rects),{x:f,y:h}=Wi(d,p,a)),b=-1;continue}}return{x:f,y:h,placement:p,strategy:s,middlewareData:m}};async function ii(e,t){var o;t===void 0&&(t={});const{x:r,y:s,platform:i,rects:n,elements:c,strategy:a}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=Vo(t,e),g=rl(m),v=c[p?h==="floating"?"reference":"floating":h],_=Hr(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(v)))==null||o?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:a})),x=h==="floating"?{...n.floating,x:r,y:s}:n.reference,k=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),w=await(i.isElement==null?void 0:i.isElement(k))?await(i.getScale==null?void 0:i.getScale(k))||{x:1,y:1}:{x:1,y:1},y=Hr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:k,strategy:a}):x);return{top:(_.top-y.top+g.top)/w.y,bottom:(y.bottom-_.bottom+g.bottom)/w.y,left:(_.left-y.left+g.left)/w.x,right:(y.right-_.right+g.right)/w.x}}const wc=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:r,placement:s,rects:i,platform:n,elements:c,middlewareData:a}=t,{element:d,padding:f=0}=Vo(e,t)||{};if(d==null)return{};const h=rl(f),p={x:o,y:r},m=si(s),g=ri(m),b=await n.getDimensions(d),v=m==="y",_=v?"top":"left",x=v?"bottom":"right",k=v?"clientHeight":"clientWidth",w=i.reference[g]+i.reference[m]-p[m]-i.floating[g],y=p[m]-i.reference[m],E=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let V=E?E[k]:0;(!V||!await(n.isElement==null?void 0:n.isElement(E)))&&(V=c.floating[k]||i.floating[g]);const j=w/2-y/2,M=V/2-b[g]/2-1,S=Yt(h[_],M),X=Yt(h[x],M),K=S,xe=V-b[g]-X,G=V/2-b[g]/2+j,J=qs(K,G,xe),_e=!a.arrow&&Fo(s)!=null&&G!=J&&i.reference[g]/2-(G<K?S:X)-b[g]/2<0,Re=_e?G<K?G-K:G-xe:0;return{[m]:p[m]+Re,data:{[m]:J,centerOffset:G-J-Re,..._e&&{alignmentOffset:Re}},reset:_e}}}),xc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,r;const{placement:s,middlewareData:i,rects:n,initialPlacement:c,platform:a,elements:d}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...v}=Vo(e,t);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const _=Jt(s),x=Jt(c)===c,k=await(a.isRTL==null?void 0:a.isRTL(d.floating)),w=p||(x||!b?[Ur(c)]:mc(c));!p&&g!=="none"&&w.push(...bc(c,b,g,k));const y=[c,...w],E=await ii(t,v),V=[];let j=((r=i.flip)==null?void 0:r.overflows)||[];if(f&&V.push(E[_]),h){const K=fc(s,n,k);V.push(E[K[0]],E[K[1]])}if(j=[...j,{placement:s,overflows:V}],!V.every(K=>K<=0)){var M,S;const K=(((M=i.flip)==null?void 0:M.index)||0)+1,xe=y[K];if(xe)return{data:{index:K,overflows:j},reset:{placement:xe}};let G=(S=j.filter(J=>J.overflows[0]<=0).sort((J,_e)=>J.overflows[1]-_e.overflows[1])[0])==null?void 0:S.placement;if(!G)switch(m){case"bestFit":{var X;const J=(X=j.map(_e=>[_e.placement,_e.overflows.filter(Re=>Re>0).reduce((Re,It)=>Re+It,0)]).sort((_e,Re)=>_e[1]-Re[1])[0])==null?void 0:X[0];J&&(G=J);break}case"initialPlacement":G=c;break}if(s!==G)return{reset:{placement:G}}}return{}}}};async function _c(e,t){const{placement:o,platform:r,elements:s}=e,i=await(r.isRTL==null?void 0:r.isRTL(s.floating)),n=Jt(o),c=Fo(o),a=vr(o)==="y",d=["left","top"].includes(n)?-1:1,f=i&&a?-1:1,h=Vo(t,e);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return c&&typeof g=="number"&&(m=c==="end"?g*-1:g),a?{x:m*f,y:p*d}:{x:p*d,y:m*f}}const kc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,r;const{x:s,y:i,placement:n,middlewareData:c}=t,a=await _c(t,e);return n===((o=c.offset)==null?void 0:o.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:s+a.x,y:i+a.y,data:{...a,placement:n}}}}},Cc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:r,placement:s}=t,{mainAxis:i=!0,crossAxis:n=!1,limiter:c={fn:v=>{let{x:_,y:x}=v;return{x:_,y:x}}},...a}=Vo(e,t),d={x:o,y:r},f=await ii(t,a),h=vr(Jt(s)),p=ol(h);let m=d[p],g=d[h];if(i){const v=p==="y"?"top":"left",_=p==="y"?"bottom":"right",x=m+f[v],k=m-f[_];m=qs(x,m,k)}if(n){const v=h==="y"?"top":"left",_=h==="y"?"bottom":"right",x=g+f[v],k=g-f[_];g=qs(x,g,k)}const b=c.fn({...t,[p]:m,[h]:g});return{...b,data:{x:b.x-o,y:b.y-r}}}}},Sc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:r,platform:s,elements:i}=t,{apply:n=()=>{},...c}=Vo(e,t),a=await ii(t,c),d=Jt(o),f=Fo(o),h=vr(o)==="y",{width:p,height:m}=r.floating;let g,b;d==="top"||d==="bottom"?(g=d,b=f===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(b=d,g=f==="end"?"top":"bottom");const v=m-a[g],_=p-a[b],x=!t.middlewareData.shift;let k=v,w=_;if(h){const E=p-a.left-a.right;w=f||x?Yt(_,E):E}else{const E=m-a.top-a.bottom;k=f||x?Yt(v,E):E}if(x&&!f){const E=nt(a.left,0),V=nt(a.right,0),j=nt(a.top,0),M=nt(a.bottom,0);h?w=p-2*(E!==0||V!==0?E+V:nt(a.left,a.right)):k=m-2*(j!==0||M!==0?j+M:nt(a.top,a.bottom))}await n({...t,availableWidth:w,availableHeight:k});const y=await s.getDimensions(i.floating);return p!==y.width||m!==y.height?{reset:{rects:!0}}:{}}}};function Zt(e){return sl(e)?(e.nodeName||"").toLowerCase():"#document"}function ct(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ft(e){var t;return(t=(sl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function sl(e){return e instanceof Node||e instanceof ct(e).Node}function Mt(e){return e instanceof Element||e instanceof ct(e).Element}function Nt(e){return e instanceof HTMLElement||e instanceof ct(e).HTMLElement}function Ki(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ct(e).ShadowRoot}function yr(e){const{overflow:t,overflowX:o,overflowY:r,display:s}=ft(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(s)}function $c(e){return["table","td","th"].includes(Zt(e))}function ni(e){const t=li(),o=ft(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function zc(e){let t=Ro(e);for(;Nt(t)&&!Zr(t);){if(ni(t))return t;t=Ro(t)}return null}function li(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Zr(e){return["html","body","#document"].includes(Zt(e))}function ft(e){return ct(e).getComputedStyle(e)}function Qr(e){return Mt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ro(e){if(Zt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ki(e)&&e.host||Ft(e);return Ki(t)?t.host:t}function il(e){const t=Ro(e);return Zr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Nt(t)&&yr(t)?t:il(t)}function hr(e,t,o){var r;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=il(e),i=s===((r=e.ownerDocument)==null?void 0:r.body),n=ct(s);return i?t.concat(n,n.visualViewport||[],yr(s)?s:[],n.frameElement&&o?hr(n.frameElement):[]):t.concat(s,hr(s,[],o))}function nl(e){const t=ft(e);let o=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const s=Nt(e),i=s?e.offsetWidth:o,n=s?e.offsetHeight:r,c=Fr(o)!==i||Fr(r)!==n;return c&&(o=i,r=n),{width:o,height:r,$:c}}function ai(e){return Mt(e)?e:e.contextElement}function To(e){const t=ai(e);if(!Nt(t))return Gt(1);const o=t.getBoundingClientRect(),{width:r,height:s,$:i}=nl(t);let n=(i?Fr(o.width):o.width)/r,c=(i?Fr(o.height):o.height)/s;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}const Ec=Gt(0);function ll(e){const t=ct(e);return!li()||!t.visualViewport?Ec:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ac(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==ct(e)?!1:t}function po(e,t,o,r){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),i=ai(e);let n=Gt(1);t&&(r?Mt(r)&&(n=To(r)):n=To(e));const c=Ac(i,o,r)?ll(i):Gt(0);let a=(s.left+c.x)/n.x,d=(s.top+c.y)/n.y,f=s.width/n.x,h=s.height/n.y;if(i){const p=ct(i),m=r&&Mt(r)?ct(r):r;let g=p.frameElement;for(;g&&r&&m!==p;){const b=To(g),v=g.getBoundingClientRect(),_=ft(g),x=v.left+(g.clientLeft+parseFloat(_.paddingLeft))*b.x,k=v.top+(g.clientTop+parseFloat(_.paddingTop))*b.y;a*=b.x,d*=b.y,f*=b.x,h*=b.y,a+=x,d+=k,g=ct(g).frameElement}}return Hr({width:f,height:h,x:a,y:d})}function Tc(e){let{rect:t,offsetParent:o,strategy:r}=e;const s=Nt(o),i=Ft(o);if(o===i)return t;let n={scrollLeft:0,scrollTop:0},c=Gt(1);const a=Gt(0);if((s||!s&&r!=="fixed")&&((Zt(o)!=="body"||yr(i))&&(n=Qr(o)),Nt(o))){const d=po(o);c=To(o),a.x=d.x+o.clientLeft,a.y=d.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-n.scrollLeft*c.x+a.x,y:t.y*c.y-n.scrollTop*c.y+a.y}}function Oc(e){return Array.from(e.getClientRects())}function al(e){return po(Ft(e)).left+Qr(e).scrollLeft}function Nc(e){const t=Ft(e),o=Qr(e),r=e.ownerDocument.body,s=nt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=nt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let n=-o.scrollLeft+al(e);const c=-o.scrollTop;return ft(r).direction==="rtl"&&(n+=nt(t.clientWidth,r.clientWidth)-s),{width:s,height:i,x:n,y:c}}function Ic(e,t){const o=ct(e),r=Ft(e),s=o.visualViewport;let i=r.clientWidth,n=r.clientHeight,c=0,a=0;if(s){i=s.width,n=s.height;const d=li();(!d||d&&t==="fixed")&&(c=s.offsetLeft,a=s.offsetTop)}return{width:i,height:n,x:c,y:a}}function Rc(e,t){const o=po(e,!0,t==="fixed"),r=o.top+e.clientTop,s=o.left+e.clientLeft,i=Nt(e)?To(e):Gt(1),n=e.clientWidth*i.x,c=e.clientHeight*i.y,a=s*i.x,d=r*i.y;return{width:n,height:c,x:a,y:d}}function Xi(e,t,o){let r;if(t==="viewport")r=Ic(e,o);else if(t==="document")r=Nc(Ft(e));else if(Mt(t))r=Rc(t,o);else{const s=ll(e);r={...t,x:t.x-s.x,y:t.y-s.y}}return Hr(r)}function cl(e,t){const o=Ro(e);return o===t||!Mt(o)||Zr(o)?!1:ft(o).position==="fixed"||cl(o,t)}function Pc(e,t){const o=t.get(e);if(o)return o;let r=hr(e,[],!1).filter(c=>Mt(c)&&Zt(c)!=="body"),s=null;const i=ft(e).position==="fixed";let n=i?Ro(e):e;for(;Mt(n)&&!Zr(n);){const c=ft(n),a=ni(n);!a&&c.position==="fixed"&&(s=null),(i?!a&&!s:!a&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||yr(n)&&!a&&cl(e,n))?r=r.filter(f=>f!==n):s=c,n=Ro(n)}return t.set(e,r),r}function Mc(e){let{element:t,boundary:o,rootBoundary:r,strategy:s}=e;const n=[...o==="clippingAncestors"?Pc(t,this._c):[].concat(o),r],c=n[0],a=n.reduce((d,f)=>{const h=Xi(t,f,s);return d.top=nt(h.top,d.top),d.right=Yt(h.right,d.right),d.bottom=Yt(h.bottom,d.bottom),d.left=nt(h.left,d.left),d},Xi(t,c,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Dc(e){const{width:t,height:o}=nl(e);return{width:t,height:o}}function Lc(e,t,o){const r=Nt(t),s=Ft(t),i=o==="fixed",n=po(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const a=Gt(0);if(r||!r&&!i)if((Zt(t)!=="body"||yr(s))&&(c=Qr(t)),r){const d=po(t,!0,i,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else s&&(a.x=al(s));return{x:n.left+c.scrollLeft-a.x,y:n.top+c.scrollTop-a.y,width:n.width,height:n.height}}function Yi(e,t){return!Nt(e)||ft(e).position==="fixed"?null:t?t(e):e.offsetParent}function dl(e,t){const o=ct(e);if(!Nt(e))return o;let r=Yi(e,t);for(;r&&$c(r)&&ft(r).position==="static";)r=Yi(r,t);return r&&(Zt(r)==="html"||Zt(r)==="body"&&ft(r).position==="static"&&!ni(r))?o:r||zc(e)||o}const Bc=async function(e){let{reference:t,floating:o,strategy:r}=e;const s=this.getOffsetParent||dl,i=this.getDimensions;return{reference:Lc(t,await s(o),r),floating:{x:0,y:0,...await i(o)}}};function Vc(e){return ft(e).direction==="rtl"}const Rr={convertOffsetParentRelativeRectToViewportRelativeRect:Tc,getDocumentElement:Ft,getClippingRect:Mc,getOffsetParent:dl,getElementRects:Bc,getClientRects:Oc,getDimensions:Dc,getScale:To,isElement:Mt,isRTL:Vc};function Fc(e,t){let o=null,r;const s=Ft(e);function i(){clearTimeout(r),o&&o.disconnect(),o=null}function n(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),i();const{left:d,top:f,width:h,height:p}=e.getBoundingClientRect();if(c||t(),!h||!p)return;const m=Er(f),g=Er(s.clientWidth-(d+h)),b=Er(s.clientHeight-(f+p)),v=Er(d),x={rootMargin:-m+"px "+-g+"px "+-b+"px "+-v+"px",threshold:nt(0,Yt(1,a))||1};let k=!0;function w(y){const E=y[0].intersectionRatio;if(E!==a){if(!k)return n();E?n(!1,E):r=setTimeout(()=>{n(!1,1e-7)},100)}k=!1}try{o=new IntersectionObserver(w,{...x,root:s.ownerDocument})}catch{o=new IntersectionObserver(w,x)}o.observe(e)}return n(!0),i}function Uc(e,t,o,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,d=ai(e),f=s||i?[...d?hr(d):[],...hr(t)]:[];f.forEach(_=>{s&&_.addEventListener("scroll",o,{passive:!0}),i&&_.addEventListener("resize",o)});const h=d&&c?Fc(d,o):null;let p=-1,m=null;n&&(m=new ResizeObserver(_=>{let[x]=_;x&&x.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{m&&m.observe(t)})),o()}),d&&!a&&m.observe(d),m.observe(t));let g,b=a?po(e):null;a&&v();function v(){const _=po(e);b&&(_.x!==b.x||_.y!==b.y||_.width!==b.width||_.height!==b.height)&&o(),b=_,g=requestAnimationFrame(v)}return o(),()=>{f.forEach(_=>{s&&_.removeEventListener("scroll",o),i&&_.removeEventListener("resize",o)}),h&&h(),m&&m.disconnect(),m=null,a&&cancelAnimationFrame(g)}}const Hc=Cc,jc=xc,Gi=Sc,qc=wc,Wc=(e,t,o)=>{const r=new Map,s={platform:Rr,...o},i={...s.platform,_c:r};return yc(e,t,{...s,platform:i})};function Kc(e){return Xc(e)}function vs(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Xc(e){for(let t=e;t;t=vs(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=vs(e);t;t=vs(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||t.tagName==="BODY"))return t}return null}function Yc(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var he=class extends R{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let r=0,s=0,i=0,n=0,c=0,a=0,d=0,f=0;o?e.top<t.top?(r=e.left,s=e.bottom,i=e.right,n=e.bottom,c=t.left,a=t.top,d=t.right,f=t.top):(r=t.left,s=t.bottom,i=t.right,n=t.bottom,c=e.left,a=e.top,d=e.right,f=e.top):e.left<t.left?(r=e.right,s=e.top,i=t.left,n=t.top,c=e.right,a=e.bottom,d=t.left,f=t.bottom):(r=t.right,s=t.top,i=e.left,n=e.top,c=t.right,a=t.bottom,d=e.left,f=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Yc(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Uc(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[kc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Gi({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(jc({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Hc({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Gi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(qc({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?o=>Rr.getOffsetParent(o,Kc):Rr.getOffsetParent;Wc(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:mr(Lt({},Rr),{getOffsetParent:t})}).then(({x:o,y:r,middlewareData:s,placement:i})=>{const n=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const a=s.arrow.x,d=s.arrow.y;let f="",h="",p="",m="";if(this.arrowPlacement==="start"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?g:"",m=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":g,m=n?g:"",p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof a=="number"?`${a}px`:"",f=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:f,right:h,bottom:p,left:m,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${U({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${U({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};he.styles=[F,uc];l([A(".popup")],he.prototype,"popup",2);l([A(".popup__arrow")],he.prototype,"arrowEl",2);l([u()],he.prototype,"anchor",2);l([u({type:Boolean,reflect:!0})],he.prototype,"active",2);l([u({reflect:!0})],he.prototype,"placement",2);l([u({reflect:!0})],he.prototype,"strategy",2);l([u({type:Number})],he.prototype,"distance",2);l([u({type:Number})],he.prototype,"skidding",2);l([u({type:Boolean})],he.prototype,"arrow",2);l([u({attribute:"arrow-placement"})],he.prototype,"arrowPlacement",2);l([u({attribute:"arrow-padding",type:Number})],he.prototype,"arrowPadding",2);l([u({type:Boolean})],he.prototype,"flip",2);l([u({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],he.prototype,"flipFallbackPlacements",2);l([u({attribute:"flip-fallback-strategy"})],he.prototype,"flipFallbackStrategy",2);l([u({type:Object})],he.prototype,"flipBoundary",2);l([u({attribute:"flip-padding",type:Number})],he.prototype,"flipPadding",2);l([u({type:Boolean})],he.prototype,"shift",2);l([u({type:Object})],he.prototype,"shiftBoundary",2);l([u({attribute:"shift-padding",type:Number})],he.prototype,"shiftPadding",2);l([u({attribute:"auto-size"})],he.prototype,"autoSize",2);l([u()],he.prototype,"sync",2);l([u({type:Object})],he.prototype,"autoSizeBoundary",2);l([u({attribute:"auto-size-padding",type:Number})],he.prototype,"autoSizePadding",2);l([u({attribute:"hover-bridge",type:Boolean})],he.prototype,"hoverBridge",2);function Je(e,t){return new Promise(o=>{function r(s){s.target===e&&(e.removeEventListener(t,r),o())}e.addEventListener(t,r)})}var Ue=class extends R{constructor(){super(),this.localize=new ue(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Hi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Hi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Le(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:r}=$e(this,"tooltip.show",{dir:this.localize.dir()});await Ne(this.popup.popup,o,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Le(this.body);const{keyframes:o,options:r}=$e(this,"tooltip.hide",{dir:this.localize.dir()});await Ne(this.popup.popup,o,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Je(this,"sl-after-hide")}render(){return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${U({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ue.styles=[F,dc];Ue.dependencies={"sl-popup":he};l([A("slot:not([name])")],Ue.prototype,"defaultSlot",2);l([A(".tooltip__body")],Ue.prototype,"body",2);l([A("sl-popup")],Ue.prototype,"popup",2);l([u()],Ue.prototype,"content",2);l([u()],Ue.prototype,"placement",2);l([u({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);l([u({type:Number})],Ue.prototype,"distance",2);l([u({type:Boolean,reflect:!0})],Ue.prototype,"open",2);l([u({type:Number})],Ue.prototype,"skidding",2);l([u()],Ue.prototype,"trigger",2);l([u({type:Boolean})],Ue.prototype,"hoist",2);l([z("open",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleOpenChange",1);l([z(["content","distance","hoist","placement","skidding"])],Ue.prototype,"handleOptionsChange",1);l([z("disabled")],Ue.prototype,"handleDisabledChange",1);ve("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ve("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Gc="sl-tooltip";Ue.define("sl-tooltip");D({tagName:Gc,elementClass:Ue,react:I,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var Jc=L`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Me(e,t,o){const r=s=>Object.is(s,-0)?0:s;return e<t?r(t):e>o?r(o):r(e)}function Ji(e,t=!1){function o(i){const n=i.getChildrenItems({includeDisabled:!1});if(n.length){const c=n.every(d=>d.selected),a=n.every(d=>!d.selected&&!d.indeterminate);i.selected=c,i.indeterminate=!c&&!a}}function r(i){const n=i.parentElement;Ao.isTreeItem(n)&&(o(n),r(n))}function s(i){for(const n of i.getChildrenItems())n.selected=t?i.selected||n.selected:!n.disabled&&i.selected,s(n);t&&o(i)}s(e),r(e)}var Qt=class extends R{constructor(){super(),this.selection="single",this.localize=new ue(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const o=e.querySelector(`[slot="${t}-icon"]`);o===null?e.append(this.getExpandButtonIcon(t)):o.hasAttribute("data-default")&&o.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const o=[...t.addedNodes].filter(Ao.isTreeItem),r=[...t.removedNodes].filter(Ao.isTreeItem);o.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ao.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const o=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(o){const r=o.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${e}-icon`,r}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Ji(e);else if(this.selection==="single"||e.isLeaf){const r=this.getAllTreeItems();for(const s of r)s.selected=s===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const o=this.selectedItems;(t.length!==o.length||o.some(r=>!t.includes(r)))&&Promise.all(o.map(r=>r.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:o}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(s=>{var i;return["input","textarea"].includes((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())}))return;const t=this.getFocusableItems(),o=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const s=t.findIndex(a=>a.matches(":focus")),i=t[s],n=a=>{const d=t[Me(a,0,t.length-1)];this.focusItem(d)},c=a=>{i.expanded=a};e.key==="ArrowDown"?n(s+1):e.key==="ArrowUp"?n(s-1):o&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"?!i||i.disabled||i.expanded||i.isLeaf&&!i.lazy?n(s+1):c(!0):o&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"?!i||i.disabled||i.isLeaf||!i.expanded?n(s-1):c(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(i.disabled||this.selectItem(i))}}handleClick(e){const t=e.target,o=t.closest("sl-tree-item"),r=e.composedPath().some(s=>{var i;return(i=s==null?void 0:s.classList)==null?void 0:i.contains("tree-item__expand-button")});!o||o.disabled||t!==this.clickTarget||(r?o.expanded=!o.expanded:this.selectItem(o))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const o of t)o.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(o=>Ji(o,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=o=>o.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(o=>{var r;if(o.disabled)return!1;const s=(r=o.parentElement)==null?void 0:r.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||t.has(s))&&t.add(o),!t.has(o)})}render(){return C`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Qt.styles=[F,Jc];l([A("slot:not([name])")],Qt.prototype,"defaultSlot",2);l([A("slot[name=expand-icon]")],Qt.prototype,"expandedIconSlot",2);l([A("slot[name=collapse-icon]")],Qt.prototype,"collapsedIconSlot",2);l([u()],Qt.prototype,"selection",2);l([z("selection")],Qt.prototype,"handleSelectionChange",1);var Zc="sl-tree";Qt.define("sl-tree");D({tagName:Zc,elementClass:Qt,react:I,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Qc=L`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,ce=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ze(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,r="preserve"){const s=t??this.input.selectionStart,i=o??this.input.selectionEnd;this.input.setRangeText(e,s,i,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,r=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${U({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${P(this.name)}
              .value=${ho(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${P(this.placeholder)}
              rows=${P(this.rows)}
              minlength=${P(this.minlength)}
              maxlength=${P(this.maxlength)}
              autocapitalize=${P(this.autocapitalize)}
              autocorrect=${P(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${P(this.spellcheck)}
              enterkeyhint=${P(this.enterkeyhint)}
              inputmode=${P(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ce.styles=[F,Lo,Qc];l([A(".textarea__control")],ce.prototype,"input",2);l([H()],ce.prototype,"hasFocus",2);l([u()],ce.prototype,"title",2);l([u()],ce.prototype,"name",2);l([u()],ce.prototype,"value",2);l([u({reflect:!0})],ce.prototype,"size",2);l([u({type:Boolean,reflect:!0})],ce.prototype,"filled",2);l([u()],ce.prototype,"label",2);l([u({attribute:"help-text"})],ce.prototype,"helpText",2);l([u()],ce.prototype,"placeholder",2);l([u({type:Number})],ce.prototype,"rows",2);l([u()],ce.prototype,"resize",2);l([u({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],ce.prototype,"readonly",2);l([u({reflect:!0})],ce.prototype,"form",2);l([u({type:Boolean,reflect:!0})],ce.prototype,"required",2);l([u({type:Number})],ce.prototype,"minlength",2);l([u({type:Number})],ce.prototype,"maxlength",2);l([u()],ce.prototype,"autocapitalize",2);l([u()],ce.prototype,"autocorrect",2);l([u()],ce.prototype,"autocomplete",2);l([u({type:Boolean})],ce.prototype,"autofocus",2);l([u()],ce.prototype,"enterkeyhint",2);l([u({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ce.prototype,"spellcheck",2);l([u()],ce.prototype,"inputmode",2);l([mo()],ce.prototype,"defaultValue",2);l([z("disabled",{waitUntilFirstUpdate:!0})],ce.prototype,"handleDisabledChange",1);l([z("rows",{waitUntilFirstUpdate:!0})],ce.prototype,"handleRowsChange",1);l([z("value",{waitUntilFirstUpdate:!0})],ce.prototype,"handleValueChange",1);var ed="sl-textarea";ce.define("sl-textarea");D({tagName:ed,elementClass:ce,react:I,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var td=L`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,ze=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this),this.hasSlotController=new Ze(this,"help-text","label"),this.localize=new ue(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,o=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=this.localize.dir()==="rtl",i=t*e;if(s){const n=`${t-i}px + ${e} * ${r}`;this.output.style.translate=`calc((${n} - ${o/2}px - ${r} / 2))`}else{const n=`${i}px - ${e} * ${r}`;this.output.style.translate=`calc(${n} - ${o/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,r=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${U({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${P(this.name)}
              ?disabled=${this.disabled}
              min=${P(this.min)}
              max=${P(this.max)}
              step=${P(this.step)}
              .value=${ho(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?C`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ze.styles=[F,Lo,td];l([A(".range__control")],ze.prototype,"input",2);l([A(".range__tooltip")],ze.prototype,"output",2);l([H()],ze.prototype,"hasFocus",2);l([H()],ze.prototype,"hasTooltip",2);l([u()],ze.prototype,"title",2);l([u()],ze.prototype,"name",2);l([u({type:Number})],ze.prototype,"value",2);l([u()],ze.prototype,"label",2);l([u({attribute:"help-text"})],ze.prototype,"helpText",2);l([u({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);l([u({type:Number})],ze.prototype,"min",2);l([u({type:Number})],ze.prototype,"max",2);l([u({type:Number})],ze.prototype,"step",2);l([u()],ze.prototype,"tooltip",2);l([u({attribute:!1})],ze.prototype,"tooltipFormatter",2);l([u({reflect:!0})],ze.prototype,"form",2);l([mo()],ze.prototype,"defaultValue",2);l([oi({passive:!0})],ze.prototype,"handleThumbDragStart",1);l([z("value",{waitUntilFirstUpdate:!0})],ze.prototype,"handleValueChange",1);l([z("disabled",{waitUntilFirstUpdate:!0})],ze.prototype,"handleDisabledChange",1);l([z("hasTooltip",{waitUntilFirstUpdate:!0})],ze.prototype,"syncRange",1);var od="sl-range";ze.define("sl-range");D({tagName:od,elementClass:ze,react:I,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var rd=L`
  :host {
    display: contents;
  }
`,wr=class extends R{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(o=>this.resizeObserver.unobserve(o)),this.observedElements=[],t.forEach(o=>{this.resizeObserver.observe(o),this.observedElements.push(o)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};wr.styles=[F,rd];l([u({type:Boolean,reflect:!0})],wr.prototype,"disabled",2);l([z("disabled",{waitUntilFirstUpdate:!0})],wr.prototype,"handleDisabledChange",1);var sd="sl-resize-observer";wr.define("sl-resize-observer");D({tagName:sd,elementClass:wr,react:I,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var id=L`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul="important",nd=" !"+ul,Qe=gr(class extends br{constructor(e){var t;if(super(e),e.type!==Tt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const r=e[o];return r==null?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:o}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?o.removeProperty(r):o[r]=null);for(const r in t){const s=t[r];if(s!=null){this.ft.add(r);const i=typeof s=="string"&&s.endsWith(nd);r.includes("-")||i?o.setProperty(r,i?s.slice(0,-11):s,i?ul:""):o[r]=s}}return at}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ks=class extends br{constructor(t){if(super(t),this.it=Se,t.type!==Tt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Se||t==null)return this._t=void 0,this.it=t;if(t===at)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}};Ks.directiveName="unsafeHTML",Ks.resultType=1;const Pr=gr(Ks);var Xe=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:o,right:r,width:s}=this.rating.getBoundingClientRect(),i=t?this.roundToPrecision((r-e)/s*this.max,this.precision):this.roundToPrecision((e-o)/s*this.max,this.precision);return Me(i,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||o&&e.key==="ArrowRight"){const s=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||o&&e.key==="ArrowLeft"){const s=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const o=1/t;return Math.ceil(e*o)/o}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let o=0;return this.disabled||this.readonly?o=this.value:o=this.isHovering?this.hoverValue:this.value,C`
      <div
        part="base"
        class=${U({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(r=>o>r&&o<r+1?C`
                <span
                  class=${U({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===r+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${Qe({clipPath:e?`inset(0 ${(o-r)*100}% 0 0)`:`inset(0 0 0 ${(o-r)*100}%)`})}
                  >
                    ${Pr(this.getSymbol(r+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Qe({clipPath:e?`inset(0 0 0 ${100-(o-r)*100}%)`:`inset(0 ${100-(o-r)*100}% 0 0)`})}
                  >
                    ${Pr(this.getSymbol(r+1))}
                  </div>
                </span>
              `:C`
              <span
                class=${U({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===r+1,"rating__symbol--active":o>=r+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Pr(this.getSymbol(r+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Xe.styles=[F,id];Xe.dependencies={"sl-icon":we};l([A(".rating")],Xe.prototype,"rating",2);l([H()],Xe.prototype,"hoverValue",2);l([H()],Xe.prototype,"isHovering",2);l([u()],Xe.prototype,"label",2);l([u({type:Number})],Xe.prototype,"value",2);l([u({type:Number})],Xe.prototype,"max",2);l([u({type:Number})],Xe.prototype,"precision",2);l([u({type:Boolean,reflect:!0})],Xe.prototype,"readonly",2);l([u({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);l([u()],Xe.prototype,"getSymbol",2);l([oi({passive:!0})],Xe.prototype,"handleTouchMove",1);l([z("hoverValue")],Xe.prototype,"handleHoverValueChange",1);l([z("isHovering")],Xe.prototype,"handleIsHoveringChange",1);var ld="sl-rating";Xe.define("sl-rating");D({tagName:ld,elementClass:Xe,react:I,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var ad=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Ut=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const o=t.getTime()-e.getTime(),{unit:r,value:s}=ad.find(i=>Math.abs(o)<i.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(o/s),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let i;r==="minute"?i=Ar("second"):r==="hour"?i=Ar("minute"):r==="day"?i=Ar("hour"):i=Ar("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),i)}return C` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};l([H()],Ut.prototype,"isoTime",2);l([H()],Ut.prototype,"relativeTime",2);l([H()],Ut.prototype,"titleTime",2);l([u()],Ut.prototype,"date",2);l([u()],Ut.prototype,"format",2);l([u()],Ut.prototype,"numeric",2);l([u({type:Boolean})],Ut.prototype,"sync",2);function Ar(e){const o={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return o-Date.now()%o}var cd="sl-relative-time";Ut.define("sl-relative-time");D({tagName:cd,elementClass:Ut,react:I,events:{},displayName:"SlRelativeTime"});var dd=L`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,re=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ze(this,"help-text","label"),this.localize=new ue(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>C`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,o=t.closest(".select__clear")!==null,r=t.closest("sl-icon-button")!==null;if(!(o||r)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const s=this.getAllOptions(),i=s.indexOf(this.currentOption);let n=Math.max(0,i);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=i+1,n>s.length-1&&(n=0)):e.key==="ArrowUp"?(n=i-1,n<0&&(n=s.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=s.length-1),this.setCurrentOption(s[n])}if(e.key.length===1||e.key==="Backspace"){const s=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const i of s)if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var e;const t=this.getRootNode();"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))}),t.addEventListener("focusin",this.handleDocumentFocusIn),t.addEventListener("keydown",this.handleDocumentKeyDown),t.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;const t=this.getRootNode();t.removeEventListener("focusin",this.handleDocumentFocusIn),t.removeEventListener("keydown",this.handleDocumentKeyDown),t.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const o=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||o||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const o=e.target.closest("sl-option"),r=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("sl-option")?(e.forEach(r=>o.push(r.value)),this.setSelectedOptions(e.filter(r=>t.includes(r.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),o=Array.isArray(e)?e:[e];t.forEach(r=>r.selected=!1),o.length&&o.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,o,r;this.selectedOptions=this.getAllOptions().filter(s=>s.selected),this.multiple?(this.value=this.selectedOptions.map(s=>s.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(r=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?r:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(e,t);return C`<div @sl-remove=${r=>this.handleTagRemove(r,e)}>
          ${typeof o=="string"?Pr(o):o}
        </div>`}else if(t===this.maxOptionsVisible)return C`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return C``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(o=>t.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Le(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=$e(this,"select.show",{dir:this.localize.dir()});await Ne(this.popup.popup,e,t),this.currentOption&&js(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Le(this);const{keyframes:e,options:t}=$e(this,"select.hide",{dir:this.localize.dir()});await Ne(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Je(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Je(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,r=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&this.value.length>0,i=this.placeholder&&this.value.length===0;return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${U({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":i,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?C`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?C`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};re.styles=[F,Lo,dd];re.dependencies={"sl-icon":we,"sl-popup":he,"sl-tag":Vt};l([A(".select")],re.prototype,"popup",2);l([A(".select__combobox")],re.prototype,"combobox",2);l([A(".select__display-input")],re.prototype,"displayInput",2);l([A(".select__value-input")],re.prototype,"valueInput",2);l([A(".select__listbox")],re.prototype,"listbox",2);l([H()],re.prototype,"hasFocus",2);l([H()],re.prototype,"displayLabel",2);l([H()],re.prototype,"currentOption",2);l([H()],re.prototype,"selectedOptions",2);l([u()],re.prototype,"name",2);l([u({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],re.prototype,"value",2);l([mo()],re.prototype,"defaultValue",2);l([u({reflect:!0})],re.prototype,"size",2);l([u()],re.prototype,"placeholder",2);l([u({type:Boolean,reflect:!0})],re.prototype,"multiple",2);l([u({attribute:"max-options-visible",type:Number})],re.prototype,"maxOptionsVisible",2);l([u({type:Boolean,reflect:!0})],re.prototype,"disabled",2);l([u({type:Boolean})],re.prototype,"clearable",2);l([u({type:Boolean,reflect:!0})],re.prototype,"open",2);l([u({type:Boolean})],re.prototype,"hoist",2);l([u({type:Boolean,reflect:!0})],re.prototype,"filled",2);l([u({type:Boolean,reflect:!0})],re.prototype,"pill",2);l([u()],re.prototype,"label",2);l([u({reflect:!0})],re.prototype,"placement",2);l([u({attribute:"help-text"})],re.prototype,"helpText",2);l([u({reflect:!0})],re.prototype,"form",2);l([u({type:Boolean,reflect:!0})],re.prototype,"required",2);l([u()],re.prototype,"getTag",2);l([z("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);l([z("value",{waitUntilFirstUpdate:!0})],re.prototype,"handleValueChange",1);l([z("open",{waitUntilFirstUpdate:!0})],re.prototype,"handleOpenChange",1);ve("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ve("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var ud="sl-select";re.define("sl-select");D({tagName:ud,elementClass:re,react:I,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var hd=L`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,es=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return C`
      <div
        part="base"
        class=${U({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};es.styles=[F,hd];l([u()],es.prototype,"effect",2);var pd="sl-skeleton";es.define("sl-skeleton");D({tagName:pd,elementClass:es,react:I,events:{},displayName:"SlSkeleton"});var fd="sl-spinner";Do.define("sl-spinner");D({tagName:fd,elementClass:Do,react:I,events:{},displayName:"SlSpinner"});var md=L`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function lr(e,t){function o(s){const i=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,c=i.left+n.scrollX,a=i.top+n.scrollY,d=s.pageX-c,f=s.pageY-a;t!=null&&t.onMove&&t.onMove(d,f)}function r(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&o(t.initialEvent)}var tt=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),lr(this,{onMove:(o,r)=>{let s=this.vertical?r:o;this.primary==="end"&&(s=this.size-s),this.snap&&this.snap.split(" ").forEach(n=>{let c;n.endsWith("%")?c=this.size*(parseFloat(n)/100):c=parseFloat(n),t&&!this.vertical&&(c=this.size-c),s>=c-this.snapThreshold&&s<=c+this.snapThreshold&&(s=c)}),this.position=Me(this.pixelsToPercentage(s),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const o=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=o),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=o),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Me(t,0,100)}}handleResize(e){const{width:t,height:o}=e[0].contentRect;this.size=this.vertical?o:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",o=this.localize.dir()==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.primary==="end"?o&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${r}`:o&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${s}`,this.style[t]="",C`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${P(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};tt.styles=[F,md];l([A(".divider")],tt.prototype,"divider",2);l([u({type:Number,reflect:!0})],tt.prototype,"position",2);l([u({attribute:"position-in-pixels",type:Number})],tt.prototype,"positionInPixels",2);l([u({type:Boolean,reflect:!0})],tt.prototype,"vertical",2);l([u({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);l([u()],tt.prototype,"primary",2);l([u()],tt.prototype,"snap",2);l([u({type:Number,attribute:"snap-threshold"})],tt.prototype,"snapThreshold",2);l([z("position")],tt.prototype,"handlePositionChange",1);l([z("positionInPixels")],tt.prototype,"handlePositionInPixelsChange",1);l([z("vertical")],tt.prototype,"handleVerticalChange",1);var gd="sl-split-panel";tt.define("sl-split-panel");D({tagName:gd,elementClass:tt,react:I,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var bd=L`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,dt=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("slot")||(t+=o.textContent)),o.nodeType===Node.TEXT_NODE&&(t+=o.textContent)}),t.trim()}render(){return C`
      <div
        part="base"
        class=${U({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};dt.styles=[F,bd];dt.dependencies={"sl-icon":we};l([A(".option__label")],dt.prototype,"defaultSlot",2);l([H()],dt.prototype,"current",2);l([H()],dt.prototype,"selected",2);l([H()],dt.prototype,"hasHover",2);l([u({reflect:!0})],dt.prototype,"value",2);l([u({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);l([z("disabled")],dt.prototype,"handleDisabledChange",1);l([z("selected")],dt.prototype,"handleSelectedChange",1);l([z("value")],dt.prototype,"handleValueChange",1);var vd="sl-option";dt.define("sl-option");D({tagName:vd,elementClass:dt,react:I,events:{},displayName:"SlOption"});var yd=L`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,go=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*t,r=o-this.value/100*o;this.indicatorOffset=`${r}px`}}render(){return C`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};go.styles=[F,yd];l([A(".progress-ring__indicator")],go.prototype,"indicator",2);l([H()],go.prototype,"indicatorOffset",2);l([u({type:Number,reflect:!0})],go.prototype,"value",2);l([u()],go.prototype,"label",2);var wd="sl-progress-ring";go.define("sl-progress-ring");D({tagName:wd,elementClass:go,react:I,events:{},displayName:"SlProgressRing"});var xd=L`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Uo=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return C`
      <div
        part="base"
        class=${U({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${P(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Qe({width:`${this.value}%`})}>
          ${this.indeterminate?"":C` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Uo.styles=[F,xd];l([u({type:Number,reflect:!0})],Uo.prototype,"value",2);l([u({type:Boolean,reflect:!0})],Uo.prototype,"indeterminate",2);l([u()],Uo.prototype,"label",2);var _d="sl-progress-bar";Uo.define("sl-progress-bar");D({tagName:_d,elementClass:Uo,react:I,events:{},displayName:"SlProgressBar"});var kd="sl-popup";he.define("sl-popup");D({tagName:kd,elementClass:he,react:I,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var Cd=L`
  :host {
    display: inline-block;
  }
`;let hl=null,pl=class{};pl.render=function(e,t){hl(e,t)};self.QrCreator=pl;(function(e){function t(c,a,d,f){var h={},p=e(d,a);p.u(c),p.J(),f=f||0;var m=p.h(),g=p.h()+2*f;return h.text=c,h.level=a,h.version=d,h.O=g,h.a=function(b,v){return b-=f,v-=f,0>b||b>=m||0>v||v>=m?!1:p.a(b,v)},h}function o(c,a,d,f,h,p,m,g,b,v){function _(x,k,w,y,E,V,j){x?(c.lineTo(k+V,w+j),c.arcTo(k,w,y,E,p)):c.lineTo(k,w)}m?c.moveTo(a+p,d):c.moveTo(a,d),_(g,f,d,f,h,-p,0),_(b,f,h,a,h,0,-p),_(v,a,h,a,d,p,0),_(m,a,d,f,d,0,p)}function r(c,a,d,f,h,p,m,g,b,v){function _(x,k,w,y){c.moveTo(x+w,k),c.lineTo(x,k),c.lineTo(x,k+y),c.arcTo(x,k,x+w,k,p)}m&&_(a,d,p,p),g&&_(f,d,-p,p),b&&_(f,h,-p,-p),v&&_(a,h,p,-p)}function s(c,a){var d=a.fill;if(typeof d=="string")c.fillStyle=d;else{var f=d.type,h=d.colorStops;if(d=d.position.map(m=>Math.round(m*a.size)),f==="linear-gradient")var p=c.createLinearGradient.apply(c,d);else if(f==="radial-gradient")p=c.createRadialGradient.apply(c,d);else throw Error("Unsupported fill");h.forEach(([m,g])=>{p.addColorStop(m,g)}),c.fillStyle=p}}function i(c,a){e:{var d=a.text,f=a.v,h=a.N,p=a.K,m=a.P;for(h=Math.max(1,h||1),p=Math.min(40,p||40);h<=p;h+=1)try{var g=t(d,f,h,m);break e}catch{}g=void 0}if(!g)return null;for(d=c.getContext("2d"),a.background&&(d.fillStyle=a.background,d.fillRect(a.left,a.top,a.size,a.size)),f=g.O,p=a.size/f,d.beginPath(),m=0;m<f;m+=1)for(h=0;h<f;h+=1){var b=d,v=a.left+h*p,_=a.top+m*p,x=m,k=h,w=g.a,y=v+p,E=_+p,V=x-1,j=x+1,M=k-1,S=k+1,X=Math.floor(Math.min(.5,Math.max(0,a.R))*p),K=w(x,k),xe=w(V,M),G=w(V,k);V=w(V,S);var J=w(x,S);S=w(j,S),k=w(j,k),j=w(j,M),x=w(x,M),v=Math.round(v),_=Math.round(_),y=Math.round(y),E=Math.round(E),K?o(b,v,_,y,E,X,!G&&!x,!G&&!J,!k&&!J,!k&&!x):r(b,v,_,y,E,X,G&&x&&xe,G&&J&&V,k&&J&&S,k&&x&&j)}return s(d,a),d.fill(),c}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};hl=function(c,a){var d={};Object.assign(d,n,c),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,a instanceof HTMLCanvasElement?((a.width!==d.size||a.height!==d.size)&&(a.width=d.size,a.height=d.size),a.getContext("2d").clearRect(0,0,a.width,a.height),i(a,d)):(c=document.createElement("canvas"),c.width=d.size,c.height=d.size,d=i(c,d),a.appendChild(d))}})(function(){function e(a){var d=o.s(a);return{S:function(){return 4},b:function(){return d.length},write:function(f){for(var h=0;h<d.length;h+=1)f.put(d[h],8)}}}function t(){var a=[],d=0,f={B:function(){return a},c:function(h){return(a[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,p){for(var m=0;m<p;m+=1)f.m((h>>>p-m-1&1)==1)},f:function(){return d},m:function(h){var p=Math.floor(d/8);a.length<=p&&a.push(0),h&&(a[p]|=128>>>d%8),d+=1}};return f}function o(a,d){function f(x,k){for(var w=-1;7>=w;w+=1)if(!(-1>=x+w||g<=x+w))for(var y=-1;7>=y;y+=1)-1>=k+y||g<=k+y||(m[x+w][k+y]=0<=w&&6>=w&&(y==0||y==6)||0<=y&&6>=y&&(w==0||w==6)||2<=w&&4>=w&&2<=y&&4>=y)}function h(x,k){for(var w=g=4*a+17,y=Array(w),E=0;E<w;E+=1){y[E]=Array(w);for(var V=0;V<w;V+=1)y[E][V]=null}for(m=y,f(0,0),f(g-7,0),f(0,g-7),w=i.G(a),y=0;y<w.length;y+=1)for(E=0;E<w.length;E+=1){V=w[y];var j=w[E];if(m[V][j]==null)for(var M=-2;2>=M;M+=1)for(var S=-2;2>=S;S+=1)m[V+M][j+S]=M==-2||M==2||S==-2||S==2||M==0&&S==0}for(w=8;w<g-8;w+=1)m[w][6]==null&&(m[w][6]=w%2==0);for(w=8;w<g-8;w+=1)m[6][w]==null&&(m[6][w]=w%2==0);for(w=i.w(p<<3|k),y=0;15>y;y+=1)E=!x&&(w>>y&1)==1,m[6>y?y:8>y?y+1:g-15+y][8]=E,m[8][8>y?g-y-1:9>y?15-y:14-y]=E;if(m[g-8][8]=!x,7<=a){for(w=i.A(a),y=0;18>y;y+=1)E=!x&&(w>>y&1)==1,m[Math.floor(y/3)][y%3+g-8-3]=E;for(y=0;18>y;y+=1)E=!x&&(w>>y&1)==1,m[y%3+g-8-3][Math.floor(y/3)]=E}if(b==null){for(x=c.I(a,p),w=t(),y=0;y<v.length;y+=1)E=v[y],w.put(4,4),w.put(E.b(),i.f(4,a)),E.write(w);for(y=E=0;y<x.length;y+=1)E+=x[y].j;if(w.f()>8*E)throw Error("code length overflow. ("+w.f()+">"+8*E+")");for(w.f()+4<=8*E&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*E)&&(w.put(236,8),!(w.f()>=8*E));)w.put(17,8);var X=0;for(E=y=0,V=Array(x.length),j=Array(x.length),M=0;M<x.length;M+=1){var K=x[M].j,xe=x[M].o-K;for(y=Math.max(y,K),E=Math.max(E,xe),V[M]=Array(K),S=0;S<V[M].length;S+=1)V[M][S]=255&w.B()[S+X];for(X+=K,S=i.C(xe),K=r(V[M],S.b()-1).l(S),j[M]=Array(S.b()-1),S=0;S<j[M].length;S+=1)xe=S+K.b()-j[M].length,j[M][S]=0<=xe?K.c(xe):0}for(S=w=0;S<x.length;S+=1)w+=x[S].o;for(w=Array(w),S=X=0;S<y;S+=1)for(M=0;M<x.length;M+=1)S<V[M].length&&(w[X]=V[M][S],X+=1);for(S=0;S<E;S+=1)for(M=0;M<x.length;M+=1)S<j[M].length&&(w[X]=j[M][S],X+=1);b=w}for(x=b,w=-1,y=g-1,E=7,V=0,k=i.F(k),j=g-1;0<j;j-=2)for(j==6&&--j;;){for(M=0;2>M;M+=1)m[y][j-M]==null&&(S=!1,V<x.length&&(S=(x[V]>>>E&1)==1),k(y,j-M)&&(S=!S),m[y][j-M]=S,--E,E==-1&&(V+=1,E=7));if(y+=w,0>y||g<=y){y-=w,w=-w;break}}}var p=s[d],m=null,g=0,b=null,v=[],_={u:function(x){x=e(x),v.push(x),b=null},a:function(x,k){if(0>x||g<=x||0>k||g<=k)throw Error(x+","+k);return m[x][k]},h:function(){return g},J:function(){for(var x=0,k=0,w=0;8>w;w+=1){h(!0,w);var y=i.D(_);(w==0||x>y)&&(x=y,k=w)}h(!1,k)}};return _}function r(a,d){if(typeof a.length>"u")throw Error(a.length+"/"+d);var f=function(){for(var p=0;p<a.length&&a[p]==0;)p+=1;for(var m=Array(a.length-p+d),g=0;g<a.length-p;g+=1)m[g]=a[g+p];return m}(),h={c:function(p){return f[p]},b:function(){return f.length},multiply:function(p){for(var m=Array(h.b()+p.b()-1),g=0;g<h.b();g+=1)for(var b=0;b<p.b();b+=1)m[g+b]^=n.i(n.g(h.c(g))+n.g(p.c(b)));return r(m,0)},l:function(p){if(0>h.b()-p.b())return h;for(var m=n.g(h.c(0))-n.g(p.c(0)),g=Array(h.b()),b=0;b<h.b();b+=1)g[b]=h.c(b);for(b=0;b<p.b();b+=1)g[b]^=n.i(n.g(p.c(b))+m);return r(g,0).l(p)}};return h}o.s=function(a){for(var d=[],f=0;f<a.length;f++){var h=a.charCodeAt(f);128>h?d.push(h):2048>h?d.push(192|h>>6,128|h&63):55296>h||57344<=h?d.push(224|h>>12,128|h>>6&63,128|h&63):(f++,h=65536+((h&1023)<<10|a.charCodeAt(f)&1023),d.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return d};var s={L:1,M:0,Q:3,H:2},i=function(){function a(h){for(var p=0;h!=0;)p+=1,h>>>=1;return p}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(h){for(var p=h<<10;0<=a(p)-a(1335);)p^=1335<<a(p)-a(1335);return(h<<10|p)^21522},A:function(h){for(var p=h<<12;0<=a(p)-a(7973);)p^=7973<<a(p)-a(7973);return h<<12|p},G:function(h){return d[h-1]},F:function(h){switch(h){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var p=r([1],0),m=0;m<h;m+=1)p=p.multiply(r([1,n.i(m)],0));return p},f:function(h,p){if(h!=4||1>p||40<p)throw Error("mode: "+h+"; type: "+p);return 10>p?8:16},D:function(h){for(var p=h.h(),m=0,g=0;g<p;g+=1)for(var b=0;b<p;b+=1){for(var v=0,_=h.a(g,b),x=-1;1>=x;x+=1)if(!(0>g+x||p<=g+x))for(var k=-1;1>=k;k+=1)0>b+k||p<=b+k||(x!=0||k!=0)&&_==h.a(g+x,b+k)&&(v+=1);5<v&&(m+=3+v-5)}for(g=0;g<p-1;g+=1)for(b=0;b<p-1;b+=1)v=0,h.a(g,b)&&(v+=1),h.a(g+1,b)&&(v+=1),h.a(g,b+1)&&(v+=1),h.a(g+1,b+1)&&(v+=1),(v==0||v==4)&&(m+=3);for(g=0;g<p;g+=1)for(b=0;b<p-6;b+=1)h.a(g,b)&&!h.a(g,b+1)&&h.a(g,b+2)&&h.a(g,b+3)&&h.a(g,b+4)&&!h.a(g,b+5)&&h.a(g,b+6)&&(m+=40);for(b=0;b<p;b+=1)for(g=0;g<p-6;g+=1)h.a(g,b)&&!h.a(g+1,b)&&h.a(g+2,b)&&h.a(g+3,b)&&h.a(g+4,b)&&!h.a(g+5,b)&&h.a(g+6,b)&&(m+=40);for(b=v=0;b<p;b+=1)for(g=0;g<p;g+=1)h.a(g,b)&&(v+=1);return m+=Math.abs(100*v/p/p-50)/5*10}};return f}(),n=function(){for(var a=Array(256),d=Array(256),f=0;8>f;f+=1)a[f]=1<<f;for(f=8;256>f;f+=1)a[f]=a[f-4]^a[f-5]^a[f-6]^a[f-8];for(f=0;255>f;f+=1)d[a[f]]=f;return{g:function(h){if(1>h)throw Error("glog("+h+")");return d[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return a[h]}}}(),c=function(){function a(h,p){switch(p){case s.L:return d[4*(h-1)];case s.M:return d[4*(h-1)+1];case s.Q:return d[4*(h-1)+2];case s.H:return d[4*(h-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(h,p){var m=a(h,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+p);h=m.length/3,p=[];for(var g=0;g<h;g+=1)for(var b=m[3*g],v=m[3*g+1],_=m[3*g+2],x=0;x<b;x+=1){var k=_,w={};w.o=v,w.j=k,p.push(w)}return p}};return f}();return o}());const Sd=QrCreator;var mt=class extends R{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Sd.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${Qe({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};mt.styles=[F,Cd];l([A("canvas")],mt.prototype,"canvas",2);l([u()],mt.prototype,"value",2);l([u()],mt.prototype,"label",2);l([u({type:Number})],mt.prototype,"size",2);l([u()],mt.prototype,"fill",2);l([u()],mt.prototype,"background",2);l([u({type:Number})],mt.prototype,"radius",2);l([u({attribute:"error-correction"})],mt.prototype,"errorCorrection",2);l([z(["background","errorCorrection","fill","radius","size","value"])],mt.prototype,"generate",1);var $d="sl-qr-code";mt.define("sl-qr-code");D({tagName:$d,elementClass:mt,react:I,events:{},displayName:"SlQrCode"});var zd=L`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,St=class extends R{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return C`
      <span
        part="base"
        class=${U({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?C` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};St.styles=[F,zd];St.dependencies={"sl-icon":we};l([H()],St.prototype,"checked",2);l([H()],St.prototype,"hasFocus",2);l([u()],St.prototype,"value",2);l([u({reflect:!0})],St.prototype,"size",2);l([u({type:Boolean,reflect:!0})],St.prototype,"disabled",2);l([z("checked")],St.prototype,"handleCheckedChange",1);l([z("disabled",{waitUntilFirstUpdate:!0})],St.prototype,"handleDisabledChange",1);var Ed="sl-radio";St.define("sl-radio");D({tagName:Ed,elementClass:St,react:I,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var fl=L`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ad=L`
  ${fl}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,gt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ze(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return sr`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${U({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${P(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};gt.styles=[F,Ad];l([A(".button")],gt.prototype,"input",2);l([A(".hidden-input")],gt.prototype,"hiddenInput",2);l([H()],gt.prototype,"hasFocus",2);l([u({type:Boolean,reflect:!0})],gt.prototype,"checked",2);l([u()],gt.prototype,"value",2);l([u({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);l([u({reflect:!0})],gt.prototype,"size",2);l([u({type:Boolean,reflect:!0})],gt.prototype,"pill",2);l([z("disabled",{waitUntilFirstUpdate:!0})],gt.prototype,"handleDisabledChange",1);var Td="sl-radio-button";gt.define("sl-radio-button");D({tagName:Td,elementClass:gt,react:I,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var Od=L`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Nd=L`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,eo=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Jo(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Jo(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Jo(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Jo(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const o=e.indexOf(t),r=Jo(t);r&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",o===0),r.classList.toggle("sl-button-group__button--inner",o>0&&o<e.length-1),r.classList.toggle("sl-button-group__button--last",o===e.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return C`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};eo.styles=[F,Nd];l([A("slot")],eo.prototype,"defaultSlot",2);l([H()],eo.prototype,"disableRole",2);l([u()],eo.prototype,"label",2);function Jo(e){var t;const o="sl-button, sl-radio-button";return(t=e.closest(o))!=null?t:e.querySelector(o)}var qe=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this),this.hasSlotController=new Ze(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?za:e?$a:Jr}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),r=this.value;t.disabled||(this.value=t.value,o.forEach(s=>s.checked=s===t),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const o=this.getAllRadios().filter(c=>!c.disabled),r=(t=o.find(c=>c.checked))!=null?t:o[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,i=this.value;let n=o.indexOf(r)+s;n<0&&(n=o.length-1),n>o.length-1&&(n=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=o[n].value,o[n].checked=!0,this.hasButtonGroup?o[n].shadowRoot.querySelector("button").focus():(o[n].tabIndex=0,o[n].focus()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),o=e.find(r=>r.checked)||e[0];o&&o.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const o=this.getAllRadios();if(await Promise.all(o.map(async r=>{await r.updateComplete,r.checked=r.value===this.value,r.size=this.size})),this.hasButtonGroup=o.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),o.length>0&&!o.some(r=>r.checked))if(this.hasButtonGroup){const r=(e=o[0].shadowRoot)==null?void 0:e.querySelector("button");r&&(r.tabIndex=0)}else o[0].tabIndex=0;if(this.hasButtonGroup){const r=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");r&&(r.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,r=this.helpText?!0:!!t,s=C`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return C`
      <fieldset
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?C`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};qe.styles=[F,Lo,Od];qe.dependencies={"sl-button-group":eo};l([A("slot:not([name])")],qe.prototype,"defaultSlot",2);l([A(".radio-group__validation-input")],qe.prototype,"validationInput",2);l([H()],qe.prototype,"hasButtonGroup",2);l([H()],qe.prototype,"errorMessage",2);l([H()],qe.prototype,"defaultValue",2);l([u()],qe.prototype,"label",2);l([u({attribute:"help-text"})],qe.prototype,"helpText",2);l([u()],qe.prototype,"name",2);l([u({reflect:!0})],qe.prototype,"value",2);l([u({reflect:!0})],qe.prototype,"size",2);l([u({reflect:!0})],qe.prototype,"form",2);l([u({type:Boolean,reflect:!0})],qe.prototype,"required",2);l([z("size",{waitUntilFirstUpdate:!0})],qe.prototype,"handleSizeChange",1);l([z("value")],qe.prototype,"handleValueChange",1);var Id="sl-radio-group";qe.define("sl-radio-group");D({tagName:Id,elementClass:qe,react:I,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var Rd="sl-icon-button";Ve.define("sl-icon-button");D({tagName:Rd,elementClass:Ve,react:I,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var Pd=L`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,W=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ze(this,"help-text","label"),this.localize=new ue(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,r="preserve"){const s=t??this.input.selectionStart,i=o??this.input.selectionEnd;this.input.setRangeText(e,s,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,r=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&!this.readonly,i=s&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${U({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${P(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${P(this.placeholder)}
              minlength=${P(this.minlength)}
              maxlength=${P(this.maxlength)}
              min=${P(this.min)}
              max=${P(this.max)}
              step=${P(this.step)}
              .value=${ho(this.value)}
              autocapitalize=${P(this.autocapitalize)}
              autocomplete=${P(this.autocomplete)}
              autocorrect=${P(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${P(this.pattern)}
              enterkeyhint=${P(this.enterkeyhint)}
              inputmode=${P(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?C`
                  <button
                    part="clear-button"
                    class=${U({input__clear:!0,"input__clear--visible":i})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?C`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?C`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:C`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};W.styles=[F,Lo,Pd];W.dependencies={"sl-icon":we};l([A(".input__control")],W.prototype,"input",2);l([H()],W.prototype,"hasFocus",2);l([u()],W.prototype,"title",2);l([u({reflect:!0})],W.prototype,"type",2);l([u()],W.prototype,"name",2);l([u()],W.prototype,"value",2);l([mo()],W.prototype,"defaultValue",2);l([u({reflect:!0})],W.prototype,"size",2);l([u({type:Boolean,reflect:!0})],W.prototype,"filled",2);l([u({type:Boolean,reflect:!0})],W.prototype,"pill",2);l([u()],W.prototype,"label",2);l([u({attribute:"help-text"})],W.prototype,"helpText",2);l([u({type:Boolean})],W.prototype,"clearable",2);l([u({type:Boolean,reflect:!0})],W.prototype,"disabled",2);l([u()],W.prototype,"placeholder",2);l([u({type:Boolean,reflect:!0})],W.prototype,"readonly",2);l([u({attribute:"password-toggle",type:Boolean})],W.prototype,"passwordToggle",2);l([u({attribute:"password-visible",type:Boolean})],W.prototype,"passwordVisible",2);l([u({attribute:"no-spin-buttons",type:Boolean})],W.prototype,"noSpinButtons",2);l([u({reflect:!0})],W.prototype,"form",2);l([u({type:Boolean,reflect:!0})],W.prototype,"required",2);l([u()],W.prototype,"pattern",2);l([u({type:Number})],W.prototype,"minlength",2);l([u({type:Number})],W.prototype,"maxlength",2);l([u()],W.prototype,"min",2);l([u()],W.prototype,"max",2);l([u()],W.prototype,"step",2);l([u()],W.prototype,"autocapitalize",2);l([u()],W.prototype,"autocorrect",2);l([u()],W.prototype,"autocomplete",2);l([u({type:Boolean})],W.prototype,"autofocus",2);l([u()],W.prototype,"enterkeyhint",2);l([u({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],W.prototype,"spellcheck",2);l([u()],W.prototype,"inputmode",2);l([z("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);l([z("step",{waitUntilFirstUpdate:!0})],W.prototype,"handleStepChange",1);l([z("value",{waitUntilFirstUpdate:!0})],W.prototype,"handleValueChange",1);var Md="sl-input";W.define("sl-input");var Dd=D({tagName:Md,elementClass:W,react:I,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),Ld=Dd,Bd=L`
  :host {
    display: block;
  }
`,ys=new Map;function Vd(e,t="cors"){const o=ys.get(e);if(o!==void 0)return Promise.resolve(o);const r=fetch(e,{mode:t}).then(async s=>{const i={ok:s.ok,status:s.status,html:await s.text()};return ys.set(e,i),i});return ys.set(e,r),r}var bo=class extends R{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(o=>t.setAttribute(o.name,o.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Vd(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(o=>this.executeScript(o)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return C`<slot></slot>`}};bo.styles=[F,Bd];l([u()],bo.prototype,"src",2);l([u()],bo.prototype,"mode",2);l([u({attribute:"allow-scripts",type:Boolean})],bo.prototype,"allowScripts",2);l([z("src")],bo.prototype,"handleSrcChange",1);var Fd="sl-include";bo.define("sl-include");D({tagName:Fd,elementClass:bo,react:I,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var Ud=L`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,to=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),o=this.localize.dir()==="rtl";e.preventDefault(),lr(this.base,{onMove:r=>{this.position=parseFloat(Me(r/t*100,0,100).toFixed(2)),o&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let s=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||o&&e.key==="ArrowRight")&&(s-=r),(t&&e.key==="ArrowRight"||o&&e.key==="ArrowLeft")&&(s+=r),e.key==="Home"&&(s=0),e.key==="End"&&(s=100),s=Me(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        id="image-comparer"
        class=${U({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Qe({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Qe({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};to.styles=[F,Ud];to.scopedElement={"sl-icon":we};l([A(".image-comparer")],to.prototype,"base",2);l([A(".image-comparer__handle")],to.prototype,"handle",2);l([u({type:Number,reflect:!0})],to.prototype,"position",2);l([z("position",{waitUntilFirstUpdate:!0})],to.prototype,"handlePositionChange",1);var Hd="sl-image-comparer";to.define("sl-image-comparer");D({tagName:Hd,elementClass:to,react:I,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var jd=L`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ts=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],o=e.composedPath().find(s=>{var i;return t.includes(((i=s==null?void 0:s.getAttribute)==null?void 0:i.call(s,"role"))||"")});if(!o)return;const r=o;r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),o=this.getCurrentItem();let r=o?t.indexOf(o):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?r++:e.key==="ArrowUp"?r--:e.key==="Home"?r=0:e.key==="End"&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===e?"0":"-1")})}render(){return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ts.styles=[F,jd];l([A("slot")],ts.prototype,"defaultSlot",2);var qd="sl-menu";ts.define("sl-menu");var Wd=D({tagName:qd,elementClass:ts,react:I,events:{onSlSelect:"sl-select"},displayName:"SlMenu"}),Kd=Wd,Xd=L`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar=(e,t)=>{var r;const o=e._$AN;if(o===void 0)return!1;for(const s of o)(r=s._$AO)==null||r.call(s,t,!1),ar(s,t);return!0},jr=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while((o==null?void 0:o.size)===0)},ml=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Jd(t)}};function Yd(e){this._$AN!==void 0?(jr(this),this._$AM=e,ml(this)):this._$AM=e}function Gd(e,t=!1,o=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let i=o;i<r.length;i++)ar(r[i],!1),jr(r[i]);else r!=null&&(ar(r,!1),jr(r));else ar(this,e)}const Jd=e=>{e.type==Tt.CHILD&&(e._$AP??(e._$AP=Gd),e._$AQ??(e._$AQ=Yd))};let Zd=class extends br{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,r){super._$AT(t,o,r),ml(this),this.isConnected=t._$AU}_$AO(t,o=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),o&&(ar(this,t),jr(this))}setValue(t){if(Xn(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qd=()=>new eu;class eu{}const ws=new WeakMap,tu=gr(class extends Zd{render(e){return Se}update(e,[t]){var r;const o=t!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),Se}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let o=ws.get(t);o===void 0&&(o=new WeakMap,ws.set(t,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=ws.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ou=class{constructor(e,t,o){this.popupRef=Qd(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break}},this.handleClick=r=>{var s;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(s=r.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{const r=this.host.renderRoot.querySelector("slot[name='submenu']"),s=r==null?void 0:r.assignedElements({flatten:!0}).filter(f=>f.localName==="sl-menu")[0],i=this.localize.dir()==="rtl";if(!s)return;const{left:n,top:c,width:a,height:d}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${c}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${c+d}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(const r of t.assignedElements())if(o=r.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let r=1;r!==o.length;++r)o[r].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((s,i)=>{var n;const c=(n=t.get(i))!=null?n:new CSSUnitValue(0,"px"),d=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return s-d.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?C`
      <sl-popup
        ${tu(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:C` <slot name="submenu" hidden></slot> `}},ot=class extends R{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new ue(this),this.hasSlotController=new Ze(this,"submenu"),this.submenuController=new ou(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Ea(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return C`
      <div
        id="anchor"
        part="base"
        class=${U({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ot.styles=[F,Xd];ot.dependencies={"sl-icon":we,"sl-popup":he,"sl-spinner":Do};l([A("slot:not([name])")],ot.prototype,"defaultSlot",2);l([A(".menu-item")],ot.prototype,"menuItem",2);l([u()],ot.prototype,"type",2);l([u({type:Boolean,reflect:!0})],ot.prototype,"checked",2);l([u()],ot.prototype,"value",2);l([u({type:Boolean,reflect:!0})],ot.prototype,"loading",2);l([u({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);l([z("checked")],ot.prototype,"handleCheckedChange",1);l([z("disabled")],ot.prototype,"handleDisabledChange",1);l([z("type")],ot.prototype,"handleTypeChange",1);var ru="sl-menu-item";ot.define("sl-menu-item");var su=D({tagName:ru,elementClass:ot,react:I,events:{},displayName:"SlMenuItem"}),iu=su,nu=L`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,ci=class extends R{render(){return C` <slot part="base" class="menu-label"></slot> `}};ci.styles=[F,nu];var lu="sl-menu-label";ci.define("sl-menu-label");var au=D({tagName:lu,elementClass:ci,react:I,events:{},displayName:"SlMenuLabel"}),cu=au,du=L`
  :host {
    display: contents;
  }
`,$t=class extends R{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return C` <slot></slot> `}};$t.styles=[F,du];l([u({reflect:!0})],$t.prototype,"attr",2);l([u({attribute:"attr-old-value",type:Boolean,reflect:!0})],$t.prototype,"attrOldValue",2);l([u({attribute:"char-data",type:Boolean,reflect:!0})],$t.prototype,"charData",2);l([u({attribute:"char-data-old-value",type:Boolean,reflect:!0})],$t.prototype,"charDataOldValue",2);l([u({attribute:"child-list",type:Boolean,reflect:!0})],$t.prototype,"childList",2);l([u({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);l([z("disabled")],$t.prototype,"handleDisabledChange",1);l([z("attr",{waitUntilFirstUpdate:!0}),z("attr-old-value",{waitUntilFirstUpdate:!0}),z("char-data",{waitUntilFirstUpdate:!0}),z("char-data-old-value",{waitUntilFirstUpdate:!0}),z("childList",{waitUntilFirstUpdate:!0})],$t.prototype,"handleChange",1);var uu="sl-mutation-observer";$t.define("sl-mutation-observer");D({tagName:uu,elementClass:$t,react:I,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var hu=L`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,bt=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Le(this.body);const{keyframes:t,options:o}=$e(this,"details.show",{dir:this.localize.dir()});await Ne(this.body,Br(t,this.body.scrollHeight),o),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Le(this.body);const{keyframes:t,options:o}=$e(this,"details.hide",{dir:this.localize.dir()});await Ne(this.body,Br(t,this.body.scrollHeight),o),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Je(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Je(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return C`
      <details
        part="base"
        class=${U({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};bt.styles=[F,hu];bt.dependencies={"sl-icon":we};l([A(".details")],bt.prototype,"details",2);l([A(".details__header")],bt.prototype,"header",2);l([A(".details__body")],bt.prototype,"body",2);l([A(".details__expand-icon-slot")],bt.prototype,"expandIconSlot",2);l([u({type:Boolean,reflect:!0})],bt.prototype,"open",2);l([u()],bt.prototype,"summary",2);l([u({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);l([z("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);ve("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ve("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var pu="sl-details";bt.define("sl-details");D({tagName:pu,elementClass:bt,react:I,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var fu=L`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Zi=new WeakMap;function gl(e){let t=Zi.get(e);return t||(t=window.getComputedStyle(e,null),Zi.set(e,t)),t}function mu(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=gl(e);return t.visibility!=="hidden"&&t.display!=="none"}function gu(e){const t=gl(e),{overflowY:o,overflowX:r}=t;return o==="scroll"||r==="scroll"?!0:o!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&o==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function bu(e){const t=e.tagName.toLowerCase(),o=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!mu(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:gu(e)}function vu(e){var t,o;const r=Xs(e),s=(t=r[0])!=null?t:null,i=(o=r[r.length-1])!=null?o:null;return{start:s,end:i}}function yu(e,t){var o;return((o=e.getRootNode({composed:!0}))==null?void 0:o.host)!==t}function Xs(e){const t=new WeakMap,o=[];function r(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||t.has(s))return;t.set(s,!0),!o.includes(s)&&bu(s)&&o.push(s),s instanceof HTMLSlotElement&&yu(s,e)&&s.assignedElements({flatten:!0}).forEach(i=>{r(i)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&r(s.shadowRoot)}for(const i of s.children)r(i)}return r(e),o.sort((s,i)=>{const n=Number(s.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-n})}function*di(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Jl(di(e.shadowRoot.activeElement))))}function wu(){return[...di()].pop()}var Zo=[],bl=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var o;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=wu();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=Xs(this.element);let i=s.findIndex(c=>c===r);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){i+n>=s.length?i=0:i+n<0?i=s.length-1:i+=n,this.previousFocus=this.currentFocus;const c=s[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||c&&this.possiblyHasTabbableChildren(c))return;t.preventDefault(),this.currentFocus=c,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const a=[...di()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Zo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Zo=Zo.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Zo[Zo.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Xs(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],r=this.tabDirection==="forward"?t:o;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function Qi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var rt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ze(this,"footer"),this.localize=new ue(this),this.modal=new bl(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ir(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),nr(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=$e(this,"drawer.denyClose",{dir:this.localize.dir()});Ne(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ir(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Le(this.drawer),Le(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=$e(this,`drawer.show${Qi(this.placement)}`,{dir:this.localize.dir()}),o=$e(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ne(this.panel,t.keyframes,t.options),Ne(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),nr(this)),await Promise.all([Le(this.drawer),Le(this.overlay)]);const e=$e(this,`drawer.hide${Qi(this.placement)}`,{dir:this.localize.dir()}),t=$e(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ne(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ne(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ir(this)),this.open&&this.contained&&(this.modal.deactivate(),nr(this))}async show(){if(!this.open)return this.open=!0,Je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Je(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${U({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${P(this.noHeader?this.label:void 0)}
          aria-labelledby=${P(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":C`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};rt.styles=[F,fu];rt.dependencies={"sl-icon-button":Ve};l([A(".drawer")],rt.prototype,"drawer",2);l([A(".drawer__panel")],rt.prototype,"panel",2);l([A(".drawer__overlay")],rt.prototype,"overlay",2);l([u({type:Boolean,reflect:!0})],rt.prototype,"open",2);l([u({reflect:!0})],rt.prototype,"label",2);l([u({reflect:!0})],rt.prototype,"placement",2);l([u({type:Boolean,reflect:!0})],rt.prototype,"contained",2);l([u({attribute:"no-header",type:Boolean,reflect:!0})],rt.prototype,"noHeader",2);l([z("open",{waitUntilFirstUpdate:!0})],rt.prototype,"handleOpenChange",1);l([z("contained",{waitUntilFirstUpdate:!0})],rt.prototype,"handleNoModalChange",1);ve("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ve("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});ve("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ve("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});ve("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ve("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});ve("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ve("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});ve("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});ve("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ve("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var xu="sl-drawer";rt.define("sl-drawer");D({tagName:xu,elementClass:rt,react:I,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var _u=L`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,zt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ze(this,"footer"),this.localize=new ue(this),this.modal=new bl(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ir(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),nr(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=$e(this,"dialog.denyClose",{dir:this.localize.dir()});Ne(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ir(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Le(this.dialog),Le(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=$e(this,"dialog.show",{dir:this.localize.dir()}),o=$e(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ne(this.panel,t.keyframes,t.options),Ne(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Le(this.dialog),Le(this.overlay)]);const e=$e(this,"dialog.hide",{dir:this.localize.dir()}),t=$e(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ne(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ne(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,nr(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Je(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${U({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${P(this.noHeader?this.label:void 0)}
          aria-labelledby=${P(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":C`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};zt.styles=[F,_u];zt.dependencies={"sl-icon-button":Ve};l([A(".dialog")],zt.prototype,"dialog",2);l([A(".dialog__panel")],zt.prototype,"panel",2);l([A(".dialog__overlay")],zt.prototype,"overlay",2);l([u({type:Boolean,reflect:!0})],zt.prototype,"open",2);l([u({reflect:!0})],zt.prototype,"label",2);l([u({attribute:"no-header",type:Boolean,reflect:!0})],zt.prototype,"noHeader",2);l([z("open",{waitUntilFirstUpdate:!0})],zt.prototype,"handleOpenChange",1);ve("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ve("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ve("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ve("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ve("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ku="sl-dialog";zt.define("sl-dialog");D({tagName:ku,elementClass:zt,react:I,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var Cu=L`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ye=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,r,s;const i=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(s=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const o=t.getAllItems(),r=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>vu(r).start);let o;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=t.button;break;default:o=t}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Je(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Le(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=$e(this,"dropdown.show",{dir:this.localize.dir()});await Ne(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Le(this);const{keyframes:e,options:t}=$e(this,"dropdown.hide",{dir:this.localize.dir()});await Ne(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return C`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${U({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ye.styles=[F,Cu];Ye.dependencies={"sl-popup":he};l([A(".dropdown")],Ye.prototype,"popup",2);l([A(".dropdown__trigger")],Ye.prototype,"trigger",2);l([A(".dropdown__panel")],Ye.prototype,"panel",2);l([u({type:Boolean,reflect:!0})],Ye.prototype,"open",2);l([u({reflect:!0})],Ye.prototype,"placement",2);l([u({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);l([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ye.prototype,"stayOpenOnSelect",2);l([u({attribute:!1})],Ye.prototype,"containingElement",2);l([u({type:Number})],Ye.prototype,"distance",2);l([u({type:Number})],Ye.prototype,"skidding",2);l([u({type:Boolean})],Ye.prototype,"hoist",2);l([z("open",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleOpenChange",1);ve("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ve("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Su="sl-dropdown";Ye.define("sl-dropdown");D({tagName:Su,elementClass:Ye,react:I,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var xr=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],o=this.unit==="bit"?e:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),o.length-1)),s=o[r]+this.unit,i=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(i,{style:"unit",unit:s,unitDisplay:this.display})}};l([u({type:Number})],xr.prototype,"value",2);l([u()],xr.prototype,"unit",2);l([u()],xr.prototype,"display",2);var $u="sl-format-bytes";xr.define("sl-format-bytes");D({tagName:$u,elementClass:xr,react:I,events:{},displayName:"SlFormatBytes"});var st=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return C`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};l([u()],st.prototype,"date",2);l([u()],st.prototype,"weekday",2);l([u()],st.prototype,"era",2);l([u()],st.prototype,"year",2);l([u()],st.prototype,"month",2);l([u()],st.prototype,"day",2);l([u()],st.prototype,"hour",2);l([u()],st.prototype,"minute",2);l([u()],st.prototype,"second",2);l([u({attribute:"time-zone-name"})],st.prototype,"timeZoneName",2);l([u({attribute:"time-zone"})],st.prototype,"timeZone",2);l([u({attribute:"hour-format"})],st.prototype,"hourFormat",2);var zu="sl-format-date";st.define("sl-format-date");D({tagName:zu,elementClass:st,react:I,events:{},displayName:"SlFormatDate"});var Eu="sl-icon";we.define("sl-icon");var Au=D({tagName:Eu,elementClass:we,react:I,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),en=Au,vt=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};l([u({type:Number})],vt.prototype,"value",2);l([u()],vt.prototype,"type",2);l([u({attribute:"no-grouping",type:Boolean})],vt.prototype,"noGrouping",2);l([u()],vt.prototype,"currency",2);l([u({attribute:"currency-display"})],vt.prototype,"currencyDisplay",2);l([u({attribute:"minimum-integer-digits",type:Number})],vt.prototype,"minimumIntegerDigits",2);l([u({attribute:"minimum-fraction-digits",type:Number})],vt.prototype,"minimumFractionDigits",2);l([u({attribute:"maximum-fraction-digits",type:Number})],vt.prototype,"maximumFractionDigits",2);l([u({attribute:"minimum-significant-digits",type:Number})],vt.prototype,"minimumSignificantDigits",2);l([u({attribute:"maximum-significant-digits",type:Number})],vt.prototype,"maximumSignificantDigits",2);var Tu="sl-format-number";vt.define("sl-format-number");D({tagName:Tu,elementClass:vt,react:I,events:{},displayName:"SlFormatNumber"});var Ou="sl-button-group";eo.define("sl-button-group");D({tagName:Ou,elementClass:eo,react:I,events:{},displayName:"SlButtonGroup"});var Nu=L`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,ui=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ze(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${U({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ui.styles=[F,Nu];var Iu="sl-card";ui.define("sl-card");D({tagName:Iu,elementClass:ui,react:I,events:{},displayName:"SlCard"});var Ru=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Pu=L`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Mu(e,t){if(e!==void 0){let o=0;for(const r of e)yield t(r,o++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Du(e,t,o=1){const r=t===void 0?0:e;t??(t=e);for(let s=r;o>0?s<t:t<s;s+=o)yield s}var Lu=(e,t)=>{let o=0;return function(...r){window.clearTimeout(o),o=window.setTimeout(()=>{e.call(this,...r)},t)}},tn=(e,t,o)=>{const r=e[t];e[t]=function(...s){r.call(this,...s),o.call(this,r,...s)}},Bu="onscrollend"in window;if(!Bu){const e=new Set,t=new WeakMap,o=s=>{for(const i of s.changedTouches)e.add(i.identifier)},r=s=>{for(const i of s.changedTouches)e.delete(i.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),tn(EventTarget.prototype,"addEventListener",function(s,i){if(i!=="scrollend")return;const n=Lu(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);s.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),tn(EventTarget.prototype,"removeEventListener",function(s,i){if(i!=="scrollend")return;const n=t.get(this);n&&s.call(this,"scroll",n,{passive:!0})})}var Ee=class extends R{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Ru(this,()=>this.next()),this.intersectionObserverEntries=new Map,this.localize=new ue(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,o=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,s=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:o,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||o!==s)&&(e.scrollTo({left:r,top:s,behavior:Fs()?"auto":"smooth"}),await Je(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(o=>[...o.addedNodes,...o.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(o=>{this.intersectionObserverEntries.set(o.target,o);const r=o.target;r.toggleAttribute("inert",!o.isIntersecting),r.classList.toggle("--in-view",o.isIntersecting),r.setAttribute("aria-hidden",o.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:o,loop:r}=this,s=r?e/o:(e-t)/o+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,o=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,s=e.key==="ArrowDown"||!o&&e.key==="ArrowRight"||o&&e.key==="ArrowLeft",i=e.key==="ArrowUp"||!o&&e.key==="ArrowLeft"||o&&e.key==="ArrowRight";e.preventDefault(),i&&this.previous(),s&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var n;const c=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');c&&c.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}handleScrollEnd(){if(!this.scrolling||this.dragging)return;const t=[...this.intersectionObserverEntries.values()].find(o=>o.isIntersecting);if(this.loop&&(t!=null&&t.target.hasAttribute("data-clone"))){const o=Number(t.target.getAttribute("data-clone"));this.goToSlide(o,"instant")}else if(t){const r=this.getSlides().indexOf(t.target);this.activeSlide=Math.ceil(r/this.slidesPerMove)*this.slidesPerMove}this.scrolling=!1}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,o)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",o+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,o=e.slice(-t),r=e.slice(0,t);o.reverse().forEach((s,i)=>{const n=s.cloneNode(!0);n.setAttribute("data-clone",String(e.length-i-1)),this.prepend(n)}),r.forEach((s,i)=>{const n=s.cloneNode(!0);n.setAttribute("data-clone",String(i)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,o)=>{t.classList.toggle("--is-active",o===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((o,r)=>{(r+t)%t===0?o.style.removeProperty("scroll-snap-align"):o.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:o,loop:r}=this,s=this.getSlides(),i=this.getSlides({excludeClones:!1});if(!s.length)return;const n=r?(e+s.length)%s.length:Me(e,0,s.length-1);this.activeSlide=n;const c=Me(e+(r?o:0),0,i.length-1),a=i[c];this.scrollToSlide(a,Fs()?"auto":t)}scrollToSlide(e,t="smooth"){const o=this.scrollContainer,r=o.getBoundingClientRect(),s=e.getBoundingClientRect(),i=s.left-r.left,n=s.top-r.top;o.scrollTo({left:i+o.scrollLeft,top:n+o.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,o=this.getPageCount(),r=this.getCurrentPage(),s=this.canScrollPrev(),i=this.canScrollNext(),n=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${U({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?C`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${U({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${U({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!i})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?C`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Mu(Du(o),c=>{const a=c===r;return C`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${U({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,o)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(c*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Ee.styles=[F,Pu];Ee.dependencies={"sl-icon":we};l([u({type:Boolean,reflect:!0})],Ee.prototype,"loop",2);l([u({type:Boolean,reflect:!0})],Ee.prototype,"navigation",2);l([u({type:Boolean,reflect:!0})],Ee.prototype,"pagination",2);l([u({type:Boolean,reflect:!0})],Ee.prototype,"autoplay",2);l([u({type:Number,attribute:"autoplay-interval"})],Ee.prototype,"autoplayInterval",2);l([u({type:Number,attribute:"slides-per-page"})],Ee.prototype,"slidesPerPage",2);l([u({type:Number,attribute:"slides-per-move"})],Ee.prototype,"slidesPerMove",2);l([u()],Ee.prototype,"orientation",2);l([u({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Ee.prototype,"mouseDragging",2);l([A(".carousel__slides")],Ee.prototype,"scrollContainer",2);l([A(".carousel__pagination")],Ee.prototype,"paginationContainer",2);l([H()],Ee.prototype,"activeSlide",2);l([H()],Ee.prototype,"scrolling",2);l([H()],Ee.prototype,"dragging",2);l([oi({passive:!0})],Ee.prototype,"handleScroll",1);l([z("loop",{waitUntilFirstUpdate:!0}),z("slidesPerPage",{waitUntilFirstUpdate:!0})],Ee.prototype,"initializeSlides",1);l([z("activeSlide")],Ee.prototype,"handelSlideChange",1);l([z("slidesPerMove")],Ee.prototype,"updateSlidesSnap",1);l([z("autoplay")],Ee.prototype,"handleAutoplayChange",1);var Vu="sl-carousel";Ee.define("sl-carousel");D({tagName:Vu,elementClass:Ee,react:I,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Fu=L`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,hi=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return C` <slot></slot> `}};hi.styles=[F,Fu];var Uu="sl-carousel-item";hi.define("sl-carousel-item");D({tagName:Uu,elementClass:hi,react:I,events:{},displayName:"SlCarouselItem"});var Hu="sl-checkbox";Be.define("sl-checkbox");D({tagName:Hu,elementClass:Be,react:I,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var ju=L`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,pe=class extends R{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ze(this,"[default]","prefix","suffix"),this.localize=new ue(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Jr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Vr`a`:Vr`button`;return sr`
      <${t}
        part="base"
        class=${U({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${P(e?void 0:this.disabled)}
        type=${P(e?void 0:this.type)}
        title=${this.title}
        name=${P(e?void 0:this.name)}
        value=${P(e?void 0:this.value)}
        href=${P(e?this.href:void 0)}
        target=${P(e?this.target:void 0)}
        download=${P(e?this.download:void 0)}
        rel=${P(e?this.rel:void 0)}
        role=${P(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?sr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?sr`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};pe.styles=[F,fl];pe.dependencies={"sl-icon":we,"sl-spinner":Do};l([A(".button")],pe.prototype,"button",2);l([H()],pe.prototype,"hasFocus",2);l([H()],pe.prototype,"invalid",2);l([u()],pe.prototype,"title",2);l([u({reflect:!0})],pe.prototype,"variant",2);l([u({reflect:!0})],pe.prototype,"size",2);l([u({type:Boolean,reflect:!0})],pe.prototype,"caret",2);l([u({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],pe.prototype,"loading",2);l([u({type:Boolean,reflect:!0})],pe.prototype,"outline",2);l([u({type:Boolean,reflect:!0})],pe.prototype,"pill",2);l([u({type:Boolean,reflect:!0})],pe.prototype,"circle",2);l([u()],pe.prototype,"type",2);l([u()],pe.prototype,"name",2);l([u()],pe.prototype,"value",2);l([u()],pe.prototype,"href",2);l([u()],pe.prototype,"target",2);l([u()],pe.prototype,"rel",2);l([u()],pe.prototype,"download",2);l([u()],pe.prototype,"form",2);l([u({attribute:"formaction"})],pe.prototype,"formAction",2);l([u({attribute:"formenctype"})],pe.prototype,"formEnctype",2);l([u({attribute:"formmethod"})],pe.prototype,"formMethod",2);l([u({attribute:"formnovalidate",type:Boolean})],pe.prototype,"formNoValidate",2);l([u({attribute:"formtarget"})],pe.prototype,"formTarget",2);l([z("disabled",{waitUntilFirstUpdate:!0})],pe.prototype,"handleDisabledChange",1);function We(e,t){qu(e)&&(e="100%");const o=Wu(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),o&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Tr(e){return Math.min(1,Math.max(0,e))}function qu(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Wu(e){return typeof e=="string"&&e.indexOf("%")!==-1}function vl(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Or(e){return Number(e)<=1?`${Number(e)*100}%`:e}function co(e){return e.length===1?"0"+e:String(e)}function Ku(e,t,o){return{r:We(e,255)*255,g:We(t,255)*255,b:We(o,255)*255}}function on(e,t,o){e=We(e,255),t=We(t,255),o=We(o,255);const r=Math.max(e,t,o),s=Math.min(e,t,o);let i=0,n=0;const c=(r+s)/2;if(r===s)n=0,i=0;else{const a=r-s;switch(n=c>.5?a/(2-r-s):a/(r+s),r){case e:i=(t-o)/a+(t<o?6:0);break;case t:i=(o-e)/a+2;break;case o:i=(e-t)/a+4;break}i/=6}return{h:i,s:n,l:c}}function xs(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(t-e)*(6*o):o<1/2?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function Xu(e,t,o){let r,s,i;if(e=We(e,360),t=We(t,100),o=We(o,100),t===0)s=o,i=o,r=o;else{const n=o<.5?o*(1+t):o+t-o*t,c=2*o-n;r=xs(c,n,e+1/3),s=xs(c,n,e),i=xs(c,n,e-1/3)}return{r:r*255,g:s*255,b:i*255}}function rn(e,t,o){e=We(e,255),t=We(t,255),o=We(o,255);const r=Math.max(e,t,o),s=Math.min(e,t,o);let i=0;const n=r,c=r-s,a=r===0?0:c/r;if(r===s)i=0;else{switch(r){case e:i=(t-o)/c+(t<o?6:0);break;case t:i=(o-e)/c+2;break;case o:i=(e-t)/c+4;break}i/=6}return{h:i,s:a,v:n}}function Yu(e,t,o){e=We(e,360)*6,t=We(t,100),o=We(o,100);const r=Math.floor(e),s=e-r,i=o*(1-t),n=o*(1-s*t),c=o*(1-(1-s)*t),a=r%6,d=[o,n,i,i,c,o][a],f=[c,o,o,n,i,i][a],h=[i,i,c,o,o,n][a];return{r:d*255,g:f*255,b:h*255}}function sn(e,t,o,r){const s=[co(Math.round(e).toString(16)),co(Math.round(t).toString(16)),co(Math.round(o).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Gu(e,t,o,r,s){const i=[co(Math.round(e).toString(16)),co(Math.round(t).toString(16)),co(Math.round(o).toString(16)),co(Ju(r))];return s&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Ju(e){return Math.round(parseFloat(e)*255).toString(16)}function nn(e){return it(e)/255}function it(e){return parseInt(e,16)}function Zu(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Ys={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Qu(e){let t={r:0,g:0,b:0},o=1,r=null,s=null,i=null,n=!1,c=!1;return typeof e=="string"&&(e=oh(e)),typeof e=="object"&&(Rt(e.r)&&Rt(e.g)&&Rt(e.b)?(t=Ku(e.r,e.g,e.b),n=!0,c=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Rt(e.h)&&Rt(e.s)&&Rt(e.v)?(r=Or(e.s),s=Or(e.v),t=Yu(e.h,r,s),n=!0,c="hsv"):Rt(e.h)&&Rt(e.s)&&Rt(e.l)&&(r=Or(e.s),i=Or(e.l),t=Xu(e.h,r,i),n=!0,c="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(o=e.a)),o=vl(o),{ok:n,format:e.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:o}}const eh="[-\\+]?\\d+%?",th="[-\\+]?\\d*\\.\\d+%?",Kt="(?:"+th+")|(?:"+eh+")",_s="[\\s|\\(]+("+Kt+")[,|\\s]+("+Kt+")[,|\\s]+("+Kt+")\\s*\\)?",ks="[\\s|\\(]+("+Kt+")[,|\\s]+("+Kt+")[,|\\s]+("+Kt+")[,|\\s]+("+Kt+")\\s*\\)?",_t={CSS_UNIT:new RegExp(Kt),rgb:new RegExp("rgb"+_s),rgba:new RegExp("rgba"+ks),hsl:new RegExp("hsl"+_s),hsla:new RegExp("hsla"+ks),hsv:new RegExp("hsv"+_s),hsva:new RegExp("hsva"+ks),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function oh(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Ys[e])e=Ys[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let o=_t.rgb.exec(e);return o?{r:o[1],g:o[2],b:o[3]}:(o=_t.rgba.exec(e),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=_t.hsl.exec(e),o?{h:o[1],s:o[2],l:o[3]}:(o=_t.hsla.exec(e),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=_t.hsv.exec(e),o?{h:o[1],s:o[2],v:o[3]}:(o=_t.hsva.exec(e),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=_t.hex8.exec(e),o?{r:it(o[1]),g:it(o[2]),b:it(o[3]),a:nn(o[4]),format:t?"name":"hex8"}:(o=_t.hex6.exec(e),o?{r:it(o[1]),g:it(o[2]),b:it(o[3]),format:t?"name":"hex"}:(o=_t.hex4.exec(e),o?{r:it(o[1]+o[1]),g:it(o[2]+o[2]),b:it(o[3]+o[3]),a:nn(o[4]+o[4]),format:t?"name":"hex8"}:(o=_t.hex3.exec(e),o?{r:it(o[1]+o[1]),g:it(o[2]+o[2]),b:it(o[3]+o[3]),format:t?"name":"hex"}:!1)))))))))}function Rt(e){return!!_t.CSS_UNIT.exec(String(e))}class Oe{constructor(t="",o={}){if(t instanceof Oe)return t;typeof t=="number"&&(t=Zu(t)),this.originalInput=t;const r=Qu(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=o.format??r.format,this.gradientType=o.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let o,r,s;const i=t.r/255,n=t.g/255,c=t.b/255;return i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),c<=.03928?s=c/12.92:s=Math.pow((c+.055)/1.055,2.4),.2126*o+.7152*r+.0722*s}getAlpha(){return this.a}setAlpha(t){return this.a=vl(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=rn(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=rn(this.r,this.g,this.b),o=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.v*100);return this.a===1?`hsv(${o}, ${r}%, ${s}%)`:`hsva(${o}, ${r}%, ${s}%, ${this.roundA})`}toHsl(){const t=on(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=on(this.r,this.g,this.b),o=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.l*100);return this.a===1?`hsl(${o}, ${r}%, ${s}%)`:`hsla(${o}, ${r}%, ${s}%, ${this.roundA})`}toHex(t=!1){return sn(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Gu(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),o=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${o}, ${r})`:`rgba(${t}, ${o}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=o=>`${Math.round(We(o,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=o=>Math.round(We(o,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+sn(this.r,this.g,this.b,!1);for(const[o,r]of Object.entries(Ys))if(t===r)return o;return!1}toString(t){const o=!!t;t=t??this.format;let r=!1;const s=this.a<1&&this.a>=0;return!o&&s&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Oe(this.toString())}lighten(t=10){const o=this.toHsl();return o.l+=t/100,o.l=Tr(o.l),new Oe(o)}brighten(t=10){const o=this.toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(255*-(t/100)))),o.g=Math.max(0,Math.min(255,o.g-Math.round(255*-(t/100)))),o.b=Math.max(0,Math.min(255,o.b-Math.round(255*-(t/100)))),new Oe(o)}darken(t=10){const o=this.toHsl();return o.l-=t/100,o.l=Tr(o.l),new Oe(o)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const o=this.toHsl();return o.s-=t/100,o.s=Tr(o.s),new Oe(o)}saturate(t=10){const o=this.toHsl();return o.s+=t/100,o.s=Tr(o.s),new Oe(o)}greyscale(){return this.desaturate(100)}spin(t){const o=this.toHsl(),r=(o.h+t)%360;return o.h=r<0?360+r:r,new Oe(o)}mix(t,o=50){const r=this.toRgb(),s=new Oe(t).toRgb(),i=o/100,n={r:(s.r-r.r)*i+r.r,g:(s.g-r.g)*i+r.g,b:(s.b-r.b)*i+r.b,a:(s.a-r.a)*i+r.a};return new Oe(n)}analogous(t=6,o=30){const r=this.toHsl(),s=360/o,i=[this];for(r.h=(r.h-(s*t>>1)+720)%360;--t;)r.h=(r.h+s)%360,i.push(new Oe(r));return i}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new Oe(t)}monochromatic(t=6){const o=this.toHsv(),{h:r}=o,{s}=o;let{v:i}=o;const n=[],c=1/t;for(;t--;)n.push(new Oe({h:r,s,v:i})),i=(i+c)%1;return n}splitcomplement(){const t=this.toHsl(),{h:o}=t;return[this,new Oe({h:(o+72)%360,s:t.s,l:t.l}),new Oe({h:(o+216)%360,s:t.s,l:t.l})]}onBackground(t){const o=this.toRgb(),r=new Oe(t).toRgb(),s=o.a+r.a*(1-o.a);return new Oe({r:(o.r*o.a+r.r*r.a*(1-o.a))/s,g:(o.g*o.a+r.g*r.a*(1-o.a))/s,b:(o.b*o.a+r.b*r.a*(1-o.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const o=this.toHsl(),{h:r}=o,s=[this],i=360/t;for(let n=1;n<t;n++)s.push(new Oe({h:(r+n*i)%360,s:o.s,l:o.l}));return s}equals(t){return this.toRgbString()===new Oe(t).toRgbString()}}var ln="EyeDropper"in window,se=class extends R{constructor(){super(),this.formControlController=new Bt(this),this.isSafeValue=!1,this.localize=new ue(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),o=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,i=this.value;o.focus(),e.preventDefault(),lr(t,{onMove:n=>{this.alpha=Me(n/r*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),o=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,i=this.value;o.focus(),e.preventDefault(),lr(t,{onMove:n=>{this.hue=Me(n/r*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),o=t.querySelector(".color-picker__grid-handle"),{width:r,height:s}=t.getBoundingClientRect();let i=this.value,n=this.value;o.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,lr(t,{onMove:(c,a)=>{this.saturation=Me(c/r*100,0,100),this.brightness=Me(100-a/s*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,o=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Me(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Me(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,o=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Me(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Me(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,o=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Me(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Me(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Me(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Me(this.brightness-t,0,100),this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,o=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Oe(e);if(!t.isValid)return null;const o=t.toHsl(),r={h:o.h,s:o.s*100,l:o.l*100,a:o.a},s=t.toRgb(),i=t.toHexString(),n=t.toHex8String(),c=t.toHsv(),a={h:c.h,s:c.s*100,v:c.v*100,a:c.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!ln)return;new EyeDropper().open().then(t=>{const o=this.value;this.setColor(t.sRGBHex),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,o,r=100){const s=new Oe(`hsva(${e}, ${t}%, ${o}%, ${r/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const o=this.parseColor(t);o!==null?(this.inputValue=this.value,this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=o.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(s=>s.trim()!==""),r=C`
      <div
        part="base"
        class=${U({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?C`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Qe({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${U({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Qe({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${P(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Qe({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${P(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?C`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Qe({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Qe({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${P(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Qe({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":C`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${ln?C`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${o.length>0?C`
              <div part="swatches" class="color-picker__swatches">
                ${o.map(s=>{const i=this.parseColor(s);return i?C`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${P(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${s}
                      @click=${()=>this.selectSwatch(s)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Qe({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${s}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:C`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${U({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Qe({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};se.styles=[F,ju];se.dependencies={"sl-button-group":eo,"sl-button":pe,"sl-dropdown":Ye,"sl-icon":we,"sl-input":W,"sl-visually-hidden":Gr};l([A('[part~="base"]')],se.prototype,"base",2);l([A('[part~="input"]')],se.prototype,"input",2);l([A(".color-dropdown")],se.prototype,"dropdown",2);l([A('[part~="preview"]')],se.prototype,"previewButton",2);l([A('[part~="trigger"]')],se.prototype,"trigger",2);l([H()],se.prototype,"hasFocus",2);l([H()],se.prototype,"isDraggingGridHandle",2);l([H()],se.prototype,"isEmpty",2);l([H()],se.prototype,"inputValue",2);l([H()],se.prototype,"hue",2);l([H()],se.prototype,"saturation",2);l([H()],se.prototype,"brightness",2);l([H()],se.prototype,"alpha",2);l([u()],se.prototype,"value",2);l([mo()],se.prototype,"defaultValue",2);l([u()],se.prototype,"label",2);l([u()],se.prototype,"format",2);l([u({type:Boolean,reflect:!0})],se.prototype,"inline",2);l([u({reflect:!0})],se.prototype,"size",2);l([u({attribute:"no-format-toggle",type:Boolean})],se.prototype,"noFormatToggle",2);l([u()],se.prototype,"name",2);l([u({type:Boolean,reflect:!0})],se.prototype,"disabled",2);l([u({type:Boolean})],se.prototype,"hoist",2);l([u({type:Boolean})],se.prototype,"opacity",2);l([u({type:Boolean})],se.prototype,"uppercase",2);l([u()],se.prototype,"swatches",2);l([u({reflect:!0})],se.prototype,"form",2);l([u({type:Boolean,reflect:!0})],se.prototype,"required",2);l([z("format",{waitUntilFirstUpdate:!0})],se.prototype,"handleFormatChange",1);l([z("opacity",{waitUntilFirstUpdate:!0})],se.prototype,"handleOpacityChange",1);l([z("value")],se.prototype,"handleValueChange",1);var rh="sl-color-picker";se.define("sl-color-picker");D({tagName:rh,elementClass:se,react:I,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var sh=L`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,He=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),o=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let s=this.from,i="";o?[s,i]=this.from.trim().split("."):r&&([s,i]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(s):null;n?r?e=n.getAttribute(i)||"":o?e=n[i]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),r=this.errorLabel||this.localize.term("error"),s=e==="success"?this.successIcon:this.errorIcon,i=$e(this,"copy.in",{dir:"ltr"}),n=$e(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?o:r,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,s.hidden=!1,await s.animate(i.keyframes,i.options).finished,setTimeout(async()=>{await s.animate(n.keyframes,n.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(i.keyframes,i.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return C`
      <sl-tooltip
        class=${U({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};He.styles=[F,sh];He.dependencies={"sl-icon":we,"sl-tooltip":Ue};l([A('slot[name="copy-icon"]')],He.prototype,"copyIcon",2);l([A('slot[name="success-icon"]')],He.prototype,"successIcon",2);l([A('slot[name="error-icon"]')],He.prototype,"errorIcon",2);l([A("sl-tooltip")],He.prototype,"tooltip",2);l([H()],He.prototype,"isCopying",2);l([H()],He.prototype,"status",2);l([u()],He.prototype,"value",2);l([u()],He.prototype,"from",2);l([u({type:Boolean,reflect:!0})],He.prototype,"disabled",2);l([u({attribute:"copy-label"})],He.prototype,"copyLabel",2);l([u({attribute:"success-label"})],He.prototype,"successLabel",2);l([u({attribute:"error-label"})],He.prototype,"errorLabel",2);l([u({attribute:"feedback-duration",type:Number})],He.prototype,"feedbackDuration",2);l([u({attribute:"tooltip-placement"})],He.prototype,"tooltipPlacement",2);l([u({type:Boolean})],He.prototype,"hoist",2);ve("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});ve("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var ih="sl-copy-button";He.define("sl-copy-button");D({tagName:ih,elementClass:He,react:I,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var nh=L`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,_r=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};_r.styles=[F,nh];l([u({type:Boolean,reflect:!0})],_r.prototype,"vertical",2);l([z("vertical")],_r.prototype,"handleVerticalChange",1);var lh="sl-divider";_r.define("sl-divider");D({tagName:lh,elementClass:_r,react:I,events:{},displayName:"SlDivider"});var ah=L`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,xo=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Et=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ze(this,"icon","suffix"),this.localize=new ue(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Le(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=$e(this,"alert.show",{dir:this.localize.dir()});await Ne(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Le(this.base);const{keyframes:e,options:t}=$e(this,"alert.hide",{dir:this.localize.dir()});await Ne(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Je(this,"sl-after-hide")}async toast(){return new Promise(e=>{xo.parentElement===null&&document.body.append(xo),xo.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{xo.removeChild(this),e(),xo.querySelector("sl-alert")===null&&xo.remove()},{once:!0})})}render(){return C`
      <div
        part="base"
        class=${U({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Et.styles=[F,ah];Et.dependencies={"sl-icon-button":Ve};l([A('[part~="base"]')],Et.prototype,"base",2);l([u({type:Boolean,reflect:!0})],Et.prototype,"open",2);l([u({type:Boolean,reflect:!0})],Et.prototype,"closable",2);l([u({reflect:!0})],Et.prototype,"variant",2);l([u({type:Number})],Et.prototype,"duration",2);l([z("open",{waitUntilFirstUpdate:!0})],Et.prototype,"handleOpenChange",1);l([z("duration")],Et.prototype,"handleDurationChange",1);ve("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ve("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var ch="sl-alert";Et.define("sl-alert");D({tagName:ch,elementClass:Et,react:I,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"});var dh=L`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,yt=class extends R{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:o}=this.animatedImage;e.width=t,e.height=o,e.getContext("2d").drawImage(this.animatedImage,0,0,t,o),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return C`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?C`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};yt.styles=[F,dh];yt.dependencies={"sl-icon":we};l([A(".animated-image__animated")],yt.prototype,"animatedImage",2);l([H()],yt.prototype,"frozenFrame",2);l([H()],yt.prototype,"isLoaded",2);l([u()],yt.prototype,"src",2);l([u()],yt.prototype,"alt",2);l([u({type:Boolean,reflect:!0})],yt.prototype,"play",2);l([z("play",{waitUntilFirstUpdate:!0})],yt.prototype,"handlePlayChange",1);l([z("src")],yt.prototype,"handleSrcChange",1);var uh="sl-animated-image";yt.define("sl-animated-image");D({tagName:uh,elementClass:yt,react:I,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});const hh=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],ph=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],fh=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],mh=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],gh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],bh=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],vh=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],yh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],wh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_h=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],kh=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ch=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sh=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],$h=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zh=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Eh=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ah=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Th=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Oh=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Nh=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ih=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Rh=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ph=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Mh=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Dh=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Lh=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Bh=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Vh=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Fh=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Uh=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Hh=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],jh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qh=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wh=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kh=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yh=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gh=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jh=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zh=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qh=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ep=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tp=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],op=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],rp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],sp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],ip=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],np=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],lp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],ap=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],cp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],dp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],up=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],hp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],pp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],fp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],mp=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],gp=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],bp=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],vp=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],yp=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],wp=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xp=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_p=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],kp=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Cp=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Sp=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],$p=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zp=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ep=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ap=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Tp=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Op=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Np=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ip=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Rp=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pp=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Mp=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dp=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Bp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Vp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Fp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Up=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Hp=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],jp=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Wp=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Kp=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xp=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Yp=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gp=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jp=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Zp=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Qp=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ef=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],tf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},of=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Sh,backInLeft:$h,backInRight:zh,backInUp:Eh,backOutDown:Ah,backOutLeft:Th,backOutRight:Oh,backOutUp:Nh,bounce:hh,bounceIn:Ih,bounceInDown:Rh,bounceInLeft:Ph,bounceInRight:Mh,bounceInUp:Dh,bounceOut:Lh,bounceOutDown:Bh,bounceOutLeft:Vh,bounceOutRight:Fh,bounceOutUp:Uh,easings:yl,fadeIn:Hh,fadeInBottomLeft:jh,fadeInBottomRight:qh,fadeInDown:Wh,fadeInDownBig:Kh,fadeInLeft:Xh,fadeInLeftBig:Yh,fadeInRight:Gh,fadeInRightBig:Jh,fadeInTopLeft:Zh,fadeInTopRight:Qh,fadeInUp:ep,fadeInUpBig:tp,fadeOut:op,fadeOutBottomLeft:rp,fadeOutBottomRight:sp,fadeOutDown:ip,fadeOutDownBig:np,fadeOutLeft:lp,fadeOutLeftBig:ap,fadeOutRight:cp,fadeOutRightBig:dp,fadeOutTopLeft:up,fadeOutTopRight:hp,fadeOutUp:pp,fadeOutUpBig:fp,flash:ph,flip:mp,flipInX:gp,flipInY:bp,flipOutX:vp,flipOutY:yp,headShake:fh,heartBeat:mh,hinge:Up,jackInTheBox:Hp,jello:gh,lightSpeedInLeft:wp,lightSpeedInRight:xp,lightSpeedOutLeft:_p,lightSpeedOutRight:kp,pulse:bh,rollIn:jp,rollOut:qp,rotateIn:Cp,rotateInDownLeft:Sp,rotateInDownRight:$p,rotateInUpLeft:zp,rotateInUpRight:Ep,rotateOut:Ap,rotateOutDownLeft:Tp,rotateOutDownRight:Op,rotateOutUpLeft:Np,rotateOutUpRight:Ip,rubberBand:vh,shake:yh,shakeX:wh,shakeY:xh,slideInDown:Rp,slideInLeft:Pp,slideInRight:Mp,slideInUp:Dp,slideOutDown:Lp,slideOutLeft:Bp,slideOutRight:Vp,slideOutUp:Fp,swing:_h,tada:kh,wobble:Ch,zoomIn:Wp,zoomInDown:Kp,zoomInLeft:Xp,zoomInRight:Yp,zoomInUp:Gp,zoomOut:Jp,zoomOutDown:Zp,zoomOutLeft:Qp,zoomOutRight:ef,zoomOutUp:tf},Symbol.toStringTag,{value:"Module"}));var rf=L`
  :host {
    display: contents;
  }
`,je=class extends R{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const o=(e=yl[this.easing])!=null?e:this.easing,r=(t=this.keyframes)!=null?t:of[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!r?!1:(this.destroyAnimation(),this.animation=i.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:o,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};je.styles=[F,rf];l([wa("slot")],je.prototype,"defaultSlot",2);l([u()],je.prototype,"name",2);l([u({type:Boolean,reflect:!0})],je.prototype,"play",2);l([u({type:Number})],je.prototype,"delay",2);l([u()],je.prototype,"direction",2);l([u({type:Number})],je.prototype,"duration",2);l([u()],je.prototype,"easing",2);l([u({attribute:"end-delay",type:Number})],je.prototype,"endDelay",2);l([u()],je.prototype,"fill",2);l([u({type:Number})],je.prototype,"iterations",2);l([u({attribute:"iteration-start",type:Number})],je.prototype,"iterationStart",2);l([u({attribute:!1})],je.prototype,"keyframes",2);l([u({attribute:"playback-rate",type:Number})],je.prototype,"playbackRate",2);l([z(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],je.prototype,"handleAnimationChange",1);l([z("play")],je.prototype,"handlePlayChange",1);l([z("playbackRate")],je.prototype,"handlePlaybackRateChange",1);var sf="sl-animation";je.define("sl-animation");D({tagName:sf,elementClass:je,react:I,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var nf=L`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,At=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=C`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=C``;return this.initials?t=C`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=C`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,C`
      <div
        part="base"
        class=${U({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};At.styles=[F,nf];At.dependencies={"sl-icon":we};l([H()],At.prototype,"hasError",2);l([u()],At.prototype,"image",2);l([u()],At.prototype,"label",2);l([u()],At.prototype,"initials",2);l([u()],At.prototype,"loading",2);l([u({reflect:!0})],At.prototype,"shape",2);l([z("image")],At.prototype,"handleImageChange",1);var lf="sl-avatar";At.define("sl-avatar");D({tagName:lf,elementClass:At,react:I,events:{},displayName:"SlAvatar"});var af=L`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,vo=class extends R{constructor(){super(...arguments),this.localize=new ue(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,o)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),o===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),C`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};vo.styles=[F,af];vo.dependencies={"sl-icon":we};l([A("slot")],vo.prototype,"defaultSlot",2);l([A('slot[name="separator"]')],vo.prototype,"separatorSlot",2);l([u()],vo.prototype,"label",2);var cf="sl-breadcrumb";vo.define("sl-breadcrumb");D({tagName:cf,elementClass:vo,react:I,events:{},displayName:"SlBreadcrumb"});var df="sl-button";pe.define("sl-button");D({tagName:df,elementClass:pe,react:I,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"});var uf=L`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ho=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ze(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return C`
      <div
        part="base"
        class=${U({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?C`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${P(this.target?this.target:void 0)}"
                rel=${P(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:C`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Ho.styles=[F,uf];l([u()],Ho.prototype,"href",2);l([u()],Ho.prototype,"target",2);l([u()],Ho.prototype,"rel",2);var hf="sl-breadcrumb-item";Ho.define("sl-breadcrumb-item");D({tagName:hf,elementClass:Ho,react:I,events:{},displayName:"SlBreadcrumbItem"});var pf=L`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,jo=class extends R{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return C`
      <span
        part="base"
        class=${U({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};jo.styles=[F,pf];l([u({reflect:!0})],jo.prototype,"variant",2);l([u({type:Boolean,reflect:!0})],jo.prototype,"pill",2);l([u({type:Boolean,reflect:!0})],jo.prototype,"pulse",2);var ff="sl-badge";jo.define("sl-badge");D({tagName:ff,elementClass:jo,react:I,events:{},displayName:"SlBadge"});var mf=Object.defineProperty,gf=(e,t,o)=>t in e?mf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,oe=(e,t,o)=>(gf(e,typeof t!="symbol"?t+"":t,o),o);const fo=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA","1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JON","MIC","NAM","HAB","ZEP","HAG","ZEC","MAL","MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV","TOB","JDT","ESG","WIS","SIR","BAR","LJE","S3Y","SUS","BEL","1MA","2MA","3MA","4MA","1ES","2ES","MAN","PS2","ODA","PSS","JSA","JDB","TBS","SST","DNT","BLT","XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","3ES","EZA","5EZ","6EZ","INT","CNC","GLO","TDX","NDX","DAG","PS3","2BA","LBA","JUB","ENO","1MQ","2MQ","3MQ","REP","4BA","LAO"],pi=["XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","INT","CNC","GLO","TDX","NDX"],wl=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther (Hebrew)","Job","Psalms","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel (Hebrew)","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation","Tobit","Judith","Esther Greek","Wisdom of Solomon","Sirach (Ecclesiasticus)","Baruch","Letter of Jeremiah","Song of 3 Young Men","Susanna","Bel and the Dragon","1 Maccabees","2 Maccabees","3 Maccabees","4 Maccabees","1 Esdras (Greek)","2 Esdras (Latin)","Prayer of Manasseh","Psalm 151","Odes","Psalms of Solomon","Joshua A. *obsolete*","Judges B. *obsolete*","Tobit S. *obsolete*","Susanna Th. *obsolete*","Daniel Th. *obsolete*","Bel Th. *obsolete*","Extra A","Extra B","Extra C","Extra D","Extra E","Extra F","Extra G","Front Matter","Back Matter","Other Matter","3 Ezra *obsolete*","Apocalypse of Ezra","5 Ezra (Latin Prologue)","6 Ezra (Latin Epilogue)","Introduction","Concordance ","Glossary ","Topical Index","Names Index","Daniel Greek","Psalms 152-155","2 Baruch (Apocalypse)","Letter of Baruch","Jubilees","Enoch","1 Meqabyan","2 Meqabyan","3 Meqabyan","Reproof (Proverbs 25-31)","4 Baruch (Rest of Baruch)","Laodiceans"],an=$f();function qo(e,t=!0){return t&&(e=e.toUpperCase()),e in an?an[e]:0}function fi(e){return qo(e)>0}function bf(e){const t=typeof e=="string"?qo(e):e;return t>=40&&t<=66}function vf(e){return(typeof e=="string"?qo(e):e)<=39}function xl(e){return e<=66}function yf(e){const t=typeof e=="string"?qo(e):e;return Cl(t)&&!xl(t)}function*wf(){for(let e=1;e<=fo.length;e++)yield e}const xf=1,_l=fo.length;function _f(){return["XXA","XXB","XXC","XXD","XXE","XXF","XXG"]}function mi(e,t="***"){const o=e-1;return o<0||o>=fo.length?t:fo[o]}function kl(e){return e<=0||e>_l?"******":wl[e-1]}function kf(e){return kl(qo(e))}function Cl(e){const t=typeof e=="number"?mi(e):e;return fi(t)&&!pi.includes(t)}function Cf(e){const t=typeof e=="number"?mi(e):e;return fi(t)&&pi.includes(t)}function Sf(e){return wl[e-1].includes("*obsolete*")}function $f(){const e={};for(let t=0;t<fo.length;t++)e[fo[t]]=t+1;return e}const Fe={allBookIds:fo,nonCanonicalIds:pi,bookIdToNumber:qo,isBookIdValid:fi,isBookNT:bf,isBookOT:vf,isBookOTNT:xl,isBookDC:yf,allBookNumbers:wf,firstBook:xf,lastBook:_l,extraBooks:_f,bookNumberToId:mi,bookNumberToEnglishName:kl,bookIdToEnglishName:kf,isCanonical:Cl,isExtraMaterial:Cf,isObsolete:Sf};var jt=(e=>(e[e.Unknown=0]="Unknown",e[e.Original=1]="Original",e[e.Septuagint=2]="Septuagint",e[e.Vulgate=3]="Vulgate",e[e.English=4]="English",e[e.RussianProtestant=5]="RussianProtestant",e[e.RussianOrthodox=6]="RussianOrthodox",e))(jt||{});const so=class{constructor(e){if(oe(this,"name"),oe(this,"fullPath"),oe(this,"isPresent"),oe(this,"hasVerseSegments"),oe(this,"isCustomized"),oe(this,"baseVersification"),oe(this,"scriptureBooks"),oe(this,"_type"),e!=null)typeof e=="string"?this.name=e:this._type=e;else throw new Error("Argument null")}get type(){return this._type}equals(e){return!e.type||!this.type?!1:e.type===this.type}};let ht=so;oe(ht,"Original",new so(jt.Original)),oe(ht,"Septuagint",new so(jt.Septuagint)),oe(ht,"Vulgate",new so(jt.Vulgate)),oe(ht,"English",new so(jt.English)),oe(ht,"RussianProtestant",new so(jt.RussianProtestant)),oe(ht,"RussianOrthodox",new so(jt.RussianOrthodox));function cn(e,t){const o=t[0];for(let r=1;r<t.length;r++)e=e.split(t[r]).join(o);return e.split(o)}var Sl=(e=>(e[e.Valid=0]="Valid",e[e.UnknownVersification=1]="UnknownVersification",e[e.OutOfRange=2]="OutOfRange",e[e.VerseOutOfOrder=3]="VerseOutOfOrder",e[e.VerseRepeated=4]="VerseRepeated",e))(Sl||{});const te=class{constructor(t,o,r,s){if(oe(this,"firstChapter"),oe(this,"lastChapter"),oe(this,"lastVerse"),oe(this,"hasSegmentsDefined"),oe(this,"text"),oe(this,"BBBCCCVVVS"),oe(this,"longHashCode"),oe(this,"versification"),oe(this,"rtlMark","‏"),oe(this,"_bookNum",0),oe(this,"_chapterNum",0),oe(this,"_verseNum",0),oe(this,"_verse"),r==null&&s==null)if(t!=null&&typeof t=="string"){const i=t,n=o!=null&&o instanceof ht?o:void 0;this.setEmpty(n),this.parse(i)}else if(t!=null&&typeof t=="number"){const i=o!=null&&o instanceof ht?o:void 0;this.setEmpty(i),this._verseNum=t%te.chapterDigitShifter,this._chapterNum=Math.floor(t%te.bookDigitShifter/te.chapterDigitShifter),this._bookNum=Math.floor(t/te.bookDigitShifter)}else if(o==null)if(t!=null&&t instanceof te){const i=t;this._bookNum=i.bookNum,this._chapterNum=i.chapterNum,this._verseNum=i.verseNum,this._verse=i.verse,this.versification=i.versification}else{if(t==null)return;const i=t instanceof ht?t:te.defaultVersification;this.setEmpty(i)}else throw new Error("VerseRef constructor not supported.");else if(t!=null&&o!=null&&r!=null)if(typeof t=="string"&&typeof o=="string"&&typeof r=="string")this.setEmpty(s),this.updateInternal(t,o,r);else if(typeof t=="number"&&typeof o=="number"&&typeof r=="number")this._bookNum=t,this._chapterNum=o,this._verseNum=r,this.versification=s??te.defaultVersification;else throw new Error("VerseRef constructor not supported.");else throw new Error("VerseRef constructor not supported.")}static parse(t,o=te.defaultVersification){const r=new te(o);return r.parse(t),r}static isVerseParseable(t){return t.length>0&&"0123456789".includes(t[0])&&!t.endsWith(this.verseRangeSeparator)&&!t.endsWith(this.verseSequenceIndicator)}static tryParse(t){let o;try{return o=te.parse(t),{success:!0,verseRef:o}}catch(r){if(r instanceof Qo)return o=new te,{success:!1,verseRef:o};throw r}}static getBBBCCCVVV(t,o,r){return t%te.bcvMaxValue*te.bookDigitShifter+(o>=0?o%te.bcvMaxValue*te.chapterDigitShifter:0)+(r>=0?r%te.bcvMaxValue:0)}static tryGetVerseNum(t){let o;if(!t)return o=-1,{success:!0,vNum:o};o=0;let r;for(let s=0;s<t.length;s++){if(r=t[s],r<"0"||r>"9")return s===0&&(o=-1),{success:!1,vNum:o};if(o=o*10+ +r-+"0",o>te.bcvMaxValue)return o=-1,{success:!1,vNum:o}}return{success:!0,vNum:o}}get isDefault(){return this.bookNum===0&&this.chapterNum===0&&this.verseNum===0&&this.versification==null}get hasMultiple(){return this._verse!=null&&(this._verse.includes(te.verseRangeSeparator)||this._verse.includes(te.verseSequenceIndicator))}get book(){return Fe.bookNumberToId(this.bookNum,"")}set book(t){this.bookNum=Fe.bookIdToNumber(t)}get chapter(){return this.isDefault||this._chapterNum<0?"":this._chapterNum.toString()}set chapter(t){const o=+t;this._chapterNum=Number.isInteger(o)?o:-1}get verse(){return this._verse!=null?this._verse:this.isDefault||this._verseNum<0?"":this._verseNum.toString()}set verse(t){const{success:o,vNum:r}=te.tryGetVerseNum(t);this._verse=o?void 0:t.replace(this.rtlMark,""),this._verseNum=r,!(this._verseNum>=0)&&({vNum:this._verseNum}=te.tryGetVerseNum(this._verse))}get bookNum(){return this._bookNum}set bookNum(t){if(t<=0||t>Fe.lastBook)throw new Qo("BookNum must be greater than zero and less than or equal to last book");this._bookNum=t}get chapterNum(){return this._chapterNum}set chapterNum(t){this.chapterNum=t}get verseNum(){return this._verseNum}set verseNum(t){this._verseNum=t}get versificationStr(){var t;return(t=this.versification)==null?void 0:t.name}set versificationStr(t){this.versification=this.versification!=null?new ht(t):void 0}get valid(){return this.validStatus===0}get validStatus(){return this.validateVerse(te.verseRangeSeparators,te.verseSequenceIndicators)}get BBBCCC(){return te.getBBBCCCVVV(this._bookNum,this._chapterNum,0)}get BBBCCCVVV(){return te.getBBBCCCVVV(this._bookNum,this._chapterNum,this._verseNum)}get isExcluded(){return!1}parse(t){if(t=t.replace(this.rtlMark,""),t.includes("/")){const i=t.split("/");if(t=i[0],i.length>1)try{const n=+i[1].trim();this.versification=new ht(jt[n])}catch{throw new Qo("Invalid reference : "+t)}}const o=t.trim().split(" ");if(o.length!==2)throw new Qo("Invalid reference : "+t);const r=o[1].split(":"),s=+r[0];if(r.length!==2||Fe.bookIdToNumber(o[0])===0||!Number.isInteger(s)||s<0||!te.isVerseParseable(r[1]))throw new Qo("Invalid reference : "+t);this.updateInternal(o[0],r[0],r[1])}simplify(){this._verse=void 0}clone(){return new te(this)}toString(){const t=this.book;return t===""?"":`${t} ${this.chapter}:${this.verse}`}equals(t){return t._bookNum===this._bookNum&&t._chapterNum===this._chapterNum&&t._verseNum===this._verseNum&&t._verse===this._verse&&t.versification!=null&&this.versification!=null&&t.versification.equals(this.versification)}allVerses(t=!1,o=te.verseRangeSeparators,r=te.verseSequenceIndicators){if(this._verse==null||this.chapterNum<=0)return[this.clone()];const s=[],i=cn(this._verse,r);for(const n of i.map(c=>cn(c,o))){const c=this.clone();c.verse=n[0];const a=c.verseNum;if(s.push(c),n.length>1){const d=this.clone();if(d.verse=n[1],!t)for(let f=a+1;f<d.verseNum;f++){const h=new te(this._bookNum,this._chapterNum,f,this.versification);this.isExcluded||s.push(h)}s.push(d)}}return s}validateVerse(t,o){if(!this.verse)return this.internalValid;let r=0;for(const s of this.allVerses(!0,t,o)){const i=s.internalValid;if(i!==0)return i;const n=s.BBBCCCVVV;if(r>n)return 3;if(r===n)return 4;r=n}return 0}get internalValid(){return this.versification==null?1:this._bookNum<=0||this._bookNum>Fe.lastBook?2:0}setEmpty(t=te.defaultVersification){this._bookNum=0,this._chapterNum=-1,this._verse=void 0,this.versification=t}updateInternal(t,o,r){this.bookNum=Fe.bookIdToNumber(t),this.chapter=o,this.verse=r}};let Pt=te;oe(Pt,"defaultVersification",ht.English),oe(Pt,"verseRangeSeparator","-"),oe(Pt,"verseSequenceIndicator",","),oe(Pt,"verseRangeSeparators",[te.verseRangeSeparator]),oe(Pt,"verseSequenceIndicators",[te.verseSequenceIndicator]),oe(Pt,"chapterDigitShifter",1e3),oe(Pt,"bookDigitShifter",te.chapterDigitShifter*te.chapterDigitShifter),oe(Pt,"bcvMaxValue",te.chapterDigitShifter-1),oe(Pt,"ValidStatusType",Sl);class Qo extends Error{}function zf({bookId:e,handleSelectBook:t,isSelected:o,children:r}){return O.jsxs("div",{children:[O.jsxs(iu,{value:e,className:o?"selected-menu-item":"menu-item",onClick:()=>t(e),children:[Fe.bookIdToEnglishName(e),o?O.jsx("div",{className:"selected-book-color-label",slot:"prefix"}):O.jsx("div",{className:"book-color-label",slot:"prefix"})]},e),o&&r]})}function Ef({handleSearch:e,handleClick:t,value:o,placeholder:r}){return O.jsxs(Ld,{className:"book-chapter-input",placeholder:r,size:"small",type:"text",value:o,onSlInput:s=>e(s.target.value),onClick:t,children:[O.jsx(en,{name:"search",slot:"prefix"}),O.jsx(en,{name:"clock-history",slot:"suffix"})]})}function Af({endChapter:e,handleSelectChapter:t}){const o=Array.from({length:e},(r,s)=>s+1);return O.jsx("div",{className:"chapter-select",children:o.map(r=>O.jsx("div",{onClick:()=>t(r),children:r},r))})}const Tf={OT:"Old Testament",NT:"New Testament",DC:"Deuterocanon"},Of=["OT","NT","DC"];function Nf({scrRef:e,handleSubmit:t}){const{allBookIds:o}=Fe,r=ke.useCallback(v=>({OT:o.filter(x=>Fe.isBookOT(x)),NT:o.filter(x=>Fe.isBookNT(x)),DC:o.filter(x=>Fe.isBookDC(x))})[v],[o]),[s,i]=ke.useState(""),[n,c]=ke.useState(""),[a,d]=ke.useState(!1),f=ke.useCallback(v=>r(v).filter(_=>Fe.bookIdToEnglishName(_).toLowerCase().includes(n.toLowerCase())||_.toLowerCase().includes(n.toLowerCase())),[r,n]),h=ke.useCallback(v=>xt.getChaptersForBook(Fe.bookIdToNumber(v)),[]),p=v=>{i(v),t({bookNum:Fe.bookIdToNumber(v),chapterNum:1,verseNum:1}),h(v)===-1&&d(!1)},m=v=>{c(v)},g=()=>{d(!0)},b=v=>{d(!1),t({bookNum:Fe.bookIdToNumber(s),chapterNum:v,verseNum:1})};return O.jsxs("div",{className:"book-chapter-control",children:[O.jsx(Ef,{value:n,handleSearch:m,handleClick:g,placeholder:`${Fe.bookNumberToEnglishName(e.bookNum)} ${e.chapterNum}:${e.verseNum}`}),a&&O.jsx(Kd,{className:"book-chapter-menu",children:Of.map(v=>O.jsxs("div",{children:[O.jsx(cu,{children:Tf[v]}),f(v).map(_=>O.jsx("div",{className:"menu-item-container",children:O.jsx(zf,{bookId:_,handleSelectBook:()=>p(_),isSelected:s===_,children:O.jsx("div",{className:"chapter-drawer",children:O.jsx(Af,{handleSelectChapter:b,endChapter:h(_)})})},_)},_))]},v))})]})}function io({id:e,isDisabled:t=!1,className:o,onClick:r,onContextMenu:s,children:i}){return O.jsx(De.Button,{id:e,disabled:t,className:`papi-button ${o??""}`,onClick:r,onContextMenu:s,children:i})}function qr({id:e,title:t,isDisabled:o=!1,isClearable:r=!0,hasError:s=!1,isFullWidth:i=!1,width:n,options:c=[],className:a,value:d,onChange:f,onFocus:h,onBlur:p,getOptionLabel:m}){return O.jsx(De.Autocomplete,{id:e,disablePortal:!0,disabled:o,disableClearable:!r,fullWidth:i,options:c,className:`papi-combo-box ${s?"error":""} ${a??""}`,value:d,onChange:f,onFocus:h,onBlur:p,getOptionLabel:m,renderInput:g=>O.jsx(De.TextField,{...g,error:s,fullWidth:i,disabled:o,label:t,style:{width:n}})})}function If({startChapter:e,endChapter:t,handleSelectStartChapter:o,handleSelectEndChapter:r,isDisabled:s,chapterCount:i}){const n=ke.useMemo(()=>Array.from({length:i},(d,f)=>f+1),[i]),c=(d,f)=>{o(f),f>t&&r(f)},a=(d,f)=>{r(f),f<e&&o(f)};return O.jsxs(O.Fragment,{children:[O.jsx(De.FormControlLabel,{className:"book-selection-chapter-form-label start",disabled:s,control:O.jsx(qr,{onChange:(d,f)=>c(d,f),className:"book-selection-chapter",isClearable:!1,options:n,getOptionLabel:d=>d.toString(),value:e,isDisabled:s},"start chapter"),label:"Chapters",labelPlacement:"start"}),O.jsx(De.FormControlLabel,{className:"book-selection-chapter-form-label end",disabled:s,control:O.jsx(qr,{onChange:(d,f)=>a(d,f),className:"book-selection-chapter",isClearable:!1,options:n,getOptionLabel:d=>d.toString(),value:t,isDisabled:s},"end chapter"),label:"to",labelPlacement:"start"})]})}var lo=(e=>(e.After="after",e.Before="before",e.Above="above",e.Below="below",e))(lo||{});function $l({id:e,isChecked:t,labelText:o="",labelPosition:r=lo.After,isIndeterminate:s=!1,isDefaultChecked:i,isDisabled:n=!1,hasError:c=!1,className:a,onChange:d}){const f=O.jsx(De.Checkbox,{id:e,checked:t,indeterminate:s,defaultChecked:i,disabled:n,className:`papi-checkbox ${c?"error":""} ${a??""}`,onChange:d});let h;if(o){const p=r===lo.Before||r===lo.Above,m=O.jsx("span",{className:`papi-checkbox-label ${c?"error":""} ${a??""}`,children:o}),g=r===lo.Before||r===lo.After,b=g?m:O.jsx("div",{children:m}),v=g?f:O.jsx("div",{children:f});h=O.jsxs(De.FormLabel,{className:`papi-checkbox ${r.toString()}`,disabled:n,error:c,children:[p&&b,v,!p&&b]})}else h=f;return h}function zl(e){const{onClick:t,name:o,hasAutoFocus:r=!1,className:s,isDense:i=!0,hasDisabledGutters:n=!1,hasDivider:c=!1,focusVisibleClassName:a,id:d,children:f}=e;return O.jsx(De.MenuItem,{autoFocus:r,className:s,dense:i,disableGutters:n,divider:c,focusVisibleClassName:a,onClick:t,id:d,children:o||f})}function Rf({commandHandler:e,name:t,className:o,items:r,id:s}){return O.jsxs(De.Grid,{id:s,item:!0,xs:"auto",className:`papi-menu-column ${o??""}`,children:[O.jsx("h3",{className:`papi-menu ${o??""}`,children:t}),r.map((i,n)=>O.jsx(zl,{className:`papi-menu-item ${i.className}`,onClick:()=>{e(i)},...i},n))]})}function El({commandHandler:e,className:t,columns:o,id:r}){return O.jsx(De.Grid,{container:!0,spacing:0,className:`papi-multi-column-menu ${t??""}`,columns:o.length,id:r,children:o.map((s,i)=>O.jsx(Rf,{commandHandler:e,name:s.name,className:t,items:s.items},i))})}function Pf({id:e,label:t,isDisabled:o=!1,tooltip:r,isTooltipSuppressed:s=!1,adjustMarginToAlignToEdge:i=!1,size:n="medium",className:c,onClick:a,children:d}){return O.jsx(De.IconButton,{id:e,disabled:o,edge:i,size:n,"aria-label":t,title:s?void 0:r??t,className:`papi-icon-button ${c??""}`,onClick:a,children:d})}function pr({variant:e="outlined",id:t,isDisabled:o=!1,hasError:r=!1,isFullWidth:s=!1,helperText:i,label:n,placeholder:c,isRequired:a=!1,className:d,defaultValue:f,value:h,onChange:p,onFocus:m,onBlur:g}){return O.jsx(De.TextField,{variant:e,id:t,disabled:o,error:r,fullWidth:s,helperText:i,label:n,placeholder:c,required:a,className:`papi-textfield ${d??""}`,defaultValue:f,value:h,onChange:p,onFocus:m,onBlur:g})}let Cs;const Ss=()=>(Cs||(Cs=Fe.allBookIds.map(e=>({bookId:e,label:Fe.bookIdToEnglishName(e)}))),Cs);function Mf({scrRef:e,handleSubmit:t,id:o}){const r=a=>{t(a)},s=(a,d)=>{const h={bookNum:Fe.bookIdToNumber(d.bookId),chapterNum:1,verseNum:1};r(h)},i=a=>{t({...e,chapterNum:+a.target.value})},n=a=>{t({...e,verseNum:+a.target.value})},c=ke.useMemo(()=>Ss()[e.bookNum-1],[e.bookNum]);return O.jsxs("span",{id:o,children:[O.jsx(qr,{title:"Book",className:"papi-ref-selector book",value:c,options:Ss(),onChange:s,isClearable:!1,width:200}),O.jsx(io,{onClick:()=>r(xt.offsetBook(e,-1)),isDisabled:e.bookNum<=xt.FIRST_SCR_BOOK_NUM,children:"<"}),O.jsx(io,{onClick:()=>r(xt.offsetBook(e,1)),isDisabled:e.bookNum>=Ss().length,children:">"}),O.jsx(pr,{className:"papi-ref-selector chapter-verse",label:"Chapter",value:e.chapterNum,onChange:i}),O.jsx(io,{onClick:()=>t(xt.offsetChapter(e,-1)),isDisabled:e.chapterNum<=xt.FIRST_SCR_CHAPTER_NUM,children:"<"}),O.jsx(io,{onClick:()=>t(xt.offsetChapter(e,1)),isDisabled:e.chapterNum>=xt.getChaptersForBook(e.bookNum),children:">"}),O.jsx(pr,{className:"papi-ref-selector chapter-verse",label:"Verse",value:e.verseNum,onChange:n}),O.jsx(io,{onClick:()=>t(xt.offsetVerse(e,-1)),isDisabled:e.verseNum<=xt.FIRST_SCR_VERSE_NUM,children:"<"}),O.jsx(io,{onClick:()=>t(xt.offsetVerse(e,1)),children:">"})]})}function Df({onSearch:e,placeholder:t,isFullWidth:o}){const[r,s]=ke.useState(""),i=n=>{s(n),e(n)};return O.jsx(De.Paper,{component:"form",className:"search-bar-paper",children:O.jsx(pr,{isFullWidth:o,className:"search-bar-input",placeholder:t,value:r,onChange:n=>i(n.target.value)})})}function Lf({id:e,isDisabled:t=!1,orientation:o="horizontal",min:r=0,max:s=100,step:i=1,showMarks:n=!1,defaultValue:c,value:a,valueLabelDisplay:d="off",className:f,onChange:h,onChangeCommitted:p}){return O.jsx(De.Slider,{id:e,disabled:t,orientation:o,min:r,max:s,step:i,marks:n,defaultValue:c,value:a,valueLabelDisplay:d,className:`papi-slider ${o} ${f??""}`,onChange:h,onChangeCommitted:p})}function Bf({autoHideDuration:e=void 0,id:t,isOpen:o=!1,className:r,onClose:s,anchorOrigin:i={vertical:"bottom",horizontal:"left"},ContentProps:n,children:c}){const a={action:(n==null?void 0:n.action)||c,message:n==null?void 0:n.message,className:r};return O.jsx(De.Snackbar,{autoHideDuration:e??void 0,open:o,onClose:s,anchorOrigin:i,id:t,ContentProps:a})}function Vf({id:e,isChecked:t,isDisabled:o=!1,hasError:r=!1,className:s,onChange:i}){return O.jsx(De.Switch,{id:e,checked:t,disabled:o,className:`papi-switch ${r?"error":""} ${s??""}`,onChange:i})}function dn({onRowChange:e,row:t,column:o}){const r=s=>{e({...t,[o.key]:s.target.value})};return O.jsx(pr,{defaultValue:t[o.key],onChange:r})}const Ff=({onChange:e,disabled:t,checked:o,...r})=>{const s=i=>{e(i.target.checked,i.nativeEvent.shiftKey)};return O.jsx($l,{...r,isChecked:o,isDisabled:t,onChange:s})};function Uf({columns:e,sortColumns:t,onSortColumnsChange:o,onColumnResize:r,defaultColumnWidth:s,defaultColumnMinWidth:i,defaultColumnMaxWidth:n,defaultColumnSortable:c=!0,defaultColumnResizable:a=!0,rows:d,enableSelectColumn:f,selectColumnWidth:h=50,rowKeyGetter:p,rowHeight:m=35,headerRowHeight:g=35,selectedRows:b,onSelectedRowsChange:v,onRowsChange:_,onCellClick:x,onCellDoubleClick:k,onCellContextMenu:w,onCellKeyDown:y,direction:E="ltr",enableVirtualization:V=!0,onCopy:j,onPaste:M,onScroll:S,className:X,id:K}){const xe=ke.useMemo(()=>{const G=e.map(J=>typeof J.editable=="function"?{...J,editable:Re=>!!J.editable(Re),renderEditCell:J.renderEditCell||dn}:J.editable&&!J.renderEditCell?{...J,renderEditCell:dn}:J.renderEditCell&&!J.editable?{...J,editable:!1}:J);return f?[{...$i.SelectColumn,minWidth:h},...G]:G},[e,f,h]);return O.jsx($i,{columns:xe,defaultColumnOptions:{width:s,minWidth:i,maxWidth:n,sortable:c,resizable:a},sortColumns:t,onSortColumnsChange:o,onColumnResize:r,rows:d,rowKeyGetter:p,rowHeight:m,headerRowHeight:g,selectedRows:b,onSelectedRowsChange:v,onRowsChange:_,onCellClick:x,onCellDoubleClick:k,onCellContextMenu:w,onCellKeyDown:y,direction:E,enableVirtualization:V,onCopy:j,onPaste:M,onScroll:S,renderers:{renderCheckbox:Ff},className:X??"rdg-light",id:K})}function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},ae.apply(this,arguments)}function Wt(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Al(e){if(!Wt(e))return e;const t={};return Object.keys(e).forEach(o=>{t[o]=Al(e[o])}),t}function kt(e,t,o={clone:!0}){const r=o.clone?ae({},e):e;return Wt(e)&&Wt(t)&&Object.keys(t).forEach(s=>{s!=="__proto__"&&(Wt(t[s])&&s in e&&Wt(e[s])?r[s]=kt(e[s],t[s],o):o.clone?r[s]=Wt(t[s])?Al(t[s]):t[s]:r[s]=t[s])}),r}function Hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gs={exports:{}},Nr={exports:{}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var un;function jf(){if(un)return fe;un=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,n=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,a=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,_=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function k(y){if(typeof y=="object"&&y!==null){var E=y.$$typeof;switch(E){case t:switch(y=y.type,y){case a:case d:case r:case i:case s:case h:return y;default:switch(y=y&&y.$$typeof,y){case c:case f:case g:case m:case n:return y;default:return E}}case o:return E}}}function w(y){return k(y)===d}return fe.AsyncMode=a,fe.ConcurrentMode=d,fe.ContextConsumer=c,fe.ContextProvider=n,fe.Element=t,fe.ForwardRef=f,fe.Fragment=r,fe.Lazy=g,fe.Memo=m,fe.Portal=o,fe.Profiler=i,fe.StrictMode=s,fe.Suspense=h,fe.isAsyncMode=function(y){return w(y)||k(y)===a},fe.isConcurrentMode=w,fe.isContextConsumer=function(y){return k(y)===c},fe.isContextProvider=function(y){return k(y)===n},fe.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===t},fe.isForwardRef=function(y){return k(y)===f},fe.isFragment=function(y){return k(y)===r},fe.isLazy=function(y){return k(y)===g},fe.isMemo=function(y){return k(y)===m},fe.isPortal=function(y){return k(y)===o},fe.isProfiler=function(y){return k(y)===i},fe.isStrictMode=function(y){return k(y)===s},fe.isSuspense=function(y){return k(y)===h},fe.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===r||y===d||y===i||y===s||y===h||y===p||typeof y=="object"&&y!==null&&(y.$$typeof===g||y.$$typeof===m||y.$$typeof===n||y.$$typeof===c||y.$$typeof===f||y.$$typeof===v||y.$$typeof===_||y.$$typeof===x||y.$$typeof===b)},fe.typeOf=k,fe}var me={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hn;function qf(){return hn||(hn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,n=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,a=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,_=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function k(T){return typeof T=="string"||typeof T=="function"||T===r||T===d||T===i||T===s||T===h||T===p||typeof T=="object"&&T!==null&&(T.$$typeof===g||T.$$typeof===m||T.$$typeof===n||T.$$typeof===c||T.$$typeof===f||T.$$typeof===v||T.$$typeof===_||T.$$typeof===x||T.$$typeof===b)}function w(T){if(typeof T=="object"&&T!==null){var ut=T.$$typeof;switch(ut){case t:var B=T.type;switch(B){case a:case d:case r:case i:case s:case h:return B;default:var wo=B&&B.$$typeof;switch(wo){case c:case f:case g:case m:case n:return wo;default:return ut}}case o:return ut}}}var y=a,E=d,V=c,j=n,M=t,S=f,X=r,K=g,xe=m,G=o,J=i,_e=s,Re=h,It=!1;function yo(T){return It||(It=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),$(T)||w(T)===a}function $(T){return w(T)===d}function N(T){return w(T)===c}function ee(T){return w(T)===n}function Z(T){return typeof T=="object"&&T!==null&&T.$$typeof===t}function q(T){return w(T)===f}function ie(T){return w(T)===r}function Y(T){return w(T)===g}function Q(T){return w(T)===m}function ne(T){return w(T)===o}function de(T){return w(T)===i}function le(T){return w(T)===s}function Ge(T){return w(T)===h}me.AsyncMode=y,me.ConcurrentMode=E,me.ContextConsumer=V,me.ContextProvider=j,me.Element=M,me.ForwardRef=S,me.Fragment=X,me.Lazy=K,me.Memo=xe,me.Portal=G,me.Profiler=J,me.StrictMode=_e,me.Suspense=Re,me.isAsyncMode=yo,me.isConcurrentMode=$,me.isContextConsumer=N,me.isContextProvider=ee,me.isElement=Z,me.isForwardRef=q,me.isFragment=ie,me.isLazy=Y,me.isMemo=Q,me.isPortal=ne,me.isProfiler=de,me.isStrictMode=le,me.isSuspense=Ge,me.isValidElementType=k,me.typeOf=w}()),me}var pn;function Tl(){return pn||(pn=1,process.env.NODE_ENV==="production"?Nr.exports=jf():Nr.exports=qf()),Nr.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $s,fn;function Wf(){if(fn)return $s;fn=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function r(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function s(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var n={},c=0;c<10;c++)n["_"+String.fromCharCode(c)]=c;var a=Object.getOwnPropertyNames(n).map(function(f){return n[f]});if(a.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(f){d[f]=f}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return $s=s()?Object.assign:function(i,n){for(var c,a=r(i),d,f=1;f<arguments.length;f++){c=Object(arguments[f]);for(var h in c)t.call(c,h)&&(a[h]=c[h]);if(e){d=e(c);for(var p=0;p<d.length;p++)o.call(c,d[p])&&(a[d[p]]=c[d[p]])}}return a},$s}var zs,mn;function gi(){if(mn)return zs;mn=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return zs=e,zs}var Es,gn;function Ol(){return gn||(gn=1,Es=Function.call.bind(Object.prototype.hasOwnProperty)),Es}var As,bn;function Kf(){if(bn)return As;bn=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=gi(),o={},r=Ol();e=function(i){var n="Warning: "+i;typeof console<"u"&&console.error(n);try{throw new Error(n)}catch{}}}function s(i,n,c,a,d){if(process.env.NODE_ENV!=="production"){for(var f in i)if(r(i,f)){var h;try{if(typeof i[f]!="function"){var p=Error((a||"React class")+": "+c+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}h=i[f](n,f,a,c,null,t)}catch(g){h=g}if(h&&!(h instanceof Error)&&e((a||"React class")+": type specification of "+c+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof h+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),h instanceof Error&&!(h.message in o)){o[h.message]=!0;var m=d?d():"";e("Failed "+c+" type: "+h.message+(m??""))}}}}return s.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(o={})},As=s,As}var Ts,vn;function Xf(){if(vn)return Ts;vn=1;var e=Tl(),t=Wf(),o=gi(),r=Ol(),s=Kf(),i=function(){};process.env.NODE_ENV!=="production"&&(i=function(c){var a="Warning: "+c;typeof console<"u"&&console.error(a);try{throw new Error(a)}catch{}});function n(){return null}return Ts=function(c,a){var d=typeof Symbol=="function"&&Symbol.iterator,f="@@iterator";function h($){var N=$&&(d&&$[d]||$[f]);if(typeof N=="function")return N}var p="<<anonymous>>",m={array:_("array"),bigint:_("bigint"),bool:_("boolean"),func:_("function"),number:_("number"),object:_("object"),string:_("string"),symbol:_("symbol"),any:x(),arrayOf:k,element:w(),elementType:y(),instanceOf:E,node:S(),objectOf:j,oneOf:V,oneOfType:M,shape:K,exact:xe};function g($,N){return $===N?$!==0||1/$===1/N:$!==$&&N!==N}function b($,N){this.message=$,this.data=N&&typeof N=="object"?N:{},this.stack=""}b.prototype=Error.prototype;function v($){if(process.env.NODE_ENV!=="production")var N={},ee=0;function Z(ie,Y,Q,ne,de,le,Ge){if(ne=ne||p,le=le||Q,Ge!==o){if(a){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var ut=ne+":"+Q;!N[ut]&&ee<3&&(i("You are manually calling a React.PropTypes validation function for the `"+le+"` prop on `"+ne+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),N[ut]=!0,ee++)}}return Y[Q]==null?ie?Y[Q]===null?new b("The "+de+" `"+le+"` is marked as required "+("in `"+ne+"`, but its value is `null`.")):new b("The "+de+" `"+le+"` is marked as required in "+("`"+ne+"`, but its value is `undefined`.")):null:$(Y,Q,ne,de,le)}var q=Z.bind(null,!1);return q.isRequired=Z.bind(null,!0),q}function _($){function N(ee,Z,q,ie,Y,Q){var ne=ee[Z],de=_e(ne);if(de!==$){var le=Re(ne);return new b("Invalid "+ie+" `"+Y+"` of type "+("`"+le+"` supplied to `"+q+"`, expected ")+("`"+$+"`."),{expectedType:$})}return null}return v(N)}function x(){return v(n)}function k($){function N(ee,Z,q,ie,Y){if(typeof $!="function")return new b("Property `"+Y+"` of component `"+q+"` has invalid PropType notation inside arrayOf.");var Q=ee[Z];if(!Array.isArray(Q)){var ne=_e(Q);return new b("Invalid "+ie+" `"+Y+"` of type "+("`"+ne+"` supplied to `"+q+"`, expected an array."))}for(var de=0;de<Q.length;de++){var le=$(Q,de,q,ie,Y+"["+de+"]",o);if(le instanceof Error)return le}return null}return v(N)}function w(){function $(N,ee,Z,q,ie){var Y=N[ee];if(!c(Y)){var Q=_e(Y);return new b("Invalid "+q+" `"+ie+"` of type "+("`"+Q+"` supplied to `"+Z+"`, expected a single ReactElement."))}return null}return v($)}function y(){function $(N,ee,Z,q,ie){var Y=N[ee];if(!e.isValidElementType(Y)){var Q=_e(Y);return new b("Invalid "+q+" `"+ie+"` of type "+("`"+Q+"` supplied to `"+Z+"`, expected a single ReactElement type."))}return null}return v($)}function E($){function N(ee,Z,q,ie,Y){if(!(ee[Z]instanceof $)){var Q=$.name||p,ne=yo(ee[Z]);return new b("Invalid "+ie+" `"+Y+"` of type "+("`"+ne+"` supplied to `"+q+"`, expected ")+("instance of `"+Q+"`."))}return null}return v(N)}function V($){if(!Array.isArray($))return process.env.NODE_ENV!=="production"&&(arguments.length>1?i("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):i("Invalid argument supplied to oneOf, expected an array.")),n;function N(ee,Z,q,ie,Y){for(var Q=ee[Z],ne=0;ne<$.length;ne++)if(g(Q,$[ne]))return null;var de=JSON.stringify($,function(Ge,T){var ut=Re(T);return ut==="symbol"?String(T):T});return new b("Invalid "+ie+" `"+Y+"` of value `"+String(Q)+"` "+("supplied to `"+q+"`, expected one of "+de+"."))}return v(N)}function j($){function N(ee,Z,q,ie,Y){if(typeof $!="function")return new b("Property `"+Y+"` of component `"+q+"` has invalid PropType notation inside objectOf.");var Q=ee[Z],ne=_e(Q);if(ne!=="object")return new b("Invalid "+ie+" `"+Y+"` of type "+("`"+ne+"` supplied to `"+q+"`, expected an object."));for(var de in Q)if(r(Q,de)){var le=$(Q,de,q,ie,Y+"."+de,o);if(le instanceof Error)return le}return null}return v(N)}function M($){if(!Array.isArray($))return process.env.NODE_ENV!=="production"&&i("Invalid argument supplied to oneOfType, expected an instance of array."),n;for(var N=0;N<$.length;N++){var ee=$[N];if(typeof ee!="function")return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+It(ee)+" at index "+N+"."),n}function Z(q,ie,Y,Q,ne){for(var de=[],le=0;le<$.length;le++){var Ge=$[le],T=Ge(q,ie,Y,Q,ne,o);if(T==null)return null;T.data&&r(T.data,"expectedType")&&de.push(T.data.expectedType)}var ut=de.length>0?", expected one of type ["+de.join(", ")+"]":"";return new b("Invalid "+Q+" `"+ne+"` supplied to "+("`"+Y+"`"+ut+"."))}return v(Z)}function S(){function $(N,ee,Z,q,ie){return G(N[ee])?null:new b("Invalid "+q+" `"+ie+"` supplied to "+("`"+Z+"`, expected a ReactNode."))}return v($)}function X($,N,ee,Z,q){return new b(($||"React class")+": "+N+" type `"+ee+"."+Z+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+q+"`.")}function K($){function N(ee,Z,q,ie,Y){var Q=ee[Z],ne=_e(Q);if(ne!=="object")return new b("Invalid "+ie+" `"+Y+"` of type `"+ne+"` "+("supplied to `"+q+"`, expected `object`."));for(var de in $){var le=$[de];if(typeof le!="function")return X(q,ie,Y,de,Re(le));var Ge=le(Q,de,q,ie,Y+"."+de,o);if(Ge)return Ge}return null}return v(N)}function xe($){function N(ee,Z,q,ie,Y){var Q=ee[Z],ne=_e(Q);if(ne!=="object")return new b("Invalid "+ie+" `"+Y+"` of type `"+ne+"` "+("supplied to `"+q+"`, expected `object`."));var de=t({},ee[Z],$);for(var le in de){var Ge=$[le];if(r($,le)&&typeof Ge!="function")return X(q,ie,Y,le,Re(Ge));if(!Ge)return new b("Invalid "+ie+" `"+Y+"` key `"+le+"` supplied to `"+q+"`.\nBad object: "+JSON.stringify(ee[Z],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys($),null,"  "));var T=Ge(Q,le,q,ie,Y+"."+le,o);if(T)return T}return null}return v(N)}function G($){switch(typeof $){case"number":case"string":case"undefined":return!0;case"boolean":return!$;case"object":if(Array.isArray($))return $.every(G);if($===null||c($))return!0;var N=h($);if(N){var ee=N.call($),Z;if(N!==$.entries){for(;!(Z=ee.next()).done;)if(!G(Z.value))return!1}else for(;!(Z=ee.next()).done;){var q=Z.value;if(q&&!G(q[1]))return!1}}else return!1;return!0;default:return!1}}function J($,N){return $==="symbol"?!0:N?N["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&N instanceof Symbol:!1}function _e($){var N=typeof $;return Array.isArray($)?"array":$ instanceof RegExp?"object":J(N,$)?"symbol":N}function Re($){if(typeof $>"u"||$===null)return""+$;var N=_e($);if(N==="object"){if($ instanceof Date)return"date";if($ instanceof RegExp)return"regexp"}return N}function It($){var N=Re($);switch(N){case"array":case"object":return"an "+N;case"boolean":case"date":case"regexp":return"a "+N;default:return N}}function yo($){return!$.constructor||!$.constructor.name?p:$.constructor.name}return m.checkPropTypes=s,m.resetWarningCache=s.resetWarningCache,m.PropTypes=m,m},Ts}var Os,yn;function Yf(){if(yn)return Os;yn=1;var e=gi();function t(){}function o(){}return o.resetWarningCache=t,Os=function(){function r(n,c,a,d,f,h){if(h!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function s(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:o,resetWarningCache:t};return i.PropTypes=i,i},Os}if(process.env.NODE_ENV!=="production"){var Gf=Tl(),Jf=!0;Gs.exports=Xf()(Gf.isElement,Jf)}else Gs.exports=Yf()();var Zf=Gs.exports;const ye=Hf(Zf);function Po(e){let t="https://mui.com/production-error/?code="+e;for(let o=1;o<arguments.length;o+=1)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var Js={exports:{}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn;function Qf(){if(wn)return ge;wn=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),n=Symbol.for("react.context"),c=Symbol.for("react.server_context"),a=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),g;g=Symbol.for("react.module.reference");function b(v){if(typeof v=="object"&&v!==null){var _=v.$$typeof;switch(_){case e:switch(v=v.type,v){case o:case s:case r:case d:case f:return v;default:switch(v=v&&v.$$typeof,v){case c:case n:case a:case p:case h:case i:return v;default:return _}}case t:return _}}}return ge.ContextConsumer=n,ge.ContextProvider=i,ge.Element=e,ge.ForwardRef=a,ge.Fragment=o,ge.Lazy=p,ge.Memo=h,ge.Portal=t,ge.Profiler=s,ge.StrictMode=r,ge.Suspense=d,ge.SuspenseList=f,ge.isAsyncMode=function(){return!1},ge.isConcurrentMode=function(){return!1},ge.isContextConsumer=function(v){return b(v)===n},ge.isContextProvider=function(v){return b(v)===i},ge.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===e},ge.isForwardRef=function(v){return b(v)===a},ge.isFragment=function(v){return b(v)===o},ge.isLazy=function(v){return b(v)===p},ge.isMemo=function(v){return b(v)===h},ge.isPortal=function(v){return b(v)===t},ge.isProfiler=function(v){return b(v)===s},ge.isStrictMode=function(v){return b(v)===r},ge.isSuspense=function(v){return b(v)===d},ge.isSuspenseList=function(v){return b(v)===f},ge.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===o||v===s||v===r||v===d||v===f||v===m||typeof v=="object"&&v!==null&&(v.$$typeof===p||v.$$typeof===h||v.$$typeof===i||v.$$typeof===n||v.$$typeof===a||v.$$typeof===g||v.getModuleId!==void 0)},ge.typeOf=b,ge}var be={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn;function e0(){return xn||(xn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),n=Symbol.for("react.context"),c=Symbol.for("react.server_context"),a=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),g=!1,b=!1,v=!1,_=!1,x=!1,k;k=Symbol.for("react.module.reference");function w(B){return!!(typeof B=="string"||typeof B=="function"||B===o||B===s||x||B===r||B===d||B===f||_||B===m||g||b||v||typeof B=="object"&&B!==null&&(B.$$typeof===p||B.$$typeof===h||B.$$typeof===i||B.$$typeof===n||B.$$typeof===a||B.$$typeof===k||B.getModuleId!==void 0))}function y(B){if(typeof B=="object"&&B!==null){var wo=B.$$typeof;switch(wo){case e:var Sr=B.type;switch(Sr){case o:case s:case r:case d:case f:return Sr;default:var Si=Sr&&Sr.$$typeof;switch(Si){case c:case n:case a:case p:case h:case i:return Si;default:return wo}}case t:return wo}}}var E=n,V=i,j=e,M=a,S=o,X=p,K=h,xe=t,G=s,J=r,_e=d,Re=f,It=!1,yo=!1;function $(B){return It||(It=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function N(B){return yo||(yo=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ee(B){return y(B)===n}function Z(B){return y(B)===i}function q(B){return typeof B=="object"&&B!==null&&B.$$typeof===e}function ie(B){return y(B)===a}function Y(B){return y(B)===o}function Q(B){return y(B)===p}function ne(B){return y(B)===h}function de(B){return y(B)===t}function le(B){return y(B)===s}function Ge(B){return y(B)===r}function T(B){return y(B)===d}function ut(B){return y(B)===f}be.ContextConsumer=E,be.ContextProvider=V,be.Element=j,be.ForwardRef=M,be.Fragment=S,be.Lazy=X,be.Memo=K,be.Portal=xe,be.Profiler=G,be.StrictMode=J,be.Suspense=_e,be.SuspenseList=Re,be.isAsyncMode=$,be.isConcurrentMode=N,be.isContextConsumer=ee,be.isContextProvider=Z,be.isElement=q,be.isForwardRef=ie,be.isFragment=Y,be.isLazy=Q,be.isMemo=ne,be.isPortal=de,be.isProfiler=le,be.isStrictMode=Ge,be.isSuspense=T,be.isSuspenseList=ut,be.isValidElementType=w,be.typeOf=y}()),be}process.env.NODE_ENV==="production"?Js.exports=Qf():Js.exports=e0();var _n=Js.exports;const t0=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function o0(e){const t=`${e}`.match(t0);return t&&t[1]||""}function Nl(e,t=""){return e.displayName||e.name||o0(e)||t}function kn(e,t,o){const r=Nl(t);return e.displayName||(r!==""?`${o}(${r})`:o)}function r0(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Nl(e,"Component");if(typeof e=="object")switch(e.$$typeof){case _n.ForwardRef:return kn(e,e.render,"ForwardRef");case _n.Memo:return kn(e,e.type,"memo");default:return}}}function Ot(e){if(typeof e!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":Po(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Il(e,t){const o=ae({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))o[r]=ae({},e[r],o[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const s=e[r]||{},i=t[r];o[r]={},!i||!Object.keys(i)?o[r]=s:!s||!Object.keys(s)?o[r]=i:(o[r]=ae({},i),Object.keys(s).forEach(n=>{o[r][n]=Il(s[n],i[n])}))}else o[r]===void 0&&(o[r]=e[r])}),o}function s0(e,t,o=void 0){const r={};return Object.keys(e).forEach(s=>{r[s]=e[s].reduce((i,n)=>{if(n){const c=t(n);c!==""&&i.push(c),o&&o[n]&&i.push(o[n])}return i},[]).join(" ")}),r}const Cn=e=>e,i0=()=>{let e=Cn;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Cn}}},n0=i0(),l0=n0,a0={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function bi(e,t,o="Mui"){const r=a0[t];return r?`${o}-${r}`:`${l0.generate(e)}-${t}`}function c0(e,t,o="Mui"){const r={};return t.forEach(s=>{r[s]=bi(e,s,o)}),r}function d0(e,t=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,o))}function Ht(e,t){if(e==null)return{};var o={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(o[s]=e[s]);return o}function Rl(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(o=Rl(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function u0(){for(var e,t,o=0,r="",s=arguments.length;o<s;o++)(e=arguments[o])&&(t=Rl(e))&&(r&&(r+=" "),r+=t);return r}const h0=["values","unit","step"],p0=e=>{const t=Object.keys(e).map(o=>({key:o,val:e[o]}))||[];return t.sort((o,r)=>o.val-r.val),t.reduce((o,r)=>ae({},o,{[r.key]:r.val}),{})};function f0(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:r=5}=e,s=Ht(e,h0),i=p0(t),n=Object.keys(i);function c(p){return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${o})`}function a(p){return`@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${o})`}function d(p,m){const g=n.indexOf(m);return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${o}) and (max-width:${(g!==-1&&typeof t[n[g]]=="number"?t[n[g]]:m)-r/100}${o})`}function f(p){return n.indexOf(p)+1<n.length?d(p,n[n.indexOf(p)+1]):c(p)}function h(p){const m=n.indexOf(p);return m===0?c(n[1]):m===n.length-1?a(n[m]):d(p,n[n.indexOf(p)+1]).replace("@media","@media not all and")}return ae({keys:n,values:i,up:c,down:a,between:d,only:f,not:h,unit:o},s)}const m0={borderRadius:4},g0=m0,b0=process.env.NODE_ENV!=="production"?ye.oneOfType([ye.number,ye.string,ye.object,ye.array]):{},oo=b0;function cr(e,t){return t?kt(e,t,{clone:!1}):e}const vi={xs:0,sm:600,md:900,lg:1200,xl:1536},Sn={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${vi[e]}px)`};function Dt(e,t,o){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||Sn;return t.reduce((n,c,a)=>(n[i.up(i.keys[a])]=o(t[a]),n),{})}if(typeof t=="object"){const i=r.breakpoints||Sn;return Object.keys(t).reduce((n,c)=>{if(Object.keys(i.values||vi).indexOf(c)!==-1){const a=i.up(c);n[a]=o(t[c],c)}else{const a=c;n[a]=t[a]}return n},{})}return o(t)}function v0(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,s)=>{const i=e.up(s);return r[i]={},r},{}))||{}}function y0(e,t){return e.reduce((o,r)=>{const s=o[r];return(!s||Object.keys(s).length===0)&&delete o[r],o},t)}function os(e,t,o=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&o){const r=`vars.${t}`.split(".").reduce((s,i)=>s&&s[i]?s[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,s)=>r&&r[s]!=null?r[s]:null,e)}function Wr(e,t,o,r=o){let s;return typeof e=="function"?s=e(o):Array.isArray(e)?s=e[o]||r:s=os(e,o)||r,t&&(s=t(s,r,e)),s}function Pe(e){const{prop:t,cssProperty:o=e.prop,themeKey:r,transform:s}=e,i=n=>{if(n[t]==null)return null;const c=n[t],a=n.theme,d=os(a,r)||{};return Dt(n,c,h=>{let p=Wr(d,s,h);return h===p&&typeof h=="string"&&(p=Wr(d,s,`${t}${h==="default"?"":Ot(h)}`,h)),o===!1?p:{[o]:p}})};return i.propTypes=process.env.NODE_ENV!=="production"?{[t]:oo}:{},i.filterProps=[t],i}function w0(e){const t={};return o=>(t[o]===void 0&&(t[o]=e(o)),t[o])}const x0={m:"margin",p:"padding"},_0={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},$n={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},k0=w0(e=>{if(e.length>2)if($n[e])e=$n[e];else return[e];const[t,o]=e.split(""),r=x0[t],s=_0[o]||"";return Array.isArray(s)?s.map(i=>r+i):[r+s]}),rs=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ss=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],C0=[...rs,...ss];function kr(e,t,o,r){var s;const i=(s=os(e,t,!1))!=null?s:o;return typeof i=="number"?n=>typeof n=="string"?n:(process.env.NODE_ENV!=="production"&&typeof n!="number"&&console.error(`MUI: Expected ${r} argument to be a number or a string, got ${n}.`),i*n):Array.isArray(i)?n=>typeof n=="string"?n:(process.env.NODE_ENV!=="production"&&(Number.isInteger(n)?n>i.length-1&&console.error([`MUI: The value provided (${n}) overflows.`,`The supported values are: ${JSON.stringify(i)}.`,`${n} > ${i.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))),i[n]):typeof i=="function"?i:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function Pl(e){return kr(e,"spacing",8,"spacing")}function Cr(e,t){if(typeof t=="string"||t==null)return t;const o=Math.abs(t),r=e(o);return t>=0?r:typeof r=="number"?-r:`-${r}`}function S0(e,t){return o=>e.reduce((r,s)=>(r[s]=Cr(t,o),r),{})}function $0(e,t,o,r){if(t.indexOf(o)===-1)return null;const s=k0(o),i=S0(s,r),n=e[o];return Dt(e,n,i)}function Ml(e,t){const o=Pl(e.theme);return Object.keys(e).map(r=>$0(e,t,r,o)).reduce(cr,{})}function Ae(e){return Ml(e,rs)}Ae.propTypes=process.env.NODE_ENV!=="production"?rs.reduce((e,t)=>(e[t]=oo,e),{}):{};Ae.filterProps=rs;function Te(e){return Ml(e,ss)}Te.propTypes=process.env.NODE_ENV!=="production"?ss.reduce((e,t)=>(e[t]=oo,e),{}):{};Te.filterProps=ss;process.env.NODE_ENV!=="production"&&C0.reduce((e,t)=>(e[t]=oo,e),{});function z0(e=8){if(e.mui)return e;const t=Pl({spacing:e}),o=(...r)=>(process.env.NODE_ENV!=="production"&&(r.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)),(r.length===0?[1]:r).map(i=>{const n=t(i);return typeof n=="number"?`${n}px`:n}).join(" "));return o.mui=!0,o}function is(...e){const t=e.reduce((r,s)=>(s.filterProps.forEach(i=>{r[i]=s}),r),{}),o=r=>Object.keys(r).reduce((s,i)=>t[i]?cr(s,t[i](r)):s,{});return o.propTypes=process.env.NODE_ENV!=="production"?e.reduce((r,s)=>Object.assign(r,s.propTypes),{}):{},o.filterProps=e.reduce((r,s)=>r.concat(s.filterProps),[]),o}function pt(e){return typeof e!="number"?e:`${e}px solid`}function wt(e,t){return Pe({prop:e,themeKey:"borders",transform:t})}const E0=wt("border",pt),A0=wt("borderTop",pt),T0=wt("borderRight",pt),O0=wt("borderBottom",pt),N0=wt("borderLeft",pt),I0=wt("borderColor"),R0=wt("borderTopColor"),P0=wt("borderRightColor"),M0=wt("borderBottomColor"),D0=wt("borderLeftColor"),L0=wt("outline",pt),B0=wt("outlineColor"),ns=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=kr(e.theme,"shape.borderRadius",4,"borderRadius"),o=r=>({borderRadius:Cr(t,r)});return Dt(e,e.borderRadius,o)}return null};ns.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:oo}:{};ns.filterProps=["borderRadius"];is(E0,A0,T0,O0,N0,I0,R0,P0,M0,D0,ns,L0,B0);const ls=e=>{if(e.gap!==void 0&&e.gap!==null){const t=kr(e.theme,"spacing",8,"gap"),o=r=>({gap:Cr(t,r)});return Dt(e,e.gap,o)}return null};ls.propTypes=process.env.NODE_ENV!=="production"?{gap:oo}:{};ls.filterProps=["gap"];const as=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=kr(e.theme,"spacing",8,"columnGap"),o=r=>({columnGap:Cr(t,r)});return Dt(e,e.columnGap,o)}return null};as.propTypes=process.env.NODE_ENV!=="production"?{columnGap:oo}:{};as.filterProps=["columnGap"];const cs=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=kr(e.theme,"spacing",8,"rowGap"),o=r=>({rowGap:Cr(t,r)});return Dt(e,e.rowGap,o)}return null};cs.propTypes=process.env.NODE_ENV!=="production"?{rowGap:oo}:{};cs.filterProps=["rowGap"];const V0=Pe({prop:"gridColumn"}),F0=Pe({prop:"gridRow"}),U0=Pe({prop:"gridAutoFlow"}),H0=Pe({prop:"gridAutoColumns"}),j0=Pe({prop:"gridAutoRows"}),q0=Pe({prop:"gridTemplateColumns"}),W0=Pe({prop:"gridTemplateRows"}),K0=Pe({prop:"gridTemplateAreas"}),X0=Pe({prop:"gridArea"});is(ls,as,cs,V0,F0,U0,H0,j0,q0,W0,K0,X0);function Oo(e,t){return t==="grey"?t:e}const Y0=Pe({prop:"color",themeKey:"palette",transform:Oo}),G0=Pe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Oo}),J0=Pe({prop:"backgroundColor",themeKey:"palette",transform:Oo});is(Y0,G0,J0);function lt(e){return e<=1&&e!==0?`${e*100}%`:e}const Z0=Pe({prop:"width",transform:lt}),yi=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=o=>{var r,s;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[o])||vi[o];return i?((s=e.theme)==null||(s=s.breakpoints)==null?void 0:s.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:lt(o)}};return Dt(e,e.maxWidth,t)}return null};yi.filterProps=["maxWidth"];const Q0=Pe({prop:"minWidth",transform:lt}),em=Pe({prop:"height",transform:lt}),tm=Pe({prop:"maxHeight",transform:lt}),om=Pe({prop:"minHeight",transform:lt});Pe({prop:"size",cssProperty:"width",transform:lt});Pe({prop:"size",cssProperty:"height",transform:lt});const rm=Pe({prop:"boxSizing"});is(Z0,yi,Q0,em,tm,om,rm);const sm={border:{themeKey:"borders",transform:pt},borderTop:{themeKey:"borders",transform:pt},borderRight:{themeKey:"borders",transform:pt},borderBottom:{themeKey:"borders",transform:pt},borderLeft:{themeKey:"borders",transform:pt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:pt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ns},color:{themeKey:"palette",transform:Oo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Oo},backgroundColor:{themeKey:"palette",transform:Oo},p:{style:Te},pt:{style:Te},pr:{style:Te},pb:{style:Te},pl:{style:Te},px:{style:Te},py:{style:Te},padding:{style:Te},paddingTop:{style:Te},paddingRight:{style:Te},paddingBottom:{style:Te},paddingLeft:{style:Te},paddingX:{style:Te},paddingY:{style:Te},paddingInline:{style:Te},paddingInlineStart:{style:Te},paddingInlineEnd:{style:Te},paddingBlock:{style:Te},paddingBlockStart:{style:Te},paddingBlockEnd:{style:Te},m:{style:Ae},mt:{style:Ae},mr:{style:Ae},mb:{style:Ae},ml:{style:Ae},mx:{style:Ae},my:{style:Ae},margin:{style:Ae},marginTop:{style:Ae},marginRight:{style:Ae},marginBottom:{style:Ae},marginLeft:{style:Ae},marginX:{style:Ae},marginY:{style:Ae},marginInline:{style:Ae},marginInlineStart:{style:Ae},marginInlineEnd:{style:Ae},marginBlock:{style:Ae},marginBlockStart:{style:Ae},marginBlockEnd:{style:Ae},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ls},rowGap:{style:cs},columnGap:{style:as},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:lt},maxWidth:{style:yi},minWidth:{transform:lt},height:{transform:lt},maxHeight:{transform:lt},minHeight:{transform:lt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},wi=sm;function im(...e){const t=e.reduce((r,s)=>r.concat(Object.keys(s)),[]),o=new Set(t);return e.every(r=>o.size===Object.keys(r).length)}function nm(e,t){return typeof e=="function"?e(t):e}function lm(){function e(o,r,s,i){const n={[o]:r,theme:s},c=i[o];if(!c)return{[o]:r};const{cssProperty:a=o,themeKey:d,transform:f,style:h}=c;if(r==null)return null;if(d==="typography"&&r==="inherit")return{[o]:r};const p=os(s,d)||{};return h?h(n):Dt(n,r,g=>{let b=Wr(p,f,g);return g===b&&typeof g=="string"&&(b=Wr(p,f,`${o}${g==="default"?"":Ot(g)}`,g)),a===!1?b:{[a]:b}})}function t(o){var r;const{sx:s,theme:i={}}=o||{};if(!s)return null;const n=(r=i.unstable_sxConfig)!=null?r:wi;function c(a){let d=a;if(typeof a=="function")d=a(i);else if(typeof a!="object")return a;if(!d)return null;const f=v0(i.breakpoints),h=Object.keys(f);let p=f;return Object.keys(d).forEach(m=>{const g=nm(d[m],i);if(g!=null)if(typeof g=="object")if(n[m])p=cr(p,e(m,g,i,n));else{const b=Dt({theme:i},g,v=>({[m]:v}));im(b,g)?p[m]=t({sx:g,theme:i}):p=cr(p,b)}else p=cr(p,e(m,g,i,n))}),y0(h,p)}return Array.isArray(s)?s.map(c):c(s)}return t}const Dl=lm();Dl.filterProps=["sx"];const xi=Dl,am=["breakpoints","palette","spacing","shape"];function _i(e={},...t){const{breakpoints:o={},palette:r={},spacing:s,shape:i={}}=e,n=Ht(e,am),c=f0(o),a=z0(s);let d=kt({breakpoints:c,direction:"ltr",components:{},palette:ae({mode:"light"},r),spacing:a,shape:ae({},g0,i)},n);return d=t.reduce((f,h)=>kt(f,h),d),d.unstable_sxConfig=ae({},wi,n==null?void 0:n.unstable_sxConfig),d.unstable_sx=function(h){return xi({sx:h,theme:this})},d}function cm(e){return Object.keys(e).length===0}function dm(e=null){const t=I.useContext(Rs.ThemeContext);return!t||cm(t)?e:t}const um=_i();function hm(e=um){return dm(e)}const pm=["variant"];function zn(e){return e.length===0}function Ll(e){const{variant:t}=e,o=Ht(e,pm);let r=t||"";return Object.keys(o).sort().forEach(s=>{s==="color"?r+=zn(r)?e[s]:Ot(e[s]):r+=`${zn(r)?s:Ot(s)}${Ot(e[s].toString())}`}),r}const fm=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function mm(e){return Object.keys(e).length===0}function gm(e){return typeof e=="string"&&e.charCodeAt(0)>96}const bm=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Kr=e=>{let t=0;const o={};return e&&e.forEach(r=>{let s="";typeof r.props=="function"?(s=`callback${t}`,t+=1):s=Ll(r.props),o[s]=r.style}),o},vm=(e,t)=>{let o=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(o=t.components[e].variants),Kr(o)},Xr=(e,t,o)=>{const{ownerState:r={}}=e,s=[];let i=0;return o&&o.forEach(n=>{let c=!0;if(typeof n.props=="function"){const a=ae({},e,r);c=n.props(a)}else Object.keys(n.props).forEach(a=>{r[a]!==n.props[a]&&e[a]!==n.props[a]&&(c=!1)});c&&(typeof n.props=="function"?s.push(t[`callback${i}`]):s.push(t[Ll(n.props)])),typeof n.props=="function"&&(i+=1)}),s},ym=(e,t,o,r)=>{var s;const i=o==null||(s=o.components)==null||(s=s[r])==null?void 0:s.variants;return Xr(e,t,i)};function Mr(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const wm=_i(),En=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Dr({defaultTheme:e,theme:t,themeId:o}){return mm(t)?e:t[o]||t}function xm(e){return e?(t,o)=>o[e]:null}const An=({styledArg:e,props:t,defaultTheme:o,themeId:r})=>{const s=e(ae({},t,{theme:Dr(ae({},t,{defaultTheme:o,themeId:r}))}));let i;if(s&&s.variants&&(i=s.variants,delete s.variants),i){const n=Xr(t,Kr(i),i);return[s,...n]}return s};function _m(e={}){const{themeId:t,defaultTheme:o=wm,rootShouldForwardProp:r=Mr,slotShouldForwardProp:s=Mr}=e,i=n=>xi(ae({},n,{theme:Dr(ae({},n,{defaultTheme:o,themeId:t}))}));return i.__mui_systemSx=!0,(n,c={})=>{Rs.internal_processStyles(n,w=>w.filter(y=>!(y!=null&&y.__mui_systemSx)));const{name:a,slot:d,skipVariantsResolver:f,skipSx:h,overridesResolver:p=xm(En(d))}=c,m=Ht(c,fm),g=f!==void 0?f:d&&d!=="Root"&&d!=="root"||!1,b=h||!1;let v;process.env.NODE_ENV!=="production"&&a&&(v=`${a}-${En(d||"Root")}`);let _=Mr;d==="Root"||d==="root"?_=r:d?_=s:gm(n)&&(_=void 0);const x=Rs(n,ae({shouldForwardProp:_,label:v},m)),k=(w,...y)=>{const E=y?y.map(S=>{if(typeof S=="function"&&S.__emotion_real!==S)return X=>An({styledArg:S,props:X,defaultTheme:o,themeId:t});if(Wt(S)){let X=S,K;return S&&S.variants&&(K=S.variants,delete X.variants,X=xe=>{let G=S;return Xr(xe,Kr(K),K).forEach(_e=>{G=kt(G,_e)}),G}),X}return S}):[];let V=w;if(Wt(w)){let S;w&&w.variants&&(S=w.variants,delete V.variants,V=X=>{let K=w;return Xr(X,Kr(S),S).forEach(G=>{K=kt(K,G)}),K})}else typeof w=="function"&&w.__emotion_real!==w&&(V=S=>An({styledArg:w,props:S,defaultTheme:o,themeId:t}));a&&p&&E.push(S=>{const X=Dr(ae({},S,{defaultTheme:o,themeId:t})),K=bm(a,X);if(K){const xe={};return Object.entries(K).forEach(([G,J])=>{xe[G]=typeof J=="function"?J(ae({},S,{theme:X})):J}),p(S,xe)}return null}),a&&!g&&E.push(S=>{const X=Dr(ae({},S,{defaultTheme:o,themeId:t}));return ym(S,vm(a,X),X,a)}),b||E.push(i);const j=E.length-y.length;if(Array.isArray(w)&&j>0){const S=new Array(j).fill("");V=[...w,...S],V.raw=[...w.raw,...S]}const M=x(V,...E);if(process.env.NODE_ENV!=="production"){let S;a&&(S=`${a}${Ot(d||"")}`),S===void 0&&(S=`Styled(${r0(n)})`),M.displayName=S}return n.muiName&&(M.muiName=n.muiName),M};return x.withConfig&&(k.withConfig=x.withConfig),k}}function km(e){const{theme:t,name:o,props:r}=e;return!t||!t.components||!t.components[o]||!t.components[o].defaultProps?r:Il(t.components[o].defaultProps,r)}function Cm({props:e,name:t,defaultTheme:o,themeId:r}){let s=hm(o);return r&&(s=s[r]||s),km({theme:s,name:t,props:e})}function Bl(e,t=0,o=1){return process.env.NODE_ENV!=="production"&&(e<t||e>o)&&console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`),d0(e,t,o)}function Sm(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let o=e.match(t);return o&&o[0].length===1&&(o=o.map(r=>r+r)),o?`rgb${o.length===4?"a":""}(${o.map((r,s)=>s<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Mo(e){if(e.type)return e;if(e.charAt(0)==="#")return Mo(Sm(e));const t=e.indexOf("("),o=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(o)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:Po(9,e));let r=e.substring(t+1,e.length-1),s;if(o==="color"){if(r=r.split(" "),s=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:Po(10,s))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:o,values:r,colorSpace:s}}function ki(e){const{type:t,colorSpace:o}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((s,i)=>i<3?parseInt(s,10):s):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${o} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function $m(e){e=Mo(e);const{values:t}=e,o=t[0],r=t[1]/100,s=t[2]/100,i=r*Math.min(s,1-s),n=(d,f=(d+o/30)%12)=>s-i*Math.max(Math.min(f-3,9-f,1),-1);let c="rgb";const a=[Math.round(n(0)*255),Math.round(n(8)*255),Math.round(n(4)*255)];return e.type==="hsla"&&(c+="a",a.push(t[3])),ki({type:c,values:a})}function Tn(e){e=Mo(e);let t=e.type==="hsl"||e.type==="hsla"?Mo($m(e)).values:e.values;return t=t.map(o=>(e.type!=="color"&&(o/=255),o<=.03928?o/12.92:((o+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function On(e,t){const o=Tn(e),r=Tn(t);return(Math.max(o,r)+.05)/(Math.min(o,r)+.05)}function zm(e,t){if(e=Mo(e),t=Bl(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let o=0;o<3;o+=1)e.values[o]*=1-t;return ki(e)}function Em(e,t){if(e=Mo(e),t=Bl(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let o=0;o<3;o+=1)e.values[o]+=(255-e.values[o])*t;else if(e.type.indexOf("color")!==-1)for(let o=0;o<3;o+=1)e.values[o]+=(1-e.values[o])*t;return ki(e)}function Am(e,t){return ae({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Tm={black:"#000",white:"#fff"},fr=Tm,Om={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Nm=Om,Im={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},_o=Im,Rm={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ko=Rm,Pm={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},er=Pm,Mm={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Co=Mm,Dm={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},So=Dm,Lm={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},$o=Lm,Bm=["mode","contrastThreshold","tonalOffset"],Nn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:fr.white,default:fr.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ns={text:{primary:fr.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:fr.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function In(e,t,o,r){const s=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(o)?e[t]=e[o]:t==="light"?e.light=Em(e.main,s):t==="dark"&&(e.dark=zm(e.main,i)))}function Vm(e="light"){return e==="dark"?{main:Co[200],light:Co[50],dark:Co[400]}:{main:Co[700],light:Co[400],dark:Co[800]}}function Fm(e="light"){return e==="dark"?{main:_o[200],light:_o[50],dark:_o[400]}:{main:_o[500],light:_o[300],dark:_o[700]}}function Um(e="light"){return e==="dark"?{main:ko[500],light:ko[300],dark:ko[700]}:{main:ko[700],light:ko[400],dark:ko[800]}}function Hm(e="light"){return e==="dark"?{main:So[400],light:So[300],dark:So[700]}:{main:So[700],light:So[500],dark:So[900]}}function jm(e="light"){return e==="dark"?{main:$o[400],light:$o[300],dark:$o[700]}:{main:$o[800],light:$o[500],dark:$o[900]}}function qm(e="light"){return e==="dark"?{main:er[400],light:er[300],dark:er[700]}:{main:"#ed6c02",light:er[500],dark:er[900]}}function Wm(e){const{mode:t="light",contrastThreshold:o=3,tonalOffset:r=.2}=e,s=Ht(e,Bm),i=e.primary||Vm(t),n=e.secondary||Fm(t),c=e.error||Um(t),a=e.info||Hm(t),d=e.success||jm(t),f=e.warning||qm(t);function h(b){const v=On(b,Ns.text.primary)>=o?Ns.text.primary:Nn.text.primary;if(process.env.NODE_ENV!=="production"){const _=On(b,v);_<3&&console.error([`MUI: The contrast ratio of ${_}:1 for ${v} on ${b}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return v}const p=({color:b,name:v,mainShade:_=500,lightShade:x=300,darkShade:k=700})=>{if(b=ae({},b),!b.main&&b[_]&&(b.main=b[_]),!b.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${v?` (${v})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.`:Po(11,v?` (${v})`:"",_));if(typeof b.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${v?` (${v})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:Po(12,v?` (${v})`:"",JSON.stringify(b.main)));return In(b,"light",x,r),In(b,"dark",k,r),b.contrastText||(b.contrastText=h(b.main)),b},m={dark:Ns,light:Nn};return process.env.NODE_ENV!=="production"&&(m[t]||console.error(`MUI: The palette mode \`${t}\` is not supported.`)),kt(ae({common:ae({},fr),mode:t,primary:p({color:i,name:"primary"}),secondary:p({color:n,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:c,name:"error"}),warning:p({color:f,name:"warning"}),info:p({color:a,name:"info"}),success:p({color:d,name:"success"}),grey:Nm,contrastThreshold:o,getContrastText:h,augmentColor:p,tonalOffset:r},m[t]),s)}const Km=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Xm(e){return Math.round(e*1e5)/1e5}const Rn={textTransform:"uppercase"},Pn='"Roboto", "Helvetica", "Arial", sans-serif';function Ym(e,t){const o=typeof t=="function"?t(e):t,{fontFamily:r=Pn,fontSize:s=14,fontWeightLight:i=300,fontWeightRegular:n=400,fontWeightMedium:c=500,fontWeightBold:a=700,htmlFontSize:d=16,allVariants:f,pxToRem:h}=o,p=Ht(o,Km);process.env.NODE_ENV!=="production"&&(typeof s!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof d!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const m=s/14,g=h||(_=>`${_/d*m}rem`),b=(_,x,k,w,y)=>ae({fontFamily:r,fontWeight:_,fontSize:g(x),lineHeight:k},r===Pn?{letterSpacing:`${Xm(w/x)}em`}:{},y,f),v={h1:b(i,96,1.167,-1.5),h2:b(i,60,1.2,-.5),h3:b(n,48,1.167,0),h4:b(n,34,1.235,.25),h5:b(n,24,1.334,0),h6:b(c,20,1.6,.15),subtitle1:b(n,16,1.75,.15),subtitle2:b(c,14,1.57,.1),body1:b(n,16,1.5,.15),body2:b(n,14,1.43,.15),button:b(c,14,1.75,.4,Rn),caption:b(n,12,1.66,.4),overline:b(n,12,2.66,1,Rn),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return kt(ae({htmlFontSize:d,pxToRem:g,fontFamily:r,fontSize:s,fontWeightLight:i,fontWeightRegular:n,fontWeightMedium:c,fontWeightBold:a},v),p,{clone:!1})}const Gm=.2,Jm=.14,Zm=.12;function Ce(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Gm})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Jm})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Zm})`].join(",")}const Qm=["none",Ce(0,2,1,-1,0,1,1,0,0,1,3,0),Ce(0,3,1,-2,0,2,2,0,0,1,5,0),Ce(0,3,3,-2,0,3,4,0,0,1,8,0),Ce(0,2,4,-1,0,4,5,0,0,1,10,0),Ce(0,3,5,-1,0,5,8,0,0,1,14,0),Ce(0,3,5,-1,0,6,10,0,0,1,18,0),Ce(0,4,5,-2,0,7,10,1,0,2,16,1),Ce(0,5,5,-3,0,8,10,1,0,3,14,2),Ce(0,5,6,-3,0,9,12,1,0,3,16,2),Ce(0,6,6,-3,0,10,14,1,0,4,18,3),Ce(0,6,7,-4,0,11,15,1,0,4,20,3),Ce(0,7,8,-4,0,12,17,2,0,5,22,4),Ce(0,7,8,-4,0,13,19,2,0,5,24,4),Ce(0,7,9,-4,0,14,21,2,0,5,26,4),Ce(0,8,9,-5,0,15,22,2,0,6,28,5),Ce(0,8,10,-5,0,16,24,2,0,6,30,5),Ce(0,8,11,-5,0,17,26,2,0,6,32,5),Ce(0,9,11,-5,0,18,28,2,0,7,34,6),Ce(0,9,12,-6,0,19,29,2,0,7,36,6),Ce(0,10,13,-6,0,20,31,3,0,8,38,7),Ce(0,10,13,-6,0,21,33,3,0,8,40,7),Ce(0,10,14,-6,0,22,35,3,0,8,42,7),Ce(0,11,14,-7,0,23,36,3,0,9,44,8),Ce(0,11,15,-7,0,24,38,3,0,9,46,8)],eg=Qm,tg=["duration","easing","delay"],og={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},rg={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Mn(e){return`${Math.round(e)}ms`}function sg(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function ig(e){const t=ae({},og,e.easing),o=ae({},rg,e.duration);return ae({getAutoHeightDuration:sg,create:(s=["all"],i={})=>{const{duration:n=o.standard,easing:c=t.easeInOut,delay:a=0}=i,d=Ht(i,tg);if(process.env.NODE_ENV!=="production"){const f=p=>typeof p=="string",h=p=>!isNaN(parseFloat(p));!f(s)&&!Array.isArray(s)&&console.error('MUI: Argument "props" must be a string or Array.'),!h(n)&&!f(n)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${n}.`),f(c)||console.error('MUI: Argument "easing" must be a string.'),!h(a)&&!f(a)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof i!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(d).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`)}return(Array.isArray(s)?s:[s]).map(f=>`${f} ${typeof n=="string"?n:Mn(n)} ${c} ${typeof a=="string"?a:Mn(a)}`).join(",")}},e,{easing:t,duration:o})}const ng={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},lg=ng,ag=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function cg(e={},...t){const{mixins:o={},palette:r={},transitions:s={},typography:i={}}=e,n=Ht(e,ag);if(e.vars)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.":Po(18));const c=Wm(r),a=_i(e);let d=kt(a,{mixins:Am(a.breakpoints,o),palette:c,shadows:eg.slice(),typography:Ym(c,i),transitions:ig(s),zIndex:ae({},lg),applyDarkStyles(f){return this.vars?{[this.getColorSchemeSelector("dark").replace(/(\[[^\]]+\])/,":where($1)")]:f}:this.palette.mode==="dark"?f:{}}});if(d=kt(d,n),d=t.reduce((f,h)=>kt(f,h),d),process.env.NODE_ENV!=="production"){const f=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],h=(p,m)=>{let g;for(g in p){const b=p[g];if(f.indexOf(g)!==-1&&Object.keys(b).length>0){if(process.env.NODE_ENV!=="production"){const v=bi("",g);console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${g}\` internal state.`,"You can not override it like this: ",JSON.stringify(p,null,2),"",`Instead, you need to use the '&.${v}' syntax:`,JSON.stringify({root:{[`&.${v}`]:b}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}p[g]={}}}};Object.keys(d.components).forEach(p=>{const m=d.components[p].styleOverrides;m&&p.indexOf("Mui")===0&&h(m,p)})}return d.unstable_sxConfig=ae({},wi,n==null?void 0:n.unstable_sxConfig),d.unstable_sx=function(h){return xi({sx:h,theme:this})},d}const dg=cg(),Vl=dg,Fl="$$material";function ug({props:e,name:t}){return Cm({props:e,name:t,defaultTheme:Vl,themeId:Fl})}const hg=e=>Mr(e)&&e!=="classes",pg=_m({themeId:Fl,defaultTheme:Vl,rootShouldForwardProp:hg}),fg=pg;function mg(e){return bi("MuiSvgIcon",e)}c0("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const gg=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],bg=e=>{const{color:t,fontSize:o,classes:r}=e,s={root:["root",t!=="inherit"&&`color${Ot(t)}`,`fontSize${Ot(o)}`]};return s0(s,mg,r)},vg=fg("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${Ot(o.color)}`],t[`fontSize${Ot(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,r,s,i,n,c,a,d,f,h,p,m,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(r=o.create)==null?void 0:r.call(o,"fill",{duration:(s=e.transitions)==null||(s=s.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(n=i.pxToRem)==null?void 0:n.call(i,20))||"1.25rem",medium:((c=e.typography)==null||(a=c.pxToRem)==null?void 0:a.call(c,24))||"1.5rem",large:((d=e.typography)==null||(f=d.pxToRem)==null?void 0:f.call(d,35))||"2.1875rem"}[t.fontSize],color:(h=(p=(e.vars||e).palette)==null||(p=p[t.color])==null?void 0:p.main)!=null?h:{action:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.active,disabled:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.disabled,inherit:void 0}[t.color]}}),Ci=I.forwardRef(function(t,o){const r=ug({props:t,name:"MuiSvgIcon"}),{children:s,className:i,color:n="inherit",component:c="svg",fontSize:a="medium",htmlColor:d,inheritViewBox:f=!1,titleAccess:h,viewBox:p="0 0 24 24"}=r,m=Ht(r,gg),g=I.isValidElement(s)&&s.type==="svg",b=ae({},r,{color:n,component:c,fontSize:a,instanceFontSize:t.fontSize,inheritViewBox:f,viewBox:p,hasSvgAsChild:g}),v={};f||(v.viewBox=p);const _=bg(b);return O.jsxs(vg,ae({as:c,className:u0(_.root,i),focusable:"false",color:d,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:o},v,m,g&&s.props,{ownerState:b,children:[g?s.props.children:s,h?O.jsx("title",{children:h}):null]}))});process.env.NODE_ENV!=="production"&&(Ci.propTypes={children:ye.node,classes:ye.object,className:ye.string,color:ye.oneOfType([ye.oneOf(["inherit","action","disabled","primary","secondary","error","info","success","warning"]),ye.string]),component:ye.elementType,fontSize:ye.oneOfType([ye.oneOf(["inherit","large","medium","small"]),ye.string]),htmlColor:ye.string,inheritViewBox:ye.bool,shapeRendering:ye.string,sx:ye.oneOfType([ye.arrayOf(ye.oneOfType([ye.func,ye.object,ye.bool])),ye.func,ye.object]),titleAccess:ye.string,viewBox:ye.string});Ci.muiName="SvgIcon";const Dn=Ci;function yg(e,t){function o(r,s){return O.jsx(Dn,ae({"data-testid":`${t}Icon`,ref:s},r,{children:e}))}return process.env.NODE_ENV!=="production"&&(o.displayName=`${t}Icon`),o.muiName=Dn.muiName,I.memo(I.forwardRef(o))}const wg=yg(O.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function xg({menu:e,dataHandler:t,commandHandler:o,className:r,id:s,children:i}){const[n,c]=ke.useState(!1),[a,d]=ke.useState(!1),f=ke.useCallback(()=>{n&&c(!1),d(!1)},[n]),h=ke.useCallback(_=>{_.stopPropagation(),c(x=>{const k=!x;return k&&_.shiftKey?d(!0):k||d(!1),k})},[]),p=ke.useRef(void 0),[m,g]=ke.useState(0);ke.useEffect(()=>{n&&p.current&&g(p.current.clientHeight)},[n]);const b=ke.useCallback(_=>(f(),o(_)),[o,f]);let v=e;return!v&&t&&(v=t(a)),O.jsx("div",{ref:p,style:{position:"relative"},children:O.jsx(De.AppBar,{position:"static",id:s,children:O.jsxs(De.Toolbar,{className:`papi-toolbar ${r??""}`,variant:"dense",children:[v?O.jsx(De.IconButton,{edge:"start",className:`papi-menuButton ${r??""}`,color:"inherit","aria-label":"open drawer",onClick:h,children:O.jsx(wg,{})}):void 0,i?O.jsx("div",{className:"papi-menu-children",children:i}):void 0,v?O.jsx(De.Drawer,{className:`papi-menu-drawer ${r??""}`,anchor:"left",variant:"persistent",open:n,onClose:f,PaperProps:{className:"papi-menu-drawer-paper",style:{top:m}},children:O.jsx(El,{commandHandler:b,columns:v.columns})}):void 0]})})})}const _g=(e,t)=>{ke.useEffect(()=>{if(!e)return()=>{};const o=e(t);return()=>{o()}},[e,t])};function kg(e){return{preserveValue:!0,...e}}const Ul=(e,t,o={})=>{const r=ke.useRef(t);r.current=t;const s=ke.useRef(o);s.current=kg(s.current);const[i,n]=ke.useState(()=>r.current),[c,a]=ke.useState(!0);return ke.useEffect(()=>{let d=!0;return a(!!e),(async()=>{if(e){const f=await e();d&&(n(()=>f),a(!1))}})(),()=>{d=!1,s.current.preserveValue||n(()=>r.current)}},[e]),[i,c]},Is=()=>!1,Cg=(e,t)=>{const[o]=Ul(ke.useCallback(async()=>{if(!e)return Is;const r=await Promise.resolve(e(t));return async()=>r()},[t,e]),Is,{preserveValue:!1});ke.useEffect(()=>()=>{o!==Is&&o()},[o])};Ms("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");exports.BookChapterControl=Nf;exports.Button=io;exports.ChapterRangeSelector=If;exports.Checkbox=$l;exports.ComboBox=qr;exports.GridMenu=El;exports.IconButton=Pf;exports.LabelPosition=lo;exports.MenuItem=zl;exports.RefSelector=Mf;exports.SearchBar=Df;exports.Slider=Lf;exports.Snackbar=Bf;exports.Switch=Vf;exports.Table=Uf;exports.TextField=pr;exports.Toolbar=xg;exports.useEvent=_g;exports.useEventAsync=Cg;exports.usePromise=Ul;function Sg(e,t="top"){if(!e||typeof document>"u")return;const o=document.head||document.querySelector("head"),r=o.querySelector(":first-child"),s=document.createElement("style");s.appendChild(document.createTextNode(e)),t==="top"&&r?o.insertBefore(s,r):o.appendChild(s)}Sg(`:root,
:host,
.sl-theme-light {
  color-scheme: light;

  --sl-color-gray-50: hsl(0 0% 97.5%);
  --sl-color-gray-100: hsl(240 4.8% 95.9%);
  --sl-color-gray-200: hsl(240 5.9% 90%);
  --sl-color-gray-300: hsl(240 4.9% 83.9%);
  --sl-color-gray-400: hsl(240 5% 64.9%);
  --sl-color-gray-500: hsl(240 3.8% 46.1%);
  --sl-color-gray-600: hsl(240 5.2% 33.9%);
  --sl-color-gray-700: hsl(240 5.3% 26.1%);
  --sl-color-gray-800: hsl(240 3.7% 15.9%);
  --sl-color-gray-900: hsl(240 5.9% 10%);
  --sl-color-gray-950: hsl(240 7.3% 8%);

  --sl-color-red-50: hsl(0 85.7% 97.3%);
  --sl-color-red-100: hsl(0 93.3% 94.1%);
  --sl-color-red-200: hsl(0 96.3% 89.4%);
  --sl-color-red-300: hsl(0 93.5% 81.8%);
  --sl-color-red-400: hsl(0 90.6% 70.8%);
  --sl-color-red-500: hsl(0 84.2% 60.2%);
  --sl-color-red-600: hsl(0 72.2% 50.6%);
  --sl-color-red-700: hsl(0 73.7% 41.8%);
  --sl-color-red-800: hsl(0 70% 35.3%);
  --sl-color-red-900: hsl(0 62.8% 30.6%);
  --sl-color-red-950: hsl(0 60% 19.6%);

  --sl-color-orange-50: hsl(33.3 100% 96.5%);
  --sl-color-orange-100: hsl(34.3 100% 91.8%);
  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);
  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);
  --sl-color-orange-400: hsl(27 96% 61%);
  --sl-color-orange-500: hsl(24.6 95% 53.1%);
  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);
  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);
  --sl-color-orange-800: hsl(15 79.1% 33.7%);
  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);
  --sl-color-orange-950: hsl(15.2 69.1% 19%);

  --sl-color-amber-50: hsl(48 100% 96.1%);
  --sl-color-amber-100: hsl(48 96.5% 88.8%);
  --sl-color-amber-200: hsl(48 96.6% 76.7%);
  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);
  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);
  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);
  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);
  --sl-color-amber-700: hsl(26 90.5% 37.1%);
  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);
  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);
  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);

  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);
  --sl-color-yellow-100: hsl(54.9 96.7% 88%);
  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);
  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);
  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);
  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);
  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);
  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);
  --sl-color-yellow-800: hsl(31.8 81% 28.8%);
  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);
  --sl-color-yellow-950: hsl(33.1 69% 13.9%);

  --sl-color-lime-50: hsl(78.3 92% 95.1%);
  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);
  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);
  --sl-color-lime-300: hsl(82 84.5% 67.1%);
  --sl-color-lime-400: hsl(82.7 78% 55.5%);
  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);
  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);
  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);
  --sl-color-lime-800: hsl(86.3 69% 22.7%);
  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);
  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);

  --sl-color-green-50: hsl(138.5 76.5% 96.7%);
  --sl-color-green-100: hsl(140.6 84.2% 92.5%);
  --sl-color-green-200: hsl(141 78.9% 85.1%);
  --sl-color-green-300: hsl(141.7 76.6% 73.1%);
  --sl-color-green-400: hsl(141.9 69.2% 58%);
  --sl-color-green-500: hsl(142.1 70.6% 45.3%);
  --sl-color-green-600: hsl(142.1 76.2% 36.3%);
  --sl-color-green-700: hsl(142.4 71.8% 29.2%);
  --sl-color-green-800: hsl(142.8 64.2% 24.1%);
  --sl-color-green-900: hsl(143.8 61.2% 20.2%);
  --sl-color-green-950: hsl(144.3 60.7% 12%);

  --sl-color-emerald-50: hsl(151.8 81% 95.9%);
  --sl-color-emerald-100: hsl(149.3 80.4% 90%);
  --sl-color-emerald-200: hsl(152.4 76% 80.4%);
  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);
  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);
  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);
  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);
  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);
  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);
  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);
  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);

  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);
  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);
  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);
  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);
  --sl-color-teal-400: hsl(172.5 66% 50.4%);
  --sl-color-teal-500: hsl(173.4 80.4% 40%);
  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);
  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);
  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);
  --sl-color-teal-900: hsl(175.9 60.8% 19%);
  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);

  --sl-color-cyan-50: hsl(183.2 100% 96.3%);
  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);
  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);
  --sl-color-cyan-300: hsl(187 92.4% 69%);
  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);
  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);
  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);
  --sl-color-cyan-700: hsl(192.9 82.3% 31%);
  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);
  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);
  --sl-color-cyan-950: hsl(196.8 61% 16.1%);

  --sl-color-sky-50: hsl(204 100% 97.1%);
  --sl-color-sky-100: hsl(204 93.8% 93.7%);
  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);
  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);
  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);
  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);
  --sl-color-sky-600: hsl(200.4 98% 39.4%);
  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);
  --sl-color-sky-800: hsl(201 90% 27.5%);
  --sl-color-sky-900: hsl(202 80.3% 23.9%);
  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);

  --sl-color-blue-50: hsl(213.8 100% 96.9%);
  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);
  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);
  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);
  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);
  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);
  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);
  --sl-color-blue-700: hsl(224.3 76.3% 48%);
  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);
  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);
  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);

  --sl-color-indigo-50: hsl(225.9 100% 96.7%);
  --sl-color-indigo-100: hsl(226.5 100% 93.9%);
  --sl-color-indigo-200: hsl(228 96.5% 88.8%);
  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);
  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);
  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);
  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);
  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);
  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);
  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);
  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);

  --sl-color-violet-50: hsl(250 100% 97.6%);
  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);
  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);
  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);
  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);
  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);
  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);
  --sl-color-violet-700: hsl(263.4 70% 50.4%);
  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);
  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);
  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);

  --sl-color-purple-50: hsl(270 100% 98%);
  --sl-color-purple-100: hsl(268.7 100% 95.5%);
  --sl-color-purple-200: hsl(268.6 100% 91.8%);
  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);
  --sl-color-purple-400: hsl(270 95.2% 75.3%);
  --sl-color-purple-500: hsl(270.7 91% 65.1%);
  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);
  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);
  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);
  --sl-color-purple-900: hsl(273.6 65.6% 32%);
  --sl-color-purple-950: hsl(276 59.5% 16.5%);

  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);
  --sl-color-fuchsia-100: hsl(287 100% 95.5%);
  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);
  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);
  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);
  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);
  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);
  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);
  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);
  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);
  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);
  --sl-color-pink-700: hsl(335.1 77.6% 42%);
  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);
  --sl-color-pink-900: hsl(335.9 69% 30.4%);
  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);

  --sl-color-rose-50: hsl(355.7 100% 97.3%);
  --sl-color-rose-100: hsl(355.6 100% 94.7%);
  --sl-color-rose-200: hsl(352.7 96.1% 90%);
  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);
  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);
  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);
  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);
  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);
  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);
  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);
  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);

  --sl-color-primary-50: var(--sl-color-sky-50);
  --sl-color-primary-100: var(--sl-color-sky-100);
  --sl-color-primary-200: var(--sl-color-sky-200);
  --sl-color-primary-300: var(--sl-color-sky-300);
  --sl-color-primary-400: var(--sl-color-sky-400);
  --sl-color-primary-500: var(--sl-color-sky-500);
  --sl-color-primary-600: var(--sl-color-sky-600);
  --sl-color-primary-700: var(--sl-color-sky-700);
  --sl-color-primary-800: var(--sl-color-sky-800);
  --sl-color-primary-900: var(--sl-color-sky-900);
  --sl-color-primary-950: var(--sl-color-sky-950);

  --sl-color-success-50: var(--sl-color-green-50);
  --sl-color-success-100: var(--sl-color-green-100);
  --sl-color-success-200: var(--sl-color-green-200);
  --sl-color-success-300: var(--sl-color-green-300);
  --sl-color-success-400: var(--sl-color-green-400);
  --sl-color-success-500: var(--sl-color-green-500);
  --sl-color-success-600: var(--sl-color-green-600);
  --sl-color-success-700: var(--sl-color-green-700);
  --sl-color-success-800: var(--sl-color-green-800);
  --sl-color-success-900: var(--sl-color-green-900);
  --sl-color-success-950: var(--sl-color-green-950);

  --sl-color-warning-50: var(--sl-color-amber-50);
  --sl-color-warning-100: var(--sl-color-amber-100);
  --sl-color-warning-200: var(--sl-color-amber-200);
  --sl-color-warning-300: var(--sl-color-amber-300);
  --sl-color-warning-400: var(--sl-color-amber-400);
  --sl-color-warning-500: var(--sl-color-amber-500);
  --sl-color-warning-600: var(--sl-color-amber-600);
  --sl-color-warning-700: var(--sl-color-amber-700);
  --sl-color-warning-800: var(--sl-color-amber-800);
  --sl-color-warning-900: var(--sl-color-amber-900);
  --sl-color-warning-950: var(--sl-color-amber-950);

  --sl-color-danger-50: var(--sl-color-red-50);
  --sl-color-danger-100: var(--sl-color-red-100);
  --sl-color-danger-200: var(--sl-color-red-200);
  --sl-color-danger-300: var(--sl-color-red-300);
  --sl-color-danger-400: var(--sl-color-red-400);
  --sl-color-danger-500: var(--sl-color-red-500);
  --sl-color-danger-600: var(--sl-color-red-600);
  --sl-color-danger-700: var(--sl-color-red-700);
  --sl-color-danger-800: var(--sl-color-red-800);
  --sl-color-danger-900: var(--sl-color-red-900);
  --sl-color-danger-950: var(--sl-color-red-950);

  --sl-color-neutral-50: var(--sl-color-gray-50);
  --sl-color-neutral-100: var(--sl-color-gray-100);
  --sl-color-neutral-200: var(--sl-color-gray-200);
  --sl-color-neutral-300: var(--sl-color-gray-300);
  --sl-color-neutral-400: var(--sl-color-gray-400);
  --sl-color-neutral-500: var(--sl-color-gray-500);
  --sl-color-neutral-600: var(--sl-color-gray-600);
  --sl-color-neutral-700: var(--sl-color-gray-700);
  --sl-color-neutral-800: var(--sl-color-gray-800);
  --sl-color-neutral-900: var(--sl-color-gray-900);
  --sl-color-neutral-950: var(--sl-color-gray-950);

  --sl-color-neutral-0: hsl(0, 0%, 100%);
  --sl-color-neutral-1000: hsl(0, 0%, 0%);

  --sl-border-radius-small: 0.1875rem;
  --sl-border-radius-medium: 0.25rem;
  --sl-border-radius-large: 0.5rem;
  --sl-border-radius-x-large: 1rem;

  --sl-border-radius-circle: 50%;
  --sl-border-radius-pill: 9999px;

  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

  --sl-spacing-3x-small: 0.125rem;
  --sl-spacing-2x-small: 0.25rem;
  --sl-spacing-x-small: 0.5rem;
  --sl-spacing-small: 0.75rem;
  --sl-spacing-medium: 1rem;
  --sl-spacing-large: 1.25rem;
  --sl-spacing-x-large: 1.75rem;
  --sl-spacing-2x-large: 2.25rem;
  --sl-spacing-3x-large: 3rem;
  --sl-spacing-4x-large: 4.5rem;

  --sl-transition-x-slow: 1000ms;
  --sl-transition-slow: 500ms;
  --sl-transition-medium: 250ms;
  --sl-transition-fast: 150ms;
  --sl-transition-x-fast: 50ms;

  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --sl-font-serif: Georgia, "Times New Roman", serif;

  --sl-font-size-2x-small: 0.625rem;
  --sl-font-size-x-small: 0.75rem;
  --sl-font-size-small: 0.875rem;
  --sl-font-size-medium: 1rem;
  --sl-font-size-large: 1.25rem;
  --sl-font-size-x-large: 1.5rem;
  --sl-font-size-2x-large: 2.25rem;
  --sl-font-size-3x-large: 3rem;
  --sl-font-size-4x-large: 4.5rem;

  --sl-font-weight-light: 300;
  --sl-font-weight-normal: 400;
  --sl-font-weight-semibold: 500;
  --sl-font-weight-bold: 700;

  --sl-letter-spacing-denser: -0.03em;
  --sl-letter-spacing-dense: -0.015em;
  --sl-letter-spacing-normal: normal;
  --sl-letter-spacing-loose: 0.075em;
  --sl-letter-spacing-looser: 0.15em;

  --sl-line-height-denser: 1;
  --sl-line-height-dense: 1.4;
  --sl-line-height-normal: 1.8;
  --sl-line-height-loose: 2.2;
  --sl-line-height-looser: 2.6;

  --sl-focus-ring-color: var(--sl-color-primary-600);
  --sl-focus-ring-style: solid;
  --sl-focus-ring-width: 3px;
  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)
    var(--sl-focus-ring-color);
  --sl-focus-ring-offset: 1px;

  --sl-button-font-size-small: var(--sl-font-size-x-small);
  --sl-button-font-size-medium: var(--sl-font-size-small);
  --sl-button-font-size-large: var(--sl-font-size-medium);

  --sl-input-height-small: 1.875rem;
  --sl-input-height-medium: 2.5rem;
  --sl-input-height-large: 3.125rem;

  --sl-input-background-color: var(--sl-color-neutral-0);
  --sl-input-background-color-hover: var(--sl-input-background-color);
  --sl-input-background-color-focus: var(--sl-input-background-color);
  --sl-input-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-border-color: var(--sl-color-neutral-300);
  --sl-input-border-color-hover: var(--sl-color-neutral-400);
  --sl-input-border-color-focus: var(--sl-color-primary-500);
  --sl-input-border-color-disabled: var(--sl-color-neutral-300);
  --sl-input-border-width: 1px;
  --sl-input-required-content: "*";
  --sl-input-required-content-offset: -2px;
  --sl-input-required-content-color: var(--sl-input-label-color);

  --sl-input-border-radius-small: var(--sl-border-radius-medium);
  --sl-input-border-radius-medium: var(--sl-border-radius-medium);
  --sl-input-border-radius-large: var(--sl-border-radius-medium);

  --sl-input-font-family: var(--sl-font-sans);
  --sl-input-font-weight: var(--sl-font-weight-normal);
  --sl-input-font-size-small: var(--sl-font-size-small);
  --sl-input-font-size-medium: var(--sl-font-size-medium);
  --sl-input-font-size-large: var(--sl-font-size-large);
  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

  --sl-input-color: var(--sl-color-neutral-700);
  --sl-input-color-hover: var(--sl-color-neutral-700);
  --sl-input-color-focus: var(--sl-color-neutral-700);
  --sl-input-color-disabled: var(--sl-color-neutral-900);
  --sl-input-icon-color: var(--sl-color-neutral-500);
  --sl-input-icon-color-hover: var(--sl-color-neutral-600);
  --sl-input-icon-color-focus: var(--sl-color-neutral-600);
  --sl-input-placeholder-color: var(--sl-color-neutral-500);
  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
  --sl-input-spacing-small: var(--sl-spacing-small);
  --sl-input-spacing-medium: var(--sl-spacing-medium);
  --sl-input-spacing-large: var(--sl-spacing-large);

  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
  --sl-input-focus-ring-offset: 0;

  --sl-input-filled-background-color: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-filled-color: var(--sl-color-neutral-800);
  --sl-input-filled-color-hover: var(--sl-color-neutral-800);
  --sl-input-filled-color-focus: var(--sl-color-neutral-700);
  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

  --sl-input-label-font-size-small: var(--sl-font-size-small);
  --sl-input-label-font-size-medium: var(--sl-font-size-medium);
  --sl-input-label-font-size-large: var(--sl-font-size-large);
  --sl-input-label-color: inherit;

  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);
  --sl-input-help-text-color: var(--sl-color-neutral-500);

  --sl-toggle-size-small: 0.875rem;
  --sl-toggle-size-medium: 1.125rem;
  --sl-toggle-size-large: 1.375rem;

  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

  --sl-panel-background-color: var(--sl-color-neutral-0);
  --sl-panel-border-color: var(--sl-color-neutral-200);
  --sl-panel-border-width: 1px;

  --sl-tooltip-border-radius: var(--sl-border-radius-medium);
  --sl-tooltip-background-color: var(--sl-color-neutral-800);
  --sl-tooltip-color: var(--sl-color-neutral-0);
  --sl-tooltip-font-family: var(--sl-font-sans);
  --sl-tooltip-font-weight: var(--sl-font-weight-normal);
  --sl-tooltip-font-size: var(--sl-font-size-small);
  --sl-tooltip-line-height: var(--sl-line-height-dense);
  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
  --sl-tooltip-arrow-size: 6px;

  --sl-z-index-drawer: 700;
  --sl-z-index-dialog: 800;
  --sl-z-index-dropdown: 900;
  --sl-z-index-toast: 950;
  --sl-z-index-tooltip: 1000;
}

@supports (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    scrollbar-gutter: stable !important;
    overflow: hidden !important;
  }
}

@supports not (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    padding-right: var(--sl-scroll-lock-size) !important;
    overflow: hidden !important;
  }
}

.sl-toast-stack {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  z-index: var(--sl-z-index-toast);
  width: 28rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.sl-toast-stack sl-alert {
  margin: var(--sl-spacing-medium);
}

.sl-toast-stack sl-alert::part(base) {
  box-shadow: var(--sl-shadow-large);
}
.papi-icon-button {
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
}

.papi-icon-button.primary {
  background-color: #1ea7fd;
  color: white;
}

.papi-icon-button.secondary {
  background-color: transparent;
  color: #333;
}

.papi-icon-button.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-icon-button.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-button {
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
}

.papi-button.primary {
  background-color: #1ea7fd;
  color: white;
}

.papi-button.secondary {
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  color: #333;
}

.papi-button.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-button.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}

.papi-button.video {
  background-color: red;
  color: white;
}

.papi-button.video a,
.papi-button.video a:visited {
  color: white;
  text-decoration: none;
}

.papi-button.video a:hover {
  color: white;
  text-decoration: underline;
}
.papi-multi-column-menu {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  padding-right: 3px;
}

.papi-menu {
  background-color: rgb(145, 145, 145);
  font-size: 11pt;
  font-weight: 600;
  margin-top: 1px;
  padding-bottom: 2px;
  padding-left: 24px;
  padding-top: 2px;
}
.papi-checkbox {
  background-color: transparent;
}

.papi-checkbox.error {
  color: #f00;
}

.papi-checkbox.error:hover {
  background-color: rgba(255, 0, 0, 0.2);
}

.papi-checkbox.paratext {
  color: greenyellow;
}

.papi-checkbox-label.paratext {
  color: darkgreen;
}

.papi-checkbox.paratext:hover {
  background-color: rgba(0, 100, 0, 0.3);
}

.papi-checkbox.paratext.bright {
  color: darkgreen;
}

.papi-checkbox-label.paratext.bright {
  background-color: greenyellow;
}

.papi-checkbox.paratext.bright:hover {
  background-color: rgba(173, 255, 47, 0.3);
}

.papi-checkbox.below,
.papi-checkbox.above {
  text-align: center;
}
.papi-combo-box {
  background-color: transparent;
}

.papi-combo-box.fullwidth {
  width: 100%;
}

.papi-combo-box.error {
  background-color: #f00;
}

.papi-combo-box.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-combo-box.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-snackbar {
  font-family: Arial, Helvetica, sans-serif;
}

.papi-snackbar.primary {
  background: #1ea7fd;
  color: white;
}

.papi-snackbar.external {
  background-color: lightsteelblue;
  border-color: white;
  border-style: dotted;
  padding: 2%;
  width: 30%;
}

.papi-snackbar.secondary {
  background: transparent;
  color: #333;
}

.papi-snackbar.alert {
  background: lightcoral;
}

.papi-snackbar.paratext {
  background: darkgreen;
  color: greenyellow;
}

.papi-snackbar.bright {
  background: greenyellow;
  color: darkgreen;
}
.papi-menu-item {
  line-height: 0.8;
}

.papi-menu-item.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-menu-item.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-slider {
  background-color: transparent;
  color: #1ea7fd;
}

.papi-slider.vertical {
  min-height: 200px;
}

.papi-slider.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-slider.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-ref-selector.book {
  display: inline-block;
  vertical-align: middle;
}

.papi-ref-selector.chapter-verse {
  width: 75px;
}
.search-bar-paper {
  display: flex;
  align-items: center;
}

.search-button {
  padding: 10px;
}
.papi-switch {
  background-color: transparent;
}

.papi-switch.primary {
  background-color: #1ea7fd;
}

.papi-switch.secondary {
  background-color: #6fc8ff;
}

.papi-switch.error {
  background-color: #f00;
}

.papi-switch.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-switch.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
:root,
:host,
.sl-theme-light {
  color-scheme: light;

  --sl-color-gray-50: hsl(0 0% 97.5%);
  --sl-color-gray-100: hsl(240 4.8% 95.9%);
  --sl-color-gray-200: hsl(240 5.9% 90%);
  --sl-color-gray-300: hsl(240 4.9% 83.9%);
  --sl-color-gray-400: hsl(240 5% 64.9%);
  --sl-color-gray-500: hsl(240 3.8% 46.1%);
  --sl-color-gray-600: hsl(240 5.2% 33.9%);
  --sl-color-gray-700: hsl(240 5.3% 26.1%);
  --sl-color-gray-800: hsl(240 3.7% 15.9%);
  --sl-color-gray-900: hsl(240 5.9% 10%);
  --sl-color-gray-950: hsl(240 7.3% 8%);

  --sl-color-red-50: hsl(0 85.7% 97.3%);
  --sl-color-red-100: hsl(0 93.3% 94.1%);
  --sl-color-red-200: hsl(0 96.3% 89.4%);
  --sl-color-red-300: hsl(0 93.5% 81.8%);
  --sl-color-red-400: hsl(0 90.6% 70.8%);
  --sl-color-red-500: hsl(0 84.2% 60.2%);
  --sl-color-red-600: hsl(0 72.2% 50.6%);
  --sl-color-red-700: hsl(0 73.7% 41.8%);
  --sl-color-red-800: hsl(0 70% 35.3%);
  --sl-color-red-900: hsl(0 62.8% 30.6%);
  --sl-color-red-950: hsl(0 60% 19.6%);

  --sl-color-orange-50: hsl(33.3 100% 96.5%);
  --sl-color-orange-100: hsl(34.3 100% 91.8%);
  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);
  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);
  --sl-color-orange-400: hsl(27 96% 61%);
  --sl-color-orange-500: hsl(24.6 95% 53.1%);
  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);
  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);
  --sl-color-orange-800: hsl(15 79.1% 33.7%);
  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);
  --sl-color-orange-950: hsl(15.2 69.1% 19%);

  --sl-color-amber-50: hsl(48 100% 96.1%);
  --sl-color-amber-100: hsl(48 96.5% 88.8%);
  --sl-color-amber-200: hsl(48 96.6% 76.7%);
  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);
  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);
  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);
  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);
  --sl-color-amber-700: hsl(26 90.5% 37.1%);
  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);
  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);
  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);

  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);
  --sl-color-yellow-100: hsl(54.9 96.7% 88%);
  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);
  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);
  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);
  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);
  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);
  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);
  --sl-color-yellow-800: hsl(31.8 81% 28.8%);
  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);
  --sl-color-yellow-950: hsl(33.1 69% 13.9%);

  --sl-color-lime-50: hsl(78.3 92% 95.1%);
  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);
  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);
  --sl-color-lime-300: hsl(82 84.5% 67.1%);
  --sl-color-lime-400: hsl(82.7 78% 55.5%);
  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);
  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);
  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);
  --sl-color-lime-800: hsl(86.3 69% 22.7%);
  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);
  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);

  --sl-color-green-50: hsl(138.5 76.5% 96.7%);
  --sl-color-green-100: hsl(140.6 84.2% 92.5%);
  --sl-color-green-200: hsl(141 78.9% 85.1%);
  --sl-color-green-300: hsl(141.7 76.6% 73.1%);
  --sl-color-green-400: hsl(141.9 69.2% 58%);
  --sl-color-green-500: hsl(142.1 70.6% 45.3%);
  --sl-color-green-600: hsl(142.1 76.2% 36.3%);
  --sl-color-green-700: hsl(142.4 71.8% 29.2%);
  --sl-color-green-800: hsl(142.8 64.2% 24.1%);
  --sl-color-green-900: hsl(143.8 61.2% 20.2%);
  --sl-color-green-950: hsl(144.3 60.7% 12%);

  --sl-color-emerald-50: hsl(151.8 81% 95.9%);
  --sl-color-emerald-100: hsl(149.3 80.4% 90%);
  --sl-color-emerald-200: hsl(152.4 76% 80.4%);
  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);
  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);
  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);
  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);
  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);
  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);
  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);
  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);

  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);
  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);
  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);
  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);
  --sl-color-teal-400: hsl(172.5 66% 50.4%);
  --sl-color-teal-500: hsl(173.4 80.4% 40%);
  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);
  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);
  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);
  --sl-color-teal-900: hsl(175.9 60.8% 19%);
  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);

  --sl-color-cyan-50: hsl(183.2 100% 96.3%);
  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);
  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);
  --sl-color-cyan-300: hsl(187 92.4% 69%);
  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);
  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);
  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);
  --sl-color-cyan-700: hsl(192.9 82.3% 31%);
  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);
  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);
  --sl-color-cyan-950: hsl(196.8 61% 16.1%);

  --sl-color-sky-50: hsl(204 100% 97.1%);
  --sl-color-sky-100: hsl(204 93.8% 93.7%);
  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);
  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);
  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);
  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);
  --sl-color-sky-600: hsl(200.4 98% 39.4%);
  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);
  --sl-color-sky-800: hsl(201 90% 27.5%);
  --sl-color-sky-900: hsl(202 80.3% 23.9%);
  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);

  --sl-color-blue-50: hsl(213.8 100% 96.9%);
  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);
  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);
  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);
  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);
  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);
  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);
  --sl-color-blue-700: hsl(224.3 76.3% 48%);
  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);
  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);
  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);

  --sl-color-indigo-50: hsl(225.9 100% 96.7%);
  --sl-color-indigo-100: hsl(226.5 100% 93.9%);
  --sl-color-indigo-200: hsl(228 96.5% 88.8%);
  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);
  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);
  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);
  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);
  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);
  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);
  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);
  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);

  --sl-color-violet-50: hsl(250 100% 97.6%);
  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);
  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);
  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);
  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);
  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);
  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);
  --sl-color-violet-700: hsl(263.4 70% 50.4%);
  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);
  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);
  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);

  --sl-color-purple-50: hsl(270 100% 98%);
  --sl-color-purple-100: hsl(268.7 100% 95.5%);
  --sl-color-purple-200: hsl(268.6 100% 91.8%);
  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);
  --sl-color-purple-400: hsl(270 95.2% 75.3%);
  --sl-color-purple-500: hsl(270.7 91% 65.1%);
  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);
  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);
  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);
  --sl-color-purple-900: hsl(273.6 65.6% 32%);
  --sl-color-purple-950: hsl(276 59.5% 16.5%);

  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);
  --sl-color-fuchsia-100: hsl(287 100% 95.5%);
  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);
  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);
  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);
  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);
  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);
  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);
  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);
  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);
  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);
  --sl-color-pink-700: hsl(335.1 77.6% 42%);
  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);
  --sl-color-pink-900: hsl(335.9 69% 30.4%);
  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);

  --sl-color-rose-50: hsl(355.7 100% 97.3%);
  --sl-color-rose-100: hsl(355.6 100% 94.7%);
  --sl-color-rose-200: hsl(352.7 96.1% 90%);
  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);
  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);
  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);
  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);
  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);
  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);
  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);
  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);

  --sl-color-primary-50: var(--sl-color-sky-50);
  --sl-color-primary-100: var(--sl-color-sky-100);
  --sl-color-primary-200: var(--sl-color-sky-200);
  --sl-color-primary-300: var(--sl-color-sky-300);
  --sl-color-primary-400: var(--sl-color-sky-400);
  --sl-color-primary-500: var(--sl-color-sky-500);
  --sl-color-primary-600: var(--sl-color-sky-600);
  --sl-color-primary-700: var(--sl-color-sky-700);
  --sl-color-primary-800: var(--sl-color-sky-800);
  --sl-color-primary-900: var(--sl-color-sky-900);
  --sl-color-primary-950: var(--sl-color-sky-950);

  --sl-color-success-50: var(--sl-color-green-50);
  --sl-color-success-100: var(--sl-color-green-100);
  --sl-color-success-200: var(--sl-color-green-200);
  --sl-color-success-300: var(--sl-color-green-300);
  --sl-color-success-400: var(--sl-color-green-400);
  --sl-color-success-500: var(--sl-color-green-500);
  --sl-color-success-600: var(--sl-color-green-600);
  --sl-color-success-700: var(--sl-color-green-700);
  --sl-color-success-800: var(--sl-color-green-800);
  --sl-color-success-900: var(--sl-color-green-900);
  --sl-color-success-950: var(--sl-color-green-950);

  --sl-color-warning-50: var(--sl-color-amber-50);
  --sl-color-warning-100: var(--sl-color-amber-100);
  --sl-color-warning-200: var(--sl-color-amber-200);
  --sl-color-warning-300: var(--sl-color-amber-300);
  --sl-color-warning-400: var(--sl-color-amber-400);
  --sl-color-warning-500: var(--sl-color-amber-500);
  --sl-color-warning-600: var(--sl-color-amber-600);
  --sl-color-warning-700: var(--sl-color-amber-700);
  --sl-color-warning-800: var(--sl-color-amber-800);
  --sl-color-warning-900: var(--sl-color-amber-900);
  --sl-color-warning-950: var(--sl-color-amber-950);

  --sl-color-danger-50: var(--sl-color-red-50);
  --sl-color-danger-100: var(--sl-color-red-100);
  --sl-color-danger-200: var(--sl-color-red-200);
  --sl-color-danger-300: var(--sl-color-red-300);
  --sl-color-danger-400: var(--sl-color-red-400);
  --sl-color-danger-500: var(--sl-color-red-500);
  --sl-color-danger-600: var(--sl-color-red-600);
  --sl-color-danger-700: var(--sl-color-red-700);
  --sl-color-danger-800: var(--sl-color-red-800);
  --sl-color-danger-900: var(--sl-color-red-900);
  --sl-color-danger-950: var(--sl-color-red-950);

  --sl-color-neutral-50: var(--sl-color-gray-50);
  --sl-color-neutral-100: var(--sl-color-gray-100);
  --sl-color-neutral-200: var(--sl-color-gray-200);
  --sl-color-neutral-300: var(--sl-color-gray-300);
  --sl-color-neutral-400: var(--sl-color-gray-400);
  --sl-color-neutral-500: var(--sl-color-gray-500);
  --sl-color-neutral-600: var(--sl-color-gray-600);
  --sl-color-neutral-700: var(--sl-color-gray-700);
  --sl-color-neutral-800: var(--sl-color-gray-800);
  --sl-color-neutral-900: var(--sl-color-gray-900);
  --sl-color-neutral-950: var(--sl-color-gray-950);

  --sl-color-neutral-0: hsl(0, 0%, 100%);
  --sl-color-neutral-1000: hsl(0, 0%, 0%);

  --sl-border-radius-small: 0.1875rem;
  --sl-border-radius-medium: 0.25rem;
  --sl-border-radius-large: 0.5rem;
  --sl-border-radius-x-large: 1rem;

  --sl-border-radius-circle: 50%;
  --sl-border-radius-pill: 9999px;

  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

  --sl-spacing-3x-small: 0.125rem;
  --sl-spacing-2x-small: 0.25rem;
  --sl-spacing-x-small: 0.5rem;
  --sl-spacing-small: 0.75rem;
  --sl-spacing-medium: 1rem;
  --sl-spacing-large: 1.25rem;
  --sl-spacing-x-large: 1.75rem;
  --sl-spacing-2x-large: 2.25rem;
  --sl-spacing-3x-large: 3rem;
  --sl-spacing-4x-large: 4.5rem;

  --sl-transition-x-slow: 1000ms;
  --sl-transition-slow: 500ms;
  --sl-transition-medium: 250ms;
  --sl-transition-fast: 150ms;
  --sl-transition-x-fast: 50ms;

  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --sl-font-serif: Georgia, "Times New Roman", serif;

  --sl-font-size-2x-small: 0.625rem;
  --sl-font-size-x-small: 0.75rem;
  --sl-font-size-small: 0.875rem;
  --sl-font-size-medium: 1rem;
  --sl-font-size-large: 1.25rem;
  --sl-font-size-x-large: 1.5rem;
  --sl-font-size-2x-large: 2.25rem;
  --sl-font-size-3x-large: 3rem;
  --sl-font-size-4x-large: 4.5rem;

  --sl-font-weight-light: 300;
  --sl-font-weight-normal: 400;
  --sl-font-weight-semibold: 500;
  --sl-font-weight-bold: 700;

  --sl-letter-spacing-denser: -0.03em;
  --sl-letter-spacing-dense: -0.015em;
  --sl-letter-spacing-normal: normal;
  --sl-letter-spacing-loose: 0.075em;
  --sl-letter-spacing-looser: 0.15em;

  --sl-line-height-denser: 1;
  --sl-line-height-dense: 1.4;
  --sl-line-height-normal: 1.8;
  --sl-line-height-loose: 2.2;
  --sl-line-height-looser: 2.6;

  --sl-focus-ring-color: var(--sl-color-primary-600);
  --sl-focus-ring-style: solid;
  --sl-focus-ring-width: 3px;
  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)
    var(--sl-focus-ring-color);
  --sl-focus-ring-offset: 1px;

  --sl-button-font-size-small: var(--sl-font-size-x-small);
  --sl-button-font-size-medium: var(--sl-font-size-small);
  --sl-button-font-size-large: var(--sl-font-size-medium);

  --sl-input-height-small: 1.875rem;
  --sl-input-height-medium: 2.5rem;
  --sl-input-height-large: 3.125rem;

  --sl-input-background-color: var(--sl-color-neutral-0);
  --sl-input-background-color-hover: var(--sl-input-background-color);
  --sl-input-background-color-focus: var(--sl-input-background-color);
  --sl-input-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-border-color: var(--sl-color-neutral-300);
  --sl-input-border-color-hover: var(--sl-color-neutral-400);
  --sl-input-border-color-focus: var(--sl-color-primary-500);
  --sl-input-border-color-disabled: var(--sl-color-neutral-300);
  --sl-input-border-width: 1px;
  --sl-input-required-content: "*";
  --sl-input-required-content-offset: -2px;
  --sl-input-required-content-color: var(--sl-input-label-color);

  --sl-input-border-radius-small: var(--sl-border-radius-medium);
  --sl-input-border-radius-medium: var(--sl-border-radius-medium);
  --sl-input-border-radius-large: var(--sl-border-radius-medium);

  --sl-input-font-family: var(--sl-font-sans);
  --sl-input-font-weight: var(--sl-font-weight-normal);
  --sl-input-font-size-small: var(--sl-font-size-small);
  --sl-input-font-size-medium: var(--sl-font-size-medium);
  --sl-input-font-size-large: var(--sl-font-size-large);
  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

  --sl-input-color: var(--sl-color-neutral-700);
  --sl-input-color-hover: var(--sl-color-neutral-700);
  --sl-input-color-focus: var(--sl-color-neutral-700);
  --sl-input-color-disabled: var(--sl-color-neutral-900);
  --sl-input-icon-color: var(--sl-color-neutral-500);
  --sl-input-icon-color-hover: var(--sl-color-neutral-600);
  --sl-input-icon-color-focus: var(--sl-color-neutral-600);
  --sl-input-placeholder-color: var(--sl-color-neutral-500);
  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
  --sl-input-spacing-small: var(--sl-spacing-small);
  --sl-input-spacing-medium: var(--sl-spacing-medium);
  --sl-input-spacing-large: var(--sl-spacing-large);

  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
  --sl-input-focus-ring-offset: 0;

  --sl-input-filled-background-color: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-filled-color: var(--sl-color-neutral-800);
  --sl-input-filled-color-hover: var(--sl-color-neutral-800);
  --sl-input-filled-color-focus: var(--sl-color-neutral-700);
  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

  --sl-input-label-font-size-small: var(--sl-font-size-small);
  --sl-input-label-font-size-medium: var(--sl-font-size-medium);
  --sl-input-label-font-size-large: var(--sl-font-size-large);
  --sl-input-label-color: inherit;

  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);
  --sl-input-help-text-color: var(--sl-color-neutral-500);

  --sl-toggle-size-small: 0.875rem;
  --sl-toggle-size-medium: 1.125rem;
  --sl-toggle-size-large: 1.375rem;

  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

  --sl-panel-background-color: var(--sl-color-neutral-0);
  --sl-panel-border-color: var(--sl-color-neutral-200);
  --sl-panel-border-width: 1px;

  --sl-tooltip-border-radius: var(--sl-border-radius-medium);
  --sl-tooltip-background-color: var(--sl-color-neutral-800);
  --sl-tooltip-color: var(--sl-color-neutral-0);
  --sl-tooltip-font-family: var(--sl-font-sans);
  --sl-tooltip-font-weight: var(--sl-font-weight-normal);
  --sl-tooltip-font-size: var(--sl-font-size-small);
  --sl-tooltip-line-height: var(--sl-line-height-dense);
  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
  --sl-tooltip-arrow-size: 6px;

  --sl-z-index-drawer: 700;
  --sl-z-index-dialog: 800;
  --sl-z-index-dropdown: 900;
  --sl-z-index-toast: 950;
  --sl-z-index-tooltip: 1000;
}

@supports (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    scrollbar-gutter: stable !important;
    overflow: hidden !important;
  }
}

@supports not (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    padding-right: var(--sl-scroll-lock-size) !important;
    overflow: hidden !important;
  }
}

.sl-toast-stack {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  z-index: var(--sl-z-index-toast);
  width: 28rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.sl-toast-stack sl-alert {
  margin: var(--sl-spacing-medium);
}

.sl-toast-stack sl-alert::part(base) {
  box-shadow: var(--sl-shadow-large);
}

body {
  font: 14px var(--sl-font-sans);
  background-color: var(--sl-color-neutral-0);
  color: var(--sl-color-neutral-900);
  padding: 1rem;
}

.book-chapter-control {
  max-width: 250px; /* From UX sandbox */
  padding-top: 0; /* From UX sandbox */
}

.book-chapter-menu {
  height: 500px; /* Will be removed or set to UX specified size, helpful for testing */
  overflow-y: auto; /* Adds scroll once it exceeds 500px */
}

.menu-item-container {
  position: relative;
}
@layer rdg.MeasuringCell {.m1l09lto7-0-0-beta-34 {
    contain: strict;
    grid-row: 1;
    visibility: hidden
}
  }


@layer rdg.Cell {.c1wupbe7-0-0-beta-34 {
    /* max-content does not work with size containment
     * dynamically switching between different containment styles incurs a heavy relayout penalty
     * Chromium bug: at odd zoom levels or subpixel positioning, layout/paint containment can make cell borders disappear
     *   https://bugs.chromium.org/p/chromium/issues/detail?id=1326946
     */
    contain: style;
    position: relative; /* needed for absolute positioning to work */
    padding-block: 0;
    padding-inline: 8px;
    border-inline-end: 1px solid var(--rdg-border-color);
    border-block-end: 1px solid var(--rdg-border-color);
    grid-row-start: var(--rdg-grid-row-start);
    background-color: inherit;

    white-space: nowrap;
    overflow: hidden;
    overflow: clip;
    text-overflow: ellipsis;
    outline: none
}

    .c1wupbe7-0-0-beta-34[aria-selected='true'] {
      outline: 2px solid var(--rdg-selection-color);
      outline-offset: -2px;
    }
  }

@layer rdg.Cell {

.cd0kgiy7-0-0-beta-34 {
    position: sticky;
    /* Should have a higher value than 0 to show up above unfrozen cells */
    z-index: 1
}
  }

@layer rdg.Cell {

.c1730fa47-0-0-beta-34 {
    box-shadow: calc(2px * var(--rdg-sign)) 0 5px -2px rgba(136, 136, 136, 0.3)
}
  }


@layer rdg.CheckboxLabel {.c1hs68w07-0-0-beta-34 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    margin-inline-end: 1px /* align checkbox in row group cell */
}
  }

@layer rdg.CheckboxInput {

.cojpd0n7-0-0-beta-34 {
    all: unset
}
  }

@layer rdg.CheckboxIcon {

.cwsfieb7-0-0-beta-34 {
    content: '';
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--rdg-border-color);
    background-color: var(--rdg-background-color)
}

    .cojpd0n7-0-0-beta-34:checked + .cwsfieb7-0-0-beta-34 {
      background-color: var(--rdg-checkbox-color);
      outline: 4px solid var(--rdg-background-color);
      outline-offset: -6px;
    }

    .cojpd0n7-0-0-beta-34:focus + .cwsfieb7-0-0-beta-34 {
      border-color: var(--rdg-checkbox-focus-color);
    }
  }

@layer rdg.CheckboxLabel {

.c1fgadbl7-0-0-beta-34 {
    cursor: default
}

    .c1fgadbl7-0-0-beta-34 .cwsfieb7-0-0-beta-34 {
      border-color: var(--rdg-checkbox-disabled-border-color);
      background-color: var(--rdg-checkbox-disabled-background-color);
    }
  }


@layer rdg.GroupCellContent {.g1w3c5217-0-0-beta-34 {
    outline: none
}
  }

@layer rdg.GroupCellCaret {

.cm5tyhw7-0-0-beta-34 {
    margin-inline-start: 4px;
    stroke: currentColor;
    stroke-width: 1.5px;
    fill: transparent;
    vertical-align: middle
}

    .cm5tyhw7-0-0-beta-34 > path {
      transition: d 0.1s;
    }
  }


@layer rdg.DragHandle {.cadd3bp7-0-0-beta-34 {
    cursor: move;
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: 8px;
    block-size: 8px;
    background-color: var(--rdg-selection-color)
}

    .cadd3bp7-0-0-beta-34:hover {
      inline-size: 16px;
      block-size: 16px;
      border: 2px solid var(--rdg-selection-color);
      background-color: var(--rdg-background-color);
    }
  }


@layer rdg.EditCell {.c1tngyp17-0-0-beta-34 {
    padding: 0
}
  }


@layer rdg.Row {.r1otpg647-0-0-beta-34 {
    display: contents;
    line-height: var(--rdg-row-height);
    background-color: var(--rdg-background-color)
}

    .r1otpg647-0-0-beta-34:hover {
      background-color: var(--rdg-row-hover-background-color);
    }

    .r1otpg647-0-0-beta-34[aria-selected='true'] {
      background-color: var(--rdg-row-selected-background-color);
    }

      .r1otpg647-0-0-beta-34[aria-selected='true']:hover {
        background-color: var(--rdg-row-selected-hover-background-color);
      }
  }

@layer rdg.FocusSink {

.rel5gk27-0-0-beta-34 {
    outline: 2px solid var(--rdg-selection-color);
    outline-offset: -2px
}
  }

@layer rdg.FocusSink {
    .r1qymf1z7-0-0-beta-34::before {
      content: '';
      display: inline-block;
      height: 100%;
      position: sticky;
      inset-inline-start: 0;
      border-inline-start: 2px solid var(--rdg-selection-color);
    }
  }


@layer rdg.GroupedRow {
    .gyxx7e97-0-0-beta-34:not([aria-selected='true']) {
      background-color: var(--rdg-header-background-color);
    }

    .gyxx7e97-0-0-beta-34 > .c1wupbe7-0-0-beta-34:not(:last-child):not(.c1730fa47-0-0-beta-34) {
      border-inline-end: none;
    }
  }


@layer rdg.SortableHeaderCell {.hizp7y17-0-0-beta-34 {
    cursor: pointer;
    display: flex
}

    .hizp7y17-0-0-beta-34:focus {
      outline: none;
    }
  }

@layer rdg.SortableHeaderCellName {

.h14cojrm7-0-0-beta-34 {
    flex-grow: 1;
    overflow: hidden;
    overflow: clip;
    text-overflow: ellipsis
}
  }


@layer rdg.HeaderCell {.celq7o97-0-0-beta-34 {
    touch-action: none
}

    .celq7o97-0-0-beta-34::after {
      content: '';
      cursor: col-resize;
      position: absolute;
      inset-block-start: 0;
      inset-inline-end: 0;
      inset-block-end: 0;
      inline-size: 10px;
    }
  }


@layer rdg.HeaderRow {.h197vzie7-0-0-beta-34 {
    display: contents;
    line-height: var(--rdg-header-row-height);
    background-color: var(--rdg-header-background-color);
    font-weight: bold
}

    .h197vzie7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      /* Should have a higher value than 0 to show up above regular cells */
      z-index: 1;
      position: sticky;
      inset-block-start: 0;
    }

    .h197vzie7-0-0-beta-34 > .cd0kgiy7-0-0-beta-34 {
      z-index: 2;
    }
  }


@layer rdg.Cell {.ccpfvsn7-0-0-beta-34 {
    background-color: #ccccff
}
  }

@layer rdg.Cell {

.c1bmg16t7-0-0-beta-34 {
    background-color: #ccccff
}

    .c1bmg16t7-0-0-beta-34.ccpfvsn7-0-0-beta-34 {
      background-color: #9999ff;
    }
  }


@layer rdg.SortIcon {.a1mygwml7-0-0-beta-34 {
    fill: currentColor
}

    .a1mygwml7-0-0-beta-34 > path {
      transition: d 0.1s;
    }
  }


@layer rdg {
    @layer Defaults,
      FocusSink,
      CheckboxInput,
      CheckboxIcon,
      CheckboxLabel,
      Cell,
      HeaderCell,
      SummaryCell,
      EditCell,
      Row,
      HeaderRow,
      SummaryRow,
      GroupedRow,
      Root;

    @layer Defaults {
      .r104f42s7-0-0-beta-34 *,
      .r104f42s7-0-0-beta-34 *::before,
      .r104f42s7-0-0-beta-34 *::after {
        box-sizing: inherit;
      }
    }

    @layer Root {.r104f42s7-0-0-beta-34 {
      --rdg-color: #000;   --rdg-border-color: #ddd;   --rdg-summary-border-color: #aaa;   --rdg-background-color: hsl(0deg 0% 100%);   --rdg-header-background-color: hsl(0deg 0% 97.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 96%);   --rdg-row-selected-background-color: hsl(207deg 76% 92%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 88%);   --rdg-checkbox-color: hsl(207deg 100% 29%);   --rdg-checkbox-focus-color: hsl(207deg 100% 69%);   --rdg-checkbox-disabled-border-color: #ccc;   --rdg-checkbox-disabled-background-color: #ddd;
      --rdg-selection-color: #66afe9;
      --rdg-font-size: 14px;

      display: grid;

      color-scheme: var(--rdg-color-scheme, light dark);

      /* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */
      /* We set a stacking context so internal elements don't render on top of external elements. */
      /* size containment is not used as it could break "width: min-content" for example, and the grid would infinitely resize on Chromium browsers */
      contain: content;
      content-visibility: auto;
      block-size: 350px;
      border: 1px solid var(--rdg-border-color);
      box-sizing: border-box;
      overflow: auto;
      background-color: var(--rdg-background-color);
      color: var(--rdg-color);
      font-size: var(--rdg-font-size)

      /* needed on Firefox */
}
      .r104f42s7-0-0-beta-34::before {
        content: '';
        grid-column: 1/-1;
        grid-row: 1/-1;
      }

      .r104f42s7-0-0-beta-34.rdg-dark {
        --rdg-color-scheme: dark;
        --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
      }

      .r104f42s7-0-0-beta-34.rdg-light {
        --rdg-color-scheme: light;
      }

      @media (prefers-color-scheme: dark) {
        .r104f42s7-0-0-beta-34:not(.rdg-light) {
          --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
        }
      }
    }
  }

@layer rdg.Root {

.v7ly7s7-0-0-beta-34 {
    user-select: none
}

    .v7ly7s7-0-0-beta-34 .r1otpg647-0-0-beta-34 {
      cursor: move;
    }
  }

@layer rdg.FocusSink {

.fc4f4zb7-0-0-beta-34 {
    grid-column: 1/-1;
    pointer-events: none;
    /* Should have a higher value than 2 to show up above header row */
    z-index: 3
}
  }


@layer rdg.SummaryCell {.s1n3hxke7-0-0-beta-34 {
    inset-block-start: var(--rdg-summary-row-top);
    inset-block-end: var(--rdg-summary-row-bottom)
}
  }


@layer rdg.SummaryRow {.snfqesz7-0-0-beta-34 {
    line-height: var(--rdg-summary-row-height)
}

    .snfqesz7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      position: sticky;
    }
  }

@layer rdg.SummaryRow {
    .t1jijrjz7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      z-index: 1;
    }

    .t1jijrjz7-0-0-beta-34 > .cd0kgiy7-0-0-beta-34 {
      z-index: 2;
    }
  }

@layer rdg.SummaryRow {
    .t14bmecc7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      border-block-end: 2px solid var(--rdg-summary-border-color);
    }
  }

@layer rdg.SummaryRow {
    .b1odhhml7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      border-block-start: 2px solid var(--rdg-summary-border-color);
    }
  }


@layer rdg.TextEditor {.tlmcuo07-0-0-beta-34 {
    appearance: none;

    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border: 2px solid #ccc;
    vertical-align: top;
    color: var(--rdg-color);
    background-color: var(--rdg-background-color);

    font-family: inherit;
    font-size: var(--rdg-font-size)
}

    .tlmcuo07-0-0-beta-34:focus {
      border-color: var(--rdg-selection-color);
      outline: none;
    }

    .tlmcuo07-0-0-beta-34::placeholder {
      color: #999;
      opacity: 1;
    }
  }

.paratext {
  background-color: darkgreen;
  color: greenyellow;
}
.papi-toolbar {
  background-color: #eee;
  color: black;
}

.papi-toolbar.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-toolbar.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}

.papi-menu-drawer-paper {
  height: fit-content !important;
  position: absolute !important;
}

.papi-menu-children {
  padding: 10px;
  position: relative;
}
/* sl-menu-item::part(label) {
  font-size: 14px;
}

sl-menu-item::part(prefix) {
  margin-right: 24px;
  margin-left: -24px;
} */

.book-color-label {
  background-color: var(--sl-color-amber-100);
  height: 16px;
  width: 2px;
}

.selected-book-color-label {
  background-color: var(--sl-color-amber-600);
  height: 16px;
  width: 2px;
}

.selected-menu-item {
  background-color: var(--sl-color-neutral-200);
}

.chapter-drawer {
  display: block;
}
.book-chapter-input {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;

  position: relative;
  width: 552px;
  height: 56px;
  left: 34.15px;
  top: 85px;
}
:root,
:host,
.sl-theme-light {
  color-scheme: light;

  --sl-color-gray-50: hsl(0 0% 97.5%);
  --sl-color-gray-100: hsl(240 4.8% 95.9%);
  --sl-color-gray-200: hsl(240 5.9% 90%);
  --sl-color-gray-300: hsl(240 4.9% 83.9%);
  --sl-color-gray-400: hsl(240 5% 64.9%);
  --sl-color-gray-500: hsl(240 3.8% 46.1%);
  --sl-color-gray-600: hsl(240 5.2% 33.9%);
  --sl-color-gray-700: hsl(240 5.3% 26.1%);
  --sl-color-gray-800: hsl(240 3.7% 15.9%);
  --sl-color-gray-900: hsl(240 5.9% 10%);
  --sl-color-gray-950: hsl(240 7.3% 8%);

  --sl-color-red-50: hsl(0 85.7% 97.3%);
  --sl-color-red-100: hsl(0 93.3% 94.1%);
  --sl-color-red-200: hsl(0 96.3% 89.4%);
  --sl-color-red-300: hsl(0 93.5% 81.8%);
  --sl-color-red-400: hsl(0 90.6% 70.8%);
  --sl-color-red-500: hsl(0 84.2% 60.2%);
  --sl-color-red-600: hsl(0 72.2% 50.6%);
  --sl-color-red-700: hsl(0 73.7% 41.8%);
  --sl-color-red-800: hsl(0 70% 35.3%);
  --sl-color-red-900: hsl(0 62.8% 30.6%);
  --sl-color-red-950: hsl(0 60% 19.6%);

  --sl-color-orange-50: hsl(33.3 100% 96.5%);
  --sl-color-orange-100: hsl(34.3 100% 91.8%);
  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);
  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);
  --sl-color-orange-400: hsl(27 96% 61%);
  --sl-color-orange-500: hsl(24.6 95% 53.1%);
  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);
  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);
  --sl-color-orange-800: hsl(15 79.1% 33.7%);
  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);
  --sl-color-orange-950: hsl(15.2 69.1% 19%);

  --sl-color-amber-50: hsl(48 100% 96.1%);
  --sl-color-amber-100: hsl(48 96.5% 88.8%);
  --sl-color-amber-200: hsl(48 96.6% 76.7%);
  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);
  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);
  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);
  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);
  --sl-color-amber-700: hsl(26 90.5% 37.1%);
  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);
  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);
  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);

  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);
  --sl-color-yellow-100: hsl(54.9 96.7% 88%);
  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);
  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);
  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);
  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);
  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);
  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);
  --sl-color-yellow-800: hsl(31.8 81% 28.8%);
  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);
  --sl-color-yellow-950: hsl(33.1 69% 13.9%);

  --sl-color-lime-50: hsl(78.3 92% 95.1%);
  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);
  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);
  --sl-color-lime-300: hsl(82 84.5% 67.1%);
  --sl-color-lime-400: hsl(82.7 78% 55.5%);
  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);
  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);
  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);
  --sl-color-lime-800: hsl(86.3 69% 22.7%);
  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);
  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);

  --sl-color-green-50: hsl(138.5 76.5% 96.7%);
  --sl-color-green-100: hsl(140.6 84.2% 92.5%);
  --sl-color-green-200: hsl(141 78.9% 85.1%);
  --sl-color-green-300: hsl(141.7 76.6% 73.1%);
  --sl-color-green-400: hsl(141.9 69.2% 58%);
  --sl-color-green-500: hsl(142.1 70.6% 45.3%);
  --sl-color-green-600: hsl(142.1 76.2% 36.3%);
  --sl-color-green-700: hsl(142.4 71.8% 29.2%);
  --sl-color-green-800: hsl(142.8 64.2% 24.1%);
  --sl-color-green-900: hsl(143.8 61.2% 20.2%);
  --sl-color-green-950: hsl(144.3 60.7% 12%);

  --sl-color-emerald-50: hsl(151.8 81% 95.9%);
  --sl-color-emerald-100: hsl(149.3 80.4% 90%);
  --sl-color-emerald-200: hsl(152.4 76% 80.4%);
  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);
  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);
  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);
  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);
  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);
  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);
  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);
  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);

  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);
  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);
  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);
  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);
  --sl-color-teal-400: hsl(172.5 66% 50.4%);
  --sl-color-teal-500: hsl(173.4 80.4% 40%);
  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);
  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);
  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);
  --sl-color-teal-900: hsl(175.9 60.8% 19%);
  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);

  --sl-color-cyan-50: hsl(183.2 100% 96.3%);
  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);
  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);
  --sl-color-cyan-300: hsl(187 92.4% 69%);
  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);
  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);
  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);
  --sl-color-cyan-700: hsl(192.9 82.3% 31%);
  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);
  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);
  --sl-color-cyan-950: hsl(196.8 61% 16.1%);

  --sl-color-sky-50: hsl(204 100% 97.1%);
  --sl-color-sky-100: hsl(204 93.8% 93.7%);
  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);
  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);
  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);
  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);
  --sl-color-sky-600: hsl(200.4 98% 39.4%);
  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);
  --sl-color-sky-800: hsl(201 90% 27.5%);
  --sl-color-sky-900: hsl(202 80.3% 23.9%);
  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);

  --sl-color-blue-50: hsl(213.8 100% 96.9%);
  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);
  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);
  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);
  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);
  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);
  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);
  --sl-color-blue-700: hsl(224.3 76.3% 48%);
  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);
  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);
  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);

  --sl-color-indigo-50: hsl(225.9 100% 96.7%);
  --sl-color-indigo-100: hsl(226.5 100% 93.9%);
  --sl-color-indigo-200: hsl(228 96.5% 88.8%);
  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);
  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);
  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);
  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);
  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);
  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);
  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);
  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);

  --sl-color-violet-50: hsl(250 100% 97.6%);
  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);
  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);
  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);
  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);
  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);
  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);
  --sl-color-violet-700: hsl(263.4 70% 50.4%);
  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);
  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);
  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);

  --sl-color-purple-50: hsl(270 100% 98%);
  --sl-color-purple-100: hsl(268.7 100% 95.5%);
  --sl-color-purple-200: hsl(268.6 100% 91.8%);
  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);
  --sl-color-purple-400: hsl(270 95.2% 75.3%);
  --sl-color-purple-500: hsl(270.7 91% 65.1%);
  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);
  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);
  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);
  --sl-color-purple-900: hsl(273.6 65.6% 32%);
  --sl-color-purple-950: hsl(276 59.5% 16.5%);

  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);
  --sl-color-fuchsia-100: hsl(287 100% 95.5%);
  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);
  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);
  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);
  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);
  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);
  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);
  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);
  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);
  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);
  --sl-color-pink-700: hsl(335.1 77.6% 42%);
  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);
  --sl-color-pink-900: hsl(335.9 69% 30.4%);
  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);

  --sl-color-rose-50: hsl(355.7 100% 97.3%);
  --sl-color-rose-100: hsl(355.6 100% 94.7%);
  --sl-color-rose-200: hsl(352.7 96.1% 90%);
  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);
  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);
  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);
  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);
  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);
  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);
  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);
  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);

  --sl-color-primary-50: var(--sl-color-sky-50);
  --sl-color-primary-100: var(--sl-color-sky-100);
  --sl-color-primary-200: var(--sl-color-sky-200);
  --sl-color-primary-300: var(--sl-color-sky-300);
  --sl-color-primary-400: var(--sl-color-sky-400);
  --sl-color-primary-500: var(--sl-color-sky-500);
  --sl-color-primary-600: var(--sl-color-sky-600);
  --sl-color-primary-700: var(--sl-color-sky-700);
  --sl-color-primary-800: var(--sl-color-sky-800);
  --sl-color-primary-900: var(--sl-color-sky-900);
  --sl-color-primary-950: var(--sl-color-sky-950);

  --sl-color-success-50: var(--sl-color-green-50);
  --sl-color-success-100: var(--sl-color-green-100);
  --sl-color-success-200: var(--sl-color-green-200);
  --sl-color-success-300: var(--sl-color-green-300);
  --sl-color-success-400: var(--sl-color-green-400);
  --sl-color-success-500: var(--sl-color-green-500);
  --sl-color-success-600: var(--sl-color-green-600);
  --sl-color-success-700: var(--sl-color-green-700);
  --sl-color-success-800: var(--sl-color-green-800);
  --sl-color-success-900: var(--sl-color-green-900);
  --sl-color-success-950: var(--sl-color-green-950);

  --sl-color-warning-50: var(--sl-color-amber-50);
  --sl-color-warning-100: var(--sl-color-amber-100);
  --sl-color-warning-200: var(--sl-color-amber-200);
  --sl-color-warning-300: var(--sl-color-amber-300);
  --sl-color-warning-400: var(--sl-color-amber-400);
  --sl-color-warning-500: var(--sl-color-amber-500);
  --sl-color-warning-600: var(--sl-color-amber-600);
  --sl-color-warning-700: var(--sl-color-amber-700);
  --sl-color-warning-800: var(--sl-color-amber-800);
  --sl-color-warning-900: var(--sl-color-amber-900);
  --sl-color-warning-950: var(--sl-color-amber-950);

  --sl-color-danger-50: var(--sl-color-red-50);
  --sl-color-danger-100: var(--sl-color-red-100);
  --sl-color-danger-200: var(--sl-color-red-200);
  --sl-color-danger-300: var(--sl-color-red-300);
  --sl-color-danger-400: var(--sl-color-red-400);
  --sl-color-danger-500: var(--sl-color-red-500);
  --sl-color-danger-600: var(--sl-color-red-600);
  --sl-color-danger-700: var(--sl-color-red-700);
  --sl-color-danger-800: var(--sl-color-red-800);
  --sl-color-danger-900: var(--sl-color-red-900);
  --sl-color-danger-950: var(--sl-color-red-950);

  --sl-color-neutral-50: var(--sl-color-gray-50);
  --sl-color-neutral-100: var(--sl-color-gray-100);
  --sl-color-neutral-200: var(--sl-color-gray-200);
  --sl-color-neutral-300: var(--sl-color-gray-300);
  --sl-color-neutral-400: var(--sl-color-gray-400);
  --sl-color-neutral-500: var(--sl-color-gray-500);
  --sl-color-neutral-600: var(--sl-color-gray-600);
  --sl-color-neutral-700: var(--sl-color-gray-700);
  --sl-color-neutral-800: var(--sl-color-gray-800);
  --sl-color-neutral-900: var(--sl-color-gray-900);
  --sl-color-neutral-950: var(--sl-color-gray-950);

  --sl-color-neutral-0: hsl(0, 0%, 100%);
  --sl-color-neutral-1000: hsl(0, 0%, 0%);

  --sl-border-radius-small: 0.1875rem;
  --sl-border-radius-medium: 0.25rem;
  --sl-border-radius-large: 0.5rem;
  --sl-border-radius-x-large: 1rem;

  --sl-border-radius-circle: 50%;
  --sl-border-radius-pill: 9999px;

  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

  --sl-spacing-3x-small: 0.125rem;
  --sl-spacing-2x-small: 0.25rem;
  --sl-spacing-x-small: 0.5rem;
  --sl-spacing-small: 0.75rem;
  --sl-spacing-medium: 1rem;
  --sl-spacing-large: 1.25rem;
  --sl-spacing-x-large: 1.75rem;
  --sl-spacing-2x-large: 2.25rem;
  --sl-spacing-3x-large: 3rem;
  --sl-spacing-4x-large: 4.5rem;

  --sl-transition-x-slow: 1000ms;
  --sl-transition-slow: 500ms;
  --sl-transition-medium: 250ms;
  --sl-transition-fast: 150ms;
  --sl-transition-x-fast: 50ms;

  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --sl-font-serif: Georgia, "Times New Roman", serif;

  --sl-font-size-2x-small: 0.625rem;
  --sl-font-size-x-small: 0.75rem;
  --sl-font-size-small: 0.875rem;
  --sl-font-size-medium: 1rem;
  --sl-font-size-large: 1.25rem;
  --sl-font-size-x-large: 1.5rem;
  --sl-font-size-2x-large: 2.25rem;
  --sl-font-size-3x-large: 3rem;
  --sl-font-size-4x-large: 4.5rem;

  --sl-font-weight-light: 300;
  --sl-font-weight-normal: 400;
  --sl-font-weight-semibold: 500;
  --sl-font-weight-bold: 700;

  --sl-letter-spacing-denser: -0.03em;
  --sl-letter-spacing-dense: -0.015em;
  --sl-letter-spacing-normal: normal;
  --sl-letter-spacing-loose: 0.075em;
  --sl-letter-spacing-looser: 0.15em;

  --sl-line-height-denser: 1;
  --sl-line-height-dense: 1.4;
  --sl-line-height-normal: 1.8;
  --sl-line-height-loose: 2.2;
  --sl-line-height-looser: 2.6;

  --sl-focus-ring-color: var(--sl-color-primary-600);
  --sl-focus-ring-style: solid;
  --sl-focus-ring-width: 3px;
  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)
    var(--sl-focus-ring-color);
  --sl-focus-ring-offset: 1px;

  --sl-button-font-size-small: var(--sl-font-size-x-small);
  --sl-button-font-size-medium: var(--sl-font-size-small);
  --sl-button-font-size-large: var(--sl-font-size-medium);

  --sl-input-height-small: 1.875rem;
  --sl-input-height-medium: 2.5rem;
  --sl-input-height-large: 3.125rem;

  --sl-input-background-color: var(--sl-color-neutral-0);
  --sl-input-background-color-hover: var(--sl-input-background-color);
  --sl-input-background-color-focus: var(--sl-input-background-color);
  --sl-input-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-border-color: var(--sl-color-neutral-300);
  --sl-input-border-color-hover: var(--sl-color-neutral-400);
  --sl-input-border-color-focus: var(--sl-color-primary-500);
  --sl-input-border-color-disabled: var(--sl-color-neutral-300);
  --sl-input-border-width: 1px;
  --sl-input-required-content: "*";
  --sl-input-required-content-offset: -2px;
  --sl-input-required-content-color: var(--sl-input-label-color);

  --sl-input-border-radius-small: var(--sl-border-radius-medium);
  --sl-input-border-radius-medium: var(--sl-border-radius-medium);
  --sl-input-border-radius-large: var(--sl-border-radius-medium);

  --sl-input-font-family: var(--sl-font-sans);
  --sl-input-font-weight: var(--sl-font-weight-normal);
  --sl-input-font-size-small: var(--sl-font-size-small);
  --sl-input-font-size-medium: var(--sl-font-size-medium);
  --sl-input-font-size-large: var(--sl-font-size-large);
  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

  --sl-input-color: var(--sl-color-neutral-700);
  --sl-input-color-hover: var(--sl-color-neutral-700);
  --sl-input-color-focus: var(--sl-color-neutral-700);
  --sl-input-color-disabled: var(--sl-color-neutral-900);
  --sl-input-icon-color: var(--sl-color-neutral-500);
  --sl-input-icon-color-hover: var(--sl-color-neutral-600);
  --sl-input-icon-color-focus: var(--sl-color-neutral-600);
  --sl-input-placeholder-color: var(--sl-color-neutral-500);
  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
  --sl-input-spacing-small: var(--sl-spacing-small);
  --sl-input-spacing-medium: var(--sl-spacing-medium);
  --sl-input-spacing-large: var(--sl-spacing-large);

  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
  --sl-input-focus-ring-offset: 0;

  --sl-input-filled-background-color: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-filled-color: var(--sl-color-neutral-800);
  --sl-input-filled-color-hover: var(--sl-color-neutral-800);
  --sl-input-filled-color-focus: var(--sl-color-neutral-700);
  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

  --sl-input-label-font-size-small: var(--sl-font-size-small);
  --sl-input-label-font-size-medium: var(--sl-font-size-medium);
  --sl-input-label-font-size-large: var(--sl-font-size-large);
  --sl-input-label-color: inherit;

  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);
  --sl-input-help-text-color: var(--sl-color-neutral-500);

  --sl-toggle-size-small: 0.875rem;
  --sl-toggle-size-medium: 1.125rem;
  --sl-toggle-size-large: 1.375rem;

  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

  --sl-panel-background-color: var(--sl-color-neutral-0);
  --sl-panel-border-color: var(--sl-color-neutral-200);
  --sl-panel-border-width: 1px;

  --sl-tooltip-border-radius: var(--sl-border-radius-medium);
  --sl-tooltip-background-color: var(--sl-color-neutral-800);
  --sl-tooltip-color: var(--sl-color-neutral-0);
  --sl-tooltip-font-family: var(--sl-font-sans);
  --sl-tooltip-font-weight: var(--sl-font-weight-normal);
  --sl-tooltip-font-size: var(--sl-font-size-small);
  --sl-tooltip-line-height: var(--sl-line-height-dense);
  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
  --sl-tooltip-arrow-size: 6px;

  --sl-z-index-drawer: 700;
  --sl-z-index-dialog: 800;
  --sl-z-index-dropdown: 900;
  --sl-z-index-toast: 950;
  --sl-z-index-tooltip: 1000;
}

@supports (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    scrollbar-gutter: stable !important;
    overflow: hidden !important;
  }
}

@supports not (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    padding-right: var(--sl-scroll-lock-size) !important;
    overflow: hidden !important;
  }
}

.sl-toast-stack {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  z-index: var(--sl-z-index-toast);
  width: 28rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.sl-toast-stack sl-alert {
  margin: var(--sl-spacing-medium);
}

.sl-toast-stack sl-alert::part(base) {
  box-shadow: var(--sl-shadow-large);
}

body {
  font: 14px var(--sl-font-sans);
  background-color: var(--sl-color-neutral-0);
  color: var(--sl-color-neutral-900);
  padding: 1rem;
}

.chapter-select {
  display: flex;
  padding: 0 8px 0 24px;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
  background: var(--sl-color-neutral-50, #F9F9F9);

  > div {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .active {
    border-radius: 4px;
    background: var(--sl-color-amber-100, #FEF3C7);
  }

  :hover {
    background: var(--sl-color-amber-50);
  }
}
`,"top");
//# sourceMappingURL=index.cjs.map
