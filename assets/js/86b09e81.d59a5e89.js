"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,g=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(g,c(c({ref:t},i),{},{components:r})):n.createElement(g,c({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"SQL\u968f\u5f55",authors:["czasg"],tags:["sql"]},c=void 0,l={permalink:"/docusaurus/blog/2022/10/14/SQL\u968f\u5f55",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/10-14-SQL\u968f\u5f55/index.md",source:"@site/blog/2022/10-14-SQL\u968f\u5f55/index.md",title:"SQL\u968f\u5f55",description:'\u9700\u6c42\u8bf4\u660e\uff1atable.key\u662f\u4e00\u4e2aJSONB\u5b57\u6bb5\uff0c\u5b58\u50a8\u6570\u636e\u4e3a\uff1a[{"rule": ["hash=hashstring;"]}]\uff0c\u73b0\u9700\u8981\u89e3\u6790\u6b64\u6570\u636e\uff0c',date:"2022-10-14T00:00:00.000Z",formattedDate:"October 14, 2022",tags:[{label:"sql",permalink:"/docusaurus/blog/tags/sql"}],readingTime:.555,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"SQL\u968f\u5f55",authors:["czasg"],tags:["sql"]},prevItem:{title:"SQL\u968f\u5f55",permalink:"/docusaurus/blog/2022/10/17/SQL\u968f\u5f55"},nextItem:{title:"\u5982\u4f55\u7406\u89e3\u5f15\u64ce",permalink:"/docusaurus/blog/2022/10/07/\u5982\u4f55\u7406\u89e3\u5f15\u64ce"}},s={authorsImageUrls:[void 0]},u=[],i={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    SUBSTRING( ( table.key -> 0- > 'rule' -> 0 ) :: TEXT, '=*([0-9a-zA-Z]*);' ) AS hash \nFROM\n    table;\n")))}m.isMDXComponent=!0}}]);