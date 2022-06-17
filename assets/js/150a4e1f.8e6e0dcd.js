"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5083],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={title:"PostgreSQL vs MySQL",authors:["czasg"],tags:["\u6570\u636e\u5e93"]},u=void 0,p={permalink:"/docusaurus/blog/2022/06/07/pgvsmysql",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/06-07-pgvsmysql/index.md",source:"@site/blog/2022/06-07-pgvsmysql/index.md",title:"PostgreSQL vs MySQL",description:"MySQL \u662f\u4e1a\u754c\u4e3b\u6d41\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u76ee\u524d\u88ab Oracle \u6536\u8d2d\uff0c\u5e76\u63d0\u4f9b\u5305\u62ec\u514d\u8d39\u3001\u4ed8\u8d39\u7b49\u591a\u79cd\u793e\u533a\u7248\u672c\u3002",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"\u6570\u636e\u5e93",permalink:"/docusaurus/blog/tags/\u6570\u636e\u5e93"}],readingTime:4.755,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"\u5982\u4f55\u7406\u89e3 OKR & KPI",permalink:"/docusaurus/blog/2022/06/09/\u5982\u4f55\u7406\u89e3OKRKPI"},nextItem:{title:"Go Http\u6a21\u5757",permalink:"/docusaurus/blog/2022/06/05/golanghttp\u6a21\u5757"}},s={authorsImageUrls:[void 0]},c=[{value:"PG\u76f8\u8f83\u4e8eMySQL\u4f18\u52bf",id:"pg\u76f8\u8f83\u4e8emysql\u4f18\u52bf",children:[{value:"\u66f4\u4e30\u5bcc\u7684\u6570\u636e\u7c7b\u578b",id:"\u66f4\u4e30\u5bcc\u7684\u6570\u636e\u7c7b\u578b",children:[{value:"\u652f\u6301json\u3001jsonb\u7c7b\u578b",id:"\u652f\u6301jsonjsonb\u7c7b\u578b",children:[],level:4},{value:"text\u65e0\u957f\u5ea6\u9650\u5236\uff0c\u652f\u6301\u5168\u6587\u7d22\u5f15",id:"text\u65e0\u957f\u5ea6\u9650\u5236\u652f\u6301\u5168\u6587\u7d22\u5f15",children:[],level:4},{value:"\u5b57\u7b26\u7f16\u7801\u652f\u6301\u66f4\u53cb\u597d",id:"\u5b57\u7b26\u7f16\u7801\u652f\u6301\u66f4\u53cb\u597d",children:[],level:4}],level:3},{value:"\u66f4\u4e30\u5bcc\u7684\u7d22\u5f15\u7c7b\u578b",id:"\u66f4\u4e30\u5bcc\u7684\u7d22\u5f15\u7c7b\u578b",children:[],level:3},{value:"\u66f4\u4e30\u5bcc\u7684\u96c6\u7fa4\u652f\u6301",id:"\u66f4\u4e30\u5bcc\u7684\u96c6\u7fa4\u652f\u6301",children:[],level:3}],level:2},{value:"MySQL\u76f8\u8f83\u4e8ePG\u4f18\u52bf",id:"mysql\u76f8\u8f83\u4e8epg\u4f18\u52bf",children:[{value:"\u4e1a\u754c\u4e3b\u6d41",id:"\u4e1a\u754c\u4e3b\u6d41",children:[],level:3},{value:"\u7ebf\u7a0b\u6a21\u5f0f\u6bd4\u8fdb\u7a0b\u6a21\u5f0f\u66f4\u5360\u636e\u4f18\u52bf",id:"\u7ebf\u7a0b\u6a21\u5f0f\u6bd4\u8fdb\u7a0b\u6a21\u5f0f\u66f4\u5360\u636e\u4f18\u52bf",children:[],level:3},{value:"\u5b58\u50a8\u5f15\u64ce\u63d2\u4ef6\u5316",id:"\u5b58\u50a8\u5f15\u64ce\u63d2\u4ef6\u5316",children:[],level:3},{value:"\u7d22\u5f15\u7ec4\u7ec7\u8868",id:"\u7d22\u5f15\u7ec4\u7ec7\u8868",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MySQL \u662f\u4e1a\u754c\u4e3b\u6d41\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u76ee\u524d\u88ab Oracle \u6536\u8d2d\uff0c\u5e76\u63d0\u4f9b\u5305\u62ec\u514d\u8d39\u3001\u4ed8\u8d39\u7b49\u591a\u79cd\u793e\u533a\u7248\u672c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",'PostgreSQL \u5219\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u6570\u636e\u5e93\u3002\u6709\u53e5\u6bd4\u8f83\u7ecf\u5178\u7684\u8bdd\u4f60\u53ef\u80fd\u542c\u8fc7\uff0c\u90a3\u5c31\u662f\uff1a"PostgreSQL \u80fd\u4e0e Oracle \u5ab2\u7f8e\uff0c\u5e76\u4e14\u6ca1\u6709\u90a3\u4e48\u6602\u8d35\u7684\u4ef7\u683c\u548c\u50b2\u6162\u7684\u5ba2\u670d\u3002"    '),(0,a.kt)("p",null,"\u4e24\u7c7b\u6570\u636e\u5e93\u5404\u6709\u9ad8\u4f4e\uff0c\u672c\u6587\u4e3b\u8981\u5b66\u4e60\u603b\u7ed3\u4e0b\u4e8c\u8005\u4e4b\u95f4\u7684\u7279\u70b9\uff0c\u4ee5\u53ca\u5404\u81ea\u7684\u4f18\u52bf\u3002"),(0,a.kt)("h2",{id:"pg\u76f8\u8f83\u4e8emysql\u4f18\u52bf"},"PG\u76f8\u8f83\u4e8eMySQL\u4f18\u52bf"),(0,a.kt)("p",null,"\u9996\u5148 PG \u5b8c\u5168\u5f00\u6e90\uff0c\u76f8\u8f83\u4e8e MySQL \u6765\u8bf4\uff0c\u62e5\u6709\u66f4\u8fc5\u901f\u7684\u529f\u80fd\u8fed\u4ee3\u3002"),(0,a.kt)("h3",{id:"\u66f4\u4e30\u5bcc\u7684\u6570\u636e\u7c7b\u578b"},"\u66f4\u4e30\u5bcc\u7684\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"\u9664\u4e86\u5e38\u89c4\u7684\u6570\u636e\u7c7b\u578b\u5916\uff0cPG \u7684\u6570\u636e\u7c7b\u578b\u66f4\u52a0\u4e30\u5bcc\uff0c\u4e14\u5b8c\u5584\u4e86\u90e8\u5206 MySQL \u6570\u636e\u7c7b\u578b\u7684\u4e00\u4e9b\u69fd\u70b9\u3002"),(0,a.kt)("h4",{id:"\u652f\u6301jsonjsonb\u7c7b\u578b"},"\u652f\u6301json\u3001jsonb\u7c7b\u578b"),(0,a.kt)("p",null,"\u968f\u7740json\u683c\u5f0f\u7684\u6d41\u884c\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u6570\u636e\u5b58\u50a8\u548c\u4f20\u8f93\uff0c\u91c7\u7528json\u683c\u5f0f\u3002     "),(0,a.kt)("p",null,"\u4f46\u5b58\u50a8\u8fd9\u7c7b\u534a\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5bf9\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6765\u8bf4\u5e76\u4e0d\u53cb\u597d\u3002\u5f80\u5f80\u53ea\u80fd\u5148\u5c06json\u6570\u636e\u5e8f\u5217\u5316\u4e3a\u6210\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u5b58\u50a8\u5b57\u7b26\u4e32\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8fd9\u4e5f\u662f MongoDB \u7b49\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u9010\u6e10\u6d41\u884c\u7684\u539f\u56e0\u4e4b\u4e00\u3002       "),(0,a.kt)("p",null,"PG \u652f\u6301 json\u3001jsonb \u4e24\u7c7b\u6570\u636e\u7c7b\u578b\uff1a   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"json\uff1a\u5b58\u50a8\u6587\u672c\u6570\u636e\uff0c\u6bcf\u6b21\u8bfb\u53d6\u90fd\u4f1a\u5bf9\u5176\u8fdb\u884cjson\u89e3\u6790\u3002\u4e0d\u652f\u6301\u7d22\u5f15\u3002  "),(0,a.kt)("li",{parentName:"ul"},"jsonb\uff1a\u5b58\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u76f8\u5bf9\u4e8ejson\u7c7b\u578b\u6765\u8bf4\uff0c\u907f\u514d\u4e86\u91cd\u590d\u89e3\u6790\uff0c\u5e76\u4e14\u652f\u6301\u7d22\u5f15\u3002  ")),(0,a.kt)("p",null,"\u6240\u4ee5\u5f53\u6570\u636e\u5e93\u5b57\u6bb5\u8bbe\u8ba1\u65f6\uff0c\u4ec5\u4ec5\u6709\u90e8\u5206\u5b57\u6bb5\u6570\u636e\u7c7b\u578b\u662f\u534a\u7ed3\u6784\u5316\u7684\uff0c\u6570\u636e\u5e93\u9009\u578b\u65f6 PG \u5c06\u662f\u975e\u5e38\u4f18\u79c0\u7684\u9009\u62e9\u3002"),(0,a.kt)("h4",{id:"text\u65e0\u957f\u5ea6\u9650\u5236\u652f\u6301\u5168\u6587\u7d22\u5f15"},"text\u65e0\u957f\u5ea6\u9650\u5236\uff0c\u652f\u6301\u5168\u6587\u7d22\u5f15"),(0,a.kt)("p",null,"\u4e00\u822c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u5b57\u7b26\u4e32\u6709\u957f\u5ea6\u9650\u5236\uff0c\u5927\u5c0f\u57288k\u5de6\u53f3\uff0cPG \u5219\u6ca1\u6709\u9650\u5236\u3002"),(0,a.kt)("h4",{id:"\u5b57\u7b26\u7f16\u7801\u652f\u6301\u66f4\u53cb\u597d"},"\u5b57\u7b26\u7f16\u7801\u652f\u6301\u66f4\u53cb\u597d"),(0,a.kt)("p",null,"\u5bf9\u4e8e emoji \u7684\u5b58\u50a8\uff0cMySQL \u9700\u8981 utf8mb4 \u7f16\u7801\u624d\u80fd\u6b63\u786e\u663e\u793a\uff0c\u5728 PG \u79cd\u9047\u4e0d\u5230\u3002"),(0,a.kt)("h3",{id:"\u66f4\u4e30\u5bcc\u7684\u7d22\u5f15\u7c7b\u578b"},"\u66f4\u4e30\u5bcc\u7684\u7d22\u5f15\u7c7b\u578b"),(0,a.kt)("p",null,"MySQL \u7684\u7d22\u5f15\u7c7b\u578b\u53d6\u51b3\u4e8e\u5e95\u5c42\u5f15\u64ce\u9009\u578b\uff0c\u50cf MyISAM\u3001InnoDB \u7b49\u652f\u6301B+\u6811\u7d22\u5f15\u7c7b\u578b\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","PG \u5219\u652f\u6301B+\u6570\u7d22\u5f15\u3001\u54c8\u5e0c\u7d22\u5f15\u3001Gist\u7d22\u5f15\u7b49\u3002"),(0,a.kt)("h3",{id:"\u66f4\u4e30\u5bcc\u7684\u96c6\u7fa4\u652f\u6301"},"\u66f4\u4e30\u5bcc\u7684\u96c6\u7fa4\u652f\u6301"),(0,a.kt)("p",null,"MySQL \u7684\u96c6\u7fa4\u9ad8\u53ef\u7528\u4f9d\u8d56\u4e8e\u4e3b\u4ece\u590d\u5236\uff08replication\uff09\uff0c\u5176\u5e95\u5c42\u57fa\u4e8e binlog \u5b9e\u73b0\uff0c\u5e76\u4e14\u662f\u5f02\u6b65\u7684\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8fd9\u79cd\u540c\u6b65\u65b9\u6848\u5f88\u96be\u5b9e\u73b0\u540c\u6b65\u590d\u5236\uff0c\u66f4\u9002\u5408\u5f02\u5730\u590d\u5236\u7684\u573a\u666f\u3002\u5f53\u4e3b\u4ece\u8282\u70b9\u5904\u7406\u80fd\u529b\u4e0d\u4e00\u81f4\u65f6\uff0c\u7279\u522b\u662f\u4e3b\u8282\u70b9\u80fd\u529b\u5f31\u4e8e\u4ece\u8282\u70b9\u65f6\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728\u8f83\u5927\u7684\u9ebb\u70e6\u3002"),(0,a.kt)("p",null,"PG \u7684\u4e3b\u5907\u590d\u5236\u5c5e\u4e8e\u7269\u7406\u590d\u5236\uff0c\u76f8\u8f83\u4e8ebinlog\u7684\u903b\u8f91\u590d\u5236\uff0c\u6570\u636e\u7684\u4e00\u81f4\u6027\u66f4\u52a0\u53ef\u9760\uff0c\u590d\u5236\u6027\u80fd\u66f4\u9ad8\uff0c\u5bf9\u4e3b\u673a\u7684\u5f71\u54cd\u4e5f\u66f4\u5c0f\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","PG \u96c6\u7fa4\u6709\u8f83\u591a\u7684\u63d2\u4ef6\uff1a   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"slony \u652f\u6301\u5b57\u6bb5\u7ea7\u7684\u540c\u6b65\u96c6\u7fa4\u3002  "),(0,a.kt)("li",{parentName:"ul"},"standby \u652f\u6301WAL\u6587\u4ef6\u7ea7\u6216\u6d41\u5f0f\u7684\u8bfb\u5199\u5206\u79bb\u96c6\u7fa4\u3002     ")),(0,a.kt)("h2",{id:"mysql\u76f8\u8f83\u4e8epg\u4f18\u52bf"},"MySQL\u76f8\u8f83\u4e8ePG\u4f18\u52bf"),(0,a.kt)("h3",{id:"\u4e1a\u754c\u4e3b\u6d41"},"\u4e1a\u754c\u4e3b\u6d41"),(0,a.kt)("p",null,"\u4e3b\u6d41\u5c31\u610f\u5473\u7740\u4f60\u80fd\u627e\u5230\u66f4\u591a\u7684\u7528\u6237\u7ecf\u9a8c\u3001\u89e3\u51b3\u65b9\u6848\u3001\u6587\u6863\u7b49\u3002"),(0,a.kt)("h3",{id:"\u7ebf\u7a0b\u6a21\u5f0f\u6bd4\u8fdb\u7a0b\u6a21\u5f0f\u66f4\u5360\u636e\u4f18\u52bf"},"\u7ebf\u7a0b\u6a21\u5f0f\u6bd4\u8fdb\u7a0b\u6a21\u5f0f\u66f4\u5360\u636e\u4f18\u52bf"),(0,a.kt)("p",null,"MySQL \u4f7f\u7528\u4e86\u7ebf\u7a0b\uff0c\u800c PG \u4f7f\u7528\u7684\u662f\u8fdb\u7a0b\u3002\u7ebf\u7a0b\u4e4b\u95f4\u7684\u8c03\u5ea6\u5f00\u9500\u8981\u6bd4\u8fdb\u7a0b\u5c0f\u5f88\u591a\u3002"),(0,a.kt)("h3",{id:"\u5b58\u50a8\u5f15\u64ce\u63d2\u4ef6\u5316"},"\u5b58\u50a8\u5f15\u64ce\u63d2\u4ef6\u5316"),(0,a.kt)("p",null,"MySQL \u7684\u5b58\u50a8\u5f15\u64ce\u63d2\u4ef6\u5316\u673a\u5236\uff0c\u662f\u7684\u5b83\u7684\u5e94\u7528\u573a\u666f\u66f4\u52a0\u5e7f\u6cdb\uff0c\u6bd4\u5982 InnoDB \u9002\u5408\u4e8b\u52a1\u573a\u666f\uff0cMyISAM \u5219\u66f4\u9002\u5408\u9759\u6001\u6570\u636e\u7684\u67e5\u8be2\u573a\u666f\u3002"),(0,a.kt)("h3",{id:"\u7d22\u5f15\u7ec4\u7ec7\u8868"},"\u7d22\u5f15\u7ec4\u7ec7\u8868"),(0,a.kt)("p",null,"\u4ee5 InnoDB \u4e3a\u4f8b\uff0cB+\u6811\u7d22\u5f15\u4e2d\uff0c\u4e3b\u952e\u7d22\u5f15\u6811\u4e2d\u53f6\u5b50\u8282\u70b9\u5b58\u50a8\u7684\u5c31\u662f\u7269\u7406\u6570\u636e\uff0c\u666e\u901a\u8282\u70b9\u7269\u7406\u7d22\u5f15\u5b58\u50a8\u7684\u662f\u4e3b\u952e\u7684\u7d22\u5f15\u3002"),(0,a.kt)("p",null,"PG \u7684\u7d22\u5f15\u8bb0\u5f55\u7684\u5747\u662f\u7269\u7406\u4f4d\u7f6e\uff0c\u9700\u8981\u4e8c\u6b21\u67e5\u8be2\u3002"),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,a.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}m.isMDXComponent=!0}}]);