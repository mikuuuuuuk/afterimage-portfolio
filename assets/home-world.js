(()=>{var iE=Object.create;var Av=Object.defineProperty;var sE=Object.getOwnPropertyDescriptor;var aE=Object.getOwnPropertyNames;var rE=Object.getPrototypeOf,oE=Object.prototype.hasOwnProperty;var Hs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var lE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of aE(t))!oE.call(e,s)&&s!==n&&Av(e,s,{get:()=>t[s],enumerable:!(i=sE(t,s))||i.enumerable});return e};var wv=(e,t,n)=>(n=e!=null?iE(rE(e)):{},lE(t||!e||!e.__esModule?Av(n,"default",{value:e,enumerable:!0}):n,e));var Hv=Hs(Gt=>{"use strict";var Qd=Symbol.for("react.transitional.element"),cE=Symbol.for("react.portal"),uE=Symbol.for("react.fragment"),hE=Symbol.for("react.strict_mode"),fE=Symbol.for("react.profiler"),dE=Symbol.for("react.consumer"),pE=Symbol.for("react.context"),mE=Symbol.for("react.forward_ref"),gE=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),_E=Symbol.for("react.activity"),yE=Symbol.for("react.view_transition"),Cv=Symbol.iterator;function xE(e){return e===null||typeof e!="object"?null:(e=Cv&&e[Cv]||e["@@iterator"],typeof e=="function"?e:null)}var Lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Iv={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Iv,this.updater=n||Lv}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pv(){}Pv.prototype=Dr.prototype;function jd(e,t,n){this.props=e,this.context=t,this.refs=Iv,this.updater=n||Lv}var $d=jd.prototype=new Pv;$d.constructor=jd;Ov($d,Dr.prototype);$d.isPureReactComponent=!0;var Rv=Array.isArray;function Kd(){}var Ee={H:null,A:null,T:null,S:null},zv=Object.prototype.hasOwnProperty;function tp(e,t,n){var i=n.ref;return{$$typeof:Qd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function SE(e,t){return tp(e.type,t,e.props)}function ep(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qd}function ME(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dv=/\/+/g;function Jd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ME(""+e.key):t.toString(36)}function bE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Kd,Kd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Rr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Qd:case cE:r=!0;break;case Nv:return r=e._init,Rr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Jd(e,0):i,Rv(s)?(n="",r!=null&&(n=r.replace(Dv,"$&/")+"/"),Rr(s,t,n,"",function(c){return c})):s!=null&&(ep(s)&&(s=SE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Dv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Rv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Jd(i,l),r+=Rr(i,t,n,a,s);else if(l=xE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Jd(i,l++),r+=Rr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Rr(bE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function nu(e,t,n){if(e==null)return e;var i=[],s=0;return Rr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function EE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Uv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Bv(e){var t=Ee.T,n={};n.types=t!==null?t.types:null,Ee.T=n;try{var i=e(),s=Ee.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Kd,Uv)}catch(a){Uv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ee.T=t}}function Fv(e){var t=Ee.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Bv(Fv.bind(null,e))}var TE={map:nu,forEach:function(e,t,n){nu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nu(e,function(){t++}),t},toArray:function(e){return nu(e,function(t){return t})||[]},only:function(e){if(!ep(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Activity=_E;Gt.Children=TE;Gt.Component=Dr;Gt.Fragment=uE;Gt.Profiler=fE;Gt.PureComponent=jd;Gt.StrictMode=hE;Gt.Suspense=gE;Gt.ViewTransition=yE;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ee.H.useMemoCache(e)}};Gt.addTransitionType=Fv;Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cacheSignal=function(){return null};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Ov({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!zv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return tp(e.type,s,i)};Gt.createContext=function(e){return e={$$typeof:pE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:dE,_context:e},e};Gt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)zv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return tp(e,a,s)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:mE,render:e}};Gt.isValidElement=ep;Gt.lazy=function(e){return{$$typeof:Nv,_payload:{_status:-1,_result:e},_init:EE}};Gt.memo=function(e,t){return{$$typeof:vE,type:e,compare:t===void 0?null:t}};Gt.startTransition=Bv;Gt.unstable_useCacheRefresh=function(){return Ee.H.useCacheRefresh()};Gt.use=function(e){return Ee.H.use(e)};Gt.useActionState=function(e,t,n){return Ee.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Ee.H.useCallback(e,t)};Gt.useContext=function(e){return Ee.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Ee.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t){return Ee.H.useEffect(e,t)};Gt.useEffectEvent=function(e){return Ee.H.useEffectEvent(e)};Gt.useId=function(){return Ee.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Ee.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Ee.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Ee.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Ee.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Ee.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Ee.H.useReducer(e,t,n)};Gt.useRef=function(e){return Ee.H.useRef(e)};Gt.useState=function(e){return Ee.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Ee.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Ee.H.useTransition()};Gt.version="19.3.1"});var iu=Hs((mU,Vv)=>{"use strict";Vv.exports=Hv()});var Qv=Hs(Ue=>{"use strict";function ap(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<su(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Hi(e){return e.length===0?null:e[0]}function ru(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>su(o,n))l<s&&0>su(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>su(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function su(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ue.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Gv=performance,Ue.unstable_now=function(){return Gv.now()}):(np=Date,kv=np.now(),Ue.unstable_now=function(){return np.now()-kv});var Gv,np,kv,ls=[],Vs=[],AE=1,li=null,mn=3,rp=!1,ll=!1,cl=!1,op=!1,qv=typeof setTimeout=="function"?setTimeout:null,Yv=typeof clearTimeout=="function"?clearTimeout:null,Xv=typeof setImmediate<"u"?setImmediate:null;function au(e){for(var t=Hi(Vs);t!==null;){if(t.callback===null)ru(Vs);else if(t.startTime<=e)ru(Vs),t.sortIndex=t.expirationTime,ap(ls,t);else break;t=Hi(Vs)}}function lp(e){if(cl=!1,au(e),!ll)if(Hi(ls)!==null)ll=!0,Nr||(Nr=!0,Ur());else{var t=Hi(Vs);t!==null&&cp(lp,t.startTime-e)}}var Nr=!1,ul=-1,Zv=5,Jv=-1;function Kv(){return op?!0:!(Ue.unstable_now()-Jv<Zv)}function ip(){if(op=!1,Nr){var e=Ue.unstable_now();Jv=e;var t=!0;try{t:{ll=!1,cl&&(cl=!1,Yv(ul),ul=-1),rp=!0;var n=mn;try{e:{for(au(e),li=Hi(ls);li!==null&&!(li.expirationTime>e&&Kv());){var i=li.callback;if(typeof i=="function"){li.callback=null,mn=li.priorityLevel;var s=i(li.expirationTime<=e);if(e=Ue.unstable_now(),typeof s=="function"){li.callback=s,au(e),t=!0;break e}li===Hi(ls)&&ru(ls),au(e)}else ru(ls);li=Hi(ls)}if(li!==null)t=!0;else{var a=Hi(Vs);a!==null&&cp(lp,a.startTime-e),t=!1}}break t}finally{li=null,mn=n,rp=!1}t=void 0}}finally{t?Ur():Nr=!1}}}var Ur;typeof Xv=="function"?Ur=function(){Xv(ip)}:typeof MessageChannel<"u"?(sp=new MessageChannel,Wv=sp.port2,sp.port1.onmessage=ip,Ur=function(){Wv.postMessage(null)}):Ur=function(){qv(ip,0)};var sp,Wv;function cp(e,t){ul=qv(function(){e(Ue.unstable_now())},t)}Ue.unstable_IdlePriority=5;Ue.unstable_ImmediatePriority=1;Ue.unstable_LowPriority=4;Ue.unstable_NormalPriority=3;Ue.unstable_Profiling=null;Ue.unstable_UserBlockingPriority=2;Ue.unstable_cancelCallback=function(e){e.callback=null};Ue.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zv=0<e?Math.floor(1e3/e):5};Ue.unstable_getCurrentPriorityLevel=function(){return mn};Ue.unstable_next=function(e){switch(mn){case 1:case 2:case 3:var t=3;break;default:t=mn}var n=mn;mn=t;try{return e()}finally{mn=n}};Ue.unstable_requestPaint=function(){op=!0};Ue.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=mn;mn=e;try{return t()}finally{mn=n}};Ue.unstable_scheduleCallback=function(e,t,n){var i=Ue.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:AE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,ap(Vs,e),Hi(ls)===null&&e===Hi(Vs)&&(cl?(Yv(ul),ul=-1):cl=!0,cp(lp,n-i))):(e.sortIndex=s,ap(ls,e),ll||rp||(ll=!0,Nr||(Nr=!0,Ur()))),e};Ue.unstable_shouldYield=Kv;Ue.unstable_wrapCallback=function(e){var t=mn;return function(){var n=mn;mn=t;try{return e.apply(this,arguments)}finally{mn=n}}}});var $v=Hs((vU,jv)=>{"use strict";jv.exports=Qv()});var n_=Hs(gn=>{"use strict";var wE=iu();function e_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gs(){}var Mn={d:{f:Gs,r:function(){throw Error(e_(522))},D:Gs,C:Gs,L:Gs,m:Gs,X:Gs,S:Gs,M:Gs},p:0,findDOMNode:null},CE=Symbol.for("react.portal"),RE=Symbol.for("react.recoverable"),t_=Symbol.for("react.optimistic_key");function DE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:CE,key:i==null?null:i===t_?t_:""+i,children:e,containerInfo:t,implementation:n}}var hl=wE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ou(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mn;gn.browser=function(e){return{$$typeof:RE,_reason:e}};gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(e_(299));return DE(e,t,null,n)};gn.flushSync=function(e){var t=hl.T,n=Mn.p;try{if(hl.T=null,Mn.p=2,e)return e()}finally{hl.T=t,Mn.p=n,Mn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Mn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&Mn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=ou(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ou(t.as,t.crossOrigin);Mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Mn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=ou(n,t.crossOrigin);Mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ou(t.as,t.crossOrigin);Mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Mn.d.m(e)};gn.requestFormReset=function(e){Mn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return hl.H.useFormState(e,t,n)};gn.useFormStatus=function(){return hl.H.useHostTransitionStatus()};gn.version="19.3.1"});var a_=Hs((yU,s_)=>{"use strict";function i_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)}catch(e){console.error(e)}}i_(),s_.exports=n_()});var WM=Hs(Gh=>{"use strict";var Qe=$v(),Xy=iu(),UE=a_();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function qy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function r_(e){if(jl(e)!==e)throw Error(Q(188))}function NE(e){var t=e.alternate;if(!t){if(t=jl(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return r_(s),e;if(a===i)return r_(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Zy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Zy(e),t!==null)return t;e=e.sibling}return null}function zn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&zn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function er(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function o_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Jy(e){var t=[null,null],n=er(e);return n===null||Ky(t,e,n.child,{foundSelf:!1}),t}function Ky(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Ky(e,t,n.child,i))return!0;n=n.sibling}return!1}function Ke(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var Fr=null,Vp=null;function LE(e,t,n){return e===n?!0:e===t?(Fr=e,!0):!1}function OE(e,t,n){return e===n?(Vp=e,!1):e===t?(Vp!==null&&(Fr=e),!0):!1}function l_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Gp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Me=Object.assign,IE=Symbol.for("react.element"),lu=Symbol.for("react.transitional.element"),_l=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Qy=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),jy=Symbol.for("react.consumer"),qi=Symbol.for("react.context"),jm=Symbol.for("react.forward_ref"),Xp=Symbol.for("react.suspense"),Wp=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),qs=Symbol.for("react.lazy");Symbol.for("react.scope");var qp=Symbol.for("react.activity"),PE=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var zE=Symbol.for("react.memo_cache_sentinel"),Yp=Symbol.for("react.view_transition"),BE=Symbol.for("react.recoverable"),c_=Symbol.iterator;function fl(e){return e===null||typeof e!="object"?null:(e=c_&&e[c_]||e["@@iterator"],typeof e=="function"?e:null)}var FE=Symbol.for("react.client.reference");function Zp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===FE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case kp:return"Profiler";case Qy:return"StrictMode";case Xp:return"Suspense";case Wp:return"SuspenseList";case qp:return"Activity";case Yp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case _l:return"Portal";case qi:return e.displayName||"Context";case jy:return(e._context.displayName||"Context")+".Consumer";case jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $m:return t=e.displayName||null,t!==null?t:Zp(e.type)||"Memo";case qs:t=e._payload,e=e._init;try{return Zp(e(t))}catch{}}return null}var yl=Array.isArray,Bt=Xy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=UE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ga={pending:!1,data:null,method:null,action:null},Jp=[],Vr=-1;function $i(e){return{current:e}}function un(e){0>Vr||(e.current=Jp[Vr],Jp[Vr]=null,Vr--)}function we(e,t){Vr++,Jp[Vr]=e.current,e.current=t}var Ki=$i(null),Pl=$i(null),ea=$i(null),Zu=$i(null);function Ju(e,t){switch(we(ea,t),we(Pl,e),we(Ki,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?by(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=by(t),e=xM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}un(Ki),we(Ki,e)}function oo(){un(Ki),un(Pl),un(ea)}function Kp(e){var t=e.memoizedState;t!==null&&(_o._currentValue=t.memoizedState,we(Zu,e)),t=Ki.current;var n=xM(t,e.type);t!==n&&(we(Pl,e),we(Ki,n))}function Ku(e){Pl.current===e&&(un(Ki),un(Pl)),Zu.current===e&&(un(Zu),_o._currentValue=Ga)}var up,u_;function Xs(e){if(up===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);up=t&&t[1]||"",u_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+up+e+u_}var hp=!1;function fp(e,t){if(!e||hp)return"";hp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(g){var f=g}Reflect.construct(e,[],p)}else{try{p.call()}catch(g){f=g}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(g){f=g}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(g){if(g&&f&&typeof g.stack=="string")return[g.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{hp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Xs(n):""}function HE(e,t){switch(e.tag){case 26:case 27:case 5:return Xs(e.type);case 16:return Xs("Lazy");case 13:return e.child!==t&&t!==null?Xs("Suspense Fallback"):Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 15:return fp(e.type,!1);case 11:return fp(e.type.render,!1);case 1:return fp(e.type,!0);case 31:return Xs("Activity");case 30:return Xs("ViewTransition");default:return""}}function h_(e){try{var t="",n=null;do t+=HE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Qp=Object.prototype.hasOwnProperty,tg=Qe.unstable_scheduleCallback,dp=Qe.unstable_cancelCallback,VE=Qe.unstable_shouldYield,GE=Qe.unstable_requestPaint,Zn=Qe.unstable_now,kE=Qe.unstable_getCurrentPriorityLevel,$y=Qe.unstable_ImmediatePriority,tx=Qe.unstable_UserBlockingPriority,Qu=Qe.unstable_NormalPriority,XE=Qe.unstable_LowPriority,ex=Qe.unstable_IdlePriority,WE=Qe.log,qE=Qe.unstable_setDisableYieldValue,$l=null,Jn=null;function Js(e){if(typeof WE=="function"&&qE(e),Jn&&typeof Jn.setStrictMode=="function")try{Jn.setStrictMode($l,e)}catch{}}var Kn=Math.clz32?Math.clz32:JE,YE=Math.log,ZE=Math.LN2;function JE(e){return e>>>=0,e===0?32:31-(YE(e)/ZE|0)|0}var cu=256,uu=262144,hu=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=za(i):(r&=o,r!==0?s=za(r):n||(n=o&~e,n!==0&&(s=za(n))))):(o=i&~a,o!==0?s=za(o):r!==0?s=za(r):n||(n=i&~e,n!==0&&(s=za(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function tc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Kn(n),s=1<<i;t|=e[i],n&=~s}return t}function KE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ix(){var e=hu;return hu<<=1,(hu&62914560)===0&&(hu=4194304),e}function pp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ec(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function QE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Kn(n),p=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var d=f[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&sx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function sx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function ax(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function rx(e,t){var n=t&-t;return n=(n&42)!==0?1:eg(n),(n&(e.suspendedLanes|t))!==0?0:n}function eg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ng(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ox(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:GM(e.type))}function f_(e,t){var n=le.p;try{return le.p=e,t()}finally{le.p=n}}var Ss=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ss,Bn="__reactProps$"+Ss,So="__reactContainer$"+Ss,d_="__reactEvents$"+Ss,jE="__reactListeners$"+Ss,$E="__reactHandles$"+Ss,p_="__reactResources$"+Ss,nc="__reactMarker$"+Ss,ju="__reactLoad$"+Ss;function Eh(e){delete e[ln],delete e[Bn],delete e[jE],delete e[$E]}function Ha(e){var t;if(t=e[ln])return t;for(var n=e.parentNode;n;){if(t=n[So]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uy(e);e!==null;){if(n=e[ln])return n;e=Uy(e)}return t}e=n,n=e.parentNode}return null}function Mo(e){if(e=e[ln]||e[So]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function Qr(e){var t=e[p_];return t||(t=e[p_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nn(e){e[nc]=!0}function lx(e){e[ju]=void 0}var cx=new Set,ux={};function nr(e,t){lo(e,t),lo(e+"Capture",t)}function lo(e,t){for(ux[e]=t,e=0;e<t.length;e++)cx.add(t[e])}var tT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m_={},g_={};function eT(e){return Qp.call(g_,e)?!0:Qp.call(m_,e)?!1:tT.test(e)?g_[e]=!0:(m_[e]=!0,!1)}var ae=!1;function v_(){var e=ae;return ae=!1,e}function Ru(e,t,n){if(eT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function fu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function cs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jp(e){if(!e._valueTracker){var t=hx(e)?"checked":"value";e._valueTracker=nT(e,t,""+e[t])}}function fx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var iT=/[\n"\\]/g;function di(e){return e.replace(iT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $p(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xn(t)):e.value!==""+Xn(t)&&(e.value=""+Xn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?mp(e,Xn(e.value)):mp(e,Xn(t)):n!=null?mp(e,Xn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Xn(o):e.removeAttribute("name")}function dx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){jp(e);return}n=n!=null?""+Xn(n):"",t=t!=null?""+Xn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),jp(e)}function mp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function jr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function px(e,t,n){if(t!=null&&(t=""+Xn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xn(n):""}function mx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(yl(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Xn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),jp(e)}function co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function __(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||sT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gx(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ae=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(__(e,s,i),ae=!0)}else for(var a in t)t.hasOwnProperty(a)&&__(e,a,t[a])}function ig(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Du(e){return rT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var tm=null;function sg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gr=null,$r=null;function y_(e){var t=Mo(e);if(t&&(e=t.stateNode)){var n=e[Bn]||null;t:switch(e=t.stateNode,t.type){case"input":if($p(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+di(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Bn]||null;if(!s)throw Error(Q(90));$p(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&fx(i)}break t;case"textarea":px(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}}}var gp=!1;function vx(e,t,n){if(gp)return e(t,n);gp=!0;try{var i=e(t);return i}finally{if(gp=!1,(Gr!==null||$r!==null)&&(Bh(),Gr&&(t=Gr,e=$r,$r=Gr=null,y_(t),e)))for(t=0;t<e.length;t++)y_(e[t])}}function zl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Bn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=!1;if(ms)try{Lr={},Object.defineProperty(Lr,"passive",{get:function(){em=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{em=!1}var Lr,Ks=null,ag=null,Uu=null;function _x(){if(Uu)return Uu;var e,t=ag,n=t.length,i,s="value"in Ks?Ks.value:Ks.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Uu=s.slice(e,1<i?1-i:void 0)}function Nu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function du(){return!0}function x_(){return!1}function An(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?du:x_,this.isPropagationStopped=x_,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=du)},persist:function(){},isPersistent:du}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=An(ga),ic=Me({},ga,{view:0,detail:0}),oT=An(ic),vp,_p,dl,Ah=Me({},ic,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dl&&(dl&&e.type==="mousemove"?(vp=e.screenX-dl.screenX,_p=e.screenY-dl.screenY):_p=vp=0,dl=e),vp)},movementY:function(e){return"movementY"in e?e.movementY:_p}}),S_=An(Ah),lT=Me({},Ah,{dataTransfer:0}),cT=An(lT),uT=Me({},ic,{relatedTarget:0}),yp=An(uT),hT=Me({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),fT=An(hT),dT=Me({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pT=An(dT),mT=Me({},ga,{data:0}),M_=An(mT),gT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_T[e])?!!t[e]:!1}function rg(){return yT}var xT=Me({},ic,{key:function(e){if(e.key){var t=gT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rg,charCode:function(e){return e.type==="keypress"?Nu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ST=An(xT),MT=Me({},Ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b_=An(MT),bT=Me({},ga,{submitter:0}),ET=An(bT),TT=Me({},ic,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rg}),AT=An(TT),wT=Me({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),CT=An(wT),RT=Me({},Ah,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=An(RT),UT=Me({},ga,{newState:0,oldState:0,source:0}),NT=An(UT),LT=[9,13,27,32],og=ms&&"CompositionEvent"in window,bl=null;ms&&"documentMode"in document&&(bl=document.documentMode);var OT=ms&&"TextEvent"in window&&!bl,yx=ms&&(!og||bl&&8<bl&&11>=bl),E_=" ",T_=!1;function xx(e,t){switch(e){case"keyup":return LT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function IT(e,t){switch(e){case"compositionend":return Sx(t);case"keypress":return t.which!==32?null:(T_=!0,E_);case"textInput":return e=t.data,e===E_&&T_?null:e;default:return null}}function PT(e,t){if(kr)return e==="compositionend"||!og&&xx(e,t)?(e=_x(),Uu=ag=Ks=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yx&&t.locale!=="ko"?null:t.data;default:return null}}var zT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zT[e.type]:t==="textarea"}function Mx(e,t,n,i){Gr?$r?$r.push(i):$r=[i]:Gr=i,t=xh(t,"onChange"),0<t.length&&(n=new Th("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var El=null,Bl=null;function BT(e){vM(e,0)}function wh(e){var t=xl(e);if(fx(t))return e}function w_(e,t){if(e==="change")return t}var bx=!1;ms&&(ms?(mu="oninput"in document,mu||(xp=document.createElement("div"),xp.setAttribute("oninput","return;"),mu=typeof xp.oninput=="function"),pu=mu):pu=!1,bx=pu&&(!document.documentMode||9<document.documentMode));var pu,mu,xp;function C_(){El&&(El.detachEvent("onpropertychange",Ex),Bl=El=null)}function Ex(e){if(e.propertyName==="value"&&wh(Bl)){var t=[];Mx(t,Bl,e,sg(e)),vx(BT,t)}}function FT(e,t,n){e==="focusin"?(C_(),El=t,Bl=n,El.attachEvent("onpropertychange",Ex)):e==="focusout"&&C_()}function HT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wh(Bl)}function VT(e,t){if(e==="click")return wh(t)}function GT(e,t){if(e==="input"||e==="change")return wh(t)}function kT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:kT;function Fl(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Qp.call(t,s)||!jn(e[s],t[s]))return!1}return!0}function nm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function R_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function D_(e,t){var n=R_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=R_(n)}}function Tx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ax(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nm(e.document)}return t}function lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var XT=ms&&"documentMode"in document&&11>=document.documentMode,Xr=null,im=null,Tl=null,sm=!1;function U_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sm||Xr==null||Xr!==nm(i)||(i=Xr,"selectionStart"in i&&lg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tl&&Fl(Tl,i)||(Tl=i,i=xh(im,"onSelect"),0<i.length&&(t=new Th("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Xr)))}function Ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Sp={},wx={};ms&&(wx=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function ir(e){if(Sp[e])return Sp[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wx)return Sp[e]=t[n];return e}var Cx=ir("animationend"),Rx=ir("animationiteration"),Dx=ir("animationstart"),WT=ir("transitionrun"),qT=ir("transitionstart"),YT=ir("transitioncancel"),Ux=ir("transitionend"),Nx=new Map,am="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");am.push("scrollEnd");function Di(e,t){Nx.set(e,t),nr(t,[e])}var ZT=0;function gs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ri.identifierPrefix;var n=ZT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function N_(e){if(e==null||typeof e=="string")return e;var t=null,n=ro;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Ms(e,t){return e=N_(e),t=N_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var $u=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],qr=0,cg=0;function Ch(){for(var e=qr,t=cg=qr=0;t<e;){var n=ui[t];ui[t++]=null;var i=ui[t];ui[t++]=null;var s=ui[t];ui[t++]=null;var a=ui[t];if(ui[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Lx(n,s,a)}}function Rh(e,t,n,i){ui[qr++]=e,ui[qr++]=t,ui[qr++]=n,ui[qr++]=i,cg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ug(e,t,n,i){return Rh(e,t,n,i),th(e)}function sr(e,t){return Rh(e,null,null,t),th(e)}function Lx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Kn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function th(e){if(50<Il)throw Il=0,Gu=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Yr={};function JT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,t,n,i){return new JT(e,t,n,i)}function hg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ds(e,t){var n=e.alternate;return n===null?(n=In(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ox(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Lu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")hg(i)&&(r=1);else if(typeof i=="string")r=Sw(e,n,Ki.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case qp:return e=In(31,n,t,s),e.elementType=qp,e.lanes=a,e;case Hr:return ka(n.children,s,a,t);case Qy:r=8,s|=24;break;case kp:return e=In(12,n,t,s|2),e.elementType=kp,e.lanes=a,e;case Xp:return e=In(13,n,t,s),e.elementType=Xp,e.lanes=a,e;case Wp:return e=In(19,n,t,s),e.elementType=Wp,e.lanes=a,e;case PE:case Yp:return e=s|32,e=In(30,n,t,e),e.elementType=Yp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case qi:r=10;break t;case jy:r=9;break t;case jm:r=11;break t;case $m:r=14;break t;case qs:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=In(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ka(e,t,n,i){return e=In(7,e,i,t),e.lanes=n,e}function Mp(e,t,n){return e=In(6,e,null,t),e.lanes=n,e}function Ix(e){var t=In(18,null,null,0);return t.stateNode=e,t}function bp(e,t,n){return t=In(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var L_=new WeakMap;function pi(e,t){if(typeof e=="object"&&e!==null){var n=L_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:h_(t)},L_.set(e,t),t)}return{value:e,source:t,stack:h_(t)}}var Zr=[],Jr=0,eh=null,Hl=0,hi=[],fi=0,ha=null,Zi=1,Ji="";function hs(e,t){Zr[Jr++]=Hl,Zr[Jr++]=eh,eh=e,Hl=t}function Px(e,t,n){hi[fi++]=Zi,hi[fi++]=Ji,hi[fi++]=ha,ha=e;var i=Zi;e=Ji;var s=32-Kn(i)-1;i&=~(1<<s),n+=1;var a=32-Kn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Zi=1<<32-Kn(t)+s|n<<s|i,Ji=a+e}else Zi=1<<a|n<<s|i,Ji=e}function Dh(e){e.return!==null&&(hs(e,1),Px(e,1,0))}function fg(e){for(;e===eh;)eh=Zr[--Jr],Zr[Jr]=null,Hl=Zr[--Jr],Zr[Jr]=null;for(;e===ha;)ha=hi[--fi],hi[fi]=null,Ji=hi[--fi],hi[fi]=null,Zi=hi[--fi],hi[fi]=null}function zx(e,t){hi[fi++]=Zi,hi[fi++]=Ji,hi[fi++]=ha,Zi=t.id,Ji=t.overflow,ha=e}var sn=null,Ae=null,Zt=!1,na=null,mi=!1,rm=Error(Q(519));function fa(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(pi(t,e)),rm}function O_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[Bn]=i,n){case"dialog":Kt("cancel",t),Kt("close",t);break;case"iframe":case"object":case"embed":Kt("load",t);break;case"video":case"audio":for(n=0;n<Wl.length;n++)Kt(Wl[n],t);break;case"source":Kt("error",t);break;case"img":case"image":case"link":Kt("error",t),Kt("load",t);break;case"details":Kt("toggle",t);break;case"input":Kt("invalid",t),dx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Kt("invalid",t);break;case"textarea":Kt("invalid",t),mx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||yM(t.textContent,n)?(i.popover!=null&&(Kt("beforetoggle",t),Kt("toggle",t)),i.onScroll!=null&&Kt("scroll",t),i.onScrollEnd!=null&&Kt("scrollend",t),i.onClick!=null&&(t.onclick=Yi),t=!0):t=!1,t||fa(e,!0)}function nh(e){for(sn=e.return;sn;)switch(sn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:sn=sn.return}}function Or(e){if(e!==sn)return!1;if(!Zt)return nh(e),Zt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Xm(e.type,e.memoizedProps)),n=!n),n&&Ae&&fa(e),nh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Ae=Dy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Ae=Dy(e)}else t===27?(t=Ae,va(e.type)?(e=Zm,Zm=null,Ae=e):Ae=t):Ae=sn?gi(e.stateNode.nextSibling):null;return!0}function Ya(){Ae=sn=null,Zt=!1}function Ep(){var e=na;return e!==null&&(Ln===null?Ln=e:Ln.push.apply(Ln,e),na=null),e}function Vl(e){na===null?na=[e]:na.push(e)}var om=$i(null),ar=null,fs=null;function Qs(e,t,n){we(om,t._currentValue),t._currentValue=n}function ps(e){e._currentValue=om.current,un(om)}function Ou(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function lm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ou(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Ou(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Ou(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Za(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;jn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Zu.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}s=s.return}return e!==null&&lm(t,e,n,i),t.flags|=262144,e!==null}function ih(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){ar=e,fs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return Bx(ar,e)}function gu(e,t){return ar===null&&Ja(e),Bx(e,t)}function Bx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fs===null){if(e===null)throw Error(Q(308));fs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fs=fs.next=t;return n}var KT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},QT=Qe.unstable_scheduleCallback,jT=Qe.unstable_NormalPriority,Ge={$$typeof:qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dg(){return{controller:new KT,data:new Map,refCount:0}}function sc(e){e.refCount--,e.refCount===0&&QT(jT,function(){e.controller.abort()})}function I_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Sl=null;function $T(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Al=null,cm=0,Ka=0,to=null;function tA(e,t){if(Al===null){var n=Al=[];cm=0,Ka=Vg(),to={status:"pending",value:void 0,then:function(i){n.push(i)}}}return cm++,t.then(P_,P_),t}function P_(){if(--cm===0&&(Sl=null,Al!==null)){to!==null&&(to.status="fulfilled");var e=Al;Al=null,Ka=0,to=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function eA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var z_=Bt.S;Bt.S=function(e,t){if(nM=Zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&tA(e,t),Sl!==null)for(var n=mo;n!==null;)I_(n,Sl),n=n.next;if(n=e.types,n!==null){for(var i=mo;i!==null;)I_(i,n),i=i.next;if(Ka!==0){i=Sl,i===null&&(i=Sl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}z_!==null&&z_(e,t)};var Xa=$i(null);function pg(){var e=Xa.current;return e!==null?e:Se.pooledCache}function Iu(e,t){t===null?we(Xa,Xa.current):we(Xa,t.pool)}function Fx(){var e=pg();return e===null?null:{parent:Ge._currentValue,pool:e}}var bo=Error(Q(460)),mg=Error(Q(474)),Uh=Error(Q(542)),sh={then:function(){}};function B_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Yi,Yi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,H_(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(Yi,Yi);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,H_(e),e}throw Wa=t,bo}}function Ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wa=n,bo):n}}var Wa=null;function F_(){if(Wa===null)throw Error(Q(459));var e=Wa;return Wa=null,e}function H_(e){if(e===bo||e===Uh)throw Error(Q(483))}var eo=null,Gl=0;function vu(e){var t=Gl;return Gl+=1,eo===null&&(eo=[]),Hx(eo,e,t)}function ks(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _u(e,t){throw t.$$typeof===IE?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vx(e){function t(u,_){if(e){var y=u.deletions;y===null?(u.deletions=[_],u.flags|=16):y.push(_)}}function n(u,_){if(!e)return null;for(;_!==null;)t(u,_),_=_.sibling;return null}function i(u){for(var _=new Map;u!==null;)u.key===null?_.set(u.index,u):_.set(u.key,u),u=u.sibling;return _}function s(u,_){return u=ds(u,_),u.index=0,u.sibling=null,u}function a(u,_,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<_?(u.flags|=2,_):y):(u.flags|=134217730,_)):(u.flags|=1048576,_)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,_,y,v){return _===null||_.tag!==6?(_=Mp(y,u.mode,v),_.return=u,_):(_=s(_,y),_.return=u,_)}function l(u,_,y,v){var T=y.type;return T===Hr?(u=h(u,_,y.props.children,v,y.key),ks(u,y),u):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qs&&Ba(T)===_.type)?(_=s(_,y.props),ks(_,y),_.return=u,_):(_=Lu(y.type,y.key,y.props,null,u.mode,v),ks(_,y),_.return=u,_)}function c(u,_,y,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=bp(y,u.mode,v),_.return=u,_):(_=s(_,y.children||[]),_.return=u,_)}function h(u,_,y,v,T){return _===null||_.tag!==7?(_=ka(y,u.mode,v,T),_.return=u,_):(_=s(_,y),_.return=u,_)}function p(u,_,y){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Mp(""+_,u.mode,y),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case lu:return y=Lu(_.type,_.key,_.props,null,u.mode,y),ks(y,_),y.return=u,y;case _l:return _=bp(_,u.mode,y),_.return=u,_;case qs:return _=Ba(_),p(u,_,y)}if(yl(_)||fl(_))return _=ka(_,u.mode,y,null),_.return=u,_;if(typeof _.then=="function")return p(u,vu(_),y);if(_.$$typeof===qi)return p(u,gu(u,_),y);_u(u,_)}return null}function f(u,_,y,v){var T=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(u,_,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lu:return y.key===T?l(u,_,y,v):null;case _l:return y.key===T?c(u,_,y,v):null;case qs:return y=Ba(y),f(u,_,y,v)}if(yl(y)||fl(y))return T!==null?null:h(u,_,y,v,null);if(typeof y.then=="function")return f(u,_,vu(y),v);if(y.$$typeof===qi)return f(u,_,gu(u,y),v);_u(u,y)}return null}function d(u,_,y,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(y)||null,o(_,u,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:return u=u.get(v.key===null?y:v.key)||null,l(_,u,v,T);case _l:return u=u.get(v.key===null?y:v.key)||null,c(_,u,v,T);case qs:return v=Ba(v),d(u,_,y,v,T)}if(yl(v)||fl(v))return u=u.get(y)||null,h(_,u,v,T,null);if(typeof v.then=="function")return d(u,_,y,vu(v),T);if(v.$$typeof===qi)return d(u,_,y,gu(_,v),T);_u(_,v)}return null}function g(u,_,y,v){for(var T=null,A=null,w=_,R=_=0,E=null;w!==null&&R<y.length;R++){w.index>R?(E=w,w=null):E=w.sibling;var M=f(u,w,y[R],v);if(M===null){w===null&&(w=E);break}e&&w&&M.alternate===null&&t(u,w),_=a(M,_,R),A===null?T=M:A.sibling=M,A=M,w=E}if(R===y.length)return n(u,w),Zt&&hs(u,R),T;if(w===null){for(;R<y.length;R++)w=p(u,y[R],v),w!==null&&(_=a(w,_,R),A===null?T=w:A.sibling=w,A=w);return Zt&&hs(u,R),T}for(w=i(w);R<y.length;R++)E=d(w,u,R,y[R],v),E!==null&&(e&&(M=E.alternate,M!==null&&w.delete(M.key===null?R:M.key)),_=a(E,_,R),A===null?T=E:A.sibling=E,A=E);return e&&w.forEach(function(N){return t(u,N)}),Zt&&hs(u,R),T}function x(u,_,y,v){if(y==null)throw Error(Q(151));for(var T=null,A=null,w=_,R=_=0,E=null,M=y.next();w!==null&&!M.done;R++,M=y.next()){w.index>R?(E=w,w=null):E=w.sibling;var N=f(u,w,M.value,v);if(N===null){w===null&&(w=E);break}e&&w&&N.alternate===null&&t(u,w),_=a(N,_,R),A===null?T=N:A.sibling=N,A=N,w=E}if(M.done)return n(u,w),Zt&&hs(u,R),T;if(w===null){for(;!M.done;R++,M=y.next())M=p(u,M.value,v),M!==null&&(_=a(M,_,R),A===null?T=M:A.sibling=M,A=M);return Zt&&hs(u,R),T}for(w=i(w);!M.done;R++,M=y.next())M=d(w,u,R,M.value,v),M!==null&&(e&&(E=M.alternate,E!==null&&w.delete(E.key===null?R:E.key)),_=a(M,_,R),A===null?T=M:A.sibling=M,A=M);return e&&w.forEach(function(z){return t(u,z)}),Zt&&hs(u,R),T}function m(u,_,y,v){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case lu:t:{for(var T=y.key;_!==null;){if(_.key===T){if(T=y.type,T===Hr){if(_.tag===7){n(u,_.sibling),v=s(_,y.props.children),ks(v,y),v.return=u,u=v;break t}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qs&&Ba(T)===_.type){n(u,_.sibling),v=s(_,y.props),ks(v,y),v.return=u,u=v;break t}n(u,_);break}else t(u,_);_=_.sibling}y.type===Hr?(v=ka(y.props.children,u.mode,v,y.key),ks(v,y),v.return=u,u=v):(v=Lu(y.type,y.key,y.props,null,u.mode,v),ks(v,y),v.return=u,u=v)}return r(u);case _l:t:{for(T=y.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(u,_.sibling),v=s(_,y.children||[]),v.return=u,u=v;break t}else{n(u,_);break}else t(u,_);_=_.sibling}v=bp(y,u.mode,v),v.return=u,u=v}return r(u);case qs:return y=Ba(y),m(u,_,y,v)}if(yl(y))return g(u,_,y,v);if(fl(y)){if(T=fl(y),typeof T!="function")throw Error(Q(150));return y=T.call(y),x(u,_,y,v)}if(typeof y.then=="function")return m(u,_,vu(y),v);if(y.$$typeof===qi)return m(u,_,gu(u,y),v);_u(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,_!==null&&_.tag===6?(n(u,_.sibling),v=s(_,y),v.return=u,u=v):(n(u,_),v=Mp(y,u.mode,v),v.return=u,u=v),r(u)):n(u,_)}return function(u,_,y,v){try{Gl=0;var T=m(u,_,y,v);return eo=null,T}catch(w){if(w===bo||w===Uh)throw w;var A=In(29,w,null,u.mode);return A.lanes=v,A.return=u,A}finally{}}}var Qa=Vx(!0),Gx=Vx(!1),Ys=!1;function gg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function um(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(oe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=th(e),Lx(e,null,n),t}return Rh(e,i,t,n),th(e)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ax(e,n)}}function Tp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hm=!1;function Cl(){if(hm){var e=to;if(e!==null)throw e}}function Rl(e,t,n,i){hm=!1;var s=e.updateQueue;Ys=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,d=f!==o.lane;if(d?(te&f)===f:(i&f)===f){f!==0&&f===Ka&&(hm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){p=g.call(m,p,f);break t}p=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(m,p,f):g,f==null)break t;p=Me({},p,f);break t;case 2:Ys=!0}}f=o.callback,f!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[f]:d.push(f))}else d={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),ma|=r,e.lanes=r,e.memoizedState=p}}function kx(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function Xx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)kx(n[e],t)}var da=$i(null),ah=$i(0);function V_(e,t){e=xs,we(ah,e),we(da,t),xs=e|t.baseLanes}function fm(){we(ah,xs),we(da,da.current)}function vg(){xs=ah.current,un(da),un(ah)}var dn=$i(null),vn=null;function aa(e){var t=e.alternate;we(hn,hn.current&1),we(dn,e),vn===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(vn=e)}function dm(e){we(hn,hn.current),we(dn,e),vn===null&&(vn=e)}function Wx(e){e.tag===22?(we(hn,hn.current),we(dn,e),vn===null&&(vn=e)):ra()}function ra(){we(hn,hn.current),we(dn,dn.current)}function Wn(e){un(dn),vn===e&&(vn=null),un(hn)}var hn=$i(0);function kl(e,t){we(dn,dn.current),we(hn,t)}function _g(e){un(hn),un(dn),vn===e&&(vn=null)}function rh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ym(n)||Wg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vs=0,Xt=null,_e=null,Ve=null,oh=!1,no=!1,ja=!1,lh=0,Xl=0,io=null,nA=0;function ze(){throw Error(Q(321))}function yg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function xg(e,t,n,i,s,a){return vs=a,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bt.H=e===null||e.memoizedState===null?MS:bS,ja=!1,a=n(i,s),ja=!1,no&&(a=Yx(t,n,i,s)),qx(e),a}function qx(e){Bt.H=ch;var t=_e!==null&&_e.next!==null;if(vs=0,Ve=_e=Xt=null,oh=!1,Xl=0,io=null,t)throw Error(Q(300));e===null||ke||(e=e.dependencies,e!==null&&ih(e)&&(ke=!0))}function Yx(e,t,n,i){Xt=e;var s=0;do{if(no&&(io=null),Xl=0,no=!1,25<=s)throw Error(Q(301));if(s+=1,Ve=_e=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Bt.H=uA,a=t(n,i)}while(no);return a}function iA(){var e=Bt.H,t=e.useState()[0];return t=typeof t.then=="function"?ac(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Xt.flags|=1024),t}function Sg(){var e=lh!==0;return lh=0,e}function Mg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bg(e){if(oh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oh=!1}vs=0,Ve=_e=Xt=null,no=!1,Xl=lh=0,io=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Xt.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Fe(){if(_e===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Ve===null?Xt.memoizedState:Ve.next;if(t!==null)Ve=t,_e=e;else{if(e===null)throw Xt.alternate===null?Error(Q(467)):Error(Q(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ve===null?Xt.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Nh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ac(e){var t=Xl;return Xl+=1,io===null&&(io=[]),e=Hx(io,e,t),t=Xt,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,Bt.H=t===null||t.memoizedState===null?MS:bS),e}function Lh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ac(e);if(e.$$typeof===BE)return;if(e.$$typeof===qi)return cn(e)}throw Error(Q(438,String(e)))}function Eg(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Nh(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=zE;return t.index++,n}function _s(e,t){return typeof t=="function"?t(e):t}function Pu(e){var t=Fe();return Tg(t,_e,e)}function Tg(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(te&p)===p:(vs&p)===p){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ka&&(h=!0);else if((vs&f)===f){c=c.next,f===Ka&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Xt.lanes|=f,ma|=f;p=c.action,ja&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else f={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Xt.lanes|=p,ma|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!jn(a,e.memoizedState)&&(ke=!0,h&&(n=to,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ap(e){var t=Fe(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);jn(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Zx(e,t,n){var i=Xt,s=Fe(),a=Zt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!jn((_e||s).memoizedState,n);if(r&&(s.memoizedState=n,ke=!0),s=s.queue,Ag(Qx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Ve!==null&&(Ve.memoizedState.tag&1)!==0,uo(e?9:8,{destroy:void 0},Kx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Se===null)throw Error(Q(349));a||(vs&127)!==0||Jx(i,t,n)}return n}function Jx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=Nh(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kx(e,t,n,i){t.value=n,t.getSnapshot=i,jx(t)&&$x(e)}function Qx(e,t,n){return n(function(){jx(t)&&$x(e)})}function jx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function $x(e){var t=sr(e,2);t!==null&&Pn(t,e,2)}function pm(e){var t=Tn();if(typeof e=="function"){var n=e;if(e=n(),ja){Js(!0);try{n()}finally{Js(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:e},t}function tS(e,t,n,i){return e.baseState=n,Tg(e,_e,typeof i=="function"?i:_s)}function sA(e,t,n,i,s){if(Ih(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Bt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,eS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function eS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Bt.T,r={};r.types=a!==null?a.types:null,Bt.T=r;try{var o=n(s,i),l=Bt.S;l!==null&&l(r,o),G_(e,t,o)}catch(c){mm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Bt.T=a}}else try{a=n(s,i),G_(e,t,a)}catch(c){mm(e,t,c)}}function G_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){k_(e,t,i)},function(i){return mm(e,t,i)}):k_(e,t,n)}function k_(e,t,n){t.status="fulfilled",t.value=n,nS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,eS(e,n)))}function mm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,nS(t),t=t.next;while(t!==i)}e.action=null}function nS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function iS(e,t){return t}function X_(e,t){if(Zt){var n=Se.formState;if(n!==null){t:{var i=Xt;if(Zt){if(Ae){e:{for(var s=Ae,a=mi;s.nodeType!==8;){if(!a){s=null;break e}if(s=gi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ae=gi(s.nextSibling),i=s.data==="F!";break t}}fa(i)}i=!1}i&&(t=n[0])}}return n=Tn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iS,lastRenderedState:t},n.queue=i,n=yS.bind(null,Xt,i),i.dispatch=n,i=pm(!1),a=Dg.bind(null,Xt,!1,i.queue),i=Tn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=sA.bind(null,Xt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function W_(e){var t=Fe();return sS(t,_e,e)}function sS(e,t,n){if(t=Tg(e,t,iS)[0],e=Pu(_s)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ac(t)}catch(r){throw r===bo?Uh:r}else i=t;t=Fe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,uo(9,{destroy:void 0},aA.bind(null,s,n),null)),[i,a,e]}function aA(e,t){e.action=t}function q_(e){var t=Fe(),n=_e;if(n!==null)return sS(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function uo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=Nh(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function aS(){return Fe().memoizedState}function zu(e,t,n,i){var s=Tn();Xt.flags|=e,s.memoizedState=uo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Oh(e,t,n,i){var s=Fe();i=i===void 0?null:i;var a=s.memoizedState.inst;_e!==null&&i!==null&&yg(i,_e.memoizedState.deps)?s.memoizedState=uo(t,a,n,i):(Xt.flags|=e,s.memoizedState=uo(1|t,a,n,i))}function Y_(e,t){zu(8390656,8,e,t)}function Ag(e,t){Oh(2048,8,e,t)}function rA(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=Nh(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rS(e){var t=Fe().memoizedState;return rA({ref:t,nextImpl:e}),function(){if((oe&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function oS(e,t){return Oh(4,2,e,t)}function lS(e,t){return Oh(4,4,e,t)}function cS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uS(e,t,n){n=n!=null?n.concat([e]):null,Oh(4,4,cS.bind(null,t,e),n)}function wg(){}function hS(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&yg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function fS(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&yg(t,i[1]))return i[0];if(i=e(),ja){Js(!0);try{e()}finally{Js(!1)}}return n.memoizedState=[i,t],i}function Cg(e,t,n){return n===void 0||(vs&1073741824)!==0&&(te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sM(),Xt.lanes|=e,ma|=e,n)}function dS(e,t,n,i){return jn(n,t)?n:da.current!==null?(e=Cg(e,n,i),jn(e,t)||(ke=!0),e):(vs&106)===0||(vs&1073741824)!==0&&(te&261930)===0?(ke=!0,e.memoizedState=n):(e=sM(),Xt.lanes|=e,ma|=e,t)}function pS(e,t,n,i,s){var a=le.p;le.p=a!==0&&8>a?a:8;var r=Bt.T,o={};o.types=r!==null?r.types:null,Bt.T=o,Dg(e,!1,t,n);try{var l=s(),c=Bt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=eA(l,i);Dl(e,t,h,Qn(e))}else Dl(e,t,i,Qn(e))}catch(p){Dl(e,t,{then:function(){},status:"rejected",reason:p},Qn())}finally{le.p=a,r!==null&&o.types!==null&&(r.types=o.types),Bt.T=r}}function oA(){}function gm(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=mS(e).queue;pS(e,s,t,Ga,n===null?oA:function(){return gS(e),n(i)})}function mS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ga,baseState:Ga,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:Ga},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gS(e){var t=mS(e);t.next===null&&(t=e.alternate.memoizedState),Dl(e,t.next.queue,{},Qn())}function Rg(){return cn(_o)}function vS(){return Fe().memoizedState}function _S(){return Fe().memoizedState}function lA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Qn();e=ia(n);var i=sa(t,e,n);i!==null&&(Pn(i,t,n),wl(i,t,n)),t={cache:dg()},e.payload=t;return}t=t.return}}function cA(e,t,n){var i=Qn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ih(e)?xS(t,n):(n=ug(e,t,n,i),n!==null&&(Pn(n,e,i),SS(n,t,i)))}function yS(e,t,n){var i=Qn();Dl(e,t,n,i)}function Dl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ih(e))xS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,jn(o,r))return Rh(e,t,s,0),Se===null&&Ch(),!1}catch{}finally{}if(n=ug(e,t,s,i),n!==null)return Pn(n,e,i),SS(n,t,i),!0}return!1}function Dg(e,t,n,i){if(i={lane:2,revertLane:Vg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ih(e)){if(t)throw Error(Q(479))}else t=ug(e,n,i,2),t!==null&&Pn(t,e,2)}function Ih(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function xS(e,t){no=oh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function SS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ax(e,n)}}var ch={readContext:cn,use:Lh,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze,useEffectEvent:ze},MS={readContext:cn,use:Lh,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:Y_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zu(4194308,4,cS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zu(4194308,4,e,t)},useInsertionEffect:function(e,t){zu(4,2,e,t)},useMemo:function(e,t){var n=Tn();t=t===void 0?null:t;var i=e();if(ja){Js(!0);try{e()}finally{Js(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Tn();if(n!==void 0){var s=n(t);if(ja){Js(!0);try{n(t)}finally{Js(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=cA.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:function(e){e=pm(e);var t=e.queue,n=yS.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wg,useDeferredValue:function(e,t){var n=Tn();return Cg(n,e,t)},useTransition:function(){var e=pm(!1);return e=pS.bind(null,Xt,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,s=Tn();if(Zt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),Se===null)throw Error(Q(349));(te&127)!==0||Jx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Y_(Qx.bind(null,i,a,e),[e]),i.flags|=2048,uo(9,{destroy:void 0},Kx.bind(null,i,a,n,t),null),n},useId:function(){var e=Tn(),t=Se.identifierPrefix;if(Zt){var n=Ji,i=Zi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=lh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=nA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rg,useFormState:X_,useActionState:X_,useOptimistic:function(e){var t=Tn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Dg.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Eg,useCacheRefresh:function(){return Tn().memoizedState=lA.bind(null,Xt)},useEffectEvent:function(e){var t=Tn(),n={impl:e};return t.memoizedState=n,function(){if((oe&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},bS={readContext:cn,use:Lh,useCallback:hS,useContext:cn,useEffect:Ag,useImperativeHandle:uS,useInsertionEffect:oS,useLayoutEffect:lS,useMemo:fS,useReducer:Pu,useRef:aS,useState:function(){return Pu(_s)},useDebugValue:wg,useDeferredValue:function(e,t){var n=Fe();return dS(n,_e.memoizedState,e,t)},useTransition:function(){var e=Pu(_s)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:ac(e),t]},useSyncExternalStore:Zx,useId:vS,useHostTransitionStatus:Rg,useFormState:W_,useActionState:W_,useOptimistic:function(e,t){var n=Fe();return tS(n,_e,e,t)},useMemoCache:Eg,useCacheRefresh:_S,useEffectEvent:rS},uA={readContext:cn,use:Lh,useCallback:hS,useContext:cn,useEffect:Ag,useImperativeHandle:uS,useInsertionEffect:oS,useLayoutEffect:lS,useMemo:fS,useReducer:Ap,useRef:aS,useState:function(){return Ap(_s)},useDebugValue:wg,useDeferredValue:function(e,t){var n=Fe();return _e===null?Cg(n,e,t):dS(n,_e.memoizedState,e,t)},useTransition:function(){var e=Ap(_s)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:ac(e),t]},useSyncExternalStore:Zx,useId:vS,useHostTransitionStatus:Rg,useFormState:q_,useActionState:q_,useOptimistic:function(e,t){var n=Fe();return _e!==null?tS(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Eg,useCacheRefresh:_S,useEffectEvent:rS};function wp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=ia(i);s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(Pn(t,e,i),wl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=ia(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(Pn(t,e,i),wl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qn(),i=ia(n);i.tag=2,t!=null&&(i.callback=t),t=sa(e,i,n),t!==null&&(Pn(t,e,n),wl(t,e,n))}};function Z_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Fl(n,i)||!Fl(s,a):!0}function J_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&vm.enqueueReplaceState(t,t.state,null)}function $a(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Me({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function ES(e){$u(e)}function TS(e){console.error(e)}function AS(e){$u(e)}function uh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function K_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function _m(e,t,n){return n=ia(n),n.tag=3,n.payload={element:null},n.callback=function(){uh(e,t)},n}function wS(e){return e=ia(e),e.tag=3,e}function CS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){K_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){K_(t,n,i),typeof s!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function hA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Za(t,n,s,!0),n=dn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return vn===null?_h():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===sh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Op(e,i,s)),!1;case 22:return n.flags|=65536,i===sh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Op(e,i,s)),!1}throw Error(Q(435,n.tag))}return Op(e,i,s),_h(),!1}if(Zt)return t=dn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==rm&&(e=Error(Q(422),{cause:i}),Vl(pi(e,n)))):(i!==rm&&(t=Error(Q(423),{cause:i}),Vl(pi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=pi(i,n),s=_m(e.stateNode,i,s),Tp(e,s),Be!==4&&(Be=2)),!1;var a=Error(Q(520),{cause:i});if(a=pi(a,n),Ol===null?Ol=[a]:Ol.push(a),Be!==4&&(Be=2),t===null)return!0;i=pi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=_m(n.stateNode,i,e),Tp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(oa===null||!oa.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=wS(s),CS(s,e,n,i),Tp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Ug=Error(Q(461)),ke=!1;function Je(e,t,n,i){t.child=e===null?Gx(t,null,n,i):Qa(t,e.child,n,i)}function Q_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ja(t),i=xg(e,t,n,r,a,s),o=Sg(),e!==null&&!ke?(Mg(e,t,s),ys(e,t,s)):(Zt&&o&&Dh(t),t.flags|=1,Je(e,t,i,s),t.child)}function j_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!hg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,RS(e,t,a,i,s)):(e=Lu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Lg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Fl,n(r,i)&&e.ref===t.ref)return ys(e,t,s)}return t.flags|=1,e=ds(a,i),e.ref=t.ref,e.return=t,t.child=e}function RS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Fl(a,i)&&e.ref===t.ref)if(ke=!1,t.pendingProps=i=a,Lg(e,s))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,ys(e,t,s)}return ym(e,t,n,i,s)}function DS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return $_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Iu(t,a!==null?a.cachePool:null),a!==null?V_(t,a):fm(),Wx(t);else return i=t.lanes=536870912,$_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Iu(t,a.cachePool),V_(t,a),ra(),t.memoizedState=null):(e!==null&&Iu(t,null),fm(),ra());return Je(e,t,s,n),t.child}function Ul(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $_(e,t,n,i,s){var a=pg();return a=a===null?null:{parent:Ge._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Iu(t,null),fm(),Wx(t),e!==null&&Za(e,t,i,!0),t.childLanes=s,null}function Bu(e,t){return t=Ph({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ty(e,t,n){return Qa(t,e.child,null,n),e=Bu(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function fA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Zt){if(i.mode==="hidden")return e=Bu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ul(null,e);if(dm(t),(e=Ae)?(e=DM(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},n=Ix(e),n.return=t,t.child=n,sn=t,Ae=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return Bu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(dm(t),s)if(t.flags&256)t.flags&=-257,t=ty(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(ke||Za(e,t,n,!1),s=(n&e.childLanes)!==0,ke||s){if(da.current===null){if(i=Se,i!==null&&(r=rx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,sr(e,r),Pn(i,e,r),Ug;_h()}t=ty(e,t,n)}else e=a.treeContext,Ae=gi(r.nextSibling),sn=t,Zt=!0,na=null,mi=!1,e!==null&&zx(t,e),t=Bu(t,i),t.flags|=134221824;return t}return e=ds(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ym(e,t,n,i,s){return Ja(t),n=xg(e,t,n,i,void 0,s),i=Sg(),e!==null&&!ke?(Mg(e,t,s),ys(e,t,s)):(Zt&&i&&Dh(t),t.flags|=1,Je(e,t,n,s),t.child)}function ey(e,t,n,i,s,a){return Ja(t),t.updateQueue=null,n=Yx(t,i,n,s),qx(e),i=Sg(),e!==null&&!ke?(Mg(e,t,a),ys(e,t,a)):(Zt&&i&&Dh(t),t.flags|=1,Je(e,t,n,a),t.child)}function ny(e,t,n,i,s){if(Ja(t),t.stateNode===null){var a=Yr,r=n.contextType;typeof r=="object"&&r!==null&&(a=cn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=vm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},gg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?cn(r):Yr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(wp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&vm.enqueueReplaceState(a,a.state,null),Rl(t,i,a,s),Cl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=$a(n,o);a.props=l;var c=a.context,h=n.contextType;r=Yr,typeof h=="object"&&h!==null&&(r=cn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&J_(t,a,i,r),Ys=!1;var f=t.memoizedState;a.state=f,Rl(t,i,a,s),Cl(),c=t.memoizedState,o||f!==c||Ys?(typeof p=="function"&&(wp(t,n,p,i),c=t.memoizedState),(l=Ys||Z_(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,um(e,t),r=t.memoizedProps,h=$a(n,r),a.props=h,p=t.pendingProps,f=a.context,c=n.contextType,l=Yr,typeof c=="object"&&c!==null&&(l=cn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||f!==l)&&J_(t,a,i,l),Ys=!1,f=t.memoizedState,a.state=f,Rl(t,i,a,s),Cl();var d=t.memoizedState;r!==p||f!==d||Ys||e!==null&&e.dependencies!==null&&ih(e.dependencies)?(typeof o=="function"&&(wp(t,n,o,i),d=t.memoizedState),(h=Ys||Z_(t,n,h,i,f,d,l)||e!==null&&e.dependencies!==null&&ih(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Pr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Qa(t,e.child,null,s),t.child=Qa(t,null,n,s)):Je(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ys(e,t,s),e}function iy(e,t,n,i){return Ya(),t.flags|=256,Je(e,t,n,i),t.child}var xm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sm(e){return{baseLanes:e,cachePool:Fx()}}function Mm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yn),e}function US(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Zt){if(s?aa(t):ra(),(e=Ae)?(e=DM(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},n=Ix(e),n.return=t,t.child=n,sn=t,Ae=null)):e=null,e===null)throw fa(t);return Wg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ra(),s=t.mode,a=Ph({mode:"hidden",children:a},s),i=ka(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Sm(n),i.childLanes=Mm(e,r,n),t.memoizedState=xm,Ul(null,i)):(aa(t),Ng(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return dA(e,t,a,r,i,l,o,n)}return s?(ra(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=ds(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ds(l,s):(s=ka(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Ul(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Sm(n):(a=s.cachePool,a!==null?(o=Ge._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Fx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Mm(e,r,n),t.memoizedState=xm,Ul(e.child,i)):(aa(t),n=e.child,e=n.sibling,n=ds(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ng(e,t){return t=Ph({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ph(e,t){return e=In(22,e,null,t),e.lanes=0,e}function yu(e,t,n){return Qa(t,e.child,null,n),e=Ng(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(aa(t),t.flags&=-257,yu(e,t,o)):t.memoizedState!==null?(ra(),t.child=e.child,t.flags|=128,null):(ra(),a=s.fallback,r=t.mode,s=Ph({mode:"visible",children:s.children},r),a=ka(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,Qa(t,e.child,null,o),s=t.child,s.memoizedState=Sm(o),s.childLanes=Mm(e,i,o),t.memoizedState=xm,Ul(null,s));if(aa(t),Wg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,Vl({value:s,source:null,stack:null})),yu(e,t,o)}if(ke||Za(e,t,o,!1),i=(o&e.childLanes)!==0,ke||i){if(da.current!==null)return yu(e,t,o);if(i=Se,i!==null&&(s=rx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,sr(e,s),Pn(i,e,s),Ug;return Ym(a)||_h(),yu(e,t,o)}return Ym(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ae=gi(a.nextSibling),sn=t,Zt=!0,na=null,mi=!1,e!==null&&zx(t,e),t=Ng(t,s.children),t.flags|=134221824,t)}function sy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ou(e.return,t,n)}function ay(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&rh(n)===null&&(t=e),e=e.sibling}return t}function xu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Cp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function bm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=hn.current;if(t.flags&128)return kl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,kl(t,r),s==="backwards"&&e!==null?(Cp(e),Je(e,t,i,n),Cp(e)):Je(e,t,i,n),i=Zt?Hl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sy(e,n,t);else if(e.tag===19)sy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=ay(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Cp(t)),xu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&rh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}xu(t,!0,n,null,a,i);break;case"together":xu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=ay(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),xu(t,!1,s,n,a,i)}return t.child}function ry(e,t,n){var i=t.pendingProps;return Qs(t,t.type,i.value),Je(e,t,i.children,n),t.child}function ys(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ma|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Za(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=ds(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ds(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ih(e)))}function pA(e,t,n){switch(t.tag){case 3:Ju(t,t.stateNode.containerInfo),Qs(t,Ge,e.memoizedState.cache),Ya();break;case 27:case 5:Kp(t);break;case 4:Ju(t,t.stateNode.containerInfo);break;case 10:Qs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,dm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return aa(t),t.flags|=128,null;i=Za(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?US(e,t,n):(aa(t),e=ys(e,t,n),e!==null?e.sibling:null)}aa(t);break;case 19:if(t.flags&128)return bm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Za(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return bm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),kl(t,hn.current),i)break;return null;case 22:return t.lanes=0,DS(e,t,n,t.pendingProps);case 24:Qs(t,Ge,e.memoizedState.cache)}return ys(e,t,n)}function NS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Lg(e,n)&&(t.flags&128)===0)return ke=!1,pA(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,Zt&&(t.flags&1048576)!==0&&Px(t,Hl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ba(t.elementType),t.type=e,typeof e=="function")hg(e)?(i=$a(e,i),t.tag=1,t=ny(null,t,e,i,n)):(t.tag=0,t=ym(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===jm){t.tag=11,t=Q_(null,t,e,i,n);break t}else if(s===$m){t.tag=14,t=j_(null,t,e,i,n);break t}else if(s===qi){t.tag=10,t.type=e,t=ry(null,t,n);break t}}throw t=Zp(e)||e,Error(Q(306,t,""))}}return t;case 0:return ym(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=$a(i,t.pendingProps),ny(e,t,i,s,n);case 3:t:{if(Ju(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,um(e,t),Rl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Qs(t,Ge,i),i!==a.cache&&lm(t,[Ge],n,!0),Cl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=iy(e,t,i,n);break t}else if(i!==s){s=pi(Error(Q(424)),t),Vl(s),t=iy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=gi(e.firstChild),sn=t,Zt=!0,na=null,mi=!0,n=Gx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ya(),i===s){t=ys(e,t,n);break t}Je(e,t,i,n)}t=t.child}return t;case 26:return Pr(e,t),e===null?(n=Ly(t.type,null,t.pendingProps,null))?t.memoizedState=n:Zt||(t.stateNode=SM(t.type,t.pendingProps,ea.current,t)):t.memoizedState=Ly(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kp(t),e===null&&Zt&&(i=t.stateNode=UM(t.type,t.pendingProps,ea.current),sn=t,mi=!0,s=Ae,va(t.type)?(Zm=s,Ae=gi(i.firstChild)):Ae=s),Je(e,t,t.pendingProps.children,n),Pr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Zt&&((s=i=Ae)&&(i=rw(i,t.type,t.pendingProps,mi),i!==null?(t.stateNode=i,sn=t,Ae=gi(i.firstChild),mi=!1,s=!0):s=!1),s||fa(t)),Kp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Xm(s,a)?i=null:r!==null&&Xm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=xg(e,t,iA,null,null,n),_o._currentValue=s),Pr(e,t),Je(e,t,i,n),t.child;case 6:return e===null&&Zt&&((e=n=Ae)&&(n=ow(n,t.pendingProps,mi),n!==null?(t.stateNode=n,sn=t,Ae=null,e=!0):e=!1),e||fa(t)),null;case 13:return US(e,t,n);case 4:return Ju(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Qa(t,null,i,n):Je(e,t,i,n),t.child;case 11:return Q_(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Pr(e,t),Je(e,t,i,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:return ry(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Ja(t),s=cn(s),i=i(s),t.flags|=1,Je(e,t,i,n),t.child;case 14:return j_(e,t,t.type,t.pendingProps,n);case 15:return RS(e,t,t.type,t.pendingProps,n);case 19:return bm(e,t,n);case 31:return fA(e,t,n);case 22:return DS(e,t,n,t.pendingProps);case 24:return Ja(t),i=cn(Ge),e===null?(s=pg(),s===null&&(s=Se,a=dg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},gg(t),Qs(t,Ge,s)):((e.lanes&n)!==0&&(um(e,t),Rl(t,null,null,n),Cl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Qs(t,Ge,i)):(i=a.cache,Qs(t,Ge,i),i!==s.cache&&lm(t,[Ge],n,!0))),Je(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Zt&&Dh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Pr(e,t),Je(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function us(e){e.flags|=4}function Rp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Py(t,i):Py(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(oM())e.flags|=8192;else throw Wa=sh,mg}else e.flags&=-16777217}function oy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!IM(t))if(oM())e.flags|=8192;else throw Wa=sh,mg}function Su(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ix():536870912,e.lanes|=t,ho|=t)}function pl(e,t){if(!Zt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function mA(e,t,n){var i=t.pendingProps;switch(fg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ps(Ge),oo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Or(t)?us(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ep())),Te(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(us(t),a!==null?(Te(t),oy(t,a)):(Te(t),Rp(t,s,null,i,n))):a?a!==e.memoizedState?(us(t),Te(t),oy(t,a)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&us(t),Te(t),Rp(t,s,e,i,n)),null;case 27:if(Ku(t),n=ea.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Te(t),t.subtreeFlags&=-33554433,null}e=Ki.current,Or(t)?O_(t,e):(e=UM(s,i,n),t.stateNode=e,us(t))}return Te(t),t.subtreeFlags&=-33554433,null;case 5:if(Ku(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Te(t),t.subtreeFlags&=-33554433,null}if(a=Ki.current,Or(t))O_(t,a);else{var r=Yl(ea.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[ln]=t,a[Bn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(fn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&us(t)}}return Te(t),t.subtreeFlags&=-33554433,Rp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=ea.current,Or(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=sn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||yM(e.nodeValue,n)),e||fa(t,!0)}else e=Yl(e).createTextNode(i),e[ln]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Or(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[ln]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=Ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Or(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[ln]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),s=!1}else s=Ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Su(t,t.updateQueue),Te(t),null);case 4:return oo(),e===null&&Gg(t.stateNode.containerInfo),t.flags|=67108864,Te(t),null;case 10:return ps(t.type),Te(t),null;case 19:if(_g(t),i=t.memoizedState,i===null)return Te(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)pl(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=rh(e),a!==null){for(t.flags|=128,pl(i,!1),e=a.updateQueue,t.updateQueue=e,Su(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ox(n,e),n=n.sibling;return kl(t,hn.current&1|2),Zt&&hs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Zn()>gh&&(t.flags|=128,s=!0,pl(i,!1),t.lanes=4194304)}else{if(!s)if(e=rh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Su(t,e),pl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Zt)return Te(t),null}else 2*Zn()-i.renderingStartTime>gh&&n!==536870912&&(t.flags|=128,s=!0,pl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Zn(),e.sibling=null,a=hn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Zt?kl(t,a):(n=a,we(dn,t),we(hn,n),vn===null&&(vn=t)),Zt&&hs(t,i.treeForkCount),e}return Te(t),null;case 22:case 23:return Wn(t),vg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Su(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&un(Xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ps(Ge),Te(t),null;case 25:return null;case 30:return t.flags|=33554432,Te(t),null}throw Error(Q(156,t.tag))}function gA(e,t){switch(fg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ps(Ge),oo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ku(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error(Q(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _g(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return oo(),null;case 10:return ps(t.type),null;case 22:case 23:return Wn(t),vg(),e!==null&&un(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ps(Ge),null;case 25:return null;default:return null}}function LS(e,t){switch(fg(t),t.tag){case 3:ps(Ge),oo();break;case 26:case 27:case 5:Ku(t);break;case 4:oo();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:_g(t);break;case 10:ps(t.type);break;case 22:case 23:Wn(t),vg(),e!==null&&un(Xa);break;case 24:ps(Ge)}}function rc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){de(t,t.return,o)}}function pa(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){de(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){de(t,t.return,h)}}function OS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xx(t,n)}catch(i){de(e,e.return,i)}}}function IS(e,t,n){n.props=$a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function Xi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=gs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=TM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new $n(e);zn(e.child,!1,sw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){de(e,t,o)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){de(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){de(e,t,s)}else n.current=null}function hh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)RM(e.stateNode,t[n])}function ly(e){for(var t=e.return;t!==null&&(Ig(t)&&RM(e.stateNode,t.stateNode),!Og(t));)t=t.return}function Nl(e){for(var t=e.return;t!==null&&(Ig(t)&&aw(e.stateNode,t.stateNode),!Og(t));)t=t.return}function Og(e){return e.tag===5||e.tag===3||e.tag===27}function Ig(e){return e&&e.tag===7&&e.stateNode!==null}function Em(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){de(e,e.return,s)}}function Dp(e,t,n){try{var i=e.stateNode;HA(i,e.type,n,t),i[Bn]=t}catch(s){de(e,e.return,s)}}function PS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function Up(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||PS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi)),hh(e,i),ae=!0;else if(s!==4&&(s===27&&(hh(e,i),i=null,va(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Tm(e,t,n,i),e=e.sibling;e!==null;)Tm(e,t,n,i),e=e.sibling}function fh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),hh(e,i),ae=!0;else if(s!==4&&(s===27&&(hh(e,i),i=null,va(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(fh(e,t,n,i),e=e.sibling;e!==null;)fh(e,t,n,i),e=e.sibling}function zS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);fn(t,i,n),t[ln]=e,t[Bn]=n}catch(a){de(e,e.return,a)}}var dh=!1,qn=null;function cy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(dh=!0)}var Wi=null;function uy(){var e=Wi;return Wi=null,e}var On=0;function Eo(e,t,n,i,s){return On=0,BS(e.child,t,n,i,s)}function BS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Wm(r);i.push(o),o.view&&(a=!0)}else a||Wm(r).view&&(a=!0);dh=!0,MM(r,On===0?t:t+"_"+On,n),On++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||BS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ji(e,t){for(;e!==null;)e.tag===5?bM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ji(e.child,t)),e=e.sibling}function Fu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Fu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=Ms(t.default,t.share),t!=="none"&&(Eo(e,n,t,null,!1)||ji(e.child,!1))}e=e.sibling}}function Am(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=gs(i,n),a=Ms(i.default,n.paired?i.share:i.enter);a!=="none"?Eo(e,s,a,null,!1)?(Fu(e),n.paired||t||fo(e,i.onEnter)):ji(e.child,!1):Fu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Am(e,t),e=e.sibling;else Fu(e)}function wm(e){if(qn!==null&&qn.size!==0){var t=qn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Ms(n.default,n.share);if(a!=="none"&&(Eo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,fo(e,n.onShare)):ji(e.child,!1)),t.delete(i),t.size===0)break}}}wm(e)}e=e.sibling}}}function Cm(e){if(e.tag===30){var t=e.memoizedProps,n=gs(t,e.stateNode),i=qn!==null?qn.get(n):void 0,s=Ms(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Eo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,qn.delete(n),fo(e,t.onShare)):fo(e,t.onExit):ji(e.child,!1)),qn!==null&&wm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Cm(e),e=e.sibling;else qn!==null&&wm(e)}function FS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=gs(t,e.stateNode);t=Ms(t.default,t.update),e.flags&=-5,t!=="none"&&Eo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&FS(e);e=e.sibling}}function Rm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ji(e.child,!1))}Rm(e)}e=e.sibling}}function Hu(e){if(e.tag===30)e.stateNode.paired=null,ji(e.child,!1),Rm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hu(e),e=e.sibling;else Rm(e)}function HS(e){for(e=e.child;e!==null;)e.tag===30?ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&HS(e),e=e.sibling}function Pg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&On<a.length){var c=a[On],h=Wm(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var f=h.rect;p=p.y!==f.y||p.x!==f.x||p.height!==f.height||p.width!==f.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&MM(l,On===0?n:n+"_"+On,s),o&&(e.flags&4)!==0||(Wi===null&&(Wi=[]),Wi.push(l,On===0?i:i+"_"+On,t.memoizedProps)),On++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Pg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function VS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=gs(n,i),a=Ms(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(qA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;On=0,s=Pg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||fo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&VS(e,t);e=e.sibling}}var tn=!1,ue=!1,Vi=!1,Np=!1,hy=typeof WeakSet=="function"?WeakSet:Set,en=null,Gi=!1,Ml=!1,ph=!1,Dm=!1;function vA(e,t,n){if(e=e.containerInfo,Gm=yo,e=Ax(e),lg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,f=e,d=null;e:for(;;){for(var g;f!==i||a!==0&&f.nodeType!==3||(l=o+a),f!==r||s!==0&&f.nodeType!==3||(c=o+s),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break e;if(d===i&&++h===a&&(l=o),d===r&&++p===s&&(c=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(km={focusedElem:e,selectionRange:i},yo=!1,n=(n&335544064)===n,en=t,t=n?9270:1024;en!==null;){if(e=en,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Cm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&cy(e),Mu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Cm(i),Mu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&cy(e),Mu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,en=i):(n&&FS(e),Mu(n))}}qn=null}function Mu(e){for(;en!==null;){var t=en,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=$a(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){de(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)qm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":qm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=gs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Ms(s.default,s.update),s!=="none"&&Eo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,en=i;break}en=t.return}}function GS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n),i&4&&rc(5,n);break;case 1:if(ki(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){de(n,n.return,r)}else{var s=$a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){de(n,n.return,r)}}i&64&&OS(n),i&512&&Xi(n,n.return);break;case 3:if(ki(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xx(e,t)}catch(r){de(n,n.return,r)}}break;case 27:t===null&&i&4&&zS(n);case 26:case 5:ki(e,n),t===null&&i&4&&Em(n),i&512&&Xi(n,n.return);break;case 12:ki(e,n);break;case 31:ki(e,n),i&4&&qS(e,n);break;case 13:ki(e,n),i&4&&YS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=RA.bind(null,n),lw(e,n))));break;case 22:if(i=n.memoizedState!==null||tn,!i){var a=t!==null&&t.memoizedState!==null||ue;t=tn,s=ue,tn=i,(ue=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ai(e,n,i)):ki(e,n),tn=t,ue=s}break;case 30:ki(e,n),i&512&&Xi(n,n.return);break;case 7:i&512&&Xi(n,n.return);default:ki(e,n)}}function Um(e,t){for(e=e.child;e!==null;)kS(e,t),e=e.sibling}function kS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){de(e,e.return,l)}Nm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ae=!0}catch(l){de(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?wy(o,!0):wy(e.stateNode,!1)}catch(l){de(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Um(e,t);break;default:Um(e,t)}}function Nm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:kS(n,i);break t;case 22:n.memoizedState===null&&Nm(n,i);break t;default:Nm(n,i)}}e=e.sibling}}function XS(e){var t=e.alternate;t!==null&&(e.alternate=null,XS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,Nn=!1;function Ti(e,t,n){for(n=n.child;n!==null;)WS(e,t,n),n=n.sibling}function WS(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 26:ue||on(n,t),Ti(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ue&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ue||on(n,t),Nl(n);var i=Ne,s=Nn;va(n.type)&&(Ne=n.stateNode,Nn=!1),Ti(e,t,n),NM(n.stateNode,n.type,n.memoizedProps),Ne=i,Nn=s;break;case 5:ue||on(n,t),Nl(n);case 6:if(n.tag===6&&Nl(n),i=Ne,s=Nn,Ne=null,Ti(e,t,n),Ne=i,Nn=s,Ne!==null)if(Nn)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode),ae=!0}catch(a){de(n,t,a)}else try{Ne.removeChild(n.stateNode),ae=!0}catch(a){de(n,t,a)}break;case 18:Ne!==null&&(Nn?(e=Ne,Ay(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),xo(e)):Ay(Ne,n.stateNode));break;case 4:i=Ne,s=Nn,Ne=n.stateNode.containerInfo,Nn=!0,Ti(e,t,n),Ne=i,Nn=s;break;case 0:case 11:case 14:case 15:pa(2,n,t),ue||pa(4,n,t),Ti(e,t,n);break;case 1:ue||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&IS(n,t,i)),Ti(e,t,n);break;case 21:Ti(e,t,n);break;case 22:ue=(i=ue)||n.memoizedState!==null,Ti(e,t,n),ue=i;break;case 30:on(n,t),Ti(e,t,n);break;case 7:ue||on(n,t),Ti(e,t,n);break;default:Ti(e,t,n)}}function qS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xo(e)}catch(n){de(t,t.return,n)}}}function YS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xo(e)}catch(n){de(t,t.return,n)}}function _A(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hy),t;default:throw Error(Q(435,e.tag))}}function bu(e,t){var n=_A(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=DA.bind(null,e,i);i.then(s,s)}})}function bn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(va(l.type)){Ne=l.stateNode,Nn=!1;break t}break;case 5:Ne=l.stateNode,Nn=!1;break t;case 3:case 4:Ne=l.stateNode.containerInfo,Nn=!0;break t}l=l.return}if(Ne===null)throw Error(Q(160));WS(r,o,a),Ne=null,Nn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ZS(t,e,n),t=t.sibling}var wi=null;function ZS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}bn(t,e,n),En(e),s&4&&(pa(3,e,e.return),rc(3,e),pa(5,e,e.return));break;case 1:bn(t,e,n),En(e),s&512&&(ue||i===null||on(i,i.return)),s&64&&tn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=wi,bn(t,e,n),En(e),s&512&&(ue||i===null||on(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(tn)e.stateNode=SM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[nc]||i[ln]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),fn(i,t,n),i[ln]=e,nn(i),t=i;break t;case"link":if(a=Iy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),fn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Iy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),fn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[ln]=e,nn(i),t=i}e.stateNode=t}else tn||Jm(a,e.type,e.stateNode);else e.stateNode=Oy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ue||t.parentNode.removeChild(t)):s.count--,n===null?tn||Jm(a,e.type,e.stateNode):Oy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Dp(e,e.memoizedProps,i.memoizedProps);break;case 27:bn(t,e,n),En(e),s&512&&(ue||i===null||on(i,i.return)),i!==null&&s&4&&Dp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Vi,Vi=!1,bn(t,e,n),Vi=a,En(e),s&512&&(ue||i===null||on(i,i.return)),e.flags&32){t=e.stateNode;try{co(t,""),ae=!0}catch(h){de(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Dp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Np=!0);break;case 6:if(bn(t,e,n),En(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ae=!0}catch(h){de(e,e.return,h)}}break;case 3:if(ae=!1,Xu=null,a=wi,wi=Zl(t.containerInfo),bn(t,e,n),wi=a,En(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{xo(t.containerInfo)}catch(h){de(e,e.return,h)}Np&&(Np=!1,JS(e)),ae=!1;break;case 4:s=Vi,Vi=tn,i=v_(),a=wi,wi=Zl(e.stateNode.containerInfo),bn(t,e,n),En(e),wi=a,ae&&Ml&&(ph=!0),ae=i,Vi=s;break;case 12:bn(t,e,n),En(e);break;case 31:bn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 13:bn(t,e,n),En(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(zh=Zn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=tn,l=ue,c=Vi;tn=o||a,Vi=c||a,ue=l||r,bn(t,e,n),ue=l,Vi=c,tn=o,En(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||tn||ue||(t=r||ue,n=tn,i=ue,tn=a||tn,ue=t,Ws(e,2),tn=n,ue=i),!a&&Vi||Um(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,bu(e,n))));break;case 19:bn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 30:s&512&&(ue||i===null||on(i,i.return)),s=v_(),a=Ml,r=(n&335544064)===n,o=e.memoizedProps,Ml=r&&Ms(o.default,o.update)!=="none",bn(t,e,n),En(e),r&&i!==null&&ae&&(e.flags|=4),Ml=a,ae=s;break;case 21:break;case 7:s&512&&(ue||i===null||on(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:bn(t,e,n),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(PS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Ig(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Og(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=Up(e);fh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(co(c,""),n.flags&=-33);var h=Up(e);fh(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,f=Up(e);Tm(e,f,p,r);break;default:throw Error(Q(161))}}catch(d){de(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function JS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;JS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,yo=!0,t.reset(),yo=!1),e=e.sibling}}function Ir(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)KS(t,e),t=t.sibling;else VS(t,!1)}function KS(e,t){var n=e.alternate;if(n===null)Am(e,!1);else switch(e.tag){case 3:if(Dm=Gi=!1,uy(),Ir(t,e),!Gi&&!ph){if(e=Wi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];bM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dm=!0}Wi=null;break;case 5:Ir(t,e);break;case 4:i=Gi,Gi=!1,Ir(t,e),Gi&&(ph=!0),Gi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Am(e,!1):Ir(t,e));break;case 30:i=Gi,s=uy(),Gi=!1,Ir(t,e),Gi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=gs(a,r),r=gs(n.memoizedProps,r);var o=Ms(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,On=0,t=Pg(e,n,t,r,o,a,!0),On!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(fo(e,e.memoizedProps.onUpdate),Wi=s):s!==null&&(s.push.apply(s,Wi),Wi=s),Gi=(e.flags&32)!==0?!0:i;break;default:Ir(t,e)}}function ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)GS(e,t.alternate,t),t=t.sibling}function Ws(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),Ws(n,i);break;case 1:on(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&IS(n,n.return,s),Ws(n,i);break;case 27:(i&2)!==0&&NM(n.stateNode,n.type,n.memoizedProps);case 5:on(n,n.return),n.tag!==5&&n.tag!==27||Nl(n),Ws(n,i);break;case 6:Nl(n);break;case 26:on(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ue||s.parentNode.removeChild(s),Ws(n,i);break;case 22:n.memoizedState===null&&Ws(n,i);break;case 30:on(n,n.return),Ws(n,i);break;case 7:on(n,n.return);default:Ws(n,i)}e=e.sibling}}function Ai(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ai(s,a,n),rc(4,a);break;case 1:if(Ai(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){de(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)kx(c[s],l)}catch(h){de(i,i.return,h)}}o&&r&64&&OS(a),Xi(a,a.return);break;case 27:(n&2)!==0&&zS(a);case 5:a.tag!==5&&a.tag!==27||ly(a),Ai(s,a,n),o&&i===null&&r&4&&Em(a),Xi(a,a.return);break;case 6:ly(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||tn||Jm(Zl(l.ownerDocument),a.type,l),Ai(s,a,n),o&&i===null&&r&4&&Em(a),Xi(a,a.return);break;case 12:Ai(s,a,n);break;case 31:Ai(s,a,n),o&&r&4&&qS(s,a);break;case 13:Ai(s,a,n),o&&r&4&&YS(s,a);break;case 22:a.memoizedState===null&&Ai(s,a,n),Xi(a,a.return);break;case 30:Ai(s,a,n),Xi(a,a.return);break;case 7:Xi(a,a.return);default:Ai(s,a,n)}t=t.sibling}}function zg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sc(n))}function Bg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sc(e))}function ci(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)QS(e,t,n,i),t=t.sibling;else s&&HS(t)}function QS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Hu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ci(e,t,n,i),a&2048&&rc(9,t);break;case 1:ci(e,t,n,i);break;case 3:ci(e,t,n,i),s&&Dm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&sc(a)));break;case 12:if(a&2048){ci(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){de(t,t.return,c)}}else ci(e,t,n,i);break;case 31:ci(e,t,n,i);break;case 13:ci(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Hu(o),r._visibility&2?ci(e,t,n,i):Ll(e,t)):(s&&o!==null&&o.memoizedState!==null&&Hu(t),r._visibility&2?ci(e,t,n,i):(r._visibility|=2,zr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&zg(o,t);break;case 24:ci(e,t,n,i),a&2048&&Bg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ji(a.child,!0),ji(t.child,!0))),ci(e,t,n,i);break;default:ci(e,t,n,i)}}function zr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:zr(a,r,o,l,s),rc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?zr(a,r,o,l,s):Ll(a,r):(h._visibility|=2,zr(a,r,o,l,s)),s&&c&2048&&zg(r.alternate,r);break;case 24:zr(a,r,o,l,s),s&&c&2048&&Bg(r.alternate,r);break;default:zr(a,r,o,l,s)}t=t.sibling}}function Ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ll(n,i),s&2048&&zg(i.alternate,i);break;case 24:Ll(n,i),s&2048&&Bg(i.alternate,i);break;default:Ll(n,i)}t=t.sibling}}var Fa=8192;function Pa(e,t,n){if(e.subtreeFlags&Fa)for(e=e.child;e!==null;)jS(e,t,n),e=e.sibling}function jS(e,t,n){switch(e.tag){case 26:Pa(e,t,n),e.flags&Fa&&(e.memoizedState!==null?Mw(n,wi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&zy(n,e)));break;case 5:Pa(e,t,n),e.flags&Fa&&(e=e.stateNode,(t&335544128)===t&&zy(n,e));break;case 3:case 4:var i=wi;wi=Zl(e.stateNode.containerInfo),Pa(e,t,n),wi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Fa,Fa=16777216,Pa(e,t,n),Fa=i):Pa(e,t,n));break;case 30:if((e.flags&Fa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,qn===null&&(qn=new Map),qn.set(i,s)}Pa(e,t,n);break;default:Pa(e,t,n)}}function $S(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,eM(i,e)}$S(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tM(e),e=e.sibling}function tM(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&pa(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vu(e)):ml(e);break;default:ml(e)}}function Vu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,eM(i,e)}$S(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pa(8,t,t.return),Vu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Vu(t));break;default:Vu(t)}e=e.sibling}}function eM(e,t){for(;en!==null;){var n=en;switch(n.tag){case 0:case 11:case 15:pa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:sc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,en=i;else t:for(n=e;en!==null;){i=en;var s=i.sibling,a=i.return;if(XS(i),i===n){en=null;break t}if(s!==null){s.return=a,en=s;break t}en=a}}}var yA={getCacheForType:function(e){var t=cn(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return cn(Ge).controller.signal}},xA=typeof WeakMap=="function"?WeakMap:Map,oe=0,Se=null,Qt=null,te=0,he=0,kn=null,js=!1,To=!1,Fg=!1,xs=0,Be=0,ma=0,qa=0,mh=0,Yn=0,ho=0,Ol=null,Ln=null,Lm=!1,zh=0,nM=0,gh=1/0,vh=null,oa=null,Ie=0,Ri=null,tr=null,Qi=0,Om=0,Im=null,iM=null,so=null,ao=null,ro=null,Il=0,Gu=null;function Qn(){return(oe&2)!==0&&te!==0?te&-te:Bt.T!==null?Vg():ox()}function sM(){if(Yn===0)if((te&536870912)===0||Zt){var e=uu;uu<<=1,(uu&3932160)===0&&(uu=262144),Yn=e}else Yn=536870912;return e=dn.current,e!==null&&(e.flags|=32),Yn}function fo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=TM(gs(e.memoizedProps,n))),ao===null&&(ao=[]),ao.push(t.bind(null,i))}}function Pn(e,t,n){(e===Se&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(po(e,0),$s(e,te,Yn,!1)),ec(e,n),((oe&2)===0||e!==Se)&&(e===Se&&((oe&2)===0&&(qa|=n),Be===4&&$s(e,te,Yn,!1)),ts(e))}function aM(e,t,n){if((oe&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||tc(e,t),s=i?bA(e,t):Lp(e,t,!0),a=i;do{if(s===0){To&&!i&&$s(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!SA(n)){s=Lp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Ol;var l=o.current.memoizedState.isDehydrated;if(l&&(po(o,r).flags|=256),r=Lp(o,r,!1),r!==2&&r!==6){if(Fg&&!l){o.errorRecoveryDisabledLanes|=a,qa|=a,s=4;break t}a=Ln,Ln=s,a!==null&&(Ln===null?Ln=a:Ln.push.apply(Ln,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){po(e,0),$s(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:$s(i,t,Yn,!js);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=zh+300-Zn(),10<s)){if($s(i,t,Yn,!js),bh(i,0,!0)!==0)break t;Qi=t,i.timeoutHandle=kg(fy.bind(null,i,n,Ln,vh,Lm,t,Yn,qa,ho,js,a,"Throttled",-0,0),s);break t}fy(i,n,Ln,vh,Lm,t,Yn,qa,ho,js,a,null,-0,0)}}break}while(!0);ts(e)}function fy(e,t,n,i,s,a,r,o,l,c,h,p,f,d){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(p=null,(x||g&8192||(g&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},qn=null,jS(t,a,p),x&&(g=p,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=Jl.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?zh-Zn():(a&4194048)===a?nM-Zn():0,g=bw(p,g),g!==null)){Qi=a,e.cancelPendingCommit=g(py.bind(null,e,t,a,n,i,s,r,o,l,c,h,p,null,f,d)),$s(e,a,r,!c);return}py(e,t,a,n,i,s,r,o,l,c,h,p)}function SA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!jn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $s(e,t,n,i){t=nx(e,t),t&=~mh,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Kn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&sx(e,n,t)}function Bh(){return(oe&6)===0?(oc(0,!1),!1):!0}function Hg(){if(Qt!==null){if(he===0)var e=Qt.return;else e=Qt,fs=ar=null,bg(e),eo=null,Gl=0,e=Qt;for(;e!==null;)LS(e.alternate,e),e=e.return;Qt=null}}function po(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,kA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qi=0,Hg(),Se=e,Qt=n=ds(e.current,null),te=t,he=0,kn=null,js=!1,To=tc(e,t),Fg=!1,ho=Yn=mh=qa=ma=Be=0,Ln=Ol=null,Lm=!1,xs=nx(e,t),Ch(),n}function rM(e,t){Xt=null,Bt.H=ch,t===bo||t===Uh?(t=F_(),he=3):t===mg?(t=F_(),he=4):he=t===Ug?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kn=t,Qt===null&&(Be=1,uh(e,pi(t,e.current)))}function oM(){var e=dn.current;return e===null?!0:(te&4194048)===te?vn===null:(te&62914560)===te||(te&536870912)!==0?e===vn:!1}function lM(){var e=Bt.H;return Bt.H=ch,e===null?ch:e}function cM(){var e=Bt.A;return Bt.A=yA,e}function _h(){Be=4,js||(te&4194048)!==te&&dn.current!==null||(To=!0),(ma&134217727)===0&&(qa&134217727)===0||Se===null||$s(Se,te,Yn,!1)}function Lp(e,t,n){var i=oe;oe|=2;var s=lM(),a=cM();(Se!==e||te!==t)&&(vh=null,po(e,t)),t=!1;var r=Be;t:do try{if(he!==0&&Qt!==null){var o=Qt,l=kn;switch(he){case 8:Hg(),r=6;break t;case 3:case 2:case 9:case 6:dn.current===null&&(t=!0);var c=he;if(he=0,kn=null,Kr(e,o,l,c),n&&To){r=0;break t}break;default:c=he,he=0,kn=null,Kr(e,o,l,c)}}MA(),r=Be;break}catch(h){rM(e,h)}while(!0);return t&&e.shellSuspendCounter++,fs=ar=null,oe=i,Bt.H=s,Bt.A=a,Qt===null&&(Se=null,te=0,Ch()),r}function MA(){for(;Qt!==null;)uM(Qt)}function bA(e,t){var n=oe;oe|=2;var i=lM(),s=cM();Se!==e||te!==t?(vh=null,gh=Zn()+500,po(e,t)):To=tc(e,t);t:do try{if(he!==0&&Qt!==null){t=Qt;var a=kn;e:switch(he){case 1:he=0,kn=null,Kr(e,t,a,1);break;case 2:case 9:if(B_(a)){he=0,kn=null,dy(t);break}t=function(){he!==2&&he!==9||Se!==e||(he=7),ts(e)},a.then(t,t);break t;case 3:he=7;break t;case 4:he=5;break t;case 7:B_(a)?(he=0,kn=null,dy(t)):(he=0,kn=null,Kr(e,t,a,7));break;case 5:var r=null;switch(Qt.tag){case 26:r=Qt.memoizedState;case 5:case 27:var o=Qt;if(r?IM(r):o.stateNode.complete){he=0,kn=null;var l=o.sibling;if(l!==null)Qt=l;else{var c=o.return;c!==null?(Qt=c,Fh(c)):Qt=null}break e}}he=0,kn=null,Kr(e,t,a,5);break;case 6:he=0,kn=null,Kr(e,t,a,6);break;case 8:Hg(),Be=6;break t;default:throw Error(Q(462))}}EA();break}catch(h){rM(e,h)}while(!0);return fs=ar=null,Bt.H=i,Bt.A=s,oe=n,Qt!==null?0:(Se=null,te=0,Ch(),Be)}function EA(){for(;Qt!==null&&!VE();)uM(Qt)}function uM(e){var t=NS(e.alternate,e,xs);e.memoizedProps=e.pendingProps,t===null?Fh(e):Qt=t}function dy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ey(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=ey(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:bg(t);var i=t;i===sn&&(Zt?(nh(i),i.tag===5&&i.stateNode!=null&&(Ae=i.stateNode)):(nh(i),Zt=!0));default:LS(n,t),t=Qt=Ox(t,xs),t=NS(n,t,xs)}e.memoizedProps=e.pendingProps,t===null?Fh(e):Qt=t}function Kr(e,t,n,i){fs=ar=null,bg(t),eo=null,Gl=0;var s=t.return;try{if(hA(e,s,t,n,te)){Be=1,uh(e,pi(n,e.current)),Qt=null;return}}catch(a){if(s!==null)throw Qt=s,a;Be=1,uh(e,pi(n,e.current)),Qt=null;return}t.flags&32768?(Zt||i===1?e=!0:To||(te&536870912)!==0?e=!1:(js=e=!0,(i===2||i===9||i===3||i===6)&&(i=dn.current,i!==null&&i.tag===13&&(i.flags|=16384))),hM(t,e)):Fh(t)}function Fh(e){var t=e;do{if((t.flags&32768)!==0){hM(t,js);return}e=t.return;var n=mA(t.alternate,t,xs);if(n!==null){Qt=n;return}if(t=t.sibling,t!==null){Qt=t;return}Qt=t=e}while(t!==null);Be===0&&(Be=5)}function hM(e,t){do{var n=gA(e.alternate,e);if(n!==null){n.flags&=32767,Qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qt=e;return}Qt=e=n}while(e!==null);Be=6,Qt=null}function py(e,t,n,i,s,a,r,o,l,c,h,p){e.cancelPendingCommit=null;do Hh();while(Ie!==0);if((oe&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===Se&&(Qt=Se=null,te=0),tr=t,Ri=e,Qi=n,Im=s,iM=i,TA(e,t,n,r,o,l,p)}}function TA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Om=o,o|=cg,QE(e,n,o,i,s,a),ao=null,(n&335544064)===n?(ro=$T(e),i=10262):(ro=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,UA(Qu,function(){return Fm(),null})):(e.callbackNode=null,e.callbackPriority=0),dh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Bt.T,Bt.T=null,s=le.p,le.p=2,a=oe,oe|=4;try{vA(e,t,n)}finally{oe=a,le.p=s,Bt.T=i}}Ie=1,dh?so=JA(r,e.containerInfo,ro,Pm,zm,wA,Bm,Fm,AA,null,null):(Pm(),zm(),Bm())}function AA(e){if(Ie!==0){var t=Ri.onRecoverableError;t(e,{componentStack:null})}}function wA(){Ie===3&&(Ie=0,KS(tr,Ri),Ie=4)}function Pm(){if(Ie===1){Ie=0;var e=Ri,t=tr,n=Qi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Bt.T,Bt.T=null;var s=le.p;le.p=2;var a=oe;oe|=4;try{Ml=ph=!1,ZS(t,e,n),n=km;var r=Ax(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Tx(o.ownerDocument.documentElement,o)){if(l!==null&&lg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,f=p&&p.defaultView||window;if(f.getSelection){var d=f.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!d.extend&&x>m&&(r=m,m=x,x=r);var u=D_(o,x),_=D_(o,m);if(u&&_&&(d.rangeCount!==1||d.anchorNode!==u.node||d.anchorOffset!==u.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var y=p.createRange();y.setStart(u.node,u.offset),d.removeAllRanges(),x>m?(d.addRange(y),d.extend(_.node,_.offset)):(y.setEnd(_.node,_.offset),d.addRange(y))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}yo=!!Gm,km=Gm=null}finally{oe=a,le.p=s,Bt.T=i}}e.current=t,Ie=2}}function zm(){if(Ie===2){Ie=0;var e=Ri,t=tr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Bt.T,Bt.T=null;var i=le.p;le.p=2;var s=oe;oe|=4;try{GS(e,t.alternate,t)}finally{oe=s,le.p=i,Bt.T=n}}Ie=3}}function Bm(){if(Ie===4||Ie===3){Ie=0;var e=so;so=null,GE();var t=Ri,n=tr,i=Qi,s=iM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ie=5:(Ie=0,tr=Ri=null,fM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(oa=null),ng(i),n=n.stateNode,Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot($l,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Bt.T,a=le.p,le.p=2,Bt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Bt.T=n,le.p=a}}if(s=ao,r=ro,ro=null,s!==null&&(ao=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Qi&3)!==0&&Hh(),ts(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Gu?Il++:(Il=0,Gu=t):(Il=0,Gu=null),oc(0,!1)}}function fM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sc(t)))}function Hh(){return so!==null&&(so.skipTransition(),so=null),Pm(),zm(),Bm(),Fm()}function Fm(){if(Ie!==5)return!1;var e=Ri,t=Om;Om=0;var n=ng(Qi),i=Bt.T,s=le.p;try{le.p=32>n?32:n,Bt.T=null,n=Im,Im=null;var a=Ri,r=Qi;if(Ie=0,tr=Ri=null,Qi=0,(oe&6)!==0)throw Error(Q(331));var o=oe;if(oe|=4,tM(a.current),QS(a,a.current,r,n),oe=o,oc(0,!1),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot($l,a)}catch{}return!0}finally{le.p=s,Bt.T=i,fM(e,t)}}function my(e,t,n){t=pi(n,t),t=_m(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(ec(e,2),ts(e))}function de(e,t,n){if(e.tag===3)my(e,e,n);else for(;t!==null;){if(t.tag===3){my(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(oa===null||!oa.has(i))){e=pi(n,e),n=wS(2),i=sa(t,n,2),i!==null&&(CS(n,i,t,e),ec(i,2),ts(i));break}}t=t.return}}function Op(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new xA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Fg=!0,s.add(n),e=CA.bind(null,e,t,n),t.then(e,e))}function CA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(te&n)===n&&((Be===4||Be===3&&(te&62914560)===te&&300>Zn()-zh)&&(oe&2)===0?po(e,0):mh|=n,ho===te&&(ho=0)),ts(e)}function dM(e,t){t===0&&(t=ix()),e=sr(e,t),e!==null&&(ec(e,t),ts(e))}function RA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dM(e,n)}function DA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),dM(e,n)}function UA(e,t){return tg(e,t)}var mo=null,Br=null,Hm=!1,yh=!1,Ip=!1,ta=0;function ts(e){e!==Br&&e.next===null&&(Br===null?mo=Br=e:Br=Br.next=e),yh=!0,Hm||(Hm=!0,LA())}function oc(e,t){if(!Ip&&yh){Ip=!0;do for(var n=!1,i=mo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Kn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,gy(i,a))}else a=te,a=bh(i,i===Se?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||tc(i,a)||(n=!0,gy(i,a));i=i.next}while(n);Ip=!1}}function NA(){pM()}function pM(){yh=Hm=!1;var e=0;ta!==0&&GA()&&(e=ta);for(var t=Zn(),n=null,i=mo;i!==null;){var s=i.next,a=mM(i,t);a===0?(i.next=null,n===null?mo=s:n.next=s,s===null&&(Br=n)):(n=i,(e!==0||(a&3)!==0)&&(yh=!0)),i=s}Ie!==0&&Ie!==5||oc(e,!1),ta!==0&&(ta=0)}function mM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Kn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=KE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Se,n=te,n=bh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&dp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||tc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&dp(i),ng(n)){case 2:case 8:n=tx;break;case 32:n=Qu;break;case 268435456:n=ex;break;default:n=Qu}return i=gM.bind(null,e),n=tg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&dp(i),e.callbackPriority=2,e.callbackNode=null,2}function gM(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hh()&&e.callbackNode!==n)return null;var i=te;return i=bh(e,e===Se?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(aM(e,i,t),mM(e,Zn()),e.callbackNode!=null&&e.callbackNode===n?gM.bind(null,e):null)}function gy(e,t){if(Hh())return null;aM(e,t,!0)}function LA(){XA(function(){(oe&6)!==0?tg($y,NA):pM()})}function Vg(){if(ta===0){var e=Ka;e===0&&(e=cu,cu<<=1,(cu&261888)===0&&(cu=256)),ta=e}return ta}function vy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Du(e)}function OA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=vy((s[Bn]||null).action),r=i.submitter;r&&(t=(t=r[Bn]||null)?vy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Th("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ta!==0){var l=new FormData(s,r);gm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),gm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Eu=0;Eu<am.length;Eu++)Tu=am[Eu],_y=Tu.toLowerCase(),yy=Tu[0].toUpperCase()+Tu.slice(1),Di(_y,"on"+yy);var Tu,_y,yy,Eu;Di(Cx,"onAnimationEnd");Di(Rx,"onAnimationIteration");Di(Dx,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(WT,"onTransitionRun");Di(qT,"onTransitionStart");Di(YT,"onTransitionCancel");Di(Ux,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function vM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){$u(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){$u(h)}s.currentTarget=null,a=l}}}}function Kt(e,t){var n=t[d_];n===void 0&&(n=t[d_]=new Set);var i=e+"__bubble";n.has(i)||(_M(t,e,2,!1),n.add(i))}function Pp(e,t,n){var i=0;t&&(i|=4),_M(n,e,i,t)}var Au="_reactListening"+Math.random().toString(36).slice(2);function Gg(e){if(!e[Au]){e[Au]=!0,cx.forEach(function(n){n!=="selectionchange"&&(IA.has(n)||Pp(n,!1,e),Pp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Au]||(t[Au]=!0,Pp("selectionchange",!1,t))}}function _M(e,t,n,i){switch(GM(t)){case 2:var s=ww;break;case 8:s=Cw;break;default:s=Jg}n=s.bind(null,t,n,e),s=void 0,!em||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function zp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ha(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}vx(function(){var c=a,h=sg(n),p=[];t:{var f=Nx.get(e);if(f!==void 0){var d=Th,g=e;switch(e){case"keypress":if(Nu(n)===0)break t;case"keydown":case"keyup":d=ST;break;case"focusin":g="focus",d=yp;break;case"focusout":g="blur",d=yp;break;case"beforeblur":case"afterblur":d=yp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=S_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=cT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=AT;break;case Cx:case Rx:case Dx:d=fT;break;case Ux:d=CT;break;case"scroll":case"scrollend":d=oT;break;case"wheel":d=DT;break;case"copy":case"cut":case"paste":d=pT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=b_;break;case"submit":d=ET;break;case"toggle":case"beforetoggle":d=NT}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,y;_!==null;){var v=_;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||u===null||(v=zl(_,u),v!=null&&x.push(ql(_,v,y))),m)break;_=_.return}0<x.length&&(f=new d(f,g,null,n,h),p.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&n!==tm&&(g=n.relatedTarget||n.fromElement)&&(Ha(g)||g[So]))break t;(f||d)&&(g=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,f?(d=n.relatedTarget||n.toElement,f=c,d=d?Ha(d):null,d!==null&&(m=jl(d),x=d.tag,d!==m||x!==5&&x!==27&&x!==6)&&(d=null)):(f=null,d=c),f!==d&&(x=S_,v="onMouseLeave",u="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=b_,v="onPointerLeave",u="onPointerEnter",_="pointer"),m=f==null?g:xl(f),y=d==null?g:xl(d),g=new x(v,_+"leave",f,n,h),g.target=m,g.relatedTarget=y,v=null,Ha(h)===c&&(x=new x(u,_+"enter",d,n,h),x.target=y,x.relatedTarget=m,v=x),m=v,x=f&&d?Gp(f,d,PA):null,f!==null&&xy(p,g,f,x,!1),d!==null&&m!==null&&xy(p,m,d,x,!0)))}t:{if(f=c?xl(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var T=w_;else if(A_(f))if(bx)T=GT;else{T=HT;var A=FT}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&ig(c.elementType)&&(T=w_):T=VT;if(T&&(T=T(e,c))){Mx(p,T,n,h);break t}A&&A(e,f,c)}switch(A=c?xl(c):window,e){case"focusin":(A_(A)||A.contentEditable==="true")&&(Xr=A,im=c,Tl=null);break;case"focusout":Tl=im=Xr=null;break;case"mousedown":sm=!0;break;case"contextmenu":case"mouseup":case"dragend":sm=!1,U_(p,n,h);break;case"selectionchange":if(XT)break;case"keydown":case"keyup":U_(p,n,h)}var w;if(og)t:{switch(e){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else kr?xx(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(yx&&n.locale!=="ko"&&(kr||R!=="onCompositionStart"?R==="onCompositionEnd"&&kr&&(w=_x()):(Ks=h,ag="value"in Ks?Ks.value:Ks.textContent,kr=!0)),A=xh(c,R),0<A.length&&(R=new M_(R,e,null,n,h),p.push({event:R,listeners:A}),w?R.data=w:(w=Sx(n),w!==null&&(R.data=w)))),(w=OT?IT(e,n):PT(e,n))&&(R=xh(c,"onBeforeInput"),0<R.length&&(A=new M_("onBeforeInput","beforeinput",null,n,h),p.push({event:A,listeners:R}),A.data=w)),OA(p,e,c,n,h)}vM(p,t)})}function ql(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=zl(e,n),s!=null&&i.unshift(ql(e,s,a)),s=zl(e,t),s!=null&&i.push(ql(e,s,a))),e.tag===3)return i;e=e.return}return[]}function PA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=zl(n,a),c!=null&&r.unshift(ql(n,c,l))):s||(c=zl(n,a),c!=null&&r.push(ql(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var zA=/\r\n?/g,BA=/\u0000|\uFFFD/g;function Sy(e){return(typeof e=="string"?e:""+e).replace(zA,`
`).replace(BA,"")}function yM(e,t){return t=Sy(t),Sy(e)===t}function fe(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||co(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&co(e,""+i);else return;break;case"className":fu(e,"class",i);break;case"tabIndex":fu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":fu(e,n,i);break;case"style":gx(e,i,a);return;case"data":if(t!=="object"){fu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Du(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",s.name,s,null),fe(e,t,"formEncType",s.formEncType,s,null),fe(e,t,"formMethod",s.formMethod,s,null),fe(e,t,"formTarget",s.formTarget,s,null)):(fe(e,t,"encType",s.encType,s,null),fe(e,t,"method",s.method,s,null),fe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Du(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Yi);return;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Du(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Kt("beforetoggle",e),Kt("toggle",e),Ru(e,"popover",i);break;case"xlinkActuate":cs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ru(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=aT.get(n)||n,Ru(e,n,i);else return}ae=!0}function Vm(e,t,n,i,s,a){switch(n){case"style":gx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")co(e,i);else if(typeof i=="number"||typeof i=="bigint")co(e,""+i);else return;break;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ux.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Bn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ae=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ru(e,n,i)}return}ae=!0}function fn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Kt("error",e),Kt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:fe(e,t,a,r,n,null)}}s&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":Kt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Q(137,t));break;default:fe(e,t,i,h,n,null)}}dx(e,a,o,l,c,r,s,!1);return;case"select":Kt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?jr(e,!!i,t,!1):n!=null&&jr(e,!!i,n,!0);return;case"textarea":Kt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:fe(e,t,r,o,n,null)}mx(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:fe(e,t,l,i,n,null)}return;case"dialog":Kt("beforetoggle",e),Kt("toggle",e),Kt("cancel",e),Kt("close",e);break;case"iframe":case"object":Kt("load",e);break;case"video":case"audio":for(i=0;i<Wl.length;i++)Kt(Wl[i],e);break;case"image":Kt("error",e),Kt("load",e);break;case"details":Kt("toggle",e);break;case"embed":case"source":case"link":Kt("error",e),Kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:fe(e,t,c,i,n,null)}return;default:if(ig(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Vm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}var FA={};function HA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||fe(e,t,d,null,i,p)}}for(var f in i){var d=i[f];if(p=n[f],i.hasOwnProperty(f)&&(d!=null||p!=null))switch(f){case"type":d!==p&&(ae=!0),a=d;break;case"name":d!==p&&(ae=!0),s=d;break;case"checked":d!==p&&(ae=!0),c=d;break;case"defaultChecked":d!==p&&(ae=!0),h=d;break;case"value":d!==p&&(ae=!0),r=d;break;case"defaultValue":d!==p&&(ae=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&fe(e,t,f,d,i,p)}}$p(e,r,o,l,c,h,a,s);return;case"select":d=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||fe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ae=!0),f=a;break;case"defaultValue":a!==l&&(ae=!0),o=a;break;case"multiple":a!==l&&(ae=!0),r=a;default:a!==l&&fe(e,t,s,a,i,l)}t=o,n=r,i=d,f!=null?jr(e,!!n,f,!1):!!i!=!!n&&(t!=null?jr(e,!!n,t,!0):jr(e,!!n,n?[]:"",!1));return;case"textarea":d=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ae=!0),f=s;break;case"defaultValue":s!==a&&(ae=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&fe(e,t,r,s,i,a)}px(e,f,d);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:fe(e,t,g,null,i,f)}for(l in i)if(f=i[l],d=n[l],i.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null))switch(l){case"selected":f!==d&&(ae=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:fe(e,t,l,f,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&fe(e,t,x,null,i,f);for(c in i)if(f=i[c],d=n[c],i.hasOwnProperty(c)&&f!==d&&(f!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:fe(e,t,c,f,i,d)}return;default:if(ig(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Vm(e,t,m,void 0,i,f);for(h in i)f=i[h],d=n[h],!i.hasOwnProperty(h)||f===d||f===void 0&&d===void 0||Vm(e,t,h,f,i,d);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&fe(e,t,u,null,i,f);for(p in i)f=i[p],d=n[p],!i.hasOwnProperty(p)||f===d||f==null&&d==null||fe(e,t,p,f,i,d)}function My(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&My(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&My(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gm=null,km=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function by(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function SM(e,t,n,i){return n=Yl(n).createElement(e),n[ln]=i,n[Bn]=t,fn(n,e,t),nn(n),n}function Xm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bp=null;function GA(){var e=window.event;return e&&e.type==="popstate"?e===Bp?!1:(Bp=e,!0):(Bp=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,kA=typeof clearTimeout=="function"?clearTimeout:void 0,Ey=typeof Promise=="function"?Promise:void 0,Ty=typeof requestAnimationFrame=="function"?requestAnimationFrame:kg,XA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ey<"u"?function(e){return Ey.resolve(null).then(e).catch(WA)}:kg;function WA(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function Ay(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),xo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Hp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Hp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[nc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Hp(e.ownerDocument.body);n=s}while(n);xo(t)}function wy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function MM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function bM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function EM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Wm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return EM(t,n,e)}function qA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return EM(t,n,e)}function YA(e){return e.documentElement.clientHeight}function ZA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function JA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var f=c.defaultView,d=f.navigation&&f.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(YA(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,u=0,_=0;_<m.length;_++){var y=m[_];if(!y.complete){var v=y.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<f.innerHeight&&v.left<f.innerWidth){if(u+=PM(y),u>Wu){x.length=g;break}y=new Promise(ZA.bind(y)),x.push(y)}}}if(0<x.length)return f=Promise.race([Promise.all(x),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(d?Promise.allSettled([d.finished,f]):f).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),d=0;d<f.length;d++){var g=f[d],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(g),g=x.getKeyframes();for(var u=m=void 0,_=!0,y=0;y<g.length;y++){var v=g[y],T=v.width;if(m===void 0)m=T;else if(m!==T){_=!1;break}if(T=v.height,u===void 0)u=T;else if(u!==T){_=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}_&&m!==void 0&&u!==void 0&&(x.setKeyframes(g),_=getComputedStyle(x.target,x.pseudoElement),_.width!==m||_.height!==u)&&(_=g[0],_.width=m,_.height=u,_=g[g.length-1],_.width=m,_.height=u,x.setKeyframes(g))}}r()},function(f){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var f=0;f<p.length;f++)p[f].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function Va(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Va.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Me({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Va.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Va.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function TM(e){return{name:e,group:new Va("group",e),imagePair:new Va("image-pair",e),old:new Va("old",e),new:new Va("new",e)}}function $n(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}$n.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(AM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=go(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),zn(this._fragmentFiber.child,!1,KA,e,o,i)}this._eventListeners=a}};function KA(e,t,n,i){return Ke(e).addEventListener(t,n,i),!1}$n.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=AM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=go(s.optionsOrUseCapture),zn(this._fragmentFiber.child,!1,QA,e,n,s),i.splice(t,1),a!==null&&a()}};function QA(e,t,n,i){return Ke(e).removeEventListener(t,n,i),!1}function go(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Cy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function AM(e,t,n,i){if(e.length===0)return-1;i=Cy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Cy(a.optionsOrUseCapture)===i)return s}return-1}$n.prototype.dispatchEvent=function(e){var t=er(this._fragmentFiber);if(t===null)return!0;t=Ke(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,go(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,go(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};$n.prototype.focus=function(e){zn(this._fragmentFiber.child,!0,wM,e,void 0,void 0)};function wM(e,t){return e.tag===6?!1:(e=Ke(e),cw(e,t))}$n.prototype.focusLast=function(e){var t=[];zn(this._fragmentFiber.child,!0,Xg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!wM(t[n],e);n--);};function Xg(e,t){return t.push(e),!1}$n.prototype.blur=function(){var e=er(this._fragmentFiber);e!==null&&(e=Ke(e),e=Yl(e).activeElement,e!==null&&zn(this._fragmentFiber.child,!1,jA,e,void 0,void 0))};function jA(e,t){return e.tag===6?!1:(e=Ke(e),e===t||e.contains(t)?(t.blur(),!0):!1)}$n.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),zn(this._fragmentFiber.child,!1,$A,e,void 0,void 0)};function $A(e,t){return e.tag===6||(e=Ke(e),t.observe(e)),!1}$n.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),zn(this._fragmentFiber.child,!1,tw,e,void 0,void 0);for(var n=t=0;n<Ci.length;n++){var i=Ci[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ci[t++]=i}Ci.length=t}};function tw(e,t){return e.tag===6||(e=Ke(e),t.unobserve(e)),!1}var Ci=[],Fp=!1;function ew(e,t,n){Ci.push({fragmentInstance:e,observer:t,instance:n}),Fp||(Fp=!0,uw(function(){Fp=!1;var i=Ci;Ci=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}$n.prototype.getClientRects=function(){var e=[];return zn(this._fragmentFiber.child,!1,nw,e,void 0,void 0),e};function nw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Ke(e),t.push.apply(t,e.getClientRects());return!1}$n.prototype.getRootNode=function(e){var t=er(this._fragmentFiber);return t===null?this:Ke(t).getRootNode(e)};$n.prototype.compareDocumentPosition=function(e){var t=er(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];zn(this._fragmentFiber.child,!1,Xg,n,void 0,void 0);var i=Ke(t);if(n.length===0){if(n=i,o_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Jy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Ke(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Ke(n[0]),s=Ke(n[n.length-1]);var a=o_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||iw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function iw(e,t,n,i,s){var a=Ha(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=er(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Gp(n,a,l_),t===null?t=!1:(zn(t,!0,LE,a,n),a=Fr,Fr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Gp(i,a,l_),t===null?t=!1:(zn(t,!0,OE,a,i),a=Fr,Vp=Fr=null,t=a!==null)),t):!1}function Ry(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}$n.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];zn(this._fragmentFiber.child,!1,Xg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Jy(this._fragmentFiber);if(i=n?i[1]||i[0]||er(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Ke(i),Ry(e,n);return}if(i=Ke(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Ke(s),Ry(s,n)):Ke(s).scrollIntoView(e),i+=n?-1:1}};function sw(e,t){return e=Ke(e),CM(e,t),!1}function CM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function RM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,go(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ci.length;o++){var l=Ci[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ci[r++]=l)}Ci.length=r,a.observe(e)}),CM(e,t))}function aw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,go(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?ew(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function qm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qm(n),Eh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function rw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[nc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function ow(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function DM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gi(e.nextSibling),e===null))return null;return e}function Ym(e){return e.data==="$?"||e.data==="$~"}function Wg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function gi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zm=null;function Dy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return gi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Uy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function cw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function uw(e){Ty(function(){Ty(function(t){return e(t)})})}function UM(e,t,n){switch(t=Yl(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function NM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&fe(e,t,i,null,FA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Yi&&(e.onclick=null),Eh(e)}function Hp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eh(e)}var vi=new Map,Ny=new Set;function Zl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var bs=le.d;le.d={f:hw,r:fw,D:dw,C:pw,L:mw,m:gw,X:_w,S:vw,M:yw};function hw(){var e=bs.f(),t=Bh();return e||t}function fw(e){var t=Mo(e);t!==null&&t.tag===5&&t.type==="form"?gS(t):bs.r(e)}var Ao=typeof document>"u"?null:document;function LM(e,t,n){var i=Ao;if(i&&typeof t=="string"&&t){var s=di(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Ny.has(s)||(Ny.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),fn(t,"link",e),nn(t),i.head.appendChild(t)))}}function dw(e){bs.D(e),LM("dns-prefetch",e,null)}function pw(e,t){bs.C(e,t),LM("preconnect",e,t)}function mw(e,t,n){bs.L(e,t,n);var i=Ao;if(i&&e&&t){var s='link[rel="preload"][as="'+di(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+di(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+di(n.imageSizes)+'"]')):s+='[href="'+di(e)+'"]';var a=s;switch(t){case"style":a=vo(e);break;case"script":a=wo(e)}if(!(vi.has(a)||(e=Me({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),vi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(lc(a))||t==="script"&&i.querySelector(cc(a))))){var r=i.createElement("link");fn(r,"link",e),t==="style"&&(r[ju]=!0,r.onload=r.onerror=function(){lx(r)}),nn(r),i.head.appendChild(r)}}}function gw(e,t){bs.m(e,t);var n=Ao;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+di(i)+'"][href="'+di(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=wo(e)}if(!vi.has(a)&&(e=Me({rel:"modulepreload",href:e},t),vi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(cc(a)))return}i=n.createElement("link"),fn(i,"link",e),nn(i),n.head.appendChild(i)}}}function vw(e,t,n){bs.S(e,t,n);var i=Ao;if(i&&e){var s=Qr(i).hoistableStyles,a=vo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(lc(a)))o.loading=5;else{e=Me({rel:"stylesheet",href:e,"data-precedence":t},n),(n=vi.get(a))&&qg(e,n);var l=r=i.createElement("link");nn(l),fn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ku(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function _w(e,t){bs.X(e,t);var n=Ao;if(n&&e){var i=Qr(n).hoistableScripts,s=wo(e),a=i.get(s);a||(a=n.querySelector(cc(s)),a||(e=Me({src:e,async:!0},t),(t=vi.get(s))&&Yg(e,t),a=n.createElement("script"),nn(a),fn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function yw(e,t){bs.M(e,t);var n=Ao;if(n&&e){var i=Qr(n).hoistableScripts,s=wo(e),a=i.get(s);a||(a=n.querySelector(cc(s)),a||(e=Me({src:e,async:!0,type:"module"},t),(t=vi.get(s))&&Yg(e,t),a=n.createElement("script"),nn(a),fn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ly(e,t,n,i){var s=(s=ea.current)?Zl(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=vo(n.href),t=Qr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=vo(n.href);var a=Qr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(lc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=vi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vi.set(e,a)),xw(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=wo(n),t=Qr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function vo(e){return'href="'+di(e)+'"'}function lc(e){return'link[rel="stylesheet"]['+e+"]"}function OM(e){return Me({},e,{"data-precedence":e.precedence,precedence:null})}function xw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[ju]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[ju]=!0,t.onload=t.onerror=lx.bind(null,t),fn(t,"link",n),nn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function wo(e){return'[src="'+di(e)+'"]'}function cc(e){return"script[async]"+e}function Oy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+di(n.href)+'"]');if(i)return t.instance=i,nn(i),i;var s=Me({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),nn(i),fn(i,"style",s),ku(i,n.precedence,e),t.instance=i;case"stylesheet":s=vo(n.href);var a=e.querySelector(lc(s));if(a)return t.state.loading|=4,t.instance=a,nn(a),a;i=OM(n),(s=vi.get(s))&&qg(i,s),a=(e.ownerDocument||e).createElement("link"),nn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),fn(a,"link",i),t.state.loading|=4,ku(a,n.precedence,e),t.instance=a;case"script":return a=wo(n.src),(s=e.querySelector(cc(a)))?(t.instance=s,nn(s),s):(i=n,(s=vi.get(a))&&(i=Me({},n),Yg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),nn(s),fn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ku(i,n.precedence,e));return t.instance}function ku(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function qg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xu=null;function Iy(e,t,n){if(Xu===null){var i=new Map,s=Xu=new Map;s.set(n,i)}else s=Xu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[nc]||a[ln]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Sw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Py(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function IM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function PM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function zy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=PM(t),e.suspenseyImages.push(t)),e=Ew.bind(e),t.decode().then(e,e))}function Mw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=vo(i.href),a=t.querySelector(lc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Jl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,nn(a);return}a=t.ownerDocument||t,i=OM(i),(s=vi.get(s))&&qg(i,s),a=a.createElement("link"),nn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),fn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Jl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Wu=0;function bw(e,t){return e.stylesheets&&e.count===0&&qu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&qu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Wu===0&&(Wu=62500*VA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Wu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function zM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)qu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Jl(){this.count--,zM(this)}function Ew(){this.imgCount--,zM(this)}var Sh=null;function qu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sh=new Map,t.forEach(Tw,e),Sh=null,Jl.call(e))}function Tw(e,t){if(!(t.state.loading&4)){var n=Sh.get(e);if(n)var i=n.get(null);else{n=new Map,Sh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Jl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var _o={$$typeof:qi,Provider:null,Consumer:null,_currentValue:Ga,_currentValue2:Ga,_threadCount:0};function Aw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pp(0),this.hiddenUpdates=pp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function BM(e,t,n,i,s,a,r,o,l,c,h,p){return e=new Aw(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=In(3,null,null,t),e.current=a,a.stateNode=e,t=dg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},gg(a),e}function FM(e){return e?(e=Yr,e):Yr}function HM(e,t,n,i,s,a){s=FM(s),i.context===null?i.context=s:i.pendingContext=s,i=ia(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=sa(e,i,t),n!==null&&(Pn(n,e,t),wl(n,e,t))}function By(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zg(e,t){By(e,t),(e=e.alternate)&&By(e,t)}function VM(e){if(e.tag===13||e.tag===31){var t=sr(e,67108864);t!==null&&Pn(t,e,67108864),Zg(e,67108864)}}function Fy(e){if(e.tag===13||e.tag===31){var t=Qn();t=eg(t);var n=sr(e,t);n!==null&&Pn(n,e,t),Zg(e,t)}}var yo=!0;function ww(e,t,n,i){var s=Bt.T;Bt.T=null;var a=le.p;try{le.p=2,Jg(e,t,n,i)}finally{le.p=a,Bt.T=s}}function Cw(e,t,n,i){var s=Bt.T;Bt.T=null;var a=le.p;try{le.p=8,Jg(e,t,n,i)}finally{le.p=a,Bt.T=s}}function Jg(e,t,n,i){if(yo){var s=Km(i);if(s===null)zp(e,t,i,Mh,n),Hy(e,i);else if(Dw(s,e,t,n,i))i.stopPropagation();else if(Hy(e,i),t&4&&-1<Rw.indexOf(e)){for(;s!==null;){var a=Mo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=za(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Kn(r);o.entanglements[1]|=l,r&=~l}ts(a),(oe&6)===0&&(gh=Zn()+500,oc(0,!1))}}break;case 31:case 13:o=sr(a,2),o!==null&&Pn(o,a,2),Bh(),Zg(a,2)}if(a=Km(i),a===null&&zp(e,t,i,Mh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else zp(e,t,i,null,n)}}function Km(e){return e=sg(e),Kg(e)}var Mh=null;function Kg(e){if(Mh=null,e=Ha(e),e!==null){var t=jl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=qy(t),e!==null)return e;e=null}else if(n===31){if(e=Yy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mh=e,null}function GM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kE()){case $y:return 2;case tx:return 8;case Qu:case XE:return 32;case ex:return 268435456;default:return 32}default:return 32}}var Qm=!1,la=null,ca=null,ua=null,Kl=new Map,Ql=new Map,Zs=[],Rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hy(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(t.pointerId)}}function gl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Mo(t),t!==null&&VM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Dw(e,t,n,i,s){switch(t){case"focusin":return la=gl(la,e,t,n,i,s),!0;case"dragenter":return ca=gl(ca,e,t,n,i,s),!0;case"mouseover":return ua=gl(ua,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Kl.set(a,gl(Kl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ql.set(a,gl(Ql.get(a)||null,e,t,n,i,s)),!0}return!1}function kM(e){var t=Ha(e.target);if(t!==null){var n=jl(t);if(n!==null){if(t=n.tag,t===13){if(t=qy(n),t!==null){e.blockedOn=t,f_(e.priority,function(){Fy(n)});return}}else if(t===31){if(t=Yy(n),t!==null){e.blockedOn=t,f_(e.priority,function(){Fy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Km(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);tm=i,n.target.dispatchEvent(i),tm=null}else return t=Mo(n),t!==null&&VM(t),e.blockedOn=n,!1;t.shift()}return!0}function Vy(e,t,n){Yu(e)&&n.delete(t)}function Uw(){Qm=!1,la!==null&&Yu(la)&&(la=null),ca!==null&&Yu(ca)&&(ca=null),ua!==null&&Yu(ua)&&(ua=null),Kl.forEach(Vy),Ql.forEach(Vy)}function wu(e,t){e.blockedOn===t&&(e.blockedOn=null,Qm||(Qm=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Uw)))}var Cu=null;function Gy(e){Cu!==e&&(Cu=e,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){Cu===e&&(Cu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Kg(i||n)===null)continue;break}var a=Mo(n);a!==null&&(e.splice(t,3),t-=3,gm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function xo(e){function t(l){return wu(l,e)}la!==null&&wu(la,e),ca!==null&&wu(ca,e),ua!==null&&wu(ua,e),Kl.forEach(t),Ql.forEach(t);for(var n=0;n<Zs.length;n++){var i=Zs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Zs.length&&(n=Zs[0],n.blockedOn===null);)kM(n),n.blockedOn===null&&Zs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Bn]||null;if(typeof a=="function")r||Gy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Bn]||null)o=r.formAction;else if(Kg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Gy(n)}}}function XM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Qg(e){this._internalRoot=e}Vh.prototype.render=Qg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=Qn();HM(n,i,e,t,null,null)};Vh.prototype.unmount=Qg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;HM(e.current,2,null,e,null,null),Bh(),t[So]=null}};function Vh(e){this._internalRoot=e}Vh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ox();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zs.length&&t!==0&&t<Zs[n].priority;n++);Zs.splice(n,0,e),n===0&&kM(e)}};var ky=Xy.version;if(ky!=="19.3.1")throw Error(Q(527,ky,"19.3.1"));le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=NE(t),e=e!==null?Zy(e):null,e=e===null?null:e.stateNode,e};var Nw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Bt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(vl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!vl.isDisabled&&vl.supportsFiber))try{$l=vl.inject(Nw),Jn=vl}catch{}var vl;Gh.createRoot=function(e,t){if(!Wy(e))throw Error(Q(299));var n=!1,i="",s=ES,a=TS,r=AS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=BM(e,1,!1,null,null,n,i,null,s,a,r,XM),e[So]=t.current,Gg(e),new Qg(t)};Gh.hydrateRoot=function(e,t,n){if(!Wy(e))throw Error(Q(299));var i=!1,s="",a=ES,r=TS,o=AS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=BM(e,1,!0,t,n??null,i,s,l,a,r,o,XM),t.context=FM(null),n=t.current,i=Qn(),i=eg(i),s=ia(i),s.callback=null,sa(n,s,i),n=i,t.current.lanes=n,ec(t,n),ts(t),e[So]=t.current,Gg(e),new Vh(t)};Gh.version="19.3.1"});var ZM=Hs((SU,YM)=>{"use strict";function qM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qM)}catch(e){console.error(e)}}qM(),YM.exports=WM()});var ai=wv(iu()),Kb=wv(ZM());var R1=0,z0=1,D1=2;var B0=1,qf=2,as=3,Ds=0,pn=1,Mi=2,zs=0,hr=1,Da=2,F0=3,H0=4,U1=5,Aa=100,N1=101,L1=102,O1=103,I1=104,P1=200,z1=201,B1=202,F1=203,pf=204,mf=205,H1=206,V1=207,G1=208,k1=209,X1=210,W1=211,q1=212,Y1=213,Z1=214,Yf=0,Zf=1,Jf=2,fr=3,Kf=4,Qf=5,jf=6,$f=7,td=0,J1=1,K1=2,Bs=0,Q1=1,j1=2,$1=3,ed=4,tb=5,eb=6,nb=7,A0="attached",ib="detached",V0=300,xr=301,Sr=302,nd=303,id=304,Yc=306,gf=1e3,Ta=1001,vf=1002,Fn=1003,sb=1004;var Zc=1005;var Ii=1006,sd=1007;var Ua=1008;var Bi=1009,G0=1010,k0=1011,Qo=1012,ad=1013,Na=1014,bi=1015,jo=1016,rd=1017,od=1018,$o=1020,X0=35902,W0=35899,q0=1021,Y0=1022,si=1023,ko=1026,tl=1027,ld=1028,cd=1029,Z0=1030,ud=1031;var hd=1033,Jc=33776,Kc=33777,Qc=33778,jc=33779,fd=35840,dd=35841,pd=35842,md=35843,gd=36196,vd=37492,_d=37496,yd=37808,xd=37809,Sd=37810,Md=37811,bd=37812,Ed=37813,Td=37814,Ad=37815,wd=37816,Cd=37817,Rd=37818,Dd=37819,Ud=37820,Nd=37821,Ld=36492,Od=36494,Id=36495,Pd=36283,zd=36284,Bd=36285,Fd=36286;var Sc=2300,_f=2301,df=2302,w0=2400,C0=2401,R0=2402;var ab=3200,rb=3201;var Hd=0,ob=1,Fs="",Cn="srgb",dr="srgb-linear",Mc="linear",pe="srgb";var ur=7680;var D0=519,lb=512,cb=513,ub=514,J0=515,hb=516,fb=517,db=518,pb=519,U0=35044;var K0="300 es",Oi=2e3,bc=2001;var Us=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],JM=1234567,vc=Math.PI/180,pr=180/Math.PI;function Mr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Jt(e,t,n){return Math.max(t,Math.min(n,e))}function Q0(e,t){return(e%t+t)%t}function Lw(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Ow(e,t,n){return e!==t?(n-e)/(t-e):0}function _c(e,t,n){return(1-n)*e+n*t}function Iw(e,t,n,i){return _c(e,t,1-Math.exp(-n*i))}function Pw(e,t=1){return t-Math.abs(Q0(e,t*2)-t)}function zw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Bw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Fw(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Hw(e,t){return e+Math.random()*(t-e)}function Vw(e){return e*(.5-Math.random())}function Gw(e){e!==void 0&&(JM=e);let t=JM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kw(e){return e*vc}function Xw(e){return e*pr}function Ww(e){return(e&e-1)===0&&e!==0}function qw(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Yw(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Zw(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),p=a((t-i)/2),f=r((t-i)/2),d=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*p,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*p,o*c);break;case"ZXZ":e.set(l*p,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*d,o*c);break;case"YXY":e.set(l*d,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function wn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Ei={DEG2RAD:vc,RAD2DEG:pr,generateUUID:Mr,clamp:Jt,euclideanModulo:Q0,mapLinear:Lw,inverseLerp:Ow,lerp:_c,damp:Iw,pingpong:Pw,smoothstep:zw,smootherstep:Bw,randInt:Fw,randFloat:Hw,randFloatSpread:Vw,seededRandom:Gw,degToRad:kw,radToDeg:Xw,isPowerOfTwo:Ww,ceilPowerOfTwo:qw,floorPowerOfTwo:Yw,setQuaternionFromProperEuler:Zw,normalize:wn,denormalize:Vo},wt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ns=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],f=a[r+0],d=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p;return}if(o===1){t[n+0]=f,t[n+1]=d,t[n+2]=g,t[n+3]=x;return}if(p!==x||l!==f||c!==d||h!==g){let m=1-o,u=l*f+c*d+h*g+p*x,_=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let T=Math.sqrt(y),A=Math.atan2(T,u*_);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}let v=o*_;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,p=p*m+x*v,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=T,c*=T,h*=T,p*=T}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],f=a[r+1],d=a[r+2],g=a[r+3];return t[n]=o*g+h*p+l*d-c*f,t[n+1]=l*g+h*f+c*p-o*d,t[n+2]=c*g+h*d+o*f-l*p,t[n+3]=h*g-o*p-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),f=l(i/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*p+c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p-f*d*g;break;case"YXZ":this._x=f*h*p+c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p+f*d*g;break;case"ZXY":this._x=f*h*p-c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p-f*d*g;break;case"ZYX":this._x=f*h*p-c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p+f*d*g;break;case"YZX":this._x=f*h*p+c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p-f*d*g;break;case"XZY":this._x=f*h*p-c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-n;return this._w=d*r+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*p+this._w*f,this._x=i*p+this._x*f,this._y=s*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(KM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(KM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jg.copy(this).projectOnVector(t),this.sub(jg)}reflect(t){return this.sub(jg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jg=new U,KM=new Ns,Wt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],u=s[6],_=s[1],y=s[4],v=s[7],T=s[2],A=s[5],w=s[8];return a[0]=r*x+o*_+l*T,a[3]=r*m+o*y+l*A,a[6]=r*u+o*v+l*w,a[1]=c*x+h*_+p*T,a[4]=c*m+h*y+p*A,a[7]=c*u+h*v+p*w,a[2]=f*x+d*_+g*T,a[5]=f*m+d*y+g*A,a[8]=f*u+d*v+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,f=o*l-h*a,d=c*a-r*l,g=n*p+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=p*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(h*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=d*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply($g.makeScale(t,n)),this}rotate(t){return this.premultiply($g.makeRotation(-t)),this}translate(t,n){return this.premultiply($g.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$g=new Wt;function j0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ec(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function mb(){let e=Ec("canvas");return e.style.display="block",e}var QM={};function Xo(e){e in QM||(QM[e]=!0,console.warn(e))}function gb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var jM=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$M=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jw(){let e={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===pe&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(s.r=Go(s.r),s.g=Go(s.g),s.b=Go(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?Mc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[dr]:{primaries:t,whitePoint:i,transfer:Mc,toXYZ:jM,fromXYZ:$M,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:jM,fromXYZ:$M,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),e}var ie=Jw();function Rs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Go(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Co,yf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Co===void 0&&(Co=Ec("canvas")),Co.width=t.width,Co.height=t.height;let s=Co.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Co}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ec("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Rs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Rs(n[i]/255)*255):n[i]=Rs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kw=0,Wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=Mr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(t0(s[r].image)):a.push(t0(s[r]))}else a=t0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function t0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?yf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qw=0,e0=new U,Hn=class e extends Us{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ta,s=Ta,a=Ii,r=Ua,o=si,l=Bi,c=e.DEFAULT_ANISOTROPY,h=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=Mr(),this.name="",this.source=new Wo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(e0).x}get height(){return this.source.getSize(e0).y}get depth(){return this.source.getSize(e0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==V0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gf:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case vf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gf:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case vf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=V0;Hn.DEFAULT_ANISOTROPY=1;var re=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,v=(d+1)/2,T=(u+1)/2,A=(h+f)/4,w=(p+x)/4,R=(g+m)/4;return y>v&&y>T?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=A/i,a=w/i):v>T?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=A/s,a=R/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=R/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this.w=Jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this.w=Jt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xf=class extends Us{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new re(0,0,t,n),this.scissorTest=!1,this.viewport=new re(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Hn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Wo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},es=class extends xf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Tc=class extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sf=class extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ui.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ui.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ui.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ui):Ui.fromBufferAttribute(a,r),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kh.copy(i.boundingBox)),kh.applyMatrix4(t.matrixWorld),this.union(kh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uc),Xh.subVectors(this.max,uc),Ro.subVectors(t.a,uc),Do.subVectors(t.b,uc),Uo.subVectors(t.c,uc),_a.subVectors(Do,Ro),ya.subVectors(Uo,Do),rr.subVectors(Ro,Uo);let n=[0,-_a.z,_a.y,0,-ya.z,ya.y,0,-rr.z,rr.y,_a.z,0,-_a.x,ya.z,0,-ya.x,rr.z,0,-rr.x,-_a.y,_a.x,0,-ya.y,ya.x,0,-rr.y,rr.x,0];return!n0(n,Ro,Do,Uo,Xh)||(n=[1,0,0,0,1,0,0,0,1],!n0(n,Ro,Do,Uo,Xh))?!1:(Wh.crossVectors(_a,ya),n=[Wh.x,Wh.y,Wh.z],n0(n,Ro,Do,Uo,Xh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Es=[new U,new U,new U,new U,new U,new U,new U,new U],Ui=new U,kh=new Pi,Ro=new U,Do=new U,Uo=new U,_a=new U,ya=new U,rr=new U,uc=new U,Xh=new U,Wh=new U,or=new U;function n0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){or.fromArray(e,a);let o=s.x*Math.abs(or.x)+s.y*Math.abs(or.y)+s.z*Math.abs(or.z),l=t.dot(or),c=n.dot(or),h=i.dot(or);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jw=new Pi,hc=new U,i0=new U,ni=class{constructor(t=new U,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):jw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hc.subVectors(t,this.center);let n=hc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(hc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(i0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hc.copy(t.center).add(i0)),this.expandByPoint(hc.copy(t.center).sub(i0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ts=new U,s0=new U,qh=new U,xa=new U,a0=new U,Yh=new U,r0=new U,mr=class{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ts)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ts.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ts.copy(this.origin).addScaledVector(this.direction,n),Ts.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){s0.copy(t).add(n).multiplyScalar(.5),qh.copy(n).sub(t).normalize(),xa.copy(this.origin).sub(s0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(qh),o=xa.dot(this.direction),l=-xa.dot(qh),c=xa.lengthSq(),h=Math.abs(1-r*r),p,f,d,g;if(h>0)if(p=r*l-o,f=r*o-l,g=a*h,p>=0)if(f>=-g)if(f<=g){let x=1/h;p*=x,f*=x,d=p*(p+r*f+2*o)+f*(r*p+f+2*l)+c}else f=a,p=Math.max(0,-(r*f+o)),d=-p*p+f*(f+2*l)+c;else f=-a,p=Math.max(0,-(r*f+o)),d=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-r*a+o)),f=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-a,-l),a),d=f*(f+2*l)+c):(p=Math.max(0,-(r*a+o)),f=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+f*(f+2*l)+c);else f=r>0?-a:a,p=Math.max(0,-(r*f+o)),d=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(s0).addScaledVector(qh,f),d}intersectSphere(t,n){Ts.subVectors(t.center,this.origin);let i=Ts.dot(this.direction),s=Ts.dot(Ts)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ts)!==null}intersectTriangle(t,n,i,s,a){a0.subVectors(n,t),Yh.subVectors(i,t),r0.crossVectors(a0,Yh);let r=this.direction.dot(r0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;xa.subVectors(this.origin,t);let l=o*this.direction.dot(Yh.crossVectors(xa,Yh));if(l<0)return null;let c=o*this.direction.dot(a0.cross(xa));if(c<0||l+c>r)return null;let h=-o*xa.dot(r0);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class e{constructor(t,n,i,s,a,r,o,l,c,h,p,f,d,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,f,d,g,x,m)}set(t,n,i,s,a,r,o,l,c,h,p,f,d,g,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/No.setFromMatrixColumn(t,0).length(),a=1/No.setFromMatrixColumn(t,1).length(),r=1/No.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let f=r*h,d=r*p,g=o*h,x=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+g*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=g+d*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,d=l*p,g=c*h,x=c*p;n[0]=f+x*o,n[4]=g*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-g,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,d=l*p,g=c*h,x=c*p;n[0]=f-x*o,n[4]=-r*p,n[8]=g+d*o,n[1]=d+g*o,n[5]=r*h,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,d=r*p,g=o*h,x=o*p;n[0]=l*h,n[4]=g*c-d,n[8]=f*c+x,n[1]=l*p,n[5]=x*c+f,n[9]=d*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,d=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=x-f*p,n[8]=g*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+g,n[10]=f-x*p}else if(t.order==="XZY"){let f=r*l,d=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+x,n[5]=r*h,n[9]=d*p-g,n[2]=g*p-d,n[6]=o*h,n[10]=x*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose($w,t,tC)}lookAt(t,n,i){let s=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Sa.crossVectors(i,ti),Sa.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Sa.crossVectors(i,ti)),Sa.normalize(),Zh.crossVectors(ti,Sa),s[0]=Sa.x,s[4]=Zh.x,s[8]=ti.x,s[1]=Sa.y,s[5]=Zh.y,s[9]=ti.y,s[2]=Sa.z,s[6]=Zh.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],u=i[14],_=i[3],y=i[7],v=i[11],T=i[15],A=s[0],w=s[4],R=s[8],E=s[12],M=s[1],N=s[5],z=s[9],F=s[13],X=s[2],j=s[6],q=s[10],et=s[14],G=s[3],ct=s[7],ft=s[11],Z=s[15];return a[0]=r*A+o*M+l*X+c*G,a[4]=r*w+o*N+l*j+c*ct,a[8]=r*R+o*z+l*q+c*ft,a[12]=r*E+o*F+l*et+c*Z,a[1]=h*A+p*M+f*X+d*G,a[5]=h*w+p*N+f*j+d*ct,a[9]=h*R+p*z+f*q+d*ft,a[13]=h*E+p*F+f*et+d*Z,a[2]=g*A+x*M+m*X+u*G,a[6]=g*w+x*N+m*j+u*ct,a[10]=g*R+x*z+m*q+u*ft,a[14]=g*E+x*F+m*et+u*Z,a[3]=_*A+y*M+v*X+T*G,a[7]=_*w+y*N+v*j+T*ct,a[11]=_*R+y*z+v*q+T*ft,a[15]=_*E+y*F+v*et+T*Z,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+a*l*p-s*c*p-a*o*f+i*c*f+s*o*d-i*l*d)+x*(+n*l*d-n*c*f+a*r*f-s*r*d+s*c*h-a*l*h)+m*(+n*c*p-n*o*d-a*r*p+i*r*d+a*o*h-i*c*h)+u*(-s*o*h-n*l*p+n*o*f+s*r*p-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],u=t[15],_=p*m*c-x*f*c+x*l*d-o*m*d-p*l*u+o*f*u,y=g*f*c-h*m*c-g*l*d+r*m*d+h*l*u-r*f*u,v=h*x*c-g*p*c+g*o*d-r*x*d-h*o*u+r*p*u,T=g*p*l-h*x*l-g*o*f+r*x*f+h*o*m-r*p*m,A=n*_+i*y+s*v+a*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=_*w,t[1]=(x*f*a-p*m*a-x*s*d+i*m*d+p*s*u-i*f*u)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(p*l*a-o*f*a-p*s*c+i*f*c+o*s*d-i*l*d)*w,t[4]=y*w,t[5]=(h*m*a-g*f*a+g*s*d-n*m*d-h*s*u+n*f*u)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*d+n*l*d)*w,t[8]=v*w,t[9]=(g*p*a-h*x*a-g*i*d+n*x*d+h*i*u-n*p*u)*w,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*u+n*o*u)*w,t[11]=(h*o*a-r*p*a-h*i*c+n*p*c+r*i*d-n*o*d)*w,t[12]=T*w,t[13]=(h*x*s-g*p*s+g*i*f-n*x*f-h*i*m+n*p*m)*w,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*p*s-h*o*s+h*i*l-n*p*l-r*i*f+n*o*f)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,f=a*c,d=a*h,g=a*p,x=r*h,m=r*p,u=o*p,_=l*c,y=l*h,v=l*p,T=i.x,A=i.y,w=i.z;return s[0]=(1-(x+u))*T,s[1]=(d+v)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+u))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(m-_)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=No.set(s[0],s[1],s[2]).length(),r=No.set(s[4],s[5],s[6]).length(),o=No.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ni.copy(this);let c=1/a,h=1/r,p=1/o;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=h,Ni.elements[5]*=h,Ni.elements[6]*=h,Ni.elements[8]*=p,Ni.elements[9]*=p,Ni.elements[10]*=p,n.setFromRotationMatrix(Ni),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Oi,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),f=(n+t)/(n-t),d=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Oi)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===bc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Oi,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),f=-(n+t)/(n-t),d=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Oi)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===bc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},No=new U,Ni=new jt,$w=new U(0,0,0),tC=new U(1,1,1),Sa=new U,Zh=new U,ti=new U,t1=new jt,e1=new Ns,xi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return t1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(t1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return e1.setFromEuler(this),this.setFromQuaternion(e1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eC=0,n1=new U,Lo=new Ns,As=new jt,Jh=new U,fc=new U,nC=new U,iC=new Ns,i1=new U(1,0,0),s1=new U(0,1,0),a1=new U(0,0,1),r1={type:"added"},sC={type:"removed"},Oo={type:"childadded",child:null},o0={type:"childremoved",child:null},Ye=class e extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new xi,i=new Ns,s=new U(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Wt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lo.setFromAxisAngle(t,n),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(t,n){return Lo.setFromAxisAngle(t,n),this.quaternion.premultiply(Lo),this}rotateX(t){return this.rotateOnAxis(i1,t)}rotateY(t){return this.rotateOnAxis(s1,t)}rotateZ(t){return this.rotateOnAxis(a1,t)}translateOnAxis(t,n){return n1.copy(t).applyQuaternion(this.quaternion),this.position.add(n1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(i1,t)}translateY(t){return this.translateOnAxis(s1,t)}translateZ(t){return this.translateOnAxis(a1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Jh.copy(t):Jh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(fc,Jh,this.up):As.lookAt(Jh,fc,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),Lo.setFromRotationMatrix(As),this.quaternion.premultiply(Lo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(r1),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(sC),o0.child=t,this.dispatchEvent(o0),o0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),As.multiply(t.parent.matrixWorld)),t.applyMatrix4(As),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(r1),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fc,t,nC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fc,iC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new U(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=new U,ws=new U,l0=new U,Cs=new U,Io=new U,Po=new U,o1=new U,c0=new U,u0=new U,h0=new U,f0=new re,d0=new re,p0=new re,Ea=class e{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Li.subVectors(t,n),s.cross(Li);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Li.subVectors(s,n),ws.subVectors(i,n),l0.subVectors(t,n);let r=Li.dot(Li),o=Li.dot(ws),l=Li.dot(l0),c=ws.dot(ws),h=ws.dot(l0),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let f=1/p,d=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-d-g,g,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Cs.x),l.addScaledVector(r,Cs.y),l.addScaledVector(o,Cs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return f0.setScalar(0),d0.setScalar(0),p0.setScalar(0),f0.fromBufferAttribute(t,n),d0.fromBufferAttribute(t,i),p0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(f0,a.x),r.addScaledVector(d0,a.y),r.addScaledVector(p0,a.z),r}static isFrontFacing(t,n,i,s){return Li.subVectors(i,n),ws.subVectors(t,n),Li.cross(ws).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),Li.cross(ws).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Io.subVectors(s,i),Po.subVectors(a,i),c0.subVectors(t,i);let l=Io.dot(c0),c=Po.dot(c0);if(l<=0&&c<=0)return n.copy(i);u0.subVectors(t,s);let h=Io.dot(u0),p=Po.dot(u0);if(h>=0&&p<=h)return n.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Io,r);h0.subVectors(t,a);let d=Io.dot(h0),g=Po.dot(h0);if(g>=0&&d<=g)return n.copy(a);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Po,o);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return o1.subVectors(a,s),o=(p-h)/(p-h+(d-g)),n.copy(s).addScaledVector(o1,o);let u=1/(m+x+f);return r=x*u,o=f*u,n.copy(i).addScaledVector(Io,r).addScaledVector(Po,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ma={h:0,s:0,l:0},Kh={h:0,s:0,l:0};function m0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Vt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ie.workingColorSpace){return this.r=t,this.g=n,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ie.workingColorSpace){if(t=Q0(t,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=m0(r,a,t+1/3),this.g=m0(r,a,t),this.b=m0(r,a,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,n=Cn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Cn){let i=vb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return ie.workingToColorSpace(yn.copy(this),t),Math.round(Jt(yn.r*255,0,255))*65536+Math.round(Jt(yn.g*255,0,255))*256+Math.round(Jt(yn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ie.workingColorSpace){ie.workingToColorSpace(yn.copy(this),n);let i=yn.r,s=yn.g,a=yn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ie.workingColorSpace){return ie.workingToColorSpace(yn.copy(this),n),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Cn){ie.workingToColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b;return t!==Cn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ma),this.setHSL(Ma.h+t,Ma.s+n,Ma.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ma),t.getHSL(Kh);let i=_c(Ma.h,Kh.h,n),s=_c(Ma.s,Kh.s,n),a=_c(Ma.l,Kh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Vt;Vt.NAMES=vb;var aC=0,ns=class extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=hr,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=Aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==Ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pf&&(i.blendSrc=this.blendSrc),this.blendDst!==mf&&(i.blendDst=this.blendDst),this.blendEquation!==Aa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ls=class extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new U,Qh=new wt,rC=0,qe=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rC++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=U0,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qh.fromBufferAttribute(this,n),Qh.applyMatrix3(t),this.setXY(n,Qh.x,Qh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix3(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix4(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyNormalMatrix(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.transformDirection(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Vo(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array),a=wn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==U0&&(t.usage=this.usage),t}};var gr=class extends qe{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Ac=class extends qe{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ye=class extends qe{constructor(t,n,i){super(new Float32Array(t),n,i)}},oC=0,_i=new jt,g0=new Ye,zo=new U,ei=new Pi,dc=new Pi,an=new U,Ze=class e extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oC++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(j0(t)?Ac:gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Wt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,n,i){return _i.makeTranslation(t,n,i),this.applyMatrix4(_i),this}scale(t,n,i){return _i.makeScale(t,n,i),this.applyMatrix4(_i),this}lookAt(t){return g0.lookAt(t),g0.updateMatrix(),this.applyMatrix4(g0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zo).negate(),this.translate(zo.x,zo.y,zo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];dc.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(ei.min,dc.min),ei.expandByPoint(an),an.addVectors(ei.max,dc.max),ei.expandByPoint(an)):(ei.expandByPoint(dc.min),ei.expandByPoint(dc.max))}ei.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)an.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(an));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(zo.fromBufferAttribute(t,c),an.add(zo)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;let c=new U,h=new U,p=new U,f=new wt,d=new wt,g=new wt,x=new U,m=new U;function u(R,E,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,M),f.fromBufferAttribute(a,R),d.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),h.sub(c),p.sub(c),d.sub(f),g.sub(f);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(N),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),o[R].add(x),o[E].add(x),o[M].add(x),l[R].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,E=_.length;R<E;++R){let M=_[R],N=M.start,z=M.count;for(let F=N,X=N+z;F<X;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new U,v=new U,T=new U,A=new U;function w(R){T.fromBufferAttribute(s,R),A.copy(T);let E=o[R];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(A,E);let N=v.dot(l[R])<0?-1:1;r.setXYZW(R,y.x,y.y,y.z,N)}for(let R=0,E=_.length;R<E;++R){let M=_[R],N=M.start,z=M.count;for(let F=N,X=N+z;F<X;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[d++]}return new qe(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let f=c[h],d=t(f,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},l1=new jt,lr=new mr,jh=new ni,c1=new U,$h=new U,tf=new U,ef=new U,v0=new U,nf=new U,u1=new U,sf=new U,me=class extends Ye{constructor(t=new Ze,n=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){nf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(v0.fromBufferAttribute(p,t),r?nf.addScaledVector(v0,h):nf.addScaledVector(v0.sub(n),h))}n.add(nf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jh.copy(i.boundingSphere),jh.applyMatrix4(a),lr.copy(t.ray).recast(t.near),!(jh.containsPoint(lr.origin)===!1&&(lr.intersectSphere(jh,c1)===null||lr.origin.distanceToSquared(c1)>(t.far-t.near)**2))&&(l1.copy(a).invert(),lr.copy(t.ray).applyMatrix4(l1),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,lr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,f=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,T=y;v<T;v+=3){let A=o.getX(v),w=o.getX(v+1),R=o.getX(v+2);s=af(this,u,t,i,c,h,p,A,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let _=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=af(this,r,t,i,c,h,p,_,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,T=y;v<T;v+=3){let A=v,w=v+1,R=v+2;s=af(this,u,t,i,c,h,p,A,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let _=m,y=m+1,v=m+2;s=af(this,r,t,i,c,h,p,_,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function lC(e,t,n,i,s,a,r,o){let l;if(t.side===pn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ds,o),l===null)return null;sf.copy(o),sf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(sf);return c<n.near||c>n.far?null:{distance:c,point:sf.clone(),object:e}}function af(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,$h),e.getVertexPosition(l,tf),e.getVertexPosition(c,ef);let h=lC(e,t,n,i,$h,tf,ef,u1);if(h){let p=new U;Ea.getBarycoord(u1,$h,tf,ef,p),s&&(h.uv=Ea.getInterpolatedAttribute(s,o,l,c,p,new wt)),a&&(h.uv1=Ea.getInterpolatedAttribute(a,o,l,c,p,new wt)),r&&(h.normal=Ea.getInterpolatedAttribute(r,o,l,c,p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new U,materialIndex:0};Ea.getNormal($h,tf,ef,f.normal),h.face=f,h.barycoord=p}return h}var Dn=class e extends Ze{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],f=0,d=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(p,2));function g(x,m,u,_,y,v,T,A,w,R,E){let M=v/w,N=T/R,z=v/2,F=T/2,X=A/2,j=w+1,q=R+1,et=0,G=0,ct=new U;for(let ft=0;ft<q;ft++){let Z=ft*N-F;for(let vt=0;vt<j;vt++){let Ct=vt*M-z;ct[x]=Ct*_,ct[m]=Z*y,ct[u]=X,c.push(ct.x,ct.y,ct.z),ct[x]=0,ct[m]=0,ct[u]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),p.push(vt/w),p.push(1-ft/R),et+=1}}for(let ft=0;ft<R;ft++)for(let Z=0;Z<w;Z++){let vt=f+Z+j*ft,Ct=f+Z+j*(ft+1),Pt=f+(Z+1)+j*(ft+1),Rt=f+(Z+1)+j*ft;l.push(vt,Ct,Rt),l.push(Ct,Pt,Rt),G+=6}o.addGroup(d,G,E),d+=G,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function br(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function xn(e){let t={};for(let n=0;n<e.length;n++){let i=br(e[n]);for(let s in i)t[s]=i[s]}return t}function cC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function $0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var _b={clone:br,merge:xn},uC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uC,this.fragmentShader=hC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=cC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},wc=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ba=new U,h1=new wt,f1=new wt,We=class extends wc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ba.x,ba.y).multiplyScalar(-t/ba.z),ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ba.x,ba.y).multiplyScalar(-t/ba.z)}getViewSize(t,n){return this.getViewBounds(t,h1,f1),n.subVectors(f1,h1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(vc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Bo=-90,Fo=1,Mf=class extends Ye{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Bo,Fo,t,n);s.layers=this.layers,this.add(s);let a=new We(Bo,Fo,t,n);a.layers=this.layers,this.add(a);let r=new We(Bo,Fo,t,n);r.layers=this.layers,this.add(r);let o=new We(Bo,Fo,t,n);o.layers=this.layers,this.add(o);let l=new We(Bo,Fo,t,n);l.layers=this.layers,this.add(l);let c=new We(Bo,Fo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(p,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Cc=class extends Hn{constructor(t=[],n=xr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bf=class extends es{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dn(5,5,5),a=new rn({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:zs});a.uniforms.tEquirect.value=n;let r=new me(s,a),o=n.minFilter;return n.minFilter===Ua&&(n.minFilter=Ii),new Mf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Rn=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},fC={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fC)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Rc=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Os=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var d1=new U,p1=new re,m1=new re,dC=new U,g1=new jt,rf=new U,_0=new ni,v1=new jt,y0=new mr,Dc=class extends me{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=A0,this.bindMatrix=new jt,this.bindMatrixInverse=new jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pi),this.boundingBox.makeEmpty();let n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,rf),this.boundingBox.expandByPoint(rf)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,rf),this.boundingSphere.expandByPoint(rf)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_0.copy(this.boundingSphere),_0.applyMatrix4(s),t.ray.intersectsSphere(_0)!==!1&&(v1.copy(s).invert(),y0.copy(t.ray).applyMatrix4(v1),!(this.boundingBox!==null&&y0.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,y0)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new re,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){t.fromBufferAttribute(n,i);let a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),n.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===A0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ib?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){let i=this.skeleton,s=this.geometry;p1.fromBufferAttribute(s.attributes.skinIndex,t),m1.fromBufferAttribute(s.attributes.skinWeight,t),d1.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let a=0;a<4;a++){let r=m1.getComponent(a);if(r!==0){let o=p1.getComponent(a);g1.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(dC.copy(d1).applyMatrix4(g1),r)}}return n.applyMatrix4(this.bindMatrixInverse)}},Zo=class extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}},Uc=class extends Hn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Fn,h=Fn,p,f){super(null,r,o,l,c,h,s,a,p,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_1=new jt,pC=new jt,Nc=class e{constructor(t=[],n=[]){this.uuid=Mr(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){let i=new jt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,r=t.length;a<r;a++){let o=t[a]?t[a].matrixWorld:pC;_1.multiplyMatrices(o,n[a]),_1.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let n=new Float32Array(t*t*4);n.set(this.boneMatrices);let i=new Uc(n,t,t,si,bi);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){let s=this.bones[n];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let a=t.bones[i],r=n[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new Zo),this.bones.push(r),this.boneInverses.push(new jt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let n=this.bones,i=this.boneInverses;for(let s=0,a=n.length;s<a;s++){let r=n[s];t.bones.push(r.uuid);let o=i[s];t.boneInverses.push(o.toArray())}return t}},Lc=class extends qe{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ho=new jt,y1=new jt,of=[],x1=new Pi,mC=new jt,pc=new me,mc=new ni,Oc=class extends me{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mC)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ho),x1.copy(t.boundingBox).applyMatrix4(Ho),this.boundingBox.union(x1)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ho),mc.copy(t.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union(mc)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(pc.geometry=this.geometry,pc.material=this.material,pc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(i),t.ray.intersectsSphere(mc)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ho),y1.multiplyMatrices(i,Ho),pc.matrixWorld=y1,pc.raycast(t,of);for(let r=0,o=of.length;r<o;r++){let l=of[r];l.instanceId=a,l.object=this,n.push(l)}of.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Uc(new Float32Array(s*this.count),s,this.count,ld,bi));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},x0=new U,gC=new U,vC=new Wt,yi=class{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=x0.subVectors(i,n).cross(gC.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(x0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||vC.getNormalMatrix(t),s=this.coplanarPoint(x0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new ni,_C=new wt(.5,.5),lf=new U,Jo=class{constructor(t=new yi,n=new yi,i=new yi,s=new yi,a=new yi,r=new yi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Oi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],f=a[6],d=a[7],g=a[8],x=a[9],m=a[10],u=a[11],_=a[12],y=a[13],v=a[14],T=a[15];if(s[0].setComponents(c-r,d-h,u-g,T-_).normalize(),s[1].setComponents(c+r,d+h,u+g,T+_).normalize(),s[2].setComponents(c+o,d+p,u+x,T+y).normalize(),s[3].setComponents(c-o,d-p,u-x,T-y).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,u-m,T-v).normalize();else if(s[4].setComponents(c-l,d-f,u-m,T-v).normalize(),n===Oi)s[5].setComponents(c+l,d+f,u+m,T+v).normalize();else if(n===bc)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);let n=_C.distanceTo(t.center);return cr.radius=.7071067811865476+n,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(lf.x=s.normal.x>0?t.max.x:t.min.x,lf.y=s.normal.y>0?t.max.y:t.min.y,lf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ef=class extends ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},S1=new jt,N0=new mr,cf=new ni,uf=new U,vr=class extends Ye{constructor(t=new Ze,n=new Ef){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cf.copy(i.boundingSphere),cf.applyMatrix4(s),cf.radius+=a,t.ray.intersectsSphere(cf)===!1)return;S1.copy(s).invert(),N0.copy(t.ray).applyMatrix4(S1);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);uf.fromBufferAttribute(p,m),M1(uf,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let g=f,x=d;g<x;g++)uf.fromBufferAttribute(p,g),M1(uf,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function M1(e,t,n,i,s,a,r){let o=N0.distanceSqToPoint(e);if(o<n){let l=new U;N0.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Ic=class extends Hn{constructor(t,n,i=Na,s,a,r,o=Fn,l=Fn,c,h=ko,p=1){if(h!==ko&&h!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:p};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Pc=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var is=class e extends Ze{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],p=[],f=[],d=[],g=0,x=[],m=i/2,u=0;_(),r===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(d,2));function _(){let v=new U,T=new U,A=0,w=(n-t)/i;for(let R=0;R<=a;R++){let E=[],M=R/a,N=M*(n-t)+t;for(let z=0;z<=s;z++){let F=z/s,X=F*l+o,j=Math.sin(X),q=Math.cos(X);T.x=N*j,T.y=-M*i+m,T.z=N*q,p.push(T.x,T.y,T.z),v.set(j,w,q).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-M),E.push(g++)}x.push(E)}for(let R=0;R<s;R++)for(let E=0;E<a;E++){let M=x[E][R],N=x[E+1][R],z=x[E+1][R+1],F=x[E][R+1];(t>0||E!==0)&&(h.push(M,N,F),A+=3),(n>0||E!==a-1)&&(h.push(N,z,F),A+=3)}c.addGroup(u,A,0),u+=A}function y(v){let T=g,A=new wt,w=new U,R=0,E=v===!0?t:n,M=v===!0?1:-1;for(let z=1;z<=s;z++)p.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let N=g;for(let z=0;z<=s;z++){let X=z/s*l+o,j=Math.cos(X),q=Math.sin(X);w.x=E*q,w.y=m*M,w.z=E*j,p.push(w.x,w.y,w.z),f.push(0,M,0),A.x=j*.5+.5,A.y=q*.5*M+.5,d.push(A.x,A.y),g++}for(let z=0;z<s;z++){let F=T+z,X=N+z;v===!0?h.push(X,X+1,F):h.push(X+1,X,F),R+=3}c.addGroup(u,R,v===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zc=class e extends is{constructor(t=1,n=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,n,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let h=i[s],f=i[s+1]-h,d=(r-h)/f;return(s+d)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new wt:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new U,s=[],a=[],r=[],o=new U,l=new jt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}a[0]=new U,r[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(s[d],a[d])}if(n===!0){let d=Math.acos(Jt(a[0].dot(a[t]),-1,1));d/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bc=class extends Si{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new wt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*p+this.aX,c=f*p+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Tf=class extends Bc{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function tv(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,p){let f=(r-a)/c-(o-a)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+p)+(l-o)/p;f*=h,d*=h,s(r,o,f,d)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var hf=new U,S0=new tv,M0=new tv,b0=new tv,Is=class extends Si{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new U){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(hf.subVectors(s[0],s[1]).add(s[0]),c=hf);let p=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(hf.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=hf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),S0.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,g,x,m),M0.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,g,x,m),b0.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(S0.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),M0.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),b0.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(S0.calc(l),M0.calc(l),b0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function b1(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function yC(e,t){let n=1-e;return n*n*t}function xC(e,t){return 2*(1-e)*e*t}function SC(e,t){return e*e*t}function yc(e,t,n,i){return yC(e,t)+xC(e,n)+SC(e,i)}function MC(e,t){let n=1-e;return n*n*n*t}function bC(e,t){let n=1-e;return 3*n*n*e*t}function EC(e,t){return 3*(1-e)*e*e*t}function TC(e,t){return e*e*e*t}function xc(e,t,n,i,s){return MC(e,t)+bC(e,n)+EC(e,i)+TC(e,s)}var Af=class extends Si{constructor(t=new wt,n=new wt,i=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new wt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(xc(t,s.x,a.x,r.x,o.x),xc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wf=class extends Si{constructor(t=new U,n=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new U){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(xc(t,s.x,a.x,r.x,o.x),xc(t,s.y,a.y,r.y,o.y),xc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cf=class extends Si{constructor(t=new wt,n=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new wt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new wt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rf=class extends Si{constructor(t=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new U){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Df=class extends Si{constructor(t=new wt,n=new wt,i=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new wt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(yc(t,s.x,a.x,r.x),yc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fc=class extends Si{constructor(t=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new U){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(yc(t,s.x,a.x,r.x),yc(t,s.y,a.y,r.y),yc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uf=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new wt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return i.set(b1(o,l.x,c.x,h.x,p.x),b1(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new wt().fromArray(s))}return this}},AC=Object.freeze({__proto__:null,ArcCurve:Tf,CatmullRomCurve3:Is,CubicBezierCurve:Af,CubicBezierCurve3:wf,EllipseCurve:Bc,LineCurve:Cf,LineCurve3:Rf,QuadraticBezierCurve:Df,QuadraticBezierCurve3:Fc,SplineCurve:Uf});var Ps=class e extends Ze{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,f=n/l,d=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let _=u*f-r;for(let y=0;y<c;y++){let v=y*p-a;g.push(v,-_,0),x.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){let y=_+c*u,v=_+c*(u+1),T=_+1+c*(u+1),A=_+1+c*u;d.push(y,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var _r=class e extends Ze{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],p=new U,f=new U,d=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let _=[],y=u/i,v=0;u===0&&r===0?v=.5/n:u===i&&l===Math.PI&&(v=-.5/n);for(let T=0;T<=n;T++){let A=T/n;p.x=-t*Math.cos(s+A*a)*Math.sin(r+y*o),p.y=t*Math.cos(r+y*o),p.z=t*Math.sin(s+A*a)*Math.sin(r+y*o),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(A+v,1-y),_.push(c++)}h.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){let y=h[u][_+1],v=h[u][_],T=h[u+1][_],A=h[u+1][_+1];(u!==0||r>0)&&d.push(y,v,A),(u!==i-1||l<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ss=class e extends Ze{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],h=new U,p=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*a,m=d/i*Math.PI*2;p.x=(t+n*Math.cos(m))*Math.cos(x),p.y=(t+n*Math.cos(m))*Math.sin(x),p.z=n*Math.sin(m),o.push(p.x,p.y,p.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(p,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,u=(s+1)*(d-1)+g,_=(s+1)*d+g;r.push(x,m,_),r.push(m,u,_)}this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Hc=class e extends Ze{constructor(t=1,n=.4,i=64,s=8,a=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:n,tubularSegments:i,radialSegments:s,p:a,q:r},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],h=[],p=new U,f=new U,d=new U,g=new U,x=new U,m=new U,u=new U;for(let y=0;y<=i;++y){let v=y/i*a*Math.PI*2;_(v,a,r,t,d),_(v+.01,a,r,t,g),m.subVectors(g,d),u.addVectors(g,d),x.crossVectors(m,u),u.crossVectors(x,m),x.normalize(),u.normalize();for(let T=0;T<=s;++T){let A=T/s*Math.PI*2,w=-n*Math.cos(A),R=n*Math.sin(A);p.x=d.x+(w*u.x+R*x.x),p.y=d.y+(w*u.y+R*x.y),p.z=d.z+(w*u.z+R*x.z),l.push(p.x,p.y,p.z),f.subVectors(p,d).normalize(),c.push(f.x,f.y,f.z),h.push(y/i),h.push(T/s)}}for(let y=1;y<=i;y++)for(let v=1;v<=s;v++){let T=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),w=(s+1)*y+v,R=(s+1)*(y-1)+v;o.push(T,A,R),o.push(A,w,R)}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2));function _(y,v,T,A,w){let R=Math.cos(y),E=Math.sin(y),M=T/v*y,N=Math.cos(M);w.x=A*(2+N)*.5*R,w.y=A*(2+N)*E*.5,w.z=A*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Vc=class e extends Ze{constructor(t=new Fc(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),n=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:a};let r=t.computeFrenetFrames(n,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new U,l=new U,c=new wt,h=new U,p=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(d,2));function x(){for(let y=0;y<n;y++)m(y);m(a===!1?n:0),_(),u()}function m(y){h=t.getPointAt(y/n,h);let v=r.normals[y],T=r.binormals[y];for(let A=0;A<=s;A++){let w=A/s*Math.PI*2,R=Math.sin(w),E=-Math.cos(w);l.x=E*v.x+R*T.x,l.y=E*v.y+R*T.y,l.z=E*v.z+R*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function u(){for(let y=1;y<=n;y++)for(let v=1;v<=s;v++){let T=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),w=(s+1)*y+v,R=(s+1)*(y-1)+v;g.push(T,A,R),g.push(A,w,R)}}function _(){for(let y=0;y<=n;y++)for(let v=0;v<=s;v++)c.x=y/n,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new AC[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var He=class extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zi=class extends He{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Gc=class extends ns{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nf=class extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lf=class extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ff(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function wC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var yr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Of=class extends yr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:w0,endingEnd:w0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case C0:a=t,o=2*n-i;break;case R0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case C0:r=t,l=2*i-n;break;case R0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let T=0;T!==o;++T)a[T]=u*r[h+T]+_*r[c+T]+y*r[l+T]+v*r[p+T];return a}},If=class extends yr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*p+r[l+f]*h;return a}},Pf=class extends yr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ii=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ff(n,this.TimeBufferType),this.values=ff(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ff(t.times,Array),values:ff(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Pf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new If(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Of(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Sc:n=this.InterpolantFactoryMethodDiscrete;break;case _f:n=this.InterpolantFactoryMethodLinear;break;case df:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sc;case this.InterpolantFactoryMethodLinear:return _f;case this.InterpolantFactoryMethodSmooth:return df}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&wC(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===df,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,f=p-i,d=p+i;for(let g=0;g!==i;++g){let x=n[p+g];if(x!==n[f+g]||x!==n[d+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,f=r*i;for(let d=0;d!==i;++d)n[f+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=_f;var wa=class extends ii{constructor(t,n,i){super(t,n,i)}};wa.prototype.ValueTypeName="bool";wa.prototype.ValueBufferType=Array;wa.prototype.DefaultInterpolation=Sc;wa.prototype.InterpolantFactoryMethodLinear=void 0;wa.prototype.InterpolantFactoryMethodSmooth=void 0;var zf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};zf.prototype.ValueTypeName="color";var Bf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};Bf.prototype.ValueTypeName="number";var Ff=class extends yr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Ns.slerpFlat(a,0,r,c-o,r,c,l);return a}},kc=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Ff(this.times,this.values,this.getValueSize(),t)}};kc.prototype.ValueTypeName="quaternion";kc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends ii{constructor(t,n,i){super(t,n,i)}};Ca.prototype.ValueTypeName="string";Ca.prototype.ValueBufferType=Array;Ca.prototype.DefaultInterpolation=Sc;Ca.prototype.InterpolantFactoryMethodLinear=void 0;Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Hf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};Hf.prototype.ValueTypeName="vector";var Vf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let d=c[p],g=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},yb=new Vf,Gf=class{constructor(t){this.manager=t!==void 0?t:yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ko=class extends Ye{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Xc=class extends Ko{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},E0=new jt,E1=new U,T1=new U,kf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;E1.setFromMatrixPosition(t.matrixWorld),n.position.copy(E1),T1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(T1),n.updateMatrixWorld(),E0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(E0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(E0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},L0=class extends kf{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let n=this.camera,i=pr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||n.far;(i!==n.fov||s!==n.aspect||a!==n.far)&&(n.fov=i,n.aspect=s,n.far=a,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Wc=class extends Ko{constructor(t,n,i=0,s=Math.PI/3,a=0,r=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new L0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},A1=new jt,gc=new U,T0=new U,O0=class extends kf{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),gc.setFromMatrixPosition(t.matrixWorld),i.position.copy(gc),T0.copy(i.position),T0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(T0),i.updateMatrixWorld(),s.makeTranslation(-gc.x,-gc.y,-gc.z),A1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A1,i.coordinateSystem,i.reversedDepth)}},Ra=class extends Ko{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new O0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xf=class extends wc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Wf=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ev="\\[\\]\\.:\\/",CC=new RegExp("["+ev+"]","g"),nv="[^"+ev+"]",RC="[^"+ev.replace("\\.","")+"]",DC=/((?:WC+[\/:])*)/.source.replace("WC",nv),UC=/(WCOD+)?/.source.replace("WCOD",RC),NC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nv),LC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nv),OC=new RegExp("^"+DC+UC+NC+LC+"$"),IC=["material","materials","bones","map"],I0=class{constructor(t,n,i){let s=i||Re.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Re=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(CC,"")}static parseTrackName(t){let n=OC.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);IC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=I0;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MU=new Float32Array(1);var w1=new jt,qc=class{constructor(t,n,i=0,s=1/0){this.ray=new mr(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return w1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w1),this}intersectObject(t,n=!0,i=[]){return P0(t,this,i,n),i.sort(C1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)P0(t[s],this,i,n);return i.sort(C1),i}};function C1(e,t){return e.distance-t.distance}function P0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)P0(a[r],t,n,!0)}}function iv(e,t,n,i){let s=PC(i);switch(n){case q0:return e*t;case ld:return e*t/s.components*s.byteLength;case cd:return e*t/s.components*s.byteLength;case Z0:return e*t*2/s.components*s.byteLength;case ud:return e*t*2/s.components*s.byteLength;case Y0:return e*t*3/s.components*s.byteLength;case si:return e*t*4/s.components*s.byteLength;case hd:return e*t*4/s.components*s.byteLength;case Jc:case Kc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qc:case jc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dd:case md:return Math.max(e,16)*Math.max(t,8)/4;case fd:case pd:return Math.max(e,8)*Math.max(t,8)/2;case gd:case vd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _d:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Md:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case bd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ld:case Od:case Id:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Pd:case zd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bd:case Fd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PC(e){switch(e){case Bi:case G0:return{byteLength:1,components:1};case Qo:case k0:case jo:return{byteLength:2,components:1};case rd:case od:return{byteLength:2,components:4};case Na:case ad:case bi:return{byteLength:4,components:1};case X0:case W0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function BC(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){let g=p[f],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){let x=p[d];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var FC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HC=`#ifdef USE_ALPHAHASH
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
#endif`,VC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WC=`#ifdef USE_AOMAP
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
#endif`,qC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YC=`#ifdef USE_BATCHING
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
#endif`,ZC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jC=`#ifdef USE_IRIDESCENCE
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
#endif`,$C=`#ifdef USE_BUMPMAP
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
#endif`,tR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lR=`#define PI 3.141592653589793
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
} // validated`,cR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uR=`vec3 transformedNormal = objectNormal;
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
#endif`,hR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mR="gl_FragColor = linearToOutputTexel( gl_FragColor );",gR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vR=`#ifdef USE_ENVMAP
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
#endif`,_R=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yR=`#ifdef USE_ENVMAP
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
#endif`,xR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
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
#endif`,MR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ER=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AR=`#ifdef USE_GRADIENTMAP
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
}`,wR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DR=`uniform bool receiveShadow;
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
#endif`,UR=`#ifdef USE_ENVMAP
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
#endif`,NR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PR=`PhysicalMaterial material;
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
#endif`,zR=`struct PhysicalMaterial {
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
}`,BR=`
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
#endif`,FR=`#if defined( RE_IndirectDiffuse )
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
#endif`,HR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZR=`#if defined( USE_POINTS_UV )
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
#endif`,JR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$R=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t2=`#ifdef USE_MORPHTARGETS
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
#endif`,e2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o2=`#ifdef USE_NORMALMAP
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
#endif`,l2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b2=`float getShadowMask() {
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
}`,E2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T2=`#ifdef USE_SKINNING
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
#endif`,A2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w2=`#ifdef USE_SKINNING
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
#endif`,C2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N2=`#ifdef USE_TRANSMISSION
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
#endif`,L2=`#ifdef USE_TRANSMISSION
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
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F2=`uniform sampler2D t2D;
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
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`#include <common>
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
}`,W2=`#if DEPTH_PACKING == 3200
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
}`,q2=`#define DISTANCE
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
}`,Y2=`#define DISTANCE
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
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`uniform float scale;
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
}`,Q2=`uniform vec3 diffuse;
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
}`,j2=`#include <common>
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
}`,$2=`uniform vec3 diffuse;
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
}`,t3=`#define LAMBERT
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
}`,e3=`#define LAMBERT
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
}`,n3=`#define MATCAP
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
}`,i3=`#define MATCAP
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
}`,s3=`#define NORMAL
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
}`,a3=`#define NORMAL
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
}`,r3=`#define PHONG
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
}`,o3=`#define PHONG
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
}`,l3=`#define STANDARD
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
}`,c3=`#define STANDARD
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
}`,u3=`#define TOON
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
}`,h3=`#define TOON
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
}`,f3=`uniform float size;
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
}`,d3=`uniform vec3 diffuse;
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
}`,p3=`#include <common>
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
}`,m3=`uniform vec3 color;
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
}`,g3=`uniform float rotation;
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
}`,v3=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:FC,alphahash_pars_fragment:HC,alphamap_fragment:VC,alphamap_pars_fragment:GC,alphatest_fragment:kC,alphatest_pars_fragment:XC,aomap_fragment:WC,aomap_pars_fragment:qC,batching_pars_vertex:YC,batching_vertex:ZC,begin_vertex:JC,beginnormal_vertex:KC,bsdfs:QC,iridescence_fragment:jC,bumpmap_pars_fragment:$C,clipping_planes_fragment:tR,clipping_planes_pars_fragment:eR,clipping_planes_pars_vertex:nR,clipping_planes_vertex:iR,color_fragment:sR,color_pars_fragment:aR,color_pars_vertex:rR,color_vertex:oR,common:lR,cube_uv_reflection_fragment:cR,defaultnormal_vertex:uR,displacementmap_pars_vertex:hR,displacementmap_vertex:fR,emissivemap_fragment:dR,emissivemap_pars_fragment:pR,colorspace_fragment:mR,colorspace_pars_fragment:gR,envmap_fragment:vR,envmap_common_pars_fragment:_R,envmap_pars_fragment:yR,envmap_pars_vertex:xR,envmap_physical_pars_fragment:UR,envmap_vertex:SR,fog_vertex:MR,fog_pars_vertex:bR,fog_fragment:ER,fog_pars_fragment:TR,gradientmap_pars_fragment:AR,lightmap_pars_fragment:wR,lights_lambert_fragment:CR,lights_lambert_pars_fragment:RR,lights_pars_begin:DR,lights_toon_fragment:NR,lights_toon_pars_fragment:LR,lights_phong_fragment:OR,lights_phong_pars_fragment:IR,lights_physical_fragment:PR,lights_physical_pars_fragment:zR,lights_fragment_begin:BR,lights_fragment_maps:FR,lights_fragment_end:HR,logdepthbuf_fragment:VR,logdepthbuf_pars_fragment:GR,logdepthbuf_pars_vertex:kR,logdepthbuf_vertex:XR,map_fragment:WR,map_pars_fragment:qR,map_particle_fragment:YR,map_particle_pars_fragment:ZR,metalnessmap_fragment:JR,metalnessmap_pars_fragment:KR,morphinstance_vertex:QR,morphcolor_vertex:jR,morphnormal_vertex:$R,morphtarget_pars_vertex:t2,morphtarget_vertex:e2,normal_fragment_begin:n2,normal_fragment_maps:i2,normal_pars_fragment:s2,normal_pars_vertex:a2,normal_vertex:r2,normalmap_pars_fragment:o2,clearcoat_normal_fragment_begin:l2,clearcoat_normal_fragment_maps:c2,clearcoat_pars_fragment:u2,iridescence_pars_fragment:h2,opaque_fragment:f2,packing:d2,premultiplied_alpha_fragment:p2,project_vertex:m2,dithering_fragment:g2,dithering_pars_fragment:v2,roughnessmap_fragment:_2,roughnessmap_pars_fragment:y2,shadowmap_pars_fragment:x2,shadowmap_pars_vertex:S2,shadowmap_vertex:M2,shadowmask_pars_fragment:b2,skinbase_vertex:E2,skinning_pars_vertex:T2,skinning_vertex:A2,skinnormal_vertex:w2,specularmap_fragment:C2,specularmap_pars_fragment:R2,tonemapping_fragment:D2,tonemapping_pars_fragment:U2,transmission_fragment:N2,transmission_pars_fragment:L2,uv_pars_fragment:O2,uv_pars_vertex:I2,uv_vertex:P2,worldpos_vertex:z2,background_vert:B2,background_frag:F2,backgroundCube_vert:H2,backgroundCube_frag:V2,cube_vert:G2,cube_frag:k2,depth_vert:X2,depth_frag:W2,distanceRGBA_vert:q2,distanceRGBA_frag:Y2,equirect_vert:Z2,equirect_frag:J2,linedashed_vert:K2,linedashed_frag:Q2,meshbasic_vert:j2,meshbasic_frag:$2,meshlambert_vert:t3,meshlambert_frag:e3,meshmatcap_vert:n3,meshmatcap_frag:i3,meshnormal_vert:s3,meshnormal_frag:a3,meshphong_vert:r3,meshphong_frag:o3,meshphysical_vert:l3,meshphysical_frag:c3,meshtoon_vert:u3,meshtoon_frag:h3,points_vert:f3,points_frag:d3,shadow_vert:p3,shadow_frag:m3,sprite_vert:g3,sprite_frag:v3},ht={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},rs={basic:{uniforms:xn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:xn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:xn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:xn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:xn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:xn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:xn([ht.points,ht.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:xn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:xn([ht.common,ht.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:xn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:xn([ht.sprite,ht.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:xn([ht.common,ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:xn([ht.lights,ht.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};rs.physical={uniforms:xn([rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Vd={r:0,b:0,g:0},Er=new xi,_3=new jt;function y3(e,t,n,i,s,a,r){let o=new Vt(0),l=a===!0?0:1,c,h,p=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function x(y){let v=!1,T=g(y);T===null?u(o,l):T&&T.isColor&&(u(T,1),v=!0);let A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,v){let T=g(v);T&&(T.isCubeTexture||T.mapping===Yc)?(h===void 0&&(h=new me(new Dn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:br(rs.backgroundCube.uniforms),vertexShader:rs.backgroundCube.vertexShader,fragmentShader:rs.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_3.makeRotationFromEuler(Er)),h.material.toneMapped=ie.getTransfer(T.colorSpace)!==pe,(p!==T||f!==T.version||d!==e.toneMapping)&&(h.material.needsUpdate=!0,p=T,f=T.version,d=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new me(new Ps(2,2),new rn({name:"BackgroundMaterial",uniforms:br(rs.background.uniforms),vertexShader:rs.background.vertexShader,fragmentShader:rs.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(T.colorSpace)!==pe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||f!==T.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,p=T,f=T.version,d=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(Vd,$0(e)),i.buffers.color.setClear(Vd.r,Vd.g,Vd.b,v,r)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:x,addToRenderList:m,dispose:_}}function x3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,N,z,F,X){let j=!1,q=p(F,z,N);a!==q&&(a=q,c(a.object)),j=d(M,F,z,X),j&&g(M,F,z,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,v(M,N,z,F),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function p(M,N,z){let F=z.wireframe===!0,X=i[M.id];X===void 0&&(X={},i[M.id]=X);let j=X[N.id];j===void 0&&(j={},X[N.id]=j);let q=j[F];return q===void 0&&(q=f(l()),j[F]=q),q}function f(M){let N=[],z=[],F=[];for(let X=0;X<n;X++)N[X]=0,z[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,N,z,F){let X=a.attributes,j=N.attributes,q=0,et=z.getAttributes();for(let G in et)if(et[G].location>=0){let ft=X[G],Z=j[G];if(Z===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),ft===void 0||ft.attribute!==Z||Z&&ft.data!==Z.data)return!0;q++}return a.attributesNum!==q||a.index!==F}function g(M,N,z,F){let X={},j=N.attributes,q=0,et=z.getAttributes();for(let G in et)if(et[G].location>=0){let ft=j[G];ft===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));let Z={};Z.attribute=ft,ft&&ft.data&&(Z.data=ft.data),X[G]=Z,q++}a.attributes=X,a.attributesNum=q,a.index=F}function x(){let M=a.newAttributes;for(let N=0,z=M.length;N<z;N++)M[N]=0}function m(M){u(M,0)}function u(M,N){let z=a.newAttributes,F=a.enabledAttributes,X=a.attributeDivisors;z[M]=1,F[M]===0&&(e.enableVertexAttribArray(M),F[M]=1),X[M]!==N&&(e.vertexAttribDivisor(M,N),X[M]=N)}function _(){let M=a.newAttributes,N=a.enabledAttributes;for(let z=0,F=N.length;z<F;z++)N[z]!==M[z]&&(e.disableVertexAttribArray(z),N[z]=0)}function y(M,N,z,F,X,j,q){q===!0?e.vertexAttribIPointer(M,N,z,X,j):e.vertexAttribPointer(M,N,z,F,X,j)}function v(M,N,z,F){x();let X=F.attributes,j=z.getAttributes(),q=N.defaultAttributeValues;for(let et in j){let G=j[et];if(G.location>=0){let ct=X[et];if(ct===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let ft=ct.normalized,Z=ct.itemSize,vt=t.get(ct);if(vt===void 0)continue;let Ct=vt.buffer,Pt=vt.type,Rt=vt.bytesPerElement,k=Pt===e.INT||Pt===e.UNSIGNED_INT||ct.gpuType===ad;if(ct.isInterleavedBufferAttribute){let K=ct.data,at=K.stride,lt=ct.offset;if(K.isInstancedInterleavedBuffer){for(let $=0;$<G.locationSize;$++)u(G.location+$,K.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);e.bindBuffer(e.ARRAY_BUFFER,Ct);for(let $=0;$<G.locationSize;$++)y(G.location+$,Z/G.locationSize,Pt,ft,at*Rt,(lt+Z/G.locationSize*$)*Rt,k)}else{if(ct.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)u(G.location+K,ct.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);e.bindBuffer(e.ARRAY_BUFFER,Ct);for(let K=0;K<G.locationSize;K++)y(G.location+K,Z/G.locationSize,Pt,ft,Z*Rt,Z/G.locationSize*K*Rt,k)}}else if(q!==void 0){let ft=q[et];if(ft!==void 0)switch(ft.length){case 2:e.vertexAttrib2fv(G.location,ft);break;case 3:e.vertexAttrib3fv(G.location,ft);break;case 4:e.vertexAttrib4fv(G.location,ft);break;default:e.vertexAttrib1fv(G.location,ft)}}}}_()}function T(){R();for(let M in i){let N=i[M];for(let z in N){let F=N[z];for(let X in F)h(F[X].object),delete F[X];delete N[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let N=i[M.id];for(let z in N){let F=N[z];for(let X in F)h(F[X].object),delete F[X];delete N[z]}delete i[M.id]}function w(M){for(let N in i){let z=i[N];if(z[M.id]===void 0)continue;let F=z[M.id];for(let X in F)h(F[X].object),delete F[X];delete z[M.id]}}function R(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function S3(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,p){p!==0&&(e.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let d=0;for(let g=0;g<p;g++)d+=h[g];n.update(d,i,1)}function l(c,h,p,f){if(p===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x]*f[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function M3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==si&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let R=w===jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Bi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bi&&!R)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function b3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new yi,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||i!==0||s;return s=f,i=p.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,d){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,u=e.get(p);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let _=a?0:i,y=_*4,v=u.clippingState||null;l.value=v,v=h(g,f,y,d);for(let T=0;T!==y;++T)v[T]=n[T];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,f,d,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=d;y!==x;++y,v+=4)r.copy(p[y]).applyMatrix4(_,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function E3(e){let t=new WeakMap;function n(r,o){return o===nd?r.mapping=xr:o===id&&(r.mapping=Sr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===nd||o===id)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new bf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var nl=4,xb=[.125,.215,.35,.446,.526,.582],wr=20,sv=new Xf,Sb=new Vt,av=null,rv=0,ov=0,lv=!1,Ar=(1+Math.sqrt(5))/2,el=1/Ar,Mb=[new U(-Ar,el,0),new U(Ar,el,0),new U(-el,0,Ar),new U(el,0,Ar),new U(0,Ar,-el),new U(0,Ar,el),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],T3=new U,sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=T3}=a;av=this._renderer.getRenderTarget(),rv=this._renderer.getActiveCubeFace(),ov=this._renderer.getActiveMipmapLevel(),lv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(av,rv,ov),this._renderer.xr.enabled=lv,t.scissorTest=!1,Gd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===xr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),av=this._renderer.getRenderTarget(),rv=this._renderer.getActiveCubeFace(),ov=this._renderer.getActiveMipmapLevel(),lv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:jo,format:si,colorSpace:dr,depthBuffer:!1},s=bb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A3(a)),this._blurMaterial=w3(a,t,n)}return s}_compileMaterial(t){let n=new me(this._lodPlanes[0],t);this._renderer.compile(n,sv)}_sceneToCubeUV(t,n,i,s,a){let l=new We(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,d=p.toneMapping;p.getClearColor(Sb),p.toneMapping=Bs,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));let x=new Ls({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new me(new Dn,x),u=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,u=!0):(x.color.copy(Sb),u=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[y],a.y,a.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[y]));let T=this._cubeSize;Gd(s,v*T,y>2?T:0,T,T),p.setRenderTarget(s),u&&p.render(m,l),p.render(t,l)}m.geometry.dispose(),m.material.dispose(),p.toneMapping=d,p.autoClear=f,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===xr||t.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new me(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Gd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,sv)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Mb[(s-a-1)%Mb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new me(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*wr-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):wr;m>wr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);let u=[],_=0;for(let w=0;w<wr;++w){let R=w/x,E=Math.exp(-R*R/2);u.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let v=this._sizeLods[s],T=3*v*(s>y-nl?s-y+nl:0),A=4*(this._cubeSize-v);Gd(n,T,A,3*v,2*v),l.setRenderTarget(n),l.render(p,sv)}};function A3(e){let t=[],n=[],i=[],s=e,a=e-nl+1+xb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-nl?l=xb[r-e+nl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*d),y=new Float32Array(m*g*d),v=new Float32Array(u*g*d);for(let A=0;A<d;A++){let w=A%3*2/3-1,R=A>2?0:-1,E=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(E,x*g*A),y.set(f,m*g*A);let M=[A,A,A,A,A,A];v.set(M,u*g*A)}let T=new Ze;T.setAttribute("position",new qe(_,x)),T.setAttribute("uv",new qe(y,m)),T.setAttribute("faceIndex",new qe(v,u)),t.push(T),s>nl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function bb(e,t,n){let i=new es(e,t,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function w3(e,t,n){let i=new Float32Array(wr),s=new U(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_v(),fragmentShader:`

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
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Eb(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_v(),fragmentShader:`

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
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Tb(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_v(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function _v(){return`

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
	`}function C3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===nd||l===id,h=l===xr||l===Sr;if(c||h){let p=t.get(o),f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new sl(e)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(n===null&&(n=new sl(e)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function R3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function D3(e,t,n,i){let s={},a=new WeakMap;function r(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];let d=a.get(f);d&&(t.remove(d),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(p){let f=p.attributes;for(let d in f)t.update(f[d],e.ARRAY_BUFFER)}function c(p){let f=[],d=p.index,g=p.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let T=_[y+0],A=_[y+1],w=_[y+2];f.push(T,A,A,w,w,T)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let T=y+0,A=y+1,w=y+2;f.push(T,A,A,w,w,T)}}else return;let m=new(j0(f)?Ac:gr)(f,1);m.version=x;let u=a.get(p);u&&t.remove(u),a.set(p,m)}function h(p){let f=a.get(p);if(f){let d=p.index;d!==null&&f.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function U3(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,d){e.drawElements(i,d,a,f*r),n.update(d,i,1)}function c(f,d,g){g!==0&&(e.drawElementsInstanced(i,d,a,f*r,g),n.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,f,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];n.update(m,i,1)}function p(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,d[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,a,f,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=d[_]*x[_];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function N3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function L3(e,t,n){let i=new WeakMap,s=new re;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==p){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*T*4*p),w=new Tc(A,v,T,p);w.type=bi,w.needsUpdate=!0;let R=y*4;for(let M=0;M<p;M++){let N=m[M],z=u[M],F=_[M],X=v*T*4*M;for(let j=0;j<N.count;j++){let q=j*R;d===!0&&(s.fromBufferAttribute(N,j),A[X+q+0]=s.x,A[X+q+1]=s.y,A[X+q+2]=s.z,A[X+q+3]=0),g===!0&&(s.fromBufferAttribute(z,j),A[X+q+4]=s.x,A[X+q+5]=s.y,A[X+q+6]=s.z,A[X+q+7]=0),x===!0&&(s.fromBufferAttribute(F,j),A[X+q+8]=s.x,A[X+q+9]=s.y,A[X+q+10]=s.z,A[X+q+11]=F.itemSize===4?s.w:1)}}f={count:p,texture:w,size:new wt(v,T)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function O3(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Xb=new Hn,Ab=new Ic(1,1),Wb=new Tc,qb=new Sf,Yb=new Cc,wb=[],Cb=[],Rb=new Float32Array(16),Db=new Float32Array(9),Ub=new Float32Array(4);function al(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=wb[s];if(a===void 0&&(a=new Float32Array(s),wb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Wd(e,t){let n=Cb[t];n===void 0&&(n=new Int32Array(t),Cb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function I3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function P3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function z3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function B3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function F3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;Ub.set(i),e.uniformMatrix2fv(this.addr,!1,Ub),$e(n,i)}}function H3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;Db.set(i),e.uniformMatrix3fv(this.addr,!1,Db),$e(n,i)}}function V3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;Rb.set(i),e.uniformMatrix4fv(this.addr,!1,Rb),$e(n,i)}}function G3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function k3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function X3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function W3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function q3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Y3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function Z3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function J3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function K3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Ab.compareFunction=J0,a=Ab):a=Xb,n.setTexture2D(t||a,s)}function Q3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||qb,s)}function j3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Yb,s)}function $3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Wb,s)}function tD(e){switch(e){case 5126:return I3;case 35664:return P3;case 35665:return z3;case 35666:return B3;case 35674:return F3;case 35675:return H3;case 35676:return V3;case 5124:case 35670:return G3;case 35667:case 35671:return k3;case 35668:case 35672:return X3;case 35669:case 35673:return W3;case 5125:return q3;case 36294:return Y3;case 36295:return Z3;case 36296:return J3;case 35678:case 36198:case 36298:case 36306:case 35682:return K3;case 35679:case 36299:case 36307:return Q3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return $3}}function eD(e,t){e.uniform1fv(this.addr,t)}function nD(e,t){let n=al(t,this.size,2);e.uniform2fv(this.addr,n)}function iD(e,t){let n=al(t,this.size,3);e.uniform3fv(this.addr,n)}function sD(e,t){let n=al(t,this.size,4);e.uniform4fv(this.addr,n)}function aD(e,t){let n=al(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rD(e,t){let n=al(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function oD(e,t){let n=al(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function lD(e,t){e.uniform1iv(this.addr,t)}function cD(e,t){e.uniform2iv(this.addr,t)}function uD(e,t){e.uniform3iv(this.addr,t)}function hD(e,t){e.uniform4iv(this.addr,t)}function fD(e,t){e.uniform1uiv(this.addr,t)}function dD(e,t){e.uniform2uiv(this.addr,t)}function pD(e,t){e.uniform3uiv(this.addr,t)}function mD(e,t){e.uniform4uiv(this.addr,t)}function gD(e,t,n){let i=this.cache,s=t.length,a=Wd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Xb,a[r])}function vD(e,t,n){let i=this.cache,s=t.length,a=Wd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||qb,a[r])}function _D(e,t,n){let i=this.cache,s=t.length,a=Wd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Yb,a[r])}function yD(e,t,n){let i=this.cache,s=t.length,a=Wd(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Wb,a[r])}function xD(e){switch(e){case 5126:return eD;case 35664:return nD;case 35665:return iD;case 35666:return sD;case 35674:return aD;case 35675:return rD;case 35676:return oD;case 5124:case 35670:return lD;case 35667:case 35671:return cD;case 35668:case 35672:return uD;case 35669:case 35673:return hD;case 5125:return fD;case 36294:return dD;case 36295:return pD;case 36296:return mD;case 35678:case 36198:case 36298:case 36306:case 35682:return gD;case 35679:case 36299:case 36307:return vD;case 35680:case 36300:case 36308:case 36293:return _D;case 36289:case 36303:case 36311:case 36292:return yD}}var uv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tD(n.type)}},hv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xD(n.type)}},fv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},cv=/(\w+)(\])?(\[|\.)?/g;function Nb(e,t){e.seq.push(t),e.map[t.id]=t}function SD(e,t,n){let i=e.name,s=i.length;for(cv.lastIndex=0;;){let a=cv.exec(i),r=cv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Nb(n,c===void 0?new uv(o,e,t):new hv(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new fv(o),Nb(n,p)),n=p}}}var il=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);SD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Lb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var MD=37297,bD=0;function ED(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Ob=new Wt;function TD(e){ie._getMatrix(Ob,ie.workingColorSpace,e);let t=`mat3( ${Ob.elements.map(n=>n.toFixed(4))} )`;switch(ie.getTransfer(e)){case Mc:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ib(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+ED(e.getShaderSource(t),o)}else return a}function AD(e,t){let n=TD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wD(e,t){let n;switch(t){case Q1:n="Linear";break;case j1:n="Reinhard";break;case $1:n="Cineon";break;case ed:n="ACESFilmic";break;case eb:n="AgX";break;case nb:n="Neutral";break;case tb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var kd=new U;function CD(){ie.getLuminanceCoefficients(kd);let e=kd.x.toFixed(4),t=kd.y.toFixed(4),n=kd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($c).join(`
`)}function DD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function UD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function $c(e){return e!==""}function Pb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ND=/^[ \t]*#include +<([\w\d./]+)>/gm;function dv(e){return e.replace(ND,OD)}var LD=new Map;function OD(e,t){let n=Yt[t];if(n===void 0){let i=LD.get(t);if(i!==void 0)n=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return dv(n)}var ID=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bb(e){return e.replace(ID,PD)}function PD(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Fb(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function zD(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===B0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===qf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===as&&(t="SHADOWMAP_TYPE_VSM"),t}function BD(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case xr:case Sr:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function FD(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function HD(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case td:t="ENVMAP_BLENDING_MULTIPLY";break;case J1:t="ENVMAP_BLENDING_MIX";break;case K1:t="ENVMAP_BLENDING_ADD";break}return t}function VD(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function GD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=zD(n),c=BD(n),h=FD(n),p=HD(n),f=VD(n),d=RD(n),g=DD(a),x=s.createProgram(),m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($c).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($c).join(`
`),u.length>0&&(u+=`
`)):(m=[Fb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($c).join(`
`),u=[Fb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bs?"#define TONE_MAPPING":"",n.toneMapping!==Bs?Yt.tonemapping_pars_fragment:"",n.toneMapping!==Bs?wD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,AD("linearToOutputTexel",n.outputColorSpace),CD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($c).join(`
`)),r=dv(r),r=Pb(r,n),r=zb(r,n),o=dv(o),o=Pb(o,n),o=zb(o,n),r=Bb(r),o=Bb(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===K0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===K0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=_+m+r,v=_+u+o,T=Lb(s,s.VERTEX_SHADER,y),A=Lb(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,A),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(N){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(A)||"",j=z.trim(),q=F.trim(),et=X.trim(),G=!0,ct=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,T,A);else{let ft=Ib(s,T,"vertex"),Z=Ib(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+ft+`
`+Z)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(q===""||et==="")&&(ct=!1);ct&&(N.diagnostics={runnable:G,programLog:j,vertexShader:{log:q,prefix:m},fragmentShader:{log:et,prefix:u}})}s.deleteShader(T),s.deleteShader(A),R=new il(s,x),E=UD(s,x)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,MD)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}var kD=0,pv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new mv(t),n.set(t,i)),i}},mv=class{constructor(t){this.id=kD++,this.code=t,this.usedTimes=0}};function XD(e,t,n,i,s,a,r){let o=new qo,l=new pv,c=new Set,h=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,N,z,F){let X=z.fog,j=F.geometry,q=E.isMeshStandardMaterial?z.environment:null,et=(E.isMeshStandardMaterial?n:t).get(E.envMap||q),G=et&&et.mapping===Yc?et.image.height:null,ct=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let ft=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Z=ft!==void 0?ft.length:0,vt=0;j.morphAttributes.position!==void 0&&(vt=1),j.morphAttributes.normal!==void 0&&(vt=2),j.morphAttributes.color!==void 0&&(vt=3);let Ct,Pt,Rt,k;if(ct){let qt=rs[ct];Ct=qt.vertexShader,Pt=qt.fragmentShader}else Ct=E.vertexShader,Pt=E.fragmentShader,l.update(E),Rt=l.getVertexShaderID(E),k=l.getFragmentShaderID(E);let K=e.getRenderTarget(),at=e.state.buffers.depth.getReversed(),lt=F.isInstancedMesh===!0,$=F.isBatchedMesh===!0,Mt=!!E.map,be=!!E.matcap,D=!!et,ee=!!E.aoMap,It=!!E.lightMap,St=!!E.bumpMap,gt=!!E.normalMap,ce=!!E.displacementMap,xt=!!E.emissiveMap,Ht=!!E.metalnessMap,De=!!E.roughnessMap,ge=E.anisotropy>0,C=E.clearcoat>0,S=E.dispersion>0,P=E.iridescence>0,J=E.sheen>0,tt=E.transmission>0,Y=ge&&!!E.anisotropyMap,Dt=C&&!!E.clearcoatMap,rt=C&&!!E.clearcoatNormalMap,bt=C&&!!E.clearcoatRoughnessMap,Tt=P&&!!E.iridescenceMap,nt=P&&!!E.iridescenceThicknessMap,dt=J&&!!E.sheenColorMap,Nt=J&&!!E.sheenRoughnessMap,At=!!E.specularMap,ut=!!E.specularColorMap,kt=!!E.specularIntensityMap,L=tt&&!!E.transmissionMap,it=tt&&!!E.thicknessMap,ot=!!E.gradientMap,_t=!!E.alphaMap,B=E.alphaTest>0,W=!!E.alphaHash,mt=!!E.extensions,Lt=Bs;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Lt=e.toneMapping);let ne={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:Ct,fragmentShader:Pt,defines:E.defines,customVertexShaderID:Rt,customFragmentShaderID:k,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:$,batchingColor:$&&F._colorsTexture!==null,instancing:lt,instancingColor:lt&&F.instanceColor!==null,instancingMorph:lt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:dr,alphaToCoverage:!!E.alphaToCoverage,map:Mt,matcap:be,envMap:D,envMapMode:D&&et.mapping,envMapCubeUVHeight:G,aoMap:ee,lightMap:It,bumpMap:St,normalMap:gt,displacementMap:f&&ce,emissiveMap:xt,normalMapObjectSpace:gt&&E.normalMapType===ob,normalMapTangentSpace:gt&&E.normalMapType===Hd,metalnessMap:Ht,roughnessMap:De,anisotropy:ge,anisotropyMap:Y,clearcoat:C,clearcoatMap:Dt,clearcoatNormalMap:rt,clearcoatRoughnessMap:bt,dispersion:S,iridescence:P,iridescenceMap:Tt,iridescenceThicknessMap:nt,sheen:J,sheenColorMap:dt,sheenRoughnessMap:Nt,specularMap:At,specularColorMap:ut,specularIntensityMap:kt,transmission:tt,transmissionMap:L,thicknessMap:it,gradientMap:ot,opaque:E.transparent===!1&&E.blending===hr&&E.alphaToCoverage===!1,alphaMap:_t,alphaTest:B,alphaHash:W,combine:E.combine,mapUv:Mt&&x(E.map.channel),aoMapUv:ee&&x(E.aoMap.channel),lightMapUv:It&&x(E.lightMap.channel),bumpMapUv:St&&x(E.bumpMap.channel),normalMapUv:gt&&x(E.normalMap.channel),displacementMapUv:ce&&x(E.displacementMap.channel),emissiveMapUv:xt&&x(E.emissiveMap.channel),metalnessMapUv:Ht&&x(E.metalnessMap.channel),roughnessMapUv:De&&x(E.roughnessMap.channel),anisotropyMapUv:Y&&x(E.anisotropyMap.channel),clearcoatMapUv:Dt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(E.sheenRoughnessMap.channel),specularMapUv:At&&x(E.specularMap.channel),specularColorMapUv:ut&&x(E.specularColorMap.channel),specularIntensityMapUv:kt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:it&&x(E.thicknessMap.channel),alphaMapUv:_t&&x(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(gt||ge),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Mt||_t),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:at,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Mt&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===pe,decodeVideoTextureEmissive:xt&&E.emissiveMap.isVideoTexture===!0&&ie.getTransfer(E.emissiveMap.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mi,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:mt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&E.extensions.multiDraw===!0||$)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let M=g[E.type],N;if(M){let z=rs[M];N=_b.clone(z.uniforms)}else N=E.uniforms;return N}function T(E,M){let N;for(let z=0,F=h.length;z<F;z++){let X=h[z];if(X.cacheKey===M){N=X,++N.usedTimes;break}}return N===void 0&&(N=new GD(e,M,E,a),h.push(N)),N}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function WD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function qD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Hb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Vb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(p,f,d,g,x,m){let u=e[t];return u===void 0?(u={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},e[t]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=d,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=x,u.group=m),t++,u}function o(p,f,d,g,x,m){let u=r(p,f,d,g,x,m);d.transmission>0?i.push(u):d.transparent===!0?s.push(u):n.push(u)}function l(p,f,d,g,x,m){let u=r(p,f,d,g,x,m);d.transmission>0?i.unshift(u):d.transparent===!0?s.unshift(u):n.unshift(u)}function c(p,f){n.length>1&&n.sort(p||qD),i.length>1&&i.sort(f||Hb),s.length>1&&s.sort(f||Hb)}function h(){for(let p=t,f=e.length;p<f;p++){let d=e[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function YD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Vb,e.set(i,[r])):s>=a.length?(r=new Vb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function ZD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new U,color:new Vt};break;case"SpotLight":n={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function JD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var KD=0;function QD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function jD(e){let t=new ZD,n=JD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,a=new jt,r=new jt;function o(c){let h=0,p=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,u=0,_=0,y=0,v=0,T=0,A=0,w=0;c.sort(QD);for(let E=0,M=c.length;E<M;E++){let N=c[E],z=N.color,F=N.intensity,X=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=z.r*F,p+=z.g*F,f+=z.b*F;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],F);w++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let et=N.shadow,G=n.get(N);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=N.shadow.matrix,_++}i.directional[d]=q,d++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(z).multiplyScalar(F),q.distance=X,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[x]=q;let et=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,et.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[x]=et.matrix,N.castShadow){let G=n.get(N);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=j,v++}x++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(z).multiplyScalar(F),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=q,m++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let et=N.shadow,G=n.get(N);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=N.shadow.matrix,y++}i.point[g]=q,g++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(F),q.groundColor.copy(N.groundColor).multiplyScalar(F),i.hemi[u]=q,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=w,i.version=KD++)}function l(c,h){let p=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){let y=c[u];if(y.isDirectionalLight){let v=i.directional[p];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Gb(e){let t=new jD(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function $D(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Gb(e),t.set(s,[o])):a>=r.length?(o=new Gb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var tU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eU=`uniform sampler2D shadow_pass;
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
}`;function nU(e,t,n){let i=new Jo,s=new wt,a=new wt,r=new re,o=new Nf({depthPacking:rb}),l=new Lf,c={},h=n.maxTextureSize,p={[Ds]:pn,[pn]:Ds,[Mi]:Mi},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:tU,fragmentShader:eU}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ze;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0;let u=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),z=e.state;z.setBlending(zs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=u!==as&&this.type===as,X=u===as&&this.type!==as;for(let j=0,q=A.length;j<q;j++){let et=A[j],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ct=G.getFrameExtents();if(s.multiply(ct),a.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ct.x),s.x=a.x*ct.x,G.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ct.y),s.y=a.y*ct.y,G.mapSize.y=a.y)),G.map===null||F===!0||X===!0){let Z=this.type!==as?{minFilter:Fn,magFilter:Fn}:{};G.map!==null&&G.map.dispose(),G.map=new es(s.x,s.y,Z),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let ft=G.getViewportCount();for(let Z=0;Z<ft;Z++){let vt=G.getViewport(Z);r.set(a.x*vt.x,a.y*vt.y,a.x*vt.z,a.y*vt.w),z.viewport(r),G.updateMatrices(et,Z),i=G.getFrustum(),v(w,R,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===as&&_(G,R),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,N)};function _(A,w){let R=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new es(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,R,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,R,d,x,null)}function y(A,w,R,E){let M=null,N=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=R.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=M.uuid,F=w.uuid,X=c[z];X===void 0&&(X={},c[z]=X);let j=X[F];j===void 0&&(j=M.clone(),X[F]=j,w.addEventListener("dispose",T)),M=j}if(M.visible=w.visible,M.wireframe=w.wireframe,E===as?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:p[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=e.properties.get(M);z.light=R}return M}function v(A,w,R,E,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===as)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let F=t.update(A),X=A.material;if(Array.isArray(X)){let j=F.groups;for(let q=0,et=j.length;q<et;q++){let G=j[q],ct=X[G.materialIndex];if(ct&&ct.visible){let ft=y(A,ct,E,M);A.onBeforeShadow(e,A,w,R,F,ft,G),e.renderBufferDirect(R,null,F,ft,A,G),A.onAfterShadow(e,A,w,R,F,ft,G)}}}else if(X.visible){let j=y(A,X,E,M);A.onBeforeShadow(e,A,w,R,F,j,null),e.renderBufferDirect(R,null,F,j,A,null),A.onAfterShadow(e,A,w,R,F,j,null)}}let z=A.children;for(let F=0,X=z.length;F<X;F++)v(z[F],w,R,E,M)}function T(A){A.target.removeEventListener("dispose",T);for(let R in c){let E=c[R],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var iU={[Yf]:Zf,[Jf]:jf,[Kf]:$f,[fr]:Qf,[Zf]:Yf,[jf]:Jf,[$f]:Kf,[Qf]:fr};function sU(e,t){function n(){let L=!1,it=new re,ot=null,_t=new re(0,0,0,0);return{setMask:function(B){ot!==B&&!L&&(e.colorMask(B,B,B,B),ot=B)},setLocked:function(B){L=B},setClear:function(B,W,mt,Lt,ne){ne===!0&&(B*=Lt,W*=Lt,mt*=Lt),it.set(B,W,mt,Lt),_t.equals(it)===!1&&(e.clearColor(B,W,mt,Lt),_t.copy(it))},reset:function(){L=!1,ot=null,_t.set(-1,0,0,0)}}}function i(){let L=!1,it=!1,ot=null,_t=null,B=null;return{setReversed:function(W){if(it!==W){let mt=t.get("EXT_clip_control");W?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),it=W;let Lt=B;B=null,this.setClear(Lt)}},getReversed:function(){return it},setTest:function(W){W?K(e.DEPTH_TEST):at(e.DEPTH_TEST)},setMask:function(W){ot!==W&&!L&&(e.depthMask(W),ot=W)},setFunc:function(W){if(it&&(W=iU[W]),_t!==W){switch(W){case Yf:e.depthFunc(e.NEVER);break;case Zf:e.depthFunc(e.ALWAYS);break;case Jf:e.depthFunc(e.LESS);break;case fr:e.depthFunc(e.LEQUAL);break;case Kf:e.depthFunc(e.EQUAL);break;case Qf:e.depthFunc(e.GEQUAL);break;case jf:e.depthFunc(e.GREATER);break;case $f:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_t=W}},setLocked:function(W){L=W},setClear:function(W){B!==W&&(it&&(W=1-W),e.clearDepth(W),B=W)},reset:function(){L=!1,ot=null,_t=null,B=null,it=!1}}}function s(){let L=!1,it=null,ot=null,_t=null,B=null,W=null,mt=null,Lt=null,ne=null;return{setTest:function(qt){L||(qt?K(e.STENCIL_TEST):at(e.STENCIL_TEST))},setMask:function(qt){it!==qt&&!L&&(e.stencilMask(qt),it=qt)},setFunc:function(qt,os,Fi){(ot!==qt||_t!==os||B!==Fi)&&(e.stencilFunc(qt,os,Fi),ot=qt,_t=os,B=Fi)},setOp:function(qt,os,Fi){(W!==qt||mt!==os||Lt!==Fi)&&(e.stencilOp(qt,os,Fi),W=qt,mt=os,Lt=Fi)},setLocked:function(qt){L=qt},setClear:function(qt){ne!==qt&&(e.clearStencil(qt),ne=qt)},reset:function(){L=!1,it=null,ot=null,_t=null,B=null,W=null,mt=null,Lt=null,ne=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},f=new WeakMap,d=[],g=null,x=!1,m=null,u=null,_=null,y=null,v=null,T=null,A=null,w=new Vt(0,0,0),R=0,E=!1,M=null,N=null,z=null,F=null,X=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,et=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=et>=2);let ct=null,ft={},Z=e.getParameter(e.SCISSOR_BOX),vt=e.getParameter(e.VIEWPORT),Ct=new re().fromArray(Z),Pt=new re().fromArray(vt);function Rt(L,it,ot,_t){let B=new Uint8Array(4),W=e.createTexture();e.bindTexture(L,W),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let mt=0;mt<ot;mt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,_t,0,e.RGBA,e.UNSIGNED_BYTE,B):e.texImage2D(it+mt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,B);return W}let k={};k[e.TEXTURE_2D]=Rt(e.TEXTURE_2D,e.TEXTURE_2D,1),k[e.TEXTURE_CUBE_MAP]=Rt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[e.TEXTURE_2D_ARRAY]=Rt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),k[e.TEXTURE_3D]=Rt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),K(e.DEPTH_TEST),r.setFunc(fr),St(!1),gt(z0),K(e.CULL_FACE),ee(zs);function K(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function at(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function lt(L,it){return p[L]!==it?(e.bindFramebuffer(L,it),p[L]=it,L===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=it),L===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=it),!0):!1}function $(L,it){let ot=d,_t=!1;if(L){ot=f.get(it),ot===void 0&&(ot=[],f.set(it,ot));let B=L.textures;if(ot.length!==B.length||ot[0]!==e.COLOR_ATTACHMENT0){for(let W=0,mt=B.length;W<mt;W++)ot[W]=e.COLOR_ATTACHMENT0+W;ot.length=B.length,_t=!0}}else ot[0]!==e.BACK&&(ot[0]=e.BACK,_t=!0);_t&&e.drawBuffers(ot)}function Mt(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let be={[Aa]:e.FUNC_ADD,[N1]:e.FUNC_SUBTRACT,[L1]:e.FUNC_REVERSE_SUBTRACT};be[O1]=e.MIN,be[I1]=e.MAX;let D={[P1]:e.ZERO,[z1]:e.ONE,[B1]:e.SRC_COLOR,[pf]:e.SRC_ALPHA,[X1]:e.SRC_ALPHA_SATURATE,[G1]:e.DST_COLOR,[H1]:e.DST_ALPHA,[F1]:e.ONE_MINUS_SRC_COLOR,[mf]:e.ONE_MINUS_SRC_ALPHA,[k1]:e.ONE_MINUS_DST_COLOR,[V1]:e.ONE_MINUS_DST_ALPHA,[W1]:e.CONSTANT_COLOR,[q1]:e.ONE_MINUS_CONSTANT_COLOR,[Y1]:e.CONSTANT_ALPHA,[Z1]:e.ONE_MINUS_CONSTANT_ALPHA};function ee(L,it,ot,_t,B,W,mt,Lt,ne,qt){if(L===zs){x===!0&&(at(e.BLEND),x=!1);return}if(x===!1&&(K(e.BLEND),x=!0),L!==U1){if(L!==m||qt!==E){if((u!==Aa||v!==Aa)&&(e.blendEquation(e.FUNC_ADD),u=Aa,v=Aa),qt)switch(L){case hr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Da:e.blendFunc(e.ONE,e.ONE);break;case F0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case H0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Da:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case F0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,y=null,T=null,A=null,w.set(0,0,0),R=0,m=L,E=qt}return}B=B||it,W=W||ot,mt=mt||_t,(it!==u||B!==v)&&(e.blendEquationSeparate(be[it],be[B]),u=it,v=B),(ot!==_||_t!==y||W!==T||mt!==A)&&(e.blendFuncSeparate(D[ot],D[_t],D[W],D[mt]),_=ot,y=_t,T=W,A=mt),(Lt.equals(w)===!1||ne!==R)&&(e.blendColor(Lt.r,Lt.g,Lt.b,ne),w.copy(Lt),R=ne),m=L,E=!1}function It(L,it){L.side===Mi?at(e.CULL_FACE):K(e.CULL_FACE);let ot=L.side===pn;it&&(ot=!ot),St(ot),L.blending===hr&&L.transparent===!1?ee(zs):ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let _t=L.stencilWrite;o.setTest(_t),_t&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):at(e.SAMPLE_ALPHA_TO_COVERAGE)}function St(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function gt(L){L!==R1?(K(e.CULL_FACE),L!==N&&(L===z0?e.cullFace(e.BACK):L===D1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):at(e.CULL_FACE),N=L}function ce(L){L!==z&&(q&&e.lineWidth(L),z=L)}function xt(L,it,ot){L?(K(e.POLYGON_OFFSET_FILL),(F!==it||X!==ot)&&(e.polygonOffset(it,ot),F=it,X=ot)):at(e.POLYGON_OFFSET_FILL)}function Ht(L){L?K(e.SCISSOR_TEST):at(e.SCISSOR_TEST)}function De(L){L===void 0&&(L=e.TEXTURE0+j-1),ct!==L&&(e.activeTexture(L),ct=L)}function ge(L,it,ot){ot===void 0&&(ct===null?ot=e.TEXTURE0+j-1:ot=ct);let _t=ft[ot];_t===void 0&&(_t={type:void 0,texture:void 0},ft[ot]=_t),(_t.type!==L||_t.texture!==it)&&(ct!==ot&&(e.activeTexture(ot),ct=ot),e.bindTexture(L,it||k[L]),_t.type=L,_t.texture=it)}function C(){let L=ft[ct];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(L){Ct.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Ct.copy(L))}function Nt(L){Pt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Pt.copy(L))}function At(L,it){let ot=c.get(it);ot===void 0&&(ot=new WeakMap,c.set(it,ot));let _t=ot.get(L);_t===void 0&&(_t=e.getUniformBlockIndex(it,L.name),ot.set(L,_t))}function ut(L,it){let _t=c.get(it).get(L);l.get(it)!==_t&&(e.uniformBlockBinding(it,_t,L.__bindingPointIndex),l.set(it,_t))}function kt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},ct=null,ft={},p={},f=new WeakMap,d=[],g=null,x=!1,m=null,u=null,_=null,y=null,v=null,T=null,A=null,w=new Vt(0,0,0),R=0,E=!1,M=null,N=null,z=null,F=null,X=null,Ct.set(0,0,e.canvas.width,e.canvas.height),Pt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:K,disable:at,bindFramebuffer:lt,drawBuffers:$,useProgram:Mt,setBlending:ee,setMaterial:It,setFlipSided:St,setCullFace:gt,setLineWidth:ce,setPolygonOffset:xt,setScissorTest:Ht,activeTexture:De,bindTexture:ge,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:Tt,texImage3D:nt,updateUBOMapping:At,uniformBlockBinding:ut,texStorage2D:rt,texStorage3D:bt,texSubImage2D:J,texSubImage3D:tt,compressedTexSubImage2D:Y,compressedTexSubImage3D:Dt,scissor:dt,viewport:Nt,reset:kt}}function aU(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,p,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):Ec("canvas")}function x(C,S,P){let J=1,tt=ge(C);if((tt.width>P||tt.height>P)&&(J=P/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Y=Math.floor(J*tt.width),Dt=Math.floor(J*tt.height);p===void 0&&(p=g(Y,Dt));let rt=S?g(Y,Dt):p;return rt.width=Y,rt.height=Dt,rt.getContext("2d").drawImage(C,0,0,Y,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+Dt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){e.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(C,S,P,J,tt=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===e.RED&&(P===e.FLOAT&&(Y=e.R32F),P===e.HALF_FLOAT&&(Y=e.R16F),P===e.UNSIGNED_BYTE&&(Y=e.R8)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.R8UI),P===e.UNSIGNED_SHORT&&(Y=e.R16UI),P===e.UNSIGNED_INT&&(Y=e.R32UI),P===e.BYTE&&(Y=e.R8I),P===e.SHORT&&(Y=e.R16I),P===e.INT&&(Y=e.R32I)),S===e.RG&&(P===e.FLOAT&&(Y=e.RG32F),P===e.HALF_FLOAT&&(Y=e.RG16F),P===e.UNSIGNED_BYTE&&(Y=e.RG8)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RG8UI),P===e.UNSIGNED_SHORT&&(Y=e.RG16UI),P===e.UNSIGNED_INT&&(Y=e.RG32UI),P===e.BYTE&&(Y=e.RG8I),P===e.SHORT&&(Y=e.RG16I),P===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),P===e.UNSIGNED_INT&&(Y=e.RGB32UI),P===e.BYTE&&(Y=e.RGB8I),P===e.SHORT&&(Y=e.RGB16I),P===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),P===e.UNSIGNED_INT&&(Y=e.RGBA32UI),P===e.BYTE&&(Y=e.RGBA8I),P===e.SHORT&&(Y=e.RGBA16I),P===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),S===e.RGBA){let Dt=tt?Mc:ie.getTransfer(J);P===e.FLOAT&&(Y=e.RGBA32F),P===e.HALF_FLOAT&&(Y=e.RGBA16F),P===e.UNSIGNED_BYTE&&(Y=Dt===pe?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(C,S){let P;return C?S===null||S===Na||S===$o?P=e.DEPTH24_STENCIL8:S===bi?P=e.DEPTH32F_STENCIL8:S===Qo&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Na||S===$o?P=e.DEPTH_COMPONENT24:S===bi?P=e.DEPTH_COMPONENT32F:S===Qo&&(P=e.DEPTH_COMPONENT16),P}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==Ii?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function w(C){let S=C.target;S.removeEventListener("dispose",w),M(S)}function R(C){let S=i.get(C);if(S.__webglInit===void 0)return;let P=C.source,J=f.get(P);if(J){let tt=J[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(C),Object.keys(J).length===0&&f.delete(P)}i.remove(C)}function E(C){let S=i.get(C);e.deleteTexture(S.__webglTexture);let P=C.source,J=f.get(P);delete J[S.__cacheKey],r.memory.textures--}function M(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let tt=0;tt<S.__webglFramebuffer[J].length;tt++)e.deleteFramebuffer(S.__webglFramebuffer[J][tt]);else e.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)e.deleteFramebuffer(S.__webglFramebuffer[J]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=C.textures;for(let J=0,tt=P.length;J<tt;J++){let Y=i.get(P[J]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),r.memory.textures--),i.remove(P[J])}i.remove(C)}let N=0;function z(){N=0}function F(){let C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function X(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function j(C,S){let P=i.get(C);if(C.isVideoTexture&&Ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(P,C,S);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function q(C,S){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){k(P,C,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function et(C,S){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){k(P,C,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function G(C,S){let P=i.get(C);if(C.version>0&&P.__version!==C.version){K(P,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let ct={[gf]:e.REPEAT,[Ta]:e.CLAMP_TO_EDGE,[vf]:e.MIRRORED_REPEAT},ft={[Fn]:e.NEAREST,[sb]:e.NEAREST_MIPMAP_NEAREST,[Zc]:e.NEAREST_MIPMAP_LINEAR,[Ii]:e.LINEAR,[sd]:e.LINEAR_MIPMAP_NEAREST,[Ua]:e.LINEAR_MIPMAP_LINEAR},Z={[lb]:e.NEVER,[pb]:e.ALWAYS,[cb]:e.LESS,[J0]:e.LEQUAL,[ub]:e.EQUAL,[db]:e.GEQUAL,[hb]:e.GREATER,[fb]:e.NOTEQUAL};function vt(C,S){if(S.type===bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ii||S.magFilter===sd||S.magFilter===Zc||S.magFilter===Ua||S.minFilter===Ii||S.minFilter===sd||S.minFilter===Zc||S.minFilter===Ua)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,ct[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,ct[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,ct[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,ft[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fn||S.minFilter!==Zc&&S.minFilter!==Ua||S.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(C,S){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let J=S.source,tt=f.get(J);tt===void 0&&(tt={},f.set(J,tt));let Y=X(S);if(Y!==C.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),tt[Y].usedTimes++;let Dt=tt[C.__cacheKey];Dt!==void 0&&(tt[C.__cacheKey].usedTimes--,Dt.usedTimes===0&&E(S)),C.__cacheKey=Y,C.__webglTexture=tt[Y].texture}return P}function Pt(C,S,P){return Math.floor(Math.floor(C/P)/S)}function Rt(C,S,P,J){let Y=C.updateRanges;if(Y.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,J,S.data);else{Y.sort((nt,dt)=>nt.start-dt.start);let Dt=0;for(let nt=1;nt<Y.length;nt++){let dt=Y[Dt],Nt=Y[nt],At=dt.start+dt.count,ut=Pt(Nt.start,S.width,4),kt=Pt(dt.start,S.width,4);Nt.start<=At+1&&ut===kt&&Pt(Nt.start+Nt.count-1,S.width,4)===ut?dt.count=Math.max(dt.count,Nt.start+Nt.count-dt.start):(++Dt,Y[Dt]=Nt)}Y.length=Dt+1;let rt=e.getParameter(e.UNPACK_ROW_LENGTH),bt=e.getParameter(e.UNPACK_SKIP_PIXELS),Tt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let nt=0,dt=Y.length;nt<dt;nt++){let Nt=Y[nt],At=Math.floor(Nt.start/4),ut=Math.ceil(Nt.count/4),kt=At%S.width,L=Math.floor(At/S.width),it=ut,ot=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,kt,L,it,ot,P,J,S.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,rt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Tt)}}function k(C,S,P){let J=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=e.TEXTURE_3D);let tt=Ct(C,S),Y=S.source;n.bindTexture(J,C.__webglTexture,e.TEXTURE0+P);let Dt=i.get(Y);if(Y.version!==Dt.__version||tt===!0){n.activeTexture(e.TEXTURE0+P);let rt=ie.getPrimaries(ie.workingColorSpace),bt=S.colorSpace===Fs?null:ie.getPrimaries(S.colorSpace),Tt=S.colorSpace===Fs||rt===bt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let nt=x(S.image,!1,s.maxTextureSize);nt=De(S,nt);let dt=a.convert(S.format,S.colorSpace),Nt=a.convert(S.type),At=y(S.internalFormat,dt,Nt,S.colorSpace,S.isVideoTexture);vt(J,S);let ut,kt=S.mipmaps,L=S.isVideoTexture!==!0,it=Dt.__version===void 0||tt===!0,ot=Y.dataReady,_t=T(S,nt);if(S.isDepthTexture)At=v(S.format===tl,S.type),it&&(L?n.texStorage2D(e.TEXTURE_2D,1,At,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,At,nt.width,nt.height,0,dt,Nt,null));else if(S.isDataTexture)if(kt.length>0){L&&it&&n.texStorage2D(e.TEXTURE_2D,_t,At,kt[0].width,kt[0].height);for(let B=0,W=kt.length;B<W;B++)ut=kt[B],L?ot&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,ut.width,ut.height,dt,Nt,ut.data):n.texImage2D(e.TEXTURE_2D,B,At,ut.width,ut.height,0,dt,Nt,ut.data);S.generateMipmaps=!1}else L?(it&&n.texStorage2D(e.TEXTURE_2D,_t,At,nt.width,nt.height),ot&&Rt(S,nt,dt,Nt)):n.texImage2D(e.TEXTURE_2D,0,At,nt.width,nt.height,0,dt,Nt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,_t,At,kt[0].width,kt[0].height,nt.depth);for(let B=0,W=kt.length;B<W;B++)if(ut=kt[B],S.format!==si)if(dt!==null)if(L){if(ot)if(S.layerUpdates.size>0){let mt=iv(ut.width,ut.height,S.format,S.type);for(let Lt of S.layerUpdates){let ne=ut.data.subarray(Lt*mt/ut.data.BYTES_PER_ELEMENT,(Lt+1)*mt/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,Lt,ut.width,ut.height,1,dt,ne)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,ut.width,ut.height,nt.depth,dt,ut.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,B,At,ut.width,ut.height,nt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ot&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,ut.width,ut.height,nt.depth,dt,Nt,ut.data):n.texImage3D(e.TEXTURE_2D_ARRAY,B,At,ut.width,ut.height,nt.depth,0,dt,Nt,ut.data)}else{L&&it&&n.texStorage2D(e.TEXTURE_2D,_t,At,kt[0].width,kt[0].height);for(let B=0,W=kt.length;B<W;B++)ut=kt[B],S.format!==si?dt!==null?L?ot&&n.compressedTexSubImage2D(e.TEXTURE_2D,B,0,0,ut.width,ut.height,dt,ut.data):n.compressedTexImage2D(e.TEXTURE_2D,B,At,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ot&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,ut.width,ut.height,dt,Nt,ut.data):n.texImage2D(e.TEXTURE_2D,B,At,ut.width,ut.height,0,dt,Nt,ut.data)}else if(S.isDataArrayTexture)if(L){if(it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,_t,At,nt.width,nt.height,nt.depth),ot)if(S.layerUpdates.size>0){let B=iv(nt.width,nt.height,S.format,S.type);for(let W of S.layerUpdates){let mt=nt.data.subarray(W*B/nt.data.BYTES_PER_ELEMENT,(W+1)*B/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,W,nt.width,nt.height,1,dt,Nt,mt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,Nt,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,dt,Nt,nt.data);else if(S.isData3DTexture)L?(it&&n.texStorage3D(e.TEXTURE_3D,_t,At,nt.width,nt.height,nt.depth),ot&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,Nt,nt.data)):n.texImage3D(e.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,dt,Nt,nt.data);else if(S.isFramebufferTexture){if(it)if(L)n.texStorage2D(e.TEXTURE_2D,_t,At,nt.width,nt.height);else{let B=nt.width,W=nt.height;for(let mt=0;mt<_t;mt++)n.texImage2D(e.TEXTURE_2D,mt,At,B,W,0,dt,Nt,null),B>>=1,W>>=1}}else if(kt.length>0){if(L&&it){let B=ge(kt[0]);n.texStorage2D(e.TEXTURE_2D,_t,At,B.width,B.height)}for(let B=0,W=kt.length;B<W;B++)ut=kt[B],L?ot&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,dt,Nt,ut):n.texImage2D(e.TEXTURE_2D,B,At,dt,Nt,ut);S.generateMipmaps=!1}else if(L){if(it){let B=ge(nt);n.texStorage2D(e.TEXTURE_2D,_t,At,B.width,B.height)}ot&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,Nt,nt)}else n.texImage2D(e.TEXTURE_2D,0,At,dt,Nt,nt);m(S)&&u(J),Dt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function K(C,S,P){if(S.image.length!==6)return;let J=Ct(C,S),tt=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+P);let Y=i.get(tt);if(tt.version!==Y.__version||J===!0){n.activeTexture(e.TEXTURE0+P);let Dt=ie.getPrimaries(ie.workingColorSpace),rt=S.colorSpace===Fs?null:ie.getPrimaries(S.colorSpace),bt=S.colorSpace===Fs||Dt===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let W=0;W<6;W++)!Tt&&!nt?dt[W]=x(S.image[W],!0,s.maxCubemapSize):dt[W]=nt?S.image[W].image:S.image[W],dt[W]=De(S,dt[W]);let Nt=dt[0],At=a.convert(S.format,S.colorSpace),ut=a.convert(S.type),kt=y(S.internalFormat,At,ut,S.colorSpace),L=S.isVideoTexture!==!0,it=Y.__version===void 0||J===!0,ot=tt.dataReady,_t=T(S,Nt);vt(e.TEXTURE_CUBE_MAP,S);let B;if(Tt){L&&it&&n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,kt,Nt.width,Nt.height);for(let W=0;W<6;W++){B=dt[W].mipmaps;for(let mt=0;mt<B.length;mt++){let Lt=B[mt];S.format!==si?At!==null?L?ot&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt,0,0,Lt.width,Lt.height,At,Lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt,kt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt,0,0,Lt.width,Lt.height,At,ut,Lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt,kt,Lt.width,Lt.height,0,At,ut,Lt.data)}}}else{if(B=S.mipmaps,L&&it){B.length>0&&_t++;let W=ge(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,kt,W.width,W.height)}for(let W=0;W<6;W++)if(nt){L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,dt[W].width,dt[W].height,At,ut,dt[W].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,kt,dt[W].width,dt[W].height,0,At,ut,dt[W].data);for(let mt=0;mt<B.length;mt++){let ne=B[mt].image[W].image;L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt+1,0,0,ne.width,ne.height,At,ut,ne.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt+1,kt,ne.width,ne.height,0,At,ut,ne.data)}}else{L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,At,ut,dt[W]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,kt,At,ut,dt[W]);for(let mt=0;mt<B.length;mt++){let Lt=B[mt];L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt+1,0,0,At,ut,Lt.image[W]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt+1,kt,At,ut,Lt.image[W])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),Y.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function at(C,S,P,J,tt,Y){let Dt=a.convert(P.format,P.colorSpace),rt=a.convert(P.type),bt=y(P.internalFormat,Dt,rt,P.colorSpace),Tt=i.get(S),nt=i.get(P);if(nt.__renderTarget=S,!Tt.__hasExternalTextures){let dt=Math.max(1,S.width>>Y),Nt=Math.max(1,S.height>>Y);tt===e.TEXTURE_3D||tt===e.TEXTURE_2D_ARRAY?n.texImage3D(tt,Y,bt,dt,Nt,S.depth,0,Dt,rt,null):n.texImage2D(tt,Y,bt,dt,Nt,0,Dt,rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),xt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,tt,nt.__webglTexture,0,ce(S)):(tt===e.TEXTURE_2D||tt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,tt,nt.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function lt(C,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer){let J=S.depthTexture,tt=J&&J.isDepthTexture?J.type:null,Y=v(S.stencilBuffer,tt),Dt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=ce(S);xt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt,Y,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Dt,e.RENDERBUFFER,C)}else{let J=S.textures;for(let tt=0;tt<J.length;tt++){let Y=J[tt],Dt=a.convert(Y.format,Y.colorSpace),rt=a.convert(Y.type),bt=y(Y.internalFormat,Dt,rt,Y.colorSpace),Tt=ce(S);P&&xt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt,bt,S.width,S.height):xt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Tt,bt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,bt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);let tt=J.__webglTexture,Y=ce(S);if(S.depthTexture.format===ko)xt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0);else if(S.depthTexture.format===tl)xt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Mt(C){let S=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let J=C.texture.mipmaps;J&&J.length>0?$(S.__webglFramebuffer[0],C):$(S.__webglFramebuffer,C)}else if(P){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=e.createRenderbuffer(),lt(S.__webglDepthbuffer[J],C,!1);else{let tt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,Y)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),lt(S.__webglDepthbuffer,C,!1);else{let tt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,Y)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(C,S,P){let J=i.get(C);S!==void 0&&at(J.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Mt(C)}function D(C){let S=C.texture,P=i.get(C),J=i.get(S);C.addEventListener("dispose",w);let tt=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Dt=tt.length>1;if(Dt||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=S.version,r.memory.textures++),Y){P.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[rt]=[];for(let bt=0;bt<S.mipmaps.length;bt++)P.__webglFramebuffer[rt][bt]=e.createFramebuffer()}else P.__webglFramebuffer[rt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)P.__webglFramebuffer[rt]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Dt)for(let rt=0,bt=tt.length;rt<bt;rt++){let Tt=i.get(tt[rt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&xt(C)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let rt=0;rt<tt.length;rt++){let bt=tt[rt];P.__webglColorRenderbuffer[rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[rt]);let Tt=a.convert(bt.format,bt.colorSpace),nt=a.convert(bt.type),dt=y(bt.internalFormat,Tt,nt,bt.colorSpace,C.isXRRenderTarget===!0),Nt=ce(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Nt,dt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,P.__webglColorRenderbuffer[rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),lt(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),vt(e.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)at(P.__webglFramebuffer[rt][bt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt);else at(P.__webglFramebuffer[rt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Dt){for(let rt=0,bt=tt.length;rt<bt;rt++){let Tt=tt[rt],nt=i.get(Tt),dt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,nt.__webglTexture),vt(dt,Tt),at(P.__webglFramebuffer,C,Tt,e.COLOR_ATTACHMENT0+rt,dt,0),m(Tt)&&u(dt)}n.unbindTexture()}else{let rt=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,J.__webglTexture),vt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)at(P.__webglFramebuffer[bt],C,S,e.COLOR_ATTACHMENT0,rt,bt);else at(P.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,rt,0);m(S)&&u(rt),n.unbindTexture()}C.depthBuffer&&Mt(C)}function ee(C){let S=C.textures;for(let P=0,J=S.length;P<J;P++){let tt=S[P];if(m(tt)){let Y=_(C),Dt=i.get(tt).__webglTexture;n.bindTexture(Y,Dt),u(Y),n.unbindTexture()}}}let It=[],St=[];function gt(C){if(C.samples>0){if(xt(C)===!1){let S=C.textures,P=C.width,J=C.height,tt=e.COLOR_BUFFER_BIT,Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Dt=i.get(C),rt=S.length>1;if(rt)for(let Tt=0;Tt<S.length;Tt++)n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);let bt=C.texture.mipmaps;bt&&bt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=e.STENCIL_BUFFER_BIT)),rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);let nt=i.get(S[Tt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,nt,0)}e.blitFramebuffer(0,0,P,J,0,0,P,J,tt,e.NEAREST),l===!0&&(It.length=0,St.length=0,It.push(e.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(It.push(Y),St.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,St)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),rt)for(let Tt=0;Tt<S.length;Tt++){n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);let nt=i.get(S[Tt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ce(C){return Math.min(s.maxSamples,C.samples)}function xt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ht(C){let S=r.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function De(C,S){let P=C.colorSpace,J=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==dr&&P!==Fs&&(ie.getTransfer(P)===pe?(J!==si||tt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),S}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=be,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=xt}function rU(e,t){function n(i,s=Fs){let a,r=ie.getTransfer(s);if(i===Bi)return e.UNSIGNED_BYTE;if(i===rd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===od)return e.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===W0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===G0)return e.BYTE;if(i===k0)return e.SHORT;if(i===Qo)return e.UNSIGNED_SHORT;if(i===ad)return e.INT;if(i===Na)return e.UNSIGNED_INT;if(i===bi)return e.FLOAT;if(i===jo)return e.HALF_FLOAT;if(i===q0)return e.ALPHA;if(i===Y0)return e.RGB;if(i===si)return e.RGBA;if(i===ko)return e.DEPTH_COMPONENT;if(i===tl)return e.DEPTH_STENCIL;if(i===ld)return e.RED;if(i===cd)return e.RED_INTEGER;if(i===Z0)return e.RG;if(i===ud)return e.RG_INTEGER;if(i===hd)return e.RGBA_INTEGER;if(i===Jc||i===Kc||i===Qc||i===jc)if(r===pe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===dd||i===pd||i===md)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===fd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===md)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gd||i===vd||i===_d)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===gd||i===vd)return r===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===_d)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yd||i===xd||i===Sd||i===Md||i===bd||i===Ed||i===Td||i===Ad||i===wd||i===Cd||i===Rd||i===Dd||i===Ud||i===Nd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===yd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Md)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ed)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Td)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ad)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ld||i===Od||i===Id)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Ld)return r===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Id)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pd||i===zd||i===Bd||i===Fd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Pd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$o?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var oU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lU=`
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

}`,gv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Pc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new rn({vertexShader:oU,fragmentShader:lU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new me(new Ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vv=class extends Us{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new gv,u={},_=n.getContextAttributes(),y=null,v=null,T=[],A=[],w=new wt,R=null,E=new We;E.viewport=new re;let M=new We;M.viewport=new re;let N=[E,M],z=new Wf,F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=T[k];return K===void 0&&(K=new Yo,T[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=T[k];return K===void 0&&(K=new Yo,T[k]=K),K.getGripSpace()},this.getHand=function(k){let K=T[k];return K===void 0&&(K=new Yo,T[k]=K),K.getHandSpace()};function j(k){let K=A.indexOf(k.inputSource);if(K===-1)return;let at=T[K];at!==void 0&&(at.update(k.inputSource,k.frame,c||r),at.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",et);for(let k=0;k<T.length;k++){let K=A[k];K!==null&&(A[k]=null,T[k].disconnect(K))}F=null,X=null,m.reset();for(let k in u)delete u[k];t.setRenderTarget(y),d=null,f=null,p=null,s=null,v=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",et),_.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,lt=null,$=null;_.depth&&($=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,at=_.stencil?tl:ko,lt=_.stencil?$o:Na);let Mt={colorFormat:n.RGBA8,depthFormat:$,scaleFactor:a};p=this.getBinding(),f=p.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new es(f.textureWidth,f.textureHeight,{format:si,type:Bi,depthTexture:new Ic(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new es(d.framebufferWidth,d.framebufferHeight,{format:si,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(k){for(let K=0;K<k.removed.length;K++){let at=k.removed[K],lt=A.indexOf(at);lt>=0&&(A[lt]=null,T[lt].disconnect(at))}for(let K=0;K<k.added.length;K++){let at=k.added[K],lt=A.indexOf(at);if(lt===-1){for(let Mt=0;Mt<T.length;Mt++)if(Mt>=A.length){A.push(at),lt=Mt;break}else if(A[Mt]===null){A[Mt]=at,lt=Mt;break}if(lt===-1)break}let $=T[lt];$&&$.connect(at)}}let G=new U,ct=new U;function ft(k,K,at){G.setFromMatrixPosition(K.matrixWorld),ct.setFromMatrixPosition(at.matrixWorld);let lt=G.distanceTo(ct),$=K.projectionMatrix.elements,Mt=at.projectionMatrix.elements,be=$[14]/($[10]-1),D=$[14]/($[10]+1),ee=($[9]+1)/$[5],It=($[9]-1)/$[5],St=($[8]-1)/$[0],gt=(Mt[8]+1)/Mt[0],ce=be*St,xt=be*gt,Ht=lt/(-St+gt),De=Ht*-St;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(De),k.translateZ(Ht),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),$[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ge=be+Ht,C=D+Ht,S=ce-De,P=xt+(lt-De),J=ee*D/C*ge,tt=It*D/C*ge;k.projectionMatrix.makePerspective(S,P,J,tt,ge,C),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Z(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let K=k.near,at=k.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(at=m.depthFar)),z.near=M.near=E.near=K,z.far=M.far=E.far=at,(F!==z.near||X!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),F=z.near,X=z.far),z.layers.mask=k.layers.mask|6,E.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let lt=k.parent,$=z.cameras;Z(z,lt);for(let Mt=0;Mt<$.length;Mt++)Z($[Mt],lt);$.length===2?ft(z,E,M):z.projectionMatrix.copy(E.projectionMatrix),vt(k,z,lt)};function vt(k,K,at){at===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=pr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(k){return u[k]};let Ct=null;function Pt(k,K){if(h=K.getViewerPose(c||r),g=K,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let lt=!1;at.length!==z.cameras.length&&(z.cameras.length=0,lt=!0);for(let D=0;D<at.length;D++){let ee=at[D],It=null;if(d!==null)It=d.getViewport(ee);else{let gt=p.getViewSubImage(f,ee);It=gt.viewport,D===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let St=N[D];St===void 0&&(St=new We,St.layers.enable(D),St.viewport=new re,N[D]=St),St.matrix.fromArray(ee.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(ee.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(It.x,It.y,It.width,It.height),D===0&&(z.matrix.copy(St.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),lt===!0&&z.cameras.push(St)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=i.getBinding();let D=p.getDepthInformation(at[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if($&&$.includes("camera-access")&&x){t.state.unbindTexture(),p=i.getBinding();for(let D=0;D<at.length;D++){let ee=at[D].camera;if(ee){let It=u[ee];It||(It=new Pc,u[ee]=It);let St=p.getCameraImage(ee);It.sourceTexture=St}}}}for(let at=0;at<T.length;at++){let lt=A[at],$=T[at];lt!==null&&$!==void 0&&$.update(lt,K,c||r)}Ct&&Ct(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let Rt=new kb;Rt.setAnimationLoop(Pt),this.setAnimationLoop=function(k){Ct=k},this.dispose=function(){}}},Tr=new xi,cU=new jt;function uU(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,$0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),p(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,v)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=t.get(u),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,Tr.copy(v),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(cU.makeRotationFromEuler(Tr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hU(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let v=y.program;i.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let T=y.program;i.updateUBOMapping(_,T);let A=t.render.frame;a[_.id]!==A&&(f(_),a[_.id]=A)}function h(_){let y=p();_.__bindingPointIndex=y;let v=e.createBuffer(),T=_.__size,A=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,T,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,v),v}function p(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],v=_.uniforms,T=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let A=0,w=v.length;A<w;A++){let R=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,M=R.length;E<M;E++){let N=R[E];if(d(N,A,E,T)===!0){let z=N.__offset,F=Array.isArray(N.value)?N.value:[N.value],X=0;for(let j=0;j<F.length;j++){let q=F[j],et=x(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,z+X,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,X),X+=et.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(_,y,v,T){let A=_.value,w=y+"_"+v;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{let R=T[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return T[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(_){let y=_.uniforms,v=0,T=16;for(let w=0,R=y.length;w<R;w++){let E=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,N=E.length;M<N;M++){let z=E[M],F=Array.isArray(z.value)?z.value:[z.value];for(let X=0,j=F.length;X<j;X++){let q=F[X],et=x(q),G=v%T,ct=G%et.boundary,ft=G+ct;v+=ct,ft!==0&&T-ft<et.storage&&(v+=T-ft),z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=et.storage}}}let A=v%T;return A>0&&(v+=T-A),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function u(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var Xd=class{constructor(t={}){let{canvas:n=mb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,T=!1;this._outputColorSpace=Cn;let A=0,w=0,R=null,E=-1,M=null,N=new re,z=new re,F=null,X=new Vt(0),j=0,q=n.width,et=n.height,G=1,ct=null,ft=null,Z=new re(0,0,q,et),vt=new re(0,0,q,et),Ct=!1,Pt=new Jo,Rt=!1,k=!1,K=new jt,at=new U,lt=new re,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function be(){return R===null?G:1}let D=i;function ee(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",_t,!1),n.addEventListener("webglcontextcreationerror",B,!1),D===null){let O="webgl2";if(D=ee(O,b),D===null)throw ee(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let It,St,gt,ce,xt,Ht,De,ge,C,S,P,J,tt,Y,Dt,rt,bt,Tt,nt,dt,Nt,At,ut,kt;function L(){It=new R3(D),It.init(),At=new rU(D,It),St=new M3(D,It,t,At),gt=new sU(D,It),St.reversedDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),ce=new N3(D),xt=new WD,Ht=new aU(D,It,gt,xt,St,At,ce),De=new E3(v),ge=new C3(v),C=new BC(D),ut=new x3(D,C),S=new D3(D,C,ce,ut),P=new O3(D,S,C,ce),nt=new L3(D,St,Ht),rt=new b3(xt),J=new XD(v,De,ge,It,St,ut,rt),tt=new uU(v,xt),Y=new YD,Dt=new $D(It),Tt=new y3(v,De,ge,gt,P,d,l),bt=new nU(v,P,St),kt=new hU(D,ce,St,gt),dt=new S3(D,It,ce),Nt=new U3(D,It,ce),ce.programs=J.programs,v.capabilities=St,v.extensions=It,v.properties=xt,v.renderLists=Y,v.shadowMap=bt,v.state=gt,v.info=ce}L();let it=new vv(v,D);this.xr=it,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=It.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=It.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(q,et,!1))},this.getSize=function(b){return b.set(q,et)},this.setSize=function(b,O,H=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,et=O,n.width=Math.floor(b*G),n.height=Math.floor(O*G),H===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(q*G,et*G).floor()},this.setDrawingBufferSize=function(b,O,H){q=b,et=O,G=H,n.width=Math.floor(b*H),n.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,O,H,V){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,O,H,V),gt.viewport(N.copy(Z).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,O,H,V){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,O,H,V),gt.scissor(z.copy(vt).multiplyScalar(G).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){gt.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,H=!0){let V=0;if(b){let I=!1;if(R!==null){let st=R.texture.format;I=st===hd||st===ud||st===cd}if(I){let st=R.texture.type,pt=st===Bi||st===Na||st===Qo||st===$o||st===rd||st===od,Et=Tt.getClearColor(),yt=Tt.getClearAlpha(),zt=Et.r,Ft=Et.g,Ut=Et.b;pt?(g[0]=zt,g[1]=Ft,g[2]=Ut,g[3]=yt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=zt,x[1]=Ft,x[2]=Ut,x[3]=yt,D.clearBufferiv(D.COLOR,0,x))}else V|=D.COLOR_BUFFER_BIT}O&&(V|=D.DEPTH_BUFFER_BIT),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",_t,!1),n.removeEventListener("webglcontextcreationerror",B,!1),Tt.dispose(),Y.dispose(),Dt.dispose(),xt.dispose(),De.dispose(),ge.dispose(),P.dispose(),ut.dispose(),kt.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",Fi),it.removeEventListener("sessionend",xv),La.stop()};function ot(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=ce.autoReset,O=bt.enabled,H=bt.autoUpdate,V=bt.needsUpdate,I=bt.type;L(),ce.autoReset=b,bt.enabled=O,bt.autoUpdate=H,bt.needsUpdate=V,bt.type=I}function B(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function W(b){let O=b.target;O.removeEventListener("dispose",W),mt(O)}function mt(b){Lt(b),xt.remove(b)}function Lt(b){let O=xt.get(b).programs;O!==void 0&&(O.forEach(function(H){J.releaseProgram(H)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,V,I,st){O===null&&(O=$);let pt=I.isMesh&&I.matrixWorld.determinant()<0,Et=Qb(b,O,H,V,I);gt.setMaterial(V,pt);let yt=H.index,zt=1;if(V.wireframe===!0){if(yt=S.getWireframeAttribute(H),yt===void 0)return;zt=2}let Ft=H.drawRange,Ut=H.attributes.position,$t=Ft.start*zt,ve=(Ft.start+Ft.count)*zt;st!==null&&($t=Math.max($t,st.start*zt),ve=Math.min(ve,(st.start+st.count)*zt)),yt!==null?($t=Math.max($t,0),ve=Math.min(ve,yt.count)):Ut!=null&&($t=Math.max($t,0),ve=Math.min(ve,Ut.count));let Pe=ve-$t;if(Pe<0||Pe===1/0)return;ut.setup(I,V,Et,H,yt);let Ce,xe=dt;if(yt!==null&&(Ce=C.get(yt),xe=Nt,xe.setIndex(Ce)),I.isMesh)V.wireframe===!0?(gt.setLineWidth(V.wireframeLinewidth*be()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(I.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),gt.setLineWidth(Ot*be()),I.isLineSegments?xe.setMode(D.LINES):I.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else I.isPoints?xe.setMode(D.POINTS):I.isSprite&&xe.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))xe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Ot=I._multiDrawStarts,Le=I._multiDrawCounts,se=I._multiDrawCount,Vn=yt?C.get(yt).bytesPerElement:1,Cr=xt.get(V).currentProgram.getUniforms();for(let Gn=0;Gn<se;Gn++)Cr.setValue(D,"_gl_DrawID",Gn),xe.render(Ot[Gn]/Vn,Le[Gn])}else if(I.isInstancedMesh)xe.renderInstances($t,Pe,I.count);else if(H.isInstancedBufferGeometry){let Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Le=Math.min(H.instanceCount,Ot);xe.renderInstances($t,Pe,Le)}else xe.render($t,Pe)};function ne(b,O,H){b.transparent===!0&&b.side===Mi&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,eu(b,O,H),b.side=Ds,b.needsUpdate=!0,eu(b,O,H),b.side=Mi):eu(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),u=Dt.get(H),u.init(O),y.push(u),H.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),b!==H&&b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let V=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let st=I.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){let Et=st[pt];ne(Et,H,I),V.add(Et)}else ne(st,H,I),V.add(st)}),u=y.pop(),V},this.compileAsync=function(b,O,H=null){let V=this.compile(b,O,H);return new Promise(I=>{function st(){if(V.forEach(function(pt){xt.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){I(b);return}setTimeout(st,10)}It.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let qt=null;function os(b){qt&&qt(b)}function Fi(){La.stop()}function xv(){La.start()}let La=new kb;La.setAnimationLoop(os),typeof self<"u"&&La.setContext(self),this.setAnimationLoop=function(b){qt=b,it.setAnimationLoop(b),b===null?La.stop():La.start()},it.addEventListener("sessionstart",Fi),it.addEventListener("sessionend",xv),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(O),O=it.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,R),u=Dt.get(b,y.length),u.init(O),y.push(u),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Pt.setFromProjectionMatrix(K,Oi,O.reversedDepth),k=this.localClippingEnabled,Rt=rt.init(this.clippingPlanes,k),m=Y.get(b,_.length),m.init(),_.push(m),it.enabled===!0&&it.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&Yd(st,O,-1/0,v.sortObjects)}Yd(b,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ct,ft),Mt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Mt&&Tt.addToRenderList(m,b),this.info.render.frame++,Rt===!0&&rt.beginShadows();let H=u.state.shadowsArray;bt.render(H,b,O),Rt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,I=m.transmissive;if(u.setupLights(),O.isArrayCamera){let st=O.cameras;if(I.length>0)for(let pt=0,Et=st.length;pt<Et;pt++){let yt=st[pt];Mv(V,I,b,yt)}Mt&&Tt.render(b);for(let pt=0,Et=st.length;pt<Et;pt++){let yt=st[pt];Sv(m,b,yt,yt.viewport)}}else I.length>0&&Mv(V,I,b,O),Mt&&Tt.render(b),Sv(m,b,O);R!==null&&w===0&&(Ht.updateMultisampleRenderTarget(R),Ht.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,O),ut.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],Rt===!0&&rt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Yd(b,O,H,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pt.intersectsSprite(b)){V&&lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);let pt=P.update(b),Et=b.material;Et.visible&&m.push(b,pt,Et,H,lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pt.intersectsObject(b))){let pt=P.update(b),Et=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),lt.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),lt.copy(pt.boundingSphere.center)),lt.applyMatrix4(b.matrixWorld).applyMatrix4(K)),Array.isArray(Et)){let yt=pt.groups;for(let zt=0,Ft=yt.length;zt<Ft;zt++){let Ut=yt[zt],$t=Et[Ut.materialIndex];$t&&$t.visible&&m.push(b,pt,$t,H,lt.z,Ut)}}else Et.visible&&m.push(b,pt,Et,H,lt.z,null)}}let st=b.children;for(let pt=0,Et=st.length;pt<Et;pt++)Yd(st[pt],O,H,V)}function Sv(b,O,H,V){let I=b.opaque,st=b.transmissive,pt=b.transparent;u.setupLightsView(H),Rt===!0&&rt.setGlobalState(v.clippingPlanes,H),V&&gt.viewport(N.copy(V)),I.length>0&&tu(I,O,H),st.length>0&&tu(st,O,H),pt.length>0&&tu(pt,O,H),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Mv(b,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new es(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?jo:Bi,minFilter:Ua,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let st=u.state.transmissionRenderTarget[V.id],pt=V.viewport||N;st.setSize(pt.z*v.transmissionResolutionScale,pt.w*v.transmissionResolutionScale);let Et=v.getRenderTarget(),yt=v.getActiveCubeFace(),zt=v.getActiveMipmapLevel();v.setRenderTarget(st),v.getClearColor(X),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Mt&&Tt.render(H);let Ft=v.toneMapping;v.toneMapping=Bs;let Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),Rt===!0&&rt.setGlobalState(v.clippingPlanes,V),tu(b,H,V),Ht.updateMultisampleRenderTarget(st),Ht.updateRenderTargetMipmap(st),It.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ve=0,Pe=O.length;ve<Pe;ve++){let Ce=O[ve],xe=Ce.object,Ot=Ce.geometry,Le=Ce.material,se=Ce.group;if(Le.side===Mi&&xe.layers.test(V.layers)){let Vn=Le.side;Le.side=pn,Le.needsUpdate=!0,bv(xe,H,V,Ot,Le,se),Le.side=Vn,Le.needsUpdate=!0,$t=!0}}$t===!0&&(Ht.updateMultisampleRenderTarget(st),Ht.updateRenderTargetMipmap(st))}v.setRenderTarget(Et,yt,zt),v.setClearColor(X,j),Ut!==void 0&&(V.viewport=Ut),v.toneMapping=Ft}function tu(b,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let I=0,st=b.length;I<st;I++){let pt=b[I],Et=pt.object,yt=pt.geometry,zt=pt.group,Ft=pt.material;Ft.allowOverride===!0&&V!==null&&(Ft=V),Et.layers.test(H.layers)&&bv(Et,O,H,yt,Ft,zt)}}function bv(b,O,H,V,I,st){b.onBeforeRender(v,O,H,V,I,st),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(v,O,H,V,b,st),I.transparent===!0&&I.side===Mi&&I.forceSinglePass===!1?(I.side=pn,I.needsUpdate=!0,v.renderBufferDirect(H,O,V,I,b,st),I.side=Ds,I.needsUpdate=!0,v.renderBufferDirect(H,O,V,I,b,st),I.side=Mi):v.renderBufferDirect(H,O,V,I,b,st),b.onAfterRender(v,O,H,V,I,st)}function eu(b,O,H){O.isScene!==!0&&(O=$);let V=xt.get(b),I=u.state.lights,st=u.state.shadowsArray,pt=I.state.version,Et=J.getParameters(b,I.state,st,O,H),yt=J.getProgramCacheKey(Et),zt=V.programs;V.environment=b.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(b.isMeshStandardMaterial?ge:De).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",W),zt=new Map,V.programs=zt);let Ft=zt.get(yt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===pt)return Tv(b,Et),Ft}else Et.uniforms=J.getUniforms(b),b.onBeforeCompile(Et,v),Ft=J.acquireProgram(Et,yt),zt.set(yt,Ft),V.uniforms=Et.uniforms;let Ut=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=rt.uniform),Tv(b,Et),V.needsLights=$b(b),V.lightsStateVersion=pt,V.needsLights&&(Ut.ambientLightColor.value=I.state.ambient,Ut.lightProbe.value=I.state.probe,Ut.directionalLights.value=I.state.directional,Ut.directionalLightShadows.value=I.state.directionalShadow,Ut.spotLights.value=I.state.spot,Ut.spotLightShadows.value=I.state.spotShadow,Ut.rectAreaLights.value=I.state.rectArea,Ut.ltc_1.value=I.state.rectAreaLTC1,Ut.ltc_2.value=I.state.rectAreaLTC2,Ut.pointLights.value=I.state.point,Ut.pointLightShadows.value=I.state.pointShadow,Ut.hemisphereLights.value=I.state.hemi,Ut.directionalShadowMap.value=I.state.directionalShadowMap,Ut.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ut.spotShadowMap.value=I.state.spotShadowMap,Ut.spotLightMatrix.value=I.state.spotLightMatrix,Ut.spotLightMap.value=I.state.spotLightMap,Ut.pointShadowMap.value=I.state.pointShadowMap,Ut.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function Ev(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=il.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Tv(b,O){let H=xt.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Qb(b,O,H,V,I){O.isScene!==!0&&(O=$),Ht.resetTextureUnits();let st=O.fog,pt=V.isMeshStandardMaterial?O.environment:null,Et=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:dr,yt=(V.isMeshStandardMaterial?ge:De).get(V.envMap||pt),zt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,ve=!!H.morphAttributes.color,Pe=Bs;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pe=v.toneMapping);let Ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=Ce!==void 0?Ce.length:0,Ot=xt.get(V),Le=u.state.lights;if(Rt===!0&&(k===!0||b!==M)){let Sn=b===M&&V.id===E;rt.setState(V,b,Sn)}let se=!1;V.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Le.state.version||Ot.outputColorSpace!==Et||I.isBatchedMesh&&Ot.batching===!1||!I.isBatchedMesh&&Ot.batching===!0||I.isBatchedMesh&&Ot.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ot.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ot.instancing===!1||!I.isInstancedMesh&&Ot.instancing===!0||I.isSkinnedMesh&&Ot.skinning===!1||!I.isSkinnedMesh&&Ot.skinning===!0||I.isInstancedMesh&&Ot.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ot.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ot.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ot.instancingMorph===!1&&I.morphTexture!==null||Ot.envMap!==yt||V.fog===!0&&Ot.fog!==st||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==rt.numPlanes||Ot.numIntersection!==rt.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Ft||Ot.morphTargets!==Ut||Ot.morphNormals!==$t||Ot.morphColors!==ve||Ot.toneMapping!==Pe||Ot.morphTargetsCount!==xe)&&(se=!0):(se=!0,Ot.__version=V.version);let Vn=Ot.currentProgram;se===!0&&(Vn=eu(V,O,I));let Cr=!1,Gn=!1,ol=!1,Oe=Vn.getUniforms(),ri=Ot.uniforms;if(gt.useProgram(Vn.program)&&(Cr=!0,Gn=!0,ol=!0),V.id!==E&&(E=V.id,Gn=!0),Cr||M!==b){gt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Oe.setValue(D,"projectionMatrix",b.projectionMatrix),Oe.setValue(D,"viewMatrix",b.matrixWorldInverse);let Un=Oe.map.cameraPosition;Un!==void 0&&Un.setValue(D,at.setFromMatrixPosition(b.matrixWorld)),St.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Gn=!0,ol=!0)}if(I.isSkinnedMesh){Oe.setOptional(D,I,"bindMatrix"),Oe.setOptional(D,I,"bindMatrixInverse");let Sn=I.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Oe.setValue(D,"boneTexture",Sn.boneTexture,Ht))}I.isBatchedMesh&&(Oe.setOptional(D,I,"batchingTexture"),Oe.setValue(D,"batchingTexture",I._matricesTexture,Ht),Oe.setOptional(D,I,"batchingIdTexture"),Oe.setValue(D,"batchingIdTexture",I._indirectTexture,Ht),Oe.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&Oe.setValue(D,"batchingColorTexture",I._colorsTexture,Ht));let oi=H.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&nt.update(I,H,Vn),(Gn||Ot.receiveShadow!==I.receiveShadow)&&(Ot.receiveShadow=I.receiveShadow,Oe.setValue(D,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ri.envMap.value=yt,ri.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(ri.envMapIntensity.value=O.environmentIntensity),Gn&&(Oe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&jb(ri,ol),st&&V.fog===!0&&tt.refreshFogUniforms(ri,st),tt.refreshMaterialUniforms(ri,V,G,et,u.state.transmissionRenderTarget[b.id]),il.upload(D,Ev(Ot),ri,Ht)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(il.upload(D,Ev(Ot),ri,Ht),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Oe.setValue(D,"center",I.center),Oe.setValue(D,"modelViewMatrix",I.modelViewMatrix),Oe.setValue(D,"normalMatrix",I.normalMatrix),Oe.setValue(D,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Sn=V.uniformsGroups;for(let Un=0,Zd=Sn.length;Un<Zd;Un++){let Oa=Sn[Un];kt.update(Oa,Vn),kt.bind(Oa,Vn)}}return Vn}function jb(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function $b(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,O,H){let V=xt.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),xt.get(b.texture).__webglTexture=O,xt.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let H=xt.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};let tE=D.createFramebuffer();this.setRenderTarget=function(b,O=0,H=0){R=b,A=O,w=H;let V=!0,I=null,st=!1,pt=!1;if(b){let yt=xt.get(b);if(yt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)Ht.setupRenderTarget(b);else if(yt.__hasExternalTextures)Ht.rebindTextures(b,xt.get(b.texture).__webglTexture,xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ut=b.depthTexture;if(yt.__boundDepthTexture!==Ut){if(Ut!==null&&xt.has(Ut)&&(b.width!==Ut.image.width||b.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(b)}}let zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(pt=!0);let Ft=xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?I=Ft[O][H]:I=Ft[O],st=!0):b.samples>0&&Ht.useMultisampledRTT(b)===!1?I=xt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?I=Ft[H]:I=Ft,N.copy(b.viewport),z.copy(b.scissor),F=b.scissorTest}else N.copy(Z).multiplyScalar(G).floor(),z.copy(vt).multiplyScalar(G).floor(),F=Ct;if(H!==0&&(I=tE),gt.bindFramebuffer(D.FRAMEBUFFER,I)&&V&&gt.drawBuffers(b,I),gt.viewport(N),gt.scissor(z),gt.setScissorTest(F),st){let yt=xt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,H)}else if(pt){let yt=O;for(let zt=0;zt<b.textures.length;zt++){let Ft=xt.get(b.textures[zt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,Ft.__webglTexture,H,yt)}}else if(b!==null&&H!==0){let yt=xt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,H)}E=-1},this.readRenderTargetPixels=function(b,O,H,V,I,st,pt,Et=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){gt.bindFramebuffer(D.FRAMEBUFFER,yt);try{let zt=b.textures[Et],Ft=zt.format,Ut=zt.type;if(!St.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&H>=0&&H<=b.height-I&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),D.readPixels(O,H,V,I,At.convert(Ft),At.convert(Ut),st))}finally{let zt=R!==null?xt.get(R).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,V,I,st,pt,Et=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt)if(O>=0&&O<=b.width-V&&H>=0&&H<=b.height-I){gt.bindFramebuffer(D.FRAMEBUFFER,yt);let zt=b.textures[Et],Ft=zt.format,Ut=zt.type;if(!St.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$t),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),D.readPixels(O,H,V,I,At.convert(Ft),At.convert(Ut),0);let ve=R!==null?xt.get(R).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,ve);let Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await gb(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$t),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer($t),D.deleteSync(Pe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,H=0){let V=Math.pow(2,-H),I=Math.floor(b.image.width*V),st=Math.floor(b.image.height*V),pt=O!==null?O.x:0,Et=O!==null?O.y:0;Ht.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,pt,Et,I,st),gt.unbindTexture()};let eE=D.createFramebuffer(),nE=D.createFramebuffer();this.copyTextureToTexture=function(b,O,H=null,V=null,I=0,st=null){st===null&&(I!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=I,I=0):st=0);let pt,Et,yt,zt,Ft,Ut,$t,ve,Pe,Ce=b.isCompressedTexture?b.mipmaps[st]:b.image;if(H!==null)pt=H.max.x-H.min.x,Et=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,zt=H.min.x,Ft=H.min.y,Ut=H.isBox3?H.min.z:0;else{let oi=Math.pow(2,-I);pt=Math.floor(Ce.width*oi),Et=Math.floor(Ce.height*oi),b.isDataArrayTexture?yt=Ce.depth:b.isData3DTexture?yt=Math.floor(Ce.depth*oi):yt=1,zt=0,Ft=0,Ut=0}V!==null?($t=V.x,ve=V.y,Pe=V.z):($t=0,ve=0,Pe=0);let xe=At.convert(O.format),Ot=At.convert(O.type),Le;O.isData3DTexture?(Ht.setTexture3D(O,0),Le=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ht.setTexture2DArray(O,0),Le=D.TEXTURE_2D_ARRAY):(Ht.setTexture2D(O,0),Le=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let se=D.getParameter(D.UNPACK_ROW_LENGTH),Vn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Cr=D.getParameter(D.UNPACK_SKIP_PIXELS),Gn=D.getParameter(D.UNPACK_SKIP_ROWS),ol=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ft),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);let Oe=b.isDataArrayTexture||b.isData3DTexture,ri=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let oi=xt.get(b),Sn=xt.get(O),Un=xt.get(oi.__renderTarget),Zd=xt.get(Sn.__renderTarget);gt.bindFramebuffer(D.READ_FRAMEBUFFER,Un.__webglFramebuffer),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zd.__webglFramebuffer);for(let Oa=0;Oa<yt;Oa++)Oe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(b).__webglTexture,I,Ut+Oa),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(O).__webglTexture,st,Pe+Oa)),D.blitFramebuffer(zt,Ft,pt,Et,$t,ve,pt,Et,D.DEPTH_BUFFER_BIT,D.NEAREST);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||xt.has(b)){let oi=xt.get(b),Sn=xt.get(O);gt.bindFramebuffer(D.READ_FRAMEBUFFER,eE),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,nE);for(let Un=0;Un<yt;Un++)Oe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oi.__webglTexture,I,Ut+Un):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,oi.__webglTexture,I),ri?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Sn.__webglTexture,st,Pe+Un):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Sn.__webglTexture,st),I!==0?D.blitFramebuffer(zt,Ft,pt,Et,$t,ve,pt,Et,D.COLOR_BUFFER_BIT,D.NEAREST):ri?D.copyTexSubImage3D(Le,st,$t,ve,Pe+Un,zt,Ft,pt,Et):D.copyTexSubImage2D(Le,st,$t,ve,zt,Ft,pt,Et);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ri?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Le,st,$t,ve,Pe,pt,Et,yt,xe,Ot,Ce.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,st,$t,ve,Pe,pt,Et,yt,xe,Ce.data):D.texSubImage3D(Le,st,$t,ve,Pe,pt,Et,yt,xe,Ot,Ce):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,$t,ve,pt,Et,xe,Ot,Ce.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,$t,ve,Ce.width,Ce.height,xe,Ce.data):D.texSubImage2D(D.TEXTURE_2D,st,$t,ve,pt,Et,xe,Ot,Ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Cr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ol),st===0&&O.generateMipmaps&&D.generateMipmap(Le),gt.unbindTexture()},this.initRenderTarget=function(b){xt.get(b).__webglFramebuffer===void 0&&Ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ht.setTextureCube(b,0):b.isData3DTexture?Ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ht.setTexture2DArray(b,0):Ht.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,gt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),n.unpackColorSpace=ie._getUnpackColorSpace()}};function Zb(){let e=new Rn,t=new Rn,n=[],i=[],s=[],a=[],r=new zi({color:"#f1e6df",roughness:.27,metalness:.12,clearcoat:1,clearcoatRoughness:.17,iridescence:.22,iridescenceIOR:1.3}),o=new He({color:"#fff3ed",roughness:.4}),l=new zi({color:"#dea6bd",roughness:.3,clearcoat:1,iridescence:.25}),c=new He({color:"#5b4240",roughness:.5}),h=new zi({color:"#162b31",roughness:.12,clearcoat:1}),p=new He({color:"#487f80",roughness:.28,metalness:.2}),f=new Ls({color:"#fffcf1"}),d=new He({color:"#578b8a",roughness:.78}),g=new He({color:"#b47853",roughness:.72}),x=new He({color:"#cdbb83",roughness:.32,metalness:.65}),m=new _r(1,48,32);function u(Z,vt,Ct,Pt,Rt=e){let k=new me(Z,vt);return k.position.set(...Ct),Pt&&k.scale.set(...Pt),Rt.add(k),k}function _(Z,vt,Ct,Pt=e){return u(new Vc(new Is(Z.map(Rt=>new U(...Rt))),24,vt,8,!1),Ct,[0,0,0],null,Pt)}let y=m.clone(),v=y.attributes.position;for(let Z=0;Z<v.count;Z++){let vt=v.getX(Z),Ct=v.getY(Z),Pt=v.getZ(Z),Rt=1-.23*Ct;v.setXYZ(Z,vt*.61*Rt,Ct*.66,Pt*.49*Rt)}y.computeVertexNormals(),u(y,r,[0,.73,0]),u(m,o,[0,.65,.405],[.41,.5,.13]),t.position.set(0,1.48,.055),e.add(t);let T=m.clone(),A=T.attributes.position;for(let Z=0;Z<A.count;Z++){let vt=A.getX(Z),Ct=A.getY(Z),Pt=A.getZ(Z),Rt=1+.12*Math.exp(-Math.pow((Ct+.25)*2,2));A.setXYZ(Z,vt*.74*Rt,Ct*.64,Pt*.58*(1-.07*Ct))}T.computeVertexNormals(),u(T,r,[0,0,0],null,t);function w(Z=!1){let vt=[],Ct=[];for(let K=0;K<=32;K++){let at=K/32,lt=Math.pow(Math.sin(Math.PI*at),.68)*(Z?.105:.178);for(let $=0;$<=20;$++){let Mt=$/20*Math.PI*2;vt.push(Math.cos(Mt)*lt*(Z?.82:1)+.07*at*at,at*(Z?.87:1.16)+(Z?.1:0),Math.sin(Mt)*lt*(Z?.14:.51)+Math.sin(at*Math.PI*.7)*.16+(Z?.085:0))}}for(let K=0;K<32;K++)for(let at=0;at<20;at++){let lt=K*21+at,$=lt+20+1;Ct.push(lt,$,lt+1,$,$+1,lt+1)}let k=new Ze;return k.setAttribute("position",new ye(vt,3)),k.setIndex(Ct),k.computeVertexNormals(),k}for(let Z of[-1,1]){let vt=new Rn;vt.position.set(Z*.36,.44,-.02),vt.rotation.z=-Z*.13,t.add(vt),n.push(vt);let Ct=Array.from({length:5},()=>new Zo);for(let lt=1;lt<Ct.length;lt++)Ct[lt].position.y=.29,Ct[lt-1].add(Ct[lt]);vt.add(Ct[0]);let Pt={bones:Ct,x:0,z:0,vx:0,vz:0,tx:0,tz:0,stretch:0,targetStretch:0};a.push(Pt);for(let lt of[!1,!0]){let $=w(lt),Mt=$.attributes.position,be=[],D=[];for(let It=0;It<Mt.count;It++){let St=Ei.clamp(Mt.getY(It)/.29,0,3.999),gt=Math.floor(St),ce=St-gt;D.push(gt,gt+1,0,0),be.push(1-ce,ce,0,0)}$.setAttribute("skinIndex",new gr(D,4)),$.setAttribute("skinWeight",new ye(be,4));let ee=new Dc($,lt?l:r);ee.userData.earIndex=a.length-1,ee.frustumCulled=!1,vt.add(ee),e.updateMatrixWorld(!0),ee.bind(new Nc(Ct)),ee.boundingSphere=new ni(new U(0,.5,0),2.5)}u(m,o,[Z*.16,-.21,.525],[.18,.12,.085],t);let Rt=new Rn;Rt.position.set(Z*.27,.04,.548),Rt.rotation.y=Z*.25,t.add(Rt),s.push(Rt),u(m,h,[0,0,.015],[.103,.134,.061],Rt),u(m,f,[-.027,.053,.09],[.025,.032,.008],Rt),u(m,f,[.025,-.04,.09],[.01,.014,.006],Rt),_([[Z*.36,.26,.4],[Z*.29,.29,.45],[Z*.22,.28,.46]],.014,r,t),u(m,l,[Z*.47,-.17,.39],[.075,.036,.014],t);let k=u(m,r,[Z*.43,.045,.3],[.27,.18,.4]);k.rotation.y=Z*.16;for(let lt=0;lt<2;lt++)_([[Z*.43+(lt-.5)*.09,.165,.51],[Z*.43+(lt-.5)*.09,.17,.59],[Z*.43+(lt-.5)*.09,.12,.65]],.006,c);let K=new Rn;K.position.set(Z*.56,.95,.015),e.add(K),i.push(K);let at=u(m,r,[Z*.03,-.22,.08],[.17,.34,.2],K);at.rotation.x=-.16,u(m,o,[Z*.04,-.45,.13],[.14,.15,.17],K),_([[Z*.35,1.15,-.19],[Z*.49,.9,.27],[Z*.44,.43,.3]],.045,g)}let R=u(m,l,[0,-.18,.63],[.048,.032,.028],t);R.rotation.z=Math.PI,_([[0,-.21,.626],[0,-.26,.616],[-.045,-.28,.603]],.008,c,t),_([[0,-.26,.616],[.045,-.28,.603]],.008,c,t),u(m,r,[0,.43,-.54],[.23,.23,.22]);let E=u(new ss(.37,.1,12,64),d,[0,1.21,.035],[1,1,.72]);E.rotation.x=Math.PI/2,u(m,d,[.29,1.13,.29],[.14,.13,.12]);let M=u(m,d,[.36,.94,.35],[.105,.27,.055]);M.rotation.z=-.2,_([[.4,1.08,.41],[.43,.94,.41],[.44,.75,.38]],.007,f),u(m,g,[0,.8,-.47],[.41,.43,.22]),u(m,x,[0,.86,-.686],[.09,.075,.018]);let N=u(new is(.085,.085,.022,24),x,[.29,.88,.44]);N.rotation.x=Math.PI/2;let z=-10,F=null,X=new yi,j=new U,q=new U,et=new U;function G(Z,vt){e.updateMatrixWorld(!0);let Ct=Z.intersectObject(e,!0).find(Pt=>Pt.object.userData.earIndex!==void 0);return Ct?(vt.getWorldDirection(j),X.setFromNormalAndCoplanarPoint(j,Ct.point),F={index:Ct.object.userData.earIndex,origin:Ct.point.clone()},!0):!1}function ct(Z){if(!F||!Z.ray.intersectPlane(X,q))return;et.copy(q).sub(F.origin);let vt=a[F.index];vt.tz=Ei.clamp(-et.x*1.5,-1.1,1.1),vt.tx=Ei.clamp(-et.y*.8+et.z*.6,-.75,.75),vt.targetStretch=Ei.clamp(et.y*.3,-.15,.35)}function ft(){F=null;for(let Z of a)Z.tx=0,Z.tz=0,Z.targetStretch=0}return{root:e,beginDrag:G,dragTo:ct,release:ft,get dragging(){return!!F},greet(Z){z=Z},update(Z,vt,Ct,Pt,Rt,k=1/60){Pt&&F&&ft();let K=Math.min(k,1/30)/2;for(let $ of a){for(let Mt=0;Mt<2;Mt++)$.vx+=(($.tx-$.x)*105-$.vx*8.5)*K,$.vz+=(($.tz-$.z)*105-$.vz*8.5)*K,$.x+=$.vx*K,$.z+=$.vz*K;$.stretch+=($.targetStretch-$.stretch)*(1-Math.exp(-k*12));for(let Mt=0;Mt<$.bones.length;Mt++)$.bones[Mt].rotation.x=$.x*(.22+Mt*.07),$.bones[Mt].rotation.z=$.z*(.22+Mt*.07),$.bones[Mt].scale.y=1+$.stretch*.22}e.scale.y=1+(Rt?0:Math.sin(Z*1.7)*.013),t.rotation.y=vt*.18,t.rotation.x=Ct*.08-Pt*.48,t.rotation.z=Math.sin(Z*.7)*.018;let at=Z%5.6,lt=at>5.35?Math.max(.08,Math.abs(at-5.475)/.125):1;s.forEach($=>$.scale.y=lt),n[0].rotation.z=.15+Math.sin(Z*1.8)*.025+Pt*.23,n[1].rotation.z=-.13+Math.sin(Z*1.8+.5)*.03-Pt*.24,n[1].rotation.x=.09+Pt*.4,n[0].rotation.x=Pt*.35,i[0].rotation.z=.12+Pt*1.1,i[1].rotation.z=-.12-Pt*1.1-(Z-z<2?.6+Math.sin((Z-z)*11)*.25:0)}}}function Jb(){let e=new Os,t=new We(55,1,.1,160);t.position.z=25;let n={time:{value:0},resolution:{value:new wt(1,1)},center:{value:new wt(.68,.5)},radius:{value:.32},tilt:{value:0},pressed:{value:0}},i="uniform vec2 resolution,center;uniform float radius,tilt;vec2 apertureUV(){vec2 p=(gl_FragCoord.xy/resolution-center)*vec2(resolution.x/resolution.y,1.)/radius;float c=cos(tilt),s=sin(tilt);return mat2(c,-s,s,c)*p/vec2(1.,.84);} ",s=new rn({depthWrite:!1,depthTest:!1,uniforms:n,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:i+`
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
    }`}),a=new me(new Ps(2,2),s);a.frustumCulled=!1,a.renderOrder=-10,e.add(a);let r=18e3,o=new Float32Array(r*3),l=new Float32Array(r*3),c=new Float32Array(r),h=new Vt;for(let v=0;v<r;v++){let T=Math.pow(Math.random(),.65)*22,A=v%4*Math.PI/2+T*.23+(Math.random()-.5)*.4;o[v*3]=Math.cos(A)*T,o[v*3+1]=(Math.random()-.5)*(.45+T*.06),o[v*3+2]=Math.sin(A)*T,v>r*.8&&(o[v*3]=(Math.random()-.5)*65,o[v*3+1]=(Math.random()-.5)*30,o[v*3+2]=(Math.random()-.5)*70),h.setHSL(Math.random()<.65?.57:.08+Math.random()*.05,.2+Math.random()*.3,.65+Math.random()*.28),h.toArray(l,v*3),c[v]=.7+Math.random()*1.6}let p=new Ze;p.setAttribute("position",new qe(o,3)),p.setAttribute("color",new qe(l,3)),p.setAttribute("size",new qe(c,1));let f=new rn({uniforms:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Da,vertexShader:"attribute float size;uniform float time;varying vec3 tint;void main(){tint=color;vec4 v=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*v;gl_PointSize=clamp(size*45./max(1.,-v.z),.8,4.5);}",fragmentShader:i+"varying vec3 tint;void main(){float r=length(apertureUV());if(r>.975)discard;float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.04,d);gl_FragColor=vec4(tint,a*.8);}"}),d=new vr(p,f);d.rotation.set(.9,0,-.25),e.add(d);let g=.68,x=.5,m=.68,u=.5,_=0,y=matchMedia("(prefers-reduced-motion: reduce)");return{scene:e,camera:t,move(v,T){m=v,u=1-T},press(v){_=v?1:0},resize(v,T,A){t.aspect=v/T,t.updateProjectionMatrix(),n.resolution.value.set(v*A,T*A),n.radius.value=v/T<.9?.34:.36},update(v,T){let A=1-Math.exp(-T*9);g+=(m-g)*A,x+=(u-x)*A,n.center.value.set(g,x),n.tilt.value=(g-.5)*.38,n.time.value=y.matches?0:v,n.pressed.value+=(_-n.pressed.value)*A,t.position.x=(g-.5)*5,t.position.y=(x-.5)*3,t.position.z=25-n.pressed.value*3,t.lookAt(0,0,0),d.rotation.y=y.matches?0:v*.014},dispose(){p.dispose(),f.dispose(),a.geometry.dispose(),s.dispose()}}}var qd=class extends Os{constructor(){super();let t=new Dn;t.deleteAttribute("uv");let n=new He({side:pn}),i=new He,s=new Ra(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new me(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new Oc(t,i,6),o=new Ye;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new me(t,rl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new me(t,rl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new me(t,rl(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let p=new me(t,rl(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let f=new me(t,rl(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new me(t,rl(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function rl(e){return new Gc({color:0,emissive:16777215,emissiveIntensity:e})}function fU(){let e=(0,ai.useRef)(null),[t,n]=(0,ai.useState)("A LITTLE CURIOSITY. AN INFINITE UNIVERSE.");return(0,ai.useEffect)(()=>{let i=e.current,s=document.getElementById("threshold"),a;try{a=new Xd({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{n("YOUR ADVENTURE BEGINS WITH A TOUCH.");return}a.setPixelRatio(Math.min(devicePixelRatio,1.4)),a.outputColorSpace=Cn,a.toneMapping=ed,a.toneMappingExposure=.95,a.shadowMap.enabled=!1,a.shadowMap.type=qf,a.domElement.setAttribute("aria-label","A little moon creature in a quiet room, looking toward a luminous doorway. Drag either ear and release to feel the spring; drag the room to look around."),i.appendChild(a.domElement);let r=new Os;r.background=new Vt("#101c22"),r.fog=new Rc("#101c22",.037);let o=new We(40,1,.1,90);o.position.set(0,2.1,12);let l=new sl(a),c=new qd,h=l.fromScene(c,.04);r.environment=h.texture,c.dispose(),l.dispose();let p=new Xc("#b9e6ed","#444337",1.5);r.add(p);let f=new Wc("#e6faff",65,25,.6,.8,1.4);f.position.set(4,6,-4),f.target.position.set(2,-1,1),f.castShadow=!0,f.shadow.mapSize.set(1024,1024),f.shadow.bias=-5e-4,r.add(f,f.target);let d=new Ra("#ffb786",22,14,2);d.position.set(-3,2,3),r.add(d);let g=new Ra("#a0ecff",45,13,2);g.position.set(4,2,-3),r.add(g);let x=new He({color:"#33474b",roughness:.84}),m=new He({color:"#34464a",roughness:.34,metalness:.22}),u=new zi({color:"#e7e2ce",roughness:.28,clearcoat:.55,clearcoatRoughness:.28}),_=new zi({color:"#132529",roughness:.12,clearcoat:1}),y=new He({color:"#d79580",roughness:.5}),v=new He({color:"#8aafaf",metalness:.72,roughness:.25}),T=new zi({color:"#b9f0e6",roughness:.14,metalness:.3,clearcoat:1}),A=new Ls({color:"#d9ffff"});function w(B,W,mt,Lt,ne=r){let qt=new me(B,W);return qt.position.set(...mt),Lt&&qt.scale.set(...Lt),qt.castShadow=!0,qt.receiveShadow=!0,ne.add(qt),qt}let R=new _r(1,40,28),E=w(new Dn(30,.3,35),m,[0,-1.75,-6]);w(new Dn(16,14,.4),x,[-7.4,3,-6]),w(new Dn(8,14,.4),x,[9.6,3,-6]),w(new Dn(5,5,.4),x,[3.1,8.3,-6]),w(new Dn(.35,14,25),x,[10,3,-6]);let M=new Rn;M.position.set(3.1,2,-6),r.add(M);let N=w(new ss(2.38,.12,16,88),v,[0,0,0],[1,1.45,1],M);w(new ss(2.22,.025,8,88),A,[0,0,-.02],[1,1.45,1],M);for(let B=1;B<8;B++)w(new ss(2.24,.035,8,64),B%2?v:A,[0,0,-B*2],[1,1.45,1],M);let z=new rn({transparent:!0,depthWrite:!1,side:Mi,blending:Da,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float time;void main(){float edge=pow(sin(vUv.x*3.14159),3.);float rays=.85+.15*sin(vUv.x*65.+time*.3);float a=edge*rays*(1.-vUv.y)*.105;gl_FragColor=vec4(.65,.87,1.,a);}"}),F=w(new zc(2.7,9,48,1,!0),z,[3.1,2,-1]);F.rotation.x=-.63,F.castShadow=!1,w(new is(1.5,1.6,.12,64),v,[2,-1.53,1]),w(new is(1.43,1.43,.14,64),new He({color:"#53666a",roughness:.72}),[2,-1.43,1]);let X=new He({color:"#b3a28c",roughness:.85});for(let B=0;B<3;B++){let W=w(new Dn(.95,.14,.65),B===1?v:X,[4.2,-1.5+B*.15,1.7]);W.rotation.y=B*.17-.2}w(new is(.23,.22,.48,32),u,[3.8,-1.35,2.6]);let j=w(new ss(.14,.045,10,32),u,[4.04,-1.3,2.6]),q=w(new Hc(.27,.075,80,12),T,[4.2,-.7,1.7]),et=Zb(),G=et.root;G.position.set(2,-1.28,1),r.add(G);let ct=new rn({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 v;void main(){float a=exp(-dot(v-.5,v-.5)*24.)*.43;gl_FragColor=vec4(.025,.04,.045,a);}"}),ft=w(new Ps(2.8,2.8),ct,[2,-1.34,1]);ft.rotation.x=-Math.PI/2;let Z=new Float32Array(500*3);for(let B=0;B<500;B++)Z[B*3]=(Math.random()-.5)*24,Z[B*3+1]=Math.random()*13-1.3,Z[B*3+2]=-Math.random()*34+3;let vt=new Ze;vt.setAttribute("position",new qe(Z,3));let Ct=new rn({transparent:!0,depthWrite:!1,blending:Da,uniforms:{time:{value:0}},vertexShader:"uniform float time;varying float a;void main(){vec3 p=position;p.y+=sin(time*.25+position.x)*.12;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(22./-mv.z,1.,4.);a=.4+.4*sin(time+position.z*3.);}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.76,.9,1.,smoothstep(.5,.05,d)*a);}"}),Pt=new vr(vt,Ct);r.add(Pt);let Rt=matchMedia("(prefers-reduced-motion: reduce)"),k=document.getElementById("cosmicWorld"),K=document.getElementById("lensScene"),at=document.createElement("div");at.className="voyager-flight",document.body.appendChild(at);let lt=null,$="home",Mt=0,be=0,D=null,ee=0,It=0,St=null,gt=null,ce=null,xt=!1,Ht=0,De=0,ge=0,C=!1,S=new qc,P=new wt,J=new U,tt=new U,Y=new Is([new U(2,-1.28,1),new U(2.2,.8,0),new U(3.1,2,-6),new U(3.1,2.4,-26)]),Dt=new Is([new U(0,2.1,12),new U(1.8,2.5,7),new U(3.1,2.3,-1),new U(3.1,2.4,-20)]),rt=()=>{let B=s.clientWidth,W=s.clientHeight;if(!B||!W)return;let mt=Math.max(1,Math.min(devicePixelRatio,1.6,Math.sqrt(24e5/(B*W))));a.setPixelRatio(mt),a.setSize(B,W),o.aspect=B/W,o.updateProjectionMatrix(),lt?.resize(B,W,mt)},bt=new ResizeObserver(rt);bt.observe(s),rt();function Tt(){if(St!==null)return;let B=s.classList.contains("is-active")?"home":K.classList.contains("is-active")?"cosmos":"idle";B!==$&&($=B,$==="home"&&(i.appendChild(a.domElement),a.domElement.style.opacity="1",n("A LITTLE CURIOSITY. AN INFINITE UNIVERSE.")),$==="cosmos"&&(lt??(lt=Jb()),k.appendChild(a.domElement),a.domElement.style.opacity="1",rt())),L()}let nt=B=>{Mt=B.clientX/innerWidth*2-1,be=B.clientY/innerHeight*2-1,lt?.move((Mt+1)/2,(be+1)/2),et.dragging&&$==="home"&&(P.set(Mt,-be),S.setFromCamera(P,o),et.dragTo(S)),D&&$==="home"&&!et.dragging&&(ee=Ei.clamp(ee+(B.clientX-D.x)*.004,-.55,.55),It=Ei.clamp(It+(B.clientY-D.y)*.002,-.2,.2),D={x:B.clientX,y:B.clientY}),L()},dt=B=>{if($==="cosmos"){lt.press(!0),L();return}if(!($!=="home"||St!==null)){if(D={x:B.clientX,y:B.clientY},a.domElement.setPointerCapture(B.pointerId),nt(B),P.set(Mt,-be),S.setFromCamera(P,o),et.beginDrag(S,o)){D=null,a.domElement.style.cursor="grabbing",n("PULL AN EAR. LET GO. WATCH IT BOUNCE.");return}S.intersectObject(G,!0).length&&(et.greet(ge),n("OH, HELLO. SHALL WE FOLLOW THAT LIGHT?"))}},Nt=()=>{D=null,et.dragging&&(et.release(),a.domElement.style.cursor="",n("A LITTLE STRETCH. A LITTLE SPRING.")),lt?.press(!1),L()};a.domElement.addEventListener("pointerdown",dt),window.addEventListener("pointermove",nt),window.addEventListener("pointerup",Nt),a.domElement.addEventListener("pointercancel",Nt);function At(){at.classList.remove("is-flying"),at.style.opacity="0",a.domElement.style.opacity="1",St=null,s.classList.remove("home-departing"),document.documentElement.classList.remove("voyager-running");let B=gt;gt=null,Tt(),B?.()}function ut(B){return St!==null?Promise.resolve():Rt.matches?(B(),Promise.resolve()):(St=ge,ce=B,xt=!1,$="home",n("SOMETHING OUT THERE IS CALLING."),s.classList.add("home-departing"),document.documentElement.classList.add("voyager-running"),at.appendChild(a.domElement),at.classList.add("is-flying"),at.style.opacity="1",new Promise(W=>{gt=W,L()}))}window.HomeWorld={depart:ut};function kt(B){if(Ht=0,document.hidden||$==="idle"&&St===null||window.WorldFX?.suspendScene){De=0;return}let W=De?Math.min((B-De)/1e3,.06):1/60;if(De=B,ge+=W,$==="cosmos")lt.update(ge,W),a.render(lt.scene,lt.camera);else{let mt=ge,Lt=St===null?0:Math.min(1,(ge-St)/4.4),ne=Ei.smoothstep(Lt,.12,.88);if(St!==null)Dt.getPoint(ne,tt),o.position.copy(tt),Y.getPoint(ne,G.position),J.set(3.1,2.4,-29),o.lookAt(J),G.rotation.y=Mt*.08+ne*Math.PI,G.rotation.x=-Math.sin(ne*Math.PI)*.22,ft.visible=!1,a.domElement.style.opacity=String(1-Ei.smoothstep(Lt,.74,.86)),Lt>=.86&&!xt&&(xt=!0,ce()),at.style.opacity=String(1-Ei.smoothstep(Lt,.87,1));else{let qt=o.aspect<.9;tt.set((qt?2:0)+Mt*.22+Math.sin(ee)*2,2.1-be*.12+It,12),o.position.lerp(tt,1-Math.exp(-W*4)),J.set(qt?2:.1,1,-1),o.lookAt(J),G.position.set(2,-1.28,1),G.rotation.set(0,ee*.4+Mt*.1,0),ft.visible=!0}et.update(mt,Mt,be,ne,Rt.matches,W),q.rotation.y=Rt.matches?0:mt*.3,q.position.y=-.64+(Rt.matches?0:Math.sin(mt*1.4)*.06),F.rotation.z=Mt*.025,z.uniforms.time.value=mt,Ct.uniforms.time.value=mt,a.render(r,o),C||(C=!0,s.classList.add("home-ready")),Lt===1&&At()}(!Rt.matches||St!==null)&&$!=="idle"&&(Ht=requestAnimationFrame(kt))}function L(){!Ht&&!document.hidden&&($!=="idle"||St!==null)&&!window.WorldFX?.suspendScene&&(Ht=requestAnimationFrame(kt))}let it=new MutationObserver(Tt);it.observe(s,{attributes:!0,attributeFilter:["class"]}),it.observe(K,{attributes:!0,attributeFilter:["class"]});let ot=()=>{De=0,L()};document.addEventListener("visibilitychange",ot);let _t=new MutationObserver(L);return _t.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),Rt.addEventListener("change",L),L(),()=>{cancelAnimationFrame(Ht),bt.disconnect(),it.disconnect(),_t.disconnect(),window.removeEventListener("pointermove",nt),window.removeEventListener("pointerup",Nt),document.removeEventListener("visibilitychange",ot),Rt.removeEventListener("change",L),r.traverse(B=>{if(B.geometry?.dispose(),B.material)for(let W of[B.material].flat())W.dispose()}),lt?.dispose(),h.dispose(),a.dispose(),a.domElement.remove(),at.remove(),delete window.HomeWorld}},[]),ai.default.createElement(ai.default.Fragment,null,ai.default.createElement("div",{className:"home-three-canvas",ref:e}),ai.default.createElement("div",{className:"home-story mono","aria-live":"polite"},ai.default.createElement("span",{className:"home-story-dot"}),t))}(0,Kb.createRoot)(document.getElementById("homeWorld")).render(ai.default.createElement(fU,null));})();
/*! For license information please see home-world.js.LEGAL.txt */
