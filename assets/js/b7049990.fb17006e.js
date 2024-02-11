"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7026],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=l(n),s=o,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(f,a(a({ref:e},u),{},{components:n})):r.createElement(f,a({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[d]="string"==typeof t?t:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95107:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"HTTP"},a=void 0,p={unversionedId:"question-bank/net/http/index",id:"question-bank/net/http/index",title:"HTTP",description:"HTTP \u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff0c\u5b83\u62e5\u6709\u7b80\u5355\u3001\u6613\u62d3\u5c55\u3001\u8de8\u5e73\u53f0\u7b49\u7279\u70b9\uff0c\u662f\u76ee\u524d\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u534f\u8bae\u4e4b\u4e00\uff0c\u5305\u62ec\u79fb\u52a8\u7aef\u3001\u684c\u9762\u7aef\u7b49\u3002",source:"@site/docs/office/question-bank/net/http/index.md",sourceDirName:"question-bank/net/http",slug:"/question-bank/net/http/",permalink:"/docusaurus/docs/office/question-bank/net/http/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/net/http/index.md",tags:[],version:"current",frontMatter:{title:"HTTP"},sidebar:"tutorialSidebar",previous:{title:"gRPC",permalink:"/docusaurus/docs/office/question-bank/net/grpc/"},next:{title:"HTTP1",permalink:"/docusaurus/docs/office/question-bank/net/http/http1/"}},c={},l=[],u={toc:l},d="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[\u4ec0\u4e48\u662fhttp]")),(0,o.kt)("p",null,"HTTP \u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff0c\u5b83\u62e5\u6709\u7b80\u5355\u3001\u6613\u62d3\u5c55\u3001\u8de8\u5e73\u53f0\u7b49\u7279\u70b9\uff0c\u662f\u76ee\u524d\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u534f\u8bae\u4e4b\u4e00\uff0c\u5305\u62ec\u79fb\u52a8\u7aef\u3001\u684c\u9762\u7aef\u7b49\u3002"),(0,o.kt)("p",null,"\u5176\u4e2d\u8d85\u6587\u672c\u6307\u7c7b\u4f3c html\u3001xml \u4e4b\u7c7b\u7684\u6587\u672c\u5185\u5bb9\u3002\u6211\u4eec HTTP \u62a5\u6587\u5206\u4e3a\u8bf7\u6c42\u62a5\u6587\u548c\u54cd\u5e94\u62a5\u6587\u3002"),(0,o.kt)("p",null,"\u5148\u4ecb\u7ecd\u4e0b\u8bf7\u6c42\u62a5\u6587\u3002"),(0,o.kt)("p",null,"HTTP \u8bf7\u6c42\u6587\u672c\u5185\u5bb9\u7531\u8bf7\u6c42\u62a5\u6587\u884c\u3001\u8bf7\u6c42\u62a5\u6587\u5934\u3001\u8bf7\u6c42\u6570\u636e\u4f53\u4e09\u90e8\u5206\u7ec4\u6210\u3002"),(0,o.kt)("p",null,"\u8bf7\u6c42\u62a5\u6587\u9996\u884c\u7531\u8bf7\u6c42\u65b9\u6cd5\u3001\u8bf7\u6c42\u8def\u5f84\u3001\u534f\u8bae\u7248\u672c\u7ec4\u6210\u3002\u4e00\u4e2a\u5e38\u89c1\u7684\u62a5\u6587\u884c\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"GET / HTTP/1.1"),"\u3002"),(0,o.kt)("p",null,"\u5e38\u89c1\u7684\u8bf7\u6c42\u65b9\u6cd5\u6709 GET\u3001POST\u3001PUT\u3001DELETE \u7b49\u3002\u534f\u8bae\u76ee\u524d\u9ed8\u8ba4\u90fd\u662f1.1\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[GET\u3001POST\u6709\u4ec0\u4e48\u533a\u522b]")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[HTTP/1.1\u76f8\u6bd41.0\u6709\u4ec0\u4e48\u4f18\u52bf]")),(0,o.kt)("p",null,"\u8bf7\u6c42\u62a5\u6587\u5934\u5219\u7c7b\u4f3c KV \u7ed3\u6784\uff0c\u4e00\u4e2a\u5e38\u89c1\u7684\u62a5\u6587\u884c\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type: text/plain"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5e38\u8bf4\u7684 HTTP \u9ad8\u53ef\u6269\u5c55\u6027\uff0c\u4e3b\u8981\u4e5f\u662f\u56e0\u4e3a\u62a5\u6587\u5934\u7684\u9ad8\u81ea\u7531\u5ea6\u5e26\u6765\u7684\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[HTTP\u5982\u4f55\u83b7\u53d6\u771f\u5b9eIP]"),(0,o.kt)("p",{parentName:"admonition"},"X-Forward-For")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[HTTP\u5982\u4f55\u5b9e\u73b0\u7f13\u5b58]"),(0,o.kt)("p",{parentName:"admonition"},"Expire\u3001Cache-Control",(0,o.kt)("br",{parentName:"p"}),"\n","Etag\u3001If-None-Match",(0,o.kt)("br",{parentName:"p"}),"\n","Last-Modified\u3001If-Modified-Since")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[HTTP\u5982\u4f55\u5b9e\u73b0\u957f\u8fde\u63a5\u4e0e\u8fde\u63a5\u65ad\u8fde]"),(0,o.kt)("p",{parentName:"admonition"},"Connection")),(0,o.kt)("p",null,"\u7136\u540e\u662f\u54cd\u5e94\u62a5\u6587\u3002"))}m.isMDXComponent=!0}}]);