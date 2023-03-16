"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8756],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),o=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=o(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=o(t),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(k,p(p({ref:r},d),{},{components:t})):n.createElement(k,p({ref:r},d))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},538:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=t(7462),a=(t(7294),t(3905));const i={title:"redis \u6301\u4e45\u5316",sidebar_label:"redis\u6301\u4e45\u5316"},p=void 0,s={unversionedId:"redis/redis\u6301\u4e45\u5316",id:"redis/redis\u6301\u4e45\u5316",title:"redis \u6301\u4e45\u5316",description:"redis \u5c5e\u4e8e\u5185\u5b58\u6570\u636e\u5e93\uff0c\u4e00\u65e6\u670d\u52a1\u505c\u6b62\uff0c\u5185\u5b58\u4e2d\u7684\u6570\u636e\u5c31\u4f1a\u4e22\u5931\u3002",source:"@site/docs-note/redis/2.redis\u6301\u4e45\u5316.md",sourceDirName:"redis",slug:"/redis/redis\u6301\u4e45\u5316",permalink:"/docusaurus/note/redis/redis\u6301\u4e45\u5316",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"redis \u6301\u4e45\u5316",sidebar_label:"redis\u6301\u4e45\u5316"},sidebar:"tutorialSidebar",previous:{title:"redis\u57fa\u7840",permalink:"/docusaurus/note/redis/redis\u57fa\u7840"},next:{title:"redis\u4e3b\u4ece\u673a\u5236",permalink:"/docusaurus/note/redis/redis\u4e3b\u4ece\u673a\u5236"}},l={},o=[{value:"AOF\uff08Append Only File\uff09",id:"aofappend-only-file",level:2},{value:"AOF \u91cd\u5199\u673a\u5236",id:"aof-\u91cd\u5199\u673a\u5236",level:4},{value:"RDB\uff08Redis DataBase\uff09",id:"rdbredis-database",level:2}],d={toc:o},u="wrapper";function c(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"redis \u5c5e\u4e8e\u5185\u5b58\u6570\u636e\u5e93\uff0c\u4e00\u65e6\u670d\u52a1\u505c\u6b62\uff0c\u5185\u5b58\u4e2d\u7684\u6570\u636e\u5c31\u4f1a\u4e22\u5931\u3002"),(0,a.kt)("p",null,"\u4f46\u5982\u679c\u662f\u4f5c\u4e3a\u7f13\u5b58\u4f7f\u7528\uff0c\u6570\u636e\u4e22\u5931\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff0c\u53ea\u9700\u8981\u53ca\u65f6\u6062\u590d\u6570\u636e\u5373\u53ef\u3002\u5e38\u89c1\u7684\u6062\u590d\u65b9\u6cd5\u6709\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","1\u3001\u5c06\u6570\u636e\u4ece\u6570\u636e\u5e93\u518d\u5199\u5165 redis\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001\u4f9d\u8d56 redis \u6301\u4e45\u5316\u673a\u5236\u6062\u590d\u6570\u636e\u3002     "),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd redis \u7684\u6301\u4e45\u5316\u673a\u5236\uff0c\u76ee\u524d\uff0credis \u7684\u6301\u4e45\u5316\u673a\u5236\u4e3b\u8981\u6709 AOF \u65e5\u5fd7\u548c RDB \u5feb\u7167\u3002"),(0,a.kt)("h2",{id:"aofappend-only-file"},"AOF\uff08Append Only File\uff09"),(0,a.kt)("p",null,"\u65e5\u5fd7\u7684\u4e3b\u8981\u4f5c\u7528\u5c31\u662f\u8bb0\u5f55\u4fe1\u606f\u3002\n\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u6211\u4eec\u719f\u6089\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5199\u524d\u65e5\u5fd7"),"\uff08WAL - write ahead log\uff09\uff0c\u5c31\u662f\u5728\u6570\u636e\u5199\u5165\u524d\uff0c\u4f1a\u5148\u628a\u8fd9\u6b21\u4fee\u6539\u7684\u6570\u636e\u8bb0\u5f55\u5230\u65e5\u5fd7\u4e2d\uff0c\u4ee5\u4fbf\u6545\u969c\u65f6\u6062\u590d\u3002   "),(0,a.kt)("p",null,"\u5728 redis \u4e2d\u6b63\u597d\u76f8\u53cd\uff0cAOF \u662f\u5199\u540e\u65e5\u5fd7\uff0c\u5373\u5148\u6267\u884c\u547d\u540d\u5c06\u6570\u636e\u5199\u5165\u5185\u5b58\uff0c\u518d\u8bb0\u5f55\u65e5\u5fd7\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u56e0\u4e3a redis \u662f\u57fa\u4e8e\u5185\u5b58\u64cd\u4f5c\u7684\uff0c\u4ed6\u7684\u7279\u70b9\u5c31\u662f\u5feb\uff0c\u5982\u679c\u5f3a\u884c\u518d\u64cd\u4f5c\u524d\u52a0\u5165\u78c1\u76d8IO\u64cd\u4f5c\uff0c\u90a3\u6beb\u65e0\u7591\u95ee\u6027\u80fd\u4f1a\u5927\u6253\u6298\u6263\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5 redis \u7684 AOF \u65e5\u5fd7\u91c7\u7528\u7684\u662f\u5199\u540e\u64cd\u4f5c\uff0c\u5e76\u4e0d\u4f1a\u963b\u585e\u5f53\u524d\u5199\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u4e86\u89e3 AOF \u4e4b\u540e\uff0c\u8bf4\u4e0b AOF \u5b58\u5728\u7684\u4e24\u4e2a\u7f3a\u9677\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","1\u3001\u5982\u679c\u6267\u884c\u5b8c\u4e00\u4e2a\u6307\u4ee4\u540e\uff0c\u7cfb\u7edf\u5c31\u5b95\u673a\u4e86\uff0c\u90a3\u8fd9\u6b21\u8bf7\u6c42\u5c06\u65e0\u6cd5\u6062\u590d\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001AOF \u91c7\u7528\u7684\u5199\u540e\u65e5\u5fd7\uff0c\u867d\u7136\u53ef\u4ee5\u907f\u514d\u963b\u585e\u5f53\u524d\u8bf7\u6c42\uff0c\u4f46\u662f\u53ef\u80fd\u4f1a\u5bf9\u540e\u9762\u7684\u8bf7\u6c42\u9020\u6210\u5f71\u54cd\u3002\u7279\u522b\u662f\u5f53\u78c1\u76d8\u6027\u80fd\u5b58\u5728\u538b\u529b\u65f6\uff0c\u4f1a\u5bfc\u81f4\u963b\u585e\u3002    "),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u7f3a\u9677\u662f\u786c\u4f24\uff0c\u5982\u679c\u9700\u8981\u505a\u5230\u7edd\u5bf9\u6062\u590d\uff0c\u5e94\u8be5\u5c06\u6570\u636e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\uff0c\u8fd9\u6837\u53ef\u4ee5\u518d\u6b21\u5199\u5165\u5230 redis\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7b2c\u4e8c\u4e2a\u7f3a\u9677\uff0c\u6709\u4e0d\u540c\u7684\u5199\u56de\u7b56\u7565\uff0c\u5305\u62ec\uff1a    "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Always"),"\uff1a\u540c\u6b65\u5199\u56de\u3002\u6bcf\u4e2a\u5199\u547d\u4ee4\u6267\u884c\u5b8c\u6210\uff0c\u7acb\u9a6c\u5c06\u65e5\u5fd7\u5199\u5165\u78c1\u76d8\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Everysec"),"\uff1a\u6bcf\u79d2\u5199\u56de\u3002\u6bcf\u6b21\u6267\u884c\u547d\u540d\uff0c\u53ea\u662f\u5c06\u65e5\u5fd7\u5199\u5230 AOF \u6587\u4ef6\u5185\u5b58\u7f13\u51b2\u533a\uff0c\u6bcf\u9694\u4e00\u79d2\u628a\u7f13\u51b2\u533a\u4e2d\u7684\u5185\u5b58\u5199\u56de\u78c1\u76d8\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No"),"\uff1a\u7531\u64cd\u4f5c\u7cfb\u7edf\u63a7\u5236\u5199\u56de\u3002\u6bcf\u6b21\u6267\u884c\u5b8c\u6307\u4ee4\u540e\u5c31\u4e0d\u7ba1\u4e86\uff0c\u7531\u64cd\u4f5c\u7cfb\u7edf\u51b3\u5b9a\u4f55\u65f6\u5c06\u7f13\u51b2\u533a\u5185\u5b58\u5199\u56de\u78c1\u76d8\u3002")),(0,a.kt)("p",null,"AOF \u7528\u4e8e\u5b58\u50a8\u5177\u4f53\u7684\u6267\u884c\u547d\u4ee4\uff0c\u4f46\u662f\u5f53\u7cfb\u7edf\u8fd0\u884c\u65f6\u95f4\u8db3\u591f\u957f\uff0c\u53ef\u80fd\u79ef\u7d2f\u7684 AOF \u6587\u4ef6\u5c31\u8d8a\u6765\u8d8a\u5927\u4e86\uff0c\u8fd9\u6837\u6062\u590d\u6570\u636e\u7684\u65f6\u5019\uff0c\u4e5f\u4f1a\u5341\u5206\u7684\u8017\u65f6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0credis \u652f\u6301 AOF \u91cd\u5199\uff0c\u91cd\u5199\u7684\u610f\u601d\u5c31\u662f\u5c06 AOF \u91cd\u65b0\u8fdb\u884c\u4e00\u904d\u6574\u7406\u3001\u5408\u5e76\u3002\u8fd9\u6837\u53ef\u4ee5\u7cbe\u7b80 AOF \u6587\u4ef6\u3002"),(0,a.kt)("h4",{id:"aof-\u91cd\u5199\u673a\u5236"},"AOF \u91cd\u5199\u673a\u5236"),(0,a.kt)("p",null,"\u5728 redis \u4e2d\uff0c\u5bf9\u4e00\u4e2a\u952e\u8fdb\u884c\u4e86 N \u6b21\u4fee\u6539\uff0c\u90a3\u5176\u5b9e\u6700\u7ec8\u53ea\u6709\u6700\u540e\u4e00\u6b21\u4fee\u6539\u624d\u6709\u4fdd\u5b58\u7684\u610f\u4e49\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8fd9\u6837\u7ecf\u8fc7 AOF \u91cd\u5199\u4e4b\u540e\uff0c\u9488\u5bf9\u8fd9\u4e2a\u952e\u7684\u65e5\u5fd7\uff0c\u5c06\u4ec5\u4fdd\u7559\u6700\u540e\u4e00\u6761\u3002"),(0,a.kt)("p",null,'\u5728 redis \u8fd9\u79cd"\u5355\u7ebf\u7a0b"\u6a21\u578b\u4e2d\uff0c\u963b\u585e\u662f\u975e\u5e38\u81f4\u547d\u7684\u3002\u6240\u4ee5\u4f1a\u8bbe\u8ba1\u5404\u79cd\u673a\u5236\u6765\u907f\u514d\u76f4\u63a5\u963b\u585e redis \u64cd\u4f5c\u3002',(0,a.kt)("br",{parentName:"p"}),"\n","AOF \u91cd\u5199\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u6267\u884c\u91cd\u5199\u8fc7\u7a0b\uff0c\u671f\u95f4\u65b0\u6765\u7684\u6570\u636e\uff0c\u4f1a\u88ab\u8bb0\u5f55\u5230 AOF \u91cd\u5199\u7f13\u51b2\u533a\u3002\n\u5f53\u91cd\u5199\u5b8c\u6210\u540e\uff0c\u4f1a\u518d\u5c06\u7f13\u51b2\u533a\u7684\u6570\u636e\u5199\u5165\u5230\u65b0\u7684AOF\u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("h2",{id:"rdbredis-database"},"RDB\uff08Redis DataBase\uff09"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053 AOF \u65e5\u5fd7\u673a\u5236\uff0c\u4ed6\u4f1a\u8bb0\u5f55\u5177\u4f53\u7684\u6267\u884c\u6307\u4ee4\uff0c\n\u90a3\u4e48\u6062\u590d\u6570\u636e\u65f6\u5c31\u4f1a\u6709\u4e00\u4e2a\u56de\u653e\u6307\u4ee4\u7684\u884c\u4e3a\uff0c\u5f53\u6570\u636e\u91cf\u7279\u522b\u5927\u65f6\uff0c\u6062\u590d\u662f\u9700\u8981\u5f88\u4e45\u7684\u3002\n\u6240\u4ee5 redis \u8fd8\u652f\u6301\u53e6\u4e00\u79cd\u6301\u4e45\u5316\uff0c",(0,a.kt)("strong",{parentName:"p"},"RDB \u5185\u5b58\u5feb\u7167"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bb0\u5f55\u5177\u4f53\u7684\u6570\u636e\uff0c\u4ee5\u4fbf\u76f4\u63a5\u6062\u590d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u548c AOF \u76f8\u6bd4\uff0cRDB \u8bb0\u5f55\u7684\u662f\u67d0\u4e00\u65f6\u523b\u7684\u5168\u91cf\u6570\u636e\u3002redis \u652f\u6301\u4e24\u79cd\u5168\u91cf\u5feb\u7167\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","1\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"save"),"\uff0c\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u4f1a\u5bfc\u81f4 redis \u963b\u585e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"bgsave"),"\uff0c\u521b\u5efa\u5b50\u8fdb\u7a0b\u6267\u884c\u5168\u91cf\u5feb\u7167\uff0c\u907f\u514d redis \u963b\u585e\u3002  "),(0,a.kt)("p",null,"\u5728 save \u5feb\u7167\u751f\u6210\u671f\u95f4\uff0credis \u5904\u4e8e\u963b\u585e\u72b6\u6001\uff0c\u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\uff0c\u6240\u4ee5\u7f13\u5b58\u6570\u636e\u4e00\u81f4\u6027\u53ef\u4ee5\u5f97\u5230\u4fdd\u969c\u3002\u5373\u5168\u91cf\u5feb\u7167\u751f\u6210\u7684 RDB \u6570\u636e\u4e00\u5b9a\u548c\u5185\u5b58\u4e2d\u6570\u636e\u4e00\u81f4\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5728 bgsave \u5feb\u7167\u751f\u6210\u671f\u95f4\uff0c\u4f9d\u8d56\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5199\u65f6\u590d\u5236\u6280\u672f"),"\uff08Copy-On-Write, COW\uff09\uff0c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5373\u5728\u5feb\u7167\u751f\u6210\u671f\u95f4\uff0c\u5982\u679c\u662f\u8bfb\u8bf7\u6c42\uff0c\u90a3\u4e48\u5b8c\u5168\u4e0d\u4f1a\u6709\u51b2\u7a81\u3002\n\u4f46\u5982\u679c\u662f\u5199\u8bf7\u6c42\uff0c\u6570\u636e\u5c31\u4f1a\u88ab\u62f7\u8d1d\u4e00\u4efd\uff0c\u6b64\u65f6 redis \u4e3b\u7ebf\u7a0b\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u6570\u636e\uff0c\u800c bgsave \u7ebf\u7a0b\u5219\u8bfb\u53d6\u526f\u672c\u6570\u636e\uff0c\u5e76\u5c06\u5176\u5199\u5165 RDB \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="redis save \u5e38\u89c1\u914d\u7f6e"',title:'"redis',save:!0,'\u5e38\u89c1\u914d\u7f6e"':!0},"save 900 1\nsave 300 10\nsave 60 10000\n")),(0,a.kt)("p",null,"1\u3001\u5728 900\u79d2 \u540e\u6709 1\u6b21 \u66f4\u65b0\uff0c\u5c31\u8fdb\u884c\u6301\u4e45\u5316\u64cd\u4f5c",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001\u5728 300\u79d2 \u540e\u6709 10\u6b21 \u66f4\u65b0\uff0c\u5c31\u8fdb\u884c\u6301\u4e45\u5316\u64cd\u4f5c",(0,a.kt)("br",{parentName:"p"}),"\n","3\u3001\u5728 60\u79d2 \u540e\u6709 10000\u6b21 \u66f4\u65b0\uff0c\u5c31\u8fdb\u884c\u6301\u4e45\u5316\u64cd\u4f5c"))}c.isMDXComponent=!0}}]);