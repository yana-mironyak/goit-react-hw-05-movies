"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[59],{9059:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(5861),a=n(885),c=n(7757),i=n.n(c),s=n(501),o=n(6871),u={additionalInfo:"AdditionalInfo_additionalInfo__TeBHg",list__item:"AdditionalInfo_list__item__r6Cyg",list__link:"AdditionalInfo_list__link__VxxP2"},l=n(184),p=function(e){var t=e.backLinkHref;return(0,l.jsx)("div",{className:u.container,children:(0,l.jsxs)("div",{className:u.additionalInfo,children:[(0,l.jsx)("p",{children:"Additional Information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:u.list__item,children:(0,l.jsx)(s.rU,{className:u.list__link,to:"cast",state:{from:t},children:"Cast"})}),(0,l.jsx)("li",{className:u.list__item,children:(0,l.jsx)(s.rU,{className:u.list__link,to:"reviews",state:{from:t},children:"Reviews"})})]}),(0,l.jsx)(o.j3,{})]})})},f="GoBackButton_goBackBtn__-WH+J",d=function(e){var t=e.onGoBack;return(0,l.jsx)(s.rU,{to:t,className:f,children:"Go back"})},v=n(495),h=n(2791),_="MovieDetails_container__o8VqJ",m="MovieDetails_movie__vEd44",x="MovieDetails_movie__img__LDziO",g="MovieDetails_movie__title__zWRPm",k=function(){var e,t,n=(0,o.UO)().movieId,c=(0,o.TH)(),s=(0,h.useState)({}),u=(0,a.Z)(s,2),f=u[0],k=u[1],j=(0,h.useState)(),w=(0,a.Z)(j,2),y=w[0],b=w[1],N="https://image.tmdb.org/t/p/w300".concat(f.poster_path),U=null!==(e=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,h.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Y5)(n);case 2:t=e.sent,k(t),b(Object.values(t.genres).map((function(e){return e.name})).join(", "));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,l.jsxs)("div",{className:_,children:[(0,l.jsx)(d,{onGoBack:U}),(0,l.jsxs)("div",{className:m,children:[f.poster_path&&(0,l.jsx)("img",{className:x,src:N,alt:f.title}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:f.title}),(0,l.jsxs)("p",{children:["User Score: ",Math.floor(10*f.vote_average),"%"]}),(0,l.jsx)("h3",{className:g,children:"Overview"}),(0,l.jsx)("p",{children:f.overview}),(0,l.jsx)("h3",{className:g,children:"Genres"}),(0,l.jsx)("p",{children:y})]})]}),(0,l.jsx)(p,{backLinkHref:U})]})}},495:function(e,t,n){n.d(t,{Hx:function(){return _},SU:function(){return l},WK:function(){return x},Y5:function(){return f},xc:function(){return v}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),s=n.n(i),o="3aee21951118aea271842c595cb04969",u="https://api.themoviedb.org/3/movie";function l(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"/popular?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"/").concat(t,"?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"/").concat(t,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=59.846c9ea3.chunk.js.map