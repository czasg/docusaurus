"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5817],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||g[m]||o;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7909:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Go Http\u6a21\u5757\u5751\u70b9",authors:["czasg"],tags:["go"]},l=void 0,i={permalink:"/docusaurus/blog/2022/06/05/golanghttp\u6a21\u5757",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/06-05-golanghttp\u6a21\u5757/index.md",source:"@site/blog/2022/06-05-golanghttp\u6a21\u5757/index.md",title:"Go Http\u6a21\u5757\u5751\u70b9",description:"\u8bb0\u5f55\u539f\u751f\u5e93 net/http \u4e2d\u53ef\u80fd\u9047\u5230\u7684\u5751\u70b9\u3002",date:"2022-06-05T00:00:00.000Z",formattedDate:"June 5, 2022",tags:[{label:"go",permalink:"/docusaurus/blog/tags/go"}],readingTime:.46,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"Go Http\u6a21\u5757\u5751\u70b9",authors:["czasg"],tags:["go"]},prevItem:{title:"PostgreSQL vs MySQL",permalink:"/docusaurus/blog/2022/06/07/pgvsmysql"},nextItem:{title:"golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9",permalink:"/docusaurus/blog/2022/05/31/golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9"}},p={authorsImageUrls:[void 0]},c=[{value:"\u9ed8\u8ba4 HttpClient \u672a\u914d\u7f6e\u8d85\u65f6",id:"\u9ed8\u8ba4-httpclient-\u672a\u914d\u7f6e\u8d85\u65f6",level:2}],u={toc:c},s="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8bb0\u5f55\u539f\u751f\u5e93 ",(0,a.kt)("inlineCode",{parentName:"p"},"net/http")," \u4e2d\u53ef\u80fd\u9047\u5230\u7684\u5751\u70b9\u3002"),(0,a.kt)("h2",{id:"\u9ed8\u8ba4-httpclient-\u672a\u914d\u7f6e\u8d85\u65f6"},"\u9ed8\u8ba4 HttpClient \u672a\u914d\u7f6e\u8d85\u65f6"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"http.DefaultClient")," \u4e0d\u5305\u542b\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002\u5728\u67d0\u4e9b\u573a\u666f\u4f1a\u9020\u6210\u7a0b\u5e8f\u5f02\u5e38\u963b\u585e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="\u589e\u52a0\u8d85\u65f6\u65f6\u95f4"',title:'"\u589e\u52a0\u8d85\u65f6\u65f6\u95f4"'},"client := &http.Client{\n    Timeout: 60 * time.Second,\n}\n")),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"\ud83d\udc47\ud83d\udc47\ud83d\udc47",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d")))}g.isMDXComponent=!0}}]);