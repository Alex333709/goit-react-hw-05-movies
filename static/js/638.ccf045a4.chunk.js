"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[638],{638:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,c,o,i,a,s,h=t(439),l=t(791),u=t(689),d=t(87),f=t(697),m=t(168),p=t(867),v=p.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=p.ZP.button(c||(c=(0,m.Z)(["\n  padding: 0.5rem 1rem;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  margin-bottom: 1rem;\n"]))),x=p.ZP.img(o||(o=(0,m.Z)(["\n  width: 250px;\n  height: auto;\n  margin-right: 1rem;\n"]))),j=p.ZP.div(i||(i=(0,m.Z)(["\n  flex-grow: 1;\n  text-align: left;\n"]))),w=p.ZP.p(a||(a=(0,m.Z)(["\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n"]))),Z=p.ZP.p(s||(s=(0,m.Z)(["\n  font-size: 1rem;\n"]))),b=t(184),y=(0,l.lazy)((function(){return t.e(387).then(t.bind(t,387))})),k=(0,l.lazy)((function(){return t.e(80).then(t.bind(t,906))})),_=function(){var e=(0,u.UO)().movieId,n=(0,u.s0)(),t=(0,u.TH)(),r=(0,l.useState)(null),c=(0,h.Z)(r,2),o=c[0],i=c[1],a=new URLSearchParams(t.search).get("query");(0,l.useEffect)((function(){f.Z.fetchMoviesById(e).then((function(e){return i(e)}))}),[e]);return(0,b.jsx)(v,{children:o?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{type:"button",onClick:function(){n(a?"/movies?query=".concat(a):"/movies")},children:"Go back"}),(0,b.jsxs)("div",{className:"movie_details",children:[(0,b.jsx)(x,{src:o.poster_path?"https://image.tmdb.org/t/p/w500/".concat(o.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,b.jsxs)(j,{children:[(0,b.jsx)(w,{children:o.title}),(0,b.jsx)(Z,{children:o.overview})]})]}),(0,b.jsx)("nav",{children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(d.rU,{to:"./cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(d.rU,{to:"./reviews",children:"Reviews"})})]})}),(0,b.jsx)(l.Suspense,{fallback:(0,b.jsx)("h2",{children:"Loading..."}),children:(0,b.jsxs)(u.Z5,{children:[(0,b.jsx)(u.AW,{path:"cast",element:(0,b.jsx)(y,{})}),(0,b.jsx)(u.AW,{path:"reviews",element:(0,b.jsx)(k,{movieId:e})})]})})]}):(0,b.jsx)("p",{children:"Loading..."})})}},697:function(e,n,t){var r=t(243),c="https://api.themoviedb.org/3",o="c9b08f524057dbce5849a7bccd964443",i={fetchTrendingMoviesByDay:function(){return r.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(o)).then((function(e){return e.data.results})).catch((function(e){console.error("There was an error:",e)}))},fetchSearchMovie:function(e){return r.Z.get("".concat(c,"/search/movie?api_key=").concat(o,"&page=1&include_adult=false&query=").concat(e)).then((function(e){return e.data.results})).catch((function(e){console.error("There was an error:",e)}))},fetchMoviesById:function(e){return r.Z.get("".concat(c,"/movie/").concat(e,"?api_key=").concat(o)).then((function(e){return e.data})).catch((function(e){console.error("There was an error:",e)}))},fetchMovieCast:function(e){return r.Z.get("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o)).then((function(e){return e.data})).catch((function(e){console.error("There was an error:",e)}))},fetchMovieReviews:function(e){return r.Z.get("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o)).then((function(e){return e.data})).catch((function(e){console.error("There was an error:",e)}))}};n.Z=i}}]);
//# sourceMappingURL=638.ccf045a4.chunk.js.map