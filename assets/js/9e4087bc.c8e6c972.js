"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3608],{895:function(e,t,r){r.d(t,{dK:function(){return n},_k:function(){return a},vc:function(){return c},rx:function(){return o},qo:function(){return u},Hk:function(){return l},Iz:function(){return s}});r(1336);var n=["en"],a=!1,c=null,o=null,u=8,l=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},3012:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),a=r(4814),c=r(9960),o=r(5999);function u(e){var t=e.year,r=e.posts;return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("ul",null,r.map((function(e){return n.createElement("li",{key:e.metadata.date},n.createElement(c.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function l(e){var t=e.years;return n.createElement("section",{className:"margin-vert--lg"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},n.createElement(u,e))})))))}function s(e){var t,r,c=e.archive,u=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=(t=c.blogPosts,r=t.reduceRight((function(e,t){var r=t.metadata.date.split("-")[0],n=e.get(r)||[];return e.set(r,[t].concat(n))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return n.createElement(a.Z,{title:u,description:s},n.createElement("header",{className:"hero hero--primary"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},u),n.createElement("p",{className:"hero__subtitle"},s))),n.createElement("main",null,i.length>0&&n.createElement(l,{years:i})))}}}]);