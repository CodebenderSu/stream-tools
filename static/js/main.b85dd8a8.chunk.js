(this["webpackJsonpstream-tools"]=this["webpackJsonpstream-tools"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(21),r=n.n(o),s=n(6),i=n(7),l=n(9),m=n(8),u=n(2),p=n(11),d="/",f="/countdown",b={s:360,timestamp:0,ms:!1,mins:!0,hrs:!1,days:!1,prefix:"in",suffix:"",complete:"imminently..."},h=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Stream Tools"),c.a.createElement(p.b,{exact:!0,to:"".concat(f)},"Countdown"))}}]),n}(a.Component),E=n(13),j=n(14),O=n(15),v=n(23),y=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;for(var o in Object(s.a)(this,n),(a=t.call(this,e)).renderer=function(e){var t=e.days,n=e.hours,o=e.minutes,r=e.seconds,s=e.milliseconds,i=e.completed,l=Object(O.a)(a).options;return i?(a.setState({complete:!0}),c.a.createElement("div",{className:"countdown-content"},c.a.createElement("div",{className:"countdown-timer"},c.a.createElement("span",{className:"timer-text"},a.options.complete)))):c.a.createElement("div",{className:"countdown-timer"},c.a.createElement("p",{className:"timer-text"},l.prefix,"\xa0"),c.a.createElement("p",{className:"timer-count"},c.a.createElement("span",{title:"Days"},l.days?"".concat(t<10?"0".concat(t):t," : "):""),c.a.createElement("span",{title:"Hours"},l.hrs?"".concat(n<10?"0".concat(n):n," : "):""),c.a.createElement("span",{title:"Minutes"},l.mins?"".concat(o<10?"0".concat(o):o," : "):""),c.a.createElement("span",{title:"Seconds"},r<10?"0".concat(r):r),c.a.createElement("span",{title:"Milliseconds"},l.ms?" : ".concat(s<10?"0".concat(s):s):"")),c.a.createElement("p",{className:"timer-text"},"\xa0",l.suffix))},a.state={complete:!1},a.options=b,a.queries=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"?",t={},n=/(%20)|(\+)/g;if(e.slice(1)){var a=e.slice(1).split("&");a.forEach((function(e){var a,c=e.split("=")[0].toLowerCase();a=1===e.split("=").length||e.split("=")[1].replace(n," "),t=Object(j.a)(Object(j.a)({},t),{},Object(E.a)({},c,a))}))}return t}(e.location.search),a.queries)a.options=Object(j.a)(Object(j.a)({},a.options),{},Object(E.a)({},o,a.queries[o]));return a.options.s=parseInt(a.options.s),a.options.s?a.options.timestamp=(new Date).getTime()+1e3*a.options.s:a.options.timestamp=parseInt(a.options.timestamp),console.log(a.options),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.options.s||this.options.timestamp||this.setState({complete:!0})}},{key:"render",value:function(){return this.state.complete?c.a.createElement("div",{className:"countdown-content"},c.a.createElement("div",{className:"countdown-timer"},c.a.createElement("span",{className:"timer-text"},this.options.complete))):c.a.createElement("div",{className:"countdown-content"},c.a.createElement(v.a,{date:this.options.timestamp,renderer:this.renderer}))}}]),n}(a.Component),w=Object(u.f)(y),N=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"countdown-container"},c.a.createElement(w,null))}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(u.c,null,c.a.createElement(u.a,{path:d,exact:!0,component:h}),c.a.createElement(u.a,{path:f,exact:!0,component:N}))}}]),n}(a.Component);n(34);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(x,null))},C=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(p.a,{basename:"/stream-tools"},this.props.children)}}]),n}(a.Component),g=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),n}(c.a.Component),S=Object(u.f)(g);n(35);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null,c.a.createElement(S,null),c.a.createElement(k,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b85dd8a8.chunk.js.map