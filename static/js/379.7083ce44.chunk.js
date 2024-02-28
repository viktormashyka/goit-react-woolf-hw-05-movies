"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[379],{1848:function(n,e,t){t.d(e,{r:function(){return x}});var r,a,i,o,c,u,s,l=t(2791),p=["title","titleId"];function f(){return f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},f.apply(this,arguments)}function d(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function h(n,e){var t=n.title,h=n.titleId,x=d(n,p);return l.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":h},x),t?l.createElement("title",{id:h},t):null,r||(r=l.createElement("path",{d:"M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7Z",fill:"currentColor"})),a||(a=l.createElement("path",{d:"M17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8Z",fill:"currentColor"})),i||(i=l.createElement("path",{d:"M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11Z",fill:"currentColor"})),o||(o=l.createElement("path",{d:"M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z",fill:"currentColor"})),c||(c=l.createElement("path",{d:"M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16C7 15.4477 6.55228 15 6 15Z",fill:"currentColor"})),u||(u=l.createElement("path",{d:"M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16Z",fill:"currentColor"})),s||(s=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z",fill:"currentColor"})))}var x=l.forwardRef(h);t.p},1686:function(n,e,t){t.d(e,{Mc:function(){return l},hC:function(){return p},oJ:function(){return f},$Y:function(){return s},DQ:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),o=t(5294),c="857288c3c5f42347171bc7541b9a4b57";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?query=".concat(e,"&api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,t){t.d(e,{a:function(){return u}});var r,a=t(4137),i=t(168),o=t(7924).ZP.div(r||(r=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),c=t(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.Yt,{visible:!0,height:"120",width:"120",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperClass:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})}},7047:function(n,e,t){t.d(e,{e:function(){return d}});var r,a,i=t(7689),o=t(1087),c=t(1848),u=t(168),s=t(7924),l=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 16px;\n"]))),p=s.ZP.li(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"]))),f=t(184),d=function(n){var e=n.movies,t=(0,i.TH)();return(0,f.jsx)(l,{children:e.map((function(n){return(0,f.jsxs)(p,{children:[(0,f.jsx)(c.r,{}),(0,f.jsx)(o.rU,{to:"/movies/".concat(n.id),state:t,children:n.title})]},n.id)}))})}},1379:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,c,u,s,l=t(5861),p=t(9439),f=t(7757),d=t.n(f),h=t(2791),x=t(1087),g=t(2094),v=t(1686),b=t(168),m=t(7924),y=(m.ZP.h2(r||(r=(0,b.Z)(["\n  font-size: 18px;\n"]))),m.ZP.header(a||(a=(0,b.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])))),C=m.ZP.form(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),Z=m.ZP.button(o||(o=(0,b.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),w=m.ZP.span(c||(c=(0,b.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),k=m.ZP.input(u||(u=(0,b.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),j=t(184),_=function(){var n=(0,h.useState)(""),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,x.lr)(),i=(0,p.Z)(a,2),o=i[0],c=i[1];(0,h.useEffect)((function(){var n=o.get("query");n&&r(n)}),[o]);return(0,j.jsx)(y,{children:(0,j.jsxs)(C,{onSubmit:function(n){n.preventDefault(),c({query:t})},children:[(0,j.jsx)(Z,{type:"submit",children:(0,j.jsx)(w,{children:"Search"})}),(0,j.jsx)(k,{type:"text",value:t,onChange:function(n){r(n.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search movies",required:!0})]})})},P=m.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),E=t(9245),O=t(7047),S=function(){var n=(0,h.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,h.useState)(!1),i=(0,p.Z)(a,2),o=i[0],c=i[1],u=(0,h.useState)(null),s=(0,p.Z)(u,2),f=s[0],b=s[1],m=(0,x.lr)(),y=(0,p.Z)(m,1)[0].get("query");return(0,h.useEffect)((function(){function n(){return(n=(0,l.Z)(d().mark((function n(){var e,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,c(!0),b(""),n.next=7,(0,v.$Y)(y);case 7:if(e=n.sent,0!==(t=e.results).length){n.next=12;break}return g.Am.info("Sorry, there are no movies matching your search query. Please try again."),n.abrupt("return");case 12:r(t),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(2),b(n.t0);case 18:return n.prev=18,c(!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[2,15,18,21]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[y]),(0,j.jsxs)(P,{children:[(0,j.jsx)(_,{}),f&&(0,j.jsxs)("p",{children:["Whoops, something went wrong: ",f.message]}),o&&(0,j.jsx)(E.a,{}),!f&&!o&&(null===t||void 0===t?void 0:t.length)>0&&(0,j.jsx)(O.e,{movies:t})]})}}}]);
//# sourceMappingURL=379.7083ce44.chunk.js.map