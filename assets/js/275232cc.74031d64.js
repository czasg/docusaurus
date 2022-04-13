"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8193],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=u(t),d=a,m=k["".concat(o,".").concat(d)]||k[d]||c[d]||l;return t?n.createElement(m,p(p({ref:r},s),{},{components:t})):n.createElement(m,p({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=k;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6608:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return k}});var n=t(7462),a=t(3366),l=(t(7294),t(3905)),p=["components"],i={},o=void 0,u={unversionedId:"\u7591\u96be\u6742\u75c7/redis",id:"\u7591\u96be\u6742\u75c7/redis",isDocsHomePage:!1,title:"redis",description:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b\uff1f",source:"@site/docs-note/\u7591\u96be\u6742\u75c7/redis.md",sourceDirName:"\u7591\u96be\u6742\u75c7",slug:"/\u7591\u96be\u6742\u75c7/redis",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/redis",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"golang",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/golang"},next:{title:"\u5907\u4efd",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/\u5907\u4efd"}},s=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b",children:[],level:2},{value:"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5feb\uff1f",id:"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5feb",children:[],level:2},{value:"redis\u5b58\u5728\u6162\u64cd\u4f5c\u5417\uff1f",id:"redis\u5b58\u5728\u6162\u64cd\u4f5c\u5417",children:[],level:2},{value:"rehash\u4e3a\u4ec0\u4e48\u4e0d\u4f1a\u963b\u585e\uff1f",id:"rehash\u4e3a\u4ec0\u4e48\u4e0d\u4f1a\u963b\u585e",children:[],level:2},{value:"AOF \u65e5\u5fd7\u6587\u4ef6\u8fc7\u5927\u600e\u529e\uff1f",id:"aof-\u65e5\u5fd7\u6587\u4ef6\u8fc7\u5927\u600e\u529e",children:[],level:2},{value:"save \u548c bgsave \u662f\u5426\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff1f",id:"save-\u548c-bgsave-\u662f\u5426\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b",children:[],level:2},{value:"\u4e3b\u4ece\u7b2c\u4e00\u6b21\u540c\u6b65\u662f\u4ec0\u4e48\u6837\u7684\uff1f",id:"\u4e3b\u4ece\u7b2c\u4e00\u6b21\u540c\u6b65\u662f\u4ec0\u4e48\u6837\u7684",children:[],level:2},{value:"\u4e3b\u4ece\u540c\u6b65\u538b\u529b\u8fc7\u5927\u600e\u4e48\u529e\uff1f",id:"\u4e3b\u4ece\u540c\u6b65\u538b\u529b\u8fc7\u5927\u600e\u4e48\u529e",children:[],level:2},{value:"\u4e3b\u4ece\u65ad\u8fde\u540e\u5982\u4f55\u6062\u590d\u6570\u636e\uff1f",id:"\u4e3b\u4ece\u65ad\u8fde\u540e\u5982\u4f55\u6062\u590d\u6570\u636e",children:[],level:2},{value:"\u4ec0\u4e48\u662f redis \u8111\u88c2\uff1f",id:"\u4ec0\u4e48\u662f-redis-\u8111\u88c2",children:[],level:2}],c={toc:s};function k(e){var r=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b\uff1f"),(0,l.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u770b\u591a\u7ebf\u7a0b\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u7684\u7279\u70b9\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n","1\u3001IO\u5bc6\u96c6\u578b\u3002\u5728\u6b64\u573a\u666f\u4e0b\uff0c\u591a\u7ebf\u7a0b\u5c06\u62e5\u6709\u66f4\u5927\u7684\u541e\u5410\u7387\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","2\u3001\u8ba1\u7b97\u5bc6\u96c6\u578b\u3002\u5728\u6b64\u573a\u666f\u4e0b\uff0c\u591a\u7ebf\u7a0b\u5b58\u5728\u4e00\u5b9a\u7684\u7cfb\u7edf\u8c03\u5ea6\u5f00\u9500\u3002\u5f53\u7ebf\u7a0b\u6570\u91cf\u8fbe\u5230\u4e00\u5b9a\u503c\uff0c\u8c03\u5ea6\u90fd\u6210\u95ee\u9898\u3002   "),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5728\u591a\u7ebf\u7a0b\u64cd\u4f5c\u5171\u4eab\u5185\u5b58\u65f6\uff0c\u9700\u8981\u5f15\u5165\u9501\u673a\u5236\u6765\u4fdd\u969c\u6570\u636e\u548c\u5185\u5b58\u5b89\u5168\uff0c\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u4f1a\u4e25\u91cd\u963b\u788d\u6027\u80fd\u3002\u8fd9\u4e5f\u662f\u6211\u4eec\u5e38\u8bf4\u7684",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u53d1\u8bbf\u95ee\u63a7\u5236"),"\u95ee\u9898\u3002   "),(0,l.kt)("p",null,"\u6240\u4ee5\uff0credis \u91c7\u7528\u5355\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u51cf\u5c11\u7cfb\u7edf\u8c03\u5ea6\u5f00\u9500\uff0c\u5e76\u5f88\u597d\u7684\u907f\u514d",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u53d1\u8bbf\u95ee\u63a7\u5236"),"\u95ee\u9898\u3002\u56e0\u4e3a\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4e5f\u4e0d\u5b58\u5728\u51b2\u7a81\u95ee\u9898\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5feb"},"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5feb\uff1f"),(0,l.kt)("p",null,"\u5355\u7ebf\u7a0b\u548c\u591a\u7ebf\u7a0b\u4e4b\u95f4\u7684\u4f18\u52a3\uff0c\u4e0d\u662f\u7edd\u5bf9\u7684\uff0c\u4ed6\u4eec\u5728\u4e0d\u540c\u7684\u573a\u666f\u6709\u4e0d\u540c\u7684\u7279\u70b9\u3002"),(0,l.kt)("p",null,"\u5c31 redis \u6765\u770b\uff0c\u4ed6\u4f7f\u7528\u5355\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u907f\u514d\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u5f15\u5165\u9501\u673a\u5236\uff0c\u8fdb\u800c\u89e3\u51b3\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u53d1\u8bbf\u95ee\u63a7\u5236"),"\u95ee\u9898\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f redis \u7684\u9ad8\u5e76\u80fd\uff0c\u5e76\u4e0d\u53ea\u662f\u56e0\u4e3a\u5355\u7ebf\u7a0b\uff0c\u800c\u662f\u591a\u79cd\u4f18\u5316\u7b56\u7565\u7684\u4ea7\u7269\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("p",null,"1\u3001\u5185\u5b58\u6570\u636e\u5e93\uff0c\u57fa\u4e8e\u5185\u5b58\u64cd\u4f5c\uff0c\u5177\u6709\u5929\u7136\u7684\u6027\u80fd\u4f18\u52bf\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","2\u3001\u9ad8\u6548\u7684\u6570\u636e\u7ed3\u6784\u3002\u57fa\u4e8e\u5168\u5c40\u54c8\u5e0c\u8868\u5feb\u901f\u5b9a\u4f4d\u5e76\u8bfb\u5199\u6570\u636e\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","3\u3001\u5355\u7ebf\u7a0b\u3002\u89e3\u51b3\u5e76\u53d1\u8bbf\u95ee\u63a7\u5236\u95ee\u9898\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","4\u3001I/O\u591a\u8def\u590d\u7528\uff0c\u4f7f\u5176\u5728\u7f51\u7edcIO\u64cd\u4f5c\u4e2d\u80fd\u591f\u5e76\u53d1\u5904\u7406\u5927\u91cf\u8bf7\u6c42\u3002  "),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u4e00\u4e2a\u7f51\u7edc\u670d\u52a1\u4e2d\uff0c\u5728\u670d\u52a1\u7aef listen \u4e4b\u540e\uff0c\u4e00\u822c\u4f1a\u663e\u793a\u8c03\u7528 accept\uff0c\u963b\u585e\u7b49\u5f85\u7528\u6237\u8bf7\u6c42\u3002\n\u8bf7\u6c42\u6765\u540e\u8fd8\u9700\u8981\u8c03\u7528 recv \u83b7\u53d6\u7528\u6237\u6570\u636e\uff0c\u6700\u540e\u8fd8\u8981 send \u53d1\u9001\u51fa\u53bb\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728\u6574\u4e2a\u6d41\u7a0b\u4e2d\uff0c\u963b\u585e\u70b9\u975e\u5e38\u591a\u3002\u5728IO\u591a\u8def\u590d\u7528\u4e2d\u4e0d\u5b58\u5728\u8fd9\u4e2a\u95ee\u9898\uff0c\u9996\u5148\u56e0\u4e3a socket \u652f\u6301\u975e\u963b\u585e\u6a21\u5f0f\uff0c\u4e0d\u9700\u8981\u663e\u793a\u963b\u585e\u7b49\u5f85\u7f51\u7edc\u8bf7\u6c42\u3002\n\u9664\u975e\u963b\u585e\u6a21\u5f0f\u4e4b\u5916\uff0c\u8fd8\u4f9d\u8d56 select/epoll \u673a\u5236\uff0c\u8fd9\u662f\u4e00\u79cd",(0,l.kt)("strong",{parentName:"p"},"\u5141\u8bb8\u5185\u6838\u4e2d\uff0c\u540c\u65f6\u5b58\u5728\u591a\u4e2a\u76d1\u542c\u5957\u63a5\u5b57\u548c\u5df2\u8fde\u63a5\u5957\u63a5\u5b57"),"\u7684\u673a\u5236\u3002\n\u4ed6\u4eec\u4e4b\u95f4\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u518c\u4e8b\u4ef6\u56de\u8c03"),"\u6765\u8fdb\u884c\u7ba1\u7406\u3002\u8fd9\u4f7f\u5f97 redis \u53ef\u4ee5\u5e76\u53d1\u5904\u7406\u5927\u91cf\u8bf7\u6c42\u3002"),(0,l.kt)("p",null,"\u6ce8\u518c\u4e8b\u4ef6\u56de\u8c03\u9700\u8981\u7b80\u5355\u89e3\u91ca\u4e0b\u3002select/epoll \u4e00\u65e6\u68c0\u6d4b\u5230\u6587\u4ef6\u5957\u63a5\u5b57FD\u6709\u8bf7\u6c42\u8fbe\u5230\uff0c\u5c31\u4f1a\u89e6\u53d1\u54cd\u5e94\u7684\u4e8b\u4ef6\u3002\n\u8fd9\u4e9b\u4e8b\u4ef6\u5c06\u88ab\u653e\u5728\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u7531 redis \u53bb\u83b7\u53d6\u5e76\u6267\u884c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5 redis \u53ef\u4ee5\u4e0d\u7528\u663e\u793a\u7b49\u5f85\u67d0\u4e00\u4e2a\u8bf7\u6c42\uff0c\u53bb\u66f4\u597d\u7684\u5229\u7528\u548c\u5206\u914d\u8d44\u6e90\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"redis\u5b58\u5728\u6162\u64cd\u4f5c\u5417"},"redis\u5b58\u5728\u6162\u64cd\u4f5c\u5417\uff1f"),(0,l.kt)("p",null,"\u5728 redis \u4e2d\uff0c\u7c7b\u4f3c\u6570\u636e\u8bfb\u5199\u7b49\u6838\u5fc3\u903b\u8f91\uff0c\u662f\u5355\u7ebf\u7a0b\u5904\u7406\u7684\u3002\u6240\u4ee5\uff0c\u5982\u679c\u5728\u5355\u7ebf\u7a0b\u5904\u7406\u8fd9\u4e00\u5757\u8017\u65f6\u8fc7\u4e45\uff0c\u8fd9\u6b21\u64cd\u4f5c\u5c31\u53d8\u6210\u4e86\u6162\u64cd\u4f5c\u3002\u5e38\u89c1\u7684\u6709\uff1a  "),(0,l.kt)("p",null,"1\u3001\u4e00\u6b21\u8bfb\u5199\u8fc7\u591a\u6570\u636e\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","2\u3001\u5bf9\u5927\u96c6\u5408\u6267\u884c\u8303\u56f4\u64cd\u4f5c\u3002\u7c7b\u4f3c ",(0,l.kt)("inlineCode",{parentName:"p"},"smembers"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"hgetall")," \u7b49\u3002       "),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"rehash\u4e3a\u4ec0\u4e48\u4e0d\u4f1a\u963b\u585e"},"rehash\u4e3a\u4ec0\u4e48\u4e0d\u4f1a\u963b\u585e\uff1f"),(0,l.kt)("p",null,"\u7b80\u5355\u7684 rehash \u8fc7\u7a0b\u53ef\u80fd\u662f\u8fd9\u6837\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n","1\u3001\u521b\u5efa\u4e00\u4e2a\u66f4\u5927\u7684\u6570\u7ec4\uff0c\u6bd4\u5982\u662f\u524d\u4e00\u4e2a\u6570\u7ec4\u7684\u4e24\u500d",(0,l.kt)("br",{parentName:"p"}),"\n","2\u3001\u5c06\u65e7\u6570\u7ec4\u7684\u6570\u636e\u91cd\u65b0\u54c8\u5e0c\u5206\u914d\u5230\u65b0\u6570\u7ec4\u4e2d",(0,l.kt)("br",{parentName:"p"}),"\n","3\u3001\u91ca\u653e\u8d44\u6e90\uff08\u6570\u7ec4\u3001\u9501\u7b49\uff09    "),(0,l.kt)("p",null,"\u5728 redis \u4e2d\u8fd9\u663e\u7136\u662f\u884c\u4e0d\u901a\u7684\uff0c\u56e0\u4e3a\u4e00\u65e6 rehash \u7684\u91cf\u8fc7\u5927\uff0c\u4e2d\u95f4\u9700\u8981\u963b\u585e\u7684\u65f6\u95f4\u5c06\u4f1a\u975e\u5e38\u4e45\u3002\u6240\u4ee5 redis \u91c7\u7528\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u6e10\u8fdb\u5f0f rehash"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u8fd9\u91cc\u7684\u610f\u601d\u662f\uff0c\u5728\u62f7\u8d1d\u65e7\u6570\u636e\u65f6\uff0credis \u53ef\u4ee5\u7ee7\u7eed\u5904\u7406\u8bf7\u6c42\uff0c\u4e14\u6bcf\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42\u65f6\uff0c\u987a\u5e26\u62f7\u8d1d\u4e00\u4e2a\u54c8\u5e0c\u69fd\u7684\u6570\u636e\u5230\u65b0\u6570\u7ec4\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u8fd9\u6837\u53ef\u4ee5\u5de7\u5999\u7684\u628a\u4e00\u6b21\u6027\u5927\u91cf\u62f7\u8d1d\u7684\u5f00\u9500\uff0c\u5206\u644a\u5230\u591a\u6b21\u8bf7\u6c42\u4e2d\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"aof-\u65e5\u5fd7\u6587\u4ef6\u8fc7\u5927\u600e\u529e"},"AOF \u65e5\u5fd7\u6587\u4ef6\u8fc7\u5927\u600e\u529e\uff1f"),(0,l.kt)("p",null,"AOF \u65e5\u5fd7\u662f redis \u7684\u6301\u4e45\u5316\u673a\u5236\u4e4b\u4e00\uff0c\u7528\u4e8e\u8bb0\u5f55\u5177\u4f53\u7684\u5199\u5165\u6307\u4ee4\u3002\n\u4ed6\u662f\u4e00\u79cd\u5199\u540e\u65e5\u5fd7\uff0c\u4e5f\u5c31\u662f\u5f53\u5199\u64cd\u4f5c\u6267\u884c\u5b8c\u4e4b\u540e\uff0c\u518d\u8bb0\u5f55\u6b64\u6b21\u64cd\u4f5c\u7684\u65e5\u5fd7\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u963b\u585e\u5f53\u524d\u8bf7\u6c42\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6b64\u5916\u8fd8\u652f\u6301\u4e09\u79cd\u5199\u56de\u7b56\u7565\uff1aAlways\u3001Everysec\u3001No\uff0c\u56e0\u4e3a\u65e5\u5fd7\u8bb0\u5f55\u4ec5\u5199\u5165\u5230 AOF \u6587\u4ef6\u7684\u7f13\u5b58\u533a\uff0c\u8fd8\u6ca1\u6709\u5199\u56de\u78c1\u76d8\u3002"),(0,l.kt)("p",null,"\u6309\u7167\u521a\u521a\u8fd9\u79cd\u8bf4\u6cd5\uff0cAOF \u5176\u5b9e\u662f\u5b58\u5728\u7f3a\u9677\u7684\uff0c\u56e0\u4e3a\u5199\u5165\u8d8a\u591a\uff0c\u90a3\u4e48 AOF \u6587\u4ef6\u5c31\u4f1a\u8d8a\u6765\u8d8a\u5927\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0credis \u652f\u6301 AOF \u7684\u91cd\u5199\u673a\u5236\u3002\n\u91cd\u5199\u7684\u610f\u601d\u5c31\u662f\u5bf9 AOF \u6587\u4ef6\u8fdb\u884c\u6574\u7406\u3001\u5408\u5e76\u3002\u6bd4\u5982\u5bf9\u4e00\u4e2a key \u6267\u884c\u4e86 N \u6b21\u5199\u64cd\u4f5c\uff0c\u90a3\u4e48\u5bf9\u4e8e\u8be5 key \u6765\u8bf4\uff0c\u53ea\u6709\u6700\u540e\u4e00\u6b21\u624d\u6709\u610f\u4e49\u3002\nAOF \u91cd\u5199\uff0c\u5c31\u662f\u68b3\u7406\u8fd9\u4e9b\u5173\u7cfb\uff0c\u4ec5\u4fdd\u7559\u6709\u6548\u7684\u65e5\u5fd7\uff0c\u8fd9\u6837\u53ef\u4ee5\u5927\u5927\u7cbe\u7b80 AOF \u65e5\u5fd7\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"save-\u548c-bgsave-\u662f\u5426\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b"},"save \u548c bgsave \u662f\u5426\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff1f"),(0,l.kt)("p",null,"save \u548c bgsave \u662f redis \u63d0\u4f9b\u7684\u4e24\u79cd\u5168\u91cf\u5feb\u7167\u7684\u65b9\u5f0f\u3002  "),(0,l.kt)("p",null,"save \u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u6267\u884c\u671f\u95f4 redis \u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","bgsave \u7406\u8bba\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u6267\u884c\u671f\u95f4\u4f1a\u521b\u5efa\u5b50\u8fdb\u7a0b\u6267\u884c\u5168\u91cf\u5feb\u7167\uff0c\u4e3b\u7ebf\u7a0b\u53ef\u4ee5\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u9664\u6b64\u4e4b\u5916\uff0c\u4f9d\u8d56\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684 ",(0,l.kt)("strong",{parentName:"p"},"COW\uff08Copy-On-Write\uff0c\u5199\u65f6\u590d\u5236\uff09\u6280\u672f"),"\uff0c\u5feb\u7167\u671f\u95f4\u53ef\u4ee5\u6b63\u5e38\u7684\u63a5\u53d7\u5199\u8bf7\u6c42\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0cfork \u8fd9\u4e2a\u64cd\u4f5c\u8981\u89c6\u60c5\u51b5\u800c\u5b9a\u3002\u5f53\u4e3b\u7ebf\u7a0b\u5185\u5b58\u7279\u522b\u5927\u65f6\uff0cfork \u672c\u8eab\u5c31\u5b58\u5728\u4e00\u5b9a\u7684\u963b\u585e\u95f4\u9694\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4e3b\u4ece\u7b2c\u4e00\u6b21\u540c\u6b65\u662f\u4ec0\u4e48\u6837\u7684"},"\u4e3b\u4ece\u7b2c\u4e00\u6b21\u540c\u6b65\u662f\u4ec0\u4e48\u6837\u7684\uff1f"),(0,l.kt)("p",null,"\u4e3b\u4ece\u7b2c\u4e00\u6b21\u540c\u6b65\uff0c\u662f",(0,l.kt)("strong",{parentName:"p"},"\u5168\u91cf\u540c\u6b65"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728\u4e3b\u4ece\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u4ece\u5e93\u4f1a\u53d1\u9001 runID \u548c offset \u7ed9\u4e3b\u5e93\uff0c\u4e8c\u8005\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"runID=?,offset=-1"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e3b\u5e93\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u901a\u8fc7\u503c\u53ef\u4ee5\u5224\u65ad\u4ece\u5e93\u9700\u8981\u6267\u884c\u5168\u91cf\u540c\u6b65\uff0c\u6b64\u65f6\u4f1a\u54cd\u5e94 ",(0,l.kt)("strong",{parentName:"p"},"FULLRESYNC"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7136\u540e\u4e3b\u5e93\u6267\u884c bgsave \u751f\u6210\u5168\u91cf\u5feb\u7167\uff0c\u751f\u6210\u540e\uff0c\u5c06\u5feb\u7167\u6587\u4ef6\u53d1\u9001\u7ed9\u4ece\u5e93\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4ece\u5e93\u63a5\u6536\u5230\u5feb\u7167\u6587\u4ef6\uff0c\u4f1a\u5148\u6e05\u7a7a\u81ea\u8eab\u5185\u5b58\u907f\u514d\u6b8b\u7559\u6570\u636e\u9020\u6210\u51b2\u7a81\uff0c\u7136\u540e\u5c06\u5feb\u7167\u6587\u4ef6\u52a0\u8f7d\u8fdb\u5185\u5b58\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u81f3\u6b64\uff0c\u5b8c\u6210\u4e86\u7b2c\u4e00\u6b21\u540c\u6b65\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4e3b\u4ece\u540c\u6b65\u538b\u529b\u8fc7\u5927\u600e\u4e48\u529e"},"\u4e3b\u4ece\u540c\u6b65\u538b\u529b\u8fc7\u5927\u600e\u4e48\u529e\uff1f"),(0,l.kt)("p",null,"\u4e3b\u4ece\u540c\u6b65\u53ef\u4ee5\u7b80\u5355\u5206\u4e3a\u4e24\u7c7b\uff1a\u7b2c\u4e00\u6b21\u5efa\u7acb\u4e3b\u4ece\u8fde\u63a5\u65f6\u7684",(0,l.kt)("strong",{parentName:"p"},"\u5168\u91cf\u540c\u6b65"),"\u548c\u4e4b\u540e\u7684",(0,l.kt)("strong",{parentName:"p"},"\u589e\u91cf\u540c\u6b65"),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u538b\u529b\u8fc7\u5927\u4e00\u822c\u7531\u5168\u91cf\u540c\u6b65\u5f15\u8d77\uff0c\u9020\u6210\u5168\u91cf\u540c\u6b65\u538b\u529b\u8fc7\u5927\u7684\u53ef\u80fd\u6709\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n","1\u3001\u5185\u5b58\u8fc7\u5927\uff0c\u5bfc\u81f4\u5168\u91cf\u540c\u6b65\u8fc7\u7a0b\u6d88\u8017\u8f83\u591a\u8d44\u6e90\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","2\u3001\u4ece\u5e93\u8fc7\u591a\uff0c\u5bfc\u81f4\u5168\u91cf\u540c\u6b65\u9891\u7e41\u3002"),(0,l.kt)("p",null,"\u9488\u5bf9\u4e0a\u9762\u5206\u6790\u7684\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u89e3\u51b3\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n","1\u3001\u51cf\u5c11\u5355\u4e2a redis \u5b9e\u4f8b\u7684\u5185\u5b58\uff0c\u5c0f\u4e8e 8g \u6700\u4f73\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",'2\u3001\u4ece\u5e93\u8fc7\u591a\u65f6\uff0c\u53ef\u4ee5\u91c7\u7528 "\u4e3b-\u4ece-\u4ece" \u7684\u8054\u7ea7\u6a21\u5f0f\uff0c\u8ba9\u4ece\u5e93\u66ff\u4e3b\u5e93\u5206\u62c5\u538b\u529b\u3002  '),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4e3b\u4ece\u65ad\u8fde\u540e\u5982\u4f55\u6062\u590d\u6570\u636e"},"\u4e3b\u4ece\u65ad\u8fde\u540e\u5982\u4f55\u6062\u590d\u6570\u636e\uff1f"),(0,l.kt)("p",null,"\u5728 redis 2.8 \u7248\u672c\u4e4b\u524d\uff0c\u4e3b\u4ece\u65ad\u8fde\uff0c\u7136\u540e\u6062\u590d\uff0c\u6b64\u65f6\u4ece\u5e93\u4f1a\u91cd\u65b0\u6267\u884c\u4e00\u6b21\u5168\u91cf\u540c\u6b65\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728 redis 2.8 \u7248\u672c\u4e4b\u540e\uff0c\u5f15\u5165\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"repl_backlog_buffer")," \u73af\u5f62\u7f13\u51b2\u533a\uff0c\u4e3b\u5e93\u5728\u5176\u4e2d\u8bb0\u5f55\u5199\u5165\u7684\u4f4d\u7f6e\uff0c\u4ece\u5e93\u5219\u8bb0\u5f55\u8bfb\u53d6\u7684\u4f4d\u7f6e\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e3b\u4ece\u65ad\u8fde\u540e\uff0c\u4e3b\u5e93\u63a5\u6536\u5230\u7684\u5199\u64cd\u4f5c\u4f1a\u6301\u7eed\u5199\u5165\u73af\u5f62\u73af\u5f62\u7f13\u51b2\u533a\uff0c\u5e76\u66f4\u65b0\u5728\u73af\u5f62\u7f13\u51b2\u533a\u7684\u5199\u5165\u4f4d\u7f6e\uff0c\u6b64\u65f6\u4ece\u5e93\u7684\u8bfb\u53d6\u4f4d\u7f6e\u662f\u6ca1\u6709\u53d8\u5316\u7684\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5f53\u4e3b\u4ece\u6062\u590d\u8fde\u63a5\u65f6\uff0c\u4ece\u5e93\u53d1\u9001 offset \u7ed9\u4e3b\u5e93\uff0c\u6b64\u65f6\u4e3b\u5e93\u5c31\u53ef\u4ee5\u77e5\u9053\u4ece\u5e93\u7684\u66f4\u65b0\u72b6\u6001\uff0c\u5e76\u5c06\u4ed6\u9700\u8981\u7684\u66f4\u65b0\u540c\u6b65\u7ed9\u5b83\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u5f53\u4e3b\u4ece\u5931\u8054\u5f88\u4e45\uff0c\u6216\u8005\u4e3b\u5e93\u7684\u5199\u5165\u538b\u529b\u8fc7\u5927\uff0c\u5bfc\u81f4\u4e3b\u5e93\u8986\u76d6\u7684\u5199\u5165\u4e86\u73af\u5f62\u7f13\u51b2\u533a\uff0c\u6b64\u65f6\u4e3b\u4ece\u6062\u590d\u8fde\u63a5\u540e\uff0c\u4ece\u5e93\u9700\u8981\u91cd\u65b0\u6267\u884c\u4e00\u6b21\u5168\u91cf\u590d\u5236\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-redis-\u8111\u88c2"},"\u4ec0\u4e48\u662f redis \u8111\u88c2\uff1f"))}k.isMDXComponent=!0}}]);