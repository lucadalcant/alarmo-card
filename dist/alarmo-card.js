var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var o,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}function i(e,t){this.v=e,this.k=t}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t,i,a,o,n,s){try{var r=e[n](s),l=r.value}catch(e){return void i(e)}r.done?t(l):Promise.resolve(l).then(a,o)}function s(e,t,i){return t=p(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)}(e,g()?Reflect.construct(t,i||[],p(e).constructor):t.apply(e,i))}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,z(a.key),a)}}function d(e,t,i){return t&&l(e.prototype,t),i&&l(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=E(e))||t){i&&(e=i);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){r=!0,n=e},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw n}}}}function h(e,t,i){return(t=z(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(a){var o=Object.getOwnPropertyDescriptor(a,t);return o.get?o.get.call(arguments.length<3?e:i):o.value}},u.apply(null,arguments)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){h(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function v(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
var e,t,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.toStringTag||"@@toStringTag";function n(i,a,o,n){var l=a&&a.prototype instanceof r?a:r,d=Object.create(l.prototype);return k(d,"_invoke",function(i,a,o){var n,r,l,d=0,c=o||[],h=!1,u={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,i){return n=t,r=0,l=e,u.n=i,s}};function p(i,a){for(r=i,l=a,t=0;!h&&d&&!o&&t<c.length;t++){var o,n=c[t],p=u.p,_=n[2];i>3?(o=_===a)&&(l=n[(r=n[4])?5:(r=3,3)],n[4]=n[5]=e):n[0]<=p&&((o=i<2&&p<n[1])?(r=0,u.v=a,u.n=n[1]):p<_&&(o=i<3||n[0]>a||a>_)&&(n[4]=i,n[5]=a,u.n=_,r=0))}if(o||i>1)return s;throw h=!0,a}return function(o,c,_){if(d>1)throw TypeError("Generator is already running");for(h&&1===c&&p(c,_),r=c,l=_;(t=r<2?e:l)||!h;){n||(r?r<3?(r>1&&(u.n=-1),p(r,l)):u.n=l:u.v=l);try{if(d=2,n){if(r||(o="next"),t=n[o]){if(!(t=t.call(n,l)))throw TypeError("iterator result is not an object");if(!t.done)return t;l=t.value,r<2&&(r=0)}else 1===r&&(t=n.return)&&t.call(n),r<2&&(l=TypeError("The iterator does not provide a '"+o+"' method"),r=1);n=e}else if((t=(h=u.n<0)?l:i.call(a,u))!==s)break}catch(t){n=e,r=1,l=t}finally{d=1}}return{value:t,done:h}}}(i,o,n),!0),d}var s={};function r(){}function l(){}function d(){}t=Object.getPrototypeOf;var c=[][a]?t(t([][a]())):(k(t={},a,(function(){return this})),t),h=d.prototype=r.prototype=Object.create(c);function u(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,k(e,o,"GeneratorFunction")),e.prototype=Object.create(h),e}return l.prototype=d,k(h,"constructor",d),k(d,"constructor",l),l.displayName="GeneratorFunction",k(d,o,"GeneratorFunction"),k(h),k(h,o,"Generator"),k(h,a,(function(){return this})),k(h,"toString",(function(){return"[object Generator]"})),(v=function(){return{w:n,m:u}})()}function b(e,t,i,a,o){var n=y(e,t,i,a,o);return n.next().then((function(e){return e.done?e.value:n.next()}))}function y(e,t,i,a,o){return new w(v().w(e,t,i,a),o||Promise)}function w(e,t){function a(o,n,s,r){try{var l=e[o](n),d=l.value;return d instanceof i?t.resolve(d.v).then((function(e){a("next",e,s,r)}),(function(e){a("throw",e,s,r)})):t.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return a("throw",e,s,r)}))}catch(e){r(e)}}var o;this.next||(k(w.prototype),k(w.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",(function(){return this}))),k(this,"_invoke",(function(e,i,n){function s(){return new t((function(t,i){a(e,n,t,i)}))}return o=o?o.then(s,s):s()}),!0)}function k(e,t,i,a){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}k=function(e,t,i,a){function n(t,i){k(e,t,(function(e){return this._invoke(t,i,e)}))}t?o?o(e,t,{value:i,enumerable:!a,configurable:!a,writable:!a}):e[t]=i:(n("next",0),n("throw",1),n("return",2))},k(e,t,i,a)}function $(e){var t=Object(e),i=[];for(var a in t)i.unshift(a);return function e(){for(;i.length;)if((a=i.pop())in t)return e.value=a,e.done=!1,e;return e.done=!0,e}}function x(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],i=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}}}throw new TypeError(typeof e+" is not iterable")}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,o,n,s,r=[],l=!0,d=!1;try{if(n=(i=i.call(e)).next,0===t);else for(;!(l=(a=n.call(i)).done)&&(r.push(a.value),r.length!==t);l=!0);}catch(e){d=!0,o=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(d)throw o}}return r}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t,i,a){var o=u(p(e.prototype),t,i);return 2&a&&"function"==typeof o?function(e){return o.apply(i,e)}:o}function S(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:t+""}function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(e,t){if(e){if("string"==typeof e)return a(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}function P(e){var t="function"==typeof Map?new Map:void 0;return P=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(g())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return i&&A(o,i.prototype),o}(e,arguments,p(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),A(i,e)},P(e)}function T(){var e=v(),t=e.m(T),a=(Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__).constructor;function o(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))}var n={throw:1,return:2,break:3,continue:3};function s(e){var t,i;return function(a){t||(t={stop:function(){return i(a.a,2)},catch:function(){return a.v},abrupt:function(e,t){return i(a.a,n[e],t)},delegateYield:function(e,o,n){return t.resultName=o,i(a.d,x(e),n)},finish:function(e){return i(a.f,e)}},i=function(e,i,o){a.p=t.prev,a.n=t.next;try{return e(i,o)}finally{t.next=a.n}}),t.resultName&&(t[t.resultName]=a.v,t.resultName=void 0),t.sent=a.v,t.next=a.n;try{return e.call(this,t)}finally{a.p=t.prev,a.n=t.next}}}return(T=function(){return{wrap:function(t,i,a,o){return e.w(s(t),i,a,o&&o.reverse())},isGeneratorFunction:o,mark:e.m,awrap:function(e,t){return new i(e,t)},AsyncIterator:w,async:function(e,t,i,a,n){return(o(t)?y:b)(s(e),t,i,a,n)},keys:$,values:x}})()}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */"function"==typeof SuppressedError&&SuppressedError;var M,L,N,D=globalThis,H=D.ShadowRoot&&(void 0===D.ShadyCSS||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),U=new WeakMap,I=function(){return d((function e(t,i,a){if(r(this,e),this._$cssResult$=!0,a!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}),[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(H&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=U.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&U.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),B=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var o=1===e.length?e[0]:i.reduce((function(t,i,a){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[a+1]}),e[0]);return new I(o,e,R)},V=H?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",a=c(e.cssRules);try{for(a.s();!(t=a.n()).done;){i+=t.value.cssText}}catch(e){a.e(e)}finally{a.f()}return function(e){return new I("string"==typeof e?e:e+"",void 0,R)}(i)}(e):e},q=Object.is,F=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,W=Object.getOwnPropertyNames,G=Object.getOwnPropertySymbols,K=Object.getPrototypeOf,J=globalThis,Y=J.trustedTypes,Q=Y?Y.emptyScript:"",X=J.reactiveElementPolyfillSupport,ee=function(e,t){return e},te={toAttribute:function(e,t){switch(t){case Boolean:e=e?Q:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},ie=function(e,t){return!q(e,t)},ae={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:ie};null!==(M=Symbol.metadata)&&void 0!==M||(Symbol.metadata=Symbol("metadata")),null!==(L=J.litPropertyMetadata)&&void 0!==L||(J.litPropertyMetadata=new WeakMap);var oe,ne=function(e){function t(){var e;return r(this,t),(e=s(this,t))._$Ep=void 0,e.isUpdatePending=!1,e.hasUpdated=!1,e._$Em=null,e._$Ev(),e}return _(t,e),d(t,[{key:"_$Ev",value:function(){var e,t=this;this._$ES=new Promise((function(e){return t.enableUpdating=e})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((function(e){return e(t)}))}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}},{key:"_$E_",value:function(){var e,t=new Map,i=c(this.constructor.elementProperties.keys());try{for(i.s();!(e=i.n()).done;){var a=e.value;this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a])}}catch(e){i.e(e)}finally{i.f()}t.size>0&&(this._$Ep=t)}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){if(H)e.adoptedStyleSheets=t.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet}));else{var i,a=c(t);try{for(a.s();!(i=a.n()).done;){var o=i.value,n=document.createElement("style"),s=D.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=o.cssText,e.appendChild(n)}}catch(e){a.e(e)}finally{a.f()}}}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach((function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$EO)||void 0===e||e.forEach((function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$EC",value:function(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var o,n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:te).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}},{key:"_$AK",value:function(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var o,n=i.getPropertyOptions(a),s="function"==typeof n.converter?{fromAttribute:n.converter}:void 0!==(null===(o=n.converter)||void 0===o?void 0:o.fromAttribute)?n.converter:te;this._$Em=a,this[a]=s.fromAttribute(t,n.type),this._$Em=null}}},{key:"requestUpdate",value:function(e,t,i){if(void 0!==e){var a;if(null!=i||(i=this.constructor.getPropertyOptions(e)),!(null!==(a=i.hasChanged)&&void 0!==a?a:ie)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}},{key:"P",value:function(e,t,i){var a;this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(null!==(a=this._$Ej)&&void 0!==a?a:this._$Ej=new Set).add(e)}},{key:"_$ET",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise((function(a,o){var s=e.apply(t,i);function r(e){n(s,a,o,r,l,"next",e)}function l(e){n(s,a,o,r,l,"throw",e)}r(void 0)}))}}(T().mark((function e(){var t;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isUpdatePending=!0,e.prev=1,e.next=4,this._$ES;case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Promise.reject(e.t0);case 9:if(t=this.scheduleUpdate(),e.t1=null!=t,!e.t1){e.next=14;break}return e.next=14,t;case 14:return e.abrupt("return",!this.isUpdatePending);case 15:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var t,i=c(this._$Ep);try{for(i.s();!(t=i.n()).done;){var a=C(t.value,2),o=a[0],n=a[1];this[o]=n}}catch(e){i.e(e)}finally{i.f()}this._$Ep=void 0}var s=this.constructor.elementProperties;if(s.size>0){var r,l=c(s);try{for(l.s();!(r=l.n()).done;){var d=C(r.value,2),h=d[0],u=d[1];!0!==u.wrapped||this._$AL.has(h)||void 0===this[h]||this.P(h,this[h],u)}}catch(e){l.e(e)}finally{l.f()}}}var p=!1,_=this._$AL;try{var g;(p=this.shouldUpdate(_))?(this.willUpdate(_),null!==(g=this._$EO)&&void 0!==g&&g.forEach((function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(_)):this._$EU()}catch(_){throw p=!1,this._$EU(),_}p&&this._$AE(_)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach((function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$EU",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;this._$Ej&&(this._$Ej=this._$Ej.forEach((function(e){return t._$EC(e,t[e])}))),this._$EU()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&S(this._$Eh.keys())}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ae;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&F(this.prototype,e,a)}}},{key:"getPropertyDescriptor",value:function(e,t,i){var a,o=null!==(a=Z(this.prototype,e))&&void 0!==a?a:{get:function(){return this[t]},set:function(e){this[t]=e}},n=o.get,s=o.set;return{get:function(){return null==n?void 0:n.call(this)},set:function(t){var a=null==n?void 0:n.call(this);s.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:ae}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(ee("elementProperties"))){var e=K(this);e.finalize(),void 0!==e.l&&(this.l=S(e.l)),this.elementProperties=new Map(e.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(ee("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){var e,t=this.properties,i=c([].concat(S(W(t)),S(G(t))));try{for(i.s();!(e=i.n()).done;){var a=e.value;this.createProperty(a,t[a])}}catch(e){i.e(e)}finally{i.f()}}var o=this[Symbol.metadata];if(null!==o){var n=litPropertyMetadata.get(o);if(void 0!==n){var s,r=c(n);try{for(r.s();!(s=r.n()).done;){var l=C(s.value,2),d=l[0],h=l[1];this.elementProperties.set(d,h)}}catch(e){r.e(e)}finally{r.f()}}}this._$Eh=new Map;var u,p=c(this.elementProperties);try{for(p.s();!(u=p.n()).done;){var _=C(u.value,2),g=_[0],f=_[1],m=this._$Eu(g,f);void 0!==m&&this._$Eh.set(m,g)}}catch(e){p.e(e)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,a=c(new Set(e.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var o=i.value;t.unshift(V(o))}}catch(e){a.e(e)}finally{a.f()}}else void 0!==e&&t.push(V(e));return t}},{key:"_$Eu",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(P(HTMLElement));ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},ne[ee("elementProperties")]=new Map,ne[ee("finalized")]=new Map,null!=X&&X({ReactiveElement:ne}),(null!==(N=J.reactiveElementVersions)&&void 0!==N?N:J.reactiveElementVersions=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var se=globalThis,re=se.trustedTypes,le=re?re.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,de="$lit$",ce="lit$".concat(Math.random().toFixed(9).slice(2),"$"),he="?"+ce,ue="<".concat(he,">"),pe=document,_e=function(){return pe.createComment("")},ge=function(e){return null===e||"object"!=j(e)&&"function"!=typeof e},fe=Array.isArray,me="[ \t\n\f\r]",ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,ye=/>/g,we=RegExp(">|".concat(me,"(?:([^\\s\"'>=/]+)(").concat(me,"*=").concat(me,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),ke=/'/g,$e=/"/g,xe=/^(?:script|style|textarea|title)$/i,Ae=function(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return{_$litType$:e,strings:t,values:a}}}(1),Ce=Symbol.for("lit-noChange"),Oe=Symbol.for("lit-nothing"),Se=new WeakMap,ze=pe.createTreeWalker(pe,129);function je(e,t){if(!fe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==le?le.createHTML(t):t}var Ee=function(e,t){for(var i,a=e.length-1,o=[],n=2===t?"<svg>":3===t?"<math>":"",s=ve,r=0;r<a;r++){for(var l=e[r],d=void 0,c=void 0,h=-1,u=0;u<l.length&&(s.lastIndex=u,null!==(c=s.exec(l)));)u=s.lastIndex,s===ve?"!--"===c[1]?s=be:void 0!==c[1]?s=ye:void 0!==c[2]?(xe.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=we):void 0!==c[3]&&(s=we):s===we?">"===c[0]?(s=null!=i?i:ve,h=-1):void 0===c[1]?h=-2:(h=s.lastIndex-c[2].length,d=c[1],s=void 0===c[3]?we:'"'===c[3]?$e:ke):s===$e||s===ke?s=we:s===be||s===ye?s=ve:(s=we,i=void 0);var p=s===we&&e[r+1].startsWith("/>")?" ":"";n+=s===ve?l+ue:h>=0?(o.push(d),l.slice(0,h)+de+l.slice(h)+ce+p):l+ce+(-2===h?r:p)}return[je(e,n+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]},Pe=function(){return d((function e(t,i){var a,o=t.strings,n=t._$litType$;r(this,e),this.parts=[];var s=0,l=0,d=o.length-1,h=this.parts,u=C(Ee(o,n),2),p=u[0],_=u[1];if(this.el=e.createElement(p,i),ze.currentNode=this.el.content,2===n||3===n){var g=this.el.content.firstChild;g.replaceWith.apply(g,S(g.childNodes))}for(;null!==(a=ze.nextNode())&&h.length<d;){if(1===a.nodeType){if(a.hasAttributes()){var f,m=c(a.getAttributeNames());try{for(m.s();!(f=m.n()).done;){var v=f.value;if(v.endsWith(de)){var b=_[l++],y=a.getAttribute(v).split(ce),w=/([.?@])?(.*)/.exec(b);h.push({type:1,index:s,name:w[2],strings:y,ctor:"."===w[1]?De:"?"===w[1]?He:"@"===w[1]?Re:Ne}),a.removeAttribute(v)}else v.startsWith(ce)&&(h.push({type:6,index:s}),a.removeAttribute(v))}}catch(e){m.e(e)}finally{m.f()}}if(xe.test(a.tagName)){var k=a.textContent.split(ce),$=k.length-1;if($>0){a.textContent=re?re.emptyScript:"";for(var x=0;x<$;x++)a.append(k[x],_e()),ze.nextNode(),h.push({type:2,index:++s});a.append(k[$],_e())}}}else if(8===a.nodeType)if(a.data===he)h.push({type:2,index:s});else for(var A=-1;-1!==(A=a.data.indexOf(ce,A+1));)h.push({type:7,index:s}),A+=ce.length-1;s++}}),null,[{key:"createElement",value:function(e,t){var i=pe.createElement("template");return i.innerHTML=e,i}}])}();function Te(e,t){var i,a,o,n,s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===Ce)return t;var d=void 0!==l?null===(i=r._$Co)||void 0===i?void 0:i[l]:r._$Cl,c=ge(t)?void 0:t._$litDirective$;return(null===(a=d)||void 0===a?void 0:a.constructor)!==c&&(null!==(o=d)&&void 0!==o&&null!==(n=o._$AO)&&void 0!==n&&n.call(o,!1),void 0===c?d=void 0:(d=new c(e))._$AT(e,r,l),void 0!==l?(null!==(s=r._$Co)&&void 0!==s?s:r._$Co=[])[l]=d:r._$Cl=d),void 0!==d&&(t=Te(e,d._$AS(e,t.values),d,l)),t}var Me=function(){return d((function e(t,i){r(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}),[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,o=i.parts,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:pe).importNode(a,!0);ze.currentNode=n;for(var s=ze.nextNode(),r=0,l=0,d=o[0];void 0!==d;){var c;if(r===d.index){var h=void 0;2===d.type?h=new Le(s,s.nextSibling,this,e):1===d.type?h=new d.ctor(s,d.name,d.strings,this,e):6===d.type&&(h=new Ue(s,this,e)),this._$AV.push(h),d=o[++l]}r!==(null===(c=d)||void 0===c?void 0:c.index)&&(s=ze.nextNode(),r++)}return ze.currentNode=pe,n}},{key:"p",value:function(e){var t,i=0,a=c(this._$AV);try{for(a.s();!(t=a.n()).done;){var o=t.value;void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),Le=function(){function e(t,i,a,o){var n;r(this,e),this.type=2,this._$AH=Oe,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=o,this._$Cv=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}return d(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=Te(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),ge(e)?e===Oe||null==e||""===e?(this._$AH!==Oe&&this._$AR(),this._$AH=Oe):e!==this._$AH&&e!==Ce&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return fe(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==Oe&&ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(pe.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,o="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Pe.createElement(je(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{var n=new Me(o,this),s=n.u(this.options);n.p(i),this.T(s),this._$AH=n}}},{key:"_$AC",value:function(e){var t=Se.get(e.strings);return void 0===t&&Se.set(e.strings,t=new Pe(e)),t}},{key:"k",value:function(t){fe(this._$AH)||(this._$AH=[],this._$AR());var i,a,o=this._$AH,n=0,s=c(t);try{for(s.s();!(a=s.n()).done;){var r=a.value;n===o.length?o.push(i=new e(this.O(_e()),this.O(_e()),this,this.options)):i=o[n],i._$AI(r),n++}}catch(e){s.e(e)}finally{s.f()}n<o.length&&(this._$AR(i&&i._$AB.nextSibling,n),o.length=n)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),Ne=function(){return d((function e(t,i,a,o,n){r(this,e),this.type=1,this._$AH=Oe,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Oe}),[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=this.strings,n=!1;if(void 0===o)e=Te(this,e,t,0),(n=!ge(e)||e!==this._$AH&&e!==Ce)&&(this._$AH=e);else{var s,r,l=e;for(e=o[0],s=0;s<o.length-1;s++)(r=Te(this,l[i+s],t,s))===Ce&&(r=this._$AH[s]),n||(n=!ge(r)||r!==this._$AH[s]),r===Oe?e=Oe:e!==Oe&&(e+=(null!=r?r:"")+o[s+1]),this._$AH[s]=r}n&&!a&&this.j(e)}},{key:"j",value:function(e){e===Oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),De=function(e){function t(){var e;return r(this,t),(e=s(this,t,arguments)).type=3,e}return _(t,e),d(t,[{key:"j",value:function(e){this.element[this.name]=e===Oe?void 0:e}}])}(Ne),He=function(e){function t(){var e;return r(this,t),(e=s(this,t,arguments)).type=4,e}return _(t,e),d(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==Oe)}}])}(Ne),Re=function(e){function t(e,i,a,o,n){var l;return r(this,t),(l=s(this,t,[e,i,a,o,n])).type=5,l}return _(t,e),d(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=Te(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:Oe)!==Ce){var i=this._$AH,a=e===Oe&&i!==Oe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Oe&&(i===Oe||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(Ne),Ue=function(){return d((function e(t,i,a){r(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){Te(this,e)}}])}(),Ie=se.litHtmlPolyfillSupport;null!=Ie&&Ie(Pe,Le),(null!==(oe=se.litHtmlVersions)&&void 0!==oe?oe:se.litHtmlVersions=[]).push("3.2.1");var Be,Ve,qe=function(e){function t(){var e;return r(this,t),(e=s(this,t,arguments)).renderOptions={host:o(e)},e._$Do=void 0,e}return _(t,e),d(t,[{key:"createRenderRoot",value:function(){var e,i,a=O(t,"createRenderRoot",this,3)([]);return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=a.firstChild),a}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),O(t,"update",this,3)([e]),this._$Do=function(e,t,i){var a,o=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,n=o._$litPart$;if(void 0===n){var s,r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new Le(t.insertBefore(_e(),r),r,void 0,null!=i?i:{})}return n._$AI(e),n}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;O(t,"connectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;O(t,"disconnectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return Ce}}])}(ne);qe._$litElement$=!0,qe.finalized=!0,null===(Be=globalThis.litElementHydrateSupport)||void 0===Be||Be.call(globalThis,{LitElement:qe});var Fe=globalThis.litElementPolyfillSupport;null==Fe||Fe({LitElement:qe}),(null!==(Ve=globalThis.litElementVersions)&&void 0!==Ve?Ve:globalThis.litElementVersions=[]).push("4.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Ze=function(e){return function(t,i){void 0!==i?i.addInitializer((function(){customElements.define(e,t)})):customElements.define(e,t)}},We={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:ie},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,o=i.metadata,n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,e),"accessor"===a){var s=i.name;return{set:function(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,a,e)},init:function(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===a){var r=i.name;return function(i){var a=this[r];t.call(this,i),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ke(e){return function(t,i){return"object"==j(i)?Ge(e,t,i):function(e,t,i){var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,a?m(m({},e),{},{wrapped:!0}):e),a?Object.getOwnPropertyDescriptor(t,i):void 0}(e,t,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Je(e){return Ke(m(m({},e),{},{state:!0,attribute:!1}))}const Ye="number";var Qe;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(Qe||(Qe={}));const Xe={[Qe.ArmedAway]:"hass:shield-lock",[Qe.ArmedHome]:"hass:shield-home",[Qe.ArmedNight]:"hass:shield-moon",[Qe.ArmedVacation]:"hass:shield-airplane",[Qe.ArmedCustomBypass]:"hass:security",[Qe.Disarmed]:"hass:shield-off",[Qe.Arming]:"hass:shield-outline",[Qe.Pending]:"hass:shield-outline",[Qe.Triggered]:"hass:bell-ring"};var et;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(et||(et={}));const tt={[et.ArmAway]:"mdi:lock",[et.ArmHome]:"mdi:home",[et.ArmNight]:"mdi:moon-waning-crescent",[et.ArmVacation]:"mdi:airplane",[et.ArmCustomBypass]:"mdi:shield",[et.Disarm]:"mdi:shield-off"},it={[et.ArmAway]:Qe.ArmedAway,[et.ArmHome]:Qe.ArmedHome,[et.ArmNight]:Qe.ArmedNight,[et.ArmVacation]:Qe.ArmedVacation,[et.ArmCustomBypass]:Qe.ArmedCustomBypass,[et.Disarm]:Qe.Disarmed};var at;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(at||(at={}));const ot="alarmo_updated",nt=["arming","pending"],st={type:"",entity:"",name:"",keep_keypad_visible:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1,hide_keypad:!1,show_code_inputfield:!0,show_header:!0},rt=2.5,lt={skip_delay:!1,force:!1};var dt;!function(e){e.Red="red",e.Pink="pink",e.Purple="purple",e.DeepPurple="deep-purple",e.Indigo="indigo",e.Blue="blue",e.LightBlue="light-blue",e.Cyan="cyan",e.Teal="teal",e.Green="green",e.LightGreen="light-green",e.Lime="lime",e.Yellow="yellow",e.Amber="amber",e.Orange="orange",e.DeepOrange="deep-orange",e.Brown="brown",e.LightGrey="light-grey",e.Grey="grey",e.DarkGrey="dark-grey",e.BlueGrey="blue-grey",e.Black="black",e.White="white"}(dt||(dt={}));var ct={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},ht={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",hide_keypad:"Skrýt tlačítka klávesnice pro zadávání kódu.",show_code_inputfield:"Zobrazit vstupní pole kódu",show_header:"Zobrazit záhlaví",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:{title:"Viditelnost akčního tlačítka",options:{always:"Vždy zobrazeno",never:"Nikdy zobrazeno",disarmed:"Zobrazit pouze při odzbrojení",armed:"Zobrazit pouze při zapnutí"}},button_label:"Přepsat popisek tlačítka",button_icon:"Ikona zobrazeného tlačítka",state_label:"Přepsat popisek stavu",color:"Přepsat barvu použitou pro akci"}},ut={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},pt={arm_options:ct,editor:ht,errors:ut},_t={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},gt={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",hide_keypad:"Blenden Sie die Tasten der Tastatur zur Codeeingabe aus.",show_code_inputfield:"Pin-Eingabefeld anzeigen",show_header:"Kopfzeile anzeigen",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:{title:"Sichtbarkeit der Aktionsschaltfläche",options:{always:"Immer angezeigt",never:"Nie angezeigt",disarmed:"Nur im deaktivierten Zustand anzeigen",armed:"Nur im aktivierten Zustand anzeigen"}},button_label:"Überschreibung der Tastenbeschriftung",button_icon:"Angezeigtes Schaltflächensymbol",state_label:"Überschreibung der Statusbezeichnung",color:"Die für die Aktion verwendete Farbe überschreiben"}},ft={blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},mt={arm_options:_t,editor:gt,errors:ft},vt={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},bt={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",hide_keypad:"Απόκρυψη των κουμπιών του πληκτρολογίου για την εισαγωγή του κωδικού.",show_code_inputfield:"Εμφάνιση πεδίου εισαγωγής κωδικού",show_header:"Εμφάνιση κεφαλίδας",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:{title:"Ορατότητα κουμπιού ενέργειας",options:{always:"Εμφανίζεται πάντα",never:"Ποτέ δεν εμφανίζεται",disarmed:"Εμφάνιση μόνο όταν είναι αφοπλισμένο",armed:"Εμφάνιση μόνο όταν είναι οπλισμένο"}},button_icon:"Εμφανιζόμενο εικονίδιο κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης",color:"Παράκαμψη χρώματος που χρησιμοποιείται για την ενέργεια"}},yt={blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},wt={arm_options:vt,editor:bt,errors:yt},kt={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},$t={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",hide_keypad:"Hide the keypad buttons for entering the code.",show_code_inputfield:"Show code input field",show_header:"Show header",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:{title:"Button visibility",options:{always:"Always shown",never:"Never shown",disarmed:"Show only when disarmed",armed:"Hide only when disarmed"}},button_label:"Override displayed action label",button_icon:"Override displayed icon",state_label:"Override displayed state label",color:"Override color used for the action"}},xt={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},At={arm_options:kt,editor:$t,errors:xt},Ct={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},Ot={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",hide_keypad:"Ocultar los botones del teclado para ingresar el código.",show_code_inputfield:"Mostrar campo de entrada de código",show_header:"Mostrar encabezado",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:{title:"Visibilidad del botón de acción",options:{always:"Mostrar siempre",never:"Ocultar siempre",disarmed:"Mostrar solo si desarmada",armed:"Ocultar solo si desarmada"}},button_label:"Sobrescribir el texto del botón",button_icon:"Icono de botón mostrado",state_label:"Sobrescribir el texto de estado",color:"Anular el color utilizado para la acción"}},St={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},zt={arm_options:Ct,editor:Ot,errors:St},jt={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},Et={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",hide_keypad:"Masquer les boutons du clavier pour saisir le code.",show_code_inputfield:"Afficher le champ de saisie du code",show_header:"Afficher l'en-tête",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:{title:"Visibilité du bouton d'action",options:{always:"Toujours affiché",never:"Jamais affiché",disarmed:"Afficher uniquement si désarmé",armed:"Afficher uniquement si armé"}},button_label:"Remplacer le libellé du bouton",button_icon:"Icône de bouton affichée",state_label:"Remplacer l'étiquette d'état",color:"Remplacer la couleur utilisée pour l'action"}},Pt={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},Tt={arm_options:jt,editor:Et,errors:Pt},Mt={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},Lt={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",hide_keypad:"Nascondi i pulsanti della tastiera per l'inserimento del codice.",show_code_inputfield:"Mostra il campo di inserimento del codice.",show_header:"Mostra header.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:{title:"Visibilità del pulsante di azione",options:{always:"Sempre visualizzato",never:"Mai visualizzato",disarmed:"Mostra solo quando disarmato",armed:"Mostra solo quando disarmato"}},button_label:"Sovrascrivere l'etichetta del pulsante",button_icon:"Icona del pulsante visualizzato",state_label:"Sovrascrivere l'etichetta di stato",color:"Sostituisci il colore utilizzato per l'azione"}},Nt={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},Dt={arm_options:Mt,editor:Lt,errors:Nt},Ht={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},Rt={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",hide_keypad:"Verberg het toetsenbord voor het invoeren van de code.",show_code_inputfield:"Toon code invoerveld",show_header:"Koptekst weergeven",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:{title:"Actieknop weergave",options:{always:"Altijd zichtbaar",never:"Nooit zichtbaar",disarmed:"Toon alleen bij uitgeschakeld",armed:"Zichtbaar tenzij uitgeschakeld"}},button_label:"Weergegeven naam voor actie",button_icon:"Weergegeven icoon voor actie",state_label:"Weergegeven status",color:"Weergegeven kleur voor action"}},Ut={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},It={arm_options:Ht,editor:Rt,errors:Ut},Bt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},Vt={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",hide_keypad:"Oculte os botões do teclado para inserir o código.",show_code_inputfield:"Mostrar campo de entrada do código",show_header:"Mostrar cabeçalho",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:{title:"Visibilidade do botão de ação",options:{always:"Sempre visível",never:"Sempre visível",disarmed:"Mostrar somente quando desarmado",armed:"Mostrar somente quando armado"}},button_label:"Substituir texto do botão",button_icon:"Ícone de botão exibido",state_label:"Substituir texto de status",color:"Substituir a cor usada para a ação"}},qt={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Ft={arm_options:Bt,editor:Vt,errors:qt},Zt={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},Wt={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",hide_keypad:"Скрыть кнопки клавиатуры для ввода кода.",show_code_inputfield:"Показать поле ввода кода",show_header:"Заголовок шоу",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:{title:"Видимость кнопки действия",options:{always:"Показывать всегда",never:"Показывать никогда",disarmed:"Показывать только при снятии с охраны",armed:"Показывать только при поддержании под охраной"}},button_label:"Измененение названия кнопки",button_icon:"Отображаемый значок кнопки",state_label:"Изменение названия состояния",color:"Переопределить цвет, используемый для действия"}},Gt={blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},Kt={arm_options:Zt,editor:Wt,errors:Gt},Jt={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},Yt={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",hide_keypad:"Dölj knapparna på tangentbordet för att ange koden.",show_code_inputfield:"Visa kodinmatningsfält",show_header:"Showrubrik",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:{title:"Synlighet för åtgärdsknapp",options:{always:"Visas alltid",never:"Visas aldrig",disarmed:"Visa endast vid avaktivering",armed:"Visa endast vid aktivering"}},button_label:"Anpassad knappetikett",button_icon:"Visad knappikon",state_label:"Anpassad tillståndsetikett",color:"Åsidosättningsfärg som används för åtgärden"}},Qt={blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},Xt={arm_options:Jt,editor:Yt,errors:Qt},ei={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},ti={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",hide_keypad:"隐藏用于输入代码的键盘按钮。",show_code_inputfield:"显示代码输入文本框",show_header:"显示页眉",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:{title:"操作按钮可见性",options:{always:"始终显示",never:"从不显示",disarmed:"仅在解除武装时显示",armed:"仅在武装时显示"}},button_label:"覆盖按钮标签",button_icon:"显示的按钮图标",state_label:"覆盖状态标签",color:"覆盖操作使用的颜色"}},ii={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},ai={arm_options:ei,editor:ti,errors:ii},oi={cs:Object.freeze({__proto__:null,arm_options:ct,default:pt,editor:ht,errors:ut}),de:Object.freeze({__proto__:null,arm_options:_t,default:mt,editor:gt,errors:ft}),el:Object.freeze({__proto__:null,arm_options:vt,default:wt,editor:bt,errors:yt}),en:Object.freeze({__proto__:null,arm_options:kt,default:At,editor:$t,errors:xt}),es:Object.freeze({__proto__:null,arm_options:Ct,default:zt,editor:Ot,errors:St}),fr:Object.freeze({__proto__:null,arm_options:jt,default:Tt,editor:Et,errors:Pt}),it:Object.freeze({__proto__:null,arm_options:Mt,default:Dt,editor:Lt,errors:Nt}),nl:Object.freeze({__proto__:null,arm_options:Ht,default:It,editor:Rt,errors:Ut}),"pt-BR":Object.freeze({__proto__:null,arm_options:Bt,default:Ft,editor:Vt,errors:qt}),ru:Object.freeze({__proto__:null,arm_options:Zt,default:Kt,editor:Wt,errors:Gt}),sv:Object.freeze({__proto__:null,arm_options:Jt,default:Xt,editor:Yt,errors:Qt}),"zh-Hans":Object.freeze({__proto__:null,arm_options:ei,default:ai,editor:ti,errors:ii})};function ni(e,t,i="",a=""){const o=t.replace(/['"]+/g,"");var n;try{n=e.split(".").reduce(((e,t)=>e[t]),oi[o])}catch(t){n=e.split(".").reduce(((e,t)=>e[t]),oi.en)}if(void 0===n&&(n=e.split(".").reduce(((e,t)=>e[t]),oi.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)n=n.replace(i[e],a[e])}return n}function si(e){return null!=e}function ri(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!si(e)}}function li(e){return e.substring(0,e.indexOf("."))}const di=(e,t)=>{let i={hide:!1};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},ci=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(et.ArmAway),1&t&&i.push(et.ArmHome),4&t&&i.push(et.ArmNight),32&t&&i.push(et.ArmVacation),16&t&&i.push(et.ArmCustomBypass),i},hi=(e,t,i)=>{const a=li(e.entity_id),o=e.attributes.device_class,n=e.state;if(Object.values(Qe).includes(n)&&i){const e=di(n,i);if(!ri(e.state_label))return e.state_label}let s="";return o&&(s=t(`component.${a}.entity_component.${o}.state.${e.state}`)),s||(s=t(`component.${a}.entity_component._.state.${e.state}`)),s},ui=e=>null!==e.attributes.code_format,pi=(e,t,i=!1)=>{if(!e||!e.state)return"var(--state-unavailable-color)";let a=e.state;if(i){const i=Object.values(et).map((e=>it[e]));if(!i.includes(a)){const t=e.attributes.arm_mode;t&&(a=t)}const o=[et.Disarm,...ci(e)].filter((e=>!di(it[e],t).hide));1==o.length&&(a=it[o[0]])}if(Object.keys(t.states||{}).includes(a)&&si((t.states[a]||{}).color)){const e=t.states[a].color;return Object.values(dt).includes(e)?`var(--${e}-color)`:e}return a==Qe.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(Qe).includes(a)?`var(--state-alarm_control_panel-${a}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"},_i=e=>e.callWS({type:"alarmo/entities"}),gi=e=>e.callWS({type:"alarmo/config"}),fi=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const o=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return o.detail=i,e.dispatchEvent(o),o};let mi=class extends qe{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){_i(this.hass).then((e=>{this._entities=e.map((e=>e.entity_id))})).catch((e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})})),this._alarmoConfig=await gi(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},st),e)}render(){var e,t,i,a,o,n,s,r;if(!this._config||!this.hass||!this._entities)return Ae``;if(!this._entities.length)return Ae`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const l=this._config.entity?this.hass.states[this._config.entity]:void 0,d=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ye&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=di(it[this._editAction],this._config);return Ae`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${ni("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div>
          <span>${ni("editor.action_dialog.show_button.title",this.hass.language)}</span>
          <div style="display: flex; flex-direction: row">
            <ha-formfield label="${ni("editor.action_dialog.show_button.options.always",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="never"
                @change=${()=>this._updateStateConfig(it[this._editAction],{hide:void 0})}
                ?checked=${!si(e.hide)||[!1,"never"].includes(e.hide)}
              >
              </ha-radio>
            </ha-formfield>

            <ha-formfield label="${ni("editor.action_dialog.show_button.options.never",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="always"
                @change=${()=>this._updateStateConfig(it[this._editAction],{hide:"always"})}
                ?checked=${[!0,"always"].includes(e.hide||!1)}
              >
              </ha-radio>
            </ha-formfield>

            ${this._editAction==et.Disarm?Ae`
            <ha-formfield label="${ni("editor.action_dialog.show_button.options.armed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="disarmed"
                @change=${()=>this._updateStateConfig(it[this._editAction],{hide:"disarmed"})}
                ?checked=${"disarmed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>`:Ae`
            <ha-formfield label="${ni("editor.action_dialog.show_button.options.disarmed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="armed"
                @change=${()=>this._updateStateConfig(it[this._editAction],{hide:"armed"})}
                ?checked=${"armed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>
              `}
          </div>
        </div>

        <div class="grid">
          <ha-textfield
            label="${ni("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(it[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-icon-picker
            .hass=${this.hass}
            label="${ni("editor.action_dialog.button_icon",this.hass.language)}"
            .value="${e.button_icon||tt[this._editAction]}"
            ?disabled=${e.hide}
            @value-changed=${e=>this._updateStateConfig(it[this._editAction],{button_icon:e.detail.value})}
            >
          </ha-icon-picker>

          <ha-textfield
            label="${ni("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${it[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(it[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-select
            .icon=${si(e.color)}
            label="${ni("editor.action_dialog.color",this.hass.language)}"
            .value=${e.color}
            @closed=${e=>{e.stopPropagation()}}
            @selected=${e=>{e.stopPropagation();const t=e.target.value;this._updateStateConfig(it[this._editAction],{color:t||void 0})}}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
          ${e.color?Ae`
              <span slot="icon">
                <span class="circle-color" style="--circle-color: ${Object.values(dt).includes(e.color)?`var(--${e.color}-color)`:e.color}">
                </span>
              </span>
            `:Oe}
            ${si(e.color)&&e.color.length&&!Object.values(dt).includes(e.color)?Ae`
                <ha-list-item .value=${e.color} graphic="icon">
                  ${e.color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${e.color}">
                    </span>
                  </span>
                </ha-list-item>
            `:Oe}
            ${Object.values(dt).map((e=>Ae`
                <ha-list-item .value=${e} graphic="icon">
                  ${this.hass.localize(`ui.components.color-picker.colors.${e}`)||e}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${`var(--${e}-color)`}">
                    </span>
                  </span>
                </ha-list-item>
              `))}
          </ha-select>
        </div>
      `}return Ae`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${e=>this._entities.includes(e.entity_id)}
            @change=${e=>this._updateConfig("entity",e.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-textfield>
        </div>

        ${l?Ae`
              <div class="config-item">
                <span>${ni("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row">
                ${this._renderActionOptions()}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${ni("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${rt}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${ni("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${rt}"
              step="0.1"
              labeled
              ?disabled=${!l||!d||(null===(t=this._config)||void 0===t?void 0:t.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${ni("editor.hide_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_keypad}
              @change=${e=>this._updateConfig("hide_keypad",e.target.checked)}
              ?disabled=${!l||!d}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${ni("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!l||!d||(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_arm_required)==(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_disarm_required)||(null===(o=this._config)||void 0===o?void 0:o.use_code_dialog)||(null===(n=this._config)||void 0===n?void 0:n.hide_keypad)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${ni("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${e=>this._updateConfig("use_code_dialog",e.target.checked)}
              ?disabled=${!l||!(null===(s=this._alarmoConfig)||void 0===s?void 0:s.code_arm_required)&&!(null===(r=this._alarmoConfig)||void 0===r?void 0:r.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${ni("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!si(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${ni("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${ni("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>
          
          <ha-formfield .label=${ni("editor.show_code_inputfield",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_code_inputfield}
              @change=${e=>this._updateConfig("show_code_inputfield",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${ni("editor.show_header",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_header}
              @change=${e=>this._updateConfig("show_header",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_renderActionOptions(){if(!this._config||!this.hass||!this._config.entity)return Oe;const e=this.hass.states[this._config.entity],t=ci(e);let i=[et.Disarm,...t].map((e=>({id:e,label:this.hass.localize(`ui.card.alarm_control_panel.${e}`),hidden:["always",!0].includes(di(it[e],this._config).hide||!1),order:di(it[e],this._config).button_order})));return i.sort(((e,t)=>e.hidden&&!t.hidden?1:t.hidden&&!e.hidden?-1:si(e.order)||si(t.order)?si(e.order)&&!si(t.order)?-1:!si(e.order)&&si(t.order)?1:e.order-t.order:0)),Ae`
      <ha-sortable
        handle-selector=".handle"
        draggable-selector=".draggable"
        @item-moved=${e=>this._handleActionsMoved(e,i.map((e=>it[e.id])))}
      >
        <div class="sortable-list">
        ${i.map(((e,t)=>Ae`
          <div class="sortable-item ${e.hidden?"":"draggable"}"">
            <ha-svg-icon
              class="handle"
              style="cursor: grab"
              .path=${"M21 11H3V9H21V11M21 13H3V15H21V13Z"}
            ></ha-svg-icon>

            <ha-icon-button
              .path=${e.hidden?"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z":"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
              style="${e.hidden?"":"color: var(--primary-color)"}"
              ?disabled=${!e.hidden&&i.filter((e=>!e.hidden)).length<=2||e.id==et.Disarm}
              @click=${a=>{if(this._updateStateConfig(it[e.id],e.hidden?{hide:void 0}:{hide:"always"}),e.hidden){let e=new CustomEvent("",{detail:{oldIdx:t,nexIdx:i.filter((e=>!e.hidden)).length}});this._handleActionsMoved(e,i.map((e=>it[e.id])))}a.target.blur()}}
            >
            </ha-icon-button>
            <span>${e.label}</span>
            <ha-icon-button
              .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
              style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
              ?disabled=${e.hidden}
              @click=${()=>this._editActionClick(e.id)}
            >
            </ha-icon-button>
          </div>
        `))}
        </div>
      </ha-sortable>
    `}_handleActionsMoved(e,t){const i=e.detail.oldIndex,a=e.detail.newIndex;let o=t[i];t=t.filter(((e,t)=>t!=i)),t.splice(a,0,o);let n=Object.assign({},this._config.states);t.forEach(((e,t)=>{n=Object.assign(Object.assign({},n),{[e]:Object.assign(Object.assign({},n[e]||{}),{button_order:t+1})})})),this._updateConfig("states",n)}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}fi(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter((([e])=>t.includes(e))).reduce(((e,[t,i])=>Object.assign(e,{[t]:i})),{}):{}}(e,Object.keys(e).filter((t=>si(e[t]||"string"==typeof e[t]))));let o=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const n=a(Object.assign(Object.assign({},o[e]),t));o=a(Object.assign(Object.assign({},o),{[e]:n})),this._updateConfig("states",o)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return B`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      ha-textfield {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.sortable-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.sortable-item {
        display: flex;
        font-size: 0.875rem;
        align-items: center;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
      .circle-color {
        display: block;
        background-color: var(--circle-color, var(--divider-color));
        border: 1px solid var(--outline-color);
        border-radius: var(--ha-border-radius-pill);
        width: 20px;
        height: 20px;
        box-sizing: border-box;
      }
    `}};t([Ke({attribute:!1})],mi.prototype,"hass",void 0),t([Je()],mi.prototype,"_config",void 0),t([Je()],mi.prototype,"_alarmoConfig",void 0),t([Je()],mi.prototype,"_entities",void 0),t([Je()],mi.prototype,"_editAction",void 0),mi=t([Ze("alarmo-card-editor")],mi);var vi,bi,yi=Object.freeze({__proto__:null,get AlarmoCardEditor(){return mi}});class wi extends qe{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return nt.includes(i)?this.startTimer():nt.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;nt.includes(e)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",(()=>{this._touchStarted=!0})),this.addEventListener("touchend",(()=>{setTimeout((()=>{this._touchStarted=!1}),10)})),this.addEventListener("mouseenter",(()=>{this._touchStarted||(this._hover=!0)})),this.addEventListener("mouseleave",(()=>{this._hover=!1}))}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then((e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)})).catch((e=>{})),this.timer=window.setInterval((()=>{this.requestUpdate()}),1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this._hover&&nt.includes(e)&&this.timer?Ae` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?Ae` ${Math.max(Math.round(this.getRemaining()),0)} `:Ae` <ha-icon .icon=${Xe[e]}></ha-icon> `}handleClick(){const e=this.hass.states[this.entity].state;nt.includes(e)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):fi(this,"hass-more-info",{entityId:this.entity})}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return Ae`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${a?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${e}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*t).toFixed(2)} ${t.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${e}, 0
              a ${e},${e} 0 1,0 90,0
              a ${e},${e} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${i.state.split("_").shift()} ${a?"timer":""}">
        <div class="value">${this._stateValue(i.state)}</div>
      </div>
    `}static get styles(){return B`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 4px;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed,
      .armed {
        animation: none;
      }
      .triggered,
      .arming,
      .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        animation: none;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}}t([Ke()],wi.prototype,"hass",void 0),t([Ke()],wi.prototype,"entity",void 0),t([Je()],wi.prototype,"_hover",void 0),customElements.define("alarmo-state-badge",wi),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(vi||(vi={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(bi||(bi={}));class ki extends qe{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return Ae``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?hi(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:vi.language}),a=e?t.attributes.friendly_name||(o=t.entity_id).substring(o.indexOf(".")+1):this.entity;var o;let n=!!this.state||"on"==t.state;return Ae`
      <div class="badge-container" @click=${()=>fi(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${n?"active":""}" id="badge">
          <div class="value">
            <ha-state-icon .hass=${this.hass} .stateObj=${t}></ha-state-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${a}</div>
      </div>
    `}static get styles(){return B`
      .badge-container {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        padding: var(--ha-label-badge-padding, 0 0 0 0);
        cursor: pointer;
      }
      .label-badge {
        position: relative;
        display: block;
        margin: 0 auto;
        width: var(--ha-label-badge-size, 2.5em);
        text-align: center;
        height: var(--ha-label-badge-size, 2.5em);
        line-height: var(--ha-label-badge-size, 2.5em);
        font-size: var(--ha-label-badge-font-size, 1.5em);
        border-radius: 50%;
        border: 0.1em solid var(--primary-color);
        color: var(--label-badge-text-color, rgb(76, 76, 76));
        white-space: nowrap;
        background-color: none;
        background-size: cover;
        transition: border 0.3s ease-in-out;
      }
      .label-badge.active {
        border: 0.1em solid var(--label-badge-red);
      }
      .label-badge .value {
        font-size: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label-badge .label {
        position: absolute;
        bottom: -1em;
        left: -0.2em;
        right: -0.2em;
        line-height: 1em;
        font-size: 0.5em;
      }
      .label-badge .label span {
        box-sizing: border-box;
        max-width: 100%;
        display: inline-block;
        background-color: var(--primary-color);
        color: var(--ha-label-badge-label-color, white);
        border-radius: 1em;
        padding: 9% 16% 8% 16%;
        font-weight: 500;
        overflow: hidden;
        text-transform: uppercase;
        text-overflow: ellipsis;
        transition: background-color 0.3s ease-in-out;
        text-transform: var(--ha-label-badge-label-text-transform, uppercase);
      }
      .label-badge.active .label span {
        background-color: var(--label-badge-red);
      }
      .badge-container .title {
        margin-top: 1em;
        font-size: var(--ha-label-badge-title-font-size, 0.9em);
        width: var(--ha-label-badge-title-width, 5em);
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}t([Ke()],ki.prototype,"hass",void 0),t([Ke()],ki.prototype,"entity",void 0),t([Ke()],ki.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",ki);class $i extends qe{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return Ae`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(e){e.target.blur()}static get styles(){return B`
      button {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid var(--alarmo-button-border-color, var(--outline-color));
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: transparent;
        color: var(--alarmo-button-color, var(--primary-color));
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * var(--alarmo-button-font-size));
        letter-spacing: 0.04em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: border-color 0.1s ease-in-out;
      }
      button:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: var(--alarmo-button-background-color, var(--card-background-color));
        opacity: var(--alarmo-button-background-opacity, 0);
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
      }
      button:not(:disabled):hover:before {
        background: var(--alarmo-button-background-color, var(--primary-color));
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.12);
      }
      button:not(:disabled) {
        cursor: pointer;
      }
      button:disabled {
        color: var(--disabled-text-color);
      }
      button:not(:disabled):active:before {
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.24);
      }
      button:not(:disabled):active {
        border: 1px solid var(--alarmo-button-border-color, var(--outline-hover-color));
      }
      button:focus {
        outline: none;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `}}t([Ke({type:Boolean})],$i.prototype,"disabled",void 0),t([Ke({type:Boolean})],$i.prototype,"scaled",void 0),customElements.define("alarmo-button",$i);const xi=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([Ke({attribute:!1})],i.prototype,"hass",void 0),i},Ai=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let Ci=class extends(xi(qe)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:ot})]}async _fetchData(e){var t;if(e.data.area_id===(null===(t=this._params)||void 0===t?void 0:t.area_id))switch(e.data.event){case at.Disarm:case at.Arm:case at.Trigger:this._confirm(e.data.event);break;case at.InvalidCodeProvided:case at.NoCodeProvided:this._showCodeError();break;case at.FailedToArm:case at.CommandNotAllowed:this._confirm(e.data.event);case at.TriggerTimeExpired:case at.ReadyToArmModesChanged:}}shouldUpdate(e){const t=e.get("hass");return!(!e.has("_params")&&this._params)||(!!e.has("_input")||(!t||t.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(t.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(e){super.firstUpdated(e),this.addEventListener("keypress",(e=>{"Enter"===e.key&&this._input.length&&this._submit()}))}async showDialog(e){this._params=e,this._input="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,await this.updateComplete}closeDialog(){return this._params=void 0,this._showClearButton=!1,!0}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var e;const t=null!==(e=this._input)&&void 0!==e?e:"";this._clearCodeError(),this._params.action==et.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._params.entity_id,code:t}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:it[this._params.action],code:t}))}_confirm(e){var t,i;null===(i=null===(t=this._params)||void 0===t?void 0:t.confirm)||void 0===i||i.call(t,e),this.closeDialog()}_cancel(){var e,t;null===(t=null===(e=this._params)||void 0===e?void 0:e.cancel)||void 0===t||t.call(e),this.closeDialog()}_numberClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+t,this._showClearButton=!0}_clear(){this._input="",this._showClearButton=!1}render(){if(!this._params||!this.hass)return Oe;return"text"===this._params.code_format?Ae`
        <ha-dialog
          open
          @closed=${this._cancel}
          header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
          width="small"
        >
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputMode="text"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <ha-dialog-footer>
            <ha-button slot="secondaryAction" data-dialog="close" appearance="plain">
              ${this.hass.localize("ui.common.cancel")}
            </ha-button>
            <ha-button @click=${this._submit} slot="primaryAction">
              ${this.hass.localize("ui.common.submit")}
            </ha-button>
          </ha-dialog-footer>
        </ha-dialog>
      `:Ae`
      <ha-dialog
        open
        header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
        @closed=${this._cancel}
        width="small"
      >
        <div class="container">
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputMode="numeric"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <div class="keypad">
            ${Ai.map((e=>""===e?Ae`<span></span>`:"clear"===e?Ae`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===e?Ae`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:Ae`
                        <ha-control-button .value=${e} @click=${this._numberClick} .label=${e}>
                          ${e}
                        </ha-control-button>
                      `))}
          </div>
        </div>
      </ha-dialog>
    `}};Ci.styles=B`
    ha-dialog {
      /* Place above other dialogs */
      --dialog-z-index: 104;
    }
    ha-textfield {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-textfield.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
    }
    @keyframes shake {
      0% {
        margin-left: calc(50% - 240px / 2);
      }
      25% {
        margin-left: calc(50% - 240px / 2 + 10px);
      }
      75% {
        margin-left: calc(50% - 240px / 2 - 10px);
      }
      100% {
        margin-left: calc(50% - 240px / 2);
      }
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .keypad {
      --keypad-columns: 3;
      margin-top: 12px;
      padding: 12px;
      display: grid;
      grid-template-columns: repeat(var(--keypad-columns), auto);
      grid-auto-rows: auto;
      grid-gap: 24px;
      justify-items: center;
      align-items: center;
    }
    .clear {
      grid-row-start: 4;
      grid-column-start: 0;
    }
    @media all and (max-height: 450px) {
      .keypad {
        --keypad-columns: 6;
      }
      .clear {
        grid-row-start: 1;
        grid-column-start: 6;
      }
    }

    ha-control-button {
      width: 56px;
      height: 56px;
      --control-button-border-radius: 28px;
      --mdc-icon-size: 24px;
      font-size: 24px;
    }
    .submit {
      --control-button-background-color: var(--green-color);
      --control-button-icon-color: var(--green-color);
    }
    .clear {
      --control-button-background-color: var(--red-color);
      --control-button-icon-color: var(--red-color);
    }
    .hidden {
      display: none;
    }
    .buttons {
      margin-top: 12px;
    }
  `,t([Ke({attribute:!1})],Ci.prototype,"hass",void 0),t([Je()],Ci.prototype,"_params",void 0),t([Je()],Ci.prototype,"_input",void 0),t([Je()],Ci.prototype,"_showClearButton",void 0),t([Je()],Ci.prototype,"_narrow",void 0),Ci=t([Ze("alarmo-code-dialog")],Ci);var Oi=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return Ci}});let Si=class extends qe{render(){if(!this.hass||!this.config)return Oe;const e=this.hass.states[this.config.entity];let t=e.state;const i=Object.values(et).map((e=>it[e]));if(!i.includes(t)){const i=e.attributes.arm_mode;i&&(t=i)}return Ae` <div class="container">${this._renderOptions(t)}</div> `}_renderOptions(e){const t=this.hass.states[this.config.entity],i=[et.Disarm,...ci(t)].filter((e=>{const i=di(it[e],this.config).hide;if("boolean"==typeof i||!si(i))return!i;switch(i){case"always":return!1;case"never":return!0;case"armed":return"disarmed"==t.state;case"disarmed":return"disarmed"!==t.state}})),a=i.map((e=>di(it[e],this.config))).some((e=>!si(e.button_label)||e.button_label.length));return i.sort(((e,t)=>{const i=di(it[e],this.config).button_order,a=di(it[t],this.config).button_order;return si(i)||si(a)?si(i)&&!si(a)?-1:!si(i)&&si(a)?1:i-a:0})),i.map((i=>{const o=si(this.readyForArmModes)&&!this.readyForArmModes.includes(it[i])&&i!=et.Disarm,n=di(it[i],this.config);return Ae`
        <div
          class="button ${it[i]==e?"selected":""}"
          @click=${e=>this._handleClick(e,i)}
        >
          <div class="content ${a?"has-text":""}">
            <ha-icon icon="${ri(n.button_icon)?tt[i]:n.button_icon}"></ha-icon>
            ${it[i]!=e&&si(this.readyForArmModes)?Ae`
                  <ha-icon
                    icon="${"mdi:circle-medium"}"
                    class="badge ${o?"error":"success"}"
                  ></ha-icon>
                `:Oe}
            <span>
              ${si(n.button_label)?n.button_label:i==et.Disarm&&t.state!==Qe.Disarmed?this.hass.localize(`ui.card.alarm_control_panel.${i}`):this.hass.localize(`ui.card.alarm_control_panel.modes.${it[i]}`)}
            </span>
          </div>
        </div>
      `}))}_handleClick(e,t){fi(this,"button-clicked",{ev:e,action:t})}static get styles(){return B`
      :host {
        width: 100%;
        display: inline-block;
        padding: 0px 10px;
        box-sizing: border-box;
      }
      div.container {
        position: relative;
        display: flex;
        width: 100%;
        gap: 0px;
        flex-wrap: wrap;
        padding: 4px;
        box-sizing: border-box;
        --selected-color: var(--alarm-state-color);
      }
      div.container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--primary-text-color);
        opacity: 0.05;
        border-radius: calc(var(--content-scale, 1) * 18px);
      }
      div.button {
        cursor: pointer;
        position: relative;
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* For safari border-radius overflow */
        z-index: 0;
      }
      div.content {
        display: flex;
        position: relative;
        inline-size: calc(100% - 4px);
        border-radius: calc(var(--content-scale, 1) * 6px);
        height: calc(var(--content-scale, 1) * 26px);
        color: var(--primary-text-color);
        --mdc-icon-size: calc(var(--content-scale, 1) * 22px);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        padding: 8px 2px;
        overvlow: hidden;
        flex: 1;
        gap: 4px;
        transition: color ease-in-out 180ms;
      }
      div.content.has-text {
        height: calc(var(--content-scale, 1) * 40px);
      }
      div.content::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--selected-color);
        opacity: 0;
        border-radius: calc(var(--content-scale, 1) * 14px);
        transition:
          background-color ease-in-out 180ms,
          opacity ease-in-out 80ms;
      }
      div.content.focused::before,
      div.content:hover::before {
        opacity: 0.24;
      }
      div.button.selected .content::before {
        opacity: 1;
      }
      div.content ha-icon {
        display: flex;
      }
      div.content span {
        display: flex;
        max-width: calc(100% - 4px);
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: clip;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        font-weight: 400;
        font-size: calc(var(--content-scale, 1) * 1rem);
      }
      div.button.selected div.content ha-icon,
      div.button.selected div.content {
        color: white;
      }
      @media (max-width: 280px) {
        div.container {
          flex-direction: column;
        }
      }
      div.content ha-icon.badge {
        position: absolute;
        top: 0px;
        margin-left: calc(var(--content-scale, 1) * 28px);
      }
      div.content ha-icon.success {
        color: var(--green-color);
      }
      div.content ha-icon.error {
        color: var(--red-color);
      }
    `}};t([Ke({attribute:!1})],Si.prototype,"hass",void 0),t([Ke({attribute:!1})],Si.prototype,"config",void 0),t([Ke({attribute:!1})],Si.prototype,"readyForArmModes",void 0),Si=t([Ze("alarmo-actions-bar")],Si);const zi=["1","2","3","4","5","6","7","8","9","","0","clear"];return e.AlarmoCard=class extends(xi(qe)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},lt),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return yi})),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find((e=>"alarm_control_panel"==li(e)));return await _i(e).then((e=>{const i=e.sort(((e,t)=>Number(e.area_id)-Number(t.area_id)));i.length&&(t=i[0].entity_id)})),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ye?!ui(t)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==li(e.entity))throw new Error("Invalid configuration provided for entity");if(si(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>rt))throw new Error("Invalid configuration provided for button_scale_keypad");if(si(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>rt))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},st),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:ot})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||_i(this.hass).then((e=>{const t=e.find((e=>e.entity_id==this._config.entity));t&&(this.area_id=t.area_id?t.area_id:null)})).then((()=>gi(this.hass))).then((e=>{this._alarmoConfig=e,this.backendConnection=!0})).then((()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t})).then((e=>{this.readyForArmModes=e.modes})).catch((e=>{this.backendConnection=!1}))}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case at.Arm:this._clearCode();break;case at.Trigger:break;case at.InvalidCodeProvided:case at.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case at.FailedToArm:this.warning="blocking_sensors",this._last_command=e.data.command,this._last_code=this._input,this._clearCode();break;case at.CommandNotAllowed:this._clearCode();break;case at.TriggerTimeExpired:break;case at.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some((e=>t.states[e]!==this.hass.states[e])))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==Qe.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return Ae``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?Ae`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:Ae`
      <ha-card>
        ${i.state===Qe.Disarmed?Ae`
              <ha-dropdown
                placement="bottom-end"
                id="cornerMenu"
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <span class="title">
                  ${ni("arm_options.heading",this.hass.language)}
                </span>
                <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"skip_delay")}>
                  <ha-icon
                    icon="mdi:check"
                    style="${this.armOptions.skip_delay?"":"visibility: hidden"}"
                  ></ha-icon>
                  ${ni("arm_options.skip_delay",this.hass.language)}
                </ha-dropdown-item>
                <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"force")}>
                  <ha-icon
                    icon="mdi:check"
                    style="${this.armOptions.force?"":"visibility: hidden"}"
                  ></ha-icon>
                  ${ni("arm_options.force",this.hass.language)}
                </ha-dropdown-item>
              </ha-dropdown>
            `:""}

          ${this._config.show_header?Ae`
                <div class="header">
                  <div class="icon">
                    <alarmo-state-badge
                      .hass=${this.hass}
                      .entity=${this._config.entity}
                      style="--alarm-state-color: ${pi(i,this._config)}"
                    >
                    </alarmo-state-badge>
                  </div>
                  <div class="summary">
                    <div class="name">
                      ${((e,t)=>ri(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
                    </div>
                    <div class="state">
                      ${hi(i,this.hass.localize,this._config)}
                    </div>
                  </div>
                </div>
              `:Ae`
                <div class="spacer"></div>`}

              ${this._renderWarning()}

        <div id="actions" class="actions">
          ${this._renderActions()}
        </div>

        ${!ui(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?Ae``:this._config.show_code_inputfield?Ae`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!ui(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputMode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ye?"numeric":"text"}
              ></ha-textfield>
            `:Ae`<div class="code-spacer"></div>`}
        ${!ui(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ye||this._config.use_code_dialog||this._config.hide_keypad?Ae``:Ae`
          <div id="keypad" class="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
            ${zi.map((e=>""===e?Ae`
              <alarmo-button
                disabled
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
                class="placeholder"
              ></alarmo-button>
            `:Ae`
              <alarmo-button
                .value="${e}"
                @click=${this._handlePadClick}
                ?disabled=${!ui(i)||"clear"===e&&!this._input.length}
                class="${"clear"!==e?"numberKey":"clear"}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===e?Ae`<ha-icon icon="mdi:close" style="--mdc-icon-size: calc(${this._config.button_scale_keypad} * 24px)"></ha-icon>`:Ae` <span>${e}</span>`}
              </alarmo-button>
            `))}
          </div>
        `}
      </ha-card>
    `:Ae`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return Ae``;const e=this.hass.states[this._config.entity],t=this._config.show_ready_indicator;return Ae`
      <alarmo-actions-bar
        @button-clicked=${e=>this._handleActionClick(e,e.detail.action)}
        .hass=${this.hass}
        .config=${this._config}
        .readyForArmModes=${t?this.readyForArmModes:void 0}
        style="--alarm-state-color: ${pi(e,this._config,!0)}; --content-scale: ${this._config.button_scale_actions}"
      ></alarmo-actions-bar>
    `}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return Ae``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==Qe.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?Ae`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?ni("errors.blocking_sensors",this.hass.language):ni("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map((([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),Ae`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          ${"blocking_sensors"==this.warning&&t.attributes.open_sensors?Ae`
            <alarmo-button
              @click=${this._forceRetryClick}
              style="--content-scale: ${this._config.button_scale_actions}"
              ?scaled=${1!=this._config.button_scale_actions}
            >
              <span>${ni("arm_options.force",this.hass.language)}</span>
            </alarmo-button>
          `:""}
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?Ae`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${ni("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map((e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),Ae`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:Ae``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}async _handleActionClick(e,t){var i;e.target.blur(),this._clearCodeError();const a=this.hass.states[this._config.entity];if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&!this._config.hide_keypad&&ui(a)){const i=await new Promise((i=>{const a=e.target,o={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:t,armOptions:this.armOptions,cancel:()=>{i(null)},confirm:e=>{i(e)}};fi(a,"show-dialog",{dialogTag:"alarmo-code-dialog",dialogImport:()=>Promise.resolve().then((function(){return Oi})),dialogParams:o})}));i!=at.Arm&&i!=at.Disarm||(this.warning="",this.armOptions=Object.assign({},lt))}else t==et.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:it[t],code:this._input})),this._clearCode(),this.warning="",this.armOptions=Object.assign({},lt)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e,t){e.stopImmediatePropagation(),e.target.blur(),"skip_delay"==t?this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay}):"force"==t&&(this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force}))}_forceRetryClick(){if(!this.hass||!this._config||!this._last_command)return;let e=this._last_command;this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:it[e],code:this._last_code,force:!0}),this._last_command=void 0,this._last_code=void 0}static get styles(){return B`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
        gap: 20px;
        margin: 0px 50px;
      }
      .header .icon {
        display: flex;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .spacer {
        height: 8px;
        margin: 0px auto;
        box-sizing: border-box;
      }
      .code-spacer {
        height: 10px;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button {
        margin: 0 8px 8px;
      }
      ha-textfield {
        margin: 15px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
        margin-right: calc(50% - 200px / 2);
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        direction: ltr;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: auto;
        grid-gap: var(--ha-space-4, 16px);
      }
      #keypad alarmo-button {
        width: calc(var(--content-scale, 1) * 56px);
        height: calc(var(--content-scale, 1) * 56px);
        --alarmo-button-font-size: 24px;
        --alarmo-button-background-color: var(--primary-text-color);
        --alarmo-button-background-opacity: 0.05;
        --alarmo-button-border-radius: 50%;
        --alarmo-button-border-color: none;
        --alarmo-button-color: var(--primary-text-color);
        font-weight: 500;
      }
      #keypad alarmo-button.clear:not([disabled]) {
        --alarmo-button-background-color: var(--red-color);
        --alarmo-button-color: var(--red-color);
        --alarmo-button-background-opacity: 0.10;
      }
      #keypad alarmo-button.placeholder {
        visibility: hidden;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        --border-color: var(--label-badge-red);
      }
      div.messagebox.warning {
        --border-color: var(--label-badge-yellow);
      }
      div.messagebox.warning alarmo-sensor-badge {
        --label-badge-red: var(--label-badge-yellow);
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--border-color);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox.warning .description span {
        color: #d0863d;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--border-color);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
      div.messagebox alarmo-button {
        display: flex;
        justify-self: center;
        margin-bottom: 10px;
      }
      ha-dropdown {
        display: block;
        position: absolute;
        right: 4px;
        top: 4px;
      }
      ha-dropdown span.title {
        font-weight: bold;
        display: flex;
        height: 32px;
        align-items: center;
        padding: 0px 8px;
      }
      @media all and (max-width: 250px) {
        ha-dropdown {
          display: none;
        }
      }
    `}},t([Ke({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([Je()],e.AlarmoCard.prototype,"_config",void 0),t([Je()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([Je()],e.AlarmoCard.prototype,"_input",void 0),t([Je()],e.AlarmoCard.prototype,"warning",void 0),t([Je()],e.AlarmoCard.prototype,"area_id",void 0),t([Je()],e.AlarmoCard.prototype,"armOptions",void 0),t([Je()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([Je()],e.AlarmoCard.prototype,"backendConnection",void 0),t([Je()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([Ze("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.6.8".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
