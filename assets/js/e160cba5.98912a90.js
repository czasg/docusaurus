"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||g[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u57fa\u4e8edocker\u642d\u5efagitlan-runner",authors:["czasg"],tags:["\u5176\u4ed6"]},i=void 0,l={permalink:"/docusaurus/blog/2022/06/17/\u57fa\u4e8edocker\u642d\u5efagitlan-runner",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/06-17-\u57fa\u4e8edocker\u642d\u5efagitlan-runner/index.md",source:"@site/blog/2022/06-17-\u57fa\u4e8edocker\u642d\u5efagitlan-runner/index.md",title:"\u57fa\u4e8edocker\u642d\u5efagitlan-runner",description:"gitlab-runner\u5b9e\u9645\u8fd0\u884c\u65f6\uff0c\u4f1a\u8fdc\u7a0b\u83b7\u53d6\u6211\u4eec\u7684\u4ee3\u7801\u4ed3\uff0c\u7136\u540e\u6267\u884c\u914d\u7f6e\u7684.gitlab-ci.yaml\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u548cjenkinsfile\u4e00\u4e2a\u6027\u8d28\uff0c\u91cc\u9762\u5b9a\u4e49\u4e86 CICD \u7684\u68c0\u6d4b\u6d41\u7a0b\u3002",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"\u5176\u4ed6",permalink:"/docusaurus/blog/tags/\u5176\u4ed6"}],readingTime:2.08,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"\u57fa\u4e8edocker\u642d\u5efagitlan-runner",authors:["czasg"],tags:["\u5176\u4ed6"]},prevItem:{title:"PEP8 \u89c4\u8303",permalink:"/docusaurus/blog/2022/06/20/pep8\u89c4\u8303"},nextItem:{title:"\u5982\u4f55\u7406\u89e3 OKR & KPI",permalink:"/docusaurus/blog/2022/06/09/\u5982\u4f55\u7406\u89e3OKRKPI"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gitlab-runner"),"\u5b9e\u9645\u8fd0\u884c\u65f6\uff0c\u4f1a\u8fdc\u7a0b\u83b7\u53d6\u6211\u4eec\u7684\u4ee3\u7801\u4ed3\uff0c\u7136\u540e\u6267\u884c\u914d\u7f6e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yaml"),"\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"jenkinsfile"),"\u4e00\u4e2a\u6027\u8d28\uff0c\u91cc\u9762\u5b9a\u4e49\u4e86 CICD \u7684\u68c0\u6d4b\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"gitlab-runner"),"\u548c\u6211\u4eec\u7684\u4ee3\u7801\u4ed3\u662f\u5b8c\u5168\u89e3\u8026\u7684\u3002\u662f\u53ef\u4ee5\u90e8\u7f72\u5728\u5176\u4ed6\u670d\u52a1\u5668\u4e0a\uff0c\u5e76\u4e14\u53ef\u4ee5\u90e8\u7f72\u591a\u4e2a\u7684\u3002"))}g.isMDXComponent=!0}}]);