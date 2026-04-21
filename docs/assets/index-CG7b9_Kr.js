(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function GI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hv={exports:{}},gc={},Wv={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),qI=Symbol.for("react.portal"),KI=Symbol.for("react.fragment"),QI=Symbol.for("react.strict_mode"),YI=Symbol.for("react.profiler"),XI=Symbol.for("react.provider"),JI=Symbol.for("react.context"),ZI=Symbol.for("react.forward_ref"),eC=Symbol.for("react.suspense"),tC=Symbol.for("react.memo"),nC=Symbol.for("react.lazy"),Wg=Symbol.iterator;function rC(t){return t===null||typeof t!="object"?null:(t=Wg&&t[Wg]||t["@@iterator"],typeof t=="function"?t:null)}var Gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qv=Object.assign,Kv={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Gv}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qv(){}Qv.prototype=Fi.prototype;function $f(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Gv}var Hf=$f.prototype=new Qv;Hf.constructor=$f;qv(Hf,Fi.prototype);Hf.isPureReactComponent=!0;var Gg=Array.isArray,Yv=Object.prototype.hasOwnProperty,Wf={current:null},Xv={key:!0,ref:!0,__self:!0,__source:!0};function Jv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Yv.call(e,r)&&!Xv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Da,type:t,key:i,ref:o,props:s,_owner:Wf.current}}function sC(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function iC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qg=/\/+/g;function kh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iC(""+t.key):e.toString(36)}function Hl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Da:case qI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+kh(o,0):r,Gg(s)?(n="",t!=null&&(n=t.replace(qg,"$&/")+"/"),Hl(s,e,n,"",function(c){return c})):s!=null&&(Gf(s)&&(s=sC(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(qg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Gg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+kh(i,l);o+=Hl(i,e,n,u,s)}else if(u=rC(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+kh(i,l++),o+=Hl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _l(t,e,n){if(t==null)return t;var r=[],s=0;return Hl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function oC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Wl={transition:null},aC={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:Wf};he.Children={map:_l,forEach:function(t,e,n){_l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _l(t,function(){e++}),e},toArray:function(t){return _l(t,function(e){return e})||[]},only:function(t){if(!Gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Fi;he.Fragment=KI;he.Profiler=YI;he.PureComponent=$f;he.StrictMode=QI;he.Suspense=eC;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aC;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Wf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Yv.call(e,u)&&!Xv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Da,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:JI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XI,_context:t},t.Consumer=t};he.createElement=Jv;he.createFactory=function(t){var e=Jv.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:ZI,render:t}};he.isValidElement=Gf;he.lazy=function(t){return{$$typeof:nC,_payload:{_status:-1,_result:t},_init:oC}};he.memo=function(t,e){return{$$typeof:tC,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(t,e){return Rt.current.useCallback(t,e)};he.useContext=function(t){return Rt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Rt.current.useEffect(t,e)};he.useId=function(){return Rt.current.useId()};he.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Rt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};he.useRef=function(t){return Rt.current.useRef(t)};he.useState=function(t){return Rt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Rt.current.useTransition()};he.version="18.2.0";Wv.exports=he;var W=Wv.exports;const lC=GI(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uC=W,cC=Symbol.for("react.element"),hC=Symbol.for("react.fragment"),dC=Object.prototype.hasOwnProperty,fC=uC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pC={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dC.call(e,r)&&!pC.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:cC,type:t,key:i,ref:o,props:s,_owner:fC.current}}gc.Fragment=hC;gc.jsx=Zv;gc.jsxs=Zv;Hv.exports=gc;var d=Hv.exports,_d={},e0={exports:{}},qt={},t0={exports:{}},n0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var j=z.length;z.push(Q);e:for(;0<j;){var G=j-1>>>1,J=z[G];if(0<s(J,Q))z[G]=Q,z[j]=J,j=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],j=z.pop();if(j!==Q){z[0]=j;e:for(var G=0,J=z.length,Z=J>>>1;G<Z;){var ze=2*(G+1)-1,Pt=z[ze],sn=ze+1,on=z[sn];if(0>s(Pt,j))sn<J&&0>s(on,Pt)?(z[G]=on,z[sn]=j,G=sn):(z[G]=Pt,z[ze]=j,G=ze);else if(sn<J&&0>s(on,j))z[G]=on,z[sn]=j,G=sn;else break e}}return Q}function s(z,Q){var j=z.sortIndex-Q.sortIndex;return j!==0?j:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,I=!1,S=!1,A=!1,O=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function P(z){if(A=!1,k(z),!S)if(n(u)!==null)S=!0,_e(M);else{var Q=n(c);Q!==null&&we(P,Q.startTime-z)}}function M(z,Q){S=!1,A&&(A=!1,E(y),y=-1),I=!0;var j=g;try{for(k(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!N());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var J=G(m.expirationTime<=Q);Q=t.unstable_now(),typeof J=="function"?m.callback=J:m===n(u)&&r(u),k(Q)}else r(u);m=n(u)}if(m!==null)var Z=!0;else{var ze=n(c);ze!==null&&we(P,ze.startTime-Q),Z=!1}return Z}finally{m=null,g=j,I=!1}}var D=!1,w=null,y=-1,T=5,C=-1;function N(){return!(t.unstable_now()-C<T)}function R(){if(w!==null){var z=t.unstable_now();C=z;var Q=!0;try{Q=w(!0,z)}finally{Q?_():(D=!1,w=null)}}else D=!1}var _;if(typeof x=="function")_=function(){x(R)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,se=X.port2;X.port1.onmessage=R,_=function(){se.postMessage(null)}}else _=function(){O(R,0)};function _e(z){w=z,D||(D=!0,_())}function we(z,Q){y=O(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||I||(S=!0,_e(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var j=g;g=Q;try{return z()}finally{g=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=g;g=z;try{return Q()}finally{g=j}},t.unstable_scheduleCallback=function(z,Q,j){var G=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?G+j:G):j=G,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=j+J,z={id:p++,callback:Q,priorityLevel:z,startTime:j,expirationTime:J,sortIndex:-1},j>G?(z.sortIndex=j,e(c,z),n(u)===null&&z===n(c)&&(A?(E(y),y=-1):A=!0,we(P,j-G))):(z.sortIndex=J,e(u,z),S||I||(S=!0,_e(M))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var Q=g;return function(){var j=g;g=Q;try{return z.apply(this,arguments)}finally{g=j}}}})(n0);t0.exports=n0;var mC=t0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=W,Gt=mC;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Xo={};function Ps(t,e){vi(t,e),vi(t+"Capture",e)}function vi(t,e){for(Xo[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=Object.prototype.hasOwnProperty,gC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kg={},Qg={};function _C(t){return yd.call(Qg,t)?!0:yd.call(Kg,t)?!1:gC.test(t)?Qg[t]=!0:(Kg[t]=!0,!1)}function yC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vC(t,e,n,r){if(e===null||typeof e>"u"||yC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function Kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qf,Kf);ct[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qf,Kf);ct[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qf,Kf);ct[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qf(t,e,n,r){var s=ct.hasOwnProperty(e)?ct[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vC(e,n,s,r)&&(n=null),r||s===null?_C(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),qs=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),xd=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),a0=Symbol.for("react.offscreen"),Yg=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=Yg&&t[Yg]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Nh;function So(t){if(Nh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nh=e&&e[1]||""}return`
`+Nh+t}var Ah=!1;function Rh(t,e){if(!t||Ah)return"";Ah=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ah=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function wC(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Rh(t.type,!1),t;case 11:return t=Rh(t.type.render,!1),t;case 1:return t=Rh(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ks:return"Fragment";case qs:return"Portal";case vd:return"Profiler";case Yf:return"StrictMode";case wd:return"Suspense";case xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o0:return(t.displayName||"Context")+".Consumer";case i0:return(t._context.displayName||"Context")+".Provider";case Xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jf:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function xC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===Yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EC(t){var e=l0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=EC(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=l0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Td(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c0(t,e){e=e.checked,e!=null&&Qf(t,"checked",e,!1)}function Id(t,e){c0(t,e);var n=Br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cd(t,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cd(t,e,n){(e!=="number"||du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function ai(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Br(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ko(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Br(n)}}function h0(t,e){var n=Br(e.value),r=Br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function e_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function d0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?d0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,f0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TC=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){TC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function p0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function m0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=p0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var IC=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(t,e){if(e){if(IC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ad(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function Zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bd=null,li=null,ui=null;function t_(t){if(t=Ma(t)){if(typeof bd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=xc(e),bd(t.stateNode,t.type,e))}}function g0(t){li?ui?ui.push(t):ui=[t]:li=t}function _0(){if(li){var t=li,e=ui;if(ui=li=null,t_(t),e)for(t=0;t<e.length;t++)t_(e[t])}}function y0(t,e){return t(e)}function v0(){}var bh=!1;function w0(t,e,n){if(bh)return t(e,n);bh=!0;try{return y0(t,e,n)}finally{bh=!1,(li!==null||ui!==null)&&(v0(),_0())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var r=xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Pd=!1;if(Zn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Pd=!1}function CC(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Do=!1,fu=null,pu=!1,Dd=null,SC={onError:function(t){Do=!0,fu=t}};function kC(t,e,n,r,s,i,o,l,u){Do=!1,fu=null,CC.apply(SC,arguments)}function NC(t,e,n,r,s,i,o,l,u){if(kC.apply(this,arguments),Do){if(Do){var c=fu;Do=!1,fu=null}else throw Error(F(198));pu||(pu=!0,Dd=c)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function x0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function n_(t){if(Ds(t)!==t)throw Error(F(188))}function AC(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return n_(s),t;if(i===r)return n_(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function E0(t){return t=AC(t),t!==null?T0(t):null}function T0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T0(t);if(e!==null)return e;t=t.sibling}return null}var I0=Gt.unstable_scheduleCallback,r_=Gt.unstable_cancelCallback,RC=Gt.unstable_shouldYield,bC=Gt.unstable_requestPaint,Ue=Gt.unstable_now,PC=Gt.unstable_getCurrentPriorityLevel,ep=Gt.unstable_ImmediatePriority,C0=Gt.unstable_UserBlockingPriority,mu=Gt.unstable_NormalPriority,DC=Gt.unstable_LowPriority,S0=Gt.unstable_IdlePriority,_c=null,Sn=null;function OC(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:jC,LC=Math.log,MC=Math.LN2;function jC(t){return t>>>=0,t===0?32:31-(LC(t)/MC|0)|0}var xl=64,El=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=No(l):(i&=o,i!==0&&(r=No(i)))}else o=n&~s,o!==0?r=No(o):i!==0&&(r=No(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),s=1<<n,r|=t[n],e&=~s;return r}function VC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-yn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=VC(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k0(){var t=xl;return xl<<=1,!(xl&4194240)&&(xl=64),t}function Ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function UC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-yn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ye=0;function N0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var A0,np,R0,b0,P0,Ld=!1,Tl=[],Nr=null,Ar=null,Rr=null,ea=new Map,ta=new Map,vr=[],BC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s_(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function fo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ma(e),e!==null&&np(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function zC(t,e,n,r,s){switch(e){case"focusin":return Nr=fo(Nr,t,e,n,r,s),!0;case"dragenter":return Ar=fo(Ar,t,e,n,r,s),!0;case"mouseover":return Rr=fo(Rr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ea.set(i,fo(ea.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ta.set(i,fo(ta.get(i)||null,t,e,n,r,s)),!0}return!1}function D0(t){var e=hs(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=x0(n),e!==null){t.blockedOn=e,P0(t.priority,function(){R0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rd=r,n.target.dispatchEvent(r),Rd=null}else return e=Ma(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function i_(t,e,n){Gl(t)&&n.delete(e)}function $C(){Ld=!1,Nr!==null&&Gl(Nr)&&(Nr=null),Ar!==null&&Gl(Ar)&&(Ar=null),Rr!==null&&Gl(Rr)&&(Rr=null),ea.forEach(i_),ta.forEach(i_)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,Ld||(Ld=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,$C)))}function na(t){function e(s){return po(s,t)}if(0<Tl.length){po(Tl[0],t);for(var n=1;n<Tl.length;n++){var r=Tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&po(Nr,t),Ar!==null&&po(Ar,t),Rr!==null&&po(Rr,t),ea.forEach(e),ta.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)D0(n),n.blockedOn===null&&vr.shift()}var ci=lr.ReactCurrentBatchConfig,_u=!0;function HC(t,e,n,r){var s=ye,i=ci.transition;ci.transition=null;try{ye=1,rp(t,e,n,r)}finally{ye=s,ci.transition=i}}function WC(t,e,n,r){var s=ye,i=ci.transition;ci.transition=null;try{ye=4,rp(t,e,n,r)}finally{ye=s,ci.transition=i}}function rp(t,e,n,r){if(_u){var s=Md(t,e,n,r);if(s===null)zh(t,e,r,yu,n),s_(t,r);else if(zC(s,t,e,n,r))r.stopPropagation();else if(s_(t,r),e&4&&-1<BC.indexOf(t)){for(;s!==null;){var i=Ma(s);if(i!==null&&A0(i),i=Md(t,e,n,r),i===null&&zh(t,e,r,yu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else zh(t,e,r,null,n)}}var yu=null;function Md(t,e,n,r){if(yu=null,t=Zf(r),t=hs(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=x0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function O0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PC()){case ep:return 1;case C0:return 4;case mu:case DC:return 16;case S0:return 536870912;default:return 16}default:return 16}}var Cr=null,sp=null,ql=null;function L0(){if(ql)return ql;var t,e=sp,n=e.length,r,s="value"in Cr?Cr.value:Cr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ql=s.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function o_(){return!1}function Kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Il:o_,this.isPropagationStopped=o_,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),e}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=Kt(Ui),La=Oe({},Ui,{view:0,detail:0}),GC=Kt(La),Dh,Oh,mo,yc=Oe({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Dh=t.screenX-mo.screenX,Oh=t.screenY-mo.screenY):Oh=Dh=0,mo=t),Dh)},movementY:function(t){return"movementY"in t?t.movementY:Oh}}),a_=Kt(yc),qC=Oe({},yc,{dataTransfer:0}),KC=Kt(qC),QC=Oe({},La,{relatedTarget:0}),Lh=Kt(QC),YC=Oe({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),XC=Kt(YC),JC=Oe({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZC=Kt(JC),eS=Oe({},Ui,{data:0}),l_=Kt(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rS[t])?!!e[t]:!1}function op(){return sS}var iS=Oe({},La,{key:function(t){if(t.key){var e=tS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oS=Kt(iS),aS=Oe({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u_=Kt(aS),lS=Oe({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),uS=Kt(lS),cS=Oe({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=Kt(cS),dS=Oe({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=Kt(dS),pS=[9,13,27,32],ap=Zn&&"CompositionEvent"in window,Oo=null;Zn&&"documentMode"in document&&(Oo=document.documentMode);var mS=Zn&&"TextEvent"in window&&!Oo,M0=Zn&&(!ap||Oo&&8<Oo&&11>=Oo),c_=" ",h_=!1;function j0(t,e){switch(t){case"keyup":return pS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function gS(t,e){switch(t){case"compositionend":return V0(e);case"keypress":return e.which!==32?null:(h_=!0,c_);case"textInput":return t=e.data,t===c_&&h_?null:t;default:return null}}function _S(t,e){if(Qs)return t==="compositionend"||!ap&&j0(t,e)?(t=L0(),ql=sp=Cr=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M0&&e.locale!=="ko"?null:e.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function d_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yS[t.type]:e==="textarea"}function F0(t,e,n,r){g0(r),e=vu(e,"onChange"),0<e.length&&(n=new ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Lo=null,ra=null;function vS(t){Y0(t,0)}function vc(t){var e=Js(t);if(u0(e))return t}function wS(t,e){if(t==="change")return e}var U0=!1;if(Zn){var Mh;if(Zn){var jh="oninput"in document;if(!jh){var f_=document.createElement("div");f_.setAttribute("oninput","return;"),jh=typeof f_.oninput=="function"}Mh=jh}else Mh=!1;U0=Mh&&(!document.documentMode||9<document.documentMode)}function p_(){Lo&&(Lo.detachEvent("onpropertychange",B0),ra=Lo=null)}function B0(t){if(t.propertyName==="value"&&vc(ra)){var e=[];F0(e,ra,t,Zf(t)),w0(vS,e)}}function xS(t,e,n){t==="focusin"?(p_(),Lo=e,ra=n,Lo.attachEvent("onpropertychange",B0)):t==="focusout"&&p_()}function ES(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(ra)}function TS(t,e){if(t==="click")return vc(e)}function IS(t,e){if(t==="input"||t==="change")return vc(e)}function CS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:CS;function sa(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!yd.call(e,s)||!xn(t[s],e[s]))return!1}return!0}function m_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g_(t,e){var n=m_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=m_(n)}}function z0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $0(){for(var t=window,e=du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=du(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SS(t){var e=$0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z0(n.ownerDocument.documentElement,n)){if(r!==null&&lp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=g_(n,i);var o=g_(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kS=Zn&&"documentMode"in document&&11>=document.documentMode,Ys=null,jd=null,Mo=null,Vd=!1;function __(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vd||Ys==null||Ys!==du(r)||(r=Ys,"selectionStart"in r&&lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&sa(Mo,r)||(Mo=r,r=vu(jd,"onSelect"),0<r.length&&(e=new ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ys)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Vh={},H0={};Zn&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function wc(t){if(Vh[t])return Vh[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H0)return Vh[t]=e[n];return t}var W0=wc("animationend"),G0=wc("animationiteration"),q0=wc("animationstart"),K0=wc("transitionend"),Q0=new Map,y_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){Q0.set(t,e),Ps(e,[t])}for(var Fh=0;Fh<y_.length;Fh++){var Uh=y_[Fh],NS=Uh.toLowerCase(),AS=Uh[0].toUpperCase()+Uh.slice(1);Xr(NS,"on"+AS)}Xr(W0,"onAnimationEnd");Xr(G0,"onAnimationIteration");Xr(q0,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(K0,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function v_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NC(r,e,void 0,t),t.currentTarget=null}function Y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;v_(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;v_(s,l,c),i=u}}}if(pu)throw t=Dd,pu=!1,Dd=null,t}function Ne(t,e){var n=e[$d];n===void 0&&(n=e[$d]=new Set);var r=t+"__bubble";n.has(r)||(X0(e,t,2,!1),n.add(r))}function Bh(t,e,n){var r=0;e&&(r|=4),X0(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Sl]){t[Sl]=!0,s0.forEach(function(n){n!=="selectionchange"&&(RS.has(n)||Bh(n,!1,t),Bh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Bh("selectionchange",!1,e))}}function X0(t,e,n,r){switch(O0(e)){case 1:var s=HC;break;case 4:s=WC;break;default:s=rp}n=s.bind(null,e,n,t),s=void 0,!Pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function zh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=hs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}w0(function(){var c=i,p=Zf(n),m=[];e:{var g=Q0.get(t);if(g!==void 0){var I=ip,S=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":I=oS;break;case"focusin":S="focus",I=Lh;break;case"focusout":S="blur",I=Lh;break;case"beforeblur":case"afterblur":I=Lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=a_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=KC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=uS;break;case W0:case G0:case q0:I=XC;break;case K0:I=hS;break;case"scroll":I=GC;break;case"wheel":I=fS;break;case"copy":case"cut":case"paste":I=ZC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=u_}var A=(e&4)!==0,O=!A&&t==="scroll",E=A?g!==null?g+"Capture":null:g;A=[];for(var x=c,k;x!==null;){k=x;var P=k.stateNode;if(k.tag===5&&P!==null&&(k=P,E!==null&&(P=Zo(x,E),P!=null&&A.push(oa(x,P,k)))),O)break;x=x.return}0<A.length&&(g=new I(g,S,null,n,p),m.push({event:g,listeners:A}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Rd&&(S=n.relatedTarget||n.fromElement)&&(hs(S)||S[er]))break e;if((I||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,I?(S=n.relatedTarget||n.toElement,I=c,S=S?hs(S):null,S!==null&&(O=Ds(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(I=null,S=c),I!==S)){if(A=a_,P="onMouseLeave",E="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(A=u_,P="onPointerLeave",E="onPointerEnter",x="pointer"),O=I==null?g:Js(I),k=S==null?g:Js(S),g=new A(P,x+"leave",I,n,p),g.target=O,g.relatedTarget=k,P=null,hs(p)===c&&(A=new A(E,x+"enter",S,n,p),A.target=k,A.relatedTarget=O,P=A),O=P,I&&S)t:{for(A=I,E=S,x=0,k=A;k;k=Hs(k))x++;for(k=0,P=E;P;P=Hs(P))k++;for(;0<x-k;)A=Hs(A),x--;for(;0<k-x;)E=Hs(E),k--;for(;x--;){if(A===E||E!==null&&A===E.alternate)break t;A=Hs(A),E=Hs(E)}A=null}else A=null;I!==null&&w_(m,g,I,A,!1),S!==null&&O!==null&&w_(m,O,S,A,!0)}}e:{if(g=c?Js(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var M=wS;else if(d_(g))if(U0)M=IS;else{M=ES;var D=xS}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=TS);if(M&&(M=M(t,c))){F0(m,M,n,p);break e}D&&D(t,g,c),t==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&Cd(g,"number",g.value)}switch(D=c?Js(c):window,t){case"focusin":(d_(D)||D.contentEditable==="true")&&(Ys=D,jd=c,Mo=null);break;case"focusout":Mo=jd=Ys=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,__(m,n,p);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":__(m,n,p)}var w;if(ap)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Qs?j0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(M0&&n.locale!=="ko"&&(Qs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Qs&&(w=L0()):(Cr=p,sp="value"in Cr?Cr.value:Cr.textContent,Qs=!0)),D=vu(c,y),0<D.length&&(y=new l_(y,t,null,n,p),m.push({event:y,listeners:D}),w?y.data=w:(w=V0(n),w!==null&&(y.data=w)))),(w=mS?gS(t,n):_S(t,n))&&(c=vu(c,"onBeforeInput"),0<c.length&&(p=new l_("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=w))}Y0(m,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Zo(t,n),i!=null&&r.unshift(oa(t,i,s)),i=Zo(t,e),i!=null&&r.push(oa(t,i,s))),t=t.return}return r}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function w_(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Zo(n,i),u!=null&&o.unshift(oa(n,u,l))):s||(u=Zo(n,i),u!=null&&o.push(oa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function x_(t){return(typeof t=="string"?t:""+t).replace(bS,`
`).replace(PS,"")}function kl(t,e,n){if(e=x_(e),x_(t)!==e&&n)throw Error(F(425))}function wu(){}var Fd=null,Ud=null;function Bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(t){return E_.resolve(null).then(t).catch(LS)}:zd;function LS(t){setTimeout(function(){throw t})}function $h(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);na(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function T_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),In="__reactFiber$"+Bi,aa="__reactProps$"+Bi,er="__reactContainer$"+Bi,$d="__reactEvents$"+Bi,MS="__reactListeners$"+Bi,jS="__reactHandles$"+Bi;function hs(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=T_(t);t!==null;){if(n=t[In])return n;t=T_(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[In]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function xc(t){return t[aa]||null}var Hd=[],Zs=-1;function Jr(t){return{current:t}}function Ae(t){0>Zs||(t.current=Hd[Zs],Hd[Zs]=null,Zs--)}function Ce(t,e){Zs++,Hd[Zs]=t.current,t.current=e}var zr={},Et=Jr(zr),Lt=Jr(!1),ws=zr;function wi(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Mt(t){return t=t.childContextTypes,t!=null}function xu(){Ae(Lt),Ae(Et)}function I_(t,e,n){if(Et.current!==zr)throw Error(F(168));Ce(Et,e),Ce(Lt,n)}function J0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,xC(t)||"Unknown",s));return Oe({},n,r)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,ws=Et.current,Ce(Et,t),Ce(Lt,Lt.current),!0}function C_(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=J0(t,e,ws),r.__reactInternalMemoizedMergedChildContext=t,Ae(Lt),Ae(Et),Ce(Et,t)):Ae(Lt),Ce(Lt,n)}var Bn=null,Ec=!1,Hh=!1;function Z0(t){Bn===null?Bn=[t]:Bn.push(t)}function VS(t){Ec=!0,Z0(t)}function Zr(){if(!Hh&&Bn!==null){Hh=!0;var t=0,e=ye;try{var n=Bn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,Ec=!1}catch(s){throw Bn!==null&&(Bn=Bn.slice(t+1)),I0(ep,Zr),s}finally{ye=e,Hh=!1}}return null}var ei=[],ti=0,Tu=null,Iu=0,Qt=[],Yt=0,xs=null,zn=1,$n="";function as(t,e){ei[ti++]=Iu,ei[ti++]=Tu,Tu=t,Iu=e}function ew(t,e,n){Qt[Yt++]=zn,Qt[Yt++]=$n,Qt[Yt++]=xs,xs=t;var r=zn;t=$n;var s=32-yn(r)-1;r&=~(1<<s),n+=1;var i=32-yn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,zn=1<<32-yn(e)+s|n<<s|r,$n=i+t}else zn=1<<i|n<<s|r,$n=t}function up(t){t.return!==null&&(as(t,1),ew(t,1,0))}function cp(t){for(;t===Tu;)Tu=ei[--ti],ei[ti]=null,Iu=ei[--ti],ei[ti]=null;for(;t===xs;)xs=Qt[--Yt],Qt[Yt]=null,$n=Qt[--Yt],Qt[Yt]=null,zn=Qt[--Yt],Qt[Yt]=null}var Wt=null,Ht=null,Re=!1,hn=null;function tw(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function S_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:zn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Ht=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gd(t){if(Re){var e=Ht;if(e){var n=e;if(!S_(t,e)){if(Wd(t))throw Error(F(418));e=br(n.nextSibling);var r=Wt;e&&S_(t,e)?tw(r,n):(t.flags=t.flags&-4097|2,Re=!1,Wt=t)}}else{if(Wd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Re=!1,Wt=t}}}function k_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Nl(t){if(t!==Wt)return!1;if(!Re)return k_(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bd(t.type,t.memoizedProps)),e&&(e=Ht)){if(Wd(t))throw nw(),Error(F(418));for(;e;)tw(t,e),e=br(e.nextSibling)}if(k_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Wt?br(t.stateNode.nextSibling):null;return!0}function nw(){for(var t=Ht;t;)t=br(t.nextSibling)}function xi(){Ht=Wt=null,Re=!1}function hp(t){hn===null?hn=[t]:hn.push(t)}var FS=lr.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cu=Jr(null),Su=null,ni=null,dp=null;function fp(){dp=ni=Su=null}function pp(t){var e=Cu.current;Ae(Cu),t._currentValue=e}function qd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hi(t,e){Su=t,dp=ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},ni===null){if(Su===null)throw Error(F(308));ni=t,Su.dependencies={lanes:0,firstContext:t}}else ni=ni.next=t;return e}var ds=null;function mp(t){ds===null?ds=[t]:ds.push(t)}function rw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,mp(e)):(n.next=s.next,s.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,tr(t,n)}return s=r.interleaved,s===null?(e.next=e,mp(r)):(e.next=s.next,s.next=e),r.interleaved=e,tr(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}function N_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ku(t,e,n,r){var s=t.updateQueue;yr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=c=u=null,l=i;do{var g=l.lane,I=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,A=l;switch(g=e,I=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){m=S.call(I,m,g);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,g=typeof S=="function"?S.call(I,m,g):S,g==null)break e;m=Oe({},m,g);break e;case 2:yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=I,u=m):p=p.next=I,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ts|=o,t.lanes=o,t.memoizedState=m}}function A_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var iw=new r0.Component().refs;function Kd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tc={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=Or(t),i=Qn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,s),e!==null&&(vn(e,t,s,r),Ql(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=Or(t),i=Qn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,s),e!==null&&(vn(e,t,s,r),Ql(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=Or(t),s=Qn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Pr(t,s,r),e!==null&&(vn(e,t,r,n),Ql(e,t,r))}};function R_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(s,i):!0}function ow(t,e,n){var r=!1,s=zr,i=e.contextType;return typeof i=="object"&&i!==null?i=tn(i):(s=Mt(e)?ws:Et.current,r=e.contextTypes,i=(r=r!=null)?wi(t,s):zr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function b_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tc.enqueueReplaceState(e,e.state,null)}function Qd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=iw,gp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=tn(i):(i=Mt(e)?ws:Et.current,s.context=wi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Kd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Tc.enqueueReplaceState(s,s.state,null),ku(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;l===iw&&(l=s.refs={}),o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Al(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function P_(t){var e=t._init;return e(t._payload)}function aw(t){function e(E,x){if(t){var k=E.deletions;k===null?(E.deletions=[x],E.flags|=16):k.push(x)}}function n(E,x){if(!t)return null;for(;x!==null;)e(E,x),x=x.sibling;return null}function r(E,x){for(E=new Map;x!==null;)x.key!==null?E.set(x.key,x):E.set(x.index,x),x=x.sibling;return E}function s(E,x){return E=Lr(E,x),E.index=0,E.sibling=null,E}function i(E,x,k){return E.index=k,t?(k=E.alternate,k!==null?(k=k.index,k<x?(E.flags|=2,x):k):(E.flags|=2,x)):(E.flags|=1048576,x)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,x,k,P){return x===null||x.tag!==6?(x=Xh(k,E.mode,P),x.return=E,x):(x=s(x,k),x.return=E,x)}function u(E,x,k,P){var M=k.type;return M===Ks?p(E,x,k.props.children,P,k.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&P_(M)===x.type)?(P=s(x,k.props),P.ref=go(E,x,k),P.return=E,P):(P=tu(k.type,k.key,k.props,null,E.mode,P),P.ref=go(E,x,k),P.return=E,P)}function c(E,x,k,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==k.containerInfo||x.stateNode.implementation!==k.implementation?(x=Jh(k,E.mode,P),x.return=E,x):(x=s(x,k.children||[]),x.return=E,x)}function p(E,x,k,P,M){return x===null||x.tag!==7?(x=_s(k,E.mode,P,M),x.return=E,x):(x=s(x,k),x.return=E,x)}function m(E,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Xh(""+x,E.mode,k),x.return=E,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case yl:return k=tu(x.type,x.key,x.props,null,E.mode,k),k.ref=go(E,null,x),k.return=E,k;case qs:return x=Jh(x,E.mode,k),x.return=E,x;case _r:var P=x._init;return m(E,P(x._payload),k)}if(ko(x)||co(x))return x=_s(x,E.mode,k,null),x.return=E,x;Al(E,x)}return null}function g(E,x,k,P){var M=x!==null?x.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return M!==null?null:l(E,x,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case yl:return k.key===M?u(E,x,k,P):null;case qs:return k.key===M?c(E,x,k,P):null;case _r:return M=k._init,g(E,x,M(k._payload),P)}if(ko(k)||co(k))return M!==null?null:p(E,x,k,P,null);Al(E,k)}return null}function I(E,x,k,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return E=E.get(k)||null,l(x,E,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case yl:return E=E.get(P.key===null?k:P.key)||null,u(x,E,P,M);case qs:return E=E.get(P.key===null?k:P.key)||null,c(x,E,P,M);case _r:var D=P._init;return I(E,x,k,D(P._payload),M)}if(ko(P)||co(P))return E=E.get(k)||null,p(x,E,P,M,null);Al(x,P)}return null}function S(E,x,k,P){for(var M=null,D=null,w=x,y=x=0,T=null;w!==null&&y<k.length;y++){w.index>y?(T=w,w=null):T=w.sibling;var C=g(E,w,k[y],P);if(C===null){w===null&&(w=T);break}t&&w&&C.alternate===null&&e(E,w),x=i(C,x,y),D===null?M=C:D.sibling=C,D=C,w=T}if(y===k.length)return n(E,w),Re&&as(E,y),M;if(w===null){for(;y<k.length;y++)w=m(E,k[y],P),w!==null&&(x=i(w,x,y),D===null?M=w:D.sibling=w,D=w);return Re&&as(E,y),M}for(w=r(E,w);y<k.length;y++)T=I(w,E,y,k[y],P),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),x=i(T,x,y),D===null?M=T:D.sibling=T,D=T);return t&&w.forEach(function(N){return e(E,N)}),Re&&as(E,y),M}function A(E,x,k,P){var M=co(k);if(typeof M!="function")throw Error(F(150));if(k=M.call(k),k==null)throw Error(F(151));for(var D=M=null,w=x,y=x=0,T=null,C=k.next();w!==null&&!C.done;y++,C=k.next()){w.index>y?(T=w,w=null):T=w.sibling;var N=g(E,w,C.value,P);if(N===null){w===null&&(w=T);break}t&&w&&N.alternate===null&&e(E,w),x=i(N,x,y),D===null?M=N:D.sibling=N,D=N,w=T}if(C.done)return n(E,w),Re&&as(E,y),M;if(w===null){for(;!C.done;y++,C=k.next())C=m(E,C.value,P),C!==null&&(x=i(C,x,y),D===null?M=C:D.sibling=C,D=C);return Re&&as(E,y),M}for(w=r(E,w);!C.done;y++,C=k.next())C=I(w,E,y,C.value,P),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?y:C.key),x=i(C,x,y),D===null?M=C:D.sibling=C,D=C);return t&&w.forEach(function(R){return e(E,R)}),Re&&as(E,y),M}function O(E,x,k,P){if(typeof k=="object"&&k!==null&&k.type===Ks&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case yl:e:{for(var M=k.key,D=x;D!==null;){if(D.key===M){if(M=k.type,M===Ks){if(D.tag===7){n(E,D.sibling),x=s(D,k.props.children),x.return=E,E=x;break e}}else if(D.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&P_(M)===D.type){n(E,D.sibling),x=s(D,k.props),x.ref=go(E,D,k),x.return=E,E=x;break e}n(E,D);break}else e(E,D);D=D.sibling}k.type===Ks?(x=_s(k.props.children,E.mode,P,k.key),x.return=E,E=x):(P=tu(k.type,k.key,k.props,null,E.mode,P),P.ref=go(E,x,k),P.return=E,E=P)}return o(E);case qs:e:{for(D=k.key;x!==null;){if(x.key===D)if(x.tag===4&&x.stateNode.containerInfo===k.containerInfo&&x.stateNode.implementation===k.implementation){n(E,x.sibling),x=s(x,k.children||[]),x.return=E,E=x;break e}else{n(E,x);break}else e(E,x);x=x.sibling}x=Jh(k,E.mode,P),x.return=E,E=x}return o(E);case _r:return D=k._init,O(E,x,D(k._payload),P)}if(ko(k))return S(E,x,k,P);if(co(k))return A(E,x,k,P);Al(E,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,x!==null&&x.tag===6?(n(E,x.sibling),x=s(x,k),x.return=E,E=x):(n(E,x),x=Xh(k,E.mode,P),x.return=E,E=x),o(E)):n(E,x)}return O}var Ei=aw(!0),lw=aw(!1),ja={},kn=Jr(ja),la=Jr(ja),ua=Jr(ja);function fs(t){if(t===ja)throw Error(F(174));return t}function _p(t,e){switch(Ce(ua,e),Ce(la,t),Ce(kn,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}Ae(kn),Ce(kn,e)}function Ti(){Ae(kn),Ae(la),Ae(ua)}function uw(t){fs(ua.current);var e=fs(kn.current),n=kd(e,t.type);e!==n&&(Ce(la,t),Ce(kn,n))}function yp(t){la.current===t&&(Ae(kn),Ae(la))}var Pe=Jr(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wh=[];function vp(){for(var t=0;t<Wh.length;t++)Wh[t]._workInProgressVersionPrimary=null;Wh.length=0}var Yl=lr.ReactCurrentDispatcher,Gh=lr.ReactCurrentBatchConfig,Es=0,De=null,qe=null,Ze=null,Au=!1,jo=!1,ca=0,US=0;function mt(){throw Error(F(321))}function wp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function xp(t,e,n,r,s,i){if(Es=i,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?HS:WS,t=n(r,s),jo){i=0;do{if(jo=!1,ca=0,25<=i)throw Error(F(301));i+=1,Ze=qe=null,e.updateQueue=null,Yl.current=GS,t=n(r,s)}while(jo)}if(Yl.current=Ru,e=qe!==null&&qe.next!==null,Es=0,Ze=qe=De=null,Au=!1,e)throw Error(F(300));return t}function Ep(){var t=ca!==0;return ca=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function nn(){if(qe===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Ze===null?De.memoizedState:Ze.next;if(e!==null)Ze=e,qe=t;else{if(t===null)throw Error(F(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function ha(t,e){return typeof e=="function"?e(t):e}function qh(t){var e=nn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=qe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var p=c.lane;if((Es&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,De.lanes|=p,Ts|=p}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,xn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,De.lanes|=i,Ts|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kh(t){var e=nn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);xn(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function cw(){}function hw(t,e){var n=De,r=nn(),s=e(),i=!xn(r.memoizedState,s);if(i&&(r.memoizedState=s,Ot=!0),r=r.queue,Tp(pw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,da(9,fw.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(F(349));Es&30||dw(n,e,s)}return s}function dw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fw(t,e,n,r){e.value=n,e.getSnapshot=r,mw(e)&&gw(t)}function pw(t,e,n){return n(function(){mw(e)&&gw(t)})}function mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function gw(t){var e=tr(t,1);e!==null&&vn(e,t,1,-1)}function D_(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=$S.bind(null,De,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _w(){return nn().memoizedState}function Xl(t,e,n,r){var s=Tn();De.flags|=t,s.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Ic(t,e,n,r){var s=nn();r=r===void 0?null:r;var i=void 0;if(qe!==null){var o=qe.memoizedState;if(i=o.destroy,r!==null&&wp(r,o.deps)){s.memoizedState=da(e,n,i,r);return}}De.flags|=t,s.memoizedState=da(1|e,n,i,r)}function O_(t,e){return Xl(8390656,8,t,e)}function Tp(t,e){return Ic(2048,8,t,e)}function yw(t,e){return Ic(4,2,t,e)}function vw(t,e){return Ic(4,4,t,e)}function ww(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xw(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,ww.bind(null,e,t),n)}function Ip(){}function Ew(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Iw(t,e,n){return Es&21?(xn(n,e)||(n=k0(),De.lanes|=n,Ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function BS(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Gh.transition;Gh.transition={};try{t(!1),e()}finally{ye=n,Gh.transition=r}}function Cw(){return nn().memoizedState}function zS(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sw(t))kw(e,n);else if(n=rw(t,e,n,r),n!==null){var s=Nt();vn(n,t,r,s),Nw(n,e,r)}}function $S(t,e,n){var r=Or(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sw(t))kw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,xn(l,o)){var u=e.interleaved;u===null?(s.next=s,mp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=rw(t,e,s,r),n!==null&&(s=Nt(),vn(n,t,r,s),Nw(n,e,r))}}function Sw(t){var e=t.alternate;return t===De||e!==null&&e===De}function kw(t,e){jo=Au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}var Ru={readContext:tn,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},HS={readContext:tn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:O_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,ww.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zS.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:D_,useDebugValue:Ip,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=D_(!1),e=t[0];return t=BS.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,s=Tn();if(Re){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),tt===null)throw Error(F(349));Es&30||dw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,O_(pw.bind(null,r,i,t),[t]),r.flags|=2048,da(9,fw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Tn(),e=tt.identifierPrefix;if(Re){var n=$n,r=zn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=US++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WS={readContext:tn,useCallback:Ew,useContext:tn,useEffect:Tp,useImperativeHandle:xw,useInsertionEffect:yw,useLayoutEffect:vw,useMemo:Tw,useReducer:qh,useRef:_w,useState:function(){return qh(ha)},useDebugValue:Ip,useDeferredValue:function(t){var e=nn();return Iw(e,qe.memoizedState,t)},useTransition:function(){var t=qh(ha)[0],e=nn().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:hw,useId:Cw,unstable_isNewReconciler:!1},GS={readContext:tn,useCallback:Ew,useContext:tn,useEffect:Tp,useImperativeHandle:xw,useInsertionEffect:yw,useLayoutEffect:vw,useMemo:Tw,useReducer:Kh,useRef:_w,useState:function(){return Kh(ha)},useDebugValue:Ip,useDeferredValue:function(t){var e=nn();return qe===null?e.memoizedState=t:Iw(e,qe.memoizedState,t)},useTransition:function(){var t=Kh(ha)[0],e=nn().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:hw,useId:Cw,unstable_isNewReconciler:!1};function Ii(t,e){try{var n="",r=e;do n+=wC(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Qh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function Aw(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pu||(Pu=!0,af=r),Yd(t,e)},n}function Rw(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Yd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yd(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function L_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=a1.bind(null,t,e,n),e.then(t,t))}function M_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function j_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var KS=lr.ReactCurrentOwner,Ot=!1;function St(t,e,n,r){e.child=t===null?lw(e,null,n,r):Ei(e,t.child,n,r)}function V_(t,e,n,r,s){n=n.render;var i=e.ref;return hi(e,s),r=xp(t,e,n,r,i,s),n=Ep(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,nr(t,e,s)):(Re&&n&&up(e),e.flags|=1,St(t,e,r,s),e.child)}function F_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Pp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,bw(t,e,i,r,s)):(t=tu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return nr(t,e,s)}return e.flags|=1,t=Lr(i,r),t.ref=e.ref,t.return=e,e.child=t}function bw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(sa(i,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,nr(t,e,s)}return Xd(t,e,n,r,s)}function Pw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(si,Bt),Bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(si,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(si,Bt),Bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ce(si,Bt),Bt|=r;return St(t,e,s,n),e.child}function Dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xd(t,e,n,r,s){var i=Mt(n)?ws:Et.current;return i=wi(e,i),hi(e,s),n=xp(t,e,n,r,i,s),r=Ep(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,nr(t,e,s)):(Re&&r&&up(e),e.flags|=1,St(t,e,n,s),e.child)}function U_(t,e,n,r,s){if(Mt(n)){var i=!0;Eu(e)}else i=!1;if(hi(e,s),e.stateNode===null)Jl(t,e),ow(e,n,r),Qd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=Mt(n)?ws:Et.current,c=wi(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&b_(e,o,r,c),yr=!1;var g=e.memoizedState;o.state=g,ku(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Lt.current||yr?(typeof p=="function"&&(Kd(e,n,p,r),u=e.memoizedState),(l=yr||R_(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:un(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=Mt(n)?ws:Et.current,u=wi(e,u));var I=n.getDerivedStateFromProps;(p=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&b_(e,o,r,u),yr=!1,g=e.memoizedState,o.state=g,ku(e,r,o,s);var S=e.memoizedState;l!==m||g!==S||Lt.current||yr?(typeof I=="function"&&(Kd(e,n,I,r),S=e.memoizedState),(c=yr||R_(e,n,c,r,g,S,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Jd(t,e,n,r,i,s)}function Jd(t,e,n,r,s,i){Dw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&C_(e,n,!1),nr(t,e,i);r=e.stateNode,KS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ei(e,t.child,null,i),e.child=Ei(e,null,l,i)):St(t,e,l,i),e.memoizedState=r.state,s&&C_(e,n,!0),e.child}function Ow(t){var e=t.stateNode;e.pendingContext?I_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&I_(t,e.context,!1),_p(t,e.containerInfo)}function B_(t,e,n,r,s){return xi(),hp(s),e.flags|=256,St(t,e,n,r),e.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lw(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ce(Pe,s&1),t===null)return Gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=kc(o,r,0,null),t=_s(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ef(n),e.memoizedState=Zd,t):Cp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return QS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Lr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Lr(l,i):(i=_s(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Zd,r}return i=t.child,t=i.sibling,r=Lr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cp(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rl(t,e,n,r){return r!==null&&hp(r),Ei(e,t.child,null,n),t=Cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Qh(Error(F(422))),Rl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=kc({mode:"visible",children:r.children},s,0,null),i=_s(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ei(e,t.child,null,o),e.child.memoizedState=ef(o),e.memoizedState=Zd,i);if(!(e.mode&1))return Rl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Qh(i,r,void 0),Rl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ot||l){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,tr(t,s),vn(r,t,s,-1))}return bp(),r=Qh(Error(F(421))),Rl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=l1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ht=br(s.nextSibling),Wt=e,Re=!0,hn=null,t!==null&&(Qt[Yt++]=zn,Qt[Yt++]=$n,Qt[Yt++]=xs,zn=t.id,$n=t.overflow,xs=e),e=Cp(e,r.children),e.flags|=4096,e)}function z_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qd(t.return,e,n)}function Yh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Mw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&z_(t,n,e);else if(t.tag===19)z_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Yh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Nu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Yh(e,!0,n,null,i);break;case"together":Yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YS(t,e,n){switch(e.tag){case 3:Ow(e),xi();break;case 5:uw(e);break;case 1:Mt(e.type)&&Eu(e);break;case 4:_p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ce(Cu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?Lw(t,e,n):(Ce(Pe,Pe.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Ce(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Pw(t,e,n)}return nr(t,e,n)}var jw,tf,Vw,Fw;jw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};Vw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,fs(kn.current);var i=null;switch(n){case"input":s=Td(t,s),r=Td(t,r),i=[];break;case"select":s=Oe({},s,{value:void 0}),r=Oe({},r,{value:void 0}),i=[];break;case"textarea":s=Sd(t,s),r=Sd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wu)}Nd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ne("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Fw=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XS(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Mt(e.type)&&xu(),gt(e),null;case 3:return r=e.stateNode,Ti(),Ae(Lt),Ae(Et),vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(cf(hn),hn=null))),tf(t,e),gt(e),null;case 5:yp(e);var s=fs(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Vw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return gt(e),null}if(t=fs(kn.current),Nl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[In]=e,r[aa]=i,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<Ao.length;s++)Ne(Ao[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Xg(r,i),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",r);break;case"textarea":Zg(r,i),Ne("invalid",r)}Nd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&kl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&kl(r.textContent,l,t),s=["children",""+l]):Xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":vl(r),Jg(r,i,!0);break;case"textarea":vl(r),e_(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=d0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[aa]=r,jw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ad(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),s=r;break;case"iframe":case"object":case"embed":Ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ao.length;s++)Ne(Ao[s],t);s=r;break;case"source":Ne("error",t),s=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),s=r;break;case"details":Ne("toggle",t),s=r;break;case"input":Xg(t,r),s=Td(t,r),Ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Oe({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":Zg(t,r),s=Sd(t,r),Ne("invalid",t);break;default:s=r}Nd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?m0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&f0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jo(t,u):typeof u=="number"&&Jo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ne("scroll",t):u!=null&&Qf(t,i,u,o))}switch(n){case"input":vl(t),Jg(t,r,!1);break;case"textarea":vl(t),e_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Br(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ai(t,!!r.multiple,i,!1):r.defaultValue!=null&&ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)Fw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=fs(ua.current),fs(kn.current),Nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(i=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return gt(e),null;case 13:if(Ae(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ht!==null&&e.mode&1&&!(e.flags&128))nw(),xi(),e.flags|=98560,i=!1;else if(i=Nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[In]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),i=!1}else hn!==null&&(cf(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ye===0&&(Ye=3):bp())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return Ti(),tf(t,e),t===null&&ia(e.stateNode.containerInfo),gt(e),null;case 10:return pp(e.type._context),gt(e),null;case 17:return Mt(e.type)&&xu(),gt(e),null;case 19:if(Ae(Pe),i=e.memoizedState,i===null)return gt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)_o(i,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,_o(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>Ci&&(e.flags|=128,r=!0,_o(i,!1),e.lanes=4194304)}else{if(!r)if(t=Nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Re)return gt(e),null}else 2*Ue()-i.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,_o(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=Pe.current,Ce(Pe,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return Rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function JS(t,e){switch(cp(e),e.tag){case 1:return Mt(e.type)&&xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ti(),Ae(Lt),Ae(Et),vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yp(e),null;case 13:if(Ae(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Pe),null;case 4:return Ti(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var bl=!1,vt=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,q=null;function ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function nf(t,e,n){try{n()}catch(r){je(t,e,r)}}var $_=!1;function e1(t,e){if(Fd=_u,t=$0(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++p===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:t,selectionRange:n},_u=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,O=S.memoizedState,E=e.stateNode,x=E.getSnapshotBeforeUpdate(e.elementType===e.type?A:un(e.type,A),O);E.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(P){je(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return S=$_,$_=!1,S}function Vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&nf(e,n,i)}s=s.next}while(s!==r)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uw(t){var e=t.alternate;e!==null&&(t.alternate=null,Uw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[aa],delete e[$d],delete e[MS],delete e[jS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bw(t){return t.tag===5||t.tag===3||t.tag===4}function H_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wu));else if(r!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var st=null,cn=!1;function dr(t,e,n){for(n=n.child;n!==null;)zw(t,e,n),n=n.sibling}function zw(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:vt||ri(n,e);case 6:var r=st,s=cn;st=null,dr(t,e,n),st=r,cn=s,st!==null&&(cn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(cn?(t=st,n=n.stateNode,t.nodeType===8?$h(t.parentNode,n):t.nodeType===1&&$h(t,n),na(t)):$h(st,n.stateNode));break;case 4:r=st,s=cn,st=n.stateNode.containerInfo,cn=!0,dr(t,e,n),st=r,cn=s;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&nf(n,e,o),s=s.next}while(s!==r)}dr(t,e,n);break;case 1:if(!vt&&(ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,dr(t,e,n),vt=r):dr(t,e,n);break;default:dr(t,e,n)}}function W_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZS),e.forEach(function(r){var s=u1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,cn=!1;break e;case 3:st=l.stateNode.containerInfo,cn=!0;break e;case 4:st=l.stateNode.containerInfo,cn=!0;break e}l=l.return}if(st===null)throw Error(F(160));zw(i,o,s),st=null,cn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){je(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$w(e,t),e=e.sibling}function $w(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),En(t),r&4){try{Vo(3,t,t.return),Cc(3,t)}catch(A){je(t,t.return,A)}try{Vo(5,t,t.return)}catch(A){je(t,t.return,A)}}break;case 1:ln(e,t),En(t),r&512&&n!==null&&ri(n,n.return);break;case 5:if(ln(e,t),En(t),r&512&&n!==null&&ri(n,n.return),t.flags&32){var s=t.stateNode;try{Jo(s,"")}catch(A){je(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&c0(s,i),Ad(l,o);var c=Ad(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?m0(s,m):p==="dangerouslySetInnerHTML"?f0(s,m):p==="children"?Jo(s,m):Qf(s,p,m,c)}switch(l){case"input":Id(s,i);break;case"textarea":h0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?ai(s,!!i.multiple,I,!1):g!==!!i.multiple&&(i.defaultValue!=null?ai(s,!!i.multiple,i.defaultValue,!0):ai(s,!!i.multiple,i.multiple?[]:"",!1))}s[aa]=i}catch(A){je(t,t.return,A)}}break;case 6:if(ln(e,t),En(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){je(t,t.return,A)}}break;case 3:if(ln(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(A){je(t,t.return,A)}break;case 4:ln(e,t),En(t);break;case 13:ln(e,t),En(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Np=Ue())),r&4&&W_(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||p,ln(e,t),vt=c):ln(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(q=t,p=t.child;p!==null;){for(m=q=p;q!==null;){switch(g=q,I=g.child,g.tag){case 0:case 11:case 14:case 15:Vo(4,g,g.return);break;case 1:ri(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){je(r,n,A)}}break;case 5:ri(g,g.return);break;case 22:if(g.memoizedState!==null){q_(m);continue}}I!==null?(I.return=g,q=I):q_(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=p0("display",o))}catch(A){je(t,t.return,A)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(A){je(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ln(e,t),En(t),r&4&&W_(t);break;case 21:break;default:ln(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Jo(s,""),r.flags&=-33);var i=H_(t);of(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=H_(t);sf(t,l,o);break;default:throw Error(F(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function t1(t,e,n){q=t,Hw(t)}function Hw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||bl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||vt;l=bl;var c=vt;if(bl=o,(vt=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?K_(s):u!==null?(u.return=o,q=u):K_(s);for(;i!==null;)q=i,Hw(i),i=i.sibling;q=s,bl=l,vt=c}G_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):G_(t)}}function G_(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Cc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&A_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}A_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}vt||e.flags&512&&rf(e)}catch(g){je(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function q_(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function K_(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){je(e,s,u)}}var i=e.return;try{rf(e)}catch(u){je(e,i,u)}break;case 5:var o=e.return;try{rf(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var n1=Math.ceil,bu=lr.ReactCurrentDispatcher,Sp=lr.ReactCurrentOwner,Zt=lr.ReactCurrentBatchConfig,pe=0,tt=null,We=null,ut=0,Bt=0,si=Jr(0),Ye=0,fa=null,Ts=0,Sc=0,kp=0,Fo=null,Dt=null,Np=0,Ci=1/0,Un=null,Pu=!1,af=null,Dr=null,Pl=!1,Sr=null,Du=0,Uo=0,lf=null,Zl=-1,eu=0;function Nt(){return pe&6?Ue():Zl!==-1?Zl:Zl=Ue()}function Or(t){return t.mode&1?pe&2&&ut!==0?ut&-ut:FS.transition!==null?(eu===0&&(eu=k0()),eu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:O0(t.type)),t):1}function vn(t,e,n,r){if(50<Uo)throw Uo=0,lf=null,Error(F(185));Oa(t,n,r),(!(pe&2)||t!==tt)&&(t===tt&&(!(pe&2)&&(Sc|=n),Ye===4&&wr(t,ut)),jt(t,r),n===1&&pe===0&&!(e.mode&1)&&(Ci=Ue()+500,Ec&&Zr()))}function jt(t,e){var n=t.callbackNode;FC(t,e);var r=gu(t,t===tt?ut:0);if(r===0)n!==null&&r_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&r_(n),e===1)t.tag===0?VS(Q_.bind(null,t)):Z0(Q_.bind(null,t)),OS(function(){!(pe&6)&&Zr()}),n=null;else{switch(N0(r)){case 1:n=ep;break;case 4:n=C0;break;case 16:n=mu;break;case 536870912:n=S0;break;default:n=mu}n=Jw(n,Ww.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ww(t,e){if(Zl=-1,eu=0,pe&6)throw Error(F(327));var n=t.callbackNode;if(di()&&t.callbackNode!==n)return null;var r=gu(t,t===tt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ou(t,r);else{e=r;var s=pe;pe|=2;var i=qw();(tt!==t||ut!==e)&&(Un=null,Ci=Ue()+500,gs(t,e));do try{i1();break}catch(l){Gw(t,l)}while(!0);fp(),bu.current=i,pe=s,We!==null?e=0:(tt=null,ut=0,e=Ye)}if(e!==0){if(e===2&&(s=Od(t),s!==0&&(r=s,e=uf(t,s))),e===1)throw n=fa,gs(t,0),wr(t,r),jt(t,Ue()),n;if(e===6)wr(t,r);else{if(s=t.current.alternate,!(r&30)&&!r1(s)&&(e=Ou(t,r),e===2&&(i=Od(t),i!==0&&(r=i,e=uf(t,i))),e===1))throw n=fa,gs(t,0),wr(t,r),jt(t,Ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ls(t,Dt,Un);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Np+500-Ue(),10<e)){if(gu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=zd(ls.bind(null,t,Dt,Un),e);break}ls(t,Dt,Un);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-yn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n1(r/1960))-r,10<r){t.timeoutHandle=zd(ls.bind(null,t,Dt,Un),r);break}ls(t,Dt,Un);break;case 5:ls(t,Dt,Un);break;default:throw Error(F(329))}}}return jt(t,Ue()),t.callbackNode===n?Ww.bind(null,t):null}function uf(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=Ou(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&cf(e)),t}function cf(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function r1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!xn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~kp,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Q_(t){if(pe&6)throw Error(F(327));di();var e=gu(t,0);if(!(e&1))return jt(t,Ue()),null;var n=Ou(t,e);if(t.tag!==0&&n===2){var r=Od(t);r!==0&&(e=r,n=uf(t,r))}if(n===1)throw n=fa,gs(t,0),wr(t,e),jt(t,Ue()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ls(t,Dt,Un),jt(t,Ue()),null}function Ap(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Ci=Ue()+500,Ec&&Zr())}}function Is(t){Sr!==null&&Sr.tag===0&&!(pe&6)&&di();var e=pe;pe|=1;var n=Zt.transition,r=ye;try{if(Zt.transition=null,ye=1,t)return t()}finally{ye=r,Zt.transition=n,pe=e,!(pe&6)&&Zr()}}function Rp(){Bt=si.current,Ae(si)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DS(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xu();break;case 3:Ti(),Ae(Lt),Ae(Et),vp();break;case 5:yp(r);break;case 4:Ti();break;case 13:Ae(Pe);break;case 19:Ae(Pe);break;case 10:pp(r.type._context);break;case 22:case 23:Rp()}n=n.return}if(tt=t,We=t=Lr(t.current,null),ut=Bt=e,Ye=0,fa=null,kp=Sc=Ts=0,Dt=Fo=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ds=null}return t}function Gw(t,e){do{var n=We;try{if(fp(),Yl.current=Ru,Au){for(var r=De.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Au=!1}if(Es=0,Ze=qe=De=null,jo=!1,ca=0,Sp.current=null,n===null||n.return===null){Ye=1,fa=e,We=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ut,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var I=M_(o);if(I!==null){I.flags&=-257,j_(I,o,l,i,e),I.mode&1&&L_(i,c,e),e=I,u=c;var S=e.updateQueue;if(S===null){var A=new Set;A.add(u),e.updateQueue=A}else S.add(u);break e}else{if(!(e&1)){L_(i,c,e),bp();break e}u=Error(F(426))}}else if(Re&&l.mode&1){var O=M_(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),j_(O,o,l,i,e),hp(Ii(u,l));break e}}i=u=Ii(u,l),Ye!==4&&(Ye=2),Fo===null?Fo=[i]:Fo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=Aw(i,u,e);N_(i,E);break e;case 1:l=u;var x=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Dr===null||!Dr.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var P=Rw(i,l,e);N_(i,P);break e}}i=i.return}while(i!==null)}Qw(n)}catch(M){e=M,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function qw(){var t=bu.current;return bu.current=Ru,t===null?Ru:t}function bp(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),tt===null||!(Ts&268435455)&&!(Sc&268435455)||wr(tt,ut)}function Ou(t,e){var n=pe;pe|=2;var r=qw();(tt!==t||ut!==e)&&(Un=null,gs(t,e));do try{s1();break}catch(s){Gw(t,s)}while(!0);if(fp(),pe=n,bu.current=r,We!==null)throw Error(F(261));return tt=null,ut=0,Ye}function s1(){for(;We!==null;)Kw(We)}function i1(){for(;We!==null&&!RC();)Kw(We)}function Kw(t){var e=Xw(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?Qw(t):We=e,Sp.current=null}function Qw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JS(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,We=null;return}}else if(n=XS(n,e,Bt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ye===0&&(Ye=5)}function ls(t,e,n){var r=ye,s=Zt.transition;try{Zt.transition=null,ye=1,o1(t,e,n,r)}finally{Zt.transition=s,ye=r}return null}function o1(t,e,n,r){do di();while(Sr!==null);if(pe&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(UC(t,i),t===tt&&(We=tt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pl||(Pl=!0,Jw(mu,function(){return di(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Zt.transition,Zt.transition=null;var o=ye;ye=1;var l=pe;pe|=4,Sp.current=null,e1(t,n),$w(n,t),SS(Ud),_u=!!Fd,Ud=Fd=null,t.current=n,t1(n),bC(),pe=l,ye=o,Zt.transition=i}else t.current=n;if(Pl&&(Pl=!1,Sr=t,Du=s),i=t.pendingLanes,i===0&&(Dr=null),OC(n.stateNode),jt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Pu)throw Pu=!1,t=af,af=null,t;return Du&1&&t.tag!==0&&di(),i=t.pendingLanes,i&1?t===lf?Uo++:(Uo=0,lf=t):Uo=0,Zr(),null}function di(){if(Sr!==null){var t=N0(Du),e=Zt.transition,n=ye;try{if(Zt.transition=null,ye=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,Du=0,pe&6)throw Error(F(331));var s=pe;for(pe|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:Vo(8,p,i)}var m=p.child;if(m!==null)m.return=p,q=m;else for(;q!==null;){p=q;var g=p.sibling,I=p.return;if(Uw(p),p===c){q=null;break}if(g!==null){g.return=I,q=g;break}q=I}}}var S=i.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var O=A.sibling;A.sibling=null,A=O}while(A!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vo(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,q=E;break e}q=i.return}}var x=t.current;for(q=x;q!==null;){o=q;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,q=k;else e:for(o=x;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Cc(9,l)}}catch(M){je(l,l.return,M)}if(l===o){q=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,q=P;break e}q=l.return}}if(pe=s,Zr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(_c,t)}catch{}r=!0}return r}finally{ye=n,Zt.transition=e}}return!1}function Y_(t,e,n){e=Ii(n,e),e=Aw(t,e,1),t=Pr(t,e,1),e=Nt(),t!==null&&(Oa(t,1,e),jt(t,e))}function je(t,e,n){if(t.tag===3)Y_(t,t,n);else for(;e!==null;){if(e.tag===3){Y_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Ii(n,t),t=Rw(e,t,1),e=Pr(e,t,1),t=Nt(),e!==null&&(Oa(e,1,t),jt(e,t));break}}e=e.return}}function a1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ut&n)===n&&(Ye===4||Ye===3&&(ut&130023424)===ut&&500>Ue()-Np?gs(t,0):kp|=n),jt(t,e)}function Yw(t,e){e===0&&(t.mode&1?(e=El,El<<=1,!(El&130023424)&&(El=4194304)):e=1);var n=Nt();t=tr(t,e),t!==null&&(Oa(t,e,n),jt(t,n))}function l1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yw(t,n)}function u1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Yw(t,n)}var Xw;Xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,YS(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&ew(e,Iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jl(t,e),t=e.pendingProps;var s=wi(e,Et.current);hi(e,n),s=xp(null,e,r,t,s,n);var i=Ep();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(i=!0,Eu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gp(e),s.updater=Tc,e.stateNode=s,s._reactInternals=e,Qd(e,r,t,n),e=Jd(null,e,r,!0,i,n)):(e.tag=0,Re&&i&&up(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=h1(r),t=un(r,t),s){case 0:e=Xd(null,e,r,t,n);break e;case 1:e=U_(null,e,r,t,n);break e;case 11:e=V_(null,e,r,t,n);break e;case 14:e=F_(null,e,r,un(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Xd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),U_(t,e,r,s,n);case 3:e:{if(Ow(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,sw(t,e),ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ii(Error(F(423)),e),e=B_(t,e,r,n,s);break e}else if(r!==s){s=Ii(Error(F(424)),e),e=B_(t,e,r,n,s);break e}else for(Ht=br(e.stateNode.containerInfo.firstChild),Wt=e,Re=!0,hn=null,n=lw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===s){e=nr(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return uw(e),t===null&&Gd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Bd(r,s)?o=null:i!==null&&Bd(r,i)&&(e.flags|=32),Dw(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Gd(e),null;case 13:return Lw(t,e,n);case 4:return _p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ei(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),V_(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ce(Cu,r._currentValue),r._currentValue=o,i!==null)if(xn(i.value,o)){if(i.children===s.children&&!Lt.current){e=nr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),qd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,hi(e,n),s=tn(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=un(r,e.pendingProps),s=un(r.type,s),F_(t,e,r,s,n);case 15:return bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Jl(t,e),e.tag=1,Mt(r)?(t=!0,Eu(e)):t=!1,hi(e,n),ow(e,r,s),Qd(e,r,s,n),Jd(null,e,r,!0,t,n);case 19:return Mw(t,e,n);case 22:return Pw(t,e,n)}throw Error(F(156,e.tag))};function Jw(t,e){return I0(t,e)}function c1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new c1(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h1(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xf)return 11;if(t===Jf)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ks:return _s(n.children,s,i,e);case Yf:o=8,s|=8;break;case vd:return t=Xt(12,n,e,s|2),t.elementType=vd,t.lanes=i,t;case wd:return t=Xt(13,n,e,s),t.elementType=wd,t.lanes=i,t;case xd:return t=Xt(19,n,e,s),t.elementType=xd,t.lanes=i,t;case a0:return kc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case i0:o=10;break e;case o0:o=9;break e;case Xf:o=11;break e;case Jf:o=14;break e;case _r:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function _s(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function kc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=a0,t.lanes=n,t.stateNode={isHidden:!1},t}function Xh(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Jh(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function d1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ph(0),this.expirationTimes=Ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ph(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Dp(t,e,n,r,s,i,o,l,u){return t=new d1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(i),t}function f1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zw(t){if(!t)return zr;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Mt(n))return J0(t,n,e)}return e}function ex(t,e,n,r,s,i,o,l,u){return t=Dp(n,r,!0,t,s,i,o,l,u),t.context=Zw(null),n=t.current,r=Nt(),s=Or(n),i=Qn(r,s),i.callback=e??null,Pr(n,i,s),t.current.lanes=s,Oa(t,s,r),jt(t,r),t}function Nc(t,e,n,r){var s=e.current,i=Nt(),o=Or(s);return n=Zw(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(s,e,o),t!==null&&(vn(t,s,o,i),Ql(t,s,o)),o}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function X_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Op(t,e){X_(t,e),(t=t.alternate)&&X_(t,e)}function p1(){return null}var tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lp(t){this._internalRoot=t}Ac.prototype.render=Lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Nc(t,e,null,null)};Ac.prototype.unmount=Lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Is(function(){Nc(null,t,null,null)}),e[er]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=b0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&D0(t)}};function Mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function J_(){}function m1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Lu(o);i.call(c)}}var o=ex(e,r,t,0,null,!1,!1,"",J_);return t._reactRootContainer=o,t[er]=o.current,ia(t.nodeType===8?t.parentNode:t),Is(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Lu(u);l.call(c)}}var u=Dp(t,0,!1,null,null,!1,!1,"",J_);return t._reactRootContainer=u,t[er]=u.current,ia(t.nodeType===8?t.parentNode:t),Is(function(){Nc(e,u,n,r)}),u}function bc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Lu(o);l.call(u)}}Nc(e,o,t,s)}else o=m1(n,e,t,s,r);return Lu(o)}A0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(tp(e,n|1),jt(e,Ue()),!(pe&6)&&(Ci=Ue()+500,Zr()))}break;case 13:Is(function(){var r=tr(t,1);if(r!==null){var s=Nt();vn(r,t,1,s)}}),Op(t,1)}};np=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=Nt();vn(e,t,134217728,n)}Op(t,134217728)}};R0=function(t){if(t.tag===13){var e=Or(t),n=tr(t,e);if(n!==null){var r=Nt();vn(n,t,e,r)}Op(t,e)}};b0=function(){return ye};P0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};bd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=xc(r);if(!s)throw Error(F(90));u0(r),Id(r,s)}}}break;case"textarea":h0(t,n);break;case"select":e=n.value,e!=null&&ai(t,!!n.multiple,e,!1)}};y0=Ap;v0=Is;var g1={usingClientEntryPoint:!1,Events:[Ma,Js,xc,g0,_0,Ap]},yo={findFiberByHostInstance:hs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_1={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E0(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||p1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{_c=Dl.inject(_1),Sn=Dl}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g1;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mp(e))throw Error(F(200));return f1(t,e,null,n)};qt.createRoot=function(t,e){if(!Mp(t))throw Error(F(299));var n=!1,r="",s=tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Dp(t,1,!1,null,null,n,!1,r,s),t[er]=e.current,ia(t.nodeType===8?t.parentNode:t),new Lp(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=E0(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Is(t)};qt.hydrate=function(t,e,n){if(!Rc(e))throw Error(F(200));return bc(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Mp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=tx;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ex(e,null,t,1,n??null,s,!1,i,o),t[er]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ac(e)};qt.render=function(t,e,n){if(!Rc(e))throw Error(F(200));return bc(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(F(40));return t._reactRootContainer?(Is(function(){bc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};qt.unstable_batchedUpdates=Ap;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return bc(t,e,n,!1,r)};qt.version="18.2.0-next-9e3b772b8-20220608";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(t){console.error(t)}}nx(),e0.exports=qt;var y1=e0.exports,Z_=y1;_d.createRoot=Z_.createRoot,_d.hydrateRoot=Z_.hydrateRoot;const v1=({currentView:t,onViewChange:e,partnerName:n,userProfile:r})=>{const s=[{id:"dashboard",label:"家庭概览",icon:"🏠"},{id:"recipes",label:"私房食谱",icon:"📖"},{id:"plan",label:"烹饪计划",icon:"📅"},{id:"shopping",label:"协作采购",icon:"🛒"},{id:"inventory",label:"冰箱库存",icon:"🧊"},{id:"settings",label:"设置中心",icon:"⚙️"}];return d.jsxs("div",{className:"hidden lg:flex w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 flex-col z-50",children:[d.jsxs("div",{className:"p-10 pt-12",children:[d.jsxs("h1",{className:"text-3xl font-black text-gray-900 tracking-tighter italic",children:["HOMETASTE",d.jsx("span",{className:"text-emerald-500",children:"."})]}),d.jsxs("div",{className:"mt-6 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"}),"Connected"]})]}),d.jsx("nav",{className:"flex-1 px-6 space-y-1.5 mt-4",children:s.map(i=>d.jsxs("button",{onClick:()=>e(i.id),className:`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${t===i.id?"bg-gray-900 text-white shadow-xl scale-105":"text-gray-400 hover:bg-gray-50 hover:text-gray-900"}`,children:[d.jsx("span",{className:"text-xl",children:i.icon}),d.jsx("span",{className:"text-xs font-black uppercase tracking-widest",children:i.label})]},i.id))}),d.jsx("div",{className:"p-8",children:d.jsxs("button",{onClick:()=>e("settings"),className:"w-full flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:bg-emerald-50 transition-all group",children:[d.jsx("img",{src:r.avatar,className:"w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover",alt:"Avatar"}),d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsx("p",{className:"text-[10px] font-black text-gray-800 truncate uppercase",children:r.name}),d.jsx("p",{className:"text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] truncate",children:"Premium Chef"})]})]})})]})},w1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 21C12 21 17 18 17 12C17 6 12 2 12 2C12 2 7 6 7 12C7 18 12 21 12 21Z",className:"text-emerald-600",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 21V12",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L15 6",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L9 6",strokeLinecap:"round"})]}),x1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("circle",{cx:"12",cy:"13",r:"8",className:"text-red-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 5V2",strokeLinecap:"round"}),d.jsx("path",{d:"M12 5L15 2",strokeLinecap:"round"})]}),E1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",className:"text-rose-500",fill:"currentColor",fillOpacity:"0.1",strokeLinecap:"round"}),d.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"currentColor",className:"text-white"}),d.jsx("path",{d:"M5 8C5 8 7 10 9 10C11 10 13 8 13 8",strokeLinecap:"round"})]}),T1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 2 16 2 10C2 4 6 2 12 2C18 2 20 4.47715 20 10Z",className:"text-blue-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M20 10L23 13",strokeLinecap:"round"}),d.jsx("path",{d:"M20 10L23 7",strokeLinecap:"round"})]}),I1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M7 6H17V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V6Z",className:"text-yellow-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M5 6H19",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L12 6",strokeLinecap:"round"})]}),C1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("ellipse",{cx:"8",cy:"12",rx:"4",ry:"6",transform:"rotate(-30 8 12)",className:"text-amber-700",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("ellipse",{cx:"16",cy:"12",rx:"4",ry:"6",transform:"rotate(30 16 12)",className:"text-amber-600",fill:"currentColor",fillOpacity:"0.2"})]}),S1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 22C16.4183 22 20 18.4183 20 14C20 9 12 2 12 2C12 2 4 9 4 14C4 18.4183 7.58172 22 12 22Z",className:"text-yellow-600",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 10V16",strokeLinecap:"round"})]}),k1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 4C7 4 3 8 3 11H21C21 8 17 4 12 4Z",className:"text-stone-600",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("path",{d:"M12 11V20",strokeLinecap:"round",strokeWidth:"2"}),d.jsx("path",{d:"M8 20H16",strokeLinecap:"round"})]}),N1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("rect",{x:"7",y:"8",width:"10",height:"14",rx:"2",className:"text-gray-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M7 8L9 2H15L17 8"})]}),A1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M7 6L5 21H19L17 6H7Z",className:"text-blue-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 6V2"}),d.jsx("path",{d:"M9 2H15"})]}),R1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14",className:"text-orange-100",fill:"currentColor",fillOpacity:"0.5"}),d.jsx("path",{d:"M2 14H22",strokeLinecap:"round"}),d.jsx("path",{d:"M12 14V10"}),d.jsx("path",{d:"M7 14C7 10 12 8 12 8C12 8 17 10 17 14",strokeLinecap:"round"})]}),b1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("rect",{x:"3",y:"7",width:"18",height:"14",rx:"2",className:"text-gray-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M3 7L12 2L21 7"}),d.jsx("path",{d:"M12 12V16"})]}),P1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"}),d.jsx("path",{d:"M9 22V12H15V22"})]}),D1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),d.jsx("path",{d:"M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z"})]}),rx=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),d.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),d.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),d.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),sx=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"9",cy:"21",r:"1"}),d.jsx("circle",{cx:"20",cy:"21",r:"1"}),d.jsx("path",{d:"M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"})]}),ix=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z"}),d.jsx("path",{d:"M3 10H21"}),d.jsx("path",{d:"M10 5V8"}),d.jsx("path",{d:"M10 14V17"})]}),O1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M15 4V2"}),d.jsx("path",{d:"M15 16V14"}),d.jsx("path",{d:"M8 9H10"}),d.jsx("path",{d:"M20 9H22"}),d.jsx("path",{d:"M17.8 11.8L19 13"}),d.jsx("path",{d:"M10.6 5.2L12 6.6"}),d.jsx("path",{d:"M17.8 6.2L19 5"}),d.jsx("path",{d:"M10.6 12.8L12 11.4"}),d.jsx("path",{d:"M2 21L7 16"})]}),L1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M12 2V6"}),d.jsx("path",{d:"M12 18V22"}),d.jsx("path",{d:"M4.93 4.93L7.76 7.76"}),d.jsx("path",{d:"M16.24 16.24L19.07 19.07"}),d.jsx("path",{d:"M2 12H6"}),d.jsx("path",{d:"M18 12H22"}),d.jsx("path",{d:"M4.93 19.07L7.76 16.24"}),d.jsx("path",{d:"M16.24 7.76L19.07 4.93"})]}),M1=["蔬菜","水果","肉类","海鲜","蛋奶","豆制品","粮油","干货","调料","饮品","主食","其他"],ey=["常温","冷藏","冷冻"],j1=({inventory:t,onAdd:e,onUpdate:n,onDelete:r,onAIScan:s,isScanning:i})=>{const[o,l]=W.useState("全部"),[u,c]=W.useState(""),[p,m]=W.useState(!1),[g,I]=W.useState(!1),[S,A]=W.useState({name:"",amount:1,unit:"份",category:"蔬菜",storageZone:"冷藏"}),O=W.useRef(null),E=D=>{const w={className:"w-8 h-8"};switch(D){case"蔬菜":return d.jsx(w1,{...w});case"水果":return d.jsx(x1,{...w});case"肉类":return d.jsx(E1,{...w});case"蛋奶":return d.jsx(I1,{...w});case"豆制品":return d.jsx(C1,{...w});case"粮油":return d.jsx(S1,{...w});case"干货":return d.jsx(k1,{...w});case"调料":return d.jsx(N1,{...w});case"主食":return d.jsx(R1,{...w});case"海鲜":return d.jsx(T1,{...w});case"饮品":return d.jsx(A1,{...w});default:return d.jsx(b1,{...w})}},x=t.filter(D=>{const w=o==="全部"||D.storageZone===o,y=D.name.toLowerCase().includes(u.toLowerCase());return w&&y}),k=()=>{I(!1),A({name:"",amount:1,unit:"份",category:"蔬菜",storageZone:"冷藏"}),m(!0)},P=D=>{I(!0),A({...D}),m(!0)},M=()=>{S.name&&(g&&S.id?(r(S.id),e({...S,id:Date.now().toString()})):e(S),m(!1))};return d.jsxs("div",{className:"p-5 lg:p-10 pb-64 space-y-8 max-w-4xl mx-auto animate-in fade-in duration-500",children:[p&&d.jsx("div",{className:"fixed inset-0 z-[200] bg-black/60 backdrop-blur-xl flex items-center justify-center p-6",children:d.jsxs("div",{className:"bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl space-y-6 animate-in zoom-in-95",children:[d.jsx("h3",{className:"text-xl font-black",children:g?"编辑食材":"录入食材"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"名称"}),d.jsx("input",{type:"text",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold outline-none focus:ring-1 ring-emerald-400",value:S.name,onChange:D=>A({...S,name:D.target.value})})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"数量"}),d.jsx("input",{type:"number",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none",value:S.amount,onChange:D=>A({...S,amount:Number(D.target.value)})})]}),d.jsxs("div",{className:"w-24",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"单位"}),d.jsx("input",{type:"text",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none",placeholder:"个",value:S.unit,onChange:D=>A({...S,unit:D.target.value})})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"存放区域"}),d.jsx("div",{className:"flex gap-2 mt-1",children:ey.map(D=>d.jsx("button",{onClick:()=>A({...S,storageZone:D}),className:`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${S.storageZone===D?"bg-gray-900 text-white":"bg-gray-50 text-gray-400"}`,children:D},D))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"分类"}),d.jsx("div",{className:"grid grid-cols-4 gap-2 mt-1",children:M1.map(D=>d.jsx("button",{onClick:()=>A({...S,category:D}),className:`py-2 rounded-lg text-[10px] font-bold transition-all ${S.category===D?"bg-emerald-600 text-white":"bg-gray-50 text-gray-500"}`,children:D},D))})]}),d.jsxs("div",{className:"flex gap-3 pt-2",children:[d.jsx("button",{onClick:M,className:"flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg",children:"保存"}),d.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 bg-gray-100 text-gray-400 rounded-xl font-bold",children:"取消"})]})]})]})}),i&&d.jsxs("div",{className:"fixed inset-0 z-[1000] bg-emerald-950/90 backdrop-blur-3xl flex flex-col items-center justify-center p-12 text-center animate-in fade-in",children:[d.jsx("div",{className:"w-16 h-16 border-4 border-emerald-500/30 rounded-full border-t-emerald-400 animate-spin mb-6"}),d.jsx("h4",{className:"text-white text-xl font-bold",children:"正在识别食材..."})]}),d.jsxs("header",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 tracking-tight italic",children:"食材储备"}),d.jsx("div",{className:"flex bg-gray-100 p-1 rounded-xl w-fit",children:["全部",...ey].map(D=>d.jsx("button",{onClick:()=>l(D),className:`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${o===D?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:D},D))})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsxs("div",{className:"flex-1 relative",children:[d.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm",children:"🔍"}),d.jsx("input",{type:"text",placeholder:"搜索...",className:"w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm",value:u,onChange:D=>c(D.target.value)})]}),d.jsx("button",{onClick:()=>{var D;return(D=O.current)==null?void 0:D.click()},className:"px-5 bg-emerald-600 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all",children:"📸"}),d.jsx("button",{onClick:k,className:"px-5 bg-gray-900 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all",children:"＋"}),d.jsx("input",{type:"file",ref:O,className:"hidden",accept:"image/*",onChange:D=>{var y;const w=(y=D.target.files)==null?void 0:y[0];if(w&&s){const T=new FileReader;T.onloadend=()=>s(T.result),T.readAsDataURL(w)}}})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:x.map(D=>d.jsxs("div",{className:"bg-white rounded-2xl border border-gray-50 flex items-center p-3 relative group hover:border-emerald-100 hover:shadow-lg transition-all",children:[d.jsx("div",{onClick:()=>P(D),className:"w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 mr-3 cursor-pointer hover:bg-emerald-50 transition-colors",children:E(D.category)}),d.jsxs("div",{onClick:()=>P(D),className:"flex-1 min-w-0 cursor-pointer mr-2",children:[d.jsx("h4",{className:"font-black text-gray-900 text-base truncate",children:D.name}),d.jsxs("p",{className:"text-[10px] font-bold text-gray-400 mt-0.5",children:[D.storageZone," • ",D.category]})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 shrink-0",children:[d.jsx("button",{onClick:()=>n(D.id,Math.max(0,D.amount-1)),className:"w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all",children:"－"}),d.jsxs("span",{className:"font-black text-emerald-700 min-w-[2rem] text-center text-sm",children:[D.amount,d.jsx("span",{className:"text-[9px] text-gray-400 ml-0.5",children:D.unit})]}),d.jsx("button",{onClick:()=>n(D.id,D.amount+1),className:"w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all",children:"＋"})]}),d.jsx("button",{onClick:()=>r(D.id),className:"absolute -top-1.5 -right-1.5 w-6 h-6 bg-white border border-gray-100 rounded-full text-[10px] text-gray-300 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10",children:"✕"})]},D.id))})]})},V1=(t=new Date)=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`},F1=()=>{const t=[],e=new Date;for(let n=0;n<7;n++){const r=new Date(e);r.setDate(e.getDate()+n);const s=V1(r),i=r.toLocaleDateString("zh-CN",{weekday:"short"}),o=r.getDate();let l=n===0?"今天":n===1?"明天":"";t.push({iso:s,weekday:i,day:o,label:l})}return t},U1=t=>t>=4.5?"绝绝子，必须配三碗米饭！":t>=3.5?"挺下饭的，味道扎实。":t>=2.5?"中规中矩，还可以。":"口味清淡，不怎么费米饭。",B1=({recipe:t,inventory:e,plans:n,onBack:r,onEdit:s,onPlan:i})=>{var I,S,A,O;const[o,l]=W.useState(!1),[u,c]=W.useState(!1),[p,m]=W.useState(0);W.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t.id]);const g=E=>{const x=e.find(k=>E.name.includes(k.name)||k.name.includes(E.name));return x?x.amount<E.amount?{text:"不足",color:"text-amber-500"}:{text:"充足",color:"text-emerald-500"}:{text:"缺货",color:"text-red-500"}};return d.jsxs("div",{className:"min-h-screen bg-white animate-in slide-in-from-bottom duration-500 relative pb-32",children:[u&&d.jsxs("div",{className:"fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto",onClick:()=>c(!1),children:[d.jsxs("div",{className:"bg-[#fffcf5] w-full max-w-md rounded-none shadow-2xl p-8 space-y-6 relative border-[12px] border-double border-emerald-950/10 my-10",onClick:E=>E.stopPropagation(),children:[d.jsx("div",{className:"absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-900/20"}),d.jsxs("div",{className:"text-center space-y-2 pt-2",children:[d.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800/60 block mb-2",children:t.category}),d.jsx("h2",{className:"text-3xl font-black italic text-emerald-950 font-serif leading-tight",children:t.title}),t.description&&d.jsxs("p",{className:"text-xs text-gray-500 font-serif italic px-4",children:['"',t.description,'"']})]}),d.jsxs("div",{className:"flex justify-center gap-6 py-2 border-t border-b border-emerald-900/10",children:[d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"PREP"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[t.prepTime," min"]})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"COOK"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[t.cookTime," min"]})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"RATING"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[((I=t.rating)==null?void 0:I.toFixed(1))||5," ★"]})]})]}),d.jsx("div",{className:"aspect-video w-full overflow-hidden bg-gray-100 grayscale-[0.2] contrast-125",children:d.jsx("img",{src:t.images[0],className:"w-full h-full object-cover"})}),d.jsxs("div",{className:"space-y-4",children:[d.jsx("h4",{className:"text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2",children:"Ingredients"}),d.jsx("div",{className:"grid grid-cols-2 gap-x-6 gap-y-2 text-xs",children:t.ingredients.map((E,x)=>d.jsxs("div",{className:"flex justify-between items-baseline border-b border-emerald-900/5 pb-1",children:[d.jsx("span",{className:"font-bold text-emerald-950",children:E.name}),d.jsxs("span",{className:"text-emerald-800/60 font-medium",children:[E.amount,E.unit]})]},x))})]}),d.jsxs("div",{className:"space-y-4 pb-4",children:[d.jsx("h4",{className:"text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2",children:"Method"}),d.jsx("div",{className:"space-y-3",children:t.steps.map((E,x)=>d.jsxs("div",{className:"flex gap-3 text-xs leading-relaxed text-emerald-950/80",children:[d.jsxs("span",{className:"font-black text-emerald-700",children:[x+1,"."]}),d.jsx("span",{children:E})]},x))})]}),d.jsx("div",{className:"text-center border-t-2 border-emerald-900/5 pt-4",children:d.jsx("p",{className:"text-[8px] font-black uppercase tracking-[0.5em] text-emerald-900/40",children:"HomeTaste • Artisan Kitchen"})})]}),d.jsx("button",{className:"fixed bottom-6 left-6 right-6 py-4 bg-emerald-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl z-50",children:"保存至相册"})]}),d.jsxs("div",{className:"relative h-[35vh] overflow-hidden bg-gray-100",children:[d.jsx("div",{className:"w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar",onScroll:E=>{m(Math.round(E.currentTarget.scrollLeft/E.currentTarget.offsetWidth))},children:(S=t.images)==null?void 0:S.map((E,x)=>d.jsx("img",{src:E,className:"w-full h-full object-cover shrink-0 snap-center",alt:""},x))}),d.jsxs("div",{className:"absolute top-4 right-4 flex gap-2 z-40",children:[d.jsx("button",{onClick:()=>c(!0),className:"h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10",children:d.jsx("span",{children:"✨ 导出"})}),s&&d.jsx("button",{onClick:s,className:"h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10",children:d.jsx("span",{children:"✎ 编辑"})})]}),d.jsx("div",{className:"absolute bottom-4 right-4 flex gap-2 z-40",children:d.jsxs("div",{className:"px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center gap-1 border border-white/10 shadow-lg",children:[d.jsx("span",{className:"text-amber-400 text-xs",children:"★"}),d.jsx("span",{className:"text-xs font-bold text-white",children:((A=t.rating)==null?void 0:A.toFixed(1))||"5.0"})]})}),d.jsx("div",{className:"absolute top-4 left-4 z-30",children:d.jsx("button",{onClick:r,className:"w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center text-lg active:scale-90 transition-all",children:"✕"})}),t.images.length>1&&d.jsx("div",{className:"absolute bottom-4 left-4 flex gap-1 z-20",children:t.images.map((E,x)=>d.jsx("div",{className:`h-1 rounded-full transition-all duration-300 ${p===x?"w-4 bg-white":"w-1.5 bg-white/40"}`},x))})]}),d.jsxs("div",{className:"px-5 py-6 max-w-4xl mx-auto space-y-8",children:[d.jsxs("header",{children:[d.jsx("div",{className:"flex items-center gap-2 mb-2",children:d.jsx("span",{className:"px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase",children:t.category})}),d.jsx("h1",{className:"text-2xl font-black text-gray-900 tracking-tight",children:t.title}),t.description&&d.jsx("p",{className:"text-gray-500 text-sm mt-2 leading-relaxed",children:t.description}),d.jsxs("div",{className:"flex gap-6 mt-4 text-xs font-bold text-gray-500",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-emerald-600",children:"🕒"}),d.jsxs("span",{children:["准备 ",t.prepTime,"分钟"]})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-orange-500",children:"🔥"}),d.jsxs("span",{children:["烹饪 ",t.cookTime,"分钟"]})]})]})]}),t.appetizingRating&&d.jsxs("div",{className:"p-4 bg-orange-50 rounded-xl border border-orange-100/50",children:[d.jsx("p",{className:"text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1",children:"下饭指数"}),d.jsxs("p",{className:"text-sm font-bold text-orange-800 italic",children:["“ ",U1(t.appetizingRating)," ”"]})]}),((O=t.source)==null?void 0:O.url)&&d.jsxs("a",{href:t.source.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors bg-gray-50 p-3 rounded-lg",children:[d.jsx("span",{children:"🔗 灵感来源"}),d.jsx("span",{className:"text-[10px] opacity-50 truncate flex-1 text-right",children:t.source.url})]}),d.jsxs("section",{children:[d.jsxs("div",{className:"flex items-baseline justify-between mb-4 pb-2 border-b border-gray-100",children:[d.jsx("h3",{className:"text-lg font-black text-gray-900",children:"所需食材"}),d.jsxs("span",{className:"text-xs font-bold text-gray-300",children:[t.ingredients.length," 项"]})]}),d.jsx("div",{className:"space-y-1",children:t.ingredients.map((E,x)=>{const k=g(E);return d.jsxs("div",{className:"flex justify-between items-center py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors",children:[d.jsx("span",{className:"font-bold text-gray-800 text-sm",children:E.name}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs("span",{className:"text-sm font-medium text-gray-600 font-mono",children:[E.amount,E.unit]}),d.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${k.color.replace("text","bg")}`,title:k.text})]})]},x)})})]}),d.jsxs("section",{children:[d.jsx("h3",{className:"text-lg font-black mb-4 text-gray-900 pb-2 border-b border-gray-100",children:"制作步骤"}),d.jsx("div",{className:"space-y-6",children:t.steps.map((E,x)=>d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("span",{className:"text-emerald-600 font-black text-lg font-serif italic",children:[x+1,"."]}),d.jsx("p",{className:"text-gray-800 leading-relaxed font-medium text-sm pt-1",children:E})]},x))})]})]}),d.jsx("div",{className:"fixed bottom-6 left-0 right-0 px-6 z-[90]",children:d.jsx("div",{className:"max-w-2xl mx-auto",children:o?d.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] border border-gray-100 space-y-3 animate-in slide-in-from-bottom",children:[d.jsxs("div",{className:"flex justify-between items-center px-2",children:[d.jsx("p",{className:"text-xs font-bold text-gray-400",children:"选择烹饪日期"}),d.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 p-2",children:"✕"})]}),d.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar py-1",children:F1().map(E=>d.jsxs("button",{onClick:()=>{i(t.id,E.iso),l(!1)},className:"shrink-0 w-14 h-16 bg-gray-50 hover:bg-emerald-600 hover:text-white rounded-xl flex flex-col items-center justify-center transition-all",children:[d.jsx("span",{className:"text-[10px] font-bold opacity-60 mb-0.5",children:E.label||E.weekday}),d.jsx("span",{className:"text-lg font-black",children:E.day})]},E.iso))})]}):d.jsx("button",{onClick:()=>l(!0),className:"w-full h-12 bg-emerald-900 text-white rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-2 uppercase tracking-wider active:scale-95 transition-all",children:"🍳 加入计划"})})})]})},ty=(t=new Date)=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`},z1=({plans:t,recipes:e,inventory:n,onRemoveFromPlan:r,onArchive:s,onAddItemsToShopping:i,onDeductInventory:o,onRecipeFeedback:l,history:u})=>{const[c,p]=W.useState("plan"),m=W.useMemo(()=>ty(),[]),[g,I]=W.useState(m),[S,A]=W.useState(new Date),O=W.useRef(null),[E,x]=W.useState(null),[k,P]=W.useState({}),[M,D]=W.useState(5),[w,y]=W.useState(5),T=W.useMemo(()=>{const _=[];for(let X=-3;X<=3;X++){const se=new Date(S);se.setDate(S.getDate()+X);const _e=ty(se),we=se.toLocaleDateString("zh-CN",{weekday:"short"}),z=se.getDate(),Q=t[_e]&&t[_e].length>0,j=_e===m;_.push({iso:_e,weekday:we,day:z,hasPlan:Q,isToday:j})}return _},[S,t,m]);W.useEffect(()=>{if(O.current){const _=O.current.querySelector('[data-selected="true"]');_&&_.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}},[g,S]);const C=_=>{I(_);const[X,se,_e]=_.split("-").map(Number),we=new Date(X,se-1,_e);A(we)},N=W.useMemo(()=>{const _=t[g]||[];return e.filter(X=>_.includes(X.id))},[t,g,e]),R=W.useMemo(()=>{const _={};return N.forEach(X=>{(X.ingredients||[]).forEach(se=>{var _e;_[se.name]={amount:(((_e=_[se.name])==null?void 0:_e.amount)||0)+se.amount,unit:se.unit}})}),Object.entries(_).map(([X,se])=>{const _e=n.find(z=>z.name===X),we=_e?_e.amount:0;return{name:X,required:se.amount,has:we,unit:se.unit,isShort:se.amount>we}})},[N,n]);return d.jsxs("div",{className:"p-5 lg:p-10 pb-[35rem] space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto",children:[E&&d.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/60 backdrop-blur-2xl flex items-center justify-center p-6",children:d.jsxs("div",{className:"bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300",children:[d.jsx("h3",{className:"text-xl font-black text-gray-900 mb-6 flex items-center gap-2",children:d.jsxs("span",{children:["复盘: ",E.title]})}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("section",{className:"space-y-4",children:[d.jsx("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1",children:"确认食材消耗"}),d.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto no-scrollbar",children:E.ingredients.map(_=>d.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100",children:[d.jsx("span",{className:"font-bold text-gray-700 text-sm truncate mr-4",children:_.name}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("button",{onClick:()=>P(X=>({...X,[_.name]:Math.max(0,X[_.name]-.5)})),className:"w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100",children:"-"}),d.jsx("span",{className:"w-10 text-center font-black text-sm text-emerald-600",children:k[_.name]}),d.jsx("button",{onClick:()=>P(X=>({...X,[_.name]:X[_.name]+.5})),className:"w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100",children:"+"})]})]},_.name))})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"p-4 bg-amber-50 rounded-2xl border border-amber-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("label",{className:"text-[10px] font-black text-amber-600 uppercase",children:"美味"}),d.jsxs("span",{className:"text-sm font-black text-amber-500",children:[M,".0"]})]}),d.jsx("div",{className:"flex justify-between",children:[1,2,3,4,5].map(_=>d.jsx("button",{onClick:()=>D(_),className:`text-xl transition-all ${M>=_?"grayscale-0 scale-110":"grayscale opacity-20"}`,children:"⭐"},_))})]}),d.jsxs("div",{className:"p-4 bg-orange-50 rounded-2xl border border-orange-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("label",{className:"text-[10px] font-black text-orange-600 uppercase",children:"下饭"}),d.jsxs("span",{className:"text-sm font-black text-orange-500",children:[w,".0"]})]}),d.jsx("div",{className:"flex justify-between",children:[1,2,3,4,5].map(_=>d.jsx("button",{onClick:()=>y(_),className:`text-xl transition-all ${w>=_?"grayscale-0 scale-110":"grayscale opacity-20"}`,children:"🍚"},_))})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8",children:[d.jsx("button",{onClick:()=>x(null),className:"py-4 bg-gray-100 text-gray-500 rounded-xl font-bold text-xs",children:"取消"}),d.jsx("button",{onClick:()=>{o(Object.entries(k).map(([_,X])=>({name:_,amount:X}))),l(E.id,M,w),r(E.id,g),N.length===1&&s(g),x(null)},className:"py-4 bg-gray-900 text-white rounded-xl font-bold text-xs shadow-lg",children:"完成复盘"})]})]})}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 italic",children:"烹饪计划"}),d.jsxs("div",{className:"flex bg-gray-100 p-1 rounded-xl",children:[d.jsx("button",{onClick:()=>p("plan"),className:`px-5 py-2 rounded-lg text-xs font-bold transition-all ${c==="plan"?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:"当前"}),d.jsx("button",{onClick:()=>p("history"),className:`px-5 py-2 rounded-lg text-xs font-bold transition-all ${c==="history"?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:"历史"})]})]}),c==="plan"?d.jsxs("div",{className:"space-y-8",children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex justify-between items-center px-2",children:[d.jsx("button",{onClick:()=>{A(new Date),I(m)},className:"text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg",children:"回到今天"}),d.jsxs("div",{className:"flex gap-4 text-[10px] font-bold text-gray-400",children:[d.jsx("button",{onClick:()=>{const _=new Date(S);_.setDate(_.getDate()-7),A(_)},children:"← 上周"}),d.jsx("button",{onClick:()=>{const _=new Date(S);_.setDate(_.getDate()+7),A(_)},children:"下周 →"})]})]}),d.jsx("div",{ref:O,className:"bg-white p-2 rounded-2xl border border-gray-100 flex justify-between overflow-x-auto no-scrollbar snap-x",children:T.map(_=>d.jsxs("button",{"data-selected":g===_.iso,onClick:()=>C(_.iso),className:`snap-center flex-shrink-0 w-12 h-16 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${g===_.iso?"bg-gray-900 text-white shadow-lg scale-105":_.isToday?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-50"}`,children:[d.jsx("span",{className:"text-[9px] font-bold uppercase",children:_.weekday}),d.jsx("span",{className:"text-lg font-black",children:_.day}),_.hasPlan&&d.jsx("div",{className:`w-1 h-1 rounded-full ${g===_.iso?"bg-emerald-400":"bg-emerald-500"}`})]},_.iso))})]}),d.jsxs("section",{children:[d.jsx("div",{className:"flex items-baseline gap-3 mb-4",children:d.jsxs("h3",{className:"text-lg font-black text-gray-900",children:[g," 菜单"]})}),N.length===0?d.jsx("div",{className:"bg-white py-12 rounded-2xl border-2 border-dashed border-gray-100 text-center",children:d.jsx("p",{className:"text-xs font-bold text-gray-400",children:"暂无安排"})}):d.jsx("div",{className:"space-y-3",children:N.map(_=>{var X;return d.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4",children:[d.jsx("img",{src:(X=_.images)==null?void 0:X[0],className:"w-16 h-16 rounded-xl object-cover",alt:""}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("h4",{className:"font-bold text-gray-900 text-base truncate",children:_.title}),d.jsxs("p",{className:"text-[10px] font-bold text-gray-400 mt-1",children:[_.prepTime+_.cookTime," 分钟"]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>{const se={};_.ingredients.forEach(_e=>se[_e.name]=_e.amount),P(se),x(_)},className:"w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg hover:bg-emerald-600 hover:text-white transition-all",children:"✓"}),d.jsx("button",{onClick:()=>r(_.id,g),className:"w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center text-lg hover:bg-red-50 hover:text-red-500 transition-all",children:"✕"})]})]},_.id)})})]}),N.length>0&&R.some(_=>_.isShort)&&d.jsxs("section",{className:"bg-white rounded-2xl p-6 border border-gray-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-sm font-black text-gray-900",children:"缺少食材"}),d.jsx("button",{onClick:()=>{const _=R.filter(X=>X.isShort).map(X=>({name:X.name,amount:`${Math.round((X.required-X.has)*10)/10}${X.unit}`}));i(_),alert(`已添加 ${_.length} 项到清单`)},className:"text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg",children:"一键加入清单"})]}),d.jsx("div",{className:"space-y-2",children:R.filter(_=>_.isShort).map(_=>d.jsxs("div",{className:"flex justify-between items-center text-sm",children:[d.jsx("span",{className:"font-bold text-gray-700",children:_.name}),d.jsxs("span",{className:"text-red-500 font-bold text-xs",children:["缺 ",Math.round((_.required-_.has)*10)/10,_.unit]})]},_.name))})]})]}):d.jsx("div",{className:"space-y-4",children:u.length===0?d.jsx("div",{className:"text-center py-20 text-gray-300 text-xs font-bold",children:"暂无历史记录"}):u.slice().reverse().map((_,X)=>d.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-gray-100 shadow-sm",children:[d.jsx("p",{className:"text-xs font-black text-indigo-500 mb-3",children:_.date}),d.jsx("div",{className:"flex flex-wrap gap-2",children:_.recipeTitles.map((se,_e)=>d.jsx("span",{className:"text-xs font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100",children:se},_e))})]},X))})]})};var ny={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw zi(e)},zi=function(t){return new Error("Firebase Database ("+ox.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(g=64)),r.push(n[p],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ax(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new H1;const g=i<<2|l>>4;if(r.push(g),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const S=c<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class H1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lx=function(t){const e=ax(t);return jp.encodeByteArray(e,!0)},Mu=function(t){return lx(t).replace(/\./g,"")},ju=function(t){try{return jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){return ux(void 0,t)}function ux(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!G1(n)||(t[n]=ux(t[n],e[n]));return t}function G1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=()=>q1().__FIREBASE_DEFAULTS__,Q1=()=>{if(typeof process>"u"||typeof ny>"u")return;const t=ny.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ju(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return K1()||Q1()||Y1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cx=t=>{var e,n;return(n=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vp=t=>{const e=cx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hx=()=>{var t;return(t=Pc())===null||t===void 0?void 0:t.config},dx=t=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Up(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function X1(){var t;const e=(t=Pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ek(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tk(){return ox.NODE_ADMIN===!0}function nk(){return!X1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rk(){try{return typeof indexedDB=="object"}catch{return!1}}function sk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ik,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ok(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,l,r)}}function ok(t,e){return t.replace(ak,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ak=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){return JSON.parse(t)}function Qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=pa(ju(i[0])||""),n=pa(ju(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},lk=function(t){const e=px(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uk=function(t){const e=px(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Fu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ry(i)&&ry(o)){if(!Fu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ry(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let m=0;m<16;m++)r[m]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let m=16;m<80;m++){const g=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,p;for(let m=0;m<80;m++){m<40?m<20?(c=l^i&(o^l),p=1518500249):(c=i^o^l,p=1859775393):m<60?(c=i&o|l&(i|o),p=2400959708):(c=i^o^l,p=3395469782);const g=(s<<5|s>>>27)+c+u+p+r[m]&4294967295;u=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function hk(t,e){const n=new dk(t,e);return n.subscribe.bind(n)}class dk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zh),s.error===void 0&&(s.error=Zh),s.complete===void 0&&(s.complete=Zh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zh(){}function Dc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Oc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Va;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_k(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gk(t){return t===us?void 0:t}function _k(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const vk={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},wk=ce.INFO,xk={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=wk,this._logHandler=Ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Tk=(t,e)=>e.some(n=>t instanceof n);let sy,iy;function Ik(){return sy||(sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ck(){return iy||(iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mx=new WeakMap,df=new WeakMap,gx=new WeakMap,ed=new WeakMap,Bp=new WeakMap;function Sk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mx.set(n,t)}).catch(()=>{}),Bp.set(e,t),e}function kk(t){if(df.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});df.set(t,e)}let ff={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nk(t){ff=t(ff)}function Ak(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(td(this),e,...n);return gx.set(r,e.sort?e.sort():[e]),Mr(r)}:Ck().includes(t)?function(...e){return t.apply(td(this),e),Mr(mx.get(this))}:function(...e){return Mr(t.apply(td(this),e))}}function Rk(t){return typeof t=="function"?Ak(t):(t instanceof IDBTransaction&&kk(t),Tk(t,Ik())?new Proxy(t,ff):t)}function Mr(t){if(t instanceof IDBRequest)return Sk(t);if(ed.has(t))return ed.get(t);const e=Rk(t);return e!==t&&(ed.set(t,e),Bp.set(e,t)),e}const td=t=>Bp.get(t);function bk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Mr(o.result),u.oldVersion,u.newVersion,Mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Pk=["get","getKey","getAll","getAllKeys","count"],Dk=["put","add","delete","clear"],nd=new Map;function oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Dk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return nd.set(e,i),i}Nk(t=>({...t,get:(e,n,r)=>oy(e,n)||t.get(e,n,r),has:(e,n)=>!!oy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pf="@firebase/app",ay="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Lc("@firebase/app"),Mk="@firebase/app-compat",jk="@firebase/analytics-compat",Vk="@firebase/analytics",Fk="@firebase/app-check-compat",Uk="@firebase/app-check",Bk="@firebase/auth",zk="@firebase/auth-compat",$k="@firebase/database",Hk="@firebase/data-connect",Wk="@firebase/database-compat",Gk="@firebase/functions",qk="@firebase/functions-compat",Kk="@firebase/installations",Qk="@firebase/installations-compat",Yk="@firebase/messaging",Xk="@firebase/messaging-compat",Jk="@firebase/performance",Zk="@firebase/performance-compat",eN="@firebase/remote-config",tN="@firebase/remote-config-compat",nN="@firebase/storage",rN="@firebase/storage-compat",sN="@firebase/firestore",iN="@firebase/vertexai-preview",oN="@firebase/firestore-compat",aN="firebase",lN="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="[DEFAULT]",uN={[pf]:"fire-core",[Mk]:"fire-core-compat",[Vk]:"fire-analytics",[jk]:"fire-analytics-compat",[Uk]:"fire-app-check",[Fk]:"fire-app-check-compat",[Bk]:"fire-auth",[zk]:"fire-auth-compat",[$k]:"fire-rtdb",[Hk]:"fire-data-connect",[Wk]:"fire-rtdb-compat",[Gk]:"fire-fn",[qk]:"fire-fn-compat",[Kk]:"fire-iid",[Qk]:"fire-iid-compat",[Yk]:"fire-fcm",[Xk]:"fire-fcm-compat",[Jk]:"fire-perf",[Zk]:"fire-perf-compat",[eN]:"fire-rc",[tN]:"fire-rc-compat",[nN]:"fire-gcs",[rN]:"fire-gcs-compat",[sN]:"fire-fst",[oN]:"fire-fst-compat",[iN]:"fire-vertex","fire-js":"fire-js",[aN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map,cN=new Map,gf=new Map;function ly(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $r(t){const e=t.name;if(gf.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;gf.set(e,t);for(const n of ma.values())ly(n,t);for(const n of cN.values())ly(n,t);return!0}function Ua(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new Fa("app","Firebase",hN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=lN;function _x(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=hx()),!n)throw jr.create("no-options");const i=ma.get(s);if(i){if(Fu(n,i.options)&&Fu(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new yk(s);for(const u of gf.values())o.addComponent(u);const l=new dN(n,r,o);return ma.set(s,l),l}function Ba(t=mf){const e=ma.get(t);if(!e&&t===mf&&hx())return _x();if(!e)throw jr.create("no-app",{appName:t});return e}function fN(){return Array.from(ma.values())}function en(t,e,n){var r;let s=(r=uN[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(l.join(" "));return}$r(new rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="firebase-heartbeat-database",mN=1,ga="firebase-heartbeat-store";let rd=null;function yx(){return rd||(rd=bk(pN,mN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ga)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),rd}async function gN(t){try{const n=(await yx()).transaction(ga),r=await n.objectStore(ga).get(vx(t));return await n.done,r}catch(e){if(e instanceof Dn)sr.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function uy(t,e){try{const r=(await yx()).transaction(ga,"readwrite");await r.objectStore(ga).put(e,vx(t)),await r.done}catch(n){if(n instanceof Dn)sr.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function vx(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=1024,yN=30*24*60*60*1e3;class vN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=yN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cy(),{heartbeatsToSend:r,unsentEntries:s}=wN(this._heartbeatsCache.heartbeats),i=Mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sr.warn(n),""}}}function cy(){return new Date().toISOString().substring(0,10)}function wN(t,e=_N){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rk()?sk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hy(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t){$r(new rr("platform-logger",e=>new Ok(e),"PRIVATE")),$r(new rr("heartbeat",e=>new vN(e),"PRIVATE")),en(pf,ay,t),en(pf,ay,"esm2017"),en("fire-js","")}EN("");var TN="firebase",IN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(TN,IN,"app");var dy={};const fy="@firebase/database",py="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wx="";function CN(t){wx=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SN(e)}}catch{}return new kN},ps=xx("localStorage"),NN=xx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Lc("@firebase/database"),AN=function(){let t=1;return function(){return t++}}(),Ex=function(t){const e=pk(t),n=new ck;n.update(e);const r=n.digest();return jp.encodeByteArray(r)},za=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=za.apply(null,r):typeof r=="object"?e+=Qe(r):e+=r,e+=" "}return e};let Bo=null,my=!0;const RN=function(t,e){B(!0,"Can't turn on custom loggers persistently."),fi.logLevel=ce.VERBOSE,Bo=fi.log.bind(fi)},at=function(...t){if(my===!0&&(my=!1,Bo===null&&NN.get("logging_enabled")===!0&&RN()),Bo){const e=za.apply(null,t);Bo(e)}},$a=function(t){return function(...e){at(t,...e)}},_f=function(...t){const e="FIREBASE INTERNAL ERROR: "+za(...t);fi.error(e)},ir=function(...t){const e=`FIREBASE FATAL ERROR: ${za(...t)}`;throw fi.error(e),new Error(e)},At=function(...t){const e="FIREBASE WARNING: "+za(...t);fi.warn(e)},bN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&At("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},PN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ki="[MIN_NAME]",Cs="[MAX_NAME]",Os=function(t,e){if(t===e)return 0;if(t===ki||e===Cs)return-1;if(e===ki||t===Cs)return 1;{const n=gy(t),r=gy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},DN=function(t,e){return t===e?0:t<e?-1:1},vo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Qe(e))},$p=function(t){if(typeof t!="object"||t===null)return Qe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Qe(e[r]),n+=":",n+=$p(t[e[r]]);return n+="}",n},Tx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ix=function(t){B(!zp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const p=c.join("");let m="";for(u=0;u<64;u+=8){let g=parseInt(p.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),m=m+g}return m.toLowerCase()},ON=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function MN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const jN=new RegExp("^-?(0*)\\d{1,10}$"),VN=-2147483648,FN=2147483647,gy=function(t){if(jN.test(t)){const e=Number(t);if(e>=VN&&e<=FN)return e}return null},Hi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw At("Exception was thrown by user callback.",n),e},Math.floor(0))}},UN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){At(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',At(e)}}class nu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="5",Cx="v",Sx="s",kx="r",Nx="f",Ax=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rx="ls",bx="p",yf="ac",Px="websocket",Dx="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r,s,i=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ps.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ps.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $N(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lx(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===Px)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$N(t)&&(n.ns=t.namespace);const s=[];return ht(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return W1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd={},id={};function Wp(t){const e=t.toString();return sd[e]||(sd[e]=new HN),sd[e]}function WN(t,e){const n=t.toString();return id[n]||(id[n]=e()),id[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Hi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="start",qN="close",KN="pLPCommand",QN="pRTLPCB",Mx="id",jx="pw",Vx="ser",YN="cb",XN="seg",JN="ts",ZN="d",eA="dframe",Fx=1870,Ux=30,tA=Fx-Ux,nA=25e3,rA=3e4;class ii{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$a(e),this.stats_=Wp(n),this.urlFn=u=>(this.appCheckToken&&(u[yf]=this.appCheckToken),Lx(n,Dx,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rA)),PN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gp((...i)=>{const[o,l,u,c,p]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_y)this.id=l,this.password=u;else if(o===qN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[_y]="t",r[Vx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cx]=Hp,this.transportSessionId&&(r[Sx]=this.transportSessionId),this.lastSessionId&&(r[Rx]=this.lastSessionId),this.applicationId&&(r[bx]=this.applicationId),this.appCheckToken&&(r[yf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ax.test(location.hostname)&&(r[kx]=Nx);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ON()&&!LN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lx(n),s=Tx(r,tA);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[eA]="t",r[Mx]=e,r[jx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AN(),window[KN+this.uniqueCallbackIdentifier]=e,window[QN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){at("frame writing exception"),l.stack&&at(l.stack),at(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||at("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mx]=this.myID,e[jx]=this.myPW,e[Vx]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ux+r.length<=Fx;){const o=this.pendingSegs.shift();r=r+"&"+XN+s+"="+o.seg+"&"+JN+s+"="+o.ts+"&"+ZN+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(nA)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{at("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=16384,iA=45e3;let Uu=null;typeof MozWebSocket<"u"?Uu=MozWebSocket:typeof WebSocket<"u"&&(Uu=WebSocket);class fn{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$a(this.connId),this.stats_=Wp(n),this.connURL=fn.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Cx]=Hp,typeof location<"u"&&location.hostname&&Ax.test(location.hostname)&&(o[kx]=Nx),n&&(o[Sx]=n),r&&(o[Rx]=r),s&&(o[yf]=s),i&&(o[bx]=i),Lx(e,Px,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ps.set("previous_websocket_failure",!0);try{let r;tk(),this.mySock=new Uu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uu!==null&&!fn.forceDisallow_}static previouslyFailed(){return ps.isInMemoryStorage||ps.get("previous_websocket_failure")===!0}markConnectionHealthy(){ps.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=pa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tx(n,sA);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ii,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=fn&&fn.isAvailable();let r=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||At("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fn];else{const s=this.transports_=[];for(const i of _a.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);_a.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_a.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=6e4,aA=5e3,lA=10*1024,uA=100*1024,od="t",yy="d",cA="s",vy="r",hA="e",wy="o",xy="a",Ey="n",Ty="p",dA="h";class fA{constructor(e,n,r,s,i,o,l,u,c,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$a("c:"+this.id+":"),this.transportManager_=new _a(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=zo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(od in e){const n=e[od];n===xy?this.upgradeIfSecondaryHealthy_():n===vy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vo("t",e),r=vo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ty,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ey,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vo("t",e),r=vo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vo(od,e);if(yy in e){const r=e[yy];if(n===dA){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ey){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cA?this.onConnectionShutdown_(r):n===vy?this.onReset_(r):n===hA?_f("Server Error: "+r):n===wy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_f("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hp!==r&&At("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),zo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(aA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ty,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ps.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends zx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Up()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bu}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=32,Cy=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new ve("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hr(t){return t.pieces_.length-t.pieceNum_}function Ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function qp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ya(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $x(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ve(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function kt(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return kt(Ie(t),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function mA(t,e){const n=ya(t,0),r=ya(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Os(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Kp(t,e){if(Hr(t)!==Hr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Hr(t)>Hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gA{constructor(e,n){this.errorPrefix_=n,this.parts_=ya(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Oc(this.parts_[r]);Hx(this)}}function _A(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oc(e),Hx(t)}function yA(t){const e=t.parts_.pop();t.byteLength_-=Oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Hx(t){if(t.byteLength_>Cy)throw new Error(t.errorPrefix_+"has a key path longer than "+Cy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Iy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Iy+") or object contains a cycle "+cs(t))}function cs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends zx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qp}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=1e3,vA=60*5*1e3,Sy=30*1e3,wA=1.3,xA=3e4,EA="server_kill",ky=3;class Yn extends Bx{constructor(e,n,r,s,i,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Yn.nextPersistentConnectionId_++,this.log_=$a("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wo,this.maxReconnectDelay_=vA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Qe(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Va,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const u=l.d,c=l.s;Yn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const r=Si(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();At(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_f("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xA&&(this.reconnectDelay_=wo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Yn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(m){B(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(m)};this.realtime_={close:u,sendRequest:c};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,g]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=g&&g.token,l=new fA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,I=>{At(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(EA)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&At(m),u())}}}interrupt(e){at("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){at("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hf(this.interruptReasons_)&&(this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>$p(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){at("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ky&&(this.reconnectDelay_=Sy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){at("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ky&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wx.replace(/\./g,"-")]=1,Up()?e["framework.cordova"]=1:fx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bu.getInstance().currentlyOnline();return hf(this.interruptReasons_)&&e}}Yn.nextPersistentConnectionId_=0;Yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(ki,e),s=new le(ki,n);return this.compare(r,s)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class Wx extends Mc{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return Os(e.name,n.name)}isDefinedOn(e){throw zi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(Cs,Ol)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Ol)}toString(){return".key"}}const pi=new Wx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},zt=class Ro{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ro.RED,this.left=s??Cn.EMPTY_NODE,this.right=i??Cn.EMPTY_NODE}copy(e,n,r,s,i){return new Ro(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Cn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Cn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ro.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ro.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};zt.RED=!0;zt.BLACK=!1;class TA{copy(e,n,r,s,i){return this}insert(e,n,r){return new zt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Cn=class ru{constructor(e,n=ru.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ru(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new ru(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ll(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ll(this.root_,null,this.comparator_,!0,e)}};Cn.EMPTY_NODE=new TA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t,e){return Os(t.name,e.name)}function Yp(t,e){return Os(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf;function CA(t){vf=t}const Gx=function(t){return typeof t=="number"?"number:"+Ix(t):"string:"+t},qx=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else B(t===vf||t.isEmpty(),"priority of unexpected type.");B(t===vf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ny;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qx(this.priorityNode_)}static set __childrenNodeConstructor(e){Ny=e}static get __childrenNodeConstructor(){return Ny}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ae(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||Hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ix(this.value_):e+=this.value_,this.lazyHash_=Ex(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Xe.VALUE_TYPE_ORDER.indexOf(n),i=Xe.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kx,Qx;function SA(t){Kx=t}function kA(t){Qx=t}class NA extends Mc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Os(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Cs,new Xe("[PRIORITY-POST]",Qx))}makePost(e,n){const r=Kx(e);return new le(n,new Xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new NA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=Math.log(2);class RA{constructor(e){const n=i=>parseInt(Math.log(i)/AA,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zu=function(t,e,n,r){t.sort(e);const s=function(u,c){const p=c-u;let m,g;if(p===0)return null;if(p===1)return m=t[u],g=n?n(m):m,new zt(g,m.node,zt.BLACK,null,null);{const I=parseInt(p/2,10)+u,S=s(u,I),A=s(I+1,c);return m=t[I],g=n?n(m):m,new zt(g,m.node,zt.BLACK,S,A)}},i=function(u){let c=null,p=null,m=t.length;const g=function(S,A){const O=m-S,E=m;m-=S;const x=s(O+1,E),k=t[O],P=n?n(k):k;I(new zt(P,k.node,A,null,x))},I=function(S){c?(c.left=S,c=S):(p=S,c=S)};for(let S=0;S<u.count;++S){const A=u.nextBitIsOne(),O=Math.pow(2,u.count-(S+1));A?g(O,zt.BLACK):(g(O,zt.BLACK),g(O,zt.RED))}return p},o=new RA(t.length),l=i(o);return new Cn(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;const Ws={};class Wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Ws&&Fe,"ChildrenNode.ts has not been loaded"),ad=ad||new Wn({".priority":Ws},{".priority":Fe}),ad}get(e){const n=Si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Cn?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){B(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(le.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=zu(r,e.getCompare()):l=Ws;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const p=Object.assign({},this.indexes_);return p[u]=l,new Wn(p,c)}addToIndexes(e,n){const r=Vu(this.indexes_,(s,i)=>{const o=Si(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===Ws)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(le.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),zu(l,o.getCompare())}else return Ws;else{const l=n.get(e.name);let u=s;return l&&(u=u.remove(new le(e.name,l))),u.insert(e,e.node)}});return new Wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vu(this.indexes_,s=>{if(s===Ws)return s;{const i=n.get(e.name);return i?s.remove(new le(e.name,i)):s}});return new Wn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qx(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xo||(xo=new ee(new Cn(Yp),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xo}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xo:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?xo:this.priorityNode_;return new ee(s,o,i)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{B(ae(e)!==".priority"||Hr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ie(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Fe,(o,l)=>{n[o]=l.val(e),r++,i&&ee.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gx(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ex(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new le(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ha?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),s=n.getIterator(Fe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bA extends ee{constructor(){super(new Cn(Yp),ee.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Ha=new bA;Object.defineProperties(le,{MIN:{value:new le(ki,ee.EMPTY_NODE)},MAX:{value:new le(Cs,Ha)}});Wx.__EMPTY_NODE=ee.EMPTY_NODE;Xe.__childrenNodeConstructor=ee;CA(Ha);kA(Ha);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=!0;function Ke(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,Ke(e))}if(!(t instanceof Array)&&PA){const n=[];let r=!1;if(ht(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=Ke(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new le(o,u)))}}),n.length===0)return ee.EMPTY_NODE;const i=zu(n,IA,o=>o.name,Yp);if(r){const o=zu(n,Fe.getCompare());return new ee(i,Ke(e),new Wn({".priority":o},{".priority":Fe}))}else return new ee(i,Ke(e),Wn.Default)}else{let n=ee.EMPTY_NODE;return ht(t,(r,s)=>{if(On(t,r)&&r.substring(0,1)!=="."){const i=Ke(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ke(e))}}SA(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA extends Mc{constructor(e){super(),this.indexPath_=e,B(!ue(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Os(e.name,n.name):i}makePost(e,n){const r=Ke(e),s=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,s)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Ha);return new le(Cs,e)}toString(){return ya(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA extends Mc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Os(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=Ke(e);return new le(n,r)}toString(){return".value"}}const LA=new OA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){return{type:"value",snapshotNode:t}}function Ni(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function va(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function MA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(va(n,l)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ni(n,r)):o.trackChildChange(wa(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Fe,(s,i)=>{n.hasChild(s)||r.trackChildChange(va(s,i))}),n.isLeafNode()||n.forEachChild(Fe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(wa(s,i,o))}else r.trackChildChange(Ni(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.indexedFilter_=new Xp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xa.getStartPost_(e),this.endPost_=xa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new le(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(ee.EMPTY_NODE);const i=this;return n.forEachChild(Fe,(o,l)=>{i.matches(new le(o,l))||(s=s.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new xa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new le(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=ee.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(ee.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const m=this.index_.getCompare();o=(g,I)=>m(I,g)}else o=this.index_.getCompare();const l=e;B(l.numChildren()===this.limit_,"");const u=new le(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),p=this.rangedFilter_.matches(u);if(l.hasChild(n)){const m=l.getImmediateChild(n);let g=s.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const I=g==null?1:o(g,u);if(p&&!r.isEmpty()&&I>=0)return i!=null&&i.trackChildChange(wa(n,r,m)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(va(n,m));const A=l.updateImmediateChild(n,ee.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(i!=null&&i.trackChildChange(Ni(g.name,g.node)),A.updateImmediateChild(g.name,g.node)):A}}else return r.isEmpty()?e:p&&o(c,u)>=0?(i!=null&&(i.trackChildChange(va(c.name,c.node)),i.trackChildChange(Ni(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ki}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new Jp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VA(t){return t.loadsAllData()?new Xp(t.getIndex()):t.hasLimit()?new jA(t):new xa(t)}function FA(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Ay(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===LA?n="$value":t.index_===pi?n="$key":(B(t.index_ instanceof DA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Qe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Qe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Qe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Qe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ry(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends Bx{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=$a("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=$u.getListenId_(e,r),l={};this.listens_[o]=l;const u=Ay(e._queryParams);this.restRequest_(i+".json",u,(c,p)=>{let m=p;if(c===404&&(m=null,c=null),c===null&&this.onDataUpdate_(i,m,!1,r),Si(this.listens_,o)===l){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",s(g,null)}})}unlisten(e,n){const r=$u.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ay(e._queryParams),r=e._path.toString(),s=new Va;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$i(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=pa(l.responseText)}catch{At("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&At("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){return{value:null,children:new Map}}function Xx(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,Hu());const s=t.children.get(r);e=Ie(e),Xx(s,e,n)}}function wf(t,e,n){t.value!==null?n(e,t.value):BA(t,(r,s)=>{const i=new ve(e.toString()+"/"+r);wf(s,i,n)})}function BA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=10*1e3,$A=30*1e3,HA=5*60*1e3;class WA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zA(e);const r=by+($A-by)*Math.random();zo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ht(e,(s,i)=>{i>0&&On(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),zo(this.reportStats_.bind(this),Math.floor(Math.random()*2*HA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function Zp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function em(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=Zp()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Wu(ge(),n,this.revert)}}else return B(ae(this.path)===e,"operationForChild called for unrelated child."),new Wu(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Ea(this.source,ge()):new Ea(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mn.OVERWRITE}operationForChild(e){return ue(this.path)?new Ss(this.source,ge(),this.snap.getImmediateChild(e)):new Ss(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Ss(this.source,ge(),n.value):new Ai(this.source,ge(),n)}else return B(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ai(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qA(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(MA(o.childName,o.snapshotNode))}),Eo(t,s,"child_removed",e,r,n),Eo(t,s,"child_added",e,r,n),Eo(t,s,"child_moved",i,r,n),Eo(t,s,"child_changed",e,r,n),Eo(t,s,"value",e,r,n),s}function Eo(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,u)=>QA(t,l,u)),o.forEach(l=>{const u=KA(t,l,i);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function KA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QA(t,e,n){if(e.childName==null||n.childName==null)throw zi("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),s=new le(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e){return{eventCache:t,serverCache:e}}function $o(t,e,n,r){return jc(new Wr(e,n,r),t.serverCache)}function Jx(t,e,n,r){return jc(t.eventCache,new Wr(e,n,r))}function Gu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;const YA=()=>(ld||(ld=new Cn(DN)),ld);class Te{constructor(e,n=YA()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return ht(e,(r,s)=>{n=n.set(new ve(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ue(e))return null;{const r=ae(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ie(e),n);return i!=null?{path:Ve(new ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Ie(e)):new Te(null)}}set(e,n){if(ue(e))return new Te(n,this.children);{const r=ae(e),i=(this.children.get(r)||new Te(null)).set(Ie(e),n),o=this.children.insert(r,i);return new Te(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const s=r.remove(Ie(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Te(null):new Te(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Ie(e)):null}}setTree(e,n){if(ue(e))return n;{const r=ae(e),i=(this.children.get(r)||new Te(null)).setTree(Ie(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Te(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ve(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ue(e))return null;{const i=ae(e),o=this.children.get(i);return o?o.findOnPath_(Ie(e),Ve(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const s=ae(e),i=this.children.get(s);return i?i.foreachOnPath_(Ie(e),Ve(n,s),r):new Te(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.writeTree_=e}static empty(){return new wn(new Te(null))}}function Ho(t,e,n){if(ue(e))return new wn(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=kt(s,e);return i=i.updateChild(o,n),new wn(t.writeTree_.set(s,i))}else{const s=new Te(n),i=t.writeTree_.setTree(e,s);return new wn(i)}}}function xf(t,e,n){let r=t;return ht(n,(s,i)=>{r=Ho(r,Ve(e,s),i)}),r}function Py(t,e){if(ue(e))return wn.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new wn(n)}}function Ef(t,e){return Ls(t,e)!=null}function Ls(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kt(n.path,e)):null}function Dy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,s)=>{e.push(new le(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new le(r,s.value))}),e}function Vr(t,e){if(ue(e))return t;{const n=Ls(t,e);return n!=null?new wn(new Te(n)):new wn(t.writeTree_.subtree(e))}}function Tf(t){return t.writeTree_.isEmpty()}function Ri(t,e){return Zx(ge(),t.writeTree_,e)}function Zx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Zx(Ve(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t,e){return rE(e,t)}function XA(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ho(t.visibleWrites,e,n)),t.lastWriteId=r}function JA(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=xf(t.visibleWrites,e,n),t.lastWriteId=r}function ZA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function eR(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&tR(l,r.path)?s=!1:Jt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return nR(t),!0;if(r.snap)t.visibleWrites=Py(t.visibleWrites,r.path);else{const l=r.children;ht(l,u=>{t.visibleWrites=Py(t.visibleWrites,Ve(r.path,u))})}return!0}else return!1}function tR(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(Ve(t.path,n),e))return!0;return!1}function nR(t){t.visibleWrites=eE(t.allWrites,rR,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rR(t){return t.visible}function eE(t,e,n){let r=wn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Jt(n,o)?(l=kt(n,o),r=Ho(r,l,i.snap)):Jt(o,n)&&(l=kt(o,n),r=Ho(r,ge(),i.snap.getChild(l)));else if(i.children){if(Jt(n,o))l=kt(n,o),r=xf(r,l,i.children);else if(Jt(o,n))if(l=kt(o,n),ue(l))r=xf(r,ge(),i.children);else{const u=Si(i.children,ae(l));if(u){const c=u.getChild(Ie(l));r=Ho(r,ge(),c)}}}else throw zi("WriteRecord should have .snap or .children")}}return r}function tE(t,e,n,r,s){if(!r&&!s){const i=Ls(t.visibleWrites,e);if(i!=null)return i;{const o=Vr(t.visibleWrites,e);if(Tf(o))return n;if(n==null&&!Ef(o,ge()))return null;{const l=n||ee.EMPTY_NODE;return Ri(o,l)}}}else{const i=Vr(t.visibleWrites,e);if(!s&&Tf(i))return n;if(!s&&n==null&&!Ef(i,ge()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(Jt(c.path,e)||Jt(e,c.path))},l=eE(t.allWrites,o,e),u=n||ee.EMPTY_NODE;return Ri(l,u)}}}function sR(t,e,n){let r=ee.EMPTY_NODE;const s=Ls(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Fe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Vr(t.visibleWrites,e);return n.forEachChild(Fe,(o,l)=>{const u=Ri(Vr(i,new ve(o)),l);r=r.updateImmediateChild(o,u)}),Dy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Vr(t.visibleWrites,e);return Dy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function iR(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ve(e,n);if(Ef(t.visibleWrites,i))return null;{const o=Vr(t.visibleWrites,i);return Tf(o)?s.getChild(n):Ri(o,s.getChild(n))}}function oR(t,e,n,r){const s=Ve(e,n),i=Ls(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Vr(t.visibleWrites,s);return Ri(o,r.getNode().getImmediateChild(n))}else return null}function aR(t,e){return Ls(t.visibleWrites,e)}function lR(t,e,n,r,s,i,o){let l;const u=Vr(t.visibleWrites,e),c=Ls(u,ge());if(c!=null)l=c;else if(n!=null)l=Ri(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const p=[],m=o.getCompare(),g=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let I=g.getNext();for(;I&&p.length<s;)m(I,r)!==0&&p.push(I),I=g.getNext();return p}else return[]}function uR(){return{visibleWrites:wn.empty(),allWrites:[],lastWriteId:-1}}function qu(t,e,n,r){return tE(t.writeTree,t.treePath,e,n,r)}function nm(t,e){return sR(t.writeTree,t.treePath,e)}function Oy(t,e,n,r){return iR(t.writeTree,t.treePath,e,n,r)}function Ku(t,e){return aR(t.writeTree,Ve(t.treePath,e))}function cR(t,e,n,r,s,i){return lR(t.writeTree,t.treePath,e,n,r,s,i)}function rm(t,e,n){return oR(t.writeTree,t.treePath,e,n)}function nE(t,e){return rE(Ve(t.treePath,e),t.writeTree)}function rE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,wa(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,va(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Ni(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,wa(r,e.snapshotNode,s.oldSnap));else throw zi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const sE=new dR;class sm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ks(this.viewCache_),i=cR(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){return{filter:t}}function pR(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mR(t,e,n,r,s){const i=new hR;let o,l;if(n.type===mn.OVERWRITE){const c=n;c.source.fromUser?o=If(t,e,c.path,c.snap,r,s,i):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=Qu(t,e,c.path,c.snap,r,s,l,i))}else if(n.type===mn.MERGE){const c=n;c.source.fromUser?o=_R(t,e,c.path,c.children,r,s,i):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Cf(t,e,c.path,c.children,r,s,l,i))}else if(n.type===mn.ACK_USER_WRITE){const c=n;c.revert?o=wR(t,e,c.path,r,s,i):o=yR(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===mn.LISTEN_COMPLETE)o=vR(t,e,n.path,r,i);else throw zi("Unknown operation type: "+n.type);const u=i.getChanges();return gR(e,o,u),{viewCache:o,changes:u}}function gR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Gu(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Yx(Gu(e)))}}function iE(t,e,n,r,s,i){const o=e.eventCache;if(Ku(r,n)!=null)return e;{let l,u;if(ue(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ks(e),p=c instanceof ee?c:ee.EMPTY_NODE,m=nm(r,p);l=t.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const c=qu(r,ks(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ae(n);if(c===".priority"){B(Hr(n)===1,"Can't have a priority with additional path components");const p=o.getNode();u=e.serverCache.getNode();const m=Oy(r,n,p,u);m!=null?l=t.filter.updatePriority(p,m):l=o.getNode()}else{const p=Ie(n);let m;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const g=Oy(r,n,o.getNode(),u);g!=null?m=o.getNode().getImmediateChild(c).updateChild(p,g):m=o.getNode().getImmediateChild(c)}else m=rm(r,c,e.serverCache);m!=null?l=t.filter.updateChild(o.getNode(),c,m,p,s,i):l=o.getNode()}}return $o(e,l,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function Qu(t,e,n,r,s,i,o,l){const u=e.serverCache;let c;const p=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=p.updateFullNode(u.getNode(),r,null);else if(p.filtersNodes()&&!u.isFiltered()){const I=u.getNode().updateChild(n,r);c=p.updateFullNode(u.getNode(),I,null)}else{const I=ae(n);if(!u.isCompleteForPath(n)&&Hr(n)>1)return e;const S=Ie(n),O=u.getNode().getImmediateChild(I).updateChild(S,r);I===".priority"?c=p.updatePriority(u.getNode(),O):c=p.updateChild(u.getNode(),I,O,S,sE,null)}const m=Jx(e,c,u.isFullyInitialized()||ue(n),p.filtersNodes()),g=new sm(s,m,i);return iE(t,m,n,s,g,l)}function If(t,e,n,r,s,i,o){const l=e.eventCache;let u,c;const p=new sm(s,e,i);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=$o(e,c,!0,t.filter.filtersNodes());else{const m=ae(n);if(m===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=$o(e,c,l.isFullyInitialized(),l.isFiltered());else{const g=Ie(n),I=l.getNode().getImmediateChild(m);let S;if(ue(g))S=r;else{const A=p.getCompleteChild(m);A!=null?qp(g)===".priority"&&A.getChild($x(g)).isEmpty()?S=A:S=A.updateChild(g,r):S=ee.EMPTY_NODE}if(I.equals(S))u=e;else{const A=t.filter.updateChild(l.getNode(),m,S,g,p,o);u=$o(e,A,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Ly(t,e){return t.eventCache.isCompleteForChild(e)}function _R(t,e,n,r,s,i,o){let l=e;return r.foreach((u,c)=>{const p=Ve(n,u);Ly(e,ae(p))&&(l=If(t,l,p,c,s,i,o))}),r.foreach((u,c)=>{const p=Ve(n,u);Ly(e,ae(p))||(l=If(t,l,p,c,s,i,o))}),l}function My(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Cf(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ue(n)?c=r:c=new Te(null).setTree(n,r);const p=e.serverCache.getNode();return c.children.inorderTraversal((m,g)=>{if(p.hasChild(m)){const I=e.serverCache.getNode().getImmediateChild(m),S=My(t,I,g);u=Qu(t,u,new ve(m),S,s,i,o,l)}}),c.children.inorderTraversal((m,g)=>{const I=!e.serverCache.isCompleteForChild(m)&&g.value===null;if(!p.hasChild(m)&&!I){const S=e.serverCache.getNode().getImmediateChild(m),A=My(t,S,g);u=Qu(t,u,new ve(m),A,s,i,o,l)}}),u}function yR(t,e,n,r,s,i,o){if(Ku(s,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ue(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Qu(t,e,n,u.getNode().getChild(n),s,i,l,o);if(ue(n)){let c=new Te(null);return u.getNode().forEachChild(pi,(p,m)=>{c=c.set(new ve(p),m)}),Cf(t,e,n,c,s,i,l,o)}else return e}else{let c=new Te(null);return r.foreach((p,m)=>{const g=Ve(n,p);u.isCompleteForPath(g)&&(c=c.set(p,u.getNode().getChild(g)))}),Cf(t,e,n,c,s,i,l,o)}}function vR(t,e,n,r,s){const i=e.serverCache,o=Jx(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return iE(t,o,n,r,sE,s)}function wR(t,e,n,r,s,i){let o;if(Ku(r,n)!=null)return e;{const l=new sm(r,e,s),u=e.eventCache.getNode();let c;if(ue(n)||ae(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=qu(r,ks(e));else{const m=e.serverCache.getNode();B(m instanceof ee,"serverChildren would be complete if leaf node"),p=nm(r,m)}p=p,c=t.filter.updateFullNode(u,p,i)}else{const p=ae(n);let m=rm(r,p,e.serverCache);m==null&&e.serverCache.isCompleteForChild(p)&&(m=u.getImmediateChild(p)),m!=null?c=t.filter.updateChild(u,p,m,Ie(n),l,i):e.eventCache.getNode().hasChild(p)?c=t.filter.updateChild(u,p,ee.EMPTY_NODE,Ie(n),l,i):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qu(r,ks(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Ku(r,ge())!=null,$o(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Xp(r.getIndex()),i=VA(r);this.processor_=fR(i);const o=n.serverCache,l=n.eventCache,u=s.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(ee.EMPTY_NODE,l.getNode(),null),p=new Wr(u,o.isFullyInitialized(),s.filtersNodes()),m=new Wr(c,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=jc(m,p),this.eventGenerator_=new GA(this.query_)}get query(){return this.query_}}function ER(t){return t.viewCache_.serverCache.getNode()}function TR(t){return Gu(t.viewCache_)}function IR(t,e){const n=ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function jy(t){return t.eventRegistrations_.length===0}function CR(t,e){t.eventRegistrations_.push(e)}function Vy(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Fy(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(B(ks(t.viewCache_),"We should always have a full cache before handling merges"),B(Gu(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=mR(t.processor_,s,e,n,r);return pR(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,oE(t,i.changes,i.viewCache.eventCache.getNode(),null)}function SR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(i,o)=>{r.push(Ni(i,o))}),n.isFullyInitialized()&&r.push(Yx(n.getNode())),oE(t,r,n.getNode(),e)}function oE(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return qA(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu;class aE{constructor(){this.views=new Map}}function kR(t){B(!Yu,"__referenceConstructor has already been defined"),Yu=t}function NR(){return B(Yu,"Reference.ts has not been loaded"),Yu}function AR(t){return t.views.size===0}function im(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),Fy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Fy(o,e,n,r));return i}}function lE(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=qu(n,s?r:null),u=!1;l?u=!0:r instanceof ee?(l=nm(n,r),u=!1):(l=ee.EMPTY_NODE,u=!1);const c=jc(new Wr(l,u,!1),new Wr(r,s,!1));return new xR(e,c)}return o}function RR(t,e,n,r,s,i){const o=lE(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CR(o,n),SR(o,n)}function bR(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Gr(t);if(s==="default")for(const[u,c]of t.views.entries())o=o.concat(Vy(c,n,r)),jy(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||i.push(c.query));else{const u=t.views.get(s);u&&(o=o.concat(Vy(u,n,r)),jy(u)&&(t.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return l&&!Gr(t)&&i.push(new(NR())(e._repo,e._path)),{removed:i,events:o}}function uE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Fr(t,e){let n=null;for(const r of t.views.values())n=n||IR(r,e);return n}function cE(t,e){if(e._queryParams.loadsAllData())return Fc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function hE(t,e){return cE(t,e)!=null}function Gr(t){return Fc(t)!=null}function Fc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;function PR(t){B(!Xu,"__referenceConstructor has already been defined"),Xu=t}function DR(){return B(Xu,"Reference.ts has not been loaded"),Xu}let OR=1;class Uy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=uR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dE(t,e,n,r,s){return XA(t.pendingWriteTree_,e,n,r,s),s?Wi(t,new Ss(Zp(),e,n)):[]}function LR(t,e,n,r){JA(t.pendingWriteTree_,e,n,r);const s=Te.fromObject(n);return Wi(t,new Ai(Zp(),e,s))}function kr(t,e,n=!1){const r=ZA(t.pendingWriteTree_,e);if(eR(t.pendingWriteTree_,e)){let i=new Te(null);return r.snap!=null?i=i.set(ge(),!0):ht(r.children,o=>{i=i.set(new ve(o),!0)}),Wi(t,new Wu(r.path,i,n))}else return[]}function Wa(t,e,n){return Wi(t,new Ss(em(),e,n))}function MR(t,e,n){const r=Te.fromObject(n);return Wi(t,new Ai(em(),e,r))}function jR(t,e){return Wi(t,new Ea(em(),e))}function VR(t,e,n){const r=am(t,n);if(r){const s=lm(r),i=s.path,o=s.queryId,l=kt(i,e),u=new Ea(tm(o),l);return um(t,i,u)}else return[]}function Ju(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||hE(o,e))){const u=bR(o,e,n,r);AR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=u.removed;if(l=u.events,!s){const p=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,m=t.syncPointTree_.findOnPath(i,(g,I)=>Gr(I));if(p&&!m){const g=t.syncPointTree_.subtree(i);if(!g.isEmpty()){const I=BR(g);for(let S=0;S<I.length;++S){const A=I[S],O=A.query,E=gE(t,A);t.listenProvider_.startListening(Wo(O),Ta(t,O),E.hashFn,E.onComplete)}}}!m&&c.length>0&&!r&&(p?t.listenProvider_.stopListening(Wo(e),null):c.forEach(g=>{const I=t.queryToTagMap.get(Uc(g));t.listenProvider_.stopListening(Wo(g),I)}))}zR(t,c)}return l}function fE(t,e,n,r){const s=am(t,r);if(s!=null){const i=lm(s),o=i.path,l=i.queryId,u=kt(o,e),c=new Ss(tm(l),u,n);return um(t,o,c)}else return[]}function FR(t,e,n,r){const s=am(t,r);if(s){const i=lm(s),o=i.path,l=i.queryId,u=kt(o,e),c=Te.fromObject(n),p=new Ai(tm(l),u,c);return um(t,o,p)}else return[]}function Sf(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(g,I)=>{const S=kt(g,s);i=i||Fr(I,S),o=o||Gr(I)});let l=t.syncPointTree_.get(s);l?(o=o||Gr(l),i=i||Fr(l,ge())):(l=new aE,t.syncPointTree_=t.syncPointTree_.set(s,l));let u;i!=null?u=!0:(u=!1,i=ee.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((I,S)=>{const A=Fr(S,ge());A&&(i=i.updateImmediateChild(I,A))}));const c=hE(l,e);if(!c&&!e._queryParams.loadsAllData()){const g=Uc(e);B(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const I=$R();t.queryToTagMap.set(g,I),t.tagToQueryMap.set(I,g)}const p=Vc(t.pendingWriteTree_,s);let m=RR(l,e,n,p,i,u);if(!c&&!o&&!r){const g=cE(l,e);m=m.concat(HR(t,e,g))}return m}function om(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=kt(o,e),c=Fr(l,u);if(c)return c});return tE(s,e,i,n,!0)}function UR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,p)=>{const m=kt(c,n);r=r||Fr(p,m)});let s=t.syncPointTree_.get(n);s?r=r||Fr(s,ge()):(s=new aE,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Wr(r,!0,!1):null,l=Vc(t.pendingWriteTree_,e._path),u=lE(s,e,l,i?o.getNode():ee.EMPTY_NODE,i);return TR(u)}function Wi(t,e){return pE(e,t.syncPointTree_,null,Vc(t.pendingWriteTree_,ge()))}function pE(t,e,n,r){if(ue(t.path))return mE(t,e,n,r);{const s=e.get(ge());n==null&&s!=null&&(n=Fr(s,ge()));let i=[];const o=ae(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,p=nE(r,o);i=i.concat(pE(l,u,c,p))}return s&&(i=i.concat(im(s,t,r,n))),i}}function mE(t,e,n,r){const s=e.get(ge());n==null&&s!=null&&(n=Fr(s,ge()));let i=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=nE(r,o),p=t.operationForChild(o);p&&(i=i.concat(mE(p,l,u,c)))}),s&&(i=i.concat(im(s,t,r,n))),i}function gE(t,e){const n=e.query,r=Ta(t,n);return{hashFn:()=>(ER(e)||ee.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?VR(t,n._path,r):jR(t,n._path);{const i=MN(s,n);return Ju(t,n,null,i)}}}}function Ta(t,e){const n=Uc(e);return t.queryToTagMap.get(n)}function Uc(t){return t._path.toString()+"$"+t._queryIdentifier}function am(t,e){return t.tagToQueryMap.get(e)}function lm(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function um(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Vc(t.pendingWriteTree_,e);return im(r,n,s,null)}function BR(t){return t.fold((e,n,r)=>{if(n&&Gr(n))return[Fc(n)];{let s=[];return n&&(s=uE(n)),ht(r,(i,o)=>{s=s.concat(o)}),s}})}function Wo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(DR())(t._repo,t._path):t}function zR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Uc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function $R(){return OR++}function HR(t,e,n){const r=e._path,s=Ta(t,e),i=gE(t,n),o=t.listenProvider_.startListening(Wo(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)B(!Gr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((c,p,m)=>{if(!ue(c)&&p&&Gr(p))return[Fc(p).query];{let g=[];return p&&(g=g.concat(uE(p).map(I=>I.query))),ht(m,(I,S)=>{g=g.concat(S)}),g}});for(let c=0;c<u.length;++c){const p=u[c];t.listenProvider_.stopListening(Wo(p),Ta(t,p))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cm(n)}node(){return this.node_}}class hm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new hm(this.syncTree_,n)}node(){return om(this.syncTree_,this.path_)}}const WR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},By=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return qR(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},qR=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},_E=function(t,e,n,r){return dm(e,new hm(n,t),r)},yE=function(t,e,n){return dm(t,new cm(e),n)};function dm(t,e,n){const r=t.getPriority().val(),s=By(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=By(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Xe(l,Ke(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Xe(s))),o.forEachChild(Fe,(l,u)=>{const c=dm(u,e.getImmediateChild(l),n);c!==u&&(i=i.updateImmediateChild(l,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function pm(t,e){let n=e instanceof ve?e:new ve(e),r=t,s=ae(n);for(;s!==null;){const i=Si(r.node.children,s)||{children:{},childCount:0};r=new fm(s,r,i),n=Ie(n),s=ae(n)}return r}function Gi(t){return t.node.value}function vE(t,e){t.node.value=e,kf(t)}function wE(t){return t.node.childCount>0}function KR(t){return Gi(t)===void 0&&!wE(t)}function Bc(t,e){ht(t.node.children,(n,r)=>{e(new fm(n,t,r))})}function xE(t,e,n,r){n&&e(t),Bc(t,s=>{xE(s,e,!0)})}function QR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ga(t){return new ve(t.parent===null?t.name:Ga(t.parent)+"/"+t.name)}function kf(t){t.parent!==null&&YR(t.parent,t.name,t)}function YR(t,e,n){const r=KR(n),s=On(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,kf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,kf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=/[\[\].#$\/\u0000-\u001F\u007F]/,JR=/[\[\].#$\u0000-\u001F\u007F]/,ud=10*1024*1024,mm=function(t){return typeof t=="string"&&t.length!==0&&!XR.test(t)},EE=function(t){return typeof t=="string"&&t.length!==0&&!JR.test(t)},ZR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),EE(t)},eb=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zp(t)||t&&typeof t=="object"&&On(t,".sv")},TE=function(t,e,n,r){r&&e===void 0||zc(Dc(t,"value"),e,n)},zc=function(t,e,n){const r=n instanceof ve?new gA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+cs(r));if(typeof e=="function")throw new Error(t+"contains a function "+cs(r)+" with contents = "+e.toString());if(zp(e))throw new Error(t+"contains "+e.toString()+" "+cs(r));if(typeof e=="string"&&e.length>ud/3&&Oc(e)>ud)throw new Error(t+"contains a string greater than "+ud+" utf8 bytes "+cs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ht(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!mm(o)))throw new Error(t+" contains an invalid key ("+o+") "+cs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_A(r,o),zc(t,l,r),yA(r)}),s&&i)throw new Error(t+' contains ".value" child '+cs(r)+" in addition to actual children.")}},tb=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=ya(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!mm(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(mA);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Jt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},nb=function(t,e,n,r){const s=Dc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];ht(e,(o,l)=>{const u=new ve(o);if(zc(s,l,Ve(n,u)),qp(u)===".priority"&&!eb(l))throw new Error(s+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(u)}),tb(s,i)},IE=function(t,e,n,r){if(!EE(n))throw new Error(Dc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),IE(t,e,n)},CE=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZR(n))throw new Error(Dc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $c(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Kp(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function SE(t,e,n){$c(t,n),kE(t,r=>Kp(r,e))}function rn(t,e,n){$c(t,n),kE(t,r=>Jt(r,e)||Jt(e,r))}function kE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(ob(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ob(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Bo&&at("event: "+n.toString()),Hi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="repo_interrupt",lb=25;class ub{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ib,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hu(),this.transactionQueueTree_=new fm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cb(t,e,n){if(t.stats_=Wp(t.repoInfo_),t.forceRestClient_||UN())t.server_=new $u(t.repoInfo_,(r,s,i,o)=>{zy(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$y(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yn(t.repoInfo_,e,(r,s,i,o)=>{zy(t,r,s,i,o)},r=>{$y(t,r)},r=>{hb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=WN(t.repoInfo_,()=>new WA(t.stats_,t.server_)),t.infoData_=new UA,t.infoSyncTree_=new Uy({startListening:(r,s,i,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=Wa(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),gm(t,"connected",!1),t.serverSyncTree_=new Uy({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,u)=>{const c=o(l,u);rn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function NE(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hc(t){return WR({timestamp:NE(t)})}function zy(t,e,n,r,s){t.dataUpdateCount++;const i=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=Vu(n,c=>Ke(c));o=FR(t.serverSyncTree_,i,u,s)}else{const u=Ke(n);o=fE(t.serverSyncTree_,i,u,s)}else if(r){const u=Vu(n,c=>Ke(c));o=MR(t.serverSyncTree_,i,u)}else{const u=Ke(n);o=Wa(t.serverSyncTree_,i,u)}let l=i;o.length>0&&(l=bi(t,i)),rn(t.eventQueue_,l,o)}function $y(t,e){gm(t,"connected",e),e===!1&&mb(t)}function hb(t,e){ht(e,(n,r)=>{gm(t,n,r)})}function gm(t,e,n){const r=new ve("/.info/"+e),s=Ke(n);t.infoData_.updateSnapshot(r,s);const i=Wa(t.infoSyncTree_,r,s);rn(t.eventQueue_,r,i)}function _m(t){return t.nextWriteId_++}function db(t,e,n){const r=UR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Ke(s).withIndex(e._queryParams.getIndex());Sf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wa(t.serverSyncTree_,e._path,i);else{const l=Ta(t.serverSyncTree_,e);o=fE(t.serverSyncTree_,e._path,i,l)}return rn(t.eventQueue_,e._path,o),Ju(t.serverSyncTree_,e,n,null,!0),i},s=>(qa(t,"get for query "+Qe(e)+" failed: "+s),Promise.reject(new Error(s))))}function fb(t,e,n,r,s){qa(t,"set",{path:e.toString(),value:n,priority:r});const i=Hc(t),o=Ke(n,r),l=om(t.serverSyncTree_,e),u=yE(o,l,i),c=_m(t),p=dE(t.serverSyncTree_,e,u,c,!0);$c(t.eventQueue_,p),t.server_.put(e.toString(),o.val(!0),(g,I)=>{const S=g==="ok";S||At("set at "+e+" failed: "+g);const A=kr(t.serverSyncTree_,c,!S);rn(t.eventQueue_,e,A),Nf(t,s,g,I)});const m=vm(t,e);bi(t,m),rn(t.eventQueue_,m,[])}function pb(t,e,n,r){qa(t,"update",{path:e.toString(),value:n});let s=!0;const i=Hc(t),o={};if(ht(n,(l,u)=>{s=!1,o[l]=_E(Ve(e,l),Ke(u),t.serverSyncTree_,i)}),s)at("update() called with empty data.  Don't do anything."),Nf(t,r,"ok",void 0);else{const l=_m(t),u=LR(t.serverSyncTree_,e,o,l);$c(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,p)=>{const m=c==="ok";m||At("update at "+e+" failed: "+c);const g=kr(t.serverSyncTree_,l,!m),I=g.length>0?bi(t,e):e;rn(t.eventQueue_,I,g),Nf(t,r,c,p)}),ht(n,c=>{const p=vm(t,Ve(e,c));bi(t,p)}),rn(t.eventQueue_,e,[])}}function mb(t){qa(t,"onDisconnectEvents");const e=Hc(t),n=Hu();wf(t.onDisconnect_,ge(),(s,i)=>{const o=_E(s,i,t.serverSyncTree_,e);Xx(n,s,o)});let r=[];wf(n,ge(),(s,i)=>{r=r.concat(Wa(t.serverSyncTree_,s,i));const o=vm(t,s);bi(t,o)}),t.onDisconnect_=Hu(),rn(t.eventQueue_,ge(),r)}function gb(t,e,n){let r;ae(e._path)===".info"?r=Sf(t.infoSyncTree_,e,n):r=Sf(t.serverSyncTree_,e,n),SE(t.eventQueue_,e._path,r)}function _b(t,e,n){let r;ae(e._path)===".info"?r=Ju(t.infoSyncTree_,e,n):r=Ju(t.serverSyncTree_,e,n),SE(t.eventQueue_,e._path,r)}function yb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ab)}function qa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),at(n,...e)}function Nf(t,e,n,r){e&&Hi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function AE(t,e,n){return om(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function ym(t,e=t.transactionQueueTree_){if(e||Wc(t,e),Gi(e)){const n=bE(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&vb(t,Ga(e),n)}else wE(e)&&Bc(e,n=>{ym(t,n)})}function vb(t,e,n){const r=n.map(c=>c.currentWriteId),s=AE(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const p=n[c];B(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const m=kt(e,p.path);i=i.updateChild(m,p.currentOutputSnapshotRaw)}const l=i.val(!0),u=e;t.server_.put(u.toString(),l,c=>{qa(t,"transaction put response",{path:u.toString(),status:c});let p=[];if(c==="ok"){const m=[];for(let g=0;g<n.length;g++)n[g].status=2,p=p.concat(kr(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&m.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Wc(t,pm(t.transactionQueueTree_,e)),ym(t,t.transactionQueueTree_),rn(t.eventQueue_,e,p);for(let g=0;g<m.length;g++)Hi(m[g])}else{if(c==="datastale")for(let m=0;m<n.length;m++)n[m].status===3?n[m].status=4:n[m].status=0;else{At("transaction at "+u.toString()+" failed: "+c);for(let m=0;m<n.length;m++)n[m].status=4,n[m].abortReason=c}bi(t,e)}},o)}function bi(t,e){const n=RE(t,e),r=Ga(n),s=bE(t,n);return wb(t,s,r),r}function wb(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=kt(n,u.path);let p=!1,m;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)p=!0,m=u.abortReason,s=s.concat(kr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=lb)p=!0,m="maxretry",s=s.concat(kr(t.serverSyncTree_,u.currentWriteId,!0));else{const g=AE(t,u.path,o);u.currentInputSnapshot=g;const I=e[l].update(g.val());if(I!==void 0){zc("transaction failed: Data returned ",I,u.path);let S=Ke(I);typeof I=="object"&&I!=null&&On(I,".priority")||(S=S.updatePriority(g.getPriority()));const O=u.currentWriteId,E=Hc(t),x=yE(S,g,E);u.currentOutputSnapshotRaw=S,u.currentOutputSnapshotResolved=x,u.currentWriteId=_m(t),o.splice(o.indexOf(O),1),s=s.concat(dE(t.serverSyncTree_,u.path,x,u.currentWriteId,u.applyLocally)),s=s.concat(kr(t.serverSyncTree_,O,!0))}else p=!0,m="nodata",s=s.concat(kr(t.serverSyncTree_,u.currentWriteId,!0))}rn(t.eventQueue_,n,s),s=[],p&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(m==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(m),!1,null))))}Wc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Hi(r[l]);ym(t,t.transactionQueueTree_)}function RE(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&Gi(r)===void 0;)r=pm(r,n),e=Ie(e),n=ae(e);return r}function bE(t,e){const n=[];return PE(t,e,n),n.sort((r,s)=>r.order-s.order),n}function PE(t,e,n){const r=Gi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Bc(e,s=>{PE(t,s,n)})}function Wc(t,e){const n=Gi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,vE(e,n.length>0?n:void 0)}Bc(e,r=>{Wc(t,r)})}function vm(t,e){const n=Ga(RE(t,e)),r=pm(t.transactionQueueTree_,e);return QR(r,s=>{cd(t,s)}),cd(t,r),xE(r,s=>{cd(t,s)}),n}function cd(t,e){const n=Gi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(kr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?vE(e,void 0):n.length=i+1,rn(t.eventQueue_,Ga(e),s);for(let o=0;o<r.length;o++)Hi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Eb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):At(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hy=function(t,e){const n=Tb(t),r=n.namespace;n.domain==="firebase.com"&&ir(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ir("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ox(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ve(n.pathString)}},Tb=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let p=t.indexOf("/");p===-1&&(p=t.length);let m=t.indexOf("?");m===-1&&(m=t.length),e=t.substring(0,Math.min(p,m)),p<m&&(s=xb(t.substring(p,m)));const g=Eb(t.substring(Math.min(t.length,m)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const I=e.slice(0,c);if(I.toLowerCase()==="localhost")n="localhost";else if(I.split(".").length<=2)n=I;else{const S=e.indexOf(".");r=e.substring(0,S).toLowerCase(),n=e.substring(S+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ib=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Wy.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Wy.charAt(e[s]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class OE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ue(this._path)?null:qp(this._path)}get ref(){return new Ln(this._repo,this._path)}get _queryIdentifier(){const e=Ry(this._queryParams),n=$p(e);return n==="{}"?"default":n}get _queryObject(){return Ry(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof Gc))return!1;const n=this._repo===e._repo,r=Kp(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+pA(this._path)}}class Ln extends Gc{constructor(e,n){super(e,n,new Jp,!1)}get parent(){const e=$x(this._path);return e===null?null:new Ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Di(this.ref,e);return new Pi(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Pi(s,Di(this.ref,r),Fe)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fr(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?Di(t._root,e):t._root}function Di(t,e){return t=Ge(t),ae(t._path)===null?rb("child","path",e):IE("child","path",e),new Ln(t._repo,Ve(t._path,e))}function Cb(t,e){t=Ge(t),CE("push",t._path),TE("push",e,t._path,!0);const n=NE(t._repo),r=Ib(n),s=Di(t,r),i=Di(t,r);let o;return e!=null?o=su(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function su(t,e){t=Ge(t),CE("set",t._path),TE("set",e,t._path,!1);const n=new Va;return fb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Sb(t,e){nb("update",e,t._path);const n=new Va;return pb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function kb(t){t=Ge(t);const e=new LE(()=>{}),n=new qc(e);return db(t._repo,t,n).then(r=>new Pi(r,new Ln(t._repo,t._path),t._queryParams.getIndex()))}class qc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new DE("value",this,new Pi(e.snapshotNode,new Ln(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new OE(this,e,n):null}matches(e){return e instanceof qc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class wm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new OE(this,e,n):null}createEvent(e,n){B(e.childName!=null,"Child events should have a childName.");const r=Di(new Ln(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new DE(e.type,this,new Pi(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof wm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ME(t,e,n,r,s){const i=new LE(n,void 0),o=e==="value"?new qc(i):new wm(e,i);return gb(t._repo,t,o),()=>_b(t._repo,t,o)}function Nb(t,e,n,r){return ME(t,"value",e)}function Ab(t,e,n,r){return ME(t,"child_added",e)}class Rb{}class bb extends Rb{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Gc(e._repo,e._path,FA(e._queryParams,this._limit),e._orderByCalled)}}function Pb(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new bb(t)}function Db(t,...e){let n=Ge(t);for(const r of e)n=r._apply(n);return n}kR(Ln);PR(Ln);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="FIREBASE_DATABASE_EMULATOR_HOST",Af={};let Lb=!1;function Mb(t,e,n,r){t.repoInfo_=new Ox(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function jb(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ir("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hy(i,s),l=o.repoInfo,u;typeof process<"u"&&dy&&(u=dy[Ob]),u?(i=`http://${u}?ns=${l.namespace}`,o=Hy(i,s),l=o.repoInfo):o.repoInfo.secure;const c=new zN(t.name,t.options,e);sb("Invalid Firebase Database URL",o),ue(o.path)||ir("Database URL must point to the root of a Firebase Database (not including a child path).");const p=Fb(l,t,c,new BN(t.name,n));return new Ub(p,t)}function Vb(t,e){const n=Af[e];(!n||n[t.key]!==t)&&ir(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yb(t),delete n[t.key]}function Fb(t,e,n,r){let s=Af[e.name];s||(s={},Af[e.name]=s);let i=s[t.toURLString()];return i&&ir("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ub(t,Lb,n,r),s[t.toURLString()]=i,i}class Ub{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ln(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ir("Cannot call "+e+" on a deleted database.")}}function Bb(t=Ba(),e){const n=Ua(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Vp("database");r&&zb(n,...r)}return n}function zb(t,e,n,r={}){t=Ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ir("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&ir('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new nu(nu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Fp(r.mockUserToken,t.app.options.projectId);i=new nu(o)}Mb(s,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){CN(es),$r(new rr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return jb(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),en(fy,py,t),en(fy,py,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={".sv":"timestamp"};function Wb(){return Hb}Yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$b();function xm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function jE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gb=jE,VE=new Fa("auth","Firebase",jE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Lc("@firebase/auth");function qb(t,...e){Zu.logLevel<=ce.WARN&&Zu.warn(`Auth (${es}): ${t}`,...e)}function iu(t,...e){Zu.logLevel<=ce.ERROR&&Zu.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,...e){throw Em(t,...e)}function Nn(t,...e){return Em(t,...e)}function FE(t,e,n){const r=Object.assign(Object.assign({},Gb()),{[e]:n});return new Fa("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return FE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VE.create(t,...e)}function ne(t,e,...n){if(!t)throw Em(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw iu(e),new Error(e)}function ar(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kb(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kb()||Z1()||"connection"in navigator)?navigator.onLine:!0}function Yb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=Up()||fx()}get(){return Qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Ka(3e4,6e4);function Kc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qi(t,e,n,r,s={}){return BE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=$i(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return J1()||(c.referrerPolicy="no-referrer"),UE.fetch()($E(t,t.config.apiHost,n,l),c)})}async function BE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xb),e);try{const s=new Zb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ml(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw FE(t,p,c);or(t,p)}}catch(s){if(s instanceof Dn)throw s;or(t,"network-request-failed",{message:String(s)})}}async function zE(t,e,n,r,s={}){const i=await qi(t,e,n,r,s);return"mfaPendingCredential"in i&&or(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $E(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Tm(t.config,s):`${t.config.apiScheme}://${s}`}class Zb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),Jb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){return qi(t,"POST","/v1/accounts:delete",e)}async function HE(t,e){return qi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tP(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=Im(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Go(hd(s.auth_time)),issuedAtTime:Go(hd(s.iat)),expirationTime:Go(hd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hd(t){return Number(t)*1e3}function Im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return iu("JWT malformed, contained fewer than 3 sections"),null;try{const s=ju(n);return s?JSON.parse(s):(iu("Failed to decode base64 JWT payload"),null)}catch(s){return iu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qy(t){const e=Im(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&nP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ia(t,HE(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?WE(i.providerUserInfo):[],l=iP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new bf(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function sP(t){const e=Ge(t);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function WE(t){return t.map(e=>{var{providerId:n}=e,r=xm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,e){const n=await BE(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$E(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",UE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aP(t,e){return qi(t,"POST","/v2/accounts:revokeToken",Kc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mi;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ia(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tP(this,e)}reload(){return sP(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await Ia(this,eP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:k,emailVerified:P,isAnonymous:M,providerData:D,stsTokenManager:w}=n;ne(k&&w,e,"internal-error");const y=mi.fromJSON(this.name,w);ne(typeof k=="string",e,"internal-error"),pr(m,e.name),pr(g,e.name),ne(typeof P=="boolean",e,"internal-error"),ne(typeof M=="boolean",e,"internal-error"),pr(I,e.name),pr(S,e.name),pr(A,e.name),pr(O,e.name),pr(E,e.name),pr(x,e.name);const T=new qn({uid:k,auth:e,email:g,emailVerified:P,displayName:m,isAnonymous:M,photoURL:S,phoneNumber:I,tenantId:A,stsTokenManager:y,createdAt:E,lastLoginAt:x});return D&&Array.isArray(D)&&(T.providerData=D.map(C=>Object.assign({},C))),O&&(T._redirectEventId=O),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new mi;s.updateFromServerResponse(n);const i=new qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ec(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?WE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new mi;l.updateFromIdToken(r);const u=new qn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new Map;function Kn(t){ar(t instanceof Function,"Expected a class definition");let e=Ky.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ky.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GE.type="NONE";const Qy=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ou(this.userKey,s.apiKey,i),this.fullPersistenceKey=ou("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(Kn(Qy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Kn(Qy);const o=ou(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){const m=qn._fromJSON(e,p);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new gi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new gi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JE(e))return"Blackberry";if(ZE(e))return"Webos";if(KE(e))return"Safari";if((e.includes("chrome/")||QE(e))&&!e.includes("edge/"))return"Chrome";if(XE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qE(t=Tt()){return/firefox\//i.test(t)}function KE(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QE(t=Tt()){return/crios\//i.test(t)}function YE(t=Tt()){return/iemobile/i.test(t)}function XE(t=Tt()){return/android/i.test(t)}function JE(t=Tt()){return/blackberry/i.test(t)}function ZE(t=Tt()){return/webos/i.test(t)}function Cm(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lP(t=Tt()){var e;return Cm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uP(){return ek()&&document.documentMode===10}function eT(t=Tt()){return Cm(t)||XE(t)||ZE(t)||JE(t)||/windows phone/i.test(t)||YE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e=[]){let n;switch(t){case"Browser":n=Yy(Tt());break;case"Worker":n=`${Yy(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e={}){return qi(t,"GET","/v2/passwordPolicy",Kc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=6;class fP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new cP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await HE(this,{idToken:e}),r=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hn(this.app))return Promise.reject(Ur(this));const n=e?Ge(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hn(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hP(this),n=new fP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qc(t){return Ge(t)}class Xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=hk(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mP(t){Sm=t}function gP(t){return Sm.loadJS(t)}function _P(){return Sm.gapiScript}function yP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e){const n=Ua(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fu(i,e??{}))return s;or(s,"already-initialized")}return n.initialize({options:e})}function wP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xP(t,e,n){const r=Qc(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=nT(e),{host:o,port:l}=EP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),TP()}function nT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EP(t){const e=nT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jy(o)}}}function Jy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return zE(t,"POST","/v1/accounts:signInWithIdp",Kc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="http://localhost";class Ns extends rT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:IP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends sT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Qa{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Qa{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Qa{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){return zE(t,"POST","/v1/accounts:signUp",Kc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qn._fromIdTokenResponse(e,r,s),o=Zy(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zy(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t){var e;if(Hn(t.app))return Promise.reject(Ur(t));const n=Qc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new qr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await CP(n,{returnSecureToken:!0}),s=await qr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends Dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new tc(e,n,r,s)}}function iT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(t,i,e,r):i})}async function kP(t,e,n=!1){const r=await Ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e,n=!1){const{auth:r}=t;if(Hn(r.app))return Promise.reject(Ur(r));const s="reauthenticate";try{const i=await Ia(t,iT(r,s,e,t),n);ne(i.idToken,r,"internal-error");const o=Im(i.idToken);ne(o,r,"internal-error");const{sub:l}=o;return ne(t.uid===l,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&or(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e,n=!1){if(Hn(t.app))return Promise.reject(Ur(t));const r="signIn",s=await iT(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function RP(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function bP(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function PP(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}const nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=1e3,OP=10;class aT extends oT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aT.type="LOCAL";const LP=aT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT extends oT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lT.type="SESSION";const uT=lT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await MP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=km("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function VP(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function FP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BP(){return cT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebaseLocalStorageDb",zP=1,rc="firebaseLocalStorage",dT="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xc(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function $P(){const t=indexedDB.deleteDatabase(hT);return new Ya(t).toPromise()}function Pf(){const t=indexedDB.open(hT,zP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rc,{keyPath:dT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rc)?e(r):(r.close(),await $P(),e(await Pf()))})})}async function ev(t,e,n){const r=Xc(t,!0).put({[dT]:e,value:n});return new Ya(r).toPromise()}async function HP(t,e){const n=Xc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function tv(t,e){const n=Xc(t,!0).delete(e);return new Ya(n).toPromise()}const WP=800,GP=3;class fT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(BP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FP(),!this.activeServiceWorker)return;this.sender=new jP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pf();return await ev(e,nc,"1"),await tv(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ev(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xc(s,!1).getAll();return new Ya(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fT.type="LOCAL";const qP=fT;new Ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t,e){return e?Kn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends rT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QP(t){return AP(t.auth,new Nm(t),t.bypassAuthState)}function YP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),NP(n,new Nm(t),t.bypassAuthState)}async function XP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),kP(n,new Nm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QP;case"linkViaPopup":case"linkViaRedirect":return XP;case"reauthViaPopup":case"reauthViaRedirect":return YP;default:or(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new Ka(2e3,1e4);class oi extends pT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=km();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JP.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP="pendingRedirect",au=new Map;class e2 extends pT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=au.get(this.auth._key());if(!e){try{const r=await t2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}au.set(this.auth._key(),e)}return this.bypassAuthState||au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t2(t,e){const n=s2(e),r=r2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function n2(t,e){au.set(t._key(),e)}function r2(t){return Kn(t._redirectPersistence)}function s2(t){return ou(ZP,t.config.apiKey,t.name)}async function i2(t,e,n=!1){if(Hn(t.app))return Promise.reject(Ur(t));const r=Qc(t),s=KP(r,e),o=await new e2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=10*60*1e3;class a2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o2&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e={}){return qi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h2=/^https?/;async function d2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u2(t);for(const n of e)try{if(f2(n))return}catch{}or(t,"unauthorized-domain")}function f2(t){const e=Rf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h2.test(n))return!1;if(c2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new Ka(3e4,6e4);function rv(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function m2(t){return new Promise((e,n)=>{var r,s,i;function o(){rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rv(),n(Nn(t,"network-request-failed"))},timeout:p2.get()})}if(!((s=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=An().gapi)===null||i===void 0)&&i.load)o();else{const l=yP("iframefcb");return An()[l]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},gP(`${_P()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw lu=null,e})}let lu=null;function g2(t){return lu=lu||m2(t),lu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=new Ka(5e3,15e3),y2="__/auth/iframe",v2="emulator/auth/iframe",w2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E2(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tm(e,v2):`https://${t.config.authDomain}/${y2}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=x2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$i(r).slice(1)}`}async function T2(t){const e=await g2(t),n=An().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:E2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),l=An().setTimeout(()=>{i(o)},_2.get());function u(){An().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C2=500,S2=600,k2="_blank",N2="http://localhost";class sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A2(t,e,n,r=C2,s=S2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},I2),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Tt().toLowerCase();n&&(l=QE(c)?k2:n),qE(c)&&(e=e||N2,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[I,S])=>`${g}${I}=${S},`,"");if(lP(c)&&l!=="_self")return R2(e||"",l),new sv(null);const m=window.open(e||"",l,p);ne(m,t,"popup-blocked");try{m.focus()}catch{}return new sv(m)}function R2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="__/auth/handler",P2="emulator/auth/handler",D2=encodeURIComponent("fac");async function iv(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof sT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Qa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${D2}=${encodeURIComponent(u)}`:"";return`${O2(t)}?${$i(l).slice(1)}${c}`}function O2({config:t}){return t.emulator?Tm(t,P2):`https://${t.authDomain}/${b2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="webStorageSupport";class L2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uT,this._completeRedirectFn=i2,this._overrideRedirectResult=n2}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await iv(e,n,r,Rf(),s);return A2(e,o,km())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await iv(e,n,r,Rf(),s);return VP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await T2(e),r=new a2(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dd,{type:dd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dd];o!==void 0&&n(!!o),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=d2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eT()||KE()||Cm()}}const M2=L2;var ov="@firebase/auth",av="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F2(t){$r(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tT(t)},c=new pP(r,s,i,u);return wP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new rr("auth-internal",e=>{const n=Qc(e.getProvider("auth").getImmediate());return(r=>new j2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(ov,av,V2(t)),en(ov,av,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=5*60,B2=dx("authIdTokenMaxAge")||U2;let lv=null;const z2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B2)return;const s=n==null?void 0:n.token;lv!==s&&(lv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $2(t=Ba()){const e=Ua(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vP(t,{popupRedirectResolver:M2,persistence:[qP,LP,uT]}),r=dx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=z2(i.toString());bP(n,o,()=>o(n.currentUser)),RP(n,l=>o(l))}}const s=cx("auth");return s&&xP(n,`http://${s}`),n}function H2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",H2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});F2("Browser");var uv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function T(){}T.prototype=y.prototype,w.D=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(C,N,R){for(var _=Array(arguments.length-2),X=2;X<arguments.length;X++)_[X-2]=arguments[X];return y.prototype[N].apply(C,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,T){T||(T=0);var C=Array(16);if(typeof y=="string")for(var N=0;16>N;++N)C[N]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(N=0;16>N;++N)C[N]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],N=w.g[2];var R=w.g[3],_=y+(R^T&(N^R))+C[0]+3614090360&4294967295;y=T+(_<<7&4294967295|_>>>25),_=R+(N^y&(T^N))+C[1]+3905402710&4294967295,R=y+(_<<12&4294967295|_>>>20),_=N+(T^R&(y^T))+C[2]+606105819&4294967295,N=R+(_<<17&4294967295|_>>>15),_=T+(y^N&(R^y))+C[3]+3250441966&4294967295,T=N+(_<<22&4294967295|_>>>10),_=y+(R^T&(N^R))+C[4]+4118548399&4294967295,y=T+(_<<7&4294967295|_>>>25),_=R+(N^y&(T^N))+C[5]+1200080426&4294967295,R=y+(_<<12&4294967295|_>>>20),_=N+(T^R&(y^T))+C[6]+2821735955&4294967295,N=R+(_<<17&4294967295|_>>>15),_=T+(y^N&(R^y))+C[7]+4249261313&4294967295,T=N+(_<<22&4294967295|_>>>10),_=y+(R^T&(N^R))+C[8]+1770035416&4294967295,y=T+(_<<7&4294967295|_>>>25),_=R+(N^y&(T^N))+C[9]+2336552879&4294967295,R=y+(_<<12&4294967295|_>>>20),_=N+(T^R&(y^T))+C[10]+4294925233&4294967295,N=R+(_<<17&4294967295|_>>>15),_=T+(y^N&(R^y))+C[11]+2304563134&4294967295,T=N+(_<<22&4294967295|_>>>10),_=y+(R^T&(N^R))+C[12]+1804603682&4294967295,y=T+(_<<7&4294967295|_>>>25),_=R+(N^y&(T^N))+C[13]+4254626195&4294967295,R=y+(_<<12&4294967295|_>>>20),_=N+(T^R&(y^T))+C[14]+2792965006&4294967295,N=R+(_<<17&4294967295|_>>>15),_=T+(y^N&(R^y))+C[15]+1236535329&4294967295,T=N+(_<<22&4294967295|_>>>10),_=y+(N^R&(T^N))+C[1]+4129170786&4294967295,y=T+(_<<5&4294967295|_>>>27),_=R+(T^N&(y^T))+C[6]+3225465664&4294967295,R=y+(_<<9&4294967295|_>>>23),_=N+(y^T&(R^y))+C[11]+643717713&4294967295,N=R+(_<<14&4294967295|_>>>18),_=T+(R^y&(N^R))+C[0]+3921069994&4294967295,T=N+(_<<20&4294967295|_>>>12),_=y+(N^R&(T^N))+C[5]+3593408605&4294967295,y=T+(_<<5&4294967295|_>>>27),_=R+(T^N&(y^T))+C[10]+38016083&4294967295,R=y+(_<<9&4294967295|_>>>23),_=N+(y^T&(R^y))+C[15]+3634488961&4294967295,N=R+(_<<14&4294967295|_>>>18),_=T+(R^y&(N^R))+C[4]+3889429448&4294967295,T=N+(_<<20&4294967295|_>>>12),_=y+(N^R&(T^N))+C[9]+568446438&4294967295,y=T+(_<<5&4294967295|_>>>27),_=R+(T^N&(y^T))+C[14]+3275163606&4294967295,R=y+(_<<9&4294967295|_>>>23),_=N+(y^T&(R^y))+C[3]+4107603335&4294967295,N=R+(_<<14&4294967295|_>>>18),_=T+(R^y&(N^R))+C[8]+1163531501&4294967295,T=N+(_<<20&4294967295|_>>>12),_=y+(N^R&(T^N))+C[13]+2850285829&4294967295,y=T+(_<<5&4294967295|_>>>27),_=R+(T^N&(y^T))+C[2]+4243563512&4294967295,R=y+(_<<9&4294967295|_>>>23),_=N+(y^T&(R^y))+C[7]+1735328473&4294967295,N=R+(_<<14&4294967295|_>>>18),_=T+(R^y&(N^R))+C[12]+2368359562&4294967295,T=N+(_<<20&4294967295|_>>>12),_=y+(T^N^R)+C[5]+4294588738&4294967295,y=T+(_<<4&4294967295|_>>>28),_=R+(y^T^N)+C[8]+2272392833&4294967295,R=y+(_<<11&4294967295|_>>>21),_=N+(R^y^T)+C[11]+1839030562&4294967295,N=R+(_<<16&4294967295|_>>>16),_=T+(N^R^y)+C[14]+4259657740&4294967295,T=N+(_<<23&4294967295|_>>>9),_=y+(T^N^R)+C[1]+2763975236&4294967295,y=T+(_<<4&4294967295|_>>>28),_=R+(y^T^N)+C[4]+1272893353&4294967295,R=y+(_<<11&4294967295|_>>>21),_=N+(R^y^T)+C[7]+4139469664&4294967295,N=R+(_<<16&4294967295|_>>>16),_=T+(N^R^y)+C[10]+3200236656&4294967295,T=N+(_<<23&4294967295|_>>>9),_=y+(T^N^R)+C[13]+681279174&4294967295,y=T+(_<<4&4294967295|_>>>28),_=R+(y^T^N)+C[0]+3936430074&4294967295,R=y+(_<<11&4294967295|_>>>21),_=N+(R^y^T)+C[3]+3572445317&4294967295,N=R+(_<<16&4294967295|_>>>16),_=T+(N^R^y)+C[6]+76029189&4294967295,T=N+(_<<23&4294967295|_>>>9),_=y+(T^N^R)+C[9]+3654602809&4294967295,y=T+(_<<4&4294967295|_>>>28),_=R+(y^T^N)+C[12]+3873151461&4294967295,R=y+(_<<11&4294967295|_>>>21),_=N+(R^y^T)+C[15]+530742520&4294967295,N=R+(_<<16&4294967295|_>>>16),_=T+(N^R^y)+C[2]+3299628645&4294967295,T=N+(_<<23&4294967295|_>>>9),_=y+(N^(T|~R))+C[0]+4096336452&4294967295,y=T+(_<<6&4294967295|_>>>26),_=R+(T^(y|~N))+C[7]+1126891415&4294967295,R=y+(_<<10&4294967295|_>>>22),_=N+(y^(R|~T))+C[14]+2878612391&4294967295,N=R+(_<<15&4294967295|_>>>17),_=T+(R^(N|~y))+C[5]+4237533241&4294967295,T=N+(_<<21&4294967295|_>>>11),_=y+(N^(T|~R))+C[12]+1700485571&4294967295,y=T+(_<<6&4294967295|_>>>26),_=R+(T^(y|~N))+C[3]+2399980690&4294967295,R=y+(_<<10&4294967295|_>>>22),_=N+(y^(R|~T))+C[10]+4293915773&4294967295,N=R+(_<<15&4294967295|_>>>17),_=T+(R^(N|~y))+C[1]+2240044497&4294967295,T=N+(_<<21&4294967295|_>>>11),_=y+(N^(T|~R))+C[8]+1873313359&4294967295,y=T+(_<<6&4294967295|_>>>26),_=R+(T^(y|~N))+C[15]+4264355552&4294967295,R=y+(_<<10&4294967295|_>>>22),_=N+(y^(R|~T))+C[6]+2734768916&4294967295,N=R+(_<<15&4294967295|_>>>17),_=T+(R^(N|~y))+C[13]+1309151649&4294967295,T=N+(_<<21&4294967295|_>>>11),_=y+(N^(T|~R))+C[4]+4149444226&4294967295,y=T+(_<<6&4294967295|_>>>26),_=R+(T^(y|~N))+C[11]+3174756917&4294967295,R=y+(_<<10&4294967295|_>>>22),_=N+(y^(R|~T))+C[2]+718787259&4294967295,N=R+(_<<15&4294967295|_>>>17),_=T+(R^(N|~y))+C[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(N+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+N&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var T=y-this.blockSize,C=this.B,N=this.h,R=0;R<y;){if(N==0)for(;R<=T;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(C[N++]=w.charCodeAt(R++),N==this.blockSize){s(this,C),N=0;break}}else for(;R<y;)if(C[N++]=w[R++],N==this.blockSize){s(this,C),N=0;break}}this.h=N,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var T=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=T&255,T/=256;for(this.u(w),w=Array(16),y=T=0;4>y;++y)for(var C=0;32>C;C+=8)w[T++]=this.g[y]>>>C&255;return w};function i(w,y){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function o(w,y){this.h=y;for(var T=[],C=!0,N=w.length-1;0<=N;N--){var R=w[N]|0;C&&R==y||(T[N]=R,C=!1)}this.g=T}var l={};function u(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return O(c(-w));for(var y=[],T=1,C=0;w>=T;C++)y[C]=w/T|0,T*=4294967296;return new o(y,0)}function p(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(p(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),C=m,N=0;N<w.length;N+=8){var R=Math.min(8,w.length-N),_=parseInt(w.substring(N,N+R),y);8>R?(R=c(Math.pow(y,R)),C=C.j(R).add(c(_))):(C=C.j(T),C=C.add(c(_)))}return C}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-O(this).m();for(var w=0,y=1,T=0;T<this.g.length;T++){var C=this.i(T);w+=(0<=C?C:4294967296+C)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(A(this))return"-"+O(this).toString(w);for(var y=c(Math.pow(w,6)),T=this,C="";;){var N=P(T,y).g;T=E(T,N.j(y));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=N,S(T))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=E(this,w),A(w)?-1:S(w)?0:1};function O(w){for(var y=w.g.length,T=[],C=0;C<y;C++)T[C]=~w.g[C];return new o(T,~w.h).add(g)}t.abs=function(){return A(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],C=0,N=0;N<=y;N++){var R=C+(this.i(N)&65535)+(w.i(N)&65535),_=(R>>>16)+(this.i(N)>>>16)+(w.i(N)>>>16);C=_>>>16,R&=65535,_&=65535,T[N]=_<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(O(y))}t.j=function(w){if(S(this)||S(w))return m;if(A(this))return A(w)?O(this).j(O(w)):O(O(this).j(w));if(A(w))return O(this.j(O(w)));if(0>this.l(I)&&0>w.l(I))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,T=[],C=0;C<2*y;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var N=0;N<w.g.length;N++){var R=this.i(C)>>>16,_=this.i(C)&65535,X=w.i(N)>>>16,se=w.i(N)&65535;T[2*C+2*N]+=_*se,x(T,2*C+2*N),T[2*C+2*N+1]+=R*se,x(T,2*C+2*N+1),T[2*C+2*N+1]+=_*X,x(T,2*C+2*N+1),T[2*C+2*N+2]+=R*X,x(T,2*C+2*N+2)}for(C=0;C<y;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=y;C<2*y;C++)T[C]=0;return new o(T,0)};function x(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function k(w,y){this.g=w,this.h=y}function P(w,y){if(S(y))throw Error("division by zero");if(S(w))return new k(m,m);if(A(w))return y=P(O(w),y),new k(O(y.g),O(y.h));if(A(y))return y=P(w,O(y)),new k(O(y.g),y.h);if(30<w.g.length){if(A(w)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,C=y;0>=C.l(w);)T=M(T),C=M(C);var N=D(T,1),R=D(C,1);for(C=D(C,2),T=D(T,2);!S(C);){var _=R.add(C);0>=_.l(w)&&(N=N.add(T),R=_),C=D(C,1),T=D(T,1)}return y=E(w,N.j(y)),new k(N,y)}for(N=m;0<=w.l(y);){for(T=Math.max(1,Math.floor(w.m()/y.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=c(T),_=R.j(y);A(_)||0<_.l(w);)T-=C,R=c(T),_=R.j(y);S(R)&&(R=g),N=N.add(R),w=E(w,_)}return new k(N,w)}t.A=function(w){return P(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)&w.i(C);return new o(T,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)|w.i(C);return new o(T,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)^w.i(C);return new o(T,this.h^w.h)};function M(w){for(var y=w.g.length+1,T=[],C=0;C<y;C++)T[C]=w.i(C)<<1|w.i(C-1)>>>31;return new o(T,w.h)}function D(w,y){var T=y>>5;y%=32;for(var C=w.g.length-T,N=[],R=0;R<C;R++)N[R]=0<y?w.i(R+T)>>>y|w.i(R+T+1)<<32-y:w.i(R+T);return new o(N,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,gT=o}).apply(typeof uv<"u"?uv:typeof self<"u"?self:typeof window<"u"?window:{});var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _T,bo,yT,uu,Df,vT,wT,xT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jl=="object"&&jl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var b=a[v];if(!(b in f))break e;f=f[b]}a=a[a.length-1],v=f[a],h=h(v),h!=v&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,v=!1,b={next:function(){if(!v&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,f){return a.call.apply(a.bind,arguments)}function m(a,h,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,v),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,b,L){for(var $=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)$[xe-2]=arguments[xe];return h.prototype[b].apply(v,$)}}function A(a){const h=a.length;if(0<h){const f=Array(h);for(let v=0;v<h;v++)f[v]=a[v];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const b=a.length||0,L=v.length||0;a.length=b+L;for(let $=0;$<L;$++)a[b+$]=v[$]}else a.push(v)}}class E{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var M=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function D(a,h,f){for(const v in a)h.call(f,a[v],v,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let f,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(f in v)a[f]=v[f];for(let L=0;L<T.length;L++)f=T[L],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function N(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function _(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class X{constructor(){this.h=this.g=null}add(h,f){const v=se.get();v.set(h,f),this.h?this.h.next=v:this.g=v,this.h=v}}var se=new E(()=>new _e,a=>a.reset());class _e{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,z=!1,Q=new X,j=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(G)}};var G=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){R(f)}var h=se;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Pt(a,h){if(Z.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{P(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:sn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pt.aa.h.call(this)}}S(Pt,Z);var sn={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),ah=0;function lh(a,h,f,v,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!v,this.ha=b,this.key=++ah,this.da=this.fa=!1}function js(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vs(a){this.src=a,this.g={},this.h=0}Vs.prototype.add=function(a,h,f,v,b){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var $=Yi(a,h,v,b);return-1<$?(h=a[$],f||(h.fa=!1)):(h=new lh(h,this.src,L,!!v,b),h.fa=f,a.push(h)),h};function Ft(a,h){var f=h.type;if(f in a.g){var v=a.g[f],b=Array.prototype.indexOf.call(v,h,void 0),L;(L=0<=b)&&Array.prototype.splice.call(v,b,1),L&&(js(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Yi(a,h,f,v){for(var b=0;b<a.length;++b){var L=a[b];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==v)return b}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),K={};function H(a,h,f,v,b){if(Array.isArray(h)){for(var L=0;L<h.length;L++)H(a,h[L],f,v,b);return null}return f=Qm(f),a&&a[on]?a.K(h,f,c(v)?!!v.capture:!1,b):te(a,h,f,!1,v,b)}function te(a,h,f,v,b,L){if(!h)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,xe=uh(a);if(xe||(a[ts]=xe=new Vs(a)),f=xe.add(h,f,v,$,L),f.proxy)return f;if(v=oe(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)ze||(b=$),b===void 0&&(b=!1),a.addEventListener(h.toString(),v,b);else if(a.attachEvent)a.attachEvent(Fs(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function oe(){function a(f){return h.call(a.src,a.listener,f)}const h=vI;return a}function Le(a,h,f,v,b){if(Array.isArray(h))for(var L=0;L<h.length;L++)Le(a,h[L],f,v,b);else v=c(v)?!!v.capture:!!v,f=Qm(f),a&&a[on]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=Yi(L,f,v,b),-1<f&&(js(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=uh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Yi(h,f,v,b)),(f=-1<a?h[a]:null)&&jn(f))}function jn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[on])Ft(h.i,a);else{var f=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(f,v,a.capture):h.detachEvent?h.detachEvent(Fs(f),v):h.addListener&&h.removeListener&&h.removeListener(v),(f=uh(h))?(Ft(f,a),f.h==0&&(f.src=null,h[ts]=null)):js(a)}}}function Fs(a){return a in K?K[a]:K[a]="on"+a}function vI(a,h){if(a.da)a=!0;else{h=new Pt(h,this);var f=a.listener,v=a.ha||a.src;a.fa&&jn(a),a=f.call(v,h)}return a}function uh(a){return a=a[ts],a instanceof Vs?a:null}var ch="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qm(a){return typeof a=="function"?a:(a[ch]||(a[ch]=function(h){return a.handleEvent(h)}),a[ch])}function dt(){J.call(this),this.i=new Vs(this),this.M=this,this.F=null}S(dt,J),dt.prototype[on]=!0,dt.prototype.removeEventListener=function(a,h,f,v){Le(this,a,h,f,v)};function It(a,h){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new Z(h,a);else if(h instanceof Z)h.target=h.target||a;else{var b=h;h=new Z(v,a),C(h,b)}if(b=!0,f)for(var L=f.length-1;0<=L;L--){var $=h.g=f[L];b=tl($,v,!0,h)&&b}if($=h.g=a,b=tl($,v,!0,h)&&b,b=tl($,v,!1,h)&&b,f)for(L=0;L<f.length;L++)$=h.g=f[L],b=tl($,v,!1,h)&&b}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],v=0;v<f.length;v++)js(f[v]);delete a.g[h],a.h--}}this.F=null},dt.prototype.K=function(a,h,f,v){return this.i.add(String(a),h,!1,f,v)},dt.prototype.L=function(a,h,f,v){return this.i.add(String(a),h,!0,f,v)};function tl(a,h,f,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,L=0;L<h.length;++L){var $=h[L];if($&&!$.da&&$.capture==f){var xe=$.listener,rt=$.ha||$.src;$.fa&&Ft(a.i,$),b=xe.call(rt,v)!==!1&&b}}return b&&!v.defaultPrevented}function Ym(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Xm(a){a.g=Ym(()=>{a.g=null,a.i&&(a.i=!1,Xm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class wI extends J{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Xm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(a){J.call(this),this.h=a,this.g={}}S(Xi,J);var Jm=[];function Zm(a){D(a.g,function(h,f){this.g.hasOwnProperty(f)&&jn(h)},a),a.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),Zm(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hh=l.JSON.stringify,xI=l.JSON.parse,EI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function dh(){}dh.prototype.h=null;function eg(a){return a.h||(a.h=a.i())}function tg(){}var Ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fh(){Z.call(this,"d")}S(fh,Z);function ph(){Z.call(this,"c")}S(ph,Z);var ns={},ng=null;function nl(){return ng=ng||new dt}ns.La="serverreachability";function rg(a){Z.call(this,ns.La,a)}S(rg,Z);function Zi(a){const h=nl();It(h,new rg(h))}ns.STAT_EVENT="statevent";function sg(a,h){Z.call(this,ns.STAT_EVENT,a),this.stat=h}S(sg,Z);function Ct(a){const h=nl();It(h,new sg(h,a))}ns.Ma="timingevent";function ig(a,h){Z.call(this,ns.Ma,a),this.size=h}S(ig,Z);function eo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function to(){this.g=!0}to.prototype.xa=function(){this.g=!1};function TI(a,h,f,v,b,L){a.info(function(){if(a.g)if(L)for(var $="",xe=L.split("&"),rt=0;rt<xe.length;rt++){var me=xe[rt].split("=");if(1<me.length){var ft=me[0];me=me[1];var pt=ft.split("_");$=2<=pt.length&&pt[1]=="type"?$+(ft+"="+me+"&"):$+(ft+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+h+`
`+f+`
`+$})}function II(a,h,f,v,b,L,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+h+`
`+f+`
`+L+" "+$})}function Us(a,h,f,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+SI(a,f)+(v?" "+v:"")})}function CI(a,h){a.info(function(){return"TIMEOUT: "+h})}to.prototype.info=function(){};function SI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var b=v[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return hh(f)}catch{return h}}var rl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},og={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mh;function sl(){}S(sl,dh),sl.prototype.g=function(){return new XMLHttpRequest},sl.prototype.i=function(){return{}},mh=new sl;function ur(a,h,f,v){this.j=a,this.i=h,this.l=f,this.R=v||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ag}function ag(){this.i=null,this.g="",this.h=!1}var lg={},gh={};function _h(a,h,f){a.L=1,a.v=ll(Vn(h)),a.m=f,a.P=!0,ug(a,null)}function ug(a,h){a.F=Date.now(),il(a),a.A=Vn(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Tg(f.i,"t",v),a.C=0,f=a.j.J,a.h=new ag,a.g=Bg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new wI(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,v=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Jm[0]=b.toString()),b=Jm);for(var L=0;L<b.length;L++){var $=H(f,b[L],v||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Zi(),TI(a.i,a.u,a.A,a.l,a.R,a.m)}ur.prototype.ca=function(a){a=a.target;const h=this.M;h&&Fn(a)==3?h.j():this.Y(a)},ur.prototype.Y=function(a){try{if(a==this.g)e:{const pt=Fn(this.g);var h=this.g.Ba();const $s=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Rg(this.g)))){this.J||pt!=4||h==7||(h==8||0>=$s?Zi(3):Zi(2)),yh(this);var f=this.g.Z();this.X=f;t:if(cg(this)){var v=Rg(this.g);a="";var b=v.length,L=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),no(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(L&&h==b-1)});v.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,II(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,rt=this.g;if((xe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(xe)){var me=xe;break t}}me=null}if(f=me)Us(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vh(this,f);else{this.o=!1,this.s=3,Ct(12),rs(this),no(this);break e}}if(this.P){f=!0;let an;for(;!this.J&&this.C<$.length;)if(an=kI(this,$),an==gh){pt==4&&(this.s=4,Ct(14),f=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(an==lg){this.s=4,Ct(15),Us(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Us(this.i,this.l,an,null),vh(this,an);if(cg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||$.length!=0||this.h.h||(this.s=1,Ct(16),f=!1),this.o=this.o&&f,!f)Us(this.i,this.l,$,"[Invalid Chunked Response]"),rs(this),no(this);else if(0<$.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Ch(ft),ft.M=!0,Ct(11))}}else Us(this.i,this.l,$,null),vh(this,$);pt==4&&rs(this),this.o&&!this.J&&(pt==4?jg(this.j,this):(this.o=!1,il(this)))}else HI(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),rs(this),no(this)}}}catch{}finally{}};function cg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kI(a,h){var f=a.C,v=h.indexOf(`
`,f);return v==-1?gh:(f=Number(h.substring(f,v)),isNaN(f)?lg:(v+=1,v+f>h.length?gh:(h=h.slice(v,v+f),a.C=v+f,h)))}ur.prototype.cancel=function(){this.J=!0,rs(this)};function il(a){a.S=Date.now()+a.I,hg(a,a.I)}function hg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=eo(g(a.ba,a),h)}function yh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ur.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(CI(this.i,this.A),this.L!=2&&(Zi(),Ct(17)),rs(this),this.s=2,no(this)):hg(this,this.S-a)};function no(a){a.j.G==0||a.J||jg(a.j,a)}function rs(a){yh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Zm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function vh(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||wh(f.h,a))){if(!a.K&&wh(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)pl(f),dl(f);else break e;Ih(f),Ct(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=eo(g(f.Za,f),6e3));if(1>=pg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else is(f,11)}else if((a.K||f.g==a)&&pl(f),!x(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let me=b[h];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const ft=me[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=me[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const $s=me[5];$s!=null&&typeof $s=="number"&&0<$s&&(v=1.5*$s,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const an=a.g;if(an){const gl=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gl){var L=v.h;L.g||gl.indexOf("spdy")==-1&&gl.indexOf("quic")==-1&&gl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(xh(L,L.h),L.h=null))}if(v.D){const Sh=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Sh&&(v.ya=Sh,ke(v.I,v.D,Sh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var $=a;if(v.qa=Ug(v,v.J?v.ia:null,v.W),$.K){mg(v.h,$);var xe=$,rt=v.L;rt&&(xe.I=rt),xe.B&&(yh(xe),il(xe)),v.g=$}else Lg(v);0<f.i.length&&fl(f)}else me[0]!="stop"&&me[0]!="close"||is(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?is(f,7):Th(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}Zi(4)}catch{}}var NI=class{constructor(a,h){this.g=a,this.map=h}};function dg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pg(a){return a.h?1:a.g?a.g.size:0}function wh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function xh(a,h){a.g?a.g.add(h):a.h=h}function mg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}dg.prototype.cancel=function(){if(this.i=gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return A(a.i)}function AI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,v=0;v<f;v++)h.push(a[v]);return h}h=[],f=0;for(v in a)h[f++]=a[v];return h}function RI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const v in a)h[f++]=v;return h}}}function _g(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=RI(a),v=AI(a),b=v.length,L=0;L<b;L++)h.call(void 0,v[L],f&&f[L],a)}var yg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),b=null;if(0<=v){var L=a[f].substring(0,v);b=a[f].substring(v+1)}else L=a[f];h(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ss(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ss){this.h=a.h,ol(this,a.j),this.o=a.o,this.g=a.g,al(this,a.s),this.l=a.l;var h=a.i,f=new io;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),vg(this,f),this.m=a.m}else a&&(h=String(a).match(yg))?(this.h=!1,ol(this,h[1]||"",!0),this.o=ro(h[2]||""),this.g=ro(h[3]||"",!0),al(this,h[4]),this.l=ro(h[5]||"",!0),vg(this,h[6]||"",!0),this.m=ro(h[7]||"")):(this.h=!1,this.i=new io(null,this.h))}ss.prototype.toString=function(){var a=[],h=this.j;h&&a.push(so(h,wg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(so(h,wg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(so(f,f.charAt(0)=="/"?OI:DI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",so(f,MI)),a.join("")};function Vn(a){return new ss(a)}function ol(a,h,f){a.j=f?ro(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function al(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function vg(a,h,f){h instanceof io?(a.i=h,jI(a.i,a.h)):(f||(h=so(h,LI)),a.i=new io(h,a.h))}function ke(a,h,f){a.i.set(h,f)}function ll(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ro(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function so(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,PI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function PI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wg=/[#\/\?@]/g,DI=/[#\?:]/g,OI=/[#\?]/g,LI=/[#\?@]/g,MI=/#/g;function io(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&bI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=io.prototype,t.add=function(a,h){cr(this),this.i=null,a=Bs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function xg(a,h){cr(a),h=Bs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Eg(a,h){return cr(a),h=Bs(a,h),a.g.has(h)}t.forEach=function(a,h){cr(this),this.g.forEach(function(f,v){f.forEach(function(b){a.call(h,b,v,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let v=0;v<h.length;v++){const b=a[v];for(let L=0;L<b.length;L++)f.push(h[v])}return f},t.V=function(a){cr(this);let h=[];if(typeof a=="string")Eg(this,a)&&(h=h.concat(this.g.get(Bs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return cr(this),this.i=null,a=Bs(this,a),Eg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Tg(a,h,f){xg(a,h),0<f.length&&(a.i=null,a.g.set(Bs(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var v=h[f];const L=encodeURIComponent(String(v)),$=this.V(v);for(v=0;v<$.length;v++){var b=L;$[v]!==""&&(b+="="+encodeURIComponent(String($[v]))),a.push(b)}}return this.i=a.join("&")};function Bs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function jI(a,h){h&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(f,v){var b=v.toLowerCase();v!=b&&(xg(this,v),Tg(this,b,f))},a)),a.j=h}function VI(a,h){const f=new to;if(l.Image){const v=new Image;v.onload=I(hr,f,"TestLoadImage: loaded",!0,h,v),v.onerror=I(hr,f,"TestLoadImage: error",!1,h,v),v.onabort=I(hr,f,"TestLoadImage: abort",!1,h,v),v.ontimeout=I(hr,f,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function FI(a,h){const f=new to,v=new AbortController,b=setTimeout(()=>{v.abort(),hr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(b),L.ok?hr(f,"TestPingServer: ok",!0,h):hr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),hr(f,"TestPingServer: error",!1,h)})}function hr(a,h,f,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(f)}catch{}}function UI(){this.g=new EI}function BI(a,h,f){const v=f||"";try{_g(a,function(b,L){let $=b;c(b)&&($=hh(b)),h.push(v+L+"="+encodeURIComponent($))})}catch(b){throw h.push(v+"type="+encodeURIComponent("_badmap")),b}}function ul(a){this.l=a.Ub||null,this.j=a.eb||!1}S(ul,dh),ul.prototype.g=function(){return new cl(this.l,this.j)},ul.prototype.i=function(a){return function(){return a}}({});function cl(a,h){dt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(cl,dt),t=cl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ao(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ig(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ig(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?oo(this):ao(this),this.readyState==3&&Ig(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,oo(this))},t.Qa=function(a){this.g&&(this.response=a,oo(this))},t.ga=function(){this.g&&oo(this)};function oo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ao(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ao(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cg(a){let h="";return D(a,function(f,v){h+=v,h+=":",h+=f,h+=`\r
`}),h}function Eh(a,h,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Cg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ke(a,h,f))}function Me(a){dt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Me,dt);var zI=/^https?$/i,$I=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mh.g(),this.v=this.o?eg(this.o):eg(mh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Sg(this,L);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)f.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call($I,h,void 0))||v||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of f)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ag(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Sg(this,L)}};function Sg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,kg(a),hl(a)}function kg(a){a.A||(a.A=!0,It(a,"complete"),It(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,It(this,"complete"),It(this,"abort"),hl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hl(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ng(this):this.bb())},t.bb=function(){Ng(this)};function Ng(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Fn(a)!=4||a.Z()!=2)){if(a.u&&Fn(a)==4)Ym(a.Ea,0,a);else if(It(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var v;if(v=$===0){var b=String(a.D).match(yg)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),v=!zI.test(b?b.toLowerCase():"")}f=v}if(f)It(a,"complete"),It(a,"success");else{a.m=6;try{var L=2<Fn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",kg(a)}}finally{hl(a)}}}}function hl(a,h){if(a.g){Ag(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||It(a,"ready");try{f.onreadystatechange=v}catch{}}}function Ag(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xI(h)}};function Rg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HI(a){const h={};a=(a.g&&2<=Fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(x(a[v]))continue;var f=N(a[v]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[b]||[];h[b]=L,L.push(f)}w(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function bg(a){this.Aa=0,this.i=[],this.j=new to,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lo("baseRetryDelayMs",5e3,a),this.cb=lo("retryDelaySeedMs",1e4,a),this.Wa=lo("forwardChannelMaxRetries",2,a),this.wa=lo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new dg(a&&a.concurrentRequestLimit),this.Da=new UI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,v){Ct(0),this.W=a,this.H=h||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=Ug(this,null,this.W),fl(this)};function Th(a){if(Pg(a),a.G==3){var h=a.U++,f=Vn(a.I);if(ke(f,"SID",a.K),ke(f,"RID",h),ke(f,"TYPE","terminate"),uo(a,f),h=new ur(a,a.j,h),h.L=2,h.v=ll(Vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Bg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),il(h)}Fg(a)}function dl(a){a.g&&(Ch(a),a.g.cancel(),a.g=null)}function Pg(a){dl(a),a.u&&(l.clearTimeout(a.u),a.u=null),pl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fl(a){if(!fg(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||j(),z||(we(),z=!0),Q.add(h,a),a.B=0}}function WI(a,h){return pg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=eo(g(a.Ga,a,h),Vg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new ur(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Og(this,b,h),f=Vn(this.I),ke(f,"RID",a),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),uo(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(Cg(L)))+"&"+h:this.m&&Eh(f,this.m,L)),xh(this.h,b),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",h),ke(f,"SID","null"),b.T=!0,_h(b,f,null)):_h(b,f,h),this.G=2}}else this.G==3&&(a?Dg(this,a):this.i.length==0||fg(this.h)||Dg(this))};function Dg(a,h){var f;h?f=h.l:f=a.U++;const v=Vn(a.I);ke(v,"SID",a.K),ke(v,"RID",f),ke(v,"AID",a.T),uo(a,v),a.m&&a.o&&Eh(v,a.m,a.o),f=new ur(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Og(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xh(a.h,f),_h(f,v,h)}function uo(a,h){a.H&&D(a.H,function(f,v){ke(h,v,f)}),a.l&&_g({},function(f,v){ke(h,v,f)})}function Og(a,h,f){f=Math.min(a.i.length,f);var v=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let L=-1;for(;;){const $=["count="+f];L==-1?0<f?(L=b[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let xe=!0;for(let rt=0;rt<f;rt++){let me=b[rt].g;const ft=b[rt].map;if(me-=L,0>me)L=Math.max(0,b[rt].g-100),xe=!1;else try{BI(ft,$,"req"+me+"_")}catch{v&&v(ft)}}if(xe){v=$.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,v}function Lg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||j(),z||(we(),z=!0),Q.add(h,a),a.v=0}}function Ih(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=eo(g(a.Fa,a),Vg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Mg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=eo(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),dl(this),Mg(this))};function Ch(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Mg(a){a.g=new ur(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Vn(a.qa);ke(h,"RID","rpc"),ke(h,"SID",a.K),ke(h,"AID",a.T),ke(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(h,"TO",a.ja),ke(h,"TYPE","xmlhttp"),uo(a,h),a.m&&a.o&&Eh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ll(Vn(h)),f.m=null,f.P=!0,ug(f,a)}t.Za=function(){this.C!=null&&(this.C=null,dl(this),Ih(this),Ct(19))};function pl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function jg(a,h){var f=null;if(a.g==h){pl(a),Ch(a),a.g=null;var v=2}else if(wh(a.h,h))f=h.D,mg(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;v=nl(),It(v,new ig(v,f)),fl(a)}else Lg(a);else if(b=h.s,b==3||b==0&&0<h.X||!(v==1&&WI(a,h)||v==2&&Ih(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:is(a,5);break;case 4:is(a,10);break;case 3:is(a,6);break;default:is(a,2)}}}function Vg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function is(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),v=a.Xa;const b=!v;v=new ss(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ol(v,"https"),ll(v),b?VI(v.toString(),f):FI(v.toString(),f)}else Ct(2);a.G=0,a.l&&a.l.sa(h),Fg(a),Pg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Fg(a){if(a.G=0,a.ka=[],a.l){const h=gg(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Ug(a,h,f){var v=f instanceof ss?Vn(f):new ss(f);if(v.g!="")h&&(v.g=h+"."+v.g),al(v,v.s);else{var b=l.location;v=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var L=new ss(null);v&&ol(L,v),h&&(L.g=h),b&&al(L,b),f&&(L.l=f),v=L}return f=a.D,h=a.ya,f&&h&&ke(v,f,h),ke(v,"VER",a.la),uo(a,v),v}function Bg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Me(new ul({eb:f})):new Me(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zg(){}t=zg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ml(){}ml.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){dt.call(this),this.g=new bg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new zs(this)}S(Ut,dt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Th(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=hh(a),a=f);h.i.push(new NI(h.Ya++,a)),h.G==3&&fl(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Th(this.g),delete this.g,Ut.aa.N.call(this)};function $g(a){fh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S($g,fh);function Hg(){ph.call(this),this.status=1}S(Hg,ph);function zs(a){this.g=a}S(zs,zg),zs.prototype.ua=function(){It(this.g,"a")},zs.prototype.ta=function(a){It(this.g,new $g(a))},zs.prototype.sa=function(a){It(this.g,new Hg)},zs.prototype.ra=function(){It(this.g,"b")},ml.prototype.createWebChannel=ml.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,xT=function(){return new ml},wT=function(){return nl()},vT=ns,Df={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rl.NO_ERROR=0,rl.TIMEOUT=8,rl.HTTP_ERROR=6,uu=rl,og.COMPLETE="complete",yT=og,tg.EventType=Ji,Ji.OPEN="a",Ji.CLOSE="b",Ji.ERROR="c",Ji.MESSAGE="d",dt.prototype.listen=dt.prototype.K,bo=tg,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,_T=Me}).apply(typeof jl<"u"?jl:typeof self<"u"?self:typeof window<"u"?window:{});const cv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Lc("@firebase/firestore");function To(){return As.logLevel}function Y(t,...e){if(As.logLevel<=ce.DEBUG){const n=e.map(Am);As.debug(`Firestore (${Ki}): ${t}`,...n)}}function Rs(t,...e){if(As.logLevel<=ce.ERROR){const n=e.map(Am);As.error(`Firestore (${Ki}): ${t}`,...n)}}function sc(t,...e){if(As.logLevel<=ce.WARN){const n=e.map(Am);As.warn(`Firestore (${Ki}): ${t}`,...n)}}function Am(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw Rs(e),new Error(e)}function Be(t,e){t||de()}function Se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class G2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class q2{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ys,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ys)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new ET(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new yt(e)}}class K2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Q2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new K2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Y2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Be(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new Y2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=J2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function Oi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.timestamp=e}static fromTimestamp(e){return new be(e)}static min(){return new be(new nt(0,0))}static max(){return new be(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends Ca{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const Z2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ca{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return Z2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(He.fromString(e))}static fromName(e){return new ie(He.fromString(e).popFirst(5))}static empty(){return new ie(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new He(e.slice()))}}function eD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=be.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Kr(s,ie.empty(),e)}function tD(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(be.min(),ie.empty(),-1)}static max(){return new Kr(be.max(),ie.empty(),-1)}}function nD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==rD)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function iD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Jc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}CT.oe=-1;function Rm(t){return t==null}function ic(t){return t===0&&1/t==-1/0}function oD(t){return typeof t=="number"&&Number.isInteger(t)&&!ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ST(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Vt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vl(this.root,e,this.comparator,!0)}}class Vl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dv(this.data.getIterator())}getIteratorFrom(e){return new dv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class dv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new gn([])}unionWith(e){let n=new xt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new aD("Invalid base64 string: "+i):i}}(e);return new Rn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rn.EMPTY_BYTE_STRING=new Rn("");const lD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(t){if(Be(!!t),typeof t=="string"){let e=0;const n=lD.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sa(t){return typeof t=="string"?Rn.fromBase64String(t):Rn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kT(t){const e=t.mapValue.fields.__previous_value__;return bm(e)?kT(e):e}function oc(t){const e=bs(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,r,s,i,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ac{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ac("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ac&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={mapValue:{}};function Li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bm(t)?4:hD(t)?9007199254740991:cD(t)?10:11:de()}function bn(t,e){if(t===e)return!0;const n=Li(t);if(n!==Li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oc(t).isEqual(oc(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bs(s.timestampValue),l=bs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sa(s.bytesValue).isEqual(Sa(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ot(s.doubleValue),l=ot(i.doubleValue);return o===l?ic(o)===ic(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(hv(o)!==hv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!bn(o[u],l[u])))return!1;return!0}(t,e);default:return de()}}function ka(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=Li(t),r=Li(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ot(i.integerValue||i.doubleValue),u=ot(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return fv(t.timestampValue,e.timestampValue);case 4:return fv(oc(t),oc(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Sa(i),u=Sa(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=Ee(l[c],u[c]);if(p!==0)return p}return Ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ee(ot(i.latitude),ot(o.latitude));return l!==0?l:Ee(ot(i.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,p;const m=i.fields||{},g=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(u=g.value)===null||u===void 0?void 0:u.arrayValue,A=Ee(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0);return A!==0?A:pv(I,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Fl.mapValue&&o===Fl.mapValue)return 0;if(i===Fl.mapValue)return 1;if(o===Fl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Ee(u[m],p[m]);if(g!==0)return g;const I=Mi(l[u[m]],c[p[m]]);if(I!==0)return I}return Ee(u.length,p.length)}(t.mapValue,e.mapValue);default:throw de()}}function fv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=bs(t),r=bs(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function pv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Mi(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function ji(t){return Of(t)}function Of(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sa(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Of(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Of(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function Lf(t){return!!t&&"integerValue"in t}function Pm(t){return!!t&&"arrayValue"in t}function cu(t){return!!t&&"mapValue"in t}function cD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=qo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());cu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];cu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xa(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pn(qo(this.value))}}function NT(t){const e=[];return Xa(t.fields,(n,r)=>{const s=new lt([n]);if(cu(r)){const i=NT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dn(e,0,be.min(),be.min(),be.min(),pn.empty(),0)}static newFoundDocument(e,n,r,s){return new dn(e,1,n,be.min(),r,s,0)}static newNoDocument(e,n){return new dn(e,2,n,be.min(),be.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new dn(e,3,n,be.min(),be.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.position=e,this.inclusive=n}}function mv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Mi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n="asc"){this.field=e,this.dir=n}}function dD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{}class et extends AT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pD(e,n,r):n==="array-contains"?new _D(e,r):n==="in"?new yD(e,r):n==="not-in"?new vD(e,r):n==="array-contains-any"?new wD(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mD(e,r):new gD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mi(n,this.value)):n!==null&&Li(this.value)===Li(n)&&this.matchesComparison(Mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qr extends AT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qr(e,n)}matches(e){return RT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function RT(t){return t.op==="and"}function bT(t){return fD(t)&&RT(t)}function fD(t){for(const e of t.filters)if(e instanceof Qr)return!1;return!0}function Mf(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+ji(t.value);if(bT(t))return t.filters.map(e=>Mf(e)).join(",");{const e=t.filters.map(n=>Mf(n)).join(",");return`${t.op}(${e})`}}function PT(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof Qr?function(r,s){return s instanceof Qr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&PT(o,s.filters[l]),!0):!1}(t,e):void de()}function DT(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${ji(n.value)}`}(t):t instanceof Qr?function(n){return n.op.toString()+" {"+n.getFilters().map(DT).join(" ,")+"}"}(t):"Filter"}class pD extends et{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class mD extends et{constructor(e,n){super(e,"in",n),this.keys=OT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gD extends et{constructor(e,n){super(e,"not-in",n),this.keys=OT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class _D extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pm(n)&&ka(n.arrayValue,this.value)}}class yD extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class vD extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ka(this.value.arrayValue,n)}}class wD extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ka(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function _v(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xD(t,e,n,r,s,i,o)}function Dm(t){const e=Se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Rm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),e.ue=n}return e.ue}function Om(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!PT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gv(t.startAt,e.startAt)&&gv(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ED(t,e,n,r,s,i,o,l){return new Zc(t,e,n,r,s,i,o,l)}function TD(t){return new Zc(t)}function yv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ID(t){return t.collectionGroup!==null}function Ko(t){const e=Se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xt(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new uc(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new uc(lt.keyField(),r))}return e.ce}function vs(t){const e=Se(t);return e.le||(e.le=CD(e,Ko(t))),e.le}function CD(t,e){if(t.limitType==="F")return _v(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new uc(s.field,i)});const n=t.endAt?new lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lc(t.startAt.position,t.startAt.inclusive):null;return _v(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jf(t,e,n){return new Zc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function LT(t,e){return Om(vs(t),vs(e))&&t.limitType===e.limitType}function MT(t){return`${Dm(vs(t))}|lt:${t.limitType}`}function Io(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>DT(s)).join(", ")}]`),Rm(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ji(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ji(s)).join(",")),`Target(${r})`}(vs(t))}; limitType=${t.limitType})`}function Lm(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ko(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=mv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ko(r),s)||r.endAt&&!function(o,l,u){const c=mv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ko(r),s))}(t,e)}function SD(t){return(e,n)=>{let r=!1;for(const s of Ko(t)){const i=kD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kD(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Mi(u,c):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xa(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ST(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=new Vt(ie.comparator);function cc(){return ND}const jT=new Vt(ie.comparator);function Ul(...t){let e=jT;for(const n of t)e=e.insert(n.key,n);return e}function VT(t){let e=jT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ms(){return Qo()}function FT(){return Qo()}function Qo(){return new Qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const AD=new Vt(ie.comparator),RD=new xt(ie.comparator);function wt(...t){let e=RD;for(const n of t)e=e.add(n);return e}const bD=new xt(Ee);function PD(){return bD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function UT(t){return{integerValue:""+t}}function DD(t,e){return oD(e)?UT(e):Mm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._=void 0}}function OD(t,e,n){return t instanceof Na?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bm(i)&&(i=kT(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Aa?zT(t,e):t instanceof Ra?$T(t,e):function(s,i){const o=BT(s,i),l=vv(o)+vv(s.Pe);return Lf(o)&&Lf(s.Pe)?UT(l):Mm(s.serializer,l)}(t,e)}function LD(t,e,n){return t instanceof Aa?zT(t,e):t instanceof Ra?$T(t,e):n}function BT(t,e){return t instanceof hc?function(r){return Lf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Na extends eh{}class Aa extends eh{constructor(e){super(),this.elements=e}}function zT(t,e){const n=HT(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ra extends eh{constructor(e){super(),this.elements=e}}function $T(t,e){let n=HT(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class hc extends eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vv(t){return ot(t.integerValue||t.doubleValue)}function HT(t){return Pm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.field=e,this.transform=n}}function jD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Aa&&s instanceof Aa||r instanceof Ra&&s instanceof Ra?Oi(r.elements,s.elements,bn):r instanceof hc&&s instanceof hc?bn(r.Pe,s.Pe):r instanceof Na&&s instanceof Na}(t.transform,e.transform)}class VD{constructor(e,n){this.version=e,this.transformResults=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function WT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qT(t.key,Xn.none()):new Ja(t.key,t.data,Xn.none());{const n=t.data,r=pn.empty();let s=new xt(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ms(t.key,r,new gn(s.toArray()),Xn.none())}}function FD(t,e,n){t instanceof Ja?function(s,i,o){const l=s.value.clone(),u=xv(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ms?function(s,i,o){if(!hu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=xv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(GT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,r){return t instanceof Ja?function(i,o,l,u){if(!hu(i.precondition,o))return l;const c=i.value.clone(),p=Ev(i.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ms?function(i,o,l,u){if(!hu(i.precondition,o))return l;const c=Ev(i.fieldTransforms,u,o),p=o.data;return p.setAll(GT(i)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return hu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function UD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=BT(r.transform,s||null);i!=null&&(n===null&&(n=pn.empty()),n.set(r.field,i))}return n||null}function wv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Oi(r,s,(i,o)=>jD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends th{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ms extends th{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function GT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xv(t,e,n){const r=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,LD(o,l,n[s]))}return r}function Ev(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OD(i,o,e))}return r}class qT extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BD extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=WT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(be.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),wt())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,r)=>wv(n,r))&&Oi(this.baseMutations,e.baseMutations,(n,r)=>wv(n,r))}}class jm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length);let s=function(){return AD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jm(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,fe;function HD(t){switch(t){default:return de();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function WD(t){if(t===void 0)return Rs("GRPC error has no .code"),U.UNKNOWN;switch(t){case $e.OK:return U.OK;case $e.CANCELLED:return U.CANCELLED;case $e.UNKNOWN:return U.UNKNOWN;case $e.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case $e.INTERNAL:return U.INTERNAL;case $e.UNAVAILABLE:return U.UNAVAILABLE;case $e.UNAUTHENTICATED:return U.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case $e.NOT_FOUND:return U.NOT_FOUND;case $e.ALREADY_EXISTS:return U.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return U.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case $e.ABORTED:return U.ABORTED;case $e.OUT_OF_RANGE:return U.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return U.UNIMPLEMENTED;case $e.DATA_LOSS:return U.DATA_LOSS;default:return de()}}(fe=$e||($e={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new gT([4294967295,4294967295],0);class GD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qD(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KD(t,e){return Vf(t,e.toTimestamp())}function yi(t){return Be(!!t),be.fromTimestamp(function(n){const r=bs(n);return new nt(r.seconds,r.nanos)}(t))}function KT(t,e){return Ff(t,e).canonicalString()}function Ff(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function QD(t){const e=He.fromString(t);return Be(rO(e)),e}function Uf(t,e){return KT(t.databaseId,e.path)}function YD(t){const e=QD(t);return e.length===4?He.emptyPath():JD(e)}function XD(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JD(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tv(t,e,n){return{name:Uf(t,e),fields:n.value.mapValue.fields}}function ZD(t,e){let n;if(e instanceof Ja)n={update:Tv(t,e.key,e.value)};else if(e instanceof qT)n={delete:Uf(t,e.key)};else if(e instanceof Ms)n={update:Tv(t,e.key,e.data),updateMask:nO(e.fieldMask)};else{if(!(e instanceof BD))return de();n={verify:Uf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Aa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function eO(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yi(s.updateTime):yi(i);return o.isEqual(be.min())&&(o=yi(i)),new VD(o,s.transformResults||[])}(n,e))):[]}function tO(t){let e=YD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=QT(m);return g instanceof Qr&&bT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(S){return new uc(Gs(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Rm(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new lc(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,I=m.values||[];return new lc(I,g)}(n.endAt)),ED(e,s,o,i,l,"F",u,c)}function QT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gs(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gs(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gs(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gs(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Gs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qr.create(n.compositeFilter.filters.map(r=>QT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function Gs(t){return lt.fromServerFormat(t.fieldPath)}function nO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rO(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.ct=e}}function iO(t){const e=tO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.un=new aO}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Kr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class aO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new xt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.changes=new Qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yo(r.mutation,s,gn.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,wt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=wt()){const s=ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ul();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,wt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=cc();const o=Qo(),l=function(){return Qo()}();return n.forEach((u,c)=>{const p=r.get(c.key);s.has(c.key)&&(p===void 0||p.mutation instanceof Ms)?i=i.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),Yo(p.mutation,c,p.mutation.getFieldMask(),nt.now())):o.set(c.key,gn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>{var m;return l.set(c,new uO(p,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qo();let s=new Vt((o,l)=>o-l),i=wt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||gn.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(s.get(l.batchId)||wt()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=FT();p.forEach(g=>{if(!i.has(g)){const I=WT(n.get(g),r.get(g));I!==null&&m.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ID(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(ms());let l=-1,u=i;return o.next(c=>V.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,wt())).next(p=>({batchId:l,changes:VT(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Ul();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ul();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const c=function(m,g){return new Zc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,dn.newInvalidDocument(p)))});let l=Ul();return o.forEach((u,c)=>{const p=i.get(u);p!==void 0&&Yo(p.mutation,c,gn.empty(),nt.now()),Lm(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yi(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:iO(s.bundledQuery),readTime:yi(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.overlays=new Vt(ie.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ms();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=ms(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Vt((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=i.get(c.largestBatchId);p===null&&(p=ms(),i=i.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=ms(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $D(n,r));let i=this.Ir.get(n);i===void 0&&(i=wt(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this.sessionToken=Rn.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.Tr=new xt(Je.Er),this.dr=new xt(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new He([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new He([])),r=new Je(n,e),s=new Je(n,e+1);let i=wt();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Ee(e.wr,n.wr)}static Ar(e,n){return Ee(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new xt(Je.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zD(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(Ee);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new Je(new ie(i),0);let l=new xt(Ee);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Je(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.Mr=e,this.docs=function(){return new Vt(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():dn.newInvalidDocument(n))}getEntries(e,n){let r=cc();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dn.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cc();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||nD(tD(p),r)<=0||(s.has(p.key)||Lm(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gO(this)}getSize(e){return V.resolve(this.size)}}class gO extends lO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e){this.persistence=e,this.Nr=new Qi(n=>Dm(n),Om),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Vm,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new CT(0),this.Kr=!1,this.Kr=!0,this.$r=new fO,this.referenceDelegate=e(this),this.Ur=new _O(this),this.indexManager=new oO,this.remoteDocumentCache=function(s){return new mO(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new sO(n),this.Gr=new hO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new pO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new vO(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class vO extends sD{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Jr=new Vm,this.Yr=null}static Zr(e){return new Fm(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,be.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=wt(),s=wt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Um(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nk()?8:iD(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wO;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(To()<=ce.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Io(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(To()<=ce.DEBUG&&Y("QueryEngine","Query:",Io(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(To()<=ce.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Io(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vs(n))):V.resolve())}Yi(e,n){if(yv(n))return V.resolve(null);let r=vs(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jf(n,null,"F"),r=vs(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=wt(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,jf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return yv(n)||s.isEqual(be.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(To()<=ce.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Io(n)),this.rs(e,o,n,eD(s,-1)).next(l=>l))})}ts(e,n){let r=new xt(SD(e));return n.forEach((s,i)=>{Lm(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return To()<=ce.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Io(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Vt(Ee),this._s=new Qi(i=>Dm(i),Om),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function TO(t,e,n,r){return new EO(t,e,n,r)}async function YT(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=wt();for(const c of s){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of i){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function IO(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let I=V.resolve();return g.forEach(S=>{I=I.next(()=>p.getEntry(u,S)).next(A=>{const O=c.docVersions.get(S);Be(O!==null),A.version.compareTo(O)<0&&(m.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),p.addEntry(A)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=wt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function CO(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function SO(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Iv{constructor(){this.activeTargetIds=PD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kO{constructor(){this.so=new Iv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Iv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl=null;function fd(){return Bl===null?Bl=function(){return 268435456+Math.round(2147483648*Math.random())}():Bl++,"0x"+Bl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class bO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=fd(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(p=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw sc("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=AO[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=fd();return new Promise((o,l)=>{const u=new _T;u.setWithCredentials(!0),u.listenOnce(yT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case uu.NO_ERROR:const p=u.getResponseJson();Y(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case uu.TIMEOUT:Y(_t,`RPC '${e}' ${i} timed out`),l(new re(U.DEADLINE_EXCEEDED,"Request time out"));break;case uu.HTTP_ERROR:const m=u.getStatus();if(Y(_t,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const S=function(O){const E=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(E)>=0?E:U.UNKNOWN}(I.status);l(new re(S,I.message))}else l(new re(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new re(U.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Y(_t,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);Y(_t,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=fd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xT(),l=wT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");Y(_t,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,I=!1;const S=new RO({Io:O=>{I?Y(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Y(_t,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),Y(_t,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},To:()=>m.close()}),A=(O,E,x)=>{O.listen(E,k=>{try{x(k)}catch(P){setTimeout(()=>{throw P},0)}})};return A(m,bo.EventType.OPEN,()=>{I||(Y(_t,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),A(m,bo.EventType.CLOSE,()=>{I||(I=!0,Y(_t,`RPC '${e}' stream ${s} transport closed`),S.So())}),A(m,bo.EventType.ERROR,O=>{I||(I=!0,sc(_t,`RPC '${e}' stream ${s} transport errored:`,O),S.So(new re(U.UNAVAILABLE,"The operation could not be completed")))}),A(m,bo.EventType.MESSAGE,O=>{var E;if(!I){const x=O.data[0];Be(!!x);const k=x,P=k.error||((E=k[0])===null||E===void 0?void 0:E.error);if(P){Y(_t,`RPC '${e}' stream ${s} received error:`,P);const M=P.status;let D=function(T){const C=$e[T];if(C!==void 0)return WD(C)}(M),w=P.message;D===void 0&&(D=U.INTERNAL,w="Unknown error status: "+M+" with message "+P.message),I=!0,S.So(new re(D,w)),m.close()}else Y(_t,`RPC '${e}' stream ${s} received:`,x),S.bo(x)}}),A(l,vT.STAT_EVENT,O=>{O.stat===Df.PROXY?Y(_t,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Df.NOPROXY&&Y(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function pd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){return new GD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new XT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Rs(n.toString()),Rs("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new re(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DO extends PO{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=eO(e.writeResults,e.commitTime),r=yi(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=XD(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ff(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(U.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ff(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class LO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rs(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{el(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Se(u);c.L_.add(4),await Za(c),c.q_.set("Unknown"),c.L_.delete(4),await rh(c)}(this))})}),this.q_=new LO(r,s)}}async function rh(t){if(el(t))for(const e of t.B_)await e(!0)}async function Za(t){for(const e of t.B_)await e(!1)}function el(t){return Se(t).L_.size===0}async function JT(t,e,n){if(!Jc(e))throw e;t.L_.add(1),await Za(t),t.q_.set("Offline"),n||(n=()=>CO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await rh(t)})}function ZT(t,e){return e().catch(n=>JT(t,n,e))}async function sh(t){const e=Se(t),n=Yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;jO(e);)try{const s=await SO(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,VO(e,s)}catch(s){await JT(e,s)}eI(e)&&tI(e)}function jO(t){return el(t)&&t.O_.length<10}function VO(t,e){t.O_.push(e);const n=Yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function eI(t){return el(t)&&!Yr(t).n_()&&t.O_.length>0}function tI(t){Yr(t).start()}async function FO(t){Yr(t).p_()}async function UO(t){const e=Yr(t);for(const n of t.O_)e.m_(n.mutations)}async function BO(t,e,n){const r=t.O_.shift(),s=jm.from(r,e,n);await ZT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sh(t)}async function zO(t,e){e&&Yr(t).V_&&await async function(r,s){if(function(o){return HD(o)&&o!==U.ABORTED}(s.code)){const i=r.O_.shift();Yr(r).s_(),await ZT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sh(r)}}(t,e),eI(t)&&tI(t)}async function Sv(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=el(n);n.L_.add(3),await Za(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await rh(n)}async function $O(t,e){const n=Se(t);e?(n.L_.delete(2),await rh(n)):e||(n.L_.add(2),await Za(n),n.q_.set("Unknown"))}function Yr(t){return t.U_||(t.U_=function(n,r,s){const i=Se(n);return i.w_(),new DO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:FO.bind(null,t),mo:zO.bind(null,t),f_:UO.bind(null,t),g_:BO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sh(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Bm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nI(t,e){if(Rs("AsyncQueue",`${e}: ${t}`),Jc(t))return new re(U.UNAVAILABLE,`${e}: ${t}`);throw t}class HO{constructor(){this.queries=kv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Se(n),i=s.queries;s.queries=kv(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new re(U.ABORTED,"Firestore shutting down"))}}function kv(){return new Qi(t=>MT(t),LT)}function WO(t){t.Y_.forEach(e=>{e.next()})}var Nv,Av;(Av=Nv||(Nv={})).ea="default",Av.Cache="cache";class GO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Qi(l=>MT(l),LT),this.Ma=new Map,this.xa=new Set,this.Oa=new Vt(ie.comparator),this.Na=new Map,this.La=new Vm,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function qO(t,e,n){const r=XO(t);try{const s=await function(o,l){const u=Se(o),c=nt.now(),p=l.reduce((I,S)=>I.add(S.key),wt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=cc(),A=wt();return u.cs.getEntries(I,p).next(O=>{S=O,S.forEach((E,x)=>{x.isValidDocument()||(A=A.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,S)).next(O=>{m=O;const E=[];for(const x of l){const k=UD(x,m.get(x.key).overlayedDocument);k!=null&&E.push(new Ms(x.key,k,NT(k.value.mapValue),Xn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,E,l)}).next(O=>{g=O;const E=O.applyToLocalDocumentSet(m,A);return u.documentOverlayCache.saveOverlays(I,O.batchId,E)})}).then(()=>({batchId:g.batchId,changes:VT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Vt(Ee)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await ih(r,s.changes),await sh(r.remoteStore)}catch(s){const i=nI(s,"Failed to persist write");n.reject(i)}}function Rv(t,e,n){const r=Se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Se(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&WO(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KO(t,e){const n=Se(t),r=e.batch.batchId;try{const s=await IO(n.localStore,e);sI(n,r,null),rI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ih(n,s)}catch(s){await IT(s)}}async function QO(t,e,n){const r=Se(t);try{const s=await function(o,l){const u=Se(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(Be(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);sI(r,e,n),rI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ih(r,s)}catch(s){await IT(s)}}function rI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function sI(t,e,n){const r=Se(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}async function ih(t,e,n){const r=Se(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=void 0)===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Um.Wi(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const p=Se(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.$i,I=>p.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>V.forEach(g.Ui,I=>p.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Jc(m))throw m;Y("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const I=p.os.get(g),S=I.snapshotVersion,A=I.withLastLimboFreeSnapshotVersion(S);p.os=p.os.insert(g,A)}}}(r.localStore,i))}async function YO(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await YT(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new re(U.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ih(n,r.hs)}}function XO(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QO.bind(null,e),e}class dc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return TO(this.persistence,new xO,e.initialUser,this.serializer)}Ga(e){return new yO(Fm.Zr,this.serializer)}Wa(e){return new kO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dc.provider={build:()=>new dc};class Bf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YO.bind(null,this.syncEngine),await $O(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HO}()}createDatastore(e){const n=nh(e.databaseInfo.databaseId),r=function(i){return new bO(i)}(e.databaseInfo);return function(i,o,l,u){return new OO(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new MO(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Rv(this.syncEngine,n,0),function(){return Cv.D()?new Cv:new NO}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,p){const m=new GO(s,i,o,l,u,c);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Se(s);Y("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Za(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bf.provider={build:()=>new Bf};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=TT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nI(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function md(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await YT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZO(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Sv(e.remoteStore,s)),t._onlineComponents=e}async function ZO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await md(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;sc("Error using user provided cache. Falling back to memory cache: "+n),await md(t,new dc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await md(t,new dc);return t._offlineComponents}async function eL(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await bv(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await bv(t,new Bf))),t._onlineComponents}function tL(t){return eL(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t,e,n){if(!n)throw new re(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rL(t,e,n,r){if(e===!0&&r===!0)throw new re(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dv(t){if(!ie.isDocumentKey(t))throw new re(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function zf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zm(t);throw new re(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $m{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ov({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ov(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new W2;switch(r.type){case"firstParty":return new Q2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pv.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Pv.delete(n),r.terminate())}(this),Promise.resolve()}}function sL(t,e,n,r={}){var s;const i=(t=zf(t,$m))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&sc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=Fp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new G2(new ET(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hm(this.firestore,e,this._query)}}class Jn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ba(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jn(this.firestore,e,this._key)}}class ba extends Hm{constructor(e,n,r){super(e,n,TD(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jn(this.firestore,null,new ie(e))}withConverter(e){return new ba(this.firestore,e,this._path)}}function iL(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=TT.newId()),nL("doc","path",e),t instanceof $m){const r=He.fromString(e,...n);return Dv(r),new Jn(t,null,new ie(r))}{if(!(t instanceof Jn||t instanceof ba))throw new re(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Dv(r),new Jn(t.firestore,t instanceof ba?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new XT(this,"async_queue_retry"),this.Vu=()=>{const r=pd();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=pd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=pd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ys;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Jc(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rs("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Bm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class oI extends $m{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Lv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lv(e),this._firestoreClient=void 0,await e}}}function oL(t,e){const n=typeof t=="object"?t:Ba(),r=typeof t=="string"?t:"(default)",s=Ua(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vp("firestore");i&&sL(s,...i)}return s}function aL(t){if(t._terminated)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lL(t),t._firestoreClient}function lL(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,p){return new uD(l,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,iI(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new JO(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pa(Rn.fromBase64String(e))}catch(n){throw new re(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pa(Rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=/^__.*__$/;class cL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ja(e,this.data,n,this.fieldTransforms)}}function cI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Gm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Gm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(cI(this.Cu)&&uL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nh(e)}Qu(e,n,r,s=!1){return new Gm({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dL(t){const e=t._freezeSettings(),n=nh(t._databaseId);return new hL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fL(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);pI("Data must be an object, but it was:",o,r);const l=dI(r,o);let u,c;if(i.merge)u=new gn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=pL(e,m,n);if(!o.contains(g))throw new re(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);_L(p,g)||p.push(g)}u=new gn(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new cL(new pn(l),u,c)}class qm extends Wm{_toFieldTransform(e){return new MD(e.path,new Na)}isEqual(e){return e instanceof qm}}function hI(t,e){if(fI(t=Ge(t)))return pI("Unsupported field value:",e,t),dI(t,e);if(t instanceof Wm)return function(r,s){if(!cI(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=hI(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Vf(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vf(s.serializer,i)}}if(r instanceof lI)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pa)return{bytesValue:qD(s.serializer,r._byteString)};if(r instanceof Jn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:KT(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof uI)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mm(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${zm(r)}`)}(t,e)}function dI(t,e){const n={};return ST(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xa(t,(r,s)=>{const i=hI(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof lI||t instanceof Pa||t instanceof Jn||t instanceof Wm||t instanceof uI)}function pI(t,e,n){if(!fI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=zm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function pL(t,e,n){if((e=Ge(e))instanceof aI)return e._internalPath;if(typeof e=="string")return gL(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const mL=new RegExp("[~\\*/\\[\\]]");function gL(t,e,n){if(e.search(mL)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new aI(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new re(U.INVALID_ARGUMENT,l+t+u)}function _L(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function vL(t,e,n){t=zf(t,Jn);const r=zf(t.firestore,oI),s=yL(t.converter,e,n);return wL(r,[fL(dL(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xn.none())])}function wL(t,e){return function(r,s){const i=new ys;return r.asyncQueue.enqueueAndForget(async()=>qO(await tL(r),s,i)),i.promise}(aL(t),e)}function xL(){return new qm("serverTimestamp")}(function(e,n=!0){(function(s){Ki=s})(es),$r(new rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new oI(new q2(r.getProvider("auth-internal")),new X2(r.getProvider("app-check-internal")),function(c,p){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ac(c.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),en(cv,"4.7.3",e),en(cv,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firebasestorage.googleapis.com",EL="storageBucket",TL=2*60*1e3,IL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Dn{constructor(e,n,r=0){super(gd(e),`Firebase Storage: ${n} (${gd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function gd(t){return"storage/"+t}function CL(){const t="An unknown error occurred, please check the error payload for server response.";return new Mn(Pn.UNKNOWN,t)}function SL(){return new Mn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kL(){return new Mn(Pn.CANCELED,"User canceled the upload/download.")}function NL(t){return new Mn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function AL(t){return new Mn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Mv(t){return new Mn(Pn.INVALID_ARGUMENT,t)}function gI(){return new Mn(Pn.APP_DELETED,"The Firebase app was deleted.")}function RL(t){return new Mn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(r.path==="")return r;throw AL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),S={bucket:1,path:3},A=n===mI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",E=new RegExp(`^https?://${A}/${s}/${O}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:I,indices:S,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<k.length;P++){const M=k[P],D=M.regex.exec(e);if(D){const w=D[M.indices.bucket];let y=D[M.indices.path];y||(y=""),r=new _n(w,y),M.postModify(r);break}}if(r==null)throw NL(e);return r}}class bL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function p(...O){c||(c=!0,e.apply(null,O))}function m(O){s=setTimeout(()=>{s=null,t(I,u())},O)}function g(){i&&clearTimeout(i)}function I(O,...E){if(c){g();return}if(O){g(),p.call(null,O,...E);return}if(u()||o){g(),p.call(null,O,...E);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let S=!1;function A(O){S||(S=!0,g(),!c&&(s!==null?(O||(l=2),clearTimeout(s),m(0)):O||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function DL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t){return t!==void 0}function jv(t,e,n,r){if(r<e)throw Mv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Mv(`Invalid value for '${t}'. Expected ${n} or less.`)}function LL(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var pc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pc||(pc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n,r,s,i,o,l,u,c,p,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,S)=>{this.resolve_=I,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===pc.NO_ERROR,u=i.getStatus();if(!l||ML(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===pc.ABORT;r(!1,new zl(!1,null,p));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new zl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());OL(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=CL();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?gI():kL();o(u)}else{const u=SL();o(u)}};this.canceled_?n(!1,new zl(!1,null,!0)):this.backoffId_=PL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zL(t,e,n,r,s,i,o=!0){const l=LL(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return UL(c,e),VL(c,n),FL(c,i),BL(c,r),new jL(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new mc(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HL(this._location.path)}get storage(){return this._service}get parent(){const e=$L(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new mc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RL(e)}}function Vv(t,e){const n=e==null?void 0:e[EL];return n==null?null:_n.makeFromBucketSpec(n,t)}function WL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Fp(s,t.app.options.projectId))}class GL{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=mI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TL,this._maxUploadRetryTime=IL,this._requests=new Set,s!=null?this._bucket=_n.makeFromBucketSpec(s,this._host):this._bucket=Vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=Vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bL(gI());{const o=zL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Fv="@firebase/storage",Uv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="storage";function qL(t=Ba(),e){t=Ge(t);const r=Ua(t,_I).getImmediate({identifier:e}),s=Vp("storage");return s&&KL(r,...s),r}function KL(t,e,n,r={}){WL(t,e,n,r)}function QL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new GL(n,r,s,e,es)}function YL(){$r(new rr(_I,QL,"PUBLIC").setMultipleInstances(!0)),en(Fv,Uv,""),en(Fv,Uv,"esm2017")}YL();const XL={apiKey:"AIzaSyAldb_sD5Vg1zDt3P2CnHE1_boY4RMf9m4",authDomain:"hometaste-d6834.firebaseapp.com",databaseURL:"https://hometaste-d6834-default-rtdb.firebaseio.com",projectId:"hometaste-d6834",storageBucket:"hometaste-d6834.firebasestorage.app",messagingSenderId:"132298816482",appId:"1:132298816482:web:2915b8e21fcb62e6c497bb"},oh=fN().length?Ba():_x(XL),Bv=$2(oh),mr=Bb(oh),JL=oL(oh);qL(oh);let $l=null;async function gr(){return $l||new Promise((t,e)=>{const n=PP(Bv,async r=>{try{if(r){$l=r,n(),t(r);return}const s=await SP(Bv);$l=s.user,n(),t(s.user)}catch(s){n(),e(s)}})})}function os(t){return t.trim().toUpperCase()}function ZL(t=6){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let n="HT-";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}const $t={generatePairCode:()=>ZL(6),joinFamily:async t=>{try{const n=(await gr()).uid,r=os(t);return r?(await su(fr(mr,`families/${r}/members/${n}`),!0),await vL(iL(JL,`families/${r}/members/${n}`),{joinedAt:xL()},{merge:!0}),localStorage.setItem("familyCode",r),{success:!0,uid:n,familyCode:r}):{success:!1,error:"家庭 Code 不能为空"}}catch(e){console.error("Firebase Join Error:",e);const n=e==null?void 0:e.code;return n==="PERMISSION_DENIED"||n==="permission-denied"?{success:!1,error:"权限被拒绝：请检查 Realtime Database / Firestore Rules（需要允许写入 members 才能加入）。"}:{success:!1,error:(e==null?void 0:e.message)||"网络连接失败或数据库不可用"}}},subscribeToData:async(t,e,n)=>{await gr();const r=os(t),s=fr(mr,`families/${r}/${e}`);return Nb(s,i=>{n(i.val())})},logActivity:async(t,e)=>{const n=await gr(),r=os(t);await Cb(fr(mr,`families/${r}/activity`),{actorUid:e.actorUid||n.uid,actorName:e.actorName||"家人",action:e.action,targetType:e.targetType,targetName:e.targetName,ts:e.ts||Date.now()})},subscribeToActivity:async(t,e,n)=>{await gr();const r=os(t),s=Db(fr(mr,`families/${r}/activity`),Pb((n==null?void 0:n.limit)??30));let i=!1;return setTimeout(()=>i=!0,300),Ab(s,o=>{const l=o.val();l&&i&&e(l)})},pushData:async(t,e,n)=>{await gr();const r=os(t);await su(fr(mr,`families/${r}/${e}`),n)},updateUserStatus:async(t,e,n)=>{await gr();const r=os(t);await Sb(fr(mr,`families/${r}/users/${e}`),{...n,lastActive:Date.now()}).catch(()=>{})},initializeCloudData:async(t,e)=>{await gr();const n=os(t);return(await kb(fr(mr,`families/${n}`))).exists()?!1:(await su(fr(mr,`families/${n}`),{...e,meta:{createdAt:Wb()}}),!0)}};async function eM(){return(await gr()).uid}const tM=({list:t,onUpdate:e,plans:n,recipes:r,inventory:s,pairCode:i,uid:o,actorName:l})=>{const[u,c]=W.useState(""),p=async(A,O)=>{if(!(!i||!o))try{await $t.logActivity(i,{actorUid:o,actorName:l||"家人",action:A,targetType:"采购",targetName:O,ts:Date.now()})}catch(E){console.warn("logActivity failed:",E)}},m=A=>{const O=A.trim(),E=/^(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?\s*(.+)$/,x=O.match(E);if(x){const M=x[1],D=x[3]||"";return{name:x[4],amount:`${M}${D}`}}const k=/^(.+)\s+(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?$/,P=O.match(k);if(P){const M=P[1],D=P[2],w=P[4]||"";return{name:M,amount:`${D}${w}`}}return{name:O,amount:"适量"}},g=async A=>{if(!A.trim())return;const{name:O,amount:E}=m(A),x={id:Date.now().toString(),name:O,amount:E,checked:!1,addedAt:Date.now()},k=[x,...t];e(k),c(""),await p("新增",`${x.name}（${x.amount}）`)},I=async()=>{const A=t.filter(E=>E.checked),O=t.filter(E=>!E.checked);e(O),A.length>0&&await p("清除已买",`共 ${A.length} 项`)},S=async A=>{const O=t.find(P=>P.id===A),E=!(O!=null&&O.checked),x=t.map(P=>P.id===A?{...P,checked:E}:P);e(x);const k=(O==null?void 0:O.name)||"某项";await p(E?"完成":"取消完成",k)};return d.jsxs("div",{className:"p-5 lg:p-10 space-y-8 pb-32 max-w-4xl mx-auto animate-in fade-in duration-500",children:[d.jsxs("header",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 italic",children:"采购清单"}),d.jsx("button",{onClick:I,className:"px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-500 hover:text-white transition-colors",children:"清除已买"})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("input",{type:"text",placeholder:"例如: 2斤排骨 (自动识别数量)",className:"flex-1 bg-white border border-gray-100 p-4 rounded-xl font-bold text-base outline-none shadow-sm focus:border-amber-400 transition-all",value:u,onChange:A=>c(A.target.value),onKeyDown:A=>A.key==="Enter"&&g(u)}),d.jsx("button",{onClick:()=>g(u),className:"w-14 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl shadow-lg active:scale-90 transition-all",children:"＋"})]}),d.jsx("div",{className:"space-y-3",children:t.length===0?d.jsxs("div",{className:"py-20 text-center text-gray-300",children:[d.jsx("span",{className:"text-6xl block mb-4 grayscale opacity-20",children:"🛒"}),d.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",children:"清单空空如也"})]}):t.map(A=>d.jsxs("div",{onClick:()=>S(A.id),className:`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${A.checked?"bg-gray-50 border-transparent opacity-40":"bg-white border-gray-100 shadow-sm hover:border-amber-200"}`,children:[d.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${A.checked?"bg-amber-500 border-amber-500":"border-gray-200 bg-white"}`,children:A.checked&&d.jsx("span",{className:"text-white text-[10px] font-bold",children:"✓"})}),d.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[d.jsx("span",{className:`font-bold text-lg ${A.checked?"line-through text-gray-400":"text-gray-900"}`,children:A.name}),d.jsx("span",{className:"text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded",children:A.amount})]})]},A.id))})]})},nM=({currentView:t,onViewChange:e})=>{const n=[{id:"dashboard",label:"首页",icon:P1,color:"text-orange-500"},{id:"recipes",label:"食谱",icon:D1,color:"text-emerald-500"},{id:"plan",label:"计划",icon:rx,color:"text-indigo-500"},{id:"shopping",label:"清单",icon:sx,color:"text-rose-500"},{id:"inventory",label:"库存",icon:ix,color:"text-cyan-500"}];return d.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 px-6 pb-safe z-[100] h-20 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]",children:d.jsx("div",{className:"flex justify-between items-center h-full max-w-lg mx-auto",children:n.map(r=>{const s=t===r.id,i=r.icon;return d.jsxs("button",{onClick:()=>e(r.id),className:"flex flex-col items-center justify-center w-12 h-full active:scale-95 transition-all",children:[d.jsx("div",{className:`transition-all duration-300 ${s?`${r.color} -translate-y-1`:"text-gray-300"}`,children:d.jsx(i,{className:"w-6 h-6"})}),d.jsx("span",{className:`text-[10px] font-bold mt-1 transition-colors ${s?"text-gray-900":"text-transparent"}`,children:r.label})]},r.id)})})})},rM="modulepreload",sM=function(t,e){return new URL(t,e).href},zv={},iM=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=sM(c,r),c in zv)return;zv[c]=!0;const p=c.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let S=o.length-1;S>=0;S--){const A=o[S];if(A.href===c&&(!p||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const I=document.createElement("link");if(I.rel=p?"stylesheet":rM,p||(I.as="script"),I.crossOrigin="",I.href=c,u&&I.setAttribute("nonce",u),document.head.appendChild(I),p)return new Promise((S,A)=>{I.addEventListener("load",S),I.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},yI=["素菜小炒","肉菜小炒","滋补炖菜","精美甜品","清爽饮品","暖心汤品","美味主食","新鲜水果","其他"],oM=[{id:"1",name:"鸡蛋",amount:12,unit:"个",category:"蛋奶",storageZone:"冷藏",updatedAt:Date.now()},{id:"2",name:"西红柿",amount:3,unit:"个",category:"蔬菜",storageZone:"常温",updatedAt:Date.now()},{id:"3",name:"红富士苹果",amount:5,unit:"个",category:"水果",storageZone:"常温",updatedAt:Date.now()},{id:"4",name:"老抽",amount:1,unit:"瓶",category:"调料",storageZone:"常温",updatedAt:Date.now()},{id:"5",name:"土豆",amount:4,unit:"个",category:"蔬菜",storageZone:"常温",updatedAt:Date.now()},{id:"6",name:"巨峰葡萄",amount:1,unit:"串",category:"水果",storageZone:"冷藏",updatedAt:Date.now()},{id:"7",name:"花生油",amount:5,unit:"升",category:"粮油",storageZone:"常温",updatedAt:Date.now()},{id:"8",name:"干香菇",amount:100,unit:"克",category:"干货",storageZone:"常温",updatedAt:Date.now()}],aM=[{id:"r1",title:"西红柿炒鸡蛋",category:"素菜小炒",description:"国民家常菜，酸甜适口，做法简单。",images:["https://picsum.photos/seed/tomato/800/600"],prepTime:10,cookTime:10,ingredients:[{name:"鸡蛋",amount:3,unit:"个"},{name:"西红柿",amount:2,unit:"个"}],steps:["西红柿切块，鸡蛋打散","热锅炒蛋盛出","炒西红柿出汁","合炒调味"],tags:["简单","经典"]},{id:"r2",title:"元气水果沙拉",category:"新鲜水果",description:"清爽解腻，维C满满。",images:["https://picsum.photos/seed/fruit/800/600"],prepTime:5,cookTime:0,ingredients:[{name:"苹果",amount:1,unit:"个"},{name:"葡萄",amount:10,unit:"颗"},{name:"酸奶",amount:1,unit:"盒"}],steps:["水果切块","倒入酸奶拌匀"],tags:["健康","无火"]}],lM=({onSave:t,onCancel:e,initialRecipe:n})=>{var Q;const[r,s]=W.useState(!1),[i,o]=W.useState((n==null?void 0:n.title)||""),[l,u]=W.useState((n==null?void 0:n.description)||""),[c,p]=W.useState((n==null?void 0:n.category)||"素菜小炒"),[m,g]=W.useState((n==null?void 0:n.images)||[]),[I,S]=W.useState(()=>n!=null&&n.ingredients&&n.ingredients.length>0?n.ingredients:[{name:"",amount:0,unit:"g"}]),[A,O]=W.useState(()=>n!=null&&n.steps&&n.steps.length>0?n.steps:[""]),[E,x]=W.useState(((Q=n==null?void 0:n.source)==null?void 0:Q.url)||""),[k,P]=W.useState(null),[M,D]=W.useState({scale:1,x:0,y:0}),w=W.useRef(!1),y=W.useRef({x:0,y:0}),T=W.useRef({x:0,y:0}),C=W.useRef(null),N=W.useRef(new Map),R=W.useRef(null),_=j=>{const G=j.target.files;G&&Array.from(G).forEach(J=>{const Z=new FileReader;Z.onloadend=()=>g(ze=>[...ze,Z.result]),Z.readAsDataURL(J)})},X=j=>{if(j.target.setPointerCapture(j.pointerId),N.current.set(j.pointerId,{x:j.clientX,y:j.clientY}),N.current.size===1)w.current=!0,y.current={x:j.clientX,y:j.clientY},T.current={x:M.x,y:M.y};else if(N.current.size===2){w.current=!1;const G=Array.from(N.current.values());R.current=Math.hypot(G[0].x-G[1].x,G[0].y-G[1].y)}},se=j=>{if(N.current.has(j.pointerId)){if(N.current.set(j.pointerId,{x:j.clientX,y:j.clientY}),N.current.size===2){const G=Array.from(N.current.values()),J=Math.hypot(G[0].x-G[1].x,G[0].y-G[1].y);if(R.current!==null&&R.current>0){const ze=(J-R.current)*.005;D(Pt=>({...Pt,scale:Math.min(3,Math.max(1,Pt.scale+ze))}))}R.current=J}else if(N.current.size===1&&w.current){const G=j.clientX-y.current.x,J=j.clientY-y.current.y;D(Z=>({...Z,x:T.current.x+G,y:T.current.y+J}))}}},_e=j=>{if(j.target.releasePointerCapture(j.pointerId),N.current.delete(j.pointerId),N.current.size<2&&(R.current=null),N.current.size===1){const G=N.current.values().next().value;y.current={x:G.x,y:G.y},T.current={x:M.x,y:M.y},w.current=!0}else N.current.size===0&&(w.current=!1)},we=async()=>{if(!(k===null||!C.current))try{const{default:j}=await iM(async()=>{const{default:Z}=await import("./html2canvas.esm-CBrSDip1.js");return{default:Z}},[],import.meta.url),J=(await j(C.current,{useCORS:!0,backgroundColor:"#111827",scale:2,logging:!1})).toDataURL("image/jpeg",.85);g(Z=>{const ze=[...Z];return ze[k]=J,ze}),P(null),D({scale:1,x:0,y:0})}catch(j){console.error("Crop failed:",j),alert("图片裁剪失败，请重试")}},z=async()=>{if(!i||m.length===0)return alert("请填写标题并上传图片");s(!0),await t({id:(n==null?void 0:n.id)||"",title:i,description:l,category:c,images:m,prepTime:15,cookTime:20,ingredients:I.filter(G=>G.name),steps:A.filter(G=>G),tags:["家常"],source:E?{type:"link",url:E}:void 0})||s(!1)};return d.jsxs("div",{className:"bg-[#fcfdfe] min-h-screen pb-32 pt-16 animate-in slide-in-from-bottom duration-300",children:[k!==null&&d.jsxs("div",{className:"fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 select-none touch-none",children:[d.jsxs("div",{className:"relative w-full max-w-sm aspect-square shadow-2xl rounded-2xl overflow-hidden border border-white/10",children:[d.jsx("div",{ref:C,className:"w-full h-full bg-gray-900 relative overflow-hidden",children:d.jsx("img",{src:m[k],className:"w-full h-full object-cover origin-center cursor-move",style:{transform:`scale(${M.scale}) translate(${M.x}px, ${M.y}px)`,touchAction:"none"},onPointerDown:X,onPointerMove:se,onPointerUp:_e,onPointerCancel:_e,draggable:!1,alt:"editing"})}),d.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10",children:[d.jsx("div",{className:"absolute top-1/3 left-0 right-0 h-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute top-2/3 left-0 right-0 h-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute left-1/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute left-2/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute inset-0 border border-white/20 rounded-2xl"})]})]}),d.jsxs("div",{className:"mt-8 w-full max-w-sm space-y-6",children:[d.jsxs("div",{className:"flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl",children:[d.jsx("span",{className:"text-white text-xs font-bold w-8",children:"缩放"}),d.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:M.scale,onChange:j=>D({...M,scale:parseFloat(j.target.value)}),className:"flex-1 accent-emerald-500 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"}),d.jsxs("span",{className:"text-white text-xs font-mono w-8 text-right",children:[M.scale.toFixed(1),"x"]})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx("button",{onClick:()=>D({scale:1,x:0,y:0}),className:"flex-1 py-3 bg-gray-800 text-white rounded-xl text-xs font-bold hover:bg-gray-700 transition-colors",children:"重置"}),d.jsx("button",{onClick:we,className:"flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors",children:"确认裁剪"})]}),d.jsx("p",{className:"text-center text-gray-400 text-[10px] font-bold tracking-widest uppercase",children:"单指拖拽 • 双指缩放"})]})]}),d.jsxs("header",{className:"fixed top-0 left-0 right-0 lg:left-64 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 px-6 h-16 flex justify-between items-center",children:[d.jsx("button",{onClick:e,className:"text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors",children:"取消"}),d.jsx("h2",{className:"text-sm font-black text-gray-900",children:"记录美味"}),d.jsx("button",{onClick:z,disabled:r,className:"px-5 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors",children:r?"...":"发布"})]}),d.jsxs("div",{className:"max-w-2xl mx-auto px-5 space-y-8 mt-4",children:[d.jsx("section",{children:d.jsxs("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2",children:[d.jsxs("label",{className:"shrink-0 w-24 h-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all hover:bg-gray-100 hover:border-emerald-200",children:[d.jsx("span",{className:"text-xl text-gray-400",children:"＋"}),d.jsx("span",{className:"text-[10px] font-bold text-gray-400 mt-1",children:"添加"}),d.jsx("input",{type:"file",className:"hidden",accept:"image/*",multiple:!0,onChange:_})]}),m.map((j,G)=>d.jsxs("div",{onClick:()=>{P(G),D({scale:1,x:0,y:0})},className:"shrink-0 w-24 h-24 bg-gray-100 rounded-xl relative overflow-hidden group border border-gray-100 cursor-pointer shadow-sm",children:[d.jsx("img",{src:j,className:"w-full h-full object-cover",alt:"recipe thumb"}),d.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition-opacity backdrop-blur-[2px]",children:"点击裁剪"}),G===0&&d.jsx("span",{className:"absolute bottom-1 left-1 px-1.5 py-0.5 bg-emerald-500 text-white text-[8px] font-bold rounded",children:"封面"}),d.jsx("button",{onClick:J=>{J.stopPropagation(),g(m.filter((Z,ze)=>ze!==G))},className:"absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-red-500 transition-colors",children:"✕"})]},G))]})}),d.jsxs("section",{className:"space-y-4",children:[d.jsx("input",{type:"text",placeholder:"给这道菜起个名字",className:"w-full text-2xl font-black outline-none placeholder:text-gray-300 bg-transparent border-b border-gray-100 pb-2 focus:border-emerald-500 transition-colors",value:i,onChange:j=>o(j.target.value)}),d.jsx("textarea",{placeholder:"写下你的烹饪心得...",className:"w-full bg-gray-50/50 p-4 rounded-xl h-24 outline-none resize-none text-sm font-medium leading-relaxed focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:l,onChange:j=>u(j.target.value)}),d.jsx("div",{className:"flex flex-wrap gap-2",children:yI.map(j=>d.jsx("button",{onClick:()=>p(j),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${c===j?"bg-emerald-600 text-white border-emerald-600 shadow-md":"bg-white text-gray-500 border-gray-100 hover:border-emerald-200"}`,children:j},j))})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"font-black text-sm text-gray-900",children:"食材清单"}),d.jsxs("span",{className:"text-[10px] font-bold text-gray-400",children:[I.length," 项"]})]}),d.jsxs("div",{className:"space-y-2",children:[I.map((j,G)=>d.jsxs("div",{className:"flex gap-2 items-center",children:[d.jsx("input",{type:"text",placeholder:"食材名 (如: 牛肉)",className:"flex-[3] bg-gray-50 px-3 py-3 rounded-xl text-sm font-bold outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.name,onChange:J=>{const Z=[...I];Z[G].name=J.target.value,S(Z)}}),d.jsx("input",{type:"number",placeholder:"数量",className:"flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.amount||"",onChange:J=>{const Z=[...I];Z[G].amount=Number(J.target.value),S(Z)}}),d.jsx("input",{type:"text",placeholder:"单位",className:"flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.unit,onChange:J=>{const Z=[...I];Z[G].unit=J.target.value,S(Z)}}),d.jsx("button",{onClick:()=>S(I.filter((J,Z)=>Z!==G)),className:"w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors",children:"✕"})]},G)),d.jsx("button",{onClick:()=>S([...I,{name:"",amount:0,unit:"g"}]),className:"w-full py-3 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black hover:bg-emerald-100 transition-colors",children:"+ 添加一行"})]})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"font-black text-sm text-gray-900",children:"制作步骤"}),d.jsxs("span",{className:"text-[10px] font-bold text-gray-400",children:[A.length," 步"]})]}),d.jsxs("div",{className:"space-y-3",children:[A.map((j,G)=>d.jsxs("div",{className:"flex gap-3 items-start group",children:[d.jsx("span",{className:"w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1 shadow-sm",children:G+1}),d.jsx("textarea",{placeholder:"描述步骤...",className:"flex-1 bg-gray-50 p-3 rounded-xl text-sm outline-none resize-none font-medium min-h-[80px] focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j,onChange:J=>{const Z=[...A];Z[G]=J.target.value,O(Z)}}),d.jsx("button",{onClick:()=>O(A.filter((J,Z)=>Z!==G)),className:"text-gray-300 hover:text-red-500 pt-2 opacity-50 group-hover:opacity-100 transition-opacity",children:"✕"})]},G)),d.jsx("button",{onClick:()=>O([...A,""]),className:"w-full py-3 bg-gray-50 text-gray-400 rounded-xl text-xs font-black hover:bg-gray-100 transition-colors",children:"+ 添加步骤"})]})]}),d.jsx("section",{className:"pb-8",children:d.jsx("input",{type:"text",placeholder:"粘贴灵感来源链接 (可选)...",className:"w-full bg-gray-50 px-4 py-3 rounded-xl text-xs outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all text-gray-600",value:E,onChange:j=>x(j.target.value)})})]})]})},uM=({userProfile:t,onUpdateProfile:e,recipes:n,inventory:r,onLogout:s})=>{const[i,o]=W.useState(!1),[l,u]=W.useState(t.name),[c,p]=W.useState(t.role),[m,g]=W.useState(""),[I,S]=W.useState(!1),A=W.useRef(null),O=W.useRef(null),E=()=>{e({name:l,role:c}),o(!1)},x=async()=>{if(t.pairCode){alert("您已经拥有家庭配对码。");return}S(!0);try{const w=$t.generatePairCode(),y=await $t.joinFamily(w);y.success?(e({pairCode:y.familyCode||w}),alert("🎉 家庭已创建并加入成功！把配对码发给家人即可同步。")):alert(`创建失败：${y.error||"未知错误"}`)}finally{S(!1)}},k=async()=>{if(m){S(!0);try{const w=await $t.joinFamily(m);if(w.success){const y=w.familyCode||m.trim().toUpperCase();e({pairCode:y}),alert("🎉 连接成功！在另一台设备/另一个浏览器输入同一个配对码，就会实时同步。")}else alert(`连接失败：${w.error||"请检查配对码是否正确"}`)}finally{S(!1)}}},P=()=>{const w={ht_inventory:localStorage.getItem("ht_inventory"),ht_recipes:localStorage.getItem("ht_recipes"),ht_plans:localStorage.getItem("ht_plans"),ht_shopping:localStorage.getItem("ht_shopping"),ht_history:localStorage.getItem("ht_history"),ht_profile:localStorage.getItem("ht_profile"),backup_date:new Date().toISOString(),version:"1.0"},y=new Blob([JSON.stringify(w,null,2)],{type:"application/json"}),T=URL.createObjectURL(y),C=document.createElement("a");C.href=T,C.download=`hometaste_backup_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(T)},M=w=>{var C;const y=(C=w.target.files)==null?void 0:C[0];if(!y)return;const T=new FileReader;T.onload=N=>{var R;try{const _=JSON.parse((R=N.target)==null?void 0:R.result);_.version&&_.ht_recipes?confirm("导入备份将覆盖当前所有数据，确定要继续吗？")&&(_.ht_inventory&&localStorage.setItem("ht_inventory",_.ht_inventory),_.ht_recipes&&localStorage.setItem("ht_recipes",_.ht_recipes),_.ht_plans&&localStorage.setItem("ht_plans",_.ht_plans),_.ht_shopping&&localStorage.setItem("ht_shopping",_.ht_shopping),_.ht_history&&localStorage.setItem("ht_history",_.ht_history),_.ht_profile&&localStorage.setItem("ht_profile",_.ht_profile),alert("数据导入成功！即将刷新页面..."),window.location.reload()):alert("无效的备份文件格式")}catch(_){alert("解析备份文件失败"),console.error(_)}},T.readAsText(y)},D=async w=>{var T;const y=(T=w.target.files)==null?void 0:T[0];if(y)try{const C=await new Promise((N,R)=>{const _=new FileReader;_.readAsDataURL(y),_.onload=X=>{var _e;const se=new Image;se.src=(_e=X.target)==null?void 0:_e.result,se.onload=()=>{const we=document.createElement("canvas"),z=300;let Q=se.width,j=se.height;Q>z&&(j=Math.round(j*z/Q),Q=z),we.width=Q,we.height=j;const G=we.getContext("2d");if(!G){R(new Error("Canvas context not supported"));return}G.drawImage(se,0,0,Q,j),N(we.toDataURL("image/jpeg",.7))},se.onerror=we=>R(we)},_.onerror=X=>R(X)});e({avatar:C})}catch(C){console.error("Image processing failed:",C),alert("图片处理失败，请尝试换一张图片。")}};return d.jsxs("div",{className:"p-6 lg:p-10 space-y-8 max-w-4xl mx-auto pb-64 animate-in fade-in duration-500",children:[d.jsx("header",{children:d.jsx("h2",{className:"text-2xl font-black italic",children:"Settings"})}),d.jsx("section",{className:"bg-white p-6 rounded-3xl border border-gray-100 shadow-sm",children:d.jsxs("div",{className:"flex items-center gap-6",children:[d.jsxs("div",{className:"relative shrink-0",children:[d.jsxs("div",{className:"w-20 h-20 rounded-2xl border-2 border-gray-100 overflow-hidden relative group",children:[d.jsx("img",{src:t.avatar,className:"w-full h-full object-cover",alt:""}),d.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity",onClick:()=>{var w;return(w=A.current)==null?void 0:w.click()},children:d.jsx("span",{className:"text-white text-[9px] font-bold",children:"更换"})})]}),d.jsx("input",{type:"file",ref:A,className:"hidden",accept:"image/*",onChange:D})]}),d.jsx("div",{className:"flex-1 min-w-0",children:i?d.jsxs("div",{className:"flex gap-3",children:[d.jsxs("div",{className:"space-y-2 flex-1",children:[d.jsx("input",{className:"text-lg font-black text-gray-900 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none",value:l,onChange:w=>u(w.target.value),placeholder:"称呼"}),d.jsx("input",{className:"text-xs font-bold text-gray-500 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none",value:c,onChange:w=>p(w.target.value),placeholder:"身份"})]}),d.jsxs("div",{className:"flex flex-col gap-2 justify-center",children:[d.jsx("button",{onClick:E,className:"px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg",children:"保存"}),d.jsx("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded-lg",children:"取消"})]})]}):d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-xl font-black text-gray-900",children:t.name}),d.jsx("p",{className:"text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1",children:t.role})]}),d.jsx("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-gray-50 text-gray-400 text-xs font-bold rounded-xl border border-gray-100",children:"编辑"})]})})]})}),d.jsxs("section",{className:"bg-emerald-950 p-6 rounded-3xl text-white space-y-6 shadow-xl overflow-hidden relative",children:[d.jsxs("div",{className:"relative z-10",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[d.jsx("h3",{className:"text-lg font-black italic",children:"家庭同步"}),t.pairCode?d.jsxs("div",{className:"bg-white/10 px-4 py-2 rounded-lg border border-white/10",children:[d.jsx("p",{className:"text-[9px] font-bold uppercase opacity-50 mb-0.5",children:"我的配对码"}),d.jsx("p",{className:"text-lg font-mono font-bold tracking-widest",children:t.pairCode})]}):d.jsx("button",{onClick:x,className:"px-4 py-2 bg-emerald-600 rounded-lg text-xs font-bold shadow hover:bg-emerald-500",children:"创建新家庭"})]}),t.partner?d.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10",children:[d.jsx("img",{src:t.partner.avatar,className:"w-12 h-12 rounded-xl border border-white/20",alt:""}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white",children:t.partner.name}),d.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"}),d.jsx("p",{className:"text-[10px] uppercase tracking-wider opacity-60",children:"已实时同步"})]})]})]}):d.jsxs("div",{className:"space-y-3",children:[d.jsx("p",{className:"text-xs opacity-60",children:"输入伴侣的配对码以加入家庭："}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("input",{type:"text",placeholder:"例如: HT-ABC123",className:"bg-white/10 px-4 py-3 rounded-xl outline-none text-white font-mono font-bold flex-1 border border-white/10 text-sm placeholder:text-white/20",value:m,onChange:w=>g(w.target.value)}),d.jsx("button",{onClick:k,disabled:I,className:"bg-emerald-500 px-6 py-3 rounded-xl text-xs font-bold shadow-lg hover:bg-emerald-400 transition-colors disabled:opacity-50",children:I?"连接中...":"连接"})]}),t.pairCode&&d.jsx("p",{className:"text-[10px] opacity-40 italic",children:" * 云同步模式：在另一台设备输入相同配对码即可共享同一家庭数据。"})]})]}),d.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"})]}),d.jsxs("section",{className:"bg-gray-50 p-6 rounded-3xl border border-gray-100",children:[d.jsx("h3",{className:"text-sm font-black text-gray-900 mb-4 flex items-center gap-2",children:d.jsx("span",{children:"💾 数据备份"})}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsx("button",{onClick:P,className:"py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm",children:"📤 导出数据备份"}),d.jsx("button",{onClick:()=>{var w;return(w=O.current)==null?void 0:w.click()},className:"py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm",children:"📥 导入恢复数据"}),d.jsx("input",{type:"file",ref:O,className:"hidden",accept:".json",onChange:M})]})]}),d.jsx("button",{onClick:s,className:"w-full py-4 bg-red-50 text-red-500 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all",children:"退出登录"})]})},cM=async(t,e)=>(console.warn("未检测到 API_KEY，切换至随机推荐模式。"),await new Promise(r=>setTimeout(r,1e3)),e.length===0?[]:[...e].sort(()=>.5-Math.random()).slice(0,2).map(r=>r.id)),hM=async t=>{throw console.warn("No API Key, skipping image analysis"),new Error("API Key missing")};function Co(t,e,n){const[r,s]=W.useState(()=>{try{const u=localStorage.getItem(t);return u?JSON.parse(u):e}catch{return e}}),i=W.useRef(!1),o=W.useRef(r),l=W.useRef(!1);return W.useEffect(()=>{o.current=r},[r]),W.useEffect(()=>{if(!n)return;l.current=!1;let u=null;return(async()=>{u=await $t.subscribeToData(n,t,c=>{l.current=!0,c!==null&&JSON.stringify(c)!==JSON.stringify(o.current)&&(i.current=!0,s(c))})})().catch(console.error),()=>{u&&u()}},[n,t]),W.useEffect(()=>{try{localStorage.setItem(t,JSON.stringify(r))}catch(u){console.warn("LocalStorage save failed (Quota Exceeded?):",u)}n&&l.current&&!i.current&&$t.pushData(n,t,r),i.current=!1},[t,r,n]),[r,s]}const dM=()=>{const[t,e]=W.useState("dashboard"),[n,r]=W.useState(null),[s,i]=W.useState(()=>{try{const K=localStorage.getItem("ht_profile");return K?JSON.parse(K):{name:"美食主理人",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",role:"高级厨师",pairCode:""}}catch{return{name:"美食主理人",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",role:"高级厨师",pairCode:""}}}),[o,l]=W.useState("");W.useEffect(()=>{eM().then(l).catch(console.error)},[]);const u=s.pairCode;W.useEffect(()=>{if(!u||!o)return;let K=null;return(async()=>{K=await $t.subscribeToActivity(u,H=>{if(H.actorUid===o)return;const te=`👤 ${H.actorName||"家人"} ${H.action}了${H.targetType}：${H.targetName}`;r(te),setTimeout(()=>r(oe=>oe===te?null:oe),2500)})})().catch(console.error),()=>{K&&K()}},[u,o]);const[c,p]=Co("ht_inventory",oM,u),[m,g]=Co("ht_recipes",aM,u),[I,S]=Co("ht_plans",{},u),[A,O]=Co("ht_shopping",[],u),[E,x]=Co("ht_history",[],u),[k,P]=W.useState(void 0);W.useEffect(()=>{if(!u||!o)return;let K=null;return(async()=>{K=await $t.subscribeToData(u,"users",H=>{if(!H||typeof H!="object"){P(void 0);return}const oe=Object.entries(H).find(([jn])=>jn!==o);if(!oe){P(void 0);return}const[,Le]=oe;P({name:(Le==null?void 0:Le.name)||"伙伴",avatar:(Le==null?void 0:Le.avatar)||"",isOnline:!!(Le!=null&&Le.isOnline)})})})().catch(console.error),()=>{K&&K()}},[u,o]),W.useEffect(()=>{try{localStorage.setItem("ht_profile",JSON.stringify(s)),u&&o&&$t.updateUserStatus(u,o,{name:s.name,avatar:s.avatar,isOnline:!0})}catch(K){console.error("Profile Save Error:",K)}},[s,u,o]);const[M,D]=W.useState(null),[w,y]=W.useState([]),[T,C]=W.useState(!1),[N,R]=W.useState(!1),[_,X]=W.useState(""),[se,_e]=W.useState("全部"),we=["全部",...yI],z=async()=>{if(m.length===0){alert("请先添加一些食谱，AI 才能为您推荐哦！");return}C(!0);const K=Date.now();try{const H=await cM(c,m),te=Date.now()-K;te<800&&await new Promise(oe=>setTimeout(oe,800-te)),y(H),H.length===0&&alert("AI 暂时没有找到非常匹配的食谱，试试补充一下冰箱或者添加更多食谱？")}catch(H){console.error("AI 推荐失败",H),alert("获取灵感失败，可能是网络问题，请稍后再试。")}finally{C(!1)}},Q=W.useMemo(()=>m.filter(K=>w.includes(K.id)),[m,w]),j=W.useMemo(()=>m.filter(K=>{const H=K.title.toLowerCase().includes(_.toLowerCase())||K.ingredients.some(oe=>oe.name.toLowerCase().includes(_.toLowerCase())),te=se==="全部"||K.category===se;return H&&te}),[m,_,se]),G=async K=>{const H={...s,...K};i(H),K.pairCode&&K.pairCode!==s.pairCode&&(await $t.initializeCloudData(K.pairCode,{ht_inventory:c,ht_recipes:m,ht_plans:I,ht_shopping:A,ht_history:E}),alert("家庭连接成功！数据已开始同步。"))},J=K=>{const H={id:Date.now().toString()+Math.random(),name:K.name||"未知食材",amount:K.amount||0,unit:K.unit||"单位",category:K.category||"其他",storageZone:K.storageZone||"常温",updatedAt:Date.now()};p(te=>[H,...te]),u&&o&&$t.logActivity(u,{actorUid:o,actorName:s.name,action:"新增",targetType:"食材",targetName:H.name}).catch(console.error)},Z=(K,H)=>{p(te=>te.map(oe=>oe.id===K?{...oe,amount:H,updatedAt:Date.now()}:oe))},ze=K=>{const H=c.find(te=>te.id===K);p(te=>te.filter(oe=>oe.id!==K)),u&&o&&H&&$t.logActivity(u,{actorUid:o,actorName:s.name,action:"删除",targetType:"食材",targetName:H.name}).catch(console.error)},Pt=async K=>{R(!0);try{const H=await hM(K);H&&H.length>0?H.forEach(te=>J(te)):alert("AI 未能识别出食材，请确保图片清晰。")}catch{alert("AI 服务暂时不可用，请手动录入。")}finally{R(!1)}},sn=(K,H)=>{S(te=>({...te,[H]:[...te[H]||[],K]}))},on=(K,H)=>{S(te=>({...te,[H]:(te[H]||[]).filter(oe=>oe!==K)}))},ah=K=>{p(H=>H.map(te=>{const oe=K.find(Le=>Le.name===te.name);return oe?{...te,amount:Math.max(0,te.amount-oe.amount),updatedAt:Date.now()}:te}))},lh=K=>{const H=I[K]||[],te=m.filter(oe=>H.includes(oe.id)).map(oe=>oe.title);te.length>0&&x(oe=>[...oe,{date:K,recipeTitles:te}])},js=(K,H,te)=>{g(oe=>oe.map(Le=>{if(Le.id===K){const jn=(Le.reviewCount||0)+1,Fs=(Le.appetizingCount||0)+1;return{...Le,rating:((Le.rating||5)*(jn-1)+H)/jn,reviewCount:jn,appetizingRating:((Le.appetizingRating||5)*(Fs-1)+te)/Fs,appetizingCount:Fs}}return Le}))},Vs=async K=>{const H=!!K.id;return K.id?g(te=>te.map(oe=>oe.id===K.id?K:oe)):g(te=>[...te,{...K,id:Date.now().toString()}]),u&&o&&$t.logActivity(u,{actorUid:o,actorName:s.name,action:H?"更新":"新增",targetType:"食谱",targetName:K.title||"未命名食谱"}).catch(console.error),e("recipes"),D(null),!0},Ft=K=>{D(null),e(K)},Yi=()=>{if(M&&t!=="add-recipe")return d.jsx(B1,{recipe:M,inventory:c,plans:I,onBack:()=>D(null),onPlan:sn,onEdit:()=>e("add-recipe")});switch(t){case"dashboard":return d.jsxs("div",{className:"p-5 lg:p-10 space-y-6 max-w-5xl mx-auto pb-32",children:[d.jsxs("header",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 tracking-tight italic",children:"家庭概览"}),u&&d.jsxs("div",{className:"flex items-center gap-2 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100 animate-pulse",children:[d.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full"}),d.jsx("span",{className:"text-[10px] font-bold text-emerald-700",children:"实时同步中"})]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[d.jsxs("div",{onClick:()=>Ft("inventory"),className:"bg-emerald-800 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(ix,{className:"w-8 h-8 text-emerald-200"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"食材储备"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:c.length})]}),d.jsxs("div",{onClick:()=>Ft("plan"),className:"bg-amber-600 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(rx,{className:"w-8 h-8 text-amber-200"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"今日计划"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:(I[new Date().toISOString().split("T")[0]]||[]).length})]}),d.jsxs("div",{onClick:()=>Ft("shopping"),className:"bg-gray-900 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(sx,{className:"w-8 h-8 text-gray-400"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"同步采购"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:A.filter(H=>!H.checked).length})]})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsx("h3",{className:"text-xs font-black text-gray-400 tracking-widest",children:"AI 灵感工坊"}),!T&&w.length>0&&d.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x animate-in fade-in slide-in-from-bottom-2",children:Q.map(H=>{var te;return d.jsxs("div",{onClick:()=>D(H),className:"shrink-0 w-48 h-28 rounded-2xl relative overflow-hidden group cursor-pointer snap-center shadow-sm border border-gray-100",children:[d.jsx("img",{src:H.images[0],className:"absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110",alt:""}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"}),d.jsx("div",{className:"absolute top-2 right-2 flex flex-col items-end gap-1",children:d.jsxs("div",{className:"bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-white/10",children:[d.jsx("span",{className:"text-[8px] text-amber-400",children:"★"}),d.jsx("span",{className:"text-[8px] font-bold text-white",children:((te=H.rating)==null?void 0:te.toFixed(1))||"5.0"})]})}),d.jsxs("div",{className:"absolute bottom-3 left-3 right-3",children:[d.jsx("span",{className:"text-[8px] font-bold text-emerald-300 uppercase tracking-wider mb-0.5 block",children:"今日推荐"}),d.jsx("h4",{className:"text-white font-bold text-sm truncate",children:H.title})]})]},H.id)})}),d.jsxs("button",{onClick:z,className:`w-full group relative overflow-hidden bg-emerald-950/90 py-4 rounded-2xl text-center transition-all ${T?"cursor-wait opacity-80":"hover:bg-black active:scale-[0.98]"}`,children:[d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx("span",{className:`${T?"animate-spin":""} text-2xl`,children:T?d.jsx(L1,{className:"w-6 h-6 text-emerald-400"}):d.jsx(O1,{className:"w-6 h-6 text-emerald-400"})}),d.jsx("span",{className:"text-white font-bold text-sm",children:T?"正在分析库存与口味...":"获取今日灵感"})]}),T&&d.jsx("div",{className:"absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-full animate-[loading_2s_infinite]"})]})]})]});case"inventory":return d.jsx(j1,{inventory:c,onAdd:J,onUpdate:Z,onDelete:ze,onAIScan:Pt,isScanning:N});case"recipes":return d.jsxs("div",{className:"p-5 lg:p-10 space-y-6 max-w-6xl mx-auto pb-32",children:[d.jsx("h2",{className:"text-2xl font-black text-center text-gray-900 italic",children:"私房食谱库"}),d.jsxs("div",{className:"flex flex-col gap-4",children:[d.jsxs("div",{className:"relative group w-full",children:[d.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm",children:"🔍"}),d.jsx("input",{type:"text",placeholder:"搜索...",className:"w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm focus:border-emerald-400 transition-all",value:_,onChange:H=>X(H.target.value)})]}),d.jsx("button",{onClick:()=>Ft("add-recipe"),className:"w-full py-3 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-md",children:"＋ 记录新菜谱"}),d.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar pb-1",children:we.map(H=>d.jsx("button",{onClick:()=>_e(H),className:`shrink-0 px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${se===H?"bg-emerald-600 text-white shadow-sm":"bg-white border border-gray-100 text-gray-500"}`,children:H},H))})]}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-4",children:j.map(H=>{var te,oe;return d.jsxs("div",{onClick:()=>D(H),className:"bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm transition-all cursor-pointer group",children:[d.jsxs("div",{className:"aspect-[4/3] overflow-hidden relative",children:[d.jsx("img",{src:(te=H.images)==null?void 0:te[0],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",alt:H.title}),d.jsxs("div",{className:"absolute top-2 right-2 flex flex-col items-end gap-1.5",children:[d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm",children:[d.jsx("span",{className:"text-[10px] text-amber-400",children:"★"}),d.jsx("span",{className:"text-[10px] font-bold text-white leading-none",children:((oe=H.rating)==null?void 0:oe.toFixed(1))||"5.0"})]}),d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm",children:[d.jsx("span",{className:"text-[10px] text-orange-200",children:"🍚"}),d.jsx("span",{className:"text-[10px] font-bold text-white leading-none",children:H.appetizingRating?H.appetizingRating.toFixed(1):"5.0"})]})]})]}),d.jsxs("div",{className:"p-4",children:[d.jsx("span",{className:"text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-1.5 inline-block",children:H.category}),d.jsx("h3",{className:"font-bold text-gray-800 text-sm leading-tight line-clamp-1",children:H.title})]})]},H.id)})})]});case"plan":return d.jsx(z1,{plans:I,recipes:m,inventory:c,onRemoveFromPlan:on,onArchive:lh,onAddItemsToShopping:H=>O(te=>[...H.map(oe=>({...oe,id:Date.now().toString()+Math.random(),checked:!1,addedAt:Date.now()})),...te]),onDeductInventory:ah,onRecipeFeedback:js,history:E});case"shopping":return d.jsx(tM,{list:A,onUpdate:O,plans:I,recipes:m,inventory:c,pairCode:u,uid:o,actorName:s.name});case"settings":const K={...s,partner:k};return d.jsx(uM,{userProfile:K,onUpdateProfile:G,recipes:m,inventory:c,onLogout:()=>{}});case"add-recipe":return d.jsx(lM,{onSave:Vs,onCancel:()=>Ft("recipes"),initialRecipe:M||void 0});default:return null}},ts=M||t==="add-recipe";return d.jsxs("div",{className:"min-h-screen bg-[#fcfdfe] lg:pl-64",children:[n&&d.jsx("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-[200] bg-black/80 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg",children:n.text}),!ts&&d.jsxs("header",{className:"fixed top-0 left-0 right-0 lg:left-64 z-[80] h-14 px-5 lg:px-10 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-gray-100/50",children:[d.jsx("div",{className:"flex items-center",children:d.jsxs("h1",{onClick:()=>Ft("dashboard"),className:"text-lg font-black text-gray-900 tracking-tighter italic cursor-pointer select-none",children:["HOMETASTE",d.jsx("span",{className:"text-emerald-500",children:"."})]})}),d.jsxs("button",{onClick:()=>Ft("settings"),className:"w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-gray-50 relative",children:[d.jsx("img",{src:s.avatar,className:"w-full h-full object-cover",alt:"Profile"}),u&&d.jsx("div",{className:"absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"})]})]}),d.jsx(v1,{currentView:t,onViewChange:Ft,userProfile:s}),d.jsx("main",{className:`relative transition-all duration-300 ${ts?"":"pt-16"}`,children:Yi()}),!ts&&d.jsx("div",{className:"lg:hidden",children:d.jsx(nM,{currentView:t,onViewChange:Ft})}),d.jsx("style",{children:`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `})]})},Km=document.getElementById("root");if(!Km)throw new Error("Could not find root element to mount to");Km.innerHTML="";const fM=_d.createRoot(Km);fM.render(d.jsx(lC.StrictMode,{children:d.jsx(dM,{})}));const $v=document.getElementById("loading-screen");$v&&$v.remove();
