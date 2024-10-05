var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,d as w,f as B,i as E,e as I,g as b,h as D,j as L,k as N,l as P,m as T,p as H}from"./scheduler.Ce_0Mfso.js";let $=!1;function M(){$=!0}function O(){$=!1}function q(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let i=0;i<t.length;i++){const a=t[i].claim_order,o=(s>0&&t[n[s]].claim_order<=a?s+1:q(1,s,_=>t[n[_]].claim_order,a))-1;r[i]=n[o]+1;const c=o+1;n[c]=i,s=Math.max(c,s)}const f=[],l=[];let u=t.length-1;for(let i=n[s]+1;i!=0;i=r[i-1]){for(f.push(t[i-1]);u>=i;u--)l.push(t[u]);u--}for(;u>=0;u--)l.push(t[u]);f.reverse(),l.sort((i,a)=>i.claim_order-a.claim_order);for(let i=0,a=0;i<l.length;i++){for(;a<f.length&&l[i].claim_order>=f[a].claim_order;)a++;const o=a<f.length?f[a]:null;e.insertBefore(l[i],o)}}function R(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function ae(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function le(e){return function(t){return t.preventDefault(),e.call(this,t)}}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,r,s=!1){G(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const u=e[l];if(t(u)){const i=n(u);return i===void 0?e.splice(l,1):e[l]=i,s||(e.claim_info.last_index=l),u}}for(let l=e.claim_info.last_index-1;l>=0;l--){const u=e[l];if(t(u)){const i=n(u);return i===void 0?e.splice(l,1):e[l]=i,s?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,u}}return r()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function A(e,t,n,r){return S(e,s=>s.nodeName===t,s=>{const f=[];for(let l=0;l<s.attributes.length;l++){const u=s.attributes[l];n[u.name]||f.push(u.name)}f.forEach(l=>s.removeAttribute(l))},()=>r(t))}function fe(e,t,n){return A(e,t,n,V)}function ce(e,t,n){return A(e,t,n,W)}function J(e,t){return S(e,n=>n.nodeType===3,n=>{const r=""+t;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>x(t),!0)}function oe(e){return J(e," ")}function de(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t){e.value=t??""}function me(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function he(e,t){return new e(t)}const m=new Set;let d;function $e(){d={r:0,c:[],p:d}}function pe(){d.r||h(d.c),d=d.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ye(e,t,n,r){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),b(()=>{const f=e.$$.on_mount.map(P).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),s.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(D(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(T.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,r,s,f,l=null,u=[-1]){const i=L;N(e);const a=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:s,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(c,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&s(a.ctx[c],a.ctx[c]=v)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](v),o&&Y(e,c)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){M();const c=F(t.target);a.fragment&&a.fragment.l(c),c.forEach(U)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),O(),B()}N(i)}class we{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!E(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{re as A,me as B,he as C,_e as D,ne as E,we as S,F as a,se as b,ce as c,U as d,te as e,R as f,V as g,ie as h,ve as i,fe as j,J as k,oe as l,de as m,ue as n,ae as o,le as p,K as q,ye as r,W as s,x as t,pe as u,xe as v,ge as w,Q as x,X as y,$e as z};
