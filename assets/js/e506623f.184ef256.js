"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4922],{9041:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"\u57fa\u4e8e gRPC \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861","metadata":{"permalink":"/docusaurus/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861/index.md","source":"@site/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861/index.md","title":"\u57fa\u4e8e gRPC \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 k8s \u73af\u5883\u4e0b gRPC \u670d\u52a1\u5728\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u65f6\u9047\u5230\u7684\u95ee\u9898\u548c\u89e3\u51b3\u601d\u8def\u3002","date":"2021-12-13T00:00:00.000Z","formattedDate":"December 13, 2021","tags":[{"label":"k8s","permalink":"/docusaurus/blog/tags/k-8-s"},{"label":"gRPC","permalink":"/docusaurus/blog/tags/g-rpc"},{"label":"\u8d1f\u8f7d\u5747\u8861","permalink":"/docusaurus/blog/tags/\u8d1f\u8f7d\u5747\u8861"}],"readingTime":6.36,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"nextItem":{"title":"Github \u642d\u5efa Docusaurus \u7ad9\u70b9","permalink":"/docusaurus/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9"}},"content":"\x3c!-- \u53c2\u8003\u81ea https://www.lixueduan.com/post/grpc/13-loadbalance-on-k8s/ --\x3e\\n\\n\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 k8s \u73af\u5883\u4e0b gRPC \u670d\u52a1\u5728\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u65f6\u9047\u5230\u7684\u95ee\u9898\u548c\u89e3\u51b3\u601d\u8def\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u6982\u8ff0\\n\u6211\u4eec\u7684 gRPC \u5e94\u7528\u6700\u521d\u4f7f\u7528 `DaemonSet` \u7c7b\u578b\u7684\u8d44\u6e90\u5bf9\u8c61\u90e8\u7f72\u5728 k8s \u4e0a\u3002\u901a\u8fc7\u6c61\u70b9\u548c\u5bb9\u5fcd\u914d\u7f6e\uff0c\u4f7f\u5f97\u5355\u53f0 Node \u8282\u70b9\u4e0d\u5728\u90e8\u7f72\u5176\u4ed6 Pod \u5e94\u7528\u3002\\n\u800c\u8be5 gRPC \u5e94\u7528\uff0c\u5219\u901a\u8fc7 `NodePort Service` \u7684\u65b9\u5f0f\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u3002\\n\\n\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u76f4\u63a5\u5bf9\u5916\u66b4\u9732\u56fa\u5b9a IP \u63d0\u4f9b\u670d\u52a1\uff0c\u4e1a\u52a1\u6d41\u91cf\u5168\u90e8\u6253\u5230\u5355\u53f0\u5bbf\u4e3b\u673a\u4e0a\uff0c\u6240\u4ee5\u4e5f\u4e0d\u5b58\u5728\u8d1f\u8f7d\u5747\u8861\u7684\u8bf4\u6cd5\u3002\\n\\n\u968f\u7740\u4e1a\u52a1\u538b\u529b\u9010\u6e10\u589e\u5927\uff0c\u5355\u70b9\u63d0\u4f9b\u7684\u80fd\u529b\u5df2\u9010\u6e10\u8fbe\u5230\u6781\u9650\uff0c\u6211\u4eec\u91c7\u7528\u6c34\u5e73\u62d3\u5c55\u7684\u65b9\u5f0f\uff0c\u90e8\u7f72\u4e86\u591a\u53f0\u5355\u8282\u70b9\u670d\u52a1\u3002\u4e5f\u7b97\u6682\u65f6\u6297\u4f4f\u4e86\u538b\u529b\u3002\u4f46\u968f\u540e\u7684\u66b4\u9732\u7684\u95ee\u9898\uff0c\u4e5f\u8ba9\u6211\u4eec\u88ab\u8feb\u9009\u62e9\u4e86\u91cd\u6784\u3002\\n\\n:::note \u4e3a\u4ec0\u4e48\u9009\u62e9\u91cd\u6784\\n\u4e1a\u52a1\u6301\u7eed\u62d3\u5c55\uff0c\u5f15\u5165\u591a\u8282\u70b9\u7684\u95ee\u9898\u4e5f\u9010\u6e10\u66b4\u9732\u51fa\u6765\uff0c\u5f53\u524d\u670d\u52a1\u67b6\u6784\u4e0b\uff0c\u591a\u8282\u70b9\u4e4b\u95f4\u7684\u6570\u636e\u4e00\u81f4\u6027\u5b8c\u5168\u4e0d\u80fd\u4fdd\u8bc1\uff0c\u4eba\u5de5\u8fd0\u7ef4\u7b80\u76f4\u4e0d\u8981\u592a\u6076\u5fc3\uff0c\u65e0\u5948\u53ea\u80fd\u91cd\u6784\u3002\u8fd9\u91cc\u6211\u4eec\u4e0d\u9488\u5bf9\u6b64\u5c55\u5f00\u3002  \\n:::\\n\\n\u670d\u52a1\u6539\u9020\u5347\u7ea7\u5b8c\u6bd5\u540e\uff0c\u5b8c\u5168\u517c\u5bb9\u5386\u53f2 gRPC \u63a5\u53e3\uff0c\u5728 k8s \u7684\u914d\u7f6e\u4e0a\u4e5f\u6709\u90e8\u5206\u6539\u52a8\uff0c\u4ee5\u524d\u7684 `DaemontSet` \u8d44\u6e90\u53d8\u66f4\u4e3a `Deployment` \u8d44\u6e90\uff0c\u800c `NodePort Service` \u8d44\u6e90\u5219\u53d8\u66f4\u4e3a `ClusterIP Service` \u8d44\u6e90\u3002\\n\u9879\u76ee\u6b63\u5f0f\u8fdb\u5165\u5230\u4e86\u63d0\u6d4b\u9636\u6bb5\u3002\\n\\n\u529f\u80fd\u4e0a\u57fa\u672c\u6ca1\u6709\u592a\u5927\u7684\u95ee\u9898\uff0c\u6bd5\u7adf\u5f15\u7528\u4e86\u76f8\u540c\u7684 gRPC \u63a5\u53e3\u6587\u4ef6\u3002\\n\\n\u95ee\u9898\u4e3b\u8981\u51fa\u73b0\u5728\u4e86\u8d1f\u8f7d\u5747\u8861\u4e0a\uff0c\u5728\u591a\u526f\u672c\u7684\u573a\u666f\u4e0b\uff0c\u53d1\u751f\u4e86\u4e25\u91cd\u7684\u6d41\u91cf\u503e\u659c\uff0c\u5177\u4f53\u8868\u73b0\u5c31\u662f\u67d0\u4e2a\u526f\u672c\u7684\u538b\u529b\u975e\u5e38\u9ad8\uff0c\u800c\u5176\u4ed6\u526f\u672c\u7684\u538b\u529b\u5f88\u5c0f\uff0c\u8fdb\u800c\u5bfc\u81f4\u670d\u52a1\u6574\u4f53\u5f02\u5e38\u3002\\n\\n:::tip \u7b80\u5355\u5206\u6790\\ngRPC \u662f\u57fa\u4e8e HTTP2.0 \u5b9e\u73b0\u7684\u957f\u8fde\u63a5\uff0c\u4e14\u9ed8\u8ba4\u6ca1\u6709\u8d85\u65f6\uff0c\u8fd9\u79cd\u957f\u8fde\u63a5\u80fd\u591f\u5927\u91cf\u51cf\u5c11 TCP \u8fde\u63a5\u7ba1\u7406\u6240\u5e26\u6765\u7684\u5f00\u9500\uff0c\u4f46\u4e5f\u7834\u574f\u4e86\u6807\u51c6\u7684\u8fde\u63a5\u7ea7\u7684\u8d1f\u8f7d\u5747\u8861\u3002\u56e0\u4e3a\u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb\u4e14\u4e0d\u65ad\u5f00\uff0c\u4e5f\u65e0\u6cd5\u518d\u8fdb\u4e00\u6b65\u8d1f\u8f7d\u5747\u8861\u4e86\u3002  \\n\\n\u90a3\u4e48\u518d\u56de\u5230\u4e0a\u8ff0\u573a\u666f\uff0c\u663e\u7136\u5c31\u662f\u5ba2\u6237\u7aef\u4e0e\u67d0\u4e2a\u5177\u4f53\u7684\u670d\u52a1\u5efa\u7acb\u4e86\u957f\u8fde\u63a5\uff0c\u800c\u8fde\u63a5\u53c8\u4e0d\u4f1a\u65ad\u5f00\uff0c\u4ece\u800c\u5bfc\u81f4\u4e86\u6301\u7eed\u7684\u6d41\u91cf\u503e\u659c\u95ee\u9898\u3002\\n:::\\n\\n\u9009\u62e9\u6709\u6548\u7684 gRPC \u8d1f\u8f7d\u5747\u8861\u65b9\u6848\uff0c\u662f\u89e3\u51b3\u6211\u4eec\u5f53\u524d\u95ee\u9898\u7684\u6838\u5fc3\u3002\\n\\n\u5177\u4f53\u89e3\u51b3\u7684\u65b9\u6cd5\u6709\u591a\u79cd\uff0c\u6211\u4eec\u4e3b\u8981\u5c06\u5176\u5206\u4e3a\uff1a  \\n* \u7528\u6237\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861\\n* \u670d\u52a1\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861\\n\\n## gRPC \u8d1f\u8f7d\u5747\u8861 - \u7528\u6237\u4fa7\\n\u7528\u6237\u4fa7\u7684 gRPC \u8d1f\u8f7d\u5747\u8861\uff0c\u662f\u901a\u8fc7 DNS\uff0c\u4f7f\u7528\u6237\u89e3\u6790\u51fa\u5168\u90e8\u7684 gRPC \u670d\u52a1\u5730\u5740\uff0c\u7136\u540e\u7528\u6237\u81ea\u5df1\u5b9e\u73b0\u8d1f\u8f7d\u7b56\u7565\u3002\\n\u6700\u7b80\u5355\u7684\u7b56\u7565\u5c31\u662f\u4e0e\u6bcf\u4e2a\u670d\u52a1\u5efa\u7acb gRPC \u8fde\u63a5\uff0c\u7136\u540e\u8f6e\u8be2\u8bbf\u95ee\uff0c\u5b9e\u73b0 rr \u8d1f\u8f7d\u3002\\n\\n![](client-load-balancer.png)\\n\\n\u8be5\u65b9\u6848\u5b9e\u65bd\u8d77\u6765\u6bd4\u8f83\u5bb9\u6613\uff0c\u4f46\u5bf9\u4e8e\u7528\u6237\u4fa7\u6709\u4e00\u5b9a\u7684\u8981\u6c42\u3002\u5982\uff1a\\n\\n* \u5b89\u5168\u65b9\u9762\uff0c\u8981\u8003\u8651\u7528\u6237\u7684\u53ef\u9760\u6027\u3002\\n* \u66f4\u65b0\u7b56\u7565\uff0c\u89e3\u6790 DNS \u867d\u6709\u73b0\u6210\u7684\u65b9\u6848\uff0c\u4f46\u662f\u5e38\u89c4\u65b9\u6848\u4e00\u822c\u65e0\u6cd5\u63a2\u77e5\u5230\u540e\u7eed\u65b0\u521b\u5efa\u7684\u670d\u52a1\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u8ba1\u66f4\u65b0\u7b56\u7565\u3002\\n\\n## gRPC \u8d1f\u8f7d\u5747\u8861 - \u670d\u52a1\u4fa7\\n\u670d\u52a1\u4fa7\u7684 gRPC \u8d1f\u8f7d\u5747\u8861\uff0c\u9700\u8981\u5f15\u5165\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u4ee3\u7406\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a `Load Balancer`\uff0c\\n\u7528\u6237\u5411 LB \u53d1\u8d77 RPC \u8bf7\u6c42\uff0c\u7136\u540e\u7531\u8be5 LB \u5c06 RPC \u5206\u914d\u5230\u4e00\u4e2a\u53ef\u7528\u7684\u540e\u7aef\u670d\u52a1\u5668\u4e0a\uff0c\\n\u7531\u8be5\u670d\u52a1\u5668\u63d0\u4f9b gRPC \u670d\u52a1\uff0c\u5e76\u5c06\u8d1f\u8f7d\u60c5\u51b5\u62a5\u544a\u7ed9 LB\uff0c\u8fdb\u4e00\u6b65\u8865\u5168 LB \u7684\u8d1f\u8f7d\u4fe1\u606f\u3002\\n![](server-load-balancer.png)\\n\\n\u5728\u8be5\u65b9\u6848\u4e2d\uff0c\u8d1f\u8f7d\u5747\u8861\u7531 LB \u7edf\u4e00\u7ba1\u7406\uff0c\u6709\u4e00\u5b9a\u7684\u5b9e\u65bd\u96be\u5ea6\u3002  \\n\u9664\u975e\u80fd\u627e\u5230\u9ad8 star \u7684\u5f00\u6e90\u9879\u76ee\uff0c\u4e0d\u7136\u5f00\u53d1\u4e0e\u8fd0\u7ef4\u5c31\u662f\u4e00\u7b14\u4e0d\u5c0f\u7684\u6295\u5165\u3002\\n\\n## \u65b9\u6848\u9009\u62e9\\n\u8003\u8651\u5230\u5b9e\u65bd\u96be\u5ea6\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u7528\u6237\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861\u65b9\u5f0f\u3002\\n\\n\u9996\u5148\u8981\u89e3\u51b3 DNS \u7684\u89e3\u6790\u4e0e\u8d1f\u8f7d\uff0c\u8fd9\u4e00\u5757\uff0c\u5b98\u65b9\u5df2\u7ecf\u5c01\u88c5\u4e86 gRPC SDK\uff0c\u6545\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5347\u7ea7 SDK \u5b9e\u73b0\u8be5\u529f\u80fd\u3002\u95ee\u9898\u5c31\u5728\u5982\u4f55\u68c0\u6d4b\u66f4\u65b0\u8fd9\u4e00\u5757\u4e86\u3002\\n\\n\u89e3\u51b3\u7684\u65b9\u6848\u4e5f\u6709\u4e24\u79cd\uff1a  \\n1\u3001\u670d\u52a1\u7aef\u5b9e\u73b0\uff1aMaxConnectionAge  \\n2\u3001\u5ba2\u6237\u7aef\u5b9e\u73b0\uff1aKubeResolver   \\n\\n\\n:::info MaxConnectionAge\\nMaxConnectionAge \u662f gRPC \u670d\u52a1\u7aef\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u957f\u8fde\u63a5\u6700\u5927\u4fdd\u6301\u65f6\u95f4\u3002  \\n\u914d\u7f6e\u8be5\u53c2\u6570\u4f1a\u4f7f\u5f97\u957f\u8fde\u63a5\u53d8\u6210\u201c\u77ed\u201d\u8fde\u63a5\uff0c\u6545\u6027\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u964d\u4f4e\u3002\\n\\n\u8be5\u65b9\u6848\u7684\u539f\u7406\u662f\uff0c\u901a\u8fc7\u5b9a\u671f\u91ca\u653e\u8fde\u63a5\uff0c\u4f7f\u5f97\u5ba2\u6237\u7aef\u91cd\u65b0\u89e3\u6790 DNS \u83b7\u53d6\u6700\u65b0\u7684\u670d\u52a1\u5730\u5740\u3002\\n:::\\n\\n\\n:::info KubeResolver\\n\u8be5\u65b9\u6848\u7684\u539f\u7406\u662f\u901a\u8fc7\u76d1\u542c k8s \u7684 api \u8d44\u6e90\u72b6\u6001\uff0c\u5b9e\u65f6\u83b7\u53d6 gRPC \u670d\u52a1\u8d44\u6e90\u4fe1\u606f\uff0c\u4ece\u800c\u5b9e\u73b0\u68c0\u6d4b\u66f4\u65b0\u3002\\n:::\\n\\n\u7efc\u5408\u8003\u8651\u540e\uff0c\u6700\u7ec8\u9009\u62e9\u4e86 MaxConnectionAge \u65b9\u6848\uff0c\u56e0\u4e3a\u6b64\u65b9\u6848\u4ec5\u4ec5\u901a\u8fc7\u9002\u914d\u53c2\u6570\u5c31\u53ef\u4ee5\u5b8c\u6210\u9884\u671f\u529f\u80fd\uff0c\u867d\u7136\u7565\u663e\u50f5\u786c\uff0c\u4f46\u5b9e\u9645\u4e0a\u6548\u679c\u8fd8\u4e0d\u9519\u3002\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Github \u642d\u5efa Docusaurus \u7ad9\u70b9","metadata":{"permalink":"/docusaurus/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9/index.md","source":"@site/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9/index.md","title":"Github \u642d\u5efa Docusaurus \u7ad9\u70b9","description":"1\u3001\u65b0\u5efa Github \u4ed3\u5e93","date":"2021-12-03T00:00:00.000Z","formattedDate":"December 3, 2021","tags":[{"label":"\u90e8\u7f72","permalink":"/docusaurus/blog/tags/\u90e8\u7f72"},{"label":"docusaurus","permalink":"/docusaurus/blog/tags/docusaurus"}],"readingTime":3.585,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"\u57fa\u4e8e gRPC \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861","permalink":"/docusaurus/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861"},"nextItem":{"title":"Scrapy \u6e90\u7801\u5b66\u4e60","permalink":"/docusaurus/blog/2020/2/25/scrapy \u6e90\u7801\u5b66\u4e60"}},"content":"\x3c!--truncate--\x3e\\n\\n## 1\u3001\u65b0\u5efa Github \u4ed3\u5e93\\n\u9996\u5148\uff0c\u767b\u5f55[Github\u4ed3\u5e93\u521b\u5efa\u9875\u9762](https://github.com/new)\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684\u7a7a\u767d\u4ed3\u5e93\uff0c\u9879\u76ee\u540d\u547d\u540d\u4e3a `testDocusaurus`\u3002\\n\\n\u7136\u540e\u901a\u8fc7 `git` \u5c06\u4ed3\u5e93\u62c9\u53d6\u5230\u672c\u5730\uff0c\u81f3\u6b64\uff0c\u6211\u4eec\u62e5\u6709\u4e86\u4e00\u4e2a\u5168\u65b0\u7684\u7a7a\u767d\u4ed3\u5e93 `testDocusaurus`\u3002  \\n\\n![](gitindex.png)\\n\\n## 2\u3001\u521d\u59cb\u5316 Docusaurus \u9879\u76ee\\n> [Docusaurus\u9879\u76ee\u521d\u59cb\u5316\u7ec6\u8282\u8bf7\u53c2\u8003\u5b98\u65b9\u6587\u6863](https://docusaurus.io/zh-CN/docs/installation)\\n\\n\u8fdb\u5165\u5230\u4ed3\u5e93 `testDocusaurus` \u6240\u5728\u7684\u7a7a\u767d\u76ee\u5f55\uff0c\u5e76\u5728\u6b64\u76ee\u5f55\u6253\u5f00\u7ec8\u7aef\u754c\u9762\u3002\\n\\n\u4e3a\u4e86\u66f4\u597d\u7684\u5b8c\u6210\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u9884\u5148\u5b89\u88c5**nodejs**\u3002\u5728\u6b64\uff0c\u5047\u8bbe\u4f60\u5df2\u7ecf\u51c6\u5907\u5b8c\u6bd5\u3002  \\n\u90a3\u6211\u4eec\u63a5\u4e0b\u6765\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u521d\u59cb\u5316\u4e00\u4e2a `Docusaurus` \u9879\u76ee\u3002\\n```shell script\\n>>> npx create-docusaurus@latest website classic\\n...\\n...\\nSuccessfully created \\"website\\".\\nInside that directory, you can run several commands:\\n\\n  npm start\\n    Starts the development server.\\n\\n  npm run build\\n    Bundles your website into static files for production.\\n\\n  npm run serve\\n    Serves the built website locally.\\n\\n  npm deploy\\n    Publishes the website to GitHub pages.\\n\\nWe recommend that you begin by typing:\\n\\n  cd website\\n  npm start\\n\\nHappy building awesome websites!\\n```\\n\\n\u8be5\u6307\u4ee4\u8fd0\u884c\u5b8c\u540e\uff0c\u4f1a\u8f93\u51fa\u4e00\u4e9b\u7b80\u5355\u7684\u8fd0\u884c\u6307\u4ee4\uff0c\u800c\u4e14\u6211\u4eec\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a `website` \u7684\u76ee\u5f55\uff0c\u6211\u4eec\u5148\u5c06\u91cc\u9762\u7684\u5185\u5bb9\u526a\u8d34\u51fa\u6765\uff0c\u653e\u5230\u6211\u4eec\u7a7a\u767d\u4ed3\u5e93\u76ee\u5f55\u4e0b\u9762\u3002\\n\\n\u6b64\u65f6\uff0c\u6211\u4eec\u6309\u7167\u63d0\u793a\uff0c\u8fd0\u884c `npm start` \u6307\u4ee4\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8fd0\u884c\u6b64\u9879\u76ee\u3002\\n\\n\u901a\u5e38\u542f\u52a8\u7aef\u53e3\u4e3a3000\uff0c\u5219\u9ed8\u8ba4\u8def\u5f84\u4e3a\uff1ahttp://localhost:3000/  \\n\\n![](websiteindex.png)\\n\\n## 3\u3001\u642d\u5efa Github Actions\\n> Github Actions\u90e8\u7f72\u7ec6\u8282\u53c2\u8003[\u5b98\u65b9\u6587\u6863](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages)\\n\\n\u63a5\u5165 `Github Actions` \u9700\u8981\u521b\u5efa\u4e00\u5bf9\u65b0\u7684 **SSH Key**\uff0c\u5e76\u5c06\u516c\u94a5\u548c\u5bc6\u94a5\u5747\u914d\u7f6e\u5230 Github\uff0c\u6211\u4eec\u6765\u5177\u4f53\u770b\u4e0b\u64cd\u4f5c\u3002\\n\\n\u9996\u5148\u521b\u5efa\u5bc6\u94a5\uff0c\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u65b0\u7684\u76ee\u5f55\uff0c\u7136\u540e\u5f97\u5230\u516c\u94a5\uff08id_rsa.pub\uff09\u548c\u79c1\u94a5\uff08id_rsa\uff09\\n```shell script\\n>>> ssh-keygen -t rsa -C \\"email\\"\\n...\\n...\\nThe key\'s randomart image is:\\n+---[RSA 3072]----+\\n| .=oo*=o=o.      |\\n| o+.=o==.o       |\\n|  .O.O=+o        |\\n|  ..=o@.oo       |\\n| . o +.+S+..     |\\n|  . + . E.o      |\\n|   o . .         |\\n|  .              |\\n|                 |\\n+----[SHA256]-----+\\n```\\n\\n\u6211\u4eec\u6253\u5f00\u4ed3\u5e93\u7684 `deploy keys`\uff0c\u9009\u62e9\u65b0\u589e\uff0c\u5c06 `id_rsa.pub` \u4e2d\u7684\u5185\u5bb9\u590d\u5236\u8fdb\u53bb\uff0c\u5e76\u9009\u4e2d `Allow write access` \u6846\uff0c\u8868\u793a\u8d4b\u4e88\u90e8\u7f72\u5199\u6743\u9650\u3002\\n![](deploykey.png)\\n\\n\u6b64\u65f6\u90e8\u7f72\u516c\u94a5\u5df2\u7ecf\u5b8c\u6210\uff0c\u6211\u4eec\u518d\u5c06\u79c1\u94a5\u4e5f\u914d\u7f6e\u4e0a\u3002\u6253\u5f00\u540c\u7ea7\u914d\u7f6e\u4e0b\u7684 Secret\uff0c\u9009\u62e9\u65b0\u589e\u5bc6\u94a5\uff0c\\n\u6211\u4eec\u5c06\u79c1\u94a5\u5185\u5bb9\u590d\u5236\u5230 `Value` \u4e2d\uff0c\u800c `Name` \u586b\u5199 `GH_PAGES_DEPLOY` \u5373\u53ef\u3002\\n\\n\u6700\u540e\uff0c\u6211\u4eec\u521b\u5efa `Github Actions`\uff0c\u5c06\u6a21\u677f\u590d\u5236\u8fdb\u53bb\uff0c\u5219\u6574\u4e2a\u6d41\u6c34\u7ebf\u5c31\u5df2\u7ecf\u914d\u7f6e\u597d\u4e86\u3002\u590d\u5236\u65f6\uff0c\u5c06\u5bf9\u5e94\u7684\u57fa\u7840\u914d\u7f6e\u6539\u4e0b\u5373\u53ef\uff0c\u5982\u4e0b\uff1a\\n```shell script\\ngit config --global user.email \\"email\\"\\ngit config --global user.name \\"name\\"\\n```\\n\u8fd9\u91cc\u7684 `email` \u9700\u8981\u662f github \u914d\u7f6e\u7684 email\uff0c\u800c `name` \u5219\u662f github \u7528\u6237\u540d\u3002\\n\\n## 4\u3001\u66f4\u65b0\u4ed3\u5e93\uff0c\u5c1d\u8bd5\u81ea\u52a8\u90e8\u7f72\\n\\n\u786e\u4fdd Github Pages \u5df2\u7ecf\u521d\u59cb\u5316\u597d\uff0c\u90a3\u4e48\u6211\u4eec\u5f80\u4ed3\u5e93\u63a8\u9001\u4fee\u6539\u65f6\uff0c\u5c31\u53ef\u4ee5\u89e6\u53d1\u81ea\u52a8\u90e8\u7f72\u4e86\u3002\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Scrapy \u6e90\u7801\u5b66\u4e60","metadata":{"permalink":"/docusaurus/blog/2020/2/25/scrapy \u6e90\u7801\u5b66\u4e60","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2020/2/25/scrapy \u6e90\u7801\u5b66\u4e60/index.md","source":"@site/blog/2020/2/25/scrapy \u6e90\u7801\u5b66\u4e60/index.md","title":"Scrapy \u6e90\u7801\u5b66\u4e60","description":"Scrapy \u6e90\u7801\u5b66\u4e60","date":"2020-02-25T00:00:00.000Z","formattedDate":"February 25, 2020","tags":[{"label":"scrapy","permalink":"/docusaurus/blog/tags/scrapy"}],"readingTime":0.15,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"Github \u642d\u5efa Docusaurus \u7ad9\u70b9","permalink":"/docusaurus/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9"},"nextItem":{"title":"Scrapy \u6e90\u7801\u5b66\u4e60","permalink":"/docusaurus/blog/2020/2/24/scrapy \u6e90\u7801\u5b66\u4e60"}},"content":"Scrapy \u6e90\u7801\u5b66\u4e60\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Scrapy \u6e90\u7801\u5b66\u4e60","metadata":{"permalink":"/docusaurus/blog/2020/2/24/scrapy \u6e90\u7801\u5b66\u4e60","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2020/2/24/scrapy \u6e90\u7801\u5b66\u4e60/index.md","source":"@site/blog/2020/2/24/scrapy \u6e90\u7801\u5b66\u4e60/index.md","title":"Scrapy \u6e90\u7801\u5b66\u4e60","description":"Scrapy \u6e90\u7801\u5b66\u4e60","date":"2020-02-24T00:00:00.000Z","formattedDate":"February 24, 2020","tags":[{"label":"scrapy","permalink":"/docusaurus/blog/tags/scrapy"}],"readingTime":0.15,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"Scrapy \u6e90\u7801\u5b66\u4e60","permalink":"/docusaurus/blog/2020/2/25/scrapy \u6e90\u7801\u5b66\u4e60"},"nextItem":{"title":"\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1","permalink":"/docusaurus/blog/2020/2/24/\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1"}},"content":"Scrapy \u6e90\u7801\u5b66\u4e60\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1","metadata":{"permalink":"/docusaurus/blog/2020/2/24/\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2020/2/24/\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1/index.md","source":"@site/blog/2020/2/24/\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1/index.md","title":"\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1","description":"\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1","date":"2020-02-24T00:00:00.000Z","formattedDate":"February 24, 2020","tags":[{"label":"\u6846\u67b6\u8bbe\u8ba1","permalink":"/docusaurus/blog/tags/\u6846\u67b6\u8bbe\u8ba1"}],"readingTime":0.17,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"Scrapy \u6e90\u7801\u5b66\u4e60","permalink":"/docusaurus/blog/2020/2/24/scrapy \u6e90\u7801\u5b66\u4e60"},"nextItem":{"title":"\u4e8c\u53c9\u6811\u904d\u5386","permalink":"/docusaurus/blog/2020/2/22/\u4e8c\u53c9\u6811\u904d\u5386"}},"content":"\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"\u4e8c\u53c9\u6811\u904d\u5386","metadata":{"permalink":"/docusaurus/blog/2020/2/22/\u4e8c\u53c9\u6811\u904d\u5386","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2020/2/22/\u4e8c\u53c9\u6811\u904d\u5386/index.md","source":"@site/blog/2020/2/22/\u4e8c\u53c9\u6811\u904d\u5386/index.md","title":"\u4e8c\u53c9\u6811\u904d\u5386","description":"\u4e8c\u53c9\u6811\u904d\u5386","date":"2020-02-22T00:00:00.000Z","formattedDate":"February 22, 2020","tags":[{"label":"\u7b97\u6cd5","permalink":"/docusaurus/blog/tags/\u7b97\u6cd5"}],"readingTime":0.15,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1","permalink":"/docusaurus/blog/2020/2/24/\u5206\u5e03\u5f0f\u722c\u866b\u8c03\u5ea6\u8bbe\u8ba1"},"nextItem":{"title":"\u6570\u636e\u5e93\u4e8b\u52a1","permalink":"/docusaurus/blog/2020/2/22/\u6570\u636e\u5e93\u4e8b\u52a1"}},"content":"\u4e8c\u53c9\u6811\u904d\u5386\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"\u6570\u636e\u5e93\u4e8b\u52a1","metadata":{"permalink":"/docusaurus/blog/2020/2/22/\u6570\u636e\u5e93\u4e8b\u52a1","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2020/2/22/\u6570\u636e\u5e93\u4e8b\u52a1/index.md","source":"@site/blog/2020/2/22/\u6570\u636e\u5e93\u4e8b\u52a1/index.md","title":"\u6570\u636e\u5e93\u4e8b\u52a1","description":"\u6570\u636e\u5e93\u4e8b\u52a1","date":"2020-02-22T00:00:00.000Z","formattedDate":"February 22, 2020","tags":[{"label":"\u6570\u636e\u5e93","permalink":"/docusaurus/blog/tags/\u6570\u636e\u5e93"}],"readingTime":0.15,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"\u4e8c\u53c9\u6811\u904d\u5386","permalink":"/docusaurus/blog/2020/2/22/\u4e8c\u53c9\u6811\u904d\u5386"},"nextItem":{"title":"Python \u5185\u5b58\u7ba1\u7406","permalink":"/docusaurus/blog/2020/2/21/python \u5185\u5b58\u7ba1\u7406"}},"content":"\u6570\u636e\u5e93\u4e8b\u52a1\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Python \u5185\u5b58\u7ba1\u7406","metadata":{"permalink":"/docusaurus/blog/2020/2/21/python \u5185\u5b58\u7ba1\u7406","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2020/2/21/python \u5185\u5b58\u7ba1\u7406/index.md","source":"@site/blog/2020/2/21/python \u5185\u5b58\u7ba1\u7406/index.md","title":"Python \u5185\u5b58\u7ba1\u7406","description":"Python \u5185\u5b58\u7ba1\u7406","date":"2020-02-21T00:00:00.000Z","formattedDate":"February 21, 2020","tags":[{"label":"python","permalink":"/docusaurus/blog/tags/python"}],"readingTime":0.15,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"\u6570\u636e\u5e93\u4e8b\u52a1","permalink":"/docusaurus/blog/2020/2/22/\u6570\u636e\u5e93\u4e8b\u52a1"},"nextItem":{"title":"Linux Namespace","permalink":"/docusaurus/blog/2019/8/5/Linux Namespace"}},"content":"Python \u5185\u5b58\u7ba1\u7406\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Linux Namespace","metadata":{"permalink":"/docusaurus/blog/2019/8/5/Linux Namespace","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2019/8/5/Linux Namespace/index.md","source":"@site/blog/2019/8/5/Linux Namespace/index.md","title":"Linux Namespace","description":"namespace","date":"2019-08-05T00:00:00.000Z","formattedDate":"August 5, 2019","tags":[{"label":"linux","permalink":"/docusaurus/blog/tags/linux"}],"readingTime":0.13,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"Python \u5185\u5b58\u7ba1\u7406","permalink":"/docusaurus/blog/2020/2/21/python \u5185\u5b58\u7ba1\u7406"},"nextItem":{"title":"Scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60","permalink":"/docusaurus/blog/2019/5/13/scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60"}},"content":"namespace\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60","metadata":{"permalink":"/docusaurus/blog/2019/5/13/scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2019/5/13/scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60/index.md","source":"@site/blog/2019/5/13/scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60/index.md","title":"Scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60","description":"scrapy \u6846\u67b6\u7684\u4f7f\u7528","date":"2019-05-13T00:00:00.000Z","formattedDate":"May 13, 2019","tags":[{"label":"python","permalink":"/docusaurus/blog/tags/python"},{"label":"scrapy","permalink":"/docusaurus/blog/tags/scrapy"}],"readingTime":0.155,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"Linux Namespace","permalink":"/docusaurus/blog/2019/8/5/Linux Namespace"},"nextItem":{"title":"Selenium \u5b66\u4e60","permalink":"/docusaurus/blog/2019/4/26/selenium \u5b66\u4e60"}},"content":"scrapy \u6846\u67b6\u7684\u4f7f\u7528\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Selenium \u5b66\u4e60","metadata":{"permalink":"/docusaurus/blog/2019/4/26/selenium \u5b66\u4e60","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2019/4/26/selenium \u5b66\u4e60/index.md","source":"@site/blog/2019/4/26/selenium \u5b66\u4e60/index.md","title":"Selenium \u5b66\u4e60","description":"selenium \u4f7f\u7528","date":"2019-04-26T00:00:00.000Z","formattedDate":"April 26, 2019","tags":[{"label":"python","permalink":"/docusaurus/blog/tags/python"},{"label":"selenium","permalink":"/docusaurus/blog/tags/selenium"}],"readingTime":0.14,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"Scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60","permalink":"/docusaurus/blog/2019/5/13/scrapy \u722c\u866b\u6846\u67b6\u5b66\u4e60"},"nextItem":{"title":"Linux \u5e38\u7528\u6307\u4ee4","permalink":"/docusaurus/blog/2019/3/2/Linux\u5e38\u7528\u6307\u4ee4"}},"content":"selenium \u4f7f\u7528\\n\\n\x3c!--truncate--\x3e\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Linux \u5e38\u7528\u6307\u4ee4","metadata":{"permalink":"/docusaurus/blog/2019/3/2/Linux\u5e38\u7528\u6307\u4ee4","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2019/3/2/Linux\u5e38\u7528\u6307\u4ee4/index.md","source":"@site/blog/2019/3/2/Linux\u5e38\u7528\u6307\u4ee4/index.md","title":"Linux \u5e38\u7528\u6307\u4ee4","description":"\u4ece\u4f7f\u7528\u7ef4\u5ea6\u5212\u5206 Linux \u5e38\u7528\u6307\u4ee4\uff0c\u4fbf\u4e8e\u68b3\u7406\u548c\u603b\u7ed3\u3002","date":"2019-03-02T00:00:00.000Z","formattedDate":"March 2, 2019","tags":[{"label":"linux","permalink":"/docusaurus/blog/tags/linux"}],"readingTime":6.785,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"Selenium \u5b66\u4e60","permalink":"/docusaurus/blog/2019/4/26/selenium \u5b66\u4e60"}},"content":"\x3c!-- \u53c2\u8003\u81ea https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/index.html --\x3e\\n\\n\u4ece\u4f7f\u7528\u7ef4\u5ea6\u5212\u5206 Linux \u5e38\u7528\u6307\u4ee4\uff0c\u4fbf\u4e8e\u68b3\u7406\u548c\u603b\u7ed3\u3002\\n\\n* \u5e2e\u52a9\u6307\u4ee4\\n* \u7528\u6237\u7ba1\u7406\\n* \u6587\u4ef6\u7ba1\u7406\\n* \u78c1\u76d8\u7ba1\u7406\\n* \u8fdb\u7a0b\u7ba1\u7406\\n* \u7f51\u7edc\u7ba1\u7406\\n\\n\x3c!--truncate--\x3e\\n\\n## \u5e2e\u52a9\u6307\u4ee4\\n```shell script title=\\"\u83b7\u53d6\u5e2e\u52a9\\"\\n>>> man ls\\n```\\n\\n```shell script title=\\"\u83b7\u53d6\u5e2e\u52a9\\"\\n>>> ls --help\\n```\\n\\n## \u7528\u6237\u7ba1\u7406\\n```shell script title=\\"\u65b0\u589e\u7528\u6237\uff0cubuntu \u4e0b\u8be5\u6307\u4ee4\u65e0\u9700 passwd \u8bbe\u7f6e\u5bc6\u7801\\"\\n>>> adduser cza\\n```\\n\\n```shell script title=\\"\u5207\u6362\u7528\u6237\\"\\n>>> su root\\n```\\n\\n### sshkey-gen\\n\\n## \u6587\u4ef6\u7ba1\u7406\\n### rm & cp\\n* rm -r\uff1a\u9012\u5f52\u6267\u884c\u64cd\u4f5c\uff0c\u64cd\u4f5c\u5bf9\u8c61\u53ef\u4ee5\u662f\u76ee\u5f55\\n* rm -f\uff1a\uff08--force\uff09\u5f3a\u5236\u6267\u884c\u5220\u9664\u4e14\u5ffd\u7565\u6587\u4ef6\u4e0d\u5b58\u5728\u7b49\u9519\u8bef\\n* cp -r\uff1a\u9012\u5f52\u590d\u5236\\n\\n```shell script title=\\"\u521b\u5efa\u548c\u5220\u9664\u6587\u4ef6\\"\\nrm -rf              // \u9012\u5f52\u5220\u9664\\ncp -r               // \u9012\u5f52\u590d\u5236\\n```\\n\\n### wc\\n`wc` \u7528\u4e8e\u8ba1\u7b97\u7edf\u8ba1\uff0c\u9ed8\u8ba4\u7edf\u8ba1\u6587\u4ef6\u4e2d\u7684\u884c\u3001\u5b57\u3001\u5927\u5c0f\\n\\n* -l\uff1a\u8ba1\u7b97\u884c\u6570\\n* -w\uff1a\u8ba1\u7b97\u5b57\u6570\\n* -c\uff1a\u8ba1\u7b97bytes\\n\\n```shell script title=\\"\u67e5\u770b\u6587\u4ef6\\"\\n>>> wc test.txt              // \u8f93\u51fa\u6587\u4ef6\u884c\u6570\u3001\u5b57\u6570\u3001\u5927\u5c0f\\n1  4 17 test.txt\\n>>> ls | wc -l               // \u7edf\u8ba1\u6587\u4ef6\u6570\u91cf\\n>>> ls | cat -n              // \u663e\u793a\u6587\u4ef6\uff0c\u5e76\u7ed9\u6bcf\u4e00\u4e2a\u589e\u52a0\u4e00\u4e2a\u7f16\u53f7\\n```\\n\\n### find\\n`find` \u7528\u4e8e\u67e5\u627e\u6587\u4ef6\\n\\n* -type\uff1a\u6307\u5b9a\u67e5\u627e\u7c7b\u578b\\n    * f\uff1a\u6587\u4ef6\\n    * d\uff1a\u76ee\u5f55\\n* -name\uff1a\u6307\u5b9a\u67e5\u627e\u540d\u5b57\\n* -delete\uff1a\u627e\u5230\u6587\u4ef6\u540e\u6267\u884c\u5220\u9664\\n\\n```shell script title=\\"\u67e5\u627e\u6587\u4ef6\\"\\nfind ./path -type f -name \\"file_name\\"\\n```\\n\\n```shell script title=\\"\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e0b\u5168\u90e8\u6587\u4ef6\u5e76\u7edf\u8ba1\u6570\u91cf\\"\\nfind ./ -type f | wc -l\\n```\\n\\n```shell script title=\\"\u67e5\u627e\u5230 tmp \u7ed3\u5c3e\u7684\u6587\u4ef6\u5e76\u5220\u9664\\"\\nfind ./ -type f -name \\"*.tmp\\" -delete\\n```\\n\\n### chmod\\n`chmod` \u4fee\u6539\u6587\u4ef6\u8bfb\u3001\u5199\u3001\u6267\u884c\u6743\u9650\u3002\u4e00\u4e2a\u6587\u4ef6\u7684\u8c03\u7528\u6743\u9650\u53ef\u4ee5\u5206\u4e3a user\u3001group\u3001other \u4e09\u7ea7\u3002\\n\\n\u9488\u5bf9\u7528\u6237\u6267\u884c\\n\\n* u\uff1a\u6587\u4ef6\u6240\u6709\u8005\\n* g\uff1a\u6587\u4ef6\u6240\u6709\u8005\u7ec4\\n* o\uff1a\u5176\u4ed6\u6240\u6709\u7528\u6237\\n* a\uff1a\u6240\u6709\u7528\u6237\\n* -R\uff1a\u9012\u5f52\u6267\u884c\u5f53\u524d\u76ee\u5f55\u6240\u6709\u6587\u4ef6\\n\\n```shell script title=\\"\u4fee\u6539\u6587\u4ef6\u6743\u9650\\"\\n>>> chmod u+r test.txt\\n>>> chmod g-r test.txt\\n>>> chmod o=r test.txt\\n>>> chmod a+r test.txt\\n```\\n\\n```shell script title=\\"\u4fee\u6539\u6587\u4ef6\u6743\u9650\\"\\nchmod -R 777 test.txt    // 4\uff08\u8bfbr\uff092\uff08\u5199w\uff091\uff08\u6267\u884cx\uff09\uff0c\u6b64\u65f6\u6bcf\u4e2a\u6570\u636e\u5bf9\u5e94 u\u3001g\u3001o \u7684\u6743\u9650\\n```\\n\\n### ln\\n`ln` \u6587\u4ef6 \u8f6f/\u786c \u94fe\u63a5\\n\\n* -s\uff1a\u8f6f\u94fe\u63a5\uff0c\u4ec5\u751f\u6210\u4e00\u4e2a\u955c\u50cf\uff0c\u4e0d\u5360\u7528\u989d\u5916\u7684\u78c1\u76d8\u7a7a\u95f4\uff08\u4ec5\u4e00\u4e2a\u6307\u9488\u7a7a\u95f4\uff09\u3002\u5426\u5219\u751f\u6210\u4e00\u4e2a\u548c\u6e90\u4e00\u6837\u7684\u6587\u4ef6\uff0c\u4e8c\u8005\u5747\u5b9e\u65f6\u4fdd\u6301\u540c\u6b65\u3002\\n\\n```shell script\\nln -s old new       // \u7b26\u53f7\u8f6f\u94fe\u63a5\\nln old new          // \u7b26\u53f7\u8f6f\u94fe\u63a5\\n```\\n\\n### xargs\\n`xargs` \u662f\u4e00\u4e2a\u547d\u540d\u884c\u53c2\u6570\u751f\u6210\u5668\uff0c\u53ef\u4ee5\u5c06\u5176\u4ed6\u7ba1\u9053\u4f20\u9012\u8fc7\u6765\u7684\u6570\u636e\u4f5c\u4e3a\u53c2\u6570\u6267\u884c\u547d\u540d\u884c\uff0c\u5176\u9ed8\u8ba4\u6267\u884c\u6307\u4ee4\u662f echo\\n\\n```shell script title=\\"\u591a\u884c\u6587\u672c\u8f6c\u5355\u884c\\"\\ncat filename | xargs\\n```\\n\\n```shell script title=\\"\u7edf\u8ba1\u6e90\u7801\u6587\u4ef6\u884c\u6570\\"\\nfind . -type f -name \\"*.py\\" -print0 | xargs -0 wc -l\\n```\\n\\n```shell script title=\\"\u67e5\u627e\u5e76\u538b\u7f29\u76ee\u6807\u6587\u4ef6\\"\\nfind . -type f -name \\"*.jpg\\" | xargs tar -czvf images.tar.gz\\n```\\n\\n```shell script title=\\"\u4e0b\u8f7d\u6587\u4ef6\\"\\ncat url-list.txt | xargs wget -c\\n```\\n\\n### grep\\n`grep` \u7528\u4e8e\u67e5\u627e\u6587\u4ef6\u4e2d\u7b26\u5408\u6761\u4ef6\u7684\u5b57\u7b26\u4e32\\n\\n* -n\uff1a\u8ba1\u7b97\u5e76\u663e\u793a\u884c\u53f7\\n\\n### sort \u6392\u5e8f\\n* -n \u6309\u6570\u5b57\u8fdb\u884c\u6392\u5e8f \\n* -d \u6309\u5b57\u5178\u5e8f\u8fdb\u884c\u6392\u5e8f\\n* -r \u9006\u5e8f\u6392\u5e8f\\n* -k N \u6307\u5b9a\u6309\u7b2cN\u5217\u6392\u5e8f\\n```shell script\\nsort -nrk 1 data.txt\\nsort -bd data                // \u5ffd\u7565\u50cf\u7a7a\u683c\u4e4b\u7c7b\u7684\u524d\u5bfc\u7a7a\u767d\u5b57\u7b26\\n\\nsort unsort.txt | uniq       // \u6d88\u9664\u91cd\u590d\u884c\\nsort unsort.txt | uniq -c    // \u7edf\u8ba1\u5404\u884c\u51fa\u73b0\u6b21\u6570\\nsort unsort.txt | uniq -d    // \u627e\u51fa\u91cd\u590d\u884c\\n```\\n\\n### tr \u8f6c\u5316\\n`cat test.txt | tr a-z A-z`\\n\\n### cut \u5207\u5272\\n`cut` \u7528\u4e8e\u663e\u793a\u6bcf\u884c\u4ece\u5934\u5f00\u59cb\u7b97\u8d77\u7684\u5b57\u7b26\\n\\n* -b\uff1a\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u8fdb\u884c\u5207\u5272\\n* -c\uff1a\u4ee5\u5b57\u7b26\u4e3a\u5355\u4f4d\u8fdb\u884c\u5207\u5272\\n* -d\uff1a\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a\u5236\u8868\u7b26\\n\\n## \u78c1\u76d8\u7ba1\u7406\\n\\n### df\\n`df` \u7528\u4e8e\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u78c1\u76d8\u4f7f\u7528\u7387  \\n\\n* -h\uff1a\u4f18\u5316\u663e\u793a\\n\\n### du\\n`du` \u7528\u4e8e\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u5360\u7528\u78c1\u76d8\u7387\\n\\n* -h\uff1a\u4f18\u5316\u663e\u793a\\n\\n### tar\\n`tar` \u7528\u4e8e\u538b\u7f29\u548c\u89e3\u538b\\n\\n* -z\uff1a\uff08--gzip\uff09\u4f7f\u7528 zgip \u6765\u538b\u7f29\u6216\u8005\u89e3\u538b\\n* -x\uff1a\uff08--extract\uff09\u89e3\u538b\\n* -c\uff1a\uff08--create\uff09\u6253\u5305\\n* -v\uff1a\uff08--verbose\uff09\u663e\u793a\u6267\u884c\u8fc7\u7a0b\uff0c\u5177\u4f53\u64cd\u4f5c\u7684\u6587\u4ef6\\n* -f\uff1a\uff08--file\uff09\u6307\u5b9a\u5907\u4efd\u6587\u4ef6\u540d\\n\\n```shell script title=\\"\u538b\u7f29\u6587\u4ef6\\"\\ntar -cvf \u538b\u7f29\u6587\u4ef6.zip \u5355\u4e2a\u6587\u4ef6\u6216\u8005\u76ee\u5f55\\ntar -zcvf gzip\u538b\u7f29\u6587\u4ef6.tar.gz \u5355\u4e2a\u6587\u4ef6\u6216\u8005\u76ee\u5f55\\n```\\n\\n### zip\\n\\n:::note linux \u5b89\u88c5 zip\\ncentos\uff1a\\n:::\\n\\n### rar\\n\\n:::note linux \u5b89\u88c5 rar\\ncentos\uff1a\\n:::\\n\\n## \u8fdb\u7a0b\u7ba1\u7406\\n\\n### ps\\n`ps` \u7528\u4e8e\u67e5\u770b linux \u4e0b\u7684\u8fdb\u7a0b\u72b6\u6001\uff0c\u5373 Process Status\\n\\n```shell script title=\\"\u663e\u793a\u6240\u6709\u547d\u540d\u53ca\u5176CMD\\"\\nps -ef\\nps -aux\\n```\\n\\n### top\\n`top` \u7528\u4e8e\u5b9e\u65f6\u8f93\u51fa\u8fdb\u7a0b\u7684\u72b6\u6001\u4fe1\u606f\\n\\n* -p\uff1a\u4ec5\u5c55\u793a\u76ee\u6807\u8fdb\u7a0b\u4fe1\u606f\\n\\n### kill\\n`kill` \u7528\u4e8e\u6740\u6389\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u5982\uff1a`kill -9 pid`\\n\\n* -l\uff1a\u663e\u793a\u4fe1\u53f7\\n* -9\uff1a\uff08SIGKILL\uff09\u6740\u6389\u8fdb\u7a0b\\n* -15\uff1a\uff08SIGTERM\uff09\u6b63\u5e38\u505c\u6b62\u4e00\u4e2a\u8fdb\u7a0b\\n\\n```text\\n 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP\\n 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1\\n11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM\\n16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP\\n21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ\\n26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR\\n31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3\\n38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8\\n43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13\\n48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12\\n53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7\\n58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2\\n63) SIGRTMAX-1  64) SIGRTMAX\\n```\\n\\n## \u7f51\u7edc\u7ba1\u7406\\n\\n### dig\\n`dig` \u7528\u4e8e\u67e5\u8be2\u57df\u540d\u6620\u5c04\u7684 DNS\\n\\n:::note\\ncentos: yum install -y bind-utils\\n:::\\n\\n### netstat\\n`netstat` \u7528\u4e8e\u663e\u793a\u7f51\u7edc\u72b6\u6001\\n\\n* -a\uff1a\u663e\u793a\u6240\u6709\u8fde\u7ebf\u4e2d\u7684 socket\\n* -l\uff1a\u663e\u793a\u76d1\u63a7\u4e2d\u7684 socket\\n\\n:::note linux \u5b89\u88c5 netstat\\ncentos\uff1ayum install -y net-tools\\n:::\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"}]}')}}]);