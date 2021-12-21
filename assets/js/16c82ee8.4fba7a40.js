"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1840],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,u[1]=a;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7875:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),u=["components"],a={title:"Linux \u5e38\u7528\u6307\u4ee4",tags:[]},o=void 0,c={unversionedId:"linux/linux\u5e38\u7528\u6307\u4ee4",id:"linux/linux\u5e38\u7528\u6307\u4ee4",isDocsHomePage:!1,title:"Linux \u5e38\u7528\u6307\u4ee4",description:"\u5e2e\u52a9\u6307\u4ee4",source:"@site/docs-note/linux/1.linux\u5e38\u7528\u6307\u4ee4.md",sourceDirName:"linux",slug:"/linux/linux\u5e38\u7528\u6307\u4ee4",permalink:"/docusaurus/note/linux/linux\u5e38\u7528\u6307\u4ee4",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Linux \u5e38\u7528\u6307\u4ee4",tags:[]},sidebar:"tutorialSidebar",previous:{title:"Service",permalink:"/docusaurus/note/k8s/service"},next:{title:"linux-namespace",permalink:"/docusaurus/note/linux/linux-namespace"}},s=[{value:"\u5e2e\u52a9\u6307\u4ee4",id:"\u5e2e\u52a9\u6307\u4ee4",children:[],level:2},{value:"\u7528\u6237",id:"\u7528\u6237",children:[],level:2},{value:"\u6587\u4ef6",id:"\u6587\u4ef6",children:[],level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[],level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[],level:2},{value:"\u8fdb\u7a0b\u7ba1\u7406",id:"\u8fdb\u7a0b\u7ba1\u7406",children:[],level:2},{value:"\u7f51\u7edc\u64cd\u4f5c",id:"\u7f51\u7edc\u64cd\u4f5c",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5e2e\u52a9\u6307\u4ee4"},"\u5e2e\u52a9\u6307\u4ee4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="man \u83b7\u53d6\u5e2e\u52a9"',script:!0,title:'"man','\u83b7\u53d6\u5e2e\u52a9"':!0},">>> man ls\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="-h \u83b7\u53d6\u5e2e\u52a9"',script:!0,title:'"-h','\u83b7\u53d6\u5e2e\u52a9"':!0},">>> ls -l\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="whereis \u67e5\u770b\u7a0b\u5e8f\u7684\u641c\u7d22\u8def\u5f84"',script:!0,title:'"whereis','\u67e5\u770b\u7a0b\u5e8f\u7684\u641c\u7d22\u8def\u5f84"':!0},">>> whereis ls\n")),(0,i.kt)("p",null,"linux \u4e00\u5207\u7686\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u5e38\u7528\u64cd\u4f5c\u6307\u4ee4\u3002\u5e76\u5c06\u5176\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,i.kt)("h2",{id:"\u7528\u6237"},"\u7528\u6237"),(0,i.kt)("p",null,"adduser"),(0,i.kt)("p",null,"sshkey-gen"),(0,i.kt)("h2",{id:"\u6587\u4ef6"},"\u6587\u4ef6"),(0,i.kt)("p",null,"chmod"),(0,i.kt)("p",null,"ln"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"find - \u67e5\u627e\u6587\u4ef6"),(0,i.kt)("div",null,(0,i.kt)("code",null,"find")," \u67e5\u627e\u6587\u4ef6\u662f\u5426\u5b58\u5728")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"wc - \u7edf\u8ba1\u6587\u4ef6\u6570\u91cf"),(0,i.kt)("div",null,(0,i.kt)("code",null,"find | wc")," \u7edf\u8ba1\u5f53\u524d\u6587\u4ef6\u4e0b\u7684\u6570\u91cf")),(0,i.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,i.kt)("p",null,"nohup"),(0,i.kt)("p",null,"crontab"),(0,i.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,i.kt)("h2",{id:"\u8fdb\u7a0b\u7ba1\u7406"},"\u8fdb\u7a0b\u7ba1\u7406"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"top - \u67e5\u770b\u7cfb\u7edf\u8d44\u6e90"),(0,i.kt)("div",null,(0,i.kt)("code",null,"top")," \u67e5\u627e\u6587\u4ef6\u662f\u5426\u5b58\u5728")),(0,i.kt)("p",null,"kill -9"),(0,i.kt)("h2",{id:"\u7f51\u7edc\u64cd\u4f5c"},"\u7f51\u7edc\u64cd\u4f5c"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"nslookup \u67e5\u770b DNS \u89e3\u6790"),(0,i.kt)("div",null,"nslookup host \u7edf\u8ba1\u5f53\u524d\u6587\u4ef6\u4e0b\u7684\u6570\u91cf")))}d.isMDXComponent=!0}}]);