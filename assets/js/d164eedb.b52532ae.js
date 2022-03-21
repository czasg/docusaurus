"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[329],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"\u5e38\u89c1 sql \u6279\u91cf\u64cd\u4f5c",authors:["czasg"],tags:["\u6570\u636e\u5e93"]},u=void 0,c={permalink:"/docusaurus/blog/2022/01/20/\u5e38\u7528sql\u64cd\u4f5c",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/01-20-\u5e38\u7528sql\u64cd\u4f5c/index.md",source:"@site/blog/2022/01-20-\u5e38\u7528sql\u64cd\u4f5c/index.md",title:"\u5e38\u89c1 sql \u6279\u91cf\u64cd\u4f5c",description:"\u6574\u7406\u4e0b sql \u5e38\u89c1\u7684\u6279\u91cf\u64cd\u4f5c\u5199\u6cd5\u3002",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[{label:"\u6570\u636e\u5e93",permalink:"/docusaurus/blog/tags/\u6570\u636e\u5e93"}],readingTime:.81,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"Jmeter\u53ca\u6027\u80fd\u6d4b\u8bd5",permalink:"/docusaurus/blog/2022/02/02/jmeter\u53ca\u6027\u80fd\u6d4b\u8bd5"},nextItem:{title:"nginx \u914d\u7f6e\u8bf4\u660e",permalink:"/docusaurus/blog/2022/01/12/nginx\u914d\u7f6e\u8bf4\u660e"}},s={authorsImageUrls:[void 0]},p=[{value:"\u63d2\u5165",id:"\u63d2\u5165",children:[],level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",children:[],level:2},{value:"\u5220\u9664",id:"\u5220\u9664",children:[],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6574\u7406\u4e0b sql \u5e38\u89c1\u7684\u6279\u91cf\u64cd\u4f5c\u5199\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u63d2\u5165"},"\u63d2\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u6279\u91cf\u63d2\u5165"',title:'"\u6279\u91cf\u63d2\u5165"'},"INSERT INTO my_table (k, v) VALUES ('k', 'v'); -- \u63d2\u5165\u5355\u6761\nINSERT INTO my_table (SELECT * FROM same_table); -- \u76f8\u540c\u7ed3\u6784\u8868\u4e4b\u95f4\u7684\u6279\u91cf\u63d2\u5165\nINSERT INTO my_table (k, v) (SELECT k, v FROM other_table); -- \u4e0d\u540c\u7ed3\u6784\u8868\u4e4b\u95f4\u7684\u6279\u91cf\u63d2\u5165\n")),(0,l.kt)("h2",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u6279\u91cf\u66f4\u65b0"',title:'"\u6279\u91cf\u66f4\u65b0"'},"UPDATE my_table SET v = 'new_v' WHERE k = 'new_k'; -- \u66f4\u65b0\u4e00\u6b21\nUPDATE my_table AS o SET v = new_table.v FROM (SELECT * FROM other_table) as new_table WHERE o.k = new_table.k; -- \u6279\u91cf\u66f4\u65b0\n")),(0,l.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u6279\u91cf\u5220\u9664"',title:'"\u6279\u91cf\u5220\u9664"'},"DELETE FROM new_table AS kv USING other_table AS row WHERE kv.k = row.k;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u8054\u7ea7\u5220\u9664 CASCADE"',title:'"\u8054\u7ea7\u5220\u9664','CASCADE"':!0},"DROP TABLE IF EXISTS my_table CASCADE;\n")))}f.isMDXComponent=!0}}]);