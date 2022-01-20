"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1249],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2091:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={title:"redis \u6574\u7406",authors:["czasg"],tags:["redis"]},l=void 0,u={permalink:"/docusaurus/blog/2022/1/18/redis \u6574\u7406",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/1/18/redis \u6574\u7406/index.md",source:"@site/blog/2022/1/18/redis \u6574\u7406/index.md",title:"redis \u6574\u7406",description:"\u6574\u7406\u4e0b redis \u5e38\u89c1\u77e5\u8bc6\u70b9\u3002",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"redis",permalink:"/docusaurus/blog/tags/redis"}],readingTime:.975,truncated:!0,authors:[{name:"Czasg",title:"Maintainer of Site",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"\u5e38\u7528 sql \u64cd\u4f5c",permalink:"/docusaurus/blog/2022/1/20/\u5e38\u7528 sql \u64cd\u4f5c"},nextItem:{title:"nginx \u914d\u7f6e\u8bf4\u660e",permalink:"/docusaurus/blog/2022/1/12/nginx\u914d\u7f6e\u8bf4\u660e"}},s={authorsImageUrls:[void 0]},p=[{value:"\u5e38\u89c1\u6570\u636e\u7c7b\u578b",id:"\u5e38\u89c1\u6570\u636e\u7c7b\u578b",children:[],level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6574\u7406\u4e0b redis \u5e38\u89c1\u77e5\u8bc6\u70b9\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"redis \u5355\u7ebf\u7a0b\u7406\u89e3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 6.0 \u7248\u672c\u4e4b\u524d\uff0credis \u5185\u90e8\u7684\u7f51\u7edcIO\u548c\u952e\u503c\u5bf9\u7684\u8bfb\u5199\u662f\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u5b8c\u6210\u7684\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4f46\u7c7b\u4f3c\u6570\u636e\u6301\u4e45\u5316\u3001\u4e3b\u4ece\u540c\u6b65\u7b49\uff0c\u90fd\u662f\u591a\u7ebf\u7a0b\u5b8c\u6210\u7684\u3002\u6240\u4ee5\u672c\u8d28\u4e0a\uff0credis \u5e76\u4e0d\u662f\u4e00\u4e2a\u7edd\u5bf9\u7684\u5355\u7ebf\u7a0b\u670d\u52a1\u3002\n\u800c\u5b98\u65b9\u4e4b\u6240\u4ee5\u8fd9\u6837\u63cf\u8ff0\uff0c\u4e5f\u53ea\u662f\u56e0\u4e3a\u4ed6\u7684\u6838\u5fc3\u903b\u8f91\u90fd\u662f\u5355\u7ebf\u7a0b\u5b9e\u73b0\u7684\uff0c\u7136\u540e\u8fd8\u80fd\u63d0\u4f9b\u8fd9\u4e48\u9ad8\u7684\u5e76\u53d1\uff0c\u6574\u4f53\u542c\u4e0a\u53bb\u5c31\u5f88\u725b\u4e86\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5728 6.0 \u7248\u672c\u4e4b\u540e\uff0credis \u5728\u7f51\u7edcIO\u90e8\u5206\u5f15\u5165\u4e86\u591a\u7ebf\u7a0b\uff0c\u800c\u952e\u503c\u5bf9\u7684\u8bfb\u5199\u5219\u8fd8\u662f\u7531\u5355\u7ebf\u7a0b\u5b8c\u6210\u3002  "))),(0,i.kt)("h2",{id:"\u5e38\u89c1\u6570\u636e\u7c7b\u578b"},"\u5e38\u89c1\u6570\u636e\u7c7b\u578b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"string"),(0,i.kt)("li",{parentName:"ul"},"hash"),(0,i.kt)("li",{parentName:"ul"},"list"),(0,i.kt)("li",{parentName:"ul"},"set"),(0,i.kt)("li",{parentName:"ul"},"zset"),(0,i.kt)("li",{parentName:"ul"},"bitmap"),(0,i.kt)("li",{parentName:"ul"},"hyperloglog"),(0,i.kt)("li",{parentName:"ul"},"geo")),(0,i.kt)("h2",{id:""}))}m.isMDXComponent=!0}}]);