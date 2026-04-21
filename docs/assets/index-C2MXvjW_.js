(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function DT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bv={exports:{}},lc={},Pv={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),OT=Symbol.for("react.portal"),MT=Symbol.for("react.fragment"),LT=Symbol.for("react.strict_mode"),jT=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),FT=Symbol.for("react.context"),UT=Symbol.for("react.forward_ref"),BT=Symbol.for("react.suspense"),zT=Symbol.for("react.memo"),$T=Symbol.for("react.lazy"),jg=Symbol.iterator;function WT(t){return t===null||typeof t!="object"?null:(t=jg&&t[jg]||t["@@iterator"],typeof t=="function"?t:null)}var Dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Mv={};function Li(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Dv}Li.prototype.isReactComponent={};Li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lv(){}Lv.prototype=Li.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Dv}var jf=Lf.prototype=new Lv;jf.constructor=Lf;Ov(jf,Li.prototype);jf.isPureReactComponent=!0;var Vg=Array.isArray,jv=Object.prototype.hasOwnProperty,Vf={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function Fv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)jv.call(e,r)&&!Vv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ra,type:t,key:i,ref:o,props:s,_owner:Vf.current}}function HT(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function GT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fg=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GT(""+t.key):e.toString(36)}function Vl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case OT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+wh(o,0):r,Vg(s)?(n="",t!=null&&(n=t.replace(Fg,"$&/")+"/"),Vl(s,e,n,"",function(c){return c})):s!=null&&(Ff(s)&&(s=HT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Fg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Vg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+wh(i,l);o+=Vl(i,e,n,u,s)}else if(u=WT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+wh(i,l++),o+=Vl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var r=[],s=0;return Vl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function qT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Fl={transition:null},KT={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Fl,ReactCurrentOwner:Vf};he.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Li;he.Fragment=MT;he.Profiler=jT;he.PureComponent=Lf;he.StrictMode=LT;he.Suspense=BT;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KT;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ov({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Vf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)jv.call(e,u)&&!Vv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ra,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:FT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VT,_context:t},t.Consumer=t};he.createElement=Fv;he.createFactory=function(t){var e=Fv.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:UT,render:t}};he.isValidElement=Ff;he.lazy=function(t){return{$$typeof:$T,_payload:{_status:-1,_result:t},_init:qT}};he.memo=function(t,e){return{$$typeof:zT,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Fl.transition;Fl.transition={};try{t()}finally{Fl.transition=e}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(t,e){return Rt.current.useCallback(t,e)};he.useContext=function(t){return Rt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Rt.current.useEffect(t,e)};he.useId=function(){return Rt.current.useId()};he.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Rt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};he.useRef=function(t){return Rt.current.useRef(t)};he.useState=function(t){return Rt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Rt.current.useTransition()};he.version="18.2.0";Pv.exports=he;var W=Pv.exports;const QT=DT(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YT=W,XT=Symbol.for("react.element"),JT=Symbol.for("react.fragment"),ZT=Object.prototype.hasOwnProperty,eC=YT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tC={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZT.call(e,r)&&!tC.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:XT,type:t,key:i,ref:o,props:s,_owner:eC.current}}lc.Fragment=JT;lc.jsx=Uv;lc.jsxs=Uv;bv.exports=lc;var d=bv.exports,ud={},Bv={exports:{}},qt={},zv={exports:{}},$v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var j=z.length;z.push(Q);e:for(;0<j;){var G=j-1>>>1,J=z[G];if(0<s(J,Q))z[G]=Q,z[j]=J,j=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],j=z.pop();if(j!==Q){z[0]=j;e:for(var G=0,J=z.length,Z=J>>>1;G<Z;){var ze=2*(G+1)-1,Pt=z[ze],rn=ze+1,sn=z[rn];if(0>s(Pt,j))rn<J&&0>s(sn,Pt)?(z[G]=sn,z[rn]=j,G=rn):(z[G]=Pt,z[ze]=j,G=ze);else if(rn<J&&0>s(sn,j))z[G]=sn,z[rn]=j,G=rn;else break e}}return Q}function s(z,Q){var j=z.sortIndex-Q.sortIndex;return j!==0?j:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,T=!1,C=!1,A=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(z){if(A=!1,N(z),!C)if(n(u)!==null)C=!0,_e(O);else{var Q=n(c);Q!==null&&we(D,Q.startTime-z)}}function O(z,Q){C=!1,A&&(A=!1,S(y),y=-1),T=!0;var j=g;try{for(N(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!k());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var J=G(m.expirationTime<=Q);Q=t.unstable_now(),typeof J=="function"?m.callback=J:m===n(u)&&r(u),N(Q)}else r(u);m=n(u)}if(m!==null)var Z=!0;else{var ze=n(c);ze!==null&&we(D,ze.startTime-Q),Z=!1}return Z}finally{m=null,g=j,T=!1}}var b=!1,w=null,y=-1,x=5,I=-1;function k(){return!(t.unstable_now()-I<x)}function R(){if(w!==null){var z=t.unstable_now();I=z;var Q=!0;try{Q=w(!0,z)}finally{Q?_():(b=!1,w=null)}}else b=!1}var _;if(typeof E=="function")_=function(){E(R)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,se=X.port2;X.port1.onmessage=R,_=function(){se.postMessage(null)}}else _=function(){L(R,0)};function _e(z){w=z,b||(b=!0,_())}function we(z,Q){y=L(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||T||(C=!0,_e(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var j=g;g=Q;try{return z()}finally{g=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=g;g=z;try{return Q()}finally{g=j}},t.unstable_scheduleCallback=function(z,Q,j){var G=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?G+j:G):j=G,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=j+J,z={id:p++,callback:Q,priorityLevel:z,startTime:j,expirationTime:J,sortIndex:-1},j>G?(z.sortIndex=j,e(c,z),n(u)===null&&z===n(c)&&(A?(S(y),y=-1):A=!0,we(D,j-G))):(z.sortIndex=J,e(u,z),C||T||(C=!0,_e(O))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Q=g;return function(){var j=g;g=Q;try{return z.apply(this,arguments)}finally{g=j}}}})($v);zv.exports=$v;var nC=zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=W,Gt=nC;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hv=new Set,Ko={};function Ns(t,e){gi(t,e),gi(t+"Capture",e)}function gi(t,e){for(Ko[t]=e,t=0;t<e.length;t++)Hv.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,rC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},Bg={};function sC(t){return cd.call(Bg,t)?!0:cd.call(Ug,t)?!1:rC.test(t)?Bg[t]=!0:(Ug[t]=!0,!1)}function iC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oC(t,e,n,r){if(e===null||typeof e>"u"||iC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Bf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,Bf);ct[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,Bf);ct[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,Bf);ct[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,r){var s=ct.hasOwnProperty(e)?ct[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oC(e,n,s,r)&&(n=null),r||s===null?sC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),$f=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),Hf=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Kv=Symbol.for("react.offscreen"),zg=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,xh;function Io(t){if(xh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xh=e&&e[1]||""}return`
`+xh+t}var Eh=!1;function Ih(t,e){if(!t||Eh)return"";Eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Eh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function aC(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=Ih(t.type,!1),t;case 11:return t=Ih(t.type.render,!1),t;case 1:return t=Ih(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Ws:return"Portal";case hd:return"Profiler";case $f:return"StrictMode";case dd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qv:return(t.displayName||"Context")+".Consumer";case Gv:return(t._context.displayName||"Context")+".Provider";case Wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hf:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function lC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===$f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uC(t){var e=Qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=uC(t))}function Yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $g(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xv(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function gd(t,e){Xv(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function si(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(To(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function Jv(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,e0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cC=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){cC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function t0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function n0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=t0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var hC=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wd(t,e){if(e){if(hC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function Gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Id=null,ii=null,oi=null;function qg(t){if(t=Da(t)){if(typeof Id!="function")throw Error(F(280));var e=t.stateNode;e&&(e=fc(e),Id(t.stateNode,t.type,e))}}function r0(t){ii?oi?oi.push(t):oi=[t]:ii=t}function s0(){if(ii){var t=ii,e=oi;if(oi=ii=null,qg(t),e)for(t=0;t<e.length;t++)qg(e[t])}}function i0(t,e){return t(e)}function o0(){}var Th=!1;function a0(t,e,n){if(Th)return t(e,n);Th=!0;try{return i0(t,e,n)}finally{Th=!1,(ii!==null||oi!==null)&&(o0(),s0())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var r=fc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Td=!1;if(Qn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Td=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Td=!1}function dC(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Ro=!1,au=null,lu=!1,Cd=null,fC={onError:function(t){Ro=!0,au=t}};function pC(t,e,n,r,s,i,o,l,u){Ro=!1,au=null,dC.apply(fC,arguments)}function mC(t,e,n,r,s,i,o,l,u){if(pC.apply(this,arguments),Ro){if(Ro){var c=au;Ro=!1,au=null}else throw Error(F(198));lu||(lu=!0,Cd=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kg(t){if(As(t)!==t)throw Error(F(188))}function gC(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Kg(s),t;if(i===r)return Kg(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function u0(t){return t=gC(t),t!==null?c0(t):null}function c0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c0(t);if(e!==null)return e;t=t.sibling}return null}var h0=Gt.unstable_scheduleCallback,Qg=Gt.unstable_cancelCallback,_C=Gt.unstable_shouldYield,yC=Gt.unstable_requestPaint,Ue=Gt.unstable_now,vC=Gt.unstable_getCurrentPriorityLevel,qf=Gt.unstable_ImmediatePriority,d0=Gt.unstable_UserBlockingPriority,uu=Gt.unstable_NormalPriority,wC=Gt.unstable_LowPriority,f0=Gt.unstable_IdlePriority,uc=null,Tn=null;function xC(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:TC,EC=Math.log,IC=Math.LN2;function TC(t){return t>>>=0,t===0?32:31-(EC(t)/IC|0)|0}var gl=64,_l=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Co(l):(i&=o,i!==0&&(r=Co(i)))}else o=n&~s,o!==0?r=Co(o):i!==0&&(r=Co(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),s=1<<n,r|=t[n],e&=~s;return r}function CC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-gn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=CC(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p0(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Ch(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function kC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-gn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ye=0;function m0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g0,Qf,_0,y0,v0,kd=!1,yl=[],Tr=null,Cr=null,Sr=null,Xo=new Map,Jo=new Map,mr=[],NC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function uo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Da(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function AC(t,e,n,r,s){switch(e){case"focusin":return Tr=uo(Tr,t,e,n,r,s),!0;case"dragenter":return Cr=uo(Cr,t,e,n,r,s),!0;case"mouseover":return Sr=uo(Sr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Xo.set(i,uo(Xo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Jo.set(i,uo(Jo.get(i)||null,t,e,n,r,s)),!0}return!1}function w0(t){var e=os(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=l0(n),e!==null){t.blockedOn=e,v0(t.priority,function(){_0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ed=r,n.target.dispatchEvent(r),Ed=null}else return e=Da(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function Xg(t,e,n){Ul(t)&&n.delete(e)}function RC(){kd=!1,Tr!==null&&Ul(Tr)&&(Tr=null),Cr!==null&&Ul(Cr)&&(Cr=null),Sr!==null&&Ul(Sr)&&(Sr=null),Xo.forEach(Xg),Jo.forEach(Xg)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,RC)))}function Zo(t){function e(s){return co(s,t)}if(0<yl.length){co(yl[0],t);for(var n=1;n<yl.length;n++){var r=yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&co(Tr,t),Cr!==null&&co(Cr,t),Sr!==null&&co(Sr,t),Xo.forEach(e),Jo.forEach(e),n=0;n<mr.length;n++)r=mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)w0(n),n.blockedOn===null&&mr.shift()}var ai=rr.ReactCurrentBatchConfig,hu=!0;function bC(t,e,n,r){var s=ye,i=ai.transition;ai.transition=null;try{ye=1,Yf(t,e,n,r)}finally{ye=s,ai.transition=i}}function PC(t,e,n,r){var s=ye,i=ai.transition;ai.transition=null;try{ye=4,Yf(t,e,n,r)}finally{ye=s,ai.transition=i}}function Yf(t,e,n,r){if(hu){var s=Nd(t,e,n,r);if(s===null)Mh(t,e,r,du,n),Yg(t,r);else if(AC(s,t,e,n,r))r.stopPropagation();else if(Yg(t,r),e&4&&-1<NC.indexOf(t)){for(;s!==null;){var i=Da(s);if(i!==null&&g0(i),i=Nd(t,e,n,r),i===null&&Mh(t,e,r,du,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Mh(t,e,r,null,n)}}var du=null;function Nd(t,e,n,r){if(du=null,t=Gf(r),t=os(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return du=t,null}function x0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vC()){case qf:return 1;case d0:return 4;case uu:case wC:return 16;case f0:return 536870912;default:return 16}default:return 16}}var xr=null,Xf=null,Bl=null;function E0(){if(Bl)return Bl;var t,e=Xf,n=e.length,r,s="value"in xr?xr.value:xr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Bl=s.slice(t,1<r?1-r:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Jg(){return!1}function Kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vl:Jg,this.isPropagationStopped=Jg,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jf=Kt(ji),Pa=Oe({},ji,{view:0,detail:0}),DC=Kt(Pa),Sh,kh,ho,cc=Oe({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Sh=t.screenX-ho.screenX,kh=t.screenY-ho.screenY):kh=Sh=0,ho=t),Sh)},movementY:function(t){return"movementY"in t?t.movementY:kh}}),Zg=Kt(cc),OC=Oe({},cc,{dataTransfer:0}),MC=Kt(OC),LC=Oe({},Pa,{relatedTarget:0}),Nh=Kt(LC),jC=Oe({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),VC=Kt(jC),FC=Oe({},ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UC=Kt(FC),BC=Oe({},ji,{data:0}),e_=Kt(BC),zC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WC[t])?!!e[t]:!1}function Zf(){return HC}var GC=Oe({},Pa,{key:function(t){if(t.key){var e=zC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$C[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qC=Kt(GC),KC=Oe({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t_=Kt(KC),QC=Oe({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),YC=Kt(QC),XC=Oe({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),JC=Kt(XC),ZC=Oe({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=Kt(ZC),tS=[9,13,27,32],ep=Qn&&"CompositionEvent"in window,bo=null;Qn&&"documentMode"in document&&(bo=document.documentMode);var nS=Qn&&"TextEvent"in window&&!bo,I0=Qn&&(!ep||bo&&8<bo&&11>=bo),n_=" ",r_=!1;function T0(t,e){switch(t){case"keyup":return tS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function rS(t,e){switch(t){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(r_=!0,n_);case"textInput":return t=e.data,t===n_&&r_?null:t;default:return null}}function sS(t,e){if(Gs)return t==="compositionend"||!ep&&T0(t,e)?(t=E0(),Bl=Xf=xr=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return I0&&e.locale!=="ko"?null:e.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iS[t.type]:e==="textarea"}function S0(t,e,n,r){r0(r),e=fu(e,"onChange"),0<e.length&&(n=new Jf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Po=null,ea=null;function oS(t){j0(t,0)}function hc(t){var e=Qs(t);if(Yv(e))return t}function aS(t,e){if(t==="change")return e}var k0=!1;if(Qn){var Ah;if(Qn){var Rh="oninput"in document;if(!Rh){var i_=document.createElement("div");i_.setAttribute("oninput","return;"),Rh=typeof i_.oninput=="function"}Ah=Rh}else Ah=!1;k0=Ah&&(!document.documentMode||9<document.documentMode)}function o_(){Po&&(Po.detachEvent("onpropertychange",N0),ea=Po=null)}function N0(t){if(t.propertyName==="value"&&hc(ea)){var e=[];S0(e,ea,t,Gf(t)),a0(oS,e)}}function lS(t,e,n){t==="focusin"?(o_(),Po=e,ea=n,Po.attachEvent("onpropertychange",N0)):t==="focusout"&&o_()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(ea)}function cS(t,e){if(t==="click")return hc(e)}function hS(t,e){if(t==="input"||t==="change")return hc(e)}function dS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:dS;function ta(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!cd.call(e,s)||!vn(t[s],e[s]))return!1}return!0}function a_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l_(t,e){var n=a_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=a_(n)}}function A0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ou(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fS(t){var e=R0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=l_(n,i);var o=l_(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pS=Qn&&"documentMode"in document&&11>=document.documentMode,qs=null,Ad=null,Do=null,Rd=!1;function u_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rd||qs==null||qs!==ou(r)||(r=qs,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&ta(Do,r)||(Do=r,r=fu(Ad,"onSelect"),0<r.length&&(e=new Jf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},bh={},b0={};Qn&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function dc(t){if(bh[t])return bh[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b0)return bh[t]=e[n];return t}var P0=dc("animationend"),D0=dc("animationiteration"),O0=dc("animationstart"),M0=dc("transitionend"),L0=new Map,c_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){L0.set(t,e),Ns(e,[t])}for(var Ph=0;Ph<c_.length;Ph++){var Dh=c_[Ph],mS=Dh.toLowerCase(),gS=Dh[0].toUpperCase()+Dh.slice(1);qr(mS,"on"+gS)}qr(P0,"onAnimationEnd");qr(D0,"onAnimationIteration");qr(O0,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(M0,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function h_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mC(r,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;h_(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;h_(s,l,c),i=u}}}if(lu)throw t=Cd,lu=!1,Cd=null,t}function Ne(t,e){var n=e[Md];n===void 0&&(n=e[Md]=new Set);var r=t+"__bubble";n.has(r)||(V0(e,t,2,!1),n.add(r))}function Oh(t,e,n){var r=0;e&&(r|=4),V0(n,t,r,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[xl]){t[xl]=!0,Hv.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||Oh(n,!1,t),Oh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,Oh("selectionchange",!1,e))}}function V0(t,e,n,r){switch(x0(e)){case 1:var s=bC;break;case 4:s=PC;break;default:s=Yf}n=s.bind(null,e,n,t),s=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Mh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=os(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}a0(function(){var c=i,p=Gf(n),m=[];e:{var g=L0.get(t);if(g!==void 0){var T=Jf,C=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":T=qC;break;case"focusin":C="focus",T=Nh;break;case"focusout":C="blur",T=Nh;break;case"beforeblur":case"afterblur":T=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=MC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=YC;break;case P0:case D0:case O0:T=VC;break;case M0:T=JC;break;case"scroll":T=DC;break;case"wheel":T=eS;break;case"copy":case"cut":case"paste":T=UC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=t_}var A=(e&4)!==0,L=!A&&t==="scroll",S=A?g!==null?g+"Capture":null:g;A=[];for(var E=c,N;E!==null;){N=E;var D=N.stateNode;if(N.tag===5&&D!==null&&(N=D,S!==null&&(D=Yo(E,S),D!=null&&A.push(ra(E,D,N)))),L)break;E=E.return}0<A.length&&(g=new T(g,C,null,n,p),m.push({event:g,listeners:A}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==Ed&&(C=n.relatedTarget||n.fromElement)&&(os(C)||C[Yn]))break e;if((T||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,T?(C=n.relatedTarget||n.toElement,T=c,C=C?os(C):null,C!==null&&(L=As(C),C!==L||C.tag!==5&&C.tag!==6)&&(C=null)):(T=null,C=c),T!==C)){if(A=Zg,D="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(A=t_,D="onPointerLeave",S="onPointerEnter",E="pointer"),L=T==null?g:Qs(T),N=C==null?g:Qs(C),g=new A(D,E+"leave",T,n,p),g.target=L,g.relatedTarget=N,D=null,os(p)===c&&(A=new A(S,E+"enter",C,n,p),A.target=N,A.relatedTarget=L,D=A),L=D,T&&C)t:{for(A=T,S=C,E=0,N=A;N;N=Bs(N))E++;for(N=0,D=S;D;D=Bs(D))N++;for(;0<E-N;)A=Bs(A),E--;for(;0<N-E;)S=Bs(S),N--;for(;E--;){if(A===S||S!==null&&A===S.alternate)break t;A=Bs(A),S=Bs(S)}A=null}else A=null;T!==null&&d_(m,g,T,A,!1),C!==null&&L!==null&&d_(m,L,C,A,!0)}}e:{if(g=c?Qs(c):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var O=aS;else if(s_(g))if(k0)O=hS;else{O=uS;var b=lS}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=cS);if(O&&(O=O(t,c))){S0(m,O,n,p);break e}b&&b(t,g,c),t==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&_d(g,"number",g.value)}switch(b=c?Qs(c):window,t){case"focusin":(s_(b)||b.contentEditable==="true")&&(qs=b,Ad=c,Do=null);break;case"focusout":Do=Ad=qs=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,u_(m,n,p);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":u_(m,n,p)}var w;if(ep)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Gs?T0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(I0&&n.locale!=="ko"&&(Gs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Gs&&(w=E0()):(xr=p,Xf="value"in xr?xr.value:xr.textContent,Gs=!0)),b=fu(c,y),0<b.length&&(y=new e_(y,t,null,n,p),m.push({event:y,listeners:b}),w?y.data=w:(w=C0(n),w!==null&&(y.data=w)))),(w=nS?rS(t,n):sS(t,n))&&(c=fu(c,"onBeforeInput"),0<c.length&&(p=new e_("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=w))}j0(m,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Yo(t,n),i!=null&&r.unshift(ra(t,i,s)),i=Yo(t,e),i!=null&&r.push(ra(t,i,s))),t=t.return}return r}function Bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function d_(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Yo(n,i),u!=null&&o.unshift(ra(n,u,l))):s||(u=Yo(n,i),u!=null&&o.push(ra(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yS=/\r\n?/g,vS=/\u0000|\uFFFD/g;function f_(t){return(typeof t=="string"?t:""+t).replace(yS,`
`).replace(vS,"")}function El(t,e,n){if(e=f_(e),f_(t)!==e&&n)throw Error(F(425))}function pu(){}var bd=null,Pd=null;function Dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(t){return p_.resolve(null).then(t).catch(ES)}:Od;function ES(t){setTimeout(function(){throw t})}function Lh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zo(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function m_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),En="__reactFiber$"+Vi,sa="__reactProps$"+Vi,Yn="__reactContainer$"+Vi,Md="__reactEvents$"+Vi,IS="__reactListeners$"+Vi,TS="__reactHandles$"+Vi;function os(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=m_(t);t!==null;){if(n=t[En])return n;t=m_(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[En]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function fc(t){return t[sa]||null}var Ld=[],Ys=-1;function Kr(t){return{current:t}}function Ae(t){0>Ys||(t.current=Ld[Ys],Ld[Ys]=null,Ys--)}function Ce(t,e){Ys++,Ld[Ys]=t.current,t.current=e}var Vr={},Et=Kr(Vr),Mt=Kr(!1),ms=Vr;function _i(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(t){return t=t.childContextTypes,t!=null}function mu(){Ae(Mt),Ae(Et)}function g_(t,e,n){if(Et.current!==Vr)throw Error(F(168));Ce(Et,e),Ce(Mt,n)}function F0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,lC(t)||"Unknown",s));return Oe({},n,r)}function gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,ms=Et.current,Ce(Et,t),Ce(Mt,Mt.current),!0}function __(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=F0(t,e,ms),r.__reactInternalMemoizedMergedChildContext=t,Ae(Mt),Ae(Et),Ce(Et,t)):Ae(Mt),Ce(Mt,n)}var jn=null,pc=!1,jh=!1;function U0(t){jn===null?jn=[t]:jn.push(t)}function CS(t){pc=!0,U0(t)}function Qr(){if(!jh&&jn!==null){jh=!0;var t=0,e=ye;try{var n=jn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,pc=!1}catch(s){throw jn!==null&&(jn=jn.slice(t+1)),h0(qf,Qr),s}finally{ye=e,jh=!1}}return null}var Xs=[],Js=0,_u=null,yu=0,Qt=[],Yt=0,gs=null,Vn=1,Fn="";function ns(t,e){Xs[Js++]=yu,Xs[Js++]=_u,_u=t,yu=e}function B0(t,e,n){Qt[Yt++]=Vn,Qt[Yt++]=Fn,Qt[Yt++]=gs,gs=t;var r=Vn;t=Fn;var s=32-gn(r)-1;r&=~(1<<s),n+=1;var i=32-gn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Vn=1<<32-gn(e)+s|n<<s|r,Fn=i+t}else Vn=1<<i|n<<s|r,Fn=t}function np(t){t.return!==null&&(ns(t,1),B0(t,1,0))}function rp(t){for(;t===_u;)_u=Xs[--Js],Xs[Js]=null,yu=Xs[--Js],Xs[Js]=null;for(;t===gs;)gs=Qt[--Yt],Qt[Yt]=null,Fn=Qt[--Yt],Qt[Yt]=null,Vn=Qt[--Yt],Qt[Yt]=null}var Ht=null,Wt=null,Re=!1,cn=null;function z0(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function y_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:Vn,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Wt=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vd(t){if(Re){var e=Wt;if(e){var n=e;if(!y_(t,e)){if(jd(t))throw Error(F(418));e=kr(n.nextSibling);var r=Ht;e&&y_(t,e)?z0(r,n):(t.flags=t.flags&-4097|2,Re=!1,Ht=t)}}else{if(jd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Re=!1,Ht=t}}}function v_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Il(t){if(t!==Ht)return!1;if(!Re)return v_(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dd(t.type,t.memoizedProps)),e&&(e=Wt)){if(jd(t))throw $0(),Error(F(418));for(;e;)z0(t,e),e=kr(e.nextSibling)}if(v_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Ht?kr(t.stateNode.nextSibling):null;return!0}function $0(){for(var t=Wt;t;)t=kr(t.nextSibling)}function yi(){Wt=Ht=null,Re=!1}function sp(t){cn===null?cn=[t]:cn.push(t)}var SS=rr.ReactCurrentBatchConfig;function ln(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vu=Kr(null),wu=null,Zs=null,ip=null;function op(){ip=Zs=wu=null}function ap(t){var e=vu.current;Ae(vu),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function li(t,e){wu=t,ip=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},Zs===null){if(wu===null)throw Error(F(308));Zs=t,wu.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return e}var as=null;function lp(t){as===null?as=[t]:as.push(t)}function W0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,lp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Xn(t,r)}function Xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Xn(t,n)}return s=r.interleaved,s===null?(e.next=e,lp(r)):(e.next=s.next,s.next=e),r.interleaved=e,Xn(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}function w_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xu(t,e,n,r){var s=t.updateQueue;pr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=c=u=null,l=i;do{var g=l.lane,T=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,A=l;switch(g=e,T=n,A.tag){case 1:if(C=A.payload,typeof C=="function"){m=C.call(T,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=A.payload,g=typeof C=="function"?C.call(T,m,g):C,g==null)break e;m=Oe({},m,g);break e;case 2:pr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=T,u=m):p=p.next=T,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=m}}function x_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var G0=new Wv.Component().refs;function Ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=Rr(t),i=Hn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(_n(e,t,s,r),$l(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=Rr(t),i=Hn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(_n(e,t,s,r),$l(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=Rr(t),s=Hn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Nr(t,s,r),e!==null&&(_n(e,t,r,n),$l(e,t,r))}};function E_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ta(n,r)||!ta(s,i):!0}function q0(t,e,n){var r=!1,s=Vr,i=e.contextType;return typeof i=="object"&&i!==null?i=en(i):(s=Lt(e)?ms:Et.current,r=e.contextTypes,i=(r=r!=null)?_i(t,s):Vr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function I_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function Bd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=G0,up(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=en(i):(i=Lt(e)?ms:Et.current,s.context=_i(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ud(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&mc.enqueueReplaceState(s,s.state,null),xu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;l===G0&&(l=s.refs={}),o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Tl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function T_(t){var e=t._init;return e(t._payload)}function K0(t){function e(S,E){if(t){var N=S.deletions;N===null?(S.deletions=[E],S.flags|=16):N.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=br(S,E),S.index=0,S.sibling=null,S}function i(S,E,N){return S.index=N,t?(N=S.alternate,N!==null?(N=N.index,N<E?(S.flags|=2,E):N):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,N,D){return E===null||E.tag!==6?(E=Wh(N,S.mode,D),E.return=S,E):(E=s(E,N),E.return=S,E)}function u(S,E,N,D){var O=N.type;return O===Hs?p(S,E,N.props.children,D,N.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===fr&&T_(O)===E.type)?(D=s(E,N.props),D.ref=fo(S,E,N),D.return=S,D):(D=Ql(N.type,N.key,N.props,null,S.mode,D),D.ref=fo(S,E,N),D.return=S,D)}function c(S,E,N,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=Hh(N,S.mode,D),E.return=S,E):(E=s(E,N.children||[]),E.return=S,E)}function p(S,E,N,D,O){return E===null||E.tag!==7?(E=ds(N,S.mode,D,O),E.return=S,E):(E=s(E,N),E.return=S,E)}function m(S,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Wh(""+E,S.mode,N),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fl:return N=Ql(E.type,E.key,E.props,null,S.mode,N),N.ref=fo(S,null,E),N.return=S,N;case Ws:return E=Hh(E,S.mode,N),E.return=S,E;case fr:var D=E._init;return m(S,D(E._payload),N)}if(To(E)||ao(E))return E=ds(E,S.mode,N,null),E.return=S,E;Tl(S,E)}return null}function g(S,E,N,D){var O=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return O!==null?null:l(S,E,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case fl:return N.key===O?u(S,E,N,D):null;case Ws:return N.key===O?c(S,E,N,D):null;case fr:return O=N._init,g(S,E,O(N._payload),D)}if(To(N)||ao(N))return O!==null?null:p(S,E,N,D,null);Tl(S,N)}return null}function T(S,E,N,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(N)||null,l(E,S,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case fl:return S=S.get(D.key===null?N:D.key)||null,u(E,S,D,O);case Ws:return S=S.get(D.key===null?N:D.key)||null,c(E,S,D,O);case fr:var b=D._init;return T(S,E,N,b(D._payload),O)}if(To(D)||ao(D))return S=S.get(N)||null,p(E,S,D,O,null);Tl(E,D)}return null}function C(S,E,N,D){for(var O=null,b=null,w=E,y=E=0,x=null;w!==null&&y<N.length;y++){w.index>y?(x=w,w=null):x=w.sibling;var I=g(S,w,N[y],D);if(I===null){w===null&&(w=x);break}t&&w&&I.alternate===null&&e(S,w),E=i(I,E,y),b===null?O=I:b.sibling=I,b=I,w=x}if(y===N.length)return n(S,w),Re&&ns(S,y),O;if(w===null){for(;y<N.length;y++)w=m(S,N[y],D),w!==null&&(E=i(w,E,y),b===null?O=w:b.sibling=w,b=w);return Re&&ns(S,y),O}for(w=r(S,w);y<N.length;y++)x=T(w,S,y,N[y],D),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?y:x.key),E=i(x,E,y),b===null?O=x:b.sibling=x,b=x);return t&&w.forEach(function(k){return e(S,k)}),Re&&ns(S,y),O}function A(S,E,N,D){var O=ao(N);if(typeof O!="function")throw Error(F(150));if(N=O.call(N),N==null)throw Error(F(151));for(var b=O=null,w=E,y=E=0,x=null,I=N.next();w!==null&&!I.done;y++,I=N.next()){w.index>y?(x=w,w=null):x=w.sibling;var k=g(S,w,I.value,D);if(k===null){w===null&&(w=x);break}t&&w&&k.alternate===null&&e(S,w),E=i(k,E,y),b===null?O=k:b.sibling=k,b=k,w=x}if(I.done)return n(S,w),Re&&ns(S,y),O;if(w===null){for(;!I.done;y++,I=N.next())I=m(S,I.value,D),I!==null&&(E=i(I,E,y),b===null?O=I:b.sibling=I,b=I);return Re&&ns(S,y),O}for(w=r(S,w);!I.done;y++,I=N.next())I=T(w,S,y,I.value,D),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),E=i(I,E,y),b===null?O=I:b.sibling=I,b=I);return t&&w.forEach(function(R){return e(S,R)}),Re&&ns(S,y),O}function L(S,E,N,D){if(typeof N=="object"&&N!==null&&N.type===Hs&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case fl:e:{for(var O=N.key,b=E;b!==null;){if(b.key===O){if(O=N.type,O===Hs){if(b.tag===7){n(S,b.sibling),E=s(b,N.props.children),E.return=S,S=E;break e}}else if(b.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===fr&&T_(O)===b.type){n(S,b.sibling),E=s(b,N.props),E.ref=fo(S,b,N),E.return=S,S=E;break e}n(S,b);break}else e(S,b);b=b.sibling}N.type===Hs?(E=ds(N.props.children,S.mode,D,N.key),E.return=S,S=E):(D=Ql(N.type,N.key,N.props,null,S.mode,D),D.ref=fo(S,E,N),D.return=S,S=D)}return o(S);case Ws:e:{for(b=N.key;E!==null;){if(E.key===b)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){n(S,E.sibling),E=s(E,N.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Hh(N,S.mode,D),E.return=S,S=E}return o(S);case fr:return b=N._init,L(S,E,b(N._payload),D)}if(To(N))return C(S,E,N,D);if(ao(N))return A(S,E,N,D);Tl(S,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,N),E.return=S,S=E):(n(S,E),E=Wh(N,S.mode,D),E.return=S,S=E),o(S)):n(S,E)}return L}var vi=K0(!0),Q0=K0(!1),Oa={},Cn=Kr(Oa),ia=Kr(Oa),oa=Kr(Oa);function ls(t){if(t===Oa)throw Error(F(174));return t}function cp(t,e){switch(Ce(oa,e),Ce(ia,t),Ce(Cn,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vd(e,t)}Ae(Cn),Ce(Cn,e)}function wi(){Ae(Cn),Ae(ia),Ae(oa)}function Y0(t){ls(oa.current);var e=ls(Cn.current),n=vd(e,t.type);e!==n&&(Ce(ia,t),Ce(Cn,n))}function hp(t){ia.current===t&&(Ae(Cn),Ae(ia))}var Pe=Kr(0);function Eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vh=[];function dp(){for(var t=0;t<Vh.length;t++)Vh[t]._workInProgressVersionPrimary=null;Vh.length=0}var Wl=rr.ReactCurrentDispatcher,Fh=rr.ReactCurrentBatchConfig,_s=0,De=null,Ge=null,Ze=null,Iu=!1,Oo=!1,aa=0,kS=0;function mt(){throw Error(F(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,s,i){if(_s=i,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?bS:PS,t=n(r,s),Oo){i=0;do{if(Oo=!1,aa=0,25<=i)throw Error(F(301));i+=1,Ze=Ge=null,e.updateQueue=null,Wl.current=DS,t=n(r,s)}while(Oo)}if(Wl.current=Tu,e=Ge!==null&&Ge.next!==null,_s=0,Ze=Ge=De=null,Iu=!1,e)throw Error(F(300));return t}function mp(){var t=aa!==0;return aa=0,t}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function tn(){if(Ge===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Ze===null?De.memoizedState:Ze.next;if(e!==null)Ze=e,Ge=t;else{if(t===null)throw Error(F(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function la(t,e){return typeof e=="function"?e(t):e}function Uh(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var p=c.lane;if((_s&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,De.lanes|=p,ys|=p}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,vn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,De.lanes|=i,ys|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bh(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);vn(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function X0(){}function J0(t,e){var n=De,r=tn(),s=e(),i=!vn(r.memoizedState,s);if(i&&(r.memoizedState=s,Ot=!0),r=r.queue,gp(tw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,ua(9,ew.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(F(349));_s&30||Z0(n,e,s)}return s}function Z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ew(t,e,n,r){e.value=n,e.getSnapshot=r,nw(e)&&rw(t)}function tw(t,e,n){return n(function(){nw(e)&&rw(t)})}function nw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function rw(t){var e=Xn(t,1);e!==null&&_n(e,t,1,-1)}function C_(t){var e=xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=RS.bind(null,De,t),[e.memoizedState,t]}function ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sw(){return tn().memoizedState}function Hl(t,e,n,r){var s=xn();De.flags|=t,s.memoizedState=ua(1|e,n,void 0,r===void 0?null:r)}function gc(t,e,n,r){var s=tn();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&fp(r,o.deps)){s.memoizedState=ua(e,n,i,r);return}}De.flags|=t,s.memoizedState=ua(1|e,n,i,r)}function S_(t,e){return Hl(8390656,8,t,e)}function gp(t,e){return gc(2048,8,t,e)}function iw(t,e){return gc(4,2,t,e)}function ow(t,e){return gc(4,4,t,e)}function aw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lw(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,aw.bind(null,e,t),n)}function _p(){}function uw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hw(t,e,n){return _s&21?(vn(n,e)||(n=p0(),De.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function NS(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Fh.transition;Fh.transition={};try{t(!1),e()}finally{ye=n,Fh.transition=r}}function dw(){return tn().memoizedState}function AS(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fw(t))pw(e,n);else if(n=W0(t,e,n,r),n!==null){var s=Nt();_n(n,t,r,s),mw(n,e,r)}}function RS(t,e,n){var r=Rr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fw(t))pw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,vn(l,o)){var u=e.interleaved;u===null?(s.next=s,lp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=W0(t,e,s,r),n!==null&&(s=Nt(),_n(n,t,r,s),mw(n,e,r))}}function fw(t){var e=t.alternate;return t===De||e!==null&&e===De}function pw(t,e){Oo=Iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}var Tu={readContext:en,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},bS={readContext:en,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:S_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4194308,4,aw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hl(4,2,t,e)},useMemo:function(t,e){var n=xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AS.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:C_,useDebugValue:_p,useDeferredValue:function(t){return xn().memoizedState=t},useTransition:function(){var t=C_(!1),e=t[0];return t=NS.bind(null,t[1]),xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,s=xn();if(Re){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),tt===null)throw Error(F(349));_s&30||Z0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,S_(tw.bind(null,r,i,t),[t]),r.flags|=2048,ua(9,ew.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=xn(),e=tt.identifierPrefix;if(Re){var n=Fn,r=Vn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PS={readContext:en,useCallback:uw,useContext:en,useEffect:gp,useImperativeHandle:lw,useInsertionEffect:iw,useLayoutEffect:ow,useMemo:cw,useReducer:Uh,useRef:sw,useState:function(){return Uh(la)},useDebugValue:_p,useDeferredValue:function(t){var e=tn();return hw(e,Ge.memoizedState,t)},useTransition:function(){var t=Uh(la)[0],e=tn().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:J0,useId:dw,unstable_isNewReconciler:!1},DS={readContext:en,useCallback:uw,useContext:en,useEffect:gp,useImperativeHandle:lw,useInsertionEffect:iw,useLayoutEffect:ow,useMemo:cw,useReducer:Bh,useRef:sw,useState:function(){return Bh(la)},useDebugValue:_p,useDeferredValue:function(t){var e=tn();return Ge===null?e.memoizedState=t:hw(e,Ge.memoizedState,t)},useTransition:function(){var t=Bh(la)[0],e=tn().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:J0,useId:dw,unstable_isNewReconciler:!1};function xi(t,e){try{var n="",r=e;do n+=aC(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OS=typeof WeakMap=="function"?WeakMap:Map;function gw(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,Jd=r),zd(t,e)},n}function _w(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){zd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function k_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=KS.bind(null,t,e,n),e.then(t,t))}function N_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function A_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var MS=rr.ReactCurrentOwner,Ot=!1;function St(t,e,n,r){e.child=t===null?Q0(e,null,n,r):vi(e,t.child,n,r)}function R_(t,e,n,r,s){n=n.render;var i=e.ref;return li(e,s),r=pp(t,e,n,r,i,s),n=mp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Jn(t,e,s)):(Re&&n&&np(e),e.flags|=1,St(t,e,r,s),e.child)}function b_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Cp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,yw(t,e,i,r,s)):(t=Ql(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,r)&&t.ref===e.ref)return Jn(t,e,s)}return e.flags|=1,t=br(i,r),t.ref=e.ref,t.return=e,e.child=t}function yw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ta(i,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,Jn(t,e,s)}return $d(t,e,n,r,s)}function vw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ti,Bt),Bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(ti,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(ti,Bt),Bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ce(ti,Bt),Bt|=r;return St(t,e,s,n),e.child}function ww(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $d(t,e,n,r,s){var i=Lt(n)?ms:Et.current;return i=_i(e,i),li(e,s),n=pp(t,e,n,r,i,s),r=mp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Jn(t,e,s)):(Re&&r&&np(e),e.flags|=1,St(t,e,n,s),e.child)}function P_(t,e,n,r,s){if(Lt(n)){var i=!0;gu(e)}else i=!1;if(li(e,s),e.stateNode===null)Gl(t,e),q0(e,n,r),Bd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=Lt(n)?ms:Et.current,c=_i(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&I_(e,o,r,c),pr=!1;var g=e.memoizedState;o.state=g,xu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Mt.current||pr?(typeof p=="function"&&(Ud(e,n,p,r),u=e.memoizedState),(l=pr||E_(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ln(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=Lt(n)?ms:Et.current,u=_i(e,u));var T=n.getDerivedStateFromProps;(p=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&I_(e,o,r,u),pr=!1,g=e.memoizedState,o.state=g,xu(e,r,o,s);var C=e.memoizedState;l!==m||g!==C||Mt.current||pr?(typeof T=="function"&&(Ud(e,n,T,r),C=e.memoizedState),(c=pr||E_(e,n,c,r,g,C,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Wd(t,e,n,r,i,s)}function Wd(t,e,n,r,s,i){ww(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&__(e,n,!1),Jn(t,e,i);r=e.stateNode,MS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vi(e,t.child,null,i),e.child=vi(e,null,l,i)):St(t,e,l,i),e.memoizedState=r.state,s&&__(e,n,!0),e.child}function xw(t){var e=t.stateNode;e.pendingContext?g_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&g_(t,e.context,!1),cp(t,e.containerInfo)}function D_(t,e,n,r,s){return yi(),sp(s),e.flags|=256,St(t,e,n,r),e.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ew(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ce(Pe,s&1),t===null)return Vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vc(o,r,0,null),t=ds(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Gd(n),e.memoizedState=Hd,t):yp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return LS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=br(l,i):(i=ds(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Hd,r}return i=t.child,t=i.sibling,r=br(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yp(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&sp(r),vi(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=zh(Error(F(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=vc({mode:"visible",children:r.children},s,0,null),i=ds(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&vi(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Hd,i);if(!(e.mode&1))return Cl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=zh(i,r,void 0),Cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ot||l){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Xn(t,s),_n(r,t,s,-1))}return Tp(),r=zh(Error(F(421))),Cl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=QS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Wt=kr(s.nextSibling),Ht=e,Re=!0,cn=null,t!==null&&(Qt[Yt++]=Vn,Qt[Yt++]=Fn,Qt[Yt++]=gs,Vn=t.id,Fn=t.overflow,gs=e),e=yp(e,r.children),e.flags|=4096,e)}function O_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fd(t.return,e,n)}function $h(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Iw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O_(t,n,e);else if(t.tag===19)O_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Eu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),$h(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Eu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}$h(e,!0,n,null,i);break;case"together":$h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:xw(e),yi();break;case 5:Y0(e);break;case 1:Lt(e.type)&&gu(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ce(vu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?Ew(t,e,n):(Ce(Pe,Pe.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);Ce(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Iw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,vw(t,e,n)}return Jn(t,e,n)}var Tw,qd,Cw,Sw;Tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};Cw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ls(Cn.current);var i=null;switch(n){case"input":s=md(t,s),r=md(t,r),i=[];break;case"select":s=Oe({},s,{value:void 0}),r=Oe({},r,{value:void 0}),i=[];break;case"textarea":s=yd(t,s),r=yd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pu)}wd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ko.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ne("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Sw=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VS(t,e,n){var r=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Lt(e.type)&&mu(),gt(e),null;case 3:return r=e.stateNode,wi(),Ae(Mt),Ae(Et),dp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(tf(cn),cn=null))),qd(t,e),gt(e),null;case 5:hp(e);var s=ls(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Cw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return gt(e),null}if(t=ls(Cn.current),Il(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[En]=e,r[sa]=i,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<So.length;s++)Ne(So[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":$g(r,i),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",r);break;case"textarea":Hg(r,i),Ne("invalid",r)}wd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&El(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&El(r.textContent,l,t),s=["children",""+l]):Ko.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":pl(r),Wg(r,i,!0);break;case"textarea":pl(r),Gg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[sa]=r,Tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),s=r;break;case"iframe":case"object":case"embed":Ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<So.length;s++)Ne(So[s],t);s=r;break;case"source":Ne("error",t),s=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),s=r;break;case"details":Ne("toggle",t),s=r;break;case"input":$g(t,r),s=md(t,r),Ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Oe({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":Hg(t,r),s=yd(t,r),Ne("invalid",t);break;default:s=r}wd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?n0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&e0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qo(t,u):typeof u=="number"&&Qo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ko.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ne("scroll",t):u!=null&&zf(t,i,u,o))}switch(n){case"input":pl(t),Wg(t,r,!1);break;case"textarea":pl(t),Gg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?si(t,!!r.multiple,i,!1):r.defaultValue!=null&&si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)Sw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ls(oa.current),ls(Cn.current),Il(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(i=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:El(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return gt(e),null;case 13:if(Ae(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Wt!==null&&e.mode&1&&!(e.flags&128))$0(),yi(),e.flags|=98560,i=!1;else if(i=Il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[En]=e}else yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),i=!1}else cn!==null&&(tf(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Qe===0&&(Qe=3):Tp())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return wi(),qd(t,e),t===null&&na(e.stateNode.containerInfo),gt(e),null;case 10:return ap(e.type._context),gt(e),null;case 17:return Lt(e.type)&&mu(),gt(e),null;case 19:if(Ae(Pe),i=e.memoizedState,i===null)return gt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)po(i,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Eu(t),o!==null){for(e.flags|=128,po(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>Ei&&(e.flags|=128,r=!0,po(i,!1),e.lanes=4194304)}else{if(!r)if(t=Eu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Re)return gt(e),null}else 2*Ue()-i.renderingStartTime>Ei&&n!==1073741824&&(e.flags|=128,r=!0,po(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=Pe.current,Ce(Pe,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return Ip(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function FS(t,e){switch(rp(e),e.tag){case 1:return Lt(e.type)&&mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wi(),Ae(Mt),Ae(Et),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(Ae(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Pe),null;case 4:return wi(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Ip(),null;case 24:return null;default:return null}}var Sl=!1,vt=!1,US=typeof WeakSet=="function"?WeakSet:Set,q=null;function ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Kd(t,e,n){try{n()}catch(r){je(t,e,r)}}var M_=!1;function BS(t,e){if(bd=hu,t=R0(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var T;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++p===r&&(u=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},hu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var A=C.memoizedProps,L=C.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?A:ln(e.type,A),L);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var N=e.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){je(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=M_,M_=!1,C}function Mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Kd(e,n,i)}s=s.next}while(s!==r)}}function _c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kw(t){var e=t.alternate;e!==null&&(t.alternate=null,kw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[sa],delete e[Md],delete e[IS],delete e[TS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nw(t){return t.tag===5||t.tag===3||t.tag===4}function L_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pu));else if(r!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}var st=null,un=!1;function lr(t,e,n){for(n=n.child;n!==null;)Aw(t,e,n),n=n.sibling}function Aw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:vt||ei(n,e);case 6:var r=st,s=un;st=null,lr(t,e,n),st=r,un=s,st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?Lh(t.parentNode,n):t.nodeType===1&&Lh(t,n),Zo(t)):Lh(st,n.stateNode));break;case 4:r=st,s=un,st=n.stateNode.containerInfo,un=!0,lr(t,e,n),st=r,un=s;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Kd(n,e,o),s=s.next}while(s!==r)}lr(t,e,n);break;case 1:if(!vt&&(ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,lr(t,e,n),vt=r):lr(t,e,n);break;default:lr(t,e,n)}}function j_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new US),e.forEach(function(r){var s=YS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,un=!1;break e;case 3:st=l.stateNode.containerInfo,un=!0;break e;case 4:st=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(st===null)throw Error(F(160));Aw(i,o,s),st=null,un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){je(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rw(e,t),e=e.sibling}function Rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),wn(t),r&4){try{Mo(3,t,t.return),_c(3,t)}catch(A){je(t,t.return,A)}try{Mo(5,t,t.return)}catch(A){je(t,t.return,A)}}break;case 1:an(e,t),wn(t),r&512&&n!==null&&ei(n,n.return);break;case 5:if(an(e,t),wn(t),r&512&&n!==null&&ei(n,n.return),t.flags&32){var s=t.stateNode;try{Qo(s,"")}catch(A){je(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Xv(s,i),xd(l,o);var c=xd(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?n0(s,m):p==="dangerouslySetInnerHTML"?e0(s,m):p==="children"?Qo(s,m):zf(s,p,m,c)}switch(l){case"input":gd(s,i);break;case"textarea":Jv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?si(s,!!i.multiple,T,!1):g!==!!i.multiple&&(i.defaultValue!=null?si(s,!!i.multiple,i.defaultValue,!0):si(s,!!i.multiple,i.multiple?[]:"",!1))}s[sa]=i}catch(A){je(t,t.return,A)}}break;case 6:if(an(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){je(t,t.return,A)}}break;case 3:if(an(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(A){je(t,t.return,A)}break;case 4:an(e,t),wn(t);break;case 13:an(e,t),wn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xp=Ue())),r&4&&j_(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||p,an(e,t),vt=c):an(e,t),wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(q=t,p=t.child;p!==null;){for(m=q=p;q!==null;){switch(g=q,T=g.child,g.tag){case 0:case 11:case 14:case 15:Mo(4,g,g.return);break;case 1:ei(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(A){je(r,n,A)}}break;case 5:ei(g,g.return);break;case 22:if(g.memoizedState!==null){F_(m);continue}}T!==null?(T.return=g,q=T):F_(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=t0("display",o))}catch(A){je(t,t.return,A)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(A){je(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:an(e,t),wn(t),r&4&&j_(t);break;case 21:break;default:an(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Qo(s,""),r.flags&=-33);var i=L_(t);Xd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=L_(t);Yd(t,l,o);break;default:throw Error(F(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zS(t,e,n){q=t,bw(t)}function bw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Sl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||vt;l=Sl;var c=vt;if(Sl=o,(vt=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?U_(s):u!==null?(u.return=o,q=u):U_(s);for(;i!==null;)q=i,bw(i),i=i.sibling;q=s,Sl=l,vt=c}V_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):V_(t)}}function V_(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||_c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&x_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}x_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Zo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}vt||e.flags&512&&Qd(e)}catch(g){je(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function F_(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function U_(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_c(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){je(e,s,u)}}var i=e.return;try{Qd(e)}catch(u){je(e,i,u)}break;case 5:var o=e.return;try{Qd(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var $S=Math.ceil,Cu=rr.ReactCurrentDispatcher,vp=rr.ReactCurrentOwner,Zt=rr.ReactCurrentBatchConfig,pe=0,tt=null,He=null,ut=0,Bt=0,ti=Kr(0),Qe=0,ca=null,ys=0,yc=0,wp=0,Lo=null,Dt=null,xp=0,Ei=1/0,Ln=null,Su=!1,Jd=null,Ar=null,kl=!1,Er=null,ku=0,jo=0,Zd=null,ql=-1,Kl=0;function Nt(){return pe&6?Ue():ql!==-1?ql:ql=Ue()}function Rr(t){return t.mode&1?pe&2&&ut!==0?ut&-ut:SS.transition!==null?(Kl===0&&(Kl=p0()),Kl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:x0(t.type)),t):1}function _n(t,e,n,r){if(50<jo)throw jo=0,Zd=null,Error(F(185));ba(t,n,r),(!(pe&2)||t!==tt)&&(t===tt&&(!(pe&2)&&(yc|=n),Qe===4&&gr(t,ut)),jt(t,r),n===1&&pe===0&&!(e.mode&1)&&(Ei=Ue()+500,pc&&Qr()))}function jt(t,e){var n=t.callbackNode;SC(t,e);var r=cu(t,t===tt?ut:0);if(r===0)n!==null&&Qg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qg(n),e===1)t.tag===0?CS(B_.bind(null,t)):U0(B_.bind(null,t)),xS(function(){!(pe&6)&&Qr()}),n=null;else{switch(m0(r)){case 1:n=qf;break;case 4:n=d0;break;case 16:n=uu;break;case 536870912:n=f0;break;default:n=uu}n=Fw(n,Pw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pw(t,e){if(ql=-1,Kl=0,pe&6)throw Error(F(327));var n=t.callbackNode;if(ui()&&t.callbackNode!==n)return null;var r=cu(t,t===tt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nu(t,r);else{e=r;var s=pe;pe|=2;var i=Ow();(tt!==t||ut!==e)&&(Ln=null,Ei=Ue()+500,hs(t,e));do try{GS();break}catch(l){Dw(t,l)}while(!0);op(),Cu.current=i,pe=s,He!==null?e=0:(tt=null,ut=0,e=Qe)}if(e!==0){if(e===2&&(s=Sd(t),s!==0&&(r=s,e=ef(t,s))),e===1)throw n=ca,hs(t,0),gr(t,r),jt(t,Ue()),n;if(e===6)gr(t,r);else{if(s=t.current.alternate,!(r&30)&&!WS(s)&&(e=Nu(t,r),e===2&&(i=Sd(t),i!==0&&(r=i,e=ef(t,i))),e===1))throw n=ca,hs(t,0),gr(t,r),jt(t,Ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:rs(t,Dt,Ln);break;case 3:if(gr(t,r),(r&130023424)===r&&(e=xp+500-Ue(),10<e)){if(cu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Od(rs.bind(null,t,Dt,Ln),e);break}rs(t,Dt,Ln);break;case 4:if(gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-gn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$S(r/1960))-r,10<r){t.timeoutHandle=Od(rs.bind(null,t,Dt,Ln),r);break}rs(t,Dt,Ln);break;case 5:rs(t,Dt,Ln);break;default:throw Error(F(329))}}}return jt(t,Ue()),t.callbackNode===n?Pw.bind(null,t):null}function ef(t,e){var n=Lo;return t.current.memoizedState.isDehydrated&&(hs(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&tf(e)),t}function tf(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function WS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!vn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~wp,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function B_(t){if(pe&6)throw Error(F(327));ui();var e=cu(t,0);if(!(e&1))return jt(t,Ue()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var r=Sd(t);r!==0&&(e=r,n=ef(t,r))}if(n===1)throw n=ca,hs(t,0),gr(t,e),jt(t,Ue()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,Dt,Ln),jt(t,Ue()),null}function Ep(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Ei=Ue()+500,pc&&Qr())}}function vs(t){Er!==null&&Er.tag===0&&!(pe&6)&&ui();var e=pe;pe|=1;var n=Zt.transition,r=ye;try{if(Zt.transition=null,ye=1,t)return t()}finally{ye=r,Zt.transition=n,pe=e,!(pe&6)&&Qr()}}function Ip(){Bt=ti.current,Ae(ti)}function hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wS(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mu();break;case 3:wi(),Ae(Mt),Ae(Et),dp();break;case 5:hp(r);break;case 4:wi();break;case 13:Ae(Pe);break;case 19:Ae(Pe);break;case 10:ap(r.type._context);break;case 22:case 23:Ip()}n=n.return}if(tt=t,He=t=br(t.current,null),ut=Bt=e,Qe=0,ca=null,wp=yc=ys=0,Dt=Lo=null,as!==null){for(e=0;e<as.length;e++)if(n=as[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}as=null}return t}function Dw(t,e){do{var n=He;try{if(op(),Wl.current=Tu,Iu){for(var r=De.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Iu=!1}if(_s=0,Ze=Ge=De=null,Oo=!1,aa=0,vp.current=null,n===null||n.return===null){Qe=1,ca=e,He=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ut,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var T=N_(o);if(T!==null){T.flags&=-257,A_(T,o,l,i,e),T.mode&1&&k_(i,c,e),e=T,u=c;var C=e.updateQueue;if(C===null){var A=new Set;A.add(u),e.updateQueue=A}else C.add(u);break e}else{if(!(e&1)){k_(i,c,e),Tp();break e}u=Error(F(426))}}else if(Re&&l.mode&1){var L=N_(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),A_(L,o,l,i,e),sp(xi(u,l));break e}}i=u=xi(u,l),Qe!==4&&(Qe=2),Lo===null?Lo=[i]:Lo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=gw(i,u,e);w_(i,S);break e;case 1:l=u;var E=i.type,N=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Ar===null||!Ar.has(N)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=_w(i,l,e);w_(i,D);break e}}i=i.return}while(i!==null)}Lw(n)}catch(O){e=O,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function Ow(){var t=Cu.current;return Cu.current=Tu,t===null?Tu:t}function Tp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(ys&268435455)&&!(yc&268435455)||gr(tt,ut)}function Nu(t,e){var n=pe;pe|=2;var r=Ow();(tt!==t||ut!==e)&&(Ln=null,hs(t,e));do try{HS();break}catch(s){Dw(t,s)}while(!0);if(op(),pe=n,Cu.current=r,He!==null)throw Error(F(261));return tt=null,ut=0,Qe}function HS(){for(;He!==null;)Mw(He)}function GS(){for(;He!==null&&!_C();)Mw(He)}function Mw(t){var e=Vw(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?Lw(t):He=e,vp.current=null}function Lw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FS(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,He=null;return}}else if(n=VS(n,e,Bt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Qe===0&&(Qe=5)}function rs(t,e,n){var r=ye,s=Zt.transition;try{Zt.transition=null,ye=1,qS(t,e,n,r)}finally{Zt.transition=s,ye=r}return null}function qS(t,e,n,r){do ui();while(Er!==null);if(pe&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(kC(t,i),t===tt&&(He=tt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,Fw(uu,function(){return ui(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Zt.transition,Zt.transition=null;var o=ye;ye=1;var l=pe;pe|=4,vp.current=null,BS(t,n),Rw(n,t),fS(Pd),hu=!!bd,Pd=bd=null,t.current=n,zS(n),yC(),pe=l,ye=o,Zt.transition=i}else t.current=n;if(kl&&(kl=!1,Er=t,ku=s),i=t.pendingLanes,i===0&&(Ar=null),xC(n.stateNode),jt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Su)throw Su=!1,t=Jd,Jd=null,t;return ku&1&&t.tag!==0&&ui(),i=t.pendingLanes,i&1?t===Zd?jo++:(jo=0,Zd=t):jo=0,Qr(),null}function ui(){if(Er!==null){var t=m0(ku),e=Zt.transition,n=ye;try{if(Zt.transition=null,ye=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,ku=0,pe&6)throw Error(F(331));var s=pe;for(pe|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:Mo(8,p,i)}var m=p.child;if(m!==null)m.return=p,q=m;else for(;q!==null;){p=q;var g=p.sibling,T=p.return;if(kw(p),p===c){q=null;break}if(g!==null){g.return=T,q=g;break}q=T}}}var C=i.alternate;if(C!==null){var A=C.child;if(A!==null){C.child=null;do{var L=A.sibling;A.sibling=null,A=L}while(A!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mo(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,q=S;break e}q=i.return}}var E=t.current;for(q=E;q!==null;){o=q;var N=o.child;if(o.subtreeFlags&2064&&N!==null)N.return=o,q=N;else e:for(o=E;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_c(9,l)}}catch(O){je(l,l.return,O)}if(l===o){q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,q=D;break e}q=l.return}}if(pe=s,Qr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(uc,t)}catch{}r=!0}return r}finally{ye=n,Zt.transition=e}}return!1}function z_(t,e,n){e=xi(n,e),e=gw(t,e,1),t=Nr(t,e,1),e=Nt(),t!==null&&(ba(t,1,e),jt(t,e))}function je(t,e,n){if(t.tag===3)z_(t,t,n);else for(;e!==null;){if(e.tag===3){z_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=xi(n,t),t=_w(e,t,1),e=Nr(e,t,1),t=Nt(),e!==null&&(ba(e,1,t),jt(e,t));break}}e=e.return}}function KS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ut&n)===n&&(Qe===4||Qe===3&&(ut&130023424)===ut&&500>Ue()-xp?hs(t,0):wp|=n),jt(t,e)}function jw(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=Nt();t=Xn(t,e),t!==null&&(ba(t,e,n),jt(t,n))}function QS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jw(t,n)}function YS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),jw(t,n)}var Vw;Vw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,jS(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&B0(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gl(t,e),t=e.pendingProps;var s=_i(e,Et.current);li(e,n),s=pp(null,e,r,t,s,n);var i=mp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(i=!0,gu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,up(e),s.updater=mc,e.stateNode=s,s._reactInternals=e,Bd(e,r,t,n),e=Wd(null,e,r,!0,i,n)):(e.tag=0,Re&&i&&np(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=JS(r),t=ln(r,t),s){case 0:e=$d(null,e,r,t,n);break e;case 1:e=P_(null,e,r,t,n);break e;case 11:e=R_(null,e,r,t,n);break e;case 14:e=b_(null,e,r,ln(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),$d(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),P_(t,e,r,s,n);case 3:e:{if(xw(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,H0(t,e),xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=xi(Error(F(423)),e),e=D_(t,e,r,n,s);break e}else if(r!==s){s=xi(Error(F(424)),e),e=D_(t,e,r,n,s);break e}else for(Wt=kr(e.stateNode.containerInfo.firstChild),Ht=e,Re=!0,cn=null,n=Q0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===s){e=Jn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return Y0(e),t===null&&Vd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Dd(r,s)?o=null:i!==null&&Dd(r,i)&&(e.flags|=32),ww(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Vd(e),null;case 13:return Ew(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vi(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),R_(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ce(vu,r._currentValue),r._currentValue=o,i!==null)if(vn(i.value,o)){if(i.children===s.children&&!Mt.current){e=Jn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Hn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Fd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,li(e,n),s=en(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),b_(t,e,r,s,n);case 15:return yw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Gl(t,e),e.tag=1,Lt(r)?(t=!0,gu(e)):t=!1,li(e,n),q0(e,r,s),Bd(e,r,s,n),Wd(null,e,r,!0,t,n);case 19:return Iw(t,e,n);case 22:return vw(t,e,n)}throw Error(F(156,e.tag))};function Fw(t,e){return h0(t,e)}function XS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new XS(t,e,n,r)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JS(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wf)return 11;if(t===Hf)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ds(n.children,s,i,e);case $f:o=8,s|=8;break;case hd:return t=Xt(12,n,e,s|2),t.elementType=hd,t.lanes=i,t;case dd:return t=Xt(13,n,e,s),t.elementType=dd,t.lanes=i,t;case fd:return t=Xt(19,n,e,s),t.elementType=fd,t.lanes=i,t;case Kv:return vc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gv:o=10;break e;case qv:o=9;break e;case Wf:o=11;break e;case Hf:o=14;break e;case fr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ds(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function vc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=Kv,t.lanes=n,t.stateNode={isHidden:!1},t}function Wh(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Hh(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ch(0),this.expirationTimes=Ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ch(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Sp(t,e,n,r,s,i,o,l,u){return t=new ZS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(i),t}function e1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uw(t){if(!t)return Vr;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Lt(n))return F0(t,n,e)}return e}function Bw(t,e,n,r,s,i,o,l,u){return t=Sp(n,r,!0,t,s,i,o,l,u),t.context=Uw(null),n=t.current,r=Nt(),s=Rr(n),i=Hn(r,s),i.callback=e??null,Nr(n,i,s),t.current.lanes=s,ba(t,s,r),jt(t,r),t}function wc(t,e,n,r){var s=e.current,i=Nt(),o=Rr(s);return n=Uw(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(s,e,o),t!==null&&(_n(t,s,o,i),$l(t,s,o)),o}function Au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kp(t,e){$_(t,e),(t=t.alternate)&&$_(t,e)}function t1(){return null}var zw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Np(t){this._internalRoot=t}xc.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));wc(t,e,null,null)};xc.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vs(function(){wc(null,t,null,null)}),e[Yn]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=y0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&w0(t)}};function Ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function W_(){}function n1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Au(o);i.call(c)}}var o=Bw(e,r,t,0,null,!1,!1,"",W_);return t._reactRootContainer=o,t[Yn]=o.current,na(t.nodeType===8?t.parentNode:t),vs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Au(u);l.call(c)}}var u=Sp(t,0,!1,null,null,!1,!1,"",W_);return t._reactRootContainer=u,t[Yn]=u.current,na(t.nodeType===8?t.parentNode:t),vs(function(){wc(e,u,n,r)}),u}function Ic(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Au(o);l.call(u)}}wc(e,o,t,s)}else o=n1(n,e,t,s,r);return Au(o)}g0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(Kf(e,n|1),jt(e,Ue()),!(pe&6)&&(Ei=Ue()+500,Qr()))}break;case 13:vs(function(){var r=Xn(t,1);if(r!==null){var s=Nt();_n(r,t,1,s)}}),kp(t,1)}};Qf=function(t){if(t.tag===13){var e=Xn(t,134217728);if(e!==null){var n=Nt();_n(e,t,134217728,n)}kp(t,134217728)}};_0=function(t){if(t.tag===13){var e=Rr(t),n=Xn(t,e);if(n!==null){var r=Nt();_n(n,t,e,r)}kp(t,e)}};y0=function(){return ye};v0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Id=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=fc(r);if(!s)throw Error(F(90));Yv(r),gd(r,s)}}}break;case"textarea":Jv(t,n);break;case"select":e=n.value,e!=null&&si(t,!!n.multiple,e,!1)}};i0=Ep;o0=vs;var r1={usingClientEntryPoint:!1,Events:[Da,Qs,fc,r0,s0,Ep]},mo={findFiberByHostInstance:os,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},s1={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=u0(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||t1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{uc=Nl.inject(s1),Tn=Nl}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ap(e))throw Error(F(200));return e1(t,e,null,n)};qt.createRoot=function(t,e){if(!Ap(t))throw Error(F(299));var n=!1,r="",s=zw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Sp(t,1,!1,null,null,n,!1,r,s),t[Yn]=e.current,na(t.nodeType===8?t.parentNode:t),new Np(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=u0(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return vs(t)};qt.hydrate=function(t,e,n){if(!Ec(e))throw Error(F(200));return Ic(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Ap(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=zw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bw(e,null,t,1,n??null,s,!1,i,o),t[Yn]=e.current,na(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new xc(e)};qt.render=function(t,e,n){if(!Ec(e))throw Error(F(200));return Ic(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(F(40));return t._reactRootContainer?(vs(function(){Ic(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};qt.unstable_batchedUpdates=Ep;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ec(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Ic(t,e,n,!1,r)};qt.version="18.2.0-next-9e3b772b8-20220608";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(t){console.error(t)}}$w(),Bv.exports=qt;var i1=Bv.exports,H_=i1;ud.createRoot=H_.createRoot,ud.hydrateRoot=H_.hydrateRoot;const o1=({currentView:t,onViewChange:e,partnerName:n,userProfile:r})=>{const s=[{id:"dashboard",label:"家庭概览",icon:"🏠"},{id:"recipes",label:"私房食谱",icon:"📖"},{id:"plan",label:"烹饪计划",icon:"📅"},{id:"shopping",label:"协作采购",icon:"🛒"},{id:"inventory",label:"冰箱库存",icon:"🧊"},{id:"settings",label:"设置中心",icon:"⚙️"}];return d.jsxs("div",{className:"hidden lg:flex w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 flex-col z-50",children:[d.jsxs("div",{className:"p-10 pt-12",children:[d.jsxs("h1",{className:"text-3xl font-black text-gray-900 tracking-tighter italic",children:["HOMETASTE",d.jsx("span",{className:"text-emerald-500",children:"."})]}),d.jsxs("div",{className:"mt-6 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"}),"Connected"]})]}),d.jsx("nav",{className:"flex-1 px-6 space-y-1.5 mt-4",children:s.map(i=>d.jsxs("button",{onClick:()=>e(i.id),className:`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${t===i.id?"bg-gray-900 text-white shadow-xl scale-105":"text-gray-400 hover:bg-gray-50 hover:text-gray-900"}`,children:[d.jsx("span",{className:"text-xl",children:i.icon}),d.jsx("span",{className:"text-xs font-black uppercase tracking-widest",children:i.label})]},i.id))}),d.jsx("div",{className:"p-8",children:d.jsxs("button",{onClick:()=>e("settings"),className:"w-full flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:bg-emerald-50 transition-all group",children:[d.jsx("img",{src:r.avatar,className:"w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover",alt:"Avatar"}),d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsx("p",{className:"text-[10px] font-black text-gray-800 truncate uppercase",children:r.name}),d.jsx("p",{className:"text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] truncate",children:"Premium Chef"})]})]})})]})},a1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 21C12 21 17 18 17 12C17 6 12 2 12 2C12 2 7 6 7 12C7 18 12 21 12 21Z",className:"text-emerald-600",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 21V12",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L15 6",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L9 6",strokeLinecap:"round"})]}),l1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("circle",{cx:"12",cy:"13",r:"8",className:"text-red-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 5V2",strokeLinecap:"round"}),d.jsx("path",{d:"M12 5L15 2",strokeLinecap:"round"})]}),u1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",className:"text-rose-500",fill:"currentColor",fillOpacity:"0.1",strokeLinecap:"round"}),d.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"currentColor",className:"text-white"}),d.jsx("path",{d:"M5 8C5 8 7 10 9 10C11 10 13 8 13 8",strokeLinecap:"round"})]}),c1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 2 16 2 10C2 4 6 2 12 2C18 2 20 4.47715 20 10Z",className:"text-blue-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M20 10L23 13",strokeLinecap:"round"}),d.jsx("path",{d:"M20 10L23 7",strokeLinecap:"round"})]}),h1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M7 6H17V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V6Z",className:"text-yellow-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M5 6H19",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L12 6",strokeLinecap:"round"})]}),d1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("ellipse",{cx:"8",cy:"12",rx:"4",ry:"6",transform:"rotate(-30 8 12)",className:"text-amber-700",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("ellipse",{cx:"16",cy:"12",rx:"4",ry:"6",transform:"rotate(30 16 12)",className:"text-amber-600",fill:"currentColor",fillOpacity:"0.2"})]}),f1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 22C16.4183 22 20 18.4183 20 14C20 9 12 2 12 2C12 2 4 9 4 14C4 18.4183 7.58172 22 12 22Z",className:"text-yellow-600",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 10V16",strokeLinecap:"round"})]}),p1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 4C7 4 3 8 3 11H21C21 8 17 4 12 4Z",className:"text-stone-600",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("path",{d:"M12 11V20",strokeLinecap:"round",strokeWidth:"2"}),d.jsx("path",{d:"M8 20H16",strokeLinecap:"round"})]}),m1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("rect",{x:"7",y:"8",width:"10",height:"14",rx:"2",className:"text-gray-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M7 8L9 2H15L17 8"})]}),g1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M7 6L5 21H19L17 6H7Z",className:"text-blue-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 6V2"}),d.jsx("path",{d:"M9 2H15"})]}),_1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14",className:"text-orange-100",fill:"currentColor",fillOpacity:"0.5"}),d.jsx("path",{d:"M2 14H22",strokeLinecap:"round"}),d.jsx("path",{d:"M12 14V10"}),d.jsx("path",{d:"M7 14C7 10 12 8 12 8C12 8 17 10 17 14",strokeLinecap:"round"})]}),y1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("rect",{x:"3",y:"7",width:"18",height:"14",rx:"2",className:"text-gray-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M3 7L12 2L21 7"}),d.jsx("path",{d:"M12 12V16"})]}),v1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"}),d.jsx("path",{d:"M9 22V12H15V22"})]}),w1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),d.jsx("path",{d:"M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z"})]}),Ww=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),d.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),d.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),d.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Hw=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"9",cy:"21",r:"1"}),d.jsx("circle",{cx:"20",cy:"21",r:"1"}),d.jsx("path",{d:"M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"})]}),Gw=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z"}),d.jsx("path",{d:"M3 10H21"}),d.jsx("path",{d:"M10 5V8"}),d.jsx("path",{d:"M10 14V17"})]}),x1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M15 4V2"}),d.jsx("path",{d:"M15 16V14"}),d.jsx("path",{d:"M8 9H10"}),d.jsx("path",{d:"M20 9H22"}),d.jsx("path",{d:"M17.8 11.8L19 13"}),d.jsx("path",{d:"M10.6 5.2L12 6.6"}),d.jsx("path",{d:"M17.8 6.2L19 5"}),d.jsx("path",{d:"M10.6 12.8L12 11.4"}),d.jsx("path",{d:"M2 21L7 16"})]}),E1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M12 2V6"}),d.jsx("path",{d:"M12 18V22"}),d.jsx("path",{d:"M4.93 4.93L7.76 7.76"}),d.jsx("path",{d:"M16.24 16.24L19.07 19.07"}),d.jsx("path",{d:"M2 12H6"}),d.jsx("path",{d:"M18 12H22"}),d.jsx("path",{d:"M4.93 19.07L7.76 16.24"}),d.jsx("path",{d:"M16.24 7.76L19.07 4.93"})]}),I1=["蔬菜","水果","肉类","海鲜","蛋奶","豆制品","粮油","干货","调料","饮品","主食","其他"],G_=["常温","冷藏","冷冻"],T1=({inventory:t,onAdd:e,onUpdate:n,onDelete:r,onAIScan:s,isScanning:i})=>{const[o,l]=W.useState("全部"),[u,c]=W.useState(""),[p,m]=W.useState(!1),[g,T]=W.useState(!1),[C,A]=W.useState({name:"",amount:1,unit:"份",category:"蔬菜",storageZone:"冷藏"}),L=W.useRef(null),S=b=>{const w={className:"w-8 h-8"};switch(b){case"蔬菜":return d.jsx(a1,{...w});case"水果":return d.jsx(l1,{...w});case"肉类":return d.jsx(u1,{...w});case"蛋奶":return d.jsx(h1,{...w});case"豆制品":return d.jsx(d1,{...w});case"粮油":return d.jsx(f1,{...w});case"干货":return d.jsx(p1,{...w});case"调料":return d.jsx(m1,{...w});case"主食":return d.jsx(_1,{...w});case"海鲜":return d.jsx(c1,{...w});case"饮品":return d.jsx(g1,{...w});default:return d.jsx(y1,{...w})}},E=t.filter(b=>{const w=o==="全部"||b.storageZone===o,y=b.name.toLowerCase().includes(u.toLowerCase());return w&&y}),N=()=>{T(!1),A({name:"",amount:1,unit:"份",category:"蔬菜",storageZone:"冷藏"}),m(!0)},D=b=>{T(!0),A({...b}),m(!0)},O=()=>{C.name&&(g&&C.id?(r(C.id),e({...C,id:Date.now().toString()})):e(C),m(!1))};return d.jsxs("div",{className:"p-5 lg:p-10 pb-64 space-y-8 max-w-4xl mx-auto animate-in fade-in duration-500",children:[p&&d.jsx("div",{className:"fixed inset-0 z-[200] bg-black/60 backdrop-blur-xl flex items-center justify-center p-6",children:d.jsxs("div",{className:"bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl space-y-6 animate-in zoom-in-95",children:[d.jsx("h3",{className:"text-xl font-black",children:g?"编辑食材":"录入食材"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"名称"}),d.jsx("input",{type:"text",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold outline-none focus:ring-1 ring-emerald-400",value:C.name,onChange:b=>A({...C,name:b.target.value})})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"数量"}),d.jsx("input",{type:"number",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none",value:C.amount,onChange:b=>A({...C,amount:Number(b.target.value)})})]}),d.jsxs("div",{className:"w-24",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"单位"}),d.jsx("input",{type:"text",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none",placeholder:"个",value:C.unit,onChange:b=>A({...C,unit:b.target.value})})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"存放区域"}),d.jsx("div",{className:"flex gap-2 mt-1",children:G_.map(b=>d.jsx("button",{onClick:()=>A({...C,storageZone:b}),className:`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${C.storageZone===b?"bg-gray-900 text-white":"bg-gray-50 text-gray-400"}`,children:b},b))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"分类"}),d.jsx("div",{className:"grid grid-cols-4 gap-2 mt-1",children:I1.map(b=>d.jsx("button",{onClick:()=>A({...C,category:b}),className:`py-2 rounded-lg text-[10px] font-bold transition-all ${C.category===b?"bg-emerald-600 text-white":"bg-gray-50 text-gray-500"}`,children:b},b))})]}),d.jsxs("div",{className:"flex gap-3 pt-2",children:[d.jsx("button",{onClick:O,className:"flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg",children:"保存"}),d.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 bg-gray-100 text-gray-400 rounded-xl font-bold",children:"取消"})]})]})]})}),i&&d.jsxs("div",{className:"fixed inset-0 z-[1000] bg-emerald-950/90 backdrop-blur-3xl flex flex-col items-center justify-center p-12 text-center animate-in fade-in",children:[d.jsx("div",{className:"w-16 h-16 border-4 border-emerald-500/30 rounded-full border-t-emerald-400 animate-spin mb-6"}),d.jsx("h4",{className:"text-white text-xl font-bold",children:"正在识别食材..."})]}),d.jsxs("header",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 tracking-tight italic",children:"食材储备"}),d.jsx("div",{className:"flex bg-gray-100 p-1 rounded-xl w-fit",children:["全部",...G_].map(b=>d.jsx("button",{onClick:()=>l(b),className:`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${o===b?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:b},b))})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsxs("div",{className:"flex-1 relative",children:[d.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm",children:"🔍"}),d.jsx("input",{type:"text",placeholder:"搜索...",className:"w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm",value:u,onChange:b=>c(b.target.value)})]}),d.jsx("button",{onClick:()=>{var b;return(b=L.current)==null?void 0:b.click()},className:"px-5 bg-emerald-600 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all",children:"📸"}),d.jsx("button",{onClick:N,className:"px-5 bg-gray-900 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all",children:"＋"}),d.jsx("input",{type:"file",ref:L,className:"hidden",accept:"image/*",onChange:b=>{var y;const w=(y=b.target.files)==null?void 0:y[0];if(w&&s){const x=new FileReader;x.onloadend=()=>s(x.result),x.readAsDataURL(w)}}})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:E.map(b=>d.jsxs("div",{className:"bg-white rounded-2xl border border-gray-50 flex items-center p-3 relative group hover:border-emerald-100 hover:shadow-lg transition-all",children:[d.jsx("div",{onClick:()=>D(b),className:"w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 mr-3 cursor-pointer hover:bg-emerald-50 transition-colors",children:S(b.category)}),d.jsxs("div",{onClick:()=>D(b),className:"flex-1 min-w-0 cursor-pointer mr-2",children:[d.jsx("h4",{className:"font-black text-gray-900 text-base truncate",children:b.name}),d.jsxs("p",{className:"text-[10px] font-bold text-gray-400 mt-0.5",children:[b.storageZone," • ",b.category]})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 shrink-0",children:[d.jsx("button",{onClick:()=>n(b.id,Math.max(0,b.amount-1)),className:"w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all",children:"－"}),d.jsxs("span",{className:"font-black text-emerald-700 min-w-[2rem] text-center text-sm",children:[b.amount,d.jsx("span",{className:"text-[9px] text-gray-400 ml-0.5",children:b.unit})]}),d.jsx("button",{onClick:()=>n(b.id,b.amount+1),className:"w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all",children:"＋"})]}),d.jsx("button",{onClick:()=>r(b.id),className:"absolute -top-1.5 -right-1.5 w-6 h-6 bg-white border border-gray-100 rounded-full text-[10px] text-gray-300 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10",children:"✕"})]},b.id))})]})},C1="modulepreload",S1=function(t,e){return new URL(t,e).href},q_={},qw=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=S1(c,r),c in q_)return;q_[c]=!0;const p=c.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let C=o.length-1;C>=0;C--){const A=o[C];if(A.href===c&&(!p||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const T=document.createElement("link");if(T.rel=p?"stylesheet":C1,p||(T.as="script"),T.crossOrigin="",T.href=c,u&&T.setAttribute("nonce",u),document.head.appendChild(T),p)return new Promise((C,A)=>{T.addEventListener("load",C),T.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},k1=(t=new Date)=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`},N1=()=>{const t=[],e=new Date;for(let n=0;n<7;n++){const r=new Date(e);r.setDate(e.getDate()+n);const s=k1(r),i=r.toLocaleDateString("zh-CN",{weekday:"short"}),o=r.getDate();let l=n===0?"今天":n===1?"明天":"";t.push({iso:s,weekday:i,day:o,label:l})}return t},A1=t=>t>=4.5?"绝绝子，必须配三碗米饭！":t>=3.5?"挺下饭的，味道扎实。":t>=2.5?"中规中矩，还可以。":"口味清淡，不怎么费米饭。",R1=({recipe:t,inventory:e,plans:n,onBack:r,onEdit:s,onPlan:i})=>{var S,E,N,D;const[o,l]=W.useState(!1),[u,c]=W.useState(!1),[p,m]=W.useState(0),[g,T]=W.useState(!1),C=W.useRef(null);W.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t.id]);const A=O=>{const b=e.find(w=>O.name.includes(w.name)||w.name.includes(O.name));return b?b.amount<O.amount?{text:"不足",color:"text-amber-500"}:{text:"充足",color:"text-emerald-500"}:{text:"缺货",color:"text-red-500"}},L=async()=>{var O;if(!(!C.current||g)){T(!0);try{const{default:b}=await qw(async()=>{const{default:k}=await import("./html2canvas.esm-CBrSDip1.js");return{default:k}},[],import.meta.url),w=await b(C.current,{backgroundColor:"#fffcf5",scale:Math.min(window.devicePixelRatio||2,3),useCORS:!0}),y=await new Promise(k=>{w.toBlob(k,"image/png")});if(!y)throw new Error("导出图片失败");const x=t.title.replace(/[\\/:*?"<>|]/g,"-"),I=new File([y],`${x||"HomeTaste-recipe"}.png`,{type:"image/png"});if(navigator.share&&((O=navigator.canShare)!=null&&O.call(navigator,{files:[I]})))await navigator.share({files:[I],title:t.title,text:`${t.title} 菜谱导出`});else{const k=URL.createObjectURL(y),R=document.createElement("a");R.href=k,R.download=I.name,document.body.appendChild(R),R.click(),document.body.removeChild(R),URL.revokeObjectURL(k)}}catch(b){console.error("导出菜谱失败",b),window.alert("保存失败了，请再试一次。")}finally{T(!1)}}};return d.jsxs("div",{className:"min-h-screen bg-white animate-in slide-in-from-bottom duration-500 relative pb-32",children:[u&&d.jsxs("div",{className:"fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto",onClick:()=>c(!1),children:[d.jsxs("div",{ref:C,className:"bg-[#fffcf5] w-full max-w-md rounded-none shadow-2xl p-8 space-y-6 relative border-[12px] border-double border-emerald-950/10 my-10",onClick:O=>O.stopPropagation(),children:[d.jsx("div",{className:"absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-900/20"}),d.jsx("button",{onClick:()=>c(!1),className:"absolute top-6 left-6 h-9 px-4 rounded-full border border-emerald-900/10 bg-white/80 text-[11px] font-bold text-emerald-900 shadow-sm",children:"返回"}),d.jsxs("div",{className:"text-center space-y-2 pt-2",children:[d.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800/60 block mb-2",children:t.category}),d.jsx("h2",{className:"text-3xl font-black italic text-emerald-950 font-serif leading-tight",children:t.title}),t.description&&d.jsxs("p",{className:"text-xs text-gray-500 font-serif italic px-4",children:['"',t.description,'"']})]}),d.jsxs("div",{className:"flex justify-center gap-6 py-2 border-t border-b border-emerald-900/10",children:[d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"PREP"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[t.prepTime," min"]})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"COOK"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[t.cookTime," min"]})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"RATING"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[((S=t.rating)==null?void 0:S.toFixed(1))||5," ★"]})]})]}),d.jsx("div",{className:"aspect-video w-full overflow-hidden bg-gray-100 grayscale-[0.2] contrast-125",children:d.jsx("img",{src:t.images[0],className:"w-full h-full object-cover",alt:t.title})}),d.jsxs("div",{className:"space-y-4",children:[d.jsx("h4",{className:"text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2",children:"Ingredients"}),d.jsx("div",{className:"grid grid-cols-2 gap-x-6 gap-y-2 text-xs",children:t.ingredients.map((O,b)=>d.jsxs("div",{className:"flex justify-between items-baseline border-b border-emerald-900/5 pb-1",children:[d.jsx("span",{className:"font-bold text-emerald-950",children:O.name}),d.jsxs("span",{className:"text-emerald-800/60 font-medium",children:[O.amount,O.unit]})]},b))})]}),d.jsxs("div",{className:"space-y-4 pb-4",children:[d.jsx("h4",{className:"text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2",children:"Method"}),d.jsx("div",{className:"space-y-3",children:t.steps.map((O,b)=>d.jsxs("div",{className:"flex gap-3 text-xs leading-relaxed text-emerald-950/80",children:[d.jsxs("span",{className:"font-black text-emerald-700",children:[b+1,"."]}),d.jsx("span",{children:O})]},b))})]}),d.jsx("div",{className:"text-center border-t-2 border-emerald-900/5 pt-4",children:d.jsx("p",{className:"text-[8px] font-black uppercase tracking-[0.5em] text-emerald-900/40",children:"HomeTaste • Artisan Kitchen"})})]}),d.jsx("button",{onClick:L,disabled:g,className:"fixed bottom-6 left-6 right-6 py-4 bg-emerald-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl z-50 disabled:opacity-60 disabled:cursor-not-allowed",children:g?"正在生成图片…":"保存至相册"})]}),d.jsxs("div",{className:"relative h-[35vh] overflow-hidden bg-gray-100",children:[d.jsx("div",{className:"w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar",onScroll:O=>{m(Math.round(O.currentTarget.scrollLeft/O.currentTarget.offsetWidth))},children:(E=t.images)==null?void 0:E.map((O,b)=>d.jsx("img",{src:O,className:"w-full h-full object-cover shrink-0 snap-center",alt:""},b))}),d.jsxs("div",{className:"absolute top-4 right-4 flex gap-2 z-40",children:[d.jsx("button",{onClick:()=>c(!0),className:"h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10",children:d.jsx("span",{children:"✨ 导出"})}),s&&d.jsx("button",{onClick:s,className:"h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10",children:d.jsx("span",{children:"✎ 编辑"})})]}),d.jsx("div",{className:"absolute bottom-4 right-4 flex gap-2 z-40",children:d.jsxs("div",{className:"px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center gap-1 border border-white/10 shadow-lg",children:[d.jsx("span",{className:"text-amber-400 text-xs",children:"★"}),d.jsx("span",{className:"text-xs font-bold text-white",children:((N=t.rating)==null?void 0:N.toFixed(1))||"5.0"})]})}),d.jsx("div",{className:"absolute top-4 left-4 z-30",children:d.jsx("button",{onClick:r,className:"w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center text-lg active:scale-90 transition-all",children:"✕"})}),t.images.length>1&&d.jsx("div",{className:"absolute bottom-4 left-4 flex gap-1 z-20",children:t.images.map((O,b)=>d.jsx("div",{className:`h-1 rounded-full transition-all duration-300 ${p===b?"w-4 bg-white":"w-1.5 bg-white/40"}`},b))})]}),d.jsxs("div",{className:"px-5 py-6 max-w-4xl mx-auto space-y-8",children:[d.jsxs("header",{children:[d.jsx("div",{className:"flex items-center gap-2 mb-2",children:d.jsx("span",{className:"px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase",children:t.category})}),d.jsx("h1",{className:"text-2xl font-black text-gray-900 tracking-tight",children:t.title}),t.description&&d.jsx("p",{className:"text-gray-500 text-sm mt-2 leading-relaxed",children:t.description}),d.jsxs("div",{className:"flex gap-6 mt-4 text-xs font-bold text-gray-500",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-emerald-600",children:"🕒"}),d.jsxs("span",{children:["准备 ",t.prepTime,"分钟"]})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-orange-500",children:"🔥"}),d.jsxs("span",{children:["烹饪 ",t.cookTime,"分钟"]})]})]})]}),t.appetizingRating&&d.jsxs("div",{className:"p-4 bg-orange-50 rounded-xl border border-orange-100/50",children:[d.jsx("p",{className:"text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1",children:"下饭指数"}),d.jsxs("p",{className:"text-sm font-bold text-orange-800 italic",children:["“ ",A1(t.appetizingRating)," ”"]})]}),((D=t.source)==null?void 0:D.url)&&d.jsxs("a",{href:t.source.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors bg-gray-50 p-3 rounded-lg",children:[d.jsx("span",{children:"🔗 灵感来源"}),d.jsx("span",{className:"text-[10px] opacity-50 truncate flex-1 text-right",children:t.source.url})]}),d.jsxs("section",{children:[d.jsxs("div",{className:"flex items-baseline justify-between mb-4 pb-2 border-b border-gray-100",children:[d.jsx("h3",{className:"text-lg font-black text-gray-900",children:"所需食材"}),d.jsxs("span",{className:"text-xs font-bold text-gray-300",children:[t.ingredients.length," 项"]})]}),d.jsx("div",{className:"space-y-1",children:t.ingredients.map((O,b)=>{const w=A(O);return d.jsxs("div",{className:"flex justify-between items-center py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors",children:[d.jsx("span",{className:"font-bold text-gray-800 text-sm",children:O.name}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs("span",{className:"text-sm font-medium text-gray-600 font-mono",children:[O.amount,O.unit]}),d.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${w.color.replace("text","bg")}`,title:w.text})]})]},b)})})]}),d.jsxs("section",{children:[d.jsx("h3",{className:"text-lg font-black mb-4 text-gray-900 pb-2 border-b border-gray-100",children:"制作步骤"}),d.jsx("div",{className:"space-y-6",children:t.steps.map((O,b)=>d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("span",{className:"text-emerald-600 font-black text-lg font-serif italic",children:[b+1,"."]}),d.jsx("p",{className:"text-gray-800 leading-relaxed font-medium text-sm pt-1",children:O})]},b))})]})]}),d.jsx("div",{className:"fixed bottom-6 left-0 right-0 px-6 z-[90]",children:d.jsx("div",{className:"max-w-2xl mx-auto",children:o?d.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] border border-gray-100 space-y-3 animate-in slide-in-from-bottom",children:[d.jsxs("div",{className:"flex justify-between items-center px-2",children:[d.jsx("p",{className:"text-xs font-bold text-gray-400",children:"选择烹饪日期"}),d.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 p-2",children:"✕"})]}),d.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar py-1",children:N1().map(O=>d.jsxs("button",{onClick:()=>{i(t.id,O.iso),l(!1)},className:"shrink-0 w-14 h-16 bg-gray-50 hover:bg-emerald-600 hover:text-white rounded-xl flex flex-col items-center justify-center transition-all",children:[d.jsx("span",{className:"text-[10px] font-bold opacity-60 mb-0.5",children:O.label||O.weekday}),d.jsx("span",{className:"text-lg font-black",children:O.day})]},O.iso))})]}):d.jsx("button",{onClick:()=>l(!0),className:"w-full h-12 bg-emerald-900 text-white rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-2 uppercase tracking-wider active:scale-95 transition-all",children:"🍳 加入计划"})})})]})},K_=(t=new Date)=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`},b1=({plans:t,recipes:e,inventory:n,onRemoveFromPlan:r,onArchive:s,onAddItemsToShopping:i,onDeductInventory:o,onRecipeFeedback:l,history:u})=>{const[c,p]=W.useState("plan"),m=W.useMemo(()=>K_(),[]),[g,T]=W.useState(m),[C,A]=W.useState(new Date),L=W.useRef(null),[S,E]=W.useState(null),[N,D]=W.useState({}),[O,b]=W.useState(5),[w,y]=W.useState(5),x=W.useMemo(()=>{const _=[];for(let X=-3;X<=3;X++){const se=new Date(C);se.setDate(C.getDate()+X);const _e=K_(se),we=se.toLocaleDateString("zh-CN",{weekday:"short"}),z=se.getDate(),Q=t[_e]&&t[_e].length>0,j=_e===m;_.push({iso:_e,weekday:we,day:z,hasPlan:Q,isToday:j})}return _},[C,t,m]);W.useEffect(()=>{if(L.current){const _=L.current.querySelector('[data-selected="true"]');_&&_.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}},[g,C]);const I=_=>{T(_);const[X,se,_e]=_.split("-").map(Number),we=new Date(X,se-1,_e);A(we)},k=W.useMemo(()=>{const _=t[g]||[];return e.filter(X=>_.includes(X.id))},[t,g,e]),R=W.useMemo(()=>{const _={};return k.forEach(X=>{(X.ingredients||[]).forEach(se=>{var _e;_[se.name]={amount:(((_e=_[se.name])==null?void 0:_e.amount)||0)+se.amount,unit:se.unit}})}),Object.entries(_).map(([X,se])=>{const _e=n.find(z=>z.name===X),we=_e?_e.amount:0;return{name:X,required:se.amount,has:we,unit:se.unit,isShort:se.amount>we}})},[k,n]);return d.jsxs("div",{className:"p-5 lg:p-10 pb-[35rem] space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto",children:[S&&d.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/60 backdrop-blur-2xl flex items-center justify-center p-6",children:d.jsxs("div",{className:"bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300",children:[d.jsx("h3",{className:"text-xl font-black text-gray-900 mb-6 flex items-center gap-2",children:d.jsxs("span",{children:["复盘: ",S.title]})}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("section",{className:"space-y-4",children:[d.jsx("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1",children:"确认食材消耗"}),d.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto no-scrollbar",children:S.ingredients.map(_=>d.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100",children:[d.jsx("span",{className:"font-bold text-gray-700 text-sm truncate mr-4",children:_.name}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("button",{onClick:()=>D(X=>({...X,[_.name]:Math.max(0,X[_.name]-.5)})),className:"w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100",children:"-"}),d.jsx("span",{className:"w-10 text-center font-black text-sm text-emerald-600",children:N[_.name]}),d.jsx("button",{onClick:()=>D(X=>({...X,[_.name]:X[_.name]+.5})),className:"w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100",children:"+"})]})]},_.name))})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"p-4 bg-amber-50 rounded-2xl border border-amber-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("label",{className:"text-[10px] font-black text-amber-600 uppercase",children:"美味"}),d.jsxs("span",{className:"text-sm font-black text-amber-500",children:[O,".0"]})]}),d.jsx("div",{className:"flex justify-between",children:[1,2,3,4,5].map(_=>d.jsx("button",{onClick:()=>b(_),className:`text-xl transition-all ${O>=_?"grayscale-0 scale-110":"grayscale opacity-20"}`,children:"⭐"},_))})]}),d.jsxs("div",{className:"p-4 bg-orange-50 rounded-2xl border border-orange-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("label",{className:"text-[10px] font-black text-orange-600 uppercase",children:"下饭"}),d.jsxs("span",{className:"text-sm font-black text-orange-500",children:[w,".0"]})]}),d.jsx("div",{className:"flex justify-between",children:[1,2,3,4,5].map(_=>d.jsx("button",{onClick:()=>y(_),className:`text-xl transition-all ${w>=_?"grayscale-0 scale-110":"grayscale opacity-20"}`,children:"🍚"},_))})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8",children:[d.jsx("button",{onClick:()=>E(null),className:"py-4 bg-gray-100 text-gray-500 rounded-xl font-bold text-xs",children:"取消"}),d.jsx("button",{onClick:()=>{o(Object.entries(N).map(([_,X])=>({name:_,amount:X}))),l(S.id,O,w),r(S.id,g),k.length===1&&s(g),E(null)},className:"py-4 bg-gray-900 text-white rounded-xl font-bold text-xs shadow-lg",children:"完成复盘"})]})]})}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 italic",children:"烹饪计划"}),d.jsxs("div",{className:"flex bg-gray-100 p-1 rounded-xl",children:[d.jsx("button",{onClick:()=>p("plan"),className:`px-5 py-2 rounded-lg text-xs font-bold transition-all ${c==="plan"?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:"当前"}),d.jsx("button",{onClick:()=>p("history"),className:`px-5 py-2 rounded-lg text-xs font-bold transition-all ${c==="history"?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:"历史"})]})]}),c==="plan"?d.jsxs("div",{className:"space-y-8",children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex justify-between items-center px-2",children:[d.jsx("button",{onClick:()=>{A(new Date),T(m)},className:"text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg",children:"回到今天"}),d.jsxs("div",{className:"flex gap-4 text-[10px] font-bold text-gray-400",children:[d.jsx("button",{onClick:()=>{const _=new Date(C);_.setDate(_.getDate()-7),A(_)},children:"← 上周"}),d.jsx("button",{onClick:()=>{const _=new Date(C);_.setDate(_.getDate()+7),A(_)},children:"下周 →"})]})]}),d.jsx("div",{ref:L,className:"bg-white p-2 rounded-2xl border border-gray-100 flex justify-between overflow-x-auto no-scrollbar snap-x",children:x.map(_=>d.jsxs("button",{"data-selected":g===_.iso,onClick:()=>I(_.iso),className:`snap-center flex-shrink-0 w-12 h-16 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${g===_.iso?"bg-gray-900 text-white shadow-lg scale-105":_.isToday?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-50"}`,children:[d.jsx("span",{className:"text-[9px] font-bold uppercase",children:_.weekday}),d.jsx("span",{className:"text-lg font-black",children:_.day}),_.hasPlan&&d.jsx("div",{className:`w-1 h-1 rounded-full ${g===_.iso?"bg-emerald-400":"bg-emerald-500"}`})]},_.iso))})]}),d.jsxs("section",{children:[d.jsx("div",{className:"flex items-baseline gap-3 mb-4",children:d.jsxs("h3",{className:"text-lg font-black text-gray-900",children:[g," 菜单"]})}),k.length===0?d.jsx("div",{className:"bg-white py-12 rounded-2xl border-2 border-dashed border-gray-100 text-center",children:d.jsx("p",{className:"text-xs font-bold text-gray-400",children:"暂无安排"})}):d.jsx("div",{className:"space-y-3",children:k.map(_=>{var X;return d.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4",children:[d.jsx("img",{src:(X=_.images)==null?void 0:X[0],className:"w-16 h-16 rounded-xl object-cover",alt:""}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("h4",{className:"font-bold text-gray-900 text-base truncate",children:_.title}),d.jsxs("p",{className:"text-[10px] font-bold text-gray-400 mt-1",children:[_.prepTime+_.cookTime," 分钟"]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>{const se={};_.ingredients.forEach(_e=>se[_e.name]=_e.amount),D(se),E(_)},className:"w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg hover:bg-emerald-600 hover:text-white transition-all",children:"✓"}),d.jsx("button",{onClick:()=>r(_.id,g),className:"w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center text-lg hover:bg-red-50 hover:text-red-500 transition-all",children:"✕"})]})]},_.id)})})]}),k.length>0&&R.some(_=>_.isShort)&&d.jsxs("section",{className:"bg-white rounded-2xl p-6 border border-gray-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-sm font-black text-gray-900",children:"缺少食材"}),d.jsx("button",{onClick:()=>{const _=R.filter(X=>X.isShort).map(X=>({name:X.name,amount:`${Math.round((X.required-X.has)*10)/10}${X.unit}`}));i(_),alert(`已添加 ${_.length} 项到清单`)},className:"text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg",children:"一键加入清单"})]}),d.jsx("div",{className:"space-y-2",children:R.filter(_=>_.isShort).map(_=>d.jsxs("div",{className:"flex justify-between items-center text-sm",children:[d.jsx("span",{className:"font-bold text-gray-700",children:_.name}),d.jsxs("span",{className:"text-red-500 font-bold text-xs",children:["缺 ",Math.round((_.required-_.has)*10)/10,_.unit]})]},_.name))})]})]}):d.jsx("div",{className:"space-y-4",children:u.length===0?d.jsx("div",{className:"text-center py-20 text-gray-300 text-xs font-bold",children:"暂无历史记录"}):u.slice().reverse().map((_,X)=>d.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-gray-100 shadow-sm",children:[d.jsx("p",{className:"text-xs font-black text-indigo-500 mb-3",children:_.date}),d.jsx("div",{className:"flex flex-wrap gap-2",children:_.recipeTitles.map((se,_e)=>d.jsx("span",{className:"text-xs font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100",children:se},_e))})]},X))})]})};var Q_={};/**
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
 */const Kw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(t,e){if(!t)throw Fi(e)},Fi=function(t){return new Error("Firebase Database ("+Kw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},P1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(g=64)),r.push(n[p],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):P1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new D1;const g=i<<2|l>>4;if(r.push(g),c!==64){const T=l<<4&240|c>>2;if(r.push(T),m!==64){const C=c<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class D1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yw=function(t){const e=Qw(t);return Rp.encodeByteArray(e,!0)},Ru=function(t){return Yw(t).replace(/\./g,"")},bu=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function O1(t){return Xw(void 0,t)}function Xw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!M1(n)||(t[n]=Xw(t[n],e[n]));return t}function M1(t){return t!=="__proto__"}/**
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
 */function L1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const j1=()=>L1().__FIREBASE_DEFAULTS__,V1=()=>{if(typeof process>"u"||typeof Q_>"u")return;const t=Q_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},F1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bu(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return j1()||V1()||F1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jw=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zw=t=>{const e=Jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ex=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config},tx=t=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ru(JSON.stringify(n)),Ru(JSON.stringify(o)),""].join(".")}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function U1(){var t;const e=(t=Tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function B1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function z1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $1(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function W1(){return Kw.NODE_ADMIN===!0}function H1(){return!U1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G1(){try{return typeof indexedDB=="object"}catch{return!1}}function q1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const K1="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=K1,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Q1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new sr(s,l,r)}}function Q1(t,e){return t.replace(Y1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Y1=/\{\$([^}]+)}/g;/**
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
 */function ha(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const sx=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=ha(bu(i[0])||""),n=ha(bu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},X1=function(t){const e=sx(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},J1=function(t){const e=sx(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Du(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Y_(i)&&Y_(o)){if(!Du(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Y_(t){return t!==null&&typeof t=="object"}/**
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
 */function Ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Z1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let m=0;m<16;m++)r[m]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let m=16;m<80;m++){const g=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,p;for(let m=0;m<80;m++){m<40?m<20?(c=l^i&(o^l),p=1518500249):(c=i^o^l,p=1859775393):m<60?(c=i&o|l&(i|o),p=2400959708):(c=i^o^l,p=3395469782);const g=(s<<5|s>>>27)+c+u+p+r[m]&4294967295;u=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function ek(t,e){const n=new tk(t,e);return n.subscribe.bind(n)}class tk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gh),s.error===void 0&&(s.error=Gh),s.complete===void 0&&(s.complete=Gh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gh(){}function Cc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const rk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class sk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ma;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ok(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ik(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ik(t){return t===ss?void 0:t}function ok(t){return t.instantiationMode==="EAGER"}/**
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
 */class ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const lk={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},uk=ce.INFO,ck={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},hk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ck[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=uk,this._logHandler=hk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const dk=(t,e)=>e.some(n=>t instanceof n);let X_,J_;function fk(){return X_||(X_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pk(){return J_||(J_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ix=new WeakMap,rf=new WeakMap,ox=new WeakMap,qh=new WeakMap,Pp=new WeakMap;function mk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ix.set(n,t)}).catch(()=>{}),Pp.set(e,t),e}function gk(t){if(rf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});rf.set(t,e)}let sf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ox.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _k(t){sf=t(sf)}function yk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kh(this),e,...n);return ox.set(r,e.sort?e.sort():[e]),Pr(r)}:pk().includes(t)?function(...e){return t.apply(Kh(this),e),Pr(ix.get(this))}:function(...e){return Pr(t.apply(Kh(this),e))}}function vk(t){return typeof t=="function"?yk(t):(t instanceof IDBTransaction&&gk(t),dk(t,fk())?new Proxy(t,sf):t)}function Pr(t){if(t instanceof IDBRequest)return mk(t);if(qh.has(t))return qh.get(t);const e=vk(t);return e!==t&&(qh.set(t,e),Pp.set(e,t)),e}const Kh=t=>Pp.get(t);function wk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const xk=["get","getKey","getAll","getAllKeys","count"],Ek=["put","add","delete","clear"],Qh=new Map;function Z_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Qh.set(e,i),i}_k(t=>({...t,get:(e,n,r)=>Z_(e,n)||t.get(e,n,r),has:(e,n)=>!!Z_(e,n)||t.has(e,n)}));/**
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
 */class Ik{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const of="@firebase/app",ey="0.10.13";/**
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
 */const Zn=new kc("@firebase/app"),Ck="@firebase/app-compat",Sk="@firebase/analytics-compat",kk="@firebase/analytics",Nk="@firebase/app-check-compat",Ak="@firebase/app-check",Rk="@firebase/auth",bk="@firebase/auth-compat",Pk="@firebase/database",Dk="@firebase/data-connect",Ok="@firebase/database-compat",Mk="@firebase/functions",Lk="@firebase/functions-compat",jk="@firebase/installations",Vk="@firebase/installations-compat",Fk="@firebase/messaging",Uk="@firebase/messaging-compat",Bk="@firebase/performance",zk="@firebase/performance-compat",$k="@firebase/remote-config",Wk="@firebase/remote-config-compat",Hk="@firebase/storage",Gk="@firebase/storage-compat",qk="@firebase/firestore",Kk="@firebase/vertexai-preview",Qk="@firebase/firestore-compat",Yk="firebase",Xk="10.14.1";/**
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
 */const af="[DEFAULT]",Jk={[of]:"fire-core",[Ck]:"fire-core-compat",[kk]:"fire-analytics",[Sk]:"fire-analytics-compat",[Ak]:"fire-app-check",[Nk]:"fire-app-check-compat",[Rk]:"fire-auth",[bk]:"fire-auth-compat",[Pk]:"fire-rtdb",[Dk]:"fire-data-connect",[Ok]:"fire-rtdb-compat",[Mk]:"fire-fn",[Lk]:"fire-fn-compat",[jk]:"fire-iid",[Vk]:"fire-iid-compat",[Fk]:"fire-fcm",[Uk]:"fire-fcm-compat",[Bk]:"fire-perf",[zk]:"fire-perf-compat",[$k]:"fire-rc",[Wk]:"fire-rc-compat",[Hk]:"fire-gcs",[Gk]:"fire-gcs-compat",[qk]:"fire-fst",[Qk]:"fire-fst-compat",[Kk]:"fire-vertex","fire-js":"fire-js",[Yk]:"fire-js-all"};/**
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
 */const da=new Map,Zk=new Map,lf=new Map;function ty(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(lf.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;lf.set(e,t);for(const n of da.values())ty(n,t);for(const n of Zk.values())ty(n,t);return!0}function Nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Un(t){return t.settings!==void 0}/**
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
 */const eN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new La("app","Firebase",eN);/**
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
 */class tN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=Xk;function ax(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:af,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dr.create("bad-app-name",{appName:String(s)});if(n||(n=ex()),!n)throw Dr.create("no-options");const i=da.get(s);if(i){if(Du(n,i.options)&&Du(r,i.config))return i;throw Dr.create("duplicate-app",{appName:s})}const o=new ak(s);for(const u of lf.values())o.addComponent(u);const l=new tN(n,r,o);return da.set(s,l),l}function Ac(t=af){const e=da.get(t);if(!e&&t===af&&ex())return ax();if(!e)throw Dr.create("no-app",{appName:t});return e}function nN(){return Array.from(da.values())}function Sn(t,e,n){var r;let s=(r=Jk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(l.join(" "));return}ws(new Fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rN="firebase-heartbeat-database",sN=1,fa="firebase-heartbeat-store";let Yh=null;function lx(){return Yh||(Yh=wk(rN,sN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),Yh}async function iN(t){try{const n=(await lx()).transaction(fa),r=await n.objectStore(fa).get(ux(t));return await n.done,r}catch(e){if(e instanceof sr)Zn.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function ny(t,e){try{const r=(await lx()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,ux(t)),await r.done}catch(n){if(n instanceof sr)Zn.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function ux(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oN=1024,aN=30*24*60*60*1e3;class lN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ry();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=aN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ry(),{heartbeatsToSend:r,unsentEntries:s}=uN(this._heartbeatsCache.heartbeats),i=Ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Zn.warn(n),""}}}function ry(){return new Date().toISOString().substring(0,10)}function uN(t,e=oN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G1()?q1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sy(t){return Ru(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hN(t){ws(new Fr("platform-logger",e=>new Ik(e),"PRIVATE")),ws(new Fr("heartbeat",e=>new lN(e),"PRIVATE")),Sn(of,ey,t),Sn(of,ey,"esm2017"),Sn("fire-js","")}hN("");var dN="firebase",fN="10.14.1";/**
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
 */Sn(dN,fN,"app");var iy={};const oy="@firebase/database",ay="1.0.8";/**
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
 */let cx="";function pN(t){cx=t}/**
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
 */class mN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const hx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mN(e)}}catch{}return new gN},us=hx("localStorage"),_N=hx("sessionStorage");/**
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
 */const ci=new kc("@firebase/database"),yN=function(){let t=1;return function(){return t++}}(),dx=function(t){const e=rk(t),n=new Z1;n.update(e);const r=n.digest();return Rp.encodeByteArray(r)},ja=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ja.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Vo=null,ly=!0;const vN=function(t,e){B(!0,"Can't turn on custom loggers persistently."),ci.logLevel=ce.VERBOSE,Vo=ci.log.bind(ci)},at=function(...t){if(ly===!0&&(ly=!1,Vo===null&&_N.get("logging_enabled")===!0&&vN()),Vo){const e=ja.apply(null,t);Vo(e)}},Va=function(t){return function(...e){at(t,...e)}},uf=function(...t){const e="FIREBASE INTERNAL ERROR: "+ja(...t);ci.error(e)},er=function(...t){const e=`FIREBASE FATAL ERROR: ${ja(...t)}`;throw ci.error(e),new Error(e)},At=function(...t){const e="FIREBASE WARNING: "+ja(...t);ci.warn(e)},wN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&At("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ti="[MIN_NAME]",xs="[MAX_NAME]",bs=function(t,e){if(t===e)return 0;if(t===Ti||e===xs)return-1;if(e===Ti||t===xs)return 1;{const n=uy(t),r=uy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},EN=function(t,e){return t===e?0:t<e?-1:1},go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},Op=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=Op(t[e[r]]);return n+="}",n},fx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const px=function(t){B(!Dp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const p=c.join("");let m="";for(u=0;u<64;u+=8){let g=parseInt(p.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),m=m+g}return m.toLowerCase()},IN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const SN=new RegExp("^-?(0*)\\d{1,10}$"),kN=-2147483648,NN=2147483647,uy=function(t){if(SN.test(t)){const e=Number(t);if(e>=kN&&e<=NN)return e}return null},Bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw At("Exception was thrown by user callback.",n),e},Math.floor(0))}},AN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class RN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){At(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',At(e)}}class Yl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yl.OWNER="owner";/**
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
 */const Mp="5",mx="v",gx="s",_x="r",yx="f",vx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wx="ls",xx="p",cf="ac",Ex="websocket",Ix="long_polling";/**
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
 */class Tx{constructor(e,n,r,s,i=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=us.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&us.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cx(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===Ex)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ix)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PN(t)&&(n.ns=t.namespace);const s=[];return ht(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class DN{constructor(){this.counters_={}}incrementCounter(e,n=1){bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return O1(this.counters_)}}/**
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
 */const Xh={},Jh={};function Lp(t){const e=t.toString();return Xh[e]||(Xh[e]=new DN),Xh[e]}function ON(t,e){const n=t.toString();return Jh[n]||(Jh[n]=e()),Jh[n]}/**
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
 */class MN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Bi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cy="start",LN="close",jN="pLPCommand",VN="pRTLPCB",Sx="id",kx="pw",Nx="ser",FN="cb",UN="seg",BN="ts",zN="d",$N="dframe",Ax=1870,Rx=30,WN=Ax-Rx,HN=25e3,GN=3e4;class ni{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Va(e),this.stats_=Lp(n),this.urlFn=u=>(this.appCheckToken&&(u[cf]=this.appCheckToken),Cx(n,Ix,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new MN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GN)),xN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jp((...i)=>{const[o,l,u,c,p]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cy)this.id=l,this.password=u;else if(o===LN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[cy]="t",r[Nx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[FN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mx]=Mp,this.transportSessionId&&(r[gx]=this.transportSessionId),this.lastSessionId&&(r[wx]=this.lastSessionId),this.applicationId&&(r[xx]=this.applicationId),this.appCheckToken&&(r[cf]=this.appCheckToken),typeof location<"u"&&location.hostname&&vx.test(location.hostname)&&(r[_x]=yx);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IN()&&!TN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yw(n),s=fx(r,WN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[$N]="t",r[Sx]=e,r[kx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yN(),window[jN+this.uniqueCallbackIdentifier]=e,window[VN+this.uniqueCallbackIdentifier]=n,this.myIFrame=jp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){at("frame writing exception"),l.stack&&at(l.stack),at(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||at("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sx]=this.myID,e[kx]=this.myPW,e[Nx]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rx+r.length<=Ax;){const o=this.pendingSegs.shift();r=r+"&"+UN+s+"="+o.seg+"&"+BN+s+"="+o.ts+"&"+zN+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(HN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{at("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const qN=16384,KN=45e3;let Ou=null;typeof MozWebSocket<"u"?Ou=MozWebSocket:typeof WebSocket<"u"&&(Ou=WebSocket);class dn{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Va(this.connId),this.stats_=Lp(n),this.connURL=dn.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[mx]=Mp,typeof location<"u"&&location.hostname&&vx.test(location.hostname)&&(o[_x]=yx),n&&(o[gx]=n),r&&(o[wx]=r),s&&(o[cf]=s),i&&(o[xx]=i),Cx(e,Ex,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,us.set("previous_websocket_failure",!0);try{let r;W1(),this.mySock=new Ou(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ou!==null&&!dn.forceDisallow_}static previouslyFailed(){return us.isInMemoryStorage||us.get("previous_websocket_failure")===!0}markConnectionHealthy(){us.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ha(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fx(n,qN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
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
 */class pa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ni,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||At("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const s=this.transports_=[];for(const i of pa.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);pa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pa.globalTransportInitialized_=!1;/**
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
 */const QN=6e4,YN=5e3,XN=10*1024,JN=100*1024,Zh="t",hy="d",ZN="s",dy="r",eA="e",fy="o",py="a",my="n",gy="p",tA="h";class nA{constructor(e,n,r,s,i,o,l,u,c,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Va("c:"+this.id+":"),this.transportManager_=new pa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zh in e){const n=e[Zh];n===py?this.upgradeIfSecondaryHealthy_():n===dy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=go("t",e),r=go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:py,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:my,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=go("t",e),r=go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=go(Zh,e);if(hy in e){const r=e[hy];if(n===tA){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===my){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ZN?this.onConnectionShutdown_(r):n===dy?this.onReset_(r):n===eA?uf("Server Error: "+r):n===fy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mp!==r&&At("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(us.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class bx{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Px{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Mu extends Px{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mu}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _y=32,yy=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new ve("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ur(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Vp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ma(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ve(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function kt(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return kt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sA(t,e){const n=ma(t,0),r=ma(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=bs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Fp(t,e){if(Ur(t)!==Ur(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ur(t)>Ur(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iA{constructor(e,n){this.errorPrefix_=n,this.parts_=ma(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sc(this.parts_[r]);Ox(this)}}function oA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sc(e),Ox(t)}function aA(t){const e=t.parts_.pop();t.byteLength_-=Sc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ox(t){if(t.byteLength_>yy)throw new Error(t.errorPrefix_+"has a key path longer than "+yy+" bytes ("+t.byteLength_+").");if(t.parts_.length>_y)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_y+") or object contains a cycle "+is(t))}function is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Up extends Px{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Up}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _o=1e3,lA=60*5*1e3,vy=30*1e3,uA=1.3,cA=3e4,hA="server_kill",wy=3;class Gn extends bx{constructor(e,n,r,s,i,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Gn.nextPersistentConnectionId_++,this.log_=Va("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_o,this.maxReconnectDelay_=lA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Up.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ke(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Ma,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const u=l.d,c=l.s;Gn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bn(e,"w")){const r=Ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();At(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||J1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=X1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uf("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cA&&(this.reconnectDelay_=_o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Gn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(m){B(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(m)};this.realtime_={close:u,sendRequest:c};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,g]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=g&&g.token,l=new nA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,T=>{At(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(hA)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&At(m),u())}}}interrupt(e){at("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){at("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nf(this.interruptReasons_)&&(this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Op(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){at("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wy&&(this.reconnectDelay_=vy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){at("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cx.replace(/\./g,"-")]=1,bp()?e["framework.cordova"]=1:rx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mu.getInstance().currentlyOnline();return nf(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
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
 */class Rc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(Ti,e),s=new le(Ti,n);return this.compare(r,s)!==0}minPost(){return le.MIN}}/**
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
 */let Al;class Mx extends Rc{static get __EMPTY_NODE(){return Al}static set __EMPTY_NODE(e){Al=e}compare(e,n){return bs(e.name,n.name)}isDefinedOn(e){throw Fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(xs,Al)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Al)}toString(){return".key"}}const hi=new Mx;/**
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
 */let Rl=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},zt=class ko{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ko.RED,this.left=s??In.EMPTY_NODE,this.right=i??In.EMPTY_NODE}copy(e,n,r,s,i){return new ko(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return In.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ko.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ko.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};zt.RED=!0;zt.BLACK=!1;class dA{copy(e,n,r,s,i){return this}insert(e,n,r){return new zt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let In=class Xl{constructor(e,n=Xl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new Xl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rl(this.root_,null,this.comparator_,!0,e)}};In.EMPTY_NODE=new dA;/**
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
 */function fA(t,e){return bs(t.name,e.name)}function Bp(t,e){return bs(t,e)}/**
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
 */let hf;function pA(t){hf=t}const Lx=function(t){return typeof t=="number"?"number:"+px(t):"string:"+t},jx=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bn(e,".sv"),"Priority must be a string or number.")}else B(t===hf||t.isEmpty(),"priority of unexpected type.");B(t===hf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xy;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jx(this.priorityNode_)}static set __childrenNodeConstructor(e){xy=e}static get __childrenNodeConstructor(){return xy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ae(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||Ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=px(this.value_):e+=this.value_,this.lazyHash_=dx(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Xe.VALUE_TYPE_ORDER.indexOf(n),i=Xe.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Vx,Fx;function mA(t){Vx=t}function gA(t){Fx=t}class _A extends Rc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?bs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(xs,new Xe("[PRIORITY-POST]",Fx))}makePost(e,n){const r=Vx(e);return new le(n,new Xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new _A;/**
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
 */const yA=Math.log(2);class vA{constructor(e){const n=i=>parseInt(Math.log(i)/yA,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lu=function(t,e,n,r){t.sort(e);const s=function(u,c){const p=c-u;let m,g;if(p===0)return null;if(p===1)return m=t[u],g=n?n(m):m,new zt(g,m.node,zt.BLACK,null,null);{const T=parseInt(p/2,10)+u,C=s(u,T),A=s(T+1,c);return m=t[T],g=n?n(m):m,new zt(g,m.node,zt.BLACK,C,A)}},i=function(u){let c=null,p=null,m=t.length;const g=function(C,A){const L=m-C,S=m;m-=C;const E=s(L+1,S),N=t[L],D=n?n(N):N;T(new zt(D,N.node,A,null,E))},T=function(C){c?(c.left=C,c=C):(p=C,c=C)};for(let C=0;C<u.count;++C){const A=u.nextBitIsOne(),L=Math.pow(2,u.count-(C+1));A?g(L,zt.BLACK):(g(L,zt.BLACK),g(L,zt.RED))}return p},o=new vA(t.length),l=i(o);return new In(r||e,l)};/**
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
 */let ed;const zs={};class Bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(zs&&Fe,"ChildrenNode.ts has not been loaded"),ed=ed||new Bn({".priority":zs},{".priority":Fe}),ed}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof In?n:null}hasIndex(e){return bn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(le.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=Lu(r,e.getCompare()):l=zs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const p=Object.assign({},this.indexes_);return p[u]=l,new Bn(p,c)}addToIndexes(e,n){const r=Pu(this.indexes_,(s,i)=>{const o=Ii(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===zs)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(le.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),Lu(l,o.getCompare())}else return zs;else{const l=n.get(e.name);let u=s;return l&&(u=u.remove(new le(e.name,l))),u.insert(e,e.node)}});return new Bn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Pu(this.indexes_,s=>{if(s===zs)return s;{const i=n.get(e.name);return i?s.remove(new le(e.name,i)):s}});return new Bn(r,this.indexSet_)}}/**
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
 */let yo;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jx(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yo||(yo=new ee(new In(Bp),null,Bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yo}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yo:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?yo:this.priorityNode_;return new ee(s,o,i)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{B(ae(e)!==".priority"||Ur(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Te(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Fe,(o,l)=>{n[o]=l.val(e),r++,i&&ee.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lx(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":dx(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new le(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fa?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),s=n.getIterator(Fe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wA extends ee{constructor(){super(new In(Bp),ee.EMPTY_NODE,Bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Fa=new wA;Object.defineProperties(le,{MIN:{value:new le(Ti,ee.EMPTY_NODE)},MAX:{value:new le(xs,Fa)}});Mx.__EMPTY_NODE=ee.EMPTY_NODE;Xe.__childrenNodeConstructor=ee;pA(Fa);gA(Fa);/**
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
 */const xA=!0;function qe(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,qe(e))}if(!(t instanceof Array)&&xA){const n=[];let r=!1;if(ht(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=qe(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new le(o,u)))}}),n.length===0)return ee.EMPTY_NODE;const i=Lu(n,fA,o=>o.name,Bp);if(r){const o=Lu(n,Fe.getCompare());return new ee(i,qe(e),new Bn({".priority":o},{".priority":Fe}))}else return new ee(i,qe(e),Bn.Default)}else{let n=ee.EMPTY_NODE;return ht(t,(r,s)=>{if(bn(t,r)&&r.substring(0,1)!=="."){const i=qe(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(qe(e))}}mA(qe);/**
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
 */class EA extends Rc{constructor(e){super(),this.indexPath_=e,B(!ue(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?bs(e.name,n.name):i}makePost(e,n){const r=qe(e),s=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,s)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Fa);return new le(xs,e)}toString(){return ma(this.indexPath_,0).join("/")}}/**
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
 */class IA extends Rc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?bs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=qe(e);return new le(n,r)}toString(){return".value"}}const TA=new IA;/**
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
 */function Ux(t){return{type:"value",snapshotNode:t}}function Ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ga(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _a(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function CA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class zp{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ga(n,l)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ci(n,r)):o.trackChildChange(_a(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Fe,(s,i)=>{n.hasChild(s)||r.trackChildChange(ga(s,i))}),n.isLeafNode()||n.forEachChild(Fe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(_a(s,i,o))}else r.trackChildChange(Ci(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ya{constructor(e){this.indexedFilter_=new zp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ya.getStartPost_(e),this.endPost_=ya.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new le(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(ee.EMPTY_NODE);const i=this;return n.forEachChild(Fe,(o,l)=>{i.matches(new le(o,l))||(s=s.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class SA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ya(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new le(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=ee.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(ee.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const m=this.index_.getCompare();o=(g,T)=>m(T,g)}else o=this.index_.getCompare();const l=e;B(l.numChildren()===this.limit_,"");const u=new le(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),p=this.rangedFilter_.matches(u);if(l.hasChild(n)){const m=l.getImmediateChild(n);let g=s.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const T=g==null?1:o(g,u);if(p&&!r.isEmpty()&&T>=0)return i!=null&&i.trackChildChange(_a(n,r,m)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(ga(n,m));const A=l.updateImmediateChild(n,ee.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(i!=null&&i.trackChildChange(Ci(g.name,g.node)),A.updateImmediateChild(g.name,g.node)):A}}else return r.isEmpty()?e:p&&o(c,u)>=0?(i!=null&&(i.trackChildChange(ga(c.name,c.node)),i.trackChildChange(Ci(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
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
 */class $p{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ti}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new $p;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kA(t){return t.loadsAllData()?new zp(t.getIndex()):t.hasLimit()?new SA(t):new ya(t)}function NA(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Ey(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===TA?n="$value":t.index_===hi?n="$key":(B(t.index_ instanceof EA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Iy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
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
 */class ju extends bx{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Va("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ju.getListenId_(e,r),l={};this.listens_[o]=l;const u=Ey(e._queryParams);this.restRequest_(i+".json",u,(c,p)=>{let m=p;if(c===404&&(m=null,c=null),c===null&&this.onDataUpdate_(i,m,!1,r),Ii(this.listens_,o)===l){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",s(g,null)}})}unlisten(e,n){const r=ju.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ey(e._queryParams),r=e._path.toString(),s=new Ma;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ui(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=ha(l.responseText)}catch{At("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&At("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class AA{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Vu(){return{value:null,children:new Map}}function Bx(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,Vu());const s=t.children.get(r);e=Te(e),Bx(s,e,n)}}function df(t,e,n){t.value!==null?n(e,t.value):RA(t,(r,s)=>{const i=new ve(e.toString()+"/"+r);df(s,i,n)})}function RA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class bA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Ty=10*1e3,PA=30*1e3,DA=5*60*1e3;class OA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bA(e);const r=Ty+(PA-Ty)*Math.random();Fo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ht(e,(s,i)=>{i>0&&bn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*DA))}}/**
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
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function Wp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=Wp()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Fu(ge(),n,this.revert)}}else return B(ae(this.path)===e,"operationForChild called for unrelated child."),new Fu(Te(this.path),this.affectedTree,this.revert)}}/**
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
 */class va{constructor(e,n){this.source=e,this.path=n,this.type=pn.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new va(this.source,ge()):new va(this.source,Te(this.path))}}/**
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
 */class Es{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(e){return ue(this.path)?new Es(this.source,ge(),this.snap.getImmediateChild(e)):new Es(this.source,Te(this.path),this.snap)}}/**
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
 */class Si{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Es(this.source,ge(),n.value):new Si(this.source,ge(),n)}else return B(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Si(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Br{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class MA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LA(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(CA(o.childName,o.snapshotNode))}),vo(t,s,"child_removed",e,r,n),vo(t,s,"child_added",e,r,n),vo(t,s,"child_moved",i,r,n),vo(t,s,"child_changed",e,r,n),vo(t,s,"value",e,r,n),s}function vo(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,u)=>VA(t,l,u)),o.forEach(l=>{const u=jA(t,l,i);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function jA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VA(t,e,n){if(e.childName==null||n.childName==null)throw Fi("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),s=new le(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function bc(t,e){return{eventCache:t,serverCache:e}}function Uo(t,e,n,r){return bc(new Br(e,n,r),t.serverCache)}function zx(t,e,n,r){return bc(t.eventCache,new Br(e,n,r))}function Uu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let td;const FA=()=>(td||(td=new In(EN)),td);class Ie{constructor(e,n=FA()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return ht(e,(r,s)=>{n=n.set(new ve(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ue(e))return null;{const r=ae(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Te(e),n);return i!=null?{path:Ve(new ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Te(e)):new Ie(null)}}set(e,n){if(ue(e))return new Ie(n,this.children);{const r=ae(e),i=(this.children.get(r)||new Ie(null)).set(Te(e),n),o=this.children.insert(r,i);return new Ie(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const s=r.remove(Te(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ie(null):new Ie(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Te(e)):null}}setTree(e,n){if(ue(e))return n;{const r=ae(e),i=(this.children.get(r)||new Ie(null)).setTree(Te(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ie(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ve(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ue(e))return null;{const i=ae(e),o=this.children.get(i);return o?o.findOnPath_(Te(e),Ve(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const s=ae(e),i=this.children.get(s);return i?i.foreachOnPath_(Te(e),Ve(n,s),r):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new Ie(null))}}function Bo(t,e,n){if(ue(e))return new yn(new Ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=kt(s,e);return i=i.updateChild(o,n),new yn(t.writeTree_.set(s,i))}else{const s=new Ie(n),i=t.writeTree_.setTree(e,s);return new yn(i)}}}function ff(t,e,n){let r=t;return ht(n,(s,i)=>{r=Bo(r,Ve(e,s),i)}),r}function Cy(t,e){if(ue(e))return yn.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new yn(n)}}function pf(t,e){return Ps(t,e)!=null}function Ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kt(n.path,e)):null}function Sy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,s)=>{e.push(new le(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new le(r,s.value))}),e}function Or(t,e){if(ue(e))return t;{const n=Ps(t,e);return n!=null?new yn(new Ie(n)):new yn(t.writeTree_.subtree(e))}}function mf(t){return t.writeTree_.isEmpty()}function ki(t,e){return $x(ge(),t.writeTree_,e)}function $x(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=$x(Ve(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ve(t,".priority"),r)),n}}/**
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
 */function Pc(t,e){return qx(e,t)}function UA(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Bo(t.visibleWrites,e,n)),t.lastWriteId=r}function BA(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ff(t.visibleWrites,e,n),t.lastWriteId=r}function zA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $A(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&WA(l,r.path)?s=!1:Jt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return HA(t),!0;if(r.snap)t.visibleWrites=Cy(t.visibleWrites,r.path);else{const l=r.children;ht(l,u=>{t.visibleWrites=Cy(t.visibleWrites,Ve(r.path,u))})}return!0}else return!1}function WA(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(Ve(t.path,n),e))return!0;return!1}function HA(t){t.visibleWrites=Wx(t.allWrites,GA,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function GA(t){return t.visible}function Wx(t,e,n){let r=yn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Jt(n,o)?(l=kt(n,o),r=Bo(r,l,i.snap)):Jt(o,n)&&(l=kt(o,n),r=Bo(r,ge(),i.snap.getChild(l)));else if(i.children){if(Jt(n,o))l=kt(n,o),r=ff(r,l,i.children);else if(Jt(o,n))if(l=kt(o,n),ue(l))r=ff(r,ge(),i.children);else{const u=Ii(i.children,ae(l));if(u){const c=u.getChild(Te(l));r=Bo(r,ge(),c)}}}else throw Fi("WriteRecord should have .snap or .children")}}return r}function Hx(t,e,n,r,s){if(!r&&!s){const i=Ps(t.visibleWrites,e);if(i!=null)return i;{const o=Or(t.visibleWrites,e);if(mf(o))return n;if(n==null&&!pf(o,ge()))return null;{const l=n||ee.EMPTY_NODE;return ki(o,l)}}}else{const i=Or(t.visibleWrites,e);if(!s&&mf(i))return n;if(!s&&n==null&&!pf(i,ge()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(Jt(c.path,e)||Jt(e,c.path))},l=Wx(t.allWrites,o,e),u=n||ee.EMPTY_NODE;return ki(l,u)}}}function qA(t,e,n){let r=ee.EMPTY_NODE;const s=Ps(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Fe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Or(t.visibleWrites,e);return n.forEachChild(Fe,(o,l)=>{const u=ki(Or(i,new ve(o)),l);r=r.updateImmediateChild(o,u)}),Sy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Or(t.visibleWrites,e);return Sy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function KA(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ve(e,n);if(pf(t.visibleWrites,i))return null;{const o=Or(t.visibleWrites,i);return mf(o)?s.getChild(n):ki(o,s.getChild(n))}}function QA(t,e,n,r){const s=Ve(e,n),i=Ps(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Or(t.visibleWrites,s);return ki(o,r.getNode().getImmediateChild(n))}else return null}function YA(t,e){return Ps(t.visibleWrites,e)}function XA(t,e,n,r,s,i,o){let l;const u=Or(t.visibleWrites,e),c=Ps(u,ge());if(c!=null)l=c;else if(n!=null)l=ki(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const p=[],m=o.getCompare(),g=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let T=g.getNext();for(;T&&p.length<s;)m(T,r)!==0&&p.push(T),T=g.getNext();return p}else return[]}function JA(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function Bu(t,e,n,r){return Hx(t.writeTree,t.treePath,e,n,r)}function qp(t,e){return qA(t.writeTree,t.treePath,e)}function ky(t,e,n,r){return KA(t.writeTree,t.treePath,e,n,r)}function zu(t,e){return YA(t.writeTree,Ve(t.treePath,e))}function ZA(t,e,n,r,s,i){return XA(t.writeTree,t.treePath,e,n,r,s,i)}function Kp(t,e,n){return QA(t.writeTree,t.treePath,e,n)}function Gx(t,e){return qx(Ve(t.treePath,e),t.writeTree)}function qx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class eR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,_a(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,ga(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Ci(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,_a(r,e.snapshotNode,s.oldSnap));else throw Fi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Kx=new tR;class Qp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Br(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Is(this.viewCache_),i=ZA(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function nR(t){return{filter:t}}function rR(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sR(t,e,n,r,s){const i=new eR;let o,l;if(n.type===pn.OVERWRITE){const c=n;c.source.fromUser?o=gf(t,e,c.path,c.snap,r,s,i):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=$u(t,e,c.path,c.snap,r,s,l,i))}else if(n.type===pn.MERGE){const c=n;c.source.fromUser?o=oR(t,e,c.path,c.children,r,s,i):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=_f(t,e,c.path,c.children,r,s,l,i))}else if(n.type===pn.ACK_USER_WRITE){const c=n;c.revert?o=uR(t,e,c.path,r,s,i):o=aR(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===pn.LISTEN_COMPLETE)o=lR(t,e,n.path,r,i);else throw Fi("Unknown operation type: "+n.type);const u=i.getChanges();return iR(e,o,u),{viewCache:o,changes:u}}function iR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Uu(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Ux(Uu(e)))}}function Qx(t,e,n,r,s,i){const o=e.eventCache;if(zu(r,n)!=null)return e;{let l,u;if(ue(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Is(e),p=c instanceof ee?c:ee.EMPTY_NODE,m=qp(r,p);l=t.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const c=Bu(r,Is(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ae(n);if(c===".priority"){B(Ur(n)===1,"Can't have a priority with additional path components");const p=o.getNode();u=e.serverCache.getNode();const m=ky(r,n,p,u);m!=null?l=t.filter.updatePriority(p,m):l=o.getNode()}else{const p=Te(n);let m;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const g=ky(r,n,o.getNode(),u);g!=null?m=o.getNode().getImmediateChild(c).updateChild(p,g):m=o.getNode().getImmediateChild(c)}else m=Kp(r,c,e.serverCache);m!=null?l=t.filter.updateChild(o.getNode(),c,m,p,s,i):l=o.getNode()}}return Uo(e,l,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function $u(t,e,n,r,s,i,o,l){const u=e.serverCache;let c;const p=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=p.updateFullNode(u.getNode(),r,null);else if(p.filtersNodes()&&!u.isFiltered()){const T=u.getNode().updateChild(n,r);c=p.updateFullNode(u.getNode(),T,null)}else{const T=ae(n);if(!u.isCompleteForPath(n)&&Ur(n)>1)return e;const C=Te(n),L=u.getNode().getImmediateChild(T).updateChild(C,r);T===".priority"?c=p.updatePriority(u.getNode(),L):c=p.updateChild(u.getNode(),T,L,C,Kx,null)}const m=zx(e,c,u.isFullyInitialized()||ue(n),p.filtersNodes()),g=new Qp(s,m,i);return Qx(t,m,n,s,g,l)}function gf(t,e,n,r,s,i,o){const l=e.eventCache;let u,c;const p=new Qp(s,e,i);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Uo(e,c,!0,t.filter.filtersNodes());else{const m=ae(n);if(m===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Uo(e,c,l.isFullyInitialized(),l.isFiltered());else{const g=Te(n),T=l.getNode().getImmediateChild(m);let C;if(ue(g))C=r;else{const A=p.getCompleteChild(m);A!=null?Vp(g)===".priority"&&A.getChild(Dx(g)).isEmpty()?C=A:C=A.updateChild(g,r):C=ee.EMPTY_NODE}if(T.equals(C))u=e;else{const A=t.filter.updateChild(l.getNode(),m,C,g,p,o);u=Uo(e,A,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Ny(t,e){return t.eventCache.isCompleteForChild(e)}function oR(t,e,n,r,s,i,o){let l=e;return r.foreach((u,c)=>{const p=Ve(n,u);Ny(e,ae(p))&&(l=gf(t,l,p,c,s,i,o))}),r.foreach((u,c)=>{const p=Ve(n,u);Ny(e,ae(p))||(l=gf(t,l,p,c,s,i,o))}),l}function Ay(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function _f(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ue(n)?c=r:c=new Ie(null).setTree(n,r);const p=e.serverCache.getNode();return c.children.inorderTraversal((m,g)=>{if(p.hasChild(m)){const T=e.serverCache.getNode().getImmediateChild(m),C=Ay(t,T,g);u=$u(t,u,new ve(m),C,s,i,o,l)}}),c.children.inorderTraversal((m,g)=>{const T=!e.serverCache.isCompleteForChild(m)&&g.value===null;if(!p.hasChild(m)&&!T){const C=e.serverCache.getNode().getImmediateChild(m),A=Ay(t,C,g);u=$u(t,u,new ve(m),A,s,i,o,l)}}),u}function aR(t,e,n,r,s,i,o){if(zu(s,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ue(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return $u(t,e,n,u.getNode().getChild(n),s,i,l,o);if(ue(n)){let c=new Ie(null);return u.getNode().forEachChild(hi,(p,m)=>{c=c.set(new ve(p),m)}),_f(t,e,n,c,s,i,l,o)}else return e}else{let c=new Ie(null);return r.foreach((p,m)=>{const g=Ve(n,p);u.isCompleteForPath(g)&&(c=c.set(p,u.getNode().getChild(g)))}),_f(t,e,n,c,s,i,l,o)}}function lR(t,e,n,r,s){const i=e.serverCache,o=zx(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return Qx(t,o,n,r,Kx,s)}function uR(t,e,n,r,s,i){let o;if(zu(r,n)!=null)return e;{const l=new Qp(r,e,s),u=e.eventCache.getNode();let c;if(ue(n)||ae(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=Bu(r,Is(e));else{const m=e.serverCache.getNode();B(m instanceof ee,"serverChildren would be complete if leaf node"),p=qp(r,m)}p=p,c=t.filter.updateFullNode(u,p,i)}else{const p=ae(n);let m=Kp(r,p,e.serverCache);m==null&&e.serverCache.isCompleteForChild(p)&&(m=u.getImmediateChild(p)),m!=null?c=t.filter.updateChild(u,p,m,Te(n),l,i):e.eventCache.getNode().hasChild(p)?c=t.filter.updateChild(u,p,ee.EMPTY_NODE,Te(n),l,i):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bu(r,Is(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||zu(r,ge())!=null,Uo(e,c,o,t.filter.filtersNodes())}}/**
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
 */class cR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new zp(r.getIndex()),i=kA(r);this.processor_=nR(i);const o=n.serverCache,l=n.eventCache,u=s.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(ee.EMPTY_NODE,l.getNode(),null),p=new Br(u,o.isFullyInitialized(),s.filtersNodes()),m=new Br(c,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=bc(m,p),this.eventGenerator_=new MA(this.query_)}get query(){return this.query_}}function hR(t){return t.viewCache_.serverCache.getNode()}function dR(t){return Uu(t.viewCache_)}function fR(t,e){const n=Is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Ry(t){return t.eventRegistrations_.length===0}function pR(t,e){t.eventRegistrations_.push(e)}function by(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Py(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(B(Is(t.viewCache_),"We should always have a full cache before handling merges"),B(Uu(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=sR(t.processor_,s,e,n,r);return rR(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Yx(t,i.changes,i.viewCache.eventCache.getNode(),null)}function mR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(i,o)=>{r.push(Ci(i,o))}),n.isFullyInitialized()&&r.push(Ux(n.getNode())),Yx(t,r,n.getNode(),e)}function Yx(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return LA(t.eventGenerator_,e,n,s)}/**
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
 */let Wu;class Xx{constructor(){this.views=new Map}}function gR(t){B(!Wu,"__referenceConstructor has already been defined"),Wu=t}function _R(){return B(Wu,"Reference.ts has not been loaded"),Wu}function yR(t){return t.views.size===0}function Yp(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),Py(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Py(o,e,n,r));return i}}function Jx(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Bu(n,s?r:null),u=!1;l?u=!0:r instanceof ee?(l=qp(n,r),u=!1):(l=ee.EMPTY_NODE,u=!1);const c=bc(new Br(l,u,!1),new Br(r,s,!1));return new cR(e,c)}return o}function vR(t,e,n,r,s,i){const o=Jx(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),pR(o,n),mR(o,n)}function wR(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=zr(t);if(s==="default")for(const[u,c]of t.views.entries())o=o.concat(by(c,n,r)),Ry(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||i.push(c.query));else{const u=t.views.get(s);u&&(o=o.concat(by(u,n,r)),Ry(u)&&(t.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return l&&!zr(t)&&i.push(new(_R())(e._repo,e._path)),{removed:i,events:o}}function Zx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mr(t,e){let n=null;for(const r of t.views.values())n=n||fR(r,e);return n}function eE(t,e){if(e._queryParams.loadsAllData())return Dc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function tE(t,e){return eE(t,e)!=null}function zr(t){return Dc(t)!=null}function Dc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Hu;function xR(t){B(!Hu,"__referenceConstructor has already been defined"),Hu=t}function ER(){return B(Hu,"Reference.ts has not been loaded"),Hu}let IR=1;class Dy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=JA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nE(t,e,n,r,s){return UA(t.pendingWriteTree_,e,n,r,s),s?zi(t,new Es(Wp(),e,n)):[]}function TR(t,e,n,r){BA(t.pendingWriteTree_,e,n,r);const s=Ie.fromObject(n);return zi(t,new Si(Wp(),e,s))}function Ir(t,e,n=!1){const r=zA(t.pendingWriteTree_,e);if($A(t.pendingWriteTree_,e)){let i=new Ie(null);return r.snap!=null?i=i.set(ge(),!0):ht(r.children,o=>{i=i.set(new ve(o),!0)}),zi(t,new Fu(r.path,i,n))}else return[]}function Ua(t,e,n){return zi(t,new Es(Hp(),e,n))}function CR(t,e,n){const r=Ie.fromObject(n);return zi(t,new Si(Hp(),e,r))}function SR(t,e){return zi(t,new va(Hp(),e))}function kR(t,e,n){const r=Jp(t,n);if(r){const s=Zp(r),i=s.path,o=s.queryId,l=kt(i,e),u=new va(Gp(o),l);return em(t,i,u)}else return[]}function Gu(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||tE(o,e))){const u=wR(o,e,n,r);yR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=u.removed;if(l=u.events,!s){const p=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,m=t.syncPointTree_.findOnPath(i,(g,T)=>zr(T));if(p&&!m){const g=t.syncPointTree_.subtree(i);if(!g.isEmpty()){const T=RR(g);for(let C=0;C<T.length;++C){const A=T[C],L=A.query,S=oE(t,A);t.listenProvider_.startListening(zo(L),wa(t,L),S.hashFn,S.onComplete)}}}!m&&c.length>0&&!r&&(p?t.listenProvider_.stopListening(zo(e),null):c.forEach(g=>{const T=t.queryToTagMap.get(Oc(g));t.listenProvider_.stopListening(zo(g),T)}))}bR(t,c)}return l}function rE(t,e,n,r){const s=Jp(t,r);if(s!=null){const i=Zp(s),o=i.path,l=i.queryId,u=kt(o,e),c=new Es(Gp(l),u,n);return em(t,o,c)}else return[]}function NR(t,e,n,r){const s=Jp(t,r);if(s){const i=Zp(s),o=i.path,l=i.queryId,u=kt(o,e),c=Ie.fromObject(n),p=new Si(Gp(l),u,c);return em(t,o,p)}else return[]}function yf(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(g,T)=>{const C=kt(g,s);i=i||Mr(T,C),o=o||zr(T)});let l=t.syncPointTree_.get(s);l?(o=o||zr(l),i=i||Mr(l,ge())):(l=new Xx,t.syncPointTree_=t.syncPointTree_.set(s,l));let u;i!=null?u=!0:(u=!1,i=ee.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((T,C)=>{const A=Mr(C,ge());A&&(i=i.updateImmediateChild(T,A))}));const c=tE(l,e);if(!c&&!e._queryParams.loadsAllData()){const g=Oc(e);B(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const T=PR();t.queryToTagMap.set(g,T),t.tagToQueryMap.set(T,g)}const p=Pc(t.pendingWriteTree_,s);let m=vR(l,e,n,p,i,u);if(!c&&!o&&!r){const g=eE(l,e);m=m.concat(DR(t,e,g))}return m}function Xp(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=kt(o,e),c=Mr(l,u);if(c)return c});return Hx(s,e,i,n,!0)}function AR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,p)=>{const m=kt(c,n);r=r||Mr(p,m)});let s=t.syncPointTree_.get(n);s?r=r||Mr(s,ge()):(s=new Xx,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Br(r,!0,!1):null,l=Pc(t.pendingWriteTree_,e._path),u=Jx(s,e,l,i?o.getNode():ee.EMPTY_NODE,i);return dR(u)}function zi(t,e){return sE(e,t.syncPointTree_,null,Pc(t.pendingWriteTree_,ge()))}function sE(t,e,n,r){if(ue(t.path))return iE(t,e,n,r);{const s=e.get(ge());n==null&&s!=null&&(n=Mr(s,ge()));let i=[];const o=ae(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,p=Gx(r,o);i=i.concat(sE(l,u,c,p))}return s&&(i=i.concat(Yp(s,t,r,n))),i}}function iE(t,e,n,r){const s=e.get(ge());n==null&&s!=null&&(n=Mr(s,ge()));let i=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=Gx(r,o),p=t.operationForChild(o);p&&(i=i.concat(iE(p,l,u,c)))}),s&&(i=i.concat(Yp(s,t,r,n))),i}function oE(t,e){const n=e.query,r=wa(t,n);return{hashFn:()=>(hR(e)||ee.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?kR(t,n._path,r):SR(t,n._path);{const i=CN(s,n);return Gu(t,n,null,i)}}}}function wa(t,e){const n=Oc(e);return t.queryToTagMap.get(n)}function Oc(t){return t._path.toString()+"$"+t._queryIdentifier}function Jp(t,e){return t.tagToQueryMap.get(e)}function Zp(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function em(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Pc(t.pendingWriteTree_,e);return Yp(r,n,s,null)}function RR(t){return t.fold((e,n,r)=>{if(n&&zr(n))return[Dc(n)];{let s=[];return n&&(s=Zx(n)),ht(r,(i,o)=>{s=s.concat(o)}),s}})}function zo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ER())(t._repo,t._path):t}function bR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Oc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function PR(){return IR++}function DR(t,e,n){const r=e._path,s=wa(t,e),i=oE(t,n),o=t.listenProvider_.startListening(zo(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)B(!zr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((c,p,m)=>{if(!ue(c)&&p&&zr(p))return[Dc(p).query];{let g=[];return p&&(g=g.concat(Zx(p).map(T=>T.query))),ht(m,(T,C)=>{g=g.concat(C)}),g}});for(let c=0;c<u.length;++c){const p=u[c];t.listenProvider_.stopListening(zo(p),wa(t,p))}}return o}/**
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
 */class tm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new tm(n)}node(){return this.node_}}class nm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new nm(this.syncTree_,n)}node(){return Xp(this.syncTree_,this.path_)}}const OR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Oy=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LR(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},LR=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},aE=function(t,e,n,r){return rm(e,new nm(n,t),r)},lE=function(t,e,n){return rm(t,new tm(e),n)};function rm(t,e,n){const r=t.getPriority().val(),s=Oy(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=Oy(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Xe(l,qe(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Xe(s))),o.forEachChild(Fe,(l,u)=>{const c=rm(u,e.getImmediateChild(l),n);c!==u&&(i=i.updateImmediateChild(l,c))}),i}}/**
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
 */class sm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function im(t,e){let n=e instanceof ve?e:new ve(e),r=t,s=ae(n);for(;s!==null;){const i=Ii(r.node.children,s)||{children:{},childCount:0};r=new sm(s,r,i),n=Te(n),s=ae(n)}return r}function $i(t){return t.node.value}function uE(t,e){t.node.value=e,vf(t)}function cE(t){return t.node.childCount>0}function jR(t){return $i(t)===void 0&&!cE(t)}function Mc(t,e){ht(t.node.children,(n,r)=>{e(new sm(n,t,r))})}function hE(t,e,n,r){n&&e(t),Mc(t,s=>{hE(s,e,!0)})}function VR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ba(t){return new ve(t.parent===null?t.name:Ba(t.parent)+"/"+t.name)}function vf(t){t.parent!==null&&FR(t.parent,t.name,t)}function FR(t,e,n){const r=jR(n),s=bn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,vf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,vf(t))}/**
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
 */const UR=/[\[\].#$\/\u0000-\u001F\u007F]/,BR=/[\[\].#$\u0000-\u001F\u007F]/,nd=10*1024*1024,om=function(t){return typeof t=="string"&&t.length!==0&&!UR.test(t)},dE=function(t){return typeof t=="string"&&t.length!==0&&!BR.test(t)},zR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dE(t)},$R=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Dp(t)||t&&typeof t=="object"&&bn(t,".sv")},fE=function(t,e,n,r){r&&e===void 0||Lc(Cc(t,"value"),e,n)},Lc=function(t,e,n){const r=n instanceof ve?new iA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+is(r));if(typeof e=="function")throw new Error(t+"contains a function "+is(r)+" with contents = "+e.toString());if(Dp(e))throw new Error(t+"contains "+e.toString()+" "+is(r));if(typeof e=="string"&&e.length>nd/3&&Sc(e)>nd)throw new Error(t+"contains a string greater than "+nd+" utf8 bytes "+is(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ht(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!om(o)))throw new Error(t+" contains an invalid key ("+o+") "+is(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oA(r,o),Lc(t,l,r),aA(r)}),s&&i)throw new Error(t+' contains ".value" child '+is(r)+" in addition to actual children.")}},WR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=ma(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!om(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sA);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Jt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},HR=function(t,e,n,r){const s=Cc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];ht(e,(o,l)=>{const u=new ve(o);if(Lc(s,l,Ve(n,u)),Vp(u)===".priority"&&!$R(l))throw new Error(s+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(u)}),WR(s,i)},pE=function(t,e,n,r){if(!dE(n))throw new Error(Cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pE(t,e,n)},mE=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!om(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zR(n))throw new Error(Cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class KR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Fp(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function gE(t,e,n){jc(t,n),_E(t,r=>Fp(r,e))}function nn(t,e,n){jc(t,n),_E(t,r=>Jt(r,e)||Jt(e,r))}function _E(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(QR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function QR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Vo&&at("event: "+n.toString()),Bi(r)}}}/**
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
 */const YR="repo_interrupt",XR=25;class JR{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vu(),this.transactionQueueTree_=new sm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZR(t,e,n){if(t.stats_=Lp(t.repoInfo_),t.forceRestClient_||AN())t.server_=new ju(t.repoInfo_,(r,s,i,o)=>{My(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ly(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gn(t.repoInfo_,e,(r,s,i,o)=>{My(t,r,s,i,o)},r=>{Ly(t,r)},r=>{eb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ON(t.repoInfo_,()=>new OA(t.stats_,t.server_)),t.infoData_=new AA,t.infoSyncTree_=new Dy({startListening:(r,s,i,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=Ua(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),am(t,"connected",!1),t.serverSyncTree_=new Dy({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,u)=>{const c=o(l,u);nn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function yE(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return OR({timestamp:yE(t)})}function My(t,e,n,r,s){t.dataUpdateCount++;const i=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=Pu(n,c=>qe(c));o=NR(t.serverSyncTree_,i,u,s)}else{const u=qe(n);o=rE(t.serverSyncTree_,i,u,s)}else if(r){const u=Pu(n,c=>qe(c));o=CR(t.serverSyncTree_,i,u)}else{const u=qe(n);o=Ua(t.serverSyncTree_,i,u)}let l=i;o.length>0&&(l=Ni(t,i)),nn(t.eventQueue_,l,o)}function Ly(t,e){am(t,"connected",e),e===!1&&sb(t)}function eb(t,e){ht(e,(n,r)=>{am(t,n,r)})}function am(t,e,n){const r=new ve("/.info/"+e),s=qe(n);t.infoData_.updateSnapshot(r,s);const i=Ua(t.infoSyncTree_,r,s);nn(t.eventQueue_,r,i)}function lm(t){return t.nextWriteId_++}function tb(t,e,n){const r=AR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=qe(s).withIndex(e._queryParams.getIndex());yf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ua(t.serverSyncTree_,e._path,i);else{const l=wa(t.serverSyncTree_,e);o=rE(t.serverSyncTree_,e._path,i,l)}return nn(t.eventQueue_,e._path,o),Gu(t.serverSyncTree_,e,n,null,!0),i},s=>(za(t,"get for query "+Ke(e)+" failed: "+s),Promise.reject(new Error(s))))}function nb(t,e,n,r,s){za(t,"set",{path:e.toString(),value:n,priority:r});const i=Vc(t),o=qe(n,r),l=Xp(t.serverSyncTree_,e),u=lE(o,l,i),c=lm(t),p=nE(t.serverSyncTree_,e,u,c,!0);jc(t.eventQueue_,p),t.server_.put(e.toString(),o.val(!0),(g,T)=>{const C=g==="ok";C||At("set at "+e+" failed: "+g);const A=Ir(t.serverSyncTree_,c,!C);nn(t.eventQueue_,e,A),wf(t,s,g,T)});const m=cm(t,e);Ni(t,m),nn(t.eventQueue_,m,[])}function rb(t,e,n,r){za(t,"update",{path:e.toString(),value:n});let s=!0;const i=Vc(t),o={};if(ht(n,(l,u)=>{s=!1,o[l]=aE(Ve(e,l),qe(u),t.serverSyncTree_,i)}),s)at("update() called with empty data.  Don't do anything."),wf(t,r,"ok",void 0);else{const l=lm(t),u=TR(t.serverSyncTree_,e,o,l);jc(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,p)=>{const m=c==="ok";m||At("update at "+e+" failed: "+c);const g=Ir(t.serverSyncTree_,l,!m),T=g.length>0?Ni(t,e):e;nn(t.eventQueue_,T,g),wf(t,r,c,p)}),ht(n,c=>{const p=cm(t,Ve(e,c));Ni(t,p)}),nn(t.eventQueue_,e,[])}}function sb(t){za(t,"onDisconnectEvents");const e=Vc(t),n=Vu();df(t.onDisconnect_,ge(),(s,i)=>{const o=aE(s,i,t.serverSyncTree_,e);Bx(n,s,o)});let r=[];df(n,ge(),(s,i)=>{r=r.concat(Ua(t.serverSyncTree_,s,i));const o=cm(t,s);Ni(t,o)}),t.onDisconnect_=Vu(),nn(t.eventQueue_,ge(),r)}function ib(t,e,n){let r;ae(e._path)===".info"?r=yf(t.infoSyncTree_,e,n):r=yf(t.serverSyncTree_,e,n),gE(t.eventQueue_,e._path,r)}function ob(t,e,n){let r;ae(e._path)===".info"?r=Gu(t.infoSyncTree_,e,n):r=Gu(t.serverSyncTree_,e,n),gE(t.eventQueue_,e._path,r)}function ab(t){t.persistentConnection_&&t.persistentConnection_.interrupt(YR)}function za(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),at(n,...e)}function wf(t,e,n,r){e&&Bi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function vE(t,e,n){return Xp(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function um(t,e=t.transactionQueueTree_){if(e||Fc(t,e),$i(e)){const n=xE(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&lb(t,Ba(e),n)}else cE(e)&&Mc(e,n=>{um(t,n)})}function lb(t,e,n){const r=n.map(c=>c.currentWriteId),s=vE(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const p=n[c];B(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const m=kt(e,p.path);i=i.updateChild(m,p.currentOutputSnapshotRaw)}const l=i.val(!0),u=e;t.server_.put(u.toString(),l,c=>{za(t,"transaction put response",{path:u.toString(),status:c});let p=[];if(c==="ok"){const m=[];for(let g=0;g<n.length;g++)n[g].status=2,p=p.concat(Ir(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&m.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Fc(t,im(t.transactionQueueTree_,e)),um(t,t.transactionQueueTree_),nn(t.eventQueue_,e,p);for(let g=0;g<m.length;g++)Bi(m[g])}else{if(c==="datastale")for(let m=0;m<n.length;m++)n[m].status===3?n[m].status=4:n[m].status=0;else{At("transaction at "+u.toString()+" failed: "+c);for(let m=0;m<n.length;m++)n[m].status=4,n[m].abortReason=c}Ni(t,e)}},o)}function Ni(t,e){const n=wE(t,e),r=Ba(n),s=xE(t,n);return ub(t,s,r),r}function ub(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=kt(n,u.path);let p=!1,m;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)p=!0,m=u.abortReason,s=s.concat(Ir(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=XR)p=!0,m="maxretry",s=s.concat(Ir(t.serverSyncTree_,u.currentWriteId,!0));else{const g=vE(t,u.path,o);u.currentInputSnapshot=g;const T=e[l].update(g.val());if(T!==void 0){Lc("transaction failed: Data returned ",T,u.path);let C=qe(T);typeof T=="object"&&T!=null&&bn(T,".priority")||(C=C.updatePriority(g.getPriority()));const L=u.currentWriteId,S=Vc(t),E=lE(C,g,S);u.currentOutputSnapshotRaw=C,u.currentOutputSnapshotResolved=E,u.currentWriteId=lm(t),o.splice(o.indexOf(L),1),s=s.concat(nE(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),s=s.concat(Ir(t.serverSyncTree_,L,!0))}else p=!0,m="nodata",s=s.concat(Ir(t.serverSyncTree_,u.currentWriteId,!0))}nn(t.eventQueue_,n,s),s=[],p&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(m==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(m),!1,null))))}Fc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Bi(r[l]);um(t,t.transactionQueueTree_)}function wE(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&$i(r)===void 0;)r=im(r,n),e=Te(e),n=ae(e);return r}function xE(t,e){const n=[];return EE(t,e,n),n.sort((r,s)=>r.order-s.order),n}function EE(t,e,n){const r=$i(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Mc(e,s=>{EE(t,s,n)})}function Fc(t,e){const n=$i(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,uE(e,n.length>0?n:void 0)}Mc(e,r=>{Fc(t,r)})}function cm(t,e){const n=Ba(wE(t,e)),r=im(t.transactionQueueTree_,e);return VR(r,s=>{rd(t,s)}),rd(t,r),hE(r,s=>{rd(t,s)}),n}function rd(t,e){const n=$i(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ir(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?uE(e,void 0):n.length=i+1,nn(t.eventQueue_,Ba(e),s);for(let o=0;o<r.length;o++)Bi(r[o])}}/**
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
 */function cb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function hb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):At(`Invalid query segment '${n}' in query '${t}'`)}return e}const jy=function(t,e){const n=db(t),r=n.namespace;n.domain==="firebase.com"&&er(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Tx(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ve(n.pathString)}},db=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let p=t.indexOf("/");p===-1&&(p=t.length);let m=t.indexOf("?");m===-1&&(m=t.length),e=t.substring(0,Math.min(p,m)),p<m&&(s=cb(t.substring(p,m)));const g=hb(t.substring(Math.min(t.length,m)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const T=e.slice(0,c);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
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
 */const Vy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fb=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Vy.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Vy.charAt(e[s]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class IE{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class TE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class CE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Uc{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ue(this._path)?null:Vp(this._path)}get ref(){return new Pn(this._repo,this._path)}get _queryIdentifier(){const e=Iy(this._queryParams),n=Op(e);return n==="{}"?"default":n}get _queryObject(){return Iy(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Uc))return!1;const n=this._repo===e._repo,r=Fp(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+rA(this._path)}}class Pn extends Uc{constructor(e,n){super(e,n,new $p,!1)}get parent(){const e=Dx(this._path);return e===null?null:new Pn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ai{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Ri(this.ref,e);return new Ai(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ai(s,Ri(this.ref,r),Fe)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ur(t,e){return t=Ye(t),t._checkNotDeleted("ref"),e!==void 0?Ri(t._root,e):t._root}function Ri(t,e){return t=Ye(t),ae(t._path)===null?GR("child","path",e):pE("child","path",e),new Pn(t._repo,Ve(t._path,e))}function pb(t,e){t=Ye(t),mE("push",t._path),fE("push",e,t._path,!0);const n=yE(t._repo),r=fb(n),s=Ri(t,r),i=Ri(t,r);let o;return e!=null?o=Jl(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Jl(t,e){t=Ye(t),mE("set",t._path),fE("set",e,t._path,!1);const n=new Ma;return nb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function mb(t,e){HR("update",e,t._path);const n=new Ma;return rb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function gb(t){t=Ye(t);const e=new CE(()=>{}),n=new Bc(e);return tb(t._repo,t,n).then(r=>new Ai(r,new Pn(t._repo,t._path),t._queryParams.getIndex()))}class Bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new IE("value",this,new Ai(e.snapshotNode,new Pn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TE(this,e,n):null}matches(e){return e instanceof Bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TE(this,e,n):null}createEvent(e,n){B(e.childName!=null,"Child events should have a childName.");const r=Ri(new Pn(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new IE(e.type,this,new Ai(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function SE(t,e,n,r,s){const i=new CE(n,void 0),o=e==="value"?new Bc(i):new hm(e,i);return ib(t._repo,t,o),()=>ob(t._repo,t,o)}function _b(t,e,n,r){return SE(t,"value",e)}function yb(t,e,n,r){return SE(t,"child_added",e)}class vb{}class wb extends vb{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Uc(e._repo,e._path,NA(e._queryParams,this._limit),e._orderByCalled)}}function xb(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new wb(t)}function Eb(t,...e){let n=Ye(t);for(const r of e)n=r._apply(n);return n}gR(Pn);xR(Pn);/**
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
 */const Ib="FIREBASE_DATABASE_EMULATOR_HOST",xf={};let Tb=!1;function Cb(t,e,n,r){t.repoInfo_=new Tx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Sb(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jy(i,s),l=o.repoInfo,u;typeof process<"u"&&iy&&(u=iy[Ib]),u?(i=`http://${u}?ns=${l.namespace}`,o=jy(i,s),l=o.repoInfo):o.repoInfo.secure;const c=new bN(t.name,t.options,e);qR("Invalid Firebase Database URL",o),ue(o.path)||er("Database URL must point to the root of a Firebase Database (not including a child path).");const p=Nb(l,t,c,new RN(t.name,n));return new Ab(p,t)}function kb(t,e){const n=xf[e];(!n||n[t.key]!==t)&&er(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ab(t),delete n[t.key]}function Nb(t,e,n,r){let s=xf[e.name];s||(s={},xf[e.name]=s);let i=s[t.toURLString()];return i&&er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new JR(t,Tb,n,r),s[t.toURLString()]=i,i}class Ab{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pn(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&er("Cannot call "+e+" on a deleted database.")}}function Rb(t=Ac(),e){const n=Nc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Zw("database");r&&bb(n,...r)}return n}function bb(t,e,n,r={}){t=Ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&er("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&er('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Yl(Yl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:nx(r.mockUserToken,t.app.options.projectId);i=new Yl(o)}Cb(s,e,n,i)}/**
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
 */function Pb(t){pN(Rs),ws(new Fr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Sb(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Sn(oy,ay,t),Sn(oy,ay,"esm2017")}/**
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
 */const Db={".sv":"timestamp"};function Ob(){return Db}Gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Pb();function dm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mb=kE,NE=new La("auth","Firebase",kE());/**
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
 */const qu=new kc("@firebase/auth");function Lb(t,...e){qu.logLevel<=ce.WARN&&qu.warn(`Auth (${Rs}): ${t}`,...e)}function Zl(t,...e){qu.logLevel<=ce.ERROR&&qu.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function tr(t,...e){throw fm(t,...e)}function kn(t,...e){return fm(t,...e)}function AE(t,e,n){const r=Object.assign(Object.assign({},Mb()),{[e]:n});return new La("auth","Firebase",r).create(e,{appName:t.name})}function Lr(t){return AE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NE.create(t,...e)}function ne(t,e,...n){if(!t)throw fm(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function nr(t,e){t||zn(e)}/**
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
 */function Ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jb(){return Fy()==="http:"||Fy()==="https:"}function Fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jb()||z1()||"connection"in navigator)?navigator.onLine:!0}function Fb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $a{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=bp()||rx()}get(){return Vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pm(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ub={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bb=new $a(3e4,6e4);function zc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wi(t,e,n,r,s={}){return bE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ui(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return B1()||(c.referrerPolicy="no-referrer"),RE.fetch()(DE(t,t.config.apiHost,n,l),c)})}async function bE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ub),e);try{const s=new zb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw AE(t,p,c);tr(t,p)}}catch(s){if(s instanceof sr)throw s;tr(t,"network-request-failed",{message:String(s)})}}async function PE(t,e,n,r,s={}){const i=await Wi(t,e,n,r,s);return"mfaPendingCredential"in i&&tr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function DE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pm(t.config,s):`${t.config.apiScheme}://${s}`}class zb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),Bb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function $b(t,e){return Wi(t,"POST","/v1/accounts:delete",e)}async function OE(t,e){return Wi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wb(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=mm(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$o(sd(s.auth_time)),issuedAtTime:$o(sd(s.iat)),expirationTime:$o(sd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sd(t){return Number(t)*1e3}function mm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const s=bu(n);return s?JSON.parse(s):(Zl("Failed to decode base64 JWT payload"),null)}catch(s){return Zl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Uy(t){const e=mm(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&Hb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$o(this.lastLoginAt),this.creationTime=$o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xa(t,OE(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ME(i.providerUserInfo):[],l=Kb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new If(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function qb(t){const e=Ye(t);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ME(t){return t.map(e=>{var{providerId:n}=e,r=dm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qb(t,e){const n=await bE(t,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=DE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yb(t,e){return Wi(t,"POST","/v2/accounts:revokeToken",zc(t,e))}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Uy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new di;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function cr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new If(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xa(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wb(this,e)}reload(){return qb(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await xa(this,$b(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:N,emailVerified:D,isAnonymous:O,providerData:b,stsTokenManager:w}=n;ne(N&&w,e,"internal-error");const y=di.fromJSON(this.name,w);ne(typeof N=="string",e,"internal-error"),cr(m,e.name),cr(g,e.name),ne(typeof D=="boolean",e,"internal-error"),ne(typeof O=="boolean",e,"internal-error"),cr(T,e.name),cr(C,e.name),cr(A,e.name),cr(L,e.name),cr(S,e.name),cr(E,e.name);const x=new $n({uid:N,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:O,photoURL:C,phoneNumber:T,tenantId:A,stsTokenManager:y,createdAt:S,lastLoginAt:E});return b&&Array.isArray(b)&&(x.providerData=b.map(I=>Object.assign({},I))),L&&(x._redirectEventId=L),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new di;s.updateFromServerResponse(n);const i=new $n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ku(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ME(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new di;l.updateFromIdToken(r);const u=new $n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new If(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const By=new Map;function Wn(t){nr(t instanceof Function,"Expected a class definition");let e=By.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,By.set(t,e),e)}/**
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
 */class LE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LE.type="NONE";const zy=LE;/**
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
 */function eu(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=eu(this.userKey,s.apiKey,i),this.fullPersistenceKey=eu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fi(Wn(zy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Wn(zy);const o=eu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){const m=$n._fromJSON(e,p);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new fi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new fi(i,e,r))}}/**
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
 */function $y(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zE(e))return"Blackberry";if($E(e))return"Webos";if(VE(e))return"Safari";if((e.includes("chrome/")||FE(e))&&!e.includes("edge/"))return"Chrome";if(BE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jE(t=It()){return/firefox\//i.test(t)}function VE(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FE(t=It()){return/crios\//i.test(t)}function UE(t=It()){return/iemobile/i.test(t)}function BE(t=It()){return/android/i.test(t)}function zE(t=It()){return/blackberry/i.test(t)}function $E(t=It()){return/webos/i.test(t)}function gm(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xb(t=It()){var e;return gm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jb(){return $1()&&document.documentMode===10}function WE(t=It()){return gm(t)||BE(t)||$E(t)||zE(t)||/windows phone/i.test(t)||UE(t)}/**
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
 */function HE(t,e=[]){let n;switch(t){case"Browser":n=$y(It());break;case"Worker":n=`${$y(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class Zb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eP(t,e={}){return Wi(t,"GET","/v2/passwordPolicy",zc(t,e))}/**
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
 */const tP=6;class nP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wy(this),this.idTokenSubscription=new Wy(this),this.beforeStateQueue=new Zb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await OE(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(Lr(this));const n=e?Ye(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eP(this),n=new nP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Lb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $c(t){return Ye(t)}class Wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=ek(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _m={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sP(t){_m=t}function iP(t){return _m.loadJS(t)}function oP(){return _m.gapiScript}function aP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lP(t,e){const n=Nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Du(i,e??{}))return s;tr(s,"already-initialized")}return n.initialize({options:e})}function uP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cP(t,e,n){const r=$c(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=GE(e),{host:o,port:l}=hP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),dP()}function GE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hP(t){const e=GE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Hy(o)}}}function Hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
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
 */async function pi(t,e){return PE(t,"POST","/v1/accounts:signInWithIdp",zc(t,e))}/**
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
 */const fP="http://localhost";class Ts extends qE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=dm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:fP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
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
 */class KE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends KE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _r extends Wa{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
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
 */class yr extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
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
 */class vr extends Wa{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class wr extends Wa{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */async function pP(t,e){return PE(t,"POST","/v1/accounts:signUp",zc(t,e))}/**
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
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $n._fromIdTokenResponse(e,r,s),o=Gy(r);return new $r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gy(r);return new $r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function mP(t){var e;if(Un(t.app))return Promise.reject(Lr(t));const n=$c(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new $r({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await pP(n,{returnSecureToken:!0}),s=await $r._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Qu extends sr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qu(e,n,r,s)}}function QE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qu._fromErrorAndOperation(t,i,e,r):i})}async function gP(t,e,n=!1){const r=await xa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",r)}/**
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
 */async function _P(t,e,n=!1){const{auth:r}=t;if(Un(r.app))return Promise.reject(Lr(r));const s="reauthenticate";try{const i=await xa(t,QE(r,s,e,t),n);ne(i.idToken,r,"internal-error");const o=mm(i.idToken);ne(o,r,"internal-error");const{sub:l}=o;return ne(t.uid===l,r,"user-mismatch"),$r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tr(r,"user-mismatch"),i}}/**
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
 */async function yP(t,e,n=!1){if(Un(t.app))return Promise.reject(Lr(t));const r="signIn",s=await QE(t,r,e),i=await $r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function vP(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function wP(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function xP(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}const Yu="__sak";/**
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
 */class YE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EP=1e3,IP=10;class XE extends YE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Jb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}XE.type="LOCAL";const TP=XE;/**
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
 */class JE extends YE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}JE.type="SESSION";const ZE=JE;/**
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
 */function CP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await CP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
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
 */function ym(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=ym("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function kP(t){Nn().location.href=t}/**
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
 */function eI(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function NP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RP(){return eI()?self:null}/**
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
 */const tI="firebaseLocalStorageDb",bP=1,Xu="firebaseLocalStorage",nI="fbase_key";class Ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function PP(){const t=indexedDB.deleteDatabase(tI);return new Ha(t).toPromise()}function Tf(){const t=indexedDB.open(tI,bP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xu,{keyPath:nI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xu)?e(r):(r.close(),await PP(),e(await Tf()))})})}async function qy(t,e,n){const r=Hc(t,!0).put({[nI]:e,value:n});return new Ha(r).toPromise()}async function DP(t,e){const n=Hc(t,!1).get(e),r=await new Ha(n).toPromise();return r===void 0?null:r.value}function Ky(t,e){const n=Hc(t,!0).delete(e);return new Ha(n).toPromise()}const OP=800,MP=3;class rI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(RP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NP(),!this.activeServiceWorker)return;this.sender=new SP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tf();return await qy(e,Yu,"1"),await Ky(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ky(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hc(s,!1).getAll();return new Ha(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rI.type="LOCAL";const LP=rI;new $a(3e4,6e4);/**
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
 */function jP(t,e){return e?Wn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vm extends qE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VP(t){return yP(t.auth,new vm(t),t.bypassAuthState)}function FP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),_P(n,new vm(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),gP(n,new vm(t),t.bypassAuthState)}/**
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
 */class sI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return FP;default:tr(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BP=new $a(2e3,1e4);class ri extends sI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BP.get())};e()}}ri.currentPopupAction=null;/**
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
 */const zP="pendingRedirect",tu=new Map;class $P extends sI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const r=await WP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WP(t,e){const n=qP(e),r=GP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function HP(t,e){tu.set(t._key(),e)}function GP(t){return Wn(t._redirectPersistence)}function qP(t){return eu(zP,t.config.apiKey,t.name)}async function KP(t,e,n=!1){if(Un(t.app))return Promise.reject(Lr(t));const r=$c(t),s=jP(r,e),o=await new $P(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QP=10*60*1e3;class YP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qy(e))}saveEventToCache(e){this.cachedEventUids.add(Qy(e)),this.lastProcessedEventTime=Date.now()}}function Qy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iI(t);default:return!1}}/**
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
 */async function JP(t,e={}){return Wi(t,"GET","/v1/projects",e)}/**
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
 */const ZP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e2=/^https?/;async function t2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JP(t);for(const n of e)try{if(n2(n))return}catch{}tr(t,"unauthorized-domain")}function n2(t){const e=Ef(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!e2.test(n))return!1;if(ZP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const r2=new $a(3e4,6e4);function Yy(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s2(t){return new Promise((e,n)=>{var r,s,i;function o(){Yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yy(),n(kn(t,"network-request-failed"))},timeout:r2.get()})}if(!((s=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nn().gapi)===null||i===void 0)&&i.load)o();else{const l=aP("iframefcb");return Nn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},iP(`${oP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nu=null,e})}let nu=null;function i2(t){return nu=nu||s2(t),nu}/**
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
 */const o2=new $a(5e3,15e3),a2="__/auth/iframe",l2="emulator/auth/iframe",u2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h2(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pm(e,l2):`https://${t.config.authDomain}/${a2}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},s=c2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ui(r).slice(1)}`}async function d2(t){const e=await i2(t),n=Nn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:h2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=Nn().setTimeout(()=>{i(o)},o2.get());function u(){Nn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const f2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p2=500,m2=600,g2="_blank",_2="http://localhost";class Xy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y2(t,e,n,r=p2,s=m2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},f2),{width:r.toString(),height:s.toString(),top:i,left:o}),c=It().toLowerCase();n&&(l=FE(c)?g2:n),jE(c)&&(e=e||_2,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[T,C])=>`${g}${T}=${C},`,"");if(Xb(c)&&l!=="_self")return v2(e||"",l),new Xy(null);const m=window.open(e||"",l,p);ne(m,t,"popup-blocked");try{m.focus()}catch{}return new Xy(m)}function v2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const w2="__/auth/handler",x2="emulator/auth/handler",E2=encodeURIComponent("fac");async function Jy(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:s};if(e instanceof KE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Wa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${E2}=${encodeURIComponent(u)}`:"";return`${I2(t)}?${Ui(l).slice(1)}${c}`}function I2({config:t}){return t.emulator?pm(t,x2):`https://${t.authDomain}/${w2}`}/**
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
 */const id="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZE,this._completeRedirectFn=KP,this._overrideRedirectResult=HP}async _openPopup(e,n,r,s){var i;nr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Jy(e,n,r,Ef(),s);return y2(e,o,ym())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jy(e,n,r,Ef(),s);return kP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await d2(e),r=new YP(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(id,{type:id},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[id];o!==void 0&&n(!!o),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WE()||VE()||gm()}}const C2=T2;var Zy="@firebase/auth",ev="1.7.9";/**
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
 */class S2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function k2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function N2(t){ws(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HE(t)},c=new rP(r,s,i,u);return uP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new Fr("auth-internal",e=>{const n=$c(e.getProvider("auth").getImmediate());return(r=>new S2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Zy,ev,k2(t)),Sn(Zy,ev,"esm2017")}/**
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
 */const A2=5*60,R2=tx("authIdTokenMaxAge")||A2;let tv=null;const b2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>R2)return;const s=n==null?void 0:n.token;tv!==s&&(tv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function P2(t=Ac()){const e=Nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lP(t,{popupRedirectResolver:C2,persistence:[LP,TP,ZE]}),r=tx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=b2(i.toString());wP(n,o,()=>o(n.currentUser)),vP(n,l=>o(l))}}const s=Jw("auth");return s&&cP(n,`http://${s}`),n}function D2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",D2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});N2("Browser");var nv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function x(){}x.prototype=y.prototype,w.D=y.prototype,w.prototype=new x,w.prototype.constructor=w,w.C=function(I,k,R){for(var _=Array(arguments.length-2),X=2;X<arguments.length;X++)_[X-2]=arguments[X];return y.prototype[k].apply(I,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,x){x||(x=0);var I=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)I[k]=y.charCodeAt(x++)|y.charCodeAt(x++)<<8|y.charCodeAt(x++)<<16|y.charCodeAt(x++)<<24;else for(k=0;16>k;++k)I[k]=y[x++]|y[x++]<<8|y[x++]<<16|y[x++]<<24;y=w.g[0],x=w.g[1],k=w.g[2];var R=w.g[3],_=y+(R^x&(k^R))+I[0]+3614090360&4294967295;y=x+(_<<7&4294967295|_>>>25),_=R+(k^y&(x^k))+I[1]+3905402710&4294967295,R=y+(_<<12&4294967295|_>>>20),_=k+(x^R&(y^x))+I[2]+606105819&4294967295,k=R+(_<<17&4294967295|_>>>15),_=x+(y^k&(R^y))+I[3]+3250441966&4294967295,x=k+(_<<22&4294967295|_>>>10),_=y+(R^x&(k^R))+I[4]+4118548399&4294967295,y=x+(_<<7&4294967295|_>>>25),_=R+(k^y&(x^k))+I[5]+1200080426&4294967295,R=y+(_<<12&4294967295|_>>>20),_=k+(x^R&(y^x))+I[6]+2821735955&4294967295,k=R+(_<<17&4294967295|_>>>15),_=x+(y^k&(R^y))+I[7]+4249261313&4294967295,x=k+(_<<22&4294967295|_>>>10),_=y+(R^x&(k^R))+I[8]+1770035416&4294967295,y=x+(_<<7&4294967295|_>>>25),_=R+(k^y&(x^k))+I[9]+2336552879&4294967295,R=y+(_<<12&4294967295|_>>>20),_=k+(x^R&(y^x))+I[10]+4294925233&4294967295,k=R+(_<<17&4294967295|_>>>15),_=x+(y^k&(R^y))+I[11]+2304563134&4294967295,x=k+(_<<22&4294967295|_>>>10),_=y+(R^x&(k^R))+I[12]+1804603682&4294967295,y=x+(_<<7&4294967295|_>>>25),_=R+(k^y&(x^k))+I[13]+4254626195&4294967295,R=y+(_<<12&4294967295|_>>>20),_=k+(x^R&(y^x))+I[14]+2792965006&4294967295,k=R+(_<<17&4294967295|_>>>15),_=x+(y^k&(R^y))+I[15]+1236535329&4294967295,x=k+(_<<22&4294967295|_>>>10),_=y+(k^R&(x^k))+I[1]+4129170786&4294967295,y=x+(_<<5&4294967295|_>>>27),_=R+(x^k&(y^x))+I[6]+3225465664&4294967295,R=y+(_<<9&4294967295|_>>>23),_=k+(y^x&(R^y))+I[11]+643717713&4294967295,k=R+(_<<14&4294967295|_>>>18),_=x+(R^y&(k^R))+I[0]+3921069994&4294967295,x=k+(_<<20&4294967295|_>>>12),_=y+(k^R&(x^k))+I[5]+3593408605&4294967295,y=x+(_<<5&4294967295|_>>>27),_=R+(x^k&(y^x))+I[10]+38016083&4294967295,R=y+(_<<9&4294967295|_>>>23),_=k+(y^x&(R^y))+I[15]+3634488961&4294967295,k=R+(_<<14&4294967295|_>>>18),_=x+(R^y&(k^R))+I[4]+3889429448&4294967295,x=k+(_<<20&4294967295|_>>>12),_=y+(k^R&(x^k))+I[9]+568446438&4294967295,y=x+(_<<5&4294967295|_>>>27),_=R+(x^k&(y^x))+I[14]+3275163606&4294967295,R=y+(_<<9&4294967295|_>>>23),_=k+(y^x&(R^y))+I[3]+4107603335&4294967295,k=R+(_<<14&4294967295|_>>>18),_=x+(R^y&(k^R))+I[8]+1163531501&4294967295,x=k+(_<<20&4294967295|_>>>12),_=y+(k^R&(x^k))+I[13]+2850285829&4294967295,y=x+(_<<5&4294967295|_>>>27),_=R+(x^k&(y^x))+I[2]+4243563512&4294967295,R=y+(_<<9&4294967295|_>>>23),_=k+(y^x&(R^y))+I[7]+1735328473&4294967295,k=R+(_<<14&4294967295|_>>>18),_=x+(R^y&(k^R))+I[12]+2368359562&4294967295,x=k+(_<<20&4294967295|_>>>12),_=y+(x^k^R)+I[5]+4294588738&4294967295,y=x+(_<<4&4294967295|_>>>28),_=R+(y^x^k)+I[8]+2272392833&4294967295,R=y+(_<<11&4294967295|_>>>21),_=k+(R^y^x)+I[11]+1839030562&4294967295,k=R+(_<<16&4294967295|_>>>16),_=x+(k^R^y)+I[14]+4259657740&4294967295,x=k+(_<<23&4294967295|_>>>9),_=y+(x^k^R)+I[1]+2763975236&4294967295,y=x+(_<<4&4294967295|_>>>28),_=R+(y^x^k)+I[4]+1272893353&4294967295,R=y+(_<<11&4294967295|_>>>21),_=k+(R^y^x)+I[7]+4139469664&4294967295,k=R+(_<<16&4294967295|_>>>16),_=x+(k^R^y)+I[10]+3200236656&4294967295,x=k+(_<<23&4294967295|_>>>9),_=y+(x^k^R)+I[13]+681279174&4294967295,y=x+(_<<4&4294967295|_>>>28),_=R+(y^x^k)+I[0]+3936430074&4294967295,R=y+(_<<11&4294967295|_>>>21),_=k+(R^y^x)+I[3]+3572445317&4294967295,k=R+(_<<16&4294967295|_>>>16),_=x+(k^R^y)+I[6]+76029189&4294967295,x=k+(_<<23&4294967295|_>>>9),_=y+(x^k^R)+I[9]+3654602809&4294967295,y=x+(_<<4&4294967295|_>>>28),_=R+(y^x^k)+I[12]+3873151461&4294967295,R=y+(_<<11&4294967295|_>>>21),_=k+(R^y^x)+I[15]+530742520&4294967295,k=R+(_<<16&4294967295|_>>>16),_=x+(k^R^y)+I[2]+3299628645&4294967295,x=k+(_<<23&4294967295|_>>>9),_=y+(k^(x|~R))+I[0]+4096336452&4294967295,y=x+(_<<6&4294967295|_>>>26),_=R+(x^(y|~k))+I[7]+1126891415&4294967295,R=y+(_<<10&4294967295|_>>>22),_=k+(y^(R|~x))+I[14]+2878612391&4294967295,k=R+(_<<15&4294967295|_>>>17),_=x+(R^(k|~y))+I[5]+4237533241&4294967295,x=k+(_<<21&4294967295|_>>>11),_=y+(k^(x|~R))+I[12]+1700485571&4294967295,y=x+(_<<6&4294967295|_>>>26),_=R+(x^(y|~k))+I[3]+2399980690&4294967295,R=y+(_<<10&4294967295|_>>>22),_=k+(y^(R|~x))+I[10]+4293915773&4294967295,k=R+(_<<15&4294967295|_>>>17),_=x+(R^(k|~y))+I[1]+2240044497&4294967295,x=k+(_<<21&4294967295|_>>>11),_=y+(k^(x|~R))+I[8]+1873313359&4294967295,y=x+(_<<6&4294967295|_>>>26),_=R+(x^(y|~k))+I[15]+4264355552&4294967295,R=y+(_<<10&4294967295|_>>>22),_=k+(y^(R|~x))+I[6]+2734768916&4294967295,k=R+(_<<15&4294967295|_>>>17),_=x+(R^(k|~y))+I[13]+1309151649&4294967295,x=k+(_<<21&4294967295|_>>>11),_=y+(k^(x|~R))+I[4]+4149444226&4294967295,y=x+(_<<6&4294967295|_>>>26),_=R+(x^(y|~k))+I[11]+3174756917&4294967295,R=y+(_<<10&4294967295|_>>>22),_=k+(y^(R|~x))+I[2]+718787259&4294967295,k=R+(_<<15&4294967295|_>>>17),_=x+(R^(k|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var x=y-this.blockSize,I=this.B,k=this.h,R=0;R<y;){if(k==0)for(;R<=x;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(I[k++]=w.charCodeAt(R++),k==this.blockSize){s(this,I),k=0;break}}else for(;R<y;)if(I[k++]=w[R++],k==this.blockSize){s(this,I),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var x=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=x&255,x/=256;for(this.u(w),w=Array(16),y=x=0;4>y;++y)for(var I=0;32>I;I+=8)w[x++]=this.g[y]>>>I&255;return w};function i(w,y){var x=l;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=y(w)}function o(w,y){this.h=y;for(var x=[],I=!0,k=w.length-1;0<=k;k--){var R=w[k]|0;I&&R==y||(x[k]=R,I=!1)}this.g=x}var l={};function u(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return L(c(-w));for(var y=[],x=1,I=0;w>=x;I++)y[I]=w/x|0,x*=4294967296;return new o(y,0)}function p(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return L(p(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(y,8)),I=m,k=0;k<w.length;k+=8){var R=Math.min(8,w.length-k),_=parseInt(w.substring(k,k+R),y);8>R?(R=c(Math.pow(y,R)),I=I.j(R).add(c(_))):(I=I.j(x),I=I.add(c(_)))}return I}var m=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-L(this).m();for(var w=0,y=1,x=0;x<this.g.length;x++){var I=this.i(x);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(A(this))return"-"+L(this).toString(w);for(var y=c(Math.pow(w,6)),x=this,I="";;){var k=D(x,y).g;x=S(x,k.j(y));var R=((0<x.g.length?x.g[0]:x.h)>>>0).toString(w);if(x=k,C(x))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=S(this,w),A(w)?-1:C(w)?0:1};function L(w){for(var y=w.g.length,x=[],I=0;I<y;I++)x[I]=~w.g[I];return new o(x,~w.h).add(g)}t.abs=function(){return A(this)?L(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),x=[],I=0,k=0;k<=y;k++){var R=I+(this.i(k)&65535)+(w.i(k)&65535),_=(R>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);I=_>>>16,R&=65535,_&=65535,x[k]=_<<16|R}return new o(x,x[x.length-1]&-2147483648?-1:0)};function S(w,y){return w.add(L(y))}t.j=function(w){if(C(this)||C(w))return m;if(A(this))return A(w)?L(this).j(L(w)):L(L(this).j(w));if(A(w))return L(this.j(L(w)));if(0>this.l(T)&&0>w.l(T))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,x=[],I=0;I<2*y;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<w.g.length;k++){var R=this.i(I)>>>16,_=this.i(I)&65535,X=w.i(k)>>>16,se=w.i(k)&65535;x[2*I+2*k]+=_*se,E(x,2*I+2*k),x[2*I+2*k+1]+=R*se,E(x,2*I+2*k+1),x[2*I+2*k+1]+=_*X,E(x,2*I+2*k+1),x[2*I+2*k+2]+=R*X,E(x,2*I+2*k+2)}for(I=0;I<y;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=y;I<2*y;I++)x[I]=0;return new o(x,0)};function E(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function N(w,y){this.g=w,this.h=y}function D(w,y){if(C(y))throw Error("division by zero");if(C(w))return new N(m,m);if(A(w))return y=D(L(w),y),new N(L(y.g),L(y.h));if(A(y))return y=D(w,L(y)),new N(L(y.g),y.h);if(30<w.g.length){if(A(w)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var x=g,I=y;0>=I.l(w);)x=O(x),I=O(I);var k=b(x,1),R=b(I,1);for(I=b(I,2),x=b(x,2);!C(I);){var _=R.add(I);0>=_.l(w)&&(k=k.add(x),R=_),I=b(I,1),x=b(x,1)}return y=S(w,k.j(y)),new N(k,y)}for(k=m;0<=w.l(y);){for(x=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=c(x),_=R.j(y);A(_)||0<_.l(w);)x-=I,R=c(x),_=R.j(y);C(R)&&(R=g),k=k.add(R),w=S(w,_)}return new N(k,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),x=[],I=0;I<y;I++)x[I]=this.i(I)&w.i(I);return new o(x,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),x=[],I=0;I<y;I++)x[I]=this.i(I)|w.i(I);return new o(x,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),x=[],I=0;I<y;I++)x[I]=this.i(I)^w.i(I);return new o(x,this.h^w.h)};function O(w){for(var y=w.g.length+1,x=[],I=0;I<y;I++)x[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(x,w.h)}function b(w,y){var x=y>>5;y%=32;for(var I=w.g.length-x,k=[],R=0;R<I;R++)k[R]=0<y?w.i(R+x)>>>y|w.i(R+x+1)<<32-y:w.i(R+x);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,oI=o}).apply(typeof nv<"u"?nv:typeof self<"u"?self:typeof window<"u"?window:{});var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aI,No,lI,ru,Cf,uI,cI,hI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pl=="object"&&Pl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var P=a[v];if(!(P in f))break e;f=f[P]}a=a[a.length-1],v=f[a],h=h(v),h!=v&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,v=!1,P={next:function(){if(!v&&f<a.length){var M=f++;return{value:h(M,a[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,f){return a.call.apply(a.bind,arguments)}function m(a,h,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,v),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,P,M){for(var $=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)$[xe-2]=arguments[xe];return h.prototype[P].apply(v,$)}}function A(a){const h=a.length;if(0<h){const f=Array(h);for(let v=0;v<h;v++)f[v]=a[v];return f}return[]}function L(a,h){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const P=a.length||0,M=v.length||0;a.length=P+M;for(let $=0;$<M;$++)a[P+$]=v[$]}else a.push(v)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var O=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function b(a,h,f){for(const v in a)h.call(f,a[v],v,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,v;for(let P=1;P<arguments.length;P++){v=arguments[P];for(f in v)a[f]=v[f];for(let M=0;M<x.length;M++)f=x[M],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function _(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class X{constructor(){this.h=this.g=null}add(h,f){const v=se.get();v.set(h,f),this.h?this.h.next=v:this.g=v,this.h=v}}var se=new S(()=>new _e,a=>a.reset());class _e{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,z=!1,Q=new X,j=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(G)}};var G=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){R(f)}var h=se;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Pt(a,h){if(Z.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(O){e:{try{D(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pt.aa.h.call(this)}}C(Pt,Z);var rn={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),eh=0;function th(a,h,f,v,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!v,this.ha=P,this.key=++eh,this.da=this.fa=!1}function Os(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ms(a){this.src=a,this.g={},this.h=0}Ms.prototype.add=function(a,h,f,v,P){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var $=qi(a,h,v,P);return-1<$?(h=a[$],f||(h.fa=!1)):(h=new th(h,this.src,M,!!v,P),h.fa=f,a.push(h)),h};function Ft(a,h){var f=h.type;if(f in a.g){var v=a.g[f],P=Array.prototype.indexOf.call(v,h,void 0),M;(M=0<=P)&&Array.prototype.splice.call(v,P,1),M&&(Os(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function qi(a,h,f,v){for(var P=0;P<a.length;++P){var M=a[P];if(!M.da&&M.listener==h&&M.capture==!!f&&M.ha==v)return P}return-1}var Yr="closure_lm_"+(1e6*Math.random()|0),K={};function H(a,h,f,v,P){if(Array.isArray(h)){for(var M=0;M<h.length;M++)H(a,h[M],f,v,P);return null}return f=Bm(f),a&&a[sn]?a.K(h,f,c(v)?!!v.capture:!1,P):te(a,h,f,!1,v,P)}function te(a,h,f,v,P,M){if(!h)throw Error("Invalid event type");var $=c(P)?!!P.capture:!!P,xe=nh(a);if(xe||(a[Yr]=xe=new Ms(a)),f=xe.add(h,f,v,$,M),f.proxy)return f;if(v=oe(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)ze||(P=$),P===void 0&&(P=!1),a.addEventListener(h.toString(),v,P);else if(a.attachEvent)a.attachEvent(Ls(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function oe(){function a(f){return h.call(a.src,a.listener,f)}const h=oT;return a}function Me(a,h,f,v,P){if(Array.isArray(h))for(var M=0;M<h.length;M++)Me(a,h[M],f,v,P);else v=c(v)?!!v.capture:!!v,f=Bm(f),a&&a[sn]?(a=a.i,h=String(h).toString(),h in a.g&&(M=a.g[h],f=qi(M,f,v,P),-1<f&&(Os(M[f]),Array.prototype.splice.call(M,f,1),M.length==0&&(delete a.g[h],a.h--)))):a&&(a=nh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=qi(h,f,v,P)),(f=-1<a?h[a]:null)&&Dn(f))}function Dn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[sn])Ft(h.i,a);else{var f=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(f,v,a.capture):h.detachEvent?h.detachEvent(Ls(f),v):h.addListener&&h.removeListener&&h.removeListener(v),(f=nh(h))?(Ft(f,a),f.h==0&&(f.src=null,h[Yr]=null)):Os(a)}}}function Ls(a){return a in K?K[a]:K[a]="on"+a}function oT(a,h){if(a.da)a=!0;else{h=new Pt(h,this);var f=a.listener,v=a.ha||a.src;a.fa&&Dn(a),a=f.call(v,h)}return a}function nh(a){return a=a[Yr],a instanceof Ms?a:null}var rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bm(a){return typeof a=="function"?a:(a[rh]||(a[rh]=function(h){return a.handleEvent(h)}),a[rh])}function dt(){J.call(this),this.i=new Ms(this),this.M=this,this.F=null}C(dt,J),dt.prototype[sn]=!0,dt.prototype.removeEventListener=function(a,h,f,v){Me(this,a,h,f,v)};function Tt(a,h){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new Z(h,a);else if(h instanceof Z)h.target=h.target||a;else{var P=h;h=new Z(v,a),I(h,P)}if(P=!0,f)for(var M=f.length-1;0<=M;M--){var $=h.g=f[M];P=Ya($,v,!0,h)&&P}if($=h.g=a,P=Ya($,v,!0,h)&&P,P=Ya($,v,!1,h)&&P,f)for(M=0;M<f.length;M++)$=h.g=f[M],P=Ya($,v,!1,h)&&P}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],v=0;v<f.length;v++)Os(f[v]);delete a.g[h],a.h--}}this.F=null},dt.prototype.K=function(a,h,f,v){return this.i.add(String(a),h,!1,f,v)},dt.prototype.L=function(a,h,f,v){return this.i.add(String(a),h,!0,f,v)};function Ya(a,h,f,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,M=0;M<h.length;++M){var $=h[M];if($&&!$.da&&$.capture==f){var xe=$.listener,rt=$.ha||$.src;$.fa&&Ft(a.i,$),P=xe.call(rt,v)!==!1&&P}}return P&&!v.defaultPrevented}function zm(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function $m(a){a.g=zm(()=>{a.g=null,a.i&&(a.i=!1,$m(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class aT extends J{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$m(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(a){J.call(this),this.h=a,this.g={}}C(Ki,J);var Wm=[];function Hm(a){b(a.g,function(h,f){this.g.hasOwnProperty(f)&&Dn(h)},a),a.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),Hm(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sh=l.JSON.stringify,lT=l.JSON.parse,uT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ih(){}ih.prototype.h=null;function Gm(a){return a.h||(a.h=a.i())}function qm(){}var Qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oh(){Z.call(this,"d")}C(oh,Z);function ah(){Z.call(this,"c")}C(ah,Z);var Xr={},Km=null;function Xa(){return Km=Km||new dt}Xr.La="serverreachability";function Qm(a){Z.call(this,Xr.La,a)}C(Qm,Z);function Yi(a){const h=Xa();Tt(h,new Qm(h))}Xr.STAT_EVENT="statevent";function Ym(a,h){Z.call(this,Xr.STAT_EVENT,a),this.stat=h}C(Ym,Z);function Ct(a){const h=Xa();Tt(h,new Ym(h,a))}Xr.Ma="timingevent";function Xm(a,h){Z.call(this,Xr.Ma,a),this.size=h}C(Xm,Z);function Xi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function cT(a,h,f,v,P,M){a.info(function(){if(a.g)if(M)for(var $="",xe=M.split("&"),rt=0;rt<xe.length;rt++){var me=xe[rt].split("=");if(1<me.length){var ft=me[0];me=me[1];var pt=ft.split("_");$=2<=pt.length&&pt[1]=="type"?$+(ft+"="+me+"&"):$+(ft+"=redacted&")}}else $=null;else $=M;return"XMLHTTP REQ ("+v+") [attempt "+P+"]: "+h+`
`+f+`
`+$})}function hT(a,h,f,v,P,M,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+P+"]: "+h+`
`+f+`
`+M+" "+$})}function js(a,h,f,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+fT(a,f)+(v?" "+v:"")})}function dT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ji.prototype.info=function(){};function fT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var P=v[1];if(Array.isArray(P)&&!(1>P.length)){var M=P[0];if(M!="noop"&&M!="stop"&&M!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return sh(f)}catch{return h}}var Ja={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lh;function Za(){}C(Za,ih),Za.prototype.g=function(){return new XMLHttpRequest},Za.prototype.i=function(){return{}},lh=new Za;function ir(a,h,f,v){this.j=a,this.i=h,this.l=f,this.R=v||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zm}function Zm(){this.i=null,this.g="",this.h=!1}var eg={},uh={};function ch(a,h,f){a.L=1,a.v=rl(On(h)),a.m=f,a.P=!0,tg(a,null)}function tg(a,h){a.F=Date.now(),el(a),a.A=On(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),mg(f.i,"t",v),a.C=0,f=a.j.J,a.h=new Zm,a.g=Dg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new aT(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,v=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Wm[0]=P.toString()),P=Wm);for(var M=0;M<P.length;M++){var $=H(f,P[M],v||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Yi(),cT(a.i,a.u,a.A,a.l,a.R,a.m)}ir.prototype.ca=function(a){a=a.target;const h=this.M;h&&Mn(a)==3?h.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const pt=Mn(this.g);var h=this.g.Ba();const Us=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Eg(this.g)))){this.J||pt!=4||h==7||(h==8||0>=Us?Yi(3):Yi(2)),hh(this);var f=this.g.Z();this.X=f;t:if(ng(this)){var v=Eg(this.g);a="";var P=v.length,M=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),Zi(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(M&&h==P-1)});v.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,hT(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,rt=this.g;if((xe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(xe)){var me=xe;break t}}me=null}if(f=me)js(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dh(this,f);else{this.o=!1,this.s=3,Ct(12),Jr(this),Zi(this);break e}}if(this.P){f=!0;let on;for(;!this.J&&this.C<$.length;)if(on=pT(this,$),on==uh){pt==4&&(this.s=4,Ct(14),f=!1),js(this.i,this.l,null,"[Incomplete Response]");break}else if(on==eg){this.s=4,Ct(15),js(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else js(this.i,this.l,on,null),dh(this,on);if(ng(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||$.length!=0||this.h.h||(this.s=1,Ct(16),f=!1),this.o=this.o&&f,!f)js(this.i,this.l,$,"[Invalid Chunked Response]"),Jr(this),Zi(this);else if(0<$.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),yh(ft),ft.M=!0,Ct(11))}}else js(this.i,this.l,$,null),dh(this,$);pt==4&&Jr(this),this.o&&!this.J&&(pt==4?Ag(this.j,this):(this.o=!1,el(this)))}else bT(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Jr(this),Zi(this)}}}catch{}finally{}};function ng(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function pT(a,h){var f=a.C,v=h.indexOf(`
`,f);return v==-1?uh:(f=Number(h.substring(f,v)),isNaN(f)?eg:(v+=1,v+f>h.length?uh:(h=h.slice(v,v+f),a.C=v+f,h)))}ir.prototype.cancel=function(){this.J=!0,Jr(this)};function el(a){a.S=Date.now()+a.I,rg(a,a.I)}function rg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xi(g(a.ba,a),h)}function hh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ir.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(dT(this.i,this.A),this.L!=2&&(Yi(),Ct(17)),Jr(this),this.s=2,Zi(this)):rg(this,this.S-a)};function Zi(a){a.j.G==0||a.J||Ag(a.j,a)}function Jr(a){hh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Hm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function dh(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||fh(f.h,a))){if(!a.K&&fh(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var P=v;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ul(f),al(f);else break e;_h(f),Ct(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xi(g(f.Za,f),6e3));if(1>=og(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else es(f,11)}else if((a.K||f.g==a)&&ul(f),!E(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let me=P[h];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const ft=me[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=me[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const Us=me[5];Us!=null&&typeof Us=="number"&&0<Us&&(v=1.5*Us,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const on=a.g;if(on){const hl=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hl){var M=v.h;M.g||hl.indexOf("spdy")==-1&&hl.indexOf("quic")==-1&&hl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ph(M,M.h),M.h=null))}if(v.D){const vh=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;vh&&(v.ya=vh,ke(v.I,v.D,vh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var $=a;if(v.qa=Pg(v,v.J?v.ia:null,v.W),$.K){ag(v.h,$);var xe=$,rt=v.L;rt&&(xe.I=rt),xe.B&&(hh(xe),el(xe)),v.g=$}else kg(v);0<f.i.length&&ll(f)}else me[0]!="stop"&&me[0]!="close"||es(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?es(f,7):gh(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}Yi(4)}catch{}}var mT=class{constructor(a,h){this.g=a,this.map=h}};function sg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ig(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function og(a){return a.h?1:a.g?a.g.size:0}function fh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ph(a,h){a.g?a.g.add(h):a.h=h}function ag(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}sg.prototype.cancel=function(){if(this.i=lg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return A(a.i)}function gT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,v=0;v<f;v++)h.push(a[v]);return h}h=[],f=0;for(v in a)h[f++]=a[v];return h}function _T(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const v in a)h[f++]=v;return h}}}function ug(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=_T(a),v=gT(a),P=v.length,M=0;M<P;M++)h.call(void 0,v[M],f&&f[M],a)}var cg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),P=null;if(0<=v){var M=a[f].substring(0,v);P=a[f].substring(v+1)}else M=a[f];h(M,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,tl(this,a.j),this.o=a.o,this.g=a.g,nl(this,a.s),this.l=a.l;var h=a.i,f=new no;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),hg(this,f),this.m=a.m}else a&&(h=String(a).match(cg))?(this.h=!1,tl(this,h[1]||"",!0),this.o=eo(h[2]||""),this.g=eo(h[3]||"",!0),nl(this,h[4]),this.l=eo(h[5]||"",!0),hg(this,h[6]||"",!0),this.m=eo(h[7]||"")):(this.h=!1,this.i=new no(null,this.h))}Zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(to(h,dg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(to(h,dg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(to(f,f.charAt(0)=="/"?xT:wT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",to(f,IT)),a.join("")};function On(a){return new Zr(a)}function tl(a,h,f){a.j=f?eo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function nl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function hg(a,h,f){h instanceof no?(a.i=h,TT(a.i,a.h)):(f||(h=to(h,ET)),a.i=new no(h,a.h))}function ke(a,h,f){a.i.set(h,f)}function rl(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function eo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function to(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,vT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dg=/[#\/\?@]/g,wT=/[#\?:]/g,xT=/[#\?]/g,ET=/[#\?@]/g,IT=/#/g;function no(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&yT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=no.prototype,t.add=function(a,h){or(this),this.i=null,a=Vs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function fg(a,h){or(a),h=Vs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function pg(a,h){return or(a),h=Vs(a,h),a.g.has(h)}t.forEach=function(a,h){or(this),this.g.forEach(function(f,v){f.forEach(function(P){a.call(h,P,v,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let v=0;v<h.length;v++){const P=a[v];for(let M=0;M<P.length;M++)f.push(h[v])}return f},t.V=function(a){or(this);let h=[];if(typeof a=="string")pg(this,a)&&(h=h.concat(this.g.get(Vs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return or(this),this.i=null,a=Vs(this,a),pg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function mg(a,h,f){fg(a,h),0<f.length&&(a.i=null,a.g.set(Vs(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var v=h[f];const M=encodeURIComponent(String(v)),$=this.V(v);for(v=0;v<$.length;v++){var P=M;$[v]!==""&&(P+="="+encodeURIComponent(String($[v]))),a.push(P)}}return this.i=a.join("&")};function Vs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function TT(a,h){h&&!a.j&&(or(a),a.i=null,a.g.forEach(function(f,v){var P=v.toLowerCase();v!=P&&(fg(this,v),mg(this,P,f))},a)),a.j=h}function CT(a,h){const f=new Ji;if(l.Image){const v=new Image;v.onload=T(ar,f,"TestLoadImage: loaded",!0,h,v),v.onerror=T(ar,f,"TestLoadImage: error",!1,h,v),v.onabort=T(ar,f,"TestLoadImage: abort",!1,h,v),v.ontimeout=T(ar,f,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function ST(a,h){const f=new Ji,v=new AbortController,P=setTimeout(()=>{v.abort(),ar(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(M=>{clearTimeout(P),M.ok?ar(f,"TestPingServer: ok",!0,h):ar(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),ar(f,"TestPingServer: error",!1,h)})}function ar(a,h,f,v,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),v(f)}catch{}}function kT(){this.g=new uT}function NT(a,h,f){const v=f||"";try{ug(a,function(P,M){let $=P;c(P)&&($=sh(P)),h.push(v+M+"="+encodeURIComponent($))})}catch(P){throw h.push(v+"type="+encodeURIComponent("_badmap")),P}}function sl(a){this.l=a.Ub||null,this.j=a.eb||!1}C(sl,ih),sl.prototype.g=function(){return new il(this.l,this.j)},sl.prototype.i=function(a){return function(){return a}}({});function il(a,h){dt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(il,dt),t=il.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,so(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ro(this):so(this),this.readyState==3&&gg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ro(this))},t.Qa=function(a){this.g&&(this.response=a,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(a){a.readyState=4,a.l=null,a.j=null,a.v=null,so(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function so(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _g(a){let h="";return b(a,function(f,v){h+=v,h+=":",h+=f,h+=`\r
`}),h}function mh(a,h,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=_g(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ke(a,h,f))}function Le(a){dt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Le,dt);var AT=/^https?$/i,RT=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lh.g(),this.v=this.o?Gm(this.o):Gm(lh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){yg(this,M);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var P in v)f.set(P,v[P]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())f.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(RT,h,void 0))||v||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of f)this.g.setRequestHeader(M,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xg(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){yg(this,M)}};function yg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,vg(a),ol(a)}function vg(a){a.A||(a.A=!0,Tt(a,"complete"),Tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Tt(this,"complete"),Tt(this,"abort"),ol(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ol(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wg(this):this.bb())},t.bb=function(){wg(this)};function wg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)zm(a.Ea,0,a);else if(Tt(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var v;if(v=$===0){var P=String(a.D).match(cg)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),v=!AT.test(P?P.toLowerCase():"")}f=v}if(f)Tt(a,"complete"),Tt(a,"success");else{a.m=6;try{var M=2<Mn(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",vg(a)}}finally{ol(a)}}}}function ol(a,h){if(a.g){xg(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Tt(a,"ready");try{f.onreadystatechange=v}catch{}}}function xg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),lT(h)}};function Eg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bT(a){const h={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(E(a[v]))continue;var f=k(a[v]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=h[P]||[];h[P]=M,M.push(f)}w(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function io(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Ig(a){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=io("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=io("baseRetryDelayMs",5e3,a),this.cb=io("retryDelaySeedMs",1e4,a),this.Wa=io("forwardChannelMaxRetries",2,a),this.wa=io("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new sg(a&&a.concurrentRequestLimit),this.Da=new kT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ig.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,v){Ct(0),this.W=a,this.H=h||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=Pg(this,null,this.W),ll(this)};function gh(a){if(Tg(a),a.G==3){var h=a.U++,f=On(a.I);if(ke(f,"SID",a.K),ke(f,"RID",h),ke(f,"TYPE","terminate"),oo(a,f),h=new ir(a,a.j,h),h.L=2,h.v=rl(On(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Dg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),el(h)}bg(a)}function al(a){a.g&&(yh(a),a.g.cancel(),a.g=null)}function Tg(a){al(a),a.u&&(l.clearTimeout(a.u),a.u=null),ul(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ll(a){if(!ig(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||j(),z||(we(),z=!0),Q.add(h,a),a.B=0}}function PT(a,h){return og(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xi(g(a.Ga,a,h),Rg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new ir(this,this.j,a);let M=this.o;if(this.S&&(M?(M=y(M),I(M,this.S)):M=this.S),this.m!==null||this.O||(P.H=M,M=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Sg(this,P,h),f=On(this.I),ke(f,"RID",a),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),oo(this,f),M&&(this.O?h="headers="+encodeURIComponent(String(_g(M)))+"&"+h:this.m&&mh(f,this.m,M)),ph(this.h,P),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",h),ke(f,"SID","null"),P.T=!0,ch(P,f,null)):ch(P,f,h),this.G=2}}else this.G==3&&(a?Cg(this,a):this.i.length==0||ig(this.h)||Cg(this))};function Cg(a,h){var f;h?f=h.l:f=a.U++;const v=On(a.I);ke(v,"SID",a.K),ke(v,"RID",f),ke(v,"AID",a.T),oo(a,v),a.m&&a.o&&mh(v,a.m,a.o),f=new ir(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Sg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ph(a.h,f),ch(f,v,h)}function oo(a,h){a.H&&b(a.H,function(f,v){ke(h,v,f)}),a.l&&ug({},function(f,v){ke(h,v,f)})}function Sg(a,h,f){f=Math.min(a.i.length,f);var v=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let M=-1;for(;;){const $=["count="+f];M==-1?0<f?(M=P[0].g,$.push("ofs="+M)):M=0:$.push("ofs="+M);let xe=!0;for(let rt=0;rt<f;rt++){let me=P[rt].g;const ft=P[rt].map;if(me-=M,0>me)M=Math.max(0,P[rt].g-100),xe=!1;else try{NT(ft,$,"req"+me+"_")}catch{v&&v(ft)}}if(xe){v=$.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,v}function kg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||j(),z||(we(),z=!0),Q.add(h,a),a.v=0}}function _h(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xi(g(a.Fa,a),Rg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ng(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),al(this),Ng(this))};function yh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ng(a){a.g=new ir(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=On(a.qa);ke(h,"RID","rpc"),ke(h,"SID",a.K),ke(h,"AID",a.T),ke(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(h,"TO",a.ja),ke(h,"TYPE","xmlhttp"),oo(a,h),a.m&&a.o&&mh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=rl(On(h)),f.m=null,f.P=!0,tg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,al(this),_h(this),Ct(19))};function ul(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ag(a,h){var f=null;if(a.g==h){ul(a),yh(a),a.g=null;var v=2}else if(fh(a.h,h))f=h.D,ag(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;v=Xa(),Tt(v,new Xm(v,f)),ll(a)}else kg(a);else if(P=h.s,P==3||P==0&&0<h.X||!(v==1&&PT(a,h)||v==2&&_h(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),P){case 1:es(a,5);break;case 4:es(a,10);break;case 3:es(a,6);break;default:es(a,2)}}}function Rg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function es(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),v=a.Xa;const P=!v;v=new Zr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||tl(v,"https"),rl(v),P?CT(v.toString(),f):ST(v.toString(),f)}else Ct(2);a.G=0,a.l&&a.l.sa(h),bg(a),Tg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function bg(a){if(a.G=0,a.ka=[],a.l){const h=lg(a.h);(h.length!=0||a.i.length!=0)&&(L(a.ka,h),L(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Pg(a,h,f){var v=f instanceof Zr?On(f):new Zr(f);if(v.g!="")h&&(v.g=h+"."+v.g),nl(v,v.s);else{var P=l.location;v=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var M=new Zr(null);v&&tl(M,v),h&&(M.g=h),P&&nl(M,P),f&&(M.l=f),v=M}return f=a.D,h=a.ya,f&&h&&ke(v,f,h),ke(v,"VER",a.la),oo(a,v),v}function Dg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Le(new sl({eb:f})):new Le(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Og(){}t=Og.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function cl(){}cl.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){dt.call(this),this.g=new Ig(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!E(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Fs(this)}C(Ut,dt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){gh(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=sh(a),a=f);h.i.push(new mT(h.Ya++,a)),h.G==3&&ll(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,gh(this.g),delete this.g,Ut.aa.N.call(this)};function Mg(a){oh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Mg,oh);function Lg(){ah.call(this),this.status=1}C(Lg,ah);function Fs(a){this.g=a}C(Fs,Og),Fs.prototype.ua=function(){Tt(this.g,"a")},Fs.prototype.ta=function(a){Tt(this.g,new Mg(a))},Fs.prototype.sa=function(a){Tt(this.g,new Lg)},Fs.prototype.ra=function(){Tt(this.g,"b")},cl.prototype.createWebChannel=cl.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,hI=function(){return new cl},cI=function(){return Xa()},uI=Xr,Cf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ja.NO_ERROR=0,Ja.TIMEOUT=8,Ja.HTTP_ERROR=6,ru=Ja,Jm.COMPLETE="complete",lI=Jm,qm.EventType=Qi,Qi.OPEN="a",Qi.CLOSE="b",Qi.ERROR="c",Qi.MESSAGE="d",dt.prototype.listen=dt.prototype.K,No=qm,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,aI=Le}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});const rv="@firebase/firestore";/**
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
 */let Hi="10.14.0";/**
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
 */const Cs=new kc("@firebase/firestore");function wo(){return Cs.logLevel}function Y(t,...e){if(Cs.logLevel<=ce.DEBUG){const n=e.map(wm);Cs.debug(`Firestore (${Hi}): ${t}`,...n)}}function Ss(t,...e){if(Cs.logLevel<=ce.ERROR){const n=e.map(wm);Cs.error(`Firestore (${Hi}): ${t}`,...n)}}function Ju(t,...e){if(Cs.logLevel<=ce.WARN){const n=e.map(wm);Cs.warn(`Firestore (${Hi}): ${t}`,...n)}}function wm(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: `+t;throw Ss(e),new Error(e)}function Be(t,e){t||de()}function Se(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class M2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L2{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fs,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new dI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new yt(e)}}class j2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new j2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Be(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new F2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function B2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=B2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ea{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ea.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ea?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends Ea{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const z2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ea{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return z2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(We.fromString(e))}static fromName(e){return new ie(We.fromString(e).popFirst(5))}static empty(){return new ie(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new We(e.slice()))}}function $2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=be.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Wr(s,ie.empty(),e)}function W2(t){return new Wr(t.readTime,t.key,-1)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(be.min(),ie.empty(),-1)}static max(){return new Wr(be.max(),ie.empty(),-1)}}function H2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const G2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pI(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==G2)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function K2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mI{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mI.oe=-1;function xm(t){return t==null}function Zu(t){return t===0&&1/t==-1/0}function Q2(t){return typeof t=="number"&&Number.isInteger(t)&&!Zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function sv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ga(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Vt{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Vt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dl(this.root,e,this.comparator,!0)}}class Dl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new mn([])}unionWith(e){let n=new xt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Y2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class An{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Y2("Invalid base64 string: "+i):i}}(e);return new An(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new An(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}An.EMPTY_BYTE_STRING=new An("");const X2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(t){if(Be(!!t),typeof t=="string"){let e=0;const n=X2.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ia(t){return typeof t=="string"?An.fromBase64String(t):An.fromUint8Array(t)}/**
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
 */function Em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _I(t){const e=t.mapValue.fields.__previous_value__;return Em(e)?_I(e):e}function ec(t){const e=ks(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class J2{constructor(e,n,r,s,i,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class tc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ol={mapValue:{}};function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Em(t)?4:eD(t)?9007199254740991:Z2(t)?10:11:de()}function Rn(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ec(t).isEqual(ec(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ks(s.timestampValue),l=ks(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ia(s.bytesValue).isEqual(Ia(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ot(s.doubleValue),l=ot(i.doubleValue);return o===l?Zu(o)===Zu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(sv(o)!==sv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Rn(o[u],l[u])))return!1;return!0}(t,e);default:return de()}}function Ta(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ot(i.integerValue||i.doubleValue),u=ot(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ov(t.timestampValue,e.timestampValue);case 4:return ov(ec(t),ec(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ia(i),u=Ia(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=Ee(l[c],u[c]);if(p!==0)return p}return Ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ee(ot(i.latitude),ot(o.latitude));return l!==0?l:Ee(ot(i.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return av(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,p;const m=i.fields||{},g=o.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,A=Ee(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return A!==0?A:av(T,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ol.mapValue&&o===Ol.mapValue)return 0;if(i===Ol.mapValue)return 1;if(o===Ol.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Ee(u[m],p[m]);if(g!==0)return g;const T=Di(l[u[m]],c[p[m]]);if(T!==0)return T}return Ee(u.length,p.length)}(t.mapValue,e.mapValue);default:throw de()}}function ov(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=ks(t),r=ks(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function av(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Di(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Oi(t){return Sf(t)}function Sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ks(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ia(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sf(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function kf(t){return!!t&&"integerValue"in t}function Im(t){return!!t&&"arrayValue"in t}function su(t){return!!t&&"mapValue"in t}function Z2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ga(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wo(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Wo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];su(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ga(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new fn(Wo(this.value))}}function yI(t){const e=[];return Ga(t.fields,(n,r)=>{const s=new lt([n]);if(su(r)){const i=yI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mn(e)}/**
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
 */class hn{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new hn(e,0,be.min(),be.min(),be.min(),fn.empty(),0)}static newFoundDocument(e,n,r,s){return new hn(e,1,n,be.min(),r,s,0)}static newNoDocument(e,n){return new hn(e,2,n,be.min(),be.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new hn(e,3,n,be.min(),be.min(),fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nc{constructor(e,n){this.position=e,this.inclusive=n}}function lv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function tD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class vI{}class et extends vI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rD(e,n,r):n==="array-contains"?new oD(e,r):n==="in"?new aD(e,r):n==="not-in"?new lD(e,r):n==="array-contains-any"?new uD(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sD(e,r):new iD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&Pi(this.value)===Pi(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hr extends vI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hr(e,n)}matches(e){return wI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wI(t){return t.op==="and"}function xI(t){return nD(t)&&wI(t)}function nD(t){for(const e of t.filters)if(e instanceof Hr)return!1;return!0}function Nf(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Oi(t.value);if(xI(t))return t.filters.map(e=>Nf(e)).join(",");{const e=t.filters.map(n=>Nf(n)).join(",");return`${t.op}(${e})`}}function EI(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(t,e):t instanceof Hr?function(r,s){return s instanceof Hr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&EI(o,s.filters[l]),!0):!1}(t,e):void de()}function II(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(t):t instanceof Hr?function(n){return n.op.toString()+" {"+n.getFilters().map(II).join(" ,")+"}"}(t):"Filter"}class rD extends et{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class sD extends et{constructor(e,n){super(e,"in",n),this.keys=TI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iD extends et{constructor(e,n){super(e,"not-in",n),this.keys=TI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class oD extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Im(n)&&Ta(n.arrayValue,this.value)}}class aD extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ta(this.value.arrayValue,n)}}class lD extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ta(this.value.arrayValue,n)}}class uD extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Im(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ta(this.value.arrayValue,r))}}/**
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
 */class cD{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function cv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new cD(t,e,n,r,s,i,o)}function Tm(t){const e=Se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.ue=n}return e.ue}function Cm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!EI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uv(t.startAt,e.startAt)&&uv(t.endAt,e.endAt)}/**
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
 */class qc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hD(t,e,n,r,s,i,o,l){return new qc(t,e,n,r,s,i,o,l)}function dD(t){return new qc(t)}function hv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fD(t){return t.collectionGroup!==null}function Ho(t){const e=Se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xt(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new rc(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new rc(lt.keyField(),r))}return e.ce}function ps(t){const e=Se(t);return e.le||(e.le=pD(e,Ho(t))),e.le}function pD(t,e){if(t.limitType==="F")return cv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rc(s.field,i)});const n=t.endAt?new nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nc(t.startAt.position,t.startAt.inclusive):null;return cv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Af(t,e,n){return new qc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function CI(t,e){return Cm(ps(t),ps(e))&&t.limitType===e.limitType}function SI(t){return`${Tm(ps(t))}|lt:${t.limitType}`}function xo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>II(s)).join(", ")}]`),xm(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Oi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Oi(s)).join(",")),`Target(${r})`}(ps(t))}; limitType=${t.limitType})`}function Sm(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ho(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=lv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ho(r),s)||r.endAt&&!function(o,l,u){const c=lv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ho(r),s))}(t,e)}function mD(t){return(e,n)=>{let r=!1;for(const s of Ho(t)){const i=gD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gD(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Di(u,c):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ga(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gI(this.inner)}size(){return this.innerSize}}/**
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
 */const _D=new Vt(ie.comparator);function sc(){return _D}const kI=new Vt(ie.comparator);function Ml(...t){let e=kI;for(const n of t)e=e.insert(n.key,n);return e}function NI(t){let e=kI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cs(){return Go()}function AI(){return Go()}function Go(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const yD=new Vt(ie.comparator),vD=new xt(ie.comparator);function wt(...t){let e=vD;for(const n of t)e=e.add(n);return e}const wD=new xt(Ee);function xD(){return wD}/**
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
 */function km(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function RI(t){return{integerValue:""+t}}function ED(t,e){return Q2(e)?RI(e):km(t,e)}/**
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
 */class Kc{constructor(){this._=void 0}}function ID(t,e,n){return t instanceof Ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Em(i)&&(i=_I(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Sa?PI(t,e):t instanceof ka?DI(t,e):function(s,i){const o=bI(s,i),l=dv(o)+dv(s.Pe);return kf(o)&&kf(s.Pe)?RI(l):km(s.serializer,l)}(t,e)}function TD(t,e,n){return t instanceof Sa?PI(t,e):t instanceof ka?DI(t,e):n}function bI(t,e){return t instanceof ic?function(r){return kf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ca extends Kc{}class Sa extends Kc{constructor(e){super(),this.elements=e}}function PI(t,e){const n=OI(e);for(const r of t.elements)n.some(s=>Rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ka extends Kc{constructor(e){super(),this.elements=e}}function DI(t,e){let n=OI(e);for(const r of t.elements)n=n.filter(s=>!Rn(s,r));return{arrayValue:{values:n}}}class ic extends Kc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dv(t){return ot(t.integerValue||t.doubleValue)}function OI(t){return Im(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class CD{constructor(e,n){this.field=e,this.transform=n}}function SD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Sa&&s instanceof Sa||r instanceof ka&&s instanceof ka?bi(r.elements,s.elements,Rn):r instanceof ic&&s instanceof ic?Rn(r.Pe,s.Pe):r instanceof Ca&&s instanceof Ca}(t.transform,e.transform)}class kD{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qc{}function MI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jI(t.key,qn.none()):new qa(t.key,t.data,qn.none());{const n=t.data,r=fn.empty();let s=new xt(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ds(t.key,r,new mn(s.toArray()),qn.none())}}function ND(t,e,n){t instanceof qa?function(s,i,o){const l=s.value.clone(),u=pv(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(s,i,o){if(!iu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=pv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(LI(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qo(t,e,n,r){return t instanceof qa?function(i,o,l,u){if(!iu(i.precondition,o))return l;const c=i.value.clone(),p=mv(i.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ds?function(i,o,l,u){if(!iu(i.precondition,o))return l;const c=mv(i.fieldTransforms,u,o),p=o.data;return p.setAll(LI(i)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return iu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function AD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bI(r.transform,s||null);i!=null&&(n===null&&(n=fn.empty()),n.set(r.field,i))}return n||null}function fv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bi(r,s,(i,o)=>SD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qa extends Qc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ds extends Qc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function LI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pv(t,e,n){const r=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,TD(o,l,n[s]))}return r}function mv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ID(i,o,e))}return r}class jI extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RD extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ND(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=AI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=MI(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(be.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),wt())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>fv(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>fv(n,r))}}class Nm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length);let s=function(){return yD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nm(e,n,r,s)}}/**
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
 */class PD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var $e,fe;function DD(t){switch(t){default:return de();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function OD(t){if(t===void 0)return Ss("GRPC error has no .code"),U.UNKNOWN;switch(t){case $e.OK:return U.OK;case $e.CANCELLED:return U.CANCELLED;case $e.UNKNOWN:return U.UNKNOWN;case $e.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case $e.INTERNAL:return U.INTERNAL;case $e.UNAVAILABLE:return U.UNAVAILABLE;case $e.UNAUTHENTICATED:return U.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case $e.NOT_FOUND:return U.NOT_FOUND;case $e.ALREADY_EXISTS:return U.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return U.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case $e.ABORTED:return U.ABORTED;case $e.OUT_OF_RANGE:return U.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return U.UNIMPLEMENTED;case $e.DATA_LOSS:return U.DATA_LOSS;default:return de()}}(fe=$e||($e={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new oI([4294967295,4294967295],0);class MD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LD(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jD(t,e){return Rf(t,e.toTimestamp())}function mi(t){return Be(!!t),be.fromTimestamp(function(n){const r=ks(n);return new nt(r.seconds,r.nanos)}(t))}function VI(t,e){return bf(t,e).canonicalString()}function bf(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function VD(t){const e=We.fromString(t);return Be(GD(e)),e}function Pf(t,e){return VI(t.databaseId,e.path)}function FD(t){const e=VD(t);return e.length===4?We.emptyPath():BD(e)}function UD(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BD(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gv(t,e,n){return{name:Pf(t,e),fields:n.value.mapValue.fields}}function zD(t,e){let n;if(e instanceof qa)n={update:gv(t,e.key,e.value)};else if(e instanceof jI)n={delete:Pf(t,e.key)};else if(e instanceof Ds)n={update:gv(t,e.key,e.data),updateMask:HD(e.fieldMask)};else{if(!(e instanceof RD))return de();n={verify:Pf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ic)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function $D(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mi(s.updateTime):mi(i);return o.isEqual(be.min())&&(o=mi(i)),new kD(o,s.transformResults||[])}(n,e))):[]}function WD(t){let e=FD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=FI(m);return g instanceof Hr&&xI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new rc($s(C.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,xm(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,T=m.values||[];return new nc(T,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,T=m.values||[];return new nc(T,g)}(n.endAt)),hD(e,s,o,i,l,"F",u,c)}function FI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$s(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$s(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$s(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$s(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return et.create($s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hr.create(n.compositeFilter.filters.map(r=>FI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function $s(t){return lt.fromServerFormat(t.fieldPath)}function HD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GD(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qD{constructor(e){this.ct=e}}function KD(t){const e=WD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
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
 */class QD{constructor(){this.un=new YD}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Wr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class YD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new xt(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xt(We.comparator)).toArray()}}/**
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
 */class Mi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Mi(0)}static kn(){return new Mi(-1)}}/**
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
 */class XD{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ZD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qo(r.mutation,s,mn.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,wt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=wt()){const s=cs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ml();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,wt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=sc();const o=Go(),l=function(){return Go()}();return n.forEach((u,c)=>{const p=r.get(c.key);s.has(c.key)&&(p===void 0||p.mutation instanceof Ds)?i=i.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),qo(p.mutation,c,p.mutation.getFieldMask(),nt.now())):o.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>{var m;return l.set(c,new JD(p,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Go();let s=new Vt((o,l)=>o-l),i=wt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||mn.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(s.get(l.batchId)||wt()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=AI();p.forEach(g=>{if(!i.has(g)){const T=MI(n.get(g),r.get(g));T!==null&&m.set(g,T),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(cs());let l=-1,u=i;return o.next(c=>V.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,wt())).next(p=>({batchId:l,changes:NI(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Ml();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ml();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const c=function(m,g){return new qc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,hn.newInvalidDocument(p)))});let l=Ml();return o.forEach((u,c)=>{const p=i.get(u);p!==void 0&&qo(p.mutation,c,mn.empty(),nt.now()),Sm(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class eO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mi(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:KD(s.bundledQuery),readTime:mi(s.readTime)}}(n)),V.resolve()}}/**
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
 */class tO{constructor(){this.overlays=new Vt(ie.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cs();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=cs(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Vt((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=i.get(c.largestBatchId);p===null&&(p=cs(),i=i.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=cs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PD(n,r));let i=this.Ir.get(n);i===void 0&&(i=wt(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class nO{constructor(){this.sessionToken=An.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Am{constructor(){this.Tr=new xt(Je.Er),this.dr=new xt(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new We([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new We([])),r=new Je(n,e),s=new Je(n,e+1);let i=wt();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Ee(e.wr,n.wr)}static Ar(e,n){return Ee(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
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
 */class rO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new xt(Je.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bD(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(Ee);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new Je(new ie(i),0);let l=new xt(Ee);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Je(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sO{constructor(e){this.Mr=e,this.docs=function(){return new Vt(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():hn.newInvalidDocument(n))}getEntries(e,n){let r=sc();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():hn.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sc();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||H2(W2(p),r)<=0||(s.has(p.key)||Sm(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iO(this)}getSize(e){return V.resolve(this.size)}}class iO extends XD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class oO{constructor(e){this.persistence=e,this.Nr=new Gi(n=>Tm(n),Cm),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Am,this.targetCount=0,this.kr=Mi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Mi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
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
 */class aO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new mI(0),this.Kr=!1,this.Kr=!0,this.$r=new nO,this.referenceDelegate=e(this),this.Ur=new oO(this),this.indexManager=new QD,this.remoteDocumentCache=function(s){return new sO(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qD(n),this.Gr=new eO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new rO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new lO(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class lO extends q2{constructor(e){super(),this.currentSequenceNumber=e}}class Rm{constructor(e){this.persistence=e,this.Jr=new Am,this.Yr=null}static Zr(e){return new Rm(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,be.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class bm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=wt(),s=wt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bm(e,n.fromCache,r,s)}}/**
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
 */class uO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return H1()?8:K2(It())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uO;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(wo()<=ce.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",xo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(wo()<=ce.DEBUG&&Y("QueryEngine","Query:",xo(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(wo()<=ce.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",xo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ps(n))):V.resolve())}Yi(e,n){if(hv(n))return V.resolve(null);let r=ps(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Af(n,null,"F"),r=ps(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=wt(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Af(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return hv(n)||s.isEqual(be.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(wo()<=ce.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xo(n)),this.rs(e,o,n,$2(s,-1)).next(l=>l))})}ts(e,n){let r=new xt(mD(e));return n.forEach((s,i)=>{Sm(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return wo()<=ce.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",xo(n)),this.Ji.getDocumentsMatchingQuery(e,n,Wr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class hO{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Vt(Ee),this._s=new Gi(i=>Tm(i),Cm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dO(t,e,n,r){return new hO(t,e,n,r)}async function UI(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=wt();for(const c of s){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of i){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function fO(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let T=V.resolve();return g.forEach(C=>{T=T.next(()=>p.getEntry(u,C)).next(A=>{const L=c.docVersions.get(C);Be(L!==null),A.version.compareTo(L)<0&&(m.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),p.addEntry(A)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=wt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function pO(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mO(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class _v{constructor(){this.activeTargetIds=xD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gO{constructor(){this.so=new _v,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _v,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _O{_o(e){}shutdown(){}}/**
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
 */class yv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ll=null;function od(){return Ll===null?Ll=function(){return 268435456+Math.round(2147483648*Math.random())}():Ll++,"0x"+Ll.toString(16)}/**
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
 */const yO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const _t="WebChannelConnection";class wO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=od(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(p=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ju("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=yO[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=od();return new Promise((o,l)=>{const u=new aI;u.setWithCredentials(!0),u.listenOnce(lI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ru.NO_ERROR:const p=u.getResponseJson();Y(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case ru.TIMEOUT:Y(_t,`RPC '${e}' ${i} timed out`),l(new re(U.DEADLINE_EXCEEDED,"Request time out"));break;case ru.HTTP_ERROR:const m=u.getStatus();if(Y(_t,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const C=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(S)>=0?S:U.UNKNOWN}(T.status);l(new re(C,T.message))}else l(new re(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new re(U.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Y(_t,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);Y(_t,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=od(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hI(),l=cI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");Y(_t,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,T=!1;const C=new vO({Io:L=>{T?Y(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(g||(Y(_t,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),Y(_t,`RPC '${e}' stream ${s} sending:`,L),m.send(L))},To:()=>m.close()}),A=(L,S,E)=>{L.listen(S,N=>{try{E(N)}catch(D){setTimeout(()=>{throw D},0)}})};return A(m,No.EventType.OPEN,()=>{T||(Y(_t,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),A(m,No.EventType.CLOSE,()=>{T||(T=!0,Y(_t,`RPC '${e}' stream ${s} transport closed`),C.So())}),A(m,No.EventType.ERROR,L=>{T||(T=!0,Ju(_t,`RPC '${e}' stream ${s} transport errored:`,L),C.So(new re(U.UNAVAILABLE,"The operation could not be completed")))}),A(m,No.EventType.MESSAGE,L=>{var S;if(!T){const E=L.data[0];Be(!!E);const N=E,D=N.error||((S=N[0])===null||S===void 0?void 0:S.error);if(D){Y(_t,`RPC '${e}' stream ${s} received error:`,D);const O=D.status;let b=function(x){const I=$e[x];if(I!==void 0)return OD(I)}(O),w=D.message;b===void 0&&(b=U.INTERNAL,w="Unknown error status: "+O+" with message "+D.message),T=!0,C.So(new re(b,w)),m.close()}else Y(_t,`RPC '${e}' stream ${s} received:`,E),C.bo(E)}}),A(l,uI.STAT_EVENT,L=>{L.stat===Cf.PROXY?Y(_t,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Cf.NOPROXY&&Y(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function ad(){return typeof document<"u"?document:null}/**
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
 */function Yc(t){return new MD(t,!0)}/**
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
 */class BI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class xO{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new BI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Ss(n.toString()),Ss("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new re(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EO extends xO{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=$D(e.writeResults,e.commitTime),r=mi(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=UD(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zD(this.serializer,r))};this.a_(n)}}/**
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
 */class IO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,bf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(U.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,bf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class TO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ss(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class CO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qa(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Se(u);c.L_.add(4),await Ka(c),c.q_.set("Unknown"),c.L_.delete(4),await Xc(c)}(this))})}),this.q_=new TO(r,s)}}async function Xc(t){if(Qa(t))for(const e of t.B_)await e(!0)}async function Ka(t){for(const e of t.B_)await e(!1)}function Qa(t){return Se(t).L_.size===0}async function zI(t,e,n){if(!Gc(e))throw e;t.L_.add(1),await Ka(t),t.q_.set("Offline"),n||(n=()=>pO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Xc(t)})}function $I(t,e){return e().catch(n=>zI(t,n,e))}async function Jc(t){const e=Se(t),n=Gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;SO(e);)try{const s=await mO(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,kO(e,s)}catch(s){await zI(e,s)}WI(e)&&HI(e)}function SO(t){return Qa(t)&&t.O_.length<10}function kO(t,e){t.O_.push(e);const n=Gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function WI(t){return Qa(t)&&!Gr(t).n_()&&t.O_.length>0}function HI(t){Gr(t).start()}async function NO(t){Gr(t).p_()}async function AO(t){const e=Gr(t);for(const n of t.O_)e.m_(n.mutations)}async function RO(t,e,n){const r=t.O_.shift(),s=Nm.from(r,e,n);await $I(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jc(t)}async function bO(t,e){e&&Gr(t).V_&&await async function(r,s){if(function(o){return DD(o)&&o!==U.ABORTED}(s.code)){const i=r.O_.shift();Gr(r).s_(),await $I(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jc(r)}}(t,e),WI(t)&&HI(t)}async function vv(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Qa(n);n.L_.add(3),await Ka(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Xc(n)}async function PO(t,e){const n=Se(t);e?(n.L_.delete(2),await Xc(n)):e||(n.L_.add(2),await Ka(n),n.q_.set("Unknown"))}function Gr(t){return t.U_||(t.U_=function(n,r,s){const i=Se(n);return i.w_(),new EO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:NO.bind(null,t),mo:bO.bind(null,t),f_:AO.bind(null,t),g_:RO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Jc(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Pm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Pm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function GI(t,e){if(Ss("AsyncQueue",`${e}: ${t}`),Gc(t))return new re(U.UNAVAILABLE,`${e}: ${t}`);throw t}class DO{constructor(){this.queries=wv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Se(n),i=s.queries;s.queries=wv(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new re(U.ABORTED,"Firestore shutting down"))}}function wv(){return new Gi(t=>SI(t),CI)}function OO(t){t.Y_.forEach(e=>{e.next()})}var xv,Ev;(Ev=xv||(xv={})).ea="default",Ev.Cache="cache";class MO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Gi(l=>SI(l),CI),this.Ma=new Map,this.xa=new Set,this.Oa=new Vt(ie.comparator),this.Na=new Map,this.La=new Am,this.Ba={},this.ka=new Map,this.qa=Mi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function LO(t,e,n){const r=UO(t);try{const s=await function(o,l){const u=Se(o),c=nt.now(),p=l.reduce((T,C)=>T.add(C.key),wt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=sc(),A=wt();return u.cs.getEntries(T,p).next(L=>{C=L,C.forEach((S,E)=>{E.isValidDocument()||(A=A.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,C)).next(L=>{m=L;const S=[];for(const E of l){const N=AD(E,m.get(E.key).overlayedDocument);N!=null&&S.push(new Ds(E.key,N,yI(N.value.mapValue),qn.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,S,l)}).next(L=>{g=L;const S=L.applyToLocalDocumentSet(m,A);return u.documentOverlayCache.saveOverlays(T,L.batchId,S)})}).then(()=>({batchId:g.batchId,changes:NI(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Vt(Ee)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await Zc(r,s.changes),await Jc(r.remoteStore)}catch(s){const i=GI(s,"Failed to persist write");n.reject(i)}}function Iv(t,e,n){const r=Se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Se(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&OO(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jO(t,e){const n=Se(t),r=e.batch.batchId;try{const s=await fO(n.localStore,e);KI(n,r,null),qI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zc(n,s)}catch(s){await pI(s)}}async function VO(t,e,n){const r=Se(t);try{const s=await function(o,l){const u=Se(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(Be(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);KI(r,e,n),qI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zc(r,s)}catch(s){await pI(s)}}function qI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function KI(t,e,n){const r=Se(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}async function Zc(t,e,n){const r=Se(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=void 0)===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=bm.Wi(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const p=Se(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.$i,T=>p.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>V.forEach(g.Ui,T=>p.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!Gc(m))throw m;Y("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const T=p.os.get(g),C=T.snapshotVersion,A=T.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(g,A)}}}(r.localStore,i))}async function FO(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await UI(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new re(U.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zc(n,r.hs)}}function UO(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VO.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return dO(this.persistence,new cO,e.initialUser,this.serializer)}Ga(e){return new aO(Rm.Zr,this.serializer)}Wa(e){return new gO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class Df{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Iv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FO.bind(null,this.syncEngine),await PO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DO}()}createDatastore(e){const n=Yc(e.databaseInfo.databaseId),r=function(i){return new wO(i)}(e.databaseInfo);return function(i,o,l,u){return new IO(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new CO(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Iv(this.syncEngine,n,0),function(){return yv.D()?new yv:new _O}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,p){const m=new MO(s,i,o,l,u,c);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Se(s);Y("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ka(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Df.provider={build:()=>new Df};/**
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
 */class BO{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=fI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=GI(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ld(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await UI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zO(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>vv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>vv(e.remoteStore,s)),t._onlineComponents=e}async function zO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await ld(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ju("Error using user provided cache. Falling back to memory cache: "+n),await ld(t,new oc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await ld(t,new oc);return t._offlineComponents}async function $O(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Tv(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Tv(t,new Df))),t._onlineComponents}function WO(t){return $O(t).then(e=>e.syncEngine)}/**
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
 */function QI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Cv=new Map;/**
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
 */function HO(t,e,n){if(!n)throw new re(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GO(t,e,n,r){if(e===!0&&r===!0)throw new re(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sv(t){if(!ie.isDocumentKey(t))throw new re(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Of(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dm(t);throw new re(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class kv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Om{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new O2;switch(r.type){case"firstParty":return new V2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cv.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Cv.delete(n),r.terminate())}(this),Promise.resolve()}}function qO(t,e,n,r={}){var s;const i=(t=Of(t,Om))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ju("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=nx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new M2(new dI(l,u))}}/**
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
 */class Mm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mm(this.firestore,e,this._query)}}class Kn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Na(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kn(this.firestore,e,this._key)}}class Na extends Mm{constructor(e,n,r){super(e,n,dD(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kn(this.firestore,null,new ie(e))}withConverter(e){return new Na(this.firestore,e,this._path)}}function KO(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=fI.newId()),HO("doc","path",e),t instanceof Om){const r=We.fromString(e,...n);return Sv(r),new Kn(t,null,new ie(r))}{if(!(t instanceof Kn||t instanceof Na))throw new re(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Sv(r),new Kn(t.firestore,t instanceof Na?t.converter:null,new ie(r))}}/**
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
 */class Nv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new BI(this,"async_queue_retry"),this.Vu=()=>{const r=ad();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ad();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ad();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new fs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gc(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ss("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Pm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class YI extends Om{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Nv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nv(e),this._firestoreClient=void 0,await e}}}function QO(t,e){const n=typeof t=="object"?t:Ac(),r=typeof t=="string"?t:"(default)",s=Nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Zw("firestore");i&&qO(s,...i)}return s}function YO(t){if(t._terminated)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XO(t),t._firestoreClient}function XO(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,p){return new J2(l,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,QI(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BO(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Aa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Aa(An.fromBase64String(e))}catch(n){throw new re(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Aa(An.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class XI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lm{constructor(e){this._methodName=e}}/**
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
 */class JI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */class ZI{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const JO=/^__.*__$/;class ZO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new qa(e,this.data,n,this.fieldTransforms)}}function eT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class jm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ac(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(eT(this.Cu)&&JO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class eM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yc(e)}Qu(e,n,r,s=!1){return new jm({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tM(t){const e=t._freezeSettings(),n=Yc(t._databaseId);return new eM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nM(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);sT("Data must be an object, but it was:",o,r);const l=nT(r,o);let u,c;if(i.merge)u=new mn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=rM(e,m,n);if(!o.contains(g))throw new re(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);oM(p,g)||p.push(g)}u=new mn(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new ZO(new fn(l),u,c)}class Vm extends Lm{_toFieldTransform(e){return new CD(e.path,new Ca)}isEqual(e){return e instanceof Vm}}function tT(t,e){if(rT(t=Ye(t)))return sT("Unsupported field value:",e,t),nT(t,e);if(t instanceof Lm)return function(r,s){if(!eT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=tT(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ED(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Rf(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rf(s.serializer,i)}}if(r instanceof JI)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Aa)return{bytesValue:LD(s.serializer,r._byteString)};if(r instanceof Kn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:VI(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ZI)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return km(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Dm(r)}`)}(t,e)}function nT(t,e){const n={};return gI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ga(t,(r,s)=>{const i=tT(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof JI||t instanceof Aa||t instanceof Kn||t instanceof Lm||t instanceof ZI)}function sT(t,e,n){if(!rT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Dm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function rM(t,e,n){if((e=Ye(e))instanceof XI)return e._internalPath;if(typeof e=="string")return iM(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const sM=new RegExp("[~\\*/\\[\\]]");function iM(t,e,n){if(e.search(sM)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new XI(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new re(U.INVALID_ARGUMENT,l+t+u)}function oM(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function aM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function lM(t,e,n){t=Of(t,Kn);const r=Of(t.firestore,YI),s=aM(t.converter,e,n);return uM(r,[nM(tM(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qn.none())])}function uM(t,e){return function(r,s){const i=new fs;return r.asyncQueue.enqueueAndForget(async()=>LO(await WO(r),s,i)),i.promise}(YO(t),e)}function cM(){return new Vm("serverTimestamp")}(function(e,n=!0){(function(s){Hi=s})(Rs),ws(new Fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new YI(new L2(r.getProvider("auth-internal")),new U2(r.getProvider("app-check-internal")),function(c,p){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(c.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Sn(rv,"4.7.3",e),Sn(rv,"4.7.3","esm2017")})();const hM={apiKey:"AIzaSyAldb_sD5Vg1zDt3P2CnHE1_boY4RMf9m4",authDomain:"hometaste-d6834.firebaseapp.com",databaseURL:"https://hometaste-d6834-default-rtdb.firebaseio.com",projectId:"hometaste-d6834",storageBucket:"hometaste-d6834.firebasestorage.app",messagingSenderId:"132298816482",appId:"1:132298816482:web:2915b8e21fcb62e6c497bb"},Fm=nN().length?Ac():ax(hM),Av=P2(Fm),hr=Rb(Fm);let Mf=null;try{Mf=QO(Fm)}catch(t){console.warn("Firestore init skipped:",t)}let jl=null;async function dr(){return jl||new Promise((t,e)=>{const n=xP(Av,async r=>{try{if(r){jl=r,n(),t(r);return}const s=await mP(Av);jl=s.user,n(),t(s.user)}catch(s){n(),e(s)}})})}function ts(t){return t.trim().toUpperCase()}function dM(t=6){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let n="HT-";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}const $t={generatePairCode:()=>dM(6),joinFamily:async t=>{try{const n=(await dr()).uid,r=ts(t);return r?(await Jl(ur(hr,`families/${r}/members/${n}`),!0),Mf&&await lM(KO(Mf,`families/${r}/members/${n}`),{joinedAt:cM()},{merge:!0}),localStorage.setItem("familyCode",r),{success:!0,uid:n,familyCode:r}):{success:!1,error:"家庭 Code 不能为空"}}catch(e){console.error("Firebase Join Error:",e);const n=e==null?void 0:e.code;return n==="PERMISSION_DENIED"||n==="permission-denied"?{success:!1,error:"权限被拒绝：请检查 Realtime Database / Firestore Rules（需要允许写入 members 才能加入）。"}:{success:!1,error:(e==null?void 0:e.message)||"网络连接失败或数据库不可用"}}},subscribeToData:async(t,e,n)=>{await dr();const r=ts(t),s=ur(hr,`families/${r}/${e}`);return _b(s,i=>{n(i.val())})},logActivity:async(t,e)=>{const n=await dr(),r=ts(t);await pb(ur(hr,`families/${r}/activity`),{actorUid:e.actorUid||n.uid,actorName:e.actorName||"家人",action:e.action,targetType:e.targetType,targetName:e.targetName,ts:e.ts||Date.now()})},subscribeToActivity:async(t,e,n)=>{await dr();const r=ts(t),s=Eb(ur(hr,`families/${r}/activity`),xb((n==null?void 0:n.limit)??30));let i=!1;return setTimeout(()=>i=!0,300),yb(s,o=>{const l=o.val();l&&i&&e(l)})},pushData:async(t,e,n)=>{await dr();const r=ts(t);await Jl(ur(hr,`families/${r}/${e}`),n)},updateUserStatus:async(t,e,n)=>{await dr();const r=ts(t);await mb(ur(hr,`families/${r}/users/${e}`),{...n,lastActive:Date.now()}).catch(()=>{})},initializeCloudData:async(t,e)=>{await dr();const n=ts(t);return(await gb(ur(hr,`families/${n}`))).exists()?!1:(await Jl(ur(hr,`families/${n}`),{...e,meta:{createdAt:Ob()}}),!0)}};async function fM(){return(await dr()).uid}const pM=({list:t,onUpdate:e,plans:n,recipes:r,inventory:s,pairCode:i,uid:o,actorName:l})=>{const[u,c]=W.useState(""),p=async(A,L)=>{if(!(!i||!o))try{await $t.logActivity(i,{actorUid:o,actorName:l||"家人",action:A,targetType:"采购",targetName:L,ts:Date.now()})}catch(S){console.warn("logActivity failed:",S)}},m=A=>{const L=A.trim(),S=/^(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?\s*(.+)$/,E=L.match(S);if(E){const O=E[1],b=E[3]||"";return{name:E[4],amount:`${O}${b}`}}const N=/^(.+)\s+(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?$/,D=L.match(N);if(D){const O=D[1],b=D[2],w=D[4]||"";return{name:O,amount:`${b}${w}`}}return{name:L,amount:"适量"}},g=async A=>{if(!A.trim())return;const{name:L,amount:S}=m(A),E={id:Date.now().toString(),name:L,amount:S,checked:!1,addedAt:Date.now()},N=[E,...t];e(N),c(""),await p("新增",`${E.name}（${E.amount}）`)},T=async()=>{const A=t.filter(S=>S.checked),L=t.filter(S=>!S.checked);e(L),A.length>0&&await p("清除已买",`共 ${A.length} 项`)},C=async A=>{const L=t.find(D=>D.id===A),S=!(L!=null&&L.checked),E=t.map(D=>D.id===A?{...D,checked:S}:D);e(E);const N=(L==null?void 0:L.name)||"某项";await p(S?"完成":"取消完成",N)};return d.jsxs("div",{className:"p-5 lg:p-10 space-y-8 pb-32 max-w-4xl mx-auto animate-in fade-in duration-500",children:[d.jsxs("header",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 italic",children:"采购清单"}),d.jsx("button",{onClick:T,className:"px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-500 hover:text-white transition-colors",children:"清除已买"})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("input",{type:"text",placeholder:"例如: 2斤排骨 (自动识别数量)",className:"flex-1 bg-white border border-gray-100 p-4 rounded-xl font-bold text-base outline-none shadow-sm focus:border-amber-400 transition-all",value:u,onChange:A=>c(A.target.value),onKeyDown:A=>A.key==="Enter"&&g(u)}),d.jsx("button",{onClick:()=>g(u),className:"w-14 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl shadow-lg active:scale-90 transition-all",children:"＋"})]}),d.jsx("div",{className:"space-y-3",children:t.length===0?d.jsxs("div",{className:"py-20 text-center text-gray-300",children:[d.jsx("span",{className:"text-6xl block mb-4 grayscale opacity-20",children:"🛒"}),d.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",children:"清单空空如也"})]}):t.map(A=>d.jsxs("div",{onClick:()=>C(A.id),className:`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${A.checked?"bg-gray-50 border-transparent opacity-40":"bg-white border-gray-100 shadow-sm hover:border-amber-200"}`,children:[d.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${A.checked?"bg-amber-500 border-amber-500":"border-gray-200 bg-white"}`,children:A.checked&&d.jsx("span",{className:"text-white text-[10px] font-bold",children:"✓"})}),d.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[d.jsx("span",{className:`font-bold text-lg ${A.checked?"line-through text-gray-400":"text-gray-900"}`,children:A.name}),d.jsx("span",{className:"text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded",children:A.amount})]})]},A.id))})]})},mM=({currentView:t,onViewChange:e})=>{const n=[{id:"dashboard",label:"首页",icon:v1,color:"text-orange-500"},{id:"recipes",label:"食谱",icon:w1,color:"text-emerald-500"},{id:"plan",label:"计划",icon:Ww,color:"text-indigo-500"},{id:"shopping",label:"清单",icon:Hw,color:"text-rose-500"},{id:"inventory",label:"库存",icon:Gw,color:"text-cyan-500"}];return d.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 px-6 pb-safe z-[100] h-20 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]",children:d.jsx("div",{className:"flex justify-between items-center h-full max-w-lg mx-auto",children:n.map(r=>{const s=t===r.id,i=r.icon;return d.jsxs("button",{onClick:()=>e(r.id),className:"flex flex-col items-center justify-center w-12 h-full active:scale-95 transition-all",children:[d.jsx("div",{className:`transition-all duration-300 ${s?`${r.color} -translate-y-1`:"text-gray-300"}`,children:d.jsx(i,{className:"w-6 h-6"})}),d.jsx("span",{className:`text-[10px] font-bold mt-1 transition-colors ${s?"text-gray-900":"text-transparent"}`,children:r.label})]},r.id)})})})},iT=["素菜小炒","肉菜小炒","滋补炖菜","精美甜品","清爽饮品","暖心汤品","美味主食","新鲜水果","其他"],gM=[{id:"1",name:"鸡蛋",amount:12,unit:"个",category:"蛋奶",storageZone:"冷藏",updatedAt:Date.now()},{id:"2",name:"西红柿",amount:3,unit:"个",category:"蔬菜",storageZone:"常温",updatedAt:Date.now()},{id:"3",name:"红富士苹果",amount:5,unit:"个",category:"水果",storageZone:"常温",updatedAt:Date.now()},{id:"4",name:"老抽",amount:1,unit:"瓶",category:"调料",storageZone:"常温",updatedAt:Date.now()},{id:"5",name:"土豆",amount:4,unit:"个",category:"蔬菜",storageZone:"常温",updatedAt:Date.now()},{id:"6",name:"巨峰葡萄",amount:1,unit:"串",category:"水果",storageZone:"冷藏",updatedAt:Date.now()},{id:"7",name:"花生油",amount:5,unit:"升",category:"粮油",storageZone:"常温",updatedAt:Date.now()},{id:"8",name:"干香菇",amount:100,unit:"克",category:"干货",storageZone:"常温",updatedAt:Date.now()}],_M=[{id:"r1",title:"西红柿炒鸡蛋",category:"素菜小炒",description:"国民家常菜，酸甜适口，做法简单。",images:["https://picsum.photos/seed/tomato/800/600"],prepTime:10,cookTime:10,ingredients:[{name:"鸡蛋",amount:3,unit:"个"},{name:"西红柿",amount:2,unit:"个"}],steps:["西红柿切块，鸡蛋打散","热锅炒蛋盛出","炒西红柿出汁","合炒调味"],tags:["简单","经典"]},{id:"r2",title:"元气水果沙拉",category:"新鲜水果",description:"清爽解腻，维C满满。",images:["https://picsum.photos/seed/fruit/800/600"],prepTime:5,cookTime:0,ingredients:[{name:"苹果",amount:1,unit:"个"},{name:"葡萄",amount:10,unit:"颗"},{name:"酸奶",amount:1,unit:"盒"}],steps:["水果切块","倒入酸奶拌匀"],tags:["健康","无火"]}],yM=({onSave:t,onCancel:e,initialRecipe:n})=>{var Q;const[r,s]=W.useState(!1),[i,o]=W.useState((n==null?void 0:n.title)||""),[l,u]=W.useState((n==null?void 0:n.description)||""),[c,p]=W.useState((n==null?void 0:n.category)||"素菜小炒"),[m,g]=W.useState((n==null?void 0:n.images)||[]),[T,C]=W.useState(()=>n!=null&&n.ingredients&&n.ingredients.length>0?n.ingredients:[{name:"",amount:0,unit:"g"}]),[A,L]=W.useState(()=>n!=null&&n.steps&&n.steps.length>0?n.steps:[""]),[S,E]=W.useState(((Q=n==null?void 0:n.source)==null?void 0:Q.url)||""),[N,D]=W.useState(null),[O,b]=W.useState({scale:1,x:0,y:0}),w=W.useRef(!1),y=W.useRef({x:0,y:0}),x=W.useRef({x:0,y:0}),I=W.useRef(null),k=W.useRef(new Map),R=W.useRef(null),_=j=>{const G=j.target.files;G&&Array.from(G).forEach(J=>{const Z=new FileReader;Z.onloadend=()=>g(ze=>[...ze,Z.result]),Z.readAsDataURL(J)})},X=j=>{if(j.target.setPointerCapture(j.pointerId),k.current.set(j.pointerId,{x:j.clientX,y:j.clientY}),k.current.size===1)w.current=!0,y.current={x:j.clientX,y:j.clientY},x.current={x:O.x,y:O.y};else if(k.current.size===2){w.current=!1;const G=Array.from(k.current.values());R.current=Math.hypot(G[0].x-G[1].x,G[0].y-G[1].y)}},se=j=>{if(k.current.has(j.pointerId)){if(k.current.set(j.pointerId,{x:j.clientX,y:j.clientY}),k.current.size===2){const G=Array.from(k.current.values()),J=Math.hypot(G[0].x-G[1].x,G[0].y-G[1].y);if(R.current!==null&&R.current>0){const ze=(J-R.current)*.005;b(Pt=>({...Pt,scale:Math.min(3,Math.max(1,Pt.scale+ze))}))}R.current=J}else if(k.current.size===1&&w.current){const G=j.clientX-y.current.x,J=j.clientY-y.current.y;b(Z=>({...Z,x:x.current.x+G,y:x.current.y+J}))}}},_e=j=>{if(j.target.releasePointerCapture(j.pointerId),k.current.delete(j.pointerId),k.current.size<2&&(R.current=null),k.current.size===1){const G=k.current.values().next().value;y.current={x:G.x,y:G.y},x.current={x:O.x,y:O.y},w.current=!0}else k.current.size===0&&(w.current=!1)},we=async()=>{if(!(N===null||!I.current))try{const{default:j}=await qw(async()=>{const{default:Z}=await import("./html2canvas.esm-CBrSDip1.js");return{default:Z}},[],import.meta.url),J=(await j(I.current,{useCORS:!0,backgroundColor:"#111827",scale:2,logging:!1})).toDataURL("image/jpeg",.85);g(Z=>{const ze=[...Z];return ze[N]=J,ze}),D(null),b({scale:1,x:0,y:0})}catch(j){console.error("Crop failed:",j),alert("图片裁剪失败，请重试")}},z=async()=>{if(!i||m.length===0)return alert("请填写标题并上传图片");s(!0),await t({id:(n==null?void 0:n.id)||"",title:i,description:l,category:c,images:m,prepTime:15,cookTime:20,ingredients:T.filter(G=>G.name),steps:A.filter(G=>G),tags:["家常"],source:S?{type:"link",url:S}:void 0})||s(!1)};return d.jsxs("div",{className:"bg-[#fcfdfe] min-h-screen pb-32 pt-16 animate-in slide-in-from-bottom duration-300",children:[N!==null&&d.jsxs("div",{className:"fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 select-none touch-none",children:[d.jsxs("div",{className:"relative w-full max-w-sm aspect-square shadow-2xl rounded-2xl overflow-hidden border border-white/10",children:[d.jsx("div",{ref:I,className:"w-full h-full bg-gray-900 relative overflow-hidden",children:d.jsx("img",{src:m[N],className:"w-full h-full object-cover origin-center cursor-move",style:{transform:`scale(${O.scale}) translate(${O.x}px, ${O.y}px)`,touchAction:"none"},onPointerDown:X,onPointerMove:se,onPointerUp:_e,onPointerCancel:_e,draggable:!1,alt:"editing"})}),d.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10",children:[d.jsx("div",{className:"absolute top-1/3 left-0 right-0 h-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute top-2/3 left-0 right-0 h-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute left-1/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute left-2/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute inset-0 border border-white/20 rounded-2xl"})]})]}),d.jsxs("div",{className:"mt-8 w-full max-w-sm space-y-6",children:[d.jsxs("div",{className:"flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl",children:[d.jsx("span",{className:"text-white text-xs font-bold w-8",children:"缩放"}),d.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:O.scale,onChange:j=>b({...O,scale:parseFloat(j.target.value)}),className:"flex-1 accent-emerald-500 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"}),d.jsxs("span",{className:"text-white text-xs font-mono w-8 text-right",children:[O.scale.toFixed(1),"x"]})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx("button",{onClick:()=>b({scale:1,x:0,y:0}),className:"flex-1 py-3 bg-gray-800 text-white rounded-xl text-xs font-bold hover:bg-gray-700 transition-colors",children:"重置"}),d.jsx("button",{onClick:we,className:"flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors",children:"确认裁剪"})]}),d.jsx("p",{className:"text-center text-gray-400 text-[10px] font-bold tracking-widest uppercase",children:"单指拖拽 • 双指缩放"})]})]}),d.jsxs("header",{className:"fixed top-0 left-0 right-0 lg:left-64 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 px-6 h-16 flex justify-between items-center",children:[d.jsx("button",{onClick:e,className:"text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors",children:"取消"}),d.jsx("h2",{className:"text-sm font-black text-gray-900",children:"记录美味"}),d.jsx("button",{onClick:z,disabled:r,className:"px-5 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors",children:r?"...":"发布"})]}),d.jsxs("div",{className:"max-w-2xl mx-auto px-5 space-y-8 mt-4",children:[d.jsx("section",{children:d.jsxs("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2",children:[d.jsxs("label",{className:"shrink-0 w-24 h-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all hover:bg-gray-100 hover:border-emerald-200",children:[d.jsx("span",{className:"text-xl text-gray-400",children:"＋"}),d.jsx("span",{className:"text-[10px] font-bold text-gray-400 mt-1",children:"添加"}),d.jsx("input",{type:"file",className:"hidden",accept:"image/*",multiple:!0,onChange:_})]}),m.map((j,G)=>d.jsxs("div",{onClick:()=>{D(G),b({scale:1,x:0,y:0})},className:"shrink-0 w-24 h-24 bg-gray-100 rounded-xl relative overflow-hidden group border border-gray-100 cursor-pointer shadow-sm",children:[d.jsx("img",{src:j,className:"w-full h-full object-cover",alt:"recipe thumb"}),d.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition-opacity backdrop-blur-[2px]",children:"点击裁剪"}),G===0&&d.jsx("span",{className:"absolute bottom-1 left-1 px-1.5 py-0.5 bg-emerald-500 text-white text-[8px] font-bold rounded",children:"封面"}),d.jsx("button",{onClick:J=>{J.stopPropagation(),g(m.filter((Z,ze)=>ze!==G))},className:"absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-red-500 transition-colors",children:"✕"})]},G))]})}),d.jsxs("section",{className:"space-y-4",children:[d.jsx("input",{type:"text",placeholder:"给这道菜起个名字",className:"w-full text-2xl font-black outline-none placeholder:text-gray-300 bg-transparent border-b border-gray-100 pb-2 focus:border-emerald-500 transition-colors",value:i,onChange:j=>o(j.target.value)}),d.jsx("textarea",{placeholder:"写下你的烹饪心得...",className:"w-full bg-gray-50/50 p-4 rounded-xl h-24 outline-none resize-none text-sm font-medium leading-relaxed focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:l,onChange:j=>u(j.target.value)}),d.jsx("div",{className:"flex flex-wrap gap-2",children:iT.map(j=>d.jsx("button",{onClick:()=>p(j),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${c===j?"bg-emerald-600 text-white border-emerald-600 shadow-md":"bg-white text-gray-500 border-gray-100 hover:border-emerald-200"}`,children:j},j))})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"font-black text-sm text-gray-900",children:"食材清单"}),d.jsxs("span",{className:"text-[10px] font-bold text-gray-400",children:[T.length," 项"]})]}),d.jsxs("div",{className:"space-y-2",children:[T.map((j,G)=>d.jsxs("div",{className:"flex gap-2 items-center",children:[d.jsx("input",{type:"text",placeholder:"食材名 (如: 牛肉)",className:"flex-[3] bg-gray-50 px-3 py-3 rounded-xl text-sm font-bold outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.name,onChange:J=>{const Z=[...T];Z[G].name=J.target.value,C(Z)}}),d.jsx("input",{type:"number",placeholder:"数量",className:"flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.amount||"",onChange:J=>{const Z=[...T];Z[G].amount=Number(J.target.value),C(Z)}}),d.jsx("input",{type:"text",placeholder:"单位",className:"flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.unit,onChange:J=>{const Z=[...T];Z[G].unit=J.target.value,C(Z)}}),d.jsx("button",{onClick:()=>C(T.filter((J,Z)=>Z!==G)),className:"w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors",children:"✕"})]},G)),d.jsx("button",{onClick:()=>C([...T,{name:"",amount:0,unit:"g"}]),className:"w-full py-3 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black hover:bg-emerald-100 transition-colors",children:"+ 添加一行"})]})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"font-black text-sm text-gray-900",children:"制作步骤"}),d.jsxs("span",{className:"text-[10px] font-bold text-gray-400",children:[A.length," 步"]})]}),d.jsxs("div",{className:"space-y-3",children:[A.map((j,G)=>d.jsxs("div",{className:"flex gap-3 items-start group",children:[d.jsx("span",{className:"w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1 shadow-sm",children:G+1}),d.jsx("textarea",{placeholder:"描述步骤...",className:"flex-1 bg-gray-50 p-3 rounded-xl text-sm outline-none resize-none font-medium min-h-[80px] focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j,onChange:J=>{const Z=[...A];Z[G]=J.target.value,L(Z)}}),d.jsx("button",{onClick:()=>L(A.filter((J,Z)=>Z!==G)),className:"text-gray-300 hover:text-red-500 pt-2 opacity-50 group-hover:opacity-100 transition-opacity",children:"✕"})]},G)),d.jsx("button",{onClick:()=>L([...A,""]),className:"w-full py-3 bg-gray-50 text-gray-400 rounded-xl text-xs font-black hover:bg-gray-100 transition-colors",children:"+ 添加步骤"})]})]}),d.jsx("section",{className:"pb-8",children:d.jsx("input",{type:"text",placeholder:"粘贴灵感来源链接 (可选)...",className:"w-full bg-gray-50 px-4 py-3 rounded-xl text-xs outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all text-gray-600",value:S,onChange:j=>E(j.target.value)})})]})]})},vM=({userProfile:t,onUpdateProfile:e,recipes:n,inventory:r,onLogout:s})=>{const[i,o]=W.useState(!1),[l,u]=W.useState(t.name),[c,p]=W.useState(t.role),[m,g]=W.useState(""),[T,C]=W.useState(!1),A=W.useRef(null),L=W.useRef(null),S=()=>{e({name:l,role:c}),o(!1)},E=async()=>{if(t.pairCode){alert("您已经拥有家庭配对码。");return}C(!0);try{const w=$t.generatePairCode(),y=await $t.joinFamily(w);y.success?(e({pairCode:y.familyCode||w}),alert("🎉 家庭已创建并加入成功！把配对码发给家人即可同步。")):alert(`创建失败：${y.error||"未知错误"}`)}finally{C(!1)}},N=async()=>{if(m){C(!0);try{const w=await $t.joinFamily(m);if(w.success){const y=w.familyCode||m.trim().toUpperCase();e({pairCode:y}),alert("🎉 连接成功！在另一台设备/另一个浏览器输入同一个配对码，就会实时同步。")}else alert(`连接失败：${w.error||"请检查配对码是否正确"}`)}finally{C(!1)}}},D=()=>{const w={ht_inventory:localStorage.getItem("ht_inventory"),ht_recipes:localStorage.getItem("ht_recipes"),ht_plans:localStorage.getItem("ht_plans"),ht_shopping:localStorage.getItem("ht_shopping"),ht_history:localStorage.getItem("ht_history"),ht_profile:localStorage.getItem("ht_profile"),backup_date:new Date().toISOString(),version:"1.0"},y=new Blob([JSON.stringify(w,null,2)],{type:"application/json"}),x=URL.createObjectURL(y),I=document.createElement("a");I.href=x,I.download=`hometaste_backup_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL(x)},O=w=>{var I;const y=(I=w.target.files)==null?void 0:I[0];if(!y)return;const x=new FileReader;x.onload=k=>{var R;try{const _=JSON.parse((R=k.target)==null?void 0:R.result);_.version&&_.ht_recipes?confirm("导入备份将覆盖当前所有数据，确定要继续吗？")&&(_.ht_inventory&&localStorage.setItem("ht_inventory",_.ht_inventory),_.ht_recipes&&localStorage.setItem("ht_recipes",_.ht_recipes),_.ht_plans&&localStorage.setItem("ht_plans",_.ht_plans),_.ht_shopping&&localStorage.setItem("ht_shopping",_.ht_shopping),_.ht_history&&localStorage.setItem("ht_history",_.ht_history),_.ht_profile&&localStorage.setItem("ht_profile",_.ht_profile),alert("数据导入成功！即将刷新页面..."),window.location.reload()):alert("无效的备份文件格式")}catch(_){alert("解析备份文件失败"),console.error(_)}},x.readAsText(y)},b=async w=>{var x;const y=(x=w.target.files)==null?void 0:x[0];if(y)try{const I=await new Promise((k,R)=>{const _=new FileReader;_.readAsDataURL(y),_.onload=X=>{var _e;const se=new Image;se.src=(_e=X.target)==null?void 0:_e.result,se.onload=()=>{const we=document.createElement("canvas"),z=300;let Q=se.width,j=se.height;Q>z&&(j=Math.round(j*z/Q),Q=z),we.width=Q,we.height=j;const G=we.getContext("2d");if(!G){R(new Error("Canvas context not supported"));return}G.drawImage(se,0,0,Q,j),k(we.toDataURL("image/jpeg",.7))},se.onerror=we=>R(we)},_.onerror=X=>R(X)});e({avatar:I})}catch(I){console.error("Image processing failed:",I),alert("图片处理失败，请尝试换一张图片。")}};return d.jsxs("div",{className:"p-6 lg:p-10 space-y-8 max-w-4xl mx-auto pb-64 animate-in fade-in duration-500",children:[d.jsx("header",{children:d.jsx("h2",{className:"text-2xl font-black italic",children:"Settings"})}),d.jsx("section",{className:"bg-white p-6 rounded-3xl border border-gray-100 shadow-sm",children:d.jsxs("div",{className:"flex items-center gap-6",children:[d.jsxs("div",{className:"relative shrink-0",children:[d.jsxs("div",{className:"w-20 h-20 rounded-2xl border-2 border-gray-100 overflow-hidden relative group",children:[d.jsx("img",{src:t.avatar,className:"w-full h-full object-cover",alt:""}),d.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity",onClick:()=>{var w;return(w=A.current)==null?void 0:w.click()},children:d.jsx("span",{className:"text-white text-[9px] font-bold",children:"更换"})})]}),d.jsx("input",{type:"file",ref:A,className:"hidden",accept:"image/*",onChange:b})]}),d.jsx("div",{className:"flex-1 min-w-0",children:i?d.jsxs("div",{className:"flex gap-3",children:[d.jsxs("div",{className:"space-y-2 flex-1",children:[d.jsx("input",{className:"text-lg font-black text-gray-900 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none",value:l,onChange:w=>u(w.target.value),placeholder:"称呼"}),d.jsx("input",{className:"text-xs font-bold text-gray-500 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none",value:c,onChange:w=>p(w.target.value),placeholder:"身份"})]}),d.jsxs("div",{className:"flex flex-col gap-2 justify-center",children:[d.jsx("button",{onClick:S,className:"px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg",children:"保存"}),d.jsx("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded-lg",children:"取消"})]})]}):d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-xl font-black text-gray-900",children:t.name}),d.jsx("p",{className:"text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1",children:t.role})]}),d.jsx("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-gray-50 text-gray-400 text-xs font-bold rounded-xl border border-gray-100",children:"编辑"})]})})]})}),d.jsxs("section",{className:"bg-emerald-950 p-6 rounded-3xl text-white space-y-6 shadow-xl overflow-hidden relative",children:[d.jsxs("div",{className:"relative z-10",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[d.jsx("h3",{className:"text-lg font-black italic",children:"家庭同步"}),t.pairCode?d.jsxs("div",{className:"bg-white/10 px-4 py-2 rounded-lg border border-white/10",children:[d.jsx("p",{className:"text-[9px] font-bold uppercase opacity-50 mb-0.5",children:"我的配对码"}),d.jsx("p",{className:"text-lg font-mono font-bold tracking-widest",children:t.pairCode})]}):d.jsx("button",{onClick:E,className:"px-4 py-2 bg-emerald-600 rounded-lg text-xs font-bold shadow hover:bg-emerald-500",children:"创建新家庭"})]}),t.partner?d.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10",children:[d.jsx("img",{src:t.partner.avatar,className:"w-12 h-12 rounded-xl border border-white/20",alt:""}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white",children:t.partner.name}),d.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"}),d.jsx("p",{className:"text-[10px] uppercase tracking-wider opacity-60",children:"已实时同步"})]})]})]}):d.jsxs("div",{className:"space-y-3",children:[d.jsx("p",{className:"text-xs opacity-60",children:"输入伴侣的配对码以加入家庭："}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("input",{type:"text",placeholder:"例如: HT-ABC123",className:"bg-white/10 px-4 py-3 rounded-xl outline-none text-white font-mono font-bold flex-1 border border-white/10 text-sm placeholder:text-white/20",value:m,onChange:w=>g(w.target.value)}),d.jsx("button",{onClick:N,disabled:T,className:"bg-emerald-500 px-6 py-3 rounded-xl text-xs font-bold shadow-lg hover:bg-emerald-400 transition-colors disabled:opacity-50",children:T?"连接中...":"连接"})]}),t.pairCode&&d.jsx("p",{className:"text-[10px] opacity-40 italic",children:" * 云同步模式：在另一台设备输入相同配对码即可共享同一家庭数据。"})]})]}),d.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"})]}),d.jsxs("section",{className:"bg-gray-50 p-6 rounded-3xl border border-gray-100",children:[d.jsx("h3",{className:"text-sm font-black text-gray-900 mb-4 flex items-center gap-2",children:d.jsx("span",{children:"💾 数据备份"})}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsx("button",{onClick:D,className:"py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm",children:"📤 导出数据备份"}),d.jsx("button",{onClick:()=>{var w;return(w=L.current)==null?void 0:w.click()},className:"py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm",children:"📥 导入恢复数据"}),d.jsx("input",{type:"file",ref:L,className:"hidden",accept:".json",onChange:O})]})]}),d.jsx("button",{onClick:s,className:"w-full py-4 bg-red-50 text-red-500 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all",children:"退出登录"})]})},wM=async(t,e)=>(console.warn("未检测到 API_KEY，切换至随机推荐模式。"),await new Promise(r=>setTimeout(r,1e3)),e.length===0?[]:[...e].sort(()=>.5-Math.random()).slice(0,2).map(r=>r.id)),xM=async t=>{throw console.warn("No API Key, skipping image analysis"),new Error("API Key missing")};function Eo(t,e,n){const[r,s]=W.useState(()=>{try{const u=localStorage.getItem(t);return u?JSON.parse(u):e}catch{return e}}),i=W.useRef(!1),o=W.useRef(r),l=W.useRef(!1);return W.useEffect(()=>{o.current=r},[r]),W.useEffect(()=>{if(!n)return;l.current=!1;let u=null;return(async()=>{u=await $t.subscribeToData(n,t,c=>{l.current=!0,c!==null&&JSON.stringify(c)!==JSON.stringify(o.current)&&(i.current=!0,s(c))})})().catch(console.error),()=>{u&&u()}},[n,t]),W.useEffect(()=>{try{localStorage.setItem(t,JSON.stringify(r))}catch(u){console.warn("LocalStorage save failed (Quota Exceeded?):",u)}n&&l.current&&!i.current&&$t.pushData(n,t,r),i.current=!1},[t,r,n]),[r,s]}const EM=()=>{const[t,e]=W.useState("dashboard"),[n,r]=W.useState(null),[s,i]=W.useState(()=>{try{const K=localStorage.getItem("ht_profile");return K?JSON.parse(K):{name:"美食主理人",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",role:"高级厨师",pairCode:""}}catch{return{name:"美食主理人",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",role:"高级厨师",pairCode:""}}}),[o,l]=W.useState("");W.useEffect(()=>{fM().then(l).catch(console.error)},[]);const u=s.pairCode;W.useEffect(()=>{if(!u||!o)return;let K=null;return(async()=>{K=await $t.subscribeToActivity(u,H=>{if(H.actorUid===o)return;const te=`👤 ${H.actorName||"家人"} ${H.action}了${H.targetType}：${H.targetName}`;r(te),setTimeout(()=>r(oe=>oe===te?null:oe),2500)})})().catch(console.error),()=>{K&&K()}},[u,o]);const[c,p]=Eo("ht_inventory",gM,u),[m,g]=Eo("ht_recipes",_M,u),[T,C]=Eo("ht_plans",{},u),[A,L]=Eo("ht_shopping",[],u),[S,E]=Eo("ht_history",[],u),[N,D]=W.useState(void 0);W.useEffect(()=>{if(!u||!o)return;let K=null;return(async()=>{K=await $t.subscribeToData(u,"users",H=>{if(!H||typeof H!="object"){D(void 0);return}const oe=Object.entries(H).find(([Dn])=>Dn!==o);if(!oe){D(void 0);return}const[,Me]=oe;D({name:(Me==null?void 0:Me.name)||"伙伴",avatar:(Me==null?void 0:Me.avatar)||"",isOnline:!!(Me!=null&&Me.isOnline)})})})().catch(console.error),()=>{K&&K()}},[u,o]),W.useEffect(()=>{try{localStorage.setItem("ht_profile",JSON.stringify(s)),u&&o&&$t.updateUserStatus(u,o,{name:s.name,avatar:s.avatar,isOnline:!0})}catch(K){console.error("Profile Save Error:",K)}},[s,u,o]);const[O,b]=W.useState(null),[w,y]=W.useState([]),[x,I]=W.useState(!1),[k,R]=W.useState(!1),[_,X]=W.useState(""),[se,_e]=W.useState("全部"),we=["全部",...iT],z=async()=>{if(m.length===0){alert("请先添加一些食谱，AI 才能为您推荐哦！");return}I(!0);const K=Date.now();try{const H=await wM(c,m),te=Date.now()-K;te<800&&await new Promise(oe=>setTimeout(oe,800-te)),y(H),H.length===0&&alert("AI 暂时没有找到非常匹配的食谱，试试补充一下冰箱或者添加更多食谱？")}catch(H){console.error("AI 推荐失败",H),alert("获取灵感失败，可能是网络问题，请稍后再试。")}finally{I(!1)}},Q=W.useMemo(()=>m.filter(K=>w.includes(K.id)),[m,w]),j=W.useMemo(()=>m.filter(K=>{const H=K.title.toLowerCase().includes(_.toLowerCase())||K.ingredients.some(oe=>oe.name.toLowerCase().includes(_.toLowerCase())),te=se==="全部"||K.category===se;return H&&te}),[m,_,se]),G=async K=>{const H={...s,...K};i(H),K.pairCode&&K.pairCode!==s.pairCode&&(await $t.initializeCloudData(K.pairCode,{ht_inventory:c,ht_recipes:m,ht_plans:T,ht_shopping:A,ht_history:S}),alert("家庭连接成功！数据已开始同步。"))},J=K=>{const H={id:Date.now().toString()+Math.random(),name:K.name||"未知食材",amount:K.amount||0,unit:K.unit||"单位",category:K.category||"其他",storageZone:K.storageZone||"常温",updatedAt:Date.now()};p(te=>[H,...te]),u&&o&&$t.logActivity(u,{actorUid:o,actorName:s.name,action:"新增",targetType:"食材",targetName:H.name}).catch(console.error)},Z=(K,H)=>{p(te=>te.map(oe=>oe.id===K?{...oe,amount:H,updatedAt:Date.now()}:oe))},ze=K=>{const H=c.find(te=>te.id===K);p(te=>te.filter(oe=>oe.id!==K)),u&&o&&H&&$t.logActivity(u,{actorUid:o,actorName:s.name,action:"删除",targetType:"食材",targetName:H.name}).catch(console.error)},Pt=async K=>{R(!0);try{const H=await xM(K);H&&H.length>0?H.forEach(te=>J(te)):alert("AI 未能识别出食材，请确保图片清晰。")}catch{alert("AI 服务暂时不可用，请手动录入。")}finally{R(!1)}},rn=(K,H)=>{C(te=>({...te,[H]:[...te[H]||[],K]}))},sn=(K,H)=>{C(te=>({...te,[H]:(te[H]||[]).filter(oe=>oe!==K)}))},eh=K=>{p(H=>H.map(te=>{const oe=K.find(Me=>Me.name===te.name);return oe?{...te,amount:Math.max(0,te.amount-oe.amount),updatedAt:Date.now()}:te}))},th=K=>{const H=T[K]||[],te=m.filter(oe=>H.includes(oe.id)).map(oe=>oe.title);te.length>0&&E(oe=>[...oe,{date:K,recipeTitles:te}])},Os=(K,H,te)=>{g(oe=>oe.map(Me=>{if(Me.id===K){const Dn=(Me.reviewCount||0)+1,Ls=(Me.appetizingCount||0)+1;return{...Me,rating:((Me.rating||5)*(Dn-1)+H)/Dn,reviewCount:Dn,appetizingRating:((Me.appetizingRating||5)*(Ls-1)+te)/Ls,appetizingCount:Ls}}return Me}))},Ms=async K=>{const H=!!K.id;return K.id?g(te=>te.map(oe=>oe.id===K.id?K:oe)):g(te=>[...te,{...K,id:Date.now().toString()}]),u&&o&&$t.logActivity(u,{actorUid:o,actorName:s.name,action:H?"更新":"新增",targetType:"食谱",targetName:K.title||"未命名食谱"}).catch(console.error),e("recipes"),b(null),!0},Ft=K=>{b(null),e(K)},qi=()=>{if(O&&t!=="add-recipe")return d.jsx(R1,{recipe:O,inventory:c,plans:T,onBack:()=>b(null),onPlan:rn,onEdit:()=>e("add-recipe")});switch(t){case"dashboard":return d.jsxs("div",{className:"p-5 lg:p-10 space-y-6 max-w-5xl mx-auto pb-32",children:[d.jsxs("header",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 tracking-tight italic",children:"家庭概览"}),u&&d.jsxs("div",{className:"flex items-center gap-2 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100 animate-pulse",children:[d.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full"}),d.jsx("span",{className:"text-[10px] font-bold text-emerald-700",children:"实时同步中"})]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[d.jsxs("div",{onClick:()=>Ft("inventory"),className:"bg-emerald-800 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(Gw,{className:"w-8 h-8 text-emerald-200"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"食材储备"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:c.length})]}),d.jsxs("div",{onClick:()=>Ft("plan"),className:"bg-amber-600 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(Ww,{className:"w-8 h-8 text-amber-200"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"今日计划"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:(T[new Date().toISOString().split("T")[0]]||[]).length})]}),d.jsxs("div",{onClick:()=>Ft("shopping"),className:"bg-gray-900 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(Hw,{className:"w-8 h-8 text-gray-400"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"同步采购"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:A.filter(H=>!H.checked).length})]})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsx("h3",{className:"text-xs font-black text-gray-400 tracking-widest",children:"AI 灵感工坊"}),!x&&w.length>0&&d.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x animate-in fade-in slide-in-from-bottom-2",children:Q.map(H=>{var te;return d.jsxs("div",{onClick:()=>b(H),className:"shrink-0 w-48 h-28 rounded-2xl relative overflow-hidden group cursor-pointer snap-center shadow-sm border border-gray-100",children:[d.jsx("img",{src:H.images[0],className:"absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110",alt:""}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"}),d.jsx("div",{className:"absolute top-2 right-2 flex flex-col items-end gap-1",children:d.jsxs("div",{className:"bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-white/10",children:[d.jsx("span",{className:"text-[8px] text-amber-400",children:"★"}),d.jsx("span",{className:"text-[8px] font-bold text-white",children:((te=H.rating)==null?void 0:te.toFixed(1))||"5.0"})]})}),d.jsxs("div",{className:"absolute bottom-3 left-3 right-3",children:[d.jsx("span",{className:"text-[8px] font-bold text-emerald-300 uppercase tracking-wider mb-0.5 block",children:"今日推荐"}),d.jsx("h4",{className:"text-white font-bold text-sm truncate",children:H.title})]})]},H.id)})}),d.jsxs("button",{onClick:z,className:`w-full group relative overflow-hidden bg-emerald-950/90 py-4 rounded-2xl text-center transition-all ${x?"cursor-wait opacity-80":"hover:bg-black active:scale-[0.98]"}`,children:[d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx("span",{className:`${x?"animate-spin":""} text-2xl`,children:x?d.jsx(E1,{className:"w-6 h-6 text-emerald-400"}):d.jsx(x1,{className:"w-6 h-6 text-emerald-400"})}),d.jsx("span",{className:"text-white font-bold text-sm",children:x?"正在分析库存与口味...":"获取今日灵感"})]}),x&&d.jsx("div",{className:"absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-full animate-[loading_2s_infinite]"})]})]})]});case"inventory":return d.jsx(T1,{inventory:c,onAdd:J,onUpdate:Z,onDelete:ze,onAIScan:Pt,isScanning:k});case"recipes":return d.jsxs("div",{className:"p-5 lg:p-10 space-y-6 max-w-6xl mx-auto pb-32",children:[d.jsx("h2",{className:"text-2xl font-black text-center text-gray-900 italic",children:"私房食谱库"}),d.jsxs("div",{className:"flex flex-col gap-4",children:[d.jsxs("div",{className:"relative group w-full",children:[d.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm",children:"🔍"}),d.jsx("input",{type:"text",placeholder:"搜索...",className:"w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm focus:border-emerald-400 transition-all",value:_,onChange:H=>X(H.target.value)})]}),d.jsx("button",{onClick:()=>Ft("add-recipe"),className:"w-full py-3 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-md",children:"＋ 记录新菜谱"}),d.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar pb-1",children:we.map(H=>d.jsx("button",{onClick:()=>_e(H),className:`shrink-0 px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${se===H?"bg-emerald-600 text-white shadow-sm":"bg-white border border-gray-100 text-gray-500"}`,children:H},H))})]}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-4",children:j.map(H=>{var te,oe;return d.jsxs("div",{onClick:()=>b(H),className:"bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm transition-all cursor-pointer group",children:[d.jsxs("div",{className:"aspect-[4/3] overflow-hidden relative",children:[d.jsx("img",{src:(te=H.images)==null?void 0:te[0],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",alt:H.title}),d.jsxs("div",{className:"absolute top-2 right-2 flex flex-col items-end gap-1.5",children:[d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm",children:[d.jsx("span",{className:"text-[10px] text-amber-400",children:"★"}),d.jsx("span",{className:"text-[10px] font-bold text-white leading-none",children:((oe=H.rating)==null?void 0:oe.toFixed(1))||"5.0"})]}),d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm",children:[d.jsx("span",{className:"text-[10px] text-orange-200",children:"🍚"}),d.jsx("span",{className:"text-[10px] font-bold text-white leading-none",children:H.appetizingRating?H.appetizingRating.toFixed(1):"5.0"})]})]})]}),d.jsxs("div",{className:"p-4",children:[d.jsx("span",{className:"text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-1.5 inline-block",children:H.category}),d.jsx("h3",{className:"font-bold text-gray-800 text-sm leading-tight line-clamp-1",children:H.title})]})]},H.id)})})]});case"plan":return d.jsx(b1,{plans:T,recipes:m,inventory:c,onRemoveFromPlan:sn,onArchive:th,onAddItemsToShopping:H=>L(te=>[...H.map(oe=>({...oe,id:Date.now().toString()+Math.random(),checked:!1,addedAt:Date.now()})),...te]),onDeductInventory:eh,onRecipeFeedback:Os,history:S});case"shopping":return d.jsx(pM,{list:A,onUpdate:L,plans:T,recipes:m,inventory:c,pairCode:u,uid:o,actorName:s.name});case"settings":const K={...s,partner:N};return d.jsx(vM,{userProfile:K,onUpdateProfile:G,recipes:m,inventory:c,onLogout:()=>{}});case"add-recipe":return d.jsx(yM,{onSave:Ms,onCancel:()=>Ft("recipes"),initialRecipe:O||void 0});default:return null}},Yr=O||t==="add-recipe";return d.jsxs("div",{className:"min-h-screen bg-[#fcfdfe] lg:pl-64",children:[n&&d.jsx("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-[200] bg-black/80 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg",children:n.text}),!Yr&&d.jsxs("header",{className:"fixed top-0 left-0 right-0 lg:left-64 z-[80] h-14 px-5 lg:px-10 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-gray-100/50",children:[d.jsx("div",{className:"flex items-center",children:d.jsxs("h1",{onClick:()=>Ft("dashboard"),className:"text-lg font-black text-gray-900 tracking-tighter italic cursor-pointer select-none",children:["HOMETASTE",d.jsx("span",{className:"text-emerald-500",children:"."})]})}),d.jsxs("button",{onClick:()=>Ft("settings"),className:"w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-gray-50 relative",children:[d.jsx("img",{src:s.avatar,className:"w-full h-full object-cover",alt:"Profile"}),u&&d.jsx("div",{className:"absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"})]})]}),d.jsx(o1,{currentView:t,onViewChange:Ft,userProfile:s}),d.jsx("main",{className:`relative transition-all duration-300 ${Yr?"":"pt-16"}`,children:qi()}),!Yr&&d.jsx("div",{className:"lg:hidden",children:d.jsx(mM,{currentView:t,onViewChange:Ft})}),d.jsx("style",{children:`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `})]})},Um=document.getElementById("root");if(!Um)throw new Error("Could not find root element to mount to");Um.innerHTML="";const IM=ud.createRoot(Um);IM.render(d.jsx(QT.StrictMode,{children:d.jsx(EM,{})}));const Rv=document.getElementById("loading-screen");Rv&&Rv.remove();
