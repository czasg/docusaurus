"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1110],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),f=o,m=g["".concat(c,".").concat(f)]||g[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"golang"},c=void 0,u={unversionedId:"\u90e8\u7f72/golang",id:"\u90e8\u7f72/golang",isDocsHomePage:!1,title:"golang",description:"linux \u4e0b\u5b89\u88c5",source:"@site/docs-note/\u90e8\u7f72/golang.md",sourceDirName:"\u90e8\u7f72",slug:"/\u90e8\u7f72/golang",permalink:"/docusaurus/note/\u90e8\u7f72/golang",tags:[],version:"current",frontMatter:{title:"golang"},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u6cd5-\u6392\u5e8f-\u9009\u62e9\u6392\u5e8f",permalink:"/docusaurus/note/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5-\u6392\u5e8f-\u9009\u62e9\u6392\u5e8f"},next:{title:"nginx",permalink:"/docusaurus/note/\u90e8\u7f72/nginx"}},p=[{value:"linux \u4e0b\u5b89\u88c5",id:"linux-\u4e0b\u5b89\u88c5",children:[],level:2}],s={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linux-\u4e0b\u5b89\u88c5"},"linux \u4e0b\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u4e0b\u8f7d\u6307\u5b9a\u7248\u672c\u7684go\u538b\u7f29\u5305\uff0c\u89e3\u538b\u5e76\u8fc1\u79fb\u81f3\u6307\u5b9a\u76ee\u5f55"',script:!0,title:'"\u4e0b\u8f7d\u6307\u5b9a\u7248\u672c\u7684go\u538b\u7f29\u5305\uff0c\u89e3\u538b\u5e76\u8fc1\u79fb\u81f3\u6307\u5b9a\u76ee\u5f55"'},"wget https://studygolang.com/dl/golang/go1.13.1.linux-amd64.tar.gz\n\ntar -zxvf go1.13.1.linux-amd64.tar.gz\n\nmv go/ /usr/local/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u914d\u7f6e\u73af\u5883\u53d8\u91cf"',script:!0,title:'"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"'},"vi /etc/profile\n\nexport GOROOT=/usr/local/go\nexport PATH=$PATH:$GOROOT/bin\n\nsource /etc/profile\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u67e5\u770bgo\u7248\u672c"',script:!0,title:'"\u67e5\u770bgo\u7248\u672c"'},"go version\n")))}g.isMDXComponent=!0}}]);