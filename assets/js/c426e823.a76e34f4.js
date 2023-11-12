"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2937],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>c});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),k=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=k(l),d=a,c=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return l?n.createElement(c,i(i({ref:t},o),{},{components:l})):n.createElement(c,i({ref:t},o))}));function c(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},5821:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>k});var n=l(7462),a=(l(7294),l(3905));const r={title:"MySQL \u9898\u5e93",sidebar_label:"MySQL \u9898\u5e93",slug:"mysql",description:"\u6536\u5f55MySQL\u5e38\u89c1\u9762\u8bd5\u9898\u5e93"},i=void 0,u={unversionedId:"interview-guide/mysql\u9898\u5e93",id:"interview-guide/mysql\u9898\u5e93",title:"MySQL \u9898\u5e93",description:"\u6536\u5f55MySQL\u5e38\u89c1\u9762\u8bd5\u9898\u5e93",source:"@site/docs/office/interview-guide/7.mysql\u9898\u5e93.md",sourceDirName:"interview-guide",slug:"/interview-guide/mysql",permalink:"/docusaurus/docs/office/interview-guide/mysql",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/interview-guide/7.mysql\u9898\u5e93.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"MySQL \u9898\u5e93",sidebar_label:"MySQL \u9898\u5e93",slug:"mysql",description:"\u6536\u5f55MySQL\u5e38\u89c1\u9762\u8bd5\u9898\u5e93"},sidebar:"tutorialSidebar",previous:{title:"Python \u9898\u5e93",permalink:"/docusaurus/docs/office/interview-guide/python"},next:{title:"Redis \u9898\u5e93",permalink:"/docusaurus/docs/office/interview-guide/redis"}},p={},k=[{value:"1.MySQL\u57fa\u7840",id:"1mysql\u57fa\u7840",level:2},{value:"\u6570\u636e\u5e93\u8bbe\u8ba1\u4e09\u5927\u8303\u5f0f",id:"\u6570\u636e\u5e93\u8bbe\u8ba1\u4e09\u5927\u8303\u5f0f",level:3},{value:"2.MySQL\u5b58\u50a8\u5f15\u64ce",id:"2mysql\u5b58\u50a8\u5f15\u64ce",level:2},{value:"\u4ecb\u7ecd\u4e0b\u5e38\u89c1\u7684\u5b58\u50a8\u5f15\u64ce",id:"\u4ecb\u7ecd\u4e0b\u5e38\u89c1\u7684\u5b58\u50a8\u5f15\u64ce",level:3},{value:"\u4ecb\u7ecd\u4e0bInnoDB\u4e0eMyISAM\u533a\u522b",id:"\u4ecb\u7ecd\u4e0binnodb\u4e0emyisam\u533a\u522b",level:3},{value:"3.MySQL\u4e8b\u52a1",id:"3mysql\u4e8b\u52a1",level:2},{value:"\u4ec0\u4e48\u662f\u4e8b\u52a1",id:"\u4ec0\u4e48\u662f\u4e8b\u52a1",level:3},{value:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",level:3},{value:"\u4ec0\u4e48\u662f\u810f\u8bfb",id:"\u4ec0\u4e48\u662f\u810f\u8bfb",level:3},{value:"\u4ec0\u4e48\u662f\u4e0d\u53ef\u91cd\u590d\u8bfb",id:"\u4ec0\u4e48\u662f\u4e0d\u53ef\u91cd\u590d\u8bfb",level:3},{value:"\u4ec0\u4e48\u662f\u5e7b\u8bfb",id:"\u4ec0\u4e48\u662f\u5e7b\u8bfb",level:3},{value:"MySQL\u7d22\u5f15",id:"mysql\u7d22\u5f15",level:2},{value:"\u4f60\u4e86\u89e3\u7684\u7d22\u5f15\u79cd\u7c7b",id:"\u4f60\u4e86\u89e3\u7684\u7d22\u5f15\u79cd\u7c7b",level:3},{value:"\u5982\u4f55\u7406\u89e3\u5757\u7d22\u5f15",id:"\u5982\u4f55\u7406\u89e3\u5757\u7d22\u5f15",level:3},{value:"\u4e3b\u952e\u548c\u5916\u952e\u7684\u533a\u522b",id:"\u4e3b\u952e\u548c\u5916\u952e\u7684\u533a\u522b",level:3},{value:"\u6700\u5de6\u524d\u7f00\u539f\u5219",id:"\u6700\u5de6\u524d\u7f00\u539f\u5219",level:3},{value:"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15\u7684\u60c5\u51b5",id:"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15\u7684\u60c5\u51b5",level:3},{value:"\u8bfb\u5199\u5206\u79bb\u548c\u5206\u5e93\u5206\u8868",id:"\u8bfb\u5199\u5206\u79bb\u548c\u5206\u5e93\u5206\u8868",level:3},{value:"char\u548cvarchar\u533a\u522b",id:"char\u548cvarchar\u533a\u522b",level:3},{value:"MySQL\u67b6\u6784",id:"mysql\u67b6\u6784",level:2},{value:"\u4e00\u6761SQL\u7684\u6267\u884c\u8fc7\u7a0b",id:"\u4e00\u6761sql\u7684\u6267\u884c\u8fc7\u7a0b",level:3},{value:"\u4f18\u5316\u573a\u666f",id:"\u4f18\u5316\u573a\u666f",level:2},{value:"\u7d22\u5f15\u4f18\u5316",id:"\u7d22\u5f15\u4f18\u5316",level:3},{value:"\u8fd0\u7ef4\u573a\u666f",id:"\u8fd0\u7ef4\u573a\u666f",level:2},{value:"\u9009\u9519\u7d22\u5f15",id:"\u9009\u9519\u7d22\u5f15",level:3},{value:"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15",id:"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15",level:3},{value:"\u5355\u6b21\u67e5\u8be2\u5f88\u6162",id:"\u5355\u6b21\u67e5\u8be2\u5f88\u6162",level:3},{value:"\u6027\u80fd\u5b9a\u671f\u6296\u52a8",id:"\u6027\u80fd\u5b9a\u671f\u6296\u52a8",level:3},{value:"count(*)\u4f1a\u626b\u63cf\u5168\u8868",id:"count\u4f1a\u626b\u63cf\u5168\u8868",level:3},{value:"\u5220\u9664\u8868\u540e\u7a7a\u95f4\u4e0d\u53d8",id:"\u5220\u9664\u8868\u540e\u7a7a\u95f4\u4e0d\u53d8",level:3},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u810f\u9875",id:"\u810f\u9875",level:3},{value:"\u4e3b\u5907\u5ef6\u8fdf",id:"\u4e3b\u5907\u5ef6\u8fdf",level:3},{value:"<br/>",id:"br",level:2},{value:"\u5f00\u653e\u8bdd\u9898",id:"\u5f00\u653e\u8bdd\u9898",level:2},{value:"\u5217\u4e3e\u4e00\u4e9b\u4f60\u7684\u6570\u636e\u5e93\u4f18\u5316\u7ecf\u9a8c",id:"\u5217\u4e3e\u4e00\u4e9b\u4f60\u7684\u6570\u636e\u5e93\u4f18\u5316\u7ecf\u9a8c",level:3}],o={toc:k},m="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1mysql\u57fa\u7840"},"1.MySQL\u57fa\u7840"),(0,a.kt)("h3",{id:"\u6570\u636e\u5e93\u8bbe\u8ba1\u4e09\u5927\u8303\u5f0f"},"\u6570\u636e\u5e93\u8bbe\u8ba1\u4e09\u5927\u8303\u5f0f"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u8bbe\u8ba1\u7684\u4e09\u5927\u8303\u5f0f\u662f\u4e00\u7ec4\u8bbe\u8ba1\u539f\u5219\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u8303\u5f0f\uff081NF\uff09\uff1a\u8981\u6c42\u539f\u5b50\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3e\u4f8b\uff1a\u9664\u4e86\u4e3b\u952e\u4e4b\u5916\uff0c\u5176\u4ed6\u5b57\u6bb5\u6570\u636e\u4e00\u6837\uff0c\u8fd9\u79cd\u5c31\u4e0d\u6ee1\u8db3\u7b2c\u4e00\u8303\u5f0f"))),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u8303\u5f0f\uff082NF\uff09\uff1a\u8981\u6c42\u975e\u4e3b\u952e\u5b57\u6bb5\u4e0e\u4e3b\u952e\u4e4b\u95f4\u4e0d\u5141\u8bb8\u90e8\u5206\u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3e\u4f8b\uff1a\u4e3b\u8981\u9488\u5bf9\u8054\u5408\u4e3b\u952e\u573a\u666f\uff0c\u975e\u4e3b\u952e\u5b57\u6bb5\u4ec5\u4f9d\u8d56\u8054\u5408\u4e3b\u952e\u5176\u4e2d\u4e00\u4e2a\u5b57\u6bb5\uff0c\u8fd9\u79cd\u5c31\u4e0d\u6ee1\u8db3\u7b2c\u4e8c\u8303\u5f0f"))),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u8303\u5f0f\uff083NF\uff09\uff1a\u8981\u6c42\u975e\u4e3b\u952e\u5b57\u6bb5\u4e0e\u4e3b\u952e\u4e4b\u95f4\u4e0d\u5141\u8bb8\u4f20\u9012\u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3e\u4f8b\uff1a\u5047\u8bbe\u5b58\u5728\u4e66\u7c4d\u548c\u53d1\u7248\u793e\u4e24\u5f20\u8868\u3002\u56e0\u4e3a\u4e66\u7c4d\u548c\u53d1\u7248\u793e\u662f\u5b58\u5728\u5173\u8054\u7684\uff0c\u73b0\u5728\u628a\u4ed6\u4eec\u653e\u5728\u4e00\u5f20\u8868\u91cc\uff0c\u90a3\u4e48\u5c31\u4f1a\u5b58\u5728\u4f20\u9012\u4f9d\u8d56\u7684\u5173\u7cfb\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u4e0d\u6ee1\u8db3\u8303\u5f0f\u4e00\uff0c1\u548c3\u4e0d\u7b26\u5408\u539f\u5b50\u6027"',title:'"\u4e0d\u6ee1\u8db3\u8303\u5f0f\u4e00\uff0c1\u548c3\u4e0d\u7b26\u5408\u539f\u5b50\u6027"'},'| BookID | Title                  | Author                | PublicationDate | Publisher           |\n|--------|------------------------|-----------------------|-----------------|---------------------|\n| 1      | "The Great Gatsby"     | "F. Scott Fitzgerald" | 1925            | "Scribner"          |\n| 2      | "Pride and Prejudice"  | "Jane Austen"         | 1813            | "Penguin Classics"  |\n| 3      | "The Great Gatsby"     | "F. Scott Fitzgerald" | 1925            | "Scribner"          |\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u4e0d\u6ee1\u8db3\u8303\u5f0f\u4e8c\uff0c\u4e00\u822c\u5b58\u5728\u4e8e\u8054\u5408\u4e3b\u952e\u573a\u666f\uff0c\u5bfc\u81f4\u90e8\u5206\u4f9d\u8d56"',title:'"\u4e0d\u6ee1\u8db3\u8303\u5f0f\u4e8c\uff0c\u4e00\u822c\u5b58\u5728\u4e8e\u8054\u5408\u4e3b\u952e\u573a\u666f\uff0c\u5bfc\u81f4\u90e8\u5206\u4f9d\u8d56"'},'| StudentID | CourseID | CourseName         | Teacher          |\n|----------|----------|--------------------|-------------------|\n| 1        | 101      | "Mathematics 101"  | "Mr. Smith"       |\n| 1        | 102      | "Physics 101"      | "Ms. Johnson"     |\n| 2        | 101      | "Mathematics 101"  | "Mr. Smith"       |\n| 2        | 103      | "Chemistry 101"    | "Dr. Brown"       |\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u4e0d\u6ee1\u8db3\u8303\u5f0f\u4e09\uff0c\u5b58\u5728\u4f20\u9012\u4f9d\u8d56\uff0c\u5e94\u8be5\u62c6\u8868"',title:'"\u4e0d\u6ee1\u8db3\u8303\u5f0f\u4e09\uff0c\u5b58\u5728\u4f20\u9012\u4f9d\u8d56\uff0c\u5e94\u8be5\u62c6\u8868"'},'| BookID | Title                  | Author                | PublicationDate | Publisher           |\n|--------|------------------------|-----------------------|-----------------|---------------------|\n| 1      | "The Great Gatsby"     | "F. Scott Fitzgerald" | 1925            | "Scribner"          |\n| 2      | "Pride and Prejudice"  | "Jane Austen"         | 1813            | "Penguin Classics"  |\n| 3      | "The Great Gatsby"     | "F. Scott Fitzgerald" | 1925            | "Scribner"          |\n')),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2mysql\u5b58\u50a8\u5f15\u64ce"},"2.MySQL\u5b58\u50a8\u5f15\u64ce"),(0,a.kt)("h3",{id:"\u4ecb\u7ecd\u4e0b\u5e38\u89c1\u7684\u5b58\u50a8\u5f15\u64ce"},"\u4ecb\u7ecd\u4e0b\u5e38\u89c1\u7684\u5b58\u50a8\u5f15\u64ce"),(0,a.kt)("p",null,"MySQL \u662f\u4e00\u4e2a\u5f00\u6e90\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u5b58\u50a8\u5f15\u64ce\u3002"),(0,a.kt)("p",null,"\u5b58\u50a8\u5f15\u64ce\u662f MySQL \u7528\u4e8e\u7ba1\u7406\u6570\u636e\u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u5b83\u4eec\u8d1f\u8d23\u5904\u7406 SQL \u8bed\u53e5\uff0c\u5305\u62ec\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\u7b49\u64cd\u4f5c\u3002\n\u5e38\u89c1\u7684\u5b58\u50a8\u5f15\u64ce\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"InnoDB\uff1aInnoDB \u662f MySQL \u9ed8\u8ba4\u7684\u5b58\u50a8\u5f15\u64ce\uff0c\u5b83\u652f\u6301\u4e8b\u52a1\u3001\u5916\u952e\u548c\u884c\u7ea7\u9501\u7b49\u7279\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"MyISAM\uff1aMyISAM \u662f MySQL \u6700\u53e4\u8001\u7684\u5b58\u50a8\u5f15\u64ce\u4e4b\u4e00\uff0c\u4e0d\u652f\u6301\u4e8b\u52a1\u548c\u884c\u7ea7\u9501\uff0c\u8fd9\u4e5f\u662f\u5b83\u88ab InnoDB \u53d6\u4ee3\u7684\u5f88\u5927\u4e00\u90e8\u5206\u539f\u56e0\u4e4b\u4e00\u3002\n\u4f46\u5b83\u975e\u5e38\u9002\u5408\u7528\u4e8e\u5904\u7406\u5927\u91cf\u7684\u8bfb\u53d6\u64cd\u4f5c\uff0c\u4f8b\u5982\u6570\u636e\u4ed3\u5e93\u548c\u65e5\u5fd7\u6587\u4ef6\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"Memory\uff1aMemory \u5b58\u50a8\u5f15\u64ce\u5c06\u5185\u5b58\u5b58\u50a8\u5f15\u64ce\uff0c\u4f18\u70b9\u662f\u901f\u5ea6\u975e\u5e38\u5feb\uff0c\u7f3a\u70b9\u5c31\u662f\u6570\u636e\u662f\u975e\u6301\u4e45\u7684\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4ecb\u7ecd\u4e0binnodb\u4e0emyisam\u533a\u522b"},"\u4ecb\u7ecd\u4e0bInnoDB\u4e0eMyISAM\u533a\u522b"),(0,a.kt)("p",null,"InnoDB\u548cMyISAM\u662f\u4e24\u4e2a\u5e38\u7528\u7684\u5b58\u50a8\u5f15\u64ce\uff0c\u7528\u4e8eMySQL\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u5b83\u4eec\u5728\u529f\u80fd\u3001\u6027\u80fd\u548c\u9002\u7528\u573a\u666f\u4e0a\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u533a\u522b\u3002\u4ee5\u4e0b\u662f\u5b83\u4eec\u4e4b\u95f4\u7684\u4e3b\u8981\u533a\u522b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e8b\u52a1\u652f\u6301\uff1a"),"InnoDB\u652f\u6301\u4e8b\u52a1\uff08ACID\u5c5e\u6027\uff09\uff0cMyISAM\u4e0d\u652f\u6301\u4e8b\u52a1")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u9501\u673a\u5236\uff1a"),"InnoDB\u4f7f\u7528\u884c\u7ea7\u9501\uff08row-level locking\uff09\uff0cMyISAM\u4f7f\u7528\u8868\u7ea7\u9501\uff08table-level locking\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5916\u952e\u652f\u6301\uff1a")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"InnoDB\u652f\u6301\u5916\u952e\u5b8c\u6574\u6027\u7ea6\u675f\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5916\u952e\u5173\u7cfb\uff0c\u786e\u4fdd\u6570\u636e\u7684\u5b8c\u6574\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"MyISAM\u4e0d\u652f\u6301\u5916\u952e\uff0c\u4e0d\u80fd\u5b9a\u4e49\u5916\u952e\u5173\u7cfb\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5d29\u6e83\u6062\u590d\uff1a")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"InnoDB\u652f\u6301\u5d29\u6e83\u6062\u590d\uff0c\u5177\u6709\u4e8b\u52a1\u65e5\u5fd7\u548c\u4e8b\u52a1\u56de\u6eda\u529f\u80fd\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u5904\u7406\u6570\u636e\u5e93\u5d29\u6e83\u65f6\u7684\u6570\u636e\u5b8c\u6574\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"MyISAM\u4e0d\u5177\u5907\u5d29\u6e83\u6062\u590d\u529f\u80fd\uff0c\u5bb9\u6613\u5728\u5d29\u6e83\u65f6\u4e22\u5931\u6570\u636e\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u95f4\u548c\u6027\u80fd\uff1a")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"InnoDB\u901a\u5e38\u9700\u8981\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\u6765\u5b58\u50a8\u6570\u636e\uff0c\u56e0\u4e3a\u5b83\u7ef4\u62a4\u989d\u5916\u7684\u4e8b\u52a1\u65e5\u5fd7\u548c\u7d22\u5f15\u7ed3\u6784\u3002"),(0,a.kt)("li",{parentName:"ul"},"MyISAM\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u5728\u6027\u80fd\u4e0a\u8868\u73b0\u66f4\u597d\uff0c\u7279\u522b\u662f\u5728\u53ea\u8bfb\u64cd\u4f5c\u8f83\u591a\u7684\u60c5\u51b5\u4e0b\u3002")))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"3mysql\u4e8b\u52a1"},"3.MySQL\u4e8b\u52a1"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f\u4e8b\u52a1"},"\u4ec0\u4e48\u662f\u4e8b\u52a1"),(0,a.kt)("p",null,"\u4e8b\u52a1\u662f\u4e00\u7ec4\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u903b\u8f91\u5355\u5143\u3002\u8fd9\u4e9b\u64cd\u4f5c\u8981\u4e48\u5168\u90e8\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002\u56e0\u6b64\u5b83\u5177\u6709ACID\u5c5e\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u539f\u5b50\u6027\uff08Atomicity\uff09"),"\uff1a\u4e8b\u52a1\u662f\u539f\u5b50\u7684\uff0c\u610f\u5473\u7740\u5b83\u8981\u4e48\u5b8c\u5168\u6267\u884c\uff0c\u8981\u4e48\u4e0d\u6267\u884c\u3002\u5982\u679c\u4e8b\u52a1\u7684\u4efb\u4f55\u90e8\u5206\u5931\u8d25\uff0c\u6574\u4e2a\u4e8b\u52a1\u5c06\u88ab\u56de\u6eda\uff0c\u6570\u636e\u5e93\u5c06\u6062\u590d\u5230\u4e8b\u52a1\u5f00\u59cb\u4e4b\u524d\u7684\u72b6\u6001\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e00\u81f4\u6027\uff08Consistency\uff09"),"\uff1a\u4e8b\u52a1\u7684\u6267\u884c\u5c06\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u4e00\u81f4\u72b6\u6001\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u4e00\u81f4\u72b6\u6001\u3002\u8fd9\u610f\u5473\u7740\u4e8b\u52a1\u7684\u6267\u884c\u4e0d\u4f1a\u7834\u574f\u6570\u636e\u5e93\u7684\u5b8c\u6574\u6027\u7ea6\u675f\u6216\u6570\u636e\u5173\u7cfb\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u9694\u79bb\u6027\uff08Isolation\uff09"),"\uff1a\u6bcf\u4e2a\u4e8b\u52a1\u5e94\u8be5\u5728\u4e0d\u53d7\u5176\u4ed6\u4e8b\u52a1\u5e72\u6270\u7684\u60c5\u51b5\u4e0b\u6267\u884c\uff0c\u5373\u4f7f\u591a\u4e2a\u4e8b\u52a1\u540c\u65f6\u8fd0\u884c\u4e5f\u4e0d\u4f1a\u76f8\u4e92\u5e72\u6270\u3002\u8fd9\u610f\u5473\u7740\u4e8b\u52a1\u4e4b\u95f4\u5e94\u8be5\u662f\u76f8\u4e92\u9694\u79bb\u7684\uff0c\u4ee5\u9632\u6b62\u6570\u636e\u51b2\u7a81\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6301\u4e45\u6027\uff08Durability\uff09"),"\uff1a\u4e00\u65e6\u4e8b\u52a1\u6210\u529f\u63d0\u4ea4\uff0c\u5176\u7ed3\u679c\u5e94\u8be5\u662f\u6c38\u4e45\u6027\u7684\uff0c\u5e76\u4e14\u5728\u7cfb\u7edf\u6545\u969c\u6216\u91cd\u542f\u540e\u4ecd\u7136\u4fdd\u6301\u3002\u8fd9\u8981\u6c42\u6570\u636e\u5e93\u5c06\u4e8b\u52a1\u7684\u53d8\u66f4\u6301\u4e45\u5730\u4fdd\u5b58\u5728\u5b58\u50a8\u8bbe\u5907\u4e0a\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u6301\u4e45\u6027\u3002"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"},"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"),(0,a.kt)("p",null,"MySQL \u662f\u4e00\u4e2a\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u5b83\u652f\u6301\u591a\u4e2a\u4e8b\u52a1\u4e4b\u95f4\u7684\u5e76\u53d1\u6267\u884c\u3002\u56e0\u6b64\u9700\u8981\u4fdd\u969c\u4e8b\u52a1\u4e4b\u95f4\u7684\u9694\u79bb\u6027\u548c\u6570\u636e\u4e00\u81f4\u6027\u3002"),(0,a.kt)("p",null,"MySQL \u63d0\u4f9b\u4e86\u56db\u4e2a\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\uff0c\u5b83\u4eec\u5206\u522b\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"READ UNCOMMITTED\uff08\u8bfb\u672a\u63d0\u4ea4\uff09\uff1a\u6700\u4f4e\u7ea7\u522b\u7684\u9694\u79bb\u7ea7\u522b\u3002\u4e8b\u52a1\u53ef\u4ee5\u8bfb\u53d6\u53e6\u4e00\u4e2a\u4e8b\u52a1\u5c1a\u672a\u63d0\u4ea4\u7684\u6570\u636e\u3002\u5728\u6b64\u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u4f1a\u5b58\u5728\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u8bfb\u7b49\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"READ COMMITTED\uff08\u8bfb\u5df2\u63d0\u4ea4\uff09\uff1a\u9ed8\u8ba4\u7684\u9694\u79bb\u7ea7\u522b\u3002\u4e8b\u52a1\u53ea\u80fd\u8bfb\u53d6\u53e6\u4e00\u4e2a\u5df2\u63d0\u4ea4\u7684\u4e8b\u52a1\u7684\u6570\u636e\u3002\u5728\u6b64\u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u89e3\u51b3\u4e86\u810f\u8bfb\u7684\u95ee\u9898\uff0c\u4f46\u4ecd\u7136\u5b58\u5728\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"REPEATABLE READ\uff08\u53ef\u91cd\u590d\u8bfb\uff09\uff1a\u4e8b\u52a1\u5f00\u59cb\u65f6\u8bfb\u53d6\u7684\u6570\u636e\u96c6\u5408\u5c06\u4fdd\u6301\u4e0d\u53d8\uff0c\u5373\u4f7f\u5176\u4ed6\u4e8b\u52a1\u5bf9\u8fd9\u4e9b\u6570\u636e\u8fdb\u884c\u4e86\u4fee\u6539\u6216\u63d2\u5165\u64cd\u4f5c\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u8be5\u4e8b\u52a1\u3002\u8fd9\u79cd\u9694\u79bb\u7ea7\u522b\u89e3\u51b3\u4e86\u4e0d\u53ef\u91cd\u590d\u8bfb\u7684\u95ee\u9898\uff0c\u4f46\u662f\u4ecd\u7136\u5b58\u5728\u5e7b\u8bfb\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"SERIALIZABLE\uff08\u5e8f\u5217\u5316\uff09\uff1a\u6700\u9ad8\u7ea7\u522b\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u591a\u4e2a\u4e8b\u52a1\u4e4b\u95f4\u987a\u5e8f\u6267\u884c\u3002\u5728\u6b64\u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u4e8b\u52a1\u4e4b\u95f4\u4e0d\u4f1a\u5b58\u5728\u51b2\u7a81\uff0c\u4f46\u4f1a\u727a\u7272\u6027\u80fd\u3002")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f\u810f\u8bfb"},"\u4ec0\u4e48\u662f\u810f\u8bfb"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u4e8b\u52a1\u53ef\u4ee5\u8bfb\u53d6\u53e6\u4e00\u4e2a\u4e8b\u52a1\u5c1a\u672a\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u800c\u53e6\u4e00\u4e2a\u4e8b\u52a1\u968f\u540e\u88ab\u56de\u6eda\uff0c\u90a3\u4e48\u5f53\u524d\u4e8b\u52a1\u8bfb\u53d6\u5230\u7684\u6570\u636e\u5c31\u662f\u65e0\u6548\u7684\u3002"),(0,a.kt)("p",null,"\u8fd9\u7c7b\u73b0\u8c61\u88ab\u79f0\u4e4b\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u810f\u8bfb\uff08Dirty read\uff09"),"\uff0c\u56e0\u4e3a\u5b83\u8bfb\u5230\u4e86\u810f\u6570\u636e\u3002"),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f\u4e0d\u53ef\u91cd\u590d\u8bfb"},"\u4ec0\u4e48\u662f\u4e0d\u53ef\u91cd\u590d\u8bfb"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u4e8b\u52a1\uff0c\u591a\u6b21\u8bfb\u53d6\u540c\u4e00\u6570\u636e\uff0c\u4f46\u6bcf\u6b21\u8bfb\u53d6\u7684\u7ed3\u679c\u90fd\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u73b0\u8c61\u88ab\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u91cd\u590d\u8bfb\uff08Non-repeatable read\uff09"),"\uff0c\u56e0\u4e3a\u65e0\u6cd5\u91cd\u590d\u8bfb\u53d6\u76f8\u540c\u7684\u6570\u636e\u3002"),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f\u5e7b\u8bfb"},"\u4ec0\u4e48\u662f\u5e7b\u8bfb"),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"mysql\u7d22\u5f15"},"MySQL\u7d22\u5f15"),(0,a.kt)("h3",{id:"\u4f60\u4e86\u89e3\u7684\u7d22\u5f15\u79cd\u7c7b"},"\u4f60\u4e86\u89e3\u7684\u7d22\u5f15\u79cd\u7c7b"),(0,a.kt)("p",null,"MySQL\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u7d22\u5f15\uff0c\u4ee5\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u548c\u52a0\u901f\u6570\u636e\u68c0\u7d22\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684MySQL\u7d22\u5f15\u7c7b\u578b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"B-\u6811\u7d22\u5f15\uff08B-Tree Index\uff09\uff1a")," B-\u6811\u7d22\u5f15\u662f\u6700\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002\u5b83\u9002\u7528\u4e8e\u7cbe\u786e\u5339\u914d\u548c\u8303\u56f4\u67e5\u8be2\u3002B-\u6811\u7d22\u5f15\u9002\u7528\u4e8e\u6574\u6570\u3001\u5b57\u7b26\u3001\u65e5\u671f\u7b49\u6570\u636e\u7c7b\u578b\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u54c8\u5e0c\u7d22\u5f15\uff08Hash Index\uff09\uff1a")," \u54c8\u5e0c\u7d22\u5f15\u5c06\u7d22\u5f15\u952e\u7684\u503c\u7ecf\u8fc7\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u540e\u5b58\u50a8\u5728\u7d22\u5f15\u4e2d\uff0c\u7528\u4e8e\u52a0\u901f\u7b49\u503c\u67e5\u8be2\u3002\u5b83\u5bf9\u4e8e\u7b49\u503c\u67e5\u8be2\u975e\u5e38\u9ad8\u6548\uff0c\u4f46\u4e0d\u652f\u6301\u8303\u56f4\u67e5\u8be2\u6216\u6392\u5e8f\u64cd\u4f5c\u3002\u54c8\u5e0c\u7d22\u5f15\u9002\u7528\u4e8e\u5927\u591a\u6570\u6570\u636e\u7c7b\u578b\uff0c\u4f46\u7279\u522b\u9002\u5408\u4e8e\u9ad8\u57fa\u6570\u5217\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5168\u6587\u7d22\u5f15\uff08Full-Text Index\uff09\uff1a")," \u5168\u6587\u7d22\u5f15\u7528\u4e8e\u5bf9\u6587\u672c\u6570\u636e\u8fdb\u884c\u5168\u6587\u641c\u7d22\u3002\u5b83\u5141\u8bb8\u6a21\u7cca\u5339\u914d\u3001\u8bcd\u5e72\u641c\u7d22\u548c\u5e03\u5c14\u641c\u7d22\u3002\u5168\u6587\u7d22\u5f15\u9002\u7528\u4e8eTEXT\u548cVARCHAR\u5217\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u95f4\u7d22\u5f15\uff08Spatial Index\uff09\uff1a")," \u7a7a\u95f4\u7d22\u5f15\u7528\u4e8e\u5904\u7406\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08GIS\uff09\u6570\u636e\uff0c\u5982\u5730\u7406\u5750\u6807\u3001\u591a\u8fb9\u5f62\u7b49\u3002\u5b83\u53ef\u4ee5\u52a0\u901f\u5730\u7406\u7a7a\u95f4\u67e5\u8be2\uff0c\u5982\u70b9\u5728\u591a\u8fb9\u5f62\u5185\u7684\u67e5\u8be2\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u524d\u7f00\u7d22\u5f15\uff08Prefix Index\uff09\uff1a")," \u524d\u7f00\u7d22\u5f15\u662f\u5bf9\u5217\u503c\u7684\u524d\u7f00\u8fdb\u884c\u7d22\u5f15\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u503c\u3002\u5b83\u53ef\u4ee5\u7528\u4e8e\u8282\u7701\u7d22\u5f15\u5b58\u50a8\u7a7a\u95f4\u548c\u52a0\u901f\u68c0\u7d22\u3002\u524d\u7f00\u7d22\u5f15\u9002\u7528\u4e8e\u8f83\u957f\u7684\u5b57\u7b26\u4e32\u5217\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u590d\u5408\u7d22\u5f15\uff08Composite Index\uff09\uff1a")," \u590d\u5408\u7d22\u5f15\u662f\u5305\u542b\u591a\u4e2a\u5217\u7684\u7d22\u5f15\u3002\u5b83\u53ef\u4ee5\u7528\u4e8e\u52a0\u901f\u591a\u5217\u67e5\u8be2\uff0c\u4f46\u8981\u6ce8\u610f\u7d22\u5f15\u987a\u5e8f\u548c\u67e5\u8be2\u6761\u4ef6\u7684\u5339\u914d\u6027\uff0c\u4ee5\u786e\u4fdd\u6027\u80fd\u63d0\u5347\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u552f\u4e00\u7d22\u5f15\uff08Unique Index\uff09\uff1a")," \u552f\u4e00\u7d22\u5f15\u8981\u6c42\u7d22\u5f15\u5217\u7684\u503c\u5728\u8868\u4e2d\u662f\u552f\u4e00\u7684\uff0c\u7528\u4e8e\u5f3a\u5236\u6570\u636e\u7684\u552f\u4e00\u6027\u3002\u5b83\u9002\u7528\u4e8e\u4efb\u4f55\u6570\u636e\u7c7b\u578b\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u952e\u7d22\u5f15\uff08Primary Key Index\uff09\uff1a")," \u4e3b\u952e\u7d22\u5f15\u662f\u552f\u4e00\u7d22\u5f15\u7684\u4e00\u79cd\uff0c\u901a\u5e38\u7528\u4e8e\u6807\u8bc6\u8868\u4e2d\u7684\u6bcf\u4e00\u884c\u3002\u5b83\u786e\u4fdd\u6bcf\u884c\u90fd\u5177\u6709\u552f\u4e00\u7684\u4e3b\u952e\u503c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5916\u952e\u7d22\u5f15\uff08Foreign Key Index\uff09\uff1a")," \u5916\u952e\u7d22\u5f15\u7528\u4e8e\u8fde\u63a5\u4e0d\u540c\u8868\u683c\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u5b83\u901a\u5e38\u4e0e\u5916\u952e\u7ea6\u675f\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u5b8c\u6574\u6027\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5168\u5c40\u7d22\u5f15\uff08Clustered Index\uff09\uff1a")," \u5168\u5c40\u7d22\u5f15\u7528\u4e8eInnoDB\u5b58\u50a8\u5f15\u64ce\uff0c\u5b83\u51b3\u5b9a\u4e86\u6570\u636e\u884c\u5728\u8868\u4e2d\u7684\u7269\u7406\u5b58\u50a8\u987a\u5e8f\u3002\u6bcf\u4e2aInnoDB\u8868\u53ea\u80fd\u6709\u4e00\u4e2a\u5168\u5c40\u7d22\u5f15\u3002"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5982\u4f55\u7406\u89e3\u5757\u7d22\u5f15"},"\u5982\u4f55\u7406\u89e3\u5757\u7d22\u5f15"),(0,a.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\uff0c\u5757\u7d22\u5f15\uff08Block Index\uff09\u4e0d\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7d22\u5f15\u7c7b\u578b\uff0c\u800c\u662f\u4e00\u4e2a\u8f83\u4f4e\u7ea7\u522b\u7684\u6982\u5ff5\uff0c\n\u7528\u4e8e\u63cf\u8ff0\u6570\u636e\u5e93\u5f15\u64ce\u5185\u90e8\u7d22\u5f15\u7ed3\u6784\u7684\u5b58\u50a8\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u4f46\u5728PostgreSQL\u4e2d\uff0c\u5757\u7d22\u5f15\u662f\u4e00\u4e2a\u9ad8\u7ea7\u7279\u6027\u3002\n\u5b83\u901a\u5e38\u7528\u4e8e\u7279\u5b9a\u7c7b\u578b\u7684\u5e94\u7528\u573a\u666f\uff0c\u7279\u522b\u662f\u90a3\u4e9b\u9700\u8981\u5904\u7406\u5927\u91cf\u5757\u7ea7\u522b\u6570\u636e\u7684\u573a\u666f\uff0c\u4f8b\u5982\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\u6216\u5217\u5f0f\u6570\u636e\u5e93\u3002\n\u5b83\u652f\u6301\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u8303\u56f4\u67e5\u8be2\uff08Range Queries\uff09"),"\uff1a\u5757\u7d22\u5f15\u53ef\u7528\u4e8e\u652f\u6301\u8303\u56f4\u67e5\u8be2\uff0c\u4f8b\u5982\u67e5\u627e\u67d0\u4e2a\u8303\u56f4\u5185\u7684\u6570\u636e\u5757\u3002\u8fd9\u5bf9\u4e8e\u5904\u7406\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u7b49\u5e94\u7528\u975e\u5e38\u6709\u7528\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5757\u7ea7\u522b\u7684\u68c0\u7d22"),"\uff1a\u5757\u7d22\u5f15\u76f4\u63a5\u5728\u6570\u636e\u5757\u7ea7\u522b\u5b58\u50a8\u7d22\u5f15\u4fe1\u606f\uff0c\u4ece\u800c\u53ef\u4ee5\u52a0\u901f\u5757\u7ea7\u522b\u7684\u68c0\u7d22\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u884c\u7ea7\u522b\u7684\u68c0\u7d22\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5757\u5408\u5e76\u548c\u5757\u5206\u5272"),"\uff1a\u5757\u7d22\u5f15\u5bf9\u4e8e\u5757\u5408\u5e76\uff08Block Merging\uff09\u548c\u5757\u5206\u5272\uff08Block Splitting\uff09\u7b49\u64cd\u4f5c\u975e\u5e38\u9ad8\u6548\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u901a\u5e38\u7528\u4e8e\u6570\u636e\u5757\u7684\u7ba1\u7406\u3002"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4e3b\u952e\u548c\u5916\u952e\u7684\u533a\u522b"},"\u4e3b\u952e\u548c\u5916\u952e\u7684\u533a\u522b"),(0,a.kt)("p",null,"\u4e3b\u952e\u53ef\u4ee5\u4f5c\u4e3a\u6bcf\u4e00\u884c\u6570\u636e\u7684\u552f\u4e00\u6027\u6807\u8bc6\u3002\n\u5916\u952e\u5219\u662f\u7528\u4e8e\u7ef4\u62a4\u6570\u636e\u5b8c\u6574\u6027\u548c\u5efa\u7acb\u8868\u683c\u4e4b\u95f4\u5173\u7cfb\u7684\u4e00\u79cd\u5f3a\u7ea6\u675f\u3002"),(0,a.kt)("h3",{id:"\u6700\u5de6\u524d\u7f00\u539f\u5219"},"\u6700\u5de6\u524d\u7f00\u539f\u5219"),(0,a.kt)("h3",{id:"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15\u7684\u60c5\u51b5"},"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15\u7684\u60c5\u51b5"),(0,a.kt)("h3",{id:"\u8bfb\u5199\u5206\u79bb\u548c\u5206\u5e93\u5206\u8868"},"\u8bfb\u5199\u5206\u79bb\u548c\u5206\u5e93\u5206\u8868"),(0,a.kt)("h3",{id:"char\u548cvarchar\u533a\u522b"},"char\u548cvarchar\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CHAR \u662f\u4e00\u79cd\u56fa\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u6570\u636e\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"VARCHAR \u662f\u4e00\u79cd\u53ef\u53d8\u957f\u5ea6\u7684\u5b57\u7b26\u6570\u636e\u7c7b\u578b")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"mysql\u67b6\u6784"},"MySQL\u67b6\u6784"),(0,a.kt)("h3",{id:"\u4e00\u6761sql\u7684\u6267\u884c\u8fc7\u7a0b"},"\u4e00\u6761SQL\u7684\u6267\u884c\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u5728 MySQL \u4e2d\uff0c\u4e00\u6761\u5b8c\u6574 SQL \u7684\u6267\u884c\u8fc7\u7a0b\u5927\u81f4\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u8fde\u63a5\uff1aMySQL \u8fde\u63a5\u5668\u8d1f\u8d23\u5efa\u7acb\u7528\u6237\u8fde\u63a5\uff0c\u5305\u62ec\u521d\u59cb\u5316\u7528\u6237\u6743\u9650\u7b49\u57fa\u7840\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u7f13\u5b58\uff1a\u5bf9\u4e8e\u5df2\u7ecf\u5b58\u5728\u7f13\u5b58\u7684\u67e5\u8be2\u8bed\u53e5\uff0cMySQL \u4f1a\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u5206\u6790\uff1aMySQL \u4f1a\u5bf9 SQL \u8fdb\u884c\u89e3\u6790\u5e76\u68c0\u67e5\u662f\u5426\u5b58\u5728\u8bed\u6cd5\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u4f18\u5316\uff1a\u4e00\u6761 SQL \u7684\u6267\u884c\u7b56\u7565\u662f\u591a\u6837\u7684\uff0c\u6bd4\u5982\u53ef\u4ee5\u8d70\u5168\u8868\u626b\u63cf\uff0c\u6216\u8005\u8d70\u67d0\u4e2a\u7d22\u5f15\u7b49\u3002\n\u6b64\u5904\u7684\u67e5\u8be2\u4f18\u5316\u5c31\u662f\u6839\u636e\u8868\u7684\u5927\u5c0f\u3001\u7d22\u5f15\u7b49\u4fe1\u606f\uff0c\u518d\u7ed3\u5408 SQL \u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u7efc\u5408\u9009\u62e9\u6700\u4f18\u67e5\u8be2\u65b9\u6848\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u8bed\u53e5\uff1aMySQL \u7684\u6570\u636e\u64cd\u4f5c\u662f\u57fa\u4e8e\u5b58\u50a8\u5f15\u64ce\u5b9e\u73b0\u7684\u3002\u6b64\u5904\u7684\u6267\u884c\u662f\u8c03\u7528\u5b58\u50a8\u5f15\u64ce\u63a5\u53e3\u5b9e\u73b0\u3002")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4f18\u5316\u573a\u666f"},"\u4f18\u5316\u573a\u666f"),(0,a.kt)("h3",{id:"\u7d22\u5f15\u4f18\u5316"},"\u7d22\u5f15\u4f18\u5316"),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u8fd0\u7ef4\u573a\u666f"},"\u8fd0\u7ef4\u573a\u666f"),(0,a.kt)("h3",{id:"\u9009\u9519\u7d22\u5f15"},"\u9009\u9519\u7d22\u5f15"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15"},"\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u51fd\u6570\uff1a\u56e0\u4e3a\u51fd\u6570\u4f1a\u7834\u574f\u7d22\u5f15\u7684\u6709\u5e8f\u6027\uff0c\u4ece\u800c\u5bfc\u81f4\u5168\u8868\u626b\u63cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9690\u5f0f\u7c7b\u578b\u8f6c\u5316\uff1a\u6bd4\u5982\u67e5\u8be2\u5b57\u6bb5\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46\u5b9e\u9645\u67e5\u8be2\u6761\u4ef6\u4f7f\u7528\u7684\u6570\u5b57\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u5728\u5b9e\u9645\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u7684\u6267\u884c\u7c7b\u578b\u8f6c\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9690\u5f0f\u7f16\u7801\u8f6c\u5316\uff1a\u5f53\u4e24\u5f20\u8868\u4f7f\u7528\u4e86\u4e0d\u540c\u7c7b\u578b\u7684\u7f16\u7801\u65f6\uff0c\u5b9e\u9645\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u4f1a\u6267\u884c\u7f16\u7801\u7c7b\u578b\u8f6c\u5316\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5355\u6b21\u67e5\u8be2\u5f88\u6162"},"\u5355\u6b21\u67e5\u8be2\u5f88\u6162"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u7d22\u5f15\uff1a\u8d70\u5168\u8868\u626b\u63cf"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u7d22\u5f15\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u6b63\u786e\u547d\u4e2d\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u4f53\u79ef\u8fc7\u5927"))),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u5728\u810f\u9875\uff0c\u6570\u636e\u5e93\u9700\u8981\u5148\u5237\u810f\u9875")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u6027\u80fd\u5b9a\u671f\u6296\u52a8"},"\u6027\u80fd\u5b9a\u671f\u6296\u52a8"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"count\u4f1a\u626b\u63cf\u5168\u8868"},"count(*)\u4f1a\u626b\u63cf\u5168\u8868"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5220\u9664\u8868\u540e\u7a7a\u95f4\u4e0d\u53d8"},"\u5220\u9664\u8868\u540e\u7a7a\u95f4\u4e0d\u53d8"),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,a.kt)("h3",{id:"\u810f\u9875"},"\u810f\u9875"),(0,a.kt)("p",null,"\u810f\u9875\uff08Dirty Page\uff09\u662f\u6307\u7f13\u51b2\u6c60\u4e2d\u7684\u9875\uff08Page\uff09\u88ab\u4fee\u6539\u8fc7\u4f46\u5c1a\u672a\u5199\u56de\u5230\u78c1\u76d8\u7684\u72b6\u6001\u3002\n\u7f13\u51b2\u6c60\u662f\u7528\u4e8e\u6682\u65f6\u5b58\u50a8\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u9875\u7684\u533a\u57df\uff0c\u4ee5\u63d0\u9ad8\u6570\u636e\u8bfb\u53d6\u548c\u5199\u5165\u7684\u6027\u80fd\u3002\n\u8be5\u9875\u88ab\u79f0\u4e3a\u201c\u810f\u9875\u201d\uff0c\u56e0\u4e3a\u5b83\u5728\u5185\u5b58\u4e2d\u7684\u5185\u5bb9\u4e0e\u78c1\u76d8\u4e0a\u7684\u5bf9\u5e94\u6570\u636e\u4e0d\u540c\u3002"),(0,a.kt)("h3",{id:"\u4e3b\u5907\u5ef6\u8fdf"},"\u4e3b\u5907\u5ef6\u8fdf"),(0,a.kt)("h2",{id:"br"},(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"\u5f00\u653e\u8bdd\u9898"},"\u5f00\u653e\u8bdd\u9898"),(0,a.kt)("h3",{id:"\u5217\u4e3e\u4e00\u4e9b\u4f60\u7684\u6570\u636e\u5e93\u4f18\u5316\u7ecf\u9a8c"},"\u5217\u4e3e\u4e00\u4e9b\u4f60\u7684\u6570\u636e\u5e93\u4f18\u5316\u7ecf\u9a8c"),(0,a.kt)("p",null,"\u7d22\u5f15\u4f18\u5316\n\u573a\u666f1\uff1a\n\u4f18\u5316\u524d\n\u5b57\u6bb5\u540d\uff1aK\n\u5b57\u6bb5\u7c7b\u578b\uff1atext\n\u6570\u636e\u91cf\u7ea7\uff1a17\u4ebf\n\u7d22\u5f15\u4f53\u79ef\uff1a70G\n17\u4ebf\u6570\u636e\uff0c\u5b57\u6bb5\uff1ak\n\u4f18\u5316\u540e\uff1a\n\u7d22\u5f15\u4f53\u79ef\uff1a60G\n\u4f18\u5316\u65b9\u6848\uff1abtree\u7d22\u5f15\u6539hash\u7d22\u5f15\u3001\u5b57\u7b26\u4e32\u8f6c\n\u7d22\u5f15\u4f53\u79ef\uff1a30G"),(0,a.kt)("p",null,"\u8986\u76d6\u7d22\u5f15\uff1a\u6837\u672c\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3\uff0csample_hash\u548csample_type\u4e24\u4e2a\u5b57\u6bb5\uff0c\u67e5\u8be2\u6548\u7387\u66f4\u7a33\u5b9a\u4e86"))}s.isMDXComponent=!0}}]);