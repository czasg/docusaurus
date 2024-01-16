"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,b=p["".concat(i,".").concat(g)]||p[g]||m[g]||l;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},63413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u5e38\u89c1 sql \u6279\u91cf\u64cd\u4f5c",authors:["czasg"],tags:["\u6570\u636e\u5e93"]},o=void 0,s={permalink:"/docusaurus/blog/2022/01/20/\u5e38\u7528sql\u64cd\u4f5c",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/01-20-\u5e38\u7528sql\u64cd\u4f5c/index.md",source:"@site/blog/2022/01-20-\u5e38\u7528sql\u64cd\u4f5c/index.md",title:"\u5e38\u89c1 sql \u6279\u91cf\u64cd\u4f5c",description:"\u6574\u7406\u4e0b sql \u5e38\u89c1\u7684\u6279\u91cf\u64cd\u4f5c\u5199\u6cd5\u3002",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[{label:"\u6570\u636e\u5e93",permalink:"/docusaurus/blog/tags/\u6570\u636e\u5e93"}],readingTime:.81,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"\u5e38\u89c1 sql \u6279\u91cf\u64cd\u4f5c",authors:["czasg"],tags:["\u6570\u636e\u5e93"]},prevItem:{title:"Jmeter\u53ca\u6027\u80fd\u6d4b\u8bd5",permalink:"/docusaurus/blog/2022/02/02/jmeter\u53ca\u6027\u80fd\u6d4b\u8bd5"},nextItem:{title:"nginx \u914d\u7f6e\u8bf4\u660e",permalink:"/docusaurus/blog/2022/01/12/nginx\u914d\u7f6e\u8bf4\u660e"}},i={authorsImageUrls:[void 0]},c=[{value:"\u63d2\u5165",id:"\u63d2\u5165",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6574\u7406\u4e0b sql \u5e38\u89c1\u7684\u6279\u91cf\u64cd\u4f5c\u5199\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u63d2\u5165"},"\u63d2\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u6279\u91cf\u63d2\u5165"',title:'"\u6279\u91cf\u63d2\u5165"'},"INSERT INTO my_table (k, v) VALUES ('k', 'v'); -- \u63d2\u5165\u5355\u6761\nINSERT INTO my_table (SELECT * FROM same_table); -- \u76f8\u540c\u7ed3\u6784\u8868\u4e4b\u95f4\u7684\u6279\u91cf\u63d2\u5165\nINSERT INTO my_table (k, v) (SELECT k, v FROM other_table); -- \u4e0d\u540c\u7ed3\u6784\u8868\u4e4b\u95f4\u7684\u6279\u91cf\u63d2\u5165\n")),(0,a.kt)("h2",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u6279\u91cf\u66f4\u65b0"',title:'"\u6279\u91cf\u66f4\u65b0"'},"UPDATE my_table SET v = 'new_v' WHERE k = 'new_k'; -- \u66f4\u65b0\u4e00\u6b21\nUPDATE my_table AS o SET v = new_table.v FROM (SELECT * FROM other_table) as new_table WHERE o.k = new_table.k; -- \u6279\u91cf\u66f4\u65b0\n")),(0,a.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u6279\u91cf\u5220\u9664"',title:'"\u6279\u91cf\u5220\u9664"'},"DELETE FROM new_table AS kv USING other_table AS row WHERE kv.k = row.k;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u8054\u7ea7\u5220\u9664 CASCADE"',title:'"\u8054\u7ea7\u5220\u9664','CASCADE"':!0},"DROP TABLE IF EXISTS my_table CASCADE;\n")))}m.isMDXComponent=!0}}]);