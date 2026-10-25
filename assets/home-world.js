(()=>{var xb=Object.create;var $0=Object.defineProperty;var Sb=Object.getOwnPropertyDescriptor;var Mb=Object.getOwnPropertyNames;var bb=Object.getPrototypeOf,Eb=Object.prototype.hasOwnProperty;var Ns=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Tb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Mb(t))!Eb.call(e,s)&&s!==n&&$0(e,s,{get:()=>t[s],enumerable:!(i=Sb(t,s))||i.enumerable});return e};var t_=(e,t,n)=>(n=e!=null?xb(bb(e)):{},Tb(t||!e||!e.__esModule?$0(n,"default",{value:e,enumerable:!0}):n,e));var d_=Ns(Ot=>{"use strict";var Nd=Symbol.for("react.transitional.element"),Ab=Symbol.for("react.portal"),wb=Symbol.for("react.fragment"),Cb=Symbol.for("react.strict_mode"),Rb=Symbol.for("react.profiler"),Db=Symbol.for("react.consumer"),Ub=Symbol.for("react.context"),Nb=Symbol.for("react.forward_ref"),Lb=Symbol.for("react.suspense"),Ob=Symbol.for("react.memo"),a_=Symbol.for("react.lazy"),Ib=Symbol.for("react.activity"),Pb=Symbol.for("react.view_transition"),e_=Symbol.iterator;function Bb(e){return e===null||typeof e!="object"?null:(e=e_&&e[e_]||e["@@iterator"],typeof e=="function"?e:null)}var r_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o_=Object.assign,l_={};function xr(e,t,n){this.props=e,this.context=t,this.refs=l_,this.updater=n||r_}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function c_(){}c_.prototype=xr.prototype;function Ld(e,t,n){this.props=e,this.context=t,this.refs=l_,this.updater=n||r_}var Od=Ld.prototype=new c_;Od.constructor=Ld;o_(Od,xr.prototype);Od.isPureReactComponent=!0;var n_=Array.isArray;function Ud(){}var xe={H:null,A:null,T:null,S:null},u_=Object.prototype.hasOwnProperty;function Id(e,t,n){var i=n.ref;return{$$typeof:Nd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function zb(e,t){return Id(e.type,t,e.props)}function Pd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nd}function Fb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var i_=/\/+/g;function Dd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fb(""+e.key):t.toString(36)}function Hb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ud,Ud):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function yr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Nd:case Ab:r=!0;break;case a_:return r=e._init,yr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Dd(e,0):i,n_(s)?(n="",r!=null&&(n=r.replace(i_,"$&/")+"/"),yr(s,t,n,"",function(c){return c})):s!=null&&(Pd(s)&&(s=zb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(i_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(n_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Dd(i,l),r+=yr(i,t,n,a,s);else if(l=Bb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Dd(i,l++),r+=yr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return yr(Hb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Wc(e,t,n){if(e==null)return e;var i=[],s=0;return yr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function Vb(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var s_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function h_(e){var t=xe.T,n={};n.types=t!==null?t.types:null,xe.T=n;try{var i=e(),s=xe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ud,s_)}catch(a){s_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),xe.T=t}}function f_(e){var t=xe.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else h_(f_.bind(null,e))}var Gb={map:Wc,forEach:function(e,t,n){Wc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wc(e,function(){t++}),t},toArray:function(e){return Wc(e,function(t){return t})||[]},only:function(e){if(!Pd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ot.Activity=Ib;Ot.Children=Gb;Ot.Component=xr;Ot.Fragment=wb;Ot.Profiler=Rb;Ot.PureComponent=Ld;Ot.StrictMode=Cb;Ot.Suspense=Lb;Ot.ViewTransition=Pb;Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xe;Ot.__COMPILER_RUNTIME={__proto__:null,c:function(e){return xe.H.useMemoCache(e)}};Ot.addTransitionType=f_;Ot.cache=function(e){return function(){return e.apply(null,arguments)}};Ot.cacheSignal=function(){return null};Ot.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=o_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!u_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Id(e.type,s,i)};Ot.createContext=function(e){return e={$$typeof:Ub,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Db,_context:e},e};Ot.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)u_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Id(e,a,s)};Ot.createRef=function(){return{current:null}};Ot.forwardRef=function(e){return{$$typeof:Nb,render:e}};Ot.isValidElement=Pd;Ot.lazy=function(e){return{$$typeof:a_,_payload:{_status:-1,_result:e},_init:Vb}};Ot.memo=function(e,t){return{$$typeof:Ob,type:e,compare:t===void 0?null:t}};Ot.startTransition=h_;Ot.unstable_useCacheRefresh=function(){return xe.H.useCacheRefresh()};Ot.use=function(e){return xe.H.use(e)};Ot.useActionState=function(e,t,n){return xe.H.useActionState(e,t,n)};Ot.useCallback=function(e,t){return xe.H.useCallback(e,t)};Ot.useContext=function(e){return xe.H.useContext(e)};Ot.useDebugValue=function(){};Ot.useDeferredValue=function(e,t){return xe.H.useDeferredValue(e,t)};Ot.useEffect=function(e,t){return xe.H.useEffect(e,t)};Ot.useEffectEvent=function(e){return xe.H.useEffectEvent(e)};Ot.useId=function(){return xe.H.useId()};Ot.useImperativeHandle=function(e,t,n){return xe.H.useImperativeHandle(e,t,n)};Ot.useInsertionEffect=function(e,t){return xe.H.useInsertionEffect(e,t)};Ot.useLayoutEffect=function(e,t){return xe.H.useLayoutEffect(e,t)};Ot.useMemo=function(e,t){return xe.H.useMemo(e,t)};Ot.useOptimistic=function(e,t){return xe.H.useOptimistic(e,t)};Ot.useReducer=function(e,t,n){return xe.H.useReducer(e,t,n)};Ot.useRef=function(e){return xe.H.useRef(e)};Ot.useState=function(e){return xe.H.useState(e)};Ot.useSyncExternalStore=function(e,t,n){return xe.H.useSyncExternalStore(e,t,n)};Ot.useTransition=function(){return xe.H.useTransition()};Ot.version="19.3.1"});var qc=Ns((bD,p_)=>{"use strict";p_.exports=d_()});var E_=Ns(we=>{"use strict";function Hd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Yc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Oi(e){return e.length===0?null:e[0]}function Jc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Yc(o,n))l<s&&0>Yc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Yc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Yc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(m_=performance,we.unstable_now=function(){return m_.now()}):(Bd=Date,g_=Bd.now(),we.unstable_now=function(){return Bd.now()-g_});var m_,Bd,g_,ns=[],Ls=[],kb=1,ai=null,hn=3,Vd=!1,tl=!1,el=!1,Gd=!1,y_=typeof setTimeout=="function"?setTimeout:null,x_=typeof clearTimeout=="function"?clearTimeout:null,__=typeof setImmediate<"u"?setImmediate:null;function Zc(e){for(var t=Oi(Ls);t!==null;){if(t.callback===null)Jc(Ls);else if(t.startTime<=e)Jc(Ls),t.sortIndex=t.expirationTime,Hd(ns,t);else break;t=Oi(Ls)}}function kd(e){if(el=!1,Zc(e),!tl)if(Oi(ns)!==null)tl=!0,Mr||(Mr=!0,Sr());else{var t=Oi(Ls);t!==null&&Xd(kd,t.startTime-e)}}var Mr=!1,nl=-1,S_=5,M_=-1;function b_(){return Gd?!0:!(we.unstable_now()-M_<S_)}function zd(){if(Gd=!1,Mr){var e=we.unstable_now();M_=e;var t=!0;try{t:{tl=!1,el&&(el=!1,x_(nl),nl=-1),Vd=!0;var n=hn;try{e:{for(Zc(e),ai=Oi(ns);ai!==null&&!(ai.expirationTime>e&&b_());){var i=ai.callback;if(typeof i=="function"){ai.callback=null,hn=ai.priorityLevel;var s=i(ai.expirationTime<=e);if(e=we.unstable_now(),typeof s=="function"){ai.callback=s,Zc(e),t=!0;break e}ai===Oi(ns)&&Jc(ns),Zc(e)}else Jc(ns);ai=Oi(ns)}if(ai!==null)t=!0;else{var a=Oi(Ls);a!==null&&Xd(kd,a.startTime-e),t=!1}}break t}finally{ai=null,hn=n,Vd=!1}t=void 0}}finally{t?Sr():Mr=!1}}}var Sr;typeof __=="function"?Sr=function(){__(zd)}:typeof MessageChannel<"u"?(Fd=new MessageChannel,v_=Fd.port2,Fd.port1.onmessage=zd,Sr=function(){v_.postMessage(null)}):Sr=function(){y_(zd,0)};var Fd,v_;function Xd(e,t){nl=y_(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S_=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return hn};we.unstable_next=function(e){switch(hn){case 1:case 2:case 3:var t=3;break;default:t=hn}var n=hn;hn=t;try{return e()}finally{hn=n}};we.unstable_requestPaint=function(){Gd=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=hn;hn=e;try{return t()}finally{hn=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:kb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Hd(Ls,e),Oi(ns)===null&&e===Oi(Ls)&&(el?(x_(nl),nl=-1):el=!0,Xd(kd,n-i))):(e.sortIndex=s,Hd(ns,e),tl||Vd||(tl=!0,Mr||(Mr=!0,Sr()))),e};we.unstable_shouldYield=b_;we.unstable_wrapCallback=function(e){var t=hn;return function(){var n=hn;hn=t;try{return e.apply(this,arguments)}finally{hn=n}}}});var A_=Ns((TD,T_)=>{"use strict";T_.exports=E_()});var R_=Ns(fn=>{"use strict";var Xb=qc();function C_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Os(){}var yn={d:{f:Os,r:function(){throw Error(C_(522))},D:Os,C:Os,L:Os,m:Os,X:Os,S:Os,M:Os},p:0,findDOMNode:null},Wb=Symbol.for("react.portal"),qb=Symbol.for("react.recoverable"),w_=Symbol.for("react.optimistic_key");function Yb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wb,key:i==null?null:i===w_?w_:""+i,children:e,containerInfo:t,implementation:n}}var il=Xb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yn;fn.browser=function(e){return{$$typeof:qb,_reason:e}};fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(C_(299));return Yb(e,t,null,n)};fn.flushSync=function(e){var t=il.T,n=yn.p;try{if(il.T=null,yn.p=2,e)return e()}finally{il.T=t,yn.p=n,yn.d.f()}};fn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,yn.d.C(e,t))};fn.prefetchDNS=function(e){typeof e=="string"&&yn.d.D(e)};fn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Kc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?yn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&yn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};fn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Kc(t.as,t.crossOrigin);yn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&yn.d.M(e)};fn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Kc(n,t.crossOrigin);yn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};fn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Kc(t.as,t.crossOrigin);yn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else yn.d.m(e)};fn.requestFormReset=function(e){yn.d.r(e)};fn.unstable_batchedUpdates=function(e,t){return e(t)};fn.useFormState=function(e,t,n){return il.H.useFormState(e,t,n)};fn.useFormStatus=function(){return il.H.useHostTransitionStatus()};fn.version="19.3.1"});var N_=Ns((wD,U_)=>{"use strict";function D_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D_)}catch(e){console.error(e)}}D_(),U_.exports=R_()});var vM=Ns(Uh=>{"use strict";var qe=A_(),_y=qc(),Zb=N_();function q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function vy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function yy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L_(e){if(Xl(e)!==e)throw Error(q(188))}function Jb(e){var t=e.alternate;if(!t){if(t=Xl(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return L_(s),e;if(a===i)return L_(s),t;a=a.sibling}throw Error(q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(q(189))}}if(n.alternate!==i)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function Sy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Sy(e),t!==null)return t;e=e.sibling}return null}function In(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&In(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Ya(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function O_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function My(e){var t=[null,null],n=Ya(e);return n===null||by(t,e,n.child,{foundSelf:!1}),t}function by(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&by(e,t,n.child,i))return!0;n=n.sibling}return!1}function We(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(q(559))}}var Rr=null,Mp=null;function Kb(e,t,n){return e===n?!0:e===t?(Rr=e,!0):!1}function Qb(e,t,n){return e===n?(Mp=e,!1):e===t?(Mp!==null&&(Rr=e),!0):!1}function I_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function bp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var _e=Object.assign,jb=Symbol.for("react.element"),Qc=Symbol.for("react.transitional.element"),ul=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),Ty=Symbol.for("react.consumer"),Hi=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Ap=Symbol.for("react.suspense_list"),Om=Symbol.for("react.memo"),zs=Symbol.for("react.lazy");Symbol.for("react.scope");var wp=Symbol.for("react.activity"),$b=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var tE=Symbol.for("react.memo_cache_sentinel"),Cp=Symbol.for("react.view_transition"),eE=Symbol.for("react.recoverable"),P_=Symbol.iterator;function sl(e){return e===null||typeof e!="object"?null:(e=P_&&e[P_]||e["@@iterator"],typeof e=="function"?e:null)}var nE=Symbol.for("react.client.reference");function Rp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Ep:return"Profiler";case Ey:return"StrictMode";case Tp:return"Suspense";case Ap:return"SuspenseList";case wp:return"Activity";case Cp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ul:return"Portal";case Hi:return e.displayName||"Context";case Ty:return(e._context.displayName||"Context")+".Consumer";case Lm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Om:return t=e.displayName||null,t!==null?t:Rp(e.type)||"Memo";case zs:t=e._payload,e=e._init;try{return Rp(e(t))}catch{}}return null}var hl=Array.isArray,Ut=_y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=Zb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Oa={pending:!1,data:null,method:null,action:null},Dp=[],Ur=-1;function Yi(e){return{current:e}}function rn(e){0>Ur||(e.current=Dp[Ur],Dp[Ur]=null,Ur--)}function be(e,t){Ur++,Dp[Ur]=e.current,e.current=t}var Xi=Yi(null),Cl=Yi(null),Ys=Yi(null),Bu=Yi(null);function zu(e,t){switch(be(Ys,t),be(Cl,e),be(Xi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kv(t),e=YS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rn(Xi),be(Xi,e)}function Qr(){rn(Xi),rn(Cl),rn(Ys)}function Up(e){var t=e.memoizedState;t!==null&&(oo._currentValue=t.memoizedState,be(Bu,e)),t=Xi.current;var n=YS(t,e.type);t!==n&&(be(Cl,e),be(Xi,n))}function Fu(e){Cl.current===e&&(rn(Xi),rn(Cl)),Bu.current===e&&(rn(Bu),oo._currentValue=Oa)}var Wd,B_;function Ps(e){if(Wd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wd=t&&t[1]||"",B_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wd+e+B_}var qd=!1;function Yd(e,t){if(!e||qd)return"";qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var h=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){h=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){h=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{qd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ps(n):""}function iE(e,t){switch(e.tag){case 26:case 27:case 5:return Ps(e.type);case 16:return Ps("Lazy");case 13:return e.child!==t&&t!==null?Ps("Suspense Fallback"):Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 15:return Yd(e.type,!1);case 11:return Yd(e.type.render,!1);case 1:return Yd(e.type,!0);case 31:return Ps("Activity");case 30:return Ps("ViewTransition");default:return""}}function z_(e){try{var t="",n=null;do t+=iE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Np=Object.prototype.hasOwnProperty,Im=qe.unstable_scheduleCallback,Zd=qe.unstable_cancelCallback,sE=qe.unstable_shouldYield,aE=qe.unstable_requestPaint,Yn=qe.unstable_now,rE=qe.unstable_getCurrentPriorityLevel,Ay=qe.unstable_ImmediatePriority,wy=qe.unstable_UserBlockingPriority,Hu=qe.unstable_NormalPriority,oE=qe.unstable_LowPriority,Cy=qe.unstable_IdlePriority,lE=qe.log,cE=qe.unstable_setDisableYieldValue,Wl=null,Zn=null;function Vs(e){if(typeof lE=="function"&&cE(e),Zn&&typeof Zn.setStrictMode=="function")try{Zn.setStrictMode(Wl,e)}catch{}}var Jn=Math.clz32?Math.clz32:fE,uE=Math.log,hE=Math.LN2;function fE(e){return e>>>=0,e===0?32:31-(uE(e)/hE|0)|0}var jc=256,$c=262144,tu=4194304;function Ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ra(i):(r&=o,r!==0?s=Ra(r):n||(n=o&~e,n!==0&&(s=Ra(n))))):(o=i&~a,o!==0?s=Ra(o):r!==0?s=Ra(r):n||(n=i&~e,n!==0&&(s=Ra(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ry(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Jn(n),s=1<<i;t|=e[i],n&=~s}return t}function dE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dy(){var e=tu;return tu<<=1,(tu&62914560)===0&&(tu=4194304),e}function Jd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Jn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Uy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Uy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Jn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Ny(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Jn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Ly(e,t){var n=t&-t;return n=(n&42)!==0?1:Pm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Pm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oy(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:mM(e.type))}function F_(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var ms=Math.random().toString(36).slice(2),sn="__reactFiber$"+ms,Pn="__reactProps$"+ms,uo="__reactContainer$"+ms,H_="__reactEvents$"+ms,mE="__reactListeners$"+ms,gE="__reactHandles$"+ms,V_="__reactResources$"+ms,Zl="__reactMarker$"+ms,Vu="__reactLoad$"+ms;function dh(e){delete e[sn],delete e[Pn],delete e[mE],delete e[gE]}function Na(e){var t;if(t=e[sn])return t;for(var n=e.parentNode;n;){if(t=n[uo]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sy(e);e!==null;){if(n=e[sn])return n;e=sy(e)}return t}e=n,n=e.parentNode}return null}function ho(e){if(e=e[sn]||e[uo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(q(33))}function Vr(e){var t=e[V_];return t||(t=e[V_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[Zl]=!0}function Iy(e){e[Vu]=void 0}var Py=new Set,By={};function Za(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(By[e]=t,e=0;e<t.length;e++)Py.add(t[e])}var _E=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),G_={},k_={};function vE(e){return Np.call(k_,e)?!0:Np.call(G_,e)?!1:_E.test(e)?k_[e]=!0:(G_[e]=!0,!1)}var te=!1;function X_(){var e=te;return te=!1,e}function vu(e,t,n){if(vE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function eu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function is(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lp(e){if(!e._valueTracker){var t=zy(e)?"checked":"value";e._valueTracker=yE(e,t,""+e[t])}}function Fy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=zy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var xE=/[\n"\\]/g;function ui(e){return e.replace(xE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Op(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kn(t)):e.value!==""+kn(t)&&(e.value=""+kn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Kd(e,kn(e.value)):Kd(e,kn(t)):n!=null?Kd(e,kn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+kn(o):e.removeAttribute("name")}function Hy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Lp(e);return}n=n!=null?""+kn(n):"",t=t!=null?""+kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Lp(e)}function Kd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Gr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Vy(e,t,n){if(t!=null&&(t=""+kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kn(n):""}function Gy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(q(92));if(hl(i)){if(1<i.length)throw Error(q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Lp(e)}function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var SE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function W_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||SE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ky(e,t,n){if(t!=null&&typeof t!="object")throw Error(q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",te=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(W_(e,s,i),te=!0)}else for(var a in t)t.hasOwnProperty(a)&&W_(e,a,t[a])}function zm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ME=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yu(e){return bE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var Ip=null;function Fm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,kr=null;function q_(e){var t=ho(e);if(t&&(e=t.stateNode)){var n=e[Pn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Op(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ui(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Pn]||null;if(!s)throw Error(q(90));Op(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Fy(i)}break t;case"textarea":Vy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Gr(e,!!n.multiple,t,!1)}}}var Qd=!1;function Xy(e,t,n){if(Qd)return e(t,n);Qd=!0;try{var i=e(t);return i}finally{if(Qd=!1,(Nr!==null||kr!==null)&&(wh(),Nr&&(t=Nr,e=kr,kr=Nr=null,q_(t),e)))for(t=0;t<e.length;t++)q_(e[t])}}function Rl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Pn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var cs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pp=!1;if(cs)try{br={},Object.defineProperty(br,"passive",{get:function(){Pp=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Pp=!1}var br,Gs=null,Hm=null,xu=null;function Wy(){if(xu)return xu;var e,t=Hm,n=t.length,i,s="value"in Gs?Gs.value:Gs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return xu=s.slice(e,1<i?1-i:void 0)}function Su(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nu(){return!0}function Y_(){return!1}function bn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nu:Y_,this.isPropagationStopped=Y_,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),t}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=bn(la),Jl=_e({},la,{view:0,detail:0}),EE=bn(Jl),jd,$d,al,mh=_e({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==al&&(al&&e.type==="mousemove"?(jd=e.screenX-al.screenX,$d=e.screenY-al.screenY):$d=jd=0,al=e),jd)},movementY:function(e){return"movementY"in e?e.movementY:$d}}),Z_=bn(mh),TE=_e({},mh,{dataTransfer:0}),AE=bn(TE),wE=_e({},Jl,{relatedTarget:0}),tp=bn(wE),CE=_e({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),RE=bn(CE),DE=_e({},la,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),UE=bn(DE),NE=_e({},la,{data:0}),J_=bn(NE),LE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=IE[e])?!!t[e]:!1}function Vm(){return PE}var BE=_e({},Jl,{key:function(e){if(e.key){var t=LE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Su(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?OE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vm,charCode:function(e){return e.type==="keypress"?Su(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Su(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zE=bn(BE),FE=_e({},mh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K_=bn(FE),HE=_e({},la,{submitter:0}),VE=bn(HE),GE=_e({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vm}),kE=bn(GE),XE=_e({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),WE=bn(XE),qE=_e({},mh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),YE=bn(qE),ZE=_e({},la,{newState:0,oldState:0,source:0}),JE=bn(ZE),KE=[9,13,27,32],Gm=cs&&"CompositionEvent"in window,ml=null;cs&&"documentMode"in document&&(ml=document.documentMode);var QE=cs&&"TextEvent"in window&&!ml,qy=cs&&(!Gm||ml&&8<ml&&11>=ml),Q_=" ",j_=!1;function Yy(e,t){switch(e){case"keyup":return KE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function jE(e,t){switch(e){case"compositionend":return Zy(t);case"keypress":return t.which!==32?null:(j_=!0,Q_);case"textInput":return e=t.data,e===Q_&&j_?null:e;default:return null}}function $E(e,t){if(Lr)return e==="compositionend"||!Gm&&Yy(e,t)?(e=Wy(),xu=Hm=Gs=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qy&&t.locale!=="ko"?null:t.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tT[e.type]:t==="textarea"}function Jy(e,t,n,i){Nr?kr?kr.push(i):kr=[i]:Nr=i,t=ch(t,"onChange"),0<t.length&&(n=new ph("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var gl=null,Dl=null;function eT(e){XS(e,0)}function gh(e){var t=fl(e);if(Fy(t))return e}function tv(e,t){if(e==="change")return t}var Ky=!1;cs&&(cs?(su="oninput"in document,su||(ep=document.createElement("div"),ep.setAttribute("oninput","return;"),su=typeof ep.oninput=="function"),iu=su):iu=!1,Ky=iu&&(!document.documentMode||9<document.documentMode));var iu,su,ep;function ev(){gl&&(gl.detachEvent("onpropertychange",Qy),Dl=gl=null)}function Qy(e){if(e.propertyName==="value"&&gh(Dl)){var t=[];Jy(t,Dl,e,Fm(e)),Xy(eT,t)}}function nT(e,t,n){e==="focusin"?(ev(),gl=t,Dl=n,gl.attachEvent("onpropertychange",Qy)):e==="focusout"&&ev()}function iT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gh(Dl)}function sT(e,t){if(e==="click")return gh(t)}function aT(e,t){if(e==="input"||e==="change")return gh(t)}function rT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qn=typeof Object.is=="function"?Object.is:rT;function Ul(e,t){if(Qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Np.call(t,s)||!Qn(e[s],t[s]))return!1}return!0}function Bp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iv(e,t){var n=nv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=nv(n)}}function jy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $y(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bp(e.document)}return t}function km(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oT=cs&&"documentMode"in document&&11>=document.documentMode,Or=null,zp=null,_l=null,Fp=!1;function sv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fp||Or==null||Or!==Bp(i)||(i=Or,"selectionStart"in i&&km(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_l&&Ul(_l,i)||(_l=i,i=ch(zp,"onSelect"),0<i.length&&(t=new ph("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Or)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},np={},tx={};cs&&(tx=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Ja(e){if(np[e])return np[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tx)return np[e]=t[n];return e}var ex=Ja("animationend"),nx=Ja("animationiteration"),ix=Ja("animationstart"),lT=Ja("transitionrun"),cT=Ja("transitionstart"),uT=Ja("transitioncancel"),sx=Ja("transitionend"),ax=new Map,Hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hp.push("scrollEnd");function Ei(e,t){ax.set(e,t),Za(t,[e])}var hT=0;function us(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=bi.identifierPrefix;var n=hT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function av(e){if(e==null||typeof e=="string")return e;var t=null,n=Kr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function gs(e,t){return e=av(e),t=av(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Gu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Pr=0,Xm=0;function _h(){for(var e=Pr,t=Xm=Pr=0;t<e;){var n=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var s=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&rx(n,s,a)}}function vh(e,t,n,i){oi[Pr++]=e,oi[Pr++]=t,oi[Pr++]=n,oi[Pr++]=i,Xm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wm(e,t,n,i){return vh(e,t,n,i),ku(e)}function Ka(e,t){return vh(e,null,null,t),ku(e)}function rx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Jn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function ku(e){if(50<wl)throw wl=0,Uu=null,Error(q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Br={};function fT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,n,i){return new fT(e,t,n,i)}function qm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function os(e,t){var n=e.alternate;return n===null?(n=Ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ox(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")qm(i)&&(r=1);else if(typeof i=="string")r=zA(e,n,Xi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case wp:return e=Ln(31,n,t,s),e.elementType=wp,e.lanes=a,e;case Dr:return Ia(n.children,s,a,t);case Ey:r=8,s|=24;break;case Ep:return e=Ln(12,n,t,s|2),e.elementType=Ep,e.lanes=a,e;case Tp:return e=Ln(13,n,t,s),e.elementType=Tp,e.lanes=a,e;case Ap:return e=Ln(19,n,t,s),e.elementType=Ap,e.lanes=a,e;case $b:case Cp:return e=s|32,e=Ln(30,n,t,e),e.elementType=Cp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Hi:r=10;break t;case Ty:r=9;break t;case Lm:r=11;break t;case Om:r=14;break t;case zs:r=16,i=null;break t}r=29,n=Error(q(130,e===null?"null":typeof e,"")),i=null}return t=Ln(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ia(e,t,n,i){return e=Ln(7,e,i,t),e.lanes=n,e}function ip(e,t,n){return e=Ln(6,e,null,t),e.lanes=n,e}function lx(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function sp(e,t,n){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rv=new WeakMap;function hi(e,t){if(typeof e=="object"&&e!==null){var n=rv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:z_(t)},rv.set(e,t),t)}return{value:e,source:t,stack:z_(t)}}var zr=[],Fr=0,Xu=null,Nl=0,li=[],ci=0,ia=null,Gi=1,ki="";function as(e,t){zr[Fr++]=Nl,zr[Fr++]=Xu,Xu=e,Nl=t}function cx(e,t,n){li[ci++]=Gi,li[ci++]=ki,li[ci++]=ia,ia=e;var i=Gi;e=ki;var s=32-Jn(i)-1;i&=~(1<<s),n+=1;var a=32-Jn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Gi=1<<32-Jn(t)+s|n<<s|i,ki=a+e}else Gi=1<<a|n<<s|i,ki=e}function yh(e){e.return!==null&&(as(e,1),cx(e,1,0))}function Ym(e){for(;e===Xu;)Xu=zr[--Fr],zr[Fr]=null,Nl=zr[--Fr],zr[Fr]=null;for(;e===ia;)ia=li[--ci],li[ci]=null,ki=li[--ci],li[ci]=null,Gi=li[--ci],li[ci]=null}function ux(e,t){li[ci++]=Gi,li[ci++]=ki,li[ci++]=ia,Gi=t.id,ki=t.overflow,ia=e}var $e=null,Me=null,kt=!1,Zs=null,fi=!1,Vp=Error(q(519));function sa(e){var t=Error(q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ll(hi(t,e)),Vp}function ov(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[sn]=e,t[Pn]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<Bl.length;n++)Wt(Bl[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),Hy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),Gy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||qS(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=Vi),t=!0):t=!1,t||sa(e,!0)}function Wu(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:$e=$e.return}}function Er(e){if(e!==$e)return!1;if(!kt)return Wu(e),kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tm(e.type,e.memoizedProps)),n=!n),n&&Me&&sa(e),Wu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));Me=iy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));Me=iy(e)}else t===27?(t=Me,ca(e.type)?(e=Rm,Rm=null,Me=e):Me=t):Me=$e?di(e.stateNode.nextSibling):null;return!0}function Fa(){Me=$e=null,kt=!1}function ap(){var e=Zs;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),Zs=null),e}function Ll(e){Zs===null?Zs=[e]:Zs.push(e)}var Gp=Yi(null),Qa=null,rs=null;function ks(e,t,n){be(Gp,t._currentValue),t._currentValue=n}function ls(e){e._currentValue=Gp.current,rn(Gp)}function bu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function kp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),bu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),bu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),bu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ha(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(q(387));if(r=r.memoizedProps,r!==null){var o=s.type;Qn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Bu.current){if(r=s.alternate,r===null)throw Error(q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(oo):e=[oo])}s=s.return}return e!==null&&kp(t,e,n,i),t.flags|=262144,e!==null}function qu(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Va(e){Qa=e,rs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function an(e){return hx(Qa,e)}function au(e,t){return Qa===null&&Va(e),hx(e,t)}function hx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},rs===null){if(e===null)throw Error(q(308));rs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else rs=rs.next=t;return n}var dT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},pT=qe.unstable_scheduleCallback,mT=qe.unstable_NormalPriority,Ve={$$typeof:Hi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zm(){return{controller:new dT,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&pT(mT,function(){e.controller.abort()})}function lv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var dl=null;function gT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var vl=null,Xp=0,Ga=0,Xr=null;function _T(e,t){if(vl===null){var n=vl=[];Xp=0,Ga=Mg(),Xr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Xp++,t.then(cv,cv),t}function cv(){if(--Xp===0&&(dl=null,vl!==null)){Xr!==null&&(Xr.status="fulfilled");var e=vl;vl=null,Ga=0,Xr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var uv=Ut.S;Ut.S=function(e,t){if(RS=Yn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_T(e,t),dl!==null)for(var n=so;n!==null;)lv(n,dl),n=n.next;if(n=e.types,n!==null){for(var i=so;i!==null;)lv(i,n),i=i.next;if(Ga!==0){i=dl,i===null&&(i=dl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}uv!==null&&uv(e,t)};var Pa=Yi(null);function Jm(){var e=Pa.current;return e!==null?e:ge.pooledCache}function Eu(e,t){t===null?be(Pa,Pa.current):be(Pa,t.pool)}function fx(){var e=Jm();return e===null?null:{parent:Ve._currentValue,pool:e}}var fo=Error(q(460)),Km=Error(q(474)),xh=Error(q(542)),Yu={then:function(){}};function hv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vi,Vi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dv(e),e===void 0&&!("reason"in t)?Error(q(600)):e;default:if(typeof t.status=="string")t.then(Vi,Vi);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dv(e),e}throw Ba=t,fo}}function Da(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ba=n,fo):n}}var Ba=null;function fv(){if(Ba===null)throw Error(q(459));var e=Ba;return Ba=null,e}function dv(e){if(e===fo||e===xh)throw Error(q(483))}var Wr=null,Ol=0;function ru(e){var t=Ol;return Ol+=1,Wr===null&&(Wr=[]),dx(Wr,e,t)}function Is(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ou(e,t){throw t.$$typeof===jb?Error(q(525)):(e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function px(e){function t(u,_){if(e){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!e)return null;for(;_!==null;)t(u,_),_=_.sibling;return null}function i(u){for(var _=new Map;u!==null;)u.key===null?_.set(u.index,u):_.set(u.key,u),u=u.sibling;return _}function s(u,_){return u=os(u,_),u.index=0,u.sibling=null,u}function a(u,_,v){return u.index=v,e?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=134217730,_)):(u.flags|=1048576,_)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,_,v,y){return _===null||_.tag!==6?(_=ip(v,u.mode,y),_.return=u,_):(_=s(_,v),_.return=u,_)}function l(u,_,v,y){var A=v.type;return A===Dr?(u=f(u,_,v.props.children,y,v.key),Is(u,v),u):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zs&&Da(A)===_.type)?(_=s(_,v.props),Is(_,v),_.return=u,_):(_=Mu(v.type,v.key,v.props,null,u.mode,y),Is(_,v),_.return=u,_)}function c(u,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=sp(v,u.mode,y),_.return=u,_):(_=s(_,v.children||[]),_.return=u,_)}function f(u,_,v,y,A){return _===null||_.tag!==7?(_=Ia(v,u.mode,y,A),_.return=u,_):(_=s(_,v),_.return=u,_)}function d(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=ip(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qc:return v=Mu(_.type,_.key,_.props,null,u.mode,v),Is(v,_),v.return=u,v;case ul:return _=sp(_,u.mode,v),_.return=u,_;case zs:return _=Da(_),d(u,_,v)}if(hl(_)||sl(_))return _=Ia(_,u.mode,v,null),_.return=u,_;if(typeof _.then=="function")return d(u,ru(_),v);if(_.$$typeof===Hi)return d(u,au(u,_),v);ou(u,_)}return null}function h(u,_,v,y){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return A!==null?null:o(u,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qc:return v.key===A?l(u,_,v,y):null;case ul:return v.key===A?c(u,_,v,y):null;case zs:return v=Da(v),h(u,_,v,y)}if(hl(v)||sl(v))return A!==null?null:f(u,_,v,y,null);if(typeof v.then=="function")return h(u,_,ru(v),y);if(v.$$typeof===Hi)return h(u,_,au(u,v),y);ou(u,v)}return null}function p(u,_,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(v)||null,o(_,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qc:return u=u.get(y.key===null?v:y.key)||null,l(_,u,y,A);case ul:return u=u.get(y.key===null?v:y.key)||null,c(_,u,y,A);case zs:return y=Da(y),p(u,_,v,y,A)}if(hl(y)||sl(y))return u=u.get(v)||null,f(_,u,y,A,null);if(typeof y.then=="function")return p(u,_,v,ru(y),A);if(y.$$typeof===Hi)return p(u,_,v,au(_,y),A);ou(_,y)}return null}function g(u,_,v,y){for(var A=null,w=null,T=_,R=_=0,E=null;T!==null&&R<v.length;R++){T.index>R?(E=T,T=null):E=T.sibling;var M=h(u,T,v[R],y);if(M===null){T===null&&(T=E);break}e&&T&&M.alternate===null&&t(u,T),_=a(M,_,R),w===null?A=M:w.sibling=M,w=M,T=E}if(R===v.length)return n(u,T),kt&&as(u,R),A;if(T===null){for(;R<v.length;R++)T=d(u,v[R],y),T!==null&&(_=a(T,_,R),w===null?A=T:w.sibling=T,w=T);return kt&&as(u,R),A}for(T=i(T);R<v.length;R++)E=p(T,u,R,v[R],y),E!==null&&(e&&(M=E.alternate,M!==null&&T.delete(M.key===null?R:M.key)),_=a(E,_,R),w===null?A=E:w.sibling=E,w=E);return e&&T.forEach(function(U){return t(u,U)}),kt&&as(u,R),A}function x(u,_,v,y){if(v==null)throw Error(q(151));for(var A=null,w=null,T=_,R=_=0,E=null,M=v.next();T!==null&&!M.done;R++,M=v.next()){T.index>R?(E=T,T=null):E=T.sibling;var U=h(u,T,M.value,y);if(U===null){T===null&&(T=E);break}e&&T&&U.alternate===null&&t(u,T),_=a(U,_,R),w===null?A=U:w.sibling=U,w=U,T=E}if(M.done)return n(u,T),kt&&as(u,R),A;if(T===null){for(;!M.done;R++,M=v.next())M=d(u,M.value,y),M!==null&&(_=a(M,_,R),w===null?A=M:w.sibling=M,w=M);return kt&&as(u,R),A}for(T=i(T);!M.done;R++,M=v.next())M=p(T,u,R,M.value,y),M!==null&&(e&&(E=M.alternate,E!==null&&T.delete(E.key===null?R:E.key)),_=a(M,_,R),w===null?A=M:w.sibling=M,w=M);return e&&T.forEach(function(B){return t(u,B)}),kt&&as(u,R),A}function m(u,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Dr&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qc:t:{for(var A=v.key;_!==null;){if(_.key===A){if(A=v.type,A===Dr){if(_.tag===7){n(u,_.sibling),y=s(_,v.props.children),Is(y,v),y.return=u,u=y;break t}}else if(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zs&&Da(A)===_.type){n(u,_.sibling),y=s(_,v.props),Is(y,v),y.return=u,u=y;break t}n(u,_);break}else t(u,_);_=_.sibling}v.type===Dr?(y=Ia(v.props.children,u.mode,y,v.key),Is(y,v),y.return=u,u=y):(y=Mu(v.type,v.key,v.props,null,u.mode,y),Is(y,v),y.return=u,u=y)}return r(u);case ul:t:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),y=s(_,v.children||[]),y.return=u,u=y;break t}else{n(u,_);break}else t(u,_);_=_.sibling}y=sp(v,u.mode,y),y.return=u,u=y}return r(u);case zs:return v=Da(v),m(u,_,v,y)}if(hl(v))return g(u,_,v,y);if(sl(v)){if(A=sl(v),typeof A!="function")throw Error(q(150));return v=A.call(v),x(u,_,v,y)}if(typeof v.then=="function")return m(u,_,ru(v),y);if(v.$$typeof===Hi)return m(u,_,au(u,v),y);ou(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),y=s(_,v),y.return=u,u=y):(n(u,_),y=ip(v,u.mode,y),y.return=u,u=y),r(u)):n(u,_)}return function(u,_,v,y){try{Ol=0;var A=m(u,_,v,y);return Wr=null,A}catch(T){if(T===fo||T===xh)throw T;var w=Ln(29,T,null,u.mode);return w.lanes=y,w.return=u,w}finally{}}}var ka=px(!0),mx=px(!1),Fs=!1;function Qm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Js(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ks(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ku(e),rx(e,null,n),t}return vh(e,i,t,n),ku(e)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ny(e,n)}}function rp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qp=!1;function xl(){if(qp){var e=Xr;if(e!==null)throw e}}function Sl(e,t,n,i){qp=!1;var s=e.updateQueue;Fs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,f=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Jt&h)===h:(i&h)===h){h!==0&&h===Ga&&(qp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;h=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,h);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break t;d=_e({},d,h);break t;case 2:Fs=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),oa|=r,e.lanes=r,e.memoizedState=d}}function gx(e,t){if(typeof e!="function")throw Error(q(191,e));e.call(t)}function _x(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gx(n[e],t)}var aa=Yi(null),Zu=Yi(0);function pv(e,t){e=ps,be(Zu,e),be(aa,t),ps=e|t.baseLanes}function Yp(){be(Zu,ps),be(aa,aa.current)}function jm(){ps=Zu.current,rn(aa),rn(Zu)}var cn=Yi(null),dn=null;function Qs(e){var t=e.alternate;be(on,on.current&1),be(cn,e),dn===null&&(t===null||aa.current!==null||t.memoizedState!==null)&&(dn=e)}function Zp(e){be(on,on.current),be(cn,e),dn===null&&(dn=e)}function vx(e){e.tag===22?(be(on,on.current),be(cn,e),dn===null&&(dn=e)):js()}function js(){be(on,on.current),be(cn,cn.current)}function Xn(e){rn(cn),dn===e&&(dn=null),rn(on)}var on=Yi(0);function Il(e,t){be(cn,cn.current),be(on,t)}function $m(e){rn(on),rn(cn),dn===e&&(dn=null)}function Ju(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Cm(n)||Ag(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hs=0,zt=null,de=null,He=null,Ku=!1,qr=!1,Xa=!1,Qu=0,Pl=0,Yr=null,yT=0;function Oe(){throw Error(q(321))}function tg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qn(e[n],t[n]))return!1;return!0}function eg(e,t,n,i,s,a){return hs=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?Jx:Kx,Xa=!1,a=n(i,s),Xa=!1,qr&&(a=xx(t,n,i,s)),yx(e),a}function yx(e){Ut.H=ju;var t=de!==null&&de.next!==null;if(hs=0,He=de=zt=null,Ku=!1,Pl=0,Yr=null,t)throw Error(q(300));e===null||Ge||(e=e.dependencies,e!==null&&qu(e)&&(Ge=!0))}function xx(e,t,n,i){zt=e;var s=0;do{if(qr&&(Yr=null),Pl=0,qr=!1,25<=s)throw Error(q(301));if(s+=1,He=de=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ut.H=wT,a=t(n,i)}while(qr);return a}function xT(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Ql(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(zt.flags|=1024),t}function ng(){var e=Qu!==0;return Qu=0,e}function ig(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sg(e){if(Ku){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ku=!1}hs=0,He=de=zt=null,qr=!1,Pl=Qu=0,Yr=null}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?zt.memoizedState=He=e:He=He.next=e,He}function ze(){if(de===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=He===null?zt.memoizedState:He.next;if(t!==null)He=t,de=e;else{if(e===null)throw zt.alternate===null?Error(q(467)):Error(q(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},He===null?zt.memoizedState=He=e:He=He.next=e}return He}function Sh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ql(e){var t=Pl;return Pl+=1,Yr===null&&(Yr=[]),e=dx(Yr,e,t),t=zt,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?Jx:Kx),e}function Mh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ql(e);if(e.$$typeof===eE)return;if(e.$$typeof===Hi)return an(e)}throw Error(q(438,String(e)))}function ag(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Sh(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=tE;return t.index++,n}function fs(e,t){return typeof t=="function"?t(e):t}function Tu(e){var t=ze();return rg(t,de,e)}function rg(e,t,n){var i=e.queue;if(i===null)throw Error(q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Jt&d)===d:(hs&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ga&&(f=!0);else if((hs&h)===h){c=c.next,h===Ga&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,zt.lanes|=h,oa|=h;d=c.action,Xa&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,zt.lanes|=d,oa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Qn(a,e.memoizedState)&&(Ge=!0,f&&(n=Xr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function op(e){var t=ze(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Qn(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Sx(e,t,n){var i=zt,s=ze(),a=kt;if(a){if(n===void 0)throw Error(q(407));n=n()}else n=t();var r=!Qn((de||s).memoizedState,n);if(r&&(s.memoizedState=n,Ge=!0),s=s.queue,og(Ex.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||He!==null&&(He.memoizedState.tag&1)!==0,to(e?9:8,{destroy:void 0},bx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,ge===null)throw Error(q(349));a||(hs&127)!==0||Mx(i,t,n)}return n}function Mx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=Sh(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bx(e,t,n,i){t.value=n,t.getSnapshot=i,Tx(t)&&Ax(e)}function Ex(e,t,n){return n(function(){Tx(t)&&Ax(e)})}function Tx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qn(e,n)}catch{return!0}}function Ax(e){var t=Ka(e,2);t!==null&&On(t,e,2)}function Jp(e){var t=Mn();if(typeof e=="function"){var n=e;if(e=n(),Xa){Vs(!0);try{n()}finally{Vs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t}function wx(e,t,n,i){return e.baseState=n,rg(e,de,typeof i=="function"?i:fs)}function ST(e,t,n,i,s){if(Eh(e))throw Error(q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ut.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Cx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Cx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ut.T,r={};r.types=a!==null?a.types:null,Ut.T=r;try{var o=n(s,i),l=Ut.S;l!==null&&l(r,o),mv(e,t,o)}catch(c){Kp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ut.T=a}}else try{a=n(s,i),mv(e,t,a)}catch(c){Kp(e,t,c)}}function mv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){gv(e,t,i)},function(i){return Kp(e,t,i)}):gv(e,t,n)}function gv(e,t,n){t.status="fulfilled",t.value=n,Rx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cx(e,n)))}function Kp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Rx(t),t=t.next;while(t!==i)}e.action=null}function Rx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dx(e,t){return t}function _v(e,t){if(kt){var n=ge.formState;if(n!==null){t:{var i=zt;if(kt){if(Me){e:{for(var s=Me,a=fi;s.nodeType!==8;){if(!a){s=null;break e}if(s=di(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Me=di(s.nextSibling),i=s.data==="F!";break t}}sa(i)}i=!1}i&&(t=n[0])}}return n=Mn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dx,lastRenderedState:t},n.queue=i,n=qx.bind(null,zt,i),i.dispatch=n,i=Jp(!1),a=hg.bind(null,zt,!1,i.queue),i=Mn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=ST.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function vv(e){var t=ze();return Ux(t,de,e)}function Ux(e,t,n){if(t=rg(e,t,Dx)[0],e=Tu(fs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ql(t)}catch(r){throw r===fo?xh:r}else i=t;t=ze();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,to(9,{destroy:void 0},MT.bind(null,s,n),null)),[i,a,e]}function MT(e,t){e.action=t}function yv(e){var t=ze(),n=de;if(n!==null)return Ux(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function to(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=Sh(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Nx(){return ze().memoizedState}function Au(e,t,n,i){var s=Mn();zt.flags|=e,s.memoizedState=to(1|t,{destroy:void 0},n,i===void 0?null:i)}function bh(e,t,n,i){var s=ze();i=i===void 0?null:i;var a=s.memoizedState.inst;de!==null&&i!==null&&tg(i,de.memoizedState.deps)?s.memoizedState=to(t,a,n,i):(zt.flags|=e,s.memoizedState=to(1|t,a,n,i))}function xv(e,t){Au(8390656,8,e,t)}function og(e,t){bh(2048,8,e,t)}function bT(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=Sh(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Lx(e){var t=ze().memoizedState;return bT({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(q(440));return t.impl.apply(void 0,arguments)}}function Ox(e,t){return bh(4,2,e,t)}function Ix(e,t){return bh(4,4,e,t)}function Px(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bx(e,t,n){n=n!=null?n.concat([e]):null,bh(4,4,Px.bind(null,t,e),n)}function lg(){}function zx(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&tg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Fx(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&tg(t,i[1]))return i[0];if(i=e(),Xa){Vs(!0);try{e()}finally{Vs(!1)}}return n.memoizedState=[i,t],i}function cg(e,t,n){return n===void 0||(hs&1073741824)!==0&&(Jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=US(),zt.lanes|=e,oa|=e,n)}function Hx(e,t,n,i){return Qn(n,t)?n:aa.current!==null?(e=cg(e,n,i),Qn(e,t)||(Ge=!0),e):(hs&106)===0||(hs&1073741824)!==0&&(Jt&261930)===0?(Ge=!0,e.memoizedState=n):(e=US(),zt.lanes|=e,oa|=e,t)}function Vx(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Ut.T,o={};o.types=r!==null?r.types:null,Ut.T=o,hg(e,!1,t,n);try{var l=s(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=vT(l,i);Ml(e,t,f,Kn(e))}else Ml(e,t,i,Kn(e))}catch(d){Ml(e,t,{then:function(){},status:"rejected",reason:d},Kn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function ET(){}function Qp(e,t,n,i){if(e.tag!==5)throw Error(q(476));var s=Gx(e).queue;Vx(e,s,t,Oa,n===null?ET:function(){return kx(e),n(i)})}function Gx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Oa,baseState:Oa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:Oa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kx(e){var t=Gx(e);t.next===null&&(t=e.alternate.memoizedState),Ml(e,t.next.queue,{},Kn())}function ug(){return an(oo)}function Xx(){return ze().memoizedState}function Wx(){return ze().memoizedState}function TT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Kn();e=Js(n);var i=Ks(t,e,n);i!==null&&(On(i,t,n),yl(i,t,n)),t={cache:Zm()},e.payload=t;return}t=t.return}}function AT(e,t,n){var i=Kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Eh(e)?Yx(t,n):(n=Wm(e,t,n,i),n!==null&&(On(n,e,i),Zx(n,t,i)))}function qx(e,t,n){var i=Kn();Ml(e,t,n,i)}function Ml(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eh(e))Yx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Qn(o,r))return vh(e,t,s,0),ge===null&&_h(),!1}catch{}finally{}if(n=Wm(e,t,s,i),n!==null)return On(n,e,i),Zx(n,t,i),!0}return!1}function hg(e,t,n,i){if(i={lane:2,revertLane:Mg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Eh(e)){if(t)throw Error(q(479))}else t=Wm(e,n,i,2),t!==null&&On(t,e,2)}function Eh(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function Yx(e,t){qr=Ku=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ny(e,n)}}var ju={readContext:an,use:Mh,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe,useEffectEvent:Oe},Jx={readContext:an,use:Mh,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:xv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Au(4194308,4,Px.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Au(4194308,4,e,t)},useInsertionEffect:function(e,t){Au(4,2,e,t)},useMemo:function(e,t){var n=Mn();t=t===void 0?null:t;var i=e();if(Xa){Vs(!0);try{e()}finally{Vs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Mn();if(n!==void 0){var s=n(t);if(Xa){Vs(!0);try{n(t)}finally{Vs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=AT.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:function(e){e=Jp(e);var t=e.queue,n=qx.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:lg,useDeferredValue:function(e,t){var n=Mn();return cg(n,e,t)},useTransition:function(){var e=Jp(!1);return e=Vx.bind(null,zt,e.queue,!0,!1),Mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=Mn();if(kt){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),ge===null)throw Error(q(349));(Jt&127)!==0||Mx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,xv(Ex.bind(null,i,a,e),[e]),i.flags|=2048,to(9,{destroy:void 0},bx.bind(null,i,a,n,t),null),n},useId:function(){var e=Mn(),t=ge.identifierPrefix;if(kt){var n=ki,i=Gi;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Qu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=yT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ug,useFormState:_v,useActionState:_v,useOptimistic:function(e){var t=Mn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hg.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:ag,useCacheRefresh:function(){return Mn().memoizedState=TT.bind(null,zt)},useEffectEvent:function(e){var t=Mn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(q(440));return n.impl.apply(void 0,arguments)}}},Kx={readContext:an,use:Mh,useCallback:zx,useContext:an,useEffect:og,useImperativeHandle:Bx,useInsertionEffect:Ox,useLayoutEffect:Ix,useMemo:Fx,useReducer:Tu,useRef:Nx,useState:function(){return Tu(fs)},useDebugValue:lg,useDeferredValue:function(e,t){var n=ze();return Hx(n,de.memoizedState,e,t)},useTransition:function(){var e=Tu(fs)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Ql(e),t]},useSyncExternalStore:Sx,useId:Xx,useHostTransitionStatus:ug,useFormState:vv,useActionState:vv,useOptimistic:function(e,t){var n=ze();return wx(n,de,e,t)},useMemoCache:ag,useCacheRefresh:Wx,useEffectEvent:Lx},wT={readContext:an,use:Mh,useCallback:zx,useContext:an,useEffect:og,useImperativeHandle:Bx,useInsertionEffect:Ox,useLayoutEffect:Ix,useMemo:Fx,useReducer:op,useRef:Nx,useState:function(){return op(fs)},useDebugValue:lg,useDeferredValue:function(e,t){var n=ze();return de===null?cg(n,e,t):Hx(n,de.memoizedState,e,t)},useTransition:function(){var e=op(fs)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Ql(e),t]},useSyncExternalStore:Sx,useId:Xx,useHostTransitionStatus:ug,useFormState:yv,useActionState:yv,useOptimistic:function(e,t){var n=ze();return de!==null?wx(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ag,useCacheRefresh:Wx,useEffectEvent:Lx};function lp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=Js(i);s.payload=t,n!=null&&(s.callback=n),t=Ks(e,s,i),t!==null&&(On(t,e,i),yl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=Js(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ks(e,s,i),t!==null&&(On(t,e,i),yl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Kn(),i=Js(n);i.tag=2,t!=null&&(i.callback=t),t=Ks(e,i,n),t!==null&&(On(t,e,n),yl(t,e,n))}};function Sv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ul(n,i)||!Ul(s,a):!0}function Mv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&jp.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=_e({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Qx(e){Gu(e)}function jx(e){console.error(e)}function $x(e){Gu(e)}function $u(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function bv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function $p(e,t,n){return n=Js(n),n.tag=3,n.payload={element:null},n.callback=function(){$u(e,t)},n}function tS(e){return e=Js(e),e.tag=3,e}function eS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){bv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){bv(t,n,i),typeof s!="function"&&($s===null?$s=new Set([this]):$s.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function CT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ha(t,n,s,!0),n=cn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return dn===null?oh():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Yu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),mp(e,i,s)),!1;case 22:return n.flags|=65536,i===Yu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),mp(e,i,s)),!1}throw Error(q(435,n.tag))}return mp(e,i,s),oh(),!1}if(kt)return t=cn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Vp&&(e=Error(q(422),{cause:i}),Ll(hi(e,n)))):(i!==Vp&&(t=Error(q(423),{cause:i}),Ll(hi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=hi(i,n),s=$p(e.stateNode,i,s),rp(e,s),Ie!==4&&(Ie=2)),!1;var a=Error(q(520),{cause:i});if(a=hi(a,n),Al===null?Al=[a]:Al.push(a),Ie!==4&&(Ie=2),t===null)return!0;i=hi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=$p(n.stateNode,i,e),rp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&($s===null||!$s.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=tS(s),eS(s,e,n,i),rp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var fg=Error(q(461)),Ge=!1;function Xe(e,t,n,i){t.child=e===null?mx(t,null,n,i):ka(t,e.child,n,i)}function Ev(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Va(t),i=eg(e,t,n,r,a,s),o=ng(),e!==null&&!Ge?(ig(e,t,s),ds(e,t,s)):(kt&&o&&yh(t),t.flags|=1,Xe(e,t,i,s),t.child)}function Tv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!qm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,nS(e,t,a,i,s)):(e=Mu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ul,n(r,i)&&e.ref===t.ref)return ds(e,t,s)}return t.flags|=1,e=os(a,i),e.ref=t.ref,e.return=t,t.child=e}function nS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Ul(a,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=a,pg(e,s))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,ds(e,t,s)}return tm(e,t,n,i,s)}function iS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Av(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Eu(t,a!==null?a.cachePool:null),a!==null?pv(t,a):Yp(),vx(t);else return i=t.lanes=536870912,Av(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Eu(t,a.cachePool),pv(t,a),js(),t.memoizedState=null):(e!==null&&Eu(t,null),Yp(),js());return Xe(e,t,s,n),t.child}function bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Av(e,t,n,i,s){var a=Jm();return a=a===null?null:{parent:Ve._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Eu(t,null),Yp(),vx(t),e!==null&&Ha(e,t,i,!0),t.childLanes=s,null}function wu(e,t){return t=Th({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wv(e,t,n){return ka(t,e.child,null,n),e=wu(t,t.pendingProps),e.flags|=2,Xn(t),t.memoizedState=null,e}function RT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(kt){if(i.mode==="hidden")return e=wu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},bl(null,e);if(Zp(t),(e=Me)?(e=iM(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Gi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},n=lx(e),n.return=t,t.child=n,$e=t,Me=null)):e=null,e===null)throw sa(t);return t.lanes=536870912,null}return wu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Zp(t),s)if(t.flags&256)t.flags&=-257,t=wv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(q(558));else if(Ge||Ha(e,t,n,!1),s=(n&e.childLanes)!==0,Ge||s){if(aa.current===null){if(i=ge,i!==null&&(r=Ly(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Ka(e,r),On(i,e,r),fg;oh()}t=wv(e,t,n)}else e=a.treeContext,Me=di(r.nextSibling),$e=t,kt=!0,Zs=null,fi=!1,e!==null&&ux(t,e),t=wu(t,i),t.flags|=134221824;return t}return e=os(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ar(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function tm(e,t,n,i,s){return Va(t),n=eg(e,t,n,i,void 0,s),i=ng(),e!==null&&!Ge?(ig(e,t,s),ds(e,t,s)):(kt&&i&&yh(t),t.flags|=1,Xe(e,t,n,s),t.child)}function Cv(e,t,n,i,s,a){return Va(t),t.updateQueue=null,n=xx(t,i,n,s),yx(e),i=ng(),e!==null&&!Ge?(ig(e,t,a),ds(e,t,a)):(kt&&i&&yh(t),t.flags|=1,Xe(e,t,n,a),t.child)}function Rv(e,t,n,i,s){if(Va(t),t.stateNode===null){var a=Br,r=n.contextType;typeof r=="object"&&r!==null&&(a=an(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=jp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Qm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?an(r):Br,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(lp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&jp.enqueueReplaceState(a,a.state,null),Sl(t,i,a,s),xl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Wa(n,o);a.props=l;var c=a.context,f=n.contextType;r=Br,typeof f=="object"&&f!==null&&(r=an(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Mv(t,a,i,r),Fs=!1;var h=t.memoizedState;a.state=h,Sl(t,i,a,s),xl(),c=t.memoizedState,o||h!==c||Fs?(typeof d=="function"&&(lp(t,n,d,i),c=t.memoizedState),(l=Fs||Sv(t,n,l,i,h,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Wp(e,t),r=t.memoizedProps,f=Wa(n,r),a.props=f,d=t.pendingProps,h=a.context,c=n.contextType,l=Br,typeof c=="object"&&c!==null&&(l=an(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&Mv(t,a,i,l),Fs=!1,h=t.memoizedState,a.state=h,Sl(t,i,a,s),xl();var p=t.memoizedState;r!==d||h!==p||Fs||e!==null&&e.dependencies!==null&&qu(e.dependencies)?(typeof o=="function"&&(lp(t,n,o,i),p=t.memoizedState),(f=Fs||Sv(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&qu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Ar(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ka(t,e.child,null,s),t.child=ka(t,null,n,s)):Xe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ds(e,t,s),e}function Dv(e,t,n,i){return Fa(),t.flags|=256,Xe(e,t,n,i),t.child}var em={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nm(e){return{baseLanes:e,cachePool:fx()}}function im(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=qn),e}function sS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(kt){if(s?Qs(t):js(),(e=Me)?(e=iM(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Gi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},n=lx(e),n.return=t,t.child=n,$e=t,Me=null)):e=null,e===null)throw sa(t);return Ag(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(js(),s=t.mode,a=Th({mode:"hidden",children:a},s),i=Ia(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=nm(n),i.childLanes=im(e,r,n),t.memoizedState=em,bl(null,i)):(Qs(t),dg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return DT(e,t,a,r,i,l,o,n)}return s?(js(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=os(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=os(l,s):(s=Ia(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,bl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=nm(n):(a=s.cachePool,a!==null?(o=Ve._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=fx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=im(e,r,n),t.memoizedState=em,bl(e.child,i)):(Qs(t),n=e.child,e=n.sibling,n=os(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function dg(e,t){return t=Th({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Th(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function lu(e,t,n){return ka(t,e.child,null,n),e=dg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function DT(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Qs(t),t.flags&=-257,lu(e,t,o)):t.memoizedState!==null?(js(),t.child=e.child,t.flags|=128,null):(js(),a=s.fallback,r=t.mode,s=Th({mode:"visible",children:s.children},r),a=Ia(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,ka(t,e.child,null,o),s=t.child,s.memoizedState=nm(o),s.childLanes=im(e,i,o),t.memoizedState=em,bl(null,s));if(Qs(t),Ag(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(q(419)),s.stack="",s.digest=i,Ll({value:s,source:null,stack:null})),lu(e,t,o)}if(Ge||Ha(e,t,o,!1),i=(o&e.childLanes)!==0,Ge||i){if(aa.current!==null)return lu(e,t,o);if(i=ge,i!==null&&(s=Ly(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Ka(e,s),On(i,e,s),fg;return Cm(a)||oh(),lu(e,t,o)}return Cm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Me=di(a.nextSibling),$e=t,kt=!0,Zs=null,fi=!1,e!==null&&ux(t,e),t=dg(t,s.children),t.flags|=134221824,t)}function Uv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bu(e.return,t,n)}function Nv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ju(n)===null&&(t=e),e=e.sibling}return t}function cu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function cp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function sm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=on.current;if(t.flags&128)return Il(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Il(t,r),s==="backwards"&&e!==null?(cp(e),Xe(e,t,i,n),cp(e)):Xe(e,t,i,n),i=kt?Nl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uv(e,n,t);else if(e.tag===19)Uv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Nv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,cp(t)),cu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ju(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}cu(t,!0,n,null,a,i);break;case"together":cu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Nv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),cu(t,!1,s,n,a,i)}return t.child}function Lv(e,t,n){var i=t.pendingProps;return ks(t,t.type,i.value),Xe(e,t,i.children,n),t.child}function ds(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),oa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ha(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=os(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=os(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&qu(e)))}function UT(e,t,n){switch(t.tag){case 3:zu(t,t.stateNode.containerInfo),ks(t,Ve,e.memoizedState.cache),Fa();break;case 27:case 5:Up(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:ks(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Qs(t),t.flags|=128,null;i=Ha(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?sS(e,t,n):(Qs(t),e=ds(e,t,n),e!==null?e.sibling:null)}Qs(t);break;case 19:if(t.flags&128)return sm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ha(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return sm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Il(t,on.current),i)break;return null;case 22:return t.lanes=0,iS(e,t,n,t.pendingProps);case 24:ks(t,Ve,e.memoizedState.cache)}return ds(e,t,n)}function aS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!pg(e,n)&&(t.flags&128)===0)return Ge=!1,UT(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,kt&&(t.flags&1048576)!==0&&cx(t,Nl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e=="function")qm(e)?(i=Wa(e,i),t.tag=1,t=Rv(null,t,e,i,n)):(t.tag=0,t=tm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Lm){t.tag=11,t=Ev(null,t,e,i,n);break t}else if(s===Om){t.tag=14,t=Tv(null,t,e,i,n);break t}else if(s===Hi){t.tag=10,t.type=e,t=Lv(null,t,n);break t}}throw t=Rp(e)||e,Error(q(306,t,""))}}return t;case 0:return tm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Wa(i,t.pendingProps),Rv(e,t,i,s,n);case 3:t:{if(zu(t,t.stateNode.containerInfo),e===null)throw Error(q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Wp(e,t),Sl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ks(t,Ve,i),i!==a.cache&&kp(t,[Ve],n,!0),xl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Dv(e,t,i,n);break t}else if(i!==s){s=hi(Error(q(424)),t),Ll(s),t=Dv(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=di(e.firstChild),$e=t,kt=!0,Zs=null,fi=!0,n=mx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Fa(),i===s){t=ds(e,t,n);break t}Xe(e,t,i,n)}t=t.child}return t;case 26:return Ar(e,t),e===null?(n=ry(t.type,null,t.pendingProps,null))?t.memoizedState=n:kt||(t.stateNode=ZS(t.type,t.pendingProps,Ys.current,t)):t.memoizedState=ry(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Up(t),e===null&&kt&&(i=t.stateNode=sM(t.type,t.pendingProps,Ys.current),$e=t,fi=!0,s=Me,ca(t.type)?(Rm=s,Me=di(i.firstChild)):Me=s),Xe(e,t,t.pendingProps.children,n),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&kt&&((s=i=Me)&&(i=bA(i,t.type,t.pendingProps,fi),i!==null?(t.stateNode=i,$e=t,Me=di(i.firstChild),fi=!1,s=!0):s=!1),s||sa(t)),Up(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Tm(s,a)?i=null:r!==null&&Tm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=eg(e,t,xT,null,null,n),oo._currentValue=s),Ar(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&kt&&((e=n=Me)&&(n=EA(n,t.pendingProps,fi),n!==null?(t.stateNode=n,$e=t,Me=null,e=!0):e=!1),e||sa(t)),null;case 13:return sS(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ka(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return Ev(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Ar(e,t),Xe(e,t,i,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:return Lv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Va(t),s=an(s),i=i(s),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return Tv(e,t,t.type,t.pendingProps,n);case 15:return nS(e,t,t.type,t.pendingProps,n);case 19:return sm(e,t,n);case 31:return RT(e,t,n);case 22:return iS(e,t,n,t.pendingProps);case 24:return Va(t),i=an(Ve),e===null?(s=Jm(),s===null&&(s=ge,a=Zm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Qm(t),ks(t,Ve,s)):((e.lanes&n)!==0&&(Wp(e,t),Sl(t,null,null,n),xl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ks(t,Ve,i)):(i=a.cache,ks(t,Ve,i),i!==s.cache&&kp(t,[Ve],n,!0))),Xe(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:kt&&yh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Ar(e,t),Xe(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(q(156,t.tag))}function ss(e){e.flags|=4}function up(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?cy(t,i):cy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(OS())e.flags|=8192;else throw Ba=Yu,Km}else e.flags&=-16777217}function Ov(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lM(t))if(OS())e.flags|=8192;else throw Ba=Yu,Km}function uu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Dy():536870912,e.lanes|=t,eo|=t)}function rl(e,t){if(!kt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function NT(e,t,n){var i=t.pendingProps;switch(Ym(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ls(Ve),Qr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Er(t)?ss(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ap())),Se(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ss(t),a!==null?(Se(t),Ov(t,a)):(Se(t),up(t,s,null,i,n))):a?a!==e.memoizedState?(ss(t),Se(t),Ov(t,a)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ss(t),Se(t),up(t,s,e,i,n)),null;case 27:if(Fu(t),n=Ys.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(!i){if(t.stateNode===null)throw Error(q(166));return Se(t),t.subtreeFlags&=-33554433,null}e=Xi.current,Er(t)?ov(t,e):(e=sM(s,i,n),t.stateNode=e,ss(t))}return Se(t),t.subtreeFlags&=-33554433,null;case 5:if(Fu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(!i){if(t.stateNode===null)throw Error(q(166));return Se(t),t.subtreeFlags&=-33554433,null}if(a=Xi.current,Er(t))ov(t,a);else{var r=Fl(Ys.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[sn]=t,a[Pn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(ln(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ss(t)}}return Se(t),t.subtreeFlags&=-33554433,up(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(q(166));if(e=Ys.current,Er(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=$e,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[sn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||qS(e.nodeValue,n)),e||sa(t,!0)}else e=Fl(e).createTextNode(i),e[sn]=t,t.stateNode=e}return Se(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Er(t),n!==null){if(e===null){if(!i)throw Error(q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(557));e[sn]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else n=ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xn(t),t):(Xn(t),null);if((t.flags&128)!==0)throw Error(q(558))}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Er(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[sn]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),s=!1}else s=ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Xn(t),t):(Xn(t),null)}return Xn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),uu(t,t.updateQueue),Se(t),null);case 4:return Qr(),e===null&&bg(t.stateNode.containerInfo),t.flags|=67108864,Se(t),null;case 10:return ls(t.type),Se(t),null;case 19:if($m(t),i=t.memoizedState,i===null)return Se(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)rl(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ju(e),a!==null){for(t.flags|=128,rl(i,!1),e=a.updateQueue,t.updateQueue=e,uu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ox(n,e),n=n.sibling;return Il(t,on.current&1|2),kt&&as(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Yn()>ah&&(t.flags|=128,s=!0,rl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ju(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,uu(t,e),rl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!kt)return Se(t),null}else 2*Yn()-i.renderingStartTime>ah&&n!==536870912&&(t.flags|=128,s=!0,rl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Yn(),e.sibling=null,a=on.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||kt?Il(t,a):(n=a,be(cn,t),be(on,n),dn===null&&(dn=t)),kt&&as(t,i.treeForkCount),e}return Se(t),null;case 22:case 23:return Xn(t),jm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&uu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&rn(Pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ls(Ve),Se(t),null;case 25:return null;case 30:return t.flags|=33554432,Se(t),null}throw Error(q(156,t.tag))}function LT(e,t){switch(Ym(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ls(Ve),Qr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fu(t),null;case 31:if(t.memoizedState!==null){if(Xn(t),t.alternate===null)throw Error(q(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $m(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Qr(),null;case 10:return ls(t.type),null;case 22:case 23:return Xn(t),jm(),e!==null&&rn(Pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ls(Ve),null;case 25:return null;default:return null}}function rS(e,t){switch(Ym(t),t.tag){case 3:ls(Ve),Qr();break;case 26:case 27:case 5:Fu(t);break;case 4:Qr();break;case 31:t.memoizedState!==null&&Xn(t);break;case 13:Xn(t);break;case 19:$m(t);break;case 10:ls(t.type);break;case 22:case 23:Xn(t),jm(),e!==null&&rn(Pa);break;case 24:ls(Ve)}}function jl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ce(t,t.return,o)}}function ra(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){ce(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){ce(t,t.return,f)}}function oS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_x(t,n)}catch(i){ce(e,e.return,i)}}}function lS(e,t,n){n.props=Wa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function zi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=us(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=jS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new jn(e);In(e.child,!1,SA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ce(e,t,o)}}function nn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ce(e,t,s)}else n.current=null}function th(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)nM(e.stateNode,t[n])}function Iv(e){for(var t=e.return;t!==null&&(gg(t)&&nM(e.stateNode,t.stateNode),!mg(t));)t=t.return}function El(e){for(var t=e.return;t!==null&&(gg(t)&&MA(e.stateNode,t.stateNode),!mg(t));)t=t.return}function mg(e){return e.tag===5||e.tag===3||e.tag===27}function gg(e){return e&&e.tag===7&&e.stateNode!==null}function am(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ce(e,e.return,s)}}function hp(e,t,n){try{var i=e.stateNode;iA(i,e.type,n,t),i[Pn]=t}catch(s){ce(e,e.return,s)}}function cS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ca(e.type)||e.tag===4}function fp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi)),th(e,i),te=!0;else if(s!==4&&(s===27&&(th(e,i),i=null,ca(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(rm(e,t,n,i),e=e.sibling;e!==null;)rm(e,t,n,i),e=e.sibling}function eh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),th(e,i),te=!0;else if(s!==4&&(s===27&&(th(e,i),i=null,ca(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(eh(e,t,n,i),e=e.sibling;e!==null;)eh(e,t,n,i),e=e.sibling}function uS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ln(t,i,n),t[sn]=e,t[Pn]=n}catch(a){ce(e,e.return,a)}}var nh=!1,Wn=null;function Pv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(nh=!0)}var Fi=null;function Bv(){var e=Fi;return Fi=null,e}var Nn=0;function po(e,t,n,i,s){return Nn=0,hS(e.child,t,n,i,s)}function hS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Am(r);i.push(o),o.view&&(a=!0)}else a||Am(r).view&&(a=!0);nh=!0,JS(r,Nn===0?t:t+"_"+Nn,n),Nn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||hS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function qi(e,t){for(;e!==null;)e.tag===5?KS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||qi(e.child,t)),e=e.sibling}function Cu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Cu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(q(544));var n=t.name;t=gs(t.default,t.share),t!=="none"&&(po(e,n,t,null,!1)||qi(e.child,!1))}e=e.sibling}}function om(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=us(i,n),a=gs(i.default,n.paired?i.share:i.enter);a!=="none"?po(e,s,a,null,!1)?(Cu(e),n.paired||t||no(e,i.onEnter)):qi(e.child,!1):Cu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)om(e,t),e=e.sibling;else Cu(e)}function lm(e){if(Wn!==null&&Wn.size!==0){var t=Wn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=gs(n.default,n.share);if(a!=="none"&&(po(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,no(e,n.onShare)):qi(e.child,!1)),t.delete(i),t.size===0)break}}}lm(e)}e=e.sibling}}}function cm(e){if(e.tag===30){var t=e.memoizedProps,n=us(t,e.stateNode),i=Wn!==null?Wn.get(n):void 0,s=gs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(po(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Wn.delete(n),no(e,t.onShare)):no(e,t.onExit):qi(e.child,!1)),Wn!==null&&lm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)cm(e),e=e.sibling;else Wn!==null&&lm(e)}function fS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=us(t,e.stateNode);t=gs(t.default,t.update),e.flags&=-5,t!=="none"&&po(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&fS(e);e=e.sibling}}function um(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,qi(e.child,!1))}um(e)}e=e.sibling}}function Ru(e){if(e.tag===30)e.stateNode.paired=null,qi(e.child,!1),um(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ru(e),e=e.sibling;else um(e)}function dS(e){for(e=e.child;e!==null;)e.tag===30?qi(e.child,!1):(e.subtreeFlags&33554432)!==0&&dS(e),e=e.sibling}function _g(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Nn<a.length){var c=a[Nn],f=Am(l);(c.view||f.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(f.clip)d=!0;else{d=c.rect;var h=f.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&JS(l,Nn===0?n:n+"_"+Nn,s),o&&(e.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(l,Nn===0?i:i+"_"+Nn,t.memoizedProps)),Nn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:_g(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function pS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=us(n,i),a=gs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(cA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Nn=0,s=_g(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||no(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&pS(e,t);e=e.sibling}}var Ke=!1,re=!1,Ii=!1,dp=!1,zv=typeof WeakSet=="function"?WeakSet:Set,Qe=null,Pi=!1,pl=!1,ih=!1,hm=!1;function OT(e,t,n){if(e=e.containerInfo,bm=lo,e=$y(e),km(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,d=0,h=e,p=null;e:for(;;){for(var g;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break e;if(p===i&&++f===a&&(l=o),p===r&&++d===s&&(c=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Em={focusedElem:e,selectionRange:i},lo=!1,n=(n&335544064)===n,Qe=t,t=n?9270:1024;Qe!==null;){if(e=Qe,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&cm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Pv(e),hu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&cm(i),hu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Pv(e),hu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Qe=i):(n&&fS(e),hu(n))}}Wn=null}function hu(e){for(;Qe!==null;){var t=Qe,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=Wa(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){ce(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)wm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":wm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=us(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=gs(s.default,s.update),s!=="none"&&po(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(q(163))}if(i=t.sibling,i!==null){i.return=t.return,Qe=i;break}Qe=t.return}}function mS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n),i&4&&jl(5,n);break;case 1:if(Bi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var s=Wa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&oS(n),i&512&&zi(n,n.return);break;case 3:if(Bi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_x(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&uS(n);case 26:case 5:Bi(e,n),t===null&&i&4&&am(n),i&512&&zi(n,n.return);break;case 12:Bi(e,n);break;case 31:Bi(e,n),i&4&&yS(e,n);break;case 13:Bi(e,n),i&4&&xS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qT.bind(null,n),TA(e,n))));break;case 22:if(i=n.memoizedState!==null||Ke,!i){var a=t!==null&&t.memoizedState!==null||re;t=Ke,s=re,Ke=i,(re=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),xi(e,n,i)):Bi(e,n),Ke=t,re=s}break;case 30:Bi(e,n),i&512&&zi(n,n.return);break;case 7:i&512&&zi(n,n.return);default:Bi(e,n)}}function fm(e,t){for(e=e.child;e!==null;)gS(e,t),e=e.sibling}function gS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){ce(e,e.return,l)}dm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,te=!0}catch(l){ce(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?ty(o,!0):ty(e.stateNode,!1)}catch(l){ce(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&fm(e,t);break;default:fm(e,t)}}function dm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:gS(n,i);break t;case 22:n.memoizedState===null&&dm(n,i);break t;default:dm(n,i)}}e=e.sibling}}function _S(e){var t=e.alternate;t!==null&&(e.alternate=null,_S(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Dn=!1;function yi(e,t,n){for(n=n.child;n!==null;)vS(e,t,n),n=n.sibling}function vS(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 26:re||nn(n,t),yi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!re&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:re||nn(n,t),El(n);var i=Ce,s=Dn;ca(n.type)&&(Ce=n.stateNode,Dn=!1),yi(e,t,n),aM(n.stateNode,n.type,n.memoizedProps),Ce=i,Dn=s;break;case 5:re||nn(n,t),El(n);case 6:if(n.tag===6&&El(n),i=Ce,s=Dn,Ce=null,yi(e,t,n),Ce=i,Dn=s,Ce!==null)if(Dn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode),te=!0}catch(a){ce(n,t,a)}else try{Ce.removeChild(n.stateNode),te=!0}catch(a){ce(n,t,a)}break;case 18:Ce!==null&&(Dn?(e=Ce,$v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),co(e)):$v(Ce,n.stateNode));break;case 4:i=Ce,s=Dn,Ce=n.stateNode.containerInfo,Dn=!0,yi(e,t,n),Ce=i,Dn=s;break;case 0:case 11:case 14:case 15:ra(2,n,t),re||ra(4,n,t),yi(e,t,n);break;case 1:re||(nn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lS(n,t,i)),yi(e,t,n);break;case 21:yi(e,t,n);break;case 22:re=(i=re)||n.memoizedState!==null,yi(e,t,n),re=i;break;case 30:nn(n,t),yi(e,t,n);break;case 7:re||nn(n,t),yi(e,t,n);break;default:yi(e,t,n)}}function yS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{co(e)}catch(n){ce(t,t.return,n)}}}function xS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{co(e)}catch(n){ce(t,t.return,n)}}function IT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zv),t;default:throw Error(q(435,e.tag))}}function fu(e,t){var n=IT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=YT.bind(null,e,i);i.then(s,s)}})}function xn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ca(l.type)){Ce=l.stateNode,Dn=!1;break t}break;case 5:Ce=l.stateNode,Dn=!1;break t;case 3:case 4:Ce=l.stateNode.containerInfo,Dn=!0;break t}l=l.return}if(Ce===null)throw Error(q(160));vS(r,o,a),Ce=null,Dn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)SS(t,e,n),t=t.sibling}var Si=null;function SS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}xn(t,e,n),Sn(e),s&4&&(ra(3,e,e.return),jl(3,e),ra(5,e,e.return));break;case 1:xn(t,e,n),Sn(e),s&512&&(re||i===null||nn(i,i.return)),s&64&&Ke&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Si,xn(t,e,n),Sn(e),s&512&&(re||i===null||nn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Ke)e.stateNode=ZS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Zl]||i[sn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),ln(i,t,n),i[sn]=e,je(i),t=i;break t;case"link":if(a=ly("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),ln(i,t,n),s.head.appendChild(i);break;case"meta":if(a=ly("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),ln(i,t,n),s.head.appendChild(i);break;default:throw Error(q(468,t))}i[sn]=e,je(i),t=i}e.stateNode=t}else Ke||Dm(a,e.type,e.stateNode);else e.stateNode=oy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||re||t.parentNode.removeChild(t)):s.count--,n===null?Ke||Dm(a,e.type,e.stateNode):oy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&hp(e,e.memoizedProps,i.memoizedProps);break;case 27:xn(t,e,n),Sn(e),s&512&&(re||i===null||nn(i,i.return)),i!==null&&s&4&&hp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Ii,Ii=!1,xn(t,e,n),Ii=a,Sn(e),s&512&&(re||i===null||nn(i,i.return)),e.flags&32){t=e.stateNode;try{$r(t,""),te=!0}catch(f){ce(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,hp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(dp=!0);break;case 6:if(xn(t,e,n),Sn(e),s&4){if(e.stateNode===null)throw Error(q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,te=!0}catch(f){ce(e,e.return,f)}}break;case 3:if(te=!1,Lu=null,a=Si,Si=Hl(t.containerInfo),xn(t,e,n),Si=a,Sn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{co(t.containerInfo)}catch(f){ce(e,e.return,f)}dp&&(dp=!1,MS(e)),te=!1;break;case 4:s=Ii,Ii=Ke,i=X_(),a=Si,Si=Hl(e.stateNode.containerInfo),xn(t,e,n),Sn(e),Si=a,te&&pl&&(ih=!0),te=i,Ii=s;break;case 12:xn(t,e,n),Sn(e);break;case 31:xn(t,e,n),Sn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fu(e,t)));break;case 13:xn(t,e,n),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ah=Yn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Ke,l=re,c=Ii;Ke=o||a,Ii=c||a,re=l||r,xn(t,e,n),re=l,Ii=c,Ke=o,Sn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||Ke||re||(t=r||re,n=Ke,i=re,Ke=a||Ke,re=t,Bs(e,2),Ke=n,re=i),!a&&Ii||fm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,fu(e,n))));break;case 19:xn(t,e,n),Sn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fu(e,t)));break;case 30:s&512&&(re||i===null||nn(i,i.return)),s=X_(),a=pl,r=(n&335544064)===n,o=e.memoizedProps,pl=r&&gs(o.default,o.update)!=="none",xn(t,e,n),Sn(e),r&&i!==null&&te&&(e.flags|=4),pl=a,te=s;break;case 21:break;case 7:s&512&&(re||i===null||nn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:xn(t,e,n),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(cS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(gg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(mg(s))break;s=s.return}var r=i;if(n==null)throw Error(q(160));switch(n.tag){case 27:var o=n.stateNode,l=fp(e);eh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&($r(c,""),n.flags&=-33);var f=fp(e);eh(e,f,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=fp(e);rm(e,h,d,r);break;default:throw Error(q(161))}}catch(p){ce(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function MS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;MS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,lo=!0,t.reset(),lo=!1),e=e.sibling}}function Tr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)bS(t,e),t=t.sibling;else pS(t,!1)}function bS(e,t){var n=e.alternate;if(n===null)om(e,!1);else switch(e.tag){case 3:if(hm=Pi=!1,Bv(),Tr(t,e),!Pi&&!ih){if(e=Fi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];KS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),hm=!0}Fi=null;break;case 5:Tr(t,e);break;case 4:i=Pi,Pi=!1,Tr(t,e),Pi&&(ih=!0),Pi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?om(e,!1):Tr(t,e));break;case 30:i=Pi,s=Bv(),Pi=!1,Tr(t,e),Pi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=us(a,r),r=us(n.memoizedProps,r);var o=gs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Nn=0,t=_g(e,n,t,r,o,a,!0),Nn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(no(e,e.memoizedProps.onUpdate),Fi=s):s!==null&&(s.push.apply(s,Fi),Fi=s),Pi=(e.flags&32)!==0?!0:i;break;default:Tr(t,e)}}function Bi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mS(e,t.alternate,t),t=t.sibling}function Bs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ra(4,n,n.return),Bs(n,i);break;case 1:nn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&lS(n,n.return,s),Bs(n,i);break;case 27:(i&2)!==0&&aM(n.stateNode,n.type,n.memoizedProps);case 5:nn(n,n.return),n.tag!==5&&n.tag!==27||El(n),Bs(n,i);break;case 6:El(n);break;case 26:nn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||re||s.parentNode.removeChild(s),Bs(n,i);break;case 22:n.memoizedState===null&&Bs(n,i);break;case 30:nn(n,n.return),Bs(n,i);break;case 7:nn(n,n.return);default:Bs(n,i)}e=e.sibling}}function xi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:xi(s,a,n),jl(4,a);break;case 1:if(xi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){ce(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)gx(c[s],l)}catch(f){ce(i,i.return,f)}}o&&r&64&&oS(a),zi(a,a.return);break;case 27:(n&2)!==0&&uS(a);case 5:a.tag!==5&&a.tag!==27||Iv(a),xi(s,a,n),o&&i===null&&r&4&&am(a),zi(a,a.return);break;case 6:Iv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Ke||Dm(Hl(l.ownerDocument),a.type,l),xi(s,a,n),o&&i===null&&r&4&&am(a),zi(a,a.return);break;case 12:xi(s,a,n);break;case 31:xi(s,a,n),o&&r&4&&yS(s,a);break;case 13:xi(s,a,n),o&&r&4&&xS(s,a);break;case 22:a.memoizedState===null&&xi(s,a,n),zi(a,a.return);break;case 30:xi(s,a,n),zi(a,a.return);break;case 7:zi(a,a.return);default:xi(s,a,n)}t=t.sibling}}function vg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Kl(n))}function yg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e))}function ri(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)ES(e,t,n,i),t=t.sibling;else s&&dS(t)}function ES(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ri(e,t,n,i),a&2048&&jl(9,t);break;case 1:ri(e,t,n,i);break;case 3:ri(e,t,n,i),s&&hm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Kl(a)));break;case 12:if(a&2048){ri(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){ce(t,t.return,c)}}else ri(e,t,n,i);break;case 31:ri(e,t,n,i);break;case 13:ri(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Ru(o),r._visibility&2?ri(e,t,n,i):Tl(e,t)):(s&&o!==null&&o.memoizedState!==null&&Ru(t),r._visibility&2?ri(e,t,n,i):(r._visibility|=2,wr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&vg(o,t);break;case 24:ri(e,t,n,i),a&2048&&yg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(qi(a.child,!0),qi(t.child,!0))),ri(e,t,n,i);break;default:ri(e,t,n,i)}}function wr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:wr(a,r,o,l,s),jl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?wr(a,r,o,l,s):Tl(a,r):(f._visibility|=2,wr(a,r,o,l,s)),s&&c&2048&&vg(r.alternate,r);break;case 24:wr(a,r,o,l,s),s&&c&2048&&yg(r.alternate,r);break;default:wr(a,r,o,l,s)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Tl(n,i),s&2048&&vg(i.alternate,i);break;case 24:Tl(n,i),s&2048&&yg(i.alternate,i);break;default:Tl(n,i)}t=t.sibling}}var Ua=8192;function Ca(e,t,n){if(e.subtreeFlags&Ua)for(e=e.child;e!==null;)TS(e,t,n),e=e.sibling}function TS(e,t,n){switch(e.tag){case 26:Ca(e,t,n),e.flags&Ua&&(e.memoizedState!==null?FA(n,Si,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&uy(n,e)));break;case 5:Ca(e,t,n),e.flags&Ua&&(e=e.stateNode,(t&335544128)===t&&uy(n,e));break;case 3:case 4:var i=Si;Si=Hl(e.stateNode.containerInfo),Ca(e,t,n),Si=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ua,Ua=16777216,Ca(e,t,n),Ua=i):Ca(e,t,n));break;case 30:if((e.flags&Ua)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Wn===null&&(Wn=new Map),Wn.set(i,s)}Ca(e,t,n);break;default:Ca(e,t,n)}}function AS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,CS(i,e)}AS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wS(e),e=e.sibling}function wS(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&ra(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Du(e)):ol(e);break;default:ol(e)}}function Du(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,CS(i,e)}AS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),Du(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Du(t));break;default:Du(t)}e=e.sibling}}function CS(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:ra(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Kl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var s=i.sibling,a=i.return;if(_S(i),i===n){Qe=null;break t}if(s!==null){s.return=a,Qe=s;break t}Qe=a}}}var PT={getCacheForType:function(e){var t=an(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return an(Ve).controller.signal}},BT=typeof WeakMap=="function"?WeakMap:Map,ne=0,ge=null,qt=null,Jt=0,oe=0,Gn=null,Xs=!1,mo=!1,xg=!1,ps=0,Ie=0,oa=0,za=0,sh=0,qn=0,eo=0,Al=null,Un=null,pm=!1,Ah=0,RS=0,ah=1/0,rh=null,$s=null,Ne=0,bi=null,qa=null,Wi=0,mm=0,gm=null,DS=null,Zr=null,Jr=null,Kr=null,wl=0,Uu=null;function Kn(){return(ne&2)!==0&&Jt!==0?Jt&-Jt:Ut.T!==null?Mg():Oy()}function US(){if(qn===0)if((Jt&536870912)===0||kt){var e=$c;$c<<=1,($c&3932160)===0&&($c=262144),qn=e}else qn=536870912;return e=cn.current,e!==null&&(e.flags|=32),qn}function no(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=jS(us(e.memoizedProps,n))),Jr===null&&(Jr=[]),Jr.push(t.bind(null,i))}}function On(e,t,n){(e===ge&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(io(e,0),Ws(e,Jt,qn,!1)),Yl(e,n),((ne&2)===0||e!==ge)&&(e===ge&&((ne&2)===0&&(za|=n),Ie===4&&Ws(e,Jt,qn,!1)),Zi(e))}function NS(e,t,n){if((ne&6)!==0)throw Error(q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ql(e,t),s=i?HT(e,t):pp(e,t,!0),a=i;do{if(s===0){mo&&!i&&Ws(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!zT(n)){s=pp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Al;var l=o.current.memoizedState.isDehydrated;if(l&&(io(o,r).flags|=256),r=pp(o,r,!1),r!==2&&r!==6){if(xg&&!l){o.errorRecoveryDisabledLanes|=a,za|=a,s=4;break t}a=Un,Un=s,a!==null&&(Un===null?Un=a:Un.push.apply(Un,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){io(e,0),Ws(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ws(i,t,qn,!Xs);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error(q(329))}if((t&62914560)===t&&(s=Ah+300-Yn(),10<s)){if(Ws(i,t,qn,!Xs),fh(i,0,!0)!==0)break t;Wi=t,i.timeoutHandle=Eg(Fv.bind(null,i,n,Un,rh,pm,t,qn,za,eo,Xs,a,"Throttled",-0,0),s);break t}Fv(i,n,Un,rh,pm,t,qn,za,eo,Xs,a,null,-0,0)}}break}while(!0);Zi(e)}function Fv(e,t,n,i,s,a,r,o,l,c,f,d,h,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Wn=null,TS(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=Vl.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?Ah-Yn():(a&4194048)===a?RS-Yn():0,g=HA(d,g),g!==null)){Wi=a,e.cancelPendingCommit=g(Vv.bind(null,e,t,a,n,i,s,r,o,l,c,f,d,null,h,p)),Ws(e,a,r,!c);return}Vv(e,t,a,n,i,s,r,o,l,c,f,d)}function zT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Qn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ws(e,t,n,i){t=Ry(e,t),t&=~sh,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Jn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Uy(e,n,t)}function wh(){return(ne&6)===0?($l(0,!1),!1):!0}function Sg(){if(qt!==null){if(oe===0)var e=qt.return;else e=qt,rs=Qa=null,sg(e),Wr=null,Ol=0,e=qt;for(;e!==null;)rS(e.alternate,e),e=e.return;qt=null}}function io(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,rA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Wi=0,Sg(),ge=e,qt=n=os(e.current,null),Jt=t,oe=0,Gn=null,Xs=!1,mo=ql(e,t),xg=!1,eo=qn=sh=za=oa=Ie=0,Un=Al=null,pm=!1,ps=Ry(e,t),_h(),n}function LS(e,t){zt=null,Ut.H=ju,t===fo||t===xh?(t=fv(),oe=3):t===Km?(t=fv(),oe=4):oe=t===fg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,qt===null&&(Ie=1,$u(e,hi(t,e.current)))}function OS(){var e=cn.current;return e===null?!0:(Jt&4194048)===Jt?dn===null:(Jt&62914560)===Jt||(Jt&536870912)!==0?e===dn:!1}function IS(){var e=Ut.H;return Ut.H=ju,e===null?ju:e}function PS(){var e=Ut.A;return Ut.A=PT,e}function oh(){Ie=4,Xs||(Jt&4194048)!==Jt&&cn.current!==null||(mo=!0),(oa&134217727)===0&&(za&134217727)===0||ge===null||Ws(ge,Jt,qn,!1)}function pp(e,t,n){var i=ne;ne|=2;var s=IS(),a=PS();(ge!==e||Jt!==t)&&(rh=null,io(e,t)),t=!1;var r=Ie;t:do try{if(oe!==0&&qt!==null){var o=qt,l=Gn;switch(oe){case 8:Sg(),r=6;break t;case 3:case 2:case 9:case 6:cn.current===null&&(t=!0);var c=oe;if(oe=0,Gn=null,Hr(e,o,l,c),n&&mo){r=0;break t}break;default:c=oe,oe=0,Gn=null,Hr(e,o,l,c)}}FT(),r=Ie;break}catch(f){LS(e,f)}while(!0);return t&&e.shellSuspendCounter++,rs=Qa=null,ne=i,Ut.H=s,Ut.A=a,qt===null&&(ge=null,Jt=0,_h()),r}function FT(){for(;qt!==null;)BS(qt)}function HT(e,t){var n=ne;ne|=2;var i=IS(),s=PS();ge!==e||Jt!==t?(rh=null,ah=Yn()+500,io(e,t)):mo=ql(e,t);t:do try{if(oe!==0&&qt!==null){t=qt;var a=Gn;e:switch(oe){case 1:oe=0,Gn=null,Hr(e,t,a,1);break;case 2:case 9:if(hv(a)){oe=0,Gn=null,Hv(t);break}t=function(){oe!==2&&oe!==9||ge!==e||(oe=7),Zi(e)},a.then(t,t);break t;case 3:oe=7;break t;case 4:oe=5;break t;case 7:hv(a)?(oe=0,Gn=null,Hv(t)):(oe=0,Gn=null,Hr(e,t,a,7));break;case 5:var r=null;switch(qt.tag){case 26:r=qt.memoizedState;case 5:case 27:var o=qt;if(r?lM(r):o.stateNode.complete){oe=0,Gn=null;var l=o.sibling;if(l!==null)qt=l;else{var c=o.return;c!==null?(qt=c,Ch(c)):qt=null}break e}}oe=0,Gn=null,Hr(e,t,a,5);break;case 6:oe=0,Gn=null,Hr(e,t,a,6);break;case 8:Sg(),Ie=6;break t;default:throw Error(q(462))}}VT();break}catch(f){LS(e,f)}while(!0);return rs=Qa=null,Ut.H=i,Ut.A=s,ne=n,qt!==null?0:(ge=null,Jt=0,_h(),Ie)}function VT(){for(;qt!==null&&!sE();)BS(qt)}function BS(e){var t=aS(e.alternate,e,ps);e.memoizedProps=e.pendingProps,t===null?Ch(e):qt=t}function Hv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cv(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=Cv(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:sg(t);var i=t;i===$e&&(kt?(Wu(i),i.tag===5&&i.stateNode!=null&&(Me=i.stateNode)):(Wu(i),kt=!0));default:rS(n,t),t=qt=ox(t,ps),t=aS(n,t,ps)}e.memoizedProps=e.pendingProps,t===null?Ch(e):qt=t}function Hr(e,t,n,i){rs=Qa=null,sg(t),Wr=null,Ol=0;var s=t.return;try{if(CT(e,s,t,n,Jt)){Ie=1,$u(e,hi(n,e.current)),qt=null;return}}catch(a){if(s!==null)throw qt=s,a;Ie=1,$u(e,hi(n,e.current)),qt=null;return}t.flags&32768?(kt||i===1?e=!0:mo||(Jt&536870912)!==0?e=!1:(Xs=e=!0,(i===2||i===9||i===3||i===6)&&(i=cn.current,i!==null&&i.tag===13&&(i.flags|=16384))),zS(t,e)):Ch(t)}function Ch(e){var t=e;do{if((t.flags&32768)!==0){zS(t,Xs);return}e=t.return;var n=NT(t.alternate,t,ps);if(n!==null){qt=n;return}if(t=t.sibling,t!==null){qt=t;return}qt=t=e}while(t!==null);Ie===0&&(Ie=5)}function zS(e,t){do{var n=LT(e.alternate,e);if(n!==null){n.flags&=32767,qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qt=e;return}qt=e=n}while(e!==null);Ie=6,qt=null}function Vv(e,t,n,i,s,a,r,o,l,c,f,d){e.cancelPendingCommit=null;do Rh();while(Ne!==0);if((ne&6)!==0)throw Error(q(327));if(t!==null){if(t===e.current)throw Error(q(177));e===ge&&(qt=ge=null,Jt=0),qa=t,bi=e,Wi=n,gm=s,DS=i,GT(e,t,n,r,o,l,d)}}function GT(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(mm=o,o|=Xm,pE(e,n,o,i,s,a),Jr=null,(n&335544064)===n?(Kr=gT(e),i=10262):(Kr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,ZT(Hu,function(){return xm(),null})):(e.callbackNode=null,e.callbackPriority=0),nh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null,s=ie.p,ie.p=2,a=ne,ne|=4;try{OT(e,t,n)}finally{ne=a,ie.p=s,Ut.T=i}}Ne=1,nh?Zr=fA(r,e.containerInfo,Kr,_m,vm,XT,ym,xm,kT,null,null):(_m(),vm(),ym())}function kT(e){if(Ne!==0){var t=bi.onRecoverableError;t(e,{componentStack:null})}}function XT(){Ne===3&&(Ne=0,bS(qa,bi),Ne=4)}function _m(){if(Ne===1){Ne=0;var e=bi,t=qa,n=Wi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null;var s=ie.p;ie.p=2;var a=ne;ne|=4;try{pl=ih=!1,SS(t,e,n),n=Em;var r=$y(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&jy(o.ownerDocument.documentElement,o)){if(l!==null&&km(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var u=iv(o,x),_=iv(o,m);if(u&&_&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==_.node||p.focusOffset!==_.offset)){var v=d.createRange();v.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(v),p.extend(_.node,_.offset)):(v.setEnd(_.node,_.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}lo=!!bm,Em=bm=null}finally{ne=a,ie.p=s,Ut.T=i}}e.current=t,Ne=2}}function vm(){if(Ne===2){Ne=0;var e=bi,t=qa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ut.T,Ut.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{mS(e,t.alternate,t)}finally{ne=s,ie.p=i,Ut.T=n}}Ne=3}}function ym(){if(Ne===4||Ne===3){Ne=0;var e=Zr;Zr=null,aE();var t=bi,n=qa,i=Wi,s=DS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ne=5:(Ne=0,qa=bi=null,FS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&($s=null),Bm(i),n=n.stateNode,Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Wl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ut.T,a=ie.p,ie.p=2,Ut.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ut.T=n,ie.p=a}}if(s=Jr,r=Kr,Kr=null,s!==null&&(Jr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Wi&3)!==0&&Rh(),Zi(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Uu?wl++:(wl=0,Uu=t):(wl=0,Uu=null),$l(0,!1)}}function FS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kl(t)))}function Rh(){return Zr!==null&&(Zr.skipTransition(),Zr=null),_m(),vm(),ym(),xm()}function xm(){if(Ne!==5)return!1;var e=bi,t=mm;mm=0;var n=Bm(Wi),i=Ut.T,s=ie.p;try{ie.p=32>n?32:n,Ut.T=null,n=gm,gm=null;var a=bi,r=Wi;if(Ne=0,qa=bi=null,Wi=0,(ne&6)!==0)throw Error(q(331));var o=ne;if(ne|=4,wS(a.current),ES(a,a.current,r,n),ne=o,$l(0,!1),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Wl,a)}catch{}return!0}finally{ie.p=s,Ut.T=i,FS(e,t)}}function Gv(e,t,n){t=hi(n,t),t=$p(e.stateNode,t,2),e=Ks(e,t,2),e!==null&&(Yl(e,2),Zi(e))}function ce(e,t,n){if(e.tag===3)Gv(e,e,n);else for(;t!==null;){if(t.tag===3){Gv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($s===null||!$s.has(i))){e=hi(n,e),n=tS(2),i=Ks(t,n,2),i!==null&&(eS(n,i,t,e),Yl(i,2),Zi(i));break}}t=t.return}}function mp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new BT;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(xg=!0,s.add(n),e=WT.bind(null,e,t,n),t.then(e,e))}function WT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(Jt&n)===n&&((Ie===4||Ie===3&&(Jt&62914560)===Jt&&300>Yn()-Ah)&&(ne&2)===0?io(e,0):sh|=n,eo===Jt&&(eo=0)),Zi(e)}function HS(e,t){t===0&&(t=Dy()),e=Ka(e,t),e!==null&&(Yl(e,t),Zi(e))}function qT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),HS(e,n)}function YT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(q(314))}i!==null&&i.delete(t),HS(e,n)}function ZT(e,t){return Im(e,t)}var so=null,Cr=null,Sm=!1,lh=!1,gp=!1,qs=0;function Zi(e){e!==Cr&&e.next===null&&(Cr===null?so=Cr=e:Cr=Cr.next=e),lh=!0,Sm||(Sm=!0,KT())}function $l(e,t){if(!gp&&lh){gp=!0;do for(var n=!1,i=so;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Jn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,kv(i,a))}else a=Jt,a=fh(i,i===ge?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||ql(i,a)||(n=!0,kv(i,a));i=i.next}while(n);gp=!1}}function JT(){VS()}function VS(){lh=Sm=!1;var e=0;qs!==0&&aA()&&(e=qs);for(var t=Yn(),n=null,i=so;i!==null;){var s=i.next,a=GS(i,t);a===0?(i.next=null,n===null?so=s:n.next=s,s===null&&(Cr=n)):(n=i,(e!==0||(a&3)!==0)&&(lh=!0)),i=s}Ne!==0&&Ne!==5||$l(e,!1),qs!==0&&(qs=0)}function GS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Jn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=dE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ge,n=Jt,n=fh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Zd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ql(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Zd(i),Bm(n)){case 2:case 8:n=wy;break;case 32:n=Hu;break;case 268435456:n=Cy;break;default:n=Hu}return i=kS.bind(null,e),n=Im(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Zd(i),e.callbackPriority=2,e.callbackNode=null,2}function kS(e,t){if(Ne!==0&&Ne!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rh()&&e.callbackNode!==n)return null;var i=Jt;return i=fh(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(NS(e,i,t),GS(e,Yn()),e.callbackNode!=null&&e.callbackNode===n?kS.bind(null,e):null)}function kv(e,t){if(Rh())return null;NS(e,t,!0)}function KT(){oA(function(){(ne&6)!==0?Im(Ay,JT):VS()})}function Mg(){if(qs===0){var e=Ga;e===0&&(e=jc,jc<<=1,(jc&261888)===0&&(jc=256)),qs=e}return qs}function Xv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yu(e)}function QT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Xv((s[Pn]||null).action),r=i.submitter;r&&(t=(t=r[Pn]||null)?Xv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new ph("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qs!==0){var l=new FormData(s,r);Qp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Qp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(du=0;du<Hp.length;du++)pu=Hp[du],Wv=pu.toLowerCase(),qv=pu[0].toUpperCase()+pu.slice(1),Ei(Wv,"on"+qv);var pu,Wv,qv,du;Ei(ex,"onAnimationEnd");Ei(nx,"onAnimationIteration");Ei(ix,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(lT,"onTransitionRun");Ei(cT,"onTransitionStart");Ei(uT,"onTransitionCancel");Ei(sx,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);Za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Za("onBeforeInput",["compositionend","keypress","textInput","paste"]);Za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl));function XS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Gu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Gu(f)}s.currentTarget=null,a=l}}}}function Wt(e,t){var n=t[H_];n===void 0&&(n=t[H_]=new Set);var i=e+"__bubble";n.has(i)||(WS(t,e,2,!1),n.add(i))}function _p(e,t,n){var i=0;t&&(i|=4),WS(n,e,i,t)}var mu="_reactListening"+Math.random().toString(36).slice(2);function bg(e){if(!e[mu]){e[mu]=!0,Py.forEach(function(n){n!=="selectionchange"&&(jT.has(n)||_p(n,!1,e),_p(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mu]||(t[mu]=!0,_p("selectionchange",!1,t))}}function WS(e,t,n,i){switch(mM(t)){case 2:var s=XA;break;case 8:s=WA;break;default:s=Dg}n=s.bind(null,t,n,e),s=void 0,!Pp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function vp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Na(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Xy(function(){var c=a,f=Fm(n),d=[];t:{var h=ax.get(e);if(h!==void 0){var p=ph,g=e;switch(e){case"keypress":if(Su(n)===0)break t;case"keydown":case"keyup":p=zE;break;case"focusin":g="focus",p=tp;break;case"focusout":g="blur",p=tp;break;case"beforeblur":case"afterblur":p=tp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=AE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kE;break;case ex:case nx:case ix:p=RE;break;case sx:p=WE;break;case"scroll":case"scrollend":p=EE;break;case"wheel":p=YE;break;case"copy":case"cut":case"paste":p=UE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=K_;break;case"submit":p=VE;break;case"toggle":case"beforetoggle":p=JE}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){var y=_;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||u===null||(y=Rl(_,u),y!=null&&x.push(zl(_,y,v))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,n,f),d.push({event:h,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Ip&&(g=n.relatedTarget||n.fromElement)&&(Na(g)||g[uo]))break t;(h||p)&&(g=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Na(p):null,p!==null&&(m=Xl(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(h=null,p=c),h!==p&&(x=Z_,y="onMouseLeave",u="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=K_,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=h==null?g:fl(h),v=p==null?g:fl(p),g=new x(y,_+"leave",h,n,f),g.target=m,g.relatedTarget=v,y=null,Na(f)===c&&(x=new x(u,_+"enter",p,n,f),x.target=v,x.relatedTarget=m,y=x),m=y,x=h&&p?bp(h,p,$T):null,h!==null&&Yv(d,g,h,x,!1),p!==null&&m!==null&&Yv(d,m,p,x,!0)))}t:{if(h=c?fl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=tv;else if($_(h))if(Ky)A=aT;else{A=iT;var w=nT}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&zm(c.elementType)&&(A=tv):A=sT;if(A&&(A=A(e,c))){Jy(d,A,n,f);break t}w&&w(e,h,c)}switch(w=c?fl(c):window,e){case"focusin":($_(w)||w.contentEditable==="true")&&(Or=w,zp=c,_l=null);break;case"focusout":_l=zp=Or=null;break;case"mousedown":Fp=!0;break;case"contextmenu":case"mouseup":case"dragend":Fp=!1,sv(d,n,f);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":sv(d,n,f)}var T;if(Gm)t:{switch(e){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else Lr?Yy(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(qy&&n.locale!=="ko"&&(Lr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Lr&&(T=Wy()):(Gs=f,Hm="value"in Gs?Gs.value:Gs.textContent,Lr=!0)),w=ch(c,R),0<w.length&&(R=new J_(R,e,null,n,f),d.push({event:R,listeners:w}),T?R.data=T:(T=Zy(n),T!==null&&(R.data=T)))),(T=QE?jE(e,n):$E(e,n))&&(R=ch(c,"onBeforeInput"),0<R.length&&(w=new J_("onBeforeInput","beforeinput",null,n,f),d.push({event:w,listeners:R}),w.data=T)),QT(d,e,c,n,f)}XS(d,t)})}function zl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ch(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Rl(e,n),s!=null&&i.unshift(zl(e,s,a)),s=Rl(e,t),s!=null&&i.push(zl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function $T(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Rl(n,a),c!=null&&r.unshift(zl(n,c,l))):s||(c=Rl(n,a),c!=null&&r.push(zl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var tA=/\r\n?/g,eA=/\u0000|\uFFFD/g;function Zv(e){return(typeof e=="string"?e:""+e).replace(tA,`
`).replace(eA,"")}function qS(e,t){return t=Zv(t),Zv(e)===t}function le(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||$r(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&$r(e,""+i);else return;break;case"className":eu(e,"class",i);break;case"tabIndex":eu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":eu(e,n,i);break;case"style":ky(e,i,a);return;case"data":if(t!=="object"){eu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",s.name,s,null),le(e,t,"formEncType",s.formEncType,s,null),le(e,t,"formMethod",s.formMethod,s,null),le(e,t,"formTarget",s.formTarget,s,null)):(le(e,t,"encType",s.encType,s,null),le(e,t,"method",s.method,s,null),le(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Vi);return;case"onScroll":i!=null&&Wt("scroll",e);return;case"onScrollEnd":i!=null&&Wt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=yu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),vu(e,"popover",i);break;case"xlinkActuate":is(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":is(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":is(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":is(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":is(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":is(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":is(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":is(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":is(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=ME.get(n)||n,vu(e,n,i);else return}te=!0}function Mm(e,t,n,i,s,a){switch(n){case"style":ky(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")$r(e,i);else if(typeof i=="number"||typeof i=="bigint")$r(e,""+i);else return;break;case"onScroll":i!=null&&Wt("scroll",e);return;case"onScrollEnd":i!=null&&Wt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Vi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!By.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Pn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}te=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):vu(e,n,i)}return}te=!0}function ln(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:le(e,t,a,r,n,null)}}s&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(q(137,t));break;default:le(e,t,i,f,n,null)}}Hy(e,a,o,l,c,r,s,!1);return;case"select":Wt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:le(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Gr(e,!!i,t,!1):n!=null&&Gr(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(q(91));break;default:le(e,t,r,o,n,null)}Gy(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<Bl.length;i++)Wt(Bl[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:le(e,t,c,i,n,null)}return;default:if(zm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Mm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}var nA={};function iA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||le(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(te=!0),a=p;break;case"name":p!==d&&(te=!0),s=p;break;case"checked":p!==d&&(te=!0),c=p;break;case"defaultChecked":p!==d&&(te=!0),f=p;break;case"value":p!==d&&(te=!0),r=p;break;case"defaultValue":p!==d&&(te=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,t));break;default:p!==d&&le(e,t,h,p,i,d)}}Op(e,r,o,l,c,f,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||le(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(te=!0),h=a;break;case"defaultValue":a!==l&&(te=!0),o=a;break;case"multiple":a!==l&&(te=!0),r=a;default:a!==l&&le(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?Gr(e,!!n,h,!1):!!i!=!!n&&(t!=null?Gr(e,!!n,t,!0):Gr(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(te=!0),h=s;break;case"defaultValue":s!==a&&(te=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(q(91));break;default:s!==a&&le(e,t,r,s,i,a)}Vy(e,h,p);return;case"option":for(var g in n)if(h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:le(e,t,g,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":h!==p&&(te=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:le(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&le(e,t,x,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(q(137,t));break;default:le(e,t,c,h,i,p)}return;default:if(zm(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Mm(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||Mm(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&le(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||le(e,t,d,h,i,p)}function Jv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Jv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&Jv(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bm=null,Em=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function Kv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function YS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ZS(e,t,n,i){return n=Fl(n).createElement(e),n[sn]=i,n[Pn]=t,ln(n,e,t),je(n),n}function Tm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yp=null;function aA(){var e=window.event;return e&&e.type==="popstate"?e===yp?!1:(yp=e,!0):(yp=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,rA=typeof clearTimeout=="function"?clearTimeout:void 0,Qv=typeof Promise=="function"?Promise:void 0,jv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Eg,oA=typeof queueMicrotask=="function"?queueMicrotask:typeof Qv<"u"?function(e){return Qv.resolve(null).then(e).catch(lA)}:Eg;function lA(e){setTimeout(function(){throw e})}function ca(e){return e==="head"}function $v(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),co(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Sp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Sp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Zl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Sp(e.ownerDocument.body);n=s}while(n);co(t)}function ty(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function JS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function KS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function QS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Am(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return QS(t,n,e)}function cA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return QS(t,n,e)}function uA(e){return e.documentElement.clientHeight}function hA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function fA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(uA(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,u=0,_=0;_<m.length;_++){var v=m[_];if(!v.complete){var y=v.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<h.innerHeight&&y.left<h.innerWidth){if(u+=cM(v),u>Ou){x.length=g;break}v=new Promise(hA.bind(v)),x.push(v)}}}if(0<x.length)return h=Promise.race([Promise.all(x),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var d=[];return f.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var g=h[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var u=m=void 0,_=!0,v=0;v<g.length;v++){var y=g[v],A=y.width;if(m===void 0)m=A;else if(m!==A){_=!1;break}if(A=y.height,u===void 0)u=A;else if(u!==A){_=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}_&&m!==void 0&&u!==void 0&&(x.setKeyframes(g),_=getComputedStyle(x.target,x.pseudoElement),_.width!==m||_.height!==u)&&(_=g[0],_.width=m,_.height=u,_=g[g.length-1],_.width=m,_.height=u,x.setKeyframes(g))}}r()},function(h){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&l(h)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function La(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}La.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:_e({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};La.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};La.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jS(e){return{name:e,group:new La("group",e),imagePair:new La("image-pair",e),old:new La("old",e),new:new La("new",e)}}function jn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}jn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if($S(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=ao(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),In(this._fragmentFiber.child,!1,dA,e,o,i)}this._eventListeners=a}};function dA(e,t,n,i){return We(e).addEventListener(t,n,i),!1}jn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=$S(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=ao(s.optionsOrUseCapture),In(this._fragmentFiber.child,!1,pA,e,n,s),i.splice(t,1),a!==null&&a()}};function pA(e,t,n,i){return We(e).removeEventListener(t,n,i),!1}function ao(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function ey(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function $S(e,t,n,i){if(e.length===0)return-1;i=ey(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&ey(a.optionsOrUseCapture)===i)return s}return-1}jn.prototype.dispatchEvent=function(e){var t=Ya(this._fragmentFiber);if(t===null)return!0;t=We(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,ao(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,ao(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};jn.prototype.focus=function(e){In(this._fragmentFiber.child,!0,tM,e,void 0,void 0)};function tM(e,t){return e.tag===6?!1:(e=We(e),AA(e,t))}jn.prototype.focusLast=function(e){var t=[];In(this._fragmentFiber.child,!0,Tg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!tM(t[n],e);n--);};function Tg(e,t){return t.push(e),!1}jn.prototype.blur=function(){var e=Ya(this._fragmentFiber);e!==null&&(e=We(e),e=Fl(e).activeElement,e!==null&&In(this._fragmentFiber.child,!1,mA,e,void 0,void 0))};function mA(e,t){return e.tag===6?!1:(e=We(e),e===t||e.contains(t)?(t.blur(),!0):!1)}jn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),In(this._fragmentFiber.child,!1,gA,e,void 0,void 0)};function gA(e,t){return e.tag===6||(e=We(e),t.observe(e)),!1}jn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),In(this._fragmentFiber.child,!1,_A,e,void 0,void 0);for(var n=t=0;n<Mi.length;n++){var i=Mi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Mi[t++]=i}Mi.length=t}};function _A(e,t){return e.tag===6||(e=We(e),t.unobserve(e)),!1}var Mi=[],xp=!1;function vA(e,t,n){Mi.push({fragmentInstance:e,observer:t,instance:n}),xp||(xp=!0,wA(function(){xp=!1;var i=Mi;Mi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}jn.prototype.getClientRects=function(){var e=[];return In(this._fragmentFiber.child,!1,yA,e,void 0,void 0),e};function yA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=We(e),t.push.apply(t,e.getClientRects());return!1}jn.prototype.getRootNode=function(e){var t=Ya(this._fragmentFiber);return t===null?this:We(t).getRootNode(e)};jn.prototype.compareDocumentPosition=function(e){var t=Ya(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];In(this._fragmentFiber.child,!1,Tg,n,void 0,void 0);var i=We(t);if(n.length===0){if(n=i,O_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=My(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=We(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=We(n[0]),s=We(n[n.length-1]);var a=O_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||xA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function xA(e,t,n,i,s){var a=Na(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Ya(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=bp(n,a,I_),t===null?t=!1:(In(t,!0,Kb,a,n),a=Rr,Rr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=bp(i,a,I_),t===null?t=!1:(In(t,!0,Qb,a,i),a=Rr,Mp=Rr=null,t=a!==null)),t):!1}function ny(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}jn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(q(566));var t=[];In(this._fragmentFiber.child,!1,Tg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=My(this._fragmentFiber);if(i=n?i[1]||i[0]||Ya(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=We(i),ny(e,n);return}if(i=We(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=We(s),ny(s,n)):We(s).scrollIntoView(e),i+=n?-1:1}};function SA(e,t){return e=We(e),eM(e,t),!1}function eM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function nM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,ao(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Mi.length;o++){var l=Mi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Mi[r++]=l)}Mi.length=r,a.observe(e)}),eM(e,t))}function MA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,ao(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?vA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function wm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wm(n),dh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function bA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function EA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function iM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=di(e.nextSibling),e===null))return null;return e}function Cm(e){return e.data==="$?"||e.data==="$~"}function Ag(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function TA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function di(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rm=null;function iy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return di(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function sy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function AA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function wA(e){jv(function(){jv(function(t){return e(t)})})}function sM(e,t,n){switch(t=Fl(n),e){case"html":if(e=t.documentElement,!e)throw Error(q(452));return e;case"head":if(e=t.head,!e)throw Error(q(453));return e;case"body":if(e=t.body,!e)throw Error(q(454));return e;default:throw Error(q(451))}}function aM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&le(e,t,i,null,nA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Vi&&(e.onclick=null),dh(e)}function Sp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dh(e)}var pi=new Map,ay=new Set;function Hl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var _s=ie.d;ie.d={f:CA,r:RA,D:DA,C:UA,L:NA,m:LA,X:IA,S:OA,M:PA};function CA(){var e=_s.f(),t=wh();return e||t}function RA(e){var t=ho(e);t!==null&&t.tag===5&&t.type==="form"?kx(t):_s.r(e)}var go=typeof document>"u"?null:document;function rM(e,t,n){var i=go;if(i&&typeof t=="string"&&t){var s=ui(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),ay.has(s)||(ay.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ln(t,"link",e),je(t),i.head.appendChild(t)))}}function DA(e){_s.D(e),rM("dns-prefetch",e,null)}function UA(e,t){_s.C(e,t),rM("preconnect",e,t)}function NA(e,t,n){_s.L(e,t,n);var i=go;if(i&&e&&t){var s='link[rel="preload"][as="'+ui(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ui(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ui(n.imageSizes)+'"]')):s+='[href="'+ui(e)+'"]';var a=s;switch(t){case"style":a=ro(e);break;case"script":a=_o(e)}if(!(pi.has(a)||(e=_e({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),pi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(tc(a))||t==="script"&&i.querySelector(ec(a))))){var r=i.createElement("link");ln(r,"link",e),t==="style"&&(r[Vu]=!0,r.onload=r.onerror=function(){Iy(r)}),je(r),i.head.appendChild(r)}}}function LA(e,t){_s.m(e,t);var n=go;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ui(i)+'"][href="'+ui(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=_o(e)}if(!pi.has(a)&&(e=_e({rel:"modulepreload",href:e},t),pi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ec(a)))return}i=n.createElement("link"),ln(i,"link",e),je(i),n.head.appendChild(i)}}}function OA(e,t,n){_s.S(e,t,n);var i=go;if(i&&e){var s=Vr(i).hoistableStyles,a=ro(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(tc(a)))o.loading=5;else{e=_e({rel:"stylesheet",href:e,"data-precedence":t},n),(n=pi.get(a))&&wg(e,n);var l=r=i.createElement("link");je(l),ln(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Nu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function IA(e,t){_s.X(e,t);var n=go;if(n&&e){var i=Vr(n).hoistableScripts,s=_o(e),a=i.get(s);a||(a=n.querySelector(ec(s)),a||(e=_e({src:e,async:!0},t),(t=pi.get(s))&&Cg(e,t),a=n.createElement("script"),je(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function PA(e,t){_s.M(e,t);var n=go;if(n&&e){var i=Vr(n).hoistableScripts,s=_o(e),a=i.get(s);a||(a=n.querySelector(ec(s)),a||(e=_e({src:e,async:!0,type:"module"},t),(t=pi.get(s))&&Cg(e,t),a=n.createElement("script"),je(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function ry(e,t,n,i){var s=(s=Ys.current)?Hl(s):null;if(!s)throw Error(q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=ro(n.href),t=Vr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ro(n.href);var a=Vr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(tc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=pi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pi.set(e,a)),BA(s,e,a,r.state))),t&&i===null)throw Error(q(528,""));return r}if(t&&i!==null)throw Error(q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=_o(n),t=Vr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,e))}}function ro(e){return'href="'+ui(e)+'"'}function tc(e){return'link[rel="stylesheet"]['+e+"]"}function oM(e){return _e({},e,{"data-precedence":e.precedence,precedence:null})}function BA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Vu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Vu]=!0,t.onload=t.onerror=Iy.bind(null,t),ln(t,"link",n),je(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function _o(e){return'[src="'+ui(e)+'"]'}function ec(e){return"script[async]"+e}function oy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ui(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=_e({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),ln(i,"style",s),Nu(i,n.precedence,e),t.instance=i;case"stylesheet":s=ro(n.href);var a=e.querySelector(tc(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=oM(n),(s=pi.get(s))&&wg(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),t.state.loading|=4,Nu(a,n.precedence,e),t.instance=a;case"script":return a=_o(n.src),(s=e.querySelector(ec(a)))?(t.instance=s,je(s),s):(i=n,(s=pi.get(a))&&(i=_e({},n),Cg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),ln(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Nu(i,n.precedence,e));return t.instance}function Nu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lu=null;function ly(e,t,n){if(Lu===null){var i=new Map,s=Lu=new Map;s.set(n,i)}else s=Lu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Zl]||a[sn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Dm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function zA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function lM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function uy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=cM(t),e.suspenseyImages.push(t)),e=VA.bind(e),t.decode().then(e,e))}function FA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ro(i.href),a=t.querySelector(tc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=oM(i),(s=pi.get(s))&&wg(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Vl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ou=0;function HA(e,t){return e.stylesheets&&e.count===0&&Iu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Iu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Ou===0&&(Ou=62500*sA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Iu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Ou?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function uM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Iu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Vl(){this.count--,uM(this)}function VA(){this.imgCount--,uM(this)}var uh=null;function Iu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uh=new Map,t.forEach(GA,e),uh=null,Vl.call(e))}function GA(e,t){if(!(t.state.loading&4)){var n=uh.get(e);if(n)var i=n.get(null);else{n=new Map,uh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Vl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var oo={$$typeof:Hi,Provider:null,Consumer:null,_currentValue:Oa,_currentValue2:Oa,_threadCount:0};function kA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.hiddenUpdates=Jd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function hM(e,t,n,i,s,a,r,o,l,c,f,d){return e=new kA(e,t,n,r,l,c,f,d,o),t=1,a===!0&&(t|=24),a=Ln(3,null,null,t),e.current=a,a.stateNode=e,t=Zm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Qm(a),e}function fM(e){return e?(e=Br,e):Br}function dM(e,t,n,i,s,a){s=fM(s),i.context===null?i.context=s:i.pendingContext=s,i=Js(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ks(e,i,t),n!==null&&(On(n,e,t),yl(n,e,t))}function hy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rg(e,t){hy(e,t),(e=e.alternate)&&hy(e,t)}function pM(e){if(e.tag===13||e.tag===31){var t=Ka(e,67108864);t!==null&&On(t,e,67108864),Rg(e,67108864)}}function fy(e){if(e.tag===13||e.tag===31){var t=Kn();t=Pm(t);var n=Ka(e,t);n!==null&&On(n,e,t),Rg(e,t)}}var lo=!0;function XA(e,t,n,i){var s=Ut.T;Ut.T=null;var a=ie.p;try{ie.p=2,Dg(e,t,n,i)}finally{ie.p=a,Ut.T=s}}function WA(e,t,n,i){var s=Ut.T;Ut.T=null;var a=ie.p;try{ie.p=8,Dg(e,t,n,i)}finally{ie.p=a,Ut.T=s}}function Dg(e,t,n,i){if(lo){var s=Um(i);if(s===null)vp(e,t,i,hh,n),dy(e,i);else if(YA(s,e,t,n,i))i.stopPropagation();else if(dy(e,i),t&4&&-1<qA.indexOf(e)){for(;s!==null;){var a=ho(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ra(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Jn(r);o.entanglements[1]|=l,r&=~l}Zi(a),(ne&6)===0&&(ah=Yn()+500,$l(0,!1))}}break;case 31:case 13:o=Ka(a,2),o!==null&&On(o,a,2),wh(),Rg(a,2)}if(a=Um(i),a===null&&vp(e,t,i,hh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else vp(e,t,i,null,n)}}function Um(e){return e=Fm(e),Ug(e)}var hh=null;function Ug(e){if(hh=null,e=Na(e),e!==null){var t=Xl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=yy(t),e!==null)return e;e=null}else if(n===31){if(e=xy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hh=e,null}function mM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rE()){case Ay:return 2;case wy:return 8;case Hu:case oE:return 32;case Cy:return 268435456;default:return 32}default:return 32}}var Nm=!1,ta=null,ea=null,na=null,Gl=new Map,kl=new Map,Hs=[],qA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dy(e,t){switch(e){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":Gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(t.pointerId)}}function ll(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ho(t),t!==null&&pM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function YA(e,t,n,i,s){switch(t){case"focusin":return ta=ll(ta,e,t,n,i,s),!0;case"dragenter":return ea=ll(ea,e,t,n,i,s),!0;case"mouseover":return na=ll(na,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Gl.set(a,ll(Gl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,kl.set(a,ll(kl.get(a)||null,e,t,n,i,s)),!0}return!1}function gM(e){var t=Na(e.target);if(t!==null){var n=Xl(t);if(n!==null){if(t=n.tag,t===13){if(t=yy(n),t!==null){e.blockedOn=t,F_(e.priority,function(){fy(n)});return}}else if(t===31){if(t=xy(n),t!==null){e.blockedOn=t,F_(e.priority,function(){fy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Um(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ip=i,n.target.dispatchEvent(i),Ip=null}else return t=ho(n),t!==null&&pM(t),e.blockedOn=n,!1;t.shift()}return!0}function py(e,t,n){Pu(e)&&n.delete(t)}function ZA(){Nm=!1,ta!==null&&Pu(ta)&&(ta=null),ea!==null&&Pu(ea)&&(ea=null),na!==null&&Pu(na)&&(na=null),Gl.forEach(py),kl.forEach(py)}function gu(e,t){e.blockedOn===t&&(e.blockedOn=null,Nm||(Nm=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,ZA)))}var _u=null;function my(e){_u!==e&&(_u=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){_u===e&&(_u=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Ug(i||n)===null)continue;break}var a=ho(n);a!==null&&(e.splice(t,3),t-=3,Qp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function co(e){function t(l){return gu(l,e)}ta!==null&&gu(ta,e),ea!==null&&gu(ea,e),na!==null&&gu(na,e),Gl.forEach(t),kl.forEach(t);for(var n=0;n<Hs.length;n++){var i=Hs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Hs.length&&(n=Hs[0],n.blockedOn===null);)gM(n),n.blockedOn===null&&Hs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Pn]||null;if(typeof a=="function")r||my(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Pn]||null)o=r.formAction;else if(Ug(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),my(n)}}}function _M(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Ng(e){this._internalRoot=e}Dh.prototype.render=Ng.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));var n=t.current,i=Kn();dM(n,i,e,t,null,null)};Dh.prototype.unmount=Ng.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dM(e.current,2,null,e,null,null),wh(),t[uo]=null}};function Dh(e){this._internalRoot=e}Dh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hs.length&&t!==0&&t<Hs[n].priority;n++);Hs.splice(n,0,e),n===0&&gM(e)}};var gy=_y.version;if(gy!=="19.3.1")throw Error(q(527,gy,"19.3.1"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=Jb(t),e=e!==null?Sy(e):null,e=e===null?null:e.stateNode,e};var JA={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(cl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!cl.isDisabled&&cl.supportsFiber))try{Wl=cl.inject(JA),Zn=cl}catch{}var cl;Uh.createRoot=function(e,t){if(!vy(e))throw Error(q(299));var n=!1,i="",s=Qx,a=jx,r=$x;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=hM(e,1,!1,null,null,n,i,null,s,a,r,_M),e[uo]=t.current,bg(e),new Ng(t)};Uh.hydrateRoot=function(e,t,n){if(!vy(e))throw Error(q(299));var i=!1,s="",a=Qx,r=jx,o=$x,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=hM(e,1,!0,t,n??null,i,s,l,a,r,o,_M),t.context=fM(null),n=t.current,i=Kn(),i=Pm(i),s=Js(i),s.callback=null,Ks(n,s,i),n=i,t.current.lanes=n,Yl(t,n),Zi(t),e[uo]=t.current,bg(e),new Dh(t)};Uh.version="19.3.1"});var SM=Ns((RD,xM)=>{"use strict";function yM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yM)}catch(e){console.error(e)}}yM(),xM.exports=vM()});var ni=t_(qc()),db=t_(SM());var JM=0,f0=1,KM=2;var d0=1,wf=2,$i=3,Es=0,un=1,_i=2,Rs=0,ir=1,Vo=2,p0=3,m0=4,QM=5,va=100,jM=101,$M=102,t1=103,e1=104,n1=200,i1=201,s1=202,a1=203,tf=204,ef=205,r1=206,o1=207,l1=208,c1=209,u1=210,h1=211,f1=212,d1=213,p1=214,Cf=0,Rf=1,Df=2,sr=3,Uf=4,Nf=5,Lf=6,Of=7,If=0,m1=1,g1=2,Ds=0,_1=1,v1=2,y1=3,Pf=4,x1=5,S1=6,M1=7;var g0=300,hr=301,fr=302,Bf=303,zf=304,Ic=306,nf=1e3,_a=1001,sf=1002,Bn=1003,b1=1004;var Pc=1005;var Di=1006,Ff=1007;var ba=1008;var Ui=1009,_0=1010,v0=1011,Go=1012,Hf=1013,Ea=1014,Ni=1015,ko=1016,Vf=1017,Gf=1018,Xo=1020,y0=35902,x0=35899,S0=1021,M0=1022,vi=1023,Lo=1026,Wo=1027,kf=1028,Xf=1029,b0=1030,Wf=1031;var qf=1033,Bc=33776,zc=33777,Fc=33778,Hc=33779,Yf=35840,Zf=35841,Jf=35842,Kf=35843,Qf=36196,jf=37492,$f=37496,td=37808,ed=37809,nd=37810,id=37811,sd=37812,ad=37813,rd=37814,od=37815,ld=37816,cd=37817,ud=37818,hd=37819,fd=37820,dd=37821,pd=36492,md=36494,gd=36495,_d=36283,vd=36284,yd=36285,xd=36286;var hc=2300,af=2301,$h=2302,n0=2400,i0=2401,s0=2402;var E1=3200,T1=3201;var Sd=0,A1=1,Us="",Tn="srgb",ar="srgb-linear",fc="linear",he="srgb";var nr=7680;var a0=519,w1=512,C1=513,R1=514,E0=515,D1=516,U1=517,N1=518,L1=519,r0=35044;var T0="300 es",Ci=2e3,dc=2001;var Ts=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],MM=1234567,cc=Math.PI/180,rr=180/Math.PI;function qo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[e&255]+pn[e>>8&255]+pn[e>>16&255]+pn[e>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function A0(e,t){return(e%t+t)%t}function KA(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function QA(e,t,n){return e!==t?(n-e)/(t-e):0}function uc(e,t,n){return(1-n)*e+n*t}function jA(e,t,n,i){return uc(e,t,1-Math.exp(-n*i))}function $A(e,t=1){return t-Math.abs(A0(e,t*2)-t)}function tw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ew(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function nw(e,t){return e+Math.floor(Math.random()*(t-e+1))}function iw(e,t){return e+Math.random()*(t-e)}function sw(e){return e*(.5-Math.random())}function aw(e){e!==void 0&&(MM=e);let t=MM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rw(e){return e*cc}function ow(e){return e*rr}function lw(e){return(e&e-1)===0&&e!==0}function cw(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function uw(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function hw(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),d=a((t-i)/2),h=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*d,l*h,o*c);break;case"YZY":e.set(l*h,o*f,l*d,o*c);break;case"ZXZ":e.set(l*d,l*h,o*f,o*c);break;case"XZX":e.set(o*f,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*f,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Uo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function En(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Vc={DEG2RAD:cc,RAD2DEG:rr,generateUUID:qo,clamp:Yt,euclideanModulo:A0,mapLinear:KA,inverseLerp:QA,lerp:uc,damp:jA,pingpong:$A,smoothstep:tw,smootherstep:ew,randInt:nw,randFloat:iw,randFloatSpread:sw,seededRandom:aw,degToRad:rw,radToDeg:ow,isPowerOfTwo:lw,ceilPowerOfTwo:cw,floorPowerOfTwo:uw,setQuaternionFromProperEuler:hw,normalize:En,denormalize:Uo},Xt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},As=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==h||c!==p||f!==g){let m=1-o,u=l*h+c*p+f*g+d*x,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let A=Math.sqrt(v),w=Math.atan2(A,u*_);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let y=o*_;if(l=l*m+h*y,c=c*m+p*y,f=f*m+g*y,d=d*m+x*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],d=a[r],h=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+f*d+l*p-c*h,t[n+1]=l*g+f*h+c*d-o*p,t[n+2]=c*g+f*p+o*h-l*d,t[n+3]=f*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"YXZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"ZXY":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"ZYX":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"YZX":this._x=h*f*d+c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d-h*p*g;break;case"XZY":this._x=h*f*d-c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(bM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(bM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-a*d,this.z=s+l*d+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lg.copy(this).projectOnVector(t),this.sub(Lg)}reflect(t){return this.sub(Lg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lg=new L,bM=new As,Ft=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],_=s[1],v=s[4],y=s[7],A=s[2],w=s[5],T=s[8];return a[0]=r*x+o*_+l*A,a[3]=r*m+o*v+l*w,a[6]=r*u+o*y+l*T,a[1]=c*x+f*_+d*A,a[4]=c*m+f*v+d*w,a[7]=c*u+f*y+d*T,a[2]=h*x+p*_+g*A,a[5]=h*m+p*v+g*w,a[8]=h*u+p*y+g*T,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*a,p=c*a-r*l,g=n*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-f*i)*x,t[2]=(o*i-s*r)*x,t[3]=h*x,t[4]=(f*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Og.makeScale(t,n)),this}rotate(t){return this.premultiply(Og.makeRotation(-t)),this}translate(t,n){return this.premultiply(Og.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Og=new Ft;function w0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function O1(){let e=pc("canvas");return e.style.display="block",e}var EM={};function Oo(e){e in EM||(EM[e]=!0,console.warn(e))}function I1(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var TM=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),AM=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fw(){let e={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===he&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===he&&(s.r=No(s.r),s.g=No(s.g),s.b=No(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Us?fc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Oo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Oo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ar]:{primaries:t,whitePoint:i,transfer:fc,toXYZ:TM,fromXYZ:AM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:i,transfer:he,toXYZ:TM,fromXYZ:AM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),e}var Qt=fw();function bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function No(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var vo,rf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vo===void 0&&(vo=pc("canvas")),vo.width=t.width,vo.height=t.height;let s=vo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=vo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=pc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=bs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dw=0,Io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Ig(s[r].image)):a.push(Ig(s[r]))}else a=Ig(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Ig(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?rf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pw=0,Pg=new L,zn=class e extends Ts{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=_a,s=_a,a=Di,r=ba,o=vi,l=Ui,c=e.DEFAULT_ANISOTROPY,f=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=qo(),this.name="",this.source=new Io(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pg).x}get height(){return this.source.getSize(Pg).y}get depth(){return this.source.getSize(Pg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==g0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nf:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case sf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nf:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case sf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=g0;zn.DEFAULT_ANISOTROPY=1;var ue=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,y=(p+1)/2,A=(u+1)/2,w=(f+h)/4,T=(d+x)/4,R=(g+m)/4;return v>y&&v>A?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=w/i,a=T/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=w/s,a=R/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=T/a,s=R/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},of=class extends Ts{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ue(0,0,t,n),this.scissorTest=!1,this.viewport=new ue(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new zn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Io(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ki=class extends of{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},mc=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lf=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ti.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ti.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ti.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ti):Ti.fromBufferAttribute(a,r),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nh.copy(i.boundingBox)),Nh.applyMatrix4(t.matrixWorld),this.union(Nh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nc),Lh.subVectors(this.max,nc),yo.subVectors(t.a,nc),xo.subVectors(t.b,nc),So.subVectors(t.c,nc),ua.subVectors(xo,yo),ha.subVectors(So,xo),ja.subVectors(yo,So);let n=[0,-ua.z,ua.y,0,-ha.z,ha.y,0,-ja.z,ja.y,ua.z,0,-ua.x,ha.z,0,-ha.x,ja.z,0,-ja.x,-ua.y,ua.x,0,-ha.y,ha.x,0,-ja.y,ja.x,0];return!Bg(n,yo,xo,So,Lh)||(n=[1,0,0,0,1,0,0,0,1],!Bg(n,yo,xo,So,Lh))?!1:(Oh.crossVectors(ua,ha),n=[Oh.x,Oh.y,Oh.z],Bg(n,yo,xo,So,Lh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vs=[new L,new L,new L,new L,new L,new L,new L,new L],Ti=new L,Nh=new Qi,yo=new L,xo=new L,So=new L,ua=new L,ha=new L,ja=new L,nc=new L,Lh=new L,Oh=new L,$a=new L;function Bg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){$a.fromArray(e,a);let o=s.x*Math.abs($a.x)+s.y*Math.abs($a.y)+s.z*Math.abs($a.z),l=t.dot($a),c=n.dot($a),f=i.dot($a);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var mw=new Qi,ic=new L,zg=new L,ws=class{constructor(t=new L,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):mw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ic.subVectors(t,this.center);let n=ic.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ic,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ic.copy(t.center).add(zg)),this.expandByPoint(ic.copy(t.center).sub(zg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ys=new L,Fg=new L,Ih=new L,fa=new L,Hg=new L,Ph=new L,Vg=new L,Po=class{constructor(t=new L,n=new L(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ys)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ys.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ys.copy(this.origin).addScaledVector(this.direction,n),ys.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Fg.copy(t).add(n).multiplyScalar(.5),Ih.copy(n).sub(t).normalize(),fa.copy(this.origin).sub(Fg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Ih),o=fa.dot(this.direction),l=-fa.dot(Ih),c=fa.lengthSq(),f=Math.abs(1-r*r),d,h,p,g;if(f>0)if(d=r*l-o,h=r*o-l,g=a*f,d>=0)if(h>=-g)if(h<=g){let x=1/f;d*=x,h*=x,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fg).addScaledVector(Ih,h),p}intersectSphere(t,n){ys.subVectors(t.center,this.origin);let i=ys.dot(this.direction),s=ys.dot(ys)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(a=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(a=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ys)!==null}intersectTriangle(t,n,i,s,a){Hg.subVectors(n,t),Ph.subVectors(i,t),Vg.crossVectors(Hg,Ph);let r=this.direction.dot(Vg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fa.subVectors(this.origin,t);let l=o*this.direction.dot(Ph.crossVectors(fa,Ph));if(l<0)return null;let c=o*this.direction.dot(Hg.cross(fa));if(c<0||l+c>r)return null;let f=-o*fa.dot(Vg);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class e{constructor(t,n,i,s,a,r,o,l,c,f,d,h,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,d,h,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,f,d,h,p,g,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Mo.setFromMatrixColumn(t,0).length(),a=1/Mo.setFromMatrixColumn(t,1).length(),r=1/Mo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*f,p=r*d,g=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*f,p=l*d,g=c*f,x=c*d;n[0]=h+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-g,n[6]=x+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*f,p=l*d,g=c*f,x=c*d;n[0]=h-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*f,n[9]=x-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*f,p=r*d,g=o*f,x=o*d;n[0]=l*f,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*f,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+g,n[10]=h-x*d}else if(t.order==="XZY"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=r*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gw,t,_w)}lookAt(t,n,i){let s=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),da.crossVectors(i,$n),da.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),da.crossVectors(i,$n)),da.normalize(),Bh.crossVectors($n,da),s[0]=da.x,s[4]=Bh.x,s[8]=$n.x,s[1]=da.y,s[5]=Bh.y,s[9]=$n.y,s[2]=da.z,s[6]=Bh.z,s[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],_=i[3],v=i[7],y=i[11],A=i[15],w=s[0],T=s[4],R=s[8],E=s[12],M=s[1],U=s[5],B=s[9],V=s[13],k=s[2],Z=s[6],X=s[10],tt=s[14],z=s[3],ot=s[7],ht=s[11],bt=s[15];return a[0]=r*w+o*M+l*k+c*z,a[4]=r*T+o*U+l*Z+c*ot,a[8]=r*R+o*B+l*X+c*ht,a[12]=r*E+o*V+l*tt+c*bt,a[1]=f*w+d*M+h*k+p*z,a[5]=f*T+d*U+h*Z+p*ot,a[9]=f*R+d*B+h*X+p*ht,a[13]=f*E+d*V+h*tt+p*bt,a[2]=g*w+x*M+m*k+u*z,a[6]=g*T+x*U+m*Z+u*ot,a[10]=g*R+x*B+m*X+u*ht,a[14]=g*E+x*V+m*tt+u*bt,a[3]=_*w+v*M+y*k+A*z,a[7]=_*T+v*U+y*Z+A*ot,a[11]=_*R+v*B+y*X+A*ht,a[15]=_*E+v*V+y*tt+A*bt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+x*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*f-a*l*f)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*f-i*c*f)+u*(-s*o*f-n*l*d+n*o*h+s*r*d-i*r*h+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],_=d*m*c-x*h*c+x*l*p-o*m*p-d*l*u+o*h*u,v=g*h*c-f*m*c-g*l*p+r*m*p+f*l*u-r*h*u,y=f*x*c-g*d*c+g*o*p-r*x*p-f*o*u+r*d*u,A=g*d*l-f*x*l-g*o*h+r*x*h+f*o*m-r*d*m,w=n*_+i*v+s*y+a*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=_*T,t[1]=(x*h*a-d*m*a-x*s*p+i*m*p+d*s*u-i*h*u)*T,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*T,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*T,t[4]=v*T,t[5]=(f*m*a-g*h*a+g*s*p-n*m*p-f*s*u+n*h*u)*T,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*T,t[7]=(r*h*a-f*l*a+f*s*c-n*h*c-r*s*p+n*l*p)*T,t[8]=y*T,t[9]=(g*d*a-f*x*a-g*i*p+n*x*p+f*i*u-n*d*u)*T,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*u+n*o*u)*T,t[11]=(f*o*a-r*d*a-f*i*c+n*d*c+r*i*p-n*o*p)*T,t[12]=A*T,t[13]=(f*x*s-g*d*s+g*i*h-n*x*h-f*i*m+n*d*m)*T,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*T,t[15]=(r*d*s-f*o*s+f*i*l-n*d*l-r*i*h+n*o*h)*T,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,d=o+o,h=a*c,p=a*f,g=a*d,x=r*f,m=r*d,u=o*d,_=l*c,v=l*f,y=l*d,A=i.x,w=i.y,T=i.z;return s[0]=(1-(x+u))*A,s[1]=(p+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(h+u))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+v)*T,s[9]=(m-_)*T,s[10]=(1-(h+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Mo.set(s[0],s[1],s[2]).length(),r=Mo.set(s[4],s[5],s[6]).length(),o=Mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ai.copy(this);let c=1/a,f=1/r,d=1/o;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=f,Ai.elements[5]*=f,Ai.elements[6]*=f,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,n.setFromRotationMatrix(Ai),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Ci,l=!1){let c=this.elements,f=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Ci)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===dc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ci,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Ci)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===dc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Mo=new L,Ai=new ve,gw=new L(0,0,0),_w=new L(1,1,1),da=new L,Bh=new L,$n=new L,wM=new ve,CM=new As,gi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return wM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return CM.setFromEuler(this),this.setFromQuaternion(CM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vw=0,RM=new L,bo=new As,xs=new ve,zh=new L,sc=new L,yw=new L,xw=new As,DM=new L(1,0,0),UM=new L(0,1,0),NM=new L(0,0,1),LM={type:"added"},Sw={type:"removed"},Eo={type:"childadded",child:null},Gg={type:"childremoved",child:null},Ye=class e extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new gi,i=new As,s=new L(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ft}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return bo.setFromAxisAngle(t,n),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,n){return bo.setFromAxisAngle(t,n),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(DM,t)}rotateY(t){return this.rotateOnAxis(UM,t)}rotateZ(t){return this.rotateOnAxis(NM,t)}translateOnAxis(t,n){return RM.copy(t).applyQuaternion(this.quaternion),this.position.add(RM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(DM,t)}translateY(t){return this.translateOnAxis(UM,t)}translateZ(t){return this.translateOnAxis(NM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?zh.copy(t):zh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(sc,zh,this.up):xs.lookAt(zh,sc,this.up),this.quaternion.setFromRotationMatrix(xs),s&&(xs.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(xs),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(LM),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Sw),Gg.child=t,this.dispatchEvent(Gg),Gg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xs.multiply(t.parent.matrixWorld)),t.applyMatrix4(xs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(LM),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sc,t,yw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sc,xw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new L(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new L,Ss=new L,kg=new L,Ms=new L,To=new L,Ao=new L,OM=new L,Xg=new L,Wg=new L,qg=new L,Yg=new ue,Zg=new ue,Jg=new ue,ga=class e{constructor(t=new L,n=new L,i=new L){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),wi.subVectors(t,n),s.cross(wi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){wi.subVectors(s,n),Ss.subVectors(i,n),kg.subVectors(t,n);let r=wi.dot(wi),o=wi.dot(Ss),l=wi.dot(kg),c=Ss.dot(Ss),f=Ss.dot(kg),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,g=(r*f-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ms)===null?!1:Ms.x>=0&&Ms.y>=0&&Ms.x+Ms.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ms.x),l.addScaledVector(r,Ms.y),l.addScaledVector(o,Ms.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Yg.setScalar(0),Zg.setScalar(0),Jg.setScalar(0),Yg.fromBufferAttribute(t,n),Zg.fromBufferAttribute(t,i),Jg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Yg,a.x),r.addScaledVector(Zg,a.y),r.addScaledVector(Jg,a.z),r}static isFrontFacing(t,n,i,s){return wi.subVectors(i,n),Ss.subVectors(t,n),wi.cross(Ss).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),Ss.subVectors(this.a,this.b),wi.cross(Ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;To.subVectors(s,i),Ao.subVectors(a,i),Xg.subVectors(t,i);let l=To.dot(Xg),c=Ao.dot(Xg);if(l<=0&&c<=0)return n.copy(i);Wg.subVectors(t,s);let f=To.dot(Wg),d=Ao.dot(Wg);if(f>=0&&d<=f)return n.copy(s);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(To,r);qg.subVectors(t,a);let p=To.dot(qg),g=Ao.dot(qg);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Ao,o);let m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return OM.subVectors(a,s),o=(d-f)/(d-f+(p-g)),n.copy(s).addScaledVector(OM,o);let u=1/(m+x+h);return r=x*u,o=h*u,n.copy(i).addScaledVector(To,r).addScaledVector(Ao,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},P1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pa={h:0,s:0,l:0},Fh={h:0,s:0,l:0};function Kg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var It=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Qt.workingColorSpace){if(t=A0(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Kg(r,a,t+1/3),this.g=Kg(r,a,t),this.b=Kg(r,a,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,n=Tn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Tn){let i=P1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return Qt.workingToColorSpace(mn.copy(this),t),Math.round(Yt(mn.r*255,0,255))*65536+Math.round(Yt(mn.g*255,0,255))*256+Math.round(Yt(mn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(mn.copy(this),n);let i=mn.r,s=mn.g,a=mn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(mn.copy(this),n),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Tn){Qt.workingToColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,s=mn.b;return t!==Tn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(pa),this.setHSL(pa.h+t,pa.s+n,pa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(pa),t.getHSL(Fh);let i=uc(pa.h,Fh.h,n),s=uc(pa.s,Fh.s,n),a=uc(pa.l,Fh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new It;It.NAMES=P1;var Mw=0,ji=class extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=ir,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=ef,this.blendEquation=va,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tf&&(i.blendSrc=this.blendSrc),this.blendDst!==ef&&(i.blendDst=this.blendDst),this.blendEquation!==va&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},or=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new L,Hh=new Xt,bw=0,gn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=r0,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hh.fromBufferAttribute(this,n),Hh.applyMatrix3(t),this.setXY(n,Hh.x,Hh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix3(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix4(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyNormalMatrix(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.transformDirection(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Uo(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=En(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Uo(n,this.array)),n}setX(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Uo(n,this.array)),n}setY(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Uo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Uo(n,this.array)),n}setW(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array),a=En(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==r0&&(t.usage=this.usage),t}};var gc=class extends gn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var _c=class extends gn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Pe=class extends gn{constructor(t,n,i){super(new Float32Array(t),n,i)}},Ew=0,mi=new ve,Qg=new Ye,wo=new L,ti=new Qi,ac=new Qi,tn=new L,An=class e extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?_c:gc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ft().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,i){return mi.makeTranslation(t,n,i),this.applyMatrix4(mi),this}scale(t,n,i){return mi.makeScale(t,n,i),this.applyMatrix4(mi),this}lookAt(t){return Qg.lookAt(t),Qg.updateMatrix(),this.applyMatrix4(Qg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Pe(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];ac.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(ti.min,ac.min),ti.expandByPoint(tn),tn.addVectors(ti.max,ac.max),ti.expandByPoint(tn)):(ti.expandByPoint(ac.min),ti.expandByPoint(ac.max))}ti.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)tn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)tn.fromBufferAttribute(o,c),l&&(wo.fromBufferAttribute(t,c),tn.add(wo)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new L,l[R]=new L;let c=new L,f=new L,d=new L,h=new Xt,p=new Xt,g=new Xt,x=new L,m=new L;function u(R,E,M){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(a,R),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),f.sub(c),d.sub(c),p.sub(h),g.sub(h);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(U),o[R].add(x),o[E].add(x),o[M].add(x),l[R].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,E=_.length;R<E;++R){let M=_[R],U=M.start,B=M.count;for(let V=U,k=U+B;V<k;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let v=new L,y=new L,A=new L,w=new L;function T(R){A.fromBufferAttribute(s,R),w.copy(A);let E=o[R];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(w,E);let U=y.dot(l[R])<0?-1:1;r.setXYZW(R,v.x,v.y,v.z,U)}for(let R=0,E=_.length;R<E;++R){let M=_[R],U=M.start,B=M.count;for(let V=U,k=U+B;V<k;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new L,a=new L,r=new L,o=new L,l=new L,c=new L,f=new L,d=new L;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)tn.fromBufferAttribute(t,n),tn.normalize(),t.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let u=0;u<f;u++)h[g++]=c[p++]}return new gn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],d=a[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},IM=new ve,tr=new Po,Vh=new ws,PM=new L,Gh=new L,kh=new L,Xh=new L,jg=new L,Wh=new L,BM=new L,qh=new L,Re=class extends Ye{constructor(t=new An,n=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Wh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],d=a[l];f!==0&&(jg.fromBufferAttribute(d,t),r?Wh.addScaledVector(jg,f):Wh.addScaledVector(jg.sub(n),f))}n.add(Wh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vh.copy(i.boundingSphere),Vh.applyMatrix4(a),tr.copy(t.ray).recast(t.near),!(Vh.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Vh,PM)===null||tr.origin.distanceToSquared(PM)>(t.far-t.near)**2))&&(IM.copy(a).invert(),tr.copy(t.ray).applyMatrix4(IM),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,tr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],u=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let w=o.getX(y),T=o.getX(y+1),R=o.getX(y+2);s=Yh(this,u,t,i,c,f,d,w,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let _=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Yh(this,r,t,i,c,f,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],u=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let w=y,T=y+1,R=y+2;s=Yh(this,u,t,i,c,f,d,w,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let _=m,v=m+1,y=m+2;s=Yh(this,r,t,i,c,f,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Tw(e,t,n,i,s,a,r,o){let l;if(t.side===un?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Es,o),l===null)return null;qh.copy(o),qh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(qh);return c<n.near||c>n.far?null:{distance:c,point:qh.clone(),object:e}}function Yh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Gh),e.getVertexPosition(l,kh),e.getVertexPosition(c,Xh);let f=Tw(e,t,n,i,Gh,kh,Xh,BM);if(f){let d=new L;ga.getBarycoord(BM,Gh,kh,Xh,d),s&&(f.uv=ga.getInterpolatedAttribute(s,o,l,c,d,new Xt)),a&&(f.uv1=ga.getInterpolatedAttribute(a,o,l,c,d,new Xt)),r&&(f.normal=ga.getInterpolatedAttribute(r,o,l,c,d,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};ga.getNormal(Gh,kh,Xh,h.normal),f.face=h,f.barycoord=d}return f}var wn=class e extends An{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(d,2));function g(x,m,u,_,v,y,A,w,T,R,E){let M=y/T,U=A/R,B=y/2,V=A/2,k=w/2,Z=T+1,X=R+1,tt=0,z=0,ot=new L;for(let ht=0;ht<X;ht++){let bt=ht*U-V;for(let Ht=0;Ht<Z;Ht++){let ee=Ht*M-B;ot[x]=ee*_,ot[m]=bt*v,ot[u]=k,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[u]=w>0?1:-1,f.push(ot.x,ot.y,ot.z),d.push(Ht/T),d.push(1-ht/R),tt+=1}}for(let ht=0;ht<R;ht++)for(let bt=0;bt<T;bt++){let Ht=h+bt+Z*ht,ee=h+bt+Z*(ht+1),pe=h+(bt+1)+Z*(ht+1),Kt=h+(bt+1)+Z*ht;l.push(Ht,ee,Kt),l.push(ee,pe,Kt),z+=6}o.addGroup(p,z,E),p+=z,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function dr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function _n(e){let t={};for(let n=0;n<e.length;n++){let i=dr(e[n]);for(let s in i)t[s]=i[s]}return t}function Aw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function C0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var B1={clone:dr,merge:_n},ww=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ww,this.fragmentShader=Cw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Aw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},vc=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ma=new L,zM=new Xt,FM=new Xt,en=class extends vc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ma.x,ma.y).multiplyScalar(-t/ma.z),ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ma.x,ma.y).multiplyScalar(-t/ma.z)}getViewSize(t,n){return this.getViewBounds(t,zM,FM),n.subVectors(FM,zM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(cc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Co=-90,Ro=1,cf=class extends Ye{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Co,Ro,t,n);s.layers=this.layers,this.add(s);let a=new en(Co,Ro,t,n);a.layers=this.layers,this.add(a);let r=new en(Co,Ro,t,n);r.layers=this.layers,this.add(r);let o=new en(Co,Ro,t,n);o.layers=this.layers,this.add(o);let l=new en(Co,Ro,t,n);l.layers=this.layers,this.add(l);let c=new en(Co,Ro,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},yc=class extends zn{constructor(t=[],n=hr,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uf=class extends Ki{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),a=new Fn({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Rs});a.uniforms.tEquirect.value=n;let r=new Re(s,a),o=n.minFilter;return n.minFilter===ba&&(n.minFilter=Di),new cf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Ri=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rw={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},xc=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var lr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var hf=class extends zn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Bn,f=Bn,d,h){super(null,r,o,l,c,f,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sc=class extends gn{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Do=new ve,HM=new ve,Zh=[],VM=new Qi,Dw=new ve,rc=new Re,oc=new ws,Mc=class extends Re{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Sc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Dw)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Do),VM.copy(t.boundingBox).applyMatrix4(Do),this.boundingBox.union(VM)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Do),oc.copy(t.boundingSphere).applyMatrix4(Do),this.boundingSphere.union(oc)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(rc.geometry=this.geometry,rc.material=this.material,rc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oc.copy(this.boundingSphere),oc.applyMatrix4(i),t.ray.intersectsSphere(oc)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Do),HM.multiplyMatrices(i,Do),rc.matrixWorld=HM,rc.raycast(t,Zh);for(let r=0,o=Zh.length;r<o;r++){let l=Zh[r];l.instanceId=a,l.object=this,n.push(l)}Zh.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hf(new Float32Array(s*this.count),s,this.count,kf,Ni));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$g=new L,Uw=new L,Nw=new Ft,Ji=class{constructor(t=new L(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=$g.subVectors(i,n).cross(Uw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta($g),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Nw.getNormalMatrix(t),s=this.coplanarPoint($g).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},er=new ws,Lw=new Xt(.5,.5),Jh=new L,Fo=class{constructor(t=new Ji,n=new Ji,i=new Ji,s=new Ji,a=new Ji,r=new Ji){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ci,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],d=a[5],h=a[6],p=a[7],g=a[8],x=a[9],m=a[10],u=a[11],_=a[12],v=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-f,u-g,A-_).normalize(),s[1].setComponents(c+r,p+f,u+g,A+_).normalize(),s[2].setComponents(c+o,p+d,u+x,A+v).normalize(),s[3].setComponents(c-o,p-d,u-x,A-v).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,u-m,A-y).normalize();else if(s[4].setComponents(c-l,p-h,u-m,A-y).normalize(),n===Ci)s[5].setComponents(c+l,p+h,u+m,A+y).normalize();else if(n===dc)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(t){er.center.set(0,0,0);let n=Lw.distanceTo(t.center);return er.radius=.7071067811865476+n,er.applyMatrix4(t.matrixWorld),this.intersectsSphere(er)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Jh.x=s.normal.x>0?t.max.x:t.min.x,Jh.y=s.normal.y>0?t.max.y:t.min.y,Jh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ff=class extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},GM=new ve,o0=new Po,Kh=new ws,Qh=new L,bc=class extends Ye{constructor(t=new An,n=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kh.copy(i.boundingSphere),Kh.applyMatrix4(s),Kh.radius+=a,t.ray.intersectsSphere(Kh)===!1)return;GM.copy(s).invert(),o0.copy(t.ray).applyMatrix4(GM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=h,x=p;g<x;g++){let m=c.getX(g);Qh.fromBufferAttribute(d,m),kM(Qh,m,l,s,t,n,this)}}else{let h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=h,x=p;g<x;g++)Qh.fromBufferAttribute(d,g),kM(Qh,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function kM(e,t,n,i,s,a,r){let o=o0.distanceSqToPoint(e);if(o<n){let l=new L;o0.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Ec=class extends zn{constructor(t,n,i=Ea,s,a,r,o=Bn,l=Bn,c,f=Lo,d=1){if(f!==Lo&&f!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Io(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Tc=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ya=class e extends An{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let f=[],d=[],h=[],p=[],g=0,x=[],m=i/2,u=0;_(),r===!1&&(t>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(p,2));function _(){let y=new L,A=new L,w=0,T=(n-t)/i;for(let R=0;R<=a;R++){let E=[],M=R/a,U=M*(n-t)+t;for(let B=0;B<=s;B++){let V=B/s,k=V*l+o,Z=Math.sin(k),X=Math.cos(k);A.x=U*Z,A.y=-M*i+m,A.z=U*X,d.push(A.x,A.y,A.z),y.set(Z,T,X).normalize(),h.push(y.x,y.y,y.z),p.push(V,1-M),E.push(g++)}x.push(E)}for(let R=0;R<s;R++)for(let E=0;E<a;E++){let M=x[E][R],U=x[E+1][R],B=x[E+1][R+1],V=x[E][R+1];(t>0||E!==0)&&(f.push(M,U,V),w+=3),(n>0||E!==a-1)&&(f.push(U,B,V),w+=3)}c.addGroup(u,w,0),u+=w}function v(y){let A=g,w=new Xt,T=new L,R=0,E=y===!0?t:n,M=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let k=B/s*l+o,Z=Math.cos(k),X=Math.sin(k);T.x=E*X,T.y=m*M,T.z=E*Z,d.push(T.x,T.y,T.z),h.push(0,M,0),w.x=Z*.5+.5,w.y=X*.5*M+.5,p.push(w.x,w.y),g++}for(let B=0;B<s;B++){let V=A+B,k=U+B;y===!0?f.push(k,k+1,V):f.push(k+1,k,V),R+=3}c.addGroup(u,R,y===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ac=class e extends ya{constructor(t=1,n=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,n,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wc=class e extends An{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=n/l,p=[],g=[],x=[],m=[];for(let u=0;u<f;u++){let _=u*h-r;for(let v=0;v<c;v++){let y=v*d-a;g.push(y,-_,0),x.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){let v=_+c*u,y=_+c*(u+1),A=_+1+c*(u+1),w=_+1+c*u;p.push(v,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Cc=class e extends An{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,f=[],d=new L,h=new L,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let _=[],v=u/i,y=0;u===0&&r===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){let w=A/n;d.x=-t*Math.cos(s+w*a)*Math.sin(r+v*o),d.y=t*Math.cos(r+v*o),d.z=t*Math.sin(s+w*a)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+y,1-v),_.push(c++)}f.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){let v=f[u][_+1],y=f[u][_],A=f[u+1][_],w=f[u+1][_+1];(u!==0||r>0)&&p.push(v,y,w),(u!==i-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cs=class e extends An{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],f=new L,d=new L,h=new L;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*a,m=p/i*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(x),d.y=(t+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,_=(s+1)*p+g;r.push(x,m,_),r.push(m,u,_)}this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Rc=class e extends An{constructor(t=1,n=.4,i=64,s=8,a=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:n,tubularSegments:i,radialSegments:s,p:a,q:r},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],f=[],d=new L,h=new L,p=new L,g=new L,x=new L,m=new L,u=new L;for(let v=0;v<=i;++v){let y=v/i*a*Math.PI*2;_(y,a,r,t,p),_(y+.01,a,r,t,g),m.subVectors(g,p),u.addVectors(g,p),x.crossVectors(m,u),u.crossVectors(x,m),x.normalize(),u.normalize();for(let A=0;A<=s;++A){let w=A/s*Math.PI*2,T=-n*Math.cos(w),R=n*Math.sin(w);d.x=p.x+(T*u.x+R*x.x),d.y=p.y+(T*u.y+R*x.y),d.z=p.z+(T*u.z+R*x.z),l.push(d.x,d.y,d.z),h.subVectors(d,p).normalize(),c.push(h.x,h.y,h.z),f.push(v/i),f.push(A/s)}}for(let v=1;v<=i;v++)for(let y=1;y<=s;y++){let A=(s+1)*(v-1)+(y-1),w=(s+1)*v+(y-1),T=(s+1)*v+y,R=(s+1)*(v-1)+y;o.push(A,w,R),o.push(w,T,R)}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(f,2));function _(v,y,A,w,T){let R=Math.cos(v),E=Math.sin(v),M=A/y*v,U=Math.cos(M);T.x=w*(2+U)*.5*R,T.y=w*(2+U)*E*.5,T.z=w*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var Cn=class extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},cr=class extends Cn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Dc=class extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},df=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pf=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function jh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Ow(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var ur=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mf=class extends ur{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:n0,endingEnd:n0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case i0:a=t,o=2*n-i;break;case s0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case i0:r=t,l=2*i-n;break;case s0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,u=-h*m+2*h*x-h*g,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==o;++A)a[A]=u*r[f+A]+_*r[c+A]+v*r[l+A]+y*r[d+A];return a}},gf=class extends ur{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),d=1-f;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*f;return a}},_f=class extends ur{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jh(n,this.TimeBufferType),this.values=jh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:jh(t.times,Array),values:jh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _f(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case hc:n=this.InterpolantFactoryMethodDiscrete;break;case af:n=this.InterpolantFactoryMethodLinear;break;case $h:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hc;case this.InterpolantFactoryMethodLinear:return af;case this.InterpolantFactoryMethodSmooth:return $h}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&Ow(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$h,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[h+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=af;var xa=class extends ei{constructor(t,n,i){super(t,n,i)}};xa.prototype.ValueTypeName="bool";xa.prototype.ValueBufferType=Array;xa.prototype.DefaultInterpolation=hc;xa.prototype.InterpolantFactoryMethodLinear=void 0;xa.prototype.InterpolantFactoryMethodSmooth=void 0;var vf=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}};vf.prototype.ValueTypeName="color";var yf=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}};yf.prototype.ValueTypeName="number";var xf=class extends ur{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)As.slerpFlat(a,0,r,c-o,r,c,l);return a}},Uc=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new xf(this.times,this.values,this.getValueSize(),t)}};Uc.prototype.ValueTypeName="quaternion";Uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends ei{constructor(t,n,i){super(t,n,i)}};Sa.prototype.ValueTypeName="string";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=hc;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Sf=class extends ei{constructor(t,n,i,s){super(t,n,i,s)}};Sf.prototype.ValueTypeName="vector";var Mf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},z1=new Mf,bf=class{constructor(t){this.manager=t!==void 0?t:z1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ho=class extends Ye{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Nc=class extends Ho{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},t0=new ve,XM=new L,WM=new L,Ef=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;XM.setFromMatrixPosition(t.matrixWorld),n.position.copy(XM),WM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(WM),n.updateMatrixWorld(),t0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(t0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},l0=class extends Ef{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let n=this.camera,i=rr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||n.far;(i!==n.fov||s!==n.aspect||a!==n.far)&&(n.fov=i,n.aspect=s,n.far=a,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Lc=class extends Ho{constructor(t,n,i=0,s=Math.PI/3,a=0,r=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new l0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},qM=new ve,lc=new L,e0=new L,c0=class extends Ef{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),lc.setFromMatrixPosition(t.matrixWorld),i.position.copy(lc),e0.copy(i.position),e0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(e0),i.updateMatrixWorld(),s.makeTranslation(-lc.x,-lc.y,-lc.z),qM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qM,i.coordinateSystem,i.reversedDepth)}},Ma=class extends Ho{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new c0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Tf=class extends vc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Af=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var R0="\\[\\]\\.:\\/",Iw=new RegExp("["+R0+"]","g"),D0="[^"+R0+"]",Pw="[^"+R0.replace("\\.","")+"]",Bw=/((?:WC+[\/:])*)/.source.replace("WC",D0),zw=/(WCOD+)?/.source.replace("WCOD",Pw),Fw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",D0),Hw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",D0),Vw=new RegExp("^"+Bw+zw+Fw+Hw+"$"),Gw=["material","materials","bones","map"],u0=class{constructor(t,n,i){let s=i||Te.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Te=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iw,"")}static parseTrackName(t){let n=Vw.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Gw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=u0;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DD=new Float32Array(1);var YM=new ve,Oc=class{constructor(t,n,i=0,s=1/0){this.ray=new Po(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return YM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(YM),this}intersectObject(t,n=!0,i=[]){return h0(t,this,i,n),i.sort(ZM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)h0(t[s],this,i,n);return i.sort(ZM),i}};function ZM(e,t){return e.distance-t.distance}function h0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)h0(a[r],t,n,!0)}}function U0(e,t,n,i){let s=kw(i);switch(n){case S0:return e*t;case kf:return e*t/s.components*s.byteLength;case Xf:return e*t/s.components*s.byteLength;case b0:return e*t*2/s.components*s.byteLength;case Wf:return e*t*2/s.components*s.byteLength;case M0:return e*t*3/s.components*s.byteLength;case vi:return e*t*4/s.components*s.byteLength;case qf:return e*t*4/s.components*s.byteLength;case Bc:case zc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zf:case Kf:return Math.max(e,16)*Math.max(t,8)/4;case Yf:case Jf:return Math.max(e,8)*Math.max(t,8)/2;case Qf:case jf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $f:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ed:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case nd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case id:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case sd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ad:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case rd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case od:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ld:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case cd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ud:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case hd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case fd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case dd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case pd:case md:case gd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case _d:case vd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case yd:case xd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kw(e){switch(e){case Ui:case _0:return{byteLength:1,components:1};case Go:case v0:case ko:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case Ea:case Hf:case Ni:return{byteLength:4,components:1};case y0:case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function lb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Ww(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var qw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yw=`#ifdef USE_ALPHAHASH
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
#endif`,Zw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jw=`#ifdef USE_AOMAP
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
#endif`,$w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tC=`#ifdef USE_BATCHING
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
#endif`,eC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aC=`#ifdef USE_IRIDESCENCE
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
#endif`,rC=`#ifdef USE_BUMPMAP
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
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mC=`#define PI 3.141592653589793
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
} // validated`,gC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_C=`vec3 transformedNormal = objectNormal;
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
#endif`,vC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MC="gl_FragColor = linearToOutputTexel( gl_FragColor );",bC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EC=`#ifdef USE_ENVMAP
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
#endif`,TC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AC=`#ifdef USE_ENVMAP
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
#endif`,wC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
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
#endif`,RC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LC=`#ifdef USE_GRADIENTMAP
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
}`,OC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BC=`uniform bool receiveShadow;
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
#endif`,zC=`#ifdef USE_ENVMAP
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
#endif`,FC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kC=`PhysicalMaterial material;
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
#endif`,XC=`struct PhysicalMaterial {
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
}`,WC=`
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
#endif`,qC=`#if defined( RE_IndirectDiffuse )
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
#endif`,YC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$C=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eR=`#if defined( USE_POINTS_UV )
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
#endif`,nR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oR=`#ifdef USE_MORPHTARGETS
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
#endif`,lR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pR=`#ifdef USE_NORMALMAP
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
#endif`,mR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_R=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ER=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DR=`float getShadowMask() {
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
}`,UR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NR=`#ifdef USE_SKINNING
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
#endif`,LR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OR=`#ifdef USE_SKINNING
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
#endif`,IR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FR=`#ifdef USE_TRANSMISSION
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
#endif`,HR=`#ifdef USE_TRANSMISSION
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
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qR=`uniform sampler2D t2D;
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
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`#include <common>
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
}`,jR=`#if DEPTH_PACKING == 3200
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
}`,$R=`#define DISTANCE
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
}`,t2=`#define DISTANCE
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
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i2=`uniform float scale;
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
}`,s2=`uniform vec3 diffuse;
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
}`,a2=`#include <common>
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
}`,r2=`uniform vec3 diffuse;
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
}`,o2=`#define LAMBERT
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
}`,l2=`#define LAMBERT
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
}`,c2=`#define MATCAP
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
}`,u2=`#define MATCAP
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
}`,h2=`#define NORMAL
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
}`,f2=`#define NORMAL
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
}`,d2=`#define PHONG
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
}`,p2=`#define PHONG
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
}`,m2=`#define STANDARD
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
}`,g2=`#define STANDARD
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
}`,_2=`#define TOON
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
}`,v2=`#define TOON
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
}`,y2=`uniform float size;
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
}`,x2=`uniform vec3 diffuse;
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
}`,S2=`#include <common>
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
}`,M2=`uniform vec3 color;
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
}`,b2=`uniform float rotation;
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
}`,E2=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:qw,alphahash_pars_fragment:Yw,alphamap_fragment:Zw,alphamap_pars_fragment:Jw,alphatest_fragment:Kw,alphatest_pars_fragment:Qw,aomap_fragment:jw,aomap_pars_fragment:$w,batching_pars_vertex:tC,batching_vertex:eC,begin_vertex:nC,beginnormal_vertex:iC,bsdfs:sC,iridescence_fragment:aC,bumpmap_pars_fragment:rC,clipping_planes_fragment:oC,clipping_planes_pars_fragment:lC,clipping_planes_pars_vertex:cC,clipping_planes_vertex:uC,color_fragment:hC,color_pars_fragment:fC,color_pars_vertex:dC,color_vertex:pC,common:mC,cube_uv_reflection_fragment:gC,defaultnormal_vertex:_C,displacementmap_pars_vertex:vC,displacementmap_vertex:yC,emissivemap_fragment:xC,emissivemap_pars_fragment:SC,colorspace_fragment:MC,colorspace_pars_fragment:bC,envmap_fragment:EC,envmap_common_pars_fragment:TC,envmap_pars_fragment:AC,envmap_pars_vertex:wC,envmap_physical_pars_fragment:zC,envmap_vertex:CC,fog_vertex:RC,fog_pars_vertex:DC,fog_fragment:UC,fog_pars_fragment:NC,gradientmap_pars_fragment:LC,lightmap_pars_fragment:OC,lights_lambert_fragment:IC,lights_lambert_pars_fragment:PC,lights_pars_begin:BC,lights_toon_fragment:FC,lights_toon_pars_fragment:HC,lights_phong_fragment:VC,lights_phong_pars_fragment:GC,lights_physical_fragment:kC,lights_physical_pars_fragment:XC,lights_fragment_begin:WC,lights_fragment_maps:qC,lights_fragment_end:YC,logdepthbuf_fragment:ZC,logdepthbuf_pars_fragment:JC,logdepthbuf_pars_vertex:KC,logdepthbuf_vertex:QC,map_fragment:jC,map_pars_fragment:$C,map_particle_fragment:tR,map_particle_pars_fragment:eR,metalnessmap_fragment:nR,metalnessmap_pars_fragment:iR,morphinstance_vertex:sR,morphcolor_vertex:aR,morphnormal_vertex:rR,morphtarget_pars_vertex:oR,morphtarget_vertex:lR,normal_fragment_begin:cR,normal_fragment_maps:uR,normal_pars_fragment:hR,normal_pars_vertex:fR,normal_vertex:dR,normalmap_pars_fragment:pR,clearcoat_normal_fragment_begin:mR,clearcoat_normal_fragment_maps:gR,clearcoat_pars_fragment:_R,iridescence_pars_fragment:vR,opaque_fragment:yR,packing:xR,premultiplied_alpha_fragment:SR,project_vertex:MR,dithering_fragment:bR,dithering_pars_fragment:ER,roughnessmap_fragment:TR,roughnessmap_pars_fragment:AR,shadowmap_pars_fragment:wR,shadowmap_pars_vertex:CR,shadowmap_vertex:RR,shadowmask_pars_fragment:DR,skinbase_vertex:UR,skinning_pars_vertex:NR,skinning_vertex:LR,skinnormal_vertex:OR,specularmap_fragment:IR,specularmap_pars_fragment:PR,tonemapping_fragment:BR,tonemapping_pars_fragment:zR,transmission_fragment:FR,transmission_pars_fragment:HR,uv_pars_fragment:VR,uv_pars_vertex:GR,uv_vertex:kR,worldpos_vertex:XR,background_vert:WR,background_frag:qR,backgroundCube_vert:YR,backgroundCube_frag:ZR,cube_vert:JR,cube_frag:KR,depth_vert:QR,depth_frag:jR,distanceRGBA_vert:$R,distanceRGBA_frag:t2,equirect_vert:e2,equirect_frag:n2,linedashed_vert:i2,linedashed_frag:s2,meshbasic_vert:a2,meshbasic_frag:r2,meshlambert_vert:o2,meshlambert_frag:l2,meshmatcap_vert:c2,meshmatcap_frag:u2,meshnormal_vert:h2,meshnormal_frag:f2,meshphong_vert:d2,meshphong_frag:p2,meshphysical_vert:m2,meshphysical_frag:g2,meshtoon_vert:_2,meshtoon_frag:v2,points_vert:y2,points_frag:x2,shadow_vert:S2,shadow_frag:M2,sprite_vert:b2,sprite_frag:E2},lt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ts={basic:{uniforms:_n([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:_n([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:_n([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:_n([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:_n([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:_n([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:_n([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:_n([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:_n([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:_n([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:_n([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:_n([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:_n([lt.lights,lt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ts.physical={uniforms:_n([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Md={r:0,b:0,g:0},pr=new gi,T2=new ve;function A2(e,t,n,i,s,a,r){let o=new It(0),l=a===!0?0:1,c,f,d=null,h=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function x(v){let y=!1,A=g(v);A===null?u(o,l):A&&A.isColor&&(u(A,1),y=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===Ic)?(f===void 0&&(f=new Re(new wn(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:dr(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),pr.copy(y.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(T2.makeRotationFromEuler(pr)),f.material.toneMapped=Qt.getTransfer(A.colorSpace)!==he,(d!==A||h!==A.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Re(new wc(2,2),new Fn({name:"BackgroundMaterial",uniforms:dr(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(A.colorSpace)!==he,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(Md,C0(e)),i.buffers.color.setClear(Md.r,Md.g,Md.b,y,r)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:x,addToRenderList:m,dispose:_}}function w2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(M,U,B,V,k){let Z=!1,X=d(V,B,U);a!==X&&(a=X,c(a.object)),Z=p(M,V,B,k),Z&&g(M,V,B,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,y(M,U,B,V),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function f(M){return e.deleteVertexArray(M)}function d(M,U,B){let V=B.wireframe===!0,k=i[M.id];k===void 0&&(k={},i[M.id]=k);let Z=k[U.id];Z===void 0&&(Z={},k[U.id]=Z);let X=Z[V];return X===void 0&&(X=h(l()),Z[V]=X),X}function h(M){let U=[],B=[],V=[];for(let k=0;k<n;k++)U[k]=0,B[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,U,B,V){let k=a.attributes,Z=U.attributes,X=0,tt=B.getAttributes();for(let z in tt)if(tt[z].location>=0){let ht=k[z],bt=Z[z];if(bt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),ht===void 0||ht.attribute!==bt||bt&&ht.data!==bt.data)return!0;X++}return a.attributesNum!==X||a.index!==V}function g(M,U,B,V){let k={},Z=U.attributes,X=0,tt=B.getAttributes();for(let z in tt)if(tt[z].location>=0){let ht=Z[z];ht===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));let bt={};bt.attribute=ht,ht&&ht.data&&(bt.data=ht.data),k[z]=bt,X++}a.attributes=k,a.attributesNum=X,a.index=V}function x(){let M=a.newAttributes;for(let U=0,B=M.length;U<B;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){let B=a.newAttributes,V=a.enabledAttributes,k=a.attributeDivisors;B[M]=1,V[M]===0&&(e.enableVertexAttribArray(M),V[M]=1),k[M]!==U&&(e.vertexAttribDivisor(M,U),k[M]=U)}function _(){let M=a.newAttributes,U=a.enabledAttributes;for(let B=0,V=U.length;B<V;B++)U[B]!==M[B]&&(e.disableVertexAttribArray(B),U[B]=0)}function v(M,U,B,V,k,Z,X){X===!0?e.vertexAttribIPointer(M,U,B,k,Z):e.vertexAttribPointer(M,U,B,V,k,Z)}function y(M,U,B,V){x();let k=V.attributes,Z=B.getAttributes(),X=U.defaultAttributeValues;for(let tt in Z){let z=Z[tt];if(z.location>=0){let ot=k[tt];if(ot===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){let ht=ot.normalized,bt=ot.itemSize,Ht=t.get(ot);if(Ht===void 0)continue;let ee=Ht.buffer,pe=Ht.type,Kt=Ht.bytesPerElement,Y=pe===e.INT||pe===e.UNSIGNED_INT||ot.gpuType===Hf;if(ot.isInterleavedBufferAttribute){let Q=ot.data,ft=Q.stride,Rt=ot.offset;if(Q.isInstancedInterleavedBuffer){for(let vt=0;vt<z.locationSize;vt++)u(z.location+vt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let vt=0;vt<z.locationSize;vt++)m(z.location+vt);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let vt=0;vt<z.locationSize;vt++)v(z.location+vt,bt/z.locationSize,pe,ht,ft*Kt,(Rt+bt/z.locationSize*vt)*Kt,Y)}else{if(ot.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)u(z.location+Q,ot.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Q=0;Q<z.locationSize;Q++)m(z.location+Q);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let Q=0;Q<z.locationSize;Q++)v(z.location+Q,bt/z.locationSize,pe,ht,bt*Kt,bt/z.locationSize*Q*Kt,Y)}}else if(X!==void 0){let ht=X[tt];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(z.location,ht);break;case 3:e.vertexAttrib3fv(z.location,ht);break;case 4:e.vertexAttrib4fv(z.location,ht);break;default:e.vertexAttrib1fv(z.location,ht)}}}}_()}function A(){R();for(let M in i){let U=i[M];for(let B in U){let V=U[B];for(let k in V)f(V[k].object),delete V[k];delete U[B]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let B in U){let V=U[B];for(let k in V)f(V[k].object),delete V[k];delete U[B]}delete i[M.id]}function T(M){for(let U in i){let B=i[U];if(B[M.id]===void 0)continue;let V=B[M.id];for(let k in V)f(V[k].object),delete V[k];delete B[M.id]}}function R(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function C2(e,t,n){let i;function s(c){i=c}function a(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x]*h[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==vi&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ui&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!R)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function D2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ji,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?f(null):c();else{let _=a?0:i,v=_*4,y=u.clippingState||null;l.value=y,y=f(g,h,v,p);for(let A=0;A!==v;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=p;v!==x;++v,y+=4)r.copy(d[v]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function U2(e){let t=new WeakMap;function n(r,o){return o===Bf?r.mapping=hr:o===zf&&(r.mapping=fr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Bf||o===zf)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new uf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Zo=4,F1=[.125,.215,.35,.446,.526,.582],_r=20,N0=new Tf,H1=new It,L0=null,O0=0,I0=0,P0=!1,gr=(1+Math.sqrt(5))/2,Yo=1/gr,V1=[new L(-gr,Yo,0),new L(gr,Yo,0),new L(-Yo,0,gr),new L(Yo,0,gr),new L(0,gr,-Yo),new L(0,gr,Yo),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],N2=new L,Ko=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=N2}=a;L0=this._renderer.getRenderTarget(),O0=this._renderer.getActiveCubeFace(),I0=this._renderer.getActiveMipmapLevel(),P0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(L0,O0,I0),this._renderer.xr.enabled=P0,t.scissorTest=!1,bd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===hr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),L0=this._renderer.getRenderTarget(),O0=this._renderer.getActiveCubeFace(),I0=this._renderer.getActiveMipmapLevel(),P0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:ko,format:vi,colorSpace:ar,depthBuffer:!1},s=G1(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G1(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L2(a)),this._blurMaterial=O2(a,t,n)}return s}_compileMaterial(t){let n=new Re(this._lodPlanes[0],t);this._renderer.compile(n,N0)}_sceneToCubeUV(t,n,i,s,a){let l=new en(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(H1),d.toneMapping=Ds,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new or({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new Re(new wn,x),u=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,u=!0):(x.color.copy(H1),u=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[v],a.y,a.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[v]));let A=this._cubeSize;bd(s,y*A,v>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===hr||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=X1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k1());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Re(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;bd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,N0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=V1[(s-a-1)%V1.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new Re(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*_r-1),x=a/g,m=isFinite(a)?1+Math.floor(f*x):_r;m>_r&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);let u=[],_=0;for(let T=0;T<_r;++T){let R=T/x,E=Math.exp(-R*R/2);u.push(E),T===0?_+=E:T<m&&(_+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let y=this._sizeLods[s],A=3*y*(s>v-Zo?s-v+Zo:0),w=4*(this._cubeSize-y);bd(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(d,N0)}};function L2(e){let t=[],n=[],i=[],s=e,a=e-Zo+1+F1.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Zo?l=F1[r-e+Zo-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let w=0;w<p;w++){let T=w%3*2/3-1,R=w>2?0:-1,E=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(E,x*g*w),v.set(h,m*g*w);let M=[w,w,w,w,w,w];y.set(M,u*g*w)}let A=new An;A.setAttribute("position",new gn(_,x)),A.setAttribute("uv",new gn(v,m)),A.setAttribute("faceIndex",new gn(y,u)),t.push(A),s>Zo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function G1(e,t,n){let i=new Ki(e,t,n);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function O2(e,t,n){let i=new Float32Array(_r),s=new L(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:q0(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function k1(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:q0(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function X1(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:q0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function q0(){return`

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
	`}function I2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Bf||l===zf,f=l===hr||l===fr;if(c||f){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Ko(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(n===null&&(n=new Ko(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function P2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function B2(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){let A=_[v+0],w=_[v+1],T=_[v+2];h.push(A,w,w,T,T,A)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let A=v+0,w=v+1,T=v+2;h.push(A,w,w,T,T,A)}}else return;let m=new(w0(h)?_c:gc)(h,1);m.version=x;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function f(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function z2(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,h*r,g),n.update(p,i,g))}function f(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*x[_];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function F2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function H2(e,t,n){let i=new WeakMap,s=new ue;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*A*4*d),T=new mc(w,y,A,d);T.type=Ni,T.needsUpdate=!0;let R=v*4;for(let M=0;M<d;M++){let U=m[M],B=u[M],V=_[M],k=y*A*4*M;for(let Z=0;Z<U.count;Z++){let X=Z*R;p===!0&&(s.fromBufferAttribute(U,Z),w[k+X+0]=s.x,w[k+X+1]=s.y,w[k+X+2]=s.z,w[k+X+3]=0),g===!0&&(s.fromBufferAttribute(B,Z),w[k+X+4]=s.x,w[k+X+5]=s.y,w[k+X+6]=s.z,w[k+X+7]=0),x===!0&&(s.fromBufferAttribute(V,Z),w[k+X+8]=s.x,w[k+X+9]=s.y,w[k+X+10]=s.z,w[k+X+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new Xt(y,A)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function V2(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var cb=new zn,W1=new Ec(1,1),ub=new mc,hb=new lf,fb=new yc,q1=[],Y1=[],Z1=new Float32Array(16),J1=new Float32Array(9),K1=new Float32Array(4);function Qo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=q1[s];if(a===void 0&&(a=new Float32Array(s),q1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ad(e,t){let n=Y1[t];n===void 0&&(n=new Int32Array(t),Y1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function G2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function k2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Je(n,t)}}function X2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Je(n,t)}}function W2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Je(n,t)}}function q2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;K1.set(i),e.uniformMatrix2fv(this.addr,!1,K1),Je(n,i)}}function Y2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;J1.set(i),e.uniformMatrix3fv(this.addr,!1,J1),Je(n,i)}}function Z2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;Z1.set(i),e.uniformMatrix4fv(this.addr,!1,Z1),Je(n,i)}}function J2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function K2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Je(n,t)}}function Q2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Je(n,t)}}function j2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Je(n,t)}}function $2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function t3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Je(n,t)}}function e3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Je(n,t)}}function n3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Je(n,t)}}function i3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(W1.compareFunction=E0,a=W1):a=cb,n.setTexture2D(t||a,s)}function s3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||hb,s)}function a3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||fb,s)}function r3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||ub,s)}function o3(e){switch(e){case 5126:return G2;case 35664:return k2;case 35665:return X2;case 35666:return W2;case 35674:return q2;case 35675:return Y2;case 35676:return Z2;case 5124:case 35670:return J2;case 35667:case 35671:return K2;case 35668:case 35672:return Q2;case 35669:case 35673:return j2;case 5125:return $2;case 36294:return t3;case 36295:return e3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return s3;case 35680:case 36300:case 36308:case 36293:return a3;case 36289:case 36303:case 36311:case 36292:return r3}}function l3(e,t){e.uniform1fv(this.addr,t)}function c3(e,t){let n=Qo(t,this.size,2);e.uniform2fv(this.addr,n)}function u3(e,t){let n=Qo(t,this.size,3);e.uniform3fv(this.addr,n)}function h3(e,t){let n=Qo(t,this.size,4);e.uniform4fv(this.addr,n)}function f3(e,t){let n=Qo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function d3(e,t){let n=Qo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function p3(e,t){let n=Qo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function m3(e,t){e.uniform1iv(this.addr,t)}function g3(e,t){e.uniform2iv(this.addr,t)}function _3(e,t){e.uniform3iv(this.addr,t)}function v3(e,t){e.uniform4iv(this.addr,t)}function y3(e,t){e.uniform1uiv(this.addr,t)}function x3(e,t){e.uniform2uiv(this.addr,t)}function S3(e,t){e.uniform3uiv(this.addr,t)}function M3(e,t){e.uniform4uiv(this.addr,t)}function b3(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||cb,a[r])}function E3(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||hb,a[r])}function T3(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||fb,a[r])}function A3(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||ub,a[r])}function w3(e){switch(e){case 5126:return l3;case 35664:return c3;case 35665:return u3;case 35666:return h3;case 35674:return f3;case 35675:return d3;case 35676:return p3;case 5124:case 35670:return m3;case 35667:case 35671:return g3;case 35668:case 35672:return _3;case 35669:case 35673:return v3;case 5125:return y3;case 36294:return x3;case 36295:return S3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return b3;case 35679:case 36299:case 36307:return E3;case 35680:case 36300:case 36308:case 36293:return T3;case 36289:case 36303:case 36311:case 36292:return A3}}var z0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o3(n.type)}},F0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=w3(n.type)}},H0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},B0=/(\w+)(\])?(\[|\.)?/g;function Q1(e,t){e.seq.push(t),e.map[t.id]=t}function C3(e,t,n){let i=e.name,s=i.length;for(B0.lastIndex=0;;){let a=B0.exec(i),r=B0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Q1(n,c===void 0?new z0(o,e,t):new F0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new H0(o),Q1(n,d)),n=d}}}var Jo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);C3(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function j1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var R3=37297,D3=0;function U3(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var $1=new Ft;function N3(e){Qt._getMatrix($1,Qt.workingColorSpace,e);let t=`mat3( ${$1.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case fc:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function tb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+U3(e.getShaderSource(t),o)}else return a}function L3(e,t){let n=N3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function O3(e,t){let n;switch(t){case _1:n="Linear";break;case v1:n="Reinhard";break;case y1:n="Cineon";break;case Pf:n="ACESFilmic";break;case S1:n="AgX";break;case M1:n="Neutral";break;case x1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ed=new L;function I3(){Qt.getLuminanceCoefficients(Ed);let e=Ed.x.toFixed(4),t=Ed.y.toFixed(4),n=Ed.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gc).join(`
`)}function B3(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function z3(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Gc(e){return e!==""}function eb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var F3=/^[ \t]*#include +<([\w\d./]+)>/gm;function V0(e){return e.replace(F3,V3)}var H3=new Map;function V3(e,t){let n=Vt[t];if(n===void 0){let i=H3.get(t);if(i!==void 0)n=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return V0(n)}var G3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ib(e){return e.replace(G3,k3)}function k3(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function sb(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function X3(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===d0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function W3(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case hr:case fr:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q3(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function Y3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case If:t="ENVMAP_BLENDING_MULTIPLY";break;case m1:t="ENVMAP_BLENDING_MIX";break;case g1:t="ENVMAP_BLENDING_ADD";break}return t}function Z3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function J3(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=X3(n),c=W3(n),f=q3(n),d=Y3(n),h=Z3(n),p=P3(n),g=B3(a),x=s.createProgram(),m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Gc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Gc).join(`
`),u.length>0&&(u+=`
`)):(m=[sb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gc).join(`
`),u=[sb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ds?"#define TONE_MAPPING":"",n.toneMapping!==Ds?Vt.tonemapping_pars_fragment:"",n.toneMapping!==Ds?O3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,L3("linearToOutputTexel",n.outputColorSpace),I3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gc).join(`
`)),r=V0(r),r=eb(r,n),r=nb(r,n),o=V0(o),o=eb(o,n),o=nb(o,n),r=ib(r),o=ib(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=_+m+r,y=_+u+o,A=j1(s,s.VERTEX_SHADER,v),w=j1(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,w),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(U){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(w)||"",Z=B.trim(),X=V.trim(),tt=k.trim(),z=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,w);else{let ht=tb(s,A,"vertex"),bt=tb(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+ht+`
`+bt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(X===""||tt==="")&&(ot=!1);ot&&(U.diagnostics={runnable:z,programLog:Z,vertexShader:{log:X,prefix:m},fragmentShader:{log:tt,prefix:u}})}s.deleteShader(A),s.deleteShader(w),R=new Jo(s,x),E=z3(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,R3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=D3++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}var K3=0,G0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new k0(t),n.set(t,i)),i}},k0=class{constructor(t){this.id=K3++,this.code=t,this.usedTimes=0}};function Q3(e,t,n,i,s,a,r){let o=new Bo,l=new G0,c=new Set,f=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,B,V){let k=B.fog,Z=V.geometry,X=E.isMeshStandardMaterial?B.environment:null,tt=(E.isMeshStandardMaterial?n:t).get(E.envMap||X),z=tt&&tt.mapping===Ic?tt.image.height:null,ot=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bt=ht!==void 0?ht.length:0,Ht=0;Z.morphAttributes.position!==void 0&&(Ht=1),Z.morphAttributes.normal!==void 0&&(Ht=2),Z.morphAttributes.color!==void 0&&(Ht=3);let ee,pe,Kt,Y;if(ot){let ae=ts[ot];ee=ae.vertexShader,pe=ae.fragmentShader}else ee=E.vertexShader,pe=E.fragmentShader,l.update(E),Kt=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);let Q=e.getRenderTarget(),ft=e.state.buffers.depth.getReversed(),Rt=V.isInstancedMesh===!0,vt=V.isBatchedMesh===!0,Gt=!!E.map,Fe=!!E.matcap,D=!!tt,jt=!!E.aoMap,Nt=!!E.lightMap,Tt=!!E.bumpMap,gt=!!E.normalMap,se=!!E.displacementMap,yt=!!E.emissiveMap,Pt=!!E.metalnessMap,Be=!!E.roughnessMap,Ae=E.anisotropy>0,C=E.clearcoat>0,S=E.dispersion>0,P=E.iridescence>0,W=E.sheen>0,$=E.transmission>0,G=Ae&&!!E.anisotropyMap,Mt=C&&!!E.clearcoatMap,rt=C&&!!E.clearcoatNormalMap,xt=C&&!!E.clearcoatRoughnessMap,dt=P&&!!E.iridescenceMap,it=P&&!!E.iridescenceThicknessMap,ct=W&&!!E.sheenColorMap,wt=W&&!!E.sheenRoughnessMap,J=!!E.specularMap,et=!!E.specularColorMap,Et=!!E.specularIntensityMap,N=$&&!!E.transmissionMap,j=$&&!!E.thicknessMap,at=!!E.gradientMap,pt=!!E.alphaMap,nt=E.alphaTest>0,K=!!E.alphaHash,_t=!!E.extensions,Bt=Ds;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=e.toneMapping);let ye={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:pe,defines:E.defines,customVertexShaderID:Kt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:vt,batchingColor:vt&&V._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&V.instanceColor!==null,instancingMorph:Rt&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ar,alphaToCoverage:!!E.alphaToCoverage,map:Gt,matcap:Fe,envMap:D,envMapMode:D&&tt.mapping,envMapCubeUVHeight:z,aoMap:jt,lightMap:Nt,bumpMap:Tt,normalMap:gt,displacementMap:h&&se,emissiveMap:yt,normalMapObjectSpace:gt&&E.normalMapType===A1,normalMapTangentSpace:gt&&E.normalMapType===Sd,metalnessMap:Pt,roughnessMap:Be,anisotropy:Ae,anisotropyMap:G,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:rt,clearcoatRoughnessMap:xt,dispersion:S,iridescence:P,iridescenceMap:dt,iridescenceThicknessMap:it,sheen:W,sheenColorMap:ct,sheenRoughnessMap:wt,specularMap:J,specularColorMap:et,specularIntensityMap:Et,transmission:$,transmissionMap:N,thicknessMap:j,gradientMap:at,opaque:E.transparent===!1&&E.blending===ir&&E.alphaToCoverage===!1,alphaMap:pt,alphaTest:nt,alphaHash:K,combine:E.combine,mapUv:Gt&&x(E.map.channel),aoMapUv:jt&&x(E.aoMap.channel),lightMapUv:Nt&&x(E.lightMap.channel),bumpMapUv:Tt&&x(E.bumpMap.channel),normalMapUv:gt&&x(E.normalMap.channel),displacementMapUv:se&&x(E.displacementMap.channel),emissiveMapUv:yt&&x(E.emissiveMap.channel),metalnessMapUv:Pt&&x(E.metalnessMap.channel),roughnessMapUv:Be&&x(E.roughnessMap.channel),anisotropyMapUv:G&&x(E.anisotropyMap.channel),clearcoatMapUv:Mt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(E.sheenRoughnessMap.channel),specularMapUv:J&&x(E.specularMap.channel),specularColorMapUv:et&&x(E.specularColorMap.channel),specularIntensityMapUv:Et&&x(E.specularIntensityMap.channel),transmissionMapUv:N&&x(E.transmissionMap.channel),thicknessMapUv:j&&x(E.thicknessMap.channel),alphaMapUv:pt&&x(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(gt||Ae),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(Gt||pt),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Gt&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_t&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&E.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(_(M,E),v(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=g[E.type],U;if(M){let B=ts[M];U=B1.clone(B.uniforms)}else U=E.uniforms;return U}function A(E,M){let U;for(let B=0,V=f.length;B<V;B++){let k=f[B];if(k.cacheKey===M){U=k,++U.usedTimes;break}}return U===void 0&&(U=new J3(e,M,E,a),f.push(U)),U}function w(E){if(--E.usedTimes===0){let M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function T(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:f,dispose:R}}function j3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function $3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function ab(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function rb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,g,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,h,p,g,x,m){let u=r(d,h,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,h,p,g,x,m){let u=r(d,h,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||$3),i.length>1&&i.sort(h||ab),s.length>1&&s.sort(h||ab)}function f(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:f,sort:c}}function tD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new rb,e.set(i,[r])):s>=a.length?(r=new rb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function eD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new It};break;case"SpotLight":n={position:new L,direction:new L,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new It,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new It,groundColor:new It};break;case"RectAreaLight":n={color:new It,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function nD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var iD=0;function sD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function aD(e){let t=new eD,n=nD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,a=new ve,r=new ve;function o(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,_=0,v=0,y=0,A=0,w=0,T=0;c.sort(sD);for(let E=0,M=c.length;E<M;E++){let U=c[E],B=U.color,V=U.intensity,k=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=B.r*V,d+=B.g*V,h+=B.b*V;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],V);T++}else if(U.isDirectionalLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let tt=U.shadow,z=n.get(U);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=U.shadow.matrix,_++}i.directional[p]=X,p++}else if(U.isSpotLight){let X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(B).multiplyScalar(V),X.distance=k,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[x]=X;let tt=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,tt.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[x]=tt.matrix,U.castShadow){let z=n.get(U);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=Z,y++}x++}else if(U.isRectAreaLight){let X=t.get(U);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=X,m++}else if(U.isPointLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let tt=U.shadow,z=n.get(U);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,z.shadowCameraNear=tt.camera.near,z.shadowCameraFar=tt.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=U.shadow.matrix,v++}i.point[g]=X,g++}else if(U.isHemisphereLight){let X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(V),X.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[u]=X,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=T,i.version=iD++)}function l(c,f){let d=0,h=0,p=0,g=0,x=0,m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){let v=c[u];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function ob(e){let t=new aD(e),n=[],i=[];function s(f){c.camera=f,n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function rD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new ob(e),t.set(s,[o])):a>=r.length?(o=new ob(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var oD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lD=`uniform sampler2D shadow_pass;
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
}`;function cD(e,t,n){let i=new Fo,s=new Xt,a=new Xt,r=new ue,o=new df({depthPacking:T1}),l=new pf,c={},f=n.maxTextureSize,d={[Es]:un,[un]:Es,[_i]:_i},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:oD,fragmentShader:lD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new An;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d0;let u=this.type;this.render=function(w,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Rs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=u!==$i&&this.type===$i,k=u===$i&&this.type!==$i;for(let Z=0,X=w.length;Z<X;Z++){let tt=w[Z],z=tt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ot=z.getFrameExtents();if(s.multiply(ot),a.copy(z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/ot.x),s.x=a.x*ot.x,z.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/ot.y),s.y=a.y*ot.y,z.mapSize.y=a.y)),z.map===null||V===!0||k===!0){let bt=this.type!==$i?{minFilter:Bn,magFilter:Bn}:{};z.map!==null&&z.map.dispose(),z.map=new Ki(s.x,s.y,bt),z.map.texture.name=tt.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();let ht=z.getViewportCount();for(let bt=0;bt<ht;bt++){let Ht=z.getViewport(bt);r.set(a.x*Ht.x,a.y*Ht.y,a.x*Ht.z,a.y*Ht.w),B.viewport(r),z.updateMatrices(tt,bt),i=z.getFrustum(),y(T,R,z.camera,tt,this.type)}z.isPointLightShadow!==!0&&this.type===$i&&_(z,R),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,U)};function _(w,T){let R=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(T,null,R,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(T,null,R,p,x,null)}function v(w,T,R,E){let M=null,U=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=R.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let B=M.uuid,V=T.uuid,k=c[B];k===void 0&&(k={},c[B]=k);let Z=k[V];Z===void 0&&(Z=M.clone(),k[V]=Z,T.addEventListener("dispose",A)),M=Z}if(M.visible=T.visible,M.wireframe=T.wireframe,E===$i?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=e.properties.get(M);B.light=R}return M}function y(w,T,R,E,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===$i)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let V=t.update(w),k=w.material;if(Array.isArray(k)){let Z=V.groups;for(let X=0,tt=Z.length;X<tt;X++){let z=Z[X],ot=k[z.materialIndex];if(ot&&ot.visible){let ht=v(w,ot,E,M);w.onBeforeShadow(e,w,T,R,V,ht,z),e.renderBufferDirect(R,null,V,ht,w,z),w.onAfterShadow(e,w,T,R,V,ht,z)}}}else if(k.visible){let Z=v(w,k,E,M);w.onBeforeShadow(e,w,T,R,V,Z,null),e.renderBufferDirect(R,null,V,Z,w,null),w.onAfterShadow(e,w,T,R,V,Z,null)}}let B=w.children;for(let V=0,k=B.length;V<k;V++)y(B[V],T,R,E,M)}function A(w){w.target.removeEventListener("dispose",A);for(let R in c){let E=c[R],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var uD={[Cf]:Rf,[Df]:Lf,[Uf]:Of,[sr]:Nf,[Rf]:Cf,[Lf]:Df,[Of]:Uf,[Nf]:sr};function hD(e,t){function n(){let N=!1,j=new ue,at=null,pt=new ue(0,0,0,0);return{setMask:function(nt){at!==nt&&!N&&(e.colorMask(nt,nt,nt,nt),at=nt)},setLocked:function(nt){N=nt},setClear:function(nt,K,_t,Bt,ye){ye===!0&&(nt*=Bt,K*=Bt,_t*=Bt),j.set(nt,K,_t,Bt),pt.equals(j)===!1&&(e.clearColor(nt,K,_t,Bt),pt.copy(j))},reset:function(){N=!1,at=null,pt.set(-1,0,0,0)}}}function i(){let N=!1,j=!1,at=null,pt=null,nt=null;return{setReversed:function(K){if(j!==K){let _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),j=K;let Bt=nt;nt=null,this.setClear(Bt)}},getReversed:function(){return j},setTest:function(K){K?Q(e.DEPTH_TEST):ft(e.DEPTH_TEST)},setMask:function(K){at!==K&&!N&&(e.depthMask(K),at=K)},setFunc:function(K){if(j&&(K=uD[K]),pt!==K){switch(K){case Cf:e.depthFunc(e.NEVER);break;case Rf:e.depthFunc(e.ALWAYS);break;case Df:e.depthFunc(e.LESS);break;case sr:e.depthFunc(e.LEQUAL);break;case Uf:e.depthFunc(e.EQUAL);break;case Nf:e.depthFunc(e.GEQUAL);break;case Lf:e.depthFunc(e.GREATER);break;case Of:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=K}},setLocked:function(K){N=K},setClear:function(K){nt!==K&&(j&&(K=1-K),e.clearDepth(K),nt=K)},reset:function(){N=!1,at=null,pt=null,nt=null,j=!1}}}function s(){let N=!1,j=null,at=null,pt=null,nt=null,K=null,_t=null,Bt=null,ye=null;return{setTest:function(ae){N||(ae?Q(e.STENCIL_TEST):ft(e.STENCIL_TEST))},setMask:function(ae){j!==ae&&!N&&(e.stencilMask(ae),j=ae)},setFunc:function(ae,es,Li){(at!==ae||pt!==es||nt!==Li)&&(e.stencilFunc(ae,es,Li),at=ae,pt=es,nt=Li)},setOp:function(ae,es,Li){(K!==ae||_t!==es||Bt!==Li)&&(e.stencilOp(ae,es,Li),K=ae,_t=es,Bt=Li)},setLocked:function(ae){N=ae},setClear:function(ae){ye!==ae&&(e.clearStencil(ae),ye=ae)},reset:function(){N=!1,j=null,at=null,pt=null,nt=null,K=null,_t=null,Bt=null,ye=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,u=null,_=null,v=null,y=null,A=null,w=null,T=new It(0,0,0),R=0,E=!1,M=null,U=null,B=null,V=null,k=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=tt>=1):z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=tt>=2);let ot=null,ht={},bt=e.getParameter(e.SCISSOR_BOX),Ht=e.getParameter(e.VIEWPORT),ee=new ue().fromArray(bt),pe=new ue().fromArray(Ht);function Kt(N,j,at,pt){let nt=new Uint8Array(4),K=e.createTexture();e.bindTexture(N,K),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let _t=0;_t<at;_t++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,nt):e.texImage2D(j+_t,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,nt);return K}let Y={};Y[e.TEXTURE_2D]=Kt(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=Kt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=Kt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=Kt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),r.setFunc(sr),Tt(!1),gt(f0),Q(e.CULL_FACE),jt(Rs);function Q(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function ft(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function Rt(N,j){return d[N]!==j?(e.bindFramebuffer(N,j),d[N]=j,N===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=j),N===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=j),!0):!1}function vt(N,j){let at=p,pt=!1;if(N){at=h.get(j),at===void 0&&(at=[],h.set(j,at));let nt=N.textures;if(at.length!==nt.length||at[0]!==e.COLOR_ATTACHMENT0){for(let K=0,_t=nt.length;K<_t;K++)at[K]=e.COLOR_ATTACHMENT0+K;at.length=nt.length,pt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,pt=!0);pt&&e.drawBuffers(at)}function Gt(N){return g!==N?(e.useProgram(N),g=N,!0):!1}let Fe={[va]:e.FUNC_ADD,[jM]:e.FUNC_SUBTRACT,[$M]:e.FUNC_REVERSE_SUBTRACT};Fe[t1]=e.MIN,Fe[e1]=e.MAX;let D={[n1]:e.ZERO,[i1]:e.ONE,[s1]:e.SRC_COLOR,[tf]:e.SRC_ALPHA,[u1]:e.SRC_ALPHA_SATURATE,[l1]:e.DST_COLOR,[r1]:e.DST_ALPHA,[a1]:e.ONE_MINUS_SRC_COLOR,[ef]:e.ONE_MINUS_SRC_ALPHA,[c1]:e.ONE_MINUS_DST_COLOR,[o1]:e.ONE_MINUS_DST_ALPHA,[h1]:e.CONSTANT_COLOR,[f1]:e.ONE_MINUS_CONSTANT_COLOR,[d1]:e.CONSTANT_ALPHA,[p1]:e.ONE_MINUS_CONSTANT_ALPHA};function jt(N,j,at,pt,nt,K,_t,Bt,ye,ae){if(N===Rs){x===!0&&(ft(e.BLEND),x=!1);return}if(x===!1&&(Q(e.BLEND),x=!0),N!==QM){if(N!==m||ae!==E){if((u!==va||y!==va)&&(e.blendEquation(e.FUNC_ADD),u=va,y=va),ae)switch(N){case ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vo:e.blendFunc(e.ONE,e.ONE);break;case p0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case m0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case p0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,v=null,A=null,w=null,T.set(0,0,0),R=0,m=N,E=ae}return}nt=nt||j,K=K||at,_t=_t||pt,(j!==u||nt!==y)&&(e.blendEquationSeparate(Fe[j],Fe[nt]),u=j,y=nt),(at!==_||pt!==v||K!==A||_t!==w)&&(e.blendFuncSeparate(D[at],D[pt],D[K],D[_t]),_=at,v=pt,A=K,w=_t),(Bt.equals(T)===!1||ye!==R)&&(e.blendColor(Bt.r,Bt.g,Bt.b,ye),T.copy(Bt),R=ye),m=N,E=!1}function Nt(N,j){N.side===_i?ft(e.CULL_FACE):Q(e.CULL_FACE);let at=N.side===un;j&&(at=!at),Tt(at),N.blending===ir&&N.transparent===!1?jt(Rs):jt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(N){M!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),M=N)}function gt(N){N!==JM?(Q(e.CULL_FACE),N!==U&&(N===f0?e.cullFace(e.BACK):N===KM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ft(e.CULL_FACE),U=N}function se(N){N!==B&&(X&&e.lineWidth(N),B=N)}function yt(N,j,at){N?(Q(e.POLYGON_OFFSET_FILL),(V!==j||k!==at)&&(e.polygonOffset(j,at),V=j,k=at)):ft(e.POLYGON_OFFSET_FILL)}function Pt(N){N?Q(e.SCISSOR_TEST):ft(e.SCISSOR_TEST)}function Be(N){N===void 0&&(N=e.TEXTURE0+Z-1),ot!==N&&(e.activeTexture(N),ot=N)}function Ae(N,j,at){at===void 0&&(ot===null?at=e.TEXTURE0+Z-1:at=ot);let pt=ht[at];pt===void 0&&(pt={type:void 0,texture:void 0},ht[at]=pt),(pt.type!==N||pt.texture!==j)&&(ot!==at&&(e.activeTexture(at),ot=at),e.bindTexture(N,j||Y[N]),pt.type=N,pt.texture=j)}function C(){let N=ht[ot];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(N){ee.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function wt(N){pe.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}function J(N,j){let at=c.get(j);at===void 0&&(at=new WeakMap,c.set(j,at));let pt=at.get(N);pt===void 0&&(pt=e.getUniformBlockIndex(j,N.name),at.set(N,pt))}function et(N,j){let pt=c.get(j).get(N);l.get(j)!==pt&&(e.uniformBlockBinding(j,pt,N.__bindingPointIndex),l.set(j,pt))}function Et(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ot=null,ht={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,u=null,_=null,v=null,y=null,A=null,w=null,T=new It(0,0,0),R=0,E=!1,M=null,U=null,B=null,V=null,k=null,ee.set(0,0,e.canvas.width,e.canvas.height),pe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Q,disable:ft,bindFramebuffer:Rt,drawBuffers:vt,useProgram:Gt,setBlending:jt,setMaterial:Nt,setFlipSided:Tt,setCullFace:gt,setLineWidth:se,setPolygonOffset:yt,setScissorTest:Pt,activeTexture:Be,bindTexture:Ae,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:dt,texImage3D:it,updateUBOMapping:J,uniformBlockBinding:et,texStorage2D:rt,texStorage3D:xt,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:Mt,scissor:ct,viewport:wt,reset:Et}}function fD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):pc("canvas")}function x(C,S,P){let W=1,$=Ae(C);if(($.width>P||$.height>P)&&(W=P/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let G=Math.floor(W*$.width),Mt=Math.floor(W*$.height);d===void 0&&(d=g(G,Mt));let rt=S?g(G,Mt):d;return rt.width=G,rt.height=Mt,rt.getContext("2d").drawImage(C,0,0,G,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+Mt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){e.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(C,S,P,W,$=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let G=S;if(S===e.RED&&(P===e.FLOAT&&(G=e.R32F),P===e.HALF_FLOAT&&(G=e.R16F),P===e.UNSIGNED_BYTE&&(G=e.R8)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.R8UI),P===e.UNSIGNED_SHORT&&(G=e.R16UI),P===e.UNSIGNED_INT&&(G=e.R32UI),P===e.BYTE&&(G=e.R8I),P===e.SHORT&&(G=e.R16I),P===e.INT&&(G=e.R32I)),S===e.RG&&(P===e.FLOAT&&(G=e.RG32F),P===e.HALF_FLOAT&&(G=e.RG16F),P===e.UNSIGNED_BYTE&&(G=e.RG8)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.RG8UI),P===e.UNSIGNED_SHORT&&(G=e.RG16UI),P===e.UNSIGNED_INT&&(G=e.RG32UI),P===e.BYTE&&(G=e.RG8I),P===e.SHORT&&(G=e.RG16I),P===e.INT&&(G=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.RGB8UI),P===e.UNSIGNED_SHORT&&(G=e.RGB16UI),P===e.UNSIGNED_INT&&(G=e.RGB32UI),P===e.BYTE&&(G=e.RGB8I),P===e.SHORT&&(G=e.RGB16I),P===e.INT&&(G=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),P===e.UNSIGNED_INT&&(G=e.RGBA32UI),P===e.BYTE&&(G=e.RGBA8I),P===e.SHORT&&(G=e.RGBA16I),P===e.INT&&(G=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),S===e.RGBA){let Mt=$?fc:Qt.getTransfer(W);P===e.FLOAT&&(G=e.RGBA32F),P===e.HALF_FLOAT&&(G=e.RGBA16F),P===e.UNSIGNED_BYTE&&(G=Mt===he?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(C,S){let P;return C?S===null||S===Ea||S===Xo?P=e.DEPTH24_STENCIL8:S===Ni?P=e.DEPTH32F_STENCIL8:S===Go&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ea||S===Xo?P=e.DEPTH_COMPONENT24:S===Ni?P=e.DEPTH_COMPONENT32F:S===Go&&(P=e.DEPTH_COMPONENT16),P}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==Di?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){let S=C.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&f.delete(S)}function T(C){let S=C.target;S.removeEventListener("dispose",T),M(S)}function R(C){let S=i.get(C);if(S.__webglInit===void 0)return;let P=C.source,W=h.get(P);if(W){let $=W[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(C),Object.keys(W).length===0&&h.delete(P)}i.remove(C)}function E(C){let S=i.get(C);e.deleteTexture(S.__webglTexture);let P=C.source,W=h.get(P);delete W[S.__cacheKey],r.memory.textures--}function M(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let $=0;$<S.__webglFramebuffer[W].length;$++)e.deleteFramebuffer(S.__webglFramebuffer[W][$]);else e.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)e.deleteFramebuffer(S.__webglFramebuffer[W]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=C.textures;for(let W=0,$=P.length;W<$;W++){let G=i.get(P[W]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),r.memory.textures--),i.remove(P[W])}i.remove(C)}let U=0;function B(){U=0}function V(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function k(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){let P=i.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let W=C.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(P,C,S);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function X(C,S){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){Y(P,C,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function tt(C,S){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){Y(P,C,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function z(C,S){let P=i.get(C);if(C.version>0&&P.__version!==C.version){Q(P,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let ot={[nf]:e.REPEAT,[_a]:e.CLAMP_TO_EDGE,[sf]:e.MIRRORED_REPEAT},ht={[Bn]:e.NEAREST,[b1]:e.NEAREST_MIPMAP_NEAREST,[Pc]:e.NEAREST_MIPMAP_LINEAR,[Di]:e.LINEAR,[Ff]:e.LINEAR_MIPMAP_NEAREST,[ba]:e.LINEAR_MIPMAP_LINEAR},bt={[w1]:e.NEVER,[L1]:e.ALWAYS,[C1]:e.LESS,[E0]:e.LEQUAL,[R1]:e.EQUAL,[N1]:e.GEQUAL,[D1]:e.GREATER,[U1]:e.NOTEQUAL};function Ht(C,S){if(S.type===Ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Di||S.magFilter===Ff||S.magFilter===Pc||S.magFilter===ba||S.minFilter===Di||S.minFilter===Ff||S.minFilter===Pc||S.minFilter===ba)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,ot[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,ot[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,ot[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,ht[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bn||S.minFilter!==Pc&&S.minFilter!==ba||S.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ee(C,S){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));let W=S.source,$=h.get(W);$===void 0&&($={},h.set(W,$));let G=k(S);if(G!==C.__cacheKey){$[G]===void 0&&($[G]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),$[G].usedTimes++;let Mt=$[C.__cacheKey];Mt!==void 0&&($[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(S)),C.__cacheKey=G,C.__webglTexture=$[G].texture}return P}function pe(C,S,P){return Math.floor(Math.floor(C/P)/S)}function Kt(C,S,P,W){let G=C.updateRanges;if(G.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,W,S.data);else{G.sort((it,ct)=>it.start-ct.start);let Mt=0;for(let it=1;it<G.length;it++){let ct=G[Mt],wt=G[it],J=ct.start+ct.count,et=pe(wt.start,S.width,4),Et=pe(ct.start,S.width,4);wt.start<=J+1&&et===Et&&pe(wt.start+wt.count-1,S.width,4)===et?ct.count=Math.max(ct.count,wt.start+wt.count-ct.start):(++Mt,G[Mt]=wt)}G.length=Mt+1;let rt=e.getParameter(e.UNPACK_ROW_LENGTH),xt=e.getParameter(e.UNPACK_SKIP_PIXELS),dt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let it=0,ct=G.length;it<ct;it++){let wt=G[it],J=Math.floor(wt.start/4),et=Math.ceil(wt.count/4),Et=J%S.width,N=Math.floor(J/S.width),j=et,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Et,N,j,at,P,W,S.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,rt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(e.UNPACK_SKIP_ROWS,dt)}}function Y(C,S,P){let W=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=e.TEXTURE_3D);let $=ee(C,S),G=S.source;n.bindTexture(W,C.__webglTexture,e.TEXTURE0+P);let Mt=i.get(G);if(G.version!==Mt.__version||$===!0){n.activeTexture(e.TEXTURE0+P);let rt=Qt.getPrimaries(Qt.workingColorSpace),xt=S.colorSpace===Us?null:Qt.getPrimaries(S.colorSpace),dt=S.colorSpace===Us||rt===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let it=x(S.image,!1,s.maxTextureSize);it=Be(S,it);let ct=a.convert(S.format,S.colorSpace),wt=a.convert(S.type),J=v(S.internalFormat,ct,wt,S.colorSpace,S.isVideoTexture);Ht(W,S);let et,Et=S.mipmaps,N=S.isVideoTexture!==!0,j=Mt.__version===void 0||$===!0,at=G.dataReady,pt=A(S,it);if(S.isDepthTexture)J=y(S.format===Wo,S.type),j&&(N?n.texStorage2D(e.TEXTURE_2D,1,J,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,J,it.width,it.height,0,ct,wt,null));else if(S.isDataTexture)if(Et.length>0){N&&j&&n.texStorage2D(e.TEXTURE_2D,pt,J,Et[0].width,Et[0].height);for(let nt=0,K=Et.length;nt<K;nt++)et=Et[nt],N?at&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,et.width,et.height,ct,wt,et.data):n.texImage2D(e.TEXTURE_2D,nt,J,et.width,et.height,0,ct,wt,et.data);S.generateMipmaps=!1}else N?(j&&n.texStorage2D(e.TEXTURE_2D,pt,J,it.width,it.height),at&&Kt(S,it,ct,wt)):n.texImage2D(e.TEXTURE_2D,0,J,it.width,it.height,0,ct,wt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&j&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,J,Et[0].width,Et[0].height,it.depth);for(let nt=0,K=Et.length;nt<K;nt++)if(et=Et[nt],S.format!==vi)if(ct!==null)if(N){if(at)if(S.layerUpdates.size>0){let _t=U0(et.width,et.height,S.format,S.type);for(let Bt of S.layerUpdates){let ye=et.data.subarray(Bt*_t/et.data.BYTES_PER_ELEMENT,(Bt+1)*_t/et.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,Bt,et.width,et.height,1,ct,ye)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,et.width,et.height,it.depth,ct,et.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,nt,J,et.width,et.height,it.depth,0,et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,et.width,et.height,it.depth,ct,wt,et.data):n.texImage3D(e.TEXTURE_2D_ARRAY,nt,J,et.width,et.height,it.depth,0,ct,wt,et.data)}else{N&&j&&n.texStorage2D(e.TEXTURE_2D,pt,J,Et[0].width,Et[0].height);for(let nt=0,K=Et.length;nt<K;nt++)et=Et[nt],S.format!==vi?ct!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,nt,0,0,et.width,et.height,ct,et.data):n.compressedTexImage2D(e.TEXTURE_2D,nt,J,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?at&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,et.width,et.height,ct,wt,et.data):n.texImage2D(e.TEXTURE_2D,nt,J,et.width,et.height,0,ct,wt,et.data)}else if(S.isDataArrayTexture)if(N){if(j&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,J,it.width,it.height,it.depth),at)if(S.layerUpdates.size>0){let nt=U0(it.width,it.height,S.format,S.type);for(let K of S.layerUpdates){let _t=it.data.subarray(K*nt/it.data.BYTES_PER_ELEMENT,(K+1)*nt/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ct,wt,_t)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ct,wt,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,J,it.width,it.height,it.depth,0,ct,wt,it.data);else if(S.isData3DTexture)N?(j&&n.texStorage3D(e.TEXTURE_3D,pt,J,it.width,it.height,it.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ct,wt,it.data)):n.texImage3D(e.TEXTURE_3D,0,J,it.width,it.height,it.depth,0,ct,wt,it.data);else if(S.isFramebufferTexture){if(j)if(N)n.texStorage2D(e.TEXTURE_2D,pt,J,it.width,it.height);else{let nt=it.width,K=it.height;for(let _t=0;_t<pt;_t++)n.texImage2D(e.TEXTURE_2D,_t,J,nt,K,0,ct,wt,null),nt>>=1,K>>=1}}else if(Et.length>0){if(N&&j){let nt=Ae(Et[0]);n.texStorage2D(e.TEXTURE_2D,pt,J,nt.width,nt.height)}for(let nt=0,K=Et.length;nt<K;nt++)et=Et[nt],N?at&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,ct,wt,et):n.texImage2D(e.TEXTURE_2D,nt,J,ct,wt,et);S.generateMipmaps=!1}else if(N){if(j){let nt=Ae(it);n.texStorage2D(e.TEXTURE_2D,pt,J,nt.width,nt.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct,wt,it)}else n.texImage2D(e.TEXTURE_2D,0,J,ct,wt,it);m(S)&&u(W),Mt.__version=G.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,P){if(S.image.length!==6)return;let W=ee(C,S),$=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+P);let G=i.get($);if($.version!==G.__version||W===!0){n.activeTexture(e.TEXTURE0+P);let Mt=Qt.getPrimaries(Qt.workingColorSpace),rt=S.colorSpace===Us?null:Qt.getPrimaries(S.colorSpace),xt=S.colorSpace===Us||Mt===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let dt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let K=0;K<6;K++)!dt&&!it?ct[K]=x(S.image[K],!0,s.maxCubemapSize):ct[K]=it?S.image[K].image:S.image[K],ct[K]=Be(S,ct[K]);let wt=ct[0],J=a.convert(S.format,S.colorSpace),et=a.convert(S.type),Et=v(S.internalFormat,J,et,S.colorSpace),N=S.isVideoTexture!==!0,j=G.__version===void 0||W===!0,at=$.dataReady,pt=A(S,wt);Ht(e.TEXTURE_CUBE_MAP,S);let nt;if(dt){N&&j&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Et,wt.width,wt.height);for(let K=0;K<6;K++){nt=ct[K].mipmaps;for(let _t=0;_t<nt.length;_t++){let Bt=nt[_t];S.format!==vi?J!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Bt.width,Bt.height,J,Bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Et,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Bt.width,Bt.height,J,et,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Et,Bt.width,Bt.height,0,J,et,Bt.data)}}}else{if(nt=S.mipmaps,N&&j){nt.length>0&&pt++;let K=Ae(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Et,K.width,K.height)}for(let K=0;K<6;K++)if(it){N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ct[K].width,ct[K].height,J,et,ct[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Et,ct[K].width,ct[K].height,0,J,et,ct[K].data);for(let _t=0;_t<nt.length;_t++){let ye=nt[_t].image[K].image;N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,ye.width,ye.height,J,et,ye.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Et,ye.width,ye.height,0,J,et,ye.data)}}else{N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,J,et,ct[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Et,J,et,ct[K]);for(let _t=0;_t<nt.length;_t++){let Bt=nt[_t];N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,J,et,Bt.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Et,J,et,Bt.image[K])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),G.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ft(C,S,P,W,$,G){let Mt=a.convert(P.format,P.colorSpace),rt=a.convert(P.type),xt=v(P.internalFormat,Mt,rt,P.colorSpace),dt=i.get(S),it=i.get(P);if(it.__renderTarget=S,!dt.__hasExternalTextures){let ct=Math.max(1,S.width>>G),wt=Math.max(1,S.height>>G);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,G,xt,ct,wt,S.depth,0,Mt,rt,null):n.texImage2D($,G,xt,ct,wt,0,Mt,rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,$,it.__webglTexture,0,se(S)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,$,it.__webglTexture,G),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Rt(C,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer){let W=S.depthTexture,$=W&&W.isDepthTexture?W.type:null,G=y(S.stencilBuffer,$),Mt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=se(S);yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt,G,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,G,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,G,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,C)}else{let W=S.textures;for(let $=0;$<W.length;$++){let G=W[$],Mt=a.convert(G.format,G.colorSpace),rt=a.convert(G.type),xt=v(G.internalFormat,Mt,rt,G.colorSpace),dt=se(S);P&&yt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,dt,xt,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,dt,xt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,xt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function vt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let $=W.__webglTexture,G=se(S);if(S.depthTexture.format===Lo)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(S.depthTexture.format===Wo)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Gt(C){let S=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=W}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let W=C.texture.mipmaps;W&&W.length>0?vt(S.__webglFramebuffer[0],C):vt(S.__webglFramebuffer,C)}else if(P){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=e.createRenderbuffer(),Rt(S.__webglDepthbuffer[W],C,!1);else{let $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,G)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Rt(S.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,G)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(C,S,P){let W=i.get(C);S!==void 0&&ft(W.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Gt(C)}function D(C){let S=C.texture,P=i.get(C),W=i.get(S);C.addEventListener("dispose",T);let $=C.textures,G=C.isWebGLCubeRenderTarget===!0,Mt=$.length>1;if(Mt||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=S.version,r.memory.textures++),G){P.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[rt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)P.__webglFramebuffer[rt][xt]=e.createFramebuffer()}else P.__webglFramebuffer[rt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)P.__webglFramebuffer[rt]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let rt=0,xt=$.length;rt<xt;rt++){let dt=i.get($[rt]);dt.__webglTexture===void 0&&(dt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&yt(C)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){let xt=$[rt];P.__webglColorRenderbuffer[rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[rt]);let dt=a.convert(xt.format,xt.colorSpace),it=a.convert(xt.type),ct=v(xt.internalFormat,dt,it,xt.colorSpace,C.isXRRenderTarget===!0),wt=se(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,wt,ct,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,P.__webglColorRenderbuffer[rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Rt(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){n.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Ht(e.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)ft(P.__webglFramebuffer[rt][xt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt);else ft(P.__webglFramebuffer[rt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let rt=0,xt=$.length;rt<xt;rt++){let dt=$[rt],it=i.get(dt),ct=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,it.__webglTexture),Ht(ct,dt),ft(P.__webglFramebuffer,C,dt,e.COLOR_ATTACHMENT0+rt,ct,0),m(dt)&&u(ct)}n.unbindTexture()}else{let rt=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,W.__webglTexture),Ht(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)ft(P.__webglFramebuffer[xt],C,S,e.COLOR_ATTACHMENT0,rt,xt);else ft(P.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,rt,0);m(S)&&u(rt),n.unbindTexture()}C.depthBuffer&&Gt(C)}function jt(C){let S=C.textures;for(let P=0,W=S.length;P<W;P++){let $=S[P];if(m($)){let G=_(C),Mt=i.get($).__webglTexture;n.bindTexture(G,Mt),u(G),n.unbindTexture()}}}let Nt=[],Tt=[];function gt(C){if(C.samples>0){if(yt(C)===!1){let S=C.textures,P=C.width,W=C.height,$=e.COLOR_BUFFER_BIT,G=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(C),rt=S.length>1;if(rt)for(let dt=0;dt<S.length;dt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let xt=C.texture.mipmaps;xt&&xt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);let it=i.get(S[dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,P,W,0,0,P,W,$,e.NEAREST),l===!0&&(Nt.length=0,Tt.length=0,Nt.push(e.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Nt.push(G),Tt.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Tt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),rt)for(let dt=0;dt<S.length;dt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);let it=i.get(S[dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function se(C){return Math.min(s.maxSamples,C.samples)}function yt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(C){let S=r.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function Be(C,S){let P=C.colorSpace,W=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==ar&&P!==Us&&(Qt.getTransfer(P)===he?(W!==vi||$!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),S}function Ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=z,this.rebindTextures=Fe,this.setupRenderTarget=D,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=yt}function dD(e,t){function n(i,s=Us){let a,r=Qt.getTransfer(s);if(i===Ui)return e.UNSIGNED_BYTE;if(i===Vf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===y0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===x0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_0)return e.BYTE;if(i===v0)return e.SHORT;if(i===Go)return e.UNSIGNED_SHORT;if(i===Hf)return e.INT;if(i===Ea)return e.UNSIGNED_INT;if(i===Ni)return e.FLOAT;if(i===ko)return e.HALF_FLOAT;if(i===S0)return e.ALPHA;if(i===M0)return e.RGB;if(i===vi)return e.RGBA;if(i===Lo)return e.DEPTH_COMPONENT;if(i===Wo)return e.DEPTH_STENCIL;if(i===kf)return e.RED;if(i===Xf)return e.RED_INTEGER;if(i===b0)return e.RG;if(i===Wf)return e.RG_INTEGER;if(i===qf)return e.RGBA_INTEGER;if(i===Bc||i===zc||i===Fc||i===Hc)if(r===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===Zf||i===Jf||i===Kf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Yf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qf||i===jf||i===$f)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Qf||i===jf)return r===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===$f)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===td||i===ed||i===nd||i===id||i===sd||i===ad||i===rd||i===od||i===ld||i===cd||i===ud||i===hd||i===fd||i===dd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===td)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===id)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ad)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ld)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ud)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pd||i===md||i===gd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===pd)return r===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===md)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_d||i===vd||i===yd||i===xd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===_d)return a.COMPRESSED_RED_RGTC1_EXT;if(i===vd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var pD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mD=`
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

}`,X0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Tc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Fn({vertexShader:pD,fragmentShader:mD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Re(new wc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},W0=class extends Ts{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new X0,u={},_=n.getContextAttributes(),v=null,y=null,A=[],w=[],T=new Xt,R=null,E=new en;E.viewport=new ue;let M=new en;M.viewport=new ue;let U=[E,M],B=new Af,V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=A[Y];return Q===void 0&&(Q=new zo,A[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=A[Y];return Q===void 0&&(Q=new zo,A[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=A[Y];return Q===void 0&&(Q=new zo,A[Y]=Q),Q.getHandSpace()};function Z(Y){let Q=w.indexOf(Y.inputSource);if(Q===-1)return;let ft=A[Q];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,c||r),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<A.length;Y++){let Q=w[Y];Q!==null&&(w[Y]=null,A[Y].disconnect(Q))}V=null,k=null,m.reset();for(let Y in u)delete u[Y];t.setRenderTarget(v),p=null,h=null,d=null,s=null,y=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Rt=null,vt=null;_.depth&&(vt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ft=_.stencil?Wo:Lo,Rt=_.stencil?Xo:Ea);let Gt={colorFormat:n.RGBA8,depthFormat:vt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ki(h.textureWidth,h.textureHeight,{format:vi,type:Ui,depthTexture:new Ec(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ft={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ki(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(Y){for(let Q=0;Q<Y.removed.length;Q++){let ft=Y.removed[Q],Rt=w.indexOf(ft);Rt>=0&&(w[Rt]=null,A[Rt].disconnect(ft))}for(let Q=0;Q<Y.added.length;Q++){let ft=Y.added[Q],Rt=w.indexOf(ft);if(Rt===-1){for(let Gt=0;Gt<A.length;Gt++)if(Gt>=w.length){w.push(ft),Rt=Gt;break}else if(w[Gt]===null){w[Gt]=ft,Rt=Gt;break}if(Rt===-1)break}let vt=A[Rt];vt&&vt.connect(ft)}}let z=new L,ot=new L;function ht(Y,Q,ft){z.setFromMatrixPosition(Q.matrixWorld),ot.setFromMatrixPosition(ft.matrixWorld);let Rt=z.distanceTo(ot),vt=Q.projectionMatrix.elements,Gt=ft.projectionMatrix.elements,Fe=vt[14]/(vt[10]-1),D=vt[14]/(vt[10]+1),jt=(vt[9]+1)/vt[5],Nt=(vt[9]-1)/vt[5],Tt=(vt[8]-1)/vt[0],gt=(Gt[8]+1)/Gt[0],se=Fe*Tt,yt=Fe*gt,Pt=Rt/(-Tt+gt),Be=Pt*-Tt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Be),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ae=Fe+Pt,C=D+Pt,S=se-Be,P=yt+(Rt-Be),W=jt*D/C*Ae,$=Nt*D/C*Ae;Y.projectionMatrix.makePerspective(S,P,W,$,Ae,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function bt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,ft=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),B.near=M.near=E.near=Q,B.far=M.far=E.far=ft,(V!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,k=B.far),B.layers.mask=Y.layers.mask|6,E.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;let Rt=Y.parent,vt=B.cameras;bt(B,Rt);for(let Gt=0;Gt<vt.length;Gt++)bt(vt[Gt],Rt);vt.length===2?ht(B,E,M):B.projectionMatrix.copy(E.projectionMatrix),Ht(Y,B,Rt)};function Ht(Y,Q,ft){ft===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return u[Y]};let ee=null;function pe(Y,Q){if(f=Q.getViewerPose(c||r),g=Q,f!==null){let ft=f.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Rt=!1;ft.length!==B.cameras.length&&(B.cameras.length=0,Rt=!0);for(let D=0;D<ft.length;D++){let jt=ft[D],Nt=null;if(p!==null)Nt=p.getViewport(jt);else{let gt=d.getViewSubImage(h,jt);Nt=gt.viewport,D===0&&(t.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(y))}let Tt=U[D];Tt===void 0&&(Tt=new en,Tt.layers.enable(D),Tt.viewport=new ue,U[D]=Tt),Tt.matrix.fromArray(jt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(jt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),D===0&&(B.matrix.copy(Tt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Rt===!0&&B.cameras.push(Tt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let D=d.getDepthInformation(ft[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<ft.length;D++){let jt=ft[D].camera;if(jt){let Nt=u[jt];Nt||(Nt=new Tc,u[jt]=Nt);let Tt=d.getCameraImage(jt);Nt.sourceTexture=Tt}}}}for(let ft=0;ft<A.length;ft++){let Rt=w[ft],vt=A[ft];Rt!==null&&vt!==void 0&&vt.update(Rt,Q,c||r)}ee&&ee(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Kt=new lb;Kt.setAnimationLoop(pe),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}},mr=new gi,gD=new ve;function _D(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,C0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),f(m,u)):u.isMeshStandardMaterial?(a(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===un&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===un&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=t.get(u),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,mr.copy(y),mr.x*=-1,mr.y*=-1,mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(gD.makeRotationFromEuler(mr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vD(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=f(_),s[_.id]=y,_.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(_,A);let w=t.render.frame;a[_.id]!==w&&(h(_),a[_.id]=w)}function f(_){let v=d();_.__bindingPointIndex=v;let y=e.createBuffer(),A=_.__size,w=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let v=s[_.id],y=_.uniforms,A=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let w=0,T=y.length;w<T;w++){let R=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,M=R.length;E<M;E++){let U=R[E];if(p(U,w,E,A)===!0){let B=U.__offset,V=Array.isArray(U.value)?U.value:[U.value],k=0;for(let Z=0;Z<V.length;Z++){let X=V[Z],tt=x(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,B+k,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,k),k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,v,y,A){let w=_.value,T=v+"_"+y;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{let R=A[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(_){let v=_.uniforms,y=0,A=16;for(let T=0,R=v.length;T<R;T++){let E=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,U=E.length;M<U;M++){let B=E[M],V=Array.isArray(B.value)?B.value:[B.value];for(let k=0,Z=V.length;k<Z;k++){let X=V[k],tt=x(X),z=y%A,ot=z%tt.boundary,ht=z+ot;y+=ot,ht!==0&&A-ht<tt.storage&&(y+=A-ht),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=tt.storage}}}let w=y%A;return w>0&&(y+=A-w),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function u(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var Td=class{constructor(t={}){let{canvas:n=O1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=Tn;let w=0,T=0,R=null,E=-1,M=null,U=new ue,B=new ue,V=null,k=new It(0),Z=0,X=n.width,tt=n.height,z=1,ot=null,ht=null,bt=new ue(0,0,X,tt),Ht=new ue(0,0,X,tt),ee=!1,pe=new Fo,Kt=!1,Y=!1,Q=new ve,ft=new L,Rt=new ue,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Fe(){return R===null?z:1}let D=i;function jt(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",nt,!1),D===null){let O="webgl2";if(D=jt(O,b),D===null)throw jt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Nt,Tt,gt,se,yt,Pt,Be,Ae,C,S,P,W,$,G,Mt,rt,xt,dt,it,ct,wt,J,et,Et;function N(){Nt=new P2(D),Nt.init(),J=new dD(D,Nt),Tt=new R2(D,Nt,t,J),gt=new hD(D,Nt),Tt.reversedDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),se=new F2(D),yt=new j3,Pt=new fD(D,Nt,gt,yt,Tt,J,se),Be=new U2(y),Ae=new I2(y),C=new Ww(D),et=new w2(D,C),S=new B2(D,C,se,et),P=new V2(D,S,C,se),it=new H2(D,Tt,Pt),rt=new D2(yt),W=new Q3(y,Be,Ae,Nt,Tt,et,rt),$=new _D(y,yt),G=new tD,Mt=new rD(Nt),dt=new A2(y,Be,Ae,gt,P,p,l),xt=new cD(y,P,Tt),Et=new vD(D,se,Tt,gt),ct=new C2(D,Nt,se),wt=new z2(D,Nt,se),se.programs=W.programs,y.capabilities=Tt,y.extensions=Nt,y.properties=yt,y.renderLists=G,y.shadowMap=xt,y.state=gt,y.info=se}N();let j=new W0(y,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(X,tt,!1))},this.getSize=function(b){return b.set(X,tt)},this.setSize=function(b,O,F=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,tt=O,n.width=Math.floor(b*z),n.height=Math.floor(O*z),F===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(X*z,tt*z).floor()},this.setDrawingBufferSize=function(b,O,F){X=b,tt=O,z=F,n.width=Math.floor(b*F),n.height=Math.floor(O*F),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(bt)},this.setViewport=function(b,O,F,H){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,O,F,H),gt.viewport(U.copy(bt).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,O,F,H){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,O,F,H),gt.scissor(B.copy(Ht).multiplyScalar(z).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(b){gt.setScissorTest(ee=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,F=!0){let H=0;if(b){let I=!1;if(R!==null){let st=R.texture.format;I=st===qf||st===Wf||st===Xf}if(I){let st=R.texture.type,ut=st===Ui||st===Ea||st===Go||st===Xo||st===Vf||st===Gf,St=dt.getClearColor(),mt=dt.getClearAlpha(),Dt=St.r,Lt=St.g,At=St.b;ut?(g[0]=Dt,g[1]=Lt,g[2]=At,g[3]=mt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Dt,x[1]=Lt,x[2]=At,x[3]=mt,D.clearBufferiv(D.COLOR,0,x))}else H|=D.COLOR_BUFFER_BIT}O&&(H|=D.DEPTH_BUFFER_BIT),F&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),dt.dispose(),G.dispose(),Mt.dispose(),yt.dispose(),Be.dispose(),Ae.dispose(),P.dispose(),et.dispose(),Et.dispose(),W.dispose(),j.dispose(),j.removeEventListener("sessionstart",Li),j.removeEventListener("sessionend",Y0),Ta.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=se.autoReset,O=xt.enabled,F=xt.autoUpdate,H=xt.needsUpdate,I=xt.type;N(),se.autoReset=b,xt.enabled=O,xt.autoUpdate=F,xt.needsUpdate=H,xt.type=I}function nt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){let O=b.target;O.removeEventListener("dispose",K),_t(O)}function _t(b){Bt(b),yt.remove(b)}function Bt(b){let O=yt.get(b).programs;O!==void 0&&(O.forEach(function(F){W.releaseProgram(F)}),b.isShaderMaterial&&W.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,F,H,I,st){O===null&&(O=vt);let ut=I.isMesh&&I.matrixWorld.determinant()<0,St=pb(b,O,F,H,I);gt.setMaterial(H,ut);let mt=F.index,Dt=1;if(H.wireframe===!0){if(mt=S.getWireframeAttribute(F),mt===void 0)return;Dt=2}let Lt=F.drawRange,At=F.attributes.position,Zt=Lt.start*Dt,fe=(Lt.start+Lt.count)*Dt;st!==null&&(Zt=Math.max(Zt,st.start*Dt),fe=Math.min(fe,(st.start+st.count)*Dt)),mt!==null?(Zt=Math.max(Zt,0),fe=Math.min(fe,mt.count)):At!=null&&(Zt=Math.max(Zt,0),fe=Math.min(fe,At.count));let Le=fe-Zt;if(Le<0||Le===1/0)return;et.setup(I,H,St,F,mt);let Ee,me=ct;if(mt!==null&&(Ee=C.get(mt),me=wt,me.setIndex(Ee)),I.isMesh)H.wireframe===!0?(gt.setLineWidth(H.wireframeLinewidth*Fe()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(I.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),gt.setLineWidth(Ct*Fe()),I.isLineSegments?me.setMode(D.LINES):I.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else I.isPoints?me.setMode(D.POINTS):I.isSprite&&me.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))me.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Ct=I._multiDrawStarts,De=I._multiDrawCounts,$t=I._multiDrawCount,Hn=mt?C.get(mt).bytesPerElement:1,vr=yt.get(H).currentProgram.getUniforms();for(let Vn=0;Vn<$t;Vn++)vr.setValue(D,"_gl_DrawID",Vn),me.render(Ct[Vn]/Hn,De[Vn])}else if(I.isInstancedMesh)me.renderInstances(Zt,Le,I.count);else if(F.isInstancedBufferGeometry){let Ct=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,De=Math.min(F.instanceCount,Ct);me.renderInstances(Zt,Le,De)}else me.render(Zt,Le)};function ye(b,O,F){b.transparent===!0&&b.side===_i&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Xc(b,O,F),b.side=Es,b.needsUpdate=!0,Xc(b,O,F),b.side=_i):Xc(b,O,F)}this.compile=function(b,O,F=null){F===null&&(F=b),u=Mt.get(F),u.init(O),v.push(u),F.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),b!==F&&b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let H=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let st=I.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){let St=st[ut];ye(St,F,I),H.add(St)}else ye(st,F,I),H.add(st)}),u=v.pop(),H},this.compileAsync=function(b,O,F=null){let H=this.compile(b,O,F);return new Promise(I=>{function st(){if(H.forEach(function(ut){yt.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){I(b);return}setTimeout(st,10)}Nt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ae=null;function es(b){ae&&ae(b)}function Li(){Ta.stop()}function Y0(){Ta.start()}let Ta=new lb;Ta.setAnimationLoop(es),typeof self<"u"&&Ta.setContext(self),this.setAnimationLoop=function(b){ae=b,j.setAnimationLoop(b),b===null?Ta.stop():Ta.start()},j.addEventListener("sessionstart",Li),j.addEventListener("sessionend",Y0),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,O,R),u=Mt.get(b,v.length),u.init(O),v.push(u),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),pe.setFromProjectionMatrix(Q,Ci,O.reversedDepth),Y=this.localClippingEnabled,Kt=rt.init(this.clippingPlanes,Y),m=G.get(b,_.length),m.init(),_.push(m),j.enabled===!0&&j.isPresenting===!0){let st=y.xr.getDepthSensingMesh();st!==null&&Cd(st,O,-1/0,y.sortObjects)}Cd(b,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,ht),Gt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Gt&&dt.addToRenderList(m,b),this.info.render.frame++,Kt===!0&&rt.beginShadows();let F=u.state.shadowsArray;xt.render(F,b,O),Kt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,I=m.transmissive;if(u.setupLights(),O.isArrayCamera){let st=O.cameras;if(I.length>0)for(let ut=0,St=st.length;ut<St;ut++){let mt=st[ut];J0(H,I,b,mt)}Gt&&dt.render(b);for(let ut=0,St=st.length;ut<St;ut++){let mt=st[ut];Z0(m,b,mt,mt.viewport)}}else I.length>0&&J0(H,I,b,O),Gt&&dt.render(b),Z0(m,b,O);R!==null&&T===0&&(Pt.updateMultisampleRenderTarget(R),Pt.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,O),et.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(u=v[v.length-1],Kt===!0&&rt.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Cd(b,O,F,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pe.intersectsSprite(b)){H&&Rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);let ut=P.update(b),St=b.material;St.visible&&m.push(b,ut,St,F,Rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pe.intersectsObject(b))){let ut=P.update(b),St=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Rt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Rt.copy(ut.boundingSphere.center)),Rt.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(St)){let mt=ut.groups;for(let Dt=0,Lt=mt.length;Dt<Lt;Dt++){let At=mt[Dt],Zt=St[At.materialIndex];Zt&&Zt.visible&&m.push(b,ut,Zt,F,Rt.z,At)}}else St.visible&&m.push(b,ut,St,F,Rt.z,null)}}let st=b.children;for(let ut=0,St=st.length;ut<St;ut++)Cd(st[ut],O,F,H)}function Z0(b,O,F,H){let I=b.opaque,st=b.transmissive,ut=b.transparent;u.setupLightsView(F),Kt===!0&&rt.setGlobalState(y.clippingPlanes,F),H&&gt.viewport(U.copy(H)),I.length>0&&kc(I,O,F),st.length>0&&kc(st,O,F),ut.length>0&&kc(ut,O,F),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function J0(b,O,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Ki(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?ko:Ui,minFilter:ba,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let st=u.state.transmissionRenderTarget[H.id],ut=H.viewport||U;st.setSize(ut.z*y.transmissionResolutionScale,ut.w*y.transmissionResolutionScale);let St=y.getRenderTarget(),mt=y.getActiveCubeFace(),Dt=y.getActiveMipmapLevel();y.setRenderTarget(st),y.getClearColor(k),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&dt.render(F);let Lt=y.toneMapping;y.toneMapping=Ds;let At=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),Kt===!0&&rt.setGlobalState(y.clippingPlanes,H),kc(b,F,H),Pt.updateMultisampleRenderTarget(st),Pt.updateRenderTargetMipmap(st),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let fe=0,Le=O.length;fe<Le;fe++){let Ee=O[fe],me=Ee.object,Ct=Ee.geometry,De=Ee.material,$t=Ee.group;if(De.side===_i&&me.layers.test(H.layers)){let Hn=De.side;De.side=un,De.needsUpdate=!0,K0(me,F,H,Ct,De,$t),De.side=Hn,De.needsUpdate=!0,Zt=!0}}Zt===!0&&(Pt.updateMultisampleRenderTarget(st),Pt.updateRenderTargetMipmap(st))}y.setRenderTarget(St,mt,Dt),y.setClearColor(k,Z),At!==void 0&&(H.viewport=At),y.toneMapping=Lt}function kc(b,O,F){let H=O.isScene===!0?O.overrideMaterial:null;for(let I=0,st=b.length;I<st;I++){let ut=b[I],St=ut.object,mt=ut.geometry,Dt=ut.group,Lt=ut.material;Lt.allowOverride===!0&&H!==null&&(Lt=H),St.layers.test(F.layers)&&K0(St,O,F,mt,Lt,Dt)}}function K0(b,O,F,H,I,st){b.onBeforeRender(y,O,F,H,I,st),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(y,O,F,H,b,st),I.transparent===!0&&I.side===_i&&I.forceSinglePass===!1?(I.side=un,I.needsUpdate=!0,y.renderBufferDirect(F,O,H,I,b,st),I.side=Es,I.needsUpdate=!0,y.renderBufferDirect(F,O,H,I,b,st),I.side=_i):y.renderBufferDirect(F,O,H,I,b,st),b.onAfterRender(y,O,F,H,I,st)}function Xc(b,O,F){O.isScene!==!0&&(O=vt);let H=yt.get(b),I=u.state.lights,st=u.state.shadowsArray,ut=I.state.version,St=W.getParameters(b,I.state,st,O,F),mt=W.getProgramCacheKey(St),Dt=H.programs;H.environment=b.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(b.isMeshStandardMaterial?Ae:Be).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",K),Dt=new Map,H.programs=Dt);let Lt=Dt.get(mt);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ut)return j0(b,St),Lt}else St.uniforms=W.getUniforms(b),b.onBeforeCompile(St,y),Lt=W.acquireProgram(St,mt),Dt.set(mt,Lt),H.uniforms=St.uniforms;let At=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(At.clippingPlanes=rt.uniform),j0(b,St),H.needsLights=gb(b),H.lightsStateVersion=ut,H.needsLights&&(At.ambientLightColor.value=I.state.ambient,At.lightProbe.value=I.state.probe,At.directionalLights.value=I.state.directional,At.directionalLightShadows.value=I.state.directionalShadow,At.spotLights.value=I.state.spot,At.spotLightShadows.value=I.state.spotShadow,At.rectAreaLights.value=I.state.rectArea,At.ltc_1.value=I.state.rectAreaLTC1,At.ltc_2.value=I.state.rectAreaLTC2,At.pointLights.value=I.state.point,At.pointLightShadows.value=I.state.pointShadow,At.hemisphereLights.value=I.state.hemi,At.directionalShadowMap.value=I.state.directionalShadowMap,At.directionalShadowMatrix.value=I.state.directionalShadowMatrix,At.spotShadowMap.value=I.state.spotShadowMap,At.spotLightMatrix.value=I.state.spotLightMatrix,At.spotLightMap.value=I.state.spotLightMap,At.pointShadowMap.value=I.state.pointShadowMap,At.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function Q0(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Jo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function j0(b,O){let F=yt.get(b);F.outputColorSpace=O.outputColorSpace,F.batching=O.batching,F.batchingColor=O.batchingColor,F.instancing=O.instancing,F.instancingColor=O.instancingColor,F.instancingMorph=O.instancingMorph,F.skinning=O.skinning,F.morphTargets=O.morphTargets,F.morphNormals=O.morphNormals,F.morphColors=O.morphColors,F.morphTargetsCount=O.morphTargetsCount,F.numClippingPlanes=O.numClippingPlanes,F.numIntersection=O.numClipIntersection,F.vertexAlphas=O.vertexAlphas,F.vertexTangents=O.vertexTangents,F.toneMapping=O.toneMapping}function pb(b,O,F,H,I){O.isScene!==!0&&(O=vt),Pt.resetTextureUnits();let st=O.fog,ut=H.isMeshStandardMaterial?O.environment:null,St=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ar,mt=(H.isMeshStandardMaterial?Ae:Be).get(H.envMap||ut),Dt=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Lt=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!F.morphAttributes.position,Zt=!!F.morphAttributes.normal,fe=!!F.morphAttributes.color,Le=Ds;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Le=y.toneMapping);let Ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,me=Ee!==void 0?Ee.length:0,Ct=yt.get(H),De=u.state.lights;if(Kt===!0&&(Y===!0||b!==M)){let vn=b===M&&H.id===E;rt.setState(H,b,vn)}let $t=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==De.state.version||Ct.outputColorSpace!==St||I.isBatchedMesh&&Ct.batching===!1||!I.isBatchedMesh&&Ct.batching===!0||I.isBatchedMesh&&Ct.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ct.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ct.instancing===!1||!I.isInstancedMesh&&Ct.instancing===!0||I.isSkinnedMesh&&Ct.skinning===!1||!I.isSkinnedMesh&&Ct.skinning===!0||I.isInstancedMesh&&Ct.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ct.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ct.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ct.instancingMorph===!1&&I.morphTexture!==null||Ct.envMap!==mt||H.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==rt.numPlanes||Ct.numIntersection!==rt.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Lt||Ct.morphTargets!==At||Ct.morphNormals!==Zt||Ct.morphColors!==fe||Ct.toneMapping!==Le||Ct.morphTargetsCount!==me)&&($t=!0):($t=!0,Ct.__version=H.version);let Hn=Ct.currentProgram;$t===!0&&(Hn=Xc(H,O,I));let vr=!1,Vn=!1,$o=!1,Ue=Hn.getUniforms(),ii=Ct.uniforms;if(gt.useProgram(Hn.program)&&(vr=!0,Vn=!0,$o=!0),H.id!==E&&(E=H.id,Vn=!0),vr||M!==b){gt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ue.setValue(D,"projectionMatrix",b.projectionMatrix),Ue.setValue(D,"viewMatrix",b.matrixWorldInverse);let Rn=Ue.map.cameraPosition;Rn!==void 0&&Rn.setValue(D,ft.setFromMatrixPosition(b.matrixWorld)),Tt.logarithmicDepthBuffer&&Ue.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ue.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Vn=!0,$o=!0)}if(I.isSkinnedMesh){Ue.setOptional(D,I,"bindMatrix"),Ue.setOptional(D,I,"bindMatrixInverse");let vn=I.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ue.setValue(D,"boneTexture",vn.boneTexture,Pt))}I.isBatchedMesh&&(Ue.setOptional(D,I,"batchingTexture"),Ue.setValue(D,"batchingTexture",I._matricesTexture,Pt),Ue.setOptional(D,I,"batchingIdTexture"),Ue.setValue(D,"batchingIdTexture",I._indirectTexture,Pt),Ue.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&Ue.setValue(D,"batchingColorTexture",I._colorsTexture,Pt));let si=F.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&it.update(I,F,Hn),(Vn||Ct.receiveShadow!==I.receiveShadow)&&(Ct.receiveShadow=I.receiveShadow,Ue.setValue(D,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ii.envMap.value=mt,ii.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(ii.envMapIntensity.value=O.environmentIntensity),Vn&&(Ue.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&mb(ii,$o),st&&H.fog===!0&&$.refreshFogUniforms(ii,st),$.refreshMaterialUniforms(ii,H,z,tt,u.state.transmissionRenderTarget[b.id]),Jo.upload(D,Q0(Ct),ii,Pt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Jo.upload(D,Q0(Ct),ii,Pt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ue.setValue(D,"center",I.center),Ue.setValue(D,"modelViewMatrix",I.modelViewMatrix),Ue.setValue(D,"normalMatrix",I.normalMatrix),Ue.setValue(D,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let vn=H.uniformsGroups;for(let Rn=0,Rd=vn.length;Rn<Rd;Rn++){let Aa=vn[Rn];Et.update(Aa,Hn),Et.bind(Aa,Hn)}}return Hn}function mb(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function gb(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,O,F){let H=yt.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),yt.get(b.texture).__webglTexture=O,yt.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:F,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let F=yt.get(b);F.__webglFramebuffer=O,F.__useDefaultFramebuffer=O===void 0};let _b=D.createFramebuffer();this.setRenderTarget=function(b,O=0,F=0){R=b,w=O,T=F;let H=!0,I=null,st=!1,ut=!1;if(b){let mt=yt.get(b);if(mt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(mt.__webglFramebuffer===void 0)Pt.setupRenderTarget(b);else if(mt.__hasExternalTextures)Pt.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let At=b.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&yt.has(At)&&(b.width!==At.image.width||b.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(b)}}let Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ut=!0);let Lt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?I=Lt[O][F]:I=Lt[O],st=!0):b.samples>0&&Pt.useMultisampledRTT(b)===!1?I=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?I=Lt[F]:I=Lt,U.copy(b.viewport),B.copy(b.scissor),V=b.scissorTest}else U.copy(bt).multiplyScalar(z).floor(),B.copy(Ht).multiplyScalar(z).floor(),V=ee;if(F!==0&&(I=_b),gt.bindFramebuffer(D.FRAMEBUFFER,I)&&H&&gt.drawBuffers(b,I),gt.viewport(U),gt.scissor(B),gt.setScissorTest(V),st){let mt=yt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,mt.__webglTexture,F)}else if(ut){let mt=O;for(let Dt=0;Dt<b.textures.length;Dt++){let Lt=yt.get(b.textures[Dt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Dt,Lt.__webglTexture,F,mt)}}else if(b!==null&&F!==0){let mt=yt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,F)}E=-1},this.readRenderTargetPixels=function(b,O,F,H,I,st,ut,St=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(mt=mt[ut]),mt){gt.bindFramebuffer(D.FRAMEBUFFER,mt);try{let Dt=b.textures[St],Lt=Dt.format,At=Dt.type;if(!Tt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&F>=0&&F<=b.height-I&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),D.readPixels(O,F,H,I,J.convert(Lt),J.convert(At),st))}finally{let Dt=R!==null?yt.get(R).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,O,F,H,I,st,ut,St=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(mt=mt[ut]),mt)if(O>=0&&O<=b.width-H&&F>=0&&F<=b.height-I){gt.bindFramebuffer(D.FRAMEBUFFER,mt);let Dt=b.textures[St],Lt=Dt.format,At=Dt.type;if(!Tt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),D.readPixels(O,F,H,I,J.convert(Lt),J.convert(At),0);let fe=R!==null?yt.get(R).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,fe);let Le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await I1(D,Le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(Zt),D.deleteSync(Le),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,F=0){let H=Math.pow(2,-F),I=Math.floor(b.image.width*H),st=Math.floor(b.image.height*H),ut=O!==null?O.x:0,St=O!==null?O.y:0;Pt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,ut,St,I,st),gt.unbindTexture()};let vb=D.createFramebuffer(),yb=D.createFramebuffer();this.copyTextureToTexture=function(b,O,F=null,H=null,I=0,st=null){st===null&&(I!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=I,I=0):st=0);let ut,St,mt,Dt,Lt,At,Zt,fe,Le,Ee=b.isCompressedTexture?b.mipmaps[st]:b.image;if(F!==null)ut=F.max.x-F.min.x,St=F.max.y-F.min.y,mt=F.isBox3?F.max.z-F.min.z:1,Dt=F.min.x,Lt=F.min.y,At=F.isBox3?F.min.z:0;else{let si=Math.pow(2,-I);ut=Math.floor(Ee.width*si),St=Math.floor(Ee.height*si),b.isDataArrayTexture?mt=Ee.depth:b.isData3DTexture?mt=Math.floor(Ee.depth*si):mt=1,Dt=0,Lt=0,At=0}H!==null?(Zt=H.x,fe=H.y,Le=H.z):(Zt=0,fe=0,Le=0);let me=J.convert(O.format),Ct=J.convert(O.type),De;O.isData3DTexture?(Pt.setTexture3D(O,0),De=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Pt.setTexture2DArray(O,0),De=D.TEXTURE_2D_ARRAY):(Pt.setTexture2D(O,0),De=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let $t=D.getParameter(D.UNPACK_ROW_LENGTH),Hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vr=D.getParameter(D.UNPACK_SKIP_PIXELS),Vn=D.getParameter(D.UNPACK_SKIP_ROWS),$o=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,At);let Ue=b.isDataArrayTexture||b.isData3DTexture,ii=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let si=yt.get(b),vn=yt.get(O),Rn=yt.get(si.__renderTarget),Rd=yt.get(vn.__renderTarget);gt.bindFramebuffer(D.READ_FRAMEBUFFER,Rn.__webglFramebuffer),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rd.__webglFramebuffer);for(let Aa=0;Aa<mt;Aa++)Ue&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,I,At+Aa),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(O).__webglTexture,st,Le+Aa)),D.blitFramebuffer(Dt,Lt,ut,St,Zt,fe,ut,St,D.DEPTH_BUFFER_BIT,D.NEAREST);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||yt.has(b)){let si=yt.get(b),vn=yt.get(O);gt.bindFramebuffer(D.READ_FRAMEBUFFER,vb),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,yb);for(let Rn=0;Rn<mt;Rn++)Ue?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,si.__webglTexture,I,At+Rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,si.__webglTexture,I),ii?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,st,Le+Rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,st),I!==0?D.blitFramebuffer(Dt,Lt,ut,St,Zt,fe,ut,St,D.COLOR_BUFFER_BIT,D.NEAREST):ii?D.copyTexSubImage3D(De,st,Zt,fe,Le+Rn,Dt,Lt,ut,St):D.copyTexSubImage2D(De,st,Zt,fe,Dt,Lt,ut,St);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ii?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(De,st,Zt,fe,Le,ut,St,mt,me,Ct,Ee.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(De,st,Zt,fe,Le,ut,St,mt,me,Ee.data):D.texSubImage3D(De,st,Zt,fe,Le,ut,St,mt,me,Ct,Ee):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,Zt,fe,ut,St,me,Ct,Ee.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,Zt,fe,Ee.width,Ee.height,me,Ee.data):D.texSubImage2D(D.TEXTURE_2D,st,Zt,fe,ut,St,me,Ct,Ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$o),st===0&&O.generateMipmaps&&D.generateMipmap(De),gt.unbindTexture()},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&Pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Pt.setTextureCube(b,0):b.isData3DTexture?Pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pt.setTexture2DArray(b,0):Pt.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,gt.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}};var wd=class extends lr{constructor(){super();let t=new wn;t.deleteAttribute("uv");let n=new Cn({side:un}),i=new Cn,s=new Ma(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new Re(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new Mc(t,i,6),o=new Ye;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new Re(t,jo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Re(t,jo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let f=new Re(t,jo(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let d=new Re(t,jo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Re(t,jo(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new Re(t,jo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function jo(e){return new Dc({color:0,emissive:16777215,emissiveIntensity:e})}function xD(){let e=(0,ni.useRef)(null),[t,n]=(0,ni.useState)("A LITTLE CURIOSITY. AN INFINITE UNIVERSE.");return(0,ni.useEffect)(()=>{let i=e.current,s=document.getElementById("threshold"),a;try{a=new Td({alpha:!0,antialias:!1,powerPreference:"high-performance"})}catch{n("YOUR ADVENTURE BEGINS WITH A TOUCH.");return}a.setPixelRatio(Math.min(devicePixelRatio,1.4)),a.outputColorSpace=Tn,a.toneMapping=Pf,a.toneMappingExposure=1.15,a.shadowMap.enabled=!0,a.shadowMap.type=wf,a.domElement.setAttribute("aria-label","A little moon creature in a quiet room, looking toward a luminous doorway. Drag to look around; touch the creature to greet it."),i.appendChild(a.domElement);let r=new lr;r.background=new It("#101c22"),r.fog=new xc("#101c22",.037);let o=new en(40,1,.1,90);o.position.set(0,2.1,12);let l=new Ko(a),c=new wd,f=l.fromScene(c,.04);r.environment=f.texture,c.dispose(),l.dispose();let d=new Nc("#b9e6ed","#444337",2.1);r.add(d);let h=new Lc("#e6faff",100,25,.6,.8,1.4);h.position.set(4,6,-4),h.target.position.set(2,-1,1),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-5e-4,r.add(h,h.target);let p=new Ma("#ffb786",22,14,2);p.position.set(-3,2,3),r.add(p);let g=new Ma("#a0ecff",45,13,2);g.position.set(4,2,-3),r.add(g);let x=new Cn({color:"#33474b",roughness:.84}),m=new Cn({color:"#34464a",roughness:.34,metalness:.22}),u=new cr({color:"#e7e2ce",roughness:.28,clearcoat:.55,clearcoatRoughness:.28}),_=new cr({color:"#132529",roughness:.12,clearcoat:1}),v=new Cn({color:"#d79580",roughness:.5}),y=new Cn({color:"#8aafaf",metalness:.72,roughness:.25}),A=new cr({color:"#b9f0e6",metalness:.12,roughness:.12,transmission:.75,thickness:.25,ior:1.3,clearcoat:1}),w=new or({color:"#d9ffff"});function T(J,et,Et,N,j=r){let at=new Re(J,et);return at.position.set(...Et),N&&at.scale.set(...N),at.castShadow=!0,at.receiveShadow=!0,j.add(at),at}let R=new Cc(1,40,28),E=T(new wn(30,.3,35),m,[0,-1.75,-6]);T(new wn(16,14,.4),x,[-7.4,3,-6]),T(new wn(8,14,.4),x,[9.6,3,-6]),T(new wn(5,5,.4),x,[3.1,8.3,-6]),T(new wn(.35,14,25),x,[10,3,-6]);let M=new Ri;M.position.set(3.1,2,-6),r.add(M);let U=T(new Cs(2.38,.12,16,88),y,[0,0,0],[1,1.45,1],M);T(new Cs(2.22,.025,8,88),w,[0,0,-.02],[1,1.45,1],M);for(let J=1;J<8;J++)T(new Cs(2.24,.035,8,64),J%2?y:w,[0,0,-J*2],[1,1.45,1],M);let B=new Fn({transparent:!0,depthWrite:!1,side:_i,blending:Vo,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float time;void main(){float edge=pow(sin(vUv.x*3.14159),3.);float rays=.85+.15*sin(vUv.x*65.+time*.3);float a=edge*rays*(1.-vUv.y)*.105;gl_FragColor=vec4(.65,.87,1.,a);}"}),V=T(new Ac(2.7,9,48,1,!0),B,[3.1,2,-1]);V.rotation.x=-.63,V.castShadow=!1,T(new ya(1.5,1.6,.12,64),y,[2,-1.53,1]),T(new ya(1.43,1.43,.14,64),new Cn({color:"#53666a",roughness:.72}),[2,-1.43,1]);let k=new Cn({color:"#b3a28c",roughness:.85});for(let J=0;J<3;J++){let et=T(new wn(.95,.14,.65),J===1?y:k,[4.2,-1.5+J*.15,1.7]);et.rotation.y=J*.17-.2}T(new ya(.23,.22,.48,32),u,[3.8,-1.35,2.6]);let Z=T(new Cs(.14,.045,10,32),u,[4.04,-1.3,2.6]),X=T(new Rc(.27,.075,80,12),A,[4.2,-.7,1.7]),tt=new Ri;tt.position.set(2,-1.28,1),r.add(tt),T(R,u,[0,.65,0],[.66,.78,.54],tt);let z=new Ri;z.position.set(0,1.43,.03),tt.add(z),T(R,u,[0,0,0],[.76,.66,.6],z);let ot=T(R,u,[-.43,.56,-.02],[.19,.48,.19],z);ot.rotation.z=.25;let ht=T(R,u,[.43,.56,-.02],[.19,.48,.19],z);ht.rotation.z=-.25,T(R,v,[-.43,.59,.13],[.075,.26,.045],z),T(R,v,[.43,.59,.13],[.075,.26,.045],z);let bt=[];for(let J of[-.25,.25])bt.push(T(R,_,[J,.025,.558],[.085,.115,.055],z)),T(R,w,[J-.018,.065,.603],[.021,.027,.015],z),T(R,v,[J*1.6,-.16,.49],[.105,.06,.025],z),T(R,u,[J*1.6,-.005,.31],[.28,.18,.39],tt);T(R,_,[0,-.16,.598],[.045,.027,.025],z);let Ht=[];for(let J of[-.65,.65]){let et=T(R,u,[J,.65,.04],[.18,.39,.2],tt);et.rotation.z=J*.5,Ht.push(et)}T(R,new Cn({color:"#bb7755",roughness:.48}),[0,.7,-.48],[.44,.48,.24],tt),T(new Cs(.3,.035,12,48),y,[0,.68,.52],[1,.85,1],tt),T(R,A,[0,.68,.52],[.25,.21,.07],tt);let ee=new Float32Array(500*3);for(let J=0;J<500;J++)ee[J*3]=(Math.random()-.5)*24,ee[J*3+1]=Math.random()*13-1.3,ee[J*3+2]=-Math.random()*34+3;let pe=new An;pe.setAttribute("position",new gn(ee,3));let Kt=new Fn({transparent:!0,depthWrite:!1,blending:Vo,uniforms:{time:{value:0}},vertexShader:"uniform float time;varying float a;void main(){vec3 p=position;p.y+=sin(time*.25+position.x)*.12;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(22./-mv.z,1.,4.);a=.4+.4*sin(time+position.z*3.);}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.76,.9,1.,smoothstep(.5,.05,d)*a);}"}),Y=new bc(pe,Kt);r.add(Y);let Q=matchMedia("(prefers-reduced-motion: reduce)"),ft=0,Rt=0,vt=null,Gt=0,Fe=0,D=0,jt=null,Nt=null,Tt=0,gt=0,se=0,yt=0,Pt=!1,Be=new Oc,Ae=new Xt,C=()=>{let J=i.clientWidth,et=i.clientHeight;!J||!et||(o.aspect=J/et,o.updateProjectionMatrix(),a.setSize(J,et),a.setPixelRatio(Math.min(devicePixelRatio,1.4,Math.sqrt(13e5/(J*et)))))},S=new ResizeObserver(C);S.observe(i),C();let P=J=>{let et=i.getBoundingClientRect();ft=(J.clientX-et.left)/et.width*2-1,Rt=(J.clientY-et.top)/et.height*2-1,vt&&(Gt=Vc.clamp(Gt+(J.clientX-vt.x)*.004,-.55,.55),Fe=Vc.clamp(Fe+(J.clientY-vt.y)*.002,-.2,.2),vt={x:J.clientX,y:J.clientY})},W=J=>{jt===null&&(vt={x:J.clientX,y:J.clientY},a.domElement.setPointerCapture(J.pointerId),P(J),Ae.set(ft,-Rt),Be.setFromCamera(Ae,o),Be.intersectObject(tt,!0).length&&(D=se,n("OH, HELLO. SHALL WE FOLLOW THAT LIGHT?")))},$=()=>{vt=null};i.addEventListener("pointerdown",W),window.addEventListener("pointermove",P),window.addEventListener("pointerup",$),i.addEventListener("pointercancel",$);function G(){return jt!==null||Q.matches?Promise.resolve():(jt=se,n("SOMETHING OUT THERE IS CALLING."),s.classList.add("home-departing"),new Promise(J=>{Nt=J,dt()}))}window.HomeWorld={depart:G};let Mt=new L,rt=new L;function xt(J){if(Tt=0,document.hidden||!s.classList.contains("is-active")||window.WorldFX?.suspendScene){gt=0;return}let et=gt?Math.min((J-gt)/1e3,.06):1/60;gt=J,se+=et;let Et=se,N=jt===null?0:Math.min(1,(se-jt)/2.6),j=Vc.smoothstep(N,.2,1);et>.035&&!Q.matches&&++yt>35&&(a.setPixelRatio(Math.max(.7,a.getPixelRatio()*.85)),yt=0);let at=o.aspect<.9;rt.set((at?2:0)+ft*.25+Math.sin(Gt)*3,2.1-Rt*.15+Fe,12-j*5),o.position.lerp(rt,1-Math.exp(-et*4)),Mt.set(at?2:.1,1+j*2,-1-j*5),o.lookAt(Mt);let pt=Q.matches?0:Math.sin(Et*1.8)*.018;tt.position.set(2+j*1.1,-1.28+j*4.8,-j*6+1),tt.rotation.y=Gt*.45+ft*.1-j*.7,tt.scale.setScalar(1-j*.34),tt.scale.y+=pt,z.rotation.y=ft*.23,z.rotation.x=Rt*.11-j*.7;let nt=Math.sin(Et*.77)>.996?.12:1;bt.forEach(_t=>_t.scale.y=.115*nt);let K=D&&Et-D<2?Math.sin((Et-D)*14)*.3:0;if(Ht[1].rotation.z=-.35-K-j*1.7,Ht[0].rotation.z=.35+j*1.7,ot.rotation.z=.25+Math.sin(Et*2)*.025,ht.rotation.z=-.25-Math.sin(Et*2)*.025,X.rotation.y=Et*.4,X.position.y=-.64+Math.sin(Et*1.4)*.08,M.rotation.z=Math.sin(Et*.15)*.01,V.rotation.z=ft*.025,B.uniforms.time.value=Et,Kt.uniforms.time.value=Et,Y.rotation.y=j*.16,a.render(r,o),Pt||(Pt=!0,s.classList.add("home-ready")),N===1&&Nt){let _t=Nt;Nt=null,_t()}(!Q.matches||jt!==null)&&(Tt=requestAnimationFrame(xt))}function dt(){!Tt&&!document.hidden&&s.classList.contains("is-active")&&!window.WorldFX?.suspendScene&&(Tt=requestAnimationFrame(xt))}let it=new MutationObserver(()=>{s.classList.contains("is-active")||(jt=null,s.classList.contains("home-departing")&&s.classList.remove("home-departing"),n("A LITTLE CURIOSITY. AN INFINITE UNIVERSE.")),dt()});it.observe(s,{attributes:!0,attributeFilter:["class"]});let ct=()=>dt();document.addEventListener("visibilitychange",ct);let wt=new MutationObserver(dt);return wt.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),i.addEventListener("pointermove",dt),Q.addEventListener("change",dt),dt(),()=>{cancelAnimationFrame(Tt),S.disconnect(),it.disconnect(),wt.disconnect(),window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",$),document.removeEventListener("visibilitychange",ct),Q.removeEventListener("change",dt),r.traverse(J=>{if(J.geometry?.dispose(),J.material)for(let et of[J.material].flat())et.dispose()}),f.dispose(),a.dispose(),a.domElement.remove(),delete window.HomeWorld}},[]),ni.default.createElement(ni.default.Fragment,null,ni.default.createElement("div",{className:"home-three-canvas",ref:e}),ni.default.createElement("div",{className:"home-story mono","aria-live":"polite"},ni.default.createElement("span",{className:"home-story-dot"}),t))}(0,db.createRoot)(document.getElementById("homeWorld")).render(ni.default.createElement(xD,null));})();
/*! For license information please see home-world.js.LEGAL.txt */
