var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function h(){return $(" ")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let v;function b(t){v=t}function x(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(t)}const w=[],H=[],z=[],_=[],A=Promise.resolve();let C=!1;function k(t){z.push(t)}const E=new Set;function L(){do{for(;w.length;){const t=w.shift();b(t),M(t.$$)}for(;H.length;)H.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];E.has(e)||(E.add(e),e())}z.length=0}while(w.length);for(;_.length;)_.pop()();C=!1,E.clear()}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const T=new Set;let j;function N(){j={r:0,c:[],p:j}}function q(){j.r||r(j.c),j=j.p}function I(t,e){t&&t.i&&(T.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),j.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function S(t){t&&t.c()}function B(t,n,s){const{fragment:l,on_mount:i,on_destroy:c,after_update:u}=t.$$;l&&l.m(n,s),k(()=>{const n=i.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(k)}function O(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(w.push(t),C||(C=!0,A.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,o,s,l,i,c,u=[-1]){const a=v;b(e);const f=o.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:u};let p=!1;d.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&D(e,t)),n}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),o.target&&(o.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):d.fragment&&d.fragment.c(),o.intro&&I(e.$$.fragment),B(e,o.target,o.anchor),L()),b(a)}class V{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const W=[];function G(e,n=t){let r;const o=[];function l(t){if(s(e,t)&&(e=t,r)){const t=!W.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),W.push(n,e)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,i=t){const c=[s,i];return o.push(c),1===o.length&&(r=n(l)||t),s(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const J=G(""),K=G([]),Q=G(1),R=G(null);String.prototype.replaceAll=function(t,e){return this.split(t).join(e)};function U(e){let n,r;return{c(){n=p("div"),g(n,"contenteditable","true"),g(n,"class","wrapper svelte-1axfo0i"),g(n,"autofocus",""),void 0===e[1]&&k(()=>e[4].call(n))},m(t,o){a(t,n,o),e[3](n),void 0!==e[1]&&(n.innerHTML=e[1]),n.focus(),r=m(n,"input",e[4])},p(t,[e]){2&e&&t[1]!==n.innerHTML&&(n.innerHTML=t[1])},i:t,o:t,d(t){t&&f(n),e[3](null),r()}}}function X(t,e,n){let r,o,s;return l(t,R,t=>n(2,r=t)),l(t,J,t=>n(1,o=t)),t.$$.update=()=>{if(6&t.$$.dirty&&"started"===r){const t=o.replaceAll(/&nbsp;/gi,"").replaceAll("</div><div>",";").replaceAll("<div>",";").replaceAll("</div>","").replaceAll("<br>","delimeter").trim().split(";").map(t=>t.trim()).filter(t=>""!==t),e=function(t){const e=t.length,n=[];let r=0;for(;r<e&&r<1e3;){const e=t[r];if(Array.isArray(e)){const o=e[0],s=e[1];if("repeat"===o){t[r+1]}for(let t=0;t<s;t++)n.push(o)}r++}return n}(t.reduce((t,e)=>{if("delimeter"===e)return t.push(e),t;const n=e.split(" ").filter(t=>""!==t),r=n[0].toLowerCase(),o=parseInt(n[1],10);return isNaN(o)?t:(["влево","left"].includes(r)?t.push(["left",o]):["вправо","right"].includes(r)?t.push(["right",o]):["вверх","up"].includes(r)?t.push(["up",o]):["вниз","down"].includes(r)?t.push(["down",o]):["повтор","повторить","repeat"].includes(r)&&t.push(["repeat",o]),t)},[]));K.set(e)}},[s,o,r,function(t){H[t?"unshift":"push"](()=>{n(0,s=t)})},function(){o=this.innerHTML,J.set(o)}]}class Y extends V{constructor(t){super(),F(this,t,X,U,s,{})}}function Z(e){let n,r;return{c(){n=p("div"),g(n,"class",r=c(e[3][e[0]])+" svelte-dkh07z"),y(n,"--size",e[1])},m(t,r){a(t,n,r),e[4](n)},p(t,[e]){1&e&&r!==(r=c(t[3][t[0]])+" svelte-dkh07z")&&g(n,"class",r),2&e&&y(n,"--size",t[1])},i:t,o:t,d(t){t&&f(n),e[4](null)}}}function tt(t,e,n){let r,{cellCode:o}=e,{size:s}=e;return t.$set=t=>{"cellCode"in t&&n(0,o=t.cellCode),"size"in t&&n(1,s=t.size)},[o,s,r,["none","path","start","finish"],function(t){H[t?"unshift":"push"](()=>{n(2,r=t)})}]}class et extends V{constructor(t){super(),F(this,t,tt,Z,s,{cellCode:0,size:1})}}function nt(t,e,n){const r=t.slice();return r[19]=e[n],r[21]=n,r}function rt(t,e,n){const r=t.slice();return r[16]=e[n],r[18]=n,r}function ot(t){let e;const n=new et({props:{cellCode:t[19],size:t[7]}});return{c(){S(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.cellCode=t[19]),128&e&&(r.size=t[7]),n.$set(r)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function st(t){let e,n,r=t[16],o=[];for(let e=0;e<r.length;e+=1)o[e]=ot(nt(t,r,e));const s=t=>P(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=$("")},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);a(t,e,r),n=!0},p(t,n){if(129&n){let l;for(r=t[16],l=0;l<r.length;l+=1){const s=nt(t,r,l);o[l]?(o[l].p(s,n),I(o[l],1)):(o[l]=ot(s),o[l].c(),I(o[l],1),o[l].m(e.parentNode,e))}for(N(),l=r.length;l<o.length;l+=1)s(l);q()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)I(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)P(o[t]);n=!1},d(t){d(o,t),t&&f(e)}}}function lt(t){let e,n,r,o,s,l,i=t[0],c=[];for(let e=0;e<i.length;e+=1)c[e]=st(rt(t,i,e));const $=t=>P(c[t],1,1,()=>{c[t]=null});return{c(){e=p("div"),n=p("div");for(let t=0;t<c.length;t+=1)c[t].c();r=h(),o=p("div"),g(o,"class","chip svelte-1b43m4w"),y(o,"--pos-x",t[5]),y(o,"--pos-y",t[6]),g(n,"class","field svelte-1b43m4w"),k(()=>t[15].call(n)),g(e,"class","wrapper svelte-1b43m4w"),y(e,"--rows",t[1]),y(e,"--columns",t[2]),y(e,"--size",t[7])},m(i,f){a(i,e,f),u(e,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null);u(n,r),u(n,o),s=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=document.createElement("object");let r;return n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.type="text/html",n.tabIndex=-1,n.onload=()=>{r=n.contentDocument.defaultView,r.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:()=>{r&&r.removeEventListener&&r.removeEventListener("resize",e),t.removeChild(n)}}}(n,t[15].bind(n)),l=!0},p(t,[s]){if(129&s){let e;for(i=t[0],e=0;e<i.length;e+=1){const o=rt(t,i,e);c[e]?(c[e].p(o,s),I(c[e],1)):(c[e]=st(o),c[e].c(),I(c[e],1),c[e].m(n,r))}for(N(),e=i.length;e<c.length;e+=1)$(e);q()}(!l||32&s)&&y(o,"--pos-x",t[5]),(!l||64&s)&&y(o,"--pos-y",t[6]),(!l||2&s)&&y(e,"--rows",t[1]),(!l||4&s)&&y(e,"--columns",t[2]),(!l||128&s)&&y(e,"--size",t[7])},i(t){if(!l){for(let t=0;t<i.length;t+=1)I(c[t]);l=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)P(c[t]);l=!1},d(t){t&&f(e),d(c,t),s.cancel()}}}function it(t,e,n){let r,o,s;l(t,Q,t=>n(10,r=t)),l(t,R,t=>n(11,o=t)),l(t,K,t=>n(12,s=t));let i,c,u,a,f,d=[[2,1],[1,3]],p=d.length,$=d[0].length,h=0,m=0;async function g(t){n(0,d=(await import(`../levels/level${t}.js`)).default),J.set(""),K.set([]),R.set(null),n(1,p=d.length),n(2,$=d[0].length),n(8,h=d.findIndex(t=>t.includes(2))),n(9,m=d[h].findIndex(t=>2===t))}function y(t,e){return new Promise(e=>{if("win"!==o&&"lose"!==o){switch(t){case"left":n(9,m--,m);break;case"right":n(9,m++,m);break;case"up":n(8,h--,h);break;case"down":n(8,h++,h)}setTimeout(()=>{!function(t,e,n){return!(e<0||n<0)&&(!(e>=t[0].length||n>=t.length)&&0!==t[n][e])}(d,m,h)?R.set("lose"):function(t,e,n){return 3===t[n][e]}(d,m,h)&&R.set("win"),e()},500)}else e()})}return x(()=>g(r)),t.$$.update=()=>{512&t.$$.dirty&&n(5,u=m+1),256&t.$$.dirty&&n(6,a=h+1),30&t.$$.dirty&&n(7,f=Math.min(i/$,c/p)-4+"px"),3072&t.$$.dirty&&null===o&&g(r).catch(t=>{Q.set(1),g(r)}),4096&t.$$.dirty&&s.length>0&&(R.set("started"),s.reduce((t,e,n)=>t.then(()=>y(e)),Promise.resolve()))},[d,p,$,i,c,u,a,f,h,m,r,o,s,g,y,function(){i=this.clientWidth,c=this.clientHeight,n(3,i),n(4,c)}]}class ct extends V{constructor(t){super(),F(this,t,it,lt,s,{})}}function ut(e){let n,r,o,s;return{c(){n=p("button"),r=p("img"),r.src!==(o=e[1])&&g(r,"src",o),g(r,"alt",""),g(r,"class","svelte-1mfm20n"),g(n,"title",e[0]),n.disabled=e[3],g(n,"class","svelte-1mfm20n")},m(t,o){a(t,n,o),u(n,r),s=m(n,"click",e[2])},p(t,[e]){2&e&&r.src!==(o=t[1])&&g(r,"src",o),1&e&&g(n,"title",t[0]),8&e&&(n.disabled=t[3])},i:t,o:t,d(t){t&&f(n),s()}}}function at(t,e,n){let{title:r}=e,{icon:o}=e,{handler:s}=e,{disabled:l=!1}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title),"icon"in t&&n(1,o=t.icon),"handler"in t&&n(2,s=t.handler),"disabled"in t&&n(3,l=t.disabled)},[r,o,s,l]}class ft extends V{constructor(t){super(),F(this,t,at,ut,s,{title:0,icon:1,handler:2,disabled:3})}}function dt(t){let e,n,r;const o=t[1].default,s=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(o,t,t[0],null);return{c(){e=p("div"),n=p("div"),s&&s.c(),g(n,"class","window svelte-vsq1ag"),g(e,"class","overlay svelte-vsq1ag")},m(t,o){a(t,e,o),u(e,n),s&&s.m(n,null),r=!0},p(t,[e]){s&&s.p&&1&e&&s.p(i(o,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(o,t[0],e,null))},i(t){r||(I(s,t),r=!0)},o(t){P(s,t),r=!1},d(t){t&&f(e),s&&s.d(t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class $t extends V{constructor(t){super(),F(this,t,pt,dt,s,{})}}function ht(t){let e,n,r,o;const s=new ft({props:{title:"Заново",icon:"img/icons/refresh-24px.svg",handler:t[1]}}),l=new ft({props:{title:"Дальше",icon:"img/icons/redo-24px.svg",handler:t[0]}});return{c(){e=p("h1"),e.textContent="Победа!",n=h(),S(s.$$.fragment),r=h(),S(l.$$.fragment),g(e,"class","svelte-14xsa5s")},m(t,i){a(t,e,i),a(t,n,i),B(s,t,i),a(t,r,i),B(l,t,i),o=!0},p(t,[e]){const n={};2&e&&(n.handler=t[1]),s.$set(n);const r={};1&e&&(r.handler=t[0]),l.$set(r)},i(t){o||(I(s.$$.fragment,t),I(l.$$.fragment,t),o=!0)},o(t){P(s.$$.fragment,t),P(l.$$.fragment,t),o=!1},d(t){t&&f(e),t&&f(n),O(s,t),t&&f(r),O(l,t)}}}function mt(t,e,n){let{nextHandler:r}=e,{retryHandler:o}=e;return t.$set=t=>{"nextHandler"in t&&n(0,r=t.nextHandler),"retryHandler"in t&&n(1,o=t.retryHandler)},[r,o]}class gt extends V{constructor(t){super(),F(this,t,mt,ht,s,{nextHandler:0,retryHandler:1})}}function yt(t){let e,n,r;const o=new ft({props:{title:"Заново",icon:"img/icons/refresh-24px.svg",handler:t[0]}});return{c(){e=p("h1"),e.textContent="Ты свалилась с дорожки!",n=h(),S(o.$$.fragment),g(e,"class","svelte-14xsa5s")},m(t,s){a(t,e,s),a(t,n,s),B(o,t,s),r=!0},p(t,[e]){const n={};1&e&&(n.handler=t[0]),o.$set(n)},i(t){r||(I(o.$$.fragment,t),r=!0)},o(t){P(o.$$.fragment,t),r=!1},d(t){t&&f(e),t&&f(n),O(o,t)}}}function vt(t,e,n){let{retryHandler:r}=e;return t.$set=t=>{"retryHandler"in t&&n(0,r=t.retryHandler)},[r]}class bt extends V{constructor(t){super(),F(this,t,vt,yt,s,{retryHandler:0})}}function xt(t){let e;const n=new $t({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}});return{c(){S(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},p(t,e){const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function wt(t){let e;const n=new $t({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}});return{c(){S(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},p(t,e){const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function Ht(e){let n;const r=new bt({props:{retryHandler:Ct}});return{c(){S(r.$$.fragment)},m(t,e){B(r,t,e),n=!0},p:t,i(t){n||(I(r.$$.fragment,t),n=!0)},o(t){P(r.$$.fragment,t),n=!1},d(t){O(r,t)}}}function zt(e){let n;const r=new gt({props:{nextHandler:e[1],retryHandler:Ct}});return{c(){S(r.$$.fragment)},m(t,e){B(r,t,e),n=!0},p:t,i(t){n||(I(r.$$.fragment,t),n=!0)},o(t){P(r.$$.fragment,t),n=!1},d(t){O(r,t)}}}function _t(t){let e,n,r,o,s,l,i,c;const d=new Y({}),$=new ct({}),m=new ft({props:{title:"Старт",icon:"/img/icons/play_arrow-24px.svg",handler:At,disabled:"started"===t[0]}}),y=[wt,xt],v=[];function b(t,e){return"win"===t[0]?0:"lose"===t[0]?1:-1}return~(l=b(t))&&(i=v[l]=y[l](t)),{c(){e=p("main"),S(d.$$.fragment),n=h(),S($.$$.fragment),r=h(),o=p("div"),S(m.$$.fragment),s=h(),i&&i.c(),g(o,"class","start-button svelte-qlkt7z"),g(e,"class","svelte-qlkt7z")},m(t,i){a(t,e,i),B(d,e,null),u(e,n),B($,e,null),u(e,r),u(e,o),B(m,o,null),u(e,s),~l&&v[l].m(e,null),c=!0},p(t,[n]){const r={};1&n&&(r.disabled="started"===t[0]),m.$set(r);let o=l;l=b(t),l===o?~l&&v[l].p(t,n):(i&&(N(),P(v[o],1,1,()=>{v[o]=null}),q()),~l?(i=v[l],i||(i=v[l]=y[l](t),i.c()),I(i,1),i.m(e,null)):i=null)},i(t){c||(I(d.$$.fragment,t),I($.$$.fragment,t),I(m.$$.fragment,t),I(i),c=!0)},o(t){P(d.$$.fragment,t),P($.$$.fragment,t),P(m.$$.fragment,t),P(i),c=!1},d(t){t&&f(e),O(d),O($),O(m),~l&&v[l].d()}}}function At(){R.set("started")}function Ct(){R.set(null)}function kt(t,e,n){let r,o;return l(t,Q,t=>n(2,r=t)),l(t,R,t=>n(0,o=t)),t.$$.update=()=>{4&t.$$.dirty&&(document.title=`Уровень ${r}`)},[o,function(){Q.set(r+1),R.set(null)}]}return new class extends V{constructor(t){super(),F(this,t,kt,_t,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
