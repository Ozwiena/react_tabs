(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),b=n.n(s),o=n(0),r=function(t){var e,n=t.tabs,c=t.selectedTabId,a=t.onTabSelected,i=(e=c,n.find((function(t){return t.id===e}))||n[0]);return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:n.map((function(t){var e=i.id===t.id;return Object(o.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":e}),children:Object(o.jsx)("a",{onClick:function(){return t.id!==c&&a(t)},href:"#".concat(t.id),"data-cy":"TabLink",children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:i.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(d.useState)(l[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(function(){var t;return null===(t=l.find((function(t){return t.id===n})))||void 0===t?void 0:t.title}())}),Object(o.jsx)(r,{tabs:l,selectedTabId:n,onTabSelected:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l[0];c(t.id)}})]})};a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.41c41686.chunk.js.map