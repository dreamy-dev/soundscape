var Do=Object.defineProperty,jo=Object.defineProperties;var Ho=Object.getOwnPropertyDescriptors;var je=Object.getOwnPropertySymbols;var Io=Object.prototype.hasOwnProperty,zo=Object.prototype.propertyIsEnumerable;var He=(e,t,r)=>t in e?Do(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ie=(e,t)=>{for(var r in t||(t={}))Io.call(t,r)&&He(e,r,t[r]);if(je)for(var r of je(t))zo.call(t,r)&&He(e,r,t[r]);return e},ze=(e,t)=>jo(e,Ho(t));const Vo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};Vo();const Fo="modulepreload",Ve={},Wo="/soundscape/",qo=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${Wo}${o}`,o in Ve)return;Ve[o]=!0;const i=o.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":Fo,i||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),i)return new Promise((d,a)=>{s.addEventListener("load",d),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=window,Ae=Rt.ShadowRoot&&(Rt.ShadyCSS===void 0||Rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),Fe=new WeakMap;class Vr{constructor(t,r,o){if(this._$cssResult$=!0,o!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ae&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Fe.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Fe.set(r,t))}return t}toString(){return this.cssText}}const Ko=e=>new Vr(typeof e=="string"?e:e+"",void 0,Ce),dt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new Vr(r,e,Ce)},Jo=(e,t)=>{Ae?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=Rt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},We=Ae?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Ko(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xt;const Bt=window,qe=Bt.trustedTypes,Yo=qe?qe.emptyScript:"",Ke=Bt.reactiveElementPolyfillSupport,pe={toAttribute(e,t){switch(t){case Boolean:e=e?Yo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Fr=(e,t)=>t!==e&&(t==t||e==e),Zt={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Fr};class Y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;(r=this.h)!==null&&r!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const i=this._$Ep(o,r);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,r=Zt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(i){const n=this[t];this[r]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Zt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of o)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(We(i))}else t!==void 0&&r.push(We(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Jo(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=Zt){var i;const n=this.constructor._$Ep(t,o);if(n!==void 0&&o.reflect===!0){const s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:pe).toAttribute(r,o.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,r){var o;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const s=i.getPropertyOptions(n),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:pe;this._$El=n,this[n]=d.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Fr)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Y.finalized=!0,Y.elementProperties=new Map,Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Ke==null||Ke({ReactiveElement:Y}),((Xt=Bt.reactiveElementVersions)!==null&&Xt!==void 0?Xt:Bt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt;const Dt=window,et=Dt.trustedTypes,Je=et?et.createPolicy("lit-html",{createHTML:e=>e}):void 0,D=`lit$${(Math.random()+"").slice(9)}$`,Wr="?"+D,Go=`<${Wr}>`,rt=document,_t=(e="")=>rt.createComment(e),yt=e=>e===null||typeof e!="object"&&typeof e!="function",qr=Array.isArray,Xo=e=>qr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,Ge=/>/g,z=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Ze=/"/g,Kr=/^(?:script|style|textarea|title)$/i,Zo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),F=Zo(1),ot=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Qe=new WeakMap,Qo=(e,t,r)=>{var o,i;const n=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=n._$litPart$;if(s===void 0){const d=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new Ct(t.insertBefore(_t(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},Q=rt.createTreeWalker(rt,129,null,!1),ti=(e,t)=>{const r=e.length-1,o=[];let i,n=t===2?"<svg>":"",s=ht;for(let a=0;a<r;a++){const l=e[a];let h,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===ht?c[1]==="!--"?s=Ye:c[1]!==void 0?s=Ge:c[2]!==void 0?(Kr.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=z):c[3]!==void 0&&(s=z):s===z?c[0]===">"?(s=i!=null?i:ht,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,h=c[1],s=c[3]===void 0?z:c[3]==='"'?Ze:Xe):s===Ze||s===Xe?s=z:s===Ye||s===Ge?s=ht:(s=z,i=void 0);const f=s===z&&e[a+1].startsWith("/>")?" ":"";n+=s===ht?l+Go:u>=0?(o.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+D+f):l+D+(u===-2?(o.push(void 0),a):f)}const d=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Je!==void 0?Je.createHTML(d):d,o]};class $t{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const d=t.length-1,a=this.parts,[l,h]=ti(t,r);if(this.el=$t.createElement(l,o),Q.currentNode=this.el.content,r===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(i=Q.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(D)){const p=h[s++];if(c.push(u),p!==void 0){const f=i.getAttribute(p.toLowerCase()+"$lit$").split(D),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?ri:m[1]==="?"?ii:m[1]==="@"?ni:qt})}else a.push({type:6,index:n})}for(const u of c)i.removeAttribute(u)}if(Kr.test(i.tagName)){const c=i.textContent.split(D),u=c.length-1;if(u>0){i.textContent=et?et.emptyScript:"";for(let p=0;p<u;p++)i.append(c[p],_t()),Q.nextNode(),a.push({type:2,index:++n});i.append(c[u],_t())}}}else if(i.nodeType===8)if(i.data===Wr)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(D,c+1))!==-1;)a.push({type:7,index:n}),c+=D.length-1}n++}}static createElement(t,r){const o=rt.createElement("template");return o.innerHTML=t,o}}function it(e,t,r=e,o){var i,n,s,d;if(t===ot)return t;let a=o!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[o]:r._$Cu;const l=yt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=it(e,a._$AS(e,t.values),a,o)),t}class ei{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:o},parts:i}=this._$AD,n=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:rt).importNode(o,!0);Q.currentNode=n;let s=Q.nextNode(),d=0,a=0,l=i[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new Ct(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new si(s,this,t)),this.v.push(h),l=i[++a]}d!==(l==null?void 0:l.index)&&(s=Q.nextNode(),d++)}return n}m(t){let r=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class Ct{constructor(t,r,o,i){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$C_=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$C_}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=it(this,t,r),yt(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==ot&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Xo(t)?this.O(t):this.$(t)}S(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==x&&yt(this._$AH)?this._$AA.nextSibling.data=t:this.k(rt.createTextNode(t)),this._$AH=t}T(t){var r;const{values:o,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=$t.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===n)this._$AH.m(o);else{const s=new ei(n,this),d=s.p(this.options);s.m(o),this.k(d),this._$AH=s}}_$AC(t){let r=Qe.get(t.strings);return r===void 0&&Qe.set(t.strings,r=new $t(t)),r}O(t){qr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of t)i===r.length?r.push(o=new Ct(this.S(_t()),this.S(_t()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$C_=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class qt{constructor(t,r,o,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)t=it(this,t,r,0),s=!yt(t)||t!==this._$AH&&t!==ot,s&&(this._$AH=t);else{const d=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=it(this,d[o+a],r,a),l===ot&&(l=this._$AH[a]),s||(s=!yt(l)||l!==this._$AH[a]),l===x?t=x:t!==x&&(t+=(l!=null?l:"")+n[a+1]),this._$AH[a]=l}s&&!i&&this.P(t)}P(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ri extends qt{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===x?void 0:t}}const oi=et?et.emptyScript:"";class ii extends qt{constructor(){super(...arguments),this.type=4}P(t){t&&t!==x?this.element.setAttribute(this.name,oi):this.element.removeAttribute(this.name)}}class ni extends qt{constructor(t,r,o,i,n){super(t,r,o,i,n),this.type=5}_$AI(t,r=this){var o;if((t=(o=it(this,t,r,0))!==null&&o!==void 0?o:x)===ot)return;const i=this._$AH,n=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==x&&(i===x||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class si{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const tr=Dt.litHtmlPolyfillSupport;tr==null||tr($t,Ct),((Qt=Dt.litHtmlVersions)!==null&&Qt!==void 0?Qt:Dt.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var te,ee;class M extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Qo(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return ot}}M.finalized=!0,M._$litElement$=!0,(te=globalThis.litElementHydrateSupport)===null||te===void 0||te.call(globalThis,{LitElement:M});const er=globalThis.litElementPolyfillSupport;er==null||er({LitElement:M});((ee=globalThis.litElementVersions)!==null&&ee!==void 0?ee:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ze(Ie({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function P(e){return(t,r)=>r!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(e,t,r):ai(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re;((re=window.HTMLSlotElement)===null||re===void 0?void 0:re.prototype.assignedElements)!=null;function jt(e){return e=e||[],Array.isArray(e)?e:[e]}function N(e){return`[Vaadin.Router] ${e}`}function li(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Ht="module",It="nomodule",fe=[Ht,It];function rr(e){if(!e.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function Jr(e){if(!e||!T(e.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!W(e.action)&&!Array.isArray(e.children)&&!W(e.children)&&!zt(t)&&!r.some(o=>T(e[o])))throw new Error(N(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(T(t))rr(t);else if(fe.some(o=>o in t))fe.forEach(o=>o in t&&rr(t[o]));else throw new Error(N('Expected route bundle to include either "'+It+'" or "'+Ht+'" keys, or both'));e.redirect&&["bundle","component"].forEach(o=>{o in e&&console.warn(N(`Route config "${e.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function or(e){jt(e).forEach(t=>Jr(t))}function ir(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Ht?r.setAttribute("type",Ht):t===It&&r.setAttribute(It,""),r.async=!0),new Promise((o,i)=>{r.onreadystatechange=r.onload=n=>{r.__dynamicImportLoaded=!0,o(n)},r.onerror=n=>{r.parentNode&&r.parentNode.removeChild(r),i(n)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&o()})}function di(e){return T(e)?ir(e):Promise.race(fe.filter(t=>t in e).map(t=>ir(e[t],t)))}function mt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function zt(e){return typeof e=="object"&&!!e}function W(e){return typeof e=="function"}function T(e){return typeof e=="string"}function Yr(e){const t=new Error(N(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const X=new class{};function ci(e){const t=e.port,r=e.protocol,n=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${n}`}function nr(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let d=0;d<r.length;d++){const a=r[d];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||ci(t))!==window.location.origin)return;const{pathname:i,search:n,hash:s}=t;mt("go",{pathname:i,search:n,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const ui={activate(){window.document.addEventListener("click",nr)},inactivate(){window.document.removeEventListener("click",nr)}},hi=/Trident/.test(navigator.userAgent);hi&&!W(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function sr(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:o}=window.location;mt("go",{pathname:t,search:r,hash:o})}const pi={activate(){window.addEventListener("popstate",sr)},inactivate(){window.removeEventListener("popstate",sr)}};var ct=eo,fi=Pe,mi=_i,vi=Zr,gi=to,Gr="/",Xr="./",bi=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Pe(e,t){for(var r=[],o=0,i=0,n="",s=t&&t.delimiter||Gr,d=t&&t.delimiters||Xr,a=!1,l;(l=bi.exec(e))!==null;){var h=l[0],c=l[1],u=l.index;if(n+=e.slice(i,u),i=u+h.length,c){n+=c[1],a=!0;continue}var p="",f=e[i],m=l[2],E=l[3],k=l[4],A=l[5];if(!a&&n.length){var S=n.length-1;d.indexOf(n[S])>-1&&(p=n[S],n=n.slice(0,S))}n&&(r.push(n),n="",a=!1);var Mo=p!==""&&f!==void 0&&f!==p,Lo=A==="+"||A==="*",Bo=A==="?"||A==="*",Be=p||s,De=E||k;r.push({name:m||o++,prefix:p,delimiter:Be,optional:Bo,repeat:Lo,partial:Mo,pattern:De?yi(De):"[^"+B(Be)+"]+?"})}return(n||i<e.length)&&r.push(n+e.substr(i)),r}function _i(e,t){return Zr(Pe(e,t))}function Zr(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(o,i){for(var n="",s=i&&i.encode||encodeURIComponent,d=0;d<e.length;d++){var a=e[d];if(typeof a=="string"){n+=a;continue}var l=o?o[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(h=s(l[c],a),!t[d].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(c===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=s(String(l),a),!t[d].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function B(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function yi(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Qr(e){return e&&e.sensitive?"":"i"}function $i(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function wi(e,t,r){for(var o=[],i=0;i<e.length;i++)o.push(eo(e[i],t,r).source);return new RegExp("(?:"+o.join("|")+")",Qr(r))}function xi(e,t,r){return to(Pe(e,r),t,r)}function to(e,t,r){r=r||{};for(var o=r.strict,i=r.start!==!1,n=r.end!==!1,s=B(r.delimiter||Gr),d=r.delimiters||Xr,a=[].concat(r.endsWith||[]).map(B).concat("$").join("|"),l=i?"^":"",h=e.length===0,c=0;c<e.length;c++){var u=e[c];if(typeof u=="string")l+=B(u),h=c===e.length-1&&d.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+B(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?l+=B(u.prefix)+"("+p+")?":l+="(?:"+B(u.prefix)+"("+p+"))?":l+=B(u.prefix)+"("+p+")"}}return n?(o||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(o||(l+="(?:"+s+"(?="+a+"))?"),h||(l+="(?="+s+"|"+a+")")),new RegExp(l,Qr(r))}function eo(e,t,r){return e instanceof RegExp?$i(e,t):Array.isArray(e)?wi(e,t,r):xi(e,t,r)}ct.parse=fi;ct.compile=mi;ct.tokensToFunction=vi;ct.tokensToRegExp=gi;const{hasOwnProperty:Si}=Object.prototype,me=new Map;me.set("|false",{keys:[],pattern:/(?:)/});function ar(e){try{return decodeURIComponent(e)}catch{return e}}function Ei(e,t,r,o,i){r=!!r;const n=`${e}|${r}`;let s=me.get(n);if(!s){const l=[];s={keys:l,pattern:ct(e,l,{end:r,strict:e===""})},me.set(n,s)}const d=s.pattern.exec(t);if(!d)return null;const a=Object.assign({},i);for(let l=1;l<d.length;l++){const h=s.keys[l-1],c=h.name,u=d[l];(u!==void 0||!Si.call(a,c))&&(h.repeat?a[c]=u?u.split(h.delimiter).map(ar):[]:a[c]=u&&ar(u))}return{path:d[0],keys:(o||[]).concat(s.keys),params:a}}function ro(e,t,r,o,i){let n,s,d=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!n&&(n=Ei(a,t,!h,o,i),n))return{done:!1,value:{route:e,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;d<h.length;){if(!s){const u=h[d];u.parent=e;let p=n.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=ro(u,t.substr(p),r,n.keys,n.params)}const c=s.next(l);if(!c.done)return{done:!1,value:c.value};s=null,d++}return{done:!0}}}}function Ai(e){if(W(e.route.action))return e.route.action(e)}function Ci(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function Pi(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function ki(e,t){const{route:r,path:o}=t;if(r&&!r.__synthetic){const i={path:o,route:r};if(!e.chain)e.chain=[];else if(r.parent){let n=e.chain.length;for(;n--&&e.chain[n].route&&e.chain[n].route!==r.parent;)e.chain.pop()}e.chain.push(i)}}class wt{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||Ai,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){or(t);const r=[...jt(t)];this.root.__children=r}addRoutes(t){return or(t),this.root.__children.push(...jt(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,T(t)?{pathname:t}:t),o=ro(this.root,this.__normalizePathname(r.pathname),this.baseUrl),i=this.resolveRoute;let n=null,s=null,d=r;function a(l,h=n.value.route,c){const u=c===null&&n.value.route;return n=s||o.next(u),s=null,!l&&(n.done||!Ci(h,n.value.route))?(s=n,Promise.resolve(X)):n.done?Promise.reject(Yr(r)):(d=Object.assign(d?{chain:d.chain?d.chain.slice(0):[]}:{},r,n.value),ki(d,n.value),Promise.resolve(i(d)).then(p=>p!=null&&p!==X?(d.result=p.result||p,d):a(l,h,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Pi(d);if(l?console.warn(h):l=new Error(h),l.context=l.context||d,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return d.result=this.errorHandler(l),d;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=this.constructor.__createUrl(t,r).href;if(o.slice(0,r.length)===r)return o.slice(r.length)}}wt.pathToRegexp=ct;const{pathToRegexp:lr}=wt,dr=new Map;function oo(e,t,r){const o=t.name||t.component;if(o&&(e.has(o)?e.get(o).push(t):e.set(o,[t])),Array.isArray(r))for(let i=0;i<r.length;i++){const n=r[i];n.parent=t,oo(e,n,n.__children||n.children)}}function cr(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function ur(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Oi(e,t={}){if(!(e instanceof wt))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(o,i)=>{let n=cr(r,o);if(!n&&(r.clear(),oo(r,e.root,e.root.__children),n=cr(r,o),!n))throw new Error(`Route "${o}" not found`);let s=dr.get(n.fullPath);if(!s){let a=ur(n),l=n.parent;for(;l;){const p=ur(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=lr.parse(a),c=lr.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)T(h[p])||(u[h[p].name]=!0);s={toPath:c,keys:u},dr.set(a,s),n.fullPath=a}let d=s.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const a={},l=Object.keys(i);for(let c=0;c<l.length;c++){const u=l[c];s.keys[u]||(a[u]=i[u])}const h=t.stringifyQueryParams(a);h&&(d+=h.charAt(0)==="?"?h:`?${h}`)}return d}}let hr=[];function Ti(e){hr.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),hr=e}const Ni=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Ri=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function pr(e,t){return e.classList.add(t),new Promise(r=>{if(Ni(e)){const o=e.getBoundingClientRect(),i=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${i}`),Ri(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const Ui=256;function oe(e){return e!=null}function Mi(e){const t=Object.assign({},e);return delete t.next,t}function O({pathname:e="",search:t="",hash:r="",chain:o=[],params:i={},redirectFrom:n,resolver:s},d){const a=o.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:d||a.length&&a[a.length-1]||null,params:i,redirectFrom:n,getUrl:(l={})=>Mt(I.pathToRegexp.compile(io(a))(Object.assign({},i,l)),s)}}function fr(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Li(e,t){t.location=O(e);const r=e.chain.map(o=>o.route).indexOf(e.route);return e.chain[r].element=t,t}function Ut(e,t,r){if(W(e))return e.apply(r,t)}function mr(e,t,r){return o=>{if(o&&(o.cancel||o.redirect))return o;if(r)return Ut(r[e],t,r)}}function Bi(e,t){if(!Array.isArray(e)&&!zt(e))throw new Error(N(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=jt(e);for(let o=0;o<r.length;o++)Jr(r[o]),t.__children.push(r[o])}function Nt(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function Mt(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function io(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class I extends wt{constructor(t,r){const o=document.head.querySelector("base"),i=o&&o.getAttribute("href");super([],Object.assign({baseUrl:i&&wt.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const n=I.NavigationTrigger;I.setTriggers.apply(I,Object.keys(n).map(s=>n[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=O({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let o=Promise.resolve();W(r.children)&&(o=o.then(()=>r.children(Mi(t))).then(n=>{!oe(n)&&!W(r.children)&&(n=r.children),Bi(n,r)}));const i={redirect:n=>fr(t,n),component:n=>{const s=document.createElement(n);return this.__createdByRouter.set(s,!0),s}};return o.then(()=>{if(this.__isLatestRender(t))return Ut(r.action,[t,i],r)}).then(n=>{if(oe(n)&&(n instanceof HTMLElement||n.redirect||n===X))return n;if(T(r.redirect))return i.redirect(r.redirect);if(r.bundle)return di(r.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(n=>{if(oe(n))return n;if(T(r.component))return i.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const o=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},T(t)?{pathname:t}:t,{__renderId:o});return this.ready=this.resolve(i).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const s=this.__previousContext;if(n===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=O(n),r&&this.__updateBrowserHistory(n,o===1),mt("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,s),this.__previousContext=n,this.location;this.__addAppearingContent(n,s);const d=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,s),d.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(o===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(i),Nt(this.__outlet&&this.__outlet.children),this.location=O(Object.assign(i,{resolver:this})),mt("error",Object.assign({router:this,error:n},i)),n}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(o=>{const n=o!==r?o:t,d=Mt(io(o.chain),o.resolver)===o.pathname,a=(l,h=l.route,c)=>l.next(void 0,h,c).then(u=>u===null||u===X?d?l:h.parent!==null?a(l,h.parent,u):u:u);return a(o).then(l=>{if(l===null||l===X)throw Yr(n);return l&&l!==X&&l!==o?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Li(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(N(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${li(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},o=r.chain||[],i=t.chain;let n=Promise.resolve();const s=()=>({cancel:!0}),d=a=>fr(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let a=0;a<Math.min(o.length,i.length)&&!(o[a].route!==i[a].route||o[a].path!==i[a].path&&o[a].element!==i[a].element||!this.__isReusableElement(o[a].element,i[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=i.length===o.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=i.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},o[a]);for(let a=0;a<i.length;a++)n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:d},i[a]),o[a].element.location=O(t,o[a].route)}else for(let a=o.length-1;a>=t.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},o[a])}if(!t.__skipAttach)for(let a=0;a<i.length;a++)a<t.__divergedChainIndex?a<o.length&&o[a].element&&(o[a].element.location=O(t,o[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:d},i[a]),i[a].element&&(i[a].element.location=O(t,i[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,o,i){const n=O(r);return t.then(s=>{if(this.__isLatestRender(r))return mr("onBeforeLeave",[n,o,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,o,i){const n=O(r,i.route);return t.then(s=>{if(this.__isLatestRender(r))return mr("onBeforeEnter",[n,o,this],i.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,o){if(r>Ui)throw new Error(N(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:o})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:o=""},i){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const n=i?"replaceState":"pushState";window.history[n](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let o=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const n=r&&r.chain[i].element;if(n)if(n.parentNode===o)t.chain[i].element=n,o=n;else break}return o}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(n=>this.__addedByRouter.get(n)&&n!==t.result);let i=o;for(let n=t.__divergedChainIndex;n<t.chain.length;n++){const s=t.chain[n].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===o&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&Nt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Nt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.__isLatestRender(t);o--){const i=r.chain[o].element;if(!!i)try{const n=O(t);Ut(i.onAfterLeave,[n,{},r.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Nt(i.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const o=t.chain[r].element||{},i=O(t,t.chain[r].route);Ut(o.onAfterEnter,[i,{},t.resolver],o)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],i=[],n=t.chain;let s;for(let d=n.length;d>0;d--)if(n[d-1].route.animate){s=n[d-1].route.animate;break}if(r&&o&&s){const d=zt(s)&&s.leave||"leaving",a=zt(s)&&s.enter||"entering";i.push(pr(r,d)),i.push(pr(o,a))}return Promise.all(i).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:o,hash:i}=t?t.detail:window.location;T(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:i},!0))}static setTriggers(...t){Ti(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Oi(this)),Mt(this.__urlForName(t,r),this)}urlForPath(t,r){return Mt(I.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:o,hash:i}=T(t)?this.__createUrl(t,"http://a"):t;return mt("go",{pathname:r,search:o,hash:i})}}const Di=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Lt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ji(){function e(){return!0}return no(e)}function Hi(){try{return Ii()?!0:zi()?Lt?!Vi():!ji():!1}catch{return!1}}function Ii(){return localStorage.getItem("vaadin.developmentmode.force")}function zi(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Vi(){return!!(Lt&&Object.keys(Lt).map(t=>Lt[t]).filter(t=>t.productionMode).length>0)}function no(e,t){if(typeof e!="function")return;const r=Di.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const vr=function(e,t){if(window.Vaadin.developmentMode)return no(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Hi());function Fi(){}const Wi=function(){if(typeof vr=="function")return vr(Fi)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Wi();I.NavigationTrigger={POPSTATE:pi,CLICK:ui};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const gr=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,ve=(e,t,r=null)=>{for(;t!==r;){const o=t.nextSibling;e.removeChild(t),t=o}},L=`{{lit-${String(Math.random()).slice(2)}}}`,so=`<!--${L}-->`,br=new RegExp(`${L}|${so}`);class ao{constructor(t,r){this.parts=[],this.element=r;const o=[],i=[],n=document.createTreeWalker(r.content,133,null,!1);let s=0,d=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const c=n.nextNode();if(c!==null){if(d++,c.nodeType===1){if(c.hasAttributes()){const u=c.attributes,{length:p}=u;let f=0;for(let m=0;m<p;m++)_r(u[m].name,"$lit$")&&f++;for(;f-- >0;){const m=l[a],E=ge.exec(m)[2],k=E.toLowerCase()+"$lit$",A=c.getAttribute(k);c.removeAttribute(k);const S=A.split(br);this.parts.push({type:"attribute",index:d,name:E,strings:S}),a+=S.length-1}}c.tagName==="TEMPLATE"&&(i.push(c),n.currentNode=c.content)}else if(c.nodeType===3){const u=c.data;if(u.indexOf(L)>=0){const p=c.parentNode,f=u.split(br),m=f.length-1;for(let E=0;E<m;E++){let k,A=f[E];if(A==="")k=j();else{const S=ge.exec(A);S!==null&&_r(S[2],"$lit$")&&(A=A.slice(0,S.index)+S[1]+S[2].slice(0,-5)+S[3]),k=document.createTextNode(A)}p.insertBefore(k,c),this.parts.push({type:"node",index:++d})}f[m]===""?(p.insertBefore(j(),c),o.push(c)):c.data=f[m],a+=m}}else if(c.nodeType===8)if(c.data===L){const u=c.parentNode;c.previousSibling!==null&&d!==s||(d++,u.insertBefore(j(),c)),s=d,this.parts.push({type:"node",index:d}),c.nextSibling===null?c.data="":(o.push(c),d--),a++}else{let u=-1;for(;(u=c.data.indexOf(L,u+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const c of o)c.parentNode.removeChild(c)}}const _r=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},lo=e=>e.index!==-1,j=()=>document.createComment(""),ge=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function yr(e,t){const{element:{content:r},parts:o}=e,i=document.createTreeWalker(r,133,null,!1);let n=vt(o),s=o[n],d=-1,a=0;const l=[];let h=null;for(;i.nextNode();){d++;const c=i.currentNode;for(c.previousSibling===h&&(h=null),t.has(c)&&(l.push(c),h===null&&(h=c)),h!==null&&a++;s!==void 0&&s.index===d;)s.index=h!==null?-1:s.index-a,n=vt(o,n),s=o[n]}l.forEach(c=>c.parentNode.removeChild(c))}const qi=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},vt=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const o=e[r];if(lo(o))return r}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ki=new WeakMap,xt=e=>typeof e=="function"&&Ki.has(e),R={},$r={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class be{constructor(t,r,o){this.__parts=[],this.template=t,this.processor=r,this.options=o}update(t){let r=0;for(const o of this.__parts)o!==void 0&&o.setValue(t[r]),r++;for(const o of this.__parts)o!==void 0&&o.commit()}_clone(){const t=gr?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],o=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,s=0,d=0,a=i.nextNode();for(;s<o.length;)if(n=o[s],lo(n)){for(;d<n.index;)d++,a.nodeName==="TEMPLATE"&&(r.push(a),i.currentNode=a.content),(a=i.nextNode())===null&&(i.currentNode=r.pop(),a=i.nextNode());if(n.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return gr&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ji=` ${L} `;class co{constructor(t,r,o,i){this.strings=t,this.values=r,this.type=o,this.processor=i}getHTML(){const t=this.strings.length-1;let r="",o=!1;for(let i=0;i<t;i++){const n=this.strings[i],s=n.lastIndexOf("<!--");o=(s>-1||o)&&n.indexOf("-->",s+1)===-1;const d=ge.exec(n);r+=d===null?n+(o?Ji:so):n.substr(0,d.index)+d[1]+d[2]+"$lit$"+d[3]+L}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ke=e=>e===null||!(typeof e=="object"||typeof e=="function"),uo=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ho{constructor(t,r,o){this.dirty=!0,this.element=t,this.name=r,this.strings=o,this.parts=[];for(let i=0;i<o.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new po(this)}_getValue(){const t=this.strings,r=t.length-1;let o="";for(let i=0;i<r;i++){o+=t[i];const n=this.parts[i];if(n!==void 0){const s=n.value;if(ke(s)||!uo(s))o+=typeof s=="string"?s:String(s);else for(const d of s)o+=typeof d=="string"?d:String(d)}}return o+=t[r],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class po{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===R||ke(t)&&t===this.value||(this.value=t,xt(t)||(this.committer.dirty=!0))}commit(){for(;xt(this.value);){const t=this.value;this.value=R,t(this)}this.value!==R&&this.committer.commit()}}class Kt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(j()),this.endNode=t.appendChild(j())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=j()),t.__insert(this.endNode=j())}insertAfterPart(t){t.__insert(this.startNode=j()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;xt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=R,r(this)}const t=this.__pendingValue;t!==R&&(ke(t)?t!==this.value&&this.__commitText(t):t instanceof co?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):uo(t)?this.__commitIterable(t):t===$r?(this.value=$r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,o=typeof(t=t==null?"":t)=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof be&&this.value.template===r)this.value.update(t.values);else{const o=new be(r,t.processor,this.options),i=o._clone();o.update(t.values),this.__commitNode(i),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let o,i=0;for(const n of t)o=r[i],o===void 0&&(o=new Kt(this.options),r.push(o),i===0?o.appendIntoPart(this):o.insertAfterPart(r[i-1])),o.setValue(n),o.commit(),i++;i<r.length&&(r.length=i,this.clear(o&&o.endNode))}clear(t=this.startNode){ve(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Yi{constructor(t,r,o){if(this.value=void 0,this.__pendingValue=void 0,o.length!==2||o[0]!==""||o[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;xt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=R,r(this)}if(this.__pendingValue===R)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=R}}class Gi extends ho{constructor(t,r,o){super(t,r,o),this.single=o.length===2&&o[0]===""&&o[1]===""}_createPart(){return new Xi(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Xi extends po{}let fo=!1;(()=>{try{const e={get capture(){return fo=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class Zi{constructor(t,r,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=o,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(t){this.__pendingValue=t}commit(){for(;xt(this.__pendingValue);){const n=this.__pendingValue;this.__pendingValue=R,n(this)}if(this.__pendingValue===R)return;const t=this.__pendingValue,r=this.value,o=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),i=t!=null&&(r==null||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Qi(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=R}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Qi=e=>e&&(fo?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function tn(e){let t=St.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},St.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const o=e.strings.join(L);return r=t.keyString.get(o),r===void 0&&(r=new ao(e,e.getTemplateElement()),t.keyString.set(o,r)),t.stringsArray.set(e.strings,r),r}const St=new Map,J=new WeakMap;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const en=new class{handleAttributeExpressions(e,t,r,o){const i=t[0];return i==="."?new Gi(e,t.slice(1),r).parts:i==="@"?[new Zi(e,t.slice(1),o.eventContext)]:i==="?"?[new Yi(e,t.slice(1),r)]:new ho(e,t,r).parts}handleTextExpression(e){return new Kt(e)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const C=(e,...t)=>new co(e,t,"html",en),mo=(e,t)=>`${e}--${t}`;let Vt=!0;window.ShadyCSS===void 0?Vt=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Vt=!1);const rn=e=>t=>{const r=mo(t.type,e);let o=St.get(r);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},St.set(r,o));let i=o.stringsArray.get(t.strings);if(i!==void 0)return i;const n=t.strings.join(L);if(i=o.keyString.get(n),i===void 0){const s=t.getTemplateElement();Vt&&window.ShadyCSS.prepareTemplateDom(s,e),i=new ao(t,s),o.keyString.set(n,i)}return o.stringsArray.set(t.strings,i),i},on=["html","svg"],vo=new Set,nn=(e,t,r)=>{vo.add(e);const o=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(n===0)return void window.ShadyCSS.prepareTemplateStyles(o,e);const s=document.createElement("style");for(let l=0;l<n;l++){const h=i[l];h.parentNode.removeChild(h),s.textContent+=h.textContent}(l=>{on.forEach(h=>{const c=St.get(mo(h,l));c!==void 0&&c.keyString.forEach(u=>{const{element:{content:p}}=u,f=new Set;Array.from(p.querySelectorAll("style")).forEach(m=>{f.add(m)}),yr(u,f)})})})(e);const d=o.content;r?function(l,h,c=null){const{element:{content:u},parts:p}=l;if(c==null)return void u.appendChild(h);const f=document.createTreeWalker(u,133,null,!1);let m=vt(p),E=0,k=-1;for(;f.nextNode();)for(k++,f.currentNode===c&&(E=qi(h),c.parentNode.insertBefore(h,c));m!==-1&&p[m].index===k;){if(E>0){for(;m!==-1;)p[m].index+=E,m=vt(p,m);return}m=vt(p,m)}}(r,s,d.firstChild):d.insertBefore(s,d.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const a=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){d.insertBefore(s,d.firstChild);const l=new Set;l.add(s),yr(r,l)}};window.JSCompiler_renameProperty=(e,t)=>e;const _e={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},go=(e,t)=>t!==e&&(t==t||e==e),ie={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:go};class bo extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,o)=>{const i=this._attributeNameForProperty(o,r);i!==void 0&&(this._attributeToPropertyMap.set(i,o),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,o)=>this._classProperties.set(o,r))}}static createProperty(t,r=ie){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(i){const n=this[t];this[r]=i,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ie}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const i of o)this.createProperty(i,r[i])}}static _attributeNameForProperty(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,o=go){return o(t,r)}static _propertyValueFromAttribute(t,r){const o=r.type,i=r.converter||_e,n=typeof i=="function"?i:i.fromAttribute;return n?n(t,o):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const o=r.type,i=r.converter;return(i&&i.toAttribute||_e.toAttribute)(t,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const o=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,o)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,o){r!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,r,o=ie){const i=this.constructor,n=i._attributeNameForProperty(t,o);if(n!==void 0){const s=i._propertyValueToAttribute(r,o);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(t);if(i!==void 0){const n=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(r,n),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let o=!0;if(t!==void 0){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],r,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),n.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(o){throw t=!1,this._markUpdated(),o}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,o)=>this._propertyToAttribute(o,this[o],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}bo.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const sn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function w(e){return(t,r)=>r!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(e,t,r):sn(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _o="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yo=Symbol();class wr{constructor(t,r){if(r!==yo)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(_o?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const an=(e,...t)=>{const r=t.reduce((o,i,n)=>o+(s=>{if(s instanceof wr)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new wr(r,yo)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const xr={};class ye extends bo{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(n,s)=>n.reduceRight((d,a)=>Array.isArray(a)?r(a,d):(d.add(a),d),s),o=r(t,new Set),i=[];o.forEach(n=>i.unshift(n)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?_o?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==xr&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(o=>{const i=document.createElement("style");i.textContent=o.cssText,this.renderRoot.appendChild(i)}))}render(){return xr}}ye.finalized=!0,ye.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,i=J.has(t),n=Vt&&t.nodeType===11&&!!t.host,s=n&&!vo.has(o),d=s?document.createDocumentFragment():t;if(((a,l,h)=>{let c=J.get(l);c===void 0&&(ve(l,l.firstChild),J.set(l,c=new Kt(Object.assign({templateFactory:tn},h))),c.appendInto(l)),c.setValue(a),c.commit()})(e,d,Object.assign({templateFactory:rn(o)},r)),s){const a=J.get(d);J.delete(d);const l=a.value instanceof be?a.value.template:void 0;nn(o,d,l),ve(t,t.firstChild),t.appendChild(d),J.set(t,a)}!i&&n&&window.ShadyCSS.styleElement(t.host)};var y=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let _=class extends ye{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return an`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return C`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?C`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?C`<div id="installModalWrapper">${this.openmodal?C`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?C`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>C`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?C`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>C`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?C`<p id="iosText">${this.iosinstallinfotext}</p>`:C`<div id="buttonsContainer">${this.deferredprompt?C`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:C`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var ne;y([w({type:String})],_.prototype,"manifestpath",void 0),y([w({type:String})],_.prototype,"iconpath",void 0),y([w({type:Object})],_.prototype,"manifestdata",void 0),y([w({type:Boolean})],_.prototype,"openmodal",void 0),y([w({type:Boolean})],_.prototype,"showopen",void 0),y([w({type:Boolean})],_.prototype,"isSupportingBrowser",void 0),y([w({type:Boolean})],_.prototype,"isIOS",void 0),y([w({type:Boolean})],_.prototype,"installed",void 0),y([w({type:Boolean})],_.prototype,"hasprompt",void 0),y([w({type:Boolean})],_.prototype,"usecustom",void 0),y([w({type:Array})],_.prototype,"relatedApps",void 0),y([w({type:String})],_.prototype,"explainer",void 0),y([w({type:String})],_.prototype,"featuresheader",void 0),y([w({type:String})],_.prototype,"descriptionheader",void 0),y([w({type:String})],_.prototype,"installbuttontext",void 0),y([w({type:String})],_.prototype,"cancelbuttontext",void 0),y([w({type:String})],_.prototype,"iosinstallinfotext",void 0),y([w()],_.prototype,"deferredprompt",void 0),_=y([(ne="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(ne,e):((t,r)=>{const{kind:o,elements:i}=r;return{kind:o,elements:i,finisher(n){window.customElements.define(t,n)}}})(ne,e))],_);var Oe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),Sr=new Map,$o=class{constructor(e,t){if(this._$cssResult$=!0,t!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Sr.get(this.cssText);return Oe&&e===void 0&&(Sr.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},ln=e=>new $o(typeof e=="string"?e:e+"",Te),Jt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new $o(r,Te)},dn=(e,t)=>{Oe?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=window.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},Er=Oe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return ln(r)})(e):e,se,Ar=window.trustedTypes,cn=Ar?Ar.emptyScript:"",Cr=window.reactiveElementPolyfillSupport,$e={toAttribute(e,t){switch(t){case Boolean:e=e?cn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},wo=(e,t)=>t!==e&&(t==t||e==e),ae={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:wo},G=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Eh(r,t);o!==void 0&&(this._$Eu.set(o,r),e.push(o))}),e}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ae}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Er(o))}else e!==void 0&&t.push(Er(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return dn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=ae){var o,i;const n=this.constructor._$Eh(e,r);if(n!==void 0&&r.reflect===!0){const s=((i=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&i!==void 0?i:$e.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(e,t){var r,o,i;const n=this.constructor,s=n._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const d=n.getPropertyOptions(s),a=d.converter,l=(i=(o=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof a=="function"?a:null)!==null&&i!==void 0?i:$e.fromAttribute;this._$Ei=s,this[s]=l(t,d.type),this._$Ei=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||wo)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,i)=>this[i]=o),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};G.finalized=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},Cr==null||Cr({ReactiveElement:G}),((se=globalThis.reactiveElementVersions)!==null&&se!==void 0?se:globalThis.reactiveElementVersions=[]).push("1.3.2");var le,nt=globalThis.trustedTypes,Pr=nt?nt.createPolicy("lit-html",{createHTML:e=>e}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,xo="?"+H,un=`<${xo}>`,st=document,Et=(e="")=>st.createComment(e),At=e=>e===null||typeof e!="object"&&typeof e!="function",So=Array.isArray,hn=e=>{var t;return So(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kr=/-->/g,Or=/>/g,V=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Tr=/'/g,Nr=/"/g,Eo=/^(?:script|style|textarea|title)$/i,pn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ne=pn(1),q=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Rr=new WeakMap,fn=(e,t,r)=>{var o,i;const n=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=n._$litPart$;if(s===void 0){const d=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new Yt(t.insertBefore(Et(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},tt=st.createTreeWalker(st,129,null,!1),mn=(e,t)=>{const r=e.length-1,o=[];let i,n=t===2?"<svg>":"",s=pt;for(let a=0;a<r;a++){const l=e[a];let h,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===pt?c[1]==="!--"?s=kr:c[1]!==void 0?s=Or:c[2]!==void 0?(Eo.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=V):c[3]!==void 0&&(s=V):s===V?c[0]===">"?(s=i!=null?i:pt,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,h=c[1],s=c[3]===void 0?V:c[3]==='"'?Nr:Tr):s===Nr||s===Tr?s=V:s===kr||s===Or?s=pt:(s=V,i=void 0);const f=s===V&&e[a+1].startsWith("/>")?" ":"";n+=s===pt?l+un:u>=0?(o.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+H+f):l+H+(u===-2?(o.push(void 0),a):f)}const d=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Pr!==void 0?Pr.createHTML(d):d,o]},Ft=class{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,n=0;const s=e.length-1,d=this.parts,[a,l]=mn(e,t);if(this.el=Ft.createElement(a,r),tt.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(o=tt.nextNode())!==null&&d.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(H)){const u=l[n++];if(h.push(c),u!==void 0){const p=o.getAttribute(u.toLowerCase()+"$lit$").split(H),f=/([.?@])?(.*)/.exec(u);d.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?gn:f[1]==="?"?_n:f[1]==="@"?yn:Gt})}else d.push({type:6,index:i})}for(const c of h)o.removeAttribute(c)}if(Eo.test(o.tagName)){const h=o.textContent.split(H),c=h.length-1;if(c>0){o.textContent=nt?nt.emptyScript:"";for(let u=0;u<c;u++)o.append(h[u],Et()),tt.nextNode(),d.push({type:2,index:++i});o.append(h[c],Et())}}}else if(o.nodeType===8)if(o.data===xo)d.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(H,h+1))!==-1;)d.push({type:7,index:i}),h+=H.length-1}i++}}static createElement(e,t){const r=st.createElement("template");return r.innerHTML=e,r}};function at(e,t,r=e,o){var i,n,s,d;if(t===q)return t;let a=o!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[o]:r._$Cu;const l=At(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=at(e,a._$AS(e,t.values),a,o)),t}var vn=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:o}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:st).importNode(r,!0);tt.currentNode=i;let n=tt.nextNode(),s=0,d=0,a=o[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Yt(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new $n(n,this,e)),this.v.push(l),a=o[++d]}s!==(a==null?void 0:a.index)&&(n=tt.nextNode(),s++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Yt=class{constructor(e,t,r,o){var i;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cg=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=at(this,e,t),At(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==q&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):hn(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==$&&At(this._$AH)?this._$AA.nextSibling.data=e:this.k(st.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ft.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const n=new vn(i,this),s=n.p(this.options);n.m(r),this.k(s),this._$AH=n}}_$AC(e){let t=Rr.get(e.strings);return t===void 0&&Rr.set(e.strings,t=new Ft(e)),t}S(e){So(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new Yt(this.M(Et()),this.M(Et()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Gt=class{constructor(e,t,r,o,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const i=this.strings;let n=!1;if(i===void 0)e=at(this,e,t,0),n=!At(e)||e!==this._$AH&&e!==q,n&&(this._$AH=e);else{const s=e;let d,a;for(e=i[0],d=0;d<i.length-1;d++)a=at(this,s[r+d],t,d),a===q&&(a=this._$AH[d]),n||(n=!At(a)||a!==this._$AH[d]),a===$?e=$:e!==$&&(e+=(a!=null?a:"")+i[d+1]),this._$AH[d]=a}n&&!o&&this.C(e)}C(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},gn=class extends Gt{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===$?void 0:e}},bn=nt?nt.emptyScript:"",_n=class extends Gt{constructor(){super(...arguments),this.type=4}C(e){e&&e!==$?this.element.setAttribute(this.name,bn):this.element.removeAttribute(this.name)}},yn=class extends Gt{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=at(this,e,t,0))!==null&&r!==void 0?r:$)===q)return;const o=this._$AH,i=e===$&&o!==$||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==$&&(o===$||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},$n=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){at(this,e)}},Ur=window.litHtmlPolyfillSupport;Ur==null||Ur(Ft,Yt),((le=globalThis.litHtmlVersions)!==null&&le!==void 0?le:globalThis.litHtmlVersions=[]).push("2.2.4");var de,ce,gt=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=fn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return q}};gt.finalized=!0,gt._$litElement$=!0,(de=globalThis.litElementHydrateSupport)===null||de===void 0||de.call(globalThis,{LitElement:gt});var Mr=globalThis.litElementPolyfillSupport;Mr==null||Mr({LitElement:gt});((ce=globalThis.litElementVersions)!==null&&ce!==void 0?ce:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re=Jt`
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
`,wn=Jt`
  ${Re}

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
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Ao=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},xn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Sn=e=>(...t)=>({_$litDirective$:e,values:t}),En=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Co=Sn(class extends En{constructor(e){var t;if(super(e),e.type!==xn.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.et.add(n);return this.render(t)}const i=e.element.classList;this.et.forEach(n=>{n in t||(i.remove(n),this.et.delete(n))});for(const n in t){const s=!!t[n];s===this.et.has(n)||((o=this.st)===null||o===void 0?void 0:o.has(n))||(s?(i.add(n),this.et.add(n)):(i.remove(n),this.et.delete(n)))}return q}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Po=Object.defineProperty,An=Object.defineProperties,Cn=Object.getOwnPropertyDescriptor,Pn=Object.getOwnPropertyDescriptors,Lr=Object.getOwnPropertySymbols,kn=Object.prototype.hasOwnProperty,On=Object.prototype.propertyIsEnumerable,Br=(e,t,r)=>t in e?Po(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,kt=(e,t)=>{for(var r in t||(t={}))kn.call(t,r)&&Br(e,r,t[r]);if(Lr)for(var r of Lr(t))On.call(t,r)&&Br(e,r,t[r]);return e},Ue=(e,t)=>An(e,Pn(t)),v=(e,t,r,o)=>{for(var i=o>1?void 0:o?Cn(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Po(t,r,i),i},Me=e=>t=>typeof t=="function"?((r,o)=>(window.customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){window.customElements.define(r,s)}}})(e,t),Tn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ue(kt({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function b(e){return(t,r)=>r!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(e,t,r):Tn(e,t)}function Nn(e){return b(Ue(kt({},e),{state:!0}))}var Rn=({finisher:e,descriptor:t})=>(r,o)=>{var i;if(o===void 0){const n=(i=r.originalKey)!==null&&i!==void 0?i:r.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:Ue(kt({},r),{key:n});return e!=null&&(s.finisher=function(d){e(d,n)}),s}{const n=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(n,o)}};function Un(e,t){return Rn({descriptor:r=>{const o={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var n,s;return this[i]===void 0&&(this[i]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null),this[i]}}return o}})}var ue;((ue=window.HTMLSlotElement)===null||ue===void 0?void 0:ue.prototype.assignedElements)!=null;var Ot=class extends gt{};v([b()],Ot.prototype,"dir",2);v([b()],Ot.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we=class extends Ot{constructor(){super(...arguments);this.hasSlotController=new Ao(this,"footer","header","image")}render(){return Ne`
      <div
        part="base"
        class=${Co({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};we.styles=wn;we=v([Me("sl-card")],we);var Mn=Jt`
  ${Re}

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
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
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

  /* When disabled, prevent mouse events from bubbling up */
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

  .button__label ::slotted(sl-icon) {
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
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
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
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
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
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
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
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
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

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ln=class extends Event{constructor(e){super("formdata");this.formData=e}},Bn=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new Ln(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const o=this.getAll(e),i=o.indexOf(r.value);i!==-1&&o.splice(i,1),o.push(t),this.set(e,o)}else super.append(e,t);r.value=t}};function Dn(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function Dr(){!window.FormData||Dn()||(window.FormData=Bn,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?Dr():window.addEventListener("DOMContentLoaded",()=>Dr());var ft=new WeakMap,jn=class{constructor(e,t){(this.host=e).addController(this),this.options=kt({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>{r.value=o}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ft.has(this.form)||(ft.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ft.has(this.form)&&(this.form.reportValidity=ft.get(this.form),ft.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host);!t&&typeof r=="string"&&typeof o!="undefined"&&(Array.isArray(o)?o.forEach(i=>{e.formData.append(r,i.toString())}):e.formData.append(r,o.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},ko=Symbol.for(""),Hn=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===ko)return(r=e)===null||r===void 0?void 0:r._$litStatic$},jr=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:ko}),Hr=new Map,In=e=>(t,...r)=>{const o=r.length;let i,n;const s=[],d=[];let a,l=0,h=!1;for(;l<o;){for(a=t[l];l<o&&(n=r[l],(i=Hn(n))!==void 0);)a+=i+t[++l],h=!0;d.push(n),s.push(a),l++}if(l===o&&s.push(t[o]),h){const c=s.join("$$lit$$");(t=Hr.get(c))===void 0&&(s.raw=s,Hr.set(c,t=s)),r=d}return e(t,...r)},he=In(Ne);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe=new Set,zn=new MutationObserver(No),Z=new Map,Oo=document.documentElement.dir||"ltr",To=document.documentElement.lang||navigator.language,bt;zn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Vn(...e){e.map(t=>{const r=t.$code.toLowerCase();Z.has(r)?Z.set(r,Object.assign(Object.assign({},Z.get(r)),t)):Z.set(r,t),bt||(bt=t)}),No()}function No(){Oo=document.documentElement.dir||"ltr",To=document.documentElement.lang||navigator.language,[...xe.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Fn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){xe.add(this.host)}hostDisconnected(){xe.delete(this.host)}dir(){return`${this.host.dir||Oo}`.toLowerCase()}lang(){return`${this.host.lang||To}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),o=this.lang().length>2?this.lang().toLowerCase():"",i=Z.get(o),n=Z.get(r);let s;if(i&&i[e])s=i[e];else if(n&&n[e])s=n[e];else if(bt&&bt[e])s=bt[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Ro=class extends Fn{},Wn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Vn(Wn);var U=e=>e!=null?e:$;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ir(e,t,r){const o=new CustomEvent(t,kt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(o),o}var g=class extends Ot{constructor(){super(...arguments);this.formSubmitController=new jn(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Ao(this,"[default]","prefix","suffix"),this.localize=new Ro(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,Ir(this,"sl-blur")}handleFocus(){this.hasFocus=!0,Ir(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?jr`a`:jr`button`;return he`
      <${t}
        part="base"
        class=${Co({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:this.type)}
        name=${U(e?void 0:this.name)}
        value=${U(e?void 0:this.value)}
        href=${U(e?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e&&this.target?"noreferrer noopener":void 0)}
        role=${U(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?he`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?he`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};g.styles=Mn;v([Un(".button")],g.prototype,"button",2);v([Nn()],g.prototype,"hasFocus",2);v([b({reflect:!0})],g.prototype,"variant",2);v([b({reflect:!0})],g.prototype,"size",2);v([b({type:Boolean,reflect:!0})],g.prototype,"caret",2);v([b({type:Boolean,reflect:!0})],g.prototype,"disabled",2);v([b({type:Boolean,reflect:!0})],g.prototype,"loading",2);v([b({type:Boolean,reflect:!0})],g.prototype,"outline",2);v([b({type:Boolean,reflect:!0})],g.prototype,"pill",2);v([b({type:Boolean,reflect:!0})],g.prototype,"circle",2);v([b()],g.prototype,"type",2);v([b()],g.prototype,"name",2);v([b()],g.prototype,"value",2);v([b()],g.prototype,"href",2);v([b()],g.prototype,"target",2);v([b()],g.prototype,"download",2);v([b()],g.prototype,"form",2);v([b({attribute:"formaction"})],g.prototype,"formAction",2);v([b({attribute:"formmethod"})],g.prototype,"formMethod",2);v([b({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);v([b({attribute:"formtarget"})],g.prototype,"formTarget",2);g=v([Me("sl-button")],g);var qn=Jt`
  ${Re}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
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
    mix-blend-mode: multiply;
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
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Se=class extends Ot{constructor(){super(...arguments);this.localize=new Ro(this)}render(){return Ne`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Se.styles=qn;Se=v([Me("sl-spinner")],Se);const Kn=dt`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var Jn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,Uo=(e,t,r,o)=>{for(var i=o>1?void 0:o?Yn(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Jn(t,r,i),i};let Ee=class extends M{constructor(){super();this.message="Welcome!"}static get styles(){return[Kn,dt`
                #welcomeBar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                #welcomeCard,
                #infoCard {
                    padding: 18px;
                    padding-top: 0px;
                }

                pwa-install {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                }

                main {
                    height: 90vh;
                }

                app-card:hover {
                    cursor: pointer;
                }

                sl-card::part(footer) {
                    display: flex;
                    justify-content: flex-end;
                }

                .column {
                    width: 96vw;
                    display: flex;
                    scroll-behavior: smooth;
                    overflow-x: scroll;
                }

                footer a {
                    color: black;
                    text-decoration: none;
                }

                @media (min-width: 750px) {
                    sl-card {
                        width: 70vw;
                    }
                }

                @media (horizontal-viewport-segments: 2) {
                    #welcomeBar {
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: space-between;
                    }

                    #welcomeCard {
                        margin-right: 64px;
                    }
                }
            `]}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return F`
            <app-header></app-header>

            <main>
                <pwa-install>Install Soundscape</pwa-install>
                <div id="welcomeBar">
                    <div class="column">
                        <app-card
                            title="Water Drips"
                            bgimage="assets/covers/balloon-ride.jpg"
                            audio="assets/audio/delightful_river.mp3"
                        ></app-card>
                        <app-card
                            title="Ocean Waves"
                            bgimage="assets/covers/starry-night.jpg"
                            audio="assets/audio/ocean_waves.mp3"
                        ></app-card>
                        <app-card
                            title="Delightful River"
                            bgimage="assets/covers/moonshine.jpg"
                            audio="assets/audio/delightful_river.mp3"
                        ></app-card>
                        <app-card
                            title="Ember"
                            bgimage="assets/covers/island-sunset.jpg"
                            audio="assets/audio/ember.mp3"
                        ></app-card>
                    </div>
                </div>
            </main>
            <footer>
                <a
                    href="${"/soundscape/"}about"
                    variant="primary"
                >
                    <p>Navigate to About</p>
                </a>
            </footer>
        `}};Uo([P()],Ee.prototype,"message",2);Ee=Uo([Pt("app-home")],Ee);var Gn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Le=(e,t,r,o)=>{for(var i=o>1?void 0:o?Xn(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Gn(t,r,i),i};let Wt=class extends M{constructor(){super();this.title="Soundscapes",this.enableBack=!1}static get styles(){return dt`
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--app-color-primary);
                color: white;
                height: 4em;
                padding-left: 16px;
                padding-top: 12px;

                position: fixed;
                left: env(titlebar-area-x, 0);
                top: env(titlebar-area-y, 0);
                height: env(titlebar-area-height, 50px);
                width: env(titlebar-area-width, 100%);
                -webkit-app-region: drag;
            }

            header h1 {
                margin-top: 0;
                margin-bottom: 0;
                font-size: 20px;
                font-weight: bold;
            }

            nav a {
                margin-left: 10px;
            }

            #back-button-block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 12em;
            }

            @media (prefers-color-scheme: light) {
                header {
                    color: black;
                }

                nav a {
                    color: initial;
                }
            }
        `}render(){return F`
            <header>
                <div id="back-button-block">
                    ${this.enableBack?F`<sl-button
                              href="${"/soundscape/"}"
                          >
                              Back
                          </sl-button>`:null}

                    <h1>${this.title}</h1>
                </div>
            </header>
        `}};Le([P({type:String})],Wt.prototype,"title",2);Le([P({type:Boolean})],Wt.prototype,"enableBack",2);Wt=Le([Pt("app-header")],Wt);var Zn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,Tt=(e,t,r,o)=>{for(var i=o>1?void 0:o?Qn(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Zn(t,r,i),i};let lt=class extends M{constructor(){super();this.title="Example Title",this.audio="assets/audio/water_drips.mp3",this.bgimage="assets/covers/balloon-ride.jpg",this.enableBack=!1}static get styles(){return dt`
            nav a {
                margin-left: 10px;
            }

            .modal {
                width: 100vw;
                height: 100vh;
                position: absolute;
                top: 0;
                left: 0px;
                z-index: 3;
                background-color: white;
            }

            .player-zone {
                width: 50vw;
                height: 100vh;
                margin: auto;
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .cover-image {
                width: 300px;
                height: 300px;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 50%;
                padding: 20px;
                box-sizing: border-box;
            }

            h3 {
                margin: 50px 0;
            }

            @media (prefers-color-scheme: light) {
                header {
                    color: black;
                }

                nav a {
                    color: initial;
                }
            }
        `}render(){return F`
            <div class="modal">
                <div class="player-zone">
                    ${this.enableBack?F`<sl-button
                              href="${"/soundscape/"}"
                          >
                              Back
                          </sl-button>`:null}
                    <div
                        class="cover-image"
                        style="background-image: url('${this.bgimage}');"
                    ></div>
                    <h3>${this.title}</h3>
                    <audio controls>
                        <source src="${this.audio}" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        `}};Tt([P({type:String})],lt.prototype,"title",2);Tt([P({type:String})],lt.prototype,"audio",2);Tt([P({type:String})],lt.prototype,"bgimage",2);Tt([P({type:Boolean})],lt.prototype,"enableBack",2);lt=Tt([Pt("app-modal")],lt);var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ut=(e,t,r,o)=>{for(var i=o>1?void 0:o?es(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&ts(t,r,i),i};let K=class extends M{constructor(){super();this.title="Example Title",this.bgimage="assets/covers/balloon-ride.jpg",this.audio="assets/audio/water_drips.mp3",this.enableBack=!1,this.active=!1}static get styles(){return dt`
            nav a {
                margin-left: 10px;
            }

            .card {
                width: 300px;
                height: 400px;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 15px;
                padding: 20px;
                box-sizing: border-box;
                margin-right: 20px;
            }

            .modal {
                display: none;
            }

            @media (prefers-color-scheme: light) {
                header {
                    color: black;
                }

                nav a {
                    color: initial;
                }
            }

            :host {
                display: block;
            }

            :host([active]) {
                display: block;
            }

            :host([active]) .modal {
                display: block;
            }
        `}render(){return F`
            <div>
                <div
                    class="card"
                    style="background-image: url('${this.bgimage}')"
                    @click="${()=>this.active=!this.active}"
                >
                    <h3>${this.title}</h3>
                </div>

                <app-modal
                    class="modal"
                    audio="${this.audio}"
                    @click="${()=>this.active=!this.active}"
                    title="${this.title}"
                    bgimage="${this.bgimage}"
                ></app-modal>
            </div>
        `}};ut([P({type:String})],K.prototype,"title",2);ut([P({type:String})],K.prototype,"bgimage",2);ut([P({type:String})],K.prototype,"audio",2);ut([P({type:Boolean})],K.prototype,"enableBack",2);ut([P({type:Boolean,reflect:!0})],K.prototype,"active",2);K=ut([Pt("app-card")],K);var rs=Object.defineProperty,os=Object.getOwnPropertyDescriptor,is=(e,t,r,o)=>{for(var i=o>1?void 0:o?os(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&rs(t,r,i),i};let zr=class extends M{static get styles(){return dt`
            main {
                padding-left: 16px;
                padding-right: 16px;
                padding-bottom: 16px;
            }

            #routerOutlet > * {
                width: 100% !important;
            }

            #routerOutlet > .leaving {
                animation: 160ms fadeOut ease-in-out;
            }

            #routerOutlet > .entering {
                animation: 160ms fadeIn linear;
            }

            @keyframes fadeOut {
                from {
                    opacity: 1;
                }

                to {
                    opacity: 0;
                }
            }

            @keyframes fadeIn {
                from {
                    opacity: 0.2;
                }

                to {
                    opacity: 1;
                }
            }
        `}constructor(){super()}firstUpdated(){var t;new I((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/soundscape/",animate:!0,children:[{path:"",component:"app-home"},{path:"about",component:"app-about",action:async()=>{await qo(()=>import("./app-about.d93af179.js"),[])}}]}])}render(){return F`
            <div>
                <main>
                    <div id="routerOutlet"></div>
                </main>
            </div>
        `}};zr=is([Pt("app-index")],zr);export{Kn as a,Pt as e,dt as i,M as s,F as y};
//# sourceMappingURL=index.e9f9f6e7.js.map
