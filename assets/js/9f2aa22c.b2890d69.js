"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5579],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,k=d["".concat(o,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1345:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],p={title:"redis \u4e3b\u4ece\u673a\u5236",sidebar_label:"redis\u4e3b\u4ece\u673a\u5236"},o=void 0,u={unversionedId:"redis/redis\u4e3b\u4ece\u673a\u5236",id:"redis/redis\u4e3b\u4ece\u673a\u5236",isDocsHomePage:!1,title:"redis \u4e3b\u4ece\u673a\u5236",description:"redis \u4f5c\u4e3a\u4e3b\u6d41\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u9664\u4e86\u652f\u6301\u9ad8\u6027\u80fd\u8bfb\u5199\u5916\uff0c\u8fd8\u4fdd\u969c\u4e86\u670d\u52a1\u7684\u9ad8\u53ef\u9760\u3002\u8fd9\u91cc\u7684\u9ad8\u53ef\u9760\u5927\u81f4\u5305\u542b\u4e24\u4e2a\u76ee\u6807\uff1a",source:"@site/docs-note/redis/3.redis\u4e3b\u4ece\u673a\u5236.md",sourceDirName:"redis",slug:"/redis/redis\u4e3b\u4ece\u673a\u5236",permalink:"/docusaurus/note/redis/redis\u4e3b\u4ece\u673a\u5236",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"redis \u4e3b\u4ece\u673a\u5236",sidebar_label:"redis\u4e3b\u4ece\u673a\u5236"},sidebar:"tutorialSidebar",previous:{title:"redis\u6301\u4e45\u5316",permalink:"/docusaurus/note/redis/redis\u6301\u4e45\u5316"},next:{title:"redis\u54e8\u5175\u673a\u5236",permalink:"/docusaurus/note/redis/redis\u54e8\u5175\u673a\u5236"}},s=[{value:"\u4e3b\u4ece\u540c\u6b65 - \u8bfb\u5199\u5206\u79bb",id:"\u4e3b\u4ece\u540c\u6b65---\u8bfb\u5199\u5206\u79bb",children:[],level:2},{value:"\u4e3b\u4ece\u540c\u6b65 - \u9996\u6b21\u540c\u6b65",id:"\u4e3b\u4ece\u540c\u6b65---\u9996\u6b21\u540c\u6b65",children:[{value:"1\u3001\u7b2c\u4e00\u9636\u6bb5",id:"1\u7b2c\u4e00\u9636\u6bb5",children:[],level:4},{value:"2\u3001\u7b2c\u4e8c\u9636\u6bb5",id:"2\u7b2c\u4e8c\u9636\u6bb5",children:[],level:4},{value:"3\u3001\u7b2c\u4e09\u9636\u6bb5",id:"3\u7b2c\u4e09\u9636\u6bb5",children:[],level:4}],level:2},{value:"\u4e3b\u4ece\u540c\u6b65 - \u8054\u7ea7\u6a21\u5f0f",id:"\u4e3b\u4ece\u540c\u6b65---\u8054\u7ea7\u6a21\u5f0f",children:[],level:2},{value:"\u4e3b\u4ece\u540c\u6b65 - \u589e\u91cf\u540c\u6b65",id:"\u4e3b\u4ece\u540c\u6b65---\u589e\u91cf\u540c\u6b65",children:[],level:2}],c={toc:s};function d(e){var t=e.components,p=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"redis \u4f5c\u4e3a\u4e3b\u6d41\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u9664\u4e86\u652f\u6301\u9ad8\u6027\u80fd\u8bfb\u5199\u5916\uff0c\u8fd8\u4fdd\u969c\u4e86\u670d\u52a1\u7684\u9ad8\u53ef\u9760\u3002\u8fd9\u91cc\u7684\u9ad8\u53ef\u9760\u5927\u81f4\u5305\u542b\u4e24\u4e2a\u76ee\u6807\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","1\u3001\u4fdd\u969c\u6570\u636e\u5c3d\u91cf\u4e0d\u4e22\u5931\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","2\u3001\u4fdd\u969c\u670d\u52a1\u5c3d\u91cf\u5c11\u4e2d\u65ad\u3002     "),(0,i.kt)("p",null,"\u9488\u5bf9\u7b2c\u4e00\u4e2a\u9ad8\u53ef\u9760\u76ee\u6807\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 AOF \u65e5\u5fd7\u548c RDB \u6587\u4ef6\u5feb\u7167\u7b49\u6301\u4e45\u5316\u673a\u5236\u5b9e\u73b0\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u9488\u5bf9\u7b2c\u4e8c\u4e2a\u9ad8\u53ef\u9760\u76ee\u6807\uff0c\u6700\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848\u5c31\u662f\u591a\u526f\u672c\u5197\u4f59\u3002\u5373\u5c06\u4e00\u4efd\u6570\u636e\u540c\u65f6\u4fdd\u5b58\u5728\u591a\u4e2a redis \u5b9e\u4f8b\u4e2d\u3002\n\u8fd9\u6837\u5373\u4f7f\u67d0\u4e2a\u5b9e\u4f8b\u5f02\u5e38\uff0c\u53e6\u4e00\u4e2a\u5197\u4f59\u5b9e\u4f8b\u4e5f\u53ef\u4ee5\u5feb\u901f\u63d0\u4f9b\u670d\u52a1\u3002"),(0,i.kt)("p",null,"\u591a\u526f\u672c\u673a\u5236\u7684\u6838\u5fc3\u70b9\uff0c\u5c31\u662f\u6570\u636e\u7684\u540c\u6b65\u673a\u5236\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u591a\u526f\u672c\u5197\u4f59\u4f1a\u5728\u4e0b\u4e00\u7ae0\u5b66\u4e60\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd redis \u4e2d\u7684\u4e3b\u4ece\u540c\u6b65\u673a\u5236\u3002"),(0,i.kt)("h2",{id:"\u4e3b\u4ece\u540c\u6b65---\u8bfb\u5199\u5206\u79bb"},"\u4e3b\u4ece\u540c\u6b65 - \u8bfb\u5199\u5206\u79bb"),(0,i.kt)("p",null,"redis \u63d0\u4f9b\u4e86\u4e3b\u4ece\u540c\u6b65\u673a\u5236\u7528\u4e8e\u4fdd\u969c\u4e3b\u4ece\u8282\u70b9\u4e4b\u95f4\u7684\u6570\u636e\u4e00\u81f4\u6027\u3002\u800c\u4e14\u4e3b\u4ece\u5e93\u4e4b\u95f4\u91c7\u7528\u7684\u662f",(0,i.kt)("strong",{parentName:"p"},"\u8bfb\u5199\u5206\u79bb"),"\u7684\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u5904\u7406\u8bfb\u64cd\u4f5c\u548c\u5199\u64cd\u4f5c\u65f6\u662f\u6709\u533a\u522b\u7684\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bfb\u64cd\u4f5c\uff1a\u4e3b\u5e93\u3001\u4ece\u5e93\u5747\u53ef\u6267\u884c\u3002 "),(0,i.kt)("li",{parentName:"ul"},"\u5199\u64cd\u4f5c\uff1a\u53ea\u80fd\u5728\u4e3b\u5e93\u6267\u884c\uff0c\u5426\u5219\u4f1a\u4ea7\u751f\u6b67\u4e49\u3002\u4e3b\u5e93\u63a5\u53d7\u5199\u64cd\u4f5c\u540e\uff0c\u518d\u540c\u6b65\u7ed9\u4ece\u8282\u70b9\u3002     ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1674).Z})),(0,i.kt)("h2",{id:"\u4e3b\u4ece\u540c\u6b65---\u9996\u6b21\u540c\u6b65"},"\u4e3b\u4ece\u540c\u6b65 - \u9996\u6b21\u540c\u6b65"),(0,i.kt)("p",null,"\u5728 redis \u4e2d\u5b9e\u73b0\u4e3b\u4ece\u673a\u5236\u6bd4\u8f83\u7b80\u5355\uff0c\u4ec5\u9700\u8981\u542f\u52a8\u65f6\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"replicaof")," \u6307\u5b9a\u4e3b\u5e93\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"replicaof localhost 6379\n")),(0,i.kt)("p",null,"\u4e3b\u4ece\u5173\u7cfb\u5efa\u7acb\u540e\uff0c\u4f1a\u6309\u7167\u4e09\u4e2a\u9636\u6bb5\u5b9e\u73b0\u5b8c\u6210\u6570\u636e\u7684\u7b2c\u4e00\u6b21\u540c\u6b65\u3002"),(0,i.kt)("h4",{id:"1\u7b2c\u4e00\u9636\u6bb5"},"1\u3001\u7b2c\u4e00\u9636\u6bb5"),(0,i.kt)("p",null,"\u4ece\u5e93\u548c\u6307\u5b9a\u4e3b\u5e93\u5efa\u7acb\u8fde\u63a5\uff0c\u5e76\u53d1\u9001 ",(0,i.kt)("strong",{parentName:"p"},"psync")," \u6307\u4ee4\u7ed9\u4e3b\u5e93\u3002\u8be5\u6307\u4ee4\u5305\u542b\u4e86 runID \u548c offet \u4e24\u4e2a\u53c2\u6570\u3002\uff08\u7b2c\u4e00\u6b21\u5efa\u7acb\u8fde\u63a5\u65f6\u53d1\u9001",(0,i.kt)("inlineCode",{parentName:"p"},"runID=? offset=-1"),"\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"runID\uff1a\u8fd9\u662f redis \u542f\u52a8\u65f6\u968f\u673a\u751f\u6210\u7684\u552f\u4e00 ID\uff0c\u6b64\u5904\u7528\u4e8e\u8bb0\u5f55\u4e3b\u5e93 ID\u3002"),(0,i.kt)("li",{parentName:"ul"},"offset\uff1a\u8bb0\u5f55\u6570\u636e\u540c\u6b65\u504f\u79fb\u3002\u7b2c\u4e00\u6b21\u540c\u6b65\u4e3a -1\uff0c\u8868\u793a\u9700\u8981\u5168\u91cf\u540c\u6b65\u3002")),(0,i.kt)("h4",{id:"2\u7b2c\u4e8c\u9636\u6bb5"},"2\u3001\u7b2c\u4e8c\u9636\u6bb5"),(0,i.kt)("p",null,"\u4e3b\u5e93\u63a5\u6536\u5230 ",(0,i.kt)("strong",{parentName:"p"},"psync")," \u6307\u4ee4\u540e\uff0c\u77e5\u9053\u4ece\u5e93\u7b2c\u4e00\u6b21\u8fde\u63a5\uff0c\u4f1a\u7acb\u5373\u54cd\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"FULLRESYNC")," \u6307\u4ee4\u3002\u63a5\u7740\uff0c\u4e3b\u5e93\u6267\u884c bgsave \u751f\u6210\u5168\u91cf\u5feb\u7167\uff0c\u518d\u5c06\u5feb\u7167\u6587\u4ef6\u540c\u6b65\u7ed9\u4ece\u5e93\u3002  "),(0,i.kt)("p",null,"\u4ece\u5e93\u5728\u540c\u6b65\u6570\u636e\u524d\uff0c\u4e3a\u4e86\u907f\u514d\u65e2\u6709\u7684\u5185\u5b58\u6570\u636e\u9020\u6210\u51b2\u7a81\uff0c\u4f1a\u5148\u6e05\u7a7a\u81ea\u8eab\u5185\u5b58\uff0c\u7136\u540e\u518d\u63a5\u6536\u6570\u636e\uff0c\u6700\u540e\u5c06\u5176\u52a0\u8f7d\u8fdb\u5185\u5b58\u3002"),(0,i.kt)("h4",{id:"3\u7b2c\u4e09\u9636\u6bb5"},"3\u3001\u7b2c\u4e09\u9636\u6bb5"),(0,i.kt)("p",null,"\u5728\u4e3b\u4ece\u540c\u6b65\u671f\u95f4\uff0c\u4e3b\u5e93\u662f\u975e\u963b\u585e\u7684\uff0c\u53ef\u4ee5\u6b63\u5e38\u63a5\u53d7\u5199\u8bf7\u6c42\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4e3a\u4e86\u4fdd\u8bc1\u4e3b\u4ece\u6570\u636e\u4e00\u81f4\u6027\uff0c\u5728\u4e3b\u4ece\u540c\u6b65\u671f\u95f4\uff0c\u6240\u6709\u7684\u5199\u64cd\u4f5c\uff0c\u4f1a\u88ab\u8bb0\u5f55\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"replication buffer")," \u4e2d\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u5728\u5feb\u7167\u6587\u4ef6\u540c\u6b65\u5b8c\u6210\u540e\uff0c\u6700\u540e\u518d\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"replication buffer")," \u4e2d\u7684\u5199\u64cd\u4f5c\u540c\u6b65\u7ed9\u4ece\u5e93\uff0c\u81f3\u6b64\u7b2c\u4e00\u6b21\u540c\u6b65\u5b8c\u6210\u3002"),(0,i.kt)("h2",{id:"\u4e3b\u4ece\u540c\u6b65---\u8054\u7ea7\u6a21\u5f0f"},"\u4e3b\u4ece\u540c\u6b65 - \u8054\u7ea7\u6a21\u5f0f"),(0,i.kt)("p",null,"\u7b2c\u4e00\u6b21\u4e3b\u5e93\u540c\u6b65\u65f6\uff0c\u4e3b\u5e93\u9700\u8981\u751f\u6210\u5168\u91cf\u5feb\u7167\u6587\u4ef6\uff0c\u5e76\u4f20\u8f93\u7ed9\u4ece\u5e93\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8fd9\u5176\u5b9e\u662f\u4e00\u4e2a\u6bd4\u8f83\u6d88\u8017\u8d44\u6e90\u7684\u8fc7\u7a0b\uff0c\u7279\u522b\u662f\u5f53\u4ece\u5e93\u7684\u6570\u636e\u8f83\u591a\u65f6\uff0c\u4f1a\u5bf9\u4e3b\u5e93\u9020\u6210\u8f83\u5927\u7684\u8d1f\u62c5\u3002    "),(0,i.kt)("p",null,'\u4e3a\u4e86\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\uff0credis \u652f\u6301 "\u4e3b-\u4ece-\u4ece" \u7684\u8054\u7ea7\u6a21\u5f0f\u3002',(0,i.kt)("br",{parentName:"p"}),"\n","\u5728\u8be5\u6a21\u5f0f\u4e0b\uff0c\u4ece\u5e93\u4e0d\u5728\u76f4\u8fde\u4e3b\u5e93\uff0c\u800c\u662f\u9009\u62e9\u67d0\u4e2a\u4ece\u5e93\u4f5c\u4e3a\u4e3b\u5e93\uff0c\u8fd9\u6837\u672c\u6765\u5bf9\u4e3b\u5e93\u7684\u538b\u529b\uff0c\u5c31\u53ef\u4ee5\u5206\u6563\u5230\u4ece\u5e93\u4e0a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(248).Z})),(0,i.kt)("h2",{id:"\u4e3b\u4ece\u540c\u6b65---\u589e\u91cf\u540c\u6b65"},"\u4e3b\u4ece\u540c\u6b65 - \u589e\u91cf\u540c\u6b65"),(0,i.kt)("p",null,"\u4e3b\u4ece\u5e93\u7b2c\u4e00\u6b21\u5efa\u7acb\u8fde\u63a5\u65f6\uff0c\u4f1a\u53d1\u8d77\u5168\u91cf\u540c\u6b65\uff0c\u4e4b\u540e\u5219\u662f\u589e\u91cf\u540c\u6b65\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f\u5982\u679c\u56e0\u4e3a\u7f51\u7edc\u7b49\u539f\u56e0\uff0c\u5bfc\u81f4\u4e3b\u4ece\u5e93\u4e4b\u95f4\u65ad\u5f00\u4e86\u8fde\u63a5\uff0c\u8fd9\u65f6\u5019\u4e3b\u4ece\u5e93\u4e4b\u95f4\u5c31\u4f1a\u51fa\u73b0\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002\u4e3a\u6b64\uff0credis \u652f\u6301\u91cd\u8fde\u540e\u7684\u589e\u91cf\u540c\u6b65\u673a\u5236\u3002"),(0,i.kt)("p",null,"\u4f46\u4e0d\u662f\u6240\u6709\u7684\u7248\u672c\u90fd\u652f\u6301\u65ad\u8fde\u540e\u7684\u589e\u91cf\u540c\u6b65\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u5728 redis 2.8 \u4e4b\u524d\uff0c\u4e3b\u5e93\u548c\u4ece\u5e93\u53d1\u751f\u65ad\u8fde\u540e\uff0c\u4ece\u5e93\u4f1a\u91cd\u65b0\u7533\u8bf7\u8fdb\u884c\u4e00\u6b21\u5168\u91cf\u590d\u5236\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5728 redis 2.8 \u4e4b\u540e\uff0c\u652f\u6301\u65ad\u8fde\u540e\u7684\u589e\u91cf\u540c\u6b65\u673a\u5236\u3002   "),(0,i.kt)("p",null,"\u65ad\u8fde\u540e\u7684\u589e\u91cf\u540c\u6b65\u6280\u672f\uff0c\u6838\u5fc3\u5176\u5b9e\u662f\u4e00\u4e2a\u53eb ",(0,i.kt)("inlineCode",{parentName:"p"},"repl_backlog_buffer")," \u7684",(0,i.kt)("strong",{parentName:"p"},"\u73af\u5f62\u7f13\u51b2\u533a"),"\u3002\u5728\u8be5\u7f13\u51b2\u533a\u4e2d\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u4e3b\u5e93\u8bb0\u5f55\u5199\u5165\u7684\u4f4d\u7f6e\uff0c\u4ece\u5e93\u8bb0\u5f55\u8bfb\u53d6\u7684\u4f4d\u7f6e\u3002")),(0,i.kt)("p",null,"\u5f53\u4e3b\u4ece\u65ad\u8fde\u540e\uff0c\u4e3b\u5e93\u4f1a\u5c06\u63a5\u6536\u5230\u7684\u5199\u64cd\u4f5c\uff0c\u8bb0\u5f55\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"repl_backlog_buffer")," \u73af\u5f62\u7f13\u51b2\u533a\u4e2d\uff0c\u5e76\u8bb0\u5f55\u5199\u5165\u7684\u4f4d\u7f6e\uff0c\u6b64\u65f6\u4ece\u5e93\u8bb0\u5f55\u7684\u4f4d\u7f6e\u5219\u4e0d\u53d8\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u90a3\u4e48\u5f53\u8fde\u63a5\u6062\u590d\u540e\uff0c\u4e3b\u5e93\u4f9d\u636e\u4ece\u5e93\u53d1\u9001\u8fc7\u6765\u7684 offset\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u4ece\u5e93\u6b64\u65f6\u9700\u8981\u63a5\u6536\u90a3\u4e9b\u66f4\u65b0\u64cd\u4f5c\u4e86\u3002   "),(0,i.kt)("p",null,"\u4f46\u662f\u5982\u679c\u5931\u8fde\u65f6\u95f4\u8fc7\u4e45\uff0c\u6216\u8005\u5199\u5165\u538b\u529b\u5f88\u5927\uff0c\u5bfc\u81f4\u73af\u5f62\u7f13\u51b2\u533a\u88ab\u8986\u76d6\u4e86\uff0c\u8fd9\u65f6\u4ece\u5e93\u5219\u4e0d\u5f97\u4e0d\u91cd\u65b0\u8fdb\u884c\u5168\u91cf\u590d\u5236\u3002"))}d.isMDXComponent=!0},1674:function(e,t,r){t.Z=r.p+"assets/images/3.1-eba0f732ad69426264feb393981a55ff.png"},248:function(e,t,r){t.Z=r.p+"assets/images/3.2-0825b4747aca34718a34081628ca21b5.png"}}]);