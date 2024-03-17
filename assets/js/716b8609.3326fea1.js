"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||u;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<u;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const u={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(u.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),u=r(86010),l=r(12466),o=r(16550),s=r(91980),c=r(67392),i=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(n.location.search);t.set(u,e),n.replace({...n.location,search:t.toString()})}),[u,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,u=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[s,c]=f({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,u]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:n}),g=(()=>{const e=s??p;return d({value:e,tabValues:u})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,u]),tabValues:u}}var g=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==o&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>i.push(e),onKeyDown:d,onClick:m},l,{className:(0,u.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":o===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",h.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},55796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162);const u={title:"\u540e\u7aef\u6280\u672f\u6846\u67b6\u4e0e\u67b6\u6784\u7684\u63a2\u7d22\u5b9e\u8df5",authors:["czasg"],tags:["\u540e\u7aef","\u5206\u4eab"]},l=void 0,o={permalink:"/docusaurus/blog/2023/06/09/\u540e\u7aef\u6280\u672f\u6846\u67b6\u63a2\u7d22\u4e0e\u5b9e\u8df5",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2023/06-09-\u540e\u7aef\u6280\u672f\u6846\u67b6\u63a2\u7d22\u4e0e\u5b9e\u8df5/index.mdx",source:"@site/blog/2023/06-09-\u540e\u7aef\u6280\u672f\u6846\u67b6\u63a2\u7d22\u4e0e\u5b9e\u8df5/index.mdx",title:"\u540e\u7aef\u6280\u672f\u6846\u67b6\u4e0e\u67b6\u6784\u7684\u63a2\u7d22\u5b9e\u8df5",description:"\u5728\u73b0\u4ee3 Web \u5f00\u53d1\u4e2d\uff0c\u6280\u672f\u6846\u67b6\u4e0e\u67b6\u6784\u4e4b\u95f4\u662f\u76f8\u8f85\u76f8\u6210\u7684\u5173\u7cfb\uff0c\u5b83\u4eec\u5728\u540e\u7aef\u5f00\u53d1\u4e2d\u90fd\u626e\u6f14\u7740\u81f3\u5173\u91cd\u8981\u7684\u89d2\u8272\u3002",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"\u540e\u7aef",permalink:"/docusaurus/blog/tags/\u540e\u7aef"},{label:"\u5206\u4eab",permalink:"/docusaurus/blog/tags/\u5206\u4eab"}],readingTime:29.95,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"\u540e\u7aef\u6280\u672f\u6846\u67b6\u4e0e\u67b6\u6784\u7684\u63a2\u7d22\u5b9e\u8df5",authors:["czasg"],tags:["\u540e\u7aef","\u5206\u4eab"]},prevItem:{title:"linux\u5e38\u89c1\u76ee\u5f55\u8bf4\u660e",permalink:"/docusaurus/blog/2023/07/27/linux\u5e38\u89c1\u76ee\u5f55\u8bf4\u660e"},nextItem:{title:"OSI\u4e03\u5c42\u6a21\u5f0f",permalink:"/docusaurus/blog/2023/04/12/OSI\u4e03\u5c42\u6a21\u5f0f"}},s={authorsImageUrls:[void 0]},c=[],i={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u73b0\u4ee3 Web \u5f00\u53d1\u4e2d\uff0c\u6280\u672f\u6846\u67b6\u4e0e\u67b6\u6784\u4e4b\u95f4\u662f\u76f8\u8f85\u76f8\u6210\u7684\u5173\u7cfb\uff0c\u5b83\u4eec\u5728\u540e\u7aef\u5f00\u53d1\u4e2d\u90fd\u626e\u6f14\u7740\u81f3\u5173\u91cd\u8981\u7684\u89d2\u8272\u3002\n\u56e0\u6b64\uff0c\u5b66\u4e60\u6846\u67b6\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u4f5c\u7528\uff0c\u4e86\u89e3\u67b6\u6784\u7684\u6f14\u8fdb\uff0c\u662f\u6bcf\u4f4d\u540e\u7aef\u5f00\u53d1\u8005\u90fd\u5e94\u8be5\u5177\u5907\u7684\u91cd\u8981\u77e5\u8bc6\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u672c\u6587\uff0c\u4f60\u53ef\u4ee5\u5b66\u4e60\u5e76\u4e86\u89e3\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u6280\u672f\u6846\u67b6\u7684\u91cd\u8981\u6027\u548c\u4f5c\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u6280\u672f\u67b6\u6784\u7684\u53d1\u5c55\u8d8b\u52bf"),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u540e\u7aef\u6280\u672f\u6846\u67b6"),(0,a.kt)("li",{parentName:"ul"},"\u6280\u672f\u6846\u67b6\u9009\u62e9\u4e0e\u8bc4\u4f30"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u6280\u672f\u6846\u67b6\u5b9e\u8df5")))}m.isMDXComponent=!0}}]);