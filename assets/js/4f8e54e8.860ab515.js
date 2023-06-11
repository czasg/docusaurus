"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5103],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"defer\u5751\u70b9\u6536\u5f55",authors:["czasg"],tags:["golang"]},l=void 0,u={permalink:"/docusaurus/blog/2023/03/21/defer\u4e09\u89c4\u4e09\u8fd4",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2023/03-21-defer\u4e09\u89c4\u4e09\u8fd4/index.md",source:"@site/blog/2023/03-21-defer\u4e09\u89c4\u4e09\u8fd4/index.md",title:"defer\u5751\u70b9\u6536\u5f55",description:"Go defer \u53f2\u8bd7\u7ea7\u5751\u70b9\u6574\u7406\uff01",date:"2023-03-21T00:00:00.000Z",formattedDate:"March 21, 2023",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"}],readingTime:1.37,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"defer\u5751\u70b9\u6536\u5f55",authors:["czasg"],tags:["golang"]},prevItem:{title:"\u540e\u7aef\u6280\u672f\u6846\u67b6\u63a2\u7d22\u4e0e\u5b9e\u8df5",permalink:"/docusaurus/blog/2023/06/09/\u540e\u7aef\u6280\u672f\u6846\u67b6\u63a2\u7d22\u4e0e\u5b9e\u8df5"},nextItem:{title:"\u7ba1\u7406\u8005\u5982\u4f55\u8bc4\u4ef7\u5f85\u8f6c\u6b63\u5458\u5de5",permalink:"/docusaurus/blog/2023/03/12/\u7ba1\u7406\u8005\u5982\u4f55\u8bc4\u4ef7\u5f85\u8f6c\u6b63\u5458\u5de5"}},i={authorsImageUrls:[void 0]},c=[{value:"\u5165\u53c2\u662f\u786e\u5b9a\u7684",id:"\u5165\u53c2\u662f\u786e\u5b9a\u7684",level:3},{value:"\u540e\u8fd1\u5148\u5904",id:"\u540e\u8fd1\u5148\u5904",level:3},{value:"\u53ef\u64cd\u4f5c\u5177\u540d\u53c2\u6570\u8fd4\u56de",id:"\u53ef\u64cd\u4f5c\u5177\u540d\u53c2\u6570\u8fd4\u56de",level:3},{value:"\u4e0d\u53ef\u64cd\u4f5c\u975e\u5177\u540d\u8fd4\u56de",id:"\u4e0d\u53ef\u64cd\u4f5c\u975e\u5177\u540d\u8fd4\u56de",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Go defer \u53f2\u8bd7\u7ea7\u5751\u70b9\u6574\u7406\uff01"),(0,a.kt)("h3",{id:"\u5165\u53c2\u662f\u786e\u5b9a\u7684"},"\u5165\u53c2\u662f\u786e\u5b9a\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func demo() {\n    i := 1\n    defer fmt.Println(i) // \u8f93\u51fa1\n    i++\n    return i\n}\n")),(0,a.kt)("p",null,"\u5165\u53c2\u5728 defer \u51fa\u73b0\u65f6\u523b\u5df2\u7ecf\u786e\u5b9a\uff0c\u56e0\u4e3a\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"defer fmt.Println(i)")," \u65f6\u5df2\u7ecf\u751f\u6210\u4e34\u65f6\u53d8\u91cf\u62f7\u8d1d\u4e86\u4e00\u4efd\u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"\u540e\u8fd1\u5148\u5904"},"\u540e\u8fd1\u5148\u5904"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u901a\u5e38\u6ca1\u6709\u95ee\u9898\uff0c\u5373\u540e\u9762\u5b9a\u4e49\u7684 defer \u4f1a\u5148\u6267\u884c\uff0c\u5f88\u597d\u7406\u89e3\u3002"),(0,a.kt)("h3",{id:"\u53ef\u64cd\u4f5c\u5177\u540d\u53c2\u6570\u8fd4\u56de"},"\u53ef\u64cd\u4f5c\u5177\u540d\u53c2\u6570\u8fd4\u56de"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func demo() (result int) {\n    i := 1\n    defer func() {\n        result++ // demo\u51fd\u6570\u8fd4\u56de\u503c\u4e3a2\n    }\n    return i\n}\n")),(0,a.kt)("p",null,"\u6b64\u5904\u51fd\u6570 return \u5b9e\u9645\u53ef\u4ee5\u62c6\u89e3\u4e3a\u4e24\u6b65\uff0c\u5373\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"result = i\nreturn\n")),(0,a.kt)("p",null,"\u6545 defer \u4f1a\u4fee\u6539\u6b64\u5904\u5b9e\u9645\u8fd4\u56de\u503c\u3002"),(0,a.kt)("h3",{id:"\u4e0d\u53ef\u64cd\u4f5c\u975e\u5177\u540d\u8fd4\u56de"},"\u4e0d\u53ef\u64cd\u4f5c\u975e\u5177\u540d\u8fd4\u56de"),(0,a.kt)("p",null,"\u540c\u6837\u7684\u51fd\u6570\u6211\u4eec\u4f5c\u4e0b\u9002\u5f53\u7684\u8c03\u6574"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func demo() int {\n    i := 1\n    defer func() {\n        i++ // demo\u51fd\u6570\u8fd4\u56de\u503c\u4e3a1\n    }\n    return i\n}\n")),(0,a.kt)("p",null,"\u5728\u6267\u884c return \u7684\u65f6\u5019\uff0c\u5df2\u7ecf\u751f\u6210\u4e34\u65f6\u53d8\u91cf\u5b58\u50a8\u8fd4\u56de\u503c\uff0c\u6545\u5ef6\u8fdf\u51fd\u6570 defer \u65e0\u6cd5\u5bf9\u8fd4\u56de\u503c\u505a\u51fa\u4fee\u6539\u3002"),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"\ud83d\udc47\ud83d\udc47\ud83d\udc47",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,a.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d")))}d.isMDXComponent=!0}}]);