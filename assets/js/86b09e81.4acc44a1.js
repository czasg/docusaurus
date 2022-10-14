"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1416],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,g=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(g,u(u({ref:t},s),{},{components:r})):n.createElement(g,u({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5072:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),u=["components"],c={title:"SQL\u968f\u5f55",authors:["czasg"],tags:["sql"]},i=void 0,l={permalink:"/docusaurus/blog/2022/10/14/SQL\u968f\u5f55",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/10-14-SQL\u968f\u5f55/index.md",source:"@site/blog/2022/10-14-SQL\u968f\u5f55/index.md",title:"SQL\u968f\u5f55",description:'\u9700\u6c42\u8bf4\u660e\uff1atable.key\u662f\u4e00\u4e2aJSONB\u5b57\u6bb5\uff0c\u5b58\u50a8\u6570\u636e\u4e3a\uff1a[{"rule": ["hash=hashstring;"]}]\uff0c\u73b0\u9700\u8981\u89e3\u6790\u6b64\u6570\u636e\uff0c',date:"2022-10-14T00:00:00.000Z",formattedDate:"October 14, 2022",tags:[{label:"sql",permalink:"/docusaurus/blog/tags/sql"}],readingTime:.555,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],nextItem:{title:"\u5982\u4f55\u7406\u89e3\u5f15\u64ce",permalink:"/docusaurus/blog/2022/10/07/\u5982\u4f55\u7406\u89e3\u5f15\u64ce"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    SUBSTRING( ( table.key -> 0- > 'rule' -> 0 ) :: TEXT, '=*([0-9a-zA-Z]*);' ) AS hash \nFROM\n    table;\n")))}m.isMDXComponent=!0}}]);