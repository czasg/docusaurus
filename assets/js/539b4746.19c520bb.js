"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6540],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"SQL\u968f\u5f55",authors:["czasg"],tags:["sql"]},s=void 0,u={permalink:"/docusaurus/blog/2022/10/14/SQL\u968f\u5f55",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/10-14-SQL\u968f\u5f55/index.md",source:"@site/blog/2022/10-14-SQL\u968f\u5f55/index.md",title:"SQL\u968f\u5f55",description:'\u9700\u6c42\u8bf4\u660e\uff1atable.key\u662f\u4e00\u4e2aJSONB\u5b57\u6bb5\uff0c\u5b58\u50a8\u6570\u636e\u4e3a\uff1a[{"rule": ["hash=hashstring;"]}]\uff0c\u73b0\u9700\u8981\u89e3\u6790\u6b64\u6570\u636e\uff0c',date:"2022-10-14T00:00:00.000Z",formattedDate:"October 14, 2022",tags:[{label:"sql",permalink:"/docusaurus/blog/tags/sql"}],readingTime:.555,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],nextItem:{title:"\u5982\u4f55\u7406\u89e3\u5f15\u64ce",permalink:"/docusaurus/blog/2022/10/07/\u5982\u4f55\u7406\u89e3\u5f15\u64ce"}},l={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    SUBSTRING( ( table.key -> 0- > 'rule' -> 0 ) :: TEXT, '=*([0-9a-zA-Z]*);' ) AS hash \nFROM\n    table;\n")),(0,o.kt)("p",null,"\u9700\u6c42\u8bf4\u660e\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"table.key"),"\u662f\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"JSONB"),"\u5b57\u6bb5\uff0c\u5b58\u50a8\u6570\u636e\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},'[{"rule": ["hash=hashstring;"]}]'),"\uff0c\u73b0\u9700\u8981\u89e3\u6790\u6b64\u6570\u636e\uff0c\n\u5e76\u622a\u53d6\u51fa\u6b64\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u54c8\u5e0c\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://postgres.cn/docs/12/functions-json.html"},"9.15. JSON \u51fd\u6570\u548c\u64cd\u4f5c\u7b26"),(0,o.kt)("br",{parentName:"p"}),"\n","\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://postgres.cn/docs/12/functions-string.html"},"9.4. \u5b57\u7b26\u4e32\u51fd\u6570\u548c\u64cd\u4f5c\u7b26"),"     "),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,o.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}d.isMDXComponent=!0}}]);