"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4195],{8290:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(7294),r=a(3929),l=a(2263),s=a(7462),o=a(6010);const c={features:"features_xdhU",featureImg:"featureImg_IxXR",featureItem:"featureItem_inZH"},i=[{title:"\u7ad9\u70b9\u9009\u578b",src:"img/homepage/feature/1.png",description:n.createElement(n.Fragment,null,"\u535a\u5ba2\u6ce8\u91cd\u4e8e\u8bb0\u5f55\u95ee\u9898\u3001\u751f\u6d3b\u7b49\u65b9\u9762\u7684\u77e5\u8bc6\u70b9\u3002\u6587\u6863\u5219\u6ce8\u91cd\u4e8e\u67d0\u4e2a\u9886\u57df\u7684\u77e5\u8bc6\u6574\u7406\u3002 \u76f8\u6bd4\u5bf9\u4f20\u7edf\u7684\u535a\u5ba2\u7ad9\u70b9\uff0c\u6211\u66f4\u503e\u5411\u4e8e\u96c6",n.createElement("strong",null,"\u535a\u5ba2\u3001\u6587\u6863\u4e8e\u4e00\u4f53"),"\u7684\u8bb0\u5f55\u65b9\u5f0f.")},{title:"\u7ad9\u70b9\u6280\u672f",src:"img/homepage/feature/2.png",description:n.createElement(n.Fragment,null,"\u672c\u7ad9\u662f\u57fa\u4e8e ",n.createElement("strong",null,"Docusaurus")," \u642d\u5efa\u7684\u9759\u6001\u7ad9\u70b9\uff0c\u76ee\u524d\u501f\u52a9 ",n.createElement("strong",null,"Github Actions")," \u81ea\u52a8\u6784\u5efa\u3001\u90e8\u7f72\u5728 ",n.createElement("strong",null,"Github Pages"),".")},{title:"Czasg \u542b\u4e49",src:"img/homepage/feature/3.png",description:n.createElement(n.Fragment,null,"\u8fd9\u4e8b\uff0c\u8fd8\u5f97\u4ece 1995 \u5e74\u7684\u90a3\u4e00\u665a\u8bf4\u8d77\ud83d\ude0f\u7b97\u4e86\uff0c\u6211\u644a\u724c\u4e86\uff0c",n.createElement("strong",null,"\u6211(cza)")," \u662f \ud83d\ude0e",n.createElement("strong",null,"\u5e05\u54e5(sg)"),"\ud83d\ude0e.")}];function m(e){let{src:t,title:a,description:r}=e;const[l,s]=(0,n.useState)(!1);return n.createElement("div",{className:(0,o.Z)("col col--4"),style:{padding:"30px",userSelect:"none"},onMouseOver:()=>s(!0),onMouseLeave:()=>s(!1)},n.createElement("div",{className:(0,o.Z)({"shadow--md":l,"shadow--lw":!l},c.featureItem)},n.createElement("div",{className:(0,o.Z)("text--center")},n.createElement("img",{className:c.featureImg,src:t})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,a),n.createElement("p",null,r))))}function u(){return n.createElement("section",{className:c.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},i.map(((e,t)=>n.createElement(m,(0,s.Z)({key:t},e)))))))}var d=a(9960);const g="indexBackground_nvSX",f="leftTopBar_uo8C",h="heroBanner_auK5",v="buttons_Cy9m",E="canvasBox_SEdp",p="positionAbsolute_BLcu",b="middleDiv_F0Gk",T="centerBox_T9x_";class _ extends n.PureComponent{constructor(e){super(e),this.islive=!0}componentDidMount(){const e=this;var t={runTimes:0};(()=>{const a=["\u7406\u8d22","\u6da8\u85aa","\u5065\u5eb7","\u5feb\u4e50","\u5927\u5382","\u957f\u80d6","\u953b\u70bc","\u732b\u54aa","\u5bb6\u5ead","\u81ea\u4fe1","\u5b58\u94b1","\u52c7\u6562"],n=document.querySelector("#bg"),r=document.querySelector("#ani"),l=n.getContext("2d"),s=r.getContext("2d"),o=400/260;n.height=r.height=400,n.width=r.width=400,l.strokeStyle="rgba(255,255,255)",s.strokeStyle="rgba(255,255,255)",s.fillStyle="rgba(255,255,255)",l.lineWidth=5,s.font="14px Arial",l.beginPath(),l.translate(200,200),l.moveTo(84*o,0),l.arc(0,0,84*o,0,2*Math.PI),l.moveTo(115*o,0),l.arc(0,0,115*o,0,2*Math.PI),l.stroke(),l.beginPath(),l.moveTo(-69*o,40*o),l.lineTo(69*o,40*o),l.lineTo(0,-80*o),l.lineTo(-69*o,40*o),l.moveTo(-69*o,-40*o),l.lineTo(69*o,-40*o),l.lineTo(0,80*o),l.lineTo(-69*o,-40*o),l.stroke(),l.beginPath(),l.fillStyle="red",l.moveTo(0,-125*o),l.lineTo(-5*o,-180),l.lineTo(5*o,-180),l.lineTo(0,-125*o),l.moveTo(-125*o,0),l.lineTo(-180,5*o),l.lineTo(-180,-5*o),l.lineTo(-125*o,0),l.fill();const c=Math.PI/30,i=Math.PI/2+Math.PI/18,m=function*(e){let t;const a=[];for(t=0;t<e;t++)a.push(t);for(;;)for(t of a)yield t}(2e3),u=new Path2D;u.moveTo(120*o,0),u.lineTo(125*o,0),function n(){if(!e.islive)return void console.log("draw exit");const r=m.next().value;s.clearRect(0,0,400,400),s.save(),s.translate(200,200),s.save(),s.rotate(r*(Math.PI/500));for(let e=0;e<60;e++)s.stroke(u),s.rotate(c);s.restore(),s.save(),s.rotate(-r*(Math.PI/1e3)),a.forEach((e=>{s.rotate(Math.PI/6),s.save(),s.translate(90*o,0),s.rotate(i),s.fillText(e,5,0),s.restore()})),s.restore(),s.restore(),0===t.runTimes?setTimeout((()=>{requestAnimationFrame(n)}),1500):requestAnimationFrame(n),t.runTimes++}()})()}componentWillUnmount(){this.islive=!1}render(){return n.createElement("div",{className:(0,o.Z)("hero hero--dark",h,g)},n.createElement("div",{className:"container",style:{minHeight:"100vh"}},n.createElement("div",{className:(0,o.Z)(f)},"\u4f51\u4f51\u53c8\u997f\u4e86"),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,o.Z)("col col--6")},n.createElement("div",{className:E},n.createElement("canvas",{id:"bg",className:(0,o.Z)(p)}),n.createElement("canvas",{id:"ani",className:(0,o.Z)(p)}))),n.createElement("div",{className:(0,o.Z)("col col--6")},n.createElement("div",{className:(0,o.Z)(b)},n.createElement("div",null,n.createElement("h1",{className:"hero__title"},"CZA",n.createElement("a",{style:{background:"#f3ae05",color:"#000000",padding:"0.3rem",borderRadius:"0.5rem",marginLeft:"0.3rem"}},"SG")),n.createElement("p",{className:"hero__subtitle"},"\ud83d\udc4b\ud83d\udc4b\ud83d\udc4b"),n.createElement("div",{className:v},n.createElement(d.Z,{className:"button button--secondary button--lg",to:"/about-me"},"About Me ~ 5min \u23f1\ufe0f")))))),n.createElement("div",{className:"row",style:{display:"flex",justifyContent:"center"}},n.createElement("div",{className:T},n.createElement("img",{src:"https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=czasg&hide=issues&hide_title=true&include_all_commits=true&bg_color=45,f8b2b2,ac96e3&title_color=fff&text_color=fff",alt:"GitHub Stats"}),n.createElement("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=czasg&layout=donut-vertical&hide_title=true&bg_color=45,f8b2b2,ac96e3&title_color=fff&text_color=fff",alt:"GitHub Stats"})))))}}function N(){return n.createElement(_,null)}function x(){const{siteConfig:e}=(0,l.Z)();return n.createElement(r.Z,{title:"\u9996\u9875",description:`Author ${e.title}`},n.createElement("main",null,n.createElement(N,null),n.createElement(u,null)))}}}]);