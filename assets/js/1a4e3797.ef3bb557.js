"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7920],{98374:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var n=a(67294),r=a(52263),c=a(63929),s=a(35742),l=a(39960),u=a(16550),o=a(10412);const m="q";const h=function(){const e=(0,u.k6)(),t=(0,u.TH)(),{siteConfig:{baseUrl:a}}=(0,r.Z)();return{searchValue:o.Z.canUseDOM&&new URLSearchParams(t.search).get(m)||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set(m,a):n.delete(m),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var i=a(90022),p=a(98202),d=a(82539),f=a(10726),I=a(91073),E=a(80311),_=a(61029);function g(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const y={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function S(e){let{searchResult:{document:t,type:a,page:r,tokens:c,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:r.b).slice(),h=o?t.s:t.t;return u||m.push(r.t),n.createElement("article",{className:y.searchResultItem},n.createElement("h2",null,n.createElement(l.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,d.C)(h,c):(0,f.o)(h,(0,I.m)(s,"t"),c,100)}})),m.length>0&&n.createElement("p",{className:y.searchResultItemPath},m.join(" \u203a ")),o&&n.createElement("p",{className:y.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,I.m)(s,"t"),c,100)}}))}const R=function(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{searchValue:t,updateSearchPath:a}=h(),[l,u]=(0,n.useState)(t),[o,m]=(0,n.useState)(),[d,f]=(0,n.useState)(),I=(0,n.useMemo)((()=>l?g(_.Iz.search_results_for,{keyword:l}):_.Iz.search_the_documentation),[l]);(0,n.useEffect)((()=>{a(l),o&&(l?o(l,(e=>{f(e)})):f(void 0))}),[l,o]);const R=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==l&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,i.w)(e);m((()=>(0,p.v)(t,a,100)))}()}),[e]),n.createElement(c.Z,{title:I},n.createElement(s.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"})),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,I),n.createElement("input",{type:"search",name:"q",className:y.searchQueryInput,"aria-label":"Search",onChange:R,value:l,autoComplete:"off",autoFocus:!0}),!o&&l&&n.createElement("div",null,n.createElement(E.Z,null)),d&&(d.length>0?n.createElement("p",null,g(1===d.length?_.Iz.count_documents_found:_.Iz.count_documents_found_plural,{count:d.length})):n.createElement("p",null,_.Iz.no_documents_were_found)),n.createElement("section",null,d&&d.map((e=>n.createElement(S,{key:e.document.i,searchResult:e}))))))}}}]);