"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3447],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u8bb0\u4e00\u6b21 redis \u67e5\u8be2 \u5f02\u5e38",authors:["czasg"],tags:["redis"]},i=void 0,s={permalink:"/docusaurus/blog/2022/04/01/\u8bb0\u4e00\u6b21redis\u67e5\u8be2\u5f02\u5e38",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/04-01-\u8bb0\u4e00\u6b21redis\u67e5\u8be2\u5f02\u5e38/index.md",source:"@site/blog/2022/04-01-\u8bb0\u4e00\u6b21redis\u67e5\u8be2\u5f02\u5e38/index.md",title:"\u8bb0\u4e00\u6b21 redis \u67e5\u8be2 \u5f02\u5e38",description:"\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u8be1\u5f02\u7684\u4e8b\u60c5\uff0c\u6709\u4e00\u4e2a\u57fa\u4e8e redis \u63d0\u4f9b\u9ad8\u6027\u80fd\u67e5\u8be2\u7684\u670d\u52a1\uff0c\u5728\u975e\u9ad8\u5cf0\u671f\u65f6\u5c45\u7136\u5927\u91cf\u62a5\u9519\u3002",date:"2022-04-01T00:00:00.000Z",formattedDate:"April 1, 2022",tags:[{label:"redis",permalink:"/docusaurus/blog/tags/redis"}],readingTime:5.71,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"\u8bb0\u4e00\u6b21 redis \u67e5\u8be2 \u5f02\u5e38",authors:["czasg"],tags:["redis"]},prevItem:{title:"redis\u6307\u6807\u5c0f\u7ed3",permalink:"/docusaurus/blog/2022/04/02/redis\u6307\u6807\u5c0f\u7ed3"},nextItem:{title:"golang \u9009\u9879\u6a21\u5f0f",permalink:"/docusaurus/blog/2022/03/28/golang\u9009\u9879\u6a21\u5f0f"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u8be1\u5f02\u7684\u4e8b\u60c5\uff0c\u6709\u4e00\u4e2a\u57fa\u4e8e redis \u63d0\u4f9b\u9ad8\u6027\u80fd\u67e5\u8be2\u7684\u670d\u52a1\uff0c\u5728\u975e\u9ad8\u5cf0\u671f\u65f6\u5c45\u7136\u5927\u91cf\u62a5\u9519\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e3a\u4ec0\u4e48\u8bf4\u8be1\u5f02\u5462\uff0c\u56e0\u4e3a\u62a5\u9519\u5185\u5bb9\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"redis: connection pool timeout"),"\u3002\u800c\u8fd9\u4e2a\u670d\u52a1\u7684\u67e5\u8be2\u573a\u666f\u53ca\u5176\u7b80\u5355\uff0c\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"mget")," \u4e24\u79cd\uff0c\u62a5\u8fd9\u4e2a\u9519\u5c31\u610f\u5473\u7740 redis \u67e5\u8be2\u6027\u80fd\u4e0d\u8db3\uff1f",(0,a.kt)("br",{parentName:"p"}),"\n","\u672c\u6587\u8bb0\u5f55\u4e00\u4e0b\u6392\u67e5\u95ee\u9898\u7684\u8fc7\u7a0b\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:r(2625).Z,width:"1273",height:"341"})))}d.isMDXComponent=!0},2625:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1.1-4bc31816ef539655bfe098ea5f783376.png"}}]);