(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function OT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dv={exports:{}},lc={},Ov={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),MT=Symbol.for("react.portal"),LT=Symbol.for("react.fragment"),jT=Symbol.for("react.strict_mode"),VT=Symbol.for("react.profiler"),FT=Symbol.for("react.provider"),UT=Symbol.for("react.context"),BT=Symbol.for("react.forward_ref"),zT=Symbol.for("react.suspense"),$T=Symbol.for("react.memo"),HT=Symbol.for("react.lazy"),Vg=Symbol.iterator;function WT(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lv=Object.assign,jv={};function Mi(t,e,n){this.props=t,this.context=e,this.refs=jv,this.updater=n||Mv}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vv(){}Vv.prototype=Mi.prototype;function jf(t,e,n){this.props=t,this.context=e,this.refs=jv,this.updater=n||Mv}var Vf=jf.prototype=new Vv;Vf.constructor=jf;Lv(Vf,Mi.prototype);Vf.isPureReactComponent=!0;var Fg=Array.isArray,Fv=Object.prototype.hasOwnProperty,Ff={current:null},Uv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Fv.call(e,r)&&!Uv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ra,type:t,key:i,ref:o,props:s,_owner:Ff.current}}function GT(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function qT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ug=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qT(""+t.key):e.toString(36)}function Fl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case MT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+wh(o,0):r,Fg(s)?(n="",t!=null&&(n=t.replace(Ug,"$&/")+"/"),Fl(s,e,n,"",function(c){return c})):s!=null&&(Uf(s)&&(s=GT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ug,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Fg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+wh(i,l);o+=Fl(i,e,n,u,s)}else if(u=WT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+wh(i,l++),o+=Fl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],s=0;return Fl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function KT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Ul={transition:null},QT={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:Ff};he.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!Uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Mi;he.Fragment=LT;he.Profiler=VT;he.PureComponent=jf;he.StrictMode=jT;he.Suspense=zT;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Ff.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fv.call(e,u)&&!Uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ra,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:UT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FT,_context:t},t.Consumer=t};he.createElement=Bv;he.createFactory=function(t){var e=Bv.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:BT,render:t}};he.isValidElement=Uf;he.lazy=function(t){return{$$typeof:HT,_payload:{_status:-1,_result:t},_init:KT}};he.memo=function(t,e){return{$$typeof:$T,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(t,e){return bt.current.useCallback(t,e)};he.useContext=function(t){return bt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};he.useEffect=function(t,e){return bt.current.useEffect(t,e)};he.useId=function(){return bt.current.useId()};he.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return bt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};he.useRef=function(t){return bt.current.useRef(t)};he.useState=function(t){return bt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return bt.current.useTransition()};he.version="18.2.0";Ov.exports=he;var H=Ov.exports;const YT=OT(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=H,JT=Symbol.for("react.element"),ZT=Symbol.for("react.fragment"),eC=Object.prototype.hasOwnProperty,tC=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nC={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eC.call(e,r)&&!nC.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:JT,type:t,key:i,ref:o,props:s,_owner:tC.current}}lc.Fragment=ZT;lc.jsx=zv;lc.jsxs=zv;Dv.exports=lc;var d=Dv.exports,ud={},$v={exports:{}},qt={},Hv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var j=z.length;z.push(Y);e:for(;0<j;){var G=j-1>>>1,Z=z[G];if(0<s(Z,Y))z[G]=Y,z[j]=Z,j=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],j=z.pop();if(j!==Y){z[0]=j;e:for(var G=0,Z=z.length,J=Z>>>1;G<J;){var ze=2*(G+1)-1,Pt=z[ze],rn=ze+1,sn=z[rn];if(0>s(Pt,j))rn<Z&&0>s(sn,Pt)?(z[G]=sn,z[rn]=j,G=rn):(z[G]=Pt,z[ze]=j,G=ze);else if(rn<Z&&0>s(sn,j))z[G]=sn,z[rn]=j,G=rn;else break e}}return Y}function s(z,Y){var j=z.sortIndex-Y.sortIndex;return j!==0?j:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,T=!1,S=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(z){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=z)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function D(z){if(A=!1,N(z),!S)if(n(u)!==null)S=!0,_e(L);else{var Y=n(c);Y!==null&&we(D,Y.startTime-z)}}function L(z,Y){S=!1,A&&(A=!1,C(_),_=-1),T=!0;var j=g;try{for(N(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||z&&!k());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var Z=G(m.expirationTime<=Y);Y=t.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(u)&&r(u),N(Y)}else r(u);m=n(u)}if(m!==null)var J=!0;else{var ze=n(c);ze!==null&&we(D,ze.startTime-Y),J=!1}return J}finally{m=null,g=j,T=!1}}var P=!1,v=null,_=-1,x=5,I=-1;function k(){return!(t.unstable_now()-I<x)}function b(){if(v!==null){var z=t.unstable_now();I=z;var Y=!0;try{Y=v(!0,z)}finally{Y?y():(P=!1,v=null)}}else P=!1}var y;if(typeof E=="function")y=function(){E(b)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ne=Q.port2;Q.port1.onmessage=b,y=function(){ne.postMessage(null)}}else y=function(){M(b,0)};function _e(z){v=z,P||(P=!0,y())}function we(z,Y){_=M(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||T||(S=!0,_e(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var j=g;g=Y;try{return z()}finally{g=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=g;g=z;try{return Y()}finally{g=j}},t.unstable_scheduleCallback=function(z,Y,j){var G=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?G+j:G):j=G,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=j+Z,z={id:p++,callback:Y,priorityLevel:z,startTime:j,expirationTime:Z,sortIndex:-1},j>G?(z.sortIndex=j,e(c,z),n(u)===null&&z===n(c)&&(A?(C(_),_=-1):A=!0,we(D,j-G))):(z.sortIndex=Z,e(u,z),S||T||(S=!0,_e(L))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Y=g;return function(){var j=g;g=Y;try{return z.apply(this,arguments)}finally{g=j}}}})(Wv);Hv.exports=Wv;var rC=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=H,Gt=rC;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qv=new Set,Qo={};function Ns(t,e){mi(t,e),mi(t+"Capture",e)}function mi(t,e){for(Qo[t]=e,t=0;t<e.length;t++)qv.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,sC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bg={},zg={};function iC(t){return cd.call(zg,t)?!0:cd.call(Bg,t)?!1:sC.test(t)?zg[t]=!0:(Bg[t]=!0,!1)}function oC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aC(t,e,n,r){if(e===null||typeof e>"u"||oC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bf=/[\-:]([a-z])/g;function zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bf,zf);ct[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bf,zf);ct[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bf,zf);ct[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $f(t,e,n,r){var s=ct.hasOwnProperty(e)?ct[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aC(e,n,s,r)&&(n=null),r||s===null?iC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),$s=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Yv=Symbol.for("react.offscreen"),$g=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,xh;function To(t){if(xh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xh=e&&e[1]||""}return`
`+xh+t}var Eh=!1;function Ih(t,e){if(!t||Eh)return"";Eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Eh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function lC(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=Ih(t.type,!1),t;case 11:return t=Ih(t.type.render,!1),t;case 1:return t=Ih(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case $s:return"Portal";case hd:return"Profiler";case Hf:return"StrictMode";case dd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Kv:return(t._context.displayName||"Context")+".Provider";case Wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gf:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function uC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===Hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cC(t){var e=Xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=cC(t))}function Jv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&$f(t,"checked",e,!1)}function gd(t,e){Zv(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function ri(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Co(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function e0(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hC=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(t){hC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bo[e]=bo[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bo.hasOwnProperty(t)&&bo[t]?(""+e).trim():e+"px"}function s0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=r0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var dC=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wd(t,e){if(e){if(dC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Id=null,si=null,ii=null;function Kg(t){if(t=Oa(t)){if(typeof Id!="function")throw Error(F(280));var e=t.stateNode;e&&(e=fc(e),Id(t.stateNode,t.type,e))}}function i0(t){si?ii?ii.push(t):ii=[t]:si=t}function o0(){if(si){var t=si,e=ii;if(ii=si=null,Kg(t),e)for(t=0;t<e.length;t++)Kg(e[t])}}function a0(t,e){return t(e)}function l0(){}var Th=!1;function u0(t,e,n){if(Th)return t(e,n);Th=!0;try{return a0(t,e,n)}finally{Th=!1,(si!==null||ii!==null)&&(l0(),o0())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=fc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Td=!1;if(Kn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Td=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Td=!1}function fC(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Ro=!1,au=null,lu=!1,Cd=null,pC={onError:function(t){Ro=!0,au=t}};function mC(t,e,n,r,s,i,o,l,u){Ro=!1,au=null,fC.apply(pC,arguments)}function gC(t,e,n,r,s,i,o,l,u){if(mC.apply(this,arguments),Ro){if(Ro){var c=au;Ro=!1,au=null}else throw Error(F(198));lu||(lu=!0,Cd=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qg(t){if(As(t)!==t)throw Error(F(188))}function _C(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Qg(s),t;if(i===r)return Qg(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function h0(t){return t=_C(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var f0=Gt.unstable_scheduleCallback,Yg=Gt.unstable_cancelCallback,yC=Gt.unstable_shouldYield,vC=Gt.unstable_requestPaint,Ue=Gt.unstable_now,wC=Gt.unstable_getCurrentPriorityLevel,Kf=Gt.unstable_ImmediatePriority,p0=Gt.unstable_UserBlockingPriority,uu=Gt.unstable_NormalPriority,xC=Gt.unstable_LowPriority,m0=Gt.unstable_IdlePriority,uc=null,Tn=null;function EC(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:CC,IC=Math.log,TC=Math.LN2;function CC(t){return t>>>=0,t===0?32:31-(IC(t)/TC|0)|0}var _l=64,yl=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=So(l):(i&=o,i!==0&&(r=So(i)))}else o=n&~s,o!==0?r=So(o):i!==0&&(r=So(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),s=1<<n,r|=t[n],e&=~s;return r}function SC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-gn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=SC(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=_l;return _l<<=1,!(_l&4194240)&&(_l=64),t}function Ch(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function NC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-gn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Qf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ye=0;function _0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y0,Yf,v0,w0,x0,kd=!1,vl=[],Tr=null,Cr=null,Sr=null,Jo=new Map,Zo=new Map,mr=[],AC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function co(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Oa(e),e!==null&&Yf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function bC(t,e,n,r,s){switch(e){case"focusin":return Tr=co(Tr,t,e,n,r,s),!0;case"dragenter":return Cr=co(Cr,t,e,n,r,s),!0;case"mouseover":return Sr=co(Sr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Jo.set(i,co(Jo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Zo.set(i,co(Zo.get(i)||null,t,e,n,r,s)),!0}return!1}function E0(t){var e=os(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,x0(t.priority,function(){v0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ed=r,n.target.dispatchEvent(r),Ed=null}else return e=Oa(n),e!==null&&Yf(e),t.blockedOn=n,!1;e.shift()}return!0}function Jg(t,e,n){Bl(t)&&n.delete(e)}function RC(){kd=!1,Tr!==null&&Bl(Tr)&&(Tr=null),Cr!==null&&Bl(Cr)&&(Cr=null),Sr!==null&&Bl(Sr)&&(Sr=null),Jo.forEach(Jg),Zo.forEach(Jg)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,RC)))}function ea(t){function e(s){return ho(s,t)}if(0<vl.length){ho(vl[0],t);for(var n=1;n<vl.length;n++){var r=vl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&ho(Tr,t),Cr!==null&&ho(Cr,t),Sr!==null&&ho(Sr,t),Jo.forEach(e),Zo.forEach(e),n=0;n<mr.length;n++)r=mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)E0(n),n.blockedOn===null&&mr.shift()}var oi=nr.ReactCurrentBatchConfig,hu=!0;function PC(t,e,n,r){var s=ye,i=oi.transition;oi.transition=null;try{ye=1,Xf(t,e,n,r)}finally{ye=s,oi.transition=i}}function DC(t,e,n,r){var s=ye,i=oi.transition;oi.transition=null;try{ye=4,Xf(t,e,n,r)}finally{ye=s,oi.transition=i}}function Xf(t,e,n,r){if(hu){var s=Nd(t,e,n,r);if(s===null)Mh(t,e,r,du,n),Xg(t,r);else if(bC(s,t,e,n,r))r.stopPropagation();else if(Xg(t,r),e&4&&-1<AC.indexOf(t)){for(;s!==null;){var i=Oa(s);if(i!==null&&y0(i),i=Nd(t,e,n,r),i===null&&Mh(t,e,r,du,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Mh(t,e,r,null,n)}}var du=null;function Nd(t,e,n,r){if(du=null,t=qf(r),t=os(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return du=t,null}function I0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wC()){case Kf:return 1;case p0:return 4;case uu:case xC:return 16;case m0:return 536870912;default:return 16}default:return 16}}var xr=null,Jf=null,zl=null;function T0(){if(zl)return zl;var t,e=Jf,n=e.length,r,s="value"in xr?xr.value:xr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return zl=s.slice(t,1<r?1-r:void 0)}function $l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Zg(){return!1}function Kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wl:Zg,this.isPropagationStopped=Zg,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),e}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zf=Kt(Li),Da=Me({},Li,{view:0,detail:0}),OC=Kt(Da),Sh,kh,fo,cc=Me({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Sh=t.screenX-fo.screenX,kh=t.screenY-fo.screenY):kh=Sh=0,fo=t),Sh)},movementY:function(t){return"movementY"in t?t.movementY:kh}}),e_=Kt(cc),MC=Me({},cc,{dataTransfer:0}),LC=Kt(MC),jC=Me({},Da,{relatedTarget:0}),Nh=Kt(jC),VC=Me({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),FC=Kt(VC),UC=Me({},Li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BC=Kt(UC),zC=Me({},Li,{data:0}),t_=Kt(zC),$C={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WC[t])?!!e[t]:!1}function ep(){return GC}var qC=Me({},Da,{key:function(t){if(t.key){var e=$C[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KC=Kt(qC),QC=Me({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n_=Kt(QC),YC=Me({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),XC=Kt(YC),JC=Me({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZC=Kt(JC),eS=Me({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=Kt(eS),nS=[9,13,27,32],tp=Kn&&"CompositionEvent"in window,Po=null;Kn&&"documentMode"in document&&(Po=document.documentMode);var rS=Kn&&"TextEvent"in window&&!Po,C0=Kn&&(!tp||Po&&8<Po&&11>=Po),r_=" ",s_=!1;function S0(t,e){switch(t){case"keyup":return nS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function sS(t,e){switch(t){case"compositionend":return k0(e);case"keypress":return e.which!==32?null:(s_=!0,r_);case"textInput":return t=e.data,t===r_&&s_?null:t;default:return null}}function iS(t,e){if(Ws)return t==="compositionend"||!tp&&S0(t,e)?(t=T0(),zl=Jf=xr=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C0&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function N0(t,e,n,r){i0(r),e=fu(e,"onChange"),0<e.length&&(n=new Zf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Do=null,ta=null;function aS(t){F0(t,0)}function hc(t){var e=Ks(t);if(Jv(e))return t}function lS(t,e){if(t==="change")return e}var A0=!1;if(Kn){var Ah;if(Kn){var bh="oninput"in document;if(!bh){var o_=document.createElement("div");o_.setAttribute("oninput","return;"),bh=typeof o_.oninput=="function"}Ah=bh}else Ah=!1;A0=Ah&&(!document.documentMode||9<document.documentMode)}function a_(){Do&&(Do.detachEvent("onpropertychange",b0),ta=Do=null)}function b0(t){if(t.propertyName==="value"&&hc(ta)){var e=[];N0(e,ta,t,qf(t)),u0(aS,e)}}function uS(t,e,n){t==="focusin"?(a_(),Do=e,ta=n,Do.attachEvent("onpropertychange",b0)):t==="focusout"&&a_()}function cS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(ta)}function hS(t,e){if(t==="click")return hc(e)}function dS(t,e){if(t==="input"||t==="change")return hc(e)}function fS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:fS;function na(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!cd.call(e,s)||!vn(t[s],e[s]))return!1}return!0}function l_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function u_(t,e){var n=l_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=l_(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P0(){for(var t=window,e=ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ou(t.document)}return e}function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pS(t){var e=P0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(r!==null&&np(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=u_(n,i);var o=u_(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mS=Kn&&"documentMode"in document&&11>=document.documentMode,Gs=null,Ad=null,Oo=null,bd=!1;function c_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||Gs==null||Gs!==ou(r)||(r=Gs,"selectionStart"in r&&np(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&na(Oo,r)||(Oo=r,r=fu(Ad,"onSelect"),0<r.length&&(e=new Zf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gs)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Rh={},D0={};Kn&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function dc(t){if(Rh[t])return Rh[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return Rh[t]=e[n];return t}var O0=dc("animationend"),M0=dc("animationiteration"),L0=dc("animationstart"),j0=dc("transitionend"),V0=new Map,h_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){V0.set(t,e),Ns(e,[t])}for(var Ph=0;Ph<h_.length;Ph++){var Dh=h_[Ph],gS=Dh.toLowerCase(),_S=Dh[0].toUpperCase()+Dh.slice(1);qr(gS,"on"+_S)}qr(O0,"onAnimationEnd");qr(M0,"onAnimationIteration");qr(L0,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(j0,"onTransitionEnd");mi("onMouseEnter",["mouseout","mouseover"]);mi("onMouseLeave",["mouseout","mouseover"]);mi("onPointerEnter",["pointerout","pointerover"]);mi("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function d_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gC(r,e,void 0,t),t.currentTarget=null}function F0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;d_(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;d_(s,l,c),i=u}}}if(lu)throw t=Cd,lu=!1,Cd=null,t}function Ne(t,e){var n=e[Md];n===void 0&&(n=e[Md]=new Set);var r=t+"__bubble";n.has(r)||(U0(e,t,2,!1),n.add(r))}function Oh(t,e,n){var r=0;e&&(r|=4),U0(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[El]){t[El]=!0,qv.forEach(function(n){n!=="selectionchange"&&(yS.has(n)||Oh(n,!1,t),Oh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,Oh("selectionchange",!1,e))}}function U0(t,e,n,r){switch(I0(e)){case 1:var s=PC;break;case 4:s=DC;break;default:s=Xf}n=s.bind(null,e,n,t),s=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Mh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=os(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}u0(function(){var c=i,p=qf(n),m=[];e:{var g=V0.get(t);if(g!==void 0){var T=Zf,S=t;switch(t){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":T=KC;break;case"focusin":S="focus",T=Nh;break;case"focusout":S="blur",T=Nh;break;case"beforeblur":case"afterblur":T=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=e_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=LC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=XC;break;case O0:case M0:case L0:T=FC;break;case j0:T=ZC;break;case"scroll":T=OC;break;case"wheel":T=tS;break;case"copy":case"cut":case"paste":T=BC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=n_}var A=(e&4)!==0,M=!A&&t==="scroll",C=A?g!==null?g+"Capture":null:g;A=[];for(var E=c,N;E!==null;){N=E;var D=N.stateNode;if(N.tag===5&&D!==null&&(N=D,C!==null&&(D=Xo(E,C),D!=null&&A.push(sa(E,D,N)))),M)break;E=E.return}0<A.length&&(g=new T(g,S,null,n,p),m.push({event:g,listeners:A}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==Ed&&(S=n.relatedTarget||n.fromElement)&&(os(S)||S[Qn]))break e;if((T||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,T?(S=n.relatedTarget||n.toElement,T=c,S=S?os(S):null,S!==null&&(M=As(S),S!==M||S.tag!==5&&S.tag!==6)&&(S=null)):(T=null,S=c),T!==S)){if(A=e_,D="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(A=n_,D="onPointerLeave",C="onPointerEnter",E="pointer"),M=T==null?g:Ks(T),N=S==null?g:Ks(S),g=new A(D,E+"leave",T,n,p),g.target=M,g.relatedTarget=N,D=null,os(p)===c&&(A=new A(C,E+"enter",S,n,p),A.target=N,A.relatedTarget=M,D=A),M=D,T&&S)t:{for(A=T,C=S,E=0,N=A;N;N=Us(N))E++;for(N=0,D=C;D;D=Us(D))N++;for(;0<E-N;)A=Us(A),E--;for(;0<N-E;)C=Us(C),N--;for(;E--;){if(A===C||C!==null&&A===C.alternate)break t;A=Us(A),C=Us(C)}A=null}else A=null;T!==null&&f_(m,g,T,A,!1),S!==null&&M!==null&&f_(m,M,S,A,!0)}}e:{if(g=c?Ks(c):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var L=lS;else if(i_(g))if(A0)L=dS;else{L=cS;var P=uS}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=hS);if(L&&(L=L(t,c))){N0(m,L,n,p);break e}P&&P(t,g,c),t==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&_d(g,"number",g.value)}switch(P=c?Ks(c):window,t){case"focusin":(i_(P)||P.contentEditable==="true")&&(Gs=P,Ad=c,Oo=null);break;case"focusout":Oo=Ad=Gs=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,c_(m,n,p);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":c_(m,n,p)}var v;if(tp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ws?S0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(C0&&n.locale!=="ko"&&(Ws||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ws&&(v=T0()):(xr=p,Jf="value"in xr?xr.value:xr.textContent,Ws=!0)),P=fu(c,_),0<P.length&&(_=new t_(_,t,null,n,p),m.push({event:_,listeners:P}),v?_.data=v:(v=k0(n),v!==null&&(_.data=v)))),(v=rS?sS(t,n):iS(t,n))&&(c=fu(c,"onBeforeInput"),0<c.length&&(p=new t_("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=v))}F0(m,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Xo(t,n),i!=null&&r.unshift(sa(t,i,s)),i=Xo(t,e),i!=null&&r.push(sa(t,i,s))),t=t.return}return r}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f_(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Xo(n,i),u!=null&&o.unshift(sa(n,u,l))):s||(u=Xo(n,i),u!=null&&o.push(sa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function p_(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(wS,"")}function Il(t,e,n){if(e=p_(e),p_(t)!==e&&n)throw Error(F(425))}function pu(){}var Rd=null,Pd=null;function Dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(t){return m_.resolve(null).then(t).catch(IS)}:Od;function IS(t){setTimeout(function(){throw t})}function Lh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ea(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ea(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function g_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ji=Math.random().toString(36).slice(2),En="__reactFiber$"+ji,ia="__reactProps$"+ji,Qn="__reactContainer$"+ji,Md="__reactEvents$"+ji,TS="__reactListeners$"+ji,CS="__reactHandles$"+ji;function os(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=g_(t);t!==null;){if(n=t[En])return n;t=g_(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[En]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function fc(t){return t[ia]||null}var Ld=[],Qs=-1;function Kr(t){return{current:t}}function Ae(t){0>Qs||(t.current=Ld[Qs],Ld[Qs]=null,Qs--)}function Ce(t,e){Qs++,Ld[Qs]=t.current,t.current=e}var Vr={},Et=Kr(Vr),Lt=Kr(!1),ms=Vr;function gi(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function jt(t){return t=t.childContextTypes,t!=null}function mu(){Ae(Lt),Ae(Et)}function __(t,e,n){if(Et.current!==Vr)throw Error(F(168));Ce(Et,e),Ce(Lt,n)}function B0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,uC(t)||"Unknown",s));return Me({},n,r)}function gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,ms=Et.current,Ce(Et,t),Ce(Lt,Lt.current),!0}function y_(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=B0(t,e,ms),r.__reactInternalMemoizedMergedChildContext=t,Ae(Lt),Ae(Et),Ce(Et,t)):Ae(Lt),Ce(Lt,n)}var Ln=null,pc=!1,jh=!1;function z0(t){Ln===null?Ln=[t]:Ln.push(t)}function SS(t){pc=!0,z0(t)}function Qr(){if(!jh&&Ln!==null){jh=!0;var t=0,e=ye;try{var n=Ln;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,pc=!1}catch(s){throw Ln!==null&&(Ln=Ln.slice(t+1)),f0(Kf,Qr),s}finally{ye=e,jh=!1}}return null}var Ys=[],Xs=0,_u=null,yu=0,Qt=[],Yt=0,gs=null,jn=1,Vn="";function ns(t,e){Ys[Xs++]=yu,Ys[Xs++]=_u,_u=t,yu=e}function $0(t,e,n){Qt[Yt++]=jn,Qt[Yt++]=Vn,Qt[Yt++]=gs,gs=t;var r=jn;t=Vn;var s=32-gn(r)-1;r&=~(1<<s),n+=1;var i=32-gn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,jn=1<<32-gn(e)+s|n<<s|r,Vn=i+t}else jn=1<<i|n<<s|r,Vn=t}function rp(t){t.return!==null&&(ns(t,1),$0(t,1,0))}function sp(t){for(;t===_u;)_u=Ys[--Xs],Ys[Xs]=null,yu=Ys[--Xs],Ys[Xs]=null;for(;t===gs;)gs=Qt[--Yt],Qt[Yt]=null,Vn=Qt[--Yt],Qt[Yt]=null,jn=Qt[--Yt],Qt[Yt]=null}var Wt=null,Ht=null,be=!1,cn=null;function H0(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function v_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:jn,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Ht=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vd(t){if(be){var e=Ht;if(e){var n=e;if(!v_(t,e)){if(jd(t))throw Error(F(418));e=kr(n.nextSibling);var r=Wt;e&&v_(t,e)?H0(r,n):(t.flags=t.flags&-4097|2,be=!1,Wt=t)}}else{if(jd(t))throw Error(F(418));t.flags=t.flags&-4097|2,be=!1,Wt=t}}}function w_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Tl(t){if(t!==Wt)return!1;if(!be)return w_(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dd(t.type,t.memoizedProps)),e&&(e=Ht)){if(jd(t))throw W0(),Error(F(418));for(;e;)H0(t,e),e=kr(e.nextSibling)}if(w_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Wt?kr(t.stateNode.nextSibling):null;return!0}function W0(){for(var t=Ht;t;)t=kr(t.nextSibling)}function _i(){Ht=Wt=null,be=!1}function ip(t){cn===null?cn=[t]:cn.push(t)}var kS=nr.ReactCurrentBatchConfig;function ln(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vu=Kr(null),wu=null,Js=null,op=null;function ap(){op=Js=wu=null}function lp(t){var e=vu.current;Ae(vu),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ai(t,e){wu=t,op=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(wu===null)throw Error(F(308));Js=t,wu.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var as=null;function up(t){as===null?as=[t]:as.push(t)}function G0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,up(e)):(n.next=s.next,s.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Yn(t,n)}return s=r.interleaved,s===null?(e.next=e,up(r)):(e.next=s.next,s.next=e),r.interleaved=e,Yn(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qf(t,n)}}function x_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xu(t,e,n,r){var s=t.updateQueue;pr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=c=u=null,l=i;do{var g=l.lane,T=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,A=l;switch(g=e,T=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){m=S.call(T,m,g);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,g=typeof S=="function"?S.call(T,m,g):S,g==null)break e;m=Me({},m,g);break e;case 2:pr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=T,u=m):p=p.next=T,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=m}}function E_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var K0=new Gv.Component().refs;function Ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=br(t),i=Hn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(_n(e,t,s,r),Hl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=br(t),i=Hn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(_n(e,t,s,r),Hl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=br(t),s=Hn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Nr(t,s,r),e!==null&&(_n(e,t,r,n),Hl(e,t,r))}};function I_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,r)||!na(s,i):!0}function Q0(t,e,n){var r=!1,s=Vr,i=e.contextType;return typeof i=="object"&&i!==null?i=en(i):(s=jt(e)?ms:Et.current,r=e.contextTypes,i=(r=r!=null)?gi(t,s):Vr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function T_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function Bd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=K0,cp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=en(i):(i=jt(e)?ms:Et.current,s.context=gi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ud(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&mc.enqueueReplaceState(s,s.state,null),xu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;l===K0&&(l=s.refs={}),o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function C_(t){var e=t._init;return e(t._payload)}function Y0(t){function e(C,E){if(t){var N=C.deletions;N===null?(C.deletions=[E],C.flags|=16):N.push(E)}}function n(C,E){if(!t)return null;for(;E!==null;)e(C,E),E=E.sibling;return null}function r(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function s(C,E){return C=Rr(C,E),C.index=0,C.sibling=null,C}function i(C,E,N){return C.index=N,t?(N=C.alternate,N!==null?(N=N.index,N<E?(C.flags|=2,E):N):(C.flags|=2,E)):(C.flags|=1048576,E)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,E,N,D){return E===null||E.tag!==6?(E=Hh(N,C.mode,D),E.return=C,E):(E=s(E,N),E.return=C,E)}function u(C,E,N,D){var L=N.type;return L===Hs?p(C,E,N.props.children,D,N.key):E!==null&&(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fr&&C_(L)===E.type)?(D=s(E,N.props),D.ref=po(C,E,N),D.return=C,D):(D=Yl(N.type,N.key,N.props,null,C.mode,D),D.ref=po(C,E,N),D.return=C,D)}function c(C,E,N,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=Wh(N,C.mode,D),E.return=C,E):(E=s(E,N.children||[]),E.return=C,E)}function p(C,E,N,D,L){return E===null||E.tag!==7?(E=ds(N,C.mode,D,L),E.return=C,E):(E=s(E,N),E.return=C,E)}function m(C,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Hh(""+E,C.mode,N),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case pl:return N=Yl(E.type,E.key,E.props,null,C.mode,N),N.ref=po(C,null,E),N.return=C,N;case $s:return E=Wh(E,C.mode,N),E.return=C,E;case fr:var D=E._init;return m(C,D(E._payload),N)}if(Co(E)||lo(E))return E=ds(E,C.mode,N,null),E.return=C,E;Cl(C,E)}return null}function g(C,E,N,D){var L=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return L!==null?null:l(C,E,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case pl:return N.key===L?u(C,E,N,D):null;case $s:return N.key===L?c(C,E,N,D):null;case fr:return L=N._init,g(C,E,L(N._payload),D)}if(Co(N)||lo(N))return L!==null?null:p(C,E,N,D,null);Cl(C,N)}return null}function T(C,E,N,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return C=C.get(N)||null,l(E,C,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case pl:return C=C.get(D.key===null?N:D.key)||null,u(E,C,D,L);case $s:return C=C.get(D.key===null?N:D.key)||null,c(E,C,D,L);case fr:var P=D._init;return T(C,E,N,P(D._payload),L)}if(Co(D)||lo(D))return C=C.get(N)||null,p(E,C,D,L,null);Cl(E,D)}return null}function S(C,E,N,D){for(var L=null,P=null,v=E,_=E=0,x=null;v!==null&&_<N.length;_++){v.index>_?(x=v,v=null):x=v.sibling;var I=g(C,v,N[_],D);if(I===null){v===null&&(v=x);break}t&&v&&I.alternate===null&&e(C,v),E=i(I,E,_),P===null?L=I:P.sibling=I,P=I,v=x}if(_===N.length)return n(C,v),be&&ns(C,_),L;if(v===null){for(;_<N.length;_++)v=m(C,N[_],D),v!==null&&(E=i(v,E,_),P===null?L=v:P.sibling=v,P=v);return be&&ns(C,_),L}for(v=r(C,v);_<N.length;_++)x=T(v,C,_,N[_],D),x!==null&&(t&&x.alternate!==null&&v.delete(x.key===null?_:x.key),E=i(x,E,_),P===null?L=x:P.sibling=x,P=x);return t&&v.forEach(function(k){return e(C,k)}),be&&ns(C,_),L}function A(C,E,N,D){var L=lo(N);if(typeof L!="function")throw Error(F(150));if(N=L.call(N),N==null)throw Error(F(151));for(var P=L=null,v=E,_=E=0,x=null,I=N.next();v!==null&&!I.done;_++,I=N.next()){v.index>_?(x=v,v=null):x=v.sibling;var k=g(C,v,I.value,D);if(k===null){v===null&&(v=x);break}t&&v&&k.alternate===null&&e(C,v),E=i(k,E,_),P===null?L=k:P.sibling=k,P=k,v=x}if(I.done)return n(C,v),be&&ns(C,_),L;if(v===null){for(;!I.done;_++,I=N.next())I=m(C,I.value,D),I!==null&&(E=i(I,E,_),P===null?L=I:P.sibling=I,P=I);return be&&ns(C,_),L}for(v=r(C,v);!I.done;_++,I=N.next())I=T(v,C,_,I.value,D),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),E=i(I,E,_),P===null?L=I:P.sibling=I,P=I);return t&&v.forEach(function(b){return e(C,b)}),be&&ns(C,_),L}function M(C,E,N,D){if(typeof N=="object"&&N!==null&&N.type===Hs&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case pl:e:{for(var L=N.key,P=E;P!==null;){if(P.key===L){if(L=N.type,L===Hs){if(P.tag===7){n(C,P.sibling),E=s(P,N.props.children),E.return=C,C=E;break e}}else if(P.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fr&&C_(L)===P.type){n(C,P.sibling),E=s(P,N.props),E.ref=po(C,P,N),E.return=C,C=E;break e}n(C,P);break}else e(C,P);P=P.sibling}N.type===Hs?(E=ds(N.props.children,C.mode,D,N.key),E.return=C,C=E):(D=Yl(N.type,N.key,N.props,null,C.mode,D),D.ref=po(C,E,N),D.return=C,C=D)}return o(C);case $s:e:{for(P=N.key;E!==null;){if(E.key===P)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){n(C,E.sibling),E=s(E,N.children||[]),E.return=C,C=E;break e}else{n(C,E);break}else e(C,E);E=E.sibling}E=Wh(N,C.mode,D),E.return=C,C=E}return o(C);case fr:return P=N._init,M(C,E,P(N._payload),D)}if(Co(N))return S(C,E,N,D);if(lo(N))return A(C,E,N,D);Cl(C,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,E!==null&&E.tag===6?(n(C,E.sibling),E=s(E,N),E.return=C,C=E):(n(C,E),E=Hh(N,C.mode,D),E.return=C,C=E),o(C)):n(C,E)}return M}var yi=Y0(!0),X0=Y0(!1),Ma={},Cn=Kr(Ma),oa=Kr(Ma),aa=Kr(Ma);function ls(t){if(t===Ma)throw Error(F(174));return t}function hp(t,e){switch(Ce(aa,e),Ce(oa,t),Ce(Cn,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vd(e,t)}Ae(Cn),Ce(Cn,e)}function vi(){Ae(Cn),Ae(oa),Ae(aa)}function J0(t){ls(aa.current);var e=ls(Cn.current),n=vd(e,t.type);e!==n&&(Ce(oa,t),Ce(Cn,n))}function dp(t){oa.current===t&&(Ae(Cn),Ae(oa))}var De=Kr(0);function Eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vh=[];function fp(){for(var t=0;t<Vh.length;t++)Vh[t]._workInProgressVersionPrimary=null;Vh.length=0}var Wl=nr.ReactCurrentDispatcher,Fh=nr.ReactCurrentBatchConfig,_s=0,Oe=null,Ge=null,Ze=null,Iu=!1,Mo=!1,la=0,NS=0;function mt(){throw Error(F(321))}function pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function mp(t,e,n,r,s,i){if(_s=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?PS:DS,t=n(r,s),Mo){i=0;do{if(Mo=!1,la=0,25<=i)throw Error(F(301));i+=1,Ze=Ge=null,e.updateQueue=null,Wl.current=OS,t=n(r,s)}while(Mo)}if(Wl.current=Tu,e=Ge!==null&&Ge.next!==null,_s=0,Ze=Ge=Oe=null,Iu=!1,e)throw Error(F(300));return t}function gp(){var t=la!==0;return la=0,t}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Oe.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function tn(){if(Ge===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Ze===null?Oe.memoizedState:Ze.next;if(e!==null)Ze=e,Ge=t;else{if(t===null)throw Error(F(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ze===null?Oe.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function ua(t,e){return typeof e=="function"?e(t):e}function Uh(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var p=c.lane;if((_s&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Oe.lanes|=p,ys|=p}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,vn(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,ys|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bh(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);vn(i,e.memoizedState)||(Mt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Z0(){}function ew(t,e){var n=Oe,r=tn(),s=e(),i=!vn(r.memoizedState,s);if(i&&(r.memoizedState=s,Mt=!0),r=r.queue,_p(rw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,ca(9,nw.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(F(349));_s&30||tw(n,e,s)}return s}function tw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nw(t,e,n,r){e.value=n,e.getSnapshot=r,sw(e)&&iw(t)}function rw(t,e,n){return n(function(){sw(e)&&iw(t)})}function sw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function iw(t){var e=Yn(t,1);e!==null&&_n(e,t,1,-1)}function S_(t){var e=xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=RS.bind(null,Oe,t),[e.memoizedState,t]}function ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ow(){return tn().memoizedState}function Gl(t,e,n,r){var s=xn();Oe.flags|=t,s.memoizedState=ca(1|e,n,void 0,r===void 0?null:r)}function gc(t,e,n,r){var s=tn();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&pp(r,o.deps)){s.memoizedState=ca(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=ca(1|e,n,i,r)}function k_(t,e){return Gl(8390656,8,t,e)}function _p(t,e){return gc(2048,8,t,e)}function aw(t,e){return gc(4,2,t,e)}function lw(t,e){return gc(4,4,t,e)}function uw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cw(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,uw.bind(null,e,t),n)}function yp(){}function hw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fw(t,e,n){return _s&21?(vn(n,e)||(n=g0(),Oe.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function AS(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Fh.transition;Fh.transition={};try{t(!1),e()}finally{ye=n,Fh.transition=r}}function pw(){return tn().memoizedState}function bS(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mw(t))gw(e,n);else if(n=G0(t,e,n,r),n!==null){var s=Nt();_n(n,t,r,s),_w(n,e,r)}}function RS(t,e,n){var r=br(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mw(t))gw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,vn(l,o)){var u=e.interleaved;u===null?(s.next=s,up(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=G0(t,e,s,r),n!==null&&(s=Nt(),_n(n,t,r,s),_w(n,e,r))}}function mw(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function gw(t,e){Mo=Iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _w(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qf(t,n)}}var Tu={readContext:en,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},PS={readContext:en,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:k_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,uw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bS.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:S_,useDebugValue:yp,useDeferredValue:function(t){return xn().memoizedState=t},useTransition:function(){var t=S_(!1),e=t[0];return t=AS.bind(null,t[1]),xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=xn();if(be){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),tt===null)throw Error(F(349));_s&30||tw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,k_(rw.bind(null,r,i,t),[t]),r.flags|=2048,ca(9,nw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=xn(),e=tt.identifierPrefix;if(be){var n=Vn,r=jn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DS={readContext:en,useCallback:hw,useContext:en,useEffect:_p,useImperativeHandle:cw,useInsertionEffect:aw,useLayoutEffect:lw,useMemo:dw,useReducer:Uh,useRef:ow,useState:function(){return Uh(ua)},useDebugValue:yp,useDeferredValue:function(t){var e=tn();return fw(e,Ge.memoizedState,t)},useTransition:function(){var t=Uh(ua)[0],e=tn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:ew,useId:pw,unstable_isNewReconciler:!1},OS={readContext:en,useCallback:hw,useContext:en,useEffect:_p,useImperativeHandle:cw,useInsertionEffect:aw,useLayoutEffect:lw,useMemo:dw,useReducer:Bh,useRef:ow,useState:function(){return Bh(ua)},useDebugValue:yp,useDeferredValue:function(t){var e=tn();return Ge===null?e.memoizedState=t:fw(e,Ge.memoizedState,t)},useTransition:function(){var t=Bh(ua)[0],e=tn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:ew,useId:pw,unstable_isNewReconciler:!1};function wi(t,e){try{var n="",r=e;do n+=lC(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function yw(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,Jd=r),zd(t,e)},n}function vw(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){zd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function N_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=QS.bind(null,t,e,n),e.then(t,t))}function A_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function b_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var LS=nr.ReactCurrentOwner,Mt=!1;function St(t,e,n,r){e.child=t===null?X0(e,null,n,r):yi(e,t.child,n,r)}function R_(t,e,n,r,s){n=n.render;var i=e.ref;return ai(e,s),r=mp(t,e,n,r,i,s),n=gp(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xn(t,e,s)):(be&&n&&rp(e),e.flags|=1,St(t,e,r,s),e.child)}function P_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Sp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ww(t,e,i,r,s)):(t=Yl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,r)&&t.ref===e.ref)return Xn(t,e,s)}return e.flags|=1,t=Rr(i,r),t.ref=e.ref,t.return=e,e.child=t}function ww(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(na(i,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,Xn(t,e,s)}return $d(t,e,n,r,s)}function xw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ei,zt),zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(ei,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(ei,zt),zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ce(ei,zt),zt|=r;return St(t,e,s,n),e.child}function Ew(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $d(t,e,n,r,s){var i=jt(n)?ms:Et.current;return i=gi(e,i),ai(e,s),n=mp(t,e,n,r,i,s),r=gp(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xn(t,e,s)):(be&&r&&rp(e),e.flags|=1,St(t,e,n,s),e.child)}function D_(t,e,n,r,s){if(jt(n)){var i=!0;gu(e)}else i=!1;if(ai(e,s),e.stateNode===null)ql(t,e),Q0(e,n,r),Bd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=jt(n)?ms:Et.current,c=gi(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&T_(e,o,r,c),pr=!1;var g=e.memoizedState;o.state=g,xu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Lt.current||pr?(typeof p=="function"&&(Ud(e,n,p,r),u=e.memoizedState),(l=pr||I_(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ln(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=jt(n)?ms:Et.current,u=gi(e,u));var T=n.getDerivedStateFromProps;(p=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&T_(e,o,r,u),pr=!1,g=e.memoizedState,o.state=g,xu(e,r,o,s);var S=e.memoizedState;l!==m||g!==S||Lt.current||pr?(typeof T=="function"&&(Ud(e,n,T,r),S=e.memoizedState),(c=pr||I_(e,n,c,r,g,S,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Hd(t,e,n,r,i,s)}function Hd(t,e,n,r,s,i){Ew(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&y_(e,n,!1),Xn(t,e,i);r=e.stateNode,LS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=yi(e,t.child,null,i),e.child=yi(e,null,l,i)):St(t,e,l,i),e.memoizedState=r.state,s&&y_(e,n,!0),e.child}function Iw(t){var e=t.stateNode;e.pendingContext?__(t,e.pendingContext,e.pendingContext!==e.context):e.context&&__(t,e.context,!1),hp(t,e.containerInfo)}function O_(t,e,n,r,s){return _i(),ip(s),e.flags|=256,St(t,e,n,r),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tw(t,e,n){var r=e.pendingProps,s=De.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ce(De,s&1),t===null)return Vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vc(o,r,0,null),t=ds(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Gd(n),e.memoizedState=Wd,t):vp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return jS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Rr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Rr(l,i):(i=ds(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Wd,r}return i=t.child,t=i.sibling,r=Rr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vp(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sl(t,e,n,r){return r!==null&&ip(r),yi(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=zh(Error(F(422))),Sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=vc({mode:"visible",children:r.children},s,0,null),i=ds(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&yi(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Wd,i);if(!(e.mode&1))return Sl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=zh(i,r,void 0),Sl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Mt||l){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Yn(t,s),_n(r,t,s,-1))}return Cp(),r=zh(Error(F(421))),Sl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=YS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ht=kr(s.nextSibling),Wt=e,be=!0,cn=null,t!==null&&(Qt[Yt++]=jn,Qt[Yt++]=Vn,Qt[Yt++]=gs,jn=t.id,Vn=t.overflow,gs=e),e=vp(e,r.children),e.flags|=4096,e)}function M_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fd(t.return,e,n)}function $h(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Cw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M_(t,n,e);else if(t.tag===19)M_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(De,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Eu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),$h(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Eu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}$h(e,!0,n,null,i);break;case"together":$h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VS(t,e,n){switch(e.tag){case 3:Iw(e),_i();break;case 5:J0(e);break;case 1:jt(e.type)&&gu(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ce(vu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?Tw(t,e,n):(Ce(De,De.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);Ce(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,xw(t,e,n)}return Xn(t,e,n)}var Sw,qd,kw,Nw;Sw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};kw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ls(Cn.current);var i=null;switch(n){case"input":s=md(t,s),r=md(t,r),i=[];break;case"select":s=Me({},s,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":s=yd(t,s),r=yd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pu)}wd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ne("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Nw=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FS(t,e,n){var r=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return jt(e.type)&&mu(),gt(e),null;case 3:return r=e.stateNode,vi(),Ae(Lt),Ae(Et),fp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(tf(cn),cn=null))),qd(t,e),gt(e),null;case 5:dp(e);var s=ls(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)kw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return gt(e),null}if(t=ls(Cn.current),Tl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[En]=e,r[ia]=i,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<ko.length;s++)Ne(ko[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Hg(r,i),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",r);break;case"textarea":Gg(r,i),Ne("invalid",r)}wd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,l,t),s=["children",""+l]):Qo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":ml(r),Wg(r,i,!0);break;case"textarea":ml(r),qg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[ia]=r,Sw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),s=r;break;case"iframe":case"object":case"embed":Ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<ko.length;s++)Ne(ko[s],t);s=r;break;case"source":Ne("error",t),s=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),s=r;break;case"details":Ne("toggle",t),s=r;break;case"input":Hg(t,r),s=md(t,r),Ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Me({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":Gg(t,r),s=yd(t,r),Ne("invalid",t);break;default:s=r}wd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?s0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yo(t,u):typeof u=="number"&&Yo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ne("scroll",t):u!=null&&$f(t,i,u,o))}switch(n){case"input":ml(t),Wg(t,r,!1);break;case"textarea":ml(t),qg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ri(t,!!r.multiple,i,!1):r.defaultValue!=null&&ri(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)Nw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ls(aa.current),ls(Cn.current),Tl(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(i=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return gt(e),null;case 13:if(Ae(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Ht!==null&&e.mode&1&&!(e.flags&128))W0(),_i(),e.flags|=98560,i=!1;else if(i=Tl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[En]=e}else _i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),i=!1}else cn!==null&&(tf(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Qe===0&&(Qe=3):Cp())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return vi(),qd(t,e),t===null&&ra(e.stateNode.containerInfo),gt(e),null;case 10:return lp(e.type._context),gt(e),null;case 17:return jt(e.type)&&mu(),gt(e),null;case 19:if(Ae(De),i=e.memoizedState,i===null)return gt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)mo(i,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Eu(t),o!==null){for(e.flags|=128,mo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(De,De.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>xi&&(e.flags|=128,r=!0,mo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Eu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!be)return gt(e),null}else 2*Ue()-i.renderingStartTime>xi&&n!==1073741824&&(e.flags|=128,r=!0,mo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=De.current,Ce(De,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return Tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function US(t,e){switch(sp(e),e.tag){case 1:return jt(e.type)&&mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vi(),Ae(Lt),Ae(Et),fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(Ae(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));_i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(De),null;case 4:return vi(),null;case 10:return lp(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var kl=!1,vt=!1,BS=typeof WeakSet=="function"?WeakSet:Set,K=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Kd(t,e,n){try{n()}catch(r){je(t,e,r)}}var L_=!1;function zS(t,e){if(Rd=hu,t=P0(),np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var T;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++p===r&&(u=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},hu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,M=S.memoizedState,C=e.stateNode,E=C.getSnapshotBeforeUpdate(e.elementType===e.type?A:ln(e.type,A),M);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var N=e.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){je(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return S=L_,L_=!1,S}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Kd(e,n,i)}s=s.next}while(s!==r)}}function _c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Aw(t){var e=t.alternate;e!==null&&(t.alternate=null,Aw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[ia],delete e[Md],delete e[TS],delete e[CS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bw(t){return t.tag===5||t.tag===3||t.tag===4}function j_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pu));else if(r!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}var st=null,un=!1;function lr(t,e,n){for(n=n.child;n!==null;)Rw(t,e,n),n=n.sibling}function Rw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:vt||Zs(n,e);case 6:var r=st,s=un;st=null,lr(t,e,n),st=r,un=s,st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?Lh(t.parentNode,n):t.nodeType===1&&Lh(t,n),ea(t)):Lh(st,n.stateNode));break;case 4:r=st,s=un,st=n.stateNode.containerInfo,un=!0,lr(t,e,n),st=r,un=s;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Kd(n,e,o),s=s.next}while(s!==r)}lr(t,e,n);break;case 1:if(!vt&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,lr(t,e,n),vt=r):lr(t,e,n);break;default:lr(t,e,n)}}function V_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BS),e.forEach(function(r){var s=XS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,un=!1;break e;case 3:st=l.stateNode.containerInfo,un=!0;break e;case 4:st=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(st===null)throw Error(F(160));Rw(i,o,s),st=null,un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){je(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pw(e,t),e=e.sibling}function Pw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),wn(t),r&4){try{Lo(3,t,t.return),_c(3,t)}catch(A){je(t,t.return,A)}try{Lo(5,t,t.return)}catch(A){je(t,t.return,A)}}break;case 1:an(e,t),wn(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(an(e,t),wn(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var s=t.stateNode;try{Yo(s,"")}catch(A){je(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Zv(s,i),xd(l,o);var c=xd(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?s0(s,m):p==="dangerouslySetInnerHTML"?n0(s,m):p==="children"?Yo(s,m):$f(s,p,m,c)}switch(l){case"input":gd(s,i);break;case"textarea":e0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?ri(s,!!i.multiple,T,!1):g!==!!i.multiple&&(i.defaultValue!=null?ri(s,!!i.multiple,i.defaultValue,!0):ri(s,!!i.multiple,i.multiple?[]:"",!1))}s[ia]=i}catch(A){je(t,t.return,A)}}break;case 6:if(an(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){je(t,t.return,A)}}break;case 3:if(an(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(A){je(t,t.return,A)}break;case 4:an(e,t),wn(t);break;case 13:an(e,t),wn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ep=Ue())),r&4&&V_(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||p,an(e,t),vt=c):an(e,t),wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(K=t,p=t.child;p!==null;){for(m=K=p;K!==null;){switch(g=K,T=g.child,g.tag){case 0:case 11:case 14:case 15:Lo(4,g,g.return);break;case 1:Zs(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){je(r,n,A)}}break;case 5:Zs(g,g.return);break;case 22:if(g.memoizedState!==null){U_(m);continue}}T!==null?(T.return=g,K=T):U_(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=r0("display",o))}catch(A){je(t,t.return,A)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(A){je(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:an(e,t),wn(t),r&4&&V_(t);break;case 21:break;default:an(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Yo(s,""),r.flags&=-33);var i=j_(t);Xd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=j_(t);Yd(t,l,o);break;default:throw Error(F(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $S(t,e,n){K=t,Dw(t)}function Dw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||kl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||vt;l=kl;var c=vt;if(kl=o,(vt=u)&&!c)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?B_(s):u!==null?(u.return=o,K=u):B_(s);for(;i!==null;)K=i,Dw(i),i=i.sibling;K=s,kl=l,vt=c}F_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):F_(t)}}function F_(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||_c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&E_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}E_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&ea(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}vt||e.flags&512&&Qd(e)}catch(g){je(e,e.return,g)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function U_(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function B_(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_c(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){je(e,s,u)}}var i=e.return;try{Qd(e)}catch(u){je(e,i,u)}break;case 5:var o=e.return;try{Qd(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var HS=Math.ceil,Cu=nr.ReactCurrentDispatcher,wp=nr.ReactCurrentOwner,Zt=nr.ReactCurrentBatchConfig,pe=0,tt=null,We=null,ut=0,zt=0,ei=Kr(0),Qe=0,ha=null,ys=0,yc=0,xp=0,jo=null,Ot=null,Ep=0,xi=1/0,Mn=null,Su=!1,Jd=null,Ar=null,Nl=!1,Er=null,ku=0,Vo=0,Zd=null,Kl=-1,Ql=0;function Nt(){return pe&6?Ue():Kl!==-1?Kl:Kl=Ue()}function br(t){return t.mode&1?pe&2&&ut!==0?ut&-ut:kS.transition!==null?(Ql===0&&(Ql=g0()),Ql):(t=ye,t!==0||(t=window.event,t=t===void 0?16:I0(t.type)),t):1}function _n(t,e,n,r){if(50<Vo)throw Vo=0,Zd=null,Error(F(185));Pa(t,n,r),(!(pe&2)||t!==tt)&&(t===tt&&(!(pe&2)&&(yc|=n),Qe===4&&gr(t,ut)),Vt(t,r),n===1&&pe===0&&!(e.mode&1)&&(xi=Ue()+500,pc&&Qr()))}function Vt(t,e){var n=t.callbackNode;kC(t,e);var r=cu(t,t===tt?ut:0);if(r===0)n!==null&&Yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yg(n),e===1)t.tag===0?SS(z_.bind(null,t)):z0(z_.bind(null,t)),ES(function(){!(pe&6)&&Qr()}),n=null;else{switch(_0(r)){case 1:n=Kf;break;case 4:n=p0;break;case 16:n=uu;break;case 536870912:n=m0;break;default:n=uu}n=Bw(n,Ow.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ow(t,e){if(Kl=-1,Ql=0,pe&6)throw Error(F(327));var n=t.callbackNode;if(li()&&t.callbackNode!==n)return null;var r=cu(t,t===tt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nu(t,r);else{e=r;var s=pe;pe|=2;var i=Lw();(tt!==t||ut!==e)&&(Mn=null,xi=Ue()+500,hs(t,e));do try{qS();break}catch(l){Mw(t,l)}while(!0);ap(),Cu.current=i,pe=s,We!==null?e=0:(tt=null,ut=0,e=Qe)}if(e!==0){if(e===2&&(s=Sd(t),s!==0&&(r=s,e=ef(t,s))),e===1)throw n=ha,hs(t,0),gr(t,r),Vt(t,Ue()),n;if(e===6)gr(t,r);else{if(s=t.current.alternate,!(r&30)&&!WS(s)&&(e=Nu(t,r),e===2&&(i=Sd(t),i!==0&&(r=i,e=ef(t,i))),e===1))throw n=ha,hs(t,0),gr(t,r),Vt(t,Ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:rs(t,Ot,Mn);break;case 3:if(gr(t,r),(r&130023424)===r&&(e=Ep+500-Ue(),10<e)){if(cu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Od(rs.bind(null,t,Ot,Mn),e);break}rs(t,Ot,Mn);break;case 4:if(gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-gn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HS(r/1960))-r,10<r){t.timeoutHandle=Od(rs.bind(null,t,Ot,Mn),r);break}rs(t,Ot,Mn);break;case 5:rs(t,Ot,Mn);break;default:throw Error(F(329))}}}return Vt(t,Ue()),t.callbackNode===n?Ow.bind(null,t):null}function ef(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(hs(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&tf(e)),t}function tf(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function WS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!vn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~xp,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function z_(t){if(pe&6)throw Error(F(327));li();var e=cu(t,0);if(!(e&1))return Vt(t,Ue()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var r=Sd(t);r!==0&&(e=r,n=ef(t,r))}if(n===1)throw n=ha,hs(t,0),gr(t,e),Vt(t,Ue()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,Ot,Mn),Vt(t,Ue()),null}function Ip(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(xi=Ue()+500,pc&&Qr())}}function vs(t){Er!==null&&Er.tag===0&&!(pe&6)&&li();var e=pe;pe|=1;var n=Zt.transition,r=ye;try{if(Zt.transition=null,ye=1,t)return t()}finally{ye=r,Zt.transition=n,pe=e,!(pe&6)&&Qr()}}function Tp(){zt=ei.current,Ae(ei)}function hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xS(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mu();break;case 3:vi(),Ae(Lt),Ae(Et),fp();break;case 5:dp(r);break;case 4:vi();break;case 13:Ae(De);break;case 19:Ae(De);break;case 10:lp(r.type._context);break;case 22:case 23:Tp()}n=n.return}if(tt=t,We=t=Rr(t.current,null),ut=zt=e,Qe=0,ha=null,xp=yc=ys=0,Ot=jo=null,as!==null){for(e=0;e<as.length;e++)if(n=as[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}as=null}return t}function Mw(t,e){do{var n=We;try{if(ap(),Wl.current=Tu,Iu){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Iu=!1}if(_s=0,Ze=Ge=Oe=null,Mo=!1,la=0,wp.current=null,n===null||n.return===null){Qe=1,ha=e,We=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ut,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var T=A_(o);if(T!==null){T.flags&=-257,b_(T,o,l,i,e),T.mode&1&&N_(i,c,e),e=T,u=c;var S=e.updateQueue;if(S===null){var A=new Set;A.add(u),e.updateQueue=A}else S.add(u);break e}else{if(!(e&1)){N_(i,c,e),Cp();break e}u=Error(F(426))}}else if(be&&l.mode&1){var M=A_(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),b_(M,o,l,i,e),ip(wi(u,l));break e}}i=u=wi(u,l),Qe!==4&&(Qe=2),jo===null?jo=[i]:jo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=yw(i,u,e);x_(i,C);break e;case 1:l=u;var E=i.type,N=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Ar===null||!Ar.has(N)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=vw(i,l,e);x_(i,D);break e}}i=i.return}while(i!==null)}Vw(n)}catch(L){e=L,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function Lw(){var t=Cu.current;return Cu.current=Tu,t===null?Tu:t}function Cp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(ys&268435455)&&!(yc&268435455)||gr(tt,ut)}function Nu(t,e){var n=pe;pe|=2;var r=Lw();(tt!==t||ut!==e)&&(Mn=null,hs(t,e));do try{GS();break}catch(s){Mw(t,s)}while(!0);if(ap(),pe=n,Cu.current=r,We!==null)throw Error(F(261));return tt=null,ut=0,Qe}function GS(){for(;We!==null;)jw(We)}function qS(){for(;We!==null&&!yC();)jw(We)}function jw(t){var e=Uw(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?Vw(t):We=e,wp.current=null}function Vw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=US(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,We=null;return}}else if(n=FS(n,e,zt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Qe===0&&(Qe=5)}function rs(t,e,n){var r=ye,s=Zt.transition;try{Zt.transition=null,ye=1,KS(t,e,n,r)}finally{Zt.transition=s,ye=r}return null}function KS(t,e,n,r){do li();while(Er!==null);if(pe&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(NC(t,i),t===tt&&(We=tt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,Bw(uu,function(){return li(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Zt.transition,Zt.transition=null;var o=ye;ye=1;var l=pe;pe|=4,wp.current=null,zS(t,n),Pw(n,t),pS(Pd),hu=!!Rd,Pd=Rd=null,t.current=n,$S(n),vC(),pe=l,ye=o,Zt.transition=i}else t.current=n;if(Nl&&(Nl=!1,Er=t,ku=s),i=t.pendingLanes,i===0&&(Ar=null),EC(n.stateNode),Vt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Su)throw Su=!1,t=Jd,Jd=null,t;return ku&1&&t.tag!==0&&li(),i=t.pendingLanes,i&1?t===Zd?Vo++:(Vo=0,Zd=t):Vo=0,Qr(),null}function li(){if(Er!==null){var t=_0(ku),e=Zt.transition,n=ye;try{if(Zt.transition=null,ye=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,ku=0,pe&6)throw Error(F(331));var s=pe;for(pe|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var p=K;switch(p.tag){case 0:case 11:case 15:Lo(8,p,i)}var m=p.child;if(m!==null)m.return=p,K=m;else for(;K!==null;){p=K;var g=p.sibling,T=p.return;if(Aw(p),p===c){K=null;break}if(g!==null){g.return=T,K=g;break}K=T}}}var S=i.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var M=A.sibling;A.sibling=null,A=M}while(A!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lo(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,K=C;break e}K=i.return}}var E=t.current;for(K=E;K!==null;){o=K;var N=o.child;if(o.subtreeFlags&2064&&N!==null)N.return=o,K=N;else e:for(o=E;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_c(9,l)}}catch(L){je(l,l.return,L)}if(l===o){K=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,K=D;break e}K=l.return}}if(pe=s,Qr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(uc,t)}catch{}r=!0}return r}finally{ye=n,Zt.transition=e}}return!1}function $_(t,e,n){e=wi(n,e),e=yw(t,e,1),t=Nr(t,e,1),e=Nt(),t!==null&&(Pa(t,1,e),Vt(t,e))}function je(t,e,n){if(t.tag===3)$_(t,t,n);else for(;e!==null;){if(e.tag===3){$_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=wi(n,t),t=vw(e,t,1),e=Nr(e,t,1),t=Nt(),e!==null&&(Pa(e,1,t),Vt(e,t));break}}e=e.return}}function QS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ut&n)===n&&(Qe===4||Qe===3&&(ut&130023424)===ut&&500>Ue()-Ep?hs(t,0):xp|=n),Vt(t,e)}function Fw(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=Nt();t=Yn(t,e),t!==null&&(Pa(t,e,n),Vt(t,n))}function YS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fw(t,n)}function XS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Fw(t,n)}var Uw;Uw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,VS(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,be&&e.flags&1048576&&$0(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ql(t,e),t=e.pendingProps;var s=gi(e,Et.current);ai(e,n),s=mp(null,e,r,t,s,n);var i=gp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(i=!0,gu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,cp(e),s.updater=mc,e.stateNode=s,s._reactInternals=e,Bd(e,r,t,n),e=Hd(null,e,r,!0,i,n)):(e.tag=0,be&&i&&rp(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=ZS(r),t=ln(r,t),s){case 0:e=$d(null,e,r,t,n);break e;case 1:e=D_(null,e,r,t,n);break e;case 11:e=R_(null,e,r,t,n);break e;case 14:e=P_(null,e,r,ln(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),$d(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),D_(t,e,r,s,n);case 3:e:{if(Iw(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,q0(t,e),xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=wi(Error(F(423)),e),e=O_(t,e,r,n,s);break e}else if(r!==s){s=wi(Error(F(424)),e),e=O_(t,e,r,n,s);break e}else for(Ht=kr(e.stateNode.containerInfo.firstChild),Wt=e,be=!0,cn=null,n=X0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_i(),r===s){e=Xn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return J0(e),t===null&&Vd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Dd(r,s)?o=null:i!==null&&Dd(r,i)&&(e.flags|=32),Ew(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Vd(e),null;case 13:return Tw(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yi(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),R_(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ce(vu,r._currentValue),r._currentValue=o,i!==null)if(vn(i.value,o)){if(i.children===s.children&&!Lt.current){e=Xn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Hn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Fd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ai(e,n),s=en(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),P_(t,e,r,s,n);case 15:return ww(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),ql(t,e),e.tag=1,jt(r)?(t=!0,gu(e)):t=!1,ai(e,n),Q0(e,r,s),Bd(e,r,s,n),Hd(null,e,r,!0,t,n);case 19:return Cw(t,e,n);case 22:return xw(t,e,n)}throw Error(F(156,e.tag))};function Bw(t,e){return f0(t,e)}function JS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new JS(t,e,n,r)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZS(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wf)return 11;if(t===Gf)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ds(n.children,s,i,e);case Hf:o=8,s|=8;break;case hd:return t=Xt(12,n,e,s|2),t.elementType=hd,t.lanes=i,t;case dd:return t=Xt(13,n,e,s),t.elementType=dd,t.lanes=i,t;case fd:return t=Xt(19,n,e,s),t.elementType=fd,t.lanes=i,t;case Yv:return vc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kv:o=10;break e;case Qv:o=9;break e;case Wf:o=11;break e;case Gf:o=14;break e;case fr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ds(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function vc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=Yv,t.lanes=n,t.stateNode={isHidden:!1},t}function Hh(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Wh(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function e1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ch(0),this.expirationTimes=Ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ch(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,r,s,i,o,l,u){return t=new e1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(i),t}function t1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zw(t){if(!t)return Vr;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(jt(n))return B0(t,n,e)}return e}function $w(t,e,n,r,s,i,o,l,u){return t=kp(n,r,!0,t,s,i,o,l,u),t.context=zw(null),n=t.current,r=Nt(),s=br(n),i=Hn(r,s),i.callback=e??null,Nr(n,i,s),t.current.lanes=s,Pa(t,s,r),Vt(t,r),t}function wc(t,e,n,r){var s=e.current,i=Nt(),o=br(s);return n=zw(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(s,e,o),t!==null&&(_n(t,s,o,i),Hl(t,s,o)),o}function Au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function H_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){H_(t,e),(t=t.alternate)&&H_(t,e)}function n1(){return null}var Hw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}xc.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));wc(t,e,null,null)};xc.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vs(function(){wc(null,t,null,null)}),e[Qn]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=w0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&E0(t)}};function bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function W_(){}function r1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Au(o);i.call(c)}}var o=$w(e,r,t,0,null,!1,!1,"",W_);return t._reactRootContainer=o,t[Qn]=o.current,ra(t.nodeType===8?t.parentNode:t),vs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Au(u);l.call(c)}}var u=kp(t,0,!1,null,null,!1,!1,"",W_);return t._reactRootContainer=u,t[Qn]=u.current,ra(t.nodeType===8?t.parentNode:t),vs(function(){wc(e,u,n,r)}),u}function Ic(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Au(o);l.call(u)}}wc(e,o,t,s)}else o=r1(n,e,t,s,r);return Au(o)}y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(Qf(e,n|1),Vt(e,Ue()),!(pe&6)&&(xi=Ue()+500,Qr()))}break;case 13:vs(function(){var r=Yn(t,1);if(r!==null){var s=Nt();_n(r,t,1,s)}}),Np(t,1)}};Yf=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=Nt();_n(e,t,134217728,n)}Np(t,134217728)}};v0=function(t){if(t.tag===13){var e=br(t),n=Yn(t,e);if(n!==null){var r=Nt();_n(n,t,e,r)}Np(t,e)}};w0=function(){return ye};x0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Id=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=fc(r);if(!s)throw Error(F(90));Jv(r),gd(r,s)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&ri(t,!!n.multiple,e,!1)}};a0=Ip;l0=vs;var s1={usingClientEntryPoint:!1,Events:[Oa,Ks,fc,i0,o0,Ip]},go={findFiberByHostInstance:os,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i1={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||n1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{uc=Al.inject(i1),Tn=Al}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s1;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(e))throw Error(F(200));return t1(t,e,null,n)};qt.createRoot=function(t,e){if(!bp(t))throw Error(F(299));var n=!1,r="",s=Hw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,r,s),t[Qn]=e.current,ra(t.nodeType===8?t.parentNode:t),new Ap(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return vs(t)};qt.hydrate=function(t,e,n){if(!Ec(e))throw Error(F(200));return Ic(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!bp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Hw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$w(e,null,t,1,n??null,s,!1,i,o),t[Qn]=e.current,ra(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new xc(e)};qt.render=function(t,e,n){if(!Ec(e))throw Error(F(200));return Ic(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(F(40));return t._reactRootContainer?(vs(function(){Ic(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};qt.unstable_batchedUpdates=Ip;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ec(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Ic(t,e,n,!1,r)};qt.version="18.2.0-next-9e3b772b8-20220608";function Ww(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ww)}catch(t){console.error(t)}}Ww(),$v.exports=qt;var o1=$v.exports,G_=o1;ud.createRoot=G_.createRoot,ud.hydrateRoot=G_.hydrateRoot;const a1=({currentView:t,onViewChange:e,partnerName:n,userProfile:r})=>{const s=[{id:"dashboard",label:"家庭概览",icon:"🏠"},{id:"recipes",label:"私房食谱",icon:"📖"},{id:"plan",label:"烹饪计划",icon:"📅"},{id:"shopping",label:"协作采购",icon:"🛒"},{id:"inventory",label:"冰箱库存",icon:"🧊"},{id:"settings",label:"设置中心",icon:"⚙️"}];return d.jsxs("div",{className:"hidden lg:flex w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 flex-col z-50",children:[d.jsxs("div",{className:"p-10 pt-12",children:[d.jsxs("h1",{className:"text-3xl font-black text-gray-900 tracking-tighter italic",children:["HOMETASTE",d.jsx("span",{className:"text-emerald-500",children:"."})]}),d.jsxs("div",{className:"mt-6 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"}),"Connected"]})]}),d.jsx("nav",{className:"flex-1 px-6 space-y-1.5 mt-4",children:s.map(i=>d.jsxs("button",{onClick:()=>e(i.id),className:`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${t===i.id?"bg-gray-900 text-white shadow-xl scale-105":"text-gray-400 hover:bg-gray-50 hover:text-gray-900"}`,children:[d.jsx("span",{className:"text-xl",children:i.icon}),d.jsx("span",{className:"text-xs font-black uppercase tracking-widest",children:i.label})]},i.id))}),d.jsx("div",{className:"p-8",children:d.jsxs("button",{onClick:()=>e("settings"),className:"w-full flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:bg-emerald-50 transition-all group",children:[d.jsx("img",{src:r.avatar,className:"w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover",alt:"Avatar"}),d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsx("p",{className:"text-[10px] font-black text-gray-800 truncate uppercase",children:r.name}),d.jsx("p",{className:"text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] truncate",children:"Premium Chef"})]})]})})]})},l1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 21C12 21 17 18 17 12C17 6 12 2 12 2C12 2 7 6 7 12C7 18 12 21 12 21Z",className:"text-emerald-600",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 21V12",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L15 6",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L9 6",strokeLinecap:"round"})]}),u1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("circle",{cx:"12",cy:"13",r:"8",className:"text-red-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 5V2",strokeLinecap:"round"}),d.jsx("path",{d:"M12 5L15 2",strokeLinecap:"round"})]}),c1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",className:"text-rose-500",fill:"currentColor",fillOpacity:"0.1",strokeLinecap:"round"}),d.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"currentColor",className:"text-white"}),d.jsx("path",{d:"M5 8C5 8 7 10 9 10C11 10 13 8 13 8",strokeLinecap:"round"})]}),h1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 2 16 2 10C2 4 6 2 12 2C18 2 20 4.47715 20 10Z",className:"text-blue-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M20 10L23 13",strokeLinecap:"round"}),d.jsx("path",{d:"M20 10L23 7",strokeLinecap:"round"})]}),d1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M7 6H17V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V6Z",className:"text-yellow-500",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M5 6H19",strokeLinecap:"round"}),d.jsx("path",{d:"M12 2L12 6",strokeLinecap:"round"})]}),f1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("ellipse",{cx:"8",cy:"12",rx:"4",ry:"6",transform:"rotate(-30 8 12)",className:"text-amber-700",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("ellipse",{cx:"16",cy:"12",rx:"4",ry:"6",transform:"rotate(30 16 12)",className:"text-amber-600",fill:"currentColor",fillOpacity:"0.2"})]}),p1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 22C16.4183 22 20 18.4183 20 14C20 9 12 2 12 2C12 2 4 9 4 14C4 18.4183 7.58172 22 12 22Z",className:"text-yellow-600",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 10V16",strokeLinecap:"round"})]}),m1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M12 4C7 4 3 8 3 11H21C21 8 17 4 12 4Z",className:"text-stone-600",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("path",{d:"M12 11V20",strokeLinecap:"round",strokeWidth:"2"}),d.jsx("path",{d:"M8 20H16",strokeLinecap:"round"})]}),g1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("rect",{x:"7",y:"8",width:"10",height:"14",rx:"2",className:"text-gray-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M7 8L9 2H15L17 8"})]}),_1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M7 6L5 21H19L17 6H7Z",className:"text-blue-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M12 6V2"}),d.jsx("path",{d:"M9 2H15"})]}),y1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14",className:"text-orange-100",fill:"currentColor",fillOpacity:"0.5"}),d.jsx("path",{d:"M2 14H22",strokeLinecap:"round"}),d.jsx("path",{d:"M12 14V10"}),d.jsx("path",{d:"M7 14C7 10 12 8 12 8C12 8 17 10 17 14",strokeLinecap:"round"})]}),v1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("rect",{x:"3",y:"7",width:"18",height:"14",rx:"2",className:"text-gray-400",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M3 7L12 2L21 7"}),d.jsx("path",{d:"M12 12V16"})]}),w1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"}),d.jsx("path",{d:"M9 22V12H15V22"})]}),x1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),d.jsx("path",{d:"M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z"})]}),Gw=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),d.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),d.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),d.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),qw=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"9",cy:"21",r:"1"}),d.jsx("circle",{cx:"20",cy:"21",r:"1"}),d.jsx("path",{d:"M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"})]}),Kw=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z"}),d.jsx("path",{d:"M3 10H21"}),d.jsx("path",{d:"M10 5V8"}),d.jsx("path",{d:"M10 14V17"})]}),E1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M15 4V2"}),d.jsx("path",{d:"M15 16V14"}),d.jsx("path",{d:"M8 9H10"}),d.jsx("path",{d:"M20 9H22"}),d.jsx("path",{d:"M17.8 11.8L19 13"}),d.jsx("path",{d:"M10.6 5.2L12 6.6"}),d.jsx("path",{d:"M17.8 6.2L19 5"}),d.jsx("path",{d:"M10.6 12.8L12 11.4"}),d.jsx("path",{d:"M2 21L7 16"})]}),I1=({className:t})=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:t,stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M12 2V6"}),d.jsx("path",{d:"M12 18V22"}),d.jsx("path",{d:"M4.93 4.93L7.76 7.76"}),d.jsx("path",{d:"M16.24 16.24L19.07 19.07"}),d.jsx("path",{d:"M2 12H6"}),d.jsx("path",{d:"M18 12H22"}),d.jsx("path",{d:"M4.93 19.07L7.76 16.24"}),d.jsx("path",{d:"M16.24 7.76L19.07 4.93"})]}),T1=["蔬菜","水果","肉类","海鲜","蛋奶","豆制品","粮油","干货","调料","饮品","主食","其他"],q_=["常温","冷藏","冷冻"],C1=({inventory:t,onAdd:e,onUpdate:n,onDelete:r,onAIScan:s,isScanning:i})=>{const[o,l]=H.useState("全部"),[u,c]=H.useState(""),[p,m]=H.useState(!1),[g,T]=H.useState(!1),[S,A]=H.useState({name:"",amount:1,unit:"份",category:"蔬菜",storageZone:"冷藏"}),M=H.useRef(null),C=P=>{const v={className:"w-8 h-8"};switch(P){case"蔬菜":return d.jsx(l1,{...v});case"水果":return d.jsx(u1,{...v});case"肉类":return d.jsx(c1,{...v});case"蛋奶":return d.jsx(d1,{...v});case"豆制品":return d.jsx(f1,{...v});case"粮油":return d.jsx(p1,{...v});case"干货":return d.jsx(m1,{...v});case"调料":return d.jsx(g1,{...v});case"主食":return d.jsx(y1,{...v});case"海鲜":return d.jsx(h1,{...v});case"饮品":return d.jsx(_1,{...v});default:return d.jsx(v1,{...v})}},E=t.filter(P=>{const v=o==="全部"||P.storageZone===o,_=P.name.toLowerCase().includes(u.toLowerCase());return v&&_}),N=()=>{T(!1),A({name:"",amount:1,unit:"份",category:"蔬菜",storageZone:"冷藏"}),m(!0)},D=P=>{T(!0),A({...P}),m(!0)},L=()=>{S.name&&(g&&S.id?(r(S.id),e({...S,id:Date.now().toString()})):e(S),m(!1))};return d.jsxs("div",{className:"p-5 lg:p-10 pb-64 space-y-8 max-w-4xl mx-auto animate-in fade-in duration-500",children:[p&&d.jsx("div",{className:"fixed inset-0 z-[200] bg-black/60 backdrop-blur-xl flex items-center justify-center p-6",children:d.jsxs("div",{className:"bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl space-y-6 animate-in zoom-in-95",children:[d.jsx("h3",{className:"text-xl font-black",children:g?"编辑食材":"录入食材"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"名称"}),d.jsx("input",{type:"text",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold outline-none focus:ring-1 ring-emerald-400",value:S.name,onChange:P=>A({...S,name:P.target.value})})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"数量"}),d.jsx("input",{type:"number",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none",value:S.amount,onChange:P=>A({...S,amount:Number(P.target.value)})})]}),d.jsxs("div",{className:"w-24",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"单位"}),d.jsx("input",{type:"text",className:"w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none",placeholder:"个",value:S.unit,onChange:P=>A({...S,unit:P.target.value})})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"存放区域"}),d.jsx("div",{className:"flex gap-2 mt-1",children:q_.map(P=>d.jsx("button",{onClick:()=>A({...S,storageZone:P}),className:`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${S.storageZone===P?"bg-gray-900 text-white":"bg-gray-50 text-gray-400"}`,children:P},P))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1",children:"分类"}),d.jsx("div",{className:"grid grid-cols-4 gap-2 mt-1",children:T1.map(P=>d.jsx("button",{onClick:()=>A({...S,category:P}),className:`py-2 rounded-lg text-[10px] font-bold transition-all ${S.category===P?"bg-emerald-600 text-white":"bg-gray-50 text-gray-500"}`,children:P},P))})]}),d.jsxs("div",{className:"flex gap-3 pt-2",children:[d.jsx("button",{onClick:L,className:"flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg",children:"保存"}),d.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 bg-gray-100 text-gray-400 rounded-xl font-bold",children:"取消"})]})]})]})}),i&&d.jsxs("div",{className:"fixed inset-0 z-[1000] bg-emerald-950/90 backdrop-blur-3xl flex flex-col items-center justify-center p-12 text-center animate-in fade-in",children:[d.jsx("div",{className:"w-16 h-16 border-4 border-emerald-500/30 rounded-full border-t-emerald-400 animate-spin mb-6"}),d.jsx("h4",{className:"text-white text-xl font-bold",children:"正在识别食材..."})]}),d.jsxs("header",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 tracking-tight italic",children:"食材储备"}),d.jsx("div",{className:"flex bg-gray-100 p-1 rounded-xl w-fit",children:["全部",...q_].map(P=>d.jsx("button",{onClick:()=>l(P),className:`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${o===P?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:P},P))})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsxs("div",{className:"flex-1 relative",children:[d.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm",children:"🔍"}),d.jsx("input",{type:"text",placeholder:"搜索...",className:"w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm",value:u,onChange:P=>c(P.target.value)})]}),d.jsx("button",{onClick:()=>{var P;return(P=M.current)==null?void 0:P.click()},className:"px-5 bg-emerald-600 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all",children:"📸"}),d.jsx("button",{onClick:N,className:"px-5 bg-gray-900 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all",children:"＋"}),d.jsx("input",{type:"file",ref:M,className:"hidden",accept:"image/*",onChange:P=>{var _;const v=(_=P.target.files)==null?void 0:_[0];if(v&&s){const x=new FileReader;x.onloadend=()=>s(x.result),x.readAsDataURL(v)}}})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:E.map(P=>d.jsxs("div",{className:"bg-white rounded-2xl border border-gray-50 flex items-center p-3 relative group hover:border-emerald-100 hover:shadow-lg transition-all",children:[d.jsx("div",{onClick:()=>D(P),className:"w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 mr-3 cursor-pointer hover:bg-emerald-50 transition-colors",children:C(P.category)}),d.jsxs("div",{onClick:()=>D(P),className:"flex-1 min-w-0 cursor-pointer mr-2",children:[d.jsx("h4",{className:"font-black text-gray-900 text-base truncate",children:P.name}),d.jsxs("p",{className:"text-[10px] font-bold text-gray-400 mt-0.5",children:[P.storageZone," • ",P.category]})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 shrink-0",children:[d.jsx("button",{onClick:()=>n(P.id,Math.max(0,P.amount-1)),className:"w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all",children:"－"}),d.jsxs("span",{className:"font-black text-emerald-700 min-w-[2rem] text-center text-sm",children:[P.amount,d.jsx("span",{className:"text-[9px] text-gray-400 ml-0.5",children:P.unit})]}),d.jsx("button",{onClick:()=>n(P.id,P.amount+1),className:"w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all",children:"＋"})]}),d.jsx("button",{onClick:()=>r(P.id),className:"absolute -top-1.5 -right-1.5 w-6 h-6 bg-white border border-gray-100 rounded-full text-[10px] text-gray-300 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10",children:"✕"})]},P.id))})]})},S1="modulepreload",k1=function(t,e){return new URL(t,e).href},K_={},Qw=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=k1(c,r),c in K_)return;K_[c]=!0;const p=c.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let S=o.length-1;S>=0;S--){const A=o[S];if(A.href===c&&(!p||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const T=document.createElement("link");if(T.rel=p?"stylesheet":S1,p||(T.as="script"),T.crossOrigin="",T.href=c,u&&T.setAttribute("nonce",u),document.head.appendChild(T),p)return new Promise((S,A)=>{T.addEventListener("load",S),T.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},N1=(t=new Date)=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`},A1=()=>{const t=[],e=new Date;for(let n=0;n<7;n++){const r=new Date(e);r.setDate(e.getDate()+n);const s=N1(r),i=r.toLocaleDateString("zh-CN",{weekday:"short"}),o=r.getDate();let l=n===0?"今天":n===1?"明天":"";t.push({iso:s,weekday:i,day:o,label:l})}return t},b1=t=>t>=4.5?"绝绝子，必须配三碗米饭！":t>=3.5?"挺下饭的，味道扎实。":t>=2.5?"中规中矩，还可以。":"口味清淡，不怎么费米饭。",R1=({recipe:t,inventory:e,plans:n,onBack:r,onEdit:s,onPlan:i})=>{var N,D,L,P;const[o,l]=H.useState(!1),[u,c]=H.useState(!1),[p,m]=H.useState(0),[g,T]=H.useState(!1),[S,A]=H.useState(""),M=H.useRef(null);H.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t.id]);const C=v=>{const _=e.find(x=>v.name.includes(x.name)||x.name.includes(v.name));return _?_.amount<v.amount?{text:"不足",color:"text-amber-500"}:{text:"充足",color:"text-emerald-500"}:{text:"缺货",color:"text-red-500"}},E=async()=>{var v;if(!(!M.current||g)){T(!0),A("");try{const{default:_}=await Qw(async()=>{const{default:Q}=await import("./html2canvas.esm-CBrSDip1.js");return{default:Q}},[],import.meta.url),x=await _(M.current,{backgroundColor:"#fffcf5",scale:Math.min(window.devicePixelRatio||2,3),useCORS:!0}),I=x.toDataURL("image/png"),k=await new Promise(Q=>{x.toBlob(Q,"image/png")});if(!k&&!I)throw new Error("图片生成失败");const b=t.title.replace(/[\\/:*?"<>|]/g,"-"),y=k?new File([k],`${b||"HomeTaste-recipe"}.png`,{type:"image/png"}):null;if(y&&navigator.share&&((v=navigator.canShare)!=null&&v.call(navigator,{files:[y]})))await navigator.share({files:[y],title:t.title,text:`${t.title} 菜谱导出`}),A("已打开系统分享面板，可以直接存到相册或发送给家人。");else if(navigator.share)await navigator.share({title:t.title,text:`${t.title} 菜谱导出`,url:I}),A("已打开系统分享面板。");else{const Q=k?URL.createObjectURL(k):I;window.open(Q,"_blank","noopener,noreferrer"),k&&setTimeout(()=>URL.revokeObjectURL(Q),1e3),A("当前设备不支持系统分享，已为你打开图片，可长按或另存。")}}catch(_){console.error("导出菜谱失败",_);const x=_ instanceof Error?_.message:"保存失败";if(typeof DOMException<"u"&&_ instanceof DOMException&&_.name==="AbortError"){A("已取消分享。");return}A(x.includes("tainted")||x.includes("cross-origin")?"这道菜的图片来源不允许导出，换一张本地上传的图片会更稳。":`分享失败：${x}`)}finally{T(!1)}}};return d.jsxs("div",{className:"min-h-screen bg-white animate-in slide-in-from-bottom duration-500 relative pb-32",children:[u&&d.jsxs("div",{className:"fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto",onClick:()=>c(!1),children:[d.jsxs("div",{ref:M,className:"bg-[#fffcf5] w-full max-w-md rounded-none shadow-2xl p-8 space-y-6 relative border-[12px] border-double border-emerald-950/10 my-10",onClick:v=>v.stopPropagation(),children:[d.jsx("div",{className:"absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-emerald-900/20"}),d.jsx("div",{className:"absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-900/20"}),d.jsx("button",{onClick:()=>c(!1),className:"absolute top-6 left-6 h-9 px-4 rounded-full border border-emerald-900/10 bg-white/80 text-[11px] font-bold text-emerald-900 shadow-sm",children:"返回"}),d.jsxs("div",{className:"text-center space-y-2 pt-2",children:[d.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800/60 block mb-2",children:t.category}),d.jsx("h2",{className:"text-3xl font-black italic text-emerald-950 font-serif leading-tight",children:t.title}),t.description&&d.jsxs("p",{className:"text-xs text-gray-500 font-serif italic px-4",children:['"',t.description,'"']})]}),d.jsxs("div",{className:"flex justify-center gap-6 py-2 border-t border-b border-emerald-900/10",children:[d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"PREP"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[t.prepTime," min"]})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"COOK"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[t.cookTime," min"]})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-[9px] font-black uppercase text-gray-400 tracking-widest",children:"RATING"}),d.jsxs("p",{className:"text-sm font-bold text-emerald-900",children:[((N=t.rating)==null?void 0:N.toFixed(1))||5," ★"]})]})]}),d.jsx("div",{className:"aspect-video w-full overflow-hidden bg-gray-100 grayscale-[0.2] contrast-125",children:d.jsx("img",{src:t.images[0],className:"w-full h-full object-cover",alt:t.title})}),d.jsxs("div",{className:"space-y-4",children:[d.jsx("h4",{className:"text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2",children:"Ingredients"}),d.jsx("div",{className:"grid grid-cols-2 gap-x-6 gap-y-2 text-xs",children:t.ingredients.map((v,_)=>d.jsxs("div",{className:"flex justify-between items-baseline border-b border-emerald-900/5 pb-1",children:[d.jsx("span",{className:"font-bold text-emerald-950",children:v.name}),d.jsxs("span",{className:"text-emerald-800/60 font-medium",children:[v.amount,v.unit]})]},_))})]}),d.jsxs("div",{className:"space-y-4 pb-4",children:[d.jsx("h4",{className:"text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2",children:"Method"}),d.jsx("div",{className:"space-y-3",children:t.steps.map((v,_)=>d.jsxs("div",{className:"flex gap-3 text-xs leading-relaxed text-emerald-950/80",children:[d.jsxs("span",{className:"font-black text-emerald-700",children:[_+1,"."]}),d.jsx("span",{children:v})]},_))})]}),d.jsx("div",{className:"text-center border-t-2 border-emerald-900/5 pt-4",children:d.jsx("p",{className:"text-[8px] font-black uppercase tracking-[0.5em] text-emerald-900/40",children:"HomeTaste • Artisan Kitchen"})})]}),d.jsx("button",{onClick:E,disabled:g,className:"fixed bottom-6 left-6 right-6 py-4 bg-emerald-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl z-50 disabled:opacity-60 disabled:cursor-not-allowed",children:g?"正在生成分享图片…":"分享菜谱图片"}),S&&d.jsx("p",{className:"fixed bottom-24 left-6 right-6 text-center text-[11px] leading-5 text-white/85 z-50",children:S})]}),d.jsxs("div",{className:"relative h-[35vh] overflow-hidden bg-gray-100",children:[d.jsx("div",{className:"w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar",onScroll:v=>{m(Math.round(v.currentTarget.scrollLeft/v.currentTarget.offsetWidth))},children:(D=t.images)==null?void 0:D.map((v,_)=>d.jsx("img",{src:v,className:"w-full h-full object-cover shrink-0 snap-center",alt:""},_))}),d.jsxs("div",{className:"absolute top-4 right-4 flex gap-2 z-40",children:[d.jsx("button",{onClick:()=>c(!0),className:"h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10",children:d.jsx("span",{children:"✨ 导出"})}),s&&d.jsx("button",{onClick:s,className:"h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10",children:d.jsx("span",{children:"✎ 编辑"})})]}),d.jsx("div",{className:"absolute bottom-4 right-4 flex gap-2 z-40",children:d.jsxs("div",{className:"px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center gap-1 border border-white/10 shadow-lg",children:[d.jsx("span",{className:"text-amber-400 text-xs",children:"★"}),d.jsx("span",{className:"text-xs font-bold text-white",children:((L=t.rating)==null?void 0:L.toFixed(1))||"5.0"})]})}),d.jsx("div",{className:"absolute top-4 left-4 z-30",children:d.jsx("button",{onClick:r,className:"w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center text-lg active:scale-90 transition-all",children:"✕"})}),t.images.length>1&&d.jsx("div",{className:"absolute bottom-4 left-4 flex gap-1 z-20",children:t.images.map((v,_)=>d.jsx("div",{className:`h-1 rounded-full transition-all duration-300 ${p===_?"w-4 bg-white":"w-1.5 bg-white/40"}`},_))})]}),d.jsxs("div",{className:"px-5 py-6 max-w-4xl mx-auto space-y-8",children:[d.jsxs("header",{children:[d.jsx("div",{className:"flex items-center gap-2 mb-2",children:d.jsx("span",{className:"px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase",children:t.category})}),d.jsx("h1",{className:"text-2xl font-black text-gray-900 tracking-tight",children:t.title}),t.description&&d.jsx("p",{className:"text-gray-500 text-sm mt-2 leading-relaxed",children:t.description}),d.jsxs("div",{className:"flex gap-6 mt-4 text-xs font-bold text-gray-500",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-emerald-600",children:"🕒"}),d.jsxs("span",{children:["准备 ",t.prepTime,"分钟"]})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-orange-500",children:"🔥"}),d.jsxs("span",{children:["烹饪 ",t.cookTime,"分钟"]})]})]})]}),t.appetizingRating&&d.jsxs("div",{className:"p-4 bg-orange-50 rounded-xl border border-orange-100/50",children:[d.jsx("p",{className:"text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1",children:"下饭指数"}),d.jsxs("p",{className:"text-sm font-bold text-orange-800 italic",children:["“ ",b1(t.appetizingRating)," ”"]})]}),((P=t.source)==null?void 0:P.url)&&d.jsxs("a",{href:t.source.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors bg-gray-50 p-3 rounded-lg",children:[d.jsx("span",{children:"🔗 灵感来源"}),d.jsx("span",{className:"text-[10px] opacity-50 truncate flex-1 text-right",children:t.source.url})]}),d.jsxs("section",{children:[d.jsxs("div",{className:"flex items-baseline justify-between mb-4 pb-2 border-b border-gray-100",children:[d.jsx("h3",{className:"text-lg font-black text-gray-900",children:"所需食材"}),d.jsxs("span",{className:"text-xs font-bold text-gray-300",children:[t.ingredients.length," 项"]})]}),d.jsx("div",{className:"space-y-1",children:t.ingredients.map((v,_)=>{const x=C(v);return d.jsxs("div",{className:"flex justify-between items-center py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors",children:[d.jsx("span",{className:"font-bold text-gray-800 text-sm",children:v.name}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs("span",{className:"text-sm font-medium text-gray-600 font-mono",children:[v.amount,v.unit]}),d.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${x.color.replace("text","bg")}`,title:x.text})]})]},_)})})]}),d.jsxs("section",{children:[d.jsx("h3",{className:"text-lg font-black mb-4 text-gray-900 pb-2 border-b border-gray-100",children:"制作步骤"}),d.jsx("div",{className:"space-y-6",children:t.steps.map((v,_)=>d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("span",{className:"text-emerald-600 font-black text-lg font-serif italic",children:[_+1,"."]}),d.jsx("p",{className:"text-gray-800 leading-relaxed font-medium text-sm pt-1",children:v})]},_))})]})]}),d.jsx("div",{className:"fixed bottom-6 left-0 right-0 px-6 z-[90]",children:d.jsx("div",{className:"max-w-2xl mx-auto",children:o?d.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] border border-gray-100 space-y-3 animate-in slide-in-from-bottom",children:[d.jsxs("div",{className:"flex justify-between items-center px-2",children:[d.jsx("p",{className:"text-xs font-bold text-gray-400",children:"选择烹饪日期"}),d.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 p-2",children:"✕"})]}),d.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar py-1",children:A1().map(v=>d.jsxs("button",{onClick:()=>{i(t.id,v.iso),l(!1)},className:"shrink-0 w-14 h-16 bg-gray-50 hover:bg-emerald-600 hover:text-white rounded-xl flex flex-col items-center justify-center transition-all",children:[d.jsx("span",{className:"text-[10px] font-bold opacity-60 mb-0.5",children:v.label||v.weekday}),d.jsx("span",{className:"text-lg font-black",children:v.day})]},v.iso))})]}):d.jsx("button",{onClick:()=>l(!0),className:"w-full h-12 bg-emerald-900 text-white rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-2 uppercase tracking-wider active:scale-95 transition-all",children:"🍳 加入计划"})})})]})},Q_=(t=new Date)=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`},P1=({plans:t,recipes:e,inventory:n,onRemoveFromPlan:r,onArchive:s,onAddItemsToShopping:i,onDeductInventory:o,onRecipeFeedback:l,history:u})=>{const[c,p]=H.useState("plan"),m=H.useMemo(()=>Q_(),[]),[g,T]=H.useState(m),[S,A]=H.useState(new Date),M=H.useRef(null),[C,E]=H.useState(null),[N,D]=H.useState({}),[L,P]=H.useState(5),[v,_]=H.useState(5),x=H.useMemo(()=>{const y=[];for(let Q=-3;Q<=3;Q++){const ne=new Date(S);ne.setDate(S.getDate()+Q);const _e=Q_(ne),we=ne.toLocaleDateString("zh-CN",{weekday:"short"}),z=ne.getDate(),Y=t[_e]&&t[_e].length>0,j=_e===m;y.push({iso:_e,weekday:we,day:z,hasPlan:Y,isToday:j})}return y},[S,t,m]);H.useEffect(()=>{if(M.current){const y=M.current.querySelector('[data-selected="true"]');y&&y.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}},[g,S]);const I=y=>{T(y);const[Q,ne,_e]=y.split("-").map(Number),we=new Date(Q,ne-1,_e);A(we)},k=H.useMemo(()=>{const y=t[g]||[];return e.filter(Q=>y.includes(Q.id))},[t,g,e]),b=H.useMemo(()=>{const y={};return k.forEach(Q=>{(Q.ingredients||[]).forEach(ne=>{var _e;y[ne.name]={amount:(((_e=y[ne.name])==null?void 0:_e.amount)||0)+ne.amount,unit:ne.unit}})}),Object.entries(y).map(([Q,ne])=>{const _e=n.find(z=>z.name===Q),we=_e?_e.amount:0;return{name:Q,required:ne.amount,has:we,unit:ne.unit,isShort:ne.amount>we}})},[k,n]);return d.jsxs("div",{className:"p-5 lg:p-10 pb-[35rem] space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto",children:[C&&d.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/60 backdrop-blur-2xl flex items-center justify-center p-6",children:d.jsxs("div",{className:"bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300",children:[d.jsx("h3",{className:"text-xl font-black text-gray-900 mb-6 flex items-center gap-2",children:d.jsxs("span",{children:["复盘: ",C.title]})}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("section",{className:"space-y-4",children:[d.jsx("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1",children:"确认食材消耗"}),d.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto no-scrollbar",children:C.ingredients.map(y=>d.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100",children:[d.jsx("span",{className:"font-bold text-gray-700 text-sm truncate mr-4",children:y.name}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("button",{onClick:()=>D(Q=>({...Q,[y.name]:Math.max(0,Q[y.name]-.5)})),className:"w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100",children:"-"}),d.jsx("span",{className:"w-10 text-center font-black text-sm text-emerald-600",children:N[y.name]}),d.jsx("button",{onClick:()=>D(Q=>({...Q,[y.name]:Q[y.name]+.5})),className:"w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100",children:"+"})]})]},y.name))})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"p-4 bg-amber-50 rounded-2xl border border-amber-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("label",{className:"text-[10px] font-black text-amber-600 uppercase",children:"美味"}),d.jsxs("span",{className:"text-sm font-black text-amber-500",children:[L,".0"]})]}),d.jsx("div",{className:"flex justify-between",children:[1,2,3,4,5].map(y=>d.jsx("button",{onClick:()=>P(y),className:`text-xl transition-all ${L>=y?"grayscale-0 scale-110":"grayscale opacity-20"}`,children:"⭐"},y))})]}),d.jsxs("div",{className:"p-4 bg-orange-50 rounded-2xl border border-orange-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("label",{className:"text-[10px] font-black text-orange-600 uppercase",children:"下饭"}),d.jsxs("span",{className:"text-sm font-black text-orange-500",children:[v,".0"]})]}),d.jsx("div",{className:"flex justify-between",children:[1,2,3,4,5].map(y=>d.jsx("button",{onClick:()=>_(y),className:`text-xl transition-all ${v>=y?"grayscale-0 scale-110":"grayscale opacity-20"}`,children:"🍚"},y))})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8",children:[d.jsx("button",{onClick:()=>E(null),className:"py-4 bg-gray-100 text-gray-500 rounded-xl font-bold text-xs",children:"取消"}),d.jsx("button",{onClick:()=>{o(Object.entries(N).map(([y,Q])=>({name:y,amount:Q}))),l(C.id,L,v),r(C.id,g),k.length===1&&s(g),E(null)},className:"py-4 bg-gray-900 text-white rounded-xl font-bold text-xs shadow-lg",children:"完成复盘"})]})]})}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 italic",children:"烹饪计划"}),d.jsxs("div",{className:"flex bg-gray-100 p-1 rounded-xl",children:[d.jsx("button",{onClick:()=>p("plan"),className:`px-5 py-2 rounded-lg text-xs font-bold transition-all ${c==="plan"?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:"当前"}),d.jsx("button",{onClick:()=>p("history"),className:`px-5 py-2 rounded-lg text-xs font-bold transition-all ${c==="history"?"bg-white text-gray-900 shadow-sm":"text-gray-400"}`,children:"历史"})]})]}),c==="plan"?d.jsxs("div",{className:"space-y-8",children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex justify-between items-center px-2",children:[d.jsx("button",{onClick:()=>{A(new Date),T(m)},className:"text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg",children:"回到今天"}),d.jsxs("div",{className:"flex gap-4 text-[10px] font-bold text-gray-400",children:[d.jsx("button",{onClick:()=>{const y=new Date(S);y.setDate(y.getDate()-7),A(y)},children:"← 上周"}),d.jsx("button",{onClick:()=>{const y=new Date(S);y.setDate(y.getDate()+7),A(y)},children:"下周 →"})]})]}),d.jsx("div",{ref:M,className:"bg-white p-2 rounded-2xl border border-gray-100 flex justify-between overflow-x-auto no-scrollbar snap-x",children:x.map(y=>d.jsxs("button",{"data-selected":g===y.iso,onClick:()=>I(y.iso),className:`snap-center flex-shrink-0 w-12 h-16 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${g===y.iso?"bg-gray-900 text-white shadow-lg scale-105":y.isToday?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-50"}`,children:[d.jsx("span",{className:"text-[9px] font-bold uppercase",children:y.weekday}),d.jsx("span",{className:"text-lg font-black",children:y.day}),y.hasPlan&&d.jsx("div",{className:`w-1 h-1 rounded-full ${g===y.iso?"bg-emerald-400":"bg-emerald-500"}`})]},y.iso))})]}),d.jsxs("section",{children:[d.jsx("div",{className:"flex items-baseline gap-3 mb-4",children:d.jsxs("h3",{className:"text-lg font-black text-gray-900",children:[g," 菜单"]})}),k.length===0?d.jsx("div",{className:"bg-white py-12 rounded-2xl border-2 border-dashed border-gray-100 text-center",children:d.jsx("p",{className:"text-xs font-bold text-gray-400",children:"暂无安排"})}):d.jsx("div",{className:"space-y-3",children:k.map(y=>{var Q;return d.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4",children:[d.jsx("img",{src:(Q=y.images)==null?void 0:Q[0],className:"w-16 h-16 rounded-xl object-cover",alt:""}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("h4",{className:"font-bold text-gray-900 text-base truncate",children:y.title}),d.jsxs("p",{className:"text-[10px] font-bold text-gray-400 mt-1",children:[y.prepTime+y.cookTime," 分钟"]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>{const ne={};y.ingredients.forEach(_e=>ne[_e.name]=_e.amount),D(ne),E(y)},className:"w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg hover:bg-emerald-600 hover:text-white transition-all",children:"✓"}),d.jsx("button",{onClick:()=>r(y.id,g),className:"w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center text-lg hover:bg-red-50 hover:text-red-500 transition-all",children:"✕"})]})]},y.id)})})]}),k.length>0&&b.some(y=>y.isShort)&&d.jsxs("section",{className:"bg-white rounded-2xl p-6 border border-gray-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-sm font-black text-gray-900",children:"缺少食材"}),d.jsx("button",{onClick:()=>{const y=b.filter(Q=>Q.isShort).map(Q=>({name:Q.name,amount:`${Math.round((Q.required-Q.has)*10)/10}${Q.unit}`}));i(y),alert(`已添加 ${y.length} 项到清单`)},className:"text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg",children:"一键加入清单"})]}),d.jsx("div",{className:"space-y-2",children:b.filter(y=>y.isShort).map(y=>d.jsxs("div",{className:"flex justify-between items-center text-sm",children:[d.jsx("span",{className:"font-bold text-gray-700",children:y.name}),d.jsxs("span",{className:"text-red-500 font-bold text-xs",children:["缺 ",Math.round((y.required-y.has)*10)/10,y.unit]})]},y.name))})]})]}):d.jsx("div",{className:"space-y-4",children:u.length===0?d.jsx("div",{className:"text-center py-20 text-gray-300 text-xs font-bold",children:"暂无历史记录"}):u.slice().reverse().map((y,Q)=>d.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-gray-100 shadow-sm",children:[d.jsx("p",{className:"text-xs font-black text-indigo-500 mb-3",children:y.date}),d.jsx("div",{className:"flex flex-wrap gap-2",children:y.recipeTitles.map((ne,_e)=>d.jsx("span",{className:"text-xs font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100",children:ne},_e))})]},Q))})]})};var Y_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw Vi(e)},Vi=function(t){return new Error("Firebase Database ("+Yw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},D1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(g=64)),r.push(n[p],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):D1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new O1;const g=i<<2|l>>4;if(r.push(g),c!==64){const T=l<<4&240|c>>2;if(r.push(T),m!==64){const S=c<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class O1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jw=function(t){const e=Xw(t);return Rp.encodeByteArray(e,!0)},bu=function(t){return Jw(t).replace(/\./g,"")},Ru=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){return Zw(void 0,t)}function Zw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!L1(n)||(t[n]=Zw(t[n],e[n]));return t}function L1(t){return t!=="__proto__"}/**
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
 */function j1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V1=()=>j1().__FIREBASE_DEFAULTS__,F1=()=>{if(typeof process>"u"||typeof Y_>"u")return;const t=Y_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},U1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ru(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return V1()||F1()||U1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ex=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tx=t=>{const e=ex(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nx=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config},rx=t=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bu(JSON.stringify(n)),bu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function B1(){var t;const e=(t=Tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function z1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ix(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H1(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function W1(){return Yw.NODE_ADMIN===!0}function G1(){return!B1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function q1(){try{return typeof indexedDB=="object"}catch{return!1}}function K1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="FirebaseError";class rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Q1,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Y1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new rr(s,l,r)}}function Y1(t,e){return t.replace(X1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const X1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=da(Ru(i[0])||""),n=da(Ru(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},J1=function(t){const e=ox(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Z1=function(t){const e=ox(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Du(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(X_(i)&&X_(o)){if(!Du(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function X_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let m=0;m<16;m++)r[m]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let m=16;m<80;m++){const g=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,p;for(let m=0;m<80;m++){m<40?m<20?(c=l^i&(o^l),p=1518500249):(c=i^o^l,p=1859775393):m<60?(c=i&o|l&(i|o),p=2400959708):(c=i^o^l,p=3395469782);const g=(s<<5|s>>>27)+c+u+p+r[m]&4294967295;u=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function tk(t,e){const n=new nk(t,e);return n.subscribe.bind(n)}class nk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gh),s.error===void 0&&(s.error=Gh),s.complete===void 0&&(s.complete=Gh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gh(){}function Cc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class ik{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new La;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ak(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ok(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ok(t){return t===ss?void 0:t}function ak(t){return t.instantiationMode==="EAGER"}/**
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
 */class lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ik(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const uk={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},ck=ce.INFO,hk={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},dk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=ck,this._logHandler=dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const fk=(t,e)=>e.some(n=>t instanceof n);let J_,Z_;function pk(){return J_||(J_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mk(){return Z_||(Z_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ax=new WeakMap,rf=new WeakMap,lx=new WeakMap,qh=new WeakMap,Dp=new WeakMap;function gk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ax.set(n,t)}).catch(()=>{}),Dp.set(e,t),e}function _k(t){if(rf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});rf.set(t,e)}let sf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yk(t){sf=t(sf)}function vk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kh(this),e,...n);return lx.set(r,e.sort?e.sort():[e]),Pr(r)}:mk().includes(t)?function(...e){return t.apply(Kh(this),e),Pr(ax.get(this))}:function(...e){return Pr(t.apply(Kh(this),e))}}function wk(t){return typeof t=="function"?vk(t):(t instanceof IDBTransaction&&_k(t),fk(t,pk())?new Proxy(t,sf):t)}function Pr(t){if(t instanceof IDBRequest)return gk(t);if(qh.has(t))return qh.get(t);const e=wk(t);return e!==t&&(qh.set(t,e),Dp.set(e,t)),e}const Kh=t=>Dp.get(t);function xk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ek=["get","getKey","getAll","getAllKeys","count"],Ik=["put","add","delete","clear"],Qh=new Map;function ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ik.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ek.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Qh.set(e,i),i}yk(t=>({...t,get:(e,n,r)=>ey(e,n)||t.get(e,n,r),has:(e,n)=>!!ey(e,n)||t.has(e,n)}));/**
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
 */class Tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ck(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ck(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const of="@firebase/app",ty="0.10.13";/**
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
 */const Jn=new kc("@firebase/app"),Sk="@firebase/app-compat",kk="@firebase/analytics-compat",Nk="@firebase/analytics",Ak="@firebase/app-check-compat",bk="@firebase/app-check",Rk="@firebase/auth",Pk="@firebase/auth-compat",Dk="@firebase/database",Ok="@firebase/data-connect",Mk="@firebase/database-compat",Lk="@firebase/functions",jk="@firebase/functions-compat",Vk="@firebase/installations",Fk="@firebase/installations-compat",Uk="@firebase/messaging",Bk="@firebase/messaging-compat",zk="@firebase/performance",$k="@firebase/performance-compat",Hk="@firebase/remote-config",Wk="@firebase/remote-config-compat",Gk="@firebase/storage",qk="@firebase/storage-compat",Kk="@firebase/firestore",Qk="@firebase/vertexai-preview",Yk="@firebase/firestore-compat",Xk="firebase",Jk="10.14.1";/**
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
 */const af="[DEFAULT]",Zk={[of]:"fire-core",[Sk]:"fire-core-compat",[Nk]:"fire-analytics",[kk]:"fire-analytics-compat",[bk]:"fire-app-check",[Ak]:"fire-app-check-compat",[Rk]:"fire-auth",[Pk]:"fire-auth-compat",[Dk]:"fire-rtdb",[Ok]:"fire-data-connect",[Mk]:"fire-rtdb-compat",[Lk]:"fire-fn",[jk]:"fire-fn-compat",[Vk]:"fire-iid",[Fk]:"fire-iid-compat",[Uk]:"fire-fcm",[Bk]:"fire-fcm-compat",[zk]:"fire-perf",[$k]:"fire-perf-compat",[Hk]:"fire-rc",[Wk]:"fire-rc-compat",[Gk]:"fire-gcs",[qk]:"fire-gcs-compat",[Kk]:"fire-fst",[Yk]:"fire-fst-compat",[Qk]:"fire-vertex","fire-js":"fire-js",[Xk]:"fire-js-all"};/**
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
 */const fa=new Map,eN=new Map,lf=new Map;function ny(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(lf.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;lf.set(e,t);for(const n of fa.values())ny(n,t);for(const n of eN.values())ny(n,t);return!0}function Nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fn(t){return t.settings!==void 0}/**
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
 */const tN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new ja("app","Firebase",tN);/**
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
 */class nN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=Jk;function ux(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:af,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dr.create("bad-app-name",{appName:String(s)});if(n||(n=nx()),!n)throw Dr.create("no-options");const i=fa.get(s);if(i){if(Du(n,i.options)&&Du(r,i.config))return i;throw Dr.create("duplicate-app",{appName:s})}const o=new lk(s);for(const u of lf.values())o.addComponent(u);const l=new nN(n,r,o);return fa.set(s,l),l}function Ac(t=af){const e=fa.get(t);if(!e&&t===af&&nx())return ux();if(!e)throw Dr.create("no-app",{appName:t});return e}function rN(){return Array.from(fa.values())}function Sn(t,e,n){var r;let s=(r=Zk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(l.join(" "));return}ws(new Fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sN="firebase-heartbeat-database",iN=1,pa="firebase-heartbeat-store";let Yh=null;function cx(){return Yh||(Yh=xk(sN,iN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),Yh}async function oN(t){try{const n=(await cx()).transaction(pa),r=await n.objectStore(pa).get(hx(t));return await n.done,r}catch(e){if(e instanceof rr)Jn.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function ry(t,e){try{const r=(await cx()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,hx(t)),await r.done}catch(n){if(n instanceof rr)Jn.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function hx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aN=1024,lN=30*24*60*60*1e3;class uN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=lN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sy(),{heartbeatsToSend:r,unsentEntries:s}=cN(this._heartbeatsCache.heartbeats),i=bu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jn.warn(n),""}}}function sy(){return new Date().toISOString().substring(0,10)}function cN(t,e=aN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),iy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q1()?K1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function iy(t){return bu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dN(t){ws(new Fr("platform-logger",e=>new Tk(e),"PRIVATE")),ws(new Fr("heartbeat",e=>new uN(e),"PRIVATE")),Sn(of,ty,t),Sn(of,ty,"esm2017"),Sn("fire-js","")}dN("");var fN="firebase",pN="10.14.1";/**
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
 */Sn(fN,pN,"app");var oy={};const ay="@firebase/database",ly="1.0.8";/**
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
 */let dx="";function mN(t){dx=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:da(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gN(e)}}catch{}return new _N},us=fx("localStorage"),yN=fx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new kc("@firebase/database"),vN=function(){let t=1;return function(){return t++}}(),px=function(t){const e=sk(t),n=new ek;n.update(e);const r=n.digest();return Rp.encodeByteArray(r)},Va=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Va.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Fo=null,uy=!0;const wN=function(t,e){B(!0,"Can't turn on custom loggers persistently."),ui.logLevel=ce.VERBOSE,Fo=ui.log.bind(ui)},at=function(...t){if(uy===!0&&(uy=!1,Fo===null&&yN.get("logging_enabled")===!0&&wN()),Fo){const e=Va.apply(null,t);Fo(e)}},Fa=function(t){return function(...e){at(t,...e)}},uf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Va(...t);ui.error(e)},Zn=function(...t){const e=`FIREBASE FATAL ERROR: ${Va(...t)}`;throw ui.error(e),new Error(e)},At=function(...t){const e="FIREBASE WARNING: "+Va(...t);ui.warn(e)},xN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&At("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Op=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ii="[MIN_NAME]",xs="[MAX_NAME]",Rs=function(t,e){if(t===e)return 0;if(t===Ii||e===xs)return-1;if(e===Ii||t===xs)return 1;{const n=cy(t),r=cy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IN=function(t,e){return t===e?0:t<e?-1:1},_o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},Mp=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=Mp(t[e[r]]);return n+="}",n},mx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gx=function(t){B(!Op(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const p=c.join("");let m="";for(u=0;u<64;u+=8){let g=parseInt(p.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),m=m+g}return m.toLowerCase()},TN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function SN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kN=new RegExp("^-?(0*)\\d{1,10}$"),NN=-2147483648,AN=2147483647,cy=function(t){if(kN.test(t)){const e=Number(t);if(e>=NN&&e<=AN)return e}return null},Ui=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw At("Exception was thrown by user callback.",n),e},Math.floor(0))}},bN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Uo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',At(e)}}class Xl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="5",_x="v",yx="s",vx="r",wx="f",xx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ex="ls",Ix="p",cf="ac",Tx="websocket",Cx="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,r,s,i=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=us.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&us.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kx(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===Tx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DN(t)&&(n.ns=t.namespace);const s=[];return ht(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.counters_={}}incrementCounter(e,n=1){Rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return M1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh={},Jh={};function jp(t){const e=t.toString();return Xh[e]||(Xh[e]=new ON),Xh[e]}function MN(t,e){const n=t.toString();return Jh[n]||(Jh[n]=e()),Jh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ui(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="start",jN="close",VN="pLPCommand",FN="pRTLPCB",Nx="id",Ax="pw",bx="ser",UN="cb",BN="seg",zN="ts",$N="d",HN="dframe",Rx=1870,Px=30,WN=Rx-Px,GN=25e3,qN=3e4;class ti{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fa(e),this.stats_=jp(n),this.urlFn=u=>(this.appCheckToken&&(u[cf]=this.appCheckToken),kx(n,Cx,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qN)),EN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vp((...i)=>{const[o,l,u,c,p]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hy)this.id=l,this.password=u;else if(o===jN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[hy]="t",r[bx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[UN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_x]=Lp,this.transportSessionId&&(r[yx]=this.transportSessionId),this.lastSessionId&&(r[Ex]=this.lastSessionId),this.applicationId&&(r[Ix]=this.applicationId),this.appCheckToken&&(r[cf]=this.appCheckToken),typeof location<"u"&&location.hostname&&xx.test(location.hostname)&&(r[vx]=wx);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TN()&&!CN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Jw(n),s=mx(r,WN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[HN]="t",r[Nx]=e,r[Ax]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vN(),window[VN+this.uniqueCallbackIdentifier]=e,window[FN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){at("frame writing exception"),l.stack&&at(l.stack),at(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||at("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nx]=this.myID,e[Ax]=this.myPW,e[bx]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Px+r.length<=Rx;){const o=this.pendingSegs.shift();r=r+"&"+BN+s+"="+o.seg+"&"+zN+s+"="+o.ts+"&"+$N+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(GN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{at("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=16384,QN=45e3;let Ou=null;typeof MozWebSocket<"u"?Ou=MozWebSocket:typeof WebSocket<"u"&&(Ou=WebSocket);class dn{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fa(this.connId),this.stats_=jp(n),this.connURL=dn.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[_x]=Lp,typeof location<"u"&&location.hostname&&xx.test(location.hostname)&&(o[vx]=wx),n&&(o[yx]=n),r&&(o[Ex]=r),s&&(o[cf]=s),i&&(o[Ix]=i),kx(e,Tx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,us.set("previous_websocket_failure",!0);try{let r;W1(),this.mySock=new Ou(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ou!==null&&!dn.forceDisallow_}static previouslyFailed(){return us.isInMemoryStorage||us.get("previous_websocket_failure")===!0}markConnectionHealthy(){us.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=da(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mx(n,KN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ti,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||At("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const s=this.transports_=[];for(const i of ma.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ma.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ma.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=6e4,XN=5e3,JN=10*1024,ZN=100*1024,Zh="t",dy="d",eA="s",fy="r",tA="e",py="o",my="a",gy="n",_y="p",nA="h";class rA{constructor(e,n,r,s,i,o,l,u,c,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fa("c:"+this.id+":"),this.transportManager_=new ma(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Uo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>JN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zh in e){const n=e[Zh];n===my?this.upgradeIfSecondaryHealthy_():n===fy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===py&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_o("t",e),r=_o("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_y,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:my,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_o("t",e),r=_o("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_o(Zh,e);if(dy in e){const r=e[dy];if(n===nA){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===gy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eA?this.onConnectionShutdown_(r):n===fy?this.onReset_(r):n===tA?uf("Server Error: "+r):n===py?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lp!==r&&At("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Uo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(YN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Uo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_y,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(us.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Ox{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mu}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=32,vy=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new ve("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ur(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Fp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ga(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ve(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function kt(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return kt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iA(t,e){const n=ga(t,0),r=ga(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Rs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Up(t,e){if(Ur(t)!==Ur(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ur(t)>Ur(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oA{constructor(e,n){this.errorPrefix_=n,this.parts_=ga(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sc(this.parts_[r]);Lx(this)}}function aA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sc(e),Lx(t)}function lA(t){const e=t.parts_.pop();t.byteLength_-=Sc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lx(t){if(t.byteLength_>vy)throw new Error(t.errorPrefix_+"has a key path longer than "+vy+" bytes ("+t.byteLength_+").");if(t.parts_.length>yy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yy+") or object contains a cycle "+is(t))}function is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends Ox{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Bp}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1e3,uA=60*5*1e3,wy=30*1e3,cA=1.3,hA=3e4,dA="server_kill",xy=3;class Wn extends Dx{constructor(e,n,r,s,i,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Wn.nextPersistentConnectionId_++,this.log_=Fa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=uA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ke(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new La,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const u=l.d,c=l.s;Wn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rn(e,"w")){const r=Ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();At(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Z1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=J1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uf("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hA&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Wn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(m){B(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(m)};this.realtime_={close:u,sendRequest:c};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,g]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=g&&g.token,l=new rA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,T=>{At(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(dA)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&At(m),u())}}}interrupt(e){at("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){at("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nf(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Mp(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){at("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xy&&(this.reconnectDelay_=wy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){at("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dx.replace(/\./g,"-")]=1,Pp()?e["framework.cordova"]=1:ix()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mu.getInstance().currentlyOnline();return nf(this.interruptReasons_)&&e}}Wn.nextPersistentConnectionId_=0;Wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(Ii,e),s=new le(Ii,n);return this.compare(r,s)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;class jx extends bc{static get __EMPTY_NODE(){return bl}static set __EMPTY_NODE(e){bl=e}compare(e,n){return Rs(e.name,n.name)}isDefinedOn(e){throw Vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(xs,bl)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,bl)}toString(){return".key"}}const ci=new jx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},$t=class No{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??No.RED,this.left=s??In.EMPTY_NODE,this.right=i??In.EMPTY_NODE}copy(e,n,r,s,i){return new No(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return In.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,No.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,No.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};$t.RED=!0;$t.BLACK=!1;class fA{copy(e,n,r,s,i){return this}insert(e,n,r){return new $t(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let In=class Jl{constructor(e,n=Jl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Jl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Jl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rl(this.root_,null,this.comparator_,!0,e)}};In.EMPTY_NODE=new fA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e){return Rs(t.name,e.name)}function zp(t,e){return Rs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf;function mA(t){hf=t}const Vx=function(t){return typeof t=="number"?"number:"+gx(t):"string:"+t},Fx=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rn(e,".sv"),"Priority must be a string or number.")}else B(t===hf||t.isEmpty(),"priority of unexpected type.");B(t===hf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ey;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fx(this.priorityNode_)}static set __childrenNodeConstructor(e){Ey=e}static get __childrenNodeConstructor(){return Ey}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ae(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||Ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gx(this.value_):e+=this.value_,this.lazyHash_=px(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Xe.VALUE_TYPE_ORDER.indexOf(n),i=Xe.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ux,Bx;function gA(t){Ux=t}function _A(t){Bx=t}class yA extends bc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Rs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(xs,new Xe("[PRIORITY-POST]",Bx))}makePost(e,n){const r=Ux(e);return new le(n,new Xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new yA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=Math.log(2);class wA{constructor(e){const n=i=>parseInt(Math.log(i)/vA,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lu=function(t,e,n,r){t.sort(e);const s=function(u,c){const p=c-u;let m,g;if(p===0)return null;if(p===1)return m=t[u],g=n?n(m):m,new $t(g,m.node,$t.BLACK,null,null);{const T=parseInt(p/2,10)+u,S=s(u,T),A=s(T+1,c);return m=t[T],g=n?n(m):m,new $t(g,m.node,$t.BLACK,S,A)}},i=function(u){let c=null,p=null,m=t.length;const g=function(S,A){const M=m-S,C=m;m-=S;const E=s(M+1,C),N=t[M],D=n?n(N):N;T(new $t(D,N.node,A,null,E))},T=function(S){c?(c.left=S,c=S):(p=S,c=S)};for(let S=0;S<u.count;++S){const A=u.nextBitIsOne(),M=Math.pow(2,u.count-(S+1));A?g(M,$t.BLACK):(g(M,$t.BLACK),g(M,$t.RED))}return p},o=new wA(t.length),l=i(o);return new In(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed;const Bs={};class Un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Bs&&Fe,"ChildrenNode.ts has not been loaded"),ed=ed||new Un({".priority":Bs},{".priority":Fe}),ed}get(e){const n=Ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof In?n:null}hasIndex(e){return Rn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(le.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=Lu(r,e.getCompare()):l=Bs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const p=Object.assign({},this.indexes_);return p[u]=l,new Un(p,c)}addToIndexes(e,n){const r=Pu(this.indexes_,(s,i)=>{const o=Ei(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===Bs)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(le.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),Lu(l,o.getCompare())}else return Bs;else{const l=n.get(e.name);let u=s;return l&&(u=u.remove(new le(e.name,l))),u.insert(e,e.node)}});return new Un(r,this.indexSet_)}removeFromIndexes(e,n){const r=Pu(this.indexes_,s=>{if(s===Bs)return s;{const i=n.get(e.name);return i?s.remove(new le(e.name,i)):s}});return new Un(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Fx(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vo||(vo=new ee(new In(zp),null,Un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vo}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vo:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?vo:this.priorityNode_;return new ee(s,o,i)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{B(ae(e)!==".priority"||Ur(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Te(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Fe,(o,l)=>{n[o]=l.val(e),r++,i&&ee.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vx(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":px(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new le(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ua?-1:0}withIndex(e){if(e===ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),s=n.getIterator(Fe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ci?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xA extends ee{constructor(){super(new In(zp),ee.EMPTY_NODE,Un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Ua=new xA;Object.defineProperties(le,{MIN:{value:new le(Ii,ee.EMPTY_NODE)},MAX:{value:new le(xs,Ua)}});jx.__EMPTY_NODE=ee.EMPTY_NODE;Xe.__childrenNodeConstructor=ee;mA(Ua);_A(Ua);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=!0;function qe(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,qe(e))}if(!(t instanceof Array)&&EA){const n=[];let r=!1;if(ht(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=qe(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new le(o,u)))}}),n.length===0)return ee.EMPTY_NODE;const i=Lu(n,pA,o=>o.name,zp);if(r){const o=Lu(n,Fe.getCompare());return new ee(i,qe(e),new Un({".priority":o},{".priority":Fe}))}else return new ee(i,qe(e),Un.Default)}else{let n=ee.EMPTY_NODE;return ht(t,(r,s)=>{if(Rn(t,r)&&r.substring(0,1)!=="."){const i=qe(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(qe(e))}}gA(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA extends bc{constructor(e){super(),this.indexPath_=e,B(!ue(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Rs(e.name,n.name):i}makePost(e,n){const r=qe(e),s=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,s)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Ua);return new le(xs,e)}toString(){return ga(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA extends bc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Rs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=qe(e);return new le(n,r)}toString(){return".value"}}const CA=new TA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t){return{type:"value",snapshotNode:t}}function Ti(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _a(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ya(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_a(n,l)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ti(n,r)):o.trackChildChange(ya(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Fe,(s,i)=>{n.hasChild(s)||r.trackChildChange(_a(s,i))}),n.isLeafNode()||n.forEachChild(Fe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(ya(s,i,o))}else r.trackChildChange(Ti(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.indexedFilter_=new $p(e.getIndex()),this.index_=e.getIndex(),this.startPost_=va.getStartPost_(e),this.endPost_=va.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new le(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(ee.EMPTY_NODE);const i=this;return n.forEachChild(Fe,(o,l)=>{i.matches(new le(o,l))||(s=s.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new va(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new le(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=ee.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(ee.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const m=this.index_.getCompare();o=(g,T)=>m(T,g)}else o=this.index_.getCompare();const l=e;B(l.numChildren()===this.limit_,"");const u=new le(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),p=this.rangedFilter_.matches(u);if(l.hasChild(n)){const m=l.getImmediateChild(n);let g=s.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const T=g==null?1:o(g,u);if(p&&!r.isEmpty()&&T>=0)return i!=null&&i.trackChildChange(ya(n,r,m)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(_a(n,m));const A=l.updateImmediateChild(n,ee.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(i!=null&&i.trackChildChange(Ti(g.name,g.node)),A.updateImmediateChild(g.name,g.node)):A}}else return r.isEmpty()?e:p&&o(c,u)>=0?(i!=null&&(i.trackChildChange(_a(c.name,c.node)),i.trackChildChange(Ti(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new Hp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function NA(t){return t.loadsAllData()?new $p(t.getIndex()):t.hasLimit()?new kA(t):new va(t)}function AA(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Iy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===CA?n="$value":t.index_===ci?n="$key":(B(t.index_ instanceof IA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ty(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Dx{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Fa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ju.getListenId_(e,r),l={};this.listens_[o]=l;const u=Iy(e._queryParams);this.restRequest_(i+".json",u,(c,p)=>{let m=p;if(c===404&&(m=null,c=null),c===null&&this.onDataUpdate_(i,m,!1,r),Ei(this.listens_,o)===l){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",s(g,null)}})}unlisten(e,n){const r=ju.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Iy(e._queryParams),r=e._path.toString(),s=new La;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=da(l.responseText)}catch{At("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&At("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){return{value:null,children:new Map}}function $x(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,Vu());const s=t.children.get(r);e=Te(e),$x(s,e,n)}}function df(t,e,n){t.value!==null?n(e,t.value):RA(t,(r,s)=>{const i=new ve(e.toString()+"/"+r);df(s,i,n)})}function RA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=10*1e3,DA=30*1e3,OA=5*60*1e3;class MA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PA(e);const r=Cy+(DA-Cy)*Math.random();Uo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ht(e,(s,i)=>{i>0&&Rn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Uo(this.reportStats_.bind(this),Math.floor(Math.random()*2*OA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function Wp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wa{constructor(e,n){this.source=e,this.path=n,this.type=pn.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new wa(this.source,ge()):new wa(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ci{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Es(this.source,ge(),n.value):new Ci(this.source,ge(),n)}else return B(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ci(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jA(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(SA(o.childName,o.snapshotNode))}),wo(t,s,"child_removed",e,r,n),wo(t,s,"child_added",e,r,n),wo(t,s,"child_moved",i,r,n),wo(t,s,"child_changed",e,r,n),wo(t,s,"value",e,r,n),s}function wo(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,u)=>FA(t,l,u)),o.forEach(l=>{const u=VA(t,l,i);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function VA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FA(t,e,n){if(e.childName==null||n.childName==null)throw Vi("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),s=new le(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t,e){return{eventCache:t,serverCache:e}}function Bo(t,e,n,r){return Rc(new Br(e,n,r),t.serverCache)}function Hx(t,e,n,r){return Rc(t.eventCache,new Br(e,n,r))}function Uu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td;const UA=()=>(td||(td=new In(IN)),td);class Ie{constructor(e,n=UA()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return ht(e,(r,s)=>{n=n.set(new ve(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ue(e))return null;{const r=ae(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Te(e),n);return i!=null?{path:Ve(new ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Te(e)):new Ie(null)}}set(e,n){if(ue(e))return new Ie(n,this.children);{const r=ae(e),i=(this.children.get(r)||new Ie(null)).set(Te(e),n),o=this.children.insert(r,i);return new Ie(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const s=r.remove(Te(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ie(null):new Ie(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Te(e)):null}}setTree(e,n){if(ue(e))return n;{const r=ae(e),i=(this.children.get(r)||new Ie(null)).setTree(Te(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ie(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ve(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ue(e))return null;{const i=ae(e),o=this.children.get(i);return o?o.findOnPath_(Te(e),Ve(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const s=ae(e),i=this.children.get(s);return i?i.foreachOnPath_(Te(e),Ve(n,s),r):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new Ie(null))}}function zo(t,e,n){if(ue(e))return new yn(new Ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=kt(s,e);return i=i.updateChild(o,n),new yn(t.writeTree_.set(s,i))}else{const s=new Ie(n),i=t.writeTree_.setTree(e,s);return new yn(i)}}}function ff(t,e,n){let r=t;return ht(n,(s,i)=>{r=zo(r,Ve(e,s),i)}),r}function Sy(t,e){if(ue(e))return yn.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new yn(n)}}function pf(t,e){return Ps(t,e)!=null}function Ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kt(n.path,e)):null}function ky(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,s)=>{e.push(new le(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new le(r,s.value))}),e}function Or(t,e){if(ue(e))return t;{const n=Ps(t,e);return n!=null?new yn(new Ie(n)):new yn(t.writeTree_.subtree(e))}}function mf(t){return t.writeTree_.isEmpty()}function Si(t,e){return Wx(ge(),t.writeTree_,e)}function Wx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Wx(Ve(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e){return Qx(e,t)}function BA(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=zo(t.visibleWrites,e,n)),t.lastWriteId=r}function zA(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ff(t.visibleWrites,e,n),t.lastWriteId=r}function $A(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HA(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&WA(l,r.path)?s=!1:Jt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return GA(t),!0;if(r.snap)t.visibleWrites=Sy(t.visibleWrites,r.path);else{const l=r.children;ht(l,u=>{t.visibleWrites=Sy(t.visibleWrites,Ve(r.path,u))})}return!0}else return!1}function WA(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(Ve(t.path,n),e))return!0;return!1}function GA(t){t.visibleWrites=Gx(t.allWrites,qA,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qA(t){return t.visible}function Gx(t,e,n){let r=yn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Jt(n,o)?(l=kt(n,o),r=zo(r,l,i.snap)):Jt(o,n)&&(l=kt(o,n),r=zo(r,ge(),i.snap.getChild(l)));else if(i.children){if(Jt(n,o))l=kt(n,o),r=ff(r,l,i.children);else if(Jt(o,n))if(l=kt(o,n),ue(l))r=ff(r,ge(),i.children);else{const u=Ei(i.children,ae(l));if(u){const c=u.getChild(Te(l));r=zo(r,ge(),c)}}}else throw Vi("WriteRecord should have .snap or .children")}}return r}function qx(t,e,n,r,s){if(!r&&!s){const i=Ps(t.visibleWrites,e);if(i!=null)return i;{const o=Or(t.visibleWrites,e);if(mf(o))return n;if(n==null&&!pf(o,ge()))return null;{const l=n||ee.EMPTY_NODE;return Si(o,l)}}}else{const i=Or(t.visibleWrites,e);if(!s&&mf(i))return n;if(!s&&n==null&&!pf(i,ge()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(Jt(c.path,e)||Jt(e,c.path))},l=Gx(t.allWrites,o,e),u=n||ee.EMPTY_NODE;return Si(l,u)}}}function KA(t,e,n){let r=ee.EMPTY_NODE;const s=Ps(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Fe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Or(t.visibleWrites,e);return n.forEachChild(Fe,(o,l)=>{const u=Si(Or(i,new ve(o)),l);r=r.updateImmediateChild(o,u)}),ky(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Or(t.visibleWrites,e);return ky(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function QA(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ve(e,n);if(pf(t.visibleWrites,i))return null;{const o=Or(t.visibleWrites,i);return mf(o)?s.getChild(n):Si(o,s.getChild(n))}}function YA(t,e,n,r){const s=Ve(e,n),i=Ps(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Or(t.visibleWrites,s);return Si(o,r.getNode().getImmediateChild(n))}else return null}function XA(t,e){return Ps(t.visibleWrites,e)}function JA(t,e,n,r,s,i,o){let l;const u=Or(t.visibleWrites,e),c=Ps(u,ge());if(c!=null)l=c;else if(n!=null)l=Si(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const p=[],m=o.getCompare(),g=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let T=g.getNext();for(;T&&p.length<s;)m(T,r)!==0&&p.push(T),T=g.getNext();return p}else return[]}function ZA(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function Bu(t,e,n,r){return qx(t.writeTree,t.treePath,e,n,r)}function Kp(t,e){return KA(t.writeTree,t.treePath,e)}function Ny(t,e,n,r){return QA(t.writeTree,t.treePath,e,n,r)}function zu(t,e){return XA(t.writeTree,Ve(t.treePath,e))}function eb(t,e,n,r,s,i){return JA(t.writeTree,t.treePath,e,n,r,s,i)}function Qp(t,e,n){return YA(t.writeTree,t.treePath,e,n)}function Kx(t,e){return Qx(Ve(t.treePath,e),t.writeTree)}function Qx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,ya(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,_a(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Ti(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,ya(r,e.snapshotNode,s.oldSnap));else throw Vi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Yx=new nb;class Yp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Br(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Is(this.viewCache_),i=eb(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){return{filter:t}}function sb(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ib(t,e,n,r,s){const i=new tb;let o,l;if(n.type===pn.OVERWRITE){const c=n;c.source.fromUser?o=gf(t,e,c.path,c.snap,r,s,i):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=$u(t,e,c.path,c.snap,r,s,l,i))}else if(n.type===pn.MERGE){const c=n;c.source.fromUser?o=ab(t,e,c.path,c.children,r,s,i):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=_f(t,e,c.path,c.children,r,s,l,i))}else if(n.type===pn.ACK_USER_WRITE){const c=n;c.revert?o=cb(t,e,c.path,r,s,i):o=lb(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===pn.LISTEN_COMPLETE)o=ub(t,e,n.path,r,i);else throw Vi("Unknown operation type: "+n.type);const u=i.getChanges();return ob(e,o,u),{viewCache:o,changes:u}}function ob(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Uu(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(zx(Uu(e)))}}function Xx(t,e,n,r,s,i){const o=e.eventCache;if(zu(r,n)!=null)return e;{let l,u;if(ue(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Is(e),p=c instanceof ee?c:ee.EMPTY_NODE,m=Kp(r,p);l=t.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const c=Bu(r,Is(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ae(n);if(c===".priority"){B(Ur(n)===1,"Can't have a priority with additional path components");const p=o.getNode();u=e.serverCache.getNode();const m=Ny(r,n,p,u);m!=null?l=t.filter.updatePriority(p,m):l=o.getNode()}else{const p=Te(n);let m;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const g=Ny(r,n,o.getNode(),u);g!=null?m=o.getNode().getImmediateChild(c).updateChild(p,g):m=o.getNode().getImmediateChild(c)}else m=Qp(r,c,e.serverCache);m!=null?l=t.filter.updateChild(o.getNode(),c,m,p,s,i):l=o.getNode()}}return Bo(e,l,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function $u(t,e,n,r,s,i,o,l){const u=e.serverCache;let c;const p=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=p.updateFullNode(u.getNode(),r,null);else if(p.filtersNodes()&&!u.isFiltered()){const T=u.getNode().updateChild(n,r);c=p.updateFullNode(u.getNode(),T,null)}else{const T=ae(n);if(!u.isCompleteForPath(n)&&Ur(n)>1)return e;const S=Te(n),M=u.getNode().getImmediateChild(T).updateChild(S,r);T===".priority"?c=p.updatePriority(u.getNode(),M):c=p.updateChild(u.getNode(),T,M,S,Yx,null)}const m=Hx(e,c,u.isFullyInitialized()||ue(n),p.filtersNodes()),g=new Yp(s,m,i);return Xx(t,m,n,s,g,l)}function gf(t,e,n,r,s,i,o){const l=e.eventCache;let u,c;const p=new Yp(s,e,i);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Bo(e,c,!0,t.filter.filtersNodes());else{const m=ae(n);if(m===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Bo(e,c,l.isFullyInitialized(),l.isFiltered());else{const g=Te(n),T=l.getNode().getImmediateChild(m);let S;if(ue(g))S=r;else{const A=p.getCompleteChild(m);A!=null?Fp(g)===".priority"&&A.getChild(Mx(g)).isEmpty()?S=A:S=A.updateChild(g,r):S=ee.EMPTY_NODE}if(T.equals(S))u=e;else{const A=t.filter.updateChild(l.getNode(),m,S,g,p,o);u=Bo(e,A,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Ay(t,e){return t.eventCache.isCompleteForChild(e)}function ab(t,e,n,r,s,i,o){let l=e;return r.foreach((u,c)=>{const p=Ve(n,u);Ay(e,ae(p))&&(l=gf(t,l,p,c,s,i,o))}),r.foreach((u,c)=>{const p=Ve(n,u);Ay(e,ae(p))||(l=gf(t,l,p,c,s,i,o))}),l}function by(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function _f(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ue(n)?c=r:c=new Ie(null).setTree(n,r);const p=e.serverCache.getNode();return c.children.inorderTraversal((m,g)=>{if(p.hasChild(m)){const T=e.serverCache.getNode().getImmediateChild(m),S=by(t,T,g);u=$u(t,u,new ve(m),S,s,i,o,l)}}),c.children.inorderTraversal((m,g)=>{const T=!e.serverCache.isCompleteForChild(m)&&g.value===null;if(!p.hasChild(m)&&!T){const S=e.serverCache.getNode().getImmediateChild(m),A=by(t,S,g);u=$u(t,u,new ve(m),A,s,i,o,l)}}),u}function lb(t,e,n,r,s,i,o){if(zu(s,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ue(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return $u(t,e,n,u.getNode().getChild(n),s,i,l,o);if(ue(n)){let c=new Ie(null);return u.getNode().forEachChild(ci,(p,m)=>{c=c.set(new ve(p),m)}),_f(t,e,n,c,s,i,l,o)}else return e}else{let c=new Ie(null);return r.foreach((p,m)=>{const g=Ve(n,p);u.isCompleteForPath(g)&&(c=c.set(p,u.getNode().getChild(g)))}),_f(t,e,n,c,s,i,l,o)}}function ub(t,e,n,r,s){const i=e.serverCache,o=Hx(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return Xx(t,o,n,r,Yx,s)}function cb(t,e,n,r,s,i){let o;if(zu(r,n)!=null)return e;{const l=new Yp(r,e,s),u=e.eventCache.getNode();let c;if(ue(n)||ae(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=Bu(r,Is(e));else{const m=e.serverCache.getNode();B(m instanceof ee,"serverChildren would be complete if leaf node"),p=Kp(r,m)}p=p,c=t.filter.updateFullNode(u,p,i)}else{const p=ae(n);let m=Qp(r,p,e.serverCache);m==null&&e.serverCache.isCompleteForChild(p)&&(m=u.getImmediateChild(p)),m!=null?c=t.filter.updateChild(u,p,m,Te(n),l,i):e.eventCache.getNode().hasChild(p)?c=t.filter.updateChild(u,p,ee.EMPTY_NODE,Te(n),l,i):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bu(r,Is(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||zu(r,ge())!=null,Bo(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new $p(r.getIndex()),i=NA(r);this.processor_=rb(i);const o=n.serverCache,l=n.eventCache,u=s.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(ee.EMPTY_NODE,l.getNode(),null),p=new Br(u,o.isFullyInitialized(),s.filtersNodes()),m=new Br(c,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Rc(m,p),this.eventGenerator_=new LA(this.query_)}get query(){return this.query_}}function db(t){return t.viewCache_.serverCache.getNode()}function fb(t){return Uu(t.viewCache_)}function pb(t,e){const n=Is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Ry(t){return t.eventRegistrations_.length===0}function mb(t,e){t.eventRegistrations_.push(e)}function Py(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Dy(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(B(Is(t.viewCache_),"We should always have a full cache before handling merges"),B(Uu(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=ib(t.processor_,s,e,n,r);return sb(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Jx(t,i.changes,i.viewCache.eventCache.getNode(),null)}function gb(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(i,o)=>{r.push(Ti(i,o))}),n.isFullyInitialized()&&r.push(zx(n.getNode())),Jx(t,r,n.getNode(),e)}function Jx(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return jA(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu;class Zx{constructor(){this.views=new Map}}function _b(t){B(!Hu,"__referenceConstructor has already been defined"),Hu=t}function yb(){return B(Hu,"Reference.ts has not been loaded"),Hu}function vb(t){return t.views.size===0}function Xp(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),Dy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Dy(o,e,n,r));return i}}function eE(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Bu(n,s?r:null),u=!1;l?u=!0:r instanceof ee?(l=Kp(n,r),u=!1):(l=ee.EMPTY_NODE,u=!1);const c=Rc(new Br(l,u,!1),new Br(r,s,!1));return new hb(e,c)}return o}function wb(t,e,n,r,s,i){const o=eE(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mb(o,n),gb(o,n)}function xb(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=zr(t);if(s==="default")for(const[u,c]of t.views.entries())o=o.concat(Py(c,n,r)),Ry(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||i.push(c.query));else{const u=t.views.get(s);u&&(o=o.concat(Py(u,n,r)),Ry(u)&&(t.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return l&&!zr(t)&&i.push(new(yb())(e._repo,e._path)),{removed:i,events:o}}function tE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mr(t,e){let n=null;for(const r of t.views.values())n=n||pb(r,e);return n}function nE(t,e){if(e._queryParams.loadsAllData())return Dc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rE(t,e){return nE(t,e)!=null}function zr(t){return Dc(t)!=null}function Dc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;function Eb(t){B(!Wu,"__referenceConstructor has already been defined"),Wu=t}function Ib(){return B(Wu,"Reference.ts has not been loaded"),Wu}let Tb=1;class Oy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=ZA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sE(t,e,n,r,s){return BA(t.pendingWriteTree_,e,n,r,s),s?Bi(t,new Es(Wp(),e,n)):[]}function Cb(t,e,n,r){zA(t.pendingWriteTree_,e,n,r);const s=Ie.fromObject(n);return Bi(t,new Ci(Wp(),e,s))}function Ir(t,e,n=!1){const r=$A(t.pendingWriteTree_,e);if(HA(t.pendingWriteTree_,e)){let i=new Ie(null);return r.snap!=null?i=i.set(ge(),!0):ht(r.children,o=>{i=i.set(new ve(o),!0)}),Bi(t,new Fu(r.path,i,n))}else return[]}function Ba(t,e,n){return Bi(t,new Es(Gp(),e,n))}function Sb(t,e,n){const r=Ie.fromObject(n);return Bi(t,new Ci(Gp(),e,r))}function kb(t,e){return Bi(t,new wa(Gp(),e))}function Nb(t,e,n){const r=Zp(t,n);if(r){const s=em(r),i=s.path,o=s.queryId,l=kt(i,e),u=new wa(qp(o),l);return tm(t,i,u)}else return[]}function Gu(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||rE(o,e))){const u=xb(o,e,n,r);vb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=u.removed;if(l=u.events,!s){const p=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,m=t.syncPointTree_.findOnPath(i,(g,T)=>zr(T));if(p&&!m){const g=t.syncPointTree_.subtree(i);if(!g.isEmpty()){const T=Rb(g);for(let S=0;S<T.length;++S){const A=T[S],M=A.query,C=lE(t,A);t.listenProvider_.startListening($o(M),xa(t,M),C.hashFn,C.onComplete)}}}!m&&c.length>0&&!r&&(p?t.listenProvider_.stopListening($o(e),null):c.forEach(g=>{const T=t.queryToTagMap.get(Oc(g));t.listenProvider_.stopListening($o(g),T)}))}Pb(t,c)}return l}function iE(t,e,n,r){const s=Zp(t,r);if(s!=null){const i=em(s),o=i.path,l=i.queryId,u=kt(o,e),c=new Es(qp(l),u,n);return tm(t,o,c)}else return[]}function Ab(t,e,n,r){const s=Zp(t,r);if(s){const i=em(s),o=i.path,l=i.queryId,u=kt(o,e),c=Ie.fromObject(n),p=new Ci(qp(l),u,c);return tm(t,o,p)}else return[]}function yf(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(g,T)=>{const S=kt(g,s);i=i||Mr(T,S),o=o||zr(T)});let l=t.syncPointTree_.get(s);l?(o=o||zr(l),i=i||Mr(l,ge())):(l=new Zx,t.syncPointTree_=t.syncPointTree_.set(s,l));let u;i!=null?u=!0:(u=!1,i=ee.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((T,S)=>{const A=Mr(S,ge());A&&(i=i.updateImmediateChild(T,A))}));const c=rE(l,e);if(!c&&!e._queryParams.loadsAllData()){const g=Oc(e);B(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const T=Db();t.queryToTagMap.set(g,T),t.tagToQueryMap.set(T,g)}const p=Pc(t.pendingWriteTree_,s);let m=wb(l,e,n,p,i,u);if(!c&&!o&&!r){const g=nE(l,e);m=m.concat(Ob(t,e,g))}return m}function Jp(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=kt(o,e),c=Mr(l,u);if(c)return c});return qx(s,e,i,n,!0)}function bb(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,p)=>{const m=kt(c,n);r=r||Mr(p,m)});let s=t.syncPointTree_.get(n);s?r=r||Mr(s,ge()):(s=new Zx,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Br(r,!0,!1):null,l=Pc(t.pendingWriteTree_,e._path),u=eE(s,e,l,i?o.getNode():ee.EMPTY_NODE,i);return fb(u)}function Bi(t,e){return oE(e,t.syncPointTree_,null,Pc(t.pendingWriteTree_,ge()))}function oE(t,e,n,r){if(ue(t.path))return aE(t,e,n,r);{const s=e.get(ge());n==null&&s!=null&&(n=Mr(s,ge()));let i=[];const o=ae(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,p=Kx(r,o);i=i.concat(oE(l,u,c,p))}return s&&(i=i.concat(Xp(s,t,r,n))),i}}function aE(t,e,n,r){const s=e.get(ge());n==null&&s!=null&&(n=Mr(s,ge()));let i=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=Kx(r,o),p=t.operationForChild(o);p&&(i=i.concat(aE(p,l,u,c)))}),s&&(i=i.concat(Xp(s,t,r,n))),i}function lE(t,e){const n=e.query,r=xa(t,n);return{hashFn:()=>(db(e)||ee.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?Nb(t,n._path,r):kb(t,n._path);{const i=SN(s,n);return Gu(t,n,null,i)}}}}function xa(t,e){const n=Oc(e);return t.queryToTagMap.get(n)}function Oc(t){return t._path.toString()+"$"+t._queryIdentifier}function Zp(t,e){return t.tagToQueryMap.get(e)}function em(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function tm(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Pc(t.pendingWriteTree_,e);return Xp(r,n,s,null)}function Rb(t){return t.fold((e,n,r)=>{if(n&&zr(n))return[Dc(n)];{let s=[];return n&&(s=tE(n)),ht(r,(i,o)=>{s=s.concat(o)}),s}})}function $o(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ib())(t._repo,t._path):t}function Pb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Oc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function Db(){return Tb++}function Ob(t,e,n){const r=e._path,s=xa(t,e),i=lE(t,n),o=t.listenProvider_.startListening($o(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)B(!zr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((c,p,m)=>{if(!ue(c)&&p&&zr(p))return[Dc(p).query];{let g=[];return p&&(g=g.concat(tE(p).map(T=>T.query))),ht(m,(T,S)=>{g=g.concat(S)}),g}});for(let c=0;c<u.length;++c){const p=u[c];t.listenProvider_.stopListening($o(p),xa(t,p))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nm(n)}node(){return this.node_}}class rm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new rm(this.syncTree_,n)}node(){return Jp(this.syncTree_,this.path_)}}const Mb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},My=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Lb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jb(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Lb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},jb=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},uE=function(t,e,n,r){return sm(e,new rm(n,t),r)},cE=function(t,e,n){return sm(t,new nm(e),n)};function sm(t,e,n){const r=t.getPriority().val(),s=My(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=My(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Xe(l,qe(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Xe(s))),o.forEachChild(Fe,(l,u)=>{const c=sm(u,e.getImmediateChild(l),n);c!==u&&(i=i.updateImmediateChild(l,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function om(t,e){let n=e instanceof ve?e:new ve(e),r=t,s=ae(n);for(;s!==null;){const i=Ei(r.node.children,s)||{children:{},childCount:0};r=new im(s,r,i),n=Te(n),s=ae(n)}return r}function zi(t){return t.node.value}function hE(t,e){t.node.value=e,vf(t)}function dE(t){return t.node.childCount>0}function Vb(t){return zi(t)===void 0&&!dE(t)}function Mc(t,e){ht(t.node.children,(n,r)=>{e(new im(n,t,r))})}function fE(t,e,n,r){n&&e(t),Mc(t,s=>{fE(s,e,!0)})}function Fb(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function za(t){return new ve(t.parent===null?t.name:za(t.parent)+"/"+t.name)}function vf(t){t.parent!==null&&Ub(t.parent,t.name,t)}function Ub(t,e,n){const r=Vb(n),s=Rn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,vf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,vf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=/[\[\].#$\/\u0000-\u001F\u007F]/,zb=/[\[\].#$\u0000-\u001F\u007F]/,nd=10*1024*1024,am=function(t){return typeof t=="string"&&t.length!==0&&!Bb.test(t)},pE=function(t){return typeof t=="string"&&t.length!==0&&!zb.test(t)},$b=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pE(t)},Hb=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Op(t)||t&&typeof t=="object"&&Rn(t,".sv")},mE=function(t,e,n,r){r&&e===void 0||Lc(Cc(t,"value"),e,n)},Lc=function(t,e,n){const r=n instanceof ve?new oA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+is(r));if(typeof e=="function")throw new Error(t+"contains a function "+is(r)+" with contents = "+e.toString());if(Op(e))throw new Error(t+"contains "+e.toString()+" "+is(r));if(typeof e=="string"&&e.length>nd/3&&Sc(e)>nd)throw new Error(t+"contains a string greater than "+nd+" utf8 bytes "+is(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ht(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!am(o)))throw new Error(t+" contains an invalid key ("+o+") "+is(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aA(r,o),Lc(t,l,r),lA(r)}),s&&i)throw new Error(t+' contains ".value" child '+is(r)+" in addition to actual children.")}},Wb=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=ga(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!am(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iA);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Jt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},Gb=function(t,e,n,r){const s=Cc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];ht(e,(o,l)=>{const u=new ve(o);if(Lc(s,l,Ve(n,u)),Fp(u)===".priority"&&!Hb(l))throw new Error(s+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(u)}),Wb(s,i)},gE=function(t,e,n,r){if(!pE(n))throw new Error(Cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gE(t,e,n)},_E=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Kb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!am(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$b(n))throw new Error(Cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Up(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function yE(t,e,n){jc(t,n),vE(t,r=>Up(r,e))}function nn(t,e,n){jc(t,n),vE(t,r=>Jt(r,e)||Jt(e,r))}function vE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(Yb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Yb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fo&&at("event: "+n.toString()),Ui(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="repo_interrupt",Jb=25;class Zb{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vu(),this.transactionQueueTree_=new im,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eR(t,e,n){if(t.stats_=jp(t.repoInfo_),t.forceRestClient_||bN())t.server_=new ju(t.repoInfo_,(r,s,i,o)=>{Ly(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wn(t.repoInfo_,e,(r,s,i,o)=>{Ly(t,r,s,i,o)},r=>{jy(t,r)},r=>{tR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=MN(t.repoInfo_,()=>new MA(t.stats_,t.server_)),t.infoData_=new bA,t.infoSyncTree_=new Oy({startListening:(r,s,i,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=Ba(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),lm(t,"connected",!1),t.serverSyncTree_=new Oy({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,u)=>{const c=o(l,u);nn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function wE(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return Mb({timestamp:wE(t)})}function Ly(t,e,n,r,s){t.dataUpdateCount++;const i=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=Pu(n,c=>qe(c));o=Ab(t.serverSyncTree_,i,u,s)}else{const u=qe(n);o=iE(t.serverSyncTree_,i,u,s)}else if(r){const u=Pu(n,c=>qe(c));o=Sb(t.serverSyncTree_,i,u)}else{const u=qe(n);o=Ba(t.serverSyncTree_,i,u)}let l=i;o.length>0&&(l=ki(t,i)),nn(t.eventQueue_,l,o)}function jy(t,e){lm(t,"connected",e),e===!1&&iR(t)}function tR(t,e){ht(e,(n,r)=>{lm(t,n,r)})}function lm(t,e,n){const r=new ve("/.info/"+e),s=qe(n);t.infoData_.updateSnapshot(r,s);const i=Ba(t.infoSyncTree_,r,s);nn(t.eventQueue_,r,i)}function um(t){return t.nextWriteId_++}function nR(t,e,n){const r=bb(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=qe(s).withIndex(e._queryParams.getIndex());yf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ba(t.serverSyncTree_,e._path,i);else{const l=xa(t.serverSyncTree_,e);o=iE(t.serverSyncTree_,e._path,i,l)}return nn(t.eventQueue_,e._path,o),Gu(t.serverSyncTree_,e,n,null,!0),i},s=>($a(t,"get for query "+Ke(e)+" failed: "+s),Promise.reject(new Error(s))))}function rR(t,e,n,r,s){$a(t,"set",{path:e.toString(),value:n,priority:r});const i=Vc(t),o=qe(n,r),l=Jp(t.serverSyncTree_,e),u=cE(o,l,i),c=um(t),p=sE(t.serverSyncTree_,e,u,c,!0);jc(t.eventQueue_,p),t.server_.put(e.toString(),o.val(!0),(g,T)=>{const S=g==="ok";S||At("set at "+e+" failed: "+g);const A=Ir(t.serverSyncTree_,c,!S);nn(t.eventQueue_,e,A),wf(t,s,g,T)});const m=hm(t,e);ki(t,m),nn(t.eventQueue_,m,[])}function sR(t,e,n,r){$a(t,"update",{path:e.toString(),value:n});let s=!0;const i=Vc(t),o={};if(ht(n,(l,u)=>{s=!1,o[l]=uE(Ve(e,l),qe(u),t.serverSyncTree_,i)}),s)at("update() called with empty data.  Don't do anything."),wf(t,r,"ok",void 0);else{const l=um(t),u=Cb(t.serverSyncTree_,e,o,l);jc(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,p)=>{const m=c==="ok";m||At("update at "+e+" failed: "+c);const g=Ir(t.serverSyncTree_,l,!m),T=g.length>0?ki(t,e):e;nn(t.eventQueue_,T,g),wf(t,r,c,p)}),ht(n,c=>{const p=hm(t,Ve(e,c));ki(t,p)}),nn(t.eventQueue_,e,[])}}function iR(t){$a(t,"onDisconnectEvents");const e=Vc(t),n=Vu();df(t.onDisconnect_,ge(),(s,i)=>{const o=uE(s,i,t.serverSyncTree_,e);$x(n,s,o)});let r=[];df(n,ge(),(s,i)=>{r=r.concat(Ba(t.serverSyncTree_,s,i));const o=hm(t,s);ki(t,o)}),t.onDisconnect_=Vu(),nn(t.eventQueue_,ge(),r)}function oR(t,e,n){let r;ae(e._path)===".info"?r=yf(t.infoSyncTree_,e,n):r=yf(t.serverSyncTree_,e,n),yE(t.eventQueue_,e._path,r)}function aR(t,e,n){let r;ae(e._path)===".info"?r=Gu(t.infoSyncTree_,e,n):r=Gu(t.serverSyncTree_,e,n),yE(t.eventQueue_,e._path,r)}function lR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Xb)}function $a(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),at(n,...e)}function wf(t,e,n,r){e&&Ui(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function xE(t,e,n){return Jp(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function cm(t,e=t.transactionQueueTree_){if(e||Fc(t,e),zi(e)){const n=IE(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&uR(t,za(e),n)}else dE(e)&&Mc(e,n=>{cm(t,n)})}function uR(t,e,n){const r=n.map(c=>c.currentWriteId),s=xE(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const p=n[c];B(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const m=kt(e,p.path);i=i.updateChild(m,p.currentOutputSnapshotRaw)}const l=i.val(!0),u=e;t.server_.put(u.toString(),l,c=>{$a(t,"transaction put response",{path:u.toString(),status:c});let p=[];if(c==="ok"){const m=[];for(let g=0;g<n.length;g++)n[g].status=2,p=p.concat(Ir(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&m.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Fc(t,om(t.transactionQueueTree_,e)),cm(t,t.transactionQueueTree_),nn(t.eventQueue_,e,p);for(let g=0;g<m.length;g++)Ui(m[g])}else{if(c==="datastale")for(let m=0;m<n.length;m++)n[m].status===3?n[m].status=4:n[m].status=0;else{At("transaction at "+u.toString()+" failed: "+c);for(let m=0;m<n.length;m++)n[m].status=4,n[m].abortReason=c}ki(t,e)}},o)}function ki(t,e){const n=EE(t,e),r=za(n),s=IE(t,n);return cR(t,s,r),r}function cR(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=kt(n,u.path);let p=!1,m;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)p=!0,m=u.abortReason,s=s.concat(Ir(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Jb)p=!0,m="maxretry",s=s.concat(Ir(t.serverSyncTree_,u.currentWriteId,!0));else{const g=xE(t,u.path,o);u.currentInputSnapshot=g;const T=e[l].update(g.val());if(T!==void 0){Lc("transaction failed: Data returned ",T,u.path);let S=qe(T);typeof T=="object"&&T!=null&&Rn(T,".priority")||(S=S.updatePriority(g.getPriority()));const M=u.currentWriteId,C=Vc(t),E=cE(S,g,C);u.currentOutputSnapshotRaw=S,u.currentOutputSnapshotResolved=E,u.currentWriteId=um(t),o.splice(o.indexOf(M),1),s=s.concat(sE(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),s=s.concat(Ir(t.serverSyncTree_,M,!0))}else p=!0,m="nodata",s=s.concat(Ir(t.serverSyncTree_,u.currentWriteId,!0))}nn(t.eventQueue_,n,s),s=[],p&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(m==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(m),!1,null))))}Fc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Ui(r[l]);cm(t,t.transactionQueueTree_)}function EE(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&zi(r)===void 0;)r=om(r,n),e=Te(e),n=ae(e);return r}function IE(t,e){const n=[];return TE(t,e,n),n.sort((r,s)=>r.order-s.order),n}function TE(t,e,n){const r=zi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Mc(e,s=>{TE(t,s,n)})}function Fc(t,e){const n=zi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,hE(e,n.length>0?n:void 0)}Mc(e,r=>{Fc(t,r)})}function hm(t,e){const n=za(EE(t,e)),r=om(t.transactionQueueTree_,e);return Fb(r,s=>{rd(t,s)}),rd(t,r),fE(r,s=>{rd(t,s)}),n}function rd(t,e){const n=zi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ir(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?hE(e,void 0):n.length=i+1,nn(t.eventQueue_,za(e),s);for(let o=0;o<r.length;o++)Ui(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):At(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vy=function(t,e){const n=fR(t),r=n.namespace;n.domain==="firebase.com"&&Zn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sx(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ve(n.pathString)}},fR=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let p=t.indexOf("/");p===-1&&(p=t.length);let m=t.indexOf("?");m===-1&&(m=t.length),e=t.substring(0,Math.min(p,m)),p<m&&(s=hR(t.substring(p,m)));const g=dR(t.substring(Math.min(t.length,m)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const T=e.slice(0,c);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const S=e.indexOf(".");r=e.substring(0,S).toLowerCase(),n=e.substring(S+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Fy.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Fy.charAt(e[s]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class SE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Uc{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ue(this._path)?null:Fp(this._path)}get ref(){return new Pn(this._repo,this._path)}get _queryIdentifier(){const e=Ty(this._queryParams),n=Mp(e);return n==="{}"?"default":n}get _queryObject(){return Ty(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Uc))return!1;const n=this._repo===e._repo,r=Up(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+sA(this._path)}}class Pn extends Uc{constructor(e,n){super(e,n,new Hp,!1)}get parent(){const e=Mx(this._path);return e===null?null:new Pn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ni{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Ai(this.ref,e);return new Ni(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ni(s,Ai(this.ref,r),Fe)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ur(t,e){return t=Ye(t),t._checkNotDeleted("ref"),e!==void 0?Ai(t._root,e):t._root}function Ai(t,e){return t=Ye(t),ae(t._path)===null?qb("child","path",e):gE("child","path",e),new Pn(t._repo,Ve(t._path,e))}function mR(t,e){t=Ye(t),_E("push",t._path),mE("push",e,t._path,!0);const n=wE(t._repo),r=pR(n),s=Ai(t,r),i=Ai(t,r);let o;return e!=null?o=xf(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function xf(t,e){t=Ye(t),_E("set",t._path),mE("set",e,t._path,!1);const n=new La;return rR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Uy(t,e){Gb("update",e,t._path);const n=new La;return sR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function gR(t){t=Ye(t);const e=new kE(()=>{}),n=new Bc(e);return nR(t._repo,t,n).then(r=>new Ni(r,new Pn(t._repo,t._path),t._queryParams.getIndex()))}class Bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new CE("value",this,new Ni(e.snapshotNode,new Pn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SE(this,e,n):null}matches(e){return e instanceof Bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class dm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SE(this,e,n):null}createEvent(e,n){B(e.childName!=null,"Child events should have a childName.");const r=Ai(new Pn(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new CE(e.type,this,new Ni(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof dm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function NE(t,e,n,r,s){const i=new kE(n,void 0),o=e==="value"?new Bc(i):new dm(e,i);return oR(t._repo,t,o),()=>aR(t._repo,t,o)}function _R(t,e,n,r){return NE(t,"value",e)}function yR(t,e,n,r){return NE(t,"child_added",e)}class vR{}class wR extends vR{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Uc(e._repo,e._path,AA(e._queryParams,this._limit),e._orderByCalled)}}function xR(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new wR(t)}function ER(t,...e){let n=Ye(t);for(const r of e)n=r._apply(n);return n}_b(Pn);Eb(Pn);/**
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
 */const IR="FIREBASE_DATABASE_EMULATOR_HOST",Ef={};let TR=!1;function CR(t,e,n,r){t.repoInfo_=new Sx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function SR(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vy(i,s),l=o.repoInfo,u;typeof process<"u"&&oy&&(u=oy[IR]),u?(i=`http://${u}?ns=${l.namespace}`,o=Vy(i,s),l=o.repoInfo):o.repoInfo.secure;const c=new PN(t.name,t.options,e);Kb("Invalid Firebase Database URL",o),ue(o.path)||Zn("Database URL must point to the root of a Firebase Database (not including a child path).");const p=NR(l,t,c,new RN(t.name,n));return new AR(p,t)}function kR(t,e){const n=Ef[e];(!n||n[t.key]!==t)&&Zn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lR(t),delete n[t.key]}function NR(t,e,n,r){let s=Ef[e.name];s||(s={},Ef[e.name]=s);let i=s[t.toURLString()];return i&&Zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Zb(t,TR,n,r),s[t.toURLString()]=i,i}class AR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pn(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zn("Cannot call "+e+" on a deleted database.")}}function bR(t=Ac(),e){const n=Nc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=tx("database");r&&RR(n,...r)}return n}function RR(t,e,n,r={}){t=Ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Xl(Xl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:sx(r.mockUserToken,t.app.options.projectId);i=new Xl(o)}CR(s,e,n,i)}/**
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
 */function PR(t){mN(bs),ws(new Fr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return SR(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Sn(ay,ly,t),Sn(ay,ly,"esm2017")}/**
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
 */const DR={".sv":"timestamp"};function OR(){return DR}Wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};PR();function fm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function AE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MR=AE,bE=new ja("auth","Firebase",AE());/**
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
 */const qu=new kc("@firebase/auth");function LR(t,...e){qu.logLevel<=ce.WARN&&qu.warn(`Auth (${bs}): ${t}`,...e)}function Zl(t,...e){qu.logLevel<=ce.ERROR&&qu.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function er(t,...e){throw pm(t,...e)}function kn(t,...e){return pm(t,...e)}function RE(t,e,n){const r=Object.assign(Object.assign({},MR()),{[e]:n});return new ja("auth","Firebase",r).create(e,{appName:t.name})}function Lr(t){return RE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bE.create(t,...e)}function re(t,e,...n){if(!t)throw pm(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function tr(t,e){t||Bn(e)}/**
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
 */function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jR(){return By()==="http:"||By()==="https:"}function By(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jR()||$1()||"connection"in navigator)?navigator.onLine:!0}function FR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=Pp()||ix()}get(){return VR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mm(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class PE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const UR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BR=new Ha(3e4,6e4);function zc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,r,s={}){return DE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return z1()||(c.referrerPolicy="no-referrer"),PE.fetch()(ME(t,t.config.apiHost,n,l),c)})}async function DE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UR),e);try{const s=new zR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Pl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw RE(t,p,c);er(t,p)}}catch(s){if(s instanceof rr)throw s;er(t,"network-request-failed",{message:String(s)})}}async function OE(t,e,n,r,s={}){const i=await $i(t,e,n,r,s);return"mfaPendingCredential"in i&&er(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ME(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?mm(t.config,s):`${t.config.apiScheme}://${s}`}class zR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),BR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function $R(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function LE(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HR(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=gm(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ho(sd(s.auth_time)),issuedAtTime:Ho(sd(s.iat)),expirationTime:Ho(sd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sd(t){return Number(t)*1e3}function gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ru(n);return s?JSON.parse(s):(Zl("Failed to decode base64 JWT payload"),null)}catch(s){return Zl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zy(t){const e=gm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ea(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rr&&WR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ho(this.lastLoginAt),this.creationTime=Ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ea(t,LE(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jE(i.providerUserInfo):[],l=KR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Tf(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function qR(t){const e=Ye(t);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jE(t){return t.map(e=>{var{providerId:n}=e,r=fm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QR(t,e){const n=await DE(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ME(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",PE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YR(t,e){return $i(t,"POST","/v2/accounts:revokeToken",zc(t,e))}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=zy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
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
 */function cr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ea(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HR(this,e)}reload(){return qR(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fn(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await Ea(this,$R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:N,emailVerified:D,isAnonymous:L,providerData:P,stsTokenManager:v}=n;re(N&&v,e,"internal-error");const _=hi.fromJSON(this.name,v);re(typeof N=="string",e,"internal-error"),cr(m,e.name),cr(g,e.name),re(typeof D=="boolean",e,"internal-error"),re(typeof L=="boolean",e,"internal-error"),cr(T,e.name),cr(S,e.name),cr(A,e.name),cr(M,e.name),cr(C,e.name),cr(E,e.name);const x=new zn({uid:N,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:L,photoURL:S,phoneNumber:T,tenantId:A,stsTokenManager:_,createdAt:C,lastLoginAt:E});return P&&Array.isArray(P)&&(x.providerData=P.map(I=>Object.assign({},I))),M&&(x._redirectEventId=M),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ku(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new hi;l.updateFromIdToken(r);const u=new zn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const $y=new Map;function $n(t){tr(t instanceof Function,"Expected a class definition");let e=$y.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$y.set(t,e),e)}/**
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
 */class VE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VE.type="NONE";const Hy=VE;/**
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
 */function eu(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=eu(this.userKey,s.apiKey,i),this.fullPersistenceKey=eu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di($n(Hy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||$n(Hy);const o=eu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){const m=zn._fromJSON(e,p);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new di(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new di(i,e,r))}}/**
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
 */function Wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HE(e))return"Blackberry";if(WE(e))return"Webos";if(UE(e))return"Safari";if((e.includes("chrome/")||BE(e))&&!e.includes("edge/"))return"Chrome";if($E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FE(t=It()){return/firefox\//i.test(t)}function UE(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BE(t=It()){return/crios\//i.test(t)}function zE(t=It()){return/iemobile/i.test(t)}function $E(t=It()){return/android/i.test(t)}function HE(t=It()){return/blackberry/i.test(t)}function WE(t=It()){return/webos/i.test(t)}function _m(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XR(t=It()){var e;return _m(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JR(){return H1()&&document.documentMode===10}function GE(t=It()){return _m(t)||$E(t)||WE(t)||HE(t)||/windows phone/i.test(t)||zE(t)}/**
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
 */function qE(t,e=[]){let n;switch(t){case"Browser":n=Wy(It());break;case"Worker":n=`${Wy(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class ZR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eP(t,e={}){return $i(t,"GET","/v2/passwordPolicy",zc(t,e))}/**
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
 */class rP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gy(this),this.idTokenSubscription=new Gy(this),this.beforeStateQueue=new ZR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LE(this,{idToken:e}),r=await zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fn(this.app))return Promise.reject(Lr(this));const n=e?Ye(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fn(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fn(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eP(this),n=new nP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $c(t){return Ye(t)}class Gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=tk(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ym={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sP(t){ym=t}function iP(t){return ym.loadJS(t)}function oP(){return ym.gapiScript}function aP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lP(t,e){const n=Nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Du(i,e??{}))return s;er(s,"already-initialized")}return n.initialize({options:e})}function uP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cP(t,e,n){const r=$c(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=KE(e),{host:o,port:l}=hP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),dP()}function KE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hP(t){const e=KE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class QE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}/**
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
 */async function fi(t,e){return OE(t,"POST","/v1/accounts:signInWithIdp",zc(t,e))}/**
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
 */const fP="http://localhost";class Ts extends QE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):er("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:fP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
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
 */class YE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends YE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function pP(t,e){return OE(t,"POST","/v1/accounts:signUp",zc(t,e))}/**
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
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zn._fromIdTokenResponse(e,r,s),o=Ky(r);return new $r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ky(r);return new $r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function mP(t){var e;if(Fn(t.app))return Promise.reject(Lr(t));const n=$c(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new $r({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await pP(n,{returnSecureToken:!0}),s=await $r._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Qu extends rr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qu(e,n,r,s)}}function XE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qu._fromErrorAndOperation(t,i,e,r):i})}async function gP(t,e,n=!1){const r=await Ea(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",r)}/**
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
 */async function _P(t,e,n=!1){const{auth:r}=t;if(Fn(r.app))return Promise.reject(Lr(r));const s="reauthenticate";try{const i=await Ea(t,XE(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=gm(i.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),$r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&er(r,"user-mismatch"),i}}/**
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
 */async function yP(t,e,n=!1){if(Fn(t.app))return Promise.reject(Lr(t));const r="signIn",s=await XE(t,r,e),i=await $r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function vP(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function wP(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function xP(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}const Yu="__sak";/**
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
 */class JE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EP=1e3,IP=10;class ZE extends JE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZE.type="LOCAL";const TP=ZE;/**
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
 */class eI extends JE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eI.type="SESSION";const tI=eI;/**
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
 */class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await CP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
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
 */function vm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=vm("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nI(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function NP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bP(){return nI()?self:null}/**
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
 */const rI="firebaseLocalStorageDb",RP=1,Xu="firebaseLocalStorage",sI="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function PP(){const t=indexedDB.deleteDatabase(rI);return new Ga(t).toPromise()}function Cf(){const t=indexedDB.open(rI,RP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xu,{keyPath:sI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xu)?e(r):(r.close(),await PP(),e(await Cf()))})})}async function Qy(t,e,n){const r=Wc(t,!0).put({[sI]:e,value:n});return new Ga(r).toPromise()}async function DP(t,e){const n=Wc(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function Yy(t,e){const n=Wc(t,!0).delete(e);return new Ga(n).toPromise()}const OP=800,MP=3;class iI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(bP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NP(),!this.activeServiceWorker)return;this.sender=new SP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await Qy(e,Yu,"1"),await Yy(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wc(s,!1).getAll();return new Ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iI.type="LOCAL";const LP=iI;new Ha(3e4,6e4);/**
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
 */function jP(t,e){return e?$n(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wm extends QE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VP(t){return yP(t.auth,new wm(t),t.bypassAuthState)}function FP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),_P(n,new wm(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),gP(n,new wm(t),t.bypassAuthState)}/**
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
 */class oI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return FP;default:er(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BP=new Ha(2e3,1e4);class ni extends oI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BP.get())};e()}}ni.currentPopupAction=null;/**
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
 */const zP="pendingRedirect",tu=new Map;class $P extends oI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const r=await HP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HP(t,e){const n=qP(e),r=GP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function WP(t,e){tu.set(t._key(),e)}function GP(t){return $n(t._redirectPersistence)}function qP(t){return eu(zP,t.config.apiKey,t.name)}async function KP(t,e,n=!1){if(Fn(t.app))return Promise.reject(Lr(t));const r=$c(t),s=jP(r,e),o=await new $P(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QP=10*60*1e3;class YP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xy(e))}saveEventToCache(e){this.cachedEventUids.add(Xy(e)),this.lastProcessedEventTime=Date.now()}}function Xy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aI(t);default:return!1}}/**
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
 */async function JP(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
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
 */const ZP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e2=/^https?/;async function t2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JP(t);for(const n of e)try{if(n2(n))return}catch{}er(t,"unauthorized-domain")}function n2(t){const e=If(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!e2.test(n))return!1;if(ZP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const r2=new Ha(3e4,6e4);function Jy(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s2(t){return new Promise((e,n)=>{var r,s,i;function o(){Jy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jy(),n(kn(t,"network-request-failed"))},timeout:r2.get()})}if(!((s=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nn().gapi)===null||i===void 0)&&i.load)o();else{const l=aP("iframefcb");return Nn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},iP(`${oP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nu=null,e})}let nu=null;function i2(t){return nu=nu||s2(t),nu}/**
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
 */const o2=new Ha(5e3,15e3),a2="__/auth/iframe",l2="emulator/auth/iframe",u2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h2(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mm(e,l2):`https://${t.config.authDomain}/${a2}`,r={apiKey:e.apiKey,appName:t.name,v:bs},s=c2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fi(r).slice(1)}`}async function d2(t){const e=await i2(t),n=Nn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:h2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=Nn().setTimeout(()=>{i(o)},o2.get());function u(){Nn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const f2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p2=500,m2=600,g2="_blank",_2="http://localhost";class Zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y2(t,e,n,r=p2,s=m2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},f2),{width:r.toString(),height:s.toString(),top:i,left:o}),c=It().toLowerCase();n&&(l=BE(c)?g2:n),FE(c)&&(e=e||_2,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[T,S])=>`${g}${T}=${S},`,"");if(XR(c)&&l!=="_self")return v2(e||"",l),new Zy(null);const m=window.open(e||"",l,p);re(m,t,"popup-blocked");try{m.focus()}catch{}return new Zy(m)}function v2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const w2="__/auth/handler",x2="emulator/auth/handler",E2=encodeURIComponent("fac");async function ev(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:s};if(e instanceof YE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Wa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${E2}=${encodeURIComponent(u)}`:"";return`${I2(t)}?${Fi(l).slice(1)}${c}`}function I2({config:t}){return t.emulator?mm(t,x2):`https://${t.authDomain}/${w2}`}/**
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
 */const id="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tI,this._completeRedirectFn=KP,this._overrideRedirectResult=WP}async _openPopup(e,n,r,s){var i;tr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ev(e,n,r,If(),s);return y2(e,o,vm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ev(e,n,r,If(),s);return kP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await d2(e),r=new YP(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(id,{type:id},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[id];o!==void 0&&n(!!o),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||UE()||_m()}}const C2=T2;var tv="@firebase/auth",nv="1.7.9";/**
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
 */class S2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function k2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function N2(t){ws(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qE(t)},c=new rP(r,s,i,u);return uP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new Fr("auth-internal",e=>{const n=$c(e.getProvider("auth").getImmediate());return(r=>new S2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(tv,nv,k2(t)),Sn(tv,nv,"esm2017")}/**
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
 */const A2=5*60,b2=rx("authIdTokenMaxAge")||A2;let rv=null;const R2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>b2)return;const s=n==null?void 0:n.token;rv!==s&&(rv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function P2(t=Ac()){const e=Nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lP(t,{popupRedirectResolver:C2,persistence:[LP,TP,tI]}),r=rx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=R2(i.toString());wP(n,o,()=>o(n.currentUser)),vP(n,l=>o(l))}}const s=ex("auth");return s&&cP(n,`http://${s}`),n}function D2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",D2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});N2("Browser");var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function x(){}x.prototype=_.prototype,v.D=_.prototype,v.prototype=new x,v.prototype.constructor=v,v.C=function(I,k,b){for(var y=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)y[Q-2]=arguments[Q];return _.prototype[k].apply(I,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,x){x||(x=0);var I=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)I[k]=_.charCodeAt(x++)|_.charCodeAt(x++)<<8|_.charCodeAt(x++)<<16|_.charCodeAt(x++)<<24;else for(k=0;16>k;++k)I[k]=_[x++]|_[x++]<<8|_[x++]<<16|_[x++]<<24;_=v.g[0],x=v.g[1],k=v.g[2];var b=v.g[3],y=_+(b^x&(k^b))+I[0]+3614090360&4294967295;_=x+(y<<7&4294967295|y>>>25),y=b+(k^_&(x^k))+I[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=k+(x^b&(_^x))+I[2]+606105819&4294967295,k=b+(y<<17&4294967295|y>>>15),y=x+(_^k&(b^_))+I[3]+3250441966&4294967295,x=k+(y<<22&4294967295|y>>>10),y=_+(b^x&(k^b))+I[4]+4118548399&4294967295,_=x+(y<<7&4294967295|y>>>25),y=b+(k^_&(x^k))+I[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=k+(x^b&(_^x))+I[6]+2821735955&4294967295,k=b+(y<<17&4294967295|y>>>15),y=x+(_^k&(b^_))+I[7]+4249261313&4294967295,x=k+(y<<22&4294967295|y>>>10),y=_+(b^x&(k^b))+I[8]+1770035416&4294967295,_=x+(y<<7&4294967295|y>>>25),y=b+(k^_&(x^k))+I[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=k+(x^b&(_^x))+I[10]+4294925233&4294967295,k=b+(y<<17&4294967295|y>>>15),y=x+(_^k&(b^_))+I[11]+2304563134&4294967295,x=k+(y<<22&4294967295|y>>>10),y=_+(b^x&(k^b))+I[12]+1804603682&4294967295,_=x+(y<<7&4294967295|y>>>25),y=b+(k^_&(x^k))+I[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=k+(x^b&(_^x))+I[14]+2792965006&4294967295,k=b+(y<<17&4294967295|y>>>15),y=x+(_^k&(b^_))+I[15]+1236535329&4294967295,x=k+(y<<22&4294967295|y>>>10),y=_+(k^b&(x^k))+I[1]+4129170786&4294967295,_=x+(y<<5&4294967295|y>>>27),y=b+(x^k&(_^x))+I[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=k+(_^x&(b^_))+I[11]+643717713&4294967295,k=b+(y<<14&4294967295|y>>>18),y=x+(b^_&(k^b))+I[0]+3921069994&4294967295,x=k+(y<<20&4294967295|y>>>12),y=_+(k^b&(x^k))+I[5]+3593408605&4294967295,_=x+(y<<5&4294967295|y>>>27),y=b+(x^k&(_^x))+I[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=k+(_^x&(b^_))+I[15]+3634488961&4294967295,k=b+(y<<14&4294967295|y>>>18),y=x+(b^_&(k^b))+I[4]+3889429448&4294967295,x=k+(y<<20&4294967295|y>>>12),y=_+(k^b&(x^k))+I[9]+568446438&4294967295,_=x+(y<<5&4294967295|y>>>27),y=b+(x^k&(_^x))+I[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=k+(_^x&(b^_))+I[3]+4107603335&4294967295,k=b+(y<<14&4294967295|y>>>18),y=x+(b^_&(k^b))+I[8]+1163531501&4294967295,x=k+(y<<20&4294967295|y>>>12),y=_+(k^b&(x^k))+I[13]+2850285829&4294967295,_=x+(y<<5&4294967295|y>>>27),y=b+(x^k&(_^x))+I[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=k+(_^x&(b^_))+I[7]+1735328473&4294967295,k=b+(y<<14&4294967295|y>>>18),y=x+(b^_&(k^b))+I[12]+2368359562&4294967295,x=k+(y<<20&4294967295|y>>>12),y=_+(x^k^b)+I[5]+4294588738&4294967295,_=x+(y<<4&4294967295|y>>>28),y=b+(_^x^k)+I[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=k+(b^_^x)+I[11]+1839030562&4294967295,k=b+(y<<16&4294967295|y>>>16),y=x+(k^b^_)+I[14]+4259657740&4294967295,x=k+(y<<23&4294967295|y>>>9),y=_+(x^k^b)+I[1]+2763975236&4294967295,_=x+(y<<4&4294967295|y>>>28),y=b+(_^x^k)+I[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=k+(b^_^x)+I[7]+4139469664&4294967295,k=b+(y<<16&4294967295|y>>>16),y=x+(k^b^_)+I[10]+3200236656&4294967295,x=k+(y<<23&4294967295|y>>>9),y=_+(x^k^b)+I[13]+681279174&4294967295,_=x+(y<<4&4294967295|y>>>28),y=b+(_^x^k)+I[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=k+(b^_^x)+I[3]+3572445317&4294967295,k=b+(y<<16&4294967295|y>>>16),y=x+(k^b^_)+I[6]+76029189&4294967295,x=k+(y<<23&4294967295|y>>>9),y=_+(x^k^b)+I[9]+3654602809&4294967295,_=x+(y<<4&4294967295|y>>>28),y=b+(_^x^k)+I[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=k+(b^_^x)+I[15]+530742520&4294967295,k=b+(y<<16&4294967295|y>>>16),y=x+(k^b^_)+I[2]+3299628645&4294967295,x=k+(y<<23&4294967295|y>>>9),y=_+(k^(x|~b))+I[0]+4096336452&4294967295,_=x+(y<<6&4294967295|y>>>26),y=b+(x^(_|~k))+I[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=k+(_^(b|~x))+I[14]+2878612391&4294967295,k=b+(y<<15&4294967295|y>>>17),y=x+(b^(k|~_))+I[5]+4237533241&4294967295,x=k+(y<<21&4294967295|y>>>11),y=_+(k^(x|~b))+I[12]+1700485571&4294967295,_=x+(y<<6&4294967295|y>>>26),y=b+(x^(_|~k))+I[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=k+(_^(b|~x))+I[10]+4293915773&4294967295,k=b+(y<<15&4294967295|y>>>17),y=x+(b^(k|~_))+I[1]+2240044497&4294967295,x=k+(y<<21&4294967295|y>>>11),y=_+(k^(x|~b))+I[8]+1873313359&4294967295,_=x+(y<<6&4294967295|y>>>26),y=b+(x^(_|~k))+I[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=k+(_^(b|~x))+I[6]+2734768916&4294967295,k=b+(y<<15&4294967295|y>>>17),y=x+(b^(k|~_))+I[13]+1309151649&4294967295,x=k+(y<<21&4294967295|y>>>11),y=_+(k^(x|~b))+I[4]+4149444226&4294967295,_=x+(y<<6&4294967295|y>>>26),y=b+(x^(_|~k))+I[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=k+(_^(b|~x))+I[2]+718787259&4294967295,k=b+(y<<15&4294967295|y>>>17),y=x+(b^(k|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(k+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var x=_-this.blockSize,I=this.B,k=this.h,b=0;b<_;){if(k==0)for(;b<=x;)s(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<_;)if(I[k++]=v.charCodeAt(b++),k==this.blockSize){s(this,I),k=0;break}}else for(;b<_;)if(I[k++]=v[b++],k==this.blockSize){s(this,I),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var x=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=x&255,x/=256;for(this.u(v),v=Array(16),_=x=0;4>_;++_)for(var I=0;32>I;I+=8)v[x++]=this.g[_]>>>I&255;return v};function i(v,_){var x=l;return Object.prototype.hasOwnProperty.call(x,v)?x[v]:x[v]=_(v)}function o(v,_){this.h=_;for(var x=[],I=!0,k=v.length-1;0<=k;k--){var b=v[k]|0;I&&b==_||(x[k]=b,I=!1)}this.g=x}var l={};function u(v){return-128<=v&&128>v?i(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return M(c(-v));for(var _=[],x=1,I=0;v>=x;I++)_[I]=v/x|0,x*=4294967296;return new o(_,0)}function p(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return M(p(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(_,8)),I=m,k=0;k<v.length;k+=8){var b=Math.min(8,v.length-k),y=parseInt(v.substring(k,k+b),_);8>b?(b=c(Math.pow(_,b)),I=I.j(b).add(c(y))):(I=I.j(x),I=I.add(c(y)))}return I}var m=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-M(this).m();for(var v=0,_=1,x=0;x<this.g.length;x++){var I=this.i(x);v+=(0<=I?I:4294967296+I)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(A(this))return"-"+M(this).toString(v);for(var _=c(Math.pow(v,6)),x=this,I="";;){var k=D(x,_).g;x=C(x,k.j(_));var b=((0<x.g.length?x.g[0]:x.h)>>>0).toString(v);if(x=k,S(x))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function A(v){return v.h==-1}t.l=function(v){return v=C(this,v),A(v)?-1:S(v)?0:1};function M(v){for(var _=v.g.length,x=[],I=0;I<_;I++)x[I]=~v.g[I];return new o(x,~v.h).add(g)}t.abs=function(){return A(this)?M(this):this},t.add=function(v){for(var _=Math.max(this.g.length,v.g.length),x=[],I=0,k=0;k<=_;k++){var b=I+(this.i(k)&65535)+(v.i(k)&65535),y=(b>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);I=y>>>16,b&=65535,y&=65535,x[k]=y<<16|b}return new o(x,x[x.length-1]&-2147483648?-1:0)};function C(v,_){return v.add(M(_))}t.j=function(v){if(S(this)||S(v))return m;if(A(this))return A(v)?M(this).j(M(v)):M(M(this).j(v));if(A(v))return M(this.j(M(v)));if(0>this.l(T)&&0>v.l(T))return c(this.m()*v.m());for(var _=this.g.length+v.g.length,x=[],I=0;I<2*_;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<v.g.length;k++){var b=this.i(I)>>>16,y=this.i(I)&65535,Q=v.i(k)>>>16,ne=v.i(k)&65535;x[2*I+2*k]+=y*ne,E(x,2*I+2*k),x[2*I+2*k+1]+=b*ne,E(x,2*I+2*k+1),x[2*I+2*k+1]+=y*Q,E(x,2*I+2*k+1),x[2*I+2*k+2]+=b*Q,E(x,2*I+2*k+2)}for(I=0;I<_;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=_;I<2*_;I++)x[I]=0;return new o(x,0)};function E(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function N(v,_){this.g=v,this.h=_}function D(v,_){if(S(_))throw Error("division by zero");if(S(v))return new N(m,m);if(A(v))return _=D(M(v),_),new N(M(_.g),M(_.h));if(A(_))return _=D(v,M(_)),new N(M(_.g),_.h);if(30<v.g.length){if(A(v)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var x=g,I=_;0>=I.l(v);)x=L(x),I=L(I);var k=P(x,1),b=P(I,1);for(I=P(I,2),x=P(x,2);!S(I);){var y=b.add(I);0>=y.l(v)&&(k=k.add(x),b=y),I=P(I,1),x=P(x,1)}return _=C(v,k.j(_)),new N(k,_)}for(k=m;0<=v.l(_);){for(x=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=c(x),y=b.j(_);A(y)||0<y.l(v);)x-=I,b=c(x),y=b.j(_);S(b)&&(b=g),k=k.add(b),v=C(v,y)}return new N(k,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var _=Math.max(this.g.length,v.g.length),x=[],I=0;I<_;I++)x[I]=this.i(I)&v.i(I);return new o(x,this.h&v.h)},t.or=function(v){for(var _=Math.max(this.g.length,v.g.length),x=[],I=0;I<_;I++)x[I]=this.i(I)|v.i(I);return new o(x,this.h|v.h)},t.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),x=[],I=0;I<_;I++)x[I]=this.i(I)^v.i(I);return new o(x,this.h^v.h)};function L(v){for(var _=v.g.length+1,x=[],I=0;I<_;I++)x[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(x,v.h)}function P(v,_){var x=_>>5;_%=32;for(var I=v.g.length-x,k=[],b=0;b<I;b++)k[b]=0<_?v.i(b+x)>>>_|v.i(b+x+1)<<32-_:v.i(b+x);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,lI=o}).apply(typeof sv<"u"?sv:typeof self<"u"?self:typeof window<"u"?window:{});var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uI,Ao,cI,ru,Sf,hI,dI,fI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dl=="object"&&Dl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var R=a[w];if(!(R in f))break e;f=f[R]}a=a[a.length-1],w=f[a],h=h(w),h!=w&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,w=!1,R={next:function(){if(!w&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return w=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,f){return a.call.apply(a.bind,arguments)}function m(a,h,f){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,w),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var w=f.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(w,R,O){for(var $=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)$[xe-2]=arguments[xe];return h.prototype[R].apply(w,$)}}function A(a){const h=a.length;if(0<h){const f=Array(h);for(let w=0;w<h;w++)f[w]=a[w];return f}return[]}function M(a,h){for(let f=1;f<arguments.length;f++){const w=arguments[f];if(u(w)){const R=a.length||0,O=w.length||0;a.length=R+O;for(let $=0;$<O;$++)a[R+$]=w[$]}else a.push(w)}}class C{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var L=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function P(a,h,f){for(const w in a)h.call(f,a[w],w,a)}function v(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,w;for(let R=1;R<arguments.length;R++){w=arguments[R];for(f in w)a[f]=w[f];for(let O=0;O<x.length;O++)f=x[O],Object.prototype.hasOwnProperty.call(w,f)&&(a[f]=w[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function y(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Q{constructor(){this.h=this.g=null}add(h,f){const w=ne.get();w.set(h,f),this.h?this.h.next=w:this.g=w,this.h=w}}var ne=new C(()=>new _e,a=>a.reset());class _e{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,z=!1,Y=new Q,j=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(G)}};var G=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(f){b(f)}var h=ne;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Pt(a,h){if(J.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{D(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pt.aa.h.call(this)}}S(Pt,J);var rn={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),eh=0;function th(a,h,f,w,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!w,this.ha=R,this.key=++eh,this.da=this.fa=!1}function Os(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ms(a){this.src=a,this.g={},this.h=0}Ms.prototype.add=function(a,h,f,w,R){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var $=Ut(a,h,w,R);return-1<$?(h=a[$],f||(h.fa=!1)):(h=new th(h,this.src,O,!!w,R),h.fa=f,a.push(h)),h};function Gi(a,h){var f=h.type;if(f in a.g){var w=a.g[f],R=Array.prototype.indexOf.call(w,h,void 0),O;(O=0<=R)&&Array.prototype.splice.call(w,R,1),O&&(Os(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ut(a,h,f,w){for(var R=0;R<a.length;++R){var O=a[R];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==w)return R}return-1}var qi="closure_lm_"+(1e6*Math.random()|0),Yr={};function q(a,h,f,w,R){if(Array.isArray(h)){for(var O=0;O<h.length;O++)q(a,h[O],f,w,R);return null}return f=zm(f),a&&a[sn]?a.K(h,f,c(w)?!!w.capture:!1,R):W(a,h,f,!1,w,R)}function W(a,h,f,w,R,O){if(!h)throw Error("Invalid event type");var $=c(R)?!!R.capture:!!R,xe=nh(a);if(xe||(a[qi]=xe=new Ms(a)),f=xe.add(h,f,w,$,O),f.proxy)return f;if(w=te(),f.proxy=w,w.src=a,w.listener=f,a.addEventListener)ze||(R=$),R===void 0&&(R=!1),a.addEventListener(h.toString(),w,R);else if(a.attachEvent)a.attachEvent(sr(h.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return f}function te(){function a(f){return h.call(a.src,a.listener,f)}const h=Ki;return a}function ie(a,h,f,w,R){if(Array.isArray(h))for(var O=0;O<h.length;O++)ie(a,h[O],f,w,R);else w=c(w)?!!w.capture:!!w,f=zm(f),a&&a[sn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=Ut(O,f,w,R),-1<f&&(Os(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=nh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ut(h,f,w,R)),(f=-1<a?h[a]:null)&&Re(f))}function Re(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[sn])Gi(h.i,a);else{var f=a.type,w=a.proxy;h.removeEventListener?h.removeEventListener(f,w,a.capture):h.detachEvent?h.detachEvent(sr(f),w):h.addListener&&h.removeListener&&h.removeListener(w),(f=nh(h))?(Gi(f,a),f.h==0&&(f.src=null,h[qi]=null)):Os(a)}}}function sr(a){return a in Yr?Yr[a]:Yr[a]="on"+a}function Ki(a,h){if(a.da)a=!0;else{h=new Pt(h,this);var f=a.listener,w=a.ha||a.src;a.fa&&Re(a),a=f.call(w,h)}return a}function nh(a){return a=a[qi],a instanceof Ms?a:null}var rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function zm(a){return typeof a=="function"?a:(a[rh]||(a[rh]=function(h){return a.handleEvent(h)}),a[rh])}function dt(){Z.call(this),this.i=new Ms(this),this.M=this,this.F=null}S(dt,Z),dt.prototype[sn]=!0,dt.prototype.removeEventListener=function(a,h,f,w){ie(this,a,h,f,w)};function Tt(a,h){var f,w=a.F;if(w)for(f=[];w;w=w.F)f.push(w);if(a=a.M,w=h.type||h,typeof h=="string")h=new J(h,a);else if(h instanceof J)h.target=h.target||a;else{var R=h;h=new J(w,a),I(h,R)}if(R=!0,f)for(var O=f.length-1;0<=O;O--){var $=h.g=f[O];R=Xa($,w,!0,h)&&R}if($=h.g=a,R=Xa($,w,!0,h)&&R,R=Xa($,w,!1,h)&&R,f)for(O=0;O<f.length;O++)$=h.g=f[O],R=Xa($,w,!1,h)&&R}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],w=0;w<f.length;w++)Os(f[w]);delete a.g[h],a.h--}}this.F=null},dt.prototype.K=function(a,h,f,w){return this.i.add(String(a),h,!1,f,w)},dt.prototype.L=function(a,h,f,w){return this.i.add(String(a),h,!0,f,w)};function Xa(a,h,f,w){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,O=0;O<h.length;++O){var $=h[O];if($&&!$.da&&$.capture==f){var xe=$.listener,rt=$.ha||$.src;$.fa&&Gi(a.i,$),R=xe.call(rt,w)!==!1&&R}}return R&&!w.defaultPrevented}function $m(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Hm(a){a.g=$m(()=>{a.g=null,a.i&&(a.i=!1,Hm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lT extends Z{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Hm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(a){Z.call(this),this.h=a,this.g={}}S(Qi,Z);var Wm=[];function Gm(a){P(a.g,function(h,f){this.g.hasOwnProperty(f)&&Re(h)},a),a.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),Gm(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sh=l.JSON.stringify,uT=l.JSON.parse,cT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ih(){}ih.prototype.h=null;function qm(a){return a.h||(a.h=a.i())}function Km(){}var Yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oh(){J.call(this,"d")}S(oh,J);function ah(){J.call(this,"c")}S(ah,J);var Xr={},Qm=null;function Ja(){return Qm=Qm||new dt}Xr.La="serverreachability";function Ym(a){J.call(this,Xr.La,a)}S(Ym,J);function Xi(a){const h=Ja();Tt(h,new Ym(h))}Xr.STAT_EVENT="statevent";function Xm(a,h){J.call(this,Xr.STAT_EVENT,a),this.stat=h}S(Xm,J);function Ct(a){const h=Ja();Tt(h,new Xm(h,a))}Xr.Ma="timingevent";function Jm(a,h){J.call(this,Xr.Ma,a),this.size=h}S(Jm,J);function Ji(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function hT(a,h,f,w,R,O){a.info(function(){if(a.g)if(O)for(var $="",xe=O.split("&"),rt=0;rt<xe.length;rt++){var me=xe[rt].split("=");if(1<me.length){var ft=me[0];me=me[1];var pt=ft.split("_");$=2<=pt.length&&pt[1]=="type"?$+(ft+"="+me+"&"):$+(ft+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+w+") [attempt "+R+"]: "+h+`
`+f+`
`+$})}function dT(a,h,f,w,R,O,$){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+R+"]: "+h+`
`+f+`
`+O+" "+$})}function Ls(a,h,f,w){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+pT(a,f)+(w?" "+w:"")})}function fT(a,h){a.info(function(){return"TIMEOUT: "+h})}Zi.prototype.info=function(){};function pT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var w=f[a];if(!(2>w.length)){var R=w[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return sh(f)}catch{return h}}var Za={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lh;function el(){}S(el,ih),el.prototype.g=function(){return new XMLHttpRequest},el.prototype.i=function(){return{}},lh=new el;function ir(a,h,f,w){this.j=a,this.i=h,this.l=f,this.R=w||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eg}function eg(){this.i=null,this.g="",this.h=!1}var tg={},uh={};function ch(a,h,f){a.L=1,a.v=sl(Dn(h)),a.m=f,a.P=!0,ng(a,null)}function ng(a,h){a.F=Date.now(),tl(a),a.A=Dn(a.v);var f=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),gg(f.i,"t",w),a.C=0,f=a.j.J,a.h=new eg,a.g=Og(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lT(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,w=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Wm[0]=R.toString()),R=Wm);for(var O=0;O<R.length;O++){var $=q(f,R[O],w||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Xi(),hT(a.i,a.u,a.A,a.l,a.R,a.m)}ir.prototype.ca=function(a){a=a.target;const h=this.M;h&&On(a)==3?h.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const pt=On(this.g);var h=this.g.Ba();const Fs=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Ig(this.g)))){this.J||pt!=4||h==7||(h==8||0>=Fs?Xi(3):Xi(2)),hh(this);var f=this.g.Z();this.X=f;t:if(rg(this)){var w=Ig(this.g);a="";var R=w.length,O=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),eo(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(w[h],{stream:!(O&&h==R-1)});w.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,dT(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,rt=this.g;if((xe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(xe)){var me=xe;break t}}me=null}if(f=me)Ls(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dh(this,f);else{this.o=!1,this.s=3,Ct(12),Jr(this),eo(this);break e}}if(this.P){f=!0;let on;for(;!this.J&&this.C<$.length;)if(on=mT(this,$),on==uh){pt==4&&(this.s=4,Ct(14),f=!1),Ls(this.i,this.l,null,"[Incomplete Response]");break}else if(on==tg){this.s=4,Ct(15),Ls(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Ls(this.i,this.l,on,null),dh(this,on);if(rg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||$.length!=0||this.h.h||(this.s=1,Ct(16),f=!1),this.o=this.o&&f,!f)Ls(this.i,this.l,$,"[Invalid Chunked Response]"),Jr(this),eo(this);else if(0<$.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),yh(ft),ft.M=!0,Ct(11))}}else Ls(this.i,this.l,$,null),dh(this,$);pt==4&&Jr(this),this.o&&!this.J&&(pt==4?bg(this.j,this):(this.o=!1,tl(this)))}else PT(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Jr(this),eo(this)}}}catch{}finally{}};function rg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mT(a,h){var f=a.C,w=h.indexOf(`
`,f);return w==-1?uh:(f=Number(h.substring(f,w)),isNaN(f)?tg:(w+=1,w+f>h.length?uh:(h=h.slice(w,w+f),a.C=w+f,h)))}ir.prototype.cancel=function(){this.J=!0,Jr(this)};function tl(a){a.S=Date.now()+a.I,sg(a,a.I)}function sg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ji(g(a.ba,a),h)}function hh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ir.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(fT(this.i,this.A),this.L!=2&&(Xi(),Ct(17)),Jr(this),this.s=2,eo(this)):sg(this,this.S-a)};function eo(a){a.j.G==0||a.J||bg(a.j,a)}function Jr(a){hh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Gm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function dh(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||fh(f.h,a))){if(!a.K&&fh(f.h,a)&&f.G==3){try{var w=f.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var R=w;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)cl(f),ll(f);else break e;_h(f),Ct(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ji(g(f.Za,f),6e3));if(1>=ag(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else es(f,11)}else if((a.K||f.g==a)&&cl(f),!E(h))for(R=f.Da.g.parse(h),h=0;h<R.length;h++){let me=R[h];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const ft=me[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=me[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const Fs=me[5];Fs!=null&&typeof Fs=="number"&&0<Fs&&(w=1.5*Fs,f.L=w,f.j.info("backChannelRequestTimeoutMs_="+w)),w=f;const on=a.g;if(on){const dl=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(dl){var O=w.h;O.g||dl.indexOf("spdy")==-1&&dl.indexOf("quic")==-1&&dl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ph(O,O.h),O.h=null))}if(w.D){const vh=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;vh&&(w.ya=vh,ke(w.I,w.D,vh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),w=f;var $=a;if(w.qa=Dg(w,w.J?w.ia:null,w.W),$.K){lg(w.h,$);var xe=$,rt=w.L;rt&&(xe.I=rt),xe.B&&(hh(xe),tl(xe)),w.g=$}else Ng(w);0<f.i.length&&ul(f)}else me[0]!="stop"&&me[0]!="close"||es(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?es(f,7):gh(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}Xi(4)}catch{}}var gT=class{constructor(a,h){this.g=a,this.map=h}};function ig(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function og(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ag(a){return a.h?1:a.g?a.g.size:0}function fh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ph(a,h){a.g?a.g.add(h):a.h=h}function lg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ig.prototype.cancel=function(){if(this.i=ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ug(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return A(a.i)}function _T(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,w=0;w<f;w++)h.push(a[w]);return h}h=[],f=0;for(w in a)h[f++]=a[w];return h}function yT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const w in a)h[f++]=w;return h}}}function cg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=yT(a),w=_T(a),R=w.length,O=0;O<R;O++)h.call(void 0,w[O],f&&f[O],a)}var hg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var w=a[f].indexOf("="),R=null;if(0<=w){var O=a[f].substring(0,w);R=a[f].substring(w+1)}else O=a[f];h(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,nl(this,a.j),this.o=a.o,this.g=a.g,rl(this,a.s),this.l=a.l;var h=a.i,f=new ro;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),dg(this,f),this.m=a.m}else a&&(h=String(a).match(hg))?(this.h=!1,nl(this,h[1]||"",!0),this.o=to(h[2]||""),this.g=to(h[3]||"",!0),rl(this,h[4]),this.l=to(h[5]||"",!0),dg(this,h[6]||"",!0),this.m=to(h[7]||"")):(this.h=!1,this.i=new ro(null,this.h))}Zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(no(h,fg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(no(h,fg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(no(f,f.charAt(0)=="/"?ET:xT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",no(f,TT)),a.join("")};function Dn(a){return new Zr(a)}function nl(a,h,f){a.j=f?to(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function rl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function dg(a,h,f){h instanceof ro?(a.i=h,CT(a.i,a.h)):(f||(h=no(h,IT)),a.i=new ro(h,a.h))}function ke(a,h,f){a.i.set(h,f)}function sl(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function to(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function no(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,wT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fg=/[#\/\?@]/g,xT=/[#\?:]/g,ET=/[#\?]/g,IT=/[#\?@]/g,TT=/#/g;function ro(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&vT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ro.prototype,t.add=function(a,h){or(this),this.i=null,a=js(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function pg(a,h){or(a),h=js(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function mg(a,h){return or(a),h=js(a,h),a.g.has(h)}t.forEach=function(a,h){or(this),this.g.forEach(function(f,w){f.forEach(function(R){a.call(h,R,w,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let w=0;w<h.length;w++){const R=a[w];for(let O=0;O<R.length;O++)f.push(h[w])}return f},t.V=function(a){or(this);let h=[];if(typeof a=="string")mg(this,a)&&(h=h.concat(this.g.get(js(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return or(this),this.i=null,a=js(this,a),mg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function gg(a,h,f){pg(a,h),0<f.length&&(a.i=null,a.g.set(js(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var w=h[f];const O=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var R=O;$[w]!==""&&(R+="="+encodeURIComponent(String($[w]))),a.push(R)}}return this.i=a.join("&")};function js(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function CT(a,h){h&&!a.j&&(or(a),a.i=null,a.g.forEach(function(f,w){var R=w.toLowerCase();w!=R&&(pg(this,w),gg(this,R,f))},a)),a.j=h}function ST(a,h){const f=new Zi;if(l.Image){const w=new Image;w.onload=T(ar,f,"TestLoadImage: loaded",!0,h,w),w.onerror=T(ar,f,"TestLoadImage: error",!1,h,w),w.onabort=T(ar,f,"TestLoadImage: abort",!1,h,w),w.ontimeout=T(ar,f,"TestLoadImage: timeout",!1,h,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else h(!1)}function kT(a,h){const f=new Zi,w=new AbortController,R=setTimeout(()=>{w.abort(),ar(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:w.signal}).then(O=>{clearTimeout(R),O.ok?ar(f,"TestPingServer: ok",!0,h):ar(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),ar(f,"TestPingServer: error",!1,h)})}function ar(a,h,f,w,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),w(f)}catch{}}function NT(){this.g=new cT}function AT(a,h,f){const w=f||"";try{cg(a,function(R,O){let $=R;c(R)&&($=sh(R)),h.push(w+O+"="+encodeURIComponent($))})}catch(R){throw h.push(w+"type="+encodeURIComponent("_badmap")),R}}function il(a){this.l=a.Ub||null,this.j=a.eb||!1}S(il,ih),il.prototype.g=function(){return new ol(this.l,this.j)},il.prototype.i=function(a){return function(){return a}}({});function ol(a,h){dt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ol,dt),t=ol.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,io(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,so(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_g(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function _g(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?so(this):io(this),this.readyState==3&&_g(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,so(this))},t.Qa=function(a){this.g&&(this.response=a,so(this))},t.ga=function(){this.g&&so(this)};function so(a){a.readyState=4,a.l=null,a.j=null,a.v=null,io(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function io(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yg(a){let h="";return P(a,function(f,w){h+=w,h+=":",h+=f,h+=`\r
`}),h}function mh(a,h,f){e:{for(w in f){var w=!1;break e}w=!0}w||(f=yg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ke(a,h,f))}function Le(a){dt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Le,dt);var bT=/^https?$/i,RT=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lh.g(),this.v=this.o?qm(this.o):qm(lh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){vg(this,O);return}if(a=f||"",f=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var R in w)f.set(R,w[R]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())f.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(RT,h,void 0))||w||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of f)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){vg(this,O)}};function vg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,wg(a),al(a)}function wg(a){a.A||(a.A=!0,Tt(a,"complete"),Tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Tt(this,"complete"),Tt(this,"abort"),al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),al(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xg(this):this.bb())},t.bb=function(){xg(this)};function xg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)$m(a.Ea,0,a);else if(Tt(a,"readystatechange"),On(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var w;if(w=$===0){var R=String(a.D).match(hg)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),w=!bT.test(R?R.toLowerCase():"")}f=w}if(f)Tt(a,"complete"),Tt(a,"success");else{a.m=6;try{var O=2<On(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",wg(a)}}finally{al(a)}}}}function al(a,h){if(a.g){Eg(a);const f=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Tt(a,"ready");try{f.onreadystatechange=w}catch{}}}function Eg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),uT(h)}};function Ig(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function PT(a){const h={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(E(a[w]))continue;var f=k(a[w]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[R]||[];h[R]=O,O.push(f)}v(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Tg(a){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oo("baseRetryDelayMs",5e3,a),this.cb=oo("retryDelaySeedMs",1e4,a),this.Wa=oo("forwardChannelMaxRetries",2,a),this.wa=oo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ig(a&&a.concurrentRequestLimit),this.Da=new NT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Tg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,w){Ct(0),this.W=a,this.H=h||{},f&&w!==void 0&&(this.H.OSID=f,this.H.OAID=w),this.F=this.X,this.I=Dg(this,null,this.W),ul(this)};function gh(a){if(Cg(a),a.G==3){var h=a.U++,f=Dn(a.I);if(ke(f,"SID",a.K),ke(f,"RID",h),ke(f,"TYPE","terminate"),ao(a,f),h=new ir(a,a.j,h),h.L=2,h.v=sl(Dn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Og(h.j,null),h.g.ea(h.v)),h.F=Date.now(),tl(h)}Pg(a)}function ll(a){a.g&&(yh(a),a.g.cancel(),a.g=null)}function Cg(a){ll(a),a.u&&(l.clearTimeout(a.u),a.u=null),cl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ul(a){if(!og(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||j(),z||(we(),z=!0),Y.add(h,a),a.B=0}}function DT(a,h){return ag(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ji(g(a.Ga,a,h),Rg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new ir(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var w=this.i[f];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=kg(this,R,h),f=Dn(this.I),ke(f,"RID",a),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),ao(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(yg(O)))+"&"+h:this.m&&mh(f,this.m,O)),ph(this.h,R),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",h),ke(f,"SID","null"),R.T=!0,ch(R,f,null)):ch(R,f,h),this.G=2}}else this.G==3&&(a?Sg(this,a):this.i.length==0||og(this.h)||Sg(this))};function Sg(a,h){var f;h?f=h.l:f=a.U++;const w=Dn(a.I);ke(w,"SID",a.K),ke(w,"RID",f),ke(w,"AID",a.T),ao(a,w),a.m&&a.o&&mh(w,a.m,a.o),f=new ir(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=kg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ph(a.h,f),ch(f,w,h)}function ao(a,h){a.H&&P(a.H,function(f,w){ke(h,w,f)}),a.l&&cg({},function(f,w){ke(h,w,f)})}function kg(a,h,f){f=Math.min(a.i.length,f);var w=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let O=-1;for(;;){const $=["count="+f];O==-1?0<f?(O=R[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let xe=!0;for(let rt=0;rt<f;rt++){let me=R[rt].g;const ft=R[rt].map;if(me-=O,0>me)O=Math.max(0,R[rt].g-100),xe=!1;else try{AT(ft,$,"req"+me+"_")}catch{w&&w(ft)}}if(xe){w=$.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,w}function Ng(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||j(),z||(we(),z=!0),Y.add(h,a),a.v=0}}function _h(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ji(g(a.Fa,a),Rg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ag(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ji(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),ll(this),Ag(this))};function yh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ag(a){a.g=new ir(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Dn(a.qa);ke(h,"RID","rpc"),ke(h,"SID",a.K),ke(h,"AID",a.T),ke(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(h,"TO",a.ja),ke(h,"TYPE","xmlhttp"),ao(a,h),a.m&&a.o&&mh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=sl(Dn(h)),f.m=null,f.P=!0,ng(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ll(this),_h(this),Ct(19))};function cl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function bg(a,h){var f=null;if(a.g==h){cl(a),yh(a),a.g=null;var w=2}else if(fh(a.h,h))f=h.D,lg(a.h,h),w=1;else return;if(a.G!=0){if(h.o)if(w==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;w=Ja(),Tt(w,new Jm(w,f)),ul(a)}else Ng(a);else if(R=h.s,R==3||R==0&&0<h.X||!(w==1&&DT(a,h)||w==2&&_h(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),R){case 1:es(a,5);break;case 4:es(a,10);break;case 3:es(a,6);break;default:es(a,2)}}}function Rg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function es(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),w=a.Xa;const R=!w;w=new Zr(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||nl(w,"https"),sl(w),R?ST(w.toString(),f):kT(w.toString(),f)}else Ct(2);a.G=0,a.l&&a.l.sa(h),Pg(a),Cg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Pg(a){if(a.G=0,a.ka=[],a.l){const h=ug(a.h);(h.length!=0||a.i.length!=0)&&(M(a.ka,h),M(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Dg(a,h,f){var w=f instanceof Zr?Dn(f):new Zr(f);if(w.g!="")h&&(w.g=h+"."+w.g),rl(w,w.s);else{var R=l.location;w=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var O=new Zr(null);w&&nl(O,w),h&&(O.g=h),R&&rl(O,R),f&&(O.l=f),w=O}return f=a.D,h=a.ya,f&&h&&ke(w,f,h),ke(w,"VER",a.la),ao(a,w),w}function Og(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Le(new il({eb:f})):new Le(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mg(){}t=Mg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function hl(){}hl.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){dt.call(this),this.g=new Tg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!E(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Vs(this)}S(Bt,dt),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){gh(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=sh(a),a=f);h.i.push(new gT(h.Ya++,a)),h.G==3&&ul(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,gh(this.g),delete this.g,Bt.aa.N.call(this)};function Lg(a){oh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Lg,oh);function jg(){ah.call(this),this.status=1}S(jg,ah);function Vs(a){this.g=a}S(Vs,Mg),Vs.prototype.ua=function(){Tt(this.g,"a")},Vs.prototype.ta=function(a){Tt(this.g,new Lg(a))},Vs.prototype.sa=function(a){Tt(this.g,new jg)},Vs.prototype.ra=function(){Tt(this.g,"b")},hl.prototype.createWebChannel=hl.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,fI=function(){return new hl},dI=function(){return Ja()},hI=Xr,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Za.NO_ERROR=0,Za.TIMEOUT=8,Za.HTTP_ERROR=6,ru=Za,Zm.COMPLETE="complete",cI=Zm,Km.EventType=Yi,Yi.OPEN="a",Yi.CLOSE="b",Yi.ERROR="c",Yi.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ao=Km,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,uI=Le}).apply(typeof Dl<"u"?Dl:typeof self<"u"?self:typeof window<"u"?window:{});const iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cs=new kc("@firebase/firestore");function xo(){return Cs.logLevel}function X(t,...e){if(Cs.logLevel<=ce.DEBUG){const n=e.map(xm);Cs.debug(`Firestore (${Hi}): ${t}`,...n)}}function Ss(t,...e){if(Cs.logLevel<=ce.ERROR){const n=e.map(xm);Cs.error(`Firestore (${Hi}): ${t}`,...n)}}function Ju(t,...e){if(Cs.logLevel<=ce.WARN){const n=e.map(xm);Cs.warn(`Firestore (${Hi}): ${t}`,...n)}}function xm(t){if(typeof t=="string")return t;try{/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class M2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L2{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fs,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new pI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new yt(e)}}class j2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new j2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new F2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class mI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=B2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new nt(0,0))}static max(){return new Pe(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends Ia{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const z2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ia{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return z2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new se(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new se(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(He.fromString(e))}static fromName(e){return new oe(He.fromString(e).popFirst(5))}static empty(){return new oe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new He(e.slice()))}}function $2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Pe.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Hr(s,oe.empty(),e)}function H2(t){return new Hr(t.readTime,t.key,-1)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(Pe.min(),oe.empty(),-1)}static max(){return new Hr(Pe.max(),oe.empty(),-1)}}function W2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */async function gI(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==G2)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _I{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_I.oe=-1;function Em(t){return t==null}function Zu(t){return t===0&&1/t==-1/0}function Q2(t){return typeof t=="number"&&Number.isInteger(t)&&!Zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ol(this.root,e,this.comparator,!0)}}class Ol{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new Ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new av(this.data.getIterator())}getIteratorFrom(e){return new av(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class av{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class An{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Y2("Invalid base64 string: "+i):i}}(e);return new An(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new An(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}An.EMPTY_BYTE_STRING=new An("");const X2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(t){if(Be(!!t),typeof t=="string"){let e=0;const n=X2.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ta(t){return typeof t=="string"?An.fromBase64String(t):An.fromUint8Array(t)}/**
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
 */function Im(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vI(t){const e=t.mapValue.fields.__previous_value__;return Im(e)?vI(e):e}function ec(t){const e=ks(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ml={mapValue:{}};function Ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Im(t)?4:eD(t)?9007199254740991:Z2(t)?10:11:de()}function bn(t,e){if(t===e)return!0;const n=Ri(t);if(n!==Ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ec(t).isEqual(ec(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ks(s.timestampValue),l=ks(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ta(s.bytesValue).isEqual(Ta(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ot(s.doubleValue),l=ot(i.doubleValue);return o===l?Zu(o)===Zu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ov(o)!==ov(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!bn(o[u],l[u])))return!1;return!0}(t,e);default:return de()}}function Ca(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Pi(t,e){if(t===e)return 0;const n=Ri(t),r=Ri(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ot(i.integerValue||i.doubleValue),u=ot(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return lv(t.timestampValue,e.timestampValue);case 4:return lv(ec(t),ec(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ta(i),u=Ta(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=Ee(l[c],u[c]);if(p!==0)return p}return Ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ee(ot(i.latitude),ot(o.latitude));return l!==0?l:Ee(ot(i.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,p;const m=i.fields||{},g=o.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(u=g.value)===null||u===void 0?void 0:u.arrayValue,A=Ee(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0);return A!==0?A:uv(T,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ml.mapValue&&o===Ml.mapValue)return 0;if(i===Ml.mapValue)return 1;if(o===Ml.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Ee(u[m],p[m]);if(g!==0)return g;const T=Pi(l[u[m]],c[p[m]]);if(T!==0)return T}return Ee(u.length,p.length)}(t.mapValue,e.mapValue);default:throw de()}}function lv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=ks(t),r=ks(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function uv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Pi(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Di(t){return kf(t)}function kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ks(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ta(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kf(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function Nf(t){return!!t&&"integerValue"in t}function Tm(t){return!!t&&"arrayValue"in t}function su(t){return!!t&&"mapValue"in t}function Z2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wo(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Wo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];su(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qa(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new fn(Wo(this.value))}}function wI(t){const e=[];return qa(t.fields,(n,r)=>{const s=new lt([n]);if(su(r)){const i=wI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new hn(e,0,Pe.min(),Pe.min(),Pe.min(),fn.empty(),0)}static newFoundDocument(e,n,r,s){return new hn(e,1,n,Pe.min(),r,s,0)}static newNoDocument(e,n){return new hn(e,2,n,Pe.min(),Pe.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new hn(e,3,n,Pe.min(),Pe.min(),fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nc{constructor(e,n){this.position=e,this.inclusive=n}}function cv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Pi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xI{}class et extends xI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rD(e,n,r):n==="array-contains"?new oD(e,r):n==="in"?new aD(e,r):n==="not-in"?new lD(e,r):n==="array-contains-any"?new uD(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sD(e,r):new iD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pi(n,this.value)):n!==null&&Ri(this.value)===Ri(n)&&this.matchesComparison(Pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wr extends xI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wr(e,n)}matches(e){return EI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function EI(t){return t.op==="and"}function II(t){return nD(t)&&EI(t)}function nD(t){for(const e of t.filters)if(e instanceof Wr)return!1;return!0}function Af(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(II(t))return t.filters.map(e=>Af(e)).join(",");{const e=t.filters.map(n=>Af(n)).join(",");return`${t.op}(${e})`}}function TI(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof Wr?function(r,s){return s instanceof Wr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&TI(o,s.filters[l]),!0):!1}(t,e):void de()}function CI(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof Wr?function(n){return n.op.toString()+" {"+n.getFilters().map(CI).join(" ,")+"}"}(t):"Filter"}class rD extends et{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class sD extends et{constructor(e,n){super(e,"in",n),this.keys=SI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iD extends et{constructor(e,n){super(e,"not-in",n),this.keys=SI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class oD extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tm(n)&&Ca(n.arrayValue,this.value)}}class aD extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ca(this.value.arrayValue,n)}}class lD extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ca(this.value.arrayValue,n)}}class uD extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ca(this.value.arrayValue,r))}}/**
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
 */class cD{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function dv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new cD(t,e,n,r,s,i,o)}function Cm(t){const e=Se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Em(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function Sm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hv(t.startAt,e.startAt)&&hv(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hD(t,e,n,r,s,i,o,l){return new qc(t,e,n,r,s,i,o,l)}function dD(t){return new qc(t)}function fv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fD(t){return t.collectionGroup!==null}function Go(t){const e=Se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xt(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new rc(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new rc(lt.keyField(),r))}return e.ce}function ps(t){const e=Se(t);return e.le||(e.le=pD(e,Go(t))),e.le}function pD(t,e){if(t.limitType==="F")return dv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rc(s.field,i)});const n=t.endAt?new nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nc(t.startAt.position,t.startAt.inclusive):null;return dv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bf(t,e,n){return new qc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kI(t,e){return Sm(ps(t),ps(e))&&t.limitType===e.limitType}function NI(t){return`${Cm(ps(t))}|lt:${t.limitType}`}function Eo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>CI(s)).join(", ")}]`),Em(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Di(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Di(s)).join(",")),`Target(${r})`}(ps(t))}; limitType=${t.limitType})`}function km(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=cv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Go(r),s)||r.endAt&&!function(o,l,u){const c=cv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Go(r),s))}(t,e)}function mD(t){return(e,n)=>{let r=!1;for(const s of Go(t)){const i=gD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gD(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Pi(u,c):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qa(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new Ft(oe.comparator);function sc(){return _D}const AI=new Ft(oe.comparator);function Ll(...t){let e=AI;for(const n of t)e=e.insert(n.key,n);return e}function bI(t){let e=AI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cs(){return qo()}function RI(){return qo()}function qo(){return new Wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const yD=new Ft(oe.comparator),vD=new xt(oe.comparator);function wt(...t){let e=vD;for(const n of t)e=e.add(n);return e}const wD=new xt(Ee);function xD(){return wD}/**
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
 */function Nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function PI(t){return{integerValue:""+t}}function ED(t,e){return Q2(e)?PI(e):Nm(t,e)}/**
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
 */class Kc{constructor(){this._=void 0}}function ID(t,e,n){return t instanceof Sa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Im(i)&&(i=vI(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ka?OI(t,e):t instanceof Na?MI(t,e):function(s,i){const o=DI(s,i),l=pv(o)+pv(s.Pe);return Nf(o)&&Nf(s.Pe)?PI(l):Nm(s.serializer,l)}(t,e)}function TD(t,e,n){return t instanceof ka?OI(t,e):t instanceof Na?MI(t,e):n}function DI(t,e){return t instanceof ic?function(r){return Nf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Sa extends Kc{}class ka extends Kc{constructor(e){super(),this.elements=e}}function OI(t,e){const n=LI(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Na extends Kc{constructor(e){super(),this.elements=e}}function MI(t,e){let n=LI(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class ic extends Kc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function pv(t){return ot(t.integerValue||t.doubleValue)}function LI(t){return Tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.field=e,this.transform=n}}function SD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ka&&s instanceof ka||r instanceof Na&&s instanceof Na?bi(r.elements,s.elements,bn):r instanceof ic&&s instanceof ic?bn(r.Pe,s.Pe):r instanceof Sa&&s instanceof Sa}(t.transform,e.transform)}class kD{constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qc{}function jI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new FI(t.key,Gn.none()):new Ka(t.key,t.data,Gn.none());{const n=t.data,r=fn.empty();let s=new xt(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ds(t.key,r,new mn(s.toArray()),Gn.none())}}function ND(t,e,n){t instanceof Ka?function(s,i,o){const l=s.value.clone(),u=gv(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(s,i,o){if(!iu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=gv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(VI(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof Ka?function(i,o,l,u){if(!iu(i.precondition,o))return l;const c=i.value.clone(),p=_v(i.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ds?function(i,o,l,u){if(!iu(i.precondition,o))return l;const c=_v(i.fieldTransforms,u,o),p=o.data;return p.setAll(VI(i)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return iu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function AD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=DI(r.transform,s||null);i!=null&&(n===null&&(n=fn.empty()),n.set(r.field,i))}return n||null}function mv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bi(r,s,(i,o)=>SD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ka extends Qc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ds extends Qc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function VI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gv(t,e,n){const r=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,TD(o,l,n[s]))}return r}function _v(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ID(i,o,e))}return r}class FI extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bD extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ND(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=jI(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),wt())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>mv(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>mv(n,r))}}class Am{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length);let s=function(){return yD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Am(e,n,r,s)}}/**
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
 */new lI([4294967295,4294967295],0);class MD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LD(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jD(t,e){return Rf(t,e.toTimestamp())}function pi(t){return Be(!!t),Pe.fromTimestamp(function(n){const r=ks(n);return new nt(r.seconds,r.nanos)}(t))}function UI(t,e){return Pf(t,e).canonicalString()}function Pf(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function VD(t){const e=He.fromString(t);return Be(GD(e)),e}function Df(t,e){return UI(t.databaseId,e.path)}function FD(t){const e=VD(t);return e.length===4?He.emptyPath():BD(e)}function UD(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BD(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yv(t,e,n){return{name:Df(t,e),fields:n.value.mapValue.fields}}function zD(t,e){let n;if(e instanceof Ka)n={update:yv(t,e.key,e.value)};else if(e instanceof FI)n={delete:Df(t,e.key)};else if(e instanceof Ds)n={update:yv(t,e.key,e.data),updateMask:WD(e.fieldMask)};else{if(!(e instanceof bD))return de();n={verify:Df(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ka)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Na)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ic)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function $D(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?pi(s.updateTime):pi(i);return o.isEqual(Pe.min())&&(o=pi(i)),new kD(o,s.transformResults||[])}(n,e))):[]}function HD(t){let e=FD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=BI(m);return g instanceof Wr&&II(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(S){return new rc(zs(S.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Em(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,T=m.values||[];return new nc(T,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,T=m.values||[];return new nc(T,g)}(n.endAt)),hD(e,s,o,i,l,"F",u,c)}function BI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zs(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zs(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zs(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zs(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return et.create(zs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wr.create(n.compositeFilter.filters.map(r=>BI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function zs(t){return lt.fromServerFormat(t.fieldPath)}function WD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GD(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.ct=e}}function KD(t){const e=HD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bf(e,e.limit,"L"):e}/**
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
 */class QD{constructor(){this.un=new YD}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Hr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class YD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new xt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oi(0)}static kn(){return new Oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.changes=new Wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ko(r.mutation,s,mn.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,wt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=wt()){const s=cs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ll();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,wt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=sc();const o=qo(),l=function(){return qo()}();return n.forEach((u,c)=>{const p=r.get(c.key);s.has(c.key)&&(p===void 0||p.mutation instanceof Ds)?i=i.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),Ko(p.mutation,c,p.mutation.getFieldMask(),nt.now())):o.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>{var m;return l.set(c,new JD(p,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=qo();let s=new Ft((o,l)=>o-l),i=wt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||mn.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(s.get(l.batchId)||wt()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=RI();p.forEach(g=>{if(!i.has(g)){const T=jI(n.get(g),r.get(g));T!==null&&m.set(g,T),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(cs());let l=-1,u=i;return o.next(c=>V.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,wt())).next(p=>({batchId:l,changes:bI(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=Ll();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ll();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const c=function(m,g){return new qc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,hn.newInvalidDocument(p)))});let l=Ll();return o.forEach((u,c)=>{const p=i.get(u);p!==void 0&&Ko(p.mutation,c,mn.empty(),nt.now()),km(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class eO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pi(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:KD(s.bundledQuery),readTime:pi(s.readTime)}}(n)),V.resolve()}}/**
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
 */class tO{constructor(){this.overlays=new Ft(oe.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cs();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=cs(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ft((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=i.get(c.largestBatchId);p===null&&(p=cs(),i=i.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=cs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PD(n,r));let i=this.Ir.get(n);i===void 0&&(i=wt(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class bm{constructor(){this.Tr=new xt(Je.Er),this.dr=new xt(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new oe(new He([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new oe(new He([])),r=new Je(n,e),s=new Je(n,e+1);let i=wt();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return oe.comparator(e.key,n.key)||Ee(e.wr,n.wr)}static Ar(e,n){return Ee(e.wr,n.wr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new xt(Je.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RD(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(Ee);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new Je(new oe(i),0);let l=new xt(Ee);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Je(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.Mr=e,this.docs=function(){return new Ft(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():hn.newInvalidDocument(n))}getEntries(e,n){let r=sc();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():hn.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sc();const o=n.path,l=new oe(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||W2(H2(p),r)<=0||(s.has(p.key)||km(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iO(this)}getSize(e){return V.resolve(this.size)}}class iO extends XD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.persistence=e,this.Nr=new Wi(n=>Cm(n),Sm),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new bm,this.targetCount=0,this.kr=Oi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new _I(0),this.Kr=!1,this.Kr=!0,this.$r=new nO,this.referenceDelegate=e(this),this.Ur=new oO(this),this.indexManager=new QD,this.remoteDocumentCache=function(s){return new sO(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qD(n),this.Gr=new eO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new rO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new lO(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class lO extends q2{constructor(e){super(),this.currentSequenceNumber=e}}class Rm{constructor(e){this.persistence=e,this.Jr=new bm,this.Yr=null}static Zr(e){return new Rm(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=oe.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=wt(),s=wt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pm(e,n.fromCache,r,s)}}/**
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
 */class cO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return G1()?8:K2(It())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uO;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(xo()<=ce.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(xo()<=ce.DEBUG&&X("QueryEngine","Query:",Eo(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(xo()<=ce.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ps(n))):V.resolve())}Yi(e,n){if(fv(n))return V.resolve(null);let r=ps(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bf(n,null,"F"),r=ps(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=wt(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,bf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return fv(n)||s.isEqual(Pe.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(xo()<=ce.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Eo(n)),this.rs(e,o,n,$2(s,-1)).next(l=>l))})}ts(e,n){let r=new xt(mD(e));return n.forEach((s,i)=>{km(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return xo()<=ce.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Eo(n)),this.Ji.getDocumentsMatchingQuery(e,n,Hr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class hO{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ft(Ee),this._s=new Wi(i=>Cm(i),Sm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dO(t,e,n,r){return new hO(t,e,n,r)}async function zI(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=wt();for(const c of s){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of i){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function fO(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let T=V.resolve();return g.forEach(S=>{T=T.next(()=>p.getEntry(u,S)).next(A=>{const M=c.docVersions.get(S);Be(M!==null),A.version.compareTo(M)<0&&(m.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),p.addEntry(A)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=wt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function pO(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mO(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class vv{constructor(){this.activeTargetIds=xD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gO{constructor(){this.so=new vv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jl=null;function od(){return jl===null?jl=function(){return 268435456+Math.round(2147483648*Math.random())}():jl++,"0x"+jl.toString(16)}/**
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
 */const _t="WebChannelConnection";class wO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=od(),u=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(p=>(X("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ju("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=yO[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=od();return new Promise((o,l)=>{const u=new uI;u.setWithCredentials(!0),u.listenOnce(cI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ru.NO_ERROR:const p=u.getResponseJson();X(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case ru.TIMEOUT:X(_t,`RPC '${e}' ${i} timed out`),l(new se(U.DEADLINE_EXCEEDED,"Request time out"));break;case ru.HTTP_ERROR:const m=u.getStatus();if(X(_t,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const S=function(M){const C=M.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(C)>=0?C:U.UNKNOWN}(T.status);l(new se(S,T.message))}else l(new se(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new se(U.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{X(_t,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);X(_t,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=od(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fI(),l=dI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");X(_t,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,T=!1;const S=new vO({Io:M=>{T?X(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(g||(X(_t,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),X(_t,`RPC '${e}' stream ${s} sending:`,M),m.send(M))},To:()=>m.close()}),A=(M,C,E)=>{M.listen(C,N=>{try{E(N)}catch(D){setTimeout(()=>{throw D},0)}})};return A(m,Ao.EventType.OPEN,()=>{T||(X(_t,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),A(m,Ao.EventType.CLOSE,()=>{T||(T=!0,X(_t,`RPC '${e}' stream ${s} transport closed`),S.So())}),A(m,Ao.EventType.ERROR,M=>{T||(T=!0,Ju(_t,`RPC '${e}' stream ${s} transport errored:`,M),S.So(new se(U.UNAVAILABLE,"The operation could not be completed")))}),A(m,Ao.EventType.MESSAGE,M=>{var C;if(!T){const E=M.data[0];Be(!!E);const N=E,D=N.error||((C=N[0])===null||C===void 0?void 0:C.error);if(D){X(_t,`RPC '${e}' stream ${s} received error:`,D);const L=D.status;let P=function(x){const I=$e[x];if(I!==void 0)return OD(I)}(L),v=D.message;P===void 0&&(P=U.INTERNAL,v="Unknown error status: "+L+" with message "+D.message),T=!0,S.So(new se(P,v)),m.close()}else X(_t,`RPC '${e}' stream ${s} received:`,E),S.bo(E)}}),A(l,hI.STAT_EVENT,M=>{M.stat===Sf.PROXY?X(_t,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Sf.NOPROXY&&X(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function ad(){return typeof document<"u"?document:null}/**
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
 */class $I{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $I(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Ss(n.toString()),Ss("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new se(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EO extends xO{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=$D(e.writeResults,e.commitTime),r=pi(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=UD(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new se(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Pf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(U.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Pf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class TO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ss(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ya(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Se(u);c.L_.add(4),await Qa(c),c.q_.set("Unknown"),c.L_.delete(4),await Xc(c)}(this))})}),this.q_=new TO(r,s)}}async function Xc(t){if(Ya(t))for(const e of t.B_)await e(!0)}async function Qa(t){for(const e of t.B_)await e(!1)}function Ya(t){return Se(t).L_.size===0}async function HI(t,e,n){if(!Gc(e))throw e;t.L_.add(1),await Qa(t),t.q_.set("Offline"),n||(n=()=>pO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Xc(t)})}function WI(t,e){return e().catch(n=>HI(t,n,e))}async function Jc(t){const e=Se(t),n=Gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;SO(e);)try{const s=await mO(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,kO(e,s)}catch(s){await HI(e,s)}GI(e)&&qI(e)}function SO(t){return Ya(t)&&t.O_.length<10}function kO(t,e){t.O_.push(e);const n=Gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function GI(t){return Ya(t)&&!Gr(t).n_()&&t.O_.length>0}function qI(t){Gr(t).start()}async function NO(t){Gr(t).p_()}async function AO(t){const e=Gr(t);for(const n of t.O_)e.m_(n.mutations)}async function bO(t,e,n){const r=t.O_.shift(),s=Am.from(r,e,n);await WI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jc(t)}async function RO(t,e){e&&Gr(t).V_&&await async function(r,s){if(function(o){return DD(o)&&o!==U.ABORTED}(s.code)){const i=r.O_.shift();Gr(r).s_(),await WI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jc(r)}}(t,e),GI(t)&&qI(t)}async function xv(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ya(n);n.L_.add(3),await Qa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Xc(n)}async function PO(t,e){const n=Se(t);e?(n.L_.delete(2),await Xc(n)):e||(n.L_.add(2),await Qa(n),n.q_.set("Unknown"))}function Gr(t){return t.U_||(t.U_=function(n,r,s){const i=Se(n);return i.w_(),new EO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:NO.bind(null,t),mo:RO.bind(null,t),f_:AO.bind(null,t),g_:bO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Jc(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Dm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function KI(t,e){if(Ss("AsyncQueue",`${e}: ${t}`),Gc(t))return new se(U.UNAVAILABLE,`${e}: ${t}`);throw t}class DO{constructor(){this.queries=Ev(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Se(n),i=s.queries;s.queries=Ev(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new se(U.ABORTED,"Firestore shutting down"))}}function Ev(){return new Wi(t=>NI(t),kI)}function OO(t){t.Y_.forEach(e=>{e.next()})}var Iv,Tv;(Tv=Iv||(Iv={})).ea="default",Tv.Cache="cache";class MO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Wi(l=>NI(l),kI),this.Ma=new Map,this.xa=new Set,this.Oa=new Ft(oe.comparator),this.Na=new Map,this.La=new bm,this.Ba={},this.ka=new Map,this.qa=Oi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function LO(t,e,n){const r=UO(t);try{const s=await function(o,l){const u=Se(o),c=nt.now(),p=l.reduce((T,S)=>T.add(S.key),wt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=sc(),A=wt();return u.cs.getEntries(T,p).next(M=>{S=M,S.forEach((C,E)=>{E.isValidDocument()||(A=A.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,S)).next(M=>{m=M;const C=[];for(const E of l){const N=AD(E,m.get(E.key).overlayedDocument);N!=null&&C.push(new Ds(E.key,N,wI(N.value.mapValue),Gn.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,C,l)}).next(M=>{g=M;const C=M.applyToLocalDocumentSet(m,A);return u.documentOverlayCache.saveOverlays(T,M.batchId,C)})}).then(()=>({batchId:g.batchId,changes:bI(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ft(Ee)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await Zc(r,s.changes),await Jc(r.remoteStore)}catch(s){const i=KI(s,"Failed to persist write");n.reject(i)}}function Cv(t,e,n){const r=Se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Se(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&OO(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jO(t,e){const n=Se(t),r=e.batch.batchId;try{const s=await fO(n.localStore,e);YI(n,r,null),QI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zc(n,s)}catch(s){await gI(s)}}async function VO(t,e,n){const r=Se(t);try{const s=await function(o,l){const u=Se(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(Be(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);YI(r,e,n),QI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zc(r,s)}catch(s){await gI(s)}}function QI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function YI(t,e,n){const r=Se(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}async function Zc(t,e,n){const r=Se(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=void 0)===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Pm.Wi(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const p=Se(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.$i,T=>p.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>V.forEach(g.Ui,T=>p.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!Gc(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const T=p.os.get(g),S=T.snapshotVersion,A=T.withLastLimboFreeSnapshotVersion(S);p.os=p.os.insert(g,A)}}}(r.localStore,i))}async function FO(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await zI(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new se(U.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zc(n,r.hs)}}function UO(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VO.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return dO(this.persistence,new cO,e.initialUser,this.serializer)}Ga(e){return new aO(Rm.Zr,this.serializer)}Wa(e){return new gO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class Of{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FO.bind(null,this.syncEngine),await PO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DO}()}createDatastore(e){const n=Yc(e.databaseInfo.databaseId),r=function(i){return new wO(i)}(e.databaseInfo);return function(i,o,l,u){return new IO(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new CO(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Cv(this.syncEngine,n,0),function(){return wv.D()?new wv:new _O}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,p){const m=new MO(s,i,o,l,u,c);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Se(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Qa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Of.provider={build:()=>new Of};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=mI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=KI(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ld(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zO(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xv(e.remoteStore,s)),t._onlineComponents=e}async function zO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await ld(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ju("Error using user provided cache. Falling back to memory cache: "+n),await ld(t,new oc)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await ld(t,new oc);return t._offlineComponents}async function $O(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Sv(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Sv(t,new Of))),t._onlineComponents}function HO(t){return $O(t).then(e=>e.syncEngine)}/**
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
 */function XI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const kv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t,e,n){if(!n)throw new se(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GO(t,e,n,r){if(e===!0&&r===!0)throw new se(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nv(t){if(!oe.isDocumentKey(t))throw new se(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Om(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Mf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Om(t);throw new se(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Av{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mm{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Av({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Av(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new O2;switch(r.type){case"firstParty":return new V2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kv.get(n);r&&(X("ComponentProvider","Removing Datastore"),kv.delete(n),r.terminate())}(this),Promise.resolve()}}function qO(t,e,n,r={}){var s;const i=(t=Mf(t,Mm))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ju("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=sx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new se(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new M2(new pI(l,u))}}/**
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
 */class Lm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lm(this.firestore,e,this._query)}}class qn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qn(this.firestore,e,this._key)}}class Aa extends Lm{constructor(e,n,r){super(e,n,dD(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qn(this.firestore,null,new oe(e))}withConverter(e){return new Aa(this.firestore,e,this._path)}}function KO(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=mI.newId()),WO("doc","path",e),t instanceof Mm){const r=He.fromString(e,...n);return Nv(r),new qn(t,null,new oe(r))}{if(!(t instanceof qn||t instanceof Aa))throw new se(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Nv(r),new qn(t.firestore,t instanceof Aa?t.converter:null,new oe(r))}}/**
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
 */class bv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $I(this,"async_queue_retry"),this.Vu=()=>{const r=ad();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ad();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ad();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new fs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gc(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ss("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Dm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class JI extends Mm{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new bv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bv(e),this._firestoreClient=void 0,await e}}}function QO(t,e){const n=typeof t=="object"?t:Ac(),r=typeof t=="string"?t:"(default)",s=Nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tx("firestore");i&&qO(s,...i)}return s}function YO(t){if(t._terminated)throw new se(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XO(t),t._firestoreClient}function XO(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,p){return new J2(l,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,XI(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BO(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ba{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ba(An.fromBase64String(e))}catch(n){throw new se(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ba(An.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ZI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */class tT{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=/^__.*__$/;class ZO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ka(e,this.data,n,this.fieldTransforms)}}function nT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Vm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Vm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ac(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nT(this.Cu)&&JO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class eM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yc(e)}Qu(e,n,r,s=!1){return new Vm({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tM(t){const e=t._freezeSettings(),n=Yc(t._databaseId);return new eM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nM(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);oT("Data must be an object, but it was:",o,r);const l=sT(r,o);let u,c;if(i.merge)u=new mn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=rM(e,m,n);if(!o.contains(g))throw new se(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);oM(p,g)||p.push(g)}u=new mn(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new ZO(new fn(l),u,c)}class Fm extends jm{_toFieldTransform(e){return new CD(e.path,new Sa)}isEqual(e){return e instanceof Fm}}function rT(t,e){if(iT(t=Ye(t)))return oT("Unsupported field value:",e,t),sT(t,e);if(t instanceof jm)return function(r,s){if(!nT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=rT(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ED(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Rf(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rf(s.serializer,i)}}if(r instanceof eT)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ba)return{bytesValue:LD(s.serializer,r._byteString)};if(r instanceof qn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:UI(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tT)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Nm(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Om(r)}`)}(t,e)}function sT(t,e){const n={};return yI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qa(t,(r,s)=>{const i=rT(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof eT||t instanceof ba||t instanceof qn||t instanceof jm||t instanceof tT)}function oT(t,e,n){if(!iT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Om(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function rM(t,e,n){if((e=Ye(e))instanceof ZI)return e._internalPath;if(typeof e=="string")return iM(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const sM=new RegExp("[~\\*/\\[\\]]");function iM(t,e,n){if(e.search(sM)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ZI(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new se(U.INVALID_ARGUMENT,l+t+u)}function oM(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function aM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function lM(t,e,n){t=Mf(t,qn);const r=Mf(t.firestore,JI),s=aM(t.converter,e,n);return uM(r,[nM(tM(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Gn.none())])}function uM(t,e){return function(r,s){const i=new fs;return r.asyncQueue.enqueueAndForget(async()=>LO(await HO(r),s,i)),i.promise}(YO(t),e)}function cM(){return new Fm("serverTimestamp")}(function(e,n=!0){(function(s){Hi=s})(bs),ws(new Fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new JI(new L2(r.getProvider("auth-internal")),new U2(r.getProvider("app-check-internal")),function(c,p){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new se(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(c.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Sn(iv,"4.7.3",e),Sn(iv,"4.7.3","esm2017")})();const hM={apiKey:"AIzaSyAldb_sD5Vg1zDt3P2CnHE1_boY4RMf9m4",authDomain:"hometaste-d6834.firebaseapp.com",databaseURL:"https://hometaste-d6834-default-rtdb.firebaseio.com",projectId:"hometaste-d6834",storageBucket:"hometaste-d6834.firebasestorage.app",messagingSenderId:"132298816482",appId:"1:132298816482:web:2915b8e21fcb62e6c497bb"},Um=rN().length?Ac():ux(hM),Rv=P2(Um),hr=bR(Um);let Lf=null;try{Lf=QO(Um)}catch(t){console.warn("Firestore init skipped:",t)}let Vl=null;async function dr(){return Vl||new Promise((t,e)=>{const n=xP(Rv,async r=>{try{if(r){Vl=r,n(),t(r);return}const s=await mP(Rv);Vl=s.user,n(),t(s.user)}catch(s){n(),e(s)}})})}function ts(t){return t.trim().toUpperCase()}function dM(t=6){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let n="HT-";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}const Dt={generatePairCode:()=>dM(6),joinFamily:async t=>{try{const n=(await dr()).uid,r=ts(t);return r?(await xf(ur(hr,`families/${r}/members/${n}`),!0),Lf&&await lM(KO(Lf,`families/${r}/members/${n}`),{joinedAt:cM()},{merge:!0}),localStorage.setItem("familyCode",r),{success:!0,uid:n,familyCode:r}):{success:!1,error:"家庭 Code 不能为空"}}catch(e){console.error("Firebase Join Error:",e);const n=e==null?void 0:e.code;return n==="PERMISSION_DENIED"||n==="permission-denied"?{success:!1,error:"权限被拒绝：请检查 Realtime Database / Firestore Rules（需要允许写入 members 才能加入）。"}:{success:!1,error:(e==null?void 0:e.message)||"网络连接失败或数据库不可用"}}},subscribeToData:async(t,e,n)=>{await dr();const r=ts(t),s=ur(hr,`families/${r}/${e}`);return _R(s,i=>{n(i.val())})},logActivity:async(t,e)=>{const n=await dr(),r=ts(t);await mR(ur(hr,`families/${r}/activity`),{actorUid:e.actorUid||n.uid,actorName:e.actorName||"家人",action:e.action,targetType:e.targetType,targetName:e.targetName,ts:e.ts||Date.now()})},subscribeToActivity:async(t,e,n)=>{await dr();const r=ts(t),s=ER(ur(hr,`families/${r}/activity`),xR((n==null?void 0:n.limit)??30));let i=!1;return setTimeout(()=>i=!0,300),yR(s,o=>{const l=o.val();l&&i&&e(l)})},pushData:async(t,e,n)=>{await dr();const r=ts(t);await xf(ur(hr,`families/${r}/${e}`),n)},updateUserStatus:async(t,e,n)=>{await dr();const r=ts(t);await Uy(ur(hr,`families/${r}/users/${e}`),{...n,lastActive:Date.now()}).catch(()=>{})},initializeCloudData:async(t,e)=>{var o;await dr();const n=ts(t),r=await gR(ur(hr,`families/${n}`)),s=r.exists()?r.val()||{}:{},i={};for(const[l,u]of Object.entries(e||{}))s[l]==null&&(i[l]=u);return(o=s.meta)!=null&&o.createdAt||(i.meta={...s.meta||{},createdAt:OR()}),Object.keys(i).length===0?!1:(await Uy(ur(hr,`families/${n}`),i),!0)}};async function fM(){return(await dr()).uid}const pM=({list:t,onUpdate:e,plans:n,recipes:r,inventory:s,pairCode:i,uid:o,actorName:l})=>{const[u,c]=H.useState(""),p=async(A,M)=>{if(!(!i||!o))try{await Dt.logActivity(i,{actorUid:o,actorName:l||"家人",action:A,targetType:"采购",targetName:M,ts:Date.now()})}catch(C){console.warn("logActivity failed:",C)}},m=A=>{const M=A.trim(),C=/^(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?\s*(.+)$/,E=M.match(C);if(E){const L=E[1],P=E[3]||"";return{name:E[4],amount:`${L}${P}`}}const N=/^(.+)\s+(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?$/,D=M.match(N);if(D){const L=D[1],P=D[2],v=D[4]||"";return{name:L,amount:`${P}${v}`}}return{name:M,amount:"适量"}},g=async A=>{if(!A.trim())return;const{name:M,amount:C}=m(A),E={id:Date.now().toString(),name:M,amount:C,checked:!1,addedAt:Date.now()},N=[E,...t];e(N),c(""),await p("新增",`${E.name}（${E.amount}）`)},T=async()=>{const A=t.filter(C=>C.checked),M=t.filter(C=>!C.checked);e(M),A.length>0&&await p("清除已买",`共 ${A.length} 项`)},S=async A=>{const M=t.find(D=>D.id===A),C=!(M!=null&&M.checked),E=t.map(D=>D.id===A?{...D,checked:C}:D);e(E);const N=(M==null?void 0:M.name)||"某项";await p(C?"完成":"取消完成",N)};return d.jsxs("div",{className:"p-5 lg:p-10 space-y-8 pb-32 max-w-4xl mx-auto animate-in fade-in duration-500",children:[d.jsxs("header",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 italic",children:"采购清单"}),d.jsx("button",{onClick:T,className:"px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-500 hover:text-white transition-colors",children:"清除已买"})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("input",{type:"text",placeholder:"例如: 2斤排骨 (自动识别数量)",className:"flex-1 bg-white border border-gray-100 p-4 rounded-xl font-bold text-base outline-none shadow-sm focus:border-amber-400 transition-all",value:u,onChange:A=>c(A.target.value),onKeyDown:A=>A.key==="Enter"&&g(u)}),d.jsx("button",{onClick:()=>g(u),className:"w-14 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl shadow-lg active:scale-90 transition-all",children:"＋"})]}),d.jsx("div",{className:"space-y-3",children:t.length===0?d.jsxs("div",{className:"py-20 text-center text-gray-300",children:[d.jsx("span",{className:"text-6xl block mb-4 grayscale opacity-20",children:"🛒"}),d.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",children:"清单空空如也"})]}):t.map(A=>d.jsxs("div",{onClick:()=>S(A.id),className:`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${A.checked?"bg-gray-50 border-transparent opacity-40":"bg-white border-gray-100 shadow-sm hover:border-amber-200"}`,children:[d.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${A.checked?"bg-amber-500 border-amber-500":"border-gray-200 bg-white"}`,children:A.checked&&d.jsx("span",{className:"text-white text-[10px] font-bold",children:"✓"})}),d.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[d.jsx("span",{className:`font-bold text-lg ${A.checked?"line-through text-gray-400":"text-gray-900"}`,children:A.name}),d.jsx("span",{className:"text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded",children:A.amount})]})]},A.id))})]})},mM=({currentView:t,onViewChange:e})=>{const n=[{id:"dashboard",label:"首页",icon:w1,color:"text-orange-500"},{id:"recipes",label:"食谱",icon:x1,color:"text-emerald-500"},{id:"plan",label:"计划",icon:Gw,color:"text-indigo-500"},{id:"shopping",label:"清单",icon:qw,color:"text-rose-500"},{id:"inventory",label:"库存",icon:Kw,color:"text-cyan-500"}];return d.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 px-6 pb-safe z-[100] h-20 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]",children:d.jsx("div",{className:"flex justify-between items-center h-full max-w-lg mx-auto",children:n.map(r=>{const s=t===r.id,i=r.icon;return d.jsxs("button",{onClick:()=>e(r.id),className:"flex flex-col items-center justify-center w-12 h-full active:scale-95 transition-all",children:[d.jsx("div",{className:`transition-all duration-300 ${s?`${r.color} -translate-y-1`:"text-gray-300"}`,children:d.jsx(i,{className:"w-6 h-6"})}),d.jsx("span",{className:`text-[10px] font-bold mt-1 transition-colors ${s?"text-gray-900":"text-transparent"}`,children:r.label})]},r.id)})})})},aT=["素菜小炒","肉菜小炒","海鲜类","油炸类","卤味类","速食类","炙烤类","滋补炖菜","精美甜品","清爽饮品","暖心汤品","美味主食","新鲜水果","其他"],gM=[{id:"1",name:"鸡蛋",amount:12,unit:"个",category:"蛋奶",storageZone:"冷藏",updatedAt:Date.now()},{id:"2",name:"西红柿",amount:3,unit:"个",category:"蔬菜",storageZone:"常温",updatedAt:Date.now()},{id:"3",name:"红富士苹果",amount:5,unit:"个",category:"水果",storageZone:"常温",updatedAt:Date.now()},{id:"4",name:"老抽",amount:1,unit:"瓶",category:"调料",storageZone:"常温",updatedAt:Date.now()},{id:"5",name:"土豆",amount:4,unit:"个",category:"蔬菜",storageZone:"常温",updatedAt:Date.now()},{id:"6",name:"巨峰葡萄",amount:1,unit:"串",category:"水果",storageZone:"冷藏",updatedAt:Date.now()},{id:"7",name:"花生油",amount:5,unit:"升",category:"粮油",storageZone:"常温",updatedAt:Date.now()},{id:"8",name:"干香菇",amount:100,unit:"克",category:"干货",storageZone:"常温",updatedAt:Date.now()}],_M=[{id:"r1",title:"西红柿炒鸡蛋",category:"素菜小炒",description:"国民家常菜，酸甜适口，做法简单。",images:["https://picsum.photos/seed/tomato/800/600"],prepTime:10,cookTime:10,ingredients:[{name:"鸡蛋",amount:3,unit:"个"},{name:"西红柿",amount:2,unit:"个"}],steps:["西红柿切块，鸡蛋打散","热锅炒蛋盛出","炒西红柿出汁","合炒调味"],tags:["简单","经典"]},{id:"r2",title:"元气水果沙拉",category:"新鲜水果",description:"清爽解腻，维C满满。",images:["https://picsum.photos/seed/fruit/800/600"],prepTime:5,cookTime:0,ingredients:[{name:"苹果",amount:1,unit:"个"},{name:"葡萄",amount:10,unit:"颗"},{name:"酸奶",amount:1,unit:"盒"}],steps:["水果切块","倒入酸奶拌匀"],tags:["健康","无火"]}],yM=({onSave:t,onCancel:e,initialRecipe:n})=>{var Y;const[r,s]=H.useState(!1),[i,o]=H.useState((n==null?void 0:n.title)||""),[l,u]=H.useState((n==null?void 0:n.description)||""),[c,p]=H.useState((n==null?void 0:n.category)||"素菜小炒"),[m,g]=H.useState((n==null?void 0:n.images)||[]),[T,S]=H.useState(()=>n!=null&&n.ingredients&&n.ingredients.length>0?n.ingredients:[{name:"",amount:0,unit:"g"}]),[A,M]=H.useState(()=>n!=null&&n.steps&&n.steps.length>0?n.steps:[""]),[C,E]=H.useState(((Y=n==null?void 0:n.source)==null?void 0:Y.url)||""),[N,D]=H.useState(null),[L,P]=H.useState({scale:1,x:0,y:0}),v=H.useRef(!1),_=H.useRef({x:0,y:0}),x=H.useRef({x:0,y:0}),I=H.useRef(null),k=H.useRef(new Map),b=H.useRef(null),y=j=>{const G=j.target.files;G&&Array.from(G).forEach(Z=>{const J=new FileReader;J.onloadend=()=>g(ze=>[...ze,J.result]),J.readAsDataURL(Z)})},Q=j=>{if(j.target.setPointerCapture(j.pointerId),k.current.set(j.pointerId,{x:j.clientX,y:j.clientY}),k.current.size===1)v.current=!0,_.current={x:j.clientX,y:j.clientY},x.current={x:L.x,y:L.y};else if(k.current.size===2){v.current=!1;const G=Array.from(k.current.values());b.current=Math.hypot(G[0].x-G[1].x,G[0].y-G[1].y)}},ne=j=>{if(k.current.has(j.pointerId)){if(k.current.set(j.pointerId,{x:j.clientX,y:j.clientY}),k.current.size===2){const G=Array.from(k.current.values()),Z=Math.hypot(G[0].x-G[1].x,G[0].y-G[1].y);if(b.current!==null&&b.current>0){const ze=(Z-b.current)*.005;P(Pt=>({...Pt,scale:Math.min(3,Math.max(1,Pt.scale+ze))}))}b.current=Z}else if(k.current.size===1&&v.current){const G=j.clientX-_.current.x,Z=j.clientY-_.current.y;P(J=>({...J,x:x.current.x+G,y:x.current.y+Z}))}}},_e=j=>{if(j.target.releasePointerCapture(j.pointerId),k.current.delete(j.pointerId),k.current.size<2&&(b.current=null),k.current.size===1){const G=k.current.values().next().value;_.current={x:G.x,y:G.y},x.current={x:L.x,y:L.y},v.current=!0}else k.current.size===0&&(v.current=!1)},we=async()=>{if(!(N===null||!I.current))try{const{default:j}=await Qw(async()=>{const{default:J}=await import("./html2canvas.esm-CBrSDip1.js");return{default:J}},[],import.meta.url),Z=(await j(I.current,{useCORS:!0,backgroundColor:"#111827",scale:2,logging:!1})).toDataURL("image/jpeg",.85);g(J=>{const ze=[...J];return ze[N]=Z,ze}),D(null),P({scale:1,x:0,y:0})}catch(j){console.error("Crop failed:",j),alert("图片裁剪失败，请重试")}},z=async()=>{if(!i||m.length===0)return alert("请填写标题并上传图片");s(!0),await t({id:(n==null?void 0:n.id)||"",title:i,description:l,category:c,images:m,prepTime:15,cookTime:20,ingredients:T.filter(G=>G.name),steps:A.filter(G=>G),tags:["家常"],source:C?{type:"link",url:C}:void 0})||s(!1)};return d.jsxs("div",{className:"bg-[#fcfdfe] min-h-screen pb-32 pt-16 animate-in slide-in-from-bottom duration-300",children:[N!==null&&d.jsxs("div",{className:"fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 select-none touch-none",children:[d.jsxs("div",{className:"relative w-full max-w-sm aspect-square shadow-2xl rounded-2xl overflow-hidden border border-white/10",children:[d.jsx("div",{ref:I,className:"w-full h-full bg-gray-900 relative overflow-hidden",children:d.jsx("img",{src:m[N],className:"w-full h-full object-cover origin-center cursor-move",style:{transform:`scale(${L.scale}) translate(${L.x}px, ${L.y}px)`,touchAction:"none"},onPointerDown:Q,onPointerMove:ne,onPointerUp:_e,onPointerCancel:_e,draggable:!1,alt:"editing"})}),d.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10",children:[d.jsx("div",{className:"absolute top-1/3 left-0 right-0 h-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute top-2/3 left-0 right-0 h-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute left-1/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute left-2/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"}),d.jsx("div",{className:"absolute inset-0 border border-white/20 rounded-2xl"})]})]}),d.jsxs("div",{className:"mt-8 w-full max-w-sm space-y-6",children:[d.jsxs("div",{className:"flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl",children:[d.jsx("span",{className:"text-white text-xs font-bold w-8",children:"缩放"}),d.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:L.scale,onChange:j=>P({...L,scale:parseFloat(j.target.value)}),className:"flex-1 accent-emerald-500 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"}),d.jsxs("span",{className:"text-white text-xs font-mono w-8 text-right",children:[L.scale.toFixed(1),"x"]})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx("button",{onClick:()=>P({scale:1,x:0,y:0}),className:"flex-1 py-3 bg-gray-800 text-white rounded-xl text-xs font-bold hover:bg-gray-700 transition-colors",children:"重置"}),d.jsx("button",{onClick:we,className:"flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors",children:"确认裁剪"})]}),d.jsx("p",{className:"text-center text-gray-400 text-[10px] font-bold tracking-widest uppercase",children:"单指拖拽 • 双指缩放"})]})]}),d.jsxs("header",{className:"fixed top-0 left-0 right-0 lg:left-64 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 px-6 h-16 flex justify-between items-center",children:[d.jsx("button",{onClick:e,className:"text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors",children:"取消"}),d.jsx("h2",{className:"text-sm font-black text-gray-900",children:"记录美味"}),d.jsx("button",{onClick:z,disabled:r,className:"px-5 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors",children:r?"...":"发布"})]}),d.jsxs("div",{className:"max-w-2xl mx-auto px-5 space-y-8 mt-4",children:[d.jsx("section",{children:d.jsxs("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2",children:[d.jsxs("label",{className:"shrink-0 w-24 h-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all hover:bg-gray-100 hover:border-emerald-200",children:[d.jsx("span",{className:"text-xl text-gray-400",children:"＋"}),d.jsx("span",{className:"text-[10px] font-bold text-gray-400 mt-1",children:"添加"}),d.jsx("input",{type:"file",className:"hidden",accept:"image/*",multiple:!0,onChange:y})]}),m.map((j,G)=>d.jsxs("div",{onClick:()=>{D(G),P({scale:1,x:0,y:0})},className:"shrink-0 w-24 h-24 bg-gray-100 rounded-xl relative overflow-hidden group border border-gray-100 cursor-pointer shadow-sm",children:[d.jsx("img",{src:j,className:"w-full h-full object-cover",alt:"recipe thumb"}),d.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition-opacity backdrop-blur-[2px]",children:"点击裁剪"}),G===0&&d.jsx("span",{className:"absolute bottom-1 left-1 px-1.5 py-0.5 bg-emerald-500 text-white text-[8px] font-bold rounded",children:"封面"}),d.jsx("button",{onClick:Z=>{Z.stopPropagation(),g(m.filter((J,ze)=>ze!==G))},className:"absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-red-500 transition-colors",children:"✕"})]},G))]})}),d.jsxs("section",{className:"space-y-4",children:[d.jsx("input",{type:"text",placeholder:"给这道菜起个名字",className:"w-full text-2xl font-black outline-none placeholder:text-gray-300 bg-transparent border-b border-gray-100 pb-2 focus:border-emerald-500 transition-colors",value:i,onChange:j=>o(j.target.value)}),d.jsx("textarea",{placeholder:"写下你的烹饪心得...",className:"w-full bg-gray-50/50 p-4 rounded-xl h-24 outline-none resize-none text-sm font-medium leading-relaxed focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:l,onChange:j=>u(j.target.value)}),d.jsx("div",{className:"flex flex-wrap gap-2",children:aT.map(j=>d.jsx("button",{onClick:()=>p(j),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${c===j?"bg-emerald-600 text-white border-emerald-600 shadow-md":"bg-white text-gray-500 border-gray-100 hover:border-emerald-200"}`,children:j},j))})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"font-black text-sm text-gray-900",children:"食材清单"}),d.jsxs("span",{className:"text-[10px] font-bold text-gray-400",children:[T.length," 项"]})]}),d.jsxs("div",{className:"space-y-2",children:[T.map((j,G)=>d.jsxs("div",{className:"flex gap-2 items-center",children:[d.jsx("input",{type:"text",placeholder:"食材名 (如: 牛肉)",className:"flex-[3] bg-gray-50 px-3 py-3 rounded-xl text-sm font-bold outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.name,onChange:Z=>{const J=[...T];J[G].name=Z.target.value,S(J)}}),d.jsx("input",{type:"number",placeholder:"数量",className:"flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.amount||"",onChange:Z=>{const J=[...T];J[G].amount=Number(Z.target.value),S(J)}}),d.jsx("input",{type:"text",placeholder:"单位",className:"flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j.unit,onChange:Z=>{const J=[...T];J[G].unit=Z.target.value,S(J)}}),d.jsx("button",{onClick:()=>S(T.filter((Z,J)=>J!==G)),className:"w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors",children:"✕"})]},G)),d.jsx("button",{onClick:()=>S([...T,{name:"",amount:0,unit:"g"}]),className:"w-full py-3 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black hover:bg-emerald-100 transition-colors",children:"+ 添加一行"})]})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"font-black text-sm text-gray-900",children:"制作步骤"}),d.jsxs("span",{className:"text-[10px] font-bold text-gray-400",children:[A.length," 步"]})]}),d.jsxs("div",{className:"space-y-3",children:[A.map((j,G)=>d.jsxs("div",{className:"flex gap-3 items-start group",children:[d.jsx("span",{className:"w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1 shadow-sm",children:G+1}),d.jsx("textarea",{placeholder:"描述步骤...",className:"flex-1 bg-gray-50 p-3 rounded-xl text-sm outline-none resize-none font-medium min-h-[80px] focus:bg-white focus:ring-1 ring-emerald-500 transition-all",value:j,onChange:Z=>{const J=[...A];J[G]=Z.target.value,M(J)}}),d.jsx("button",{onClick:()=>M(A.filter((Z,J)=>J!==G)),className:"text-gray-300 hover:text-red-500 pt-2 opacity-50 group-hover:opacity-100 transition-opacity",children:"✕"})]},G)),d.jsx("button",{onClick:()=>M([...A,""]),className:"w-full py-3 bg-gray-50 text-gray-400 rounded-xl text-xs font-black hover:bg-gray-100 transition-colors",children:"+ 添加步骤"})]})]}),d.jsx("section",{className:"pb-8",children:d.jsx("input",{type:"text",placeholder:"粘贴灵感来源链接 (可选)...",className:"w-full bg-gray-50 px-4 py-3 rounded-xl text-xs outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all text-gray-600",value:C,onChange:j=>E(j.target.value)})})]})]})},vM=({userProfile:t,onUpdateProfile:e,recipes:n,inventory:r,onLogout:s})=>{const[i,o]=H.useState(!1),[l,u]=H.useState(t.name),[c,p]=H.useState(t.role),[m,g]=H.useState(""),[T,S]=H.useState(!1),A=H.useRef(null),M=H.useRef(null),C=()=>{e({name:l,role:c}),o(!1)},E=async()=>{if(t.pairCode){alert("您已经拥有家庭配对码。");return}S(!0);try{const v=Dt.generatePairCode(),_=await Dt.joinFamily(v);_.success?(e({pairCode:_.familyCode||v}),alert("🎉 家庭已创建并加入成功！把配对码发给家人即可同步。")):alert(`创建失败：${_.error||"未知错误"}`)}finally{S(!1)}},N=async()=>{if(m){S(!0);try{const v=await Dt.joinFamily(m);if(v.success){const _=v.familyCode||m.trim().toUpperCase();e({pairCode:_}),alert("🎉 连接成功！在另一台设备/另一个浏览器输入同一个配对码，就会实时同步。")}else alert(`连接失败：${v.error||"请检查配对码是否正确"}`)}finally{S(!1)}}},D=()=>{const v={ht_inventory:localStorage.getItem("ht_inventory"),ht_recipes:localStorage.getItem("ht_recipes"),ht_plans:localStorage.getItem("ht_plans"),ht_shopping:localStorage.getItem("ht_shopping"),ht_history:localStorage.getItem("ht_history"),ht_profile:localStorage.getItem("ht_profile"),backup_date:new Date().toISOString(),version:"1.0"},_=new Blob([JSON.stringify(v,null,2)],{type:"application/json"}),x=URL.createObjectURL(_),I=document.createElement("a");I.href=x,I.download=`hometaste_backup_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL(x)},L=v=>{var I;const _=(I=v.target.files)==null?void 0:I[0];if(!_)return;const x=new FileReader;x.onload=k=>{var b;try{const y=JSON.parse((b=k.target)==null?void 0:b.result);y.version&&y.ht_recipes?confirm("导入备份将覆盖当前所有数据，确定要继续吗？")&&(y.ht_inventory&&localStorage.setItem("ht_inventory",y.ht_inventory),y.ht_recipes&&localStorage.setItem("ht_recipes",y.ht_recipes),y.ht_plans&&localStorage.setItem("ht_plans",y.ht_plans),y.ht_shopping&&localStorage.setItem("ht_shopping",y.ht_shopping),y.ht_history&&localStorage.setItem("ht_history",y.ht_history),y.ht_profile&&localStorage.setItem("ht_profile",y.ht_profile),alert("数据导入成功！即将刷新页面..."),window.location.reload()):alert("无效的备份文件格式")}catch(y){alert("解析备份文件失败"),console.error(y)}},x.readAsText(_)},P=async v=>{var x;const _=(x=v.target.files)==null?void 0:x[0];if(_)try{const I=await new Promise((k,b)=>{const y=new FileReader;y.readAsDataURL(_),y.onload=Q=>{var _e;const ne=new Image;ne.src=(_e=Q.target)==null?void 0:_e.result,ne.onload=()=>{const we=document.createElement("canvas"),z=300;let Y=ne.width,j=ne.height;Y>z&&(j=Math.round(j*z/Y),Y=z),we.width=Y,we.height=j;const G=we.getContext("2d");if(!G){b(new Error("Canvas context not supported"));return}G.drawImage(ne,0,0,Y,j),k(we.toDataURL("image/jpeg",.7))},ne.onerror=we=>b(we)},y.onerror=Q=>b(Q)});e({avatar:I})}catch(I){console.error("Image processing failed:",I),alert("图片处理失败，请尝试换一张图片。")}};return d.jsxs("div",{className:"p-6 lg:p-10 space-y-8 max-w-4xl mx-auto pb-64 animate-in fade-in duration-500",children:[d.jsx("header",{children:d.jsx("h2",{className:"text-2xl font-black italic",children:"Settings"})}),d.jsx("section",{className:"bg-white p-6 rounded-3xl border border-gray-100 shadow-sm",children:d.jsxs("div",{className:"flex items-center gap-6",children:[d.jsxs("div",{className:"relative shrink-0",children:[d.jsxs("div",{className:"w-20 h-20 rounded-2xl border-2 border-gray-100 overflow-hidden relative group",children:[d.jsx("img",{src:t.avatar,className:"w-full h-full object-cover",alt:""}),d.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity",onClick:()=>{var v;return(v=A.current)==null?void 0:v.click()},children:d.jsx("span",{className:"text-white text-[9px] font-bold",children:"更换"})})]}),d.jsx("input",{type:"file",ref:A,className:"hidden",accept:"image/*",onChange:P})]}),d.jsx("div",{className:"flex-1 min-w-0",children:i?d.jsxs("div",{className:"flex gap-3",children:[d.jsxs("div",{className:"space-y-2 flex-1",children:[d.jsx("input",{className:"text-lg font-black text-gray-900 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none",value:l,onChange:v=>u(v.target.value),placeholder:"称呼"}),d.jsx("input",{className:"text-xs font-bold text-gray-500 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none",value:c,onChange:v=>p(v.target.value),placeholder:"身份"})]}),d.jsxs("div",{className:"flex flex-col gap-2 justify-center",children:[d.jsx("button",{onClick:C,className:"px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg",children:"保存"}),d.jsx("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded-lg",children:"取消"})]})]}):d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-xl font-black text-gray-900",children:t.name}),d.jsx("p",{className:"text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1",children:t.role})]}),d.jsx("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-gray-50 text-gray-400 text-xs font-bold rounded-xl border border-gray-100",children:"编辑"})]})})]})}),d.jsxs("section",{className:"bg-emerald-950 p-6 rounded-3xl text-white space-y-6 shadow-xl overflow-hidden relative",children:[d.jsxs("div",{className:"relative z-10",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[d.jsx("h3",{className:"text-lg font-black italic",children:"家庭同步"}),t.pairCode?d.jsxs("div",{className:"bg-white/10 px-4 py-2 rounded-lg border border-white/10",children:[d.jsx("p",{className:"text-[9px] font-bold uppercase opacity-50 mb-0.5",children:"我的配对码"}),d.jsx("p",{className:"text-lg font-mono font-bold tracking-widest",children:t.pairCode})]}):d.jsx("button",{onClick:E,className:"px-4 py-2 bg-emerald-600 rounded-lg text-xs font-bold shadow hover:bg-emerald-500",children:"创建新家庭"})]}),t.partner?d.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10",children:[d.jsx("img",{src:t.partner.avatar,className:"w-12 h-12 rounded-xl border border-white/20",alt:""}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white",children:t.partner.name}),d.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"}),d.jsx("p",{className:"text-[10px] uppercase tracking-wider opacity-60",children:"已实时同步"})]})]})]}):d.jsxs("div",{className:"space-y-3",children:[d.jsx("p",{className:"text-xs opacity-60",children:"输入伴侣的配对码以加入家庭："}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("input",{type:"text",placeholder:"例如: HT-ABC123",className:"bg-white/10 px-4 py-3 rounded-xl outline-none text-white font-mono font-bold flex-1 border border-white/10 text-sm placeholder:text-white/20",value:m,onChange:v=>g(v.target.value)}),d.jsx("button",{onClick:N,disabled:T,className:"bg-emerald-500 px-6 py-3 rounded-xl text-xs font-bold shadow-lg hover:bg-emerald-400 transition-colors disabled:opacity-50",children:T?"连接中...":"连接"})]}),t.pairCode&&d.jsx("p",{className:"text-[10px] opacity-40 italic",children:" * 云同步模式：在另一台设备输入相同配对码即可共享同一家庭数据。"})]})]}),d.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"})]}),d.jsxs("section",{className:"bg-gray-50 p-6 rounded-3xl border border-gray-100",children:[d.jsx("h3",{className:"text-sm font-black text-gray-900 mb-4 flex items-center gap-2",children:d.jsx("span",{children:"💾 数据备份"})}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsx("button",{onClick:D,className:"py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm",children:"📤 导出数据备份"}),d.jsx("button",{onClick:()=>{var v;return(v=M.current)==null?void 0:v.click()},className:"py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm",children:"📥 导入恢复数据"}),d.jsx("input",{type:"file",ref:M,className:"hidden",accept:".json",onChange:L})]})]}),d.jsx("button",{onClick:s,className:"w-full py-4 bg-red-50 text-red-500 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all",children:"退出登录"})]})},wM=async(t,e)=>(console.warn("未检测到 API_KEY，切换至随机推荐模式。"),await new Promise(r=>setTimeout(r,1e3)),e.length===0?[]:[...e].sort(()=>.5-Math.random()).slice(0,2).map(r=>r.id)),xM=async t=>{throw console.warn("No API Key, skipping image analysis"),new Error("API Key missing")};function Io(t,e,n){const[r,s]=H.useState(()=>{try{const u=localStorage.getItem(t);return u?JSON.parse(u):e}catch{return e}}),i=H.useRef(!1),o=H.useRef(r),l=H.useRef(!1);return H.useEffect(()=>{o.current=r},[r]),H.useEffect(()=>{if(!n)return;l.current=!1;let u=null;return(async()=>{u=await Dt.subscribeToData(n,t,c=>{l.current=!0,c!==null&&JSON.stringify(c)!==JSON.stringify(o.current)&&(i.current=!0,s(c))})})().catch(console.error),()=>{u&&u()}},[n,t]),H.useEffect(()=>{try{localStorage.setItem(t,JSON.stringify(r))}catch(u){console.warn("LocalStorage save failed (Quota Exceeded?):",u)}n&&l.current&&!i.current&&Dt.pushData(n,t,r),i.current=!1},[t,r,n]),[r,s]}const EM=()=>{const[t,e]=H.useState("dashboard"),[n,r]=H.useState(null),[s,i]=H.useState(()=>{try{const q=localStorage.getItem("ht_profile");return q?JSON.parse(q):{name:"美食主理人",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",role:"高级厨师",pairCode:""}}catch{return{name:"美食主理人",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",role:"高级厨师",pairCode:""}}}),[o,l]=H.useState("");H.useEffect(()=>{fM().then(l).catch(console.error)},[]);const u=s.pairCode;H.useEffect(()=>{if(!u||!o)return;let q=null;return(async()=>{q=await Dt.subscribeToActivity(u,W=>{if(W.actorUid===o)return;const te=`👤 ${W.actorName||"家人"} ${W.action}了${W.targetType}：${W.targetName}`;r(te),setTimeout(()=>r(ie=>ie===te?null:ie),2500)})})().catch(console.error),()=>{q&&q()}},[u,o]);const[c,p]=Io("ht_inventory",gM,u),[m,g]=Io("ht_recipes",_M,u),[T,S]=Io("ht_plans",{},u),[A,M]=Io("ht_shopping",[],u),[C,E]=Io("ht_history",[],u);H.useEffect(()=>{u&&Dt.initializeCloudData(u,{ht_inventory:c,ht_recipes:m,ht_plans:T,ht_shopping:A,ht_history:C}).catch(console.error)},[u]);const[N,D]=H.useState(void 0);H.useEffect(()=>{if(!u||!o)return;let q=null;return(async()=>{q=await Dt.subscribeToData(u,"users",W=>{if(!W||typeof W!="object"){D(void 0);return}const ie=Object.entries(W).find(([sr])=>sr!==o);if(!ie){D(void 0);return}const[,Re]=ie;D({name:(Re==null?void 0:Re.name)||"伙伴",avatar:(Re==null?void 0:Re.avatar)||"",isOnline:!!(Re!=null&&Re.isOnline)})})})().catch(console.error),()=>{q&&q()}},[u,o]),H.useEffect(()=>{try{localStorage.setItem("ht_profile",JSON.stringify(s)),u&&o&&Dt.updateUserStatus(u,o,{name:s.name,avatar:s.avatar,isOnline:!0})}catch(q){console.error("Profile Save Error:",q)}},[s,u,o]);const[L,P]=H.useState(null),[v,_]=H.useState([]),[x,I]=H.useState(!1),[k,b]=H.useState(!1),[y,Q]=H.useState(""),[ne,_e]=H.useState("全部"),we=["全部",...aT],z=async()=>{if(m.length===0){alert("请先添加一些食谱，AI 才能为您推荐哦！");return}I(!0);const q=Date.now();try{const W=await wM(c,m),te=Date.now()-q;te<800&&await new Promise(ie=>setTimeout(ie,800-te)),_(W),W.length===0&&alert("AI 暂时没有找到非常匹配的食谱，试试补充一下冰箱或者添加更多食谱？")}catch(W){console.error("AI 推荐失败",W),alert("获取灵感失败，可能是网络问题，请稍后再试。")}finally{I(!1)}},Y=H.useMemo(()=>m.filter(q=>v.includes(q.id)),[m,v]),j=H.useMemo(()=>m.filter(q=>{const W=q.title.toLowerCase().includes(y.toLowerCase())||q.ingredients.some(ie=>ie.name.toLowerCase().includes(y.toLowerCase())),te=ne==="全部"||q.category===ne;return W&&te}),[m,y,ne]),G=H.useMemo(()=>ne==="全部"?m.length:m.filter(q=>q.category===ne).length,[m,ne]),Z=async q=>{const W={...s,...q};i(W),q.pairCode&&q.pairCode!==s.pairCode&&(await Dt.initializeCloudData(q.pairCode,{ht_inventory:c,ht_recipes:m,ht_plans:T,ht_shopping:A,ht_history:C}),alert("家庭连接成功！数据已开始同步。"))},J=q=>{const W={id:Date.now().toString()+Math.random(),name:q.name||"未知食材",amount:q.amount||0,unit:q.unit||"单位",category:q.category||"其他",storageZone:q.storageZone||"常温",updatedAt:Date.now()};p(te=>[W,...te]),u&&o&&Dt.logActivity(u,{actorUid:o,actorName:s.name,action:"新增",targetType:"食材",targetName:W.name}).catch(console.error)},ze=(q,W)=>{p(te=>te.map(ie=>ie.id===q?{...ie,amount:W,updatedAt:Date.now()}:ie))},Pt=q=>{const W=c.find(te=>te.id===q);p(te=>te.filter(ie=>ie.id!==q)),u&&o&&W&&Dt.logActivity(u,{actorUid:o,actorName:s.name,action:"删除",targetType:"食材",targetName:W.name}).catch(console.error)},rn=async q=>{b(!0);try{const W=await xM(q);W&&W.length>0?W.forEach(te=>J(te)):alert("AI 未能识别出食材，请确保图片清晰。")}catch{alert("AI 服务暂时不可用，请手动录入。")}finally{b(!1)}},sn=(q,W)=>{S(te=>({...te,[W]:[...te[W]||[],q]}))},eh=(q,W)=>{S(te=>({...te,[W]:(te[W]||[]).filter(ie=>ie!==q)}))},th=q=>{p(W=>W.map(te=>{const ie=q.find(Re=>Re.name===te.name);return ie?{...te,amount:Math.max(0,te.amount-ie.amount),updatedAt:Date.now()}:te}))},Os=q=>{const W=T[q]||[],te=m.filter(ie=>W.includes(ie.id)).map(ie=>ie.title);te.length>0&&E(ie=>[...ie,{date:q,recipeTitles:te}])},Ms=(q,W,te)=>{g(ie=>ie.map(Re=>{if(Re.id===q){const sr=(Re.reviewCount||0)+1,Ki=(Re.appetizingCount||0)+1;return{...Re,rating:((Re.rating||5)*(sr-1)+W)/sr,reviewCount:sr,appetizingRating:((Re.appetizingRating||5)*(Ki-1)+te)/Ki,appetizingCount:Ki}}return Re}))},Gi=async q=>{const W=!!q.id;return q.id?g(te=>te.map(ie=>ie.id===q.id?q:ie)):g(te=>[...te,{...q,id:Date.now().toString()}]),u&&o&&Dt.logActivity(u,{actorUid:o,actorName:s.name,action:W?"更新":"新增",targetType:"食谱",targetName:q.title||"未命名食谱"}).catch(console.error),e("recipes"),P(null),!0},Ut=q=>{P(null),e(q)},qi=()=>{if(L&&t!=="add-recipe")return d.jsx(R1,{recipe:L,inventory:c,plans:T,onBack:()=>P(null),onPlan:sn,onEdit:()=>e("add-recipe")});switch(t){case"dashboard":return d.jsxs("div",{className:"p-5 lg:p-10 space-y-6 max-w-5xl mx-auto pb-32",children:[d.jsxs("header",{className:"flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-black text-gray-900 tracking-tight italic",children:"家庭概览"}),u&&d.jsxs("div",{className:"flex items-center gap-2 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100 animate-pulse",children:[d.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full"}),d.jsx("span",{className:"text-[10px] font-bold text-emerald-700",children:"实时同步中"})]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[d.jsxs("div",{onClick:()=>Ut("inventory"),className:"bg-emerald-800 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(Kw,{className:"w-8 h-8 text-emerald-200"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"食材储备"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:c.length})]}),d.jsxs("div",{onClick:()=>Ut("plan"),className:"bg-amber-600 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(Gw,{className:"w-8 h-8 text-amber-200"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"今日计划"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:(T[new Date().toISOString().split("T")[0]]||[]).length})]}),d.jsxs("div",{onClick:()=>Ut("shopping"),className:"bg-gray-900 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer",children:[d.jsx("div",{className:"mb-2",children:d.jsx(qw,{className:"w-8 h-8 text-gray-400"})}),d.jsx("p",{className:"text-sm font-bold opacity-90 mb-0.5",children:"同步采购"}),d.jsx("p",{className:"text-2xl font-black leading-none",children:A.filter(W=>!W.checked).length})]})]}),d.jsxs("section",{className:"space-y-3",children:[d.jsx("h3",{className:"text-xs font-black text-gray-400 tracking-widest",children:"AI 灵感工坊"}),!x&&v.length>0&&d.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x animate-in fade-in slide-in-from-bottom-2",children:Y.map(W=>{var te;return d.jsxs("div",{onClick:()=>P(W),className:"shrink-0 w-48 h-28 rounded-2xl relative overflow-hidden group cursor-pointer snap-center shadow-sm border border-gray-100",children:[d.jsx("img",{src:W.images[0],className:"absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110",alt:""}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"}),d.jsx("div",{className:"absolute top-2 right-2 flex flex-col items-end gap-1",children:d.jsxs("div",{className:"bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-white/10",children:[d.jsx("span",{className:"text-[8px] text-amber-400",children:"★"}),d.jsx("span",{className:"text-[8px] font-bold text-white",children:((te=W.rating)==null?void 0:te.toFixed(1))||"5.0"})]})}),d.jsxs("div",{className:"absolute bottom-3 left-3 right-3",children:[d.jsx("span",{className:"text-[8px] font-bold text-emerald-300 uppercase tracking-wider mb-0.5 block",children:"今日推荐"}),d.jsx("h4",{className:"text-white font-bold text-sm truncate",children:W.title})]})]},W.id)})}),d.jsxs("button",{onClick:z,className:`w-full group relative overflow-hidden bg-emerald-950/90 py-4 rounded-2xl text-center transition-all ${x?"cursor-wait opacity-80":"hover:bg-black active:scale-[0.98]"}`,children:[d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx("span",{className:`${x?"animate-spin":""} text-2xl`,children:x?d.jsx(I1,{className:"w-6 h-6 text-emerald-400"}):d.jsx(E1,{className:"w-6 h-6 text-emerald-400"})}),d.jsx("span",{className:"text-white font-bold text-sm",children:x?"正在分析库存与口味...":"获取今日灵感"})]}),x&&d.jsx("div",{className:"absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-full animate-[loading_2s_infinite]"})]})]})]});case"inventory":return d.jsx(C1,{inventory:c,onAdd:J,onUpdate:ze,onDelete:Pt,onAIScan:rn,isScanning:k});case"recipes":return d.jsxs("div",{className:"p-5 lg:p-10 space-y-6 max-w-6xl mx-auto pb-32",children:[d.jsx("h2",{className:"text-2xl font-black text-center text-gray-900 italic",children:"私房食谱库"}),d.jsxs("div",{className:"flex flex-col gap-4",children:[d.jsxs("div",{className:"relative group w-full",children:[d.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm",children:"🔍"}),d.jsx("input",{type:"text",placeholder:"搜索...",className:"w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm focus:border-emerald-400 transition-all",value:y,onChange:W=>Q(W.target.value)})]}),d.jsx("button",{onClick:()=>Ut("add-recipe"),className:"w-full py-3 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-md",children:"＋ 记录新菜谱"}),d.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar pb-1",children:we.map(W=>d.jsx("button",{onClick:()=>_e(W),className:`shrink-0 px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${ne===W?"bg-emerald-600 text-white shadow-sm":"bg-white border border-gray-100 text-gray-500"}`,children:W},W))}),d.jsxs("p",{className:"text-[11px] font-bold text-gray-400 px-1",children:[ne==="全部"?"全部菜谱":ne," · ",G,"道菜品"]})]}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-4",children:j.map(W=>{var te,ie;return d.jsxs("div",{onClick:()=>P(W),className:"bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm transition-all cursor-pointer group",children:[d.jsxs("div",{className:"aspect-[4/3] overflow-hidden relative",children:[d.jsx("img",{src:(te=W.images)==null?void 0:te[0],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",alt:W.title}),d.jsxs("div",{className:"absolute top-2 right-2 flex flex-col items-end gap-1.5",children:[d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm",children:[d.jsx("span",{className:"text-[10px] text-amber-400",children:"★"}),d.jsx("span",{className:"text-[10px] font-bold text-white leading-none",children:((ie=W.rating)==null?void 0:ie.toFixed(1))||"5.0"})]}),d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm",children:[d.jsx("span",{className:"text-[10px] text-orange-200",children:"🍚"}),d.jsx("span",{className:"text-[10px] font-bold text-white leading-none",children:W.appetizingRating?W.appetizingRating.toFixed(1):"5.0"})]})]})]}),d.jsxs("div",{className:"p-4",children:[d.jsx("span",{className:"text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-1.5 inline-block",children:W.category}),d.jsx("h3",{className:"font-bold text-gray-800 text-sm leading-tight line-clamp-1",children:W.title})]})]},W.id)})})]});case"plan":return d.jsx(P1,{plans:T,recipes:m,inventory:c,onRemoveFromPlan:eh,onArchive:Os,onAddItemsToShopping:W=>M(te=>[...W.map(ie=>({...ie,id:Date.now().toString()+Math.random(),checked:!1,addedAt:Date.now()})),...te]),onDeductInventory:th,onRecipeFeedback:Ms,history:C});case"shopping":return d.jsx(pM,{list:A,onUpdate:M,plans:T,recipes:m,inventory:c,pairCode:u,uid:o,actorName:s.name});case"settings":const q={...s,partner:N};return d.jsx(vM,{userProfile:q,onUpdateProfile:Z,recipes:m,inventory:c,onLogout:()=>{}});case"add-recipe":return d.jsx(yM,{onSave:Gi,onCancel:()=>Ut("recipes"),initialRecipe:L||void 0});default:return null}},Yr=L||t==="add-recipe";return d.jsxs("div",{className:"min-h-screen bg-[#fcfdfe] lg:pl-64",children:[n&&d.jsx("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-[200] bg-black/80 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg",children:n.text}),!Yr&&d.jsxs("header",{className:"fixed top-0 left-0 right-0 lg:left-64 z-[80] h-14 px-5 lg:px-10 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-gray-100/50",children:[d.jsx("div",{className:"flex items-center",children:d.jsxs("h1",{onClick:()=>Ut("dashboard"),className:"text-lg font-black text-gray-900 tracking-tighter italic cursor-pointer select-none",children:["HOMETASTE",d.jsx("span",{className:"text-emerald-500",children:"."})]})}),d.jsxs("button",{onClick:()=>Ut("settings"),className:"w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-gray-50 relative",children:[d.jsx("img",{src:s.avatar,className:"w-full h-full object-cover",alt:"Profile"}),u&&d.jsx("div",{className:"absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"})]})]}),d.jsx(a1,{currentView:t,onViewChange:Ut,userProfile:s}),d.jsx("main",{className:`relative transition-all duration-300 ${Yr?"":"pt-16"}`,children:qi()}),!Yr&&d.jsx("div",{className:"lg:hidden",children:d.jsx(mM,{currentView:t,onViewChange:Ut})}),d.jsx("style",{children:`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `})]})},Bm=document.getElementById("root");if(!Bm)throw new Error("Could not find root element to mount to");Bm.innerHTML="";const IM=ud.createRoot(Bm);IM.render(d.jsx(YT.StrictMode,{children:d.jsx(EM,{})}));const Pv=document.getElementById("loading-screen");Pv&&Pv.remove();
