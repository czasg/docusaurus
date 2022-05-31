"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7334],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,c(c({ref:e},p),{},{components:n})):r.createElement(f,c({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4564:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],l={title:"tcmalloc\u7406\u89e3",authors:["czasg"],tags:["\u8ba1\u7b97\u673a\u57fa\u7840"]},i=void 0,u={permalink:"/docusaurus/blog/2022/04/5/tcmalloc\u7406\u89e3",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/04-5-tcmalloc\u7406\u89e3/index.md",source:"@site/blog/2022/04-5-tcmalloc\u7406\u89e3/index.md",title:"tcmalloc\u7406\u89e3",description:"tcmalloc\uff08Thread-Caching Malloc\uff09\u662f\u4e00\u4e2a\u5185\u5b58\u5206\u914d\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5806\u5185\u5b58\u3002",date:"2022-04-05T00:00:00.000Z",formattedDate:"April 5, 2022",tags:[{label:"\u8ba1\u7b97\u673a\u57fa\u7840",permalink:"/docusaurus/blog/tags/\u8ba1\u7b97\u673a\u57fa\u7840"}],readingTime:.99,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9",permalink:"/docusaurus/blog/2022/05/31/golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9"},nextItem:{title:"redis\u6307\u6807\u5c0f\u7ed3",permalink:"/docusaurus/blog/2022/04/02/redis\u6307\u6807\u5c0f\u7ed3"}},p={authorsImageUrls:[void 0]},m=[{value:"ptmalloc &amp; tcmalloc",id:"ptmalloc--tcmalloc",children:[],level:2}],s={toc:m};function d(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tcmalloc\uff08Thread-Caching Malloc\uff09\u662f\u4e00\u4e2a\u5185\u5b58\u5206\u914d\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5806\u5185\u5b58\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e3b\u8981\u5f71\u54cd\u7684\u662fmalloc\u548cfree\uff0c\u7528\u4e8e\u964d\u4f4e\u9891\u7e41\u5206\u914d\u3001\u91ca\u653e\u5185\u5b58\u573a\u666f\u6240\u9020\u6210\u7684\u6027\u80fd\u635f\u8017\uff0c\u53ef\u4ee5\u6709\u6548\u7684\u63a7\u5236\u5185\u5b58\u788e\u7247\u3002"),(0,o.kt)("h2",{id:"ptmalloc--tcmalloc"},"ptmalloc & tcmalloc"),(0,o.kt)("p",null,"\u5728tcmalloc\u4e4b\u524d\uff0c\u8fd8\u6709\u4e00\u4e2aptmalloc\uff0ctcmalloc\u53f7\u79f0\u8981\u6bd4\u5b83\u5feb\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e00\u6b21malloc\u548cfree\u64cd\u4f5c\uff0cptmalloc\u9700\u8981300ns\uff0c\u800ctcmalloc\u53ea\u9700\u898150ns\u3002   "),(0,o.kt)("p",null,"tcmalloc\u5c06\u5185\u5b58\u8bf7\u6c42\u5206\u4e3a\u4e86\u4e24\u7c7b\uff1a\u5927\u5bf9\u8c61\u8bf7\u6c42\u548c\u5c0f\u5bf9\u8c61\u8bf7\u6c42\u3002\uff08\u5927\u4e8e32K\u7684\u5c5e\u4e8e\u5927\u5bf9\u8c61\uff09",(0,o.kt)("br",{parentName:"p"}),"\n","\u5b83\u4f1a\u4e3a\u6bcf\u4e2a\u7ebf\u7a0b\u5206\u914d\u672c\u5730\u7f13\u5b58\uff0c\u5c0f\u5bf9\u8c61\u8bf7\u6c42\u53ef\u4ee5\u76f4\u63a5\u4ece\u672c\u5730\u7f13\u5b58\u83b7\u53d6\uff0c\u6240\u4ee5\u5bf9\u4e8e\u5c0f\u5bf9\u8c61\u7684\u5206\u914d\u57fa\u672c\u4e0d\u5b58\u5728\u9501\u7ade\u4e89\u3002"),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,o.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}d.isMDXComponent=!0}}]);