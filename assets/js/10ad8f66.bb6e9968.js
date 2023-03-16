"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"\u7591\u96be\u6742\u75c7/k8s",id:"\u7591\u96be\u6742\u75c7/k8s",title:"k8s",description:"ingress \u5982\u4f55\u9650\u5236\u8bf7\u6c42\u5927\u5c0f\uff1f",source:"@site/docs-note/\u7591\u96be\u6742\u75c7/k8s.md",sourceDirName:"\u7591\u96be\u6742\u75c7",slug:"/\u7591\u96be\u6742\u75c7/k8s",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/k8s",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"golang",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/golang"},next:{title:"mysql",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/mysql"}},u={},c=[{value:"ingress \u5982\u4f55\u9650\u5236\u8bf7\u6c42\u5927\u5c0f\uff1f",id:"ingress-\u5982\u4f55\u9650\u5236\u8bf7\u6c42\u5927\u5c0f",level:2}],l={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ingress-\u5982\u4f55\u9650\u5236\u8bf7\u6c42\u5927\u5c0f"},"ingress \u5982\u4f55\u9650\u5236\u8bf7\u6c42\u5927\u5c0f\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="\u5728\u6ce8\u89e3\u4e2d\u914d\u7f6e\u8bf7\u6c42\u5927\u5c0f"',title:'"\u5728\u6ce8\u89e3\u4e2d\u914d\u7f6e\u8bf7\u6c42\u5927\u5c0f"'},'apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: sonarqube\n  annotations:\n    nginx.ingress.kubernetes.io/proxy-body-size: "5M"\n    nginx.ingress.kubernetes.io/proxy-connect-timeout: "1200"\n    nginx.ingress.kubernetes.io/proxy-send-timeout: "1200"\n    nginx.ingress.kubernetes.io/proxy-read-timeout: "1200"\n')))}f.isMDXComponent=!0}}]);