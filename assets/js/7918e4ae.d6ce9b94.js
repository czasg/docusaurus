"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8182],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7195:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"\u8bb0\u4e00\u6b21SQLAlchemy\u8fde\u63a5\u5f02\u5e38\u95ee\u9898",authors:["czasg"],tags:["\u6570\u636e\u5e93"]},c=void 0,p={permalink:"/docusaurus/blog/2022/08/21/\u8bb0\u4e00\u6b21SQLAlchemy\u8fde\u63a5\u5f02\u5e38\u95ee\u9898",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/08-21-\u8bb0\u4e00\u6b21SQLAlchemy\u8fde\u63a5\u5f02\u5e38\u95ee\u9898/index.md",source:"@site/blog/2022/08-21-\u8bb0\u4e00\u6b21SQLAlchemy\u8fde\u63a5\u5f02\u5e38\u95ee\u9898/index.md",title:"\u8bb0\u4e00\u6b21SQLAlchemy\u8fde\u63a5\u5f02\u5e38\u95ee\u9898",description:"\u6392\u67e5\u4e0e\u5b9a\u4f4d",date:"2022-08-21T00:00:00.000Z",formattedDate:"August 21, 2022",tags:[{label:"\u6570\u636e\u5e93",permalink:"/docusaurus/blog/tags/\u6570\u636e\u5e93"}],readingTime:1.885,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"\u5982\u4f55\u7406\u89e3\u5f15\u64ce",permalink:"/docusaurus/blog/2022/10/07/\u5982\u4f55\u7406\u89e3\u5f15\u64ce"},nextItem:{title:"\u5982\u4f55\u4ece\u96f6\u5f00\u59cb\u8bbe\u8ba1\u4e00\u4e2a\u540e\u7aef\u6846\u67b6",permalink:"/docusaurus/blog/2022/07/18/\u5982\u4f55\u4ece\u96f6\u5f00\u59cb\u8bbe\u8ba1\u4e00\u4e2a\u540e\u7aef\u6846\u67b6"}},u={authorsImageUrls:[void 0]},s=[{value:"\u6392\u67e5\u4e0e\u5b9a\u4f4d",id:"\u6392\u67e5\u4e0e\u5b9a\u4f4d",children:[],level:2},{value:"\u4fee\u590d",id:"\u4fee\u590d",children:[],level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u670d\u52a1\u9519\u8bef\u65e5\u5fd7"',title:'"\u670d\u52a1\u9519\u8bef\u65e5\u5fd7"'},"mysql.connector.errors.OperationalError: 2055: Lost connection to MySQL server\n")),(0,l.kt)("h2",{id:"\u6392\u67e5\u4e0e\u5b9a\u4f4d"},"\u6392\u67e5\u4e0e\u5b9a\u4f4d"),(0,l.kt)("p",null,"\u4ece\u8fde\u63a5\u4fe1\u606f\u53ef\u4ee5\u5feb\u901f\u770b\u51fa\uff0c\u662f\u6570\u636e\u5e93\u8fde\u63a5\u4e22\u5931\u4e86\uff0c\u6211\u4eec\u9996\u5148\u505a\u4e86\u7b80\u5355\u7684\u670d\u52a1\u91cd\u542f\uff0c\u5e76\u91cd\u8bd5\u8bf7\u6c42\uff0c\u671f\u95f4\u540c\u6b65\u89c2\u5bdf\u6570\u636e\u5e93\u72b6\u6001\uff0c\u786e\u4fdd\u6570\u636e\u5e93\u670d\u52a1\u6301\u7eed\u53ef\u7528\u3002"),(0,l.kt)("p",null,"\u795e\u5947\u7684\u662f\uff0c\u8fd9\u662f\u4e00\u4e2a\u5fc5\u5148\u7684\u9519\u8bef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u670d\u52a1\u9519\u8bef\u65e5\u5fd7"',title:'"\u670d\u52a1\u9519\u8bef\u65e5\u5fd7"'},'File "/usr/local/lib/python3.6/site-packages/mysql/connector/network.py", line 140, in send_plain \n    self.sock.sendall(packet) \nBrokenPipeError: [Errno 32] Broken pipe \n')),(0,l.kt)("p",null,"\u7ee7\u7eed\u6392\u67e5\u65e5\u5fd7\uff0c\u6211\u4eec\u770b\u5230\u662f\u5728\u63a8\u9001\u6570\u636e\u7684\u8fc7\u7a0b\uff0c\u8fde\u63a5\u635f\u574f\u4e86\u3002\u7531\u4e8e\u662f\u5fc5\u73b0\uff0c\u6240\u4ee5\u7f51\u7edc\u4e0d\u7a33\u5b9a\u57fa\u672c\u53ef\u4ee5\u6392\u9664\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6211\u4eec\u6000\u7591\u8fd9\u53ef\u80fd\u662f\u6570\u636e\u5e93\u4fa7\u7684\u4e3b\u52a8\u884c\u4e3a\uff0c\u5373\u89e6\u53d1\u4e86\u67d0\u4e9b\u673a\u5236\uff0c\u5bfc\u81f4\u6570\u636e\u5e93\u5f3a\u5236\u5173\u95ed\u4e86\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u62ff\u5230\u4e86\u5f85\u6267\u884c\u7684SQL\uff0c\u76f4\u63a5\u5728Navicat\u4e0a\u8fdb\u884c\u590d\u73b0\uff0c\u53d1\u73b0\u4e86\u65b0\u7684\u9519\u8bef\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="navicat\u9519\u8bef\u65e5\u5fd7"',title:'"navicat\u9519\u8bef\u65e5\u5fd7"'},"Got a packet bigger than 'max_allowed_packet' bytes\n")),(0,l.kt)("p",null,"\u8fd9\u660e\u663e\u5c31\u662f\u5355\u6b21\u8bf7\u6c42\u5927\u5c0f\u8d85\u8fc7\u4e86\u6570\u636e\u5e93\u7684\u9650\u5236\uff0c\u6240\u4ee5\u5bfc\u81f4\u8fde\u63a5\u88ab\u5f3a\u5236\u5173\u95ed\u3002\u4f46\u662f\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"SQLAlchemy"),"\u5c01\u88c5\u4e86\u4e00\u5c42\uff0c\u5bfc\u81f4\u9519\u8bef\u4fe1\u606f\u6709\u90e8\u5206\u504f\u5dee\u3002"),(0,l.kt)("h2",{id:"\u4fee\u590d"},"\u4fee\u590d"),(0,l.kt)("p",null,"\u901a\u8fc7\u67e5\u8be2\u5f97\u77e5\u5f53\u524d\u6570\u636e\u5e93\u5355\u6b21\u8bf7\u6c42\u4f53\u79ef\u4e0d\u80fd\u67e5\u8d85\u8fc74M"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like 'max_allowed_packet';\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_allowed_packet"),(0,l.kt)("td",{parentName:"tr",align:null},"4194304")))),(0,l.kt)("p",null,"\u8c03\u5927\u5373\u53ef\uff0c\u8fd9\u91cc\u6211\u8c03\u5230\u4e8664M\uff0c\u6ee1\u8db3\u5f53\u524d\u4e1a\u52a1\u8ff0\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u4fee\u590dSQL"',title:'"\u4fee\u590dSQL"'},"set global max_allowed_packet = 67108864;\n")),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,l.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}d.isMDXComponent=!0}}]);