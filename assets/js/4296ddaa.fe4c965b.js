"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3750],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=l,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7787:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(7462),l=t(3366),o=(t(7294),t(3905)),a=["components"],i={title:"mysql \u57fa\u7840\u77e5\u8bc6",sidebar_label:"mysql\u57fa\u7840"},p=void 0,u={unversionedId:"mysql/mysql\u57fa\u7840",id:"mysql/mysql\u57fa\u7840",isDocsHomePage:!1,title:"mysql \u57fa\u7840\u77e5\u8bc6",description:"MySQL \u662f RDBMS\uff08\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff09\u5e94\u7528\u8f6f\u4ef6\u4e4b\u4e00\uff0c\u7b80\u5355\u70b9\u7406\u89e3\uff0c\u662f\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u3001\u7ba1\u7406\u3001\u8bbf\u95ee\u6570\u636e\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5e94\u7528\u3002",source:"@site/docs-note/mysql/1.mysql\u57fa\u7840.md",sourceDirName:"mysql",slug:"/mysql/mysql\u57fa\u7840",permalink:"/docusaurus/note/mysql/mysql\u57fa\u7840",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"mysql \u57fa\u7840\u77e5\u8bc6",sidebar_label:"mysql\u57fa\u7840"},sidebar:"tutorialSidebar",previous:{title:"Service",permalink:"/docusaurus/note/k8s/service"},next:{title:"mysql\u65e5\u5fd7",permalink:"/docusaurus/note/mysql/mysql\u65e5\u5fd7"}},c=[{value:"mysql \u57fa\u7840\u67b6\u6784",id:"mysql-\u57fa\u7840\u67b6\u6784",children:[],level:2},{value:"\u67e5\u8be2\u4e00\u6761\u8bed\u53e5",id:"\u67e5\u8be2\u4e00\u6761\u8bed\u53e5",children:[],level:2},{value:"\u66f4\u65b0\u4e00\u6761\u8bed\u53e5",id:"\u66f4\u65b0\u4e00\u6761\u8bed\u53e5",children:[{value:"redo log",id:"redo-log",children:[],level:4},{value:"binlog",id:"binlog",children:[],level:4}],level:2},{value:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",children:[],level:2}],s={toc:c};function m(e){var n=e.components,i=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MySQL \u662f RDBMS\uff08\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff09\u5e94\u7528\u8f6f\u4ef6\u4e4b\u4e00\uff0c\u7b80\u5355\u70b9\u7406\u89e3\uff0c\u662f\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u3001\u7ba1\u7406\u3001\u8bbf\u95ee\u6570\u636e\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5e94\u7528\u3002"),(0,o.kt)("h2",{id:"mysql-\u57fa\u7840\u67b6\u6784"},"mysql \u57fa\u7840\u67b6\u6784"),(0,o.kt)("p",null,"MySQL \u53ef\u4ee5\u5206\u4e3a\u670d\u52a1\u5c42\u548c\u5b58\u50a8\u5f15\u64ce\u5c42\u4e24\u4e2a\u6a21\u5757\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:t(3698).Z}),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5c42"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5668\uff1a\u8d1f\u8d23\u4e0e\u5ba2\u6237\u7aef\u5efa\u7acb\u8fde\u63a5\uff0c\u83b7\u53d6\u6743\u9650\uff0c\u7ef4\u6301\u548c\u7ba1\u7406\u8fde\u63a5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u7f13\u5b58\uff1a\u5bf9\u4e8e\u67e5\u8be2\u8bf7\u6c42\uff0c\u4f1a\u5148\u5230\u67e5\u8be2\u7f13\u5b58\u67e5\u770b\u662f\u5426\u5b58\u5728\u7f13\u5b58\uff0c\u5b58\u5728\u5219\u4f1a\u76f4\u63a5\u8fd4\u56de\u3002"),(0,o.kt)("li",{parentName:"ul"},'\u5206\u6790\u5668\uff1a\u5bf9\u6267\u884c\u8bed\u53e5\u505a"\u8bcd\u6cd5\u5206\u6790"\uff0c\u5b58\u5728\u903b\u8f91\u9519\u8bef\u6216\u8005\u8d44\u6e90\u9519\u8bef\uff0c\u4f1a\u5728\u6b64\u5904\u629b\u51fa\u5f02\u5e38\u3002'),(0,o.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5668\uff1a\u5f53\u5b58\u5728\u7d22\u5f15\u65f6\uff0c\u4f18\u5316\u5668\u4f1a\u6839\u636e\u5f53\u524d\u8868\u60c5\u51b5\uff0c\u9009\u62e9\u6700\u4f73\u7684\u6267\u884c\u65b9\u5f0f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u5668\uff1a\u8c03\u7528\u5f15\u64ce\u5c42\u63a5\u53e3\u6267\u884c\u547d\u4ee4\u3002\u6267\u884c\u524d\u4f1a\u5148\u68c0\u67e5\u8868\u7684\u6743\u9650\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u5f15\u64ce\u5c42"),"\uff0c\u8d1f\u8d23\u63d0\u4f9b\u6570\u636e\u7684\u5b58\u50a8\u548c\u63d0\u53d6\u3002\u5176\u67b6\u6784\u6a21\u5f0f\u662f\u63d2\u4ef6\u5f0f\u7684\u3002\u9ed8\u8ba4\u5f15\u64ce\u662f InnoDB\u3002"),(0,o.kt)("h2",{id:"\u67e5\u8be2\u4e00\u6761\u8bed\u53e5"},"\u67e5\u8be2\u4e00\u6761\u8bed\u53e5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE ID = 6;\n")),(0,o.kt)("p",null,"\u5728\u6b64 sql \u4e2d\uff0c\u5047\u8bbe\u6ca1\u6709\u7d22\u5f15\uff0c\u90a3\u4e48\u4e00\u6b21\u7b80\u5355\u7684\u67e5\u8be2\u6d41\u7a0b\u7c7b\u4f3c\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001\u8c03\u7528 InnoDB \u5f15\u64ce\u63a5\u53e3\u83b7\u53d6 table \u8868\u7684\u7b2c\u4e00\u884c\u6570\u636e\uff0c\u5224\u65ad ID \u662f\u5426\u7b49\u4e8e 10\uff0c\u5982\u679c\u662f\u5219\u5c06\u8fd9\u884c\u6570\u636e\u5b58\u50a8\u5728\u7ed3\u679c\u96c6\u4e2d\uff0c\u4e0d\u662f\u5219\u8df3\u8fc7\u3002\n2\u3001\u8c03\u7528 InnoDB \u5f15\u64ce\u63a5\u53e3\u83b7\u53d6\u4e0b\u4e00\u884c\uff0c\u91cd\u590d\u5224\u65ad\u5e76\u6267\u884c\uff0c\u76f4\u81f3\u8868\u6570\u636e\u5168\u90e8\u6267\u884c\u5b8c\u3002"),(0,o.kt)("h2",{id:"\u66f4\u65b0\u4e00\u6761\u8bed\u53e5"},"\u66f4\u65b0\u4e00\u6761\u8bed\u53e5"),(0,o.kt)("p",null,"\u66f4\u65b0\u6d41\u7a0b\u548c\u67e5\u8be2\u6d41\u7a0b\u4e0d\u4e00\u6837\uff0c\u8fd8\u6d89\u53ca\u5230\u65e5\u5fd7\u6a21\u5757\uff1a",(0,o.kt)("strong",{parentName:"p"},"redo log"),"\uff08\u91cd\u505a\u65e5\u5fd7\uff09 \u548c ",(0,o.kt)("strong",{parentName:"p"},"binlog"),"\uff08\u5f52\u6863\u65e5\u5fd7\uff09\u3002"),(0,o.kt)("h4",{id:"redo-log"},"redo log"),(0,o.kt)("p",null,"redo log \u662f InnoDB \u7279\u6709\u7684\u4e00\u79cd\u65e5\u5fd7\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5b83\u5176\u5b9e\u662f\u6211\u4eec\u5e38\u8bf4\u7684 WAL\uff08Write-Ahead Logging\uff09\u9884\u5199\u65e5\u5fd7\u7684\u4e00\u79cd\u5b9e\u73b0\uff0c\u5373\u5148\u5199\u65e5\u5fd7\uff0c\u518d\u5199\u78c1\u76d8\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5177\u4f53\u6765\u8bf4\u5c31\u662f\uff0cInnoDB \u4f1a\u5148\u628a\u65e5\u5fd7\u8bb0\u5f55\u5199\u5230 redo log \u4e2d\uff0c\u7136\u540e\u66f4\u65b0\u5185\u5b58\uff0c\u6b64\u65f6\u5c31\u7b97\u5b8c\u6210\u4e86\u66f4\u65b0\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u540e\u7eed InnoDB \u5f15\u64ce\u4f1a\u518d\u9002\u5f53\u7684\u65f6\u5019\uff0c\u5c06\u8fd9\u4e2a\u64cd\u4f5c\u8bb0\u5f55\u5237\u65b0\u5230\u78c1\u76d8\u91cc\u3002\u8fd9\u79cd\u4e00\u822c\u662f\u518d\u7cfb\u7edf\u6bd4\u8f83\u7a7a\u95f2\u7684\u65f6\u5019\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u901a\u8fc7 redo log\uff0cInnoDB \u5f15\u64ce\u4e5f\u5b9e\u73b0\u4e86 crash-safe \u80fd\u529b\u3002"),(0,o.kt)("h4",{id:"binlog"},"binlog"),(0,o.kt)("p",null,"\u548c redo log \u8fd9\u7c7b\u5f15\u64ce\u65e5\u5fd7\u4e0d\u540c\uff0cbinlog \u662f\u670d\u52a1\u5c42\u7684\u65e5\u5fd7\u3002\u4e3a\u4ec0\u4e48\u4f1a\u6709\u4e24\u4efd\u65e5\u5fd7\u5462\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u56e0\u4e3a\u6700\u521d mysql \u9ed8\u8ba4\u5f15\u64ce\u662f MyISAM\uff0c\u4ed6\u6ca1\u6709 crash-safe \u7684\u80fd\u529b\uff0c\u540e\u9762\u7684 InnoDB \u5f15\u64ce\u5bf9\u6b64\u8fdb\u884c\u4e86\u8865\u5145\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e24\u79cd\u65e5\u5fd7\u6709\u4e00\u5b9a\u7684\u533a\u522b\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001redo log \u662f\u5f15\u64ce\u7279\u6709\u7684\u65e5\u5fd7\u3002binlog \u662f mysql \u670d\u52a1\u5c42\u5b9e\u73b0\u7684\uff0c\u6240\u6709\u5f15\u64ce\u90fd\u53ef\u4ee5\u8bb0\u5f55\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",'2\u3001redo log \u662f\u7269\u7406\u65e5\u5fd7\uff0c\u8bb0\u5f55\u7684\u662f\u518d\u67d0\u4e2a\u6570\u636e\u9875\u4e0a\u505a\u51fa\u4e86\u4ec0\u4e48\u4fee\u6539\u3002binlog \u662f\u903b\u8f91\u65e5\u5fd7\uff0c\u8bb0\u5f55\u7684\u662f\u8bed\u53e5\u7684\u539f\u59cb\u903b\u8f91\u3002\u7c7b\u4f3c\uff1a"\u7ed9ID\u4e3a2\u7684c\u5b57\u6bb5\u52a0\u4e00"',(0,o.kt)("br",{parentName:"p"}),"\n","3\u3001redo log \u662f\u5faa\u73af\u5199\uff0cbinlog \u662f\u8ffd\u52a0\u5199\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE table SET c = c + 1 WHERE ID = 2;\n")),(0,o.kt)("p",null,"\u518d\u6b64 sql \u4e2d\uff0c\u5047\u8bbe\u6709\u4e3b\u952e\u7d22\u5f15\uff0c\u90a3\u4e48\u4e00\u6b21\u7b80\u5355\u7684\u66f4\u65b0\u6d41\u7a0b\u7c7b\u4f3c\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001\u6267\u884c\u5668\u5148\u627e\u5230 ID \u4e3a 2 \u7684\u8fd9\u4e00\u884c\u6570\u636e\u3002\u5f53 ID \u662f\u4e3b\u952e\u65f6\uff0c\u5f15\u64ce\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u7d22\u5f15\u627e\u5230\u8fd9\u4e00\u884c\u3002\u5982\u679c ID \u4e3a 2 \u7684\u8fd9\u4e00\u884c\u6570\u636e\u5c31\u5728\u5185\u5b58\u4e2d\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u3002\u5426\u5219\u9700\u8981\u5148\u4ece\u78c1\u76d8\u8bfb\u5165\u5185\u5b58\uff0c\u7136\u540e\u518d\u8fd4\u56de\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","2\u3001\u6267\u884c\u5668\u62ff\u5230\u5f15\u64ce\u8fd4\u56de\u7684\u6570\u636e\uff0c\u628a\u5bf9\u5e94\u5b57\u6bb5\u7684\u503c\u52a0\u4e0a\u4e00\u3002\u8fd9\u6837\u5c31\u5f97\u5230\u4e86\u4e00\u884c\u65b0\u6570\u636e\uff0c\u7136\u540e\u518d\u8c03\u7528\u5f15\u64ce\u5199\u5165\u8fd9\u884c\u65b0\u6570\u636e\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","3\u3001\u5f15\u64ce\u5c06\u8fd9\u884c\u65b0\u6570\u636e\u66f4\u65b0\u5230\u5185\u5b58\u4e2d\uff0c\u540c\u65f6\u5c06\u8fd9\u4e2a\u66f4\u65b0\u64cd\u4f5c\u8bb0\u5f55\u5230 redo log \u4e2d\u3002\u6b64\u65f6 redo log \u5904\u4e8e prepare \u72b6\u6001\u3002\u7136\u540e\u54cd\u5e94\u6267\u884c\u5668\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","4\u3001\u6267\u884c\u5668\u5c06\u8fd9\u4e2a\u64cd\u4f5c\u751f\u6210 binlog\uff0c\u5e76\u5199\u5165\u78c1\u76d8\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","5\u3001\u6267\u884c\u5668\u8c03\u7528\u5f15\u64ce\u63d0\u4ea4\u4e8b\u52a1\u7684\u63a5\u53e3\uff0c\u5f15\u64ce\u5c06 redo log \u7684\u72b6\u6001\u6539\u4e3a commit \u72b6\u6001\u5373\u53ef\uff0c\u4e00\u6b21\u66f4\u65b0\u4e8b\u52a1\u5c31\u5b8c\u6210\u4e86\u3002"),(0,o.kt)("p",null,"\u6700\u540e\u51e0\u6b65\u5173\u4e8e redo log \u7684\u72b6\u6001\u7684\u5904\u7406\uff0c\u5c5e\u4e8e",(0,o.kt)("strong",{parentName:"p"},"\u4e24\u9636\u6bb5\u63d0\u4ea4"),"\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u8fd9\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u5e94\u5bf9 crash \u573a\u666f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5148\u5199 redo log \u518d\u5199 binlog\uff1a\u5f53 redo log \u5199\u5b8c\uff0cbinlog \u8fd8\u6ca1\u5199\uff0c\u6b64\u65f6 crash\u3002\u90a3\u4e48\u6062\u590d\u540e\u7684\u6570\u636e\uff0c\u5c31\u6ca1\u6709\u8bb0\u5f55\u5230 binlog \u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5148\u5199 binlog \u518d\u5199 redo log\uff1a\u5f53 binlog \u5199\u5b8c\u540e crash\uff0c\u6b64\u65f6\u6062\u590d\u540e\u7684\u6570\u636e\uff0c\u76f8\u8f83\u4e8e\u539f\u59cb\u6570\u636e\uff0c\u4f1a\u591a\u51fa\u6765\u4e00\u90e8\u5206\u64cd\u4f5c\u3002\n\u5982\u679c\u6ca1\u6709\u4e24\u9636\u6bb5\u63d0\u4ea4\uff0c\u90a3\u4e48crash\u6062\u590d\u540e\u7684\u573a\u666f\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u6062\u590d\u524d\u540e\u72b6\u6001\u4e0d\u4e00\u81f4\u7684\u573a\u666f\u3002")),(0,o.kt)("h2",{id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"},"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"))}m.isMDXComponent=!0},3698:function(e,n,t){n.Z=t.p+"assets/images/1.1-9fb10cf64788a4aad3403f10a622a5cf.png"}}]);