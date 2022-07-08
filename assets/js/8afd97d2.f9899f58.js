"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3685],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,u=s["".concat(l,".").concat(k)]||s[k]||d[k]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2123:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"k8s"},l=void 0,m={unversionedId:"k8s/k8s",id:"k8s/k8s",isDocsHomePage:!1,title:"k8s",description:"\u5728\u4e86\u89e3 k8s \u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u4e86\u89e3\u4e0b \u670d\u52a1\u90e8\u7f72 \u7684\u6f14\u8fdb\uff0c\u4e3b\u8981\u5305\u62ec\uff1a",source:"@site/docs-note/k8s/1.k8s.md",sourceDirName:"k8s",slug:"/k8s/k8s",permalink:"/docusaurus/note/k8s/k8s",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"k8s"},sidebar:"tutorialSidebar",previous:{title:"\u5168\u666f\u56fe",permalink:"/docusaurus/note/k8s/\u5168\u666f\u56fe"},next:{title:"Pod",permalink:"/docusaurus/note/k8s/pod"}},c=[{value:"\u4f20\u7edf\u90e8\u7f72",id:"\u4f20\u7edf\u90e8\u7f72",children:[],level:2},{value:"\u865a\u62df\u5316\u90e8\u7f72",id:"\u865a\u62df\u5316\u90e8\u7f72",children:[],level:2},{value:"\u5bb9\u5668\u5316\u90e8\u7f72",id:"\u5bb9\u5668\u5316\u90e8\u7f72",children:[],level:2},{value:"k8s \u7b80\u4ecb",id:"k8s-\u7b80\u4ecb",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u4e86\u89e3 k8s \u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u4e86\u89e3\u4e0b ",(0,i.kt)("strong",{parentName:"p"},"\u670d\u52a1\u90e8\u7f72")," \u7684\u6f14\u8fdb\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u90e8\u7f72"),(0,i.kt)("li",{parentName:"ul"},"\u865a\u62df\u5316\u90e8\u7f72"),(0,i.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u5316\u90e8\u7f72")),(0,i.kt)("h2",{id:"\u4f20\u7edf\u90e8\u7f72"},"\u4f20\u7edf\u90e8\u7f72"),(0,i.kt)("p",null,"\u4f20\u7edf\u90e8\u7f72\u5373\u76f4\u63a5\u5c06\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u5728\u670d\u52a1\u5668\u4e0a\uff0c\u901a\u8fc7\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},"nohup")," \u7684\u65b9\u5f0f\u8fd0\u884c\u5728\u540e\u53f0\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u6574\u4f53\u6765\u770b\u662f\u6bd4\u8f83\u7b80\u5355\u7684\uff0c\u4f46\u662f\u5b58\u5728\u4e00\u4e2a\u81f4\u547d\u7684\u95ee\u9898\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u670d\u52a1\u5668\u90e8\u7f72\u591a\u5e94\u7528\u65f6\uff0c\u65e0\u6cd5\u5b9a\u4e49",(0,i.kt)("strong",{parentName:"p"},"\u5e94\u7528\u7a0b\u5e8f\u8d44\u6e90\u4f7f\u7528\u8fb9\u754c"),"\u3002"),(0,i.kt)("p",null,"\u7b80\u5355\u70b9\u8bf4\u5c31\u662f\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5b58\u5728\u8d44\u6e90\u51b2\u7a81\uff0c\u5305\u62ec\u5230\u7aef\u53e3\uff0cCPU\u3001\u5185\u5b58\u7b49\u8d44\u6e90\u7684\u51b2\u7a81\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7ebf\u4e0a\u8d44\u6e90\u51b2\u7a81\u6848\u4f8b")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6848\u4f8b\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u67d0\u670d\u52a1\u5668\u4e0a\u90e8\u7f72\u4e86\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u9ad8\u5cf0\u65f6\u671f\uff0c\u67d0\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4f1a\u8dd1\u6ee1CPU\u3001\u5185\u5b58\uff0c\u5bfc\u81f4\u5176\u4ed6\u5e94\u7528\u76f4\u63a5 Crash \u65e0\u6cd5\u6062\u590d\u3002  "),(0,i.kt)("p",{parentName:"div"},"\u5206\u6790\u95ee\u9898\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u7b80\u5355\u6765\u770b\uff0c\u5c31\u662f\u670d\u52a1\u5668\u8d44\u6e90\u4e0d\u8db3\uff0c\u7533\u8bf7\u52a0\u670d\u52a1\u5668\u5373\u53ef\u89e3\u51b3\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u7136\u540e\u5c06\u5e94\u7528\u5206\u522b\u90e8\u7f72\u4e86\u4e00\u4efd\uff0c\u5373\u53ef\u89e3\u51b3\u9ad8\u5cf0\u671f\u7684\u8d44\u6e90\u51b2\u7a81\u95ee\u9898\u3002  "),(0,i.kt)("p",{parentName:"div"},"\u9057\u7559\u95ee\u9898\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u5728\u4f4e\u5cf0\u671f\uff0c\u670d\u52a1\u5668\u57fa\u672c\u7a7a\u7f6e\uff0c\u9020\u6210\u8f83\u5927\u7684\u8d44\u6e90\u6d6a\u8d39\u3002"))),(0,i.kt)("h2",{id:"\u865a\u62df\u5316\u90e8\u7f72"},"\u865a\u62df\u5316\u90e8\u7f72"),(0,i.kt)("p",null,"\u865a\u62df\u5316\u6280\u672f\u901a\u5e38\u6307\u6211\u4eec\u4f7f\u7528\u7684\u865a\u62df\u673a\u3002\u865a\u62df\u673a\u62e5\u6709\u9694\u79bb\u7684\u64cd\u4f5c\u7cfb\u7edf\u3001\u8ba1\u7b97\u3001\u5185\u5b58\u3001\u5b58\u50a8\u7b49\u8d44\u6e90\uff0c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u73af\u5883\u3002"),(0,i.kt)("p",null,"\u865a\u62df\u5316\u90e8\u7f72\uff0c\u5373\u901a\u8fc7\u5728\u4e00\u53f0\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u591a\u4e2a\u865a\u62df\u673a\uff0c\u7136\u540e\u5c06\u5e94\u7528\u5206\u522b\u90e8\u7f72\u5728\u865a\u62df\u673a\u4e2d\u3002"),(0,i.kt)("p",null,"\u76f8\u5bf9\u4e8e\u4f20\u7edf\u90e8\u7f72\u7684\u65b9\u5f0f\u6765\u8bf4\uff0c\u5b83\u4fdd\u8bc1\u4e86\u5e94\u7528\u90e8\u7f72\u73af\u5883\u7684\u7eaf\u51c0\u6027\uff0c\u4f46\u76f8\u5bf9\u7684\uff0c\u5355\u72ec\u8fd0\u884c\u4e00\u4e2a\u865a\u62df\u673a\uff0c\u4e5f\u662f\u5341\u5206\u8017\u8d39\u8d44\u6e90\u7684\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u968f\u7740\u865a\u62df\u5316\u7684\u6d41\u884c\uff0c\u51fa\u73b0\u4e86 OpenStack\u3001VMWare \u4e4b\u7c7b\u7684\u865a\u62df\u5316\u7ba1\u7406\u7cfb\u7edf\uff0c\u4e3a\u4e91\u539f\u751f\u670d\u52a1\u5960\u5b9a\u4e86\u57fa\u7840\u3002"))),(0,i.kt)("h2",{id:"\u5bb9\u5668\u5316\u90e8\u7f72"},"\u5bb9\u5668\u5316\u90e8\u7f72"),(0,i.kt)("p",null,"\u4e3b\u6d41\u5bb9\u5668\u6280\u672f\uff0c\u5e95\u5c42\u90fd\u662f\u57fa\u4e8e Linux Namespace \u548c CGroups \u5b9e\u73b0\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u867d\u7136\u5bb9\u5668\u6280\u672f\u5f88\u65e9\u5c31\u5b58\u5728\u4e86\uff0c\u4f46\u5b83\u4eec\u5927\u591a\u6570\u90fd\u5b58\u5728\u540e\u671f\u8fd0\u7ef4\u4e0d\u4fbf\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u5e76\u4e0d\u6d41\u884c\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u76f4\u5230 Docker \u7684\u51fa\u73b0\uff0c\u5f7b\u5e95\u6380\u8d77\u5bb9\u5668\u6280\u672f\u7684\u70ed\u6f6e\u3002"),(0,i.kt)("p",null,"Docker \u5f15\u5165\u4e86\u955c\u50cf\u7684\u6982\u5ff5\uff0c\u5e76\u4e14\u5b9a\u4e49\u4e86\u955c\u50cf\u6784\u5efa\u3001\u53d1\u5e03\u548c\u8fd0\u884c\u7684\u6807\u51c6\u3002"),(0,i.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5feb\u901f\u7684\u5bf9\u5e94\u7528\u8fdb\u884c\u955c\u50cf\u6784\u5efa\uff0c\u7136\u540e\u53d1\u5e03\u955c\u50cf\uff0c\u6700\u540e\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u521b\u5efa\u5bb9\u5668\u8fd0\u884c\uff0c\u8fd9\u6781\u5927\u7684\u7b80\u5316\u5e94\u7528\u7684\u751f\u4ea7\u6d41\u7a0b\u3002"),(0,i.kt)("p",null,"\u76f8\u5bf9\u4e8e\u865a\u62df\u5316\u90e8\u7f72\u7684\u65b9\u5f0f\u6765\u8bf4\uff0c\u5b83\u66f4\u8282\u7701\u8d44\u6e90\uff0c\u56e0\u4e3a\u5bb9\u5668\u5171\u4eab\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf\u3002\n\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\uff0c\u901a\u8fc7  Container Runtime \u5b9a\u4e49\u8d44\u6e90\u754c\u9650\uff0c\u4ece\u800c\u521b\u5efa\u8f7b\u91cf\u7ea7\u7684\u5bb9\u5668\u73af\u5883\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Container Runtime \u5bb9\u5668\u8fd0\u884c\u65f6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5 Docker \u4e3a\u4f8b\uff0c\u521b\u5efa\u5e76\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\uff0c\u5305\u542b\u4e24\u4e2a\u8fd0\u884c\u65f6\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"high-level container runtime")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"low-level container runtime"),"\u3002"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"high-level container runtime")," \u8d1f\u8d23\u955c\u50cf\u7ba1\u7406\u3001api\u3001gRPC \u63a5\u53e3\u7ba1\u7406\u7b49\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"low-level container runtime")," \u5219\u8d1f\u8d23\u5177\u4f53\u8fd0\u884c\u7684\u5bb9\u5668\u3002  "))),(0,i.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5e94\u7528\u5bb9\u5668\u6570\u91cf\u4e5f\u8d8a\u6765\u8d8a\u591a\uff0c\u76f8\u5bf9\u7684\uff0c\u5728\u5bb9\u5668\u7ba1\u7406\u65b9\u9762\u4e5f\u63d0\u51fa\u4e86\u8f83\u5927\u7684\u6311\u6218\u3002"),(0,i.kt)("h2",{id:"k8s-\u7b80\u4ecb"},"k8s \u7b80\u4ecb"),(0,i.kt)("p",null,"k8s \u5168\u79f0 Kubernetes\uff0c\u662f\u4e00\u4e2a\u5bb9\u5668\u8c03\u5ea6\u7ba1\u7406\u7cfb\u7edf\uff0c\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684\u5bb9\u5668\u7f16\u6392\u89e3\u51b3\u65b9\u6848\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u540c\u65f6\uff0ck8s \u4e5f\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u96c6\u7fa4\u7cfb\u7edf\uff0c\u7531\u63a7\u5236\u8282\u70b9\uff08master\uff09\u3001\u5de5\u4f5c\u8282\u70b9\uff08node\uff09\u3001\u5206\u5e03\u5f0f\u5b58\u50a8\uff08etcd\uff09\u7ec4\u6210\u3002  "),(0,i.kt)("p",null,"\u5b83\u4e3a\u5bb9\u5668\u8fd0\u7ef4\u63d0\u4f9b\u4e86\u4fbf\u5229\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u4e3b\u8981\u5305\u62ec\uff1a  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u81ea\u6108"),(0,i.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u6269\u5bb9\u3001\u7f29\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6ce8\u518c\u3001\u53d1\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u6eda\u52a8\u5347\u7ea7")),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u96c6\u7fa4\u4e5f\u63d0\u4f9b\u4e86\u5b89\u5168\u9632\u62a4\u548c\u51c6\u5165\u673a\u5236\uff0c\u4ee5\u53ca\u5f3a\u5927\u7684\u62d3\u5c55\u80fd\u529b\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"master \u8282\u70b9\u7ec4\u6210")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"APIServer  "),(0,i.kt)("li",{parentName:"ul"},"Scheduler  "),(0,i.kt)("li",{parentName:"ul"},"ControllerManager  ")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"node \u8282\u70b9\u7ec4\u6210")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Kubelet  "),(0,i.kt)("li",{parentName:"ul"},"KubeProxy  "),(0,i.kt)("li",{parentName:"ul"},"ContainerRuntime  ")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"k8s & docker")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"docker \u662f\u5bb9\u5668\u5f15\u64ce",(0,i.kt)("br",{parentName:"p"}),"\n","k8s \u662f\u5bb9\u5668\u7ba1\u7406\u5de5\u5177")),(0,i.kt)("p",{parentName:"div"},"\u4e8c\u8005\u5728\u529f\u80fd\u4e0a\u662f\u76f8\u8f85\u76f8\u6210\u7684\uff0c\u4f46\u5728\u5546\u4e1a\u7acb\u573a\u4e0a\u5374\u706b\u836f\u5473\u5341\u8db3\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5728 k8s \u5728\u8bde\u751f\u4e4b\u521d\uff0c\u56e0\u4e3a docker \u662f\u5bb9\u5668\u9886\u57df\u7684\u4e3b\u8981\u9886\u519b\u8005\uff0c\u6240\u4ee5\u4e3a\u4e86\u80fd\u591f\u8ddf\u4e0a\u5bb9\u5668\u6f6e\u6d41\uff0c\nk8s \u521d\u671f\u67b6\u6784\u662f\u6bd4\u8f83\u7b80\u5355\u7684\uff0c\u5728\u5bb9\u5668\u521b\u5efa\u8fd9\u4e00\u5757\uff0c\u901a\u8fc7 kubelet \u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker daemon"),"\uff0c\n\u7136\u540e ",(0,i.kt)("inlineCode",{parentName:"p"},"docker daemon")," \u8c03\u7528\u81ea\u5df1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"libconatiner")," \u5373\u53ef\u5b8c\u6210\u3002"),(0,i.kt)("p",{parentName:"div"},"\u4f46\u7531\u4e8e docker \u5b9e\u5728\u592a\u706b\u4e86\uff0c\u57fa\u672c\u5784\u65ad\u4e86\u5bb9\u5668\u9886\u57df\uff0c\u5176\u955c\u50cf\u683c\u5f0f\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u57fa\u672c\u6210\u4e3a\u4e86\u4e8b\u5b9e\u4e0a\u7684\u6807\u51c6\u3002\ndocker \u8054\u5408\u4f17\u591a\u5f00\u53d1\u8005\u63a8\u51fa\u4e86 OCI \uff08Open-Container-Initiative\uff09\u5f00\u653e\u5bb9\u5668\u6807\u51c6\u3002\n\u5e76\u5c06 libcontainer \u5c01\u88c5\u6210\u4e86 runC \u6350\u732e\u7ed9\u4e86 OCI \u4f5c\u4e3a\u53c2\u8003\u5b9e\u73b0\u3002"),(0,i.kt)("p",{parentName:"div"},"\u968f\u7740 k8s \u9010\u6e10\u88ab\u63a8\u5e7f\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5bb9\u5668\u5382\u5546\u5e0c\u671b\u63a5\u5165\u5176\u4e2d\u3002k8s \u5c1d\u8bd5\u63a5\u7eb3\u65b0\u7684\u5bb9\u5668\u6210\u5458\uff0c\u4f46\u7ed3\u679c\u662f\u65e0\u7a77\u65e0\u5c3d\u7684\u9002\u914d\u548c\u517c\u5bb9\uff0c\u4e3a\u4e86\u89e3\u51b3\u7c7b\u4f3c\u7684\u517c\u5bb9\u95ee\u9898\uff0c\nk8s \u51b3\u5b9a\u81ea\u5b9a\u4e49\u6807\u51c6\uff0c\u5728 1.5 \u7248\u672c \u63a8\u51fa\u4e86 CRI\uff08Container-Runtime-Interface\uff09\u5bb9\u5668\u8fd0\u884c\u65f6\u63a5\u53e3\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u9002\u914d\u548c\u517c\u5bb9\u5219\u7531\u5bb9\u5668\u5382\u5546\u81ea\u884c\u5b8c\u6210\u3002"),(0,i.kt)("p",{parentName:"div"},"\u63d0\u51fa\u4e86 CRI \u89e3\u51b3\u4e86\u540e\u7eed\u5bb9\u5668\u63a5\u5165\u7684\u95ee\u9898\uff0c\u4f46 docker \u4e0d\u540c\u610f\u9002\u914d\uff0c\u6bd5\u7adf docker \u5728\u5f53\u65f6\u51e0\u4e4e\u6210\u4e86\u5bb9\u5668\u4ee3\u8a00\u8bcd\u3002\n\u6240\u4ee5 k8s \u56e2\u961f\u63a8\u51fa dockershim \u4f5c\u4e3a docker \u7684\u9002\u914d\u5668\u3002"),(0,i.kt)("p",{parentName:"div"},"docker \u968f\u540e\u4e5f\u63a8\u51fa docker-swarm \u4f5c\u4e3a\u5bb9\u5668\u7f16\u6392\u89e3\u51b3\u65b9\u6848\uff0c\u4e3a\u6b64\u67b6\u6784\u4e5f\u505a\u51fa\u4e86\u8c03\u6574\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker daemon")," \u4e2d\u5bb9\u5668\u64cd\u4f5c\u6a21\u5757\u72ec\u7acb\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd"),"\u3002\n\u540e\u7eed\u88ab k8s \u5b8c\u8d25\uff0cdocker \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd")," \u4e5f\u6350\u732e\u51fa\u53bb\u4e86\u3002"),(0,i.kt)("p",{parentName:"div"},"k8s 1.20 \u7248\u672c\u9ad8\u8c03\u5ba3\u5e03\u5f03\u7528 docker\uff0c\u5373\u4e0d\u5728\u7ef4\u62a4 dockershim \u6a21\u5757\u3002"))))}s.isMDXComponent=!0}}]);