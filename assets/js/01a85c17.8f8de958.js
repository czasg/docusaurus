"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4013],{895:function(e,t,a){a.d(t,{dK:function(){return n},_k:function(){return r},vc:function(){return l},rx:function(){return c},qo:function(){return s},Hk:function(){return u},Iz:function(){return i}});a(1336);var n=["en"],r=!1,l=null,c=null,s=8,u=50,i={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},8665:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(3366),r=a(7294),l=a(6010),c=a(4814),s=a(9960),u="sidebar_q+wC",i="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",m="sidebarItem_cjdF",d="sidebarItemLink_zyXk",f="sidebarItemLinkActive_wcJs",g=a(5999);function b(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(u,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var v=["sidebar","toc","children"];var _=function(e){var t=e.sidebar,a=e.toc,s=e.children,u=(0,n.Z)(e,v),i=t&&t.items.length>0;return r.createElement(c.Z,u,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},i&&r.createElement("aside",{className:"col col--3"},r.createElement(b,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},497:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(8665),l=a(7774),c=a(2822),s="tag_7kA+";function u(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:s},n.createElement(l.Z,e))}))),n.createElement("hr",null))}var i=function(e){var t=e.tags,a=(0,c.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(u,{key:e.letter,letterEntry:e})})))};var o=function(e){var t=e.tags,a=e.sidebar,l=(0,c.MA)();return n.createElement(r.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,l),n.createElement(i,{tags:Object.values(t)}))}},7774:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l=a(9960),c="tag_WK-t",s="tagRegular_LXbV",u="tagWithCount_S5Zl";var i=function(e){var t,a=e.permalink,i=e.name,o=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(c,(t={},t[s]=!o,t[u]=o,t))},i,o&&n.createElement("span",null,o))}}}]);