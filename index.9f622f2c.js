function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=["name","capital","population","flags","languages"],o=t=>{const e=n.join(",");return fetch(`https://restcountries.com/v3.1/name/${t}?fields=${e}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))};var r,i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=f.test(t);return n||c.test(t)?a(t.slice(2),n?2:8):u.test(t)?NaN:+t}r=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function h(t){return a=t,f=setTimeout(w,e),l?p(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=i}function w(){var t=b();if(j(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-c);return s?y(n,i-(t-a)):n}(t))}function T(t){return f=void 0,d&&o?p(t):(o=r=void 0,u)}function O(){var t=b(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(w,e),p(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=g(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(g(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?u:T(b())},O};({input:document.querySelector("input#search-box"),countryList:document.querySelector("ul.country-list"),countryInfo:document.querySelector("div.country-info")}).input.addEventListener("input",t(r)((t=>{o(t.target.value).then((t=>console.log(t))).catch((t=>console.log(t)))}),300));
//# sourceMappingURL=index.9f622f2c.js.map