"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[511],{511:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,c,o,a,i=t(439),u=t(791),s=t(697),h=t(87),f=t(168),d=t(867),l=d.ZP.div(r||(r=(0,f.Z)(["\n  text-align: center;\n"]))),v=d.ZP.ul(c||(c=(0,f.Z)(["\n  list-style: none;\n"]))),m=d.ZP.li(o||(o=(0,f.Z)(["\n  margin-bottom: 1rem;\n"]))),g=(0,d.ZP)(h.rU)(a||(a=(0,f.Z)(["\n  text-decoration: none;\n  color: #007bff; /* \u041a\u043e\u043b\u0456\u0440 \u0442\u0435\u043a\u0441\u0442\u0443 \u043b\u0456\u043d\u043a\u0430 */\n  font-weight: bold; /* \u0416\u0438\u0440\u043d\u0438\u0439 \u0448\u0440\u0438\u0444\u0442 */\n  transition: color 0.3s; /* \u041f\u043b\u0430\u0432\u043d\u0430 \u0430\u043d\u0456\u043c\u0430\u0446\u0456\u044f \u0437\u043c\u0456\u043d\u0438 \u043a\u043e\u043b\u044c\u043e\u0440\u0443 */\n  cursor: pointer; /* \u0417\u043c\u0456\u043d\u0430 \u043a\u0443\u0440\u0441\u043e\u0440\u0443 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n\n  /* \u0421\u0442\u0438\u043b\u0456 \u0434\u043b\u044f \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043c\u0438\u0448\u043a\u0438 \u043d\u0430 \u043b\u0456\u043d\u043a */\n  &:hover {\n    color: #0056b3; /* \u0417\u043c\u0456\u043d\u044e\u0454\u043c\u043e \u043a\u043e\u043b\u0456\u0440 \u0442\u0435\u043a\u0441\u0442\u0443 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n  }\n"]))),y=t(184),Z=function(){var n=(0,u.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1];return(0,u.useEffect)((function(){s.Z.fetchTrendingMoviesByDay().then((function(n){return r(n)})).catch((function(n){return console.error("Error fetching trending movies:",n)}))}),[]),Array.isArray(t)?(0,y.jsxs)(l,{children:[(0,y.jsx)("h1",{children:"Trending Movies"}),(0,y.jsx)(v,{children:t.map((function(n){return(0,y.jsx)(m,{children:(0,y.jsx)(g,{as:h.rU,to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))})]}):(0,y.jsx)("div",{children:"Error: trendMovies is not an array"})}},697:function(n,e,t){var r=t(243),c="https://api.themoviedb.org/3",o="c9b08f524057dbce5849a7bccd964443",a={fetchTrendingMoviesByDay:function(){return r.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(o)).then((function(n){return n.data.results})).catch((function(n){console.error("There was an error:",n)}))},fetchSearchMovie:function(n){return r.Z.get("".concat(c,"/search/movie?api_key=").concat(o,"&page=1&include_adult=false&query=").concat(n)).then((function(n){return n.data.results})).catch((function(n){console.error("There was an error:",n)}))},fetchMoviesById:function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.data})).catch((function(n){console.error("There was an error:",n)}))},fetchMovieCast:function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.data})).catch((function(n){console.error("There was an error:",n)}))},fetchMovieReviews:function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.data})).catch((function(n){console.error("There was an error:",n)}))}};e.Z=a}}]);
//# sourceMappingURL=511.e33126c6.chunk.js.map