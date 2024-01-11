"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),v=i,f=d["".concat(o,".").concat(v)]||d[v]||s[v]||c;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,l=new Array(c);l[0]=v;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},4634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const c={title:"TCP"},l=void 0,a={unversionedId:"question-bank/net/tcp/index",id:"question-bank/net/tcp/index",title:"TCP",description:"\u4ec0\u4e48\u662fTCP",source:"@site/docs/office/question-bank/net/tcp/index.md",sourceDirName:"question-bank/net/tcp",slug:"/question-bank/net/tcp/",permalink:"/docusaurus/docs/office/question-bank/net/tcp/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/net/tcp/index.md",tags:[],version:"current",frontMatter:{title:"TCP"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc",permalink:"/docusaurus/docs/office/question-bank/net/"},next:{title:"\u62db\u8058\u6307\u5357",permalink:"/docusaurus/docs/office/recruit-guide/"}},o={},u=[{value:"\u4ec0\u4e48\u662fTCP",id:"\u4ec0\u4e48\u662ftcp",level:3},{value:"TCP\u4e09\u6b21\u63e1\u624b",id:"tcp\u4e09\u6b21\u63e1\u624b",level:3},{value:"TCP\u56db\u6b21\u6325\u624b",id:"tcp\u56db\u6b21\u6325\u624b",level:3},{value:"\u8bf7\u5206\u522b\u4ecb\u7ecd\u6bcf\u6b21\u63e1\u624b\u6216\u6325\u624b\u4e22\u5931\u7684\u573a\u666f",id:"\u8bf7\u5206\u522b\u4ecb\u7ecd\u6bcf\u6b21\u63e1\u624b\u6216\u6325\u624b\u4e22\u5931\u7684\u573a\u666f",level:3},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981TCP",id:"\u4e3a\u4ec0\u4e48\u9700\u8981tcp",level:3},{value:"TCP\u62a5\u6587\u7531\u4ec0\u4e48\u7ec4\u6210",id:"tcp\u62a5\u6587\u7531\u4ec0\u4e48\u7ec4\u6210",level:3},{value:"\u4ec0\u4e48\u662fMTU\u548cMSS",id:"\u4ec0\u4e48\u662fmtu\u548cmss",level:3},{value:"\u4ec0\u4e48\u662fSYN\u653b\u51fb",id:"\u4ec0\u4e48\u662fsyn\u653b\u51fb",level:3},{value:"\u4e22\u5305\u662f\u600e\u4e48\u4ea7\u751f\u7684",id:"\u4e22\u5305\u662f\u600e\u4e48\u4ea7\u751f\u7684",level:3},{value:"\u4e3a\u4ec0\u4e48\u4f1a\u6709TIME_WAIT\u72b6\u6001",id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709time_wait\u72b6\u6001",level:3},{value:"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684TIME_WAIT",id:"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684time_wait",level:3},{value:"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684CLOSE_WAIT",id:"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684close_wait",level:3},{value:"\u6ca1\u6709Accept\u662f\u5426\u80fd\u5efa\u7acbTCP\u8fde\u63a5",id:"\u6ca1\u6709accept\u662f\u5426\u80fd\u5efa\u7acbtcp\u8fde\u63a5",level:3},{value:"\u6ca1\u6709Listen\u662f\u5426\u80fd\u5efa\u7acbTCP\u8fde\u63a5",id:"\u6ca1\u6709listen\u662f\u5426\u80fd\u5efa\u7acbtcp\u8fde\u63a5",level:3},{value:"TCP\u5982\u4f55\u4fdd\u8bc1\u53ef\u9760\u4f20\u8f93",id:"tcp\u5982\u4f55\u4fdd\u8bc1\u53ef\u9760\u4f20\u8f93",level:3},{value:"\u4ec0\u4e48\u662f\u6ed1\u52a8\u7a97\u53e3",id:"\u4ec0\u4e48\u662f\u6ed1\u52a8\u7a97\u53e3",level:3},{value:"\u4ec0\u4e48\u662f\u6d41\u91cf\u63a7\u5236",id:"\u4ec0\u4e48\u662f\u6d41\u91cf\u63a7\u5236",level:3},{value:"\u4ec0\u4e48\u662f\u62e5\u585e\u63a7\u5236",id:"\u4ec0\u4e48\u662f\u62e5\u585e\u63a7\u5236",level:3},{value:"\u4e3a\u4ec0\u4e48\u8bf4TCP\u662f\u6162\u542f\u52a8",id:"\u4e3a\u4ec0\u4e48\u8bf4tcp\u662f\u6162\u542f\u52a8",level:3}],p={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662ftcp"},"\u4ec0\u4e48\u662fTCP"),(0,i.kt)("h3",{id:"tcp\u4e09\u6b21\u63e1\u624b"},"TCP\u4e09\u6b21\u63e1\u624b"),(0,i.kt)("h3",{id:"tcp\u56db\u6b21\u6325\u624b"},"TCP\u56db\u6b21\u6325\u624b"),(0,i.kt)("h3",{id:"\u8bf7\u5206\u522b\u4ecb\u7ecd\u6bcf\u6b21\u63e1\u624b\u6216\u6325\u624b\u4e22\u5931\u7684\u573a\u666f"},"\u8bf7\u5206\u522b\u4ecb\u7ecd\u6bcf\u6b21\u63e1\u624b\u6216\u6325\u624b\u4e22\u5931\u7684\u573a\u666f"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981tcp"},"\u4e3a\u4ec0\u4e48\u9700\u8981TCP"),(0,i.kt)("h3",{id:"tcp\u62a5\u6587\u7531\u4ec0\u4e48\u7ec4\u6210"},"TCP\u62a5\u6587\u7531\u4ec0\u4e48\u7ec4\u6210"),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662fmtu\u548cmss"},"\u4ec0\u4e48\u662fMTU\u548cMSS"),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662fsyn\u653b\u51fb"},"\u4ec0\u4e48\u662fSYN\u653b\u51fb"),(0,i.kt)("h3",{id:"\u4e22\u5305\u662f\u600e\u4e48\u4ea7\u751f\u7684"},"\u4e22\u5305\u662f\u600e\u4e48\u4ea7\u751f\u7684"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709time_wait\u72b6\u6001"},"\u4e3a\u4ec0\u4e48\u4f1a\u6709TIME_WAIT\u72b6\u6001"),(0,i.kt)("h3",{id:"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684time_wait"},"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684TIME_WAIT"),(0,i.kt)("h3",{id:"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684close_wait"},"\u8bf7\u5206\u6790\u4e0b\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u7684CLOSE_WAIT"),(0,i.kt)("h3",{id:"\u6ca1\u6709accept\u662f\u5426\u80fd\u5efa\u7acbtcp\u8fde\u63a5"},"\u6ca1\u6709Accept\u662f\u5426\u80fd\u5efa\u7acbTCP\u8fde\u63a5"),(0,i.kt)("h3",{id:"\u6ca1\u6709listen\u662f\u5426\u80fd\u5efa\u7acbtcp\u8fde\u63a5"},"\u6ca1\u6709Listen\u662f\u5426\u80fd\u5efa\u7acbTCP\u8fde\u63a5"),(0,i.kt)("h3",{id:"tcp\u5982\u4f55\u4fdd\u8bc1\u53ef\u9760\u4f20\u8f93"},"TCP\u5982\u4f55\u4fdd\u8bc1\u53ef\u9760\u4f20\u8f93"),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662f\u6ed1\u52a8\u7a97\u53e3"},"\u4ec0\u4e48\u662f\u6ed1\u52a8\u7a97\u53e3"),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662f\u6d41\u91cf\u63a7\u5236"},"\u4ec0\u4e48\u662f\u6d41\u91cf\u63a7\u5236"),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662f\u62e5\u585e\u63a7\u5236"},"\u4ec0\u4e48\u662f\u62e5\u585e\u63a7\u5236"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8bf4tcp\u662f\u6162\u542f\u52a8"},"\u4e3a\u4ec0\u4e48\u8bf4TCP\u662f\u6162\u542f\u52a8"))}s.isMDXComponent=!0}}]);