var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function s(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function $(){return h(" ")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let y;function b(t){y=t}function x(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const w=[],z=[],_=[],H=[],A=Promise.resolve();let k=!1;function C(t){_.push(t)}const E=new Set;function L(){do{for(;w.length;){const t=w.shift();b(t),j(t.$$)}for(;z.length;)z.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];E.has(e)||(E.add(e),e())}_.length=0}while(w.length);for(;H.length;)H.pop()();k=!1,E.clear()}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const M=new Set;let T;function N(){T={r:0,c:[],p:T}}function q(){T.r||r(T.c),T=T.p}function I(t,e){t&&t.i&&(M.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),T.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function S(t){t&&t.c()}function B(t,n,l){const{fragment:i,on_mount:s,on_destroy:c,after_update:u}=t.$$;i&&i.m(n,l),C(()=>{const n=s.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(C)}function O(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(w.push(t),k||(k=!0,A.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,o,l,i,s,c,u=[-1]){const a=y;b(e);const f=o.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:u};let p=!1;d.ctx=l?l(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&D(e,t)),n}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),o.target&&(o.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):d.fragment&&d.fragment.c(),o.intro&&I(e.$$.fragment),B(e,o.target,o.anchor),L()),b(a)}class V{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const W=[];function G(e,n=t){let r;const o=[];function i(t){if(l(e,t)&&(e=t,r)){const t=!W.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),W.push(n,e)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(l,s=t){const c=[l,s];return o.push(c),1===o.length&&(r=n(i)||t),l(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const J=G(!1),K=G([]),Q=G(!1),R=G(1);String.prototype.replaceAll=function(t,e){return this.split(t).join(e)};function U(e){let n,r;return{c(){n=p("div"),m(n,"contenteditable","true"),m(n,"class","wrapper svelte-1axfo0i"),m(n,"autofocus",""),void 0===e[1]&&C(()=>e[4].call(n))},m(t,o){a(t,n,o),e[3](n),void 0!==e[1]&&(n.innerHTML=e[1]),n.focus(),r=g(n,"input",e[4])},p(t,[e]){2&e&&t[1]!==n.innerHTML&&(n.innerHTML=t[1])},i:t,o:t,d(t){t&&f(n),e[3](null),r()}}}function X(t,e,n){let r,o,l;return i(t,J,t=>n(2,r=t)),t.$$.update=()=>{if(5&t.$$.dirty&&r){const t=o.innerHTML.replaceAll(/&nbsp;/gi,"").replaceAll("</div><div>",";").replaceAll("<div>",";").replaceAll("</div>","").replaceAll("<br>","delimeter").trim().split(";").map(t=>t.trim()).filter(t=>""!==t),e=t.reduce((t,e)=>{if("delimeter"===e)return t.push(e),t;const n=e.split(" ").filter(t=>""!==t),r=n[0].toLowerCase(),o=parseInt(n[1],10);return isNaN(o)?t:(["влево","left"].includes(r)?t.push(["left",o]):["вправо","right"].includes(r)?t.push(["right",o]):["вверх","up"].includes(r)?t.push(["up",o]):["вниз","down"].includes(r)?t.push(["down",o]):["повтор","повторить","repeat"].includes(r)&&t.push(["repeat",o]),t)},[]);console.log(e);const n=function(t){const e=t.length,n=[];let r=0;for(;r<e&&r<1e3;){const e=t[r];if(Array.isArray(e)){const o=e[0],l=e[1];if("repeat"===o){t[r+1]}for(let t=0;t<l;t++)n.push(o)}r++}return n}(e);console.log(n),K.set(n)}},[o,l,r,function(t){z[t?"unshift":"push"](()=>{n(0,o=t)})},function(){l=this.innerHTML,n(1,l)}]}class Y extends V{constructor(t){super(),F(this,t,X,U,l,{})}}function Z(e){let n,r;return{c(){n=p("div"),m(n,"class",r=c(e[3][e[0]])+" svelte-dkh07z"),v(n,"--size",e[1])},m(t,r){a(t,n,r),e[4](n)},p(t,[e]){1&e&&r!==(r=c(t[3][t[0]])+" svelte-dkh07z")&&m(n,"class",r),2&e&&v(n,"--size",t[1])},i:t,o:t,d(t){t&&f(n),e[4](null)}}}function tt(t,e,n){let r,{cellCode:o}=e,{size:l}=e;return t.$set=t=>{"cellCode"in t&&n(0,o=t.cellCode),"size"in t&&n(1,l=t.size)},[o,l,r,["none","path","start","finish"],function(t){z[t?"unshift":"push"](()=>{n(2,r=t)})}]}class et extends V{constructor(t){super(),F(this,t,tt,Z,l,{cellCode:0,size:1})}}function nt(t,e,n){return!(e<0||n<0)&&(!(e>=t[0].length||n>=t.length)&&0!==t[n][e])}function rt(t,e,n){return 3===t[n][e]}function ot(t,e,n){const r=t.slice();return r[18]=e[n],r[20]=n,r}function lt(t,e,n){const r=t.slice();return r[15]=e[n],r[17]=n,r}function it(t){let e;const n=new et({props:{cellCode:t[18],size:t[7]}});return{c(){S(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.cellCode=t[18]),128&e&&(r.size=t[7]),n.$set(r)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function st(t){let e,n,r=t[15],o=[];for(let e=0;e<r.length;e+=1)o[e]=it(ot(t,r,e));const l=t=>P(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h("")},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);a(t,e,r),n=!0},p(t,n){if(129&n){let i;for(r=t[15],i=0;i<r.length;i+=1){const l=ot(t,r,i);o[i]?(o[i].p(l,n),I(o[i],1)):(o[i]=it(l),o[i].c(),I(o[i],1),o[i].m(e.parentNode,e))}for(N(),i=r.length;i<o.length;i+=1)l(i);q()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)I(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)P(o[t]);n=!1},d(t){d(o,t),t&&f(e)}}}function ct(t){let e,n,r,o,l,i,s=t[0],c=[];for(let e=0;e<s.length;e+=1)c[e]=st(lt(t,s,e));const h=t=>P(c[t],1,1,()=>{c[t]=null});return{c(){e=p("div"),n=p("div");for(let t=0;t<c.length;t+=1)c[t].c();r=$(),o=p("div"),m(o,"class","chip svelte-1b43m4w"),v(o,"--pos-x",t[5]),v(o,"--pos-y",t[6]),m(n,"class","field svelte-1b43m4w"),C(()=>t[14].call(n)),m(e,"class","wrapper svelte-1b43m4w"),v(e,"--rows",t[1]),v(e,"--columns",t[2]),v(e,"--size",t[7])},m(s,f){a(s,e,f),u(e,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null);u(n,r),u(n,o),l=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=document.createElement("object");let r;return n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.type="text/html",n.tabIndex=-1,n.onload=()=>{r=n.contentDocument.defaultView,r.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:()=>{r&&r.removeEventListener&&r.removeEventListener("resize",e),t.removeChild(n)}}}(n,t[14].bind(n)),i=!0},p(t,[l]){if(129&l){let e;for(s=t[0],e=0;e<s.length;e+=1){const o=lt(t,s,e);c[e]?(c[e].p(o,l),I(c[e],1)):(c[e]=st(o),c[e].c(),I(c[e],1),c[e].m(n,r))}for(N(),e=s.length;e<c.length;e+=1)h(e);q()}(!i||32&l)&&v(o,"--pos-x",t[5]),(!i||64&l)&&v(o,"--pos-y",t[6]),(!i||2&l)&&v(e,"--rows",t[1]),(!i||4&l)&&v(e,"--columns",t[2]),(!i||128&l)&&v(e,"--size",t[7])},i(t){if(!i){for(let t=0;t<s.length;t+=1)I(c[t]);i=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)P(c[t]);i=!1},d(t){t&&f(e),d(c,t),l.cancel()}}}function ut(t,e,n){let r,o;i(t,R,t=>n(10,r=t)),i(t,K,t=>n(11,o=t));let l,s,c,u,a,f=[[2,1],[1,3]],d=f.length,p=f[0].length,h=0,$=0;async function g(t){n(0,f=(await import(`../levels/level${t}.js`)).default),n(1,d=f.length),n(2,p=f[0].length),n(8,h=f.findIndex(t=>t.includes(2))),n(9,$=f[h].findIndex(t=>2===t))}function m(t){return new Promise((e,r)=>{setTimeout(()=>{let r,o;switch(t){case"left":r=$-1,nt(f,r,h)?(n(9,$-=1),rt(f,$,h)&&Q.set(!0)):alert("Вы вышли за пределы поля!");break;case"right":r=$+1,nt(f,r,h)?(n(9,$+=1),rt(f,$,h)&&Q.set(!0)):alert("Вы вышли за пределы поля!");break;case"up":o=h-1,nt(f,$,o)?(n(8,h-=1),rt(f,$,h)&&Q.set(!0)):alert("Вы вышли за пределы поля!");break;case"down":o=h+1,nt(f,$,o)?(n(8,h+=1),rt(f,$,h)&&Q.set(!0)):alert("Вы вышли за пределы поля!")}e()},500)})}return x(()=>g(r)),t.$$.update=()=>{512&t.$$.dirty&&n(5,c=$+1),256&t.$$.dirty&&n(6,u=h+1),30&t.$$.dirty&&n(7,a=Math.min(l/p,s/d)-4+"px"),1024&t.$$.dirty&&g(r).catch(t=>{R.set(1),g(r)}),2048&t.$$.dirty&&o.length>0&&o.reduce((t,e)=>t.then(()=>m(e)),Promise.resolve())},[f,d,p,l,s,c,u,a,h,$,r,o,g,m,function(){l=this.clientWidth,s=this.clientHeight,n(3,l),n(4,s)}]}class at extends V{constructor(t){super(),F(this,t,ut,ct,l,{})}}function ft(e){let n,r,o,l;return{c(){n=p("button"),r=p("img"),r.src!==(o=e[1])&&m(r,"src",o),m(r,"alt",""),m(r,"class","svelte-1j5gjf0"),m(n,"title",e[0]),m(n,"class","svelte-1j5gjf0")},m(t,o){a(t,n,o),u(n,r),l=g(n,"click",e[2])},p(t,[e]){2&e&&r.src!==(o=t[1])&&m(r,"src",o),1&e&&m(n,"title",t[0])},i:t,o:t,d(t){t&&f(n),l()}}}function dt(t,e,n){let{title:r}=e,{icon:o}=e,{handler:l}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title),"icon"in t&&n(1,o=t.icon),"handler"in t&&n(2,l=t.handler)},[r,o,l]}class pt extends V{constructor(t){super(),F(this,t,dt,ft,l,{title:0,icon:1,handler:2})}}function ht(t){let e,n,r;const o=t[1].default,l=function(t,e,n,r){if(t){const o=s(t,e,n,r);return t[0](o)}}(o,t,t[0],null);return{c(){e=p("div"),n=p("div"),l&&l.c(),m(n,"class","window svelte-vsq1ag"),m(e,"class","overlay svelte-vsq1ag")},m(t,o){a(t,e,o),u(e,n),l&&l.m(n,null),r=!0},p(t,[e]){l&&l.p&&1&e&&l.p(s(o,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(o,t[0],e,null))},i(t){r||(I(l,t),r=!0)},o(t){P(l,t),r=!1},d(t){t&&f(e),l&&l.d(t)}}}function $t(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class gt extends V{constructor(t){super(),F(this,t,$t,ht,l,{})}}function mt(t){let e,n,r,o;const l=new pt({props:{title:"Заново",icon:"img/icons/refresh-24px.svg",handler:t[1]}}),i=new pt({props:{title:"Дальше",icon:"img/icons/redo-24px.svg",handler:t[0]}});return{c(){e=p("h1"),e.textContent="Победа!",n=$(),S(l.$$.fragment),r=$(),S(i.$$.fragment),m(e,"class","svelte-14xsa5s")},m(t,s){a(t,e,s),a(t,n,s),B(l,t,s),a(t,r,s),B(i,t,s),o=!0},p(t,[e]){const n={};2&e&&(n.handler=t[1]),l.$set(n);const r={};1&e&&(r.handler=t[0]),i.$set(r)},i(t){o||(I(l.$$.fragment,t),I(i.$$.fragment,t),o=!0)},o(t){P(l.$$.fragment,t),P(i.$$.fragment,t),o=!1},d(t){t&&f(e),t&&f(n),O(l,t),t&&f(r),O(i,t)}}}function vt(t,e,n){let{nextHandler:r}=e,{retryHandler:o}=e;return t.$set=t=>{"nextHandler"in t&&n(0,r=t.nextHandler),"retryHandler"in t&&n(1,o=t.retryHandler)},[r,o]}class yt extends V{constructor(t){super(),F(this,t,vt,mt,l,{nextHandler:0,retryHandler:1})}}function bt(t){let e;const n=new gt({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}});return{c(){S(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},p(t,e){const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function xt(e){let n;const r=new yt({props:{nextHandler:e[1],retryHandler:_t}});return{c(){S(r.$$.fragment)},m(t,e){B(r,t,e),n=!0},p:t,i(t){n||(I(r.$$.fragment,t),n=!0)},o(t){P(r.$$.fragment,t),n=!1},d(t){O(r,t)}}}function wt(t){let e,n,r,o,l,i;const s=new Y({}),c=new at({}),d=new pt({props:{title:"Старт",icon:"img/icons/play_arrow-24px.svg",handler:zt}});let h=t[0]&&bt(t);return{c(){e=p("main"),S(s.$$.fragment),n=$(),S(c.$$.fragment),r=$(),o=p("div"),S(d.$$.fragment),l=$(),h&&h.c(),m(o,"class","start-button svelte-qlkt7z"),m(e,"class","svelte-qlkt7z")},m(t,f){a(t,e,f),B(s,e,null),u(e,n),B(c,e,null),u(e,r),u(e,o),B(d,o,null),u(e,l),h&&h.m(e,null),i=!0},p(t,[n]){t[0]?h?(h.p(t,n),I(h,1)):(h=bt(t),h.c(),I(h,1),h.m(e,null)):h&&(N(),P(h,1,1,()=>{h=null}),q())},i(t){i||(I(s.$$.fragment,t),I(c.$$.fragment,t),I(d.$$.fragment,t),I(h),i=!0)},o(t){P(s.$$.fragment,t),P(c.$$.fragment,t),P(d.$$.fragment,t),P(h),i=!1},d(t){t&&f(e),O(s),O(c),O(d),h&&h.d()}}}function zt(){J.set(!0)}function _t(){Q.set(!1)}function Ht(t,e,n){let r,o;return i(t,R,t=>n(2,r=t)),i(t,Q,t=>n(0,o=t)),t.$$.update=()=>{4&t.$$.dirty&&(document.title=`Уровень ${r}`)},[o,function(){R.set(r+1),Q.set(!1)}]}return new class extends V{constructor(t){super(),F(this,t,Ht,wt,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
