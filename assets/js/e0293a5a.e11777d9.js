"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||g[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"golang"},l=void 0,i={unversionedId:"\u90e8\u7f72/golang",id:"\u90e8\u7f72/golang",title:"golang",description:"linux \u4e0b\u5b89\u88c5",source:"@site/docs-note/\u90e8\u7f72/golang.md",sourceDirName:"\u90e8\u7f72",slug:"/\u90e8\u7f72/golang",permalink:"/docusaurus/note/\u90e8\u7f72/golang",draft:!1,tags:[],version:"current",frontMatter:{title:"golang"},sidebar:"tutorialSidebar",previous:{title:"elk",permalink:"/docusaurus/note/\u90e8\u7f72/elk"},next:{title:"nginx",permalink:"/docusaurus/note/\u90e8\u7f72/nginx"}},c={},u=[{value:"linux \u4e0b\u5b89\u88c5",id:"linux-\u4e0b\u5b89\u88c5",level:2}],s={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"linux-\u4e0b\u5b89\u88c5"},"linux \u4e0b\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u4e0b\u8f7d\u6307\u5b9a\u7248\u672c\u7684go\u538b\u7f29\u5305\uff0c\u89e3\u538b\u5e76\u8fc1\u79fb\u81f3\u6307\u5b9a\u76ee\u5f55"',script:!0,title:'"\u4e0b\u8f7d\u6307\u5b9a\u7248\u672c\u7684go\u538b\u7f29\u5305\uff0c\u89e3\u538b\u5e76\u8fc1\u79fb\u81f3\u6307\u5b9a\u76ee\u5f55"'},"wget https://studygolang.com/dl/golang/go1.13.1.linux-amd64.tar.gz\n\ntar -zxvf go1.13.1.linux-amd64.tar.gz\n\nmv go/ /usr/local/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u914d\u7f6e\u73af\u5883\u53d8\u91cf"',script:!0,title:'"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"'},"vi /etc/profile\n\nexport GOROOT=/usr/local/go\nexport PATH=$PATH:$GOROOT/bin\n\nsource /etc/profile\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u67e5\u770bgo\u7248\u672c"',script:!0,title:'"\u67e5\u770bgo\u7248\u672c"'},"go version\n")))}g.isMDXComponent=!0}}]);