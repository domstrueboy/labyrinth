var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(t){return null==t?"":t}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let b;function y(t){b=t}const v=[],x=[],w=[],A=[],_=Promise.resolve();let z=!1;function C(t){w.push(t)}const k=new Set;function L(){do{for(;v.length;){const t=v.shift();y(t),E(t.$$)}for(;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];k.has(e)||(k.add(e),e())}w.length=0}while(v.length);for(;A.length;)A.pop()();z=!1,k.clear()}function E(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const T=new Set;let M;function H(){M={r:0,c:[],p:M}}function N(){M.r||r(M.c),M=M.p}function j(t,e){t&&t.i&&(T.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),M.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function P(t){t&&t.c()}function S(t,n,l){const{fragment:i,on_mount:c,on_destroy:s,after_update:u}=t.$$;i&&i.m(n,l),C(()=>{const n=c.map(e).filter(o);s?s.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(C)}function B(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(v.push(t),z||(z=!0,_.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,o,l,i,c,s,u=[-1]){const f=b;y(e);const a=o.props||{},d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u};let p=!1;d.ctx=l?l(e,a,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&O(e,t)),n}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),o.target&&(o.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):d.fragment&&d.fragment.c(),o.intro&&j(e.$$.fragment),S(e,o.target,o.anchor),L()),y(f)}class D{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const V=[];function W(e,n=t){let r;const o=[];function i(t){if(l(e,t)&&(e=t,r)){const t=!V.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),V.push(n,e)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(l,c=t){const s=[l,c];return o.push(s),1===o.length&&(r=n(i)||t),l(e),()=>{const t=o.indexOf(s);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const F=W(!1),G=W([]);String.prototype.replaceAll=function(t,e){return this.split(t).join(e)};function J(e){let n,r;return{c(){n=d("div"),m(n,"contenteditable","true"),m(n,"class","wrapper svelte-1pn1d0p"),m(n,"autofocus",""),void 0===e[1]&&C(()=>e[4].call(n))},m(t,o){u(t,n,o),e[3](n),void 0!==e[1]&&(n.innerHTML=e[1]),n.focus(),r=g(n,"input",e[4])},p(t,[e]){2&e&&t[1]!==n.innerHTML&&(n.innerHTML=t[1])},i:t,o:t,d(t){t&&f(n),e[3](null),r()}}}function K(t,e,n){let r,o,l;return i(t,F,t=>n(2,r=t)),t.$$.update=()=>{if(5&t.$$.dirty&&r){const t=o.innerHTML.replaceAll(/&nbsp;/gi,"").replaceAll("</div><div>",";").replaceAll("<div>",";").replaceAll("</div>","").replaceAll("<br>","delimeter").trim().split(";").map(t=>t.trim()).filter(t=>""!==t),e=t.reduce((t,e)=>{if("delimeter"===e)return t.push(e),t;const n=e.split(" ").filter(t=>""!==t),r=n[0].toLowerCase(),o=parseInt(n[1],10);return isNaN(o)?t:(["влево","left"].includes(r)?t.push(["left",o]):["вправо","right"].includes(r)?t.push(["right",o]):["вверх","up"].includes(r)?t.push(["up",o]):["вниз","down"].includes(r)?t.push(["down",o]):["повтор","повторить","repeat"].includes(r)&&t.push(["repeat",o]),t)},[]);console.log(e);const n=function(t){const e=t.length,n=[];let r=0;for(;r<e&&r<1e3;){const e=t[r];if(Array.isArray(e)){const o=e[0],l=e[1];if("repeat"===o){t[r+1]}for(let t=0;t<l;t++)n.push(o)}r++}return n}(e);console.log(n),G.set(n)}},[o,l,r,function(t){x[t?"unshift":"push"](()=>{n(0,o=t)})},function(){l=this.innerHTML,n(1,l)}]}class Q extends D{constructor(t){super(),q(this,t,K,J,l,{})}}function R(e){let n,r;return{c(){n=d("div"),m(n,"class",r=c(e[3][e[0]])+" svelte-i7cu73"),$(n,"--size",e[1])},m(t,r){u(t,n,r),e[4](n)},p(t,[e]){1&e&&r!==(r=c(t[3][t[0]])+" svelte-i7cu73")&&m(n,"class",r),2&e&&$(n,"--size",t[1])},i:t,o:t,d(t){t&&f(n),e[4](null)}}}function U(t,e,n){let r,{cellCode:o}=e,{size:l}=e;return t.$set=t=>{"cellCode"in t&&n(0,o=t.cellCode),"size"in t&&n(1,l=t.size)},[o,l,r,["none","path","start","finish"],function(t){x[t?"unshift":"push"](()=>{n(2,r=t)})}]}class X extends D{constructor(t){super(),q(this,t,U,R,l,{cellCode:0,size:1})}}function Y(t,e,n){return!(e<0||n<0)&&(!(e>=t[0].length||n>=t.length)&&0!==t[n][e])}function Z(t,e,n){return 3===t[n][e]}function tt(t,e,n){const r=t.slice();return r[16]=e[n],r[18]=n,r}function et(t,e,n){const r=t.slice();return r[13]=e[n],r[15]=n,r}function nt(t){let e;const n=new X({props:{cellCode:t[16],size:t[4]}});return{c(){P(n.$$.fragment)},m(t,r){S(n,t,r),e=!0},p(t,e){const r={};16&e&&(r.size=t[4]),n.$set(r)},i(t){e||(j(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){B(n,t)}}}function rt(t){let e,n,r=t[13],o=[];for(let e=0;e<r.length;e+=1)o[e]=nt(tt(t,r,e));const l=t=>I(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=p("")},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);u(t,e,r),n=!0},p(t,n){if(48&n){let i;for(r=t[13],i=0;i<r.length;i+=1){const l=tt(t,r,i);o[i]?(o[i].p(l,n),j(o[i],1)):(o[i]=nt(l),o[i].c(),j(o[i],1),o[i].m(e.parentNode,e))}for(H(),i=r.length;i<o.length;i+=1)l(i);N()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)j(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)I(o[t]);n=!1},d(t){a(o,t),t&&f(e)}}}function ot(t){let e,n,r,o,l,i,c=t[5],p=[];for(let e=0;e<c.length;e+=1)p[e]=rt(et(t,c,e));const g=t=>I(p[t],1,1,()=>{p[t]=null});return{c(){e=d("div"),n=d("div");for(let t=0;t<p.length;t+=1)p[t].c();r=h(),o=d("div"),m(o,"class","chip svelte-1slac67"),$(o,"--pos-x",t[2]),$(o,"--pos-y",t[3]),m(n,"class","field svelte-1slac67"),C(()=>t[12].call(n)),m(e,"class","wrapper svelte-1slac67"),$(e,"--rows",t[6]),$(e,"--columns",t[7]),$(e,"--size",t[4])},m(c,f){u(c,e,f),s(e,n);for(let t=0;t<p.length;t+=1)p[t].m(n,null);s(n,r),s(n,o),l=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=document.createElement("object");let r;return n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.type="text/html",n.tabIndex=-1,n.onload=()=>{r=n.contentDocument.defaultView,r.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:()=>{r&&r.removeEventListener&&r.removeEventListener("resize",e),t.removeChild(n)}}}(n,t[12].bind(n)),i=!0},p(t,[l]){if(48&l){let e;for(c=t[5],e=0;e<c.length;e+=1){const o=et(t,c,e);p[e]?(p[e].p(o,l),j(p[e],1)):(p[e]=rt(o),p[e].c(),j(p[e],1),p[e].m(n,r))}for(H(),e=c.length;e<p.length;e+=1)g(e);N()}(!i||4&l)&&$(o,"--pos-x",t[2]),(!i||8&l)&&$(o,"--pos-y",t[3]),(!i||16&l)&&$(e,"--size",t[4])},i(t){if(!i){for(let t=0;t<c.length;t+=1)j(p[t]);i=!0}},o(t){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)I(p[t]);i=!1},d(t){t&&f(e),a(p,t),l.cancel()}}}function lt(t,e,n){let r;i(t,G,t=>n(10,r=t));let o,l,c,s,u,f=[[0,0,0,1,3],[0,0,1,1,0],[1,1,1,0,0],[1,0,0,0,0],[1,1,0,0,0],[0,1,1,0,0],[0,0,1,1,2]],a=f.length,d=f[0].length,p=f.findIndex(t=>t.includes(2)),h=f[p].findIndex(t=>2===t);function g(t){return new Promise((e,r)=>{setTimeout(()=>{let r,o;switch(t){case"left":r=h-1,Y(f,r,p)?(n(9,h-=1),Z(f,h,p)&&alert("Победа!")):alert("Вы вышли за пределы поля!");break;case"right":r=h+1,Y(f,r,p)?(n(9,h+=1),Z(f,h,p)&&alert("Победа!")):alert("Вы вышли за пределы поля!");break;case"up":o=p-1,Y(f,h,o)?(n(8,p-=1),Z(f,h,p)&&alert("Победа!")):alert("Вы вышли за пределы поля!");break;case"down":o=p+1,Y(f,h,o)?(n(8,p+=1),Z(f,h,p)&&alert("Победа!")):alert("Вы вышли за пределы поля!")}e()},500)})}return t.$$.update=()=>{512&t.$$.dirty&&n(2,c=h+1),256&t.$$.dirty&&n(3,s=p+1),3&t.$$.dirty&&n(4,u=Math.min(o/d,l/a)+"px"),1024&t.$$.dirty&&r.length>0&&r.reduce((t,e)=>t.then(()=>g(e)),Promise.resolve())},[o,l,c,s,u,f,a,d,p,h,r,g,function(){o=this.clientWidth,l=this.clientHeight,n(0,o),n(1,l)}]}class it extends D{constructor(t){super(),q(this,t,lt,ot,l,{})}}function ct(e){let n,r;return{c(){n=d("button"),n.textContent="СТАРТ",m(n,"class","svelte-1oydbdt")},m(t,e){u(t,n,e),r=g(n,"click",st)},p:t,i:t,o:t,d(t){t&&f(n),r()}}}function st(){F.set(!0)}class ut extends D{constructor(t){super(),q(this,t,null,ct,l,{})}}function ft(e){let n,r,o,l;const i=new Q({}),c=new it({}),a=new ut({});return{c(){n=d("main"),P(i.$$.fragment),r=h(),P(c.$$.fragment),o=h(),P(a.$$.fragment),m(n,"class","svelte-1r6xykg")},m(t,e){u(t,n,e),S(i,n,null),s(n,r),S(c,n,null),s(n,o),S(a,n,null),l=!0},p:t,i(t){l||(j(i.$$.fragment,t),j(c.$$.fragment,t),j(a.$$.fragment,t),l=!0)},o(t){I(i.$$.fragment,t),I(c.$$.fragment,t),I(a.$$.fragment,t),l=!1},d(t){t&&f(n),B(i),B(c),B(a)}}}return new class extends D{constructor(t){super(),q(this,t,null,ft,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map