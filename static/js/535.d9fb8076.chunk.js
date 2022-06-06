"use strict";(self.webpackChunkmovie=self.webpackChunkmovie||[]).push([[535],{965:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r.p+"static/media/error.27d06bd878f675efd5c2.gif",a=r(184),o=function(){return(0,a.jsx)("img",{className:"error",src:n,alt:"Error"})}},30:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(504),a=r(184),o=function(e){var t=e.category,r=e.type,o=e.data,c=o.id,i=void 0===c?0:c,s=o.title,u=void 0===s?"":s,l=o.image,d=void 0===l?"":l;return(0,a.jsxs)("div",{className:"movie",children:[(0,a.jsx)(n.rU,{to:"/".concat(t,"/").concat(r,"/").concat(i),style:{backgroundImage:"url(".concat(d,")")},className:"movie__link",children:(0,a.jsx)("div",{className:"play__button"})}),(0,a.jsx)("div",{className:"movie__text",children:u})]},i)}},852:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(270),a=r(885),o=r(791),c=r(504),i=r(899),s=r(943),u=r(184),l=function(e){var t=e.data,r=t.id,n=void 0===r?10:r,a=t.title,o=void 0===a?"Something went wrong":a,i=t.image,s=void 0===i?"":i,l=t.overview,d=void 0===l?"We`ll fix it soon":l;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"random__bg",style:{backgroundImage:"url(".concat(s,")")}}),(0,u.jsx)("div",{className:"random__body _container",children:(0,u.jsxs)("div",{className:"random__text",children:[(0,u.jsx)("div",{className:"title random__title",children:o}),(0,u.jsx)("div",{className:"random__descr",children:d}),(0,u.jsx)(c.rU,{to:"/movie/popular/".concat(n),className:"btn",children:"Watch now"})]})})]})},d=function(){var e=(0,o.useState)(null),t=(0,a.Z)(e,2),r=t[0],n=t[1],c=(0,i.Z)(),d=c.getMovieById,v=c.setProcess,p=c.process;return(0,o.useEffect)((function(){var e=Math.floor(1e3*Math.random());return d(e).then((function(e){return function(e){n(e),v("confirmed")}(e)})),setInterval((function(){}),15e3),clearInterval()}),[]),(0,u.jsx)("div",{className:"random",children:(0,s.Z)(p,l,r)})},v=r(664),p=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n.q,{children:[(0,u.jsx)("title",{children:"Home | Movie-k Offical Site"}),(0,u.jsx)("meta",{name:"description",content:"Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."})]}),(0,u.jsx)(d,{}),(0,u.jsx)(v.Z,{title:"Trending movies",type:"popular",category:"movie"}),(0,u.jsx)(v.Z,{title:"Rated movies",type:"top_rated",category:"movie"}),(0,u.jsx)(v.Z,{title:"Trending TV shows",type:"popular",category:"tv"}),(0,u.jsx)(v.Z,{title:"Rated TV shows",type:"top_rated",category:"tv"})]})}},664:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(885),a=r(697),o=r(504),c=r(791),i=r(899),s=r(30),u=r(943),l=(r(676),r(184)),d=function(e){var t=e.data,r=e.type,n=e.category;return(0,l.jsx)(a.tq,{style:{position:"relative"},slidesPerView:"auto",spaceBetween:10,pagination:{clickable:!0},className:"slider",children:t.map((function(e){return(0,l.jsxs)(a.o5,{children:[" ",(0,l.jsx)(s.Z,{data:e,type:r,category:n})," "]},e.id)}))})},v=function(e){var t=e.type,r=e.title,a=e.category,s=e.similar,v=void 0!==s&&s,p=e.id,m=void 0===p?0:p,f=(0,c.useState)(null),g=(0,n.Z)(f,2),h=g[0],x=g[1],y=(0,i.Z)(),_=y.getMoviesList,w=y.getMovieBySimilar,j=y.setProcess,b=y.process,Z=function(e){x(e),j("confirmed")};return(0,c.useEffect)((function(){v?w(m,a).then(Z):_(t,1,a).then(Z)}),[]),(0,l.jsxs)("div",{className:"slider _container",children:[v?null:(0,l.jsxs)("div",{className:"slider__label",children:[(0,l.jsx)("h2",{className:"slider__title title",children:r}),(0,l.jsx)(o.rU,{to:"".concat(a,"/").concat(t),className:"btn btn-white",children:"View more"})]}),(0,u.Z)(b,d,h,t,a)]})}},899:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(861),a=r(757),o=r.n(a),c=r(885),i=r(791),s=function(){var e="94f7bec1b91c0b7133e5fa7be293f498",t="https://api.themoviedb.org/",r="https://image.tmdb.org/t/p/w500/",a=function(){var e=(0,i.useState)("waiting"),t=(0,c.Z)(e,2),r=t[0],a=t[1],s=(0,i.useCallback)(function(){var e=(0,n.Z)(o().mark((function e(t){var r,n,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>1&&void 0!==c[1]&&c[1],c.length>2&&void 0!==c[2]&&c[2],c.length>3&&void 0!==c[3]&&c[3],a("loading"),e.prev=4,e.next=7,fetch(t);case 7:if((r=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(r.status));case 10:return e.next=12,r.json();case 12:return n=e.sent,e.abrupt("return",n);case 16:throw e.prev=16,e.t0=e.catch(4),a("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),u=(0,i.useCallback)((function(){return a("loading")}),[]);return{process:r,setProcess:a,request:s,clearError:u}}(),s=a.process,u=a.setProcess,l=a.request,d=a.clearError,v=function(){var r=(0,n.Z)(o().mark((function r(){var n,a,c,i,s=arguments;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:"popular",a=s.length>1&&void 0!==s[1]?s[1]:1,c=s.length>2&&void 0!==s[2]?s[2]:"movie",r.next=5,l("".concat(t,"3/").concat(c,"/").concat(n,"?api_key=").concat(e,"&language=en-US&page=").concat(a));case 5:return i=r.sent,r.abrupt("return",i.results.map(h));case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(o().mark((function r(n){var a,c,i=arguments;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i.length>1&&void 0!==i[1]?i[1]:"popular",a=i.length>2&&void 0!==i[2]?i[2]:"movie",r.next=4,l("".concat(t,"3/").concat(a,"/").concat(n,"?api_key=").concat(e,"&language=en-US"));case 4:return c=r.sent,r.abrupt("return",g(c));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(o().mark((function r(){var n,a,c,i,s=arguments;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:"",a=s.length>1&&void 0!==s[1]?s[1]:1,c=s.length>2&&void 0!==s[2]?s[2]:"movie",r.next=5,l("".concat(t,"3/").concat(c,"/search?api_key=").concat(e,"&language=en-US&page=").concat(a,"&query=").concat(n));case 5:return i=r.sent,r.abrupt("return",i.results.map(h));case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(o().mark((function r(n){var a,c,i=arguments;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"movie",r.next=3,l("".concat(t,"3/").concat(a,"/").concat(n,"/similar?api_key=").concat(e,"&language=en-US&page=1"));case 3:return c=r.sent,r.abrupt("return",c.results.map(h));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),g=function(e){var t=e.id,n=e.title,a=e.poster_path,o=e.overview,c=e.genres,i=e.homepage,s=e.vote_average,u=e.vote_count,l=e.backdrop_path,d=e.tagline,v=e.production_countries,p=e.release_date;return{id:t,title:n,overview:o,image:r+a,genres:c.map((function(e){return e.name})),homepage:i,vote_average:s,vote_count:u,tagline:d,production_countries:v.map((function(e){return e.name})),release_date:p,bg:r+l}},h=function(e){var t=e.id,n=e.title,a=e.poster_path;return{id:t,title:n,overview:e.overview,image:r+a}};return{process:s,setProcess:u,clearError:d,getMoviesList:v,getMovieById:p,getMovieBySimilar:f,getMovieListBySearch:m}}},943:function(e,t,r){var n=r(108),a=r(965),o=r(184);t.Z=function(e,t,r,c,i){switch(e){case"waiting":case"loading":return(0,o.jsx)(n.Z,{});case"error":return(0,o.jsx)(a.Z,{});case"confirmed":return(0,o.jsx)(t,{data:r,type:c,category:i});default:throw new Error("Unexpected process state =(")}}}}]);
//# sourceMappingURL=535.d9fb8076.chunk.js.map