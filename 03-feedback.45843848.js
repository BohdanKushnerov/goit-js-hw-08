function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,u=setTimeout(T,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function T(){var e=g();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return u=void 0,v&&o?y(e):(o=r=void 0,a)}function w(){var e=g(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(T,t),y(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea"),T={};y.addEventListener("submit",(function(e){const{elements:{email:t,message:n}}=e.target;console.log({Email:t.value,Message:n.value}),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value;const t=JSON.stringify(T);localStorage.setItem("feedback-form-state",t)}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(T.email=t.email,T.message=t.message,j.value=t.email,S.value=t.message)}();
//# sourceMappingURL=03-feedback.45843848.js.map
