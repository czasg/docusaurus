"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[234],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3627:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(7462),l=t(3366),o=(t(7294),t(3905)),a=["components"],u={},i=void 0,c={unversionedId:"\u7591\u96be\u6742\u75c7/mysql",id:"\u7591\u96be\u6742\u75c7/mysql",isDocsHomePage:!1,title:"mysql",description:"\u7528\u6237\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u6743\u9650\u662f\u5426\u80fd\u88ab\u4fee\u6539\uff1f",source:"@site/docs-note/\u7591\u96be\u6742\u75c7/mysql.md",sourceDirName:"\u7591\u96be\u6742\u75c7",slug:"/\u7591\u96be\u6742\u75c7/mysql",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/mysql",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"k8s",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/k8s"},next:{title:"redis",permalink:"/docusaurus/note/\u7591\u96be\u6742\u75c7/redis"}},p=[{value:"\u7528\u6237\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u6743\u9650\u662f\u5426\u80fd\u88ab\u4fee\u6539\uff1f",id:"\u7528\u6237\u5efa\u7acb\u8fde\u63a5\u540e\u6743\u9650\u662f\u5426\u80fd\u88ab\u4fee\u6539",children:[],level:2},{value:"mysql \u8fc7\u591a\u957f\u8fde\u63a5\u5bfc\u81f4\u5185\u5b58\u8fc7\u5927\uff1f",id:"mysql-\u8fc7\u591a\u957f\u8fde\u63a5\u5bfc\u81f4\u5185\u5b58\u8fc7\u5927",children:[],level:2},{value:"\u4ec0\u4e48\u662f\u4e8b\u52a1\uff1f",id:"\u4ec0\u4e48\u662f\u4e8b\u52a1",children:[],level:2},{value:"MyISAM \u548c InnoDB \u5bf9\u6bd4\u5982\u4f55\uff1f",id:"myisam-\u548c-innodb-\u5bf9\u6bd4\u5982\u4f55",children:[],level:2},{value:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528\u957f\u4e8b\u52a1\uff1f",id:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528\u957f\u4e8b\u52a1",children:[],level:2},{value:"\u5982\u4f55\u51cf\u5c11\u6570\u636e\u5e93\u56de\u8868\uff1f",id:"\u5982\u4f55\u51cf\u5c11\u6570\u636e\u5e93\u56de\u8868",children:[],level:2}],s={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7528\u6237\u5efa\u7acb\u8fde\u63a5\u540e\u6743\u9650\u662f\u5426\u80fd\u88ab\u4fee\u6539"},"\u7528\u6237\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u6743\u9650\u662f\u5426\u80fd\u88ab\u4fee\u6539\uff1f"),(0,o.kt)("p",null,"\u7528\u6237\u7684\u6743\u9650\u6821\u9a8c\uff0c\u662f\u5728\u8fde\u63a5\u5efa\u7acb\u65f6\u8fdb\u884c\u7684\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u5df2\u5efa\u7acb\u8fde\u63a5\u7684\u7528\u6237\uff0c\u662f\u4e0d\u751f\u6548\u7684\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"mysql-\u8fc7\u591a\u957f\u8fde\u63a5\u5bfc\u81f4\u5185\u5b58\u8fc7\u5927"},"mysql \u8fc7\u591a\u957f\u8fde\u63a5\u5bfc\u81f4\u5185\u5b58\u8fc7\u5927\uff1f"),(0,o.kt)("p",null,"mysql \u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4e34\u65f6\u4f7f\u7528\u7684\u5185\u5b58\u662f\u7ba1\u7406\u5728\u8fde\u63a5\u5bf9\u8c61\u4e2d\u7684\u3002\u8fd9\u4e9b\u8d44\u6e90\u53ea\u6709\u5728\u8fde\u63a5\u65ad\u5f00\u65f6\u624d\u4f1a\u88ab\u91ca\u653e\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u957f\u8fde\u63a5\u79ef\u7d2f\u8fc7\u591a\uff0c\u4f1a\u5bfc\u81f4\u5185\u5b58\u5360\u7528\u8fc7\u591a\uff0c\u6700\u7ec8 OOM\uff0c\u4ece\u73b0\u8c61\u770b\u5c31\u662f mysql \u5f02\u5e38\u91cd\u542f\u4e86\u3002"),(0,o.kt)("p",null,"\u9488\u5bf9\u8fd9\u79cd\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u4e24\u79cd\u65b9\u6848\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001\u5b9a\u671f\u65ad\u5f00\u957f\u8fde\u63a5\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6700\u5927\u5b58\u6d3b\u65f6\u95f4\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","2\u3001\u5982\u679c\u662f mysql5.7 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u53ef\u4ee5\u6267\u884c mysql_reset_connection \u6765\u91cd\u7f6e\u548c\u521d\u59cb\u5316\u8fde\u63a5\u8d44\u6e90\u3002    "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662f\u4e8b\u52a1"},"\u4ec0\u4e48\u662f\u4e8b\u52a1\uff1f"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u7684\u6bd4\u8f83\u591a\u7684\u5c31\u662f\u6570\u636e\u5e93\u4e8b\u52a1\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4ed6\u662f\u5bf9\u4e00\u6279\u5f85\u6267\u884c\u547d\u4ee4\u7684\u7b80\u79f0\uff0c\u8fd9\u6279\u547d\u4ee4\u8981\u4e48\u5168\u90e8\u6267\u884c\uff0c\u8981\u4e48\u5168\u90e8\u4e0d\u6267\u884c\u3002    "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"myisam-\u548c-innodb-\u5bf9\u6bd4\u5982\u4f55"},"MyISAM \u548c InnoDB \u5bf9\u6bd4\u5982\u4f55\uff1f"),(0,o.kt)("p",null,"1\u3001InnoDB \u652f\u6301\u4e8b\u52a1\uff0c\u800c MyISAM \u4e0d\u652f\u6301\u4e8b\u52a1",(0,o.kt)("br",{parentName:"p"}),"\n","2\u3001InnoDB \u57fa\u4e8e WAL \u673a\u5236\uff0c\u63d0\u4f9b crash-safe \u4fdd\u969c\u6570\u636e\u4e0d\u4e22\u5931    "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528\u957f\u4e8b\u52a1"},"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528\u957f\u4e8b\u52a1\uff1f"),(0,o.kt)("p",null,"\u6570\u636e\u5e93\u7531\u4e8e\u591a\u7248\u672c\u5e76\u53d1\u63a7\u5236\uff0c\u5728\u4e8b\u52a1\u6267\u884c\u671f\u95f4\uff0c\u4f1a\u751f\u6210\u7248\u672c\u89c6\u56fe\u3002\u5f53\u4e8b\u52a1\u5b58\u5728\u7684\u65f6\u95f4\u8d8a\u4e45\uff0c\u90a3\u4e48\u7cfb\u7edf\u4e2d\u5c31\u4f1a\u5b58\u5728\u8d8a\u591a\u7684\u5386\u53f2\u89c6\u56fe\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u56e0\u4e3a\u4e8b\u52a1\u662f\u9700\u8981\u53ef\u56de\u6eda\uff0c\u5728\u957f\u4e8b\u52a1\u7ed3\u675f\u524d\u90fd\u4e0d\u80fd\u91ca\u653e\u8fd9\u4e9b\u5386\u53f2\u8bb0\u5f55\uff0c\u8fd9\u56de\u5bfc\u81f4\u5360\u7528\u5927\u91cf\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u5982\u4f55\u51cf\u5c11\u6570\u636e\u5e93\u56de\u8868"},"\u5982\u4f55\u51cf\u5c11\u6570\u636e\u5e93\u56de\u8868\uff1f"),(0,o.kt)("p",null,"\u4ee5 B+\u6811 \u7d22\u5f15\u4e3a\u4f8b\uff0c\u5b58\u5728\u4e24\u7c7b\u7d22\u5f15\uff0c\u4e00\u79cd\u65f6\u4e3b\u952e\u7d22\u5f15\uff0c\u4e00\u79cd\u662f\u666e\u901a\u7d22\u5f15\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e3b\u952e\u7d22\u5f15\u7684\u53f6\u5b50\u8282\u70b9\u5b58\u50a8\u7684\u662f\u6574\u884c\u6570\u636e\uff0c\u800c\u666e\u901a\u7d22\u5f15\u53f6\u5b50\u8282\u70b9\u5b58\u50a8\u7684\u662f\u4e3b\u952e\u7d22\u5f15\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u800c\u56de\u8868\u5c31\u662f\u67e5\u8be2\u666e\u901a\u7d22\u5f15\u83b7\u53d6\u4e3b\u952e\u7d22\u5f15\u7684\u503c\uff0c\u7136\u540e\u518d\u901a\u8fc7\u4e3b\u952e\u503c\u53bb\u4e3b\u952e\u7d22\u5f15\u518d\u6b21\u641c\u7d22\u7684\u8fc7\u7a0b\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u56de\u8868\u4f1a\u5927\u5927\u964d\u4f4e\u6570\u636e\u5e93\u7684\u6027\u80fd\u3002"),(0,o.kt)("p",null,"\u5e38\u89c1\u7684\u51cf\u5c11\u6570\u636e\u5e93\u56de\u8868\u7684\u63aa\u65bd\u6709\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001\u8986\u76d6\u7d22\u5f15\uff1a\u666e\u901a\u7d22\u5f15\u4e2d\u7684\u4fe1\u606f\u5df2\u7ecf\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\u65f6\uff0c\u5219\u4e0d\u4f1a\u518d\u56de\u8868\u67e5\u8be2\u3002\u5e38\u89c1\u7684\u6709\u67e5\u8be2\u4e3b\u952eID\uff0c\u6216\u8005\u8054\u5408\u7d22\u5f15\u4e2d\u5b58\u5728\u5f85\u67e5\u8be2\u5b57\u6bb5\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","2\u3001\u7d22\u5f15\u4e0b\u63a8\uff1a\u7d22\u5f15\u67e5\u8be2\u65f6\u4f1a\u6709\u5fc3\u554a\u8fc7\u6ee4\u6389\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684\u7d22\u5f15\uff0c\u4ee5\u6b64\u51cf\u5c11\u56de\u8868\u6b21\u6570\u3002"))}m.isMDXComponent=!0}}]);