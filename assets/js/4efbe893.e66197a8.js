"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[153],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9820:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=t(7462),i=t(3366),l=(t(7294),t(3905)),a=["components"],o={},u="redis \u57fa\u7840\u77e5\u8bc6",s={unversionedId:"redis/redis\u57fa\u7840",id:"redis/redis\u57fa\u7840",isDocsHomePage:!1,title:"redis \u57fa\u7840\u77e5\u8bc6",description:"redis \u5355\u7ebf\u7a0b\u7406\u89e3",source:"@site/docs-note/redis/1.redis\u57fa\u7840.md",sourceDirName:"redis",slug:"/redis/redis\u57fa\u7840",permalink:"/docusaurus/note/redis/redis\u57fa\u7840",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service",permalink:"/docusaurus/note/k8s/service"},next:{title:"redis\u65e5\u5fd7",permalink:"/docusaurus/note/redis/redis\u65e5\u5fd7"}},c=[{value:"redis \u5355\u7ebf\u7a0b\u7406\u89e3",id:"redis-\u5355\u7ebf\u7a0b\u7406\u89e3",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b",children:[],level:4},{value:"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5757",id:"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5757",children:[],level:4}],level:2},{value:"\u5e38\u89c1\u6570\u636e\u7c7b\u578b\u4e0e\u5e95\u5c42\u6570\u636e\u7ed3\u6784",id:"\u5e38\u89c1\u6570\u636e\u7c7b\u578b\u4e0e\u5e95\u5c42\u6570\u636e\u7ed3\u6784",children:[],level:2},{value:"\u5e38\u89c1\u7684\u6162\u64cd\u4f5c",id:"\u5e38\u89c1\u7684\u6162\u64cd\u4f5c",children:[],level:2}],p={toc:c};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"redis-\u57fa\u7840\u77e5\u8bc6"},"redis \u57fa\u7840\u77e5\u8bc6"),(0,l.kt)("h2",{id:"redis-\u5355\u7ebf\u7a0b\u7406\u89e3"},"redis \u5355\u7ebf\u7a0b\u7406\u89e3"),(0,l.kt)("p",null,"\u5728 6.0 \u7248\u672c\u4e4b\u524d\uff0credis \u5185\u90e8\u7684\u7f51\u7edcIO\u548c\u952e\u503c\u5bf9\u7684\u8bfb\u5199\u662f\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u5b8c\u6210\u7684\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f46\u7c7b\u4f3c\u6570\u636e\u6301\u4e45\u5316\u3001\u4e3b\u4ece\u540c\u6b65\u7b49\uff0c\u90fd\u662f\u591a\u7ebf\u7a0b\u5b8c\u6210\u7684\u3002\u6240\u4ee5\u672c\u8d28\u4e0a\uff0credis \u5e76\u4e0d\u662f\u4e00\u4e2a\u7edd\u5bf9\u7684\u5355\u7ebf\u7a0b\u670d\u52a1\u3002\n\u800c\u5b98\u65b9\u4e4b\u6240\u4ee5\u8fd9\u6837\u63cf\u8ff0\uff0c\u4e5f\u53ea\u662f\u56e0\u4e3a\u4ed6\u7684\u6838\u5fc3\u903b\u8f91\u90fd\u662f\u5355\u7ebf\u7a0b\u5b9e\u73b0\u7684\uff0c\u7136\u540e\u8fd8\u80fd\u63d0\u4f9b\u8fd9\u4e48\u9ad8\u7684\u5e76\u53d1\uff0c\u6574\u4f53\u542c\u4e0a\u53bb\u5c31\u5f88\u725b\u4e86\u3002"),(0,l.kt)("p",null,"\u5728 6.0 \u7248\u672c\u4e4b\u540e\uff0credis \u5728\u7f51\u7edcIO\u90e8\u5206\u5f15\u5165\u4e86\u591a\u7ebf\u7a0b\uff0c\u800c\u952e\u503c\u5bf9\u7684\u8bfb\u5199\u5219\u8fd8\u662f\u7531\u5355\u7ebf\u7a0b\u5b8c\u6210\u3002  "),(0,l.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5355\u7ebf\u7a0b\uff1f"),(0,l.kt)("p",null,"\u591a\u7ebf\u7a0b\u4e0e\u5355\u7ebf\u7a0b\u5404\u6709\u4f18\u52bf\uff0c\u8981\u5206\u4e0d\u540c\u7684\u573a\u666f\u6765\u770b\u3002\u4e00\u822c\u5e38\u8bf4\u7684\u573a\u666f\u6709\u4e24\u79cd\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n","1\u3001IO\u5bc6\u96c6\u578b\u3002\u5728\u6b64\u573a\u666f\u4e0b\uff0c\u591a\u7ebf\u7a0b\u5c06\u62e5\u6709\u66f4\u5927\u7684\u541e\u5410\u7387\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","2\u3001\u8ba1\u7b97\u5bc6\u96c6\u578b\u3002\u5728\u6b64\u573a\u666f\u4e0b\uff0c\u591a\u7ebf\u7a0b\u5b58\u5728\u4e00\u5b9a\u7684\u7cfb\u7edf\u8c03\u5ea6\u5f00\u9500\u3002   "),(0,l.kt)("p",null,"\u4f46\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u66f4\u590d\u6742\uff0c\u7279\u522b\u662f\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u3002"),(0,l.kt)("p",null,"redis \u91c7\u7528\u5355\u7ebf\u7a0b\u6700\u4e3b\u8981\u7684\u539f\u56e0\u662f",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u53d1\u8bbf\u95ee\u63a7\u5236"),"\u95ee\u9898\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5373\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u591a\u7ebf\u7a0b\u64cd\u4f5c\u5171\u4eab\u5185\u5b58\uff0c\u9700\u8981\u5f15\u5165\u9501\u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u548c\u5185\u5b58\u5b89\u5168\uff0c\u800c\u5355\u7ebf\u7a0b\u5219\u4e0d\u9700\u8981\u8003\u8651\u8fd9\u4e2a\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5 redis \u91c7\u7528\u5355\u7ebf\u7a0b\u53ef\u4ee5\u5f88\u597d\u7684\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5757"},"\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u4e5f\u8fd9\u4e48\u5757"),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u4e2d\u6211\u4eec\u4e5f\u7406\u89e3\u4e86\uff0c\u5355\u7ebf\u7a0b\u907f\u514d\u4e86\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u5f15\u5165\u9501\u673a\u5236\u7684\u3002\u8fd9\u4ec5\u662f\u7b97\u6cd5\u65b9\u9762\u3002"),(0,l.kt)("p",null,"redis \u5feb\u8fd8\u4f9d\u8d56\u4e8e\u4f18\u79c0\u7684 \u6570\u636e\u7ed3\u6784 \u548c IO\u591a\u8def\u590d\u7528\u3002"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u6570\u636e\u7c7b\u578b\u4e0e\u5e95\u5c42\u6570\u636e\u7ed3\u6784"},"\u5e38\u89c1\u6570\u636e\u7c7b\u578b\u4e0e\u5e95\u5c42\u6570\u636e\u7ed3\u6784"),(0,l.kt)("p",null,"\u5e38\u7528\u6570\u636e\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"string"),(0,l.kt)("li",{parentName:"ul"},"hash"),(0,l.kt)("li",{parentName:"ul"},"list"),(0,l.kt)("li",{parentName:"ul"},"set"),(0,l.kt)("li",{parentName:"ul"},"zset"),(0,l.kt)("li",{parentName:"ul"},"bitmap"),(0,l.kt)("li",{parentName:"ul"},"hyperloglog"),(0,l.kt)("li",{parentName:"ul"},"geo")),(0,l.kt)("p",null,"\u5176\u5e95\u5c42\u6570\u636e\u7ed3\u6784\u6709\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32\u3001\u53cc\u5411\u94fe\u8868\u3001\u538b\u7f29\u5217\u8868\u3001\u54c8\u5e0c\u8868\u3001\u8df3\u8868\u548c\u6574\u6570\u6570\u7ec4\u3002"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u7684\u6162\u64cd\u4f5c"},"\u5e38\u89c1\u7684\u6162\u64cd\u4f5c"),(0,l.kt)("p",null,"redis \u7684\u7279\u70b9\u5c31\u662f\u5feb\uff0c\u4f46\u662f\u5982\u679c\u64cd\u4f5c\u4e0d\u5f53\uff0c\u4e5f\u6709\u53ef\u80fd\u5f71\u54cd\u4e00\u4e9b\u6162\u64cd\u4f5c\u3002"))}d.isMDXComponent=!0}}]);