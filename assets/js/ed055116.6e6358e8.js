"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb",slug:"how-to-use"},o=void 0,i={unversionedId:"rabbitmq/\u5feb\u901f\u5f00\u59cb",id:"rabbitmq/\u5feb\u901f\u5f00\u59cb",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5b89\u88c5",source:"@site/docs/develop/rabbitmq/2.\u5feb\u901f\u5f00\u59cb.md",sourceDirName:"rabbitmq",slug:"/rabbitmq/how-to-use",permalink:"/docusaurus/docs/develop/rabbitmq/how-to-use",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/rabbitmq/2.\u5feb\u901f\u5f00\u59cb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb",slug:"how-to-use"},sidebar:"tutorialSidebar",previous:{title:"RabbitMQ",permalink:"/docusaurus/docs/develop/rabbitmq/"},next:{title:"\u6d88\u606f\u786e\u8ba4",permalink:"/docusaurus/docs/develop/rabbitmq/message-confirm"}},c={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"RPC",id:"rpc",level:2}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u672c\u6587\u901a\u8fc7 Docker \u542f\u52a8 RabbitMQ \u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u62c9\u53d6\u955c\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"rabbitmq:management"),"\uff0c\u6b64\u955c\u50cf\u5305\u542b\u56fe\u5f62\u5316\u7ba1\u7406\u754c\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="\u62c9\u53d6\u955c\u50cf"',title:'"\u62c9\u53d6\u955c\u50cf"'},"docker pull rabbitmq:management\n")),(0,a.kt)("p",null,"\u7136\u540e\u542f\u52a8\u670d\u52a1\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:15672")," \u5373\u53ef\u8fdb\u5165\u767b\u5f55\u9875\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="\u542f\u52a8\u670d\u52a1"',title:'"\u542f\u52a8\u670d\u52a1"'},"docker run \\\n  -itd \\\n  --name rmq \\\n  -e RABBITMQ_DEFAULT_USER=admin \\\n  -e RABBITMQ_DEFAULT_PASS=admin \\\n  -p 15672:15672 \\\n  -p 5672:5672 \\\n  rabbitmq:management\n")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u672c\u6587\u91c7\u7528 Pika\uff08Python\uff09\u8fdb\u884c\u4ee3\u7801\u6f14\u793a\u3002\u56e0\u6b64\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u4e09\u65b9\u5305\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pip\u5b89\u88c5"',title:'"pip\u5b89\u88c5"'},"pip3 install pika\n")),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("p",null,"\u901a\u8fc7 Pika \u6a21\u5757\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u521d\u59cb\u5316\u4e00\u4e2a\u5e94\u7528\u6240\u9700\u8981\u7684\u57fa\u7840\u6a21\u5757\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\uff1a\u7269\u7406\u4e0a\u7684\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"\u4fe1\u9053\uff1a\u903b\u8f91\u4e0a\u7684\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"\u6d88\u606f\u961f\u5217\uff1a\u5b58\u653e\u6d88\u606f\u7684\u961f\u5217")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u5e94\u7528\u521d\u59cb\u5316"',title:'"\u5e94\u7528\u521d\u59cb\u5316"'},"import pika\n# \u521d\u59cb\u5316\u8fde\u63a5\nconnection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))\n# \u521d\u59cb\u5316\u4fe1\u9053\nchannel = connection.channel()\n# \u521d\u59cb\u5316\u961f\u5217\nchannel.queue_declare(queue='hello')\n# \u521d\u59cb\u5316\u9884\u53d6\u6570\u91cf\nchannel.basic_qos(prefetch_count=1)\n")),(0,a.kt)("p",null,"\u5728\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fe1\u9053\u7b80\u5355\u53c8\u5feb\u901f\u7684\u53d1\u9001\u4e00\u6761\u6d88\u606f\u3002\u5176\u4e2d\u4e00\u6761\u6d88\u606f\u4e2d\u6700\u57fa\u7840\u7684\u5c5e\u6027\u4e3b\u8981\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ea4\u6362\u673a\uff1a\u4e0d\u540c\u7c7b\u578b\u7684\u4ea4\u6362\u673a\u62e5\u6709\u4e0d\u540c\u7684\u8f6c\u53d1\u80fd\u529b\uff0c\u5e38\u548c\u8def\u7531\u952e\u7ec4\u5408\u4f7f\u7528\uff0c\u7528\u4e8e\u786e\u5b9a\u4e00\u6761\u6d88\u606f\u5e94\u8be5\u88ab\u63a8\u9001\u5230\u90a3\u4e2a\u961f\u5217\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8def\u7531\u952e\uff1a-"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\uff1a-")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u53d1\u9001\u6d88\u606f"',title:'"\u53d1\u9001\u6d88\u606f"'},"channel.basic_publish(\n    exchange='',\n    routing_key='hello',\n    body='Hello World!',\n    properties=pika.BasicProperties(\n        delivery_mode = pika.spec.PERSISTENT_DELIVERY_MODE,\n    )\n)\n")),(0,a.kt)("p",null,"\u5728\u6d88\u606f\u5b58\u653e\u5230\u6d88\u606f\u961f\u5217\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"basic_consume")," \u6307\u5b9a\u6d88\u8d39\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u63a5\u6536\u6d88\u606f"',title:'"\u63a5\u6536\u6d88\u606f"'},"def callback_handler(ch, method, properties, body):\n    print(\" [x] Received %r\" % body)\n\nchannel.basic_consume(\n    queue='hello',\n    auto_ack=True,\n    on_message_callback=callback_handler,\n)\n")),(0,a.kt)("h2",{id:"rpc"},"RPC"),(0,a.kt)("p",null,"\u901a\u8fc7 RabbitMQ \u6765\u5b9e\u73b0 RPC \u529f\u80fd\uff0c\u5176\u672c\u8d28\u8fd8\u662f\u901a\u8fc7\u751f\u4ea7\u8005/\u6d88\u8d39\u8005\u6a21\u5f0f\u5b9e\u73b0\u7684\u3002\n\u5927\u81f4\u6d41\u7a0b\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u8005"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u968f\u673a\u552f\u4e00\u7684\u6392\u4ed6\u961f\u5217"),(0,a.kt)("li",{parentName:"ol"},"\u63a8\u9001\u6d88\u606f\u65f6\u643a\u5e26\u4e0a\u6b64\u6392\u4ed6\u961f\u5217\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u56de\u8c03")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6d88\u8d39\u8005"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63a5\u6536\u6d88\u606f"),(0,a.kt)("li",{parentName:"ol"},"\u5904\u7406\u6d88\u606f"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u7ed3\u679c\u63a8\u9001\u5230\u56de\u8c03\u961f\u5217\u4e2d")),(0,a.kt)("p",null,"\u4ee3\u7801\u53c2\u8003\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u751f\u4ea7\u8005\u6a21\u5757"',title:'"\u751f\u4ea7\u8005\u6a21\u5757"'},"import pika\nimport uuid\n\nclass FibonacciRpcClient(object):\n\n    def __init__(self):\n        self.connection = \\\n            pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))\n\n        self.channel = self.connection.channel()\n        result = self.channel.queue_declare(queue='', exclusive=True) # \u961f\u5217\u540d\u4e3a\u7a7a\n        self.callback_queue = result.method.queue\n\n        self.channel.basic_consume(\n            queue=self.callback_queue,\n            on_message_callback=self.on_response,\n            auto_ack=True,\n        )\n\n        self.response = None\n        self.corr_id = None\n\n    def on_response(self, ch, method, props, body):\n        if self.corr_id == props.correlation_id:\n            self.response = body\n\n    def call(self, n):\n        self.response = None\n        self.corr_id = str(uuid.uuid4())\n        self.channel.basic_publish(\n            exchange='',\n            routing_key='rpc_queue',\n            properties=pika.BasicProperties(\n                reply_to=self.callback_queue,\n                correlation_id=self.corr_id,\n            ),\n            body=str(n),\n        )\n        self.connection.process_data_events(time_limit=None)\n        return int(self.response)\n\n\nfibonacci_rpc = FibonacciRpcClient()\nresponse = fibonacci_rpc.call(30)\nprint(\" [.] Got %r\" % response)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u6d88\u8d39\u8005\u6a21\u5757"',title:'"\u6d88\u8d39\u8005\u6a21\u5757"'},"import pika\n# \u5e94\u7528\u521d\u59cb\u5316\nconnection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))\nchannel = connection.channel()\nchannel.queue_declare(queue='rpc_queue')\nchannel.basic_qos(prefetch_count=1)\n\ndef fib(n):\n    if n == 0:\n        return 0\n    elif n == 1:\n        return 1\n    else:\n        return fib(n - 1) + fib(n - 2)\n\n# \u5f02\u6b65\u5904\u7406\u51fd\u6570\ndef callback_handler(ch, method, props, body):\n    n = int(body)\n    response = fib(n)\n\n    ch.basic_publish(\n        exchange='',\n        routing_key=props.reply_to,\n        properties=pika.BasicProperties(\n            correlation_id = props.correlation_id,\n        ),\n        body=str(response),\n    )\n    ch.basic_ack(delivery_tag=method.delivery_tag)\n\n\nchannel.basic_consume(\n    queue='rpc_queue', \n    on_message_callback=callback_handler\uff0c\n)\nchannel.start_consuming()\n")))}m.isMDXComponent=!0}}]);