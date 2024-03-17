"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5013],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=l(t),f=o,d=c["".concat(a,".").concat(f)]||c[f]||p[f]||i;return t?r.createElement(d,s(s({ref:n},m),{},{components:t})):r.createElement(d,s({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u[c]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={},s=void 0,u={unversionedId:"algorithms/sort/\u5806\u6392\u5e8f",id:"algorithms/sort/\u5806\u6392\u5e8f",title:"\u5806\u6392\u5e8f",description:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",source:"@site/docs/develop/algorithms/sort/\u5806\u6392\u5e8f.md",sourceDirName:"algorithms/sort",slug:"/algorithms/sort/\u5806\u6392\u5e8f",permalink:"/docusaurus/docs/develop/algorithms/sort/\u5806\u6392\u5e8f",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/algorithms/sort/\u5806\u6392\u5e8f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5192\u6ce1\u6392\u5e8f",permalink:"/docusaurus/docs/develop/algorithms/sort/\u5192\u6ce1\u6392\u5e8f"},next:{title:"\u5e0c\u5c14\u6392\u5e8f",permalink:"/docusaurus/docs/develop/algorithms/sort/\u5e0c\u5c14\u6392\u5e8f"}},a={},l=[{value:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:4},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:4}],m={toc:l},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a"),(0,o.kt)("p",null,"O(nlogn)"),(0,o.kt)("h4",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,o.kt)("p",null,"1\u3001\u5c06\u4e00\u4e2a\u6570\u7ec4\u6392\u6210\u5927\u9876\u5806",(0,o.kt)("br",{parentName:"p"}),"\n","2\u30010 \u4f4d\u548c\u6700\u540e\u4e00\u4f4d\u4ea4\u6362",(0,o.kt)("br",{parentName:"p"}),"\n","3\u3001\u9012\u5f52\uff0c\u6bcf\u6b21\u90fd\u65f6 0 \u4f4d\u548c\u6570\u7ec4\u6700\u540e\u4e00\u4f4d\u4ea4\u6362\uff0c\u5373\u53ef\u5b8c\u6210\u6392\u5e8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package sort\n\nimport "github.com/czasg/strualgo/basis"\n\nfunc HeapSortASC[Number basis.Number](nums []Number) []Number {\n    newNums := make([]Number, len(nums))\n    for index, num := range nums {\n        newNums[index] = num\n    }\n    for i := len(newNums) / 2; i >= 0; i-- {\n        root := i\n        left := 2*i + 1\n        right := 2*i + 2\n        if left < len(newNums) && newNums[left] > newNums[root] {\n            root = left\n        }\n        if right < len(newNums) && newNums[right] > newNums[root] {\n            root = right\n        }\n        if root != i {\n            newNums[root], newNums[i] = newNums[i], newNums[root]\n        }\n    }\n    for l := len(newNums) - 1; l >= 0; l-- {\n        newNums[0], newNums[l] = newNums[l], newNums[0]\n        for i := l / 2; i >= 0; i-- {\n            root := i\n            left := 2*i + 1\n            right := 2*i + 2\n            if left < l && newNums[left] > newNums[root] {\n                root = left\n            }\n            if right < l && newNums[right] > newNums[root] {\n                root = right\n            }\n            if root != i {\n                newNums[root], newNums[i] = newNums[i], newNums[root]\n            }\n        }\n    }\n    return newNums\n}\n')))}p.isMDXComponent=!0}}]);