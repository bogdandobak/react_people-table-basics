(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{41:function(e,a,t){e.exports=t(55)},49:function(e,a,t){},52:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),u=t(9),o=(t(46),t(28)),m=t(2),p=(t(47),t(15)),i=t.n(p),s=t(25),E="https://mate-academy.github.io/react_people-table/api/people.json";function f(){return(f=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E);case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(49);var d=t(19),b=t(58),h=function(e){var a=e.person;return l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Cell,null,a.name),l.a.createElement(b.a.Cell,null,a.sex),l.a.createElement(b.a.Cell,null,a.born),l.a.createElement(b.a.Cell,null,a.died),l.a.createElement(b.a.Cell,null,a.motherName),l.a.createElement(b.a.Cell,null,a.fatherName))};h.defaultProps={person:null};var v=function(e){var a=e.people,t=a.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{father:a.find((function(a){return a.name===e.fatherName})),mother:a.find((function(a){return a.name===e.motherName}))})}));return l.a.createElement(b.a,{celled:!0},l.a.createElement(b.a.Header,null,l.a.createElement(b.a.Row,null,l.a.createElement(b.a.HeaderCell,null,"Name"),l.a.createElement(b.a.HeaderCell,null,"Sex"),l.a.createElement(b.a.HeaderCell,null,"Born"),l.a.createElement(b.a.HeaderCell,null,"Died"),l.a.createElement(b.a.HeaderCell,null,"Mother"),l.a.createElement(b.a.HeaderCell,null,"Father"))),l.a.createElement(b.a.Body,null,t.map((function(e){return l.a.createElement(h,{person:e,key:e.slug})}))))};v.defaultProps={people:[]};t(52);var C=function(){return l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(u.b,{to:"/",className:"navbar-item"},"Home"),l.a.createElement(u.b,{to:"/people",className:"navbar-item"},"Peoples"))))},N=function(){return Object(n.useEffect)((function(){document.title="Page not found"})),l.a.createElement("h1",null,"Page not found")},j=function(){return l.a.createElement("h1",null,"Home Page")},H=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){return f.apply(this,arguments)})().then(r)}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:j}),l.a.createElement(m.b,{path:"/people"},l.a.createElement(v,{people:t})),l.a.createElement(m.a,{path:"/home",to:"/"}),l.a.createElement(N,null)))};c.a.render(l.a.createElement(u.a,null,l.a.createElement(H,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d5171115.chunk.js.map