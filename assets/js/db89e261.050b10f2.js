"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),g=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=g(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=g(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(d,l(l({ref:t},i),{},{components:r})):n.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:a,l[1]=u;for(var g=2;g<o;g++)l[g]=r[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>g});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u8bb0\u4e00\u6b21 golang \u5347\u7ea7\u5bfc\u81f4\u7684 goland \u4e0d\u53ef\u7528",authors:["czasg"],tags:["golang","bug"]},l=void 0,u={permalink:"/docusaurus/blog/2022/02/17/golang\u5347\u7ea7\u5bfc\u81f4goland\u4e0d\u53ef\u7528",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/02-17-golang\u5347\u7ea7\u5bfc\u81f4goland\u4e0d\u53ef\u7528/index.md",source:"@site/blog/2022/02-17-golang\u5347\u7ea7\u5bfc\u81f4goland\u4e0d\u53ef\u7528/index.md",title:"\u8bb0\u4e00\u6b21 golang \u5347\u7ea7\u5bfc\u81f4\u7684 goland \u4e0d\u53ef\u7528",description:"go1.14.1 \u5347\u7ea7\u81f3 go1.17.7\uff0c\u5bfc\u81f4 goland \u6253\u5f00\u540e\u663e\u793a\u65e0\u6cd5\u627e\u5230 GOROOT\u3002",date:"2022-02-17T00:00:00.000Z",formattedDate:"February 17, 2022",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"},{label:"bug",permalink:"/docusaurus/blog/tags/bug"}],readingTime:.655,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"\u8bb0\u4e00\u6b21 golang \u5347\u7ea7\u5bfc\u81f4\u7684 goland \u4e0d\u53ef\u7528",authors:["czasg"],tags:["golang","bug"]},prevItem:{title:"\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72",permalink:"/docusaurus/blog/2022/02/22/\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72"},nextItem:{title:"Jmeter\u53ca\u6027\u80fd\u6d4b\u8bd5",permalink:"/docusaurus/blog/2022/02/02/jmeter\u53ca\u6027\u80fd\u6d4b\u8bd5"}},c={authorsImageUrls:[void 0]},g=[],i={toc:g},s="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"go1.14.1 \u5347\u7ea7\u81f3 go1.17.7\uff0c\u5bfc\u81f4 goland \u6253\u5f00\u540e\u663e\u793a\u65e0\u6cd5\u627e\u5230 GOROOT\u3002"),(0,a.kt)("p",null,"\u9519\u8bef\u663e\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"The selected directory is not a valid home for Go SDK\n")))}p.isMDXComponent=!0}}]);