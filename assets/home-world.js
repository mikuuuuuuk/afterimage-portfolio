(()=>{var kb=Object.create;var yv=Object.defineProperty;var Xb=Object.getOwnPropertyDescriptor;var Wb=Object.getOwnPropertyNames;var qb=Object.getPrototypeOf,Yb=Object.prototype.hasOwnProperty;var Fs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Zb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Wb(t))!Yb.call(e,s)&&s!==n&&yv(e,s,{get:()=>t[s],enumerable:!(i=Xb(t,s))||i.enumerable});return e};var xv=(e,t,n)=>(n=e!=null?kb(qb(e)):{},Zb(t||!e||!e.__esModule?yv(n,"default",{value:e,enumerable:!0}):n,e));var Lv=Fs(zt=>{"use strict";var Yd=Symbol.for("react.transitional.element"),Jb=Symbol.for("react.portal"),Kb=Symbol.for("react.fragment"),Qb=Symbol.for("react.strict_mode"),jb=Symbol.for("react.profiler"),$b=Symbol.for("react.consumer"),tE=Symbol.for("react.context"),eE=Symbol.for("react.forward_ref"),nE=Symbol.for("react.suspense"),iE=Symbol.for("react.memo"),Tv=Symbol.for("react.lazy"),sE=Symbol.for("react.activity"),aE=Symbol.for("react.view_transition"),Sv=Symbol.iterator;function rE(e){return e===null||typeof e!="object"?null:(e=Sv&&e[Sv]||e["@@iterator"],typeof e=="function"?e:null)}var Av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wv=Object.assign,Cv={};function wr(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||Av}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rv(){}Rv.prototype=wr.prototype;function Zd(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||Av}var Jd=Zd.prototype=new Rv;Jd.constructor=Zd;wv(Jd,wr.prototype);Jd.isPureReactComponent=!0;var Mv=Array.isArray;function qd(){}var be={H:null,A:null,T:null,S:null},Dv=Object.prototype.hasOwnProperty;function Kd(e,t,n){var i=n.ref;return{$$typeof:Yd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function oE(e,t){return Kd(e.type,t,e.props)}function Qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yd}function lE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bv=/\/+/g;function Wd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lE(""+e.key):t.toString(36)}function cE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(qd,qd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ar(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Yd:case Jb:r=!0;break;case Tv:return r=e._init,Ar(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Wd(e,0):i,Mv(s)?(n="",r!=null&&(n=r.replace(bv,"$&/")+"/"),Ar(s,t,n,"",function(c){return c})):s!=null&&(Qd(s)&&(s=oE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(bv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Mv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Wd(i,l),r+=Ar(i,t,n,a,s);else if(l=rE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Wd(i,l++),r+=Ar(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Ar(cE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function jc(e,t,n){if(e==null)return e;var i=[],s=0;return Ar(e,i,"","",function(a){return t.call(n,a,s++)}),i}function uE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ev=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Uv(e){var t=be.T,n={};n.types=t!==null?t.types:null,be.T=n;try{var i=e(),s=be.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(qd,Ev)}catch(a){Ev(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),be.T=t}}function Nv(e){var t=be.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Uv(Nv.bind(null,e))}var hE={map:jc,forEach:function(e,t,n){jc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jc(e,function(){t++}),t},toArray:function(e){return jc(e,function(t){return t})||[]},only:function(e){if(!Qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};zt.Activity=sE;zt.Children=hE;zt.Component=wr;zt.Fragment=Kb;zt.Profiler=jb;zt.PureComponent=Zd;zt.StrictMode=Qb;zt.Suspense=nE;zt.ViewTransition=aE;zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be;zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return be.H.useMemoCache(e)}};zt.addTransitionType=Nv;zt.cache=function(e){return function(){return e.apply(null,arguments)}};zt.cacheSignal=function(){return null};zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=wv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Dv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Kd(e.type,s,i)};zt.createContext=function(e){return e={$$typeof:tE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:$b,_context:e},e};zt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Dv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Kd(e,a,s)};zt.createRef=function(){return{current:null}};zt.forwardRef=function(e){return{$$typeof:eE,render:e}};zt.isValidElement=Qd;zt.lazy=function(e){return{$$typeof:Tv,_payload:{_status:-1,_result:e},_init:uE}};zt.memo=function(e,t){return{$$typeof:iE,type:e,compare:t===void 0?null:t}};zt.startTransition=Uv;zt.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()};zt.use=function(e){return be.H.use(e)};zt.useActionState=function(e,t,n){return be.H.useActionState(e,t,n)};zt.useCallback=function(e,t){return be.H.useCallback(e,t)};zt.useContext=function(e){return be.H.useContext(e)};zt.useDebugValue=function(){};zt.useDeferredValue=function(e,t){return be.H.useDeferredValue(e,t)};zt.useEffect=function(e,t){return be.H.useEffect(e,t)};zt.useEffectEvent=function(e){return be.H.useEffectEvent(e)};zt.useId=function(){return be.H.useId()};zt.useImperativeHandle=function(e,t,n){return be.H.useImperativeHandle(e,t,n)};zt.useInsertionEffect=function(e,t){return be.H.useInsertionEffect(e,t)};zt.useLayoutEffect=function(e,t){return be.H.useLayoutEffect(e,t)};zt.useMemo=function(e,t){return be.H.useMemo(e,t)};zt.useOptimistic=function(e,t){return be.H.useOptimistic(e,t)};zt.useReducer=function(e,t,n){return be.H.useReducer(e,t,n)};zt.useRef=function(e){return be.H.useRef(e)};zt.useState=function(e){return be.H.useState(e)};zt.useSyncExternalStore=function(e,t,n){return be.H.useSyncExternalStore(e,t,n)};zt.useTransition=function(){return be.H.useTransition()};zt.version="19.3.1"});var $c=Fs(($D,Ov)=>{"use strict";Ov.exports=Lv()});var Xv=Fs(De=>{"use strict";function ep(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<tu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ii(e){return e.length===0?null:e[0]}function nu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>tu(o,n))l<s&&0>tu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>tu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function tu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}De.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Iv=performance,De.unstable_now=function(){return Iv.now()}):(jd=Date,Pv=jd.now(),De.unstable_now=function(){return jd.now()-Pv});var Iv,jd,Pv,as=[],Hs=[],fE=1,ri=null,mn=3,np=!1,rl=!1,ol=!1,ip=!1,Fv=typeof setTimeout=="function"?setTimeout:null,Hv=typeof clearTimeout=="function"?clearTimeout:null,zv=typeof setImmediate<"u"?setImmediate:null;function eu(e){for(var t=Ii(Hs);t!==null;){if(t.callback===null)nu(Hs);else if(t.startTime<=e)nu(Hs),t.sortIndex=t.expirationTime,ep(as,t);else break;t=Ii(Hs)}}function sp(e){if(ol=!1,eu(e),!rl)if(Ii(as)!==null)rl=!0,Rr||(Rr=!0,Cr());else{var t=Ii(Hs);t!==null&&ap(sp,t.startTime-e)}}var Rr=!1,ll=-1,Vv=5,Gv=-1;function kv(){return ip?!0:!(De.unstable_now()-Gv<Vv)}function $d(){if(ip=!1,Rr){var e=De.unstable_now();Gv=e;var t=!0;try{t:{rl=!1,ol&&(ol=!1,Hv(ll),ll=-1),np=!0;var n=mn;try{e:{for(eu(e),ri=Ii(as);ri!==null&&!(ri.expirationTime>e&&kv());){var i=ri.callback;if(typeof i=="function"){ri.callback=null,mn=ri.priorityLevel;var s=i(ri.expirationTime<=e);if(e=De.unstable_now(),typeof s=="function"){ri.callback=s,eu(e),t=!0;break e}ri===Ii(as)&&nu(as),eu(e)}else nu(as);ri=Ii(as)}if(ri!==null)t=!0;else{var a=Ii(Hs);a!==null&&ap(sp,a.startTime-e),t=!1}}break t}finally{ri=null,mn=n,np=!1}t=void 0}}finally{t?Cr():Rr=!1}}}var Cr;typeof zv=="function"?Cr=function(){zv($d)}:typeof MessageChannel<"u"?(tp=new MessageChannel,Bv=tp.port2,tp.port1.onmessage=$d,Cr=function(){Bv.postMessage(null)}):Cr=function(){Fv($d,0)};var tp,Bv;function ap(e,t){ll=Fv(function(){e(De.unstable_now())},t)}De.unstable_IdlePriority=5;De.unstable_ImmediatePriority=1;De.unstable_LowPriority=4;De.unstable_NormalPriority=3;De.unstable_Profiling=null;De.unstable_UserBlockingPriority=2;De.unstable_cancelCallback=function(e){e.callback=null};De.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vv=0<e?Math.floor(1e3/e):5};De.unstable_getCurrentPriorityLevel=function(){return mn};De.unstable_next=function(e){switch(mn){case 1:case 2:case 3:var t=3;break;default:t=mn}var n=mn;mn=t;try{return e()}finally{mn=n}};De.unstable_requestPaint=function(){ip=!0};De.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=mn;mn=e;try{return t()}finally{mn=n}};De.unstable_scheduleCallback=function(e,t,n){var i=De.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:fE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,ep(Hs,e),Ii(as)===null&&e===Ii(Hs)&&(ol?(Hv(ll),ll=-1):ol=!0,ap(sp,n-i))):(e.sortIndex=s,ep(as,e),rl||np||(rl=!0,Rr||(Rr=!0,Cr()))),e};De.unstable_shouldYield=kv;De.unstable_wrapCallback=function(e){var t=mn;return function(){var n=mn;mn=t;try{return e.apply(this,arguments)}finally{mn=n}}}});var qv=Fs((eU,Wv)=>{"use strict";Wv.exports=Xv()});var Jv=Fs(gn=>{"use strict";var dE=$c();function Zv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vs(){}var Mn={d:{f:Vs,r:function(){throw Error(Zv(522))},D:Vs,C:Vs,L:Vs,m:Vs,X:Vs,S:Vs,M:Vs},p:0,findDOMNode:null},pE=Symbol.for("react.portal"),mE=Symbol.for("react.recoverable"),Yv=Symbol.for("react.optimistic_key");function gE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pE,key:i==null?null:i===Yv?Yv:""+i,children:e,containerInfo:t,implementation:n}}var cl=dE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function iu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mn;gn.browser=function(e){return{$$typeof:mE,_reason:e}};gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Zv(299));return gE(e,t,null,n)};gn.flushSync=function(e){var t=cl.T,n=Mn.p;try{if(cl.T=null,Mn.p=2,e)return e()}finally{cl.T=t,Mn.p=n,Mn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Mn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&Mn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=iu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=iu(t.as,t.crossOrigin);Mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Mn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=iu(n,t.crossOrigin);Mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=iu(t.as,t.crossOrigin);Mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Mn.d.m(e)};gn.requestFormReset=function(e){Mn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return cl.H.useFormState(e,t,n)};gn.useFormStatus=function(){return cl.H.useHostTransitionStatus()};gn.version="19.3.1"});var jv=Fs((iU,Qv)=>{"use strict";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(e){console.error(e)}}Kv(),Qv.exports=Jv()});var BM=Fs(Bh=>{"use strict";var Ke=qv(),zy=$c(),vE=jv();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function By(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Fy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $v(e){if(Kl(e)!==e)throw Error(J(188))}function _E(e){var t=e.alternate;if(!t){if(t=Kl(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return $v(s),e;if(a===i)return $v(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function Vy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Vy(e),t!==null)return t;e=e.sibling}return null}function zn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&zn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function tr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function t_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Gy(e){var t=[null,null],n=tr(e);return n===null||ky(t,e,n.child,{foundSelf:!1}),t}function ky(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ky(e,t,n.child,i))return!0;n=n.sibling}return!1}function Je(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(J(559))}}var Pr=null,zp=null;function yE(e,t,n){return e===n?!0:e===t?(Pr=e,!0):!1}function xE(e,t,n){return e===n?(zp=e,!1):e===t?(zp!==null&&(Pr=e),!0):!1}function e_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Bp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var xe=Object.assign,SE=Symbol.for("react.element"),su=Symbol.for("react.transitional.element"),gl=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),Xy=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),Wy=Symbol.for("react.consumer"),Vi=Symbol.for("react.context"),Zm=Symbol.for("react.forward_ref"),Hp=Symbol.for("react.suspense"),Vp=Symbol.for("react.suspense_list"),Jm=Symbol.for("react.memo"),Ws=Symbol.for("react.lazy");Symbol.for("react.scope");var Gp=Symbol.for("react.activity"),ME=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var bE=Symbol.for("react.memo_cache_sentinel"),kp=Symbol.for("react.view_transition"),EE=Symbol.for("react.recoverable"),n_=Symbol.iterator;function ul(e){return e===null||typeof e!="object"?null:(e=n_&&e[n_]||e["@@iterator"],typeof e=="function"?e:null)}var TE=Symbol.for("react.client.reference");function Xp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===TE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case Fp:return"Profiler";case Xy:return"StrictMode";case Hp:return"Suspense";case Vp:return"SuspenseList";case Gp:return"Activity";case kp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case gl:return"Portal";case Vi:return e.displayName||"Context";case Wy:return(e._context.displayName||"Context")+".Consumer";case Zm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jm:return t=e.displayName||null,t!==null?t:Xp(e.type)||"Memo";case Ws:t=e._payload,e=e._init;try{return Xp(e(t))}catch{}}return null}var vl=Array.isArray,Nt=zy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=vE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},Wp=[],Br=-1;function Zi(e){return{current:e}}function un(e){0>Br||(e.current=Wp[Br],Wp[Br]=null,Br--)}function Ae(e,t){Br++,Wp[Br]=e.current,e.current=t}var Wi=Zi(null),Ol=Zi(null),ta=Zi(null),Xu=Zi(null);function Wu(e,t){switch(Ae(ta,t),Ae(Ol,e),Ae(Wi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gy(t),e=dM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}un(Wi),Ae(Wi,e)}function so(){un(Wi),un(Ol),un(ta)}function qp(e){var t=e.memoizedState;t!==null&&(mo._currentValue=t.memoizedState,Ae(Xu,e)),t=Wi.current;var n=dM(t,e.type);t!==n&&(Ae(Ol,e),Ae(Wi,n))}function qu(e){Ol.current===e&&(un(Wi),un(Ol)),Xu.current===e&&(un(Xu),mo._currentValue=Va)}var rp,i_;function ks(e){if(rp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rp=t&&t[1]||"",i_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rp+e+i_}var op=!1;function lp(e,t){if(!e||op)return"";op=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var f=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){f=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){f=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&f&&typeof g.stack=="string")return[g.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{op=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ks(n):""}function AE(e,t){switch(e.tag){case 26:case 27:case 5:return ks(e.type);case 16:return ks("Lazy");case 13:return e.child!==t&&t!==null?ks("Suspense Fallback"):ks("Suspense");case 19:return ks("SuspenseList");case 0:case 15:return lp(e.type,!1);case 11:return lp(e.type.render,!1);case 1:return lp(e.type,!0);case 31:return ks("Activity");case 30:return ks("ViewTransition");default:return""}}function s_(e){try{var t="",n=null;do t+=AE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Yp=Object.prototype.hasOwnProperty,Km=Ke.unstable_scheduleCallback,cp=Ke.unstable_cancelCallback,wE=Ke.unstable_shouldYield,CE=Ke.unstable_requestPaint,Zn=Ke.unstable_now,RE=Ke.unstable_getCurrentPriorityLevel,qy=Ke.unstable_ImmediatePriority,Yy=Ke.unstable_UserBlockingPriority,Yu=Ke.unstable_NormalPriority,DE=Ke.unstable_LowPriority,Zy=Ke.unstable_IdlePriority,UE=Ke.log,NE=Ke.unstable_setDisableYieldValue,Ql=null,Jn=null;function Zs(e){if(typeof UE=="function"&&NE(e),Jn&&typeof Jn.setStrictMode=="function")try{Jn.setStrictMode(Ql,e)}catch{}}var Kn=Math.clz32?Math.clz32:IE,LE=Math.log,OE=Math.LN2;function IE(e){return e>>>=0,e===0?32:31-(LE(e)/OE|0)|0}var au=256,ru=262144,ou=4194304;function Pa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Pa(i):(r&=o,r!==0?s=Pa(r):n||(n=o&~e,n!==0&&(s=Pa(n))))):(o=i&~a,o!==0?s=Pa(o):r!==0?s=Pa(r):n||(n=i&~e,n!==0&&(s=Pa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Jy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Kn(n),s=1<<i;t|=e[i],n&=~s}return t}function PE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(){var e=ou;return ou<<=1,(ou&62914560)===0&&(ou=4194304),e}function up(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Kn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Qy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Qy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function jy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function $y(e,t){var n=t&-t;return n=(n&42)!==0?1:Qm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Qm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tx(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:IM(e.type))}function a_(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var _s=Math.random().toString(36).slice(2),ln="__reactFiber$"+_s,Bn="__reactProps$"+_s,_o="__reactContainer$"+_s,r_="__reactEvents$"+_s,BE="__reactListeners$"+_s,FE="__reactHandles$"+_s,o_="__reactResources$"+_s,tc="__reactMarker$"+_s,Zu="__reactLoad$"+_s;function xh(e){delete e[ln],delete e[Bn],delete e[BE],delete e[FE]}function Fa(e){var t;if(t=e[ln])return t;for(var n=e.parentNode;n;){if(t=n[_o]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ey(e);e!==null;){if(n=e[ln])return n;e=Ey(e)}return t}e=n,n=e.parentNode}return null}function yo(e){if(e=e[ln]||e[_o]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function Zr(e){var t=e[o_];return t||(t=e[o_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nn(e){e[tc]=!0}function ex(e){e[Zu]=void 0}var nx=new Set,ix={};function er(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(ix[e]=t,e=0;e<t.length;e++)nx.add(t[e])}var HE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),l_={},c_={};function VE(e){return Yp.call(c_,e)?!0:Yp.call(l_,e)?!1:HE.test(e)?c_[e]=!0:(l_[e]=!0,!1)}var ee=!1;function u_(){var e=ee;return ee=!1,e}function Tu(e,t,n){if(VE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function lu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function rs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function GE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zp(e){if(!e._valueTracker){var t=sx(e)?"checked":"value";e._valueTracker=GE(e,t,""+e[t])}}function ax(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=sx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var kE=/[\n"\\]/g;function hi(e){return e.replace(kE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xn(t)):e.value!==""+Xn(t)&&(e.value=""+Xn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?hp(e,Xn(e.value)):hp(e,Xn(t)):n!=null?hp(e,Xn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Xn(o):e.removeAttribute("name")}function rx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Zp(e);return}n=n!=null?""+Xn(n):"",t=t!=null?""+Xn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Zp(e)}function hp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Jr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ox(e,t,n){if(t!=null&&(t=""+Xn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xn(n):""}function lx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(vl(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Xn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Zp(e)}function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var XE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function h_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||XE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cx(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ee=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(h_(e,s,i),ee=!0)}else for(var a in t)t.hasOwnProperty(a)&&h_(e,a,t[a])}function $m(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var WE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Au(e){return qE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var Kp=null;function tg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fr=null,Kr=null;function f_(e){var t=yo(e);if(t&&(e=t.stateNode)){var n=e[Bn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Jp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Bn]||null;if(!s)throw Error(J(90));Jp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&ax(i)}break t;case"textarea":ox(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Jr(e,!!n.multiple,t,!1)}}}var fp=!1;function ux(e,t,n){if(fp)return e(t,n);fp=!0;try{var i=e(t);return i}finally{if(fp=!1,(Fr!==null||Kr!==null)&&(Oh(),Fr&&(t=Fr,e=Kr,Kr=Fr=null,f_(t),e)))for(t=0;t<e.length;t++)f_(e[t])}}function Il(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Bn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var fs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qp=!1;if(fs)try{Dr={},Object.defineProperty(Dr,"passive",{get:function(){Qp=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Qp=!1}var Dr,Js=null,eg=null,wu=null;function hx(){if(wu)return wu;var e,t=eg,n=t.length,i,s="value"in Js?Js.value:Js.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return wu=s.slice(e,1<i?1-i:void 0)}function Cu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cu(){return!0}function d_(){return!1}function An(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?cu:d_,this.isPropagationStopped=d_,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cu)},persist:function(){},isPersistent:cu}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=An(ma),ec=xe({},ma,{view:0,detail:0}),YE=An(ec),dp,pp,hl,Mh=xe({},ec,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ng,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(dp=e.screenX-hl.screenX,pp=e.screenY-hl.screenY):pp=dp=0,hl=e),dp)},movementY:function(e){return"movementY"in e?e.movementY:pp}}),p_=An(Mh),ZE=xe({},Mh,{dataTransfer:0}),JE=An(ZE),KE=xe({},ec,{relatedTarget:0}),mp=An(KE),QE=xe({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),jE=An(QE),$E=xe({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tT=An($E),eT=xe({},ma,{data:0}),m_=An(eT),nT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sT[e])?!!t[e]:!1}function ng(){return aT}var rT=xe({},ec,{key:function(e){if(e.key){var t=nT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ng,charCode:function(e){return e.type==="keypress"?Cu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oT=An(rT),lT=xe({},Mh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=An(lT),cT=xe({},ma,{submitter:0}),uT=An(cT),hT=xe({},ec,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ng}),fT=An(hT),dT=xe({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),pT=An(dT),mT=xe({},Mh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gT=An(mT),vT=xe({},ma,{newState:0,oldState:0,source:0}),_T=An(vT),yT=[9,13,27,32],ig=fs&&"CompositionEvent"in window,Sl=null;fs&&"documentMode"in document&&(Sl=document.documentMode);var xT=fs&&"TextEvent"in window&&!Sl,fx=fs&&(!ig||Sl&&8<Sl&&11>=Sl),v_=" ",__=!1;function dx(e,t){switch(e){case"keyup":return yT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function px(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function ST(e,t){switch(e){case"compositionend":return px(t);case"keypress":return t.which!==32?null:(__=!0,v_);case"textInput":return e=t.data,e===v_&&__?null:e;default:return null}}function MT(e,t){if(Hr)return e==="compositionend"||!ig&&dx(e,t)?(e=hx(),wu=eg=Js=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fx&&t.locale!=="ko"?null:t.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bT[e.type]:t==="textarea"}function mx(e,t,n,i){Fr?Kr?Kr.push(i):Kr=[i]:Fr=i,t=gh(t,"onChange"),0<t.length&&(n=new Sh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ml=null,Pl=null;function ET(e){uM(e,0)}function bh(e){var t=_l(e);if(ax(t))return e}function x_(e,t){if(e==="change")return t}var gx=!1;fs&&(fs?(hu="oninput"in document,hu||(gp=document.createElement("div"),gp.setAttribute("oninput","return;"),hu=typeof gp.oninput=="function"),uu=hu):uu=!1,gx=uu&&(!document.documentMode||9<document.documentMode));var uu,hu,gp;function S_(){Ml&&(Ml.detachEvent("onpropertychange",vx),Pl=Ml=null)}function vx(e){if(e.propertyName==="value"&&bh(Pl)){var t=[];mx(t,Pl,e,tg(e)),ux(ET,t)}}function TT(e,t,n){e==="focusin"?(S_(),Ml=t,Pl=n,Ml.attachEvent("onpropertychange",vx)):e==="focusout"&&S_()}function AT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bh(Pl)}function wT(e,t){if(e==="click")return bh(t)}function CT(e,t){if(e==="input"||e==="change")return bh(t)}function RT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:RT;function zl(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Yp.call(t,s)||!jn(e[s],t[s]))return!1}return!0}function jp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function M_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function b_(e,t){var n=M_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=M_(n)}}function _x(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_x(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jp(e.document)}return t}function sg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var DT=fs&&"documentMode"in document&&11>=document.documentMode,Vr=null,$p=null,bl=null,tm=!1;function E_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tm||Vr==null||Vr!==jp(i)||(i=Vr,"selectionStart"in i&&sg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bl&&zl(bl,i)||(bl=i,i=gh($p,"onSelect"),0<i.length&&(t=new Sh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Vr)))}function Oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gr={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},vp={},xx={};fs&&(xx=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function nr(e){if(vp[e])return vp[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xx)return vp[e]=t[n];return e}var Sx=nr("animationend"),Mx=nr("animationiteration"),bx=nr("animationstart"),UT=nr("transitionrun"),NT=nr("transitionstart"),LT=nr("transitioncancel"),Ex=nr("transitionend"),Tx=new Map,em="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");em.push("scrollEnd");function Ai(e,t){Tx.set(e,t),er(t,[e])}var OT=0;function ds(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ti.identifierPrefix;var n=OT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function T_(e){if(e==null||typeof e=="string")return e;var t=null,n=io;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function ys(e,t){return e=T_(e),t=T_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ju=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],kr=0,ag=0;function Eh(){for(var e=kr,t=ag=kr=0;t<e;){var n=li[t];li[t++]=null;var i=li[t];li[t++]=null;var s=li[t];li[t++]=null;var a=li[t];if(li[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Ax(n,s,a)}}function Th(e,t,n,i){li[kr++]=e,li[kr++]=t,li[kr++]=n,li[kr++]=i,ag|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function rg(e,t,n,i){return Th(e,t,n,i),Ku(e)}function ir(e,t){return Th(e,null,null,t),Ku(e)}function Ax(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Kn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Ku(e){if(50<Ll)throw Ll=0,Bu=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xr={};function IT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,t,n,i){return new IT(e,t,n,i)}function og(e){return e=e.prototype,!(!e||!e.isReactComponent)}function us(e,t){var n=e.alternate;return n===null?(n=In(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ru(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")og(i)&&(r=1);else if(typeof i=="string")r=ow(e,n,Wi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Gp:return e=In(31,n,t,s),e.elementType=Gp,e.lanes=a,e;case zr:return Ga(n.children,s,a,t);case Xy:r=8,s|=24;break;case Fp:return e=In(12,n,t,s|2),e.elementType=Fp,e.lanes=a,e;case Hp:return e=In(13,n,t,s),e.elementType=Hp,e.lanes=a,e;case Vp:return e=In(19,n,t,s),e.elementType=Vp,e.lanes=a,e;case ME:case kp:return e=s|32,e=In(30,n,t,e),e.elementType=kp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Vi:r=10;break t;case Wy:r=9;break t;case Zm:r=11;break t;case Jm:r=14;break t;case Ws:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=In(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ga(e,t,n,i){return e=In(7,e,i,t),e.lanes=n,e}function _p(e,t,n){return e=In(6,e,null,t),e.lanes=n,e}function Cx(e){var t=In(18,null,null,0);return t.stateNode=e,t}function yp(e,t,n){return t=In(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var A_=new WeakMap;function fi(e,t){if(typeof e=="object"&&e!==null){var n=A_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:s_(t)},A_.set(e,t),t)}return{value:e,source:t,stack:s_(t)}}var Wr=[],qr=0,Qu=null,Bl=0,ci=[],ui=0,ua=null,ki=1,Xi="";function ls(e,t){Wr[qr++]=Bl,Wr[qr++]=Qu,Qu=e,Bl=t}function Rx(e,t,n){ci[ui++]=ki,ci[ui++]=Xi,ci[ui++]=ua,ua=e;var i=ki;e=Xi;var s=32-Kn(i)-1;i&=~(1<<s),n+=1;var a=32-Kn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ki=1<<32-Kn(t)+s|n<<s|i,Xi=a+e}else ki=1<<a|n<<s|i,Xi=e}function Ah(e){e.return!==null&&(ls(e,1),Rx(e,1,0))}function lg(e){for(;e===Qu;)Qu=Wr[--qr],Wr[qr]=null,Bl=Wr[--qr],Wr[qr]=null;for(;e===ua;)ua=ci[--ui],ci[ui]=null,Xi=ci[--ui],ci[ui]=null,ki=ci[--ui],ci[ui]=null}function Dx(e,t){ci[ui++]=ki,ci[ui++]=Xi,ci[ui++]=ua,ki=t.id,Xi=t.overflow,ua=e}var sn=null,Te=null,Wt=!1,ea=null,di=!1,nm=Error(J(519));function ha(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(fi(t,e)),nm}function w_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[Bn]=i,n){case"dialog":Zt("cancel",t),Zt("close",t);break;case"iframe":case"object":case"embed":Zt("load",t);break;case"video":case"audio":for(n=0;n<kl.length;n++)Zt(kl[n],t);break;case"source":Zt("error",t);break;case"img":case"image":case"link":Zt("error",t),Zt("load",t);break;case"details":Zt("toggle",t);break;case"input":Zt("invalid",t),rx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Zt("invalid",t);break;case"textarea":Zt("invalid",t),lx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||fM(t.textContent,n)?(i.popover!=null&&(Zt("beforetoggle",t),Zt("toggle",t)),i.onScroll!=null&&Zt("scroll",t),i.onScrollEnd!=null&&Zt("scrollend",t),i.onClick!=null&&(t.onclick=Gi),t=!0):t=!1,t||ha(e,!0)}function ju(e){for(sn=e.return;sn;)switch(sn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:sn=sn.return}}function Ur(e){if(e!==sn)return!1;if(!Wt)return ju(e),Wt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hm(e.type,e.memoizedProps)),n=!n),n&&Te&&ha(e),ju(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Te=by(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Te=by(e)}else t===27?(t=Te,ga(e.type)?(e=Xm,Xm=null,Te=e):Te=t):Te=sn?pi(e.stateNode.nextSibling):null;return!0}function qa(){Te=sn=null,Wt=!1}function xp(){var e=ea;return e!==null&&(Ln===null?Ln=e:Ln.push.apply(Ln,e),ea=null),e}function Fl(e){ea===null?ea=[e]:ea.push(e)}var im=Zi(null),sr=null,cs=null;function Ks(e,t,n){Ae(im,t._currentValue),t._currentValue=n}function hs(e){e._currentValue=im.current,un(im)}function Du(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function sm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Du(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Du(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Du(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ya(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;jn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Xu.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}s=s.return}return e!==null&&sm(t,e,n,i),t.flags|=262144,e!==null}function $u(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){sr=e,cs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return Ux(sr,e)}function fu(e,t){return sr===null&&Za(e),Ux(e,t)}function Ux(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},cs===null){if(e===null)throw Error(J(308));cs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else cs=cs.next=t;return n}var PT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},zT=Ke.unstable_scheduleCallback,BT=Ke.unstable_NormalPriority,Ge={$$typeof:Vi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cg(){return{controller:new PT,data:new Map,refCount:0}}function nc(e){e.refCount--,e.refCount===0&&zT(BT,function(){e.controller.abort()})}function C_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var yl=null;function FT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var El=null,am=0,Ja=0,Qr=null;function HT(e,t){if(El===null){var n=El=[];am=0,Ja=zg(),Qr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return am++,t.then(R_,R_),t}function R_(){if(--am===0&&(yl=null,El!==null)){Qr!==null&&(Qr.status="fulfilled");var e=El;El=null,Ja=0,Qr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function VT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var D_=Nt.S;Nt.S=function(e,t){if(JS=Zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&HT(e,t),yl!==null)for(var n=ho;n!==null;)C_(n,yl),n=n.next;if(n=e.types,n!==null){for(var i=ho;i!==null;)C_(i,n),i=i.next;if(Ja!==0){i=yl,i===null&&(i=yl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}D_!==null&&D_(e,t)};var ka=Zi(null);function ug(){var e=ka.current;return e!==null?e:ye.pooledCache}function Uu(e,t){t===null?Ae(ka,ka.current):Ae(ka,t.pool)}function Nx(){var e=ug();return e===null?null:{parent:Ge._currentValue,pool:e}}var xo=Error(J(460)),hg=Error(J(474)),wh=Error(J(542)),th={then:function(){}};function U_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Gi,Gi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,L_(e),e===void 0&&!("reason"in t)?Error(J(600)):e;default:if(typeof t.status=="string")t.then(Gi,Gi);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,L_(e),e}throw Xa=t,xo}}function za(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Xa=n,xo):n}}var Xa=null;function N_(){if(Xa===null)throw Error(J(459));var e=Xa;return Xa=null,e}function L_(e){if(e===xo||e===wh)throw Error(J(483))}var jr=null,Hl=0;function du(e){var t=Hl;return Hl+=1,jr===null&&(jr=[]),Lx(jr,e,t)}function Gs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pu(e,t){throw t.$$typeof===SE?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ox(e){function t(u,y){if(e){var _=u.deletions;_===null?(u.deletions=[y],u.flags|=16):_.push(y)}}function n(u,y){if(!e)return null;for(;y!==null;)t(u,y),y=y.sibling;return null}function i(u){for(var y=new Map;u!==null;)u.key===null?y.set(u.index,u):y.set(u.key,u),u=u.sibling;return y}function s(u,y){return u=us(u,y),u.index=0,u.sibling=null,u}function a(u,y,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<y?(u.flags|=2,y):_):(u.flags|=134217730,y)):(u.flags|=1048576,y)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,y,_,v){return y===null||y.tag!==6?(y=_p(_,u.mode,v),y.return=u,y):(y=s(y,_),y.return=u,y)}function l(u,y,_,v){var T=_.type;return T===zr?(u=h(u,y,_.props.children,v,_.key),Gs(u,_),u):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ws&&za(T)===y.type)?(y=s(y,_.props),Gs(y,_),y.return=u,y):(y=Ru(_.type,_.key,_.props,null,u.mode,v),Gs(y,_),y.return=u,y)}function c(u,y,_,v){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=yp(_,u.mode,v),y.return=u,y):(y=s(y,_.children||[]),y.return=u,y)}function h(u,y,_,v,T){return y===null||y.tag!==7?(y=Ga(_,u.mode,v,T),y.return=u,y):(y=s(y,_),y.return=u,y)}function d(u,y,_){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=_p(""+y,u.mode,_),y.return=u,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case su:return _=Ru(y.type,y.key,y.props,null,u.mode,_),Gs(_,y),_.return=u,_;case gl:return y=yp(y,u.mode,_),y.return=u,y;case Ws:return y=za(y),d(u,y,_)}if(vl(y)||ul(y))return y=Ga(y,u.mode,_,null),y.return=u,y;if(typeof y.then=="function")return d(u,du(y),_);if(y.$$typeof===Vi)return d(u,fu(u,y),_);pu(u,y)}return null}function f(u,y,_,v){var T=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return T!==null?null:o(u,y,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case su:return _.key===T?l(u,y,_,v):null;case gl:return _.key===T?c(u,y,_,v):null;case Ws:return _=za(_),f(u,y,_,v)}if(vl(_)||ul(_))return T!==null?null:h(u,y,_,v,null);if(typeof _.then=="function")return f(u,y,du(_),v);if(_.$$typeof===Vi)return f(u,y,fu(u,_),v);pu(u,_)}return null}function p(u,y,_,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(y,u,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case su:return u=u.get(v.key===null?_:v.key)||null,l(y,u,v,T);case gl:return u=u.get(v.key===null?_:v.key)||null,c(y,u,v,T);case Ws:return v=za(v),p(u,y,_,v,T)}if(vl(v)||ul(v))return u=u.get(_)||null,h(y,u,v,T,null);if(typeof v.then=="function")return p(u,y,_,du(v),T);if(v.$$typeof===Vi)return p(u,y,_,fu(y,v),T);pu(y,v)}return null}function g(u,y,_,v){for(var T=null,A=null,w=y,R=y=0,E=null;w!==null&&R<_.length;R++){w.index>R?(E=w,w=null):E=w.sibling;var M=f(u,w,_[R],v);if(M===null){w===null&&(w=E);break}e&&w&&M.alternate===null&&t(u,w),y=a(M,y,R),A===null?T=M:A.sibling=M,A=M,w=E}if(R===_.length)return n(u,w),Wt&&ls(u,R),T;if(w===null){for(;R<_.length;R++)w=d(u,_[R],v),w!==null&&(y=a(w,y,R),A===null?T=w:A.sibling=w,A=w);return Wt&&ls(u,R),T}for(w=i(w);R<_.length;R++)E=p(w,u,R,_[R],v),E!==null&&(e&&(M=E.alternate,M!==null&&w.delete(M.key===null?R:M.key)),y=a(E,y,R),A===null?T=E:A.sibling=E,A=E);return e&&w.forEach(function(L){return t(u,L)}),Wt&&ls(u,R),T}function x(u,y,_,v){if(_==null)throw Error(J(151));for(var T=null,A=null,w=y,R=y=0,E=null,M=_.next();w!==null&&!M.done;R++,M=_.next()){w.index>R?(E=w,w=null):E=w.sibling;var L=f(u,w,M.value,v);if(L===null){w===null&&(w=E);break}e&&w&&L.alternate===null&&t(u,w),y=a(L,y,R),A===null?T=L:A.sibling=L,A=L,w=E}if(M.done)return n(u,w),Wt&&ls(u,R),T;if(w===null){for(;!M.done;R++,M=_.next())M=d(u,M.value,v),M!==null&&(y=a(M,y,R),A===null?T=M:A.sibling=M,A=M);return Wt&&ls(u,R),T}for(w=i(w);!M.done;R++,M=_.next())M=p(w,u,R,M.value,v),M!==null&&(e&&(E=M.alternate,E!==null&&w.delete(E.key===null?R:E.key)),y=a(M,y,R),A===null?T=M:A.sibling=M,A=M);return e&&w.forEach(function(N){return t(u,N)}),Wt&&ls(u,R),T}function m(u,y,_,v){if(typeof _=="object"&&_!==null&&_.type===zr&&_.key===null&&_.props.ref===void 0&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case su:t:{for(var T=_.key;y!==null;){if(y.key===T){if(T=_.type,T===zr){if(y.tag===7){n(u,y.sibling),v=s(y,_.props.children),Gs(v,_),v.return=u,u=v;break t}}else if(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ws&&za(T)===y.type){n(u,y.sibling),v=s(y,_.props),Gs(v,_),v.return=u,u=v;break t}n(u,y);break}else t(u,y);y=y.sibling}_.type===zr?(v=Ga(_.props.children,u.mode,v,_.key),Gs(v,_),v.return=u,u=v):(v=Ru(_.type,_.key,_.props,null,u.mode,v),Gs(v,_),v.return=u,u=v)}return r(u);case gl:t:{for(T=_.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(u,y.sibling),v=s(y,_.children||[]),v.return=u,u=v;break t}else{n(u,y);break}else t(u,y);y=y.sibling}v=yp(_,u.mode,v),v.return=u,u=v}return r(u);case Ws:return _=za(_),m(u,y,_,v)}if(vl(_))return g(u,y,_,v);if(ul(_)){if(T=ul(_),typeof T!="function")throw Error(J(150));return _=T.call(_),x(u,y,_,v)}if(typeof _.then=="function")return m(u,y,du(_),v);if(_.$$typeof===Vi)return m(u,y,fu(u,_),v);pu(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,y!==null&&y.tag===6?(n(u,y.sibling),v=s(y,_),v.return=u,u=v):(n(u,y),v=_p(_,u.mode,v),v.return=u,u=v),r(u)):n(u,y)}return function(u,y,_,v){try{Hl=0;var T=m(u,y,_,v);return jr=null,T}catch(w){if(w===xo||w===wh)throw w;var A=In(29,w,null,u.mode);return A.lanes=v,A.return=u,A}finally{}}}var Ka=Ox(!0),Ix=Ox(!1),qs=!1;function fg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Ku(e),Ax(e,null,n),t}return Th(e,i,t,n),Ku(e)}function Tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jy(e,n)}}function Sp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var om=!1;function Al(){if(om){var e=Qr;if(e!==null)throw e}}function wl(e,t,n,i){om=!1;var s=e.updateQueue;qs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Qt&f)===f:(i&f)===f){f!==0&&f===Ja&&(om=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,f);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break t;d=xe({},d,f);break t;case 2:qs=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),pa|=r,e.lanes=r,e.memoizedState=d}}function Px(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function zx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Px(n[e],t)}var fa=Zi(null),eh=Zi(0);function O_(e,t){e=vs,Ae(eh,e),Ae(fa,t),vs=e|t.baseLanes}function lm(){Ae(eh,vs),Ae(fa,fa.current)}function dg(){vs=eh.current,un(fa),un(eh)}var dn=Zi(null),vn=null;function sa(e){var t=e.alternate;Ae(hn,hn.current&1),Ae(dn,e),vn===null&&(t===null||fa.current!==null||t.memoizedState!==null)&&(vn=e)}function cm(e){Ae(hn,hn.current),Ae(dn,e),vn===null&&(vn=e)}function Bx(e){e.tag===22?(Ae(hn,hn.current),Ae(dn,e),vn===null&&(vn=e)):aa()}function aa(){Ae(hn,hn.current),Ae(dn,dn.current)}function Wn(e){un(dn),vn===e&&(vn=null),un(hn)}var hn=Zi(0);function Vl(e,t){Ae(dn,dn.current),Ae(hn,t)}function pg(e){un(hn),un(dn),vn===e&&(vn=null)}function nh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||km(n)||Vg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=0,Vt=null,pe=null,Ve=null,ih=!1,$r=!1,Qa=!1,sh=0,Gl=0,to=null,GT=0;function Be(){throw Error(J(321))}function mg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function gg(e,t,n,i,s,a){return ps=a,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nt.H=e===null||e.memoizedState===null?mS:gS,Qa=!1,a=n(i,s),Qa=!1,$r&&(a=Hx(t,n,i,s)),Fx(e),a}function Fx(e){Nt.H=ah;var t=pe!==null&&pe.next!==null;if(ps=0,Ve=pe=Vt=null,ih=!1,Gl=0,to=null,t)throw Error(J(300));e===null||ke||(e=e.dependencies,e!==null&&$u(e)&&(ke=!0))}function Hx(e,t,n,i){Vt=e;var s=0;do{if($r&&(to=null),Gl=0,$r=!1,25<=s)throw Error(J(301));if(s+=1,Ve=pe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Nt.H=KT,a=t(n,i)}while($r);return a}function kT(){var e=Nt.H,t=e.useState()[0];return t=typeof t.then=="function"?ic(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(Vt.flags|=1024),t}function vg(){var e=sh!==0;return sh=0,e}function _g(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yg(e){if(ih){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ih=!1}ps=0,Ve=pe=Vt=null,$r=!1,Gl=sh=0,to=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Vt.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function He(){if(pe===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ve===null?Vt.memoizedState:Ve.next;if(t!==null)Ve=t,pe=e;else{if(e===null)throw Vt.alternate===null?Error(J(467)):Error(J(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ve===null?Vt.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Ch(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ic(e){var t=Gl;return Gl+=1,to===null&&(to=[]),e=Lx(to,e,t),t=Vt,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,Nt.H=t===null||t.memoizedState===null?mS:gS),e}function Rh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ic(e);if(e.$$typeof===EE)return;if(e.$$typeof===Vi)return cn(e)}throw Error(J(438,String(e)))}function xg(e){var t=null,n=Vt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ch(),Vt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=bE;return t.index++,n}function ms(e,t){return typeof t=="function"?t(e):t}function Nu(e){var t=He();return Sg(t,pe,e)}function Sg(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Qt&d)===d:(ps&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ja&&(h=!0);else if((ps&f)===f){c=c.next,f===Ja&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Vt.lanes|=f,pa|=f;d=c.action,Qa&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Vt.lanes|=d,pa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!jn(a,e.memoizedState)&&(ke=!0,h&&(n=Qr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Mp(e){var t=He(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);jn(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Vx(e,t,n){var i=Vt,s=He(),a=Wt;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!jn((pe||s).memoizedState,n);if(r&&(s.memoizedState=n,ke=!0),s=s.queue,Mg(Xx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Ve!==null&&(Ve.memoizedState.tag&1)!==0,oo(e?9:8,{destroy:void 0},kx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,ye===null)throw Error(J(349));a||(ps&127)!==0||Gx(i,t,n)}return n}function Gx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Vt.updateQueue,t===null?(t=Ch(),Vt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kx(e,t,n,i){t.value=n,t.getSnapshot=i,Wx(t)&&qx(e)}function Xx(e,t,n){return n(function(){Wx(t)&&qx(e)})}function Wx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function qx(e){var t=ir(e,2);t!==null&&Pn(t,e,2)}function um(e){var t=Tn();if(typeof e=="function"){var n=e;if(e=n(),Qa){Zs(!0);try{n()}finally{Zs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t}function Yx(e,t,n,i){return e.baseState=n,Sg(e,pe,typeof i=="function"?i:ms)}function XT(e,t,n,i,s){if(Uh(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Nt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Zx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Zx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Nt.T,r={};r.types=a!==null?a.types:null,Nt.T=r;try{var o=n(s,i),l=Nt.S;l!==null&&l(r,o),I_(e,t,o)}catch(c){hm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Nt.T=a}}else try{a=n(s,i),I_(e,t,a)}catch(c){hm(e,t,c)}}function I_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){P_(e,t,i)},function(i){return hm(e,t,i)}):P_(e,t,n)}function P_(e,t,n){t.status="fulfilled",t.value=n,Jx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zx(e,n)))}function hm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Jx(t),t=t.next;while(t!==i)}e.action=null}function Jx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kx(e,t){return t}function z_(e,t){if(Wt){var n=ye.formState;if(n!==null){t:{var i=Vt;if(Wt){if(Te){e:{for(var s=Te,a=di;s.nodeType!==8;){if(!a){s=null;break e}if(s=pi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Te=pi(s.nextSibling),i=s.data==="F!";break t}}ha(i)}i=!1}i&&(t=n[0])}}return n=Tn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kx,lastRenderedState:t},n.queue=i,n=fS.bind(null,Vt,i),i.dispatch=n,i=um(!1),a=Ag.bind(null,Vt,!1,i.queue),i=Tn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=XT.bind(null,Vt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function B_(e){var t=He();return Qx(t,pe,e)}function Qx(e,t,n){if(t=Sg(e,t,Kx)[0],e=Nu(ms)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ic(t)}catch(r){throw r===xo?wh:r}else i=t;t=He();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Vt.flags|=2048,oo(9,{destroy:void 0},WT.bind(null,s,n),null)),[i,a,e]}function WT(e,t){e.action=t}function F_(e){var t=He(),n=pe;if(n!==null)return Qx(t,n,e);He(),t=t.memoizedState,n=He();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function oo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=Ch(),Vt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function jx(){return He().memoizedState}function Lu(e,t,n,i){var s=Tn();Vt.flags|=e,s.memoizedState=oo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Dh(e,t,n,i){var s=He();i=i===void 0?null:i;var a=s.memoizedState.inst;pe!==null&&i!==null&&mg(i,pe.memoizedState.deps)?s.memoizedState=oo(t,a,n,i):(Vt.flags|=e,s.memoizedState=oo(1|t,a,n,i))}function H_(e,t){Lu(8390656,8,e,t)}function Mg(e,t){Dh(2048,8,e,t)}function qT(e){Vt.flags|=4;var t=Vt.updateQueue;if(t===null)t=Ch(),Vt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $x(e){var t=He().memoizedState;return qT({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function tS(e,t){return Dh(4,2,e,t)}function eS(e,t){return Dh(4,4,e,t)}function nS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iS(e,t,n){n=n!=null?n.concat([e]):null,Dh(4,4,nS.bind(null,t,e),n)}function bg(){}function sS(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&mg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function aS(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&mg(t,i[1]))return i[0];if(i=e(),Qa){Zs(!0);try{e()}finally{Zs(!1)}}return n.memoizedState=[i,t],i}function Eg(e,t,n){return n===void 0||(ps&1073741824)!==0&&(Qt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=QS(),Vt.lanes|=e,pa|=e,n)}function rS(e,t,n,i){return jn(n,t)?n:fa.current!==null?(e=Eg(e,n,i),jn(e,t)||(ke=!0),e):(ps&106)===0||(ps&1073741824)!==0&&(Qt&261930)===0?(ke=!0,e.memoizedState=n):(e=QS(),Vt.lanes|=e,pa|=e,t)}function oS(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Nt.T,o={};o.types=r!==null?r.types:null,Nt.T=o,Ag(e,!1,t,n);try{var l=s(),c=Nt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=VT(l,i);Cl(e,t,h,Qn(e))}else Cl(e,t,i,Qn(e))}catch(d){Cl(e,t,{then:function(){},status:"rejected",reason:d},Qn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Nt.T=r}}function YT(){}function fm(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=lS(e).queue;oS(e,s,t,Va,n===null?YT:function(){return cS(e),n(i)})}function lS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:Va},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cS(e){var t=lS(e);t.next===null&&(t=e.alternate.memoizedState),Cl(e,t.next.queue,{},Qn())}function Tg(){return cn(mo)}function uS(){return He().memoizedState}function hS(){return He().memoizedState}function ZT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Qn();e=na(n);var i=ia(t,e,n);i!==null&&(Pn(i,t,n),Tl(i,t,n)),t={cache:cg()},e.payload=t;return}t=t.return}}function JT(e,t,n){var i=Qn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Uh(e)?dS(t,n):(n=rg(e,t,n,i),n!==null&&(Pn(n,e,i),pS(n,t,i)))}function fS(e,t,n){var i=Qn();Cl(e,t,n,i)}function Cl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uh(e))dS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,jn(o,r))return Th(e,t,s,0),ye===null&&Eh(),!1}catch{}finally{}if(n=rg(e,t,s,i),n!==null)return Pn(n,e,i),pS(n,t,i),!0}return!1}function Ag(e,t,n,i){if(i={lane:2,revertLane:zg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Uh(e)){if(t)throw Error(J(479))}else t=rg(e,n,i,2),t!==null&&Pn(t,e,2)}function Uh(e){var t=e.alternate;return e===Vt||t!==null&&t===Vt}function dS(e,t){$r=ih=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jy(e,n)}}var ah={readContext:cn,use:Rh,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be,useEffectEvent:Be},mS={readContext:cn,use:Rh,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:H_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Lu(4194308,4,nS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lu(4194308,4,e,t)},useInsertionEffect:function(e,t){Lu(4,2,e,t)},useMemo:function(e,t){var n=Tn();t=t===void 0?null:t;var i=e();if(Qa){Zs(!0);try{e()}finally{Zs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Tn();if(n!==void 0){var s=n(t);if(Qa){Zs(!0);try{n(t)}finally{Zs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=JT.bind(null,Vt,e),[i.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:function(e){e=um(e);var t=e.queue,n=fS.bind(null,Vt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bg,useDeferredValue:function(e,t){var n=Tn();return Eg(n,e,t)},useTransition:function(){var e=um(!1);return e=oS.bind(null,Vt,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Vt,s=Tn();if(Wt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),ye===null)throw Error(J(349));(Qt&127)!==0||Gx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,H_(Xx.bind(null,i,a,e),[e]),i.flags|=2048,oo(9,{destroy:void 0},kx.bind(null,i,a,n,t),null),n},useId:function(){var e=Tn(),t=ye.identifierPrefix;if(Wt){var n=Xi,i=ki;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=sh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=GT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Tg,useFormState:z_,useActionState:z_,useOptimistic:function(e){var t=Tn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ag.bind(null,Vt,!0,n),n.dispatch=t,[e,t]},useMemoCache:xg,useCacheRefresh:function(){return Tn().memoizedState=ZT.bind(null,Vt)},useEffectEvent:function(e){var t=Tn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},gS={readContext:cn,use:Rh,useCallback:sS,useContext:cn,useEffect:Mg,useImperativeHandle:iS,useInsertionEffect:tS,useLayoutEffect:eS,useMemo:aS,useReducer:Nu,useRef:jx,useState:function(){return Nu(ms)},useDebugValue:bg,useDeferredValue:function(e,t){var n=He();return rS(n,pe.memoizedState,e,t)},useTransition:function(){var e=Nu(ms)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ic(e),t]},useSyncExternalStore:Vx,useId:uS,useHostTransitionStatus:Tg,useFormState:B_,useActionState:B_,useOptimistic:function(e,t){var n=He();return Yx(n,pe,e,t)},useMemoCache:xg,useCacheRefresh:hS,useEffectEvent:$x},KT={readContext:cn,use:Rh,useCallback:sS,useContext:cn,useEffect:Mg,useImperativeHandle:iS,useInsertionEffect:tS,useLayoutEffect:eS,useMemo:aS,useReducer:Mp,useRef:jx,useState:function(){return Mp(ms)},useDebugValue:bg,useDeferredValue:function(e,t){var n=He();return pe===null?Eg(n,e,t):rS(n,pe.memoizedState,e,t)},useTransition:function(){var e=Mp(ms)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ic(e),t]},useSyncExternalStore:Vx,useId:uS,useHostTransitionStatus:Tg,useFormState:F_,useActionState:F_,useOptimistic:function(e,t){var n=He();return pe!==null?Yx(n,pe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xg,useCacheRefresh:hS,useEffectEvent:$x};function bp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=na(i);s.payload=t,n!=null&&(s.callback=n),t=ia(e,s,i),t!==null&&(Pn(t,e,i),Tl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=na(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ia(e,s,i),t!==null&&(Pn(t,e,i),Tl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qn(),i=na(n);i.tag=2,t!=null&&(i.callback=t),t=ia(e,i,n),t!==null&&(Pn(t,e,n),Tl(t,e,n))}};function V_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!zl(n,i)||!zl(s,a):!0}function G_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&dm.enqueueReplaceState(t,t.state,null)}function ja(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=xe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function vS(e){Ju(e)}function _S(e){console.error(e)}function yS(e){Ju(e)}function rh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function k_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function pm(e,t,n){return n=na(n),n.tag=3,n.payload={element:null},n.callback=function(){rh(e,t)},n}function xS(e){return e=na(e),e.tag=3,e}function SS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){k_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){k_(t,n,i),typeof s!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function QT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ya(t,n,s,!0),n=dn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return vn===null?ph():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===th?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Dp(e,i,s)),!1;case 22:return n.flags|=65536,i===th?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Dp(e,i,s)),!1}throw Error(J(435,n.tag))}return Dp(e,i,s),ph(),!1}if(Wt)return t=dn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==nm&&(e=Error(J(422),{cause:i}),Fl(fi(e,n)))):(i!==nm&&(t=Error(J(423),{cause:i}),Fl(fi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=fi(i,n),s=pm(e.stateNode,i,s),Sp(e,s),Fe!==4&&(Fe=2)),!1;var a=Error(J(520),{cause:i});if(a=fi(a,n),Nl===null?Nl=[a]:Nl.push(a),Fe!==4&&(Fe=2),t===null)return!0;i=fi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=pm(n.stateNode,i,e),Sp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ra===null||!ra.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=xS(s),SS(s,e,n,i),Sp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var wg=Error(J(461)),ke=!1;function Ze(e,t,n,i){t.child=e===null?Ix(t,null,n,i):Ka(t,e.child,n,i)}function X_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Za(t),i=gg(e,t,n,r,a,s),o=vg(),e!==null&&!ke?(_g(e,t,s),gs(e,t,s)):(Wt&&o&&Ah(t),t.flags|=1,Ze(e,t,i,s),t.child)}function W_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!og(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,MS(e,t,a,i,s)):(e=Ru(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Rg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:zl,n(r,i)&&e.ref===t.ref)return gs(e,t,s)}return t.flags|=1,e=us(a,i),e.ref=t.ref,e.return=t,t.child=e}function MS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(zl(a,i)&&e.ref===t.ref)if(ke=!1,t.pendingProps=i=a,Rg(e,s))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,gs(e,t,s)}return mm(e,t,n,i,s)}function bS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return q_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uu(t,a!==null?a.cachePool:null),a!==null?O_(t,a):lm(),Bx(t);else return i=t.lanes=536870912,q_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Uu(t,a.cachePool),O_(t,a),aa(),t.memoizedState=null):(e!==null&&Uu(t,null),lm(),aa());return Ze(e,t,s,n),t.child}function Rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function q_(e,t,n,i,s){var a=ug();return a=a===null?null:{parent:Ge._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Uu(t,null),lm(),Bx(t),e!==null&&Ya(e,t,i,!0),t.childLanes=s,null}function Ou(e,t){return t=Nh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Y_(e,t,n){return Ka(t,e.child,null,n),e=Ou(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function jT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Wt){if(i.mode==="hidden")return e=Ou(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Rl(null,e);if(cm(t),(e=Te)?(e=bM(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},n=Cx(e),n.return=t,t.child=n,sn=t,Te=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Ou(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(cm(t),s)if(t.flags&256)t.flags&=-257,t=Y_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(ke||Ya(e,t,n,!1),s=(n&e.childLanes)!==0,ke||s){if(fa.current===null){if(i=ye,i!==null&&(r=$y(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,ir(e,r),Pn(i,e,r),wg;ph()}t=Y_(e,t,n)}else e=a.treeContext,Te=pi(r.nextSibling),sn=t,Wt=!0,ea=null,di=!1,e!==null&&Dx(t,e),t=Ou(t,i),t.flags|=134221824;return t}return e=us(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mm(e,t,n,i,s){return Za(t),n=gg(e,t,n,i,void 0,s),i=vg(),e!==null&&!ke?(_g(e,t,s),gs(e,t,s)):(Wt&&i&&Ah(t),t.flags|=1,Ze(e,t,n,s),t.child)}function Z_(e,t,n,i,s,a){return Za(t),t.updateQueue=null,n=Hx(t,i,n,s),Fx(e),i=vg(),e!==null&&!ke?(_g(e,t,a),gs(e,t,a)):(Wt&&i&&Ah(t),t.flags|=1,Ze(e,t,n,a),t.child)}function J_(e,t,n,i,s){if(Za(t),t.stateNode===null){var a=Xr,r=n.contextType;typeof r=="object"&&r!==null&&(a=cn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},fg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?cn(r):Xr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(bp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&dm.enqueueReplaceState(a,a.state,null),wl(t,i,a,s),Al(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ja(n,o);a.props=l;var c=a.context,h=n.contextType;r=Xr,typeof h=="object"&&h!==null&&(r=cn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&G_(t,a,i,r),qs=!1;var f=t.memoizedState;a.state=f,wl(t,i,a,s),Al(),c=t.memoizedState,o||f!==c||qs?(typeof d=="function"&&(bp(t,n,d,i),c=t.memoizedState),(l=qs||V_(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,rm(e,t),r=t.memoizedProps,h=ja(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=Xr,typeof c=="object"&&c!==null&&(l=cn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&G_(t,a,i,l),qs=!1,f=t.memoizedState,a.state=f,wl(t,i,a,s),Al();var p=t.memoizedState;r!==d||f!==p||qs||e!==null&&e.dependencies!==null&&$u(e.dependencies)?(typeof o=="function"&&(bp(t,n,o,i),p=t.memoizedState),(h=qs||V_(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&$u(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Lr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Ka(t,e.child,null,s),t.child=Ka(t,null,n,s)):Ze(e,t,n,s),t.memoizedState=a.state,e=t.child):e=gs(e,t,s),e}function K_(e,t,n,i){return qa(),t.flags|=256,Ze(e,t,n,i),t.child}var gm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vm(e){return{baseLanes:e,cachePool:Nx()}}function _m(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yn),e}function ES(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Wt){if(s?sa(t):aa(),(e=Te)?(e=bM(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},n=Cx(e),n.return=t,t.child=n,sn=t,Te=null)):e=null,e===null)throw ha(t);return Vg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(aa(),s=t.mode,a=Nh({mode:"hidden",children:a},s),i=Ga(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=vm(n),i.childLanes=_m(e,r,n),t.memoizedState=gm,Rl(null,i)):(sa(t),Cg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return $T(e,t,a,r,i,l,o,n)}return s?(aa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=us(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=us(l,s):(s=Ga(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Rl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=vm(n):(a=s.cachePool,a!==null?(o=Ge._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Nx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=_m(e,r,n),t.memoizedState=gm,Rl(e.child,i)):(sa(t),n=e.child,e=n.sibling,n=us(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Cg(e,t){return t=Nh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nh(e,t){return e=In(22,e,null,t),e.lanes=0,e}function mu(e,t,n){return Ka(t,e.child,null,n),e=Cg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $T(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(sa(t),t.flags&=-257,mu(e,t,o)):t.memoizedState!==null?(aa(),t.child=e.child,t.flags|=128,null):(aa(),a=s.fallback,r=t.mode,s=Nh({mode:"visible",children:s.children},r),a=Ga(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,Ka(t,e.child,null,o),s=t.child,s.memoizedState=vm(o),s.childLanes=_m(e,i,o),t.memoizedState=gm,Rl(null,s));if(sa(t),Vg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(J(419)),s.stack="",s.digest=i,Fl({value:s,source:null,stack:null})),mu(e,t,o)}if(ke||Ya(e,t,o,!1),i=(o&e.childLanes)!==0,ke||i){if(fa.current!==null)return mu(e,t,o);if(i=ye,i!==null&&(s=$y(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,ir(e,s),Pn(i,e,s),wg;return km(a)||ph(),mu(e,t,o)}return km(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Te=pi(a.nextSibling),sn=t,Wt=!0,ea=null,di=!1,e!==null&&Dx(t,e),t=Cg(t,s.children),t.flags|=134221824,t)}function Q_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Du(e.return,t,n)}function j_(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&nh(n)===null&&(t=e),e=e.sibling}return t}function gu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Ep(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ym(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=hn.current;if(t.flags&128)return Vl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Vl(t,r),s==="backwards"&&e!==null?(Ep(e),Ze(e,t,i,n),Ep(e)):Ze(e,t,i,n),i=Wt?Bl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Q_(e,n,t);else if(e.tag===19)Q_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=j_(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Ep(t)),gu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&nh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}gu(t,!0,n,null,a,i);break;case"together":gu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=j_(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),gu(t,!1,s,n,a,i)}return t.child}function $_(e,t,n){var i=t.pendingProps;return Ks(t,t.type,i.value),Ze(e,t,i.children,n),t.child}function gs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ya(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=us(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=us(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$u(e)))}function tA(e,t,n){switch(t.tag){case 3:Wu(t,t.stateNode.containerInfo),Ks(t,Ge,e.memoizedState.cache),qa();break;case 27:case 5:qp(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:Ks(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return sa(t),t.flags|=128,null;i=Ya(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?ES(e,t,n):(sa(t),e=gs(e,t,n),e!==null?e.sibling:null)}sa(t);break;case 19:if(t.flags&128)return ym(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ya(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return ym(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Vl(t,hn.current),i)break;return null;case 22:return t.lanes=0,bS(e,t,n,t.pendingProps);case 24:Ks(t,Ge,e.memoizedState.cache)}return gs(e,t,n)}function TS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Rg(e,n)&&(t.flags&128)===0)return ke=!1,tA(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,Wt&&(t.flags&1048576)!==0&&Rx(t,Bl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")og(e)?(i=ja(e,i),t.tag=1,t=J_(null,t,e,i,n)):(t.tag=0,t=mm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Zm){t.tag=11,t=X_(null,t,e,i,n);break t}else if(s===Jm){t.tag=14,t=W_(null,t,e,i,n);break t}else if(s===Vi){t.tag=10,t.type=e,t=$_(null,t,n);break t}}throw t=Xp(e)||e,Error(J(306,t,""))}}return t;case 0:return mm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ja(i,t.pendingProps),J_(e,t,i,s,n);case 3:t:{if(Wu(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,rm(e,t),wl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ks(t,Ge,i),i!==a.cache&&sm(t,[Ge],n,!0),Al(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=K_(e,t,i,n);break t}else if(i!==s){s=fi(Error(J(424)),t),Fl(s),t=K_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=pi(e.firstChild),sn=t,Wt=!0,ea=null,di=!0,n=Ix(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(qa(),i===s){t=gs(e,t,n);break t}Ze(e,t,i,n)}t=t.child}return t;case 26:return Lr(e,t),e===null?(n=Ay(t.type,null,t.pendingProps,null))?t.memoizedState=n:Wt||(t.stateNode=pM(t.type,t.pendingProps,ta.current,t)):t.memoizedState=Ay(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qp(t),e===null&&Wt&&(i=t.stateNode=EM(t.type,t.pendingProps,ta.current),sn=t,di=!0,s=Te,ga(t.type)?(Xm=s,Te=pi(i.firstChild)):Te=s),Ze(e,t,t.pendingProps.children,n),Lr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Wt&&((s=i=Te)&&(i=qA(i,t.type,t.pendingProps,di),i!==null?(t.stateNode=i,sn=t,Te=pi(i.firstChild),di=!1,s=!0):s=!1),s||ha(t)),qp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Hm(s,a)?i=null:r!==null&&Hm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=gg(e,t,kT,null,null,n),mo._currentValue=s),Lr(e,t),Ze(e,t,i,n),t.child;case 6:return e===null&&Wt&&((e=n=Te)&&(n=YA(n,t.pendingProps,di),n!==null?(t.stateNode=n,sn=t,Te=null,e=!0):e=!1),e||ha(t)),null;case 13:return ES(e,t,n);case 4:return Wu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ka(t,null,i,n):Ze(e,t,i,n),t.child;case 11:return X_(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Lr(e,t),Ze(e,t,i,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return $_(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Za(t),s=cn(s),i=i(s),t.flags|=1,Ze(e,t,i,n),t.child;case 14:return W_(e,t,t.type,t.pendingProps,n);case 15:return MS(e,t,t.type,t.pendingProps,n);case 19:return ym(e,t,n);case 31:return jT(e,t,n);case 22:return bS(e,t,n,t.pendingProps);case 24:return Za(t),i=cn(Ge),e===null?(s=ug(),s===null&&(s=ye,a=cg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},fg(t),Ks(t,Ge,s)):((e.lanes&n)!==0&&(rm(e,t),wl(t,null,null,n),Al()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ks(t,Ge,i)):(i=a.cache,Ks(t,Ge,i),i!==s.cache&&sm(t,[Ge],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Wt&&Ah(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Lr(e,t),Ze(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function os(e){e.flags|=4}function Tp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Ry(t,i):Ry(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(tM())e.flags|=8192;else throw Xa=th,hg}else e.flags&=-16777217}function ty(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!CM(t))if(tM())e.flags|=8192;else throw Xa=th,hg}function vu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ky():536870912,e.lanes|=t,lo|=t)}function fl(e,t){if(!Wt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function eA(e,t,n){var i=t.pendingProps;switch(lg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),hs(Ge),so(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?os(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xp())),Ee(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(os(t),a!==null?(Ee(t),ty(t,a)):(Ee(t),Tp(t,s,null,i,n))):a?a!==e.memoizedState?(os(t),Ee(t),ty(t,a)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&os(t),Ee(t),Tp(t,s,e,i,n)),null;case 27:if(qu(t),n=ta.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&os(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Ee(t),t.subtreeFlags&=-33554433,null}e=Wi.current,Ur(t)?w_(t,e):(e=EM(s,i,n),t.stateNode=e,os(t))}return Ee(t),t.subtreeFlags&=-33554433,null;case 5:if(qu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&os(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Ee(t),t.subtreeFlags&=-33554433,null}if(a=Wi.current,Ur(t))w_(t,a);else{var r=Wl(ta.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[ln]=t,a[Bn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(fn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&os(t)}}return Ee(t),t.subtreeFlags&=-33554433,Tp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&os(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=ta.current,Ur(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=sn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||fM(e.nodeValue,n)),e||ha(t,!0)}else e=Wl(e).createTextNode(i),e[ln]=t,t.stateNode=e}return Ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ur(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[ln]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else n=xp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if((t.flags&128)!==0)throw Error(J(558))}return Ee(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ur(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[ln]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else s=xp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vu(t,t.updateQueue),Ee(t),null);case 4:return so(),e===null&&Bg(t.stateNode.containerInfo),t.flags|=67108864,Ee(t),null;case 10:return hs(t.type),Ee(t),null;case 19:if(pg(t),i=t.memoizedState,i===null)return Ee(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)fl(i,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=nh(e),a!==null){for(t.flags|=128,fl(i,!1),e=a.updateQueue,t.updateQueue=e,vu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wx(n,e),n=n.sibling;return Vl(t,hn.current&1|2),Wt&&ls(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Zn()>fh&&(t.flags|=128,s=!0,fl(i,!1),t.lanes=4194304)}else{if(!s)if(e=nh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,vu(t,e),fl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Wt)return Ee(t),null}else 2*Zn()-i.renderingStartTime>fh&&n!==536870912&&(t.flags|=128,s=!0,fl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Zn(),e.sibling=null,a=hn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Wt?Vl(t,a):(n=a,Ae(dn,t),Ae(hn,n),vn===null&&(vn=t)),Wt&&ls(t,i.treeForkCount),e}return Ee(t),null;case 22:case 23:return Wn(t),dg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),n=t.updateQueue,n!==null&&vu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&un(ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hs(Ge),Ee(t),null;case 25:return null;case 30:return t.flags|=33554432,Ee(t),null}throw Error(J(156,t.tag))}function nA(e,t){switch(lg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hs(Ge),so(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qu(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error(J(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return so(),null;case 10:return hs(t.type),null;case 22:case 23:return Wn(t),dg(),e!==null&&un(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hs(Ge),null;case 25:return null;default:return null}}function AS(e,t){switch(lg(t),t.tag){case 3:hs(Ge),so();break;case 26:case 27:case 5:qu(t);break;case 4:so();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:pg(t);break;case 10:hs(t.type);break;case 22:case 23:Wn(t),dg(),e!==null&&un(ka);break;case 24:hs(Ge)}}function sc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ce(t,t.return,o)}}function da(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){ce(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){ce(t,t.return,h)}}function wS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{zx(t,n)}catch(i){ce(e,e.return,i)}}}function CS(e,t,n){n.props=ja(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function Fi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=ds(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=_M(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new $n(e);zn(e.child,!1,XA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ce(e,t,o)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ce(e,t,s)}else n.current=null}function oh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)MM(e.stateNode,t[n])}function ey(e){for(var t=e.return;t!==null&&(Ug(t)&&MM(e.stateNode,t.stateNode),!Dg(t));)t=t.return}function Dl(e){for(var t=e.return;t!==null&&(Ug(t)&&WA(e.stateNode,t.stateNode),!Dg(t));)t=t.return}function Dg(e){return e.tag===5||e.tag===3||e.tag===27}function Ug(e){return e&&e.tag===7&&e.stateNode!==null}function xm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ce(e,e.return,s)}}function Ap(e,t,n){try{var i=e.stateNode;AA(i,e.type,n,t),i[Bn]=t}catch(s){ce(e,e.return,s)}}function RS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function wp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||RS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi)),oh(e,i),ee=!0;else if(s!==4&&(s===27&&(oh(e,i),i=null,ga(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Sm(e,t,n,i),e=e.sibling;e!==null;)Sm(e,t,n,i),e=e.sibling}function lh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),oh(e,i),ee=!0;else if(s!==4&&(s===27&&(oh(e,i),i=null,ga(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(lh(e,t,n,i),e=e.sibling;e!==null;)lh(e,t,n,i),e=e.sibling}function DS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);fn(t,i,n),t[ln]=e,t[Bn]=n}catch(a){ce(e,e.return,a)}}var ch=!1,qn=null;function ny(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ch=!0)}var Hi=null;function iy(){var e=Hi;return Hi=null,e}var On=0;function So(e,t,n,i,s){return On=0,US(e.child,t,n,i,s)}function US(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Vm(r);i.push(o),o.view&&(a=!0)}else a||Vm(r).view&&(a=!0);ch=!0,mM(r,On===0?t:t+"_"+On,n),On++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||US(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Yi(e,t){for(;e!==null;)e.tag===5?gM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Yi(e.child,t)),e=e.sibling}function Iu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Iu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(J(544));var n=t.name;t=ys(t.default,t.share),t!=="none"&&(So(e,n,t,null,!1)||Yi(e.child,!1))}e=e.sibling}}function Mm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=ds(i,n),a=ys(i.default,n.paired?i.share:i.enter);a!=="none"?So(e,s,a,null,!1)?(Iu(e),n.paired||t||co(e,i.onEnter)):Yi(e.child,!1):Iu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Mm(e,t),e=e.sibling;else Iu(e)}function bm(e){if(qn!==null&&qn.size!==0){var t=qn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=ys(n.default,n.share);if(a!=="none"&&(So(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,co(e,n.onShare)):Yi(e.child,!1)),t.delete(i),t.size===0)break}}}bm(e)}e=e.sibling}}}function Em(e){if(e.tag===30){var t=e.memoizedProps,n=ds(t,e.stateNode),i=qn!==null?qn.get(n):void 0,s=ys(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(So(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,qn.delete(n),co(e,t.onShare)):co(e,t.onExit):Yi(e.child,!1)),qn!==null&&bm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Em(e),e=e.sibling;else qn!==null&&bm(e)}function NS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ds(t,e.stateNode);t=ys(t.default,t.update),e.flags&=-5,t!=="none"&&So(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&NS(e);e=e.sibling}}function Tm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Yi(e.child,!1))}Tm(e)}e=e.sibling}}function Pu(e){if(e.tag===30)e.stateNode.paired=null,Yi(e.child,!1),Tm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Pu(e),e=e.sibling;else Tm(e)}function LS(e){for(e=e.child;e!==null;)e.tag===30?Yi(e.child,!1):(e.subtreeFlags&33554432)!==0&&LS(e),e=e.sibling}function Ng(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&On<a.length){var c=a[On],h=Vm(l);(c.view||h.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(h.clip)d=!0;else{d=c.rect;var f=h.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}d&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&mM(l,On===0?n:n+"_"+On,s),o&&(e.flags&4)!==0||(Hi===null&&(Hi=[]),Hi.push(l,On===0?i:i+"_"+On,t.memoizedProps)),On++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Ng(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function OS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=ds(n,i),a=ys(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(NA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;On=0,s=Ng(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||co(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&OS(e,t);e=e.sibling}}var tn=!1,se=!1,Pi=!1,Cp=!1,sy=typeof WeakSet=="function"?WeakSet:Set,en=null,zi=!1,xl=!1,uh=!1,Am=!1;function iA(e,t,n){if(e=e.containerInfo,Bm=go,e=yx(e),sg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,d=0,f=e,p=null;e:for(;;){for(var g;f!==i||a!==0&&f.nodeType!==3||(l=o+a),f!==r||s!==0&&f.nodeType!==3||(c=o+s),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break e;if(p===i&&++h===a&&(l=o),p===r&&++d===s&&(c=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Fm={focusedElem:e,selectionRange:i},go=!1,n=(n&335544064)===n,en=t,t=n?9270:1024;en!==null;){if(e=en,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Em(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&ny(e),_u(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Em(i),_u(n);continue}else if(i!==null&&i.memoizedState!==null){n&&ny(e),_u(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,en=i):(n&&NS(e),_u(n))}}qn=null}function _u(e){for(;en!==null;){var t=en,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=ja(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){ce(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Gm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Gm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=ds(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=ys(s.default,s.update),s!=="none"&&So(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(J(163))}if(i=t.sibling,i!==null){i.return=t.return,en=i;break}en=t.return}}function IS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n),i&4&&sc(5,n);break;case 1:if(Bi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var s=ja(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&wS(n),i&512&&Fi(n,n.return);break;case 3:if(Bi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{zx(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&DS(n);case 26:case 5:Bi(e,n),t===null&&i&4&&xm(n),i&512&&Fi(n,n.return);break;case 12:Bi(e,n);break;case 31:Bi(e,n),i&4&&FS(e,n);break;case 13:Bi(e,n),i&4&&HS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=mA.bind(null,n),ZA(e,n))));break;case 22:if(i=n.memoizedState!==null||tn,!i){var a=t!==null&&t.memoizedState!==null||se;t=tn,s=se,tn=i,(se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Mi(e,n,i)):Bi(e,n),tn=t,se=s}break;case 30:Bi(e,n),i&512&&Fi(n,n.return);break;case 7:i&512&&Fi(n,n.return);default:Bi(e,n)}}function wm(e,t){for(e=e.child;e!==null;)PS(e,t),e=e.sibling}function PS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){ce(e,e.return,l)}Cm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ee=!0}catch(l){ce(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?xy(o,!0):xy(e.stateNode,!1)}catch(l){ce(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&wm(e,t);break;default:wm(e,t)}}function Cm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:PS(n,i);break t;case 22:n.memoizedState===null&&Cm(n,i);break t;default:Cm(n,i)}}e=e.sibling}}function zS(e){var t=e.alternate;t!==null&&(e.alternate=null,zS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,Nn=!1;function Si(e,t,n){for(n=n.child;n!==null;)BS(e,t,n),n=n.sibling}function BS(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 26:se||on(n,t),Si(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:se||on(n,t),Dl(n);var i=Ue,s=Nn;ga(n.type)&&(Ue=n.stateNode,Nn=!1),Si(e,t,n),TM(n.stateNode,n.type,n.memoizedProps),Ue=i,Nn=s;break;case 5:se||on(n,t),Dl(n);case 6:if(n.tag===6&&Dl(n),i=Ue,s=Nn,Ue=null,Si(e,t,n),Ue=i,Nn=s,Ue!==null)if(Nn)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode),ee=!0}catch(a){ce(n,t,a)}else try{Ue.removeChild(n.stateNode),ee=!0}catch(a){ce(n,t,a)}break;case 18:Ue!==null&&(Nn?(e=Ue,yy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vo(e)):yy(Ue,n.stateNode));break;case 4:i=Ue,s=Nn,Ue=n.stateNode.containerInfo,Nn=!0,Si(e,t,n),Ue=i,Nn=s;break;case 0:case 11:case 14:case 15:da(2,n,t),se||da(4,n,t),Si(e,t,n);break;case 1:se||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&CS(n,t,i)),Si(e,t,n);break;case 21:Si(e,t,n);break;case 22:se=(i=se)||n.memoizedState!==null,Si(e,t,n),se=i;break;case 30:on(n,t),Si(e,t,n);break;case 7:se||on(n,t),Si(e,t,n);break;default:Si(e,t,n)}}function FS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vo(e)}catch(n){ce(t,t.return,n)}}}function HS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(n){ce(t,t.return,n)}}function sA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sy),t;default:throw Error(J(435,e.tag))}}function yu(e,t){var n=sA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=gA.bind(null,e,i);i.then(s,s)}})}function bn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ga(l.type)){Ue=l.stateNode,Nn=!1;break t}break;case 5:Ue=l.stateNode,Nn=!1;break t;case 3:case 4:Ue=l.stateNode.containerInfo,Nn=!0;break t}l=l.return}if(Ue===null)throw Error(J(160));BS(r,o,a),Ue=null,Nn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)VS(t,e,n),t=t.sibling}var bi=null;function VS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}bn(t,e,n),En(e),s&4&&(da(3,e,e.return),sc(3,e),da(5,e,e.return));break;case 1:bn(t,e,n),En(e),s&512&&(se||i===null||on(i,i.return)),s&64&&tn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=bi,bn(t,e,n),En(e),s&512&&(se||i===null||on(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(tn)e.stateNode=pM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[tc]||i[ln]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),fn(i,t,n),i[ln]=e,nn(i),t=i;break t;case"link":if(a=Cy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),fn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Cy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),fn(i,t,n),s.head.appendChild(i);break;default:throw Error(J(468,t))}i[ln]=e,nn(i),t=i}e.stateNode=t}else tn||Wm(a,e.type,e.stateNode);else e.stateNode=wy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||se||t.parentNode.removeChild(t)):s.count--,n===null?tn||Wm(a,e.type,e.stateNode):wy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ap(e,e.memoizedProps,i.memoizedProps);break;case 27:bn(t,e,n),En(e),s&512&&(se||i===null||on(i,i.return)),i!==null&&s&4&&Ap(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Pi,Pi=!1,bn(t,e,n),Pi=a,En(e),s&512&&(se||i===null||on(i,i.return)),e.flags&32){t=e.stateNode;try{ro(t,""),ee=!0}catch(h){ce(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Ap(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Cp=!0);break;case 6:if(bn(t,e,n),En(e),s&4){if(e.stateNode===null)throw Error(J(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ee=!0}catch(h){ce(e,e.return,h)}}break;case 3:if(ee=!1,Hu=null,a=bi,bi=ql(t.containerInfo),bn(t,e,n),bi=a,En(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(h){ce(e,e.return,h)}Cp&&(Cp=!1,GS(e)),ee=!1;break;case 4:s=Pi,Pi=tn,i=u_(),a=bi,bi=ql(e.stateNode.containerInfo),bn(t,e,n),En(e),bi=a,ee&&xl&&(uh=!0),ee=i,Pi=s;break;case 12:bn(t,e,n),En(e);break;case 31:bn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 13:bn(t,e,n),En(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Lh=Zn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=tn,l=se,c=Pi;tn=o||a,Pi=c||a,se=l||r,bn(t,e,n),se=l,Pi=c,tn=o,En(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||tn||se||(t=r||se,n=tn,i=se,tn=a||tn,se=t,Xs(e,2),tn=n,se=i),!a&&Pi||wm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,yu(e,n))));break;case 19:bn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 30:s&512&&(se||i===null||on(i,i.return)),s=u_(),a=xl,r=(n&335544064)===n,o=e.memoizedProps,xl=r&&ys(o.default,o.update)!=="none",bn(t,e,n),En(e),r&&i!==null&&ee&&(e.flags|=4),xl=a,ee=s;break;case 21:break;case 7:s&512&&(se||i===null||on(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:bn(t,e,n),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(RS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Ug(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Dg(s))break;s=s.return}var r=i;if(n==null)throw Error(J(160));switch(n.tag){case 27:var o=n.stateNode,l=wp(e);lh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(ro(c,""),n.flags&=-33);var h=wp(e);lh(e,h,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,f=wp(e);Sm(e,f,d,r);break;default:throw Error(J(161))}}catch(p){ce(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function GS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;GS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,go=!0,t.reset(),go=!1),e=e.sibling}}function Nr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)kS(t,e),t=t.sibling;else OS(t,!1)}function kS(e,t){var n=e.alternate;if(n===null)Mm(e,!1);else switch(e.tag){case 3:if(Am=zi=!1,iy(),Nr(t,e),!zi&&!uh){if(e=Hi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];gM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Am=!0}Hi=null;break;case 5:Nr(t,e);break;case 4:i=zi,zi=!1,Nr(t,e),zi&&(uh=!0),zi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Mm(e,!1):Nr(t,e));break;case 30:i=zi,s=iy(),zi=!1,Nr(t,e),zi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=ds(a,r),r=ds(n.memoizedProps,r);var o=ys(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,On=0,t=Ng(e,n,t,r,o,a,!0),On!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(co(e,e.memoizedProps.onUpdate),Hi=s):s!==null&&(s.push.apply(s,Hi),Hi=s),zi=(e.flags&32)!==0?!0:i;break;default:Nr(t,e)}}function Bi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)IS(e,t.alternate,t),t=t.sibling}function Xs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:da(4,n,n.return),Xs(n,i);break;case 1:on(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&CS(n,n.return,s),Xs(n,i);break;case 27:(i&2)!==0&&TM(n.stateNode,n.type,n.memoizedProps);case 5:on(n,n.return),n.tag!==5&&n.tag!==27||Dl(n),Xs(n,i);break;case 6:Dl(n);break;case 26:on(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||se||s.parentNode.removeChild(s),Xs(n,i);break;case 22:n.memoizedState===null&&Xs(n,i);break;case 30:on(n,n.return),Xs(n,i);break;case 7:on(n,n.return);default:Xs(n,i)}e=e.sibling}}function Mi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Mi(s,a,n),sc(4,a);break;case 1:if(Mi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){ce(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Px(c[s],l)}catch(h){ce(i,i.return,h)}}o&&r&64&&wS(a),Fi(a,a.return);break;case 27:(n&2)!==0&&DS(a);case 5:a.tag!==5&&a.tag!==27||ey(a),Mi(s,a,n),o&&i===null&&r&4&&xm(a),Fi(a,a.return);break;case 6:ey(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||tn||Wm(ql(l.ownerDocument),a.type,l),Mi(s,a,n),o&&i===null&&r&4&&xm(a),Fi(a,a.return);break;case 12:Mi(s,a,n);break;case 31:Mi(s,a,n),o&&r&4&&FS(s,a);break;case 13:Mi(s,a,n),o&&r&4&&HS(s,a);break;case 22:a.memoizedState===null&&Mi(s,a,n),Fi(a,a.return);break;case 30:Mi(s,a,n),Fi(a,a.return);break;case 7:Fi(a,a.return);default:Mi(s,a,n)}t=t.sibling}}function Lg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&nc(n))}function Og(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nc(e))}function oi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)XS(e,t,n,i),t=t.sibling;else s&&LS(t)}function XS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Pu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:oi(e,t,n,i),a&2048&&sc(9,t);break;case 1:oi(e,t,n,i);break;case 3:oi(e,t,n,i),s&&Am&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&nc(a)));break;case 12:if(a&2048){oi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){ce(t,t.return,c)}}else oi(e,t,n,i);break;case 31:oi(e,t,n,i);break;case 13:oi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Pu(o),r._visibility&2?oi(e,t,n,i):Ul(e,t)):(s&&o!==null&&o.memoizedState!==null&&Pu(t),r._visibility&2?oi(e,t,n,i):(r._visibility|=2,Or(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Lg(o,t);break;case 24:oi(e,t,n,i),a&2048&&Og(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Yi(a.child,!0),Yi(t.child,!0))),oi(e,t,n,i);break;default:oi(e,t,n,i)}}function Or(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Or(a,r,o,l,s),sc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Or(a,r,o,l,s):Ul(a,r):(h._visibility|=2,Or(a,r,o,l,s)),s&&c&2048&&Lg(r.alternate,r);break;case 24:Or(a,r,o,l,s),s&&c&2048&&Og(r.alternate,r);break;default:Or(a,r,o,l,s)}t=t.sibling}}function Ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ul(n,i),s&2048&&Lg(i.alternate,i);break;case 24:Ul(n,i),s&2048&&Og(i.alternate,i);break;default:Ul(n,i)}t=t.sibling}}var Ba=8192;function Ia(e,t,n){if(e.subtreeFlags&Ba)for(e=e.child;e!==null;)WS(e,t,n),e=e.sibling}function WS(e,t,n){switch(e.tag){case 26:Ia(e,t,n),e.flags&Ba&&(e.memoizedState!==null?lw(n,bi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Dy(n,e)));break;case 5:Ia(e,t,n),e.flags&Ba&&(e=e.stateNode,(t&335544128)===t&&Dy(n,e));break;case 3:case 4:var i=bi;bi=ql(e.stateNode.containerInfo),Ia(e,t,n),bi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ba,Ba=16777216,Ia(e,t,n),Ba=i):Ia(e,t,n));break;case 30:if((e.flags&Ba)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,qn===null&&(qn=new Map),qn.set(i,s)}Ia(e,t,n);break;default:Ia(e,t,n)}}function qS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,ZS(i,e)}qS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)YS(e),e=e.sibling}function YS(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&da(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zu(e)):dl(e);break;default:dl(e)}}function zu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,ZS(i,e)}qS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),zu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zu(t));break;default:zu(t)}e=e.sibling}}function ZS(e,t){for(;en!==null;){var n=en;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:nc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,en=i;else t:for(n=e;en!==null;){i=en;var s=i.sibling,a=i.return;if(zS(i),i===n){en=null;break t}if(s!==null){s.return=a,en=s;break t}en=a}}}var aA={getCacheForType:function(e){var t=cn(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return cn(Ge).controller.signal}},rA=typeof WeakMap=="function"?WeakMap:Map,ne=0,ye=null,Jt=null,Qt=0,oe=0,kn=null,Qs=!1,Mo=!1,Ig=!1,vs=0,Fe=0,pa=0,Wa=0,hh=0,Yn=0,lo=0,Nl=null,Ln=null,Rm=!1,Lh=0,JS=0,fh=1/0,dh=null,ra=null,Oe=0,Ti=null,$a=null,qi=0,Dm=0,Um=null,KS=null,eo=null,no=null,io=null,Ll=0,Bu=null;function Qn(){return(ne&2)!==0&&Qt!==0?Qt&-Qt:Nt.T!==null?zg():tx()}function QS(){if(Yn===0)if((Qt&536870912)===0||Wt){var e=ru;ru<<=1,(ru&3932160)===0&&(ru=262144),Yn=e}else Yn=536870912;return e=dn.current,e!==null&&(e.flags|=32),Yn}function co(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=_M(ds(e.memoizedProps,n))),no===null&&(no=[]),no.push(t.bind(null,i))}}function Pn(e,t,n){(e===ye&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(uo(e,0),js(e,Qt,Yn,!1)),$l(e,n),((ne&2)===0||e!==ye)&&(e===ye&&((ne&2)===0&&(Wa|=n),Fe===4&&js(e,Qt,Yn,!1)),Ji(e))}function jS(e,t,n){if((ne&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||jl(e,t),s=i?cA(e,t):Rp(e,t,!0),a=i;do{if(s===0){Mo&&!i&&js(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!oA(n)){s=Rp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Nl;var l=o.current.memoizedState.isDehydrated;if(l&&(uo(o,r).flags|=256),r=Rp(o,r,!1),r!==2&&r!==6){if(Ig&&!l){o.errorRecoveryDisabledLanes|=a,Wa|=a,s=4;break t}a=Ln,Ln=s,a!==null&&(Ln===null?Ln=a:Ln.push.apply(Ln,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){uo(e,0),js(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:js(i,t,Yn,!Qs);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=Lh+300-Zn(),10<s)){if(js(i,t,Yn,!Qs),yh(i,0,!0)!==0)break t;qi=t,i.timeoutHandle=Fg(ay.bind(null,i,n,Ln,dh,Rm,t,Yn,Wa,lo,Qs,a,"Throttled",-0,0),s);break t}ay(i,n,Ln,dh,Rm,t,Yn,Wa,lo,Qs,a,null,-0,0)}}break}while(!0);Ji(e)}function ay(e,t,n,i,s,a,r,o,l,c,h,d,f,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},qn=null,WS(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=Yl.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?Lh-Zn():(a&4194048)===a?JS-Zn():0,g=cw(d,g),g!==null)){qi=a,e.cancelPendingCommit=g(oy.bind(null,e,t,a,n,i,s,r,o,l,c,h,d,null,f,p)),js(e,a,r,!c);return}oy(e,t,a,n,i,s,r,o,l,c,h,d)}function oA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!jn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function js(e,t,n,i){t=Jy(e,t),t&=~hh,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Kn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Qy(e,n,t)}function Oh(){return(ne&6)===0?(ac(0,!1),!1):!0}function Pg(){if(Jt!==null){if(oe===0)var e=Jt.return;else e=Jt,cs=sr=null,yg(e),jr=null,Hl=0,e=Jt;for(;e!==null;)AS(e.alternate,e),e=e.return;Jt=null}}function uo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,RA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qi=0,Pg(),ye=e,Jt=n=us(e.current,null),Qt=t,oe=0,kn=null,Qs=!1,Mo=jl(e,t),Ig=!1,lo=Yn=hh=Wa=pa=Fe=0,Ln=Nl=null,Rm=!1,vs=Jy(e,t),Eh(),n}function $S(e,t){Vt=null,Nt.H=ah,t===xo||t===wh?(t=N_(),oe=3):t===hg?(t=N_(),oe=4):oe=t===wg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kn=t,Jt===null&&(Fe=1,rh(e,fi(t,e.current)))}function tM(){var e=dn.current;return e===null?!0:(Qt&4194048)===Qt?vn===null:(Qt&62914560)===Qt||(Qt&536870912)!==0?e===vn:!1}function eM(){var e=Nt.H;return Nt.H=ah,e===null?ah:e}function nM(){var e=Nt.A;return Nt.A=aA,e}function ph(){Fe=4,Qs||(Qt&4194048)!==Qt&&dn.current!==null||(Mo=!0),(pa&134217727)===0&&(Wa&134217727)===0||ye===null||js(ye,Qt,Yn,!1)}function Rp(e,t,n){var i=ne;ne|=2;var s=eM(),a=nM();(ye!==e||Qt!==t)&&(dh=null,uo(e,t)),t=!1;var r=Fe;t:do try{if(oe!==0&&Jt!==null){var o=Jt,l=kn;switch(oe){case 8:Pg(),r=6;break t;case 3:case 2:case 9:case 6:dn.current===null&&(t=!0);var c=oe;if(oe=0,kn=null,Yr(e,o,l,c),n&&Mo){r=0;break t}break;default:c=oe,oe=0,kn=null,Yr(e,o,l,c)}}lA(),r=Fe;break}catch(h){$S(e,h)}while(!0);return t&&e.shellSuspendCounter++,cs=sr=null,ne=i,Nt.H=s,Nt.A=a,Jt===null&&(ye=null,Qt=0,Eh()),r}function lA(){for(;Jt!==null;)iM(Jt)}function cA(e,t){var n=ne;ne|=2;var i=eM(),s=nM();ye!==e||Qt!==t?(dh=null,fh=Zn()+500,uo(e,t)):Mo=jl(e,t);t:do try{if(oe!==0&&Jt!==null){t=Jt;var a=kn;e:switch(oe){case 1:oe=0,kn=null,Yr(e,t,a,1);break;case 2:case 9:if(U_(a)){oe=0,kn=null,ry(t);break}t=function(){oe!==2&&oe!==9||ye!==e||(oe=7),Ji(e)},a.then(t,t);break t;case 3:oe=7;break t;case 4:oe=5;break t;case 7:U_(a)?(oe=0,kn=null,ry(t)):(oe=0,kn=null,Yr(e,t,a,7));break;case 5:var r=null;switch(Jt.tag){case 26:r=Jt.memoizedState;case 5:case 27:var o=Jt;if(r?CM(r):o.stateNode.complete){oe=0,kn=null;var l=o.sibling;if(l!==null)Jt=l;else{var c=o.return;c!==null?(Jt=c,Ih(c)):Jt=null}break e}}oe=0,kn=null,Yr(e,t,a,5);break;case 6:oe=0,kn=null,Yr(e,t,a,6);break;case 8:Pg(),Fe=6;break t;default:throw Error(J(462))}}uA();break}catch(h){$S(e,h)}while(!0);return cs=sr=null,Nt.H=i,Nt.A=s,ne=n,Jt!==null?0:(ye=null,Qt=0,Eh(),Fe)}function uA(){for(;Jt!==null&&!wE();)iM(Jt)}function iM(e){var t=TS(e.alternate,e,vs);e.memoizedProps=e.pendingProps,t===null?Ih(e):Jt=t}function ry(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Z_(n,t,t.pendingProps,t.type,void 0,Qt);break;case 11:t=Z_(n,t,t.pendingProps,t.type.render,t.ref,Qt);break;case 5:yg(t);var i=t;i===sn&&(Wt?(ju(i),i.tag===5&&i.stateNode!=null&&(Te=i.stateNode)):(ju(i),Wt=!0));default:AS(n,t),t=Jt=wx(t,vs),t=TS(n,t,vs)}e.memoizedProps=e.pendingProps,t===null?Ih(e):Jt=t}function Yr(e,t,n,i){cs=sr=null,yg(t),jr=null,Hl=0;var s=t.return;try{if(QT(e,s,t,n,Qt)){Fe=1,rh(e,fi(n,e.current)),Jt=null;return}}catch(a){if(s!==null)throw Jt=s,a;Fe=1,rh(e,fi(n,e.current)),Jt=null;return}t.flags&32768?(Wt||i===1?e=!0:Mo||(Qt&536870912)!==0?e=!1:(Qs=e=!0,(i===2||i===9||i===3||i===6)&&(i=dn.current,i!==null&&i.tag===13&&(i.flags|=16384))),sM(t,e)):Ih(t)}function Ih(e){var t=e;do{if((t.flags&32768)!==0){sM(t,Qs);return}e=t.return;var n=eA(t.alternate,t,vs);if(n!==null){Jt=n;return}if(t=t.sibling,t!==null){Jt=t;return}Jt=t=e}while(t!==null);Fe===0&&(Fe=5)}function sM(e,t){do{var n=nA(e.alternate,e);if(n!==null){n.flags&=32767,Jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Jt=e;return}Jt=e=n}while(e!==null);Fe=6,Jt=null}function oy(e,t,n,i,s,a,r,o,l,c,h,d){e.cancelPendingCommit=null;do Ph();while(Oe!==0);if((ne&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));e===ye&&(Jt=ye=null,Qt=0),$a=t,Ti=e,qi=n,Um=s,KS=i,hA(e,t,n,r,o,l,d)}}function hA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Dm=o,o|=ag,zE(e,n,o,i,s,a),no=null,(n&335544064)===n?(io=FT(e),i=10262):(io=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,vA(Yu,function(){return Im(),null})):(e.callbackNode=null,e.callbackPriority=0),ch=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null,s=ie.p,ie.p=2,a=ne,ne|=4;try{iA(e,t,n)}finally{ne=a,ie.p=s,Nt.T=i}}Oe=1,ch?eo=IA(r,e.containerInfo,io,Nm,Lm,dA,Om,Im,fA,null,null):(Nm(),Lm(),Om())}function fA(e){if(Oe!==0){var t=Ti.onRecoverableError;t(e,{componentStack:null})}}function dA(){Oe===3&&(Oe=0,kS($a,Ti),Oe=4)}function Nm(){if(Oe===1){Oe=0;var e=Ti,t=$a,n=qi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null;var s=ie.p;ie.p=2;var a=ne;ne|=4;try{xl=uh=!1,VS(t,e,n),n=Fm;var r=yx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&_x(o.ownerDocument.documentElement,o)){if(l!==null&&sg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var u=b_(o,x),y=b_(o,m);if(u&&y&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(_),p.extend(y.node,y.offset)):(_.setEnd(y.node,y.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}go=!!Bm,Fm=Bm=null}finally{ne=a,ie.p=s,Nt.T=i}}e.current=t,Oe=2}}function Lm(){if(Oe===2){Oe=0;var e=Ti,t=$a,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Nt.T,Nt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{IS(e,t.alternate,t)}finally{ne=s,ie.p=i,Nt.T=n}}Oe=3}}function Om(){if(Oe===4||Oe===3){Oe=0;var e=eo;eo=null,CE();var t=Ti,n=$a,i=qi,s=KS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Oe=5:(Oe=0,$a=Ti=null,aM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ra=null),jm(i),n=n.stateNode,Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Ql,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Nt.T,a=ie.p,ie.p=2,Nt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Nt.T=n,ie.p=a}}if(s=no,r=io,io=null,s!==null&&(no=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(qi&3)!==0&&Ph(),Ji(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Bu?Ll++:(Ll=0,Bu=t):(Ll=0,Bu=null),ac(0,!1)}}function aM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,nc(t)))}function Ph(){return eo!==null&&(eo.skipTransition(),eo=null),Nm(),Lm(),Om(),Im()}function Im(){if(Oe!==5)return!1;var e=Ti,t=Dm;Dm=0;var n=jm(qi),i=Nt.T,s=ie.p;try{ie.p=32>n?32:n,Nt.T=null,n=Um,Um=null;var a=Ti,r=qi;if(Oe=0,$a=Ti=null,qi=0,(ne&6)!==0)throw Error(J(331));var o=ne;if(ne|=4,YS(a.current),XS(a,a.current,r,n),ne=o,ac(0,!1),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Ql,a)}catch{}return!0}finally{ie.p=s,Nt.T=i,aM(e,t)}}function ly(e,t,n){t=fi(n,t),t=pm(e.stateNode,t,2),e=ia(e,t,2),e!==null&&($l(e,2),Ji(e))}function ce(e,t,n){if(e.tag===3)ly(e,e,n);else for(;t!==null;){if(t.tag===3){ly(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))){e=fi(n,e),n=xS(2),i=ia(t,n,2),i!==null&&(SS(n,i,t,e),$l(i,2),Ji(i));break}}t=t.return}}function Dp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new rA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Ig=!0,s.add(n),e=pA.bind(null,e,t,n),t.then(e,e))}function pA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(Qt&n)===n&&((Fe===4||Fe===3&&(Qt&62914560)===Qt&&300>Zn()-Lh)&&(ne&2)===0?uo(e,0):hh|=n,lo===Qt&&(lo=0)),Ji(e)}function rM(e,t){t===0&&(t=Ky()),e=ir(e,t),e!==null&&($l(e,t),Ji(e))}function mA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rM(e,n)}function gA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),rM(e,n)}function vA(e,t){return Km(e,t)}var ho=null,Ir=null,Pm=!1,mh=!1,Up=!1,$s=0;function Ji(e){e!==Ir&&e.next===null&&(Ir===null?ho=Ir=e:Ir=Ir.next=e),mh=!0,Pm||(Pm=!0,yA())}function ac(e,t){if(!Up&&mh){Up=!0;do for(var n=!1,i=ho;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Kn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cy(i,a))}else a=Qt,a=yh(i,i===ye?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||jl(i,a)||(n=!0,cy(i,a));i=i.next}while(n);Up=!1}}function _A(){oM()}function oM(){mh=Pm=!1;var e=0;$s!==0&&CA()&&(e=$s);for(var t=Zn(),n=null,i=ho;i!==null;){var s=i.next,a=lM(i,t);a===0?(i.next=null,n===null?ho=s:n.next=s,s===null&&(Ir=n)):(n=i,(e!==0||(a&3)!==0)&&(mh=!0)),i=s}Oe!==0&&Oe!==5||ac(e,!1),$s!==0&&($s=0)}function lM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Kn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=PE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ye,n=Qt,n=yh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&cp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||jl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&cp(i),jm(n)){case 2:case 8:n=Yy;break;case 32:n=Yu;break;case 268435456:n=Zy;break;default:n=Yu}return i=cM.bind(null,e),n=Km(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&cp(i),e.callbackPriority=2,e.callbackNode=null,2}function cM(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ph()&&e.callbackNode!==n)return null;var i=Qt;return i=yh(e,e===ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(jS(e,i,t),lM(e,Zn()),e.callbackNode!=null&&e.callbackNode===n?cM.bind(null,e):null)}function cy(e,t){if(Ph())return null;jS(e,t,!0)}function yA(){DA(function(){(ne&6)!==0?Km(qy,_A):oM()})}function zg(){if($s===0){var e=Ja;e===0&&(e=au,au<<=1,(au&261888)===0&&(au=256)),$s=e}return $s}function uy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Au(e)}function xA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=uy((s[Bn]||null).action),r=i.submitter;r&&(t=(t=r[Bn]||null)?uy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Sh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if($s!==0){var l=new FormData(s,r);fm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),fm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(xu=0;xu<em.length;xu++)Su=em[xu],hy=Su.toLowerCase(),fy=Su[0].toUpperCase()+Su.slice(1),Ai(hy,"on"+fy);var Su,hy,fy,xu;Ai(Sx,"onAnimationEnd");Ai(Mx,"onAnimationIteration");Ai(bx,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(UT,"onTransitionRun");Ai(NT,"onTransitionStart");Ai(LT,"onTransitionCancel");Ai(Ex,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function uM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Ju(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Ju(h)}s.currentTarget=null,a=l}}}}function Zt(e,t){var n=t[r_];n===void 0&&(n=t[r_]=new Set);var i=e+"__bubble";n.has(i)||(hM(t,e,2,!1),n.add(i))}function Np(e,t,n){var i=0;t&&(i|=4),hM(n,e,i,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Bg(e){if(!e[Mu]){e[Mu]=!0,nx.forEach(function(n){n!=="selectionchange"&&(SA.has(n)||Np(n,!1,e),Np(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mu]||(t[Mu]=!0,Np("selectionchange",!1,t))}}function hM(e,t,n,i){switch(IM(t)){case 2:var s=dw;break;case 8:s=pw;break;default:s=Wg}n=s.bind(null,t,n,e),s=void 0,!Qp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Lp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Fa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}ux(function(){var c=a,h=tg(n),d=[];t:{var f=Tx.get(e);if(f!==void 0){var p=Sh,g=e;switch(e){case"keypress":if(Cu(n)===0)break t;case"keydown":case"keyup":p=oT;break;case"focusin":g="focus",p=mp;break;case"focusout":g="blur",p=mp;break;case"beforeblur":case"afterblur":p=mp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=p_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=JE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fT;break;case Sx:case Mx:case bx:p=jE;break;case Ex:p=pT;break;case"scroll":case"scrollend":p=YE;break;case"wheel":p=gT;break;case"copy":case"cut":case"paste":p=tT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=g_;break;case"submit":p=uT;break;case"toggle":case"beforetoggle":p=_T}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var y=c,_;y!==null;){var v=y;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=Il(y,u),v!=null&&x.push(Xl(y,v,_))),m)break;y=y.return}0<x.length&&(f=new p(f,g,null,n,h),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==Kp&&(g=n.relatedTarget||n.fromElement)&&(Fa(g)||g[_o]))break t;(f||p)&&(g=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=c,p=p?Fa(p):null,p!==null&&(m=Kl(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(f=null,p=c),f!==p&&(x=p_,v="onMouseLeave",u="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(x=g_,v="onPointerLeave",u="onPointerEnter",y="pointer"),m=f==null?g:_l(f),_=p==null?g:_l(p),g=new x(v,y+"leave",f,n,h),g.target=m,g.relatedTarget=_,v=null,Fa(h)===c&&(x=new x(u,y+"enter",p,n,h),x.target=_,x.relatedTarget=m,v=x),m=v,x=f&&p?Bp(f,p,MA):null,f!==null&&dy(d,g,f,x,!1),p!==null&&m!==null&&dy(d,m,p,x,!0)))}t:{if(f=c?_l(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=x_;else if(y_(f))if(gx)T=CT;else{T=AT;var A=TT}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&$m(c.elementType)&&(T=x_):T=wT;if(T&&(T=T(e,c))){mx(d,T,n,h);break t}A&&A(e,f,c)}switch(A=c?_l(c):window,e){case"focusin":(y_(A)||A.contentEditable==="true")&&(Vr=A,$p=c,bl=null);break;case"focusout":bl=$p=Vr=null;break;case"mousedown":tm=!0;break;case"contextmenu":case"mouseup":case"dragend":tm=!1,E_(d,n,h);break;case"selectionchange":if(DT)break;case"keydown":case"keyup":E_(d,n,h)}var w;if(ig)t:{switch(e){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else Hr?dx(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(fx&&n.locale!=="ko"&&(Hr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Hr&&(w=hx()):(Js=h,eg="value"in Js?Js.value:Js.textContent,Hr=!0)),A=gh(c,R),0<A.length&&(R=new m_(R,e,null,n,h),d.push({event:R,listeners:A}),w?R.data=w:(w=px(n),w!==null&&(R.data=w)))),(w=xT?ST(e,n):MT(e,n))&&(R=gh(c,"onBeforeInput"),0<R.length&&(A=new m_("onBeforeInput","beforeinput",null,n,h),d.push({event:A,listeners:R}),A.data=w)),xA(d,e,c,n,h)}uM(d,t)})}function Xl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Il(e,n),s!=null&&i.unshift(Xl(e,s,a)),s=Il(e,t),s!=null&&i.push(Xl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function MA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Il(n,a),c!=null&&r.unshift(Xl(n,c,l))):s||(c=Il(n,a),c!=null&&r.push(Xl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var bA=/\r\n?/g,EA=/\u0000|\uFFFD/g;function py(e){return(typeof e=="string"?e:""+e).replace(bA,`
`).replace(EA,"")}function fM(e,t){return t=py(t),py(e)===t}function le(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||ro(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&ro(e,""+i);else return;break;case"className":lu(e,"class",i);break;case"tabIndex":lu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":lu(e,n,i);break;case"style":cx(e,i,a);return;case"data":if(t!=="object"){lu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Au(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",s.name,s,null),le(e,t,"formEncType",s.formEncType,s,null),le(e,t,"formMethod",s.formMethod,s,null),le(e,t,"formTarget",s.formTarget,s,null)):(le(e,t,"encType",s.encType,s,null),le(e,t,"method",s.method,s,null),le(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Au(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Gi);return;case"onScroll":i!=null&&Zt("scroll",e);return;case"onScrollEnd":i!=null&&Zt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Au(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Zt("beforetoggle",e),Zt("toggle",e),Tu(e,"popover",i);break;case"xlinkActuate":rs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":rs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":rs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":rs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":rs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":rs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":rs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":rs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":rs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Tu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=WE.get(n)||n,Tu(e,n,i);else return}ee=!0}function zm(e,t,n,i,s,a){switch(n){case"style":cx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")ro(e,i);else if(typeof i=="number"||typeof i=="bigint")ro(e,""+i);else return;break;case"onScroll":i!=null&&Zt("scroll",e);return;case"onScrollEnd":i!=null&&Zt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Gi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ix.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Bn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ee=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Tu(e,n,i)}return}ee=!0}function fn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Zt("error",e),Zt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:le(e,t,a,r,n,null)}}s&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Zt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:le(e,t,i,h,n,null)}}rx(e,a,o,l,c,r,s,!1);return;case"select":Zt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:le(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Jr(e,!!i,t,!1):n!=null&&Jr(e,!!i,n,!0);return;case"textarea":Zt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:le(e,t,r,o,n,null)}lx(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Zt("beforetoggle",e),Zt("toggle",e),Zt("cancel",e),Zt("close",e);break;case"iframe":case"object":Zt("load",e);break;case"video":case"audio":for(i=0;i<kl.length;i++)Zt(kl[i],e);break;case"image":Zt("error",e),Zt("load",e);break;case"details":Zt("toggle",e);break;case"embed":case"source":case"link":Zt("error",e),Zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:le(e,t,c,i,n,null)}return;default:if($m(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&zm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}var TA={};function AA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||le(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":p!==d&&(ee=!0),a=p;break;case"name":p!==d&&(ee=!0),s=p;break;case"checked":p!==d&&(ee=!0),c=p;break;case"defaultChecked":p!==d&&(ee=!0),h=p;break;case"value":p!==d&&(ee=!0),r=p;break;case"defaultValue":p!==d&&(ee=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&le(e,t,f,p,i,d)}}Jp(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||le(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ee=!0),f=a;break;case"defaultValue":a!==l&&(ee=!0),o=a;break;case"multiple":a!==l&&(ee=!0),r=a;default:a!==l&&le(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?Jr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Jr(e,!!n,t,!0):Jr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ee=!0),f=s;break;case"defaultValue":s!==a&&(ee=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&le(e,t,r,s,i,a)}ox(e,f,p);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:le(e,t,g,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":f!==p&&(ee=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&le(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,t));break;default:le(e,t,c,f,i,p)}return;default:if($m(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&zm(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||zm(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&le(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||le(e,t,d,f,i,p)}function my(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&my(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&my(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bm=null,Fm=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function gy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pM(e,t,n,i){return n=Wl(n).createElement(e),n[ln]=i,n[Bn]=t,fn(n,e,t),nn(n),n}function Hm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Op=null;function CA(){var e=window.event;return e&&e.type==="popstate"?e===Op?!1:(Op=e,!0):(Op=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,RA=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,_y=typeof requestAnimationFrame=="function"?requestAnimationFrame:Fg,DA=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(e){return vy.resolve(null).then(e).catch(UA)}:Fg;function UA(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function yy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),vo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Pp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Pp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[tc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Pp(e.ownerDocument.body);n=s}while(n);vo(t)}function xy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function mM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function gM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function vM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Vm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return vM(t,n,e)}function NA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return vM(t,n,e)}function LA(e){return e.documentElement.clientHeight}function OA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function IA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var f=c.defaultView,p=f.navigation&&f.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(LA(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,u=0,y=0;y<m.length;y++){var _=m[y];if(!_.complete){var v=_.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<f.innerHeight&&v.left<f.innerWidth){if(u+=RM(_),u>Vu){x.length=g;break}_=new Promise(OA.bind(_)),x.push(_)}}}if(0<x.length)return f=Promise.race([Promise.all(x),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(p?Promise.allSettled([p.finished,f]):f).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var d=[];return h.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),p=0;p<f.length;p++){var g=f[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var u=m=void 0,y=!0,_=0;_<g.length;_++){var v=g[_],T=v.width;if(m===void 0)m=T;else if(m!==T){y=!1;break}if(T=v.height,u===void 0)u=T;else if(u!==T){y=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}y&&m!==void 0&&u!==void 0&&(x.setKeyframes(g),y=getComputedStyle(x.target,x.pseudoElement),y.width!==m||y.height!==u)&&(y=g[0],y.width=m,y.height=u,y=g[g.length-1],y.width=m,y.height=u,x.setKeyframes(g))}}r()},function(f){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var f=0;f<d.length;f++)d[f].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function Ha(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ha.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:xe({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ha.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Ha.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function _M(e){return{name:e,group:new Ha("group",e),imagePair:new Ha("image-pair",e),old:new Ha("old",e),new:new Ha("new",e)}}function $n(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}$n.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(yM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=fo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),zn(this._fragmentFiber.child,!1,PA,e,o,i)}this._eventListeners=a}};function PA(e,t,n,i){return Je(e).addEventListener(t,n,i),!1}$n.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=yM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=fo(s.optionsOrUseCapture),zn(this._fragmentFiber.child,!1,zA,e,n,s),i.splice(t,1),a!==null&&a()}};function zA(e,t,n,i){return Je(e).removeEventListener(t,n,i),!1}function fo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Sy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function yM(e,t,n,i){if(e.length===0)return-1;i=Sy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Sy(a.optionsOrUseCapture)===i)return s}return-1}$n.prototype.dispatchEvent=function(e){var t=tr(this._fragmentFiber);if(t===null)return!0;t=Je(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,fo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,fo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};$n.prototype.focus=function(e){zn(this._fragmentFiber.child,!0,xM,e,void 0,void 0)};function xM(e,t){return e.tag===6?!1:(e=Je(e),JA(e,t))}$n.prototype.focusLast=function(e){var t=[];zn(this._fragmentFiber.child,!0,Hg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!xM(t[n],e);n--);};function Hg(e,t){return t.push(e),!1}$n.prototype.blur=function(){var e=tr(this._fragmentFiber);e!==null&&(e=Je(e),e=Wl(e).activeElement,e!==null&&zn(this._fragmentFiber.child,!1,BA,e,void 0,void 0))};function BA(e,t){return e.tag===6?!1:(e=Je(e),e===t||e.contains(t)?(t.blur(),!0):!1)}$n.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),zn(this._fragmentFiber.child,!1,FA,e,void 0,void 0)};function FA(e,t){return e.tag===6||(e=Je(e),t.observe(e)),!1}$n.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),zn(this._fragmentFiber.child,!1,HA,e,void 0,void 0);for(var n=t=0;n<Ei.length;n++){var i=Ei[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ei[t++]=i}Ei.length=t}};function HA(e,t){return e.tag===6||(e=Je(e),t.unobserve(e)),!1}var Ei=[],Ip=!1;function VA(e,t,n){Ei.push({fragmentInstance:e,observer:t,instance:n}),Ip||(Ip=!0,KA(function(){Ip=!1;var i=Ei;Ei=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}$n.prototype.getClientRects=function(){var e=[];return zn(this._fragmentFiber.child,!1,GA,e,void 0,void 0),e};function GA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Je(e),t.push.apply(t,e.getClientRects());return!1}$n.prototype.getRootNode=function(e){var t=tr(this._fragmentFiber);return t===null?this:Je(t).getRootNode(e)};$n.prototype.compareDocumentPosition=function(e){var t=tr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];zn(this._fragmentFiber.child,!1,Hg,n,void 0,void 0);var i=Je(t);if(n.length===0){if(n=i,t_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Gy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Je(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Je(n[0]),s=Je(n[n.length-1]);var a=t_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||kA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function kA(e,t,n,i,s){var a=Fa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=tr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Bp(n,a,e_),t===null?t=!1:(zn(t,!0,yE,a,n),a=Pr,Pr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Bp(i,a,e_),t===null?t=!1:(zn(t,!0,xE,a,i),a=Pr,zp=Pr=null,t=a!==null)),t):!1}function My(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}$n.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(J(566));var t=[];zn(this._fragmentFiber.child,!1,Hg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Gy(this._fragmentFiber);if(i=n?i[1]||i[0]||tr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Je(i),My(e,n);return}if(i=Je(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Je(s),My(s,n)):Je(s).scrollIntoView(e),i+=n?-1:1}};function XA(e,t){return e=Je(e),SM(e,t),!1}function SM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function MM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,fo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ei.length;o++){var l=Ei[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ei[r++]=l)}Ei.length=r,a.observe(e)}),SM(e,t))}function WA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,fo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?VA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Gm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Gm(n),xh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function qA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[tc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function YA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function bM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pi(e.nextSibling),e===null))return null;return e}function km(e){return e.data==="$?"||e.data==="$~"}function Vg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ZA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function pi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xm=null;function by(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ey(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function JA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function KA(e){_y(function(){_y(function(t){return e(t)})})}function EM(e,t,n){switch(t=Wl(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function TM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&le(e,t,i,null,TA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Gi&&(e.onclick=null),xh(e)}function Pp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xh(e)}var mi=new Map,Ty=new Set;function ql(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xs=ie.d;ie.d={f:QA,r:jA,D:$A,C:tw,L:ew,m:nw,X:sw,S:iw,M:aw};function QA(){var e=xs.f(),t=Oh();return e||t}function jA(e){var t=yo(e);t!==null&&t.tag===5&&t.type==="form"?cS(t):xs.r(e)}var bo=typeof document>"u"?null:document;function AM(e,t,n){var i=bo;if(i&&typeof t=="string"&&t){var s=hi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Ty.has(s)||(Ty.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),fn(t,"link",e),nn(t),i.head.appendChild(t)))}}function $A(e){xs.D(e),AM("dns-prefetch",e,null)}function tw(e,t){xs.C(e,t),AM("preconnect",e,t)}function ew(e,t,n){xs.L(e,t,n);var i=bo;if(i&&e&&t){var s='link[rel="preload"][as="'+hi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+hi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+hi(n.imageSizes)+'"]')):s+='[href="'+hi(e)+'"]';var a=s;switch(t){case"style":a=po(e);break;case"script":a=Eo(e)}if(!(mi.has(a)||(e=xe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),mi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(rc(a))||t==="script"&&i.querySelector(oc(a))))){var r=i.createElement("link");fn(r,"link",e),t==="style"&&(r[Zu]=!0,r.onload=r.onerror=function(){ex(r)}),nn(r),i.head.appendChild(r)}}}function nw(e,t){xs.m(e,t);var n=bo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+hi(i)+'"][href="'+hi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Eo(e)}if(!mi.has(a)&&(e=xe({rel:"modulepreload",href:e},t),mi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(oc(a)))return}i=n.createElement("link"),fn(i,"link",e),nn(i),n.head.appendChild(i)}}}function iw(e,t,n){xs.S(e,t,n);var i=bo;if(i&&e){var s=Zr(i).hoistableStyles,a=po(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(rc(a)))o.loading=5;else{e=xe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=mi.get(a))&&Gg(e,n);var l=r=i.createElement("link");nn(l),fn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Fu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function sw(e,t){xs.X(e,t);var n=bo;if(n&&e){var i=Zr(n).hoistableScripts,s=Eo(e),a=i.get(s);a||(a=n.querySelector(oc(s)),a||(e=xe({src:e,async:!0},t),(t=mi.get(s))&&kg(e,t),a=n.createElement("script"),nn(a),fn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function aw(e,t){xs.M(e,t);var n=bo;if(n&&e){var i=Zr(n).hoistableScripts,s=Eo(e),a=i.get(s);a||(a=n.querySelector(oc(s)),a||(e=xe({src:e,async:!0,type:"module"},t),(t=mi.get(s))&&kg(e,t),a=n.createElement("script"),nn(a),fn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ay(e,t,n,i){var s=(s=ta.current)?ql(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=po(n.href),t=Zr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=po(n.href);var a=Zr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(rc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=mi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mi.set(e,a)),rw(s,e,a,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Eo(n),t=Zr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function po(e){return'href="'+hi(e)+'"'}function rc(e){return'link[rel="stylesheet"]['+e+"]"}function wM(e){return xe({},e,{"data-precedence":e.precedence,precedence:null})}function rw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Zu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Zu]=!0,t.onload=t.onerror=ex.bind(null,t),fn(t,"link",n),nn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Eo(e){return'[src="'+hi(e)+'"]'}function oc(e){return"script[async]"+e}function wy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+hi(n.href)+'"]');if(i)return t.instance=i,nn(i),i;var s=xe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),nn(i),fn(i,"style",s),Fu(i,n.precedence,e),t.instance=i;case"stylesheet":s=po(n.href);var a=e.querySelector(rc(s));if(a)return t.state.loading|=4,t.instance=a,nn(a),a;i=wM(n),(s=mi.get(s))&&Gg(i,s),a=(e.ownerDocument||e).createElement("link"),nn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),fn(a,"link",i),t.state.loading|=4,Fu(a,n.precedence,e),t.instance=a;case"script":return a=Eo(n.src),(s=e.querySelector(oc(a)))?(t.instance=s,nn(s),s):(i=n,(s=mi.get(a))&&(i=xe({},n),kg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),nn(s),fn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Fu(i,n.precedence,e));return t.instance}function Fu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hu=null;function Cy(e,t,n){if(Hu===null){var i=new Map,s=Hu=new Map;s.set(n,i)}else s=Hu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[tc]||a[ln]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Wm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ow(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ry(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function CM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function RM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Dy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=RM(t),e.suspenseyImages.push(t)),e=uw.bind(e),t.decode().then(e,e))}function lw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=po(i.href),a=t.querySelector(rc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,nn(a);return}a=t.ownerDocument||t,i=wM(i),(s=mi.get(s))&&Gg(i,s),a=a.createElement("link"),nn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),fn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Yl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Vu=0;function cw(e,t){return e.stylesheets&&e.count===0&&Gu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Vu===0&&(Vu=62500*wA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Vu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function DM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Gu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Yl(){this.count--,DM(this)}function uw(){this.imgCount--,DM(this)}var vh=null;function Gu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vh=new Map,t.forEach(hw,e),vh=null,Yl.call(e))}function hw(e,t){if(!(t.state.loading&4)){var n=vh.get(e);if(n)var i=n.get(null);else{n=new Map,vh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Yl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var mo={$$typeof:Vi,Provider:null,Consumer:null,_currentValue:Va,_currentValue2:Va,_threadCount:0};function fw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=up(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=up(0),this.hiddenUpdates=up(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function UM(e,t,n,i,s,a,r,o,l,c,h,d){return e=new fw(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=In(3,null,null,t),e.current=a,a.stateNode=e,t=cg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},fg(a),e}function NM(e){return e?(e=Xr,e):Xr}function LM(e,t,n,i,s,a){s=NM(s),i.context===null?i.context=s:i.pendingContext=s,i=na(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ia(e,i,t),n!==null&&(Pn(n,e,t),Tl(n,e,t))}function Uy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xg(e,t){Uy(e,t),(e=e.alternate)&&Uy(e,t)}function OM(e){if(e.tag===13||e.tag===31){var t=ir(e,67108864);t!==null&&Pn(t,e,67108864),Xg(e,67108864)}}function Ny(e){if(e.tag===13||e.tag===31){var t=Qn();t=Qm(t);var n=ir(e,t);n!==null&&Pn(n,e,t),Xg(e,t)}}var go=!0;function dw(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ie.p;try{ie.p=2,Wg(e,t,n,i)}finally{ie.p=a,Nt.T=s}}function pw(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ie.p;try{ie.p=8,Wg(e,t,n,i)}finally{ie.p=a,Nt.T=s}}function Wg(e,t,n,i){if(go){var s=qm(i);if(s===null)Lp(e,t,i,_h,n),Ly(e,i);else if(gw(s,e,t,n,i))i.stopPropagation();else if(Ly(e,i),t&4&&-1<mw.indexOf(e)){for(;s!==null;){var a=yo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Pa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Kn(r);o.entanglements[1]|=l,r&=~l}Ji(a),(ne&6)===0&&(fh=Zn()+500,ac(0,!1))}}break;case 31:case 13:o=ir(a,2),o!==null&&Pn(o,a,2),Oh(),Xg(a,2)}if(a=qm(i),a===null&&Lp(e,t,i,_h,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Lp(e,t,i,null,n)}}function qm(e){return e=tg(e),qg(e)}var _h=null;function qg(e){if(_h=null,e=Fa(e),e!==null){var t=Kl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Fy(t),e!==null)return e;e=null}else if(n===31){if(e=Hy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _h=e,null}function IM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(RE()){case qy:return 2;case Yy:return 8;case Yu:case DE:return 32;case Zy:return 268435456;default:return 32}default:return 32}}var Ym=!1,oa=null,la=null,ca=null,Zl=new Map,Jl=new Map,Ys=[],mw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ly(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(t.pointerId)}}function pl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=yo(t),t!==null&&OM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function gw(e,t,n,i,s){switch(t){case"focusin":return oa=pl(oa,e,t,n,i,s),!0;case"dragenter":return la=pl(la,e,t,n,i,s),!0;case"mouseover":return ca=pl(ca,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Zl.set(a,pl(Zl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Jl.set(a,pl(Jl.get(a)||null,e,t,n,i,s)),!0}return!1}function PM(e){var t=Fa(e.target);if(t!==null){var n=Kl(t);if(n!==null){if(t=n.tag,t===13){if(t=Fy(n),t!==null){e.blockedOn=t,a_(e.priority,function(){Ny(n)});return}}else if(t===31){if(t=Hy(n),t!==null){e.blockedOn=t,a_(e.priority,function(){Ny(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ku(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Kp=i,n.target.dispatchEvent(i),Kp=null}else return t=yo(n),t!==null&&OM(t),e.blockedOn=n,!1;t.shift()}return!0}function Oy(e,t,n){ku(e)&&n.delete(t)}function vw(){Ym=!1,oa!==null&&ku(oa)&&(oa=null),la!==null&&ku(la)&&(la=null),ca!==null&&ku(ca)&&(ca=null),Zl.forEach(Oy),Jl.forEach(Oy)}function bu(e,t){e.blockedOn===t&&(e.blockedOn=null,Ym||(Ym=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,vw)))}var Eu=null;function Iy(e){Eu!==e&&(Eu=e,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,function(){Eu===e&&(Eu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(qg(i||n)===null)continue;break}var a=yo(n);a!==null&&(e.splice(t,3),t-=3,fm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function vo(e){function t(l){return bu(l,e)}oa!==null&&bu(oa,e),la!==null&&bu(la,e),ca!==null&&bu(ca,e),Zl.forEach(t),Jl.forEach(t);for(var n=0;n<Ys.length;n++){var i=Ys[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ys.length&&(n=Ys[0],n.blockedOn===null);)PM(n),n.blockedOn===null&&Ys.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Bn]||null;if(typeof a=="function")r||Iy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Bn]||null)o=r.formAction;else if(qg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Iy(n)}}}function zM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Yg(e){this._internalRoot=e}zh.prototype.render=Yg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=Qn();LM(n,i,e,t,null,null)};zh.prototype.unmount=Yg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;LM(e.current,2,null,e,null,null),Oh(),t[_o]=null}};function zh(e){this._internalRoot=e}zh.prototype.unstable_scheduleHydration=function(e){if(e){var t=tx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ys.length&&t!==0&&t<Ys[n].priority;n++);Ys.splice(n,0,e),n===0&&PM(e)}};var Py=zy.version;if(Py!=="19.3.1")throw Error(J(527,Py,"19.3.1"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=_E(t),e=e!==null?Vy(e):null,e=e===null?null:e.stateNode,e};var _w={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ml=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ml.isDisabled&&ml.supportsFiber))try{Ql=ml.inject(_w),Jn=ml}catch{}var ml;Bh.createRoot=function(e,t){if(!By(e))throw Error(J(299));var n=!1,i="",s=vS,a=_S,r=yS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=UM(e,1,!1,null,null,n,i,null,s,a,r,zM),e[_o]=t.current,Bg(e),new Yg(t)};Bh.hydrateRoot=function(e,t,n){if(!By(e))throw Error(J(299));var i=!1,s="",a=vS,r=_S,o=yS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=UM(e,1,!0,t,n??null,i,s,l,a,r,o,zM),t.context=NM(null),n=t.current,i=Qn(),i=Qm(i),s=na(i),s.callback=null,ia(n,s,i),n=i,t.current.lanes=n,$l(t,n),Ji(t),e[_o]=t.current,Bg(e),new zh(t)};Bh.version="19.3.1"});var VM=Fs((aU,HM)=>{"use strict";function FM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FM)}catch(e){console.error(e)}}FM(),HM.exports=BM()});var ii=xv($c()),Pb=xv(VM());var g1=0,D0=1,v1=2;var U0=1,Gf=2,ns=3,ws=0,pn=1,yi=2,Ps=0,ur=1,Ra=2,N0=3,L0=4,_1=5,Ta=100,y1=101,x1=102,S1=103,M1=104,b1=200,E1=201,T1=202,A1=203,cf=204,uf=205,w1=206,C1=207,R1=208,D1=209,U1=210,N1=211,L1=212,O1=213,I1=214,kf=0,Xf=1,Wf=2,hr=3,qf=4,Yf=5,Zf=6,Jf=7,Kf=0,P1=1,z1=2,zs=0,B1=1,F1=2,H1=3,Qf=4,V1=5,G1=6,k1=7;var O0=300,vr=301,_r=302,jf=303,$f=304,kc=306,hf=1e3,Ea=1001,ff=1002,Fn=1003,X1=1004;var Xc=1005;var Ui=1006,td=1007;var Da=1008;var Ni=1009,I0=1010,P0=1011,Zo=1012,ed=1013,Ua=1014,Li=1015,Jo=1016,nd=1017,id=1018,Ko=1020,z0=35902,B0=35899,F0=1021,H0=1022,xi=1023,Ho=1026,Qo=1027,sd=1028,ad=1029,V0=1030,rd=1031;var od=1033,Wc=33776,qc=33777,Yc=33778,Zc=33779,ld=35840,cd=35841,ud=35842,hd=35843,fd=36196,dd=37492,pd=37496,md=37808,gd=37809,vd=37810,_d=37811,yd=37812,xd=37813,Sd=37814,Md=37815,bd=37816,Ed=37817,Td=37818,Ad=37819,wd=37820,Cd=37821,Rd=36492,Dd=36494,Ud=36495,Nd=36283,Ld=36284,Od=36285,Id=36286;var yc=2300,df=2301,lf=2302,x0=2400,S0=2401,M0=2402;var W1=3200,q1=3201;var Pd=0,Y1=1,Bs="",Cn="srgb",fr="srgb-linear",xc="linear",he="srgb";var cr=7680;var b0=519,Z1=512,J1=513,K1=514,G0=515,Q1=516,j1=517,$1=518,tb=519,E0=35044;var k0="300 es",Di=2e3,Sc=2001;var Cs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],GM=1234567,mc=Math.PI/180,dr=180/Math.PI;function jo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function qt(e,t,n){return Math.max(t,Math.min(n,e))}function X0(e,t){return(e%t+t)%t}function yw(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function xw(e,t,n){return e!==t?(n-e)/(t-e):0}function gc(e,t,n){return(1-n)*e+n*t}function Sw(e,t,n,i){return gc(e,t,1-Math.exp(-n*i))}function Mw(e,t=1){return t-Math.abs(X0(e,t*2)-t)}function bw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ew(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Tw(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Aw(e,t){return e+Math.random()*(t-e)}function ww(e){return e*(.5-Math.random())}function Cw(e){e!==void 0&&(GM=e);let t=GM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rw(e){return e*mc}function Dw(e){return e*dr}function Uw(e){return(e&e-1)===0&&e!==0}function Nw(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Lw(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Ow(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function wn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var yr={DEG2RAD:mc,RAD2DEG:dr,generateUUID:jo,clamp:qt,euclideanModulo:X0,mapLinear:yw,inverseLerp:xw,lerp:gc,damp:Sw,pingpong:Mw,smoothstep:bw,smootherstep:Ew,randInt:Tw,randFloat:Aw,randFloatSpread:ww,seededRandom:Cw,degToRad:Rw,radToDeg:Dw,isPowerOfTwo:Uw,ceilPowerOfTwo:Nw,floorPowerOfTwo:Lw,setQuaternionFromProperEuler:Ow,normalize:wn,denormalize:Bo},Et=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*x,y=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let T=Math.sqrt(_),A=Math.atan2(T,u*y);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}let v=o*y;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,d=d*m+x*v,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+h*d+l*p-c*f,t[n+1]=l*g+h*f+c*d-o*p,t[n+2]=c*g+h*p+o*f-l*d,t[n+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(kM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(kM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zg.copy(this).projectOnVector(t),this.sub(Zg)}reflect(t){return this.sub(Zg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zg=new U,kM=new Rs,Gt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],y=s[1],_=s[4],v=s[7],T=s[2],A=s[5],w=s[8];return a[0]=r*x+o*y+l*T,a[3]=r*m+o*_+l*A,a[6]=r*u+o*v+l*w,a[1]=c*x+h*y+d*T,a[4]=c*m+h*_+d*A,a[7]=c*u+h*v+d*w,a[2]=f*x+p*y+g*T,a[5]=f*m+p*_+g*A,a[8]=f*u+p*v+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,g=n*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(h*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Jg.makeScale(t,n)),this}rotate(t){return this.premultiply(Jg.makeRotation(-t)),this}translate(t,n){return this.premultiply(Jg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jg=new Gt;function W0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Mc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function eb(){let e=Mc("canvas");return e.style.display="block",e}var XM={};function Vo(e){e in XM||(XM[e]=!0,console.warn(e))}function nb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var WM=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qM=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iw(){let e={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===he&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===he&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bs?xc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[fr]:{primaries:t,whitePoint:i,transfer:xc,toXYZ:WM,fromXYZ:qM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:he,toXYZ:WM,fromXYZ:qM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),e}var $t=Iw();function As(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Fo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var To,pf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{To===void 0&&(To=Mc("canvas")),To.width=t.width,To.height=t.height;let s=To.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=To}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Mc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=As(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pw=0,Go=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Kg(s[r].image)):a.push(Kg(s[r]))}else a=Kg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Kg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?pf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zw=0,Qg=new U,Hn=class e extends Cs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ea,s=Ea,a=Ui,r=Da,o=xi,l=Ni,c=e.DEFAULT_ANISOTROPY,h=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zw++}),this.uuid=jo(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qg).x}get height(){return this.source.getSize(Qg).y}get depth(){return this.source.getSize(Qg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hf:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case ff:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hf:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case ff:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=O0;Hn.DEFAULT_ANISOTROPY=1;var ue=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,v=(p+1)/2,T=(u+1)/2,A=(h+f)/4,w=(d+x)/4,R=(g+m)/4;return _>v&&_>T?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=A/i,a=w/i):v>T?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=A/s,a=R/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=R/a),this.set(i,s,a,n),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this.w=qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this.w=qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mf=class extends Cs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ue(0,0,t,n),this.scissorTest=!1,this.viewport=new ue(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Hn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Go(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qi=class extends mf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},bc=class extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gf=class extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=class{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,wi):wi.fromBufferAttribute(a,r),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fh.copy(i.boundingBox)),Fh.applyMatrix4(t.matrixWorld),this.union(Fh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lc),Hh.subVectors(this.max,lc),Ao.subVectors(t.a,lc),wo.subVectors(t.b,lc),Co.subVectors(t.c,lc),va.subVectors(wo,Ao),_a.subVectors(Co,wo),ar.subVectors(Ao,Co);let n=[0,-va.z,va.y,0,-_a.z,_a.y,0,-ar.z,ar.y,va.z,0,-va.x,_a.z,0,-_a.x,ar.z,0,-ar.x,-va.y,va.x,0,-_a.y,_a.x,0,-ar.y,ar.x,0];return!jg(n,Ao,wo,Co,Hh)||(n=[1,0,0,0,1,0,0,0,1],!jg(n,Ao,wo,Co,Hh))?!1:(Vh.crossVectors(va,_a),n=[Vh.x,Vh.y,Vh.z],jg(n,Ao,wo,Co,Hh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ss=[new U,new U,new U,new U,new U,new U,new U,new U],wi=new U,Fh=new ji,Ao=new U,wo=new U,Co=new U,va=new U,_a=new U,ar=new U,lc=new U,Hh=new U,Vh=new U,rr=new U;function jg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){rr.fromArray(e,a);let o=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=t.dot(rr),c=n.dot(rr),h=i.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bw=new ji,cc=new U,$g=new U,Ds=class{constructor(t=new U,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Bw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cc.subVectors(t,this.center);let n=cc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(cc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($g.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cc.copy(t.center).add($g)),this.expandByPoint(cc.copy(t.center).sub($g))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ms=new U,t0=new U,Gh=new U,ya=new U,e0=new U,kh=new U,n0=new U,ko=class{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ms)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ms.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ms.copy(this.origin).addScaledVector(this.direction,n),Ms.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){t0.copy(t).add(n).multiplyScalar(.5),Gh.copy(n).sub(t).normalize(),ya.copy(this.origin).sub(t0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Gh),o=ya.dot(this.direction),l=-ya.dot(Gh),c=ya.lengthSq(),h=Math.abs(1-r*r),d,f,p,g;if(h>0)if(d=r*l-o,f=r*o-l,g=a*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(t0).addScaledVector(Gh,f),p}intersectSphere(t,n){Ms.subVectors(t.center,this.origin);let i=Ms.dot(this.direction),s=Ms.dot(Ms)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ms)!==null}intersectTriangle(t,n,i,s,a){e0.subVectors(n,t),kh.subVectors(i,t),n0.crossVectors(e0,kh);let r=this.direction.dot(n0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ya.subVectors(this.origin,t);let l=o*this.direction.dot(kh.crossVectors(ya,kh));if(l<0)return null;let c=o*this.direction.dot(e0.cross(ya));if(c<0||l+c>r)return null;let h=-o*ya.dot(n0);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Ro.setFromMatrixColumn(t,0).length(),a=1/Ro.setFromMatrixColumn(t,1).length(),r=1/Ro.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,g=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,g=c*h,x=c*d;n[0]=f+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-g,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,g=c*h,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*h,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,g=o*h,x=o*d;n[0]=l*h,n[4]=g*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=g*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+g,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=r*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fw,t,Hw)}lookAt(t,n,i){let s=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),xa.crossVectors(i,ti),xa.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),xa.crossVectors(i,ti)),xa.normalize(),Xh.crossVectors(ti,xa),s[0]=xa.x,s[4]=Xh.x,s[8]=ti.x,s[1]=xa.y,s[5]=Xh.y,s[9]=ti.y,s[2]=xa.z,s[6]=Xh.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],y=i[3],_=i[7],v=i[11],T=i[15],A=s[0],w=s[4],R=s[8],E=s[12],M=s[1],L=s[5],N=s[9],F=s[13],H=s[2],W=s[6],G=s[10],Q=s[14],B=s[3],it=s[7],rt=s[11],pt=s[15];return a[0]=r*A+o*M+l*H+c*B,a[4]=r*w+o*L+l*W+c*it,a[8]=r*R+o*N+l*G+c*rt,a[12]=r*E+o*F+l*Q+c*pt,a[1]=h*A+d*M+f*H+p*B,a[5]=h*w+d*L+f*W+p*it,a[9]=h*R+d*N+f*G+p*rt,a[13]=h*E+d*F+f*Q+p*pt,a[2]=g*A+x*M+m*H+u*B,a[6]=g*w+x*L+m*W+u*it,a[10]=g*R+x*N+m*G+u*rt,a[14]=g*E+x*F+m*Q+u*pt,a[3]=y*A+_*M+v*H+T*B,a[7]=y*w+_*L+v*W+T*it,a[11]=y*R+_*N+v*G+T*rt,a[15]=y*E+_*F+v*Q+T*pt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],y=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,_=g*f*c-h*m*c-g*l*p+r*m*p+h*l*u-r*f*u,v=h*x*c-g*d*c+g*o*p-r*x*p-h*o*u+r*d*u,T=g*d*l-h*x*l-g*o*f+r*x*f+h*o*m-r*d*m,A=n*y+i*_+s*v+a*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=y*w,t[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*u-i*f*u)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*w,t[4]=_*w,t[5]=(h*m*a-g*f*a+g*s*p-n*m*p-h*s*u+n*f*u)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*w,t[8]=v*w,t[9]=(g*d*a-h*x*a-g*i*p+n*x*p+h*i*u-n*d*u)*w,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*u+n*o*u)*w,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=T*w,t[13]=(h*x*s-g*d*s+g*i*f-n*x*f-h*i*m+n*d*m)*w,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,g=a*d,x=r*h,m=r*d,u=o*d,y=l*c,_=l*h,v=l*d,T=i.x,A=i.y,w=i.z;return s[0]=(1-(x+u))*T,s[1]=(p+v)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(f+u))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+_)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Ro.set(s[0],s[1],s[2]).length(),r=Ro.set(s[4],s[5],s[6]).length(),o=Ro.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ci.copy(this);let c=1/a,h=1/r,d=1/o;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,n.setFromRotationMatrix(Ci),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Di,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Di)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Sc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Di,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Di)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Sc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ro=new U,Ci=new me,Fw=new U(0,0,0),Hw=new U(1,1,1),xa=new U,Xh=new U,ti=new U,YM=new me,ZM=new Rs,vi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return YM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(YM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ZM.setFromEuler(this),this.setFromQuaternion(ZM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vw=0,JM=new U,Do=new Rs,bs=new me,Wh=new U,uc=new U,Gw=new U,kw=new Rs,KM=new U(1,0,0),QM=new U(0,1,0),jM=new U(0,0,1),$M={type:"added"},Xw={type:"removed"},Uo={type:"childadded",child:null},i0={type:"childremoved",child:null},Qe=class e extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new vi,i=new Rs,s=new U(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Gt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Do.setFromAxisAngle(t,n),this.quaternion.multiply(Do),this}rotateOnWorldAxis(t,n){return Do.setFromAxisAngle(t,n),this.quaternion.premultiply(Do),this}rotateX(t){return this.rotateOnAxis(KM,t)}rotateY(t){return this.rotateOnAxis(QM,t)}rotateZ(t){return this.rotateOnAxis(jM,t)}translateOnAxis(t,n){return JM.copy(t).applyQuaternion(this.quaternion),this.position.add(JM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(KM,t)}translateY(t){return this.translateOnAxis(QM,t)}translateZ(t){return this.translateOnAxis(jM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Wh.copy(t):Wh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),uc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(uc,Wh,this.up):bs.lookAt(Wh,uc,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),Do.setFromRotationMatrix(bs),this.quaternion.premultiply(Do.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($M),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Xw),i0.child=t,this.dispatchEvent(i0),i0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($M),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uc,t,Gw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uc,kw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new U(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new U,Es=new U,s0=new U,Ts=new U,No=new U,Lo=new U,t1=new U,a0=new U,r0=new U,o0=new U,l0=new ue,c0=new ue,u0=new ue,ba=class e{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ri.subVectors(t,n),s.cross(Ri);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ri.subVectors(s,n),Es.subVectors(i,n),s0.subVectors(t,n);let r=Ri.dot(Ri),o=Ri.dot(Es),l=Ri.dot(s0),c=Es.dot(Es),h=Es.dot(s0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ts.x),l.addScaledVector(r,Ts.y),l.addScaledVector(o,Ts.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return l0.setScalar(0),c0.setScalar(0),u0.setScalar(0),l0.fromBufferAttribute(t,n),c0.fromBufferAttribute(t,i),u0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(l0,a.x),r.addScaledVector(c0,a.y),r.addScaledVector(u0,a.z),r}static isFrontFacing(t,n,i,s){return Ri.subVectors(i,n),Es.subVectors(t,n),Ri.cross(Es).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Ri.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;No.subVectors(s,i),Lo.subVectors(a,i),a0.subVectors(t,i);let l=No.dot(a0),c=Lo.dot(a0);if(l<=0&&c<=0)return n.copy(i);r0.subVectors(t,s);let h=No.dot(r0),d=Lo.dot(r0);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(No,r);o0.subVectors(t,a);let p=No.dot(o0),g=Lo.dot(o0);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Lo,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return t1.subVectors(a,s),o=(d-h)/(d-h+(p-g)),n.copy(s).addScaledVector(t1,o);let u=1/(m+x+f);return r=x*u,o=f*u,n.copy(i).addScaledVector(No,r).addScaledVector(Lo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ib={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sa={h:0,s:0,l:0},qh={h:0,s:0,l:0};function h0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Pt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=$t.workingColorSpace){return this.r=t,this.g=n,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=$t.workingColorSpace){if(t=X0(t,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=h0(r,a,t+1/3),this.g=h0(r,a,t),this.b=h0(r,a,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,n=Cn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Cn){let i=ib[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return $t.workingToColorSpace(yn.copy(this),t),Math.round(qt(yn.r*255,0,255))*65536+Math.round(qt(yn.g*255,0,255))*256+Math.round(qt(yn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=$t.workingColorSpace){$t.workingToColorSpace(yn.copy(this),n);let i=yn.r,s=yn.g,a=yn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=$t.workingColorSpace){return $t.workingToColorSpace(yn.copy(this),n),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Cn){$t.workingToColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b;return t!==Cn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Sa),this.setHSL(Sa.h+t,Sa.s+n,Sa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Sa),t.getHSL(qh);let i=gc(Sa.h,qh.h,n),s=gc(Sa.s,qh.s,n),a=gc(Sa.l,qh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Pt;Pt.NAMES=ib;var Ww=0,$i=class extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=ur,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=uf,this.blendEquation=Ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==ws&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cf&&(i.blendSrc=this.blendSrc),this.blendDst!==uf&&(i.blendDst=this.blendDst),this.blendEquation!==Ta&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Us=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new U,Yh=new Et,qw=0,qe=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=E0,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Yh.fromBufferAttribute(this,n),Yh.applyMatrix3(t),this.setXY(n,Yh.x,Yh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix3(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix4(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyNormalMatrix(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.transformDirection(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Bo(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array),a=wn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==E0&&(t.usage=this.usage),t}};var Ec=class extends qe{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Tc=class extends qe{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Se=class extends qe{constructor(t,n,i){super(new Float32Array(t),n,i)}},Yw=0,gi=new me,f0=new Qe,Oo=new U,ei=new ji,hc=new ji,an=new U,Ye=class e extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W0(t)?Tc:Ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Gt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,n,i){return gi.makeTranslation(t,n,i),this.applyMatrix4(gi),this}scale(t,n,i){return gi.makeScale(t,n,i),this.applyMatrix4(gi),this}lookAt(t){return f0.lookAt(t),f0.updateMatrix(),this.applyMatrix4(f0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Se(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];hc.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(ei.min,hc.min),ei.expandByPoint(an),an.addVectors(ei.max,hc.max),ei.expandByPoint(an)):(ei.expandByPoint(hc.min),ei.expandByPoint(hc.max))}ei.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)an.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(an));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(Oo.fromBufferAttribute(t,c),an.add(Oo)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;let c=new U,h=new U,d=new U,f=new Et,p=new Et,g=new Et,x=new U,m=new U;function u(R,E,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,R),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[R].add(x),o[E].add(x),o[M].add(x),l[R].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,E=y.length;R<E;++R){let M=y[R],L=M.start,N=M.count;for(let F=L,H=L+N;F<H;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new U,v=new U,T=new U,A=new U;function w(R){T.fromBufferAttribute(s,R),A.copy(T);let E=o[R];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(A,E);let L=v.dot(l[R])<0?-1:1;r.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,E=y.length;R<E;++R){let M=y[R],L=M.start,N=M.count;for(let F=L,H=L+N;F<H;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new qe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},e1=new me,or=new ko,Zh=new Ds,n1=new U,Jh=new U,Kh=new U,Qh=new U,d0=new U,jh=new U,i1=new U,$h=new U,ge=class extends Qe{constructor(t=new Ye,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){jh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(d0.fromBufferAttribute(d,t),r?jh.addScaledVector(d0,h):jh.addScaledVector(d0.sub(n),h))}n.add(jh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zh.copy(i.boundingSphere),Zh.applyMatrix4(a),or.copy(t.ray).recast(t.near),!(Zh.containsPoint(or.origin)===!1&&(or.intersectSphere(Zh,n1)===null||or.origin.distanceToSquared(n1)>(t.far-t.near)**2))&&(e1.copy(a).invert(),or.copy(t.ray).applyMatrix4(e1),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,or)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,T=_;v<T;v+=3){let A=o.getX(v),w=o.getX(v+1),R=o.getX(v+2);s=tf(this,u,t,i,c,h,d,A,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let y=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=tf(this,r,t,i,c,h,d,y,_,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,T=_;v<T;v+=3){let A=v,w=v+1,R=v+2;s=tf(this,u,t,i,c,h,d,A,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let y=m,_=m+1,v=m+2;s=tf(this,r,t,i,c,h,d,y,_,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Zw(e,t,n,i,s,a,r,o){let l;if(t.side===pn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ws,o),l===null)return null;$h.copy(o),$h.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo($h);return c<n.near||c>n.far?null:{distance:c,point:$h.clone(),object:e}}function tf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Jh),e.getVertexPosition(l,Kh),e.getVertexPosition(c,Qh);let h=Zw(e,t,n,i,Jh,Kh,Qh,i1);if(h){let d=new U;ba.getBarycoord(i1,Jh,Kh,Qh,d),s&&(h.uv=ba.getInterpolatedAttribute(s,o,l,c,d,new Et)),a&&(h.uv1=ba.getInterpolatedAttribute(a,o,l,c,d,new Et)),r&&(h.normal=ba.getInterpolatedAttribute(r,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new U,materialIndex:0};ba.getNormal(Jh,Kh,Qh,f.normal),h.face=f,h.barycoord=d}return h}var Dn=class e extends Ye{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function g(x,m,u,y,_,v,T,A,w,R,E){let M=v/w,L=T/R,N=v/2,F=T/2,H=A/2,W=w+1,G=R+1,Q=0,B=0,it=new U;for(let rt=0;rt<G;rt++){let pt=rt*L-F;for(let Ft=0;Ft<W;Ft++){let ae=Ft*M-N;it[x]=ae*y,it[m]=pt*_,it[u]=H,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[u]=A>0?1:-1,h.push(it.x,it.y,it.z),d.push(Ft/w),d.push(1-rt/R),Q+=1}}for(let rt=0;rt<R;rt++)for(let pt=0;pt<w;pt++){let Ft=f+pt+W*rt,ae=f+pt+W*(rt+1),Me=f+(pt+1)+W*(rt+1),Yt=f+(pt+1)+W*rt;l.push(Ft,ae,Yt),l.push(ae,Me,Yt),B+=6}o.addGroup(p,B,E),p+=B,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function xn(e){let t={};for(let n=0;n<e.length;n++){let i=xr(e[n]);for(let s in i)t[s]=i[s]}return t}function Jw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function q0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var sb={clone:xr,merge:xn},Kw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kw,this.fragmentShader=Qw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Jw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Ac=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ma=new U,s1=new Et,a1=new Et,We=class extends Ac{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ma.x,Ma.y).multiplyScalar(-t/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ma.x,Ma.y).multiplyScalar(-t/Ma.z)}getViewSize(t,n){return this.getViewBounds(t,s1,a1),n.subVectors(a1,s1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(mc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Io=-90,Po=1,vf=class extends Qe{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Io,Po,t,n);s.layers=this.layers,this.add(s);let a=new We(Io,Po,t,n);a.layers=this.layers,this.add(a);let r=new We(Io,Po,t,n);r.layers=this.layers,this.add(r);let o=new We(Io,Po,t,n);o.layers=this.layers,this.add(o);let l=new We(Io,Po,t,n);l.layers=this.layers,this.add(l);let c=new We(Io,Po,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},wc=class extends Hn{constructor(t=[],n=vr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_f=class extends Qi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dn(5,5,5),a=new rn({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ps});a.uniforms.tEquirect.value=n;let r=new ge(s,a),o=n.minFilter;return n.minFilter===Da&&(n.minFilter=Ui),new vf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Rn=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},jw={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Cc=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ns=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var yf=class extends Hn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Fn,h=Fn,d,f){super(null,r,o,l,c,h,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rc=class extends qe{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zo=new me,r1=new me,ef=[],o1=new ji,$w=new me,fc=new ge,dc=new Ds,Dc=class extends ge{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$w)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,zo),o1.copy(t.boundingBox).applyMatrix4(zo),this.boundingBox.union(o1)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,zo),dc.copy(t.boundingSphere).applyMatrix4(zo),this.boundingSphere.union(dc)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(fc.geometry=this.geometry,fc.material=this.material,fc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dc.copy(this.boundingSphere),dc.applyMatrix4(i),t.ray.intersectsSphere(dc)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,zo),r1.multiplyMatrices(i,zo),fc.matrixWorld=r1,fc.raycast(t,ef);for(let r=0,o=ef.length;r<o;r++){let l=ef[r];l.instanceId=a,l.object=this,n.push(l)}ef.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yf(new Float32Array(s*this.count),s,this.count,sd,Li));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},p0=new U,tC=new U,eC=new Gt,Ki=class{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=p0.subVectors(i,n).cross(tC.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(p0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||eC.getNormalMatrix(t),s=this.coplanarPoint(p0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},lr=new Ds,nC=new Et(.5,.5),nf=new U,qo=class{constructor(t=new Ki,n=new Ki,i=new Ki,s=new Ki,a=new Ki,r=new Ki){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Di,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],g=a[8],x=a[9],m=a[10],u=a[11],y=a[12],_=a[13],v=a[14],T=a[15];if(s[0].setComponents(c-r,p-h,u-g,T-y).normalize(),s[1].setComponents(c+r,p+h,u+g,T+y).normalize(),s[2].setComponents(c+o,p+d,u+x,T+_).normalize(),s[3].setComponents(c-o,p-d,u-x,T-_).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,u-m,T-v).normalize();else if(s[4].setComponents(c-l,p-f,u-m,T-v).normalize(),n===Di)s[5].setComponents(c+l,p+f,u+m,T+v).normalize();else if(n===Sc)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){lr.center.set(0,0,0);let n=nC.distanceTo(t.center);return lr.radius=.7071067811865476+n,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(nf.x=s.normal.x>0?t.max.x:t.min.x,nf.y=s.normal.y>0?t.max.y:t.min.y,nf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xf=class extends $i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},l1=new me,T0=new ko,sf=new Ds,af=new U,pr=class extends Qe{constructor(t=new Ye,n=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sf.copy(i.boundingSphere),sf.applyMatrix4(s),sf.radius+=a,t.ray.intersectsSphere(sf)===!1)return;l1.copy(s).invert(),T0.copy(t.ray).applyMatrix4(l1);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);af.fromBufferAttribute(d,m),c1(af,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=f,x=p;g<x;g++)af.fromBufferAttribute(d,g),c1(af,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function c1(e,t,n,i,s,a,r){let o=T0.distanceSqToPoint(e);if(o<n){let l=new U;T0.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Uc=class extends Hn{constructor(t,n,i=Ua,s,a,r,o=Fn,l=Fn,c,h=Ho,d=1){if(h!==Ho&&h!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Nc=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ts=class e extends Ye{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],d=[],f=[],p=[],g=0,x=[],m=i/2,u=0;y(),r===!1&&(t>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(p,2));function y(){let v=new U,T=new U,A=0,w=(n-t)/i;for(let R=0;R<=a;R++){let E=[],M=R/a,L=M*(n-t)+t;for(let N=0;N<=s;N++){let F=N/s,H=F*l+o,W=Math.sin(H),G=Math.cos(H);T.x=L*W,T.y=-M*i+m,T.z=L*G,d.push(T.x,T.y,T.z),v.set(W,w,G).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-M),E.push(g++)}x.push(E)}for(let R=0;R<s;R++)for(let E=0;E<a;E++){let M=x[E][R],L=x[E+1][R],N=x[E+1][R+1],F=x[E][R+1];(t>0||E!==0)&&(h.push(M,L,F),A+=3),(n>0||E!==a-1)&&(h.push(L,N,F),A+=3)}c.addGroup(u,A,0),u+=A}function _(v){let T=g,A=new Et,w=new U,R=0,E=v===!0?t:n,M=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let L=g;for(let N=0;N<=s;N++){let H=N/s*l+o,W=Math.cos(H),G=Math.sin(H);w.x=E*G,w.y=m*M,w.z=E*W,d.push(w.x,w.y,w.z),f.push(0,M,0),A.x=W*.5+.5,A.y=G*.5*M+.5,p.push(A.x,A.y),g++}for(let N=0;N<s;N++){let F=T+N,H=L+N;v===!0?h.push(H,H+1,F):h.push(H+1,H,F),R+=3}c.addGroup(u,R,v===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lc=class e extends ts{constructor(t=1,n=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,n,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let h=i[s],f=i[s+1]-h,p=(r-h)/f;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new Et:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new U,s=[],a=[],r=[],o=new U,l=new me;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new U)}a[0]=new U,r[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(qt(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos(qt(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Oc=class extends _i{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new Et){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sf=class extends Oc{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Y0(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,d){let f=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+d)+(l-o)/d;f*=h,p*=h,s(r,o,f,p)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var rf=new U,m0=new Y0,g0=new Y0,v0=new Y0,Ls=class extends _i{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new U){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(rf.subVectors(s[0],s[1]).add(s[0]),c=rf);let d=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(rf.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=rf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),m0.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,x,m),g0.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,x,m),v0.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(m0.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),g0.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),v0.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(m0.calc(l),g0.calc(l),v0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function u1(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function iC(e,t){let n=1-e;return n*n*t}function sC(e,t){return 2*(1-e)*e*t}function aC(e,t){return e*e*t}function vc(e,t,n,i){return iC(e,t)+sC(e,n)+aC(e,i)}function rC(e,t){let n=1-e;return n*n*n*t}function oC(e,t){let n=1-e;return 3*n*n*e*t}function lC(e,t){return 3*(1-e)*e*e*t}function cC(e,t){return e*e*e*t}function _c(e,t,n,i,s){return rC(e,t)+oC(e,n)+lC(e,i)+cC(e,s)}var Mf=class extends _i{constructor(t=new Et,n=new Et,i=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new Et){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(_c(t,s.x,a.x,r.x,o.x),_c(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bf=class extends _i{constructor(t=new U,n=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new U){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(_c(t,s.x,a.x,r.x,o.x),_c(t,s.y,a.y,r.y,o.y),_c(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ef=class extends _i{constructor(t=new Et,n=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Et){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Et){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tf=class extends _i{constructor(t=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new U){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Af=class extends _i{constructor(t=new Et,n=new Et,i=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new Et){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(vc(t,s.x,a.x,r.x),vc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends _i{constructor(t=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new U){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(vc(t,s.x,a.x,r.x),vc(t,s.y,a.y,r.y),vc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wf=class extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Et){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(u1(o,l.x,c.x,h.x,d.x),u1(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new Et().fromArray(s))}return this}},uC=Object.freeze({__proto__:null,ArcCurve:Sf,CatmullRomCurve3:Ls,CubicBezierCurve:Mf,CubicBezierCurve3:bf,EllipseCurve:Oc,LineCurve:Ef,LineCurve3:Tf,QuadraticBezierCurve:Af,QuadraticBezierCurve3:Ic,SplineCurve:wf});var Os=class e extends Ye{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let y=u*f-r;for(let _=0;_<c;_++){let v=_*d-a;g.push(v,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){let _=y+c*u,v=y+c*(u+1),T=y+1+c*(u+1),A=y+1+c*u;p.push(_,v,A),p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var mr=class e extends Ye{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new U,f=new U,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let y=[],_=u/i,v=0;u===0&&r===0?v=.5/n:u===i&&l===Math.PI&&(v=-.5/n);for(let T=0;T<=n;T++){let A=T/n;d.x=-t*Math.cos(s+A*a)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(s+A*a)*Math.sin(r+_*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+v,1-_),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<n;y++){let _=h[u][y+1],v=h[u][y],T=h[u+1][y],A=h[u+1][y+1];(u!==0||r>0)&&p.push(_,v,A),(u!==i-1||l<Math.PI)&&p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var es=class e extends Ye{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],h=new U,d=new U,f=new U;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*a,m=p/i*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(x),d.y=(t+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,y=(s+1)*p+g;r.push(x,m,y),r.push(m,u,y)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Pc=class e extends Ye{constructor(t=1,n=.4,i=64,s=8,a=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:n,tubularSegments:i,radialSegments:s,p:a,q:r},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],h=[],d=new U,f=new U,p=new U,g=new U,x=new U,m=new U,u=new U;for(let _=0;_<=i;++_){let v=_/i*a*Math.PI*2;y(v,a,r,t,p),y(v+.01,a,r,t,g),m.subVectors(g,p),u.addVectors(g,p),x.crossVectors(m,u),u.crossVectors(x,m),x.normalize(),u.normalize();for(let T=0;T<=s;++T){let A=T/s*Math.PI*2,w=-n*Math.cos(A),R=n*Math.sin(A);d.x=p.x+(w*u.x+R*x.x),d.y=p.y+(w*u.y+R*x.y),d.z=p.z+(w*u.z+R*x.z),l.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),c.push(f.x,f.y,f.z),h.push(_/i),h.push(T/s)}}for(let _=1;_<=i;_++)for(let v=1;v<=s;v++){let T=(s+1)*(_-1)+(v-1),A=(s+1)*_+(v-1),w=(s+1)*_+v,R=(s+1)*(_-1)+v;o.push(T,A,R),o.push(A,w,R)}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2));function y(_,v,T,A,w){let R=Math.cos(_),E=Math.sin(_),M=T/v*_,L=Math.cos(M);w.x=A*(2+L)*.5*R,w.y=A*(2+L)*E*.5,w.z=A*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},zc=class e extends Ye{constructor(t=new Ic(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),n=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:a};let r=t.computeFrenetFrames(n,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new U,l=new U,c=new Et,h=new U,d=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(p,2));function x(){for(let _=0;_<n;_++)m(_);m(a===!1?n:0),y(),u()}function m(_){h=t.getPointAt(_/n,h);let v=r.normals[_],T=r.binormals[_];for(let A=0;A<=s;A++){let w=A/s*Math.PI*2,R=Math.sin(w),E=-Math.cos(w);l.x=E*v.x+R*T.x,l.y=E*v.y+R*T.y,l.z=E*v.z+R*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function u(){for(let _=1;_<=n;_++)for(let v=1;v<=s;v++){let T=(s+1)*(_-1)+(v-1),A=(s+1)*_+(v-1),w=(s+1)*_+v,R=(s+1)*(_-1)+v;g.push(T,A,R),g.push(A,w,R)}}function y(){for(let _=0;_<=n;_++)for(let v=0;v<=s;v++)c.x=_/n,c.y=v/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new uC[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ie=class extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Is=class extends Ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Bc=class extends $i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cf=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rf=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function of(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function hC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var gr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Df=class extends gr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:x0,endingEnd:x0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case S0:a=t,o=2*n-i;break;case M0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case S0:r=t,l=2*i-n;break;case M0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let T=0;T!==o;++T)a[T]=u*r[h+T]+y*r[c+T]+_*r[l+T]+v*r[d+T];return a}},Uf=class extends gr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},Nf=class extends gr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ni=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=of(n,this.TimeBufferType),this.values=of(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:of(t.times,Array),values:of(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Nf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Df(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case yc:n=this.InterpolantFactoryMethodDiscrete;break;case df:n=this.InterpolantFactoryMethodLinear;break;case lf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yc;case this.InterpolantFactoryMethodLinear:return df;case this.InterpolantFactoryMethodSmooth:return lf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&hC(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[f+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=df;var Aa=class extends ni{constructor(t,n,i){super(t,n,i)}};Aa.prototype.ValueTypeName="bool";Aa.prototype.ValueBufferType=Array;Aa.prototype.DefaultInterpolation=yc;Aa.prototype.InterpolantFactoryMethodLinear=void 0;Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Lf=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}};Lf.prototype.ValueTypeName="color";var Of=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}};Of.prototype.ValueTypeName="number";var If=class extends gr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Rs.slerpFlat(a,0,r,c-o,r,c,l);return a}},Fc=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new If(this.times,this.values,this.getValueSize(),t)}};Fc.prototype.ValueTypeName="quaternion";Fc.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends ni{constructor(t,n,i){super(t,n,i)}};wa.prototype.ValueTypeName="string";wa.prototype.ValueBufferType=Array;wa.prototype.DefaultInterpolation=yc;wa.prototype.InterpolantFactoryMethodLinear=void 0;wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Pf=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}};Pf.prototype.ValueTypeName="vector";var zf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ab=new zf,Bf=class{constructor(t){this.manager=t!==void 0?t:ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Bf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yo=class extends Qe{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Hc=class extends Yo{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},_0=new me,h1=new U,f1=new U,Ff=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;h1.setFromMatrixPosition(t.matrixWorld),n.position.copy(h1),f1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(f1),n.updateMatrixWorld(),_0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},A0=class extends Ff{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let n=this.camera,i=dr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||n.far;(i!==n.fov||s!==n.aspect||a!==n.far)&&(n.fov=i,n.aspect=s,n.far=a,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Vc=class extends Yo{constructor(t,n,i=0,s=Math.PI/3,a=0,r=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new A0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},d1=new me,pc=new U,y0=new U,w0=class extends Ff{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),pc.setFromMatrixPosition(t.matrixWorld),i.position.copy(pc),y0.copy(i.position),y0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(y0),i.updateMatrixWorld(),s.makeTranslation(-pc.x,-pc.y,-pc.z),d1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d1,i.coordinateSystem,i.reversedDepth)}},Ca=class extends Yo{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Hf=class extends Ac{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Vf=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Z0="\\[\\]\\.:\\/",fC=new RegExp("["+Z0+"]","g"),J0="[^"+Z0+"]",dC="[^"+Z0.replace("\\.","")+"]",pC=/((?:WC+[\/:])*)/.source.replace("WC",J0),mC=/(WCOD+)?/.source.replace("WCOD",dC),gC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",J0),vC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",J0),_C=new RegExp("^"+pC+mC+gC+vC+"$"),yC=["material","materials","bones","map"],C0=class{constructor(t,n,i){let s=i||Ce.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ce=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fC,"")}static parseTrackName(t){let n=_C.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);yC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=C0;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rU=new Float32Array(1);var p1=new me,Gc=class{constructor(t,n,i=0,s=1/0){this.ray=new ko(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return p1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p1),this}intersectObject(t,n=!0,i=[]){return R0(t,this,i,n),i.sort(m1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)R0(t[s],this,i,n);return i.sort(m1),i}};function m1(e,t){return e.distance-t.distance}function R0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)R0(a[r],t,n,!0)}}function K0(e,t,n,i){let s=xC(i);switch(n){case F0:return e*t;case sd:return e*t/s.components*s.byteLength;case ad:return e*t/s.components*s.byteLength;case V0:return e*t*2/s.components*s.byteLength;case rd:return e*t*2/s.components*s.byteLength;case H0:return e*t*3/s.components*s.byteLength;case xi:return e*t*4/s.components*s.byteLength;case od:return e*t*4/s.components*s.byteLength;case Wc:case qc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Yc:case Zc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cd:case hd:return Math.max(e,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(e,8)*Math.max(t,8)/2;case fd:case dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _d:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case yd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Td:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Rd:case Dd:case Ud:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Nd:case Ld:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Od:case Id:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xC(e){switch(e){case Ni:case I0:return{byteLength:1,components:1};case Zo:case P0:case Jo:return{byteLength:2,components:1};case nd:case id:return{byteLength:2,components:4};case Ua:case ed:case Li:return{byteLength:4,components:1};case z0:case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Rb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function MC(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var bC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$C="gl_FragColor = linearToOutputTexel( gl_FragColor );",tR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_R=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ER=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:bC,alphahash_pars_fragment:EC,alphamap_fragment:TC,alphamap_pars_fragment:AC,alphatest_fragment:wC,alphatest_pars_fragment:CC,aomap_fragment:RC,aomap_pars_fragment:DC,batching_pars_vertex:UC,batching_vertex:NC,begin_vertex:LC,beginnormal_vertex:OC,bsdfs:IC,iridescence_fragment:PC,bumpmap_pars_fragment:zC,clipping_planes_fragment:BC,clipping_planes_pars_fragment:FC,clipping_planes_pars_vertex:HC,clipping_planes_vertex:VC,color_fragment:GC,color_pars_fragment:kC,color_pars_vertex:XC,color_vertex:WC,common:qC,cube_uv_reflection_fragment:YC,defaultnormal_vertex:ZC,displacementmap_pars_vertex:JC,displacementmap_vertex:KC,emissivemap_fragment:QC,emissivemap_pars_fragment:jC,colorspace_fragment:$C,colorspace_pars_fragment:tR,envmap_fragment:eR,envmap_common_pars_fragment:nR,envmap_pars_fragment:iR,envmap_pars_vertex:sR,envmap_physical_pars_fragment:mR,envmap_vertex:aR,fog_vertex:rR,fog_pars_vertex:oR,fog_fragment:lR,fog_pars_fragment:cR,gradientmap_pars_fragment:uR,lightmap_pars_fragment:hR,lights_lambert_fragment:fR,lights_lambert_pars_fragment:dR,lights_pars_begin:pR,lights_toon_fragment:gR,lights_toon_pars_fragment:vR,lights_phong_fragment:_R,lights_phong_pars_fragment:yR,lights_physical_fragment:xR,lights_physical_pars_fragment:SR,lights_fragment_begin:MR,lights_fragment_maps:bR,lights_fragment_end:ER,logdepthbuf_fragment:TR,logdepthbuf_pars_fragment:AR,logdepthbuf_pars_vertex:wR,logdepthbuf_vertex:CR,map_fragment:RR,map_pars_fragment:DR,map_particle_fragment:UR,map_particle_pars_fragment:NR,metalnessmap_fragment:LR,metalnessmap_pars_fragment:OR,morphinstance_vertex:IR,morphcolor_vertex:PR,morphnormal_vertex:zR,morphtarget_pars_vertex:BR,morphtarget_vertex:FR,normal_fragment_begin:HR,normal_fragment_maps:VR,normal_pars_fragment:GR,normal_pars_vertex:kR,normal_vertex:XR,normalmap_pars_fragment:WR,clearcoat_normal_fragment_begin:qR,clearcoat_normal_fragment_maps:YR,clearcoat_pars_fragment:ZR,iridescence_pars_fragment:JR,opaque_fragment:KR,packing:QR,premultiplied_alpha_fragment:jR,project_vertex:$R,dithering_fragment:t2,dithering_pars_fragment:e2,roughnessmap_fragment:n2,roughnessmap_pars_fragment:i2,shadowmap_pars_fragment:s2,shadowmap_pars_vertex:a2,shadowmap_vertex:r2,shadowmask_pars_fragment:o2,skinbase_vertex:l2,skinning_pars_vertex:c2,skinning_vertex:u2,skinnormal_vertex:h2,specularmap_fragment:f2,specularmap_pars_fragment:d2,tonemapping_fragment:p2,tonemapping_pars_fragment:m2,transmission_fragment:g2,transmission_pars_fragment:v2,uv_pars_fragment:_2,uv_pars_vertex:y2,uv_vertex:x2,worldpos_vertex:S2,background_vert:M2,background_frag:b2,backgroundCube_vert:E2,backgroundCube_frag:T2,cube_vert:A2,cube_frag:w2,depth_vert:C2,depth_frag:R2,distanceRGBA_vert:D2,distanceRGBA_frag:U2,equirect_vert:N2,equirect_frag:L2,linedashed_vert:O2,linedashed_frag:I2,meshbasic_vert:P2,meshbasic_frag:z2,meshlambert_vert:B2,meshlambert_frag:F2,meshmatcap_vert:H2,meshmatcap_frag:V2,meshnormal_vert:G2,meshnormal_frag:k2,meshphong_vert:X2,meshphong_frag:W2,meshphysical_vert:q2,meshphysical_frag:Y2,meshtoon_vert:Z2,meshtoon_frag:J2,points_vert:K2,points_frag:Q2,shadow_vert:j2,shadow_frag:$2,sprite_vert:t3,sprite_frag:e3},lt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},is={basic:{uniforms:xn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:xn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:xn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:xn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:xn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:xn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:xn([lt.points,lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:xn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:xn([lt.common,lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:xn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:xn([lt.sprite,lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:xn([lt.common,lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:xn([lt.lights,lt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};is.physical={uniforms:xn([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var zd={r:0,b:0,g:0},Sr=new vi,n3=new me;function i3(e,t,n,i,s,a,r){let o=new Pt(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function x(_){let v=!1,T=g(_);T===null?u(o,l):T&&T.isColor&&(u(T,1),v=!0);let A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){let T=g(v);T&&(T.isCubeTexture||T.mapping===kc)?(h===void 0&&(h=new ge(new Dn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:xr(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n3.makeRotationFromEuler(Sr)),h.material.toneMapped=$t.getTransfer(T.colorSpace)!==he,(d!==T||f!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ge(new Os(2,2),new rn({name:"BackgroundMaterial",uniforms:xr(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=$t.getTransfer(T.colorSpace)!==he,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(zd,q0(e)),i.buffers.color.setClear(zd.r,zd.g,zd.b,v,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:x,addToRenderList:m,dispose:y}}function s3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,L,N,F,H){let W=!1,G=d(F,N,L);a!==G&&(a=G,c(a.object)),W=p(M,F,N,H),W&&g(M,F,N,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,v(M,L,N,F),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,L,N){let F=N.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let W=H[L.id];W===void 0&&(W={},H[L.id]=W);let G=W[F];return G===void 0&&(G=f(l()),W[F]=G),G}function f(M){let L=[],N=[],F=[];for(let H=0;H<n;H++)L[H]=0,N[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,L,N,F){let H=a.attributes,W=L.attributes,G=0,Q=N.getAttributes();for(let B in Q)if(Q[B].location>=0){let rt=H[B],pt=W[B];if(pt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;G++}return a.attributesNum!==G||a.index!==F}function g(M,L,N,F){let H={},W=L.attributes,G=0,Q=N.getAttributes();for(let B in Q)if(Q[B].location>=0){let rt=W[B];rt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));let pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),H[B]=pt,G++}a.attributes=H,a.attributesNum=G,a.index=F}function x(){let M=a.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){u(M,0)}function u(M,L){let N=a.newAttributes,F=a.enabledAttributes,H=a.attributeDivisors;N[M]=1,F[M]===0&&(e.enableVertexAttribArray(M),F[M]=1),H[M]!==L&&(e.vertexAttribDivisor(M,L),H[M]=L)}function y(){let M=a.newAttributes,L=a.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==M[N]&&(e.disableVertexAttribArray(N),L[N]=0)}function _(M,L,N,F,H,W,G){G===!0?e.vertexAttribIPointer(M,L,N,H,W):e.vertexAttribPointer(M,L,N,F,H,W)}function v(M,L,N,F){x();let H=F.attributes,W=N.getAttributes(),G=L.defaultAttributeValues;for(let Q in W){let B=W[Q];if(B.location>=0){let it=H[Q];if(it===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let rt=it.normalized,pt=it.itemSize,Ft=t.get(it);if(Ft===void 0)continue;let ae=Ft.buffer,Me=Ft.type,Yt=Ft.bytesPerElement,K=Me===e.INT||Me===e.UNSIGNED_INT||it.gpuType===ed;if(it.isInterleavedBufferAttribute){let $=it.data,ht=$.stride,At=it.offset;if($.isInstancedInterleavedBuffer){for(let dt=0;dt<B.locationSize;dt++)u(B.location+dt,$.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let dt=0;dt<B.locationSize;dt++)m(B.location+dt);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let dt=0;dt<B.locationSize;dt++)_(B.location+dt,pt/B.locationSize,Me,rt,ht*Yt,(At+pt/B.locationSize*dt)*Yt,K)}else{if(it.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)u(B.location+$,it.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let $=0;$<B.locationSize;$++)m(B.location+$);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let $=0;$<B.locationSize;$++)_(B.location+$,pt/B.locationSize,Me,rt,pt*Yt,pt/B.locationSize*$*Yt,K)}}else if(G!==void 0){let rt=G[Q];if(rt!==void 0)switch(rt.length){case 2:e.vertexAttrib2fv(B.location,rt);break;case 3:e.vertexAttrib3fv(B.location,rt);break;case 4:e.vertexAttrib4fv(B.location,rt);break;default:e.vertexAttrib1fv(B.location,rt)}}}}y()}function T(){R();for(let M in i){let L=i[M];for(let N in L){let F=L[N];for(let H in F)h(F[H].object),delete F[H];delete L[N]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let L=i[M.id];for(let N in L){let F=L[N];for(let H in F)h(F[H].object),delete F[H];delete L[N]}delete i[M.id]}function w(M){for(let L in i){let N=i[L];if(N[M.id]===void 0)continue;let F=N[M.id];for(let H in F)h(F[H].object),delete F[H];delete N[M.id]}}function R(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function a3(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function r3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==xi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let R=w===Jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ni&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Li&&!R)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function o3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ki,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let y=a?0:i,_=y*4,v=u.clippingState||null;l.value=v,v=h(g,f,_,p);for(let T=0;T!==_;++T)v[T]=n[T];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==x;++_,v+=4)r.copy(d[_]).applyMatrix4(y,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function l3(e){let t=new WeakMap;function n(r,o){return o===jf?r.mapping=vr:o===$f&&(r.mapping=_r),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===jf||o===$f)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new _f(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var tl=4,rb=[.125,.215,.35,.446,.526,.582],Er=20,Q0=new Hf,ob=new Pt,j0=null,$0=0,tv=0,ev=!1,br=(1+Math.sqrt(5))/2,$o=1/br,lb=[new U(-br,$o,0),new U(br,$o,0),new U(-$o,0,br),new U($o,0,br),new U(0,br,-$o),new U(0,br,$o),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],c3=new U,nl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=c3}=a;j0=this._renderer.getRenderTarget(),$0=this._renderer.getActiveCubeFace(),tv=this._renderer.getActiveMipmapLevel(),ev=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ub(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(j0,$0,tv),this._renderer.xr.enabled=ev,t.scissorTest=!1,Bd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),j0=this._renderer.getRenderTarget(),$0=this._renderer.getActiveCubeFace(),tv=this._renderer.getActiveMipmapLevel(),ev=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Jo,format:xi,colorSpace:fr,depthBuffer:!1},s=cb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u3(a)),this._blurMaterial=h3(a,t,n)}return s}_compileMaterial(t){let n=new ge(this._lodPlanes[0],t);this._renderer.compile(n,Q0)}_sceneToCubeUV(t,n,i,s,a){let l=new We(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(ob),d.toneMapping=zs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new Us({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new ge(new Dn,x),u=!1,y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,u=!0):(x.color.copy(ob),u=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[_],a.y,a.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[_]));let T=this._cubeSize;Bd(s,v*T,_>2?T:0,T,T),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=y}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===vr||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ub());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new ge(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Bd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Q0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=lb[(s-a-1)%lb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ge(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Er-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):Er;m>Er&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);let u=[],y=0;for(let w=0;w<Er;++w){let R=w/x,E=Math.exp(-R*R/2);u.push(E),w===0?y+=E:w<m&&(y+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;let v=this._sizeLods[s],T=3*v*(s>_-tl?s-_+tl:0),A=4*(this._cubeSize-v);Bd(n,T,A,3*v,2*v),l.setRenderTarget(n),l.render(d,Q0)}};function u3(e){let t=[],n=[],i=[],s=e,a=e-tl+1+rb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-tl?l=rb[r-e+tl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,y=new Float32Array(x*g*p),_=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let A=0;A<p;A++){let w=A%3*2/3-1,R=A>2?0:-1,E=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(E,x*g*A),_.set(f,m*g*A);let M=[A,A,A,A,A,A];v.set(M,u*g*A)}let T=new Ye;T.setAttribute("position",new qe(y,x)),T.setAttribute("uv",new qe(_,m)),T.setAttribute("faceIndex",new qe(v,u)),t.push(T),s>tl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function cb(e,t,n){let i=new Qi(e,t,n);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function h3(e,t,n){let i=new Float32Array(Er),s=new U(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function ub(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function hb(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function hv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===jf||l===$f,h=l===vr||l===_r;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new nl(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new nl(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function d3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Vo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function p3(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let _=0,v=y.length;_<v;_+=3){let T=y[_+0],A=y[_+1],w=y[_+2];f.push(T,A,A,w,w,T)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let T=_+0,A=_+1,w=_+2;f.push(T,A,A,w,w,T)}}else return;let m=new(W0(f)?Tc:Ec)(f,1);m.version=x;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function m3(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,f*r,g),n.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,g);let u=0;for(let y=0;y<g;y++)u+=p[y]*x[y];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function g3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function v3(e,t,n){let i=new WeakMap,s=new ue;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*T*4*d),w=new bc(A,v,T,d);w.type=Li,w.needsUpdate=!0;let R=_*4;for(let M=0;M<d;M++){let L=m[M],N=u[M],F=y[M],H=v*T*4*M;for(let W=0;W<L.count;W++){let G=W*R;p===!0&&(s.fromBufferAttribute(L,W),A[H+G+0]=s.x,A[H+G+1]=s.y,A[H+G+2]=s.z,A[H+G+3]=0),g===!0&&(s.fromBufferAttribute(N,W),A[H+G+4]=s.x,A[H+G+5]=s.y,A[H+G+6]=s.z,A[H+G+7]=0),x===!0&&(s.fromBufferAttribute(F,W),A[H+G+8]=s.x,A[H+G+9]=s.y,A[H+G+10]=s.z,A[H+G+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:w,size:new Et(v,T)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function _3(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Db=new Hn,fb=new Uc(1,1),Ub=new bc,Nb=new gf,Lb=new wc,db=[],pb=[],mb=new Float32Array(16),gb=new Float32Array(9),vb=new Float32Array(4);function il(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=db[s];if(a===void 0&&(a=new Float32Array(s),db[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Vd(e,t){let n=pb[t];n===void 0&&(n=new Int32Array(t),pb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function y3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function x3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function S3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function M3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function b3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;vb.set(i),e.uniformMatrix2fv(this.addr,!1,vb),$e(n,i)}}function E3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;gb.set(i),e.uniformMatrix3fv(this.addr,!1,gb),$e(n,i)}}function T3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;mb.set(i),e.uniformMatrix4fv(this.addr,!1,mb),$e(n,i)}}function A3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function w3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function C3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function R3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function D3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function U3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function N3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function L3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function O3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(fb.compareFunction=G0,a=fb):a=Db,n.setTexture2D(t||a,s)}function I3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Nb,s)}function P3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Lb,s)}function z3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Ub,s)}function B3(e){switch(e){case 5126:return y3;case 35664:return x3;case 35665:return S3;case 35666:return M3;case 35674:return b3;case 35675:return E3;case 35676:return T3;case 5124:case 35670:return A3;case 35667:case 35671:return w3;case 35668:case 35672:return C3;case 35669:case 35673:return R3;case 5125:return D3;case 36294:return U3;case 36295:return N3;case 36296:return L3;case 35678:case 36198:case 36298:case 36306:case 35682:return O3;case 35679:case 36299:case 36307:return I3;case 35680:case 36300:case 36308:case 36293:return P3;case 36289:case 36303:case 36311:case 36292:return z3}}function F3(e,t){e.uniform1fv(this.addr,t)}function H3(e,t){let n=il(t,this.size,2);e.uniform2fv(this.addr,n)}function V3(e,t){let n=il(t,this.size,3);e.uniform3fv(this.addr,n)}function G3(e,t){let n=il(t,this.size,4);e.uniform4fv(this.addr,n)}function k3(e,t){let n=il(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function X3(e,t){let n=il(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function W3(e,t){let n=il(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function q3(e,t){e.uniform1iv(this.addr,t)}function Y3(e,t){e.uniform2iv(this.addr,t)}function Z3(e,t){e.uniform3iv(this.addr,t)}function J3(e,t){e.uniform4iv(this.addr,t)}function K3(e,t){e.uniform1uiv(this.addr,t)}function Q3(e,t){e.uniform2uiv(this.addr,t)}function j3(e,t){e.uniform3uiv(this.addr,t)}function $3(e,t){e.uniform4uiv(this.addr,t)}function tD(e,t,n){let i=this.cache,s=t.length,a=Vd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Db,a[r])}function eD(e,t,n){let i=this.cache,s=t.length,a=Vd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Nb,a[r])}function nD(e,t,n){let i=this.cache,s=t.length,a=Vd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Lb,a[r])}function iD(e,t,n){let i=this.cache,s=t.length,a=Vd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Ub,a[r])}function sD(e){switch(e){case 5126:return F3;case 35664:return H3;case 35665:return V3;case 35666:return G3;case 35674:return k3;case 35675:return X3;case 35676:return W3;case 5124:case 35670:return q3;case 35667:case 35671:return Y3;case 35668:case 35672:return Z3;case 35669:case 35673:return J3;case 5125:return K3;case 36294:return Q3;case 36295:return j3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return tD;case 35679:case 36299:case 36307:return eD;case 35680:case 36300:case 36308:case 36293:return nD;case 36289:case 36303:case 36311:case 36292:return iD}}var iv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=B3(n.type)}},sv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sD(n.type)}},av=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},nv=/(\w+)(\])?(\[|\.)?/g;function _b(e,t){e.seq.push(t),e.map[t.id]=t}function aD(e,t,n){let i=e.name,s=i.length;for(nv.lastIndex=0;;){let a=nv.exec(i),r=nv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){_b(n,c===void 0?new iv(o,e,t):new sv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new av(o),_b(n,d)),n=d}}}var el=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);aD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function yb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var rD=37297,oD=0;function lD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var xb=new Gt;function cD(e){$t._getMatrix(xb,$t.workingColorSpace,e);let t=`mat3( ${xb.elements.map(n=>n.toFixed(4))} )`;switch($t.getTransfer(e)){case xc:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Sb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+lD(e.getShaderSource(t),o)}else return a}function uD(e,t){let n=cD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function hD(e,t){let n;switch(t){case B1:n="Linear";break;case F1:n="Reinhard";break;case H1:n="Cineon";break;case Qf:n="ACESFilmic";break;case G1:n="AgX";break;case k1:n="Neutral";break;case V1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Fd=new U;function fD(){$t.getLuminanceCoefficients(Fd);let e=Fd.x.toFixed(4),t=Fd.y.toFixed(4),n=Fd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jc).join(`
`)}function pD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function mD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Jc(e){return e!==""}function Mb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gD=/^[ \t]*#include +<([\w\d./]+)>/gm;function rv(e){return e.replace(gD,_D)}var vD=new Map;function _D(e,t){let n=Xt[t];if(n===void 0){let i=vD.get(t);if(i!==void 0)n=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rv(n)}var yD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eb(e){return e.replace(yD,xD)}function xD(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Tb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function SD(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===U0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ns&&(t="SHADOWMAP_TYPE_VSM"),t}function MD(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case vr:case _r:t="ENVMAP_TYPE_CUBE";break;case kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bD(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function ED(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Kf:t="ENVMAP_BLENDING_MULTIPLY";break;case P1:t="ENVMAP_BLENDING_MIX";break;case z1:t="ENVMAP_BLENDING_ADD";break}return t}function TD(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function AD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=SD(n),c=MD(n),h=bD(n),d=ED(n),f=TD(n),p=dD(n),g=pD(a),x=s.createProgram(),m,u,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jc).join(`
`),u.length>0&&(u+=`
`)):(m=[Tb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jc).join(`
`),u=[Tb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zs?"#define TONE_MAPPING":"",n.toneMapping!==zs?Xt.tonemapping_pars_fragment:"",n.toneMapping!==zs?hD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,uD("linearToOutputTexel",n.outputColorSpace),fD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jc).join(`
`)),r=rv(r),r=Mb(r,n),r=bb(r,n),o=rv(o),o=Mb(o,n),o=bb(o,n),r=Eb(r),o=Eb(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=y+m+r,v=y+u+o,T=yb(s,s.VERTEX_SHADER,_),A=yb(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,A),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(L){if(e.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(A)||"",W=N.trim(),G=F.trim(),Q=H.trim(),B=!0,it=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,T,A);else{let rt=Sb(s,T,"vertex"),pt=Sb(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+rt+`
`+pt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Q==="")&&(it=!1);it&&(L.diagnostics={runnable:B,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:Q,prefix:u}})}s.deleteShader(T),s.deleteShader(A),R=new el(s,x),E=mD(s,x)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,rD)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}var wD=0,ov=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new lv(t),n.set(t,i)),i}},lv=class{constructor(t){this.id=wD++,this.code=t,this.usedTimes=0}};function CD(e,t,n,i,s,a,r){let o=new Xo,l=new ov,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,N,F){let H=N.fog,W=F.geometry,G=E.isMeshStandardMaterial?N.environment:null,Q=(E.isMeshStandardMaterial?n:t).get(E.envMap||G),B=Q&&Q.mapping===kc?Q.image.height:null,it=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=rt!==void 0?rt.length:0,Ft=0;W.morphAttributes.position!==void 0&&(Ft=1),W.morphAttributes.normal!==void 0&&(Ft=2),W.morphAttributes.color!==void 0&&(Ft=3);let ae,Me,Yt,K;if(it){let kt=is[it];ae=kt.vertexShader,Me=kt.fragmentShader}else ae=E.vertexShader,Me=E.fragmentShader,l.update(E),Yt=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);let $=e.getRenderTarget(),ht=e.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,dt=F.isBatchedMesh===!0,Ht=!!E.map,Pe=!!E.matcap,D=!!Q,re=!!E.aoMap,Ot=!!E.lightMap,Mt=!!E.bumpMap,vt=!!E.normalMap,ve=!!E.displacementMap,_t=!!E.emissiveMap,It=!!E.metalnessMap,Re=!!E.roughnessMap,fe=E.anisotropy>0,C=E.clearcoat>0,S=E.dispersion>0,z=E.iridescence>0,Z=E.sheen>0,j=E.transmission>0,Y=fe&&!!E.anisotropyMap,Tt=C&&!!E.clearcoatMap,st=C&&!!E.clearcoatNormalMap,yt=C&&!!E.clearcoatRoughnessMap,St=z&&!!E.iridescenceMap,tt=z&&!!E.iridescenceThicknessMap,ct=Z&&!!E.sheenColorMap,Ct=Z&&!!E.sheenRoughnessMap,bt=!!E.specularMap,ot=!!E.specularColorMap,Bt=!!E.specularIntensityMap,O=j&&!!E.transmissionMap,et=j&&!!E.thicknessMap,at=!!E.gradientMap,mt=!!E.alphaMap,V=E.alphaTest>0,q=!!E.alphaHash,ft=!!E.extensions,Rt=zs;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Rt=e.toneMapping);let jt={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:Me,defines:E.defines,customVertexShaderID:Yt,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:dt,batchingColor:dt&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:fr,alphaToCoverage:!!E.alphaToCoverage,map:Ht,matcap:Pe,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:B,aoMap:re,lightMap:Ot,bumpMap:Mt,normalMap:vt,displacementMap:f&&ve,emissiveMap:_t,normalMapObjectSpace:vt&&E.normalMapType===Y1,normalMapTangentSpace:vt&&E.normalMapType===Pd,metalnessMap:It,roughnessMap:Re,anisotropy:fe,anisotropyMap:Y,clearcoat:C,clearcoatMap:Tt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:S,iridescence:z,iridescenceMap:St,iridescenceThicknessMap:tt,sheen:Z,sheenColorMap:ct,sheenRoughnessMap:Ct,specularMap:bt,specularColorMap:ot,specularIntensityMap:Bt,transmission:j,transmissionMap:O,thicknessMap:et,gradientMap:at,opaque:E.transparent===!1&&E.blending===ur&&E.alphaToCoverage===!1,alphaMap:mt,alphaTest:V,alphaHash:q,combine:E.combine,mapUv:Ht&&x(E.map.channel),aoMapUv:re&&x(E.aoMap.channel),lightMapUv:Ot&&x(E.lightMap.channel),bumpMapUv:Mt&&x(E.bumpMap.channel),normalMapUv:vt&&x(E.normalMap.channel),displacementMapUv:ve&&x(E.displacementMap.channel),emissiveMapUv:_t&&x(E.emissiveMap.channel),metalnessMapUv:It&&x(E.metalnessMap.channel),roughnessMapUv:Re&&x(E.roughnessMap.channel),anisotropyMapUv:Y&&x(E.anisotropyMap.channel),clearcoatMapUv:Tt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(E.sheenRoughnessMap.channel),specularMapUv:bt&&x(E.specularMap.channel),specularColorMapUv:ot&&x(E.specularColorMap.channel),specularIntensityMapUv:Bt&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:et&&x(E.thicknessMap.channel),alphaMapUv:mt&&x(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(vt||fe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ht||mt),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ht&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:_t&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yi,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&E.extensions.multiDraw===!0||dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(y(M,E),_(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let M=g[E.type],L;if(M){let N=is[M];L=sb.clone(N.uniforms)}else L=E.uniforms;return L}function T(E,M){let L;for(let N=0,F=h.length;N<F;N++){let H=h[N];if(H.cacheKey===M){L=H,++L.usedTimes;break}}return L===void 0&&(L=new AD(e,M,E,a),h.push(L)),L}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function RD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function DD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ab(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function wb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,g,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,g,x,m){let u=r(d,f,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,g,x,m){let u=r(d,f,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||DD),i.length>1&&i.sort(f||Ab),s.length>1&&s.sort(f||Ab)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function UD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new wb,e.set(i,[r])):s>=a.length?(r=new wb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function ND(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new U,color:new Pt};break;case"SpotLight":n={position:new U,direction:new U,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function LD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var OD=0;function ID(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function PD(e){let t=new ND,n=LD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,a=new me,r=new me;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,y=0,_=0,v=0,T=0,A=0,w=0;c.sort(ID);for(let E=0,M=c.length;E<M;E++){let L=c[E],N=L.color,F=L.intensity,H=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*F,d+=N.g*F,f+=N.b*F;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],F);w++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,B=n.get(L);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=G,p++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(N).multiplyScalar(F),G.distance=H,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[x]=G;let Q=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,Q.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=Q.matrix,L.castShadow){let B=n.get(L);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=W,v++}x++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(N).multiplyScalar(F),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=G,m++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let Q=L.shadow,B=n.get(L);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=G,g++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(F),G.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[u]=G,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=w,i.version=OD++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){let _=c[u];if(_.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(_.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Cb(e){let t=new PD(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function zD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Cb(e),t.set(s,[o])):a>=r.length?(o=new Cb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var BD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HD(e,t,n){let i=new qo,s=new Et,a=new Et,r=new ue,o=new Cf({depthPacking:q1}),l=new Rf,c={},h=n.maxTextureSize,d={[ws]:pn,[pn]:ws,[yi]:yi},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:BD,fragmentShader:FD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let u=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),N=e.state;N.setBlending(Ps),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=u!==ns&&this.type===ns,H=u===ns&&this.type!==ns;for(let W=0,G=A.length;W<G;W++){let Q=A[W],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let it=B.getFrameExtents();if(s.multiply(it),a.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/it.x),s.x=a.x*it.x,B.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/it.y),s.y=a.y*it.y,B.mapSize.y=a.y)),B.map===null||F===!0||H===!0){let pt=this.type!==ns?{minFilter:Fn,magFilter:Fn}:{};B.map!==null&&B.map.dispose(),B.map=new Qi(s.x,s.y,pt),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();let rt=B.getViewportCount();for(let pt=0;pt<rt;pt++){let Ft=B.getViewport(pt);r.set(a.x*Ft.x,a.y*Ft.y,a.x*Ft.z,a.y*Ft.w),N.viewport(r),B.updateMatrices(Q,pt),i=B.getFrustum(),v(w,R,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===ns&&y(B,R),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,L)};function y(A,w){let R=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,R,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,R,p,x,null)}function _(A,w,R,E){let M=null,L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=M.uuid,F=w.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let W=H[F];W===void 0&&(W=M.clone(),H[F]=W,w.addEventListener("dispose",T)),M=W}if(M.visible=w.visible,M.wireframe=w.wireframe,E===ns?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=e.properties.get(M);N.light=R}return M}function v(A,w,R,E,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ns)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let F=t.update(A),H=A.material;if(Array.isArray(H)){let W=F.groups;for(let G=0,Q=W.length;G<Q;G++){let B=W[G],it=H[B.materialIndex];if(it&&it.visible){let rt=_(A,it,E,M);A.onBeforeShadow(e,A,w,R,F,rt,B),e.renderBufferDirect(R,null,F,rt,A,B),A.onAfterShadow(e,A,w,R,F,rt,B)}}}else if(H.visible){let W=_(A,H,E,M);A.onBeforeShadow(e,A,w,R,F,W,null),e.renderBufferDirect(R,null,F,W,A,null),A.onAfterShadow(e,A,w,R,F,W,null)}}let N=A.children;for(let F=0,H=N.length;F<H;F++)v(N[F],w,R,E,M)}function T(A){A.target.removeEventListener("dispose",T);for(let R in c){let E=c[R],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var VD={[kf]:Xf,[Wf]:Zf,[qf]:Jf,[hr]:Yf,[Xf]:kf,[Zf]:Wf,[Jf]:qf,[Yf]:hr};function GD(e,t){function n(){let O=!1,et=new ue,at=null,mt=new ue(0,0,0,0);return{setMask:function(V){at!==V&&!O&&(e.colorMask(V,V,V,V),at=V)},setLocked:function(V){O=V},setClear:function(V,q,ft,Rt,jt){jt===!0&&(V*=Rt,q*=Rt,ft*=Rt),et.set(V,q,ft,Rt),mt.equals(et)===!1&&(e.clearColor(V,q,ft,Rt),mt.copy(et))},reset:function(){O=!1,at=null,mt.set(-1,0,0,0)}}}function i(){let O=!1,et=!1,at=null,mt=null,V=null;return{setReversed:function(q){if(et!==q){let ft=t.get("EXT_clip_control");q?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),et=q;let Rt=V;V=null,this.setClear(Rt)}},getReversed:function(){return et},setTest:function(q){q?$(e.DEPTH_TEST):ht(e.DEPTH_TEST)},setMask:function(q){at!==q&&!O&&(e.depthMask(q),at=q)},setFunc:function(q){if(et&&(q=VD[q]),mt!==q){switch(q){case kf:e.depthFunc(e.NEVER);break;case Xf:e.depthFunc(e.ALWAYS);break;case Wf:e.depthFunc(e.LESS);break;case hr:e.depthFunc(e.LEQUAL);break;case qf:e.depthFunc(e.EQUAL);break;case Yf:e.depthFunc(e.GEQUAL);break;case Zf:e.depthFunc(e.GREATER);break;case Jf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=q}},setLocked:function(q){O=q},setClear:function(q){V!==q&&(et&&(q=1-q),e.clearDepth(q),V=q)},reset:function(){O=!1,at=null,mt=null,V=null,et=!1}}}function s(){let O=!1,et=null,at=null,mt=null,V=null,q=null,ft=null,Rt=null,jt=null;return{setTest:function(kt){O||(kt?$(e.STENCIL_TEST):ht(e.STENCIL_TEST))},setMask:function(kt){et!==kt&&!O&&(e.stencilMask(kt),et=kt)},setFunc:function(kt,ss,Oi){(at!==kt||mt!==ss||V!==Oi)&&(e.stencilFunc(kt,ss,Oi),at=kt,mt=ss,V=Oi)},setOp:function(kt,ss,Oi){(q!==kt||ft!==ss||Rt!==Oi)&&(e.stencilOp(kt,ss,Oi),q=kt,ft=ss,Rt=Oi)},setLocked:function(kt){O=kt},setClear:function(kt){jt!==kt&&(e.clearStencil(kt),jt=kt)},reset:function(){O=!1,et=null,at=null,mt=null,V=null,q=null,ft=null,Rt=null,jt=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,y=null,_=null,v=null,T=null,A=null,w=new Pt(0,0,0),R=0,E=!1,M=null,L=null,N=null,F=null,H=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Q>=2);let it=null,rt={},pt=e.getParameter(e.SCISSOR_BOX),Ft=e.getParameter(e.VIEWPORT),ae=new ue().fromArray(pt),Me=new ue().fromArray(Ft);function Yt(O,et,at,mt){let V=new Uint8Array(4),q=e.createTexture();e.bindTexture(O,q),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ft=0;ft<at;ft++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(et,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,V):e.texImage2D(et+ft,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,V);return q}let K={};K[e.TEXTURE_2D]=Yt(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=Yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[e.TEXTURE_2D_ARRAY]=Yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),K[e.TEXTURE_3D]=Yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),$(e.DEPTH_TEST),r.setFunc(hr),Mt(!1),vt(D0),$(e.CULL_FACE),re(Ps);function $(O){h[O]!==!0&&(e.enable(O),h[O]=!0)}function ht(O){h[O]!==!1&&(e.disable(O),h[O]=!1)}function At(O,et){return d[O]!==et?(e.bindFramebuffer(O,et),d[O]=et,O===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=et),O===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=et),!0):!1}function dt(O,et){let at=p,mt=!1;if(O){at=f.get(et),at===void 0&&(at=[],f.set(et,at));let V=O.textures;if(at.length!==V.length||at[0]!==e.COLOR_ATTACHMENT0){for(let q=0,ft=V.length;q<ft;q++)at[q]=e.COLOR_ATTACHMENT0+q;at.length=V.length,mt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,mt=!0);mt&&e.drawBuffers(at)}function Ht(O){return g!==O?(e.useProgram(O),g=O,!0):!1}let Pe={[Ta]:e.FUNC_ADD,[y1]:e.FUNC_SUBTRACT,[x1]:e.FUNC_REVERSE_SUBTRACT};Pe[S1]=e.MIN,Pe[M1]=e.MAX;let D={[b1]:e.ZERO,[E1]:e.ONE,[T1]:e.SRC_COLOR,[cf]:e.SRC_ALPHA,[U1]:e.SRC_ALPHA_SATURATE,[R1]:e.DST_COLOR,[w1]:e.DST_ALPHA,[A1]:e.ONE_MINUS_SRC_COLOR,[uf]:e.ONE_MINUS_SRC_ALPHA,[D1]:e.ONE_MINUS_DST_COLOR,[C1]:e.ONE_MINUS_DST_ALPHA,[N1]:e.CONSTANT_COLOR,[L1]:e.ONE_MINUS_CONSTANT_COLOR,[O1]:e.CONSTANT_ALPHA,[I1]:e.ONE_MINUS_CONSTANT_ALPHA};function re(O,et,at,mt,V,q,ft,Rt,jt,kt){if(O===Ps){x===!0&&(ht(e.BLEND),x=!1);return}if(x===!1&&($(e.BLEND),x=!0),O!==_1){if(O!==m||kt!==E){if((u!==Ta||v!==Ta)&&(e.blendEquation(e.FUNC_ADD),u=Ta,v=Ta),kt)switch(O){case ur:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ra:e.blendFunc(e.ONE,e.ONE);break;case N0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case L0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ur:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case N0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,_=null,T=null,A=null,w.set(0,0,0),R=0,m=O,E=kt}return}V=V||et,q=q||at,ft=ft||mt,(et!==u||V!==v)&&(e.blendEquationSeparate(Pe[et],Pe[V]),u=et,v=V),(at!==y||mt!==_||q!==T||ft!==A)&&(e.blendFuncSeparate(D[at],D[mt],D[q],D[ft]),y=at,_=mt,T=q,A=ft),(Rt.equals(w)===!1||jt!==R)&&(e.blendColor(Rt.r,Rt.g,Rt.b,jt),w.copy(Rt),R=jt),m=O,E=!1}function Ot(O,et){O.side===yi?ht(e.CULL_FACE):$(e.CULL_FACE);let at=O.side===pn;et&&(at=!at),Mt(at),O.blending===ur&&O.transparent===!1?re(Ps):re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),a.setMask(O.colorWrite);let mt=O.stencilWrite;o.setTest(mt),mt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):ht(e.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(O){M!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),M=O)}function vt(O){O!==g1?($(e.CULL_FACE),O!==L&&(O===D0?e.cullFace(e.BACK):O===v1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ht(e.CULL_FACE),L=O}function ve(O){O!==N&&(G&&e.lineWidth(O),N=O)}function _t(O,et,at){O?($(e.POLYGON_OFFSET_FILL),(F!==et||H!==at)&&(e.polygonOffset(et,at),F=et,H=at)):ht(e.POLYGON_OFFSET_FILL)}function It(O){O?$(e.SCISSOR_TEST):ht(e.SCISSOR_TEST)}function Re(O){O===void 0&&(O=e.TEXTURE0+W-1),it!==O&&(e.activeTexture(O),it=O)}function fe(O,et,at){at===void 0&&(it===null?at=e.TEXTURE0+W-1:at=it);let mt=rt[at];mt===void 0&&(mt={type:void 0,texture:void 0},rt[at]=mt),(mt.type!==O||mt.texture!==et)&&(it!==at&&(e.activeTexture(at),it=at),e.bindTexture(O,et||K[O]),mt.type=O,mt.texture=et)}function C(){let O=rt[it];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{e.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{e.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{e.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{e.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{e.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{e.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{e.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(O){ae.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function Ct(O){Me.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),Me.copy(O))}function bt(O,et){let at=c.get(et);at===void 0&&(at=new WeakMap,c.set(et,at));let mt=at.get(O);mt===void 0&&(mt=e.getUniformBlockIndex(et,O.name),at.set(O,mt))}function ot(O,et){let mt=c.get(et).get(O);l.get(et)!==mt&&(e.uniformBlockBinding(et,mt,O.__bindingPointIndex),l.set(et,mt))}function Bt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},it=null,rt={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,y=null,_=null,v=null,T=null,A=null,w=new Pt(0,0,0),R=0,E=!1,M=null,L=null,N=null,F=null,H=null,ae.set(0,0,e.canvas.width,e.canvas.height),Me.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:$,disable:ht,bindFramebuffer:At,drawBuffers:dt,useProgram:Ht,setBlending:re,setMaterial:Ot,setFlipSided:Mt,setCullFace:vt,setLineWidth:ve,setPolygonOffset:_t,setScissorTest:It,activeTexture:Re,bindTexture:fe,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:St,texImage3D:tt,updateUBOMapping:bt,uniformBlockBinding:ot,texStorage2D:st,texStorage3D:yt,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:Tt,scissor:ct,viewport:Ct,reset:Bt}}function kD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Mc("canvas")}function x(C,S,z){let Z=1,j=fe(C);if((j.width>z||j.height>z)&&(Z=z/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Y=Math.floor(Z*j.width),Tt=Math.floor(Z*j.height);d===void 0&&(d=g(Y,Tt));let st=S?g(Y,Tt):d;return st.width=Y,st.height=Tt,st.getContext("2d").drawImage(C,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Tt+")."),st}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){e.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(C,S,z,Z,j=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===e.RED&&(z===e.FLOAT&&(Y=e.R32F),z===e.HALF_FLOAT&&(Y=e.R16F),z===e.UNSIGNED_BYTE&&(Y=e.R8)),S===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.R8UI),z===e.UNSIGNED_SHORT&&(Y=e.R16UI),z===e.UNSIGNED_INT&&(Y=e.R32UI),z===e.BYTE&&(Y=e.R8I),z===e.SHORT&&(Y=e.R16I),z===e.INT&&(Y=e.R32I)),S===e.RG&&(z===e.FLOAT&&(Y=e.RG32F),z===e.HALF_FLOAT&&(Y=e.RG16F),z===e.UNSIGNED_BYTE&&(Y=e.RG8)),S===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RG8UI),z===e.UNSIGNED_SHORT&&(Y=e.RG16UI),z===e.UNSIGNED_INT&&(Y=e.RG32UI),z===e.BYTE&&(Y=e.RG8I),z===e.SHORT&&(Y=e.RG16I),z===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),z===e.UNSIGNED_INT&&(Y=e.RGB32UI),z===e.BYTE&&(Y=e.RGB8I),z===e.SHORT&&(Y=e.RGB16I),z===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),z===e.UNSIGNED_INT&&(Y=e.RGBA32UI),z===e.BYTE&&(Y=e.RGBA8I),z===e.SHORT&&(Y=e.RGBA16I),z===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&(z===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),S===e.RGBA){let Tt=j?xc:$t.getTransfer(Z);z===e.FLOAT&&(Y=e.RGBA32F),z===e.HALF_FLOAT&&(Y=e.RGBA16F),z===e.UNSIGNED_BYTE&&(Y=Tt===he?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(C,S){let z;return C?S===null||S===Ua||S===Ko?z=e.DEPTH24_STENCIL8:S===Li?z=e.DEPTH32F_STENCIL8:S===Zo&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ua||S===Ko?z=e.DEPTH_COMPONENT24:S===Li?z=e.DEPTH_COMPONENT32F:S===Zo&&(z=e.DEPTH_COMPONENT16),z}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==Ui?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function w(C){let S=C.target;S.removeEventListener("dispose",w),M(S)}function R(C){let S=i.get(C);if(S.__webglInit===void 0)return;let z=C.source,Z=f.get(z);if(Z){let j=Z[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(C),Object.keys(Z).length===0&&f.delete(z)}i.remove(C)}function E(C){let S=i.get(C);e.deleteTexture(S.__webglTexture);let z=C.source,Z=f.get(z);delete Z[S.__cacheKey],r.memory.textures--}function M(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let j=0;j<S.__webglFramebuffer[Z].length;j++)e.deleteFramebuffer(S.__webglFramebuffer[Z][j]);else e.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[Z]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=C.textures;for(let Z=0,j=z.length;Z<j;Z++){let Y=i.get(z[Z]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),r.memory.textures--),i.remove(z[Z])}i.remove(C)}let L=0;function N(){L=0}function F(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function H(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){let z=i.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,C,S);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+S)}function G(C,S){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){K(z,C,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+S)}function Q(C,S){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){K(z,C,S);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+S)}function B(C,S){let z=i.get(C);if(C.version>0&&z.__version!==C.version){$(z,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+S)}let it={[hf]:e.REPEAT,[Ea]:e.CLAMP_TO_EDGE,[ff]:e.MIRRORED_REPEAT},rt={[Fn]:e.NEAREST,[X1]:e.NEAREST_MIPMAP_NEAREST,[Xc]:e.NEAREST_MIPMAP_LINEAR,[Ui]:e.LINEAR,[td]:e.LINEAR_MIPMAP_NEAREST,[Da]:e.LINEAR_MIPMAP_LINEAR},pt={[Z1]:e.NEVER,[tb]:e.ALWAYS,[J1]:e.LESS,[G0]:e.LEQUAL,[K1]:e.EQUAL,[$1]:e.GEQUAL,[Q1]:e.GREATER,[j1]:e.NOTEQUAL};function Ft(C,S){if(S.type===Li&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ui||S.magFilter===td||S.magFilter===Xc||S.magFilter===Da||S.minFilter===Ui||S.minFilter===td||S.minFilter===Xc||S.minFilter===Da)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,it[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,it[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,it[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,rt[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fn||S.minFilter!==Xc&&S.minFilter!==Da||S.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ae(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let Z=S.source,j=f.get(Z);j===void 0&&(j={},f.set(Z,j));let Y=H(S);if(Y!==C.__cacheKey){j[Y]===void 0&&(j[Y]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),j[Y].usedTimes++;let Tt=j[C.__cacheKey];Tt!==void 0&&(j[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(S)),C.__cacheKey=Y,C.__webglTexture=j[Y].texture}return z}function Me(C,S,z){return Math.floor(Math.floor(C/z)/S)}function Yt(C,S,z,Z){let Y=C.updateRanges;if(Y.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,z,Z,S.data);else{Y.sort((tt,ct)=>tt.start-ct.start);let Tt=0;for(let tt=1;tt<Y.length;tt++){let ct=Y[Tt],Ct=Y[tt],bt=ct.start+ct.count,ot=Me(Ct.start,S.width,4),Bt=Me(ct.start,S.width,4);Ct.start<=bt+1&&ot===Bt&&Me(Ct.start+Ct.count-1,S.width,4)===ot?ct.count=Math.max(ct.count,Ct.start+Ct.count-ct.start):(++Tt,Y[Tt]=Ct)}Y.length=Tt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),yt=e.getParameter(e.UNPACK_SKIP_PIXELS),St=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let tt=0,ct=Y.length;tt<ct;tt++){let Ct=Y[tt],bt=Math.floor(Ct.start/4),ot=Math.ceil(Ct.count/4),Bt=bt%S.width,O=Math.floor(bt/S.width),et=ot,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,Bt,O,et,at,z,Z,S.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,St)}}function K(C,S,z){let Z=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=e.TEXTURE_3D);let j=ae(C,S),Y=S.source;n.bindTexture(Z,C.__webglTexture,e.TEXTURE0+z);let Tt=i.get(Y);if(Y.version!==Tt.__version||j===!0){n.activeTexture(e.TEXTURE0+z);let st=$t.getPrimaries($t.workingColorSpace),yt=S.colorSpace===Bs?null:$t.getPrimaries(S.colorSpace),St=S.colorSpace===Bs||st===yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let tt=x(S.image,!1,s.maxTextureSize);tt=Re(S,tt);let ct=a.convert(S.format,S.colorSpace),Ct=a.convert(S.type),bt=_(S.internalFormat,ct,Ct,S.colorSpace,S.isVideoTexture);Ft(Z,S);let ot,Bt=S.mipmaps,O=S.isVideoTexture!==!0,et=Tt.__version===void 0||j===!0,at=Y.dataReady,mt=T(S,tt);if(S.isDepthTexture)bt=v(S.format===Qo,S.type),et&&(O?n.texStorage2D(e.TEXTURE_2D,1,bt,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,bt,tt.width,tt.height,0,ct,Ct,null));else if(S.isDataTexture)if(Bt.length>0){O&&et&&n.texStorage2D(e.TEXTURE_2D,mt,bt,Bt[0].width,Bt[0].height);for(let V=0,q=Bt.length;V<q;V++)ot=Bt[V],O?at&&n.texSubImage2D(e.TEXTURE_2D,V,0,0,ot.width,ot.height,ct,Ct,ot.data):n.texImage2D(e.TEXTURE_2D,V,bt,ot.width,ot.height,0,ct,Ct,ot.data);S.generateMipmaps=!1}else O?(et&&n.texStorage2D(e.TEXTURE_2D,mt,bt,tt.width,tt.height),at&&Yt(S,tt,ct,Ct)):n.texImage2D(e.TEXTURE_2D,0,bt,tt.width,tt.height,0,ct,Ct,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,bt,Bt[0].width,Bt[0].height,tt.depth);for(let V=0,q=Bt.length;V<q;V++)if(ot=Bt[V],S.format!==xi)if(ct!==null)if(O){if(at)if(S.layerUpdates.size>0){let ft=K0(ot.width,ot.height,S.format,S.type);for(let Rt of S.layerUpdates){let jt=ot.data.subarray(Rt*ft/ot.data.BYTES_PER_ELEMENT,(Rt+1)*ft/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,V,0,0,Rt,ot.width,ot.height,1,ct,jt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,V,0,0,0,ot.width,ot.height,tt.depth,ct,ot.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,V,bt,ot.width,ot.height,tt.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,V,0,0,0,ot.width,ot.height,tt.depth,ct,Ct,ot.data):n.texImage3D(e.TEXTURE_2D_ARRAY,V,bt,ot.width,ot.height,tt.depth,0,ct,Ct,ot.data)}else{O&&et&&n.texStorage2D(e.TEXTURE_2D,mt,bt,Bt[0].width,Bt[0].height);for(let V=0,q=Bt.length;V<q;V++)ot=Bt[V],S.format!==xi?ct!==null?O?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,V,0,0,ot.width,ot.height,ct,ot.data):n.compressedTexImage2D(e.TEXTURE_2D,V,bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?at&&n.texSubImage2D(e.TEXTURE_2D,V,0,0,ot.width,ot.height,ct,Ct,ot.data):n.texImage2D(e.TEXTURE_2D,V,bt,ot.width,ot.height,0,ct,Ct,ot.data)}else if(S.isDataArrayTexture)if(O){if(et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,bt,tt.width,tt.height,tt.depth),at)if(S.layerUpdates.size>0){let V=K0(tt.width,tt.height,S.format,S.type);for(let q of S.layerUpdates){let ft=tt.data.subarray(q*V/tt.data.BYTES_PER_ELEMENT,(q+1)*V/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,q,tt.width,tt.height,1,ct,Ct,ft)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Ct,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,ct,Ct,tt.data);else if(S.isData3DTexture)O?(et&&n.texStorage3D(e.TEXTURE_3D,mt,bt,tt.width,tt.height,tt.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Ct,tt.data)):n.texImage3D(e.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,ct,Ct,tt.data);else if(S.isFramebufferTexture){if(et)if(O)n.texStorage2D(e.TEXTURE_2D,mt,bt,tt.width,tt.height);else{let V=tt.width,q=tt.height;for(let ft=0;ft<mt;ft++)n.texImage2D(e.TEXTURE_2D,ft,bt,V,q,0,ct,Ct,null),V>>=1,q>>=1}}else if(Bt.length>0){if(O&&et){let V=fe(Bt[0]);n.texStorage2D(e.TEXTURE_2D,mt,bt,V.width,V.height)}for(let V=0,q=Bt.length;V<q;V++)ot=Bt[V],O?at&&n.texSubImage2D(e.TEXTURE_2D,V,0,0,ct,Ct,ot):n.texImage2D(e.TEXTURE_2D,V,bt,ct,Ct,ot);S.generateMipmaps=!1}else if(O){if(et){let V=fe(tt);n.texStorage2D(e.TEXTURE_2D,mt,bt,V.width,V.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct,Ct,tt)}else n.texImage2D(e.TEXTURE_2D,0,bt,ct,Ct,tt);m(S)&&u(Z),Tt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,z){if(S.image.length!==6)return;let Z=ae(C,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+z);let Y=i.get(j);if(j.version!==Y.__version||Z===!0){n.activeTexture(e.TEXTURE0+z);let Tt=$t.getPrimaries($t.workingColorSpace),st=S.colorSpace===Bs?null:$t.getPrimaries(S.colorSpace),yt=S.colorSpace===Bs||Tt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let q=0;q<6;q++)!St&&!tt?ct[q]=x(S.image[q],!0,s.maxCubemapSize):ct[q]=tt?S.image[q].image:S.image[q],ct[q]=Re(S,ct[q]);let Ct=ct[0],bt=a.convert(S.format,S.colorSpace),ot=a.convert(S.type),Bt=_(S.internalFormat,bt,ot,S.colorSpace),O=S.isVideoTexture!==!0,et=Y.__version===void 0||Z===!0,at=j.dataReady,mt=T(S,Ct);Ft(e.TEXTURE_CUBE_MAP,S);let V;if(St){O&&et&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Bt,Ct.width,Ct.height);for(let q=0;q<6;q++){V=ct[q].mipmaps;for(let ft=0;ft<V.length;ft++){let Rt=V[ft];S.format!==xi?bt!==null?O?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft,0,0,Rt.width,Rt.height,bt,Rt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft,0,0,Rt.width,Rt.height,bt,ot,Rt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft,Bt,Rt.width,Rt.height,0,bt,ot,Rt.data)}}}else{if(V=S.mipmaps,O&&et){V.length>0&&mt++;let q=fe(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Bt,q.width,q.height)}for(let q=0;q<6;q++)if(tt){O?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ct[q].width,ct[q].height,bt,ot,ct[q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Bt,ct[q].width,ct[q].height,0,bt,ot,ct[q].data);for(let ft=0;ft<V.length;ft++){let jt=V[ft].image[q].image;O?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft+1,0,0,jt.width,jt.height,bt,ot,jt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft+1,Bt,jt.width,jt.height,0,bt,ot,jt.data)}}else{O?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,bt,ot,ct[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Bt,bt,ot,ct[q]);for(let ft=0;ft<V.length;ft++){let Rt=V[ft];O?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft+1,0,0,bt,ot,Rt.image[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft+1,Bt,bt,ot,Rt.image[q])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),Y.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ht(C,S,z,Z,j,Y){let Tt=a.convert(z.format,z.colorSpace),st=a.convert(z.type),yt=_(z.internalFormat,Tt,st,z.colorSpace),St=i.get(S),tt=i.get(z);if(tt.__renderTarget=S,!St.__hasExternalTextures){let ct=Math.max(1,S.width>>Y),Ct=Math.max(1,S.height>>Y);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,Y,yt,ct,Ct,S.depth,0,Tt,st,null):n.texImage2D(j,Y,yt,ct,Ct,0,Tt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),_t(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,j,tt.__webglTexture,0,ve(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,j,tt.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function At(C,S,z){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer){let Z=S.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,Y=v(S.stencilBuffer,j),Tt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=ve(S);_t(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,Y,S.width,S.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Tt,e.RENDERBUFFER,C)}else{let Z=S.textures;for(let j=0;j<Z.length;j++){let Y=Z[j],Tt=a.convert(Y.format,Y.colorSpace),st=a.convert(Y.type),yt=_(Y.internalFormat,Tt,st,Y.colorSpace),St=ve(S);z&&_t(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,St,yt,S.width,S.height):_t(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,St,yt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,yt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function dt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let j=Z.__webglTexture,Y=ve(S);if(S.depthTexture.format===Ho)_t(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0);else if(S.depthTexture.format===Qo)_t(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ht(C){let S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Z=C.texture.mipmaps;Z&&Z.length>0?dt(S.__webglFramebuffer[0],C):dt(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=e.createRenderbuffer(),At(S.__webglDepthbuffer[Z],C,!1);else{let j=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,Y)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),At(S.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,Y)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(C,S,z){let Z=i.get(C);S!==void 0&&ht(Z.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Ht(C)}function D(C){let S=C.texture,z=i.get(C),Z=i.get(S);C.addEventListener("dispose",w);let j=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=S.version,r.memory.textures++),Y){z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[st]=[];for(let yt=0;yt<S.mipmaps.length;yt++)z.__webglFramebuffer[st][yt]=e.createFramebuffer()}else z.__webglFramebuffer[st]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)z.__webglFramebuffer[st]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Tt)for(let st=0,yt=j.length;st<yt;st++){let St=i.get(j[st]);St.__webglTexture===void 0&&(St.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&_t(C)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){let yt=j[st];z.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[st]);let St=a.convert(yt.format,yt.colorSpace),tt=a.convert(yt.type),ct=_(yt.internalFormat,St,tt,yt.colorSpace,C.isXRRenderTarget===!0),Ct=ve(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ct,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,z.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),At(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)ht(z.__webglFramebuffer[st][yt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt);else ht(z.__webglFramebuffer[st],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Tt){for(let st=0,yt=j.length;st<yt;st++){let St=j[st],tt=i.get(St),ct=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,tt.__webglTexture),Ft(ct,St),ht(z.__webglFramebuffer,C,St,e.COLOR_ATTACHMENT0+st,ct,0),m(St)&&u(ct)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,Z.__webglTexture),Ft(st,S),S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)ht(z.__webglFramebuffer[yt],C,S,e.COLOR_ATTACHMENT0,st,yt);else ht(z.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,st,0);m(S)&&u(st),n.unbindTexture()}C.depthBuffer&&Ht(C)}function re(C){let S=C.textures;for(let z=0,Z=S.length;z<Z;z++){let j=S[z];if(m(j)){let Y=y(C),Tt=i.get(j).__webglTexture;n.bindTexture(Y,Tt),u(Y),n.unbindTexture()}}}let Ot=[],Mt=[];function vt(C){if(C.samples>0){if(_t(C)===!1){let S=C.textures,z=C.width,Z=C.height,j=e.COLOR_BUFFER_BIT,Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Tt=i.get(C),st=S.length>1;if(st)for(let St=0;St<S.length;St++)n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let yt=C.texture.mipmaps;yt&&yt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);let tt=i.get(S[St]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,tt,0)}e.blitFramebuffer(0,0,z,Z,0,0,z,Z,j,e.NEAREST),l===!0&&(Ot.length=0,Mt.length=0,Ot.push(e.COLOR_ATTACHMENT0+St),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ot.push(Y),Mt.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Mt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<S.length;St++){n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);let tt=i.get(S[St]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Tt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,tt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ve(C){return Math.min(s.maxSamples,C.samples)}function _t(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(C){let S=r.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Re(C,S){let z=C.colorSpace,Z=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==fr&&z!==Bs&&($t.getTransfer(z)===he?(Z!==xi||j!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=Pe,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=_t}function XD(e,t){function n(i,s=Bs){let a,r=$t.getTransfer(s);if(i===Ni)return e.UNSIGNED_BYTE;if(i===nd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===id)return e.UNSIGNED_SHORT_5_5_5_1;if(i===z0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===B0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===I0)return e.BYTE;if(i===P0)return e.SHORT;if(i===Zo)return e.UNSIGNED_SHORT;if(i===ed)return e.INT;if(i===Ua)return e.UNSIGNED_INT;if(i===Li)return e.FLOAT;if(i===Jo)return e.HALF_FLOAT;if(i===F0)return e.ALPHA;if(i===H0)return e.RGB;if(i===xi)return e.RGBA;if(i===Ho)return e.DEPTH_COMPONENT;if(i===Qo)return e.DEPTH_STENCIL;if(i===sd)return e.RED;if(i===ad)return e.RED_INTEGER;if(i===V0)return e.RG;if(i===rd)return e.RG_INTEGER;if(i===od)return e.RGBA_INTEGER;if(i===Wc||i===qc||i===Yc||i===Zc)if(r===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ld||i===cd||i===ud||i===hd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ld)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ud)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fd||i===dd||i===pd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===fd||i===dd)return r===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===pd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===md||i===gd||i===vd||i===_d||i===yd||i===xd||i===Sd||i===Md||i===bd||i===Ed||i===Td||i===Ad||i===wd||i===Cd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===md)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_d)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Md)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ed)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Td)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ad)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rd||i===Dd||i===Ud)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Rd)return r===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ud)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nd||i===Ld||i===Od||i===Id)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Nd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ld)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Od)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Id)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var WD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Nc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new rn({vertexShader:WD,fragmentShader:qD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ge(new Os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uv=class extends Cs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new cv,u={},y=n.getContextAttributes(),_=null,v=null,T=[],A=[],w=new Et,R=null,E=new We;E.viewport=new ue;let M=new We;M.viewport=new ue;let L=[E,M],N=new Vf,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=T[K];return $===void 0&&($=new Wo,T[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=T[K];return $===void 0&&($=new Wo,T[K]=$),$.getGripSpace()},this.getHand=function(K){let $=T[K];return $===void 0&&($=new Wo,T[K]=$),$.getHandSpace()};function W(K){let $=A.indexOf(K.inputSource);if($===-1)return;let ht=T[$];ht!==void 0&&(ht.update(K.inputSource,K.frame,c||r),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let K=0;K<T.length;K++){let $=A[K];$!==null&&(A[K]=null,T[K].disconnect($))}F=null,H=null,m.reset();for(let K in u)delete u[K];t.setRenderTarget(_),p=null,f=null,d=null,s=null,v=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,At=null,dt=null;y.depth&&(dt=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ht=y.stencil?Qo:Ho,At=y.stencil?Ko:Ua);let Ht={colorFormat:n.RGBA8,depthFormat:dt,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Qi(f.textureWidth,f.textureHeight,{format:xi,type:Ni,depthTexture:new Uc(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ht={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Qi(p.framebufferWidth,p.framebufferHeight,{format:xi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(K){for(let $=0;$<K.removed.length;$++){let ht=K.removed[$],At=A.indexOf(ht);At>=0&&(A[At]=null,T[At].disconnect(ht))}for(let $=0;$<K.added.length;$++){let ht=K.added[$],At=A.indexOf(ht);if(At===-1){for(let Ht=0;Ht<T.length;Ht++)if(Ht>=A.length){A.push(ht),At=Ht;break}else if(A[Ht]===null){A[Ht]=ht,At=Ht;break}if(At===-1)break}let dt=T[At];dt&&dt.connect(ht)}}let B=new U,it=new U;function rt(K,$,ht){B.setFromMatrixPosition($.matrixWorld),it.setFromMatrixPosition(ht.matrixWorld);let At=B.distanceTo(it),dt=$.projectionMatrix.elements,Ht=ht.projectionMatrix.elements,Pe=dt[14]/(dt[10]-1),D=dt[14]/(dt[10]+1),re=(dt[9]+1)/dt[5],Ot=(dt[9]-1)/dt[5],Mt=(dt[8]-1)/dt[0],vt=(Ht[8]+1)/Ht[0],ve=Pe*Mt,_t=Pe*vt,It=At/(-Mt+vt),Re=It*-Mt;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),dt[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let fe=Pe+It,C=D+It,S=ve-Re,z=_t+(At-Re),Z=re*D/C*fe,j=Ot*D/C*fe;K.projectionMatrix.makePerspective(S,z,Z,j,fe,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pt(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,ht=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),N.near=M.near=E.near=$,N.far=M.far=E.far=ht,(F!==N.near||H!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,H=N.far),N.layers.mask=K.layers.mask|6,E.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;let At=K.parent,dt=N.cameras;pt(N,At);for(let Ht=0;Ht<dt.length;Ht++)pt(dt[Ht],At);dt.length===2?rt(N,E,M):N.projectionMatrix.copy(E.projectionMatrix),Ft(K,N,At)};function Ft(K,$,ht){ht===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=dr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return u[K]};let ae=null;function Me(K,$){if(h=$.getViewerPose(c||r),g=$,h!==null){let ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let At=!1;ht.length!==N.cameras.length&&(N.cameras.length=0,At=!0);for(let D=0;D<ht.length;D++){let re=ht[D],Ot=null;if(p!==null)Ot=p.getViewport(re);else{let vt=d.getViewSubImage(f,re);Ot=vt.viewport,D===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let Mt=L[D];Mt===void 0&&(Mt=new We,Mt.layers.enable(D),Mt.viewport=new ue,L[D]=Mt),Mt.matrix.fromArray(re.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(re.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),D===0&&(N.matrix.copy(Mt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),At===!0&&N.cameras.push(Mt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let D=d.getDepthInformation(ht[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(dt&&dt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<ht.length;D++){let re=ht[D].camera;if(re){let Ot=u[re];Ot||(Ot=new Nc,u[re]=Ot);let Mt=d.getCameraImage(re);Ot.sourceTexture=Mt}}}}for(let ht=0;ht<T.length;ht++){let At=A[ht],dt=T[ht];At!==null&&dt!==void 0&&dt.update(At,$,c||r)}ae&&ae(K,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let Yt=new Rb;Yt.setAnimationLoop(Me),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}},Mr=new vi,YD=new me;function ZD(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,q0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,y,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let y=t.get(u),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,Mr.copy(v),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(YD.makeRotationFromEuler(Mr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let y=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JD(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;i.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let T=_.program;i.updateUBOMapping(y,T);let A=t.render.frame;a[y.id]!==A&&(f(y),a[y.id]=A)}function h(y){let _=d();y.__bindingPointIndex=_;let v=e.createBuffer(),T=y.__size,A=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,T,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],v=y.uniforms,T=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let A=0,w=v.length;A<w;A++){let R=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,M=R.length;E<M;E++){let L=R[E];if(p(L,A,E,T)===!0){let N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],H=0;for(let W=0;W<F.length;W++){let G=F[W],Q=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,N+H,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,N,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,_,v,T){let A=y.value,w=_+"_"+v;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{let R=T[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return T[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(y){let _=y.uniforms,v=0,T=16;for(let w=0,R=_.length;w<R;w++){let E=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,L=E.length;M<L;M++){let N=E[M],F=Array.isArray(N.value)?N.value:[N.value];for(let H=0,W=F.length;H<W;H++){let G=F[H],Q=x(G),B=v%T,it=B%Q.boundary,rt=B+it;v+=it,rt!==0&&T-rt<Q.storage&&(v+=T-rt),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Q.storage}}}let A=v%T;return A>0&&(v+=T-A),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function u(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var Hd=class{constructor(t={}){let{canvas:n=eb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,y=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,T=!1;this._outputColorSpace=Cn;let A=0,w=0,R=null,E=-1,M=null,L=new ue,N=new ue,F=null,H=new Pt(0),W=0,G=n.width,Q=n.height,B=1,it=null,rt=null,pt=new ue(0,0,G,Q),Ft=new ue(0,0,G,Q),ae=!1,Me=new qo,Yt=!1,K=!1,$=new me,ht=new U,At=new ue,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Pe(){return R===null?B:1}let D=i;function re(b,I){return n.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",V,!1),D===null){let I="webgl2";if(D=re(I,b),D===null)throw re(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ot,Mt,vt,ve,_t,It,Re,fe,C,S,z,Z,j,Y,Tt,st,yt,St,tt,ct,Ct,bt,ot,Bt;function O(){Ot=new d3(D),Ot.init(),bt=new XD(D,Ot),Mt=new r3(D,Ot,t,bt),vt=new GD(D,Ot),Mt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),ve=new g3(D),_t=new RD,It=new kD(D,Ot,vt,_t,Mt,bt,ve),Re=new l3(v),fe=new f3(v),C=new MC(D),ot=new s3(D,C),S=new p3(D,C,ve,ot),z=new _3(D,S,C,ve),tt=new v3(D,Mt,It),st=new o3(_t),Z=new CD(v,Re,fe,Ot,Mt,ot,st),j=new ZD(v,_t),Y=new UD,Tt=new zD(Ot),St=new i3(v,Re,fe,vt,z,p,l),yt=new HD(v,z,Mt),Bt=new JD(D,ve,Mt,vt),ct=new a3(D,Ot,ve),Ct=new m3(D,Ot,ve),ve.programs=Z.programs,v.capabilities=Mt,v.extensions=Ot,v.properties=_t,v.renderLists=Y,v.shadowMap=yt,v.state=vt,v.info=ve}O();let et=new uv(v,D);this.xr=et,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(G,Q,!1))},this.getSize=function(b){return b.set(G,Q)},this.setSize=function(b,I,k=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,Q=I,n.width=Math.floor(b*B),n.height=Math.floor(I*B),k===!0&&(n.style.width=b+"px",n.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(G*B,Q*B).floor()},this.setDrawingBufferSize=function(b,I,k){G=b,Q=I,B=k,n.width=Math.floor(b*k),n.height=Math.floor(I*k),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,I,k,X){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,I,k,X),vt.viewport(L.copy(pt).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,I,k,X){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,I,k,X),vt.scissor(N.copy(Ft).multiplyScalar(B).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){vt.setScissorTest(ae=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,k=!0){let X=0;if(b){let P=!1;if(R!==null){let nt=R.texture.format;P=nt===od||nt===rd||nt===ad}if(P){let nt=R.texture.type,ut=nt===Ni||nt===Ua||nt===Zo||nt===Ko||nt===nd||nt===id,xt=St.getClearColor(),gt=St.getClearAlpha(),Ut=xt.r,Lt=xt.g,wt=xt.b;ut?(g[0]=Ut,g[1]=Lt,g[2]=wt,g[3]=gt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ut,x[1]=Lt,x[2]=wt,x[3]=gt,D.clearBufferiv(D.COLOR,0,x))}else X|=D.COLOR_BUFFER_BIT}I&&(X|=D.DEPTH_BUFFER_BIT),k&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",V,!1),St.dispose(),Y.dispose(),Tt.dispose(),_t.dispose(),Re.dispose(),fe.dispose(),z.dispose(),ot.dispose(),Bt.dispose(),Z.dispose(),et.dispose(),et.removeEventListener("sessionstart",Oi),et.removeEventListener("sessionend",dv),Na.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=ve.autoReset,I=yt.enabled,k=yt.autoUpdate,X=yt.needsUpdate,P=yt.type;O(),ve.autoReset=b,yt.enabled=I,yt.autoUpdate=k,yt.needsUpdate=X,yt.type=P}function V(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function q(b){let I=b.target;I.removeEventListener("dispose",q),ft(I)}function ft(b){Rt(b),_t.remove(b)}function Rt(b){let I=_t.get(b).programs;I!==void 0&&(I.forEach(function(k){Z.releaseProgram(k)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,k,X,P,nt){I===null&&(I=dt);let ut=P.isMesh&&P.matrixWorld.determinant()<0,xt=zb(b,I,k,X,P);vt.setMaterial(X,ut);let gt=k.index,Ut=1;if(X.wireframe===!0){if(gt=S.getWireframeAttribute(k),gt===void 0)return;Ut=2}let Lt=k.drawRange,wt=k.attributes.position,Kt=Lt.start*Ut,de=(Lt.start+Lt.count)*Ut;nt!==null&&(Kt=Math.max(Kt,nt.start*Ut),de=Math.min(de,(nt.start+nt.count)*Ut)),gt!==null?(Kt=Math.max(Kt,0),de=Math.min(de,gt.count)):wt!=null&&(Kt=Math.max(Kt,0),de=Math.min(de,wt.count));let ze=de-Kt;if(ze<0||ze===1/0)return;ot.setup(P,X,xt,k,gt);let we,_e=ct;if(gt!==null&&(we=C.get(gt),_e=Ct,_e.setIndex(we)),P.isMesh)X.wireframe===!0?(vt.setLineWidth(X.wireframeLinewidth*Pe()),_e.setMode(D.LINES)):_e.setMode(D.TRIANGLES);else if(P.isLine){let Dt=X.linewidth;Dt===void 0&&(Dt=1),vt.setLineWidth(Dt*Pe()),P.isLineSegments?_e.setMode(D.LINES):P.isLineLoop?_e.setMode(D.LINE_LOOP):_e.setMode(D.LINE_STRIP)}else P.isPoints?_e.setMode(D.POINTS):P.isSprite&&_e.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))_e.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Dt=P._multiDrawStarts,Ne=P._multiDrawCounts,te=P._multiDrawCount,Vn=gt?C.get(gt).bytesPerElement:1,Tr=_t.get(X).currentProgram.getUniforms();for(let Gn=0;Gn<te;Gn++)Tr.setValue(D,"_gl_DrawID",Gn),_e.render(Dt[Gn]/Vn,Ne[Gn])}else if(P.isInstancedMesh)_e.renderInstances(Kt,ze,P.count);else if(k.isInstancedBufferGeometry){let Dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ne=Math.min(k.instanceCount,Dt);_e.renderInstances(Kt,ze,Ne)}else _e.render(Kt,ze)};function jt(b,I,k){b.transparent===!0&&b.side===yi&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,Qc(b,I,k),b.side=ws,b.needsUpdate=!0,Qc(b,I,k),b.side=yi):Qc(b,I,k)}this.compile=function(b,I,k=null){k===null&&(k=b),u=Tt.get(k),u.init(I),_.push(u),k.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),b!==k&&b.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();let X=new Set;return b.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let nt=P.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){let xt=nt[ut];jt(xt,k,P),X.add(xt)}else jt(nt,k,P),X.add(nt)}),u=_.pop(),X},this.compileAsync=function(b,I,k=null){let X=this.compile(b,I,k);return new Promise(P=>{function nt(){if(X.forEach(function(ut){_t.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){P(b);return}setTimeout(nt,10)}Ot.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let kt=null;function ss(b){kt&&kt(b)}function Oi(){Na.stop()}function dv(){Na.start()}let Na=new Rb;Na.setAnimationLoop(ss),typeof self<"u"&&Na.setContext(self),this.setAnimationLoop=function(b){kt=b,et.setAnimationLoop(b),b===null?Na.stop():Na.start()},et.addEventListener("sessionstart",Oi),et.addEventListener("sessionend",dv),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,R),u=Tt.get(b,_.length),u.init(I),_.push(u),$.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Me.setFromProjectionMatrix($,Di,I.reversedDepth),K=this.localClippingEnabled,Yt=st.init(this.clippingPlanes,K),m=Y.get(b,y.length),m.init(),y.push(m),et.enabled===!0&&et.isPresenting===!0){let nt=v.xr.getDepthSensingMesh();nt!==null&&kd(nt,I,-1/0,v.sortObjects)}kd(b,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,rt),Ht=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ht&&St.addToRenderList(m,b),this.info.render.frame++,Yt===!0&&st.beginShadows();let k=u.state.shadowsArray;yt.render(k,b,I),Yt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,P=m.transmissive;if(u.setupLights(),I.isArrayCamera){let nt=I.cameras;if(P.length>0)for(let ut=0,xt=nt.length;ut<xt;ut++){let gt=nt[ut];mv(X,P,b,gt)}Ht&&St.render(b);for(let ut=0,xt=nt.length;ut<xt;ut++){let gt=nt[ut];pv(m,b,gt,gt.viewport)}}else P.length>0&&mv(X,P,b,I),Ht&&St.render(b),pv(m,b,I);R!==null&&w===0&&(It.updateMultisampleRenderTarget(R),It.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,I),ot.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(u=_[_.length-1],Yt===!0&&st.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function kd(b,I,k,X){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Me.intersectsSprite(b)){X&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4($);let ut=z.update(b),xt=b.material;xt.visible&&m.push(b,ut,xt,k,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Me.intersectsObject(b))){let ut=z.update(b),xt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),At.copy(ut.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4($)),Array.isArray(xt)){let gt=ut.groups;for(let Ut=0,Lt=gt.length;Ut<Lt;Ut++){let wt=gt[Ut],Kt=xt[wt.materialIndex];Kt&&Kt.visible&&m.push(b,ut,Kt,k,At.z,wt)}}else xt.visible&&m.push(b,ut,xt,k,At.z,null)}}let nt=b.children;for(let ut=0,xt=nt.length;ut<xt;ut++)kd(nt[ut],I,k,X)}function pv(b,I,k,X){let P=b.opaque,nt=b.transmissive,ut=b.transparent;u.setupLightsView(k),Yt===!0&&st.setGlobalState(v.clippingPlanes,k),X&&vt.viewport(L.copy(X)),P.length>0&&Kc(P,I,k),nt.length>0&&Kc(nt,I,k),ut.length>0&&Kc(ut,I,k),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function mv(b,I,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Qi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Jo:Ni,minFilter:Da,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let nt=u.state.transmissionRenderTarget[X.id],ut=X.viewport||L;nt.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);let xt=v.getRenderTarget(),gt=v.getActiveCubeFace(),Ut=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(H),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ht&&St.render(k);let Lt=v.toneMapping;v.toneMapping=zs;let wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),Yt===!0&&st.setGlobalState(v.clippingPlanes,X),Kc(b,k,X),It.updateMultisampleRenderTarget(nt),It.updateRenderTargetMipmap(nt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let de=0,ze=I.length;de<ze;de++){let we=I[de],_e=we.object,Dt=we.geometry,Ne=we.material,te=we.group;if(Ne.side===yi&&_e.layers.test(X.layers)){let Vn=Ne.side;Ne.side=pn,Ne.needsUpdate=!0,gv(_e,k,X,Dt,Ne,te),Ne.side=Vn,Ne.needsUpdate=!0,Kt=!0}}Kt===!0&&(It.updateMultisampleRenderTarget(nt),It.updateRenderTargetMipmap(nt))}v.setRenderTarget(xt,gt,Ut),v.setClearColor(H,W),wt!==void 0&&(X.viewport=wt),v.toneMapping=Lt}function Kc(b,I,k){let X=I.isScene===!0?I.overrideMaterial:null;for(let P=0,nt=b.length;P<nt;P++){let ut=b[P],xt=ut.object,gt=ut.geometry,Ut=ut.group,Lt=ut.material;Lt.allowOverride===!0&&X!==null&&(Lt=X),xt.layers.test(k.layers)&&gv(xt,I,k,gt,Lt,Ut)}}function gv(b,I,k,X,P,nt){b.onBeforeRender(v,I,k,X,P,nt),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),P.onBeforeRender(v,I,k,X,b,nt),P.transparent===!0&&P.side===yi&&P.forceSinglePass===!1?(P.side=pn,P.needsUpdate=!0,v.renderBufferDirect(k,I,X,P,b,nt),P.side=ws,P.needsUpdate=!0,v.renderBufferDirect(k,I,X,P,b,nt),P.side=yi):v.renderBufferDirect(k,I,X,P,b,nt),b.onAfterRender(v,I,k,X,P,nt)}function Qc(b,I,k){I.isScene!==!0&&(I=dt);let X=_t.get(b),P=u.state.lights,nt=u.state.shadowsArray,ut=P.state.version,xt=Z.getParameters(b,P.state,nt,I,k),gt=Z.getProgramCacheKey(xt),Ut=X.programs;X.environment=b.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(b.isMeshStandardMaterial?fe:Re).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",q),Ut=new Map,X.programs=Ut);let Lt=Ut.get(gt);if(Lt!==void 0){if(X.currentProgram===Lt&&X.lightsStateVersion===ut)return _v(b,xt),Lt}else xt.uniforms=Z.getUniforms(b),b.onBeforeCompile(xt,v),Lt=Z.acquireProgram(xt,gt),Ut.set(gt,Lt),X.uniforms=xt.uniforms;let wt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=st.uniform),_v(b,xt),X.needsLights=Fb(b),X.lightsStateVersion=ut,X.needsLights&&(wt.ambientLightColor.value=P.state.ambient,wt.lightProbe.value=P.state.probe,wt.directionalLights.value=P.state.directional,wt.directionalLightShadows.value=P.state.directionalShadow,wt.spotLights.value=P.state.spot,wt.spotLightShadows.value=P.state.spotShadow,wt.rectAreaLights.value=P.state.rectArea,wt.ltc_1.value=P.state.rectAreaLTC1,wt.ltc_2.value=P.state.rectAreaLTC2,wt.pointLights.value=P.state.point,wt.pointLightShadows.value=P.state.pointShadow,wt.hemisphereLights.value=P.state.hemi,wt.directionalShadowMap.value=P.state.directionalShadowMap,wt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,wt.spotShadowMap.value=P.state.spotShadowMap,wt.spotLightMatrix.value=P.state.spotLightMatrix,wt.spotLightMap.value=P.state.spotLightMap,wt.pointShadowMap.value=P.state.pointShadowMap,wt.pointShadowMatrix.value=P.state.pointShadowMatrix),X.currentProgram=Lt,X.uniformsList=null,Lt}function vv(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=el.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function _v(b,I){let k=_t.get(b);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function zb(b,I,k,X,P){I.isScene!==!0&&(I=dt),It.resetTextureUnits();let nt=I.fog,ut=X.isMeshStandardMaterial?I.environment:null,xt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fr,gt=(X.isMeshStandardMaterial?fe:Re).get(X.envMap||ut),Ut=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,de=!!k.morphAttributes.color,ze=zs;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ze=v.toneMapping);let we=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=we!==void 0?we.length:0,Dt=_t.get(X),Ne=u.state.lights;if(Yt===!0&&(K===!0||b!==M)){let Sn=b===M&&X.id===E;st.setState(X,b,Sn)}let te=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ne.state.version||Dt.outputColorSpace!==xt||P.isBatchedMesh&&Dt.batching===!1||!P.isBatchedMesh&&Dt.batching===!0||P.isBatchedMesh&&Dt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Dt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Dt.instancing===!1||!P.isInstancedMesh&&Dt.instancing===!0||P.isSkinnedMesh&&Dt.skinning===!1||!P.isSkinnedMesh&&Dt.skinning===!0||P.isInstancedMesh&&Dt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Dt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Dt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Dt.instancingMorph===!1&&P.morphTexture!==null||Dt.envMap!==gt||X.fog===!0&&Dt.fog!==nt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==st.numPlanes||Dt.numIntersection!==st.numIntersection)||Dt.vertexAlphas!==Ut||Dt.vertexTangents!==Lt||Dt.morphTargets!==wt||Dt.morphNormals!==Kt||Dt.morphColors!==de||Dt.toneMapping!==ze||Dt.morphTargetsCount!==_e)&&(te=!0):(te=!0,Dt.__version=X.version);let Vn=Dt.currentProgram;te===!0&&(Vn=Qc(X,I,P));let Tr=!1,Gn=!1,al=!1,Le=Vn.getUniforms(),si=Dt.uniforms;if(vt.useProgram(Vn.program)&&(Tr=!0,Gn=!0,al=!0),X.id!==E&&(E=X.id,Gn=!0),Tr||M!==b){vt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Le.setValue(D,"projectionMatrix",b.projectionMatrix),Le.setValue(D,"viewMatrix",b.matrixWorldInverse);let Un=Le.map.cameraPosition;Un!==void 0&&Un.setValue(D,ht.setFromMatrixPosition(b.matrixWorld)),Mt.logarithmicDepthBuffer&&Le.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Le.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Gn=!0,al=!0)}if(P.isSkinnedMesh){Le.setOptional(D,P,"bindMatrix"),Le.setOptional(D,P,"bindMatrixInverse");let Sn=P.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Le.setValue(D,"boneTexture",Sn.boneTexture,It))}P.isBatchedMesh&&(Le.setOptional(D,P,"batchingTexture"),Le.setValue(D,"batchingTexture",P._matricesTexture,It),Le.setOptional(D,P,"batchingIdTexture"),Le.setValue(D,"batchingIdTexture",P._indirectTexture,It),Le.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&Le.setValue(D,"batchingColorTexture",P._colorsTexture,It));let ai=k.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&tt.update(P,k,Vn),(Gn||Dt.receiveShadow!==P.receiveShadow)&&(Dt.receiveShadow=P.receiveShadow,Le.setValue(D,"receiveShadow",P.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(si.envMap.value=gt,si.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&I.environment!==null&&(si.envMapIntensity.value=I.environmentIntensity),Gn&&(Le.setValue(D,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Bb(si,al),nt&&X.fog===!0&&j.refreshFogUniforms(si,nt),j.refreshMaterialUniforms(si,X,B,Q,u.state.transmissionRenderTarget[b.id]),el.upload(D,vv(Dt),si,It)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(el.upload(D,vv(Dt),si,It),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Le.setValue(D,"center",P.center),Le.setValue(D,"modelViewMatrix",P.modelViewMatrix),Le.setValue(D,"normalMatrix",P.normalMatrix),Le.setValue(D,"modelMatrix",P.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Sn=X.uniformsGroups;for(let Un=0,Xd=Sn.length;Un<Xd;Un++){let La=Sn[Un];Bt.update(La,Vn),Bt.bind(La,Vn)}}return Vn}function Bb(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Fb(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,I,k){let X=_t.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),_t.get(b.texture).__webglTexture=I,_t.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:k,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let k=_t.get(b);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};let Hb=D.createFramebuffer();this.setRenderTarget=function(b,I=0,k=0){R=b,A=I,w=k;let X=!0,P=null,nt=!1,ut=!1;if(b){let gt=_t.get(b);if(gt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(gt.__webglFramebuffer===void 0)It.setupRenderTarget(b);else if(gt.__hasExternalTextures)It.rebindTextures(b,_t.get(b.texture).__webglTexture,_t.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let wt=b.depthTexture;if(gt.__boundDepthTexture!==wt){if(wt!==null&&_t.has(wt)&&(b.width!==wt.image.width||b.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(b)}}let Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);let Lt=_t.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[I])?P=Lt[I][k]:P=Lt[I],nt=!0):b.samples>0&&It.useMultisampledRTT(b)===!1?P=_t.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?P=Lt[k]:P=Lt,L.copy(b.viewport),N.copy(b.scissor),F=b.scissorTest}else L.copy(pt).multiplyScalar(B).floor(),N.copy(Ft).multiplyScalar(B).floor(),F=ae;if(k!==0&&(P=Hb),vt.bindFramebuffer(D.FRAMEBUFFER,P)&&X&&vt.drawBuffers(b,P),vt.viewport(L),vt.scissor(N),vt.setScissorTest(F),nt){let gt=_t.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,k)}else if(ut){let gt=I;for(let Ut=0;Ut<b.textures.length;Ut++){let Lt=_t.get(b.textures[Ut]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ut,Lt.__webglTexture,k,gt)}}else if(b!==null&&k!==0){let gt=_t.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(b,I,k,X,P,nt,ut,xt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){vt.bindFramebuffer(D.FRAMEBUFFER,gt);try{let Ut=b.textures[xt],Lt=Ut.format,wt=Ut.type;if(!Mt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-X&&k>=0&&k<=b.height-P&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xt),D.readPixels(I,k,X,P,bt.convert(Lt),bt.convert(wt),nt))}finally{let Ut=R!==null?_t.get(R).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,I,k,X,P,nt,ut,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt)if(I>=0&&I<=b.width-X&&k>=0&&k<=b.height-P){vt.bindFramebuffer(D.FRAMEBUFFER,gt);let Ut=b.textures[xt],Lt=Ut.format,wt=Ut.type;if(!Mt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Kt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xt),D.readPixels(I,k,X,P,bt.convert(Lt),bt.convert(wt),0);let de=R!==null?_t.get(R).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,de);let ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await nb(D,ze,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Kt),D.deleteSync(ze),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,k=0){let X=Math.pow(2,-k),P=Math.floor(b.image.width*X),nt=Math.floor(b.image.height*X),ut=I!==null?I.x:0,xt=I!==null?I.y:0;It.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ut,xt,P,nt),vt.unbindTexture()};let Vb=D.createFramebuffer(),Gb=D.createFramebuffer();this.copyTextureToTexture=function(b,I,k=null,X=null,P=0,nt=null){nt===null&&(P!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=P,P=0):nt=0);let ut,xt,gt,Ut,Lt,wt,Kt,de,ze,we=b.isCompressedTexture?b.mipmaps[nt]:b.image;if(k!==null)ut=k.max.x-k.min.x,xt=k.max.y-k.min.y,gt=k.isBox3?k.max.z-k.min.z:1,Ut=k.min.x,Lt=k.min.y,wt=k.isBox3?k.min.z:0;else{let ai=Math.pow(2,-P);ut=Math.floor(we.width*ai),xt=Math.floor(we.height*ai),b.isDataArrayTexture?gt=we.depth:b.isData3DTexture?gt=Math.floor(we.depth*ai):gt=1,Ut=0,Lt=0,wt=0}X!==null?(Kt=X.x,de=X.y,ze=X.z):(Kt=0,de=0,ze=0);let _e=bt.convert(I.format),Dt=bt.convert(I.type),Ne;I.isData3DTexture?(It.setTexture3D(I,0),Ne=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(It.setTexture2DArray(I,0),Ne=D.TEXTURE_2D_ARRAY):(It.setTexture2D(I,0),Ne=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let te=D.getParameter(D.UNPACK_ROW_LENGTH),Vn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tr=D.getParameter(D.UNPACK_SKIP_PIXELS),Gn=D.getParameter(D.UNPACK_SKIP_ROWS),al=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wt);let Le=b.isDataArrayTexture||b.isData3DTexture,si=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let ai=_t.get(b),Sn=_t.get(I),Un=_t.get(ai.__renderTarget),Xd=_t.get(Sn.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Un.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xd.__webglFramebuffer);for(let La=0;La<gt;La++)Le&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(b).__webglTexture,P,wt+La),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(I).__webglTexture,nt,ze+La)),D.blitFramebuffer(Ut,Lt,ut,xt,Kt,de,ut,xt,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(P!==0||b.isRenderTargetTexture||_t.has(b)){let ai=_t.get(b),Sn=_t.get(I);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Vb),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gb);for(let Un=0;Un<gt;Un++)Le?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ai.__webglTexture,P,wt+Un):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ai.__webglTexture,P),si?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Sn.__webglTexture,nt,ze+Un):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Sn.__webglTexture,nt),P!==0?D.blitFramebuffer(Ut,Lt,ut,xt,Kt,de,ut,xt,D.COLOR_BUFFER_BIT,D.NEAREST):si?D.copyTexSubImage3D(Ne,nt,Kt,de,ze+Un,Ut,Lt,ut,xt):D.copyTexSubImage2D(Ne,nt,Kt,de,Ut,Lt,ut,xt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else si?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ne,nt,Kt,de,ze,ut,xt,gt,_e,Dt,we.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Ne,nt,Kt,de,ze,ut,xt,gt,_e,we.data):D.texSubImage3D(Ne,nt,Kt,de,ze,ut,xt,gt,_e,Dt,we):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,Kt,de,ut,xt,_e,Dt,we.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,Kt,de,we.width,we.height,_e,we.data):D.texSubImage2D(D.TEXTURE_2D,nt,Kt,de,ut,xt,_e,Dt,we);D.pixelStorei(D.UNPACK_ROW_LENGTH,te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,al),nt===0&&I.generateMipmaps&&D.generateMipmap(Ne),vt.unbindTexture()},this.initRenderTarget=function(b){_t.get(b).__webglFramebuffer===void 0&&It.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?It.setTextureCube(b,0):b.isData3DTexture?It.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?It.setTexture2DArray(b,0):It.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,vt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),n.unpackColorSpace=$t._getUnpackColorSpace()}};function Ob(){let e=new Rn,t=new Rn,n=[],i=[],s=[],a=new Ie({color:"#e9dec9",roughness:.66}),r=new Ie({color:"#fff3df",roughness:.7}),o=new Ie({color:"#cc918e",roughness:.76}),l=new Ie({color:"#5b4240",roughness:.5}),c=new Is({color:"#162b31",roughness:.12,clearcoat:1}),h=new Ie({color:"#487f80",roughness:.28,metalness:.2}),d=new Us({color:"#fffcf1"}),f=new Ie({color:"#578b8a",roughness:.78}),p=new Ie({color:"#b47853",roughness:.72}),g=new Ie({color:"#cdbb83",roughness:.32,metalness:.65}),x=new mr(1,48,32);function m(N,F,H,W,G=e){let Q=new ge(N,F);return Q.position.set(...H),W&&Q.scale.set(...W),G.add(Q),Q}function u(N,F,H,W=e){return m(new zc(new Ls(N.map(G=>new U(...G))),24,F,8,!1),H,[0,0,0],null,W)}let y=x.clone(),_=y.attributes.position;for(let N=0;N<_.count;N++){let F=_.getX(N),H=_.getY(N),W=_.getZ(N),G=1-.23*H;_.setXYZ(N,F*.61*G,H*.74,W*.49*G)}y.computeVertexNormals(),m(y,a,[0,.73,0]),m(x,r,[0,.65,.405],[.41,.5,.13]),t.position.set(0,1.55,.055),e.add(t);let v=x.clone(),T=v.attributes.position;for(let N=0;N<T.count;N++){let F=T.getX(N),H=T.getY(N),W=T.getZ(N),G=1+.12*Math.exp(-Math.pow((H+.25)*2,2));T.setXYZ(N,F*.68*G,H*.61,W*.55*(1-.07*H))}v.computeVertexNormals(),m(v,a,[0,0,0],null,t);function A(N=!1){let F=[],H=[];for(let B=0;B<=32;B++){let it=B/32,rt=Math.pow(Math.sin(Math.PI*it),.68)*(N?.105:.178);for(let pt=0;pt<=20;pt++){let Ft=pt/20*Math.PI*2;F.push(Math.cos(Ft)*rt+.07*it*it,it*(N?.87:1.1),Math.sin(Ft)*rt*.51+Math.sin(it*Math.PI*.7)*.16+(N?.048:0))}}for(let B=0;B<32;B++)for(let it=0;it<20;it++){let rt=B*21+it,pt=rt+20+1;H.push(rt,pt,rt+1,pt,pt+1,rt+1)}let Q=new Ye;return Q.setAttribute("position",new Se(F,3)),Q.setIndex(H),Q.computeVertexNormals(),Q}for(let N of[-1,1]){let F=new Rn;F.position.set(N*.36,.44,-.02),F.rotation.z=-N*.13,t.add(F),n.push(F),m(A(),a,[0,0,0],null,F),m(A(!0),o,[0,.1,.04],[.82,1,.24],F),m(x,r,[N*.19,-.22,.47],[.23,.15,.12],t);let H=new Rn;H.position.set(N*.265,.045,.49),H.rotation.y=N*.25,t.add(H),s.push(H),m(x,l,[0,0,-.01],[.123,.156,.062],H),m(x,c,[0,0,.015],[.103,.134,.061],H),m(x,h,[0,-.012,.069],[.065,.078,.017],H),m(x,c,[0,.007,.083],[.043,.061,.012],H),m(x,d,[-.027,.053,.09],[.025,.032,.008],H),m(x,d,[.025,-.04,.09],[.01,.014,.006],H),u([[N*.36,.26,.4],[N*.29,.29,.45],[N*.22,.28,.46]],.014,a,t),m(x,o,[N*.47,-.17,.39],[.075,.036,.014],t);for(let B=0;B<3;B++)m(x,l,[N*(.28+B*.04),-.21+B%2*.04,.575-B*.014],[.008,.008,.006],t);let W=m(x,a,[N*.43,.045,.3],[.27,.18,.4]);W.rotation.y=N*.16;for(let B=0;B<2;B++)u([[N*.43+(B-.5)*.09,.165,.51],[N*.43+(B-.5)*.09,.17,.59],[N*.43+(B-.5)*.09,.12,.65]],.006,l);let G=new Rn;G.position.set(N*.56,.95,.015),e.add(G),i.push(G);let Q=m(x,a,[N*.03,-.22,.08],[.17,.34,.2],G);Q.rotation.x=-.16,m(x,r,[N*.04,-.45,.13],[.14,.15,.17],G),u([[N*.35,1.15,-.19],[N*.49,.9,.27],[N*.44,.43,.3]],.045,p)}let w=m(x,o,[0,-.19,.606],[.065,.04,.037],t);w.rotation.z=Math.PI,u([[0,-.22,.6],[0,-.28,.588],[-.06,-.3,.57]],.008,l,t),u([[0,-.28,.588],[.06,-.3,.57]],.008,l,t),m(x,a,[0,.43,-.54],[.23,.23,.22]);let R=m(new es(.37,.1,12,64),f,[0,1.21,.035],[1,1,.72]);R.rotation.x=Math.PI/2,m(x,f,[.29,1.13,.29],[.14,.13,.12]);let E=m(x,f,[.36,.94,.35],[.105,.27,.055]);E.rotation.z=-.2,u([[.4,1.08,.41],[.43,.94,.41],[.44,.75,.38]],.007,d),m(x,p,[0,.8,-.47],[.41,.43,.22]),m(x,g,[0,.86,-.686],[.09,.075,.018]);let M=m(new ts(.085,.085,.022,24),g,[.29,.88,.44]);M.rotation.x=Math.PI/2;let L=-10;return{root:e,greet(N){L=N},update(N,F,H,W,G){e.scale.y=1+(G?0:Math.sin(N*1.7)*.013),t.rotation.y=F*.18,t.rotation.x=H*.08-W*.48,t.rotation.z=Math.sin(N*.7)*.018;let Q=N%5.6,B=Q>5.35?Math.max(.08,Math.abs(Q-5.475)/.125):1;s.forEach(it=>it.scale.y=B),n[0].rotation.z=.15+Math.sin(N*1.8)*.025+W*.23,n[1].rotation.z=-.13+Math.sin(N*1.8+.5)*.03-W*.24,n[1].rotation.x=.09+W*.4,n[0].rotation.x=W*.35,i[0].rotation.z=.12+W*1.1,i[1].rotation.z=-.12-W*1.1-(N-L<2?.6+Math.sin((N-L)*11)*.25:0)}}}function Ib(){let e=new Ns,t=new We(55,1,.1,160);t.position.z=25;let n={time:{value:0},resolution:{value:new Et(1,1)},center:{value:new Et(.68,.5)},radius:{value:.32},tilt:{value:0},pressed:{value:0}},i="uniform vec2 resolution,center;uniform float radius,tilt;vec2 apertureUV(){vec2 p=(gl_FragCoord.xy/resolution-center)*vec2(resolution.x/resolution.y,1.)/radius;float c=cos(tilt),s=sin(tilt);return mat2(c,-s,s,c)*p/vec2(1.,.84);} ",s=new rn({depthWrite:!1,depthTest:!1,uniforms:n,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:i+`
    uniform float time,pressed;varying vec2 uvv;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
    float cloud(vec2 p){return noise(p)*.55+noise(p*2.1)*.28+noise(p*4.3)*.14;}
    void main(){vec2 q=apertureUV();float r=length(q),a=atan(q.y,q.x);vec3 col=vec3(.008,.014,.033);
      vec2 grid=uvv*vec2(180.,120.);float h=hash(floor(grid));float dotstar=pow(max(0.,1.-length(fract(grid)-.5)*2.),18.);col+=vec3(.5,.65,.85)*dotstar*step(.986,h)*(.35+.15*sin(time+h*70.));
      if(r<1.04){vec2 p=q+vec2((center.x-.5)*.65,(center.y-.5)*.3);float rr=length(p),aa=atan(p.y,p.x*.6);vec2 sw=vec2(cos(aa+rr*2.8),sin(aa+rr*2.8))*rr;
        float n=cloud(sw*3.7+vec2(time*.013,0.)),vein=cloud(sw*8.-time*.009);float arms=pow(.5+.5*sin(aa*3.+rr*10.+n*4.),4.)*exp(-rr*1.3);
        vec3 neb=mix(vec3(.035,.12,.28),vec3(.34,.09,.30),n);neb*=n*(.65+arms*2.4);neb+=vec3(.2,.42,.68)*arms*vein*.75;
        neb+=vec3(.96,.66,.34)*exp(-length(p*vec2(1.,2.8))*10.)*.8;
        col=mix(col,neb+vec3(.004,.007,.022),1.-smoothstep(.97,1.02,r));}
      float ring=exp(-abs(r-1.)*230.);float halo=exp(-abs(r-1.)*22.);float light=.5+.5*cos(a+time*.18);col+=mix(vec3(.36,.36,.95),vec3(.5,.95,1.),light)*(ring*1.6+halo*.14);
      col+=vec3(.8,.86,1.)*exp(-abs(r-1.035)*380.)*(.2+.8*pow(max(0.,cos(a-.5)),8.));
      float spark=pow(max(0.,sin(a*83.+time*1.4)),24.);col+=vec3(.52,.82,1.)*spark*exp(-abs(r-1.07)*95.)*.4;
      col+=vec3(.35,.6,1.)*pressed*exp(-abs(r-1.-pressed*.3)*45.)*.2;
      gl_FragColor=vec4(col,1.);
    }`}),a=new ge(new Os(2,2),s);a.frustumCulled=!1,a.renderOrder=-10,e.add(a);let r=18e3,o=new Float32Array(r*3),l=new Float32Array(r*3),c=new Float32Array(r),h=new Pt;for(let v=0;v<r;v++){let T=Math.pow(Math.random(),.65)*22,A=v%4*Math.PI/2+T*.23+(Math.random()-.5)*.4;o[v*3]=Math.cos(A)*T,o[v*3+1]=(Math.random()-.5)*(.45+T*.06),o[v*3+2]=Math.sin(A)*T,v>r*.8&&(o[v*3]=(Math.random()-.5)*65,o[v*3+1]=(Math.random()-.5)*30,o[v*3+2]=(Math.random()-.5)*70),h.setHSL(Math.random()<.65?.57:.08+Math.random()*.05,.2+Math.random()*.3,.65+Math.random()*.28),h.toArray(l,v*3),c[v]=.7+Math.random()*1.6}let d=new Ye;d.setAttribute("position",new qe(o,3)),d.setAttribute("color",new qe(l,3)),d.setAttribute("size",new qe(c,1));let f=new rn({uniforms:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ra,vertexShader:"attribute float size;uniform float time;varying vec3 tint;void main(){tint=color;vec4 v=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*v;gl_PointSize=clamp(size*45./max(1.,-v.z),.8,4.5);}",fragmentShader:i+"varying vec3 tint;void main(){float r=length(apertureUV());if(r>.975)discard;float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.04,d);gl_FragColor=vec4(tint,a*.8);}"}),p=new pr(d,f);p.rotation.set(.9,0,-.25),e.add(p);let g=.68,x=.5,m=.68,u=.5,y=0,_=matchMedia("(prefers-reduced-motion: reduce)");return{scene:e,camera:t,move(v,T){m=v,u=1-T},press(v){y=v?1:0},resize(v,T,A){t.aspect=v/T,t.updateProjectionMatrix(),n.resolution.value.set(v*A,T*A),n.radius.value=v/T<.9?.34:.36},update(v,T){let A=1-Math.exp(-T*9);g+=(m-g)*A,x+=(u-x)*A,n.center.value.set(g,x),n.tilt.value=(g-.5)*.38,n.time.value=_.matches?0:v,n.pressed.value+=(y-n.pressed.value)*A,t.position.x=(g-.5)*5,t.position.y=(x-.5)*3,t.position.z=25-n.pressed.value*3,t.lookAt(0,0,0),p.rotation.y=_.matches?0:v*.014},dispose(){d.dispose(),f.dispose(),a.geometry.dispose(),s.dispose()}}}var Gd=class extends Ns{constructor(){super();let t=new Dn;t.deleteAttribute("uv");let n=new Ie({side:pn}),i=new Ie,s=new Ca(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new ge(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new Dc(t,i,6),o=new Qe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new ge(t,sl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ge(t,sl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ge(t,sl(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ge(t,sl(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new ge(t,sl(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new ge(t,sl(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function sl(e){return new Bc({color:0,emissive:16777215,emissiveIntensity:e})}function KD(){let e=(0,ii.useRef)(null),[t,n]=(0,ii.useState)("A LITTLE CURIOSITY. AN INFINITE UNIVERSE.");return(0,ii.useEffect)(()=>{let i=e.current,s=document.getElementById("threshold"),a;try{a=new Hd({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{n("YOUR ADVENTURE BEGINS WITH A TOUCH.");return}a.setPixelRatio(Math.min(devicePixelRatio,1.4)),a.outputColorSpace=Cn,a.toneMapping=Qf,a.toneMappingExposure=.95,a.shadowMap.enabled=!1,a.shadowMap.type=Gf,a.domElement.setAttribute("aria-label","A little moon creature in a quiet room, looking toward a luminous doorway. Drag to look around; touch the creature to greet it."),i.appendChild(a.domElement);let r=new Ns;r.background=new Pt("#101c22"),r.fog=new Cc("#101c22",.037);let o=new We(40,1,.1,90);o.position.set(0,2.1,12);let l=new nl(a),c=new Gd,h=l.fromScene(c,.04);r.environment=h.texture,c.dispose(),l.dispose();let d=new Hc("#b9e6ed","#444337",1.5);r.add(d);let f=new Vc("#e6faff",65,25,.6,.8,1.4);f.position.set(4,6,-4),f.target.position.set(2,-1,1),f.castShadow=!0,f.shadow.mapSize.set(1024,1024),f.shadow.bias=-5e-4,r.add(f,f.target);let p=new Ca("#ffb786",22,14,2);p.position.set(-3,2,3),r.add(p);let g=new Ca("#a0ecff",45,13,2);g.position.set(4,2,-3),r.add(g);let x=new Ie({color:"#33474b",roughness:.84}),m=new Ie({color:"#34464a",roughness:.34,metalness:.22}),u=new Is({color:"#e7e2ce",roughness:.28,clearcoat:.55,clearcoatRoughness:.28}),y=new Is({color:"#132529",roughness:.12,clearcoat:1}),_=new Ie({color:"#d79580",roughness:.5}),v=new Ie({color:"#8aafaf",metalness:.72,roughness:.25}),T=new Is({color:"#b9f0e6",roughness:.14,metalness:.3,clearcoat:1}),A=new Us({color:"#d9ffff"});function w(V,q,ft,Rt,jt=r){let kt=new ge(V,q);return kt.position.set(...ft),Rt&&kt.scale.set(...Rt),kt.castShadow=!0,kt.receiveShadow=!0,jt.add(kt),kt}let R=new mr(1,40,28),E=w(new Dn(30,.3,35),m,[0,-1.75,-6]);w(new Dn(16,14,.4),x,[-7.4,3,-6]),w(new Dn(8,14,.4),x,[9.6,3,-6]),w(new Dn(5,5,.4),x,[3.1,8.3,-6]),w(new Dn(.35,14,25),x,[10,3,-6]);let M=new Rn;M.position.set(3.1,2,-6),r.add(M);let L=w(new es(2.38,.12,16,88),v,[0,0,0],[1,1.45,1],M);w(new es(2.22,.025,8,88),A,[0,0,-.02],[1,1.45,1],M);for(let V=1;V<8;V++)w(new es(2.24,.035,8,64),V%2?v:A,[0,0,-V*2],[1,1.45,1],M);let N=new rn({transparent:!0,depthWrite:!1,side:yi,blending:Ra,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float time;void main(){float edge=pow(sin(vUv.x*3.14159),3.);float rays=.85+.15*sin(vUv.x*65.+time*.3);float a=edge*rays*(1.-vUv.y)*.105;gl_FragColor=vec4(.65,.87,1.,a);}"}),F=w(new Lc(2.7,9,48,1,!0),N,[3.1,2,-1]);F.rotation.x=-.63,F.castShadow=!1,w(new ts(1.5,1.6,.12,64),v,[2,-1.53,1]),w(new ts(1.43,1.43,.14,64),new Ie({color:"#53666a",roughness:.72}),[2,-1.43,1]);let H=new Ie({color:"#b3a28c",roughness:.85});for(let V=0;V<3;V++){let q=w(new Dn(.95,.14,.65),V===1?v:H,[4.2,-1.5+V*.15,1.7]);q.rotation.y=V*.17-.2}w(new ts(.23,.22,.48,32),u,[3.8,-1.35,2.6]);let W=w(new es(.14,.045,10,32),u,[4.04,-1.3,2.6]),G=w(new Pc(.27,.075,80,12),T,[4.2,-.7,1.7]),Q=Ob(),B=Q.root;B.position.set(2,-1.28,1),r.add(B);let it=new rn({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 v;void main(){float a=exp(-dot(v-.5,v-.5)*24.)*.43;gl_FragColor=vec4(.025,.04,.045,a);}"}),rt=w(new Os(2.8,2.8),it,[2,-1.34,1]);rt.rotation.x=-Math.PI/2;let pt=new Float32Array(500*3);for(let V=0;V<500;V++)pt[V*3]=(Math.random()-.5)*24,pt[V*3+1]=Math.random()*13-1.3,pt[V*3+2]=-Math.random()*34+3;let Ft=new Ye;Ft.setAttribute("position",new qe(pt,3));let ae=new rn({transparent:!0,depthWrite:!1,blending:Ra,uniforms:{time:{value:0}},vertexShader:"uniform float time;varying float a;void main(){vec3 p=position;p.y+=sin(time*.25+position.x)*.12;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(22./-mv.z,1.,4.);a=.4+.4*sin(time+position.z*3.);}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.76,.9,1.,smoothstep(.5,.05,d)*a);}"}),Me=new pr(Ft,ae);r.add(Me);let Yt=matchMedia("(prefers-reduced-motion: reduce)"),K=document.getElementById("cosmicWorld"),$=document.getElementById("lensScene"),ht=document.createElement("div");ht.className="voyager-flight",document.body.appendChild(ht);let At=null,dt="home",Ht=0,Pe=0,D=null,re=0,Ot=0,Mt=null,vt=null,ve=null,_t=!1,It=0,Re=0,fe=0,C=!1,S=new Gc,z=new Et,Z=new U,j=new U,Y=new Ls([new U(2,-1.28,1),new U(2.2,.8,0),new U(3.1,2,-6),new U(3.1,2.4,-26)]),Tt=new Ls([new U(0,2.1,12),new U(1.8,2.5,7),new U(3.1,2.3,-1),new U(3.1,2.4,-20)]),st=()=>{let V=s.clientWidth,q=s.clientHeight;if(!V||!q)return;let ft=Math.max(1,Math.min(devicePixelRatio,1.6,Math.sqrt(24e5/(V*q))));a.setPixelRatio(ft),a.setSize(V,q),o.aspect=V/q,o.updateProjectionMatrix(),At?.resize(V,q,ft)},yt=new ResizeObserver(st);yt.observe(s),st();function St(){if(Mt!==null)return;let V=s.classList.contains("is-active")?"home":$.classList.contains("is-active")?"cosmos":"idle";V!==dt&&(dt=V,dt==="home"&&(i.appendChild(a.domElement),a.domElement.style.opacity="1",n("A LITTLE CURIOSITY. AN INFINITE UNIVERSE.")),dt==="cosmos"&&(At??(At=Ib()),K.appendChild(a.domElement),a.domElement.style.opacity="1",st())),O()}let tt=V=>{Ht=V.clientX/innerWidth*2-1,Pe=V.clientY/innerHeight*2-1,At?.move((Ht+1)/2,(Pe+1)/2),D&&dt==="home"&&(re=yr.clamp(re+(V.clientX-D.x)*.004,-.55,.55),Ot=yr.clamp(Ot+(V.clientY-D.y)*.002,-.2,.2),D={x:V.clientX,y:V.clientY}),O()},ct=V=>{if(dt==="cosmos"){At.press(!0),O();return}dt!=="home"||Mt!==null||(D={x:V.clientX,y:V.clientY},a.domElement.setPointerCapture(V.pointerId),tt(V),z.set(Ht,-Pe),S.setFromCamera(z,o),S.intersectObject(B,!0).length&&(Q.greet(fe),n("OH, HELLO. SHALL WE FOLLOW THAT LIGHT?")))},Ct=()=>{D=null,At?.press(!1),O()};a.domElement.addEventListener("pointerdown",ct),window.addEventListener("pointermove",tt),window.addEventListener("pointerup",Ct),a.domElement.addEventListener("pointercancel",Ct);function bt(){ht.classList.remove("is-flying"),ht.style.opacity="0",a.domElement.style.opacity="1",Mt=null,s.classList.remove("home-departing"),document.documentElement.classList.remove("voyager-running");let V=vt;vt=null,St(),V?.()}function ot(V){return Mt!==null?Promise.resolve():Yt.matches?(V(),Promise.resolve()):(Mt=fe,ve=V,_t=!1,dt="home",n("SOMETHING OUT THERE IS CALLING."),s.classList.add("home-departing"),document.documentElement.classList.add("voyager-running"),ht.appendChild(a.domElement),ht.classList.add("is-flying"),ht.style.opacity="1",new Promise(q=>{vt=q,O()}))}window.HomeWorld={depart:ot};function Bt(V){if(It=0,document.hidden||dt==="idle"&&Mt===null||window.WorldFX?.suspendScene){Re=0;return}let q=Re?Math.min((V-Re)/1e3,.06):1/60;if(Re=V,fe+=q,dt==="cosmos")At.update(fe,q),a.render(At.scene,At.camera);else{let ft=fe,Rt=Mt===null?0:Math.min(1,(fe-Mt)/4.4),jt=yr.smoothstep(Rt,.12,.88);if(Mt!==null)Tt.getPoint(jt,j),o.position.copy(j),Y.getPoint(jt,B.position),Z.set(3.1,2.4,-29),o.lookAt(Z),B.rotation.y=Ht*.08+jt*Math.PI,B.rotation.x=-Math.sin(jt*Math.PI)*.22,rt.visible=!1,a.domElement.style.opacity=String(1-yr.smoothstep(Rt,.74,.86)),Rt>=.86&&!_t&&(_t=!0,ve()),ht.style.opacity=String(1-yr.smoothstep(Rt,.87,1));else{let kt=o.aspect<.9;j.set((kt?2:0)+Ht*.22+Math.sin(re)*2,2.1-Pe*.12+Ot,12),o.position.lerp(j,1-Math.exp(-q*4)),Z.set(kt?2:.1,1,-1),o.lookAt(Z),B.position.set(2,-1.28,1),B.rotation.set(0,re*.4+Ht*.1,0),rt.visible=!0}Q.update(ft,Ht,Pe,jt,Yt.matches),G.rotation.y=Yt.matches?0:ft*.3,G.position.y=-.64+(Yt.matches?0:Math.sin(ft*1.4)*.06),F.rotation.z=Ht*.025,N.uniforms.time.value=ft,ae.uniforms.time.value=ft,a.render(r,o),C||(C=!0,s.classList.add("home-ready")),Rt===1&&bt()}(!Yt.matches||Mt!==null)&&dt!=="idle"&&(It=requestAnimationFrame(Bt))}function O(){!It&&!document.hidden&&(dt!=="idle"||Mt!==null)&&!window.WorldFX?.suspendScene&&(It=requestAnimationFrame(Bt))}let et=new MutationObserver(St);et.observe(s,{attributes:!0,attributeFilter:["class"]}),et.observe($,{attributes:!0,attributeFilter:["class"]});let at=()=>{Re=0,O()};document.addEventListener("visibilitychange",at);let mt=new MutationObserver(O);return mt.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),Yt.addEventListener("change",O),O(),()=>{cancelAnimationFrame(It),yt.disconnect(),et.disconnect(),mt.disconnect(),window.removeEventListener("pointermove",tt),window.removeEventListener("pointerup",Ct),document.removeEventListener("visibilitychange",at),Yt.removeEventListener("change",O),r.traverse(V=>{if(V.geometry?.dispose(),V.material)for(let q of[V.material].flat())q.dispose()}),At?.dispose(),h.dispose(),a.dispose(),a.domElement.remove(),ht.remove(),delete window.HomeWorld}},[]),ii.default.createElement(ii.default.Fragment,null,ii.default.createElement("div",{className:"home-three-canvas",ref:e}),ii.default.createElement("div",{className:"home-story mono","aria-live":"polite"},ii.default.createElement("span",{className:"home-story-dot"}),t))}(0,Pb.createRoot)(document.getElementById("homeWorld")).render(ii.default.createElement(KD,null));})();
/*! For license information please see home-world.js.LEGAL.txt */
