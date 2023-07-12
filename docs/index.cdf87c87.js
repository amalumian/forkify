var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,g,v,m,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var _={},w={},k=b.parcelRequire3a11;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},b.parcelRequire3a11=k);var $={},S={},E=function(e){return e&&e.Math==Math&&e};$=S=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||function(){return this}()||S||Function("return this")();var T={},O={},j={},M={};j=!(M=function(e){try{return!!e()}catch(e){return!0}})(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype,L=P.call,q=j&&P.bind.bind(L,L);O=j?q:function(e){return function(){return L.apply(e,arguments)}};var I={},H={},x={};x=function(e){return null==e};var A=TypeError;H=function(e){if(x(e))throw A("Can't call method on "+e);return e};var C=Object;I=function(e){return C(H(e))};var D=O({}.hasOwnProperty);T=Object.hasOwn||function(e,t){return D(I(e),t)};var F={},N={},W={};W=!1;var R={},U={},z=Object.defineProperty;U=function(e,t){try{z(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var B="__core-js_shared__";R=S[B]||U(B,{}),(N=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.1",mode:W?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"});var J={},Q=0,V=Math.random(),Y=O(1..toString);J=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Y(++Q+V,36)};var G={},K={},X={};X="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var Z=S.process,ee=S.Deno,et=Z&&Z.versions||ee&&ee.version,er=et&&et.v8;er&&(r=(t=er.split("."))[0]>0&&t[0]<4?1:+(t[0]+t[1])),!r&&X&&(!(t=X.match(/Edge\/(\d+)/))||t[1]>=74)&&(t=X.match(/Chrome\/(\d+)/))&&(r=+t[1]),K=r;var en=S.String;G=!!Object.getOwnPropertySymbols&&!M(function(){var e=Symbol();return!en(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&K&&K<41});var ei={};ei=G&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=S.Symbol,eo=N("wks"),es=ei?ea.for||ea:ea&&ea.withoutSetter||J;e=F=function(e){return T(eo,e)||(eo[e]=G&&T(ea,e)?ea[e]:es("Symbol."+e)),eo[e]};var ec={};ec=!M(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var eu={},el={},ed={},ep={},ef={},eh="object"==typeof document&&document.all,eg=(ef={all:eh,IS_HTMLDDA:void 0===eh&&void 0!==eh}).all;ep=ef.IS_HTMLDDA?function(e){return"function"==typeof e||e===eg}:function(e){return"function"==typeof e};var ev=ef.all;ed=ef.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:ep(e)||e===ev}:function(e){return"object"==typeof e?null!==e:ep(e)};var em=S.document,eb=ed(em)&&ed(em.createElement);el=function(e){return eb?em.createElement(e):{}},eu=!ec&&!M(function(){return 7!=Object.defineProperty(el("div"),"a",{get:function(){return 7}}).a});var ey={};ey=ec&&M(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var e_={},ew=String,ek=TypeError;e_=function(e){if(ed(e))return e;throw ek(ew(e)+" is not an object")};var e$={},eS={},eE={},eT=Function.prototype.call;eE=j?eT.bind(eT):function(){return eT.apply(eT,arguments)};var eO={},ej={};ej=function(e,t){var r;return arguments.length<2?ep(r=S[e])?r:void 0:S[e]&&S[e][t]};var eM={};eM=O({}.isPrototypeOf);var eP=Object;eO=ei?function(e){return"symbol"==typeof e}:function(e){var t=ej("Symbol");return ep(t)&&eM(t.prototype,eP(e))};var eL={},eq={},eI={},eH=String;eI=function(e){try{return eH(e)}catch(e){return"Object"}};var ex=TypeError;eq=function(e){if(ep(e))return e;throw ex(eI(e)+" is not a function")},eL=function(e,t){var r=e[t];return x(r)?void 0:eq(r)};var eA={},eC=TypeError;eA=function(e,t){var r,n;if("string"===t&&ep(r=e.toString)&&!ed(n=eE(r,e))||ep(r=e.valueOf)&&!ed(n=eE(r,e))||"string"!==t&&ep(r=e.toString)&&!ed(n=eE(r,e)))return n;throw eC("Can't convert object to primitive value")};var eD=TypeError,eF=F("toPrimitive");eS=function(e,t){if(!ed(e)||eO(e))return e;var r,n=eL(e,eF);if(n){if(void 0===t&&(t="default"),!ed(r=eE(n,e,t))||eO(r))return r;throw eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),eA(e,t)},e$=function(e){var t=eS(e,"string");return eO(t)?t:t+""};var eN=TypeError,eW=Object.defineProperty,eR=Object.getOwnPropertyDescriptor,eU="enumerable",ez="configurable",eB="writable";"use strict";n=ec?ey?function(e,t,r){if(e_(e),t=e$(t),e_(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eB in r&&!r[eB]){var n=eR(e,t);n&&n[eB]&&(e[t]=r.value,r={configurable:ez in r?r[ez]:n[ez],enumerable:eU in r?r[eU]:n[eU],writable:!1})}return eW(e,t,r)}:eW:function(e,t,r){if(e_(e),t=e$(t),e_(r),eu)try{return eW(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eN("Accessors not supported");return"value"in r&&(e[t]=r.value),e},function(t){var r=$.Symbol||($.Symbol={});T(r,t)||n(r,t,{value:e(t)})}("dispose");var eJ={},eQ={}.propertyIsEnumerable,eV=Object.getOwnPropertyDescriptor;a=eV&&!eQ.call({1:2},1)?function(e){var t=eV(this,e);return!!t&&t.enumerable}:eQ;var eY={};eY=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var eG={},eK={},eX={},eZ=O({}.toString),e1=O("".slice);eX=function(e){return e1(eZ(e),8,-1)};var e0=Object,e9=O("".split);eK=M(function(){return!e0("z").propertyIsEnumerable(0)})?function(e){return"String"==eX(e)?e9(e,""):e0(e)}:e0,eG=function(e){return eK(H(e))};var e2=Object.getOwnPropertyDescriptor;i=ec?e2:function(e,t){if(e=eG(e),t=e$(t),eu)try{return e2(e,t)}catch(e){}if(T(e,t))return eY(!eE(a,e,t),e[t])};var e3={};e3=ec?function(e,t,r){return n(e,t,eY(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e7={},e8=Function.prototype,e5=ec&&Object.getOwnPropertyDescriptor,e6=T(e8,"name")&&(!ec||ec&&e5(e8,"name").configurable),te={},tt=O(Function.toString);ep(R.inspectSource)||(R.inspectSource=function(e){return tt(e)}),te=R.inspectSource;var tr={},tn={},ti=S.WeakMap;tn=ep(ti)&&/native code/.test(String(ti));var ta={},to=N("keys");ta=function(e){return to[e]||(to[e]=J(e))};var ts={};ts={};var tc="Object already initialized",tu=S.TypeError,tl=S.WeakMap;if(tn||R.state){var td=R.state||(R.state=new tl);td.get=td.get,td.has=td.has,td.set=td.set,o=function(e,t){if(td.has(e))throw tu(tc);return t.facade=e,td.set(e,t),t},s=function(e){return td.get(e)||{}},c=function(e){return td.has(e)}}else{var tp=ta("state");ts[tp]=!0,o=function(e,t){if(T(e,tp))throw tu(tc);return t.facade=e,e3(e,tp,t),t},s=function(e){return T(e,tp)?e[tp]:{}},c=function(e){return T(e,tp)}}var tf=(tr={set:o,get:s,has:c,enforce:function(e){return c(e)?s(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!ed(t)||(r=s(t)).type!==e)throw tu("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tr.get,tg=String,tv=Object.defineProperty,tm=O("".slice),tb=O("".replace),ty=O([].join),t_=ec&&!M(function(){return 8!==tv(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e7=function(e,t,r){"Symbol("===tm(tg(t),0,7)&&(t="["+tb(tg(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!T(e,"name")||e6&&e.name!==t)&&(ec?tv(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&T(r,"arity")&&e.length!==r.arity&&tv(e,"length",{value:r.arity});try{r&&T(r,"constructor")&&r.constructor?ec&&tv(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return T(n,"source")||(n.source=ty(tw,"string"==typeof t?t:"")),e};Function.prototype.toString=tk(function(){return ep(this)&&th(this).source||te(this)},"toString"),e4=function(e,t,r,i){i||(i={});var a=i.enumerable,o=void 0!==i.name?i.name:t;if(ep(r)&&e7(r,o,i),i.global)a?e[t]=r:U(t,r);else{try{i.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:n(e,t,{value:r,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var t$={},tS={},tE={},tT={},tO={},tj={},tM=Math.ceil,tP=Math.floor;tj=Math.trunc||function(e){var t=+e;return(t>0?tP:tM)(t)},tO=function(e){var t=+e;return t!=t||0===t?0:tj(t)};var tL=Math.max,tq=Math.min;tT=function(e,t){var r=tO(e);return r<0?tL(r+t,0):tq(r,t)};var tI={},tH={},tx=Math.min;tH=function(e){return e>0?tx(tO(e),9007199254740991):0},tI=function(e){return tH(e.length)};var tA=function(e){return function(t,r,n){var i,a=eG(t),o=tI(a),s=tT(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tC={includes:tA(!0),indexOf:tA(!1)}.indexOf,tD=O([].push);tE=function(e,t){var r,n=eG(e),i=0,a=[];for(r in n)!T(ts,r)&&T(n,r)&&tD(a,r);for(;t.length>i;)T(n,r=t[i++])&&(~tC(a,r)||tD(a,r));return a};var tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return tE(e,tF)},l=Object.getOwnPropertySymbols;var tN=O([].concat);tS=ej("Reflect","ownKeys")||function(e){var t=u(e_(e));return l?tN(t,l(e)):t},t$=function(e,t,r){for(var a=tS(t),o=0;o<a.length;o++){var s=a[o];T(e,s)||r&&T(r,s)||n(e,s,i(t,s))}};var tW={},tR=/#|\.prototype\./,tU=function(e,t){var r=tB[tz(e)];return r==tQ||r!=tJ&&(ep(t)?M(t):!!t)},tz=tU.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tB=tU.data={},tJ=tU.NATIVE="N",tQ=tU.POLYFILL="P";tW=tU,eJ=function(e,t){var r,n,a,o,s,c=e.target,u=e.global,l=e.stat;if(r=u?S:l?S[c]||U(c,{}):(S[c]||{}).prototype)for(n in t){if(o=t[n],a=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tW(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;t$(o,a)}(e.sham||a&&a.sham)&&e3(o,"sham",!0),e4(r,n,o,e)}};var tV={},tY={},tG=Function.prototype,tK=tG.apply,tX=tG.call;tY="object"==typeof Reflect&&Reflect.apply||(j?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t1={},t0=(t1=function(e){if("Function"===eX(e))return O(e)})(t1.bind);tZ=function(e,t){return eq(e),void 0===t?e:j?t0(e,t):function(){return e.apply(t,arguments)}};var t9={};t9=ej("document","documentElement");var t2={};t2=O([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw t4("Not enough arguments");return e};var t7={};t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(X);var t8={},t5={},t6=t5={};function re(){throw Error("setTimeout has not been defined")}function rt(){throw Error("clearTimeout has not been defined")}function rr(e){if(d===setTimeout)return setTimeout(e,0);if((d===re||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}!function(){try{d="function"==typeof setTimeout?setTimeout:re}catch(e){d=re}try{p="function"==typeof clearTimeout?clearTimeout:rt}catch(e){p=rt}}();var rn=[],ri=!1,ra=-1;function ro(){ri&&f&&(ri=!1,f.length?rn=f.concat(rn):ra=-1,rn.length&&rs())}function rs(){if(!ri){var e=rr(ro);ri=!0;for(var t=rn.length;t;){for(f=rn,rn=[];++ra<t;)f&&f[ra].run();ra=-1,t=rn.length}f=null,ri=!1,function(e){if(p===clearTimeout)return clearTimeout(e);if((p===rt||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}(e)}}function rc(e,t){this.fun=e,this.array=t}function ru(){}t6.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];rn.push(new rc(e,t)),1!==rn.length||ri||rr(rs)},rc.prototype.run=function(){this.fun.apply(null,this.array)},t6.title="browser",t6.browser=!0,t6.env={},t6.argv=[],t6.version="",t6.versions={},t6.on=ru,t6.addListener=ru,t6.once=ru,t6.off=ru,t6.removeListener=ru,t6.removeAllListeners=ru,t6.emit=ru,t6.prependListener=ru,t6.prependOnceListener=ru,t6.listeners=function(e){return[]},t6.binding=function(e){throw Error("process.binding is not supported")},t6.cwd=function(){return"/"},t6.chdir=function(e){throw Error("process.chdir is not supported")},t6.umask=function(){return 0},t8=void 0!==t5&&"process"==eX(t5);var rl=S.setImmediate,rd=S.clearImmediate,rp=S.process,rf=S.Dispatch,rh=S.Function,rg=S.MessageChannel,rv=S.String,rm=0,rb={},ry="onreadystatechange";M(function(){h=S.location});var r_=function(e){if(T(rb,e)){var t=rb[e];delete rb[e],t()}},rw=function(e){return function(){r_(e)}},rk=function(e){r_(e.data)},r$=function(e){S.postMessage(rv(e),h.protocol+"//"+h.host)};rl&&rd||(rl=function(e){t3(arguments.length,1);var t=ep(e)?e:rh(e),r=t2(arguments,1);return rb[++rm]=function(){tY(t,void 0,r)},g(rm),rm},rd=function(e){delete rb[e]},t8?g=function(e){rp.nextTick(rw(e))}:rf&&rf.now?g=function(e){rf.now(rw(e))}:rg&&!t7?(m=(v=new rg).port2,v.port1.onmessage=rk,g=tZ(m.postMessage,m)):S.addEventListener&&ep(S.postMessage)&&!S.importScripts&&h&&"file:"!==h.protocol&&!M(r$)?(g=r$,S.addEventListener("message",rk,!1)):g=ry in el("script")?function(e){t9.appendChild(el("script"))[ry]=function(){t9.removeChild(this),r_(e)}}:function(e){setTimeout(rw(e),0)});var rS=(tV={set:rl,clear:rd}).clear;"use strict";eJ({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rS},{clearImmediate:rS});var rE=tV.set,rT={},rO={};rO="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rj=S.Function,rM=/MSIE .\./.test(X)||rO&&function(){var e=S.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();rT=function(e,t){var r=t?2:1;return rM?function(n,i){var a=t3(arguments.length,1)>r,o=ep(n)?n:rj(n),s=a?t2(arguments,r):[],c=a?function(){tY(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rP=S.setImmediate?rT(rE,!1):rE;eJ({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==rP},{setImmediate:rP});const rL="https://forkify-api.herokuapp.com/api/v2/recipes/",rq="36fa94ef-13d0-47ea-8688-2389e1d55142",rI=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rH={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rx=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rA=async function(e){try{let t=await rI(`${rL}${e}?key=${rq}`);rH.recipe=rx(t),rH.bookmarks.some(t=>t.id===e)?rH.recipe.bookmarked=!0:rH.recipe.bookmarked=!1}catch(e){throw console.error(`🚨🚨🚨 ${e} 🚨🚨🚨`),e}},rC=async function(e){try{rH.search.query=e;let t=await rI(`${rL}?search=${e}&key=${rq}`);rH.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rH.search.page=1}catch(e){throw console.error(`🚨🚨🚨 ${e} 🚨🚨🚨`),e}},rD=function(e=rH.search.page){rH.search.page=e;let t=(e-1)*rH.search.resultsPerPage,r=e*rH.search.resultsPerPage;return rH.search.results.slice(t,r)},rF=function(e){rH.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rH.recipe.servings}),rH.recipe.servings=e},rN=function(){localStorage.setItem("bookmarks",JSON.stringify(rH.bookmarks))},rW=function(e){rH.bookmarks.push(e),e.id===rH.recipe.id&&(rH.recipe.bookmarked=!0),rN()},rR=function(e){let t=rH.bookmarks.findIndex(t=>t.id===e);rH.bookmarks.splice(t,1),e===rH.recipe.id&&(rH.recipe.bookmarked=!1),rN()};!function(){let e=localStorage.getItem("bookmarks");e&&(rH.bookmarks=JSON.parse(e))}();const rU=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format.");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rI(`${rL}?key=${rq}`,r);rH.recipe=rx(n),rW(rH.recipe)}catch(e){throw e}};var rz={};rz=new URL(k("27Lyk").resolve("5XmIc"),import.meta.url).toString();class rB{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${y(rz)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${y(rz)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${y(rz)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rJ={};function rQ(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rJ=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2))return function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);return rQ(n,i,t,r,!1)}(r,a,t);{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,a));return rQ(u,(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rV extends rB{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rz)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rz)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${y(rz)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${y(rz)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        
        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${y(rz)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${y(rz)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${y(rz)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${y(rz)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity<1&&e.quantity>0?y(rJ)(e.quantity):e.quantity?e.quantity:""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var rY=new rV;class rG{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rK=new rG,rX=new class extends rB{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${y(rz)}#icon-user"></use>
              </svg>
            </div>
          </div>          
        </a>
      </li>
    `}};class rZ extends rB{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return this._data.map(e=>rX.render(e,!1)).join("")}}var r1=new rZ;class r0 extends rB{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${y(rz)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(rz)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(rz)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${y(rz)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var r9=new r0;class r2 extends rB{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rX.render(e,!1)).join("")}}var r3=new r2;class r4 extends rB{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded.";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var r7=new r4;const r8=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rY.renderSpinner(),r1.update(rD()),r3.update(rH.bookmarks),await rA(e),rY.render(rH.recipe)}catch(e){rY.renderError(),console.error(e)}},r5=async function(){try{r1.renderSpinner();let e=rK.getQuery();if(!e)return;await rC(e),r1.render(rD()),r9.render(rH.search)}catch(e){console.log(e)}},r6=async function(e){try{r7.renderSpinner(),await rU(e),rY.render(rH.recipe),r7.renderMessage(),r3.render(rH.bookmarks),window.history.pushState(null,"",`#${rH.recipe.id}`),setTimeout(function(){r7.toggleWindow()},2500)}catch(e){console.error(`🚨🚨🚨 ${e} 🚨🚨🚨`),r7.renderError(e.message)}};r3.addHandlerRender(function(){r3.render(rH.bookmarks)}),rY.addHandlerRender(r8),rY.addHandlerUpdateServings(function(e){rF(e),rY.update(rH.recipe)}),rY.addHandlerAddBookmark(function(){rH.recipe.bookmarked?rR(rH.recipe.id):rW(rH.recipe),rY.update(rH.recipe),r3.render(rH.bookmarks)}),rK.addHandlerSearch(r5),r9.addHandlerClick(function(e){r1.render(rD(e)),r9.render(rH.search)}),r7.addHandlerUpload(r6);
//# sourceMappingURL=index.cdf87c87.js.map
