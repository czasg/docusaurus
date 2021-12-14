"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[922],{9041:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"\u57fa\u4e8e gRPC \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861","metadata":{"permalink":"/docusaurus/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861/index.md","source":"@site/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861/index.md","title":"\u57fa\u4e8e gRPC \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 k8s \u73af\u5883\u4e0b gRPC \u670d\u52a1\u5728\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u65f6\u9047\u5230\u7684\u95ee\u9898\u548c\u89e3\u51b3\u601d\u8def\u3002","date":"2021-12-13T00:00:00.000Z","formattedDate":"December 13, 2021","tags":[{"label":"k8s","permalink":"/docusaurus/blog/tags/k-8-s"},{"label":"gRPC","permalink":"/docusaurus/blog/tags/g-rpc"},{"label":"\u8d1f\u8f7d\u5747\u8861","permalink":"/docusaurus/blog/tags/\u8d1f\u8f7d\u5747\u8861"}],"readingTime":3.47,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"nextItem":{"title":"Github \u642d\u5efa Docusaurus \u7ad9\u70b9","permalink":"/docusaurus/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9"}},"content":"\x3c!-- \u53c2\u8003\u81ea https://www.lixueduan.com/post/grpc/13-loadbalance-on-k8s/ --\x3e\\n\\n\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 k8s \u73af\u5883\u4e0b gRPC \u670d\u52a1\u5728\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u65f6\u9047\u5230\u7684\u95ee\u9898\u548c\u89e3\u51b3\u601d\u8def\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u6982\u8ff0\\n\u6211\u4eec\u7684 gRPC \u670d\u52a1\u6700\u521d\u4f7f\u7528 `DaemonSet` \u90e8\u7f72\u5728 k8s \u4e0a\uff0c\u901a\u8fc7\u8282\u70b9\u4eb2\u548c\u5c5e\u6027 `nodeAffinity`\uff0c\u4f7f\u5f97\u5355\u53f0\u5bbf\u4e3b\u673a\u4ec5\u8fd0\u884c\u8fd9\u4e00\u4e2a `Pod`\uff0c\u7136\u540e\u901a\u8fc7 `NodePort Service` \u7684\u65b9\u5f0f\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u3002\\n\\n\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u76f4\u63a5\u5bf9\u5916\u66b4\u9732 IP \u63d0\u4f9b\u670d\u52a1\uff0c\u4e1a\u52a1\u6d41\u91cf\u5168\u90e8\u6253\u5230\u5355\u53f0\u5bbf\u4e3b\u673a\u4e0a\uff0c\u6240\u4ee5\u4e5f\u4e0d\u5b58\u5728\u8d1f\u8f7d\u5747\u8861\u7684\u8bf4\u6cd5\u3002\\n\\n\u968f\u7740\u4e1a\u52a1\u538b\u529b\u9010\u6e10\u589e\u5927\uff0c\u5355\u70b9\u63d0\u4f9b\u7684\u80fd\u529b\u5df2\u9010\u6e10\u8fbe\u5230\u6781\u9650\uff0c\u6211\u4eec\u91c7\u7528\u6c34\u5e73\u62d3\u5c55\u7684\u65b9\u5f0f\uff0c\u90e8\u7f72\u4e86\u591a\u53f0\u5355\u8282\u70b9\u670d\u52a1\u3002\u4e5f\u7b97\u6682\u65f6\u6297\u4f4f\u4e86\u538b\u529b\u3002\u4f46\u968f\u540e\u7684\u66b4\u9732\u7684\u95ee\u9898\uff0c\u4e5f\u8ba9\u6211\u4eec\u88ab\u8feb\u9009\u9009\u62e9\u4e86\u91cd\u6784\u3002\\n\\n:::note \u4e3a\u4ec0\u4e48\u9009\u62e9\u91cd\u6784\\n\u4e1a\u52a1\u6301\u7eed\u62d3\u5c55\uff0c\u95ee\u9898\u4e5f\u9010\u6e10\u66b4\u9732\u51fa\u6765\uff0c\u5f53\u524d\u670d\u52a1\u67b6\u6784\u4e0b\uff0c\u591a\u8282\u70b9\u4e4b\u95f4\u7684\u6570\u636e\u4e00\u81f4\u6027\u5b8c\u5168\u4e0d\u80fd\u4fdd\u8bc1\uff0c\u4eba\u5de5\u8fd0\u7ef4\u7b80\u76f4\u4e0d\u8981\u592a\u6076\u5fc3\uff0c\u65e0\u5948\u53ea\u80fd\u91cd\u6784\u3002\u8fd9\u91cc\u6211\u4eec\u4e0d\u9488\u5bf9\u6b64\u5c55\u5f00\u3002  \\n:::\\n\\n\u670d\u52a1\u6539\u9020\u5347\u7ea7\u5b8c\u6bd5\u540e\uff0c\u5b8c\u5168\u517c\u5bb9\u5386\u53f2 gRPC \u63a5\u53e3\uff0c\u5728 k8s \u7684\u914d\u7f6e\u4e0a\u4e5f\u6709\u90e8\u5206\u6539\u52a8\uff0c\u4ee5\u524d\u7684 `DaemontSet` \u7c7b\u578b\u53d8\u66f4\u4e3a `Deployment` \u7c7b\u578b\uff0c\u800c `NodePort Service` \u7c7b\u578b\u5219\u53d8\u66f4\u4e3a `ClusterIP Service` \u7c7b\u578b\u3002\\n\u9879\u76ee\u6b63\u5f0f\u8fdb\u5165\u5230\u4e86\u63d0\u6d4b\u9636\u6bb5\u3002\\n\\n\u529f\u80fd\u4e0a\u57fa\u672c\u6ca1\u6709\u592a\u5927\u7684\u95ee\u9898\uff0c\u6bd5\u7adf\u5f15\u7528\u4e86\u76f8\u540c\u7684 gRPC \u6807\u51c6\u3002\\n\\n\u95ee\u9898\u4e3b\u8981\u66b4\u9732\u5728\u4e86\u8d1f\u8f7d\u5747\u8861\u4e0a\uff0c\u5728\u591a\u526f\u672c\u7684\u573a\u666f\u4e0b\uff0c\u53d1\u751f\u4e86\u4e25\u91cd\u7684\u6d41\u91cf\u503e\u659c\uff0c\u5177\u4f53\u8868\u73b0\u5c31\u662f\u67d0\u4e2a\u526f\u672c\u7684\u538b\u529b\u975e\u5e38\u9ad8\uff0c\u800c\u5176\u4ed6\u526f\u672c\u7684\u538b\u529b\u5f88\u5c0f\uff0c\u8fdb\u800c\u5bfc\u81f4\u670d\u52a1\u6574\u4f53\u5f02\u5e38\u3002\\n\\n:::tip \u7b80\u5355\u5206\u6790\\ngRPC \u662f\u57fa\u4e8e HTTP2.0 \u5b9e\u73b0\u7684\u957f\u8fde\u63a5\uff0c\u4e14\u9ed8\u8ba4\u6ca1\u6709\u8d85\u65f6\uff0c\u8fd9\u79cd\u957f\u8fde\u63a5\u80fd\u591f\u5927\u91cf\u51cf\u5c11 TCP \u8fde\u63a5\u7ba1\u7406\u6240\u5e26\u6765\u7684\u5f00\u9500\uff0c\u4f46\u4e5f\u7834\u574f\u4e86\u6807\u51c6\u7684\u8fde\u63a5\u7ea7\u7684\u8d1f\u8f7d\u5747\u8861\u3002\u56e0\u4e3a\u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb\u4e14\u4e0d\u65ad\u5f00\uff0c\u4e5f\u65e0\u6cd5\u518d\u8fdb\u4e00\u6b65\u8d1f\u8f7d\u5747\u8861\u4e86\u3002  \\n\\n\u90a3\u4e48\u518d\u56de\u5230\u4e0a\u8ff0\u573a\u666f\uff0c\u663e\u7136\u5c31\u662f\u5ba2\u6237\u7aef\u4e0e\u67d0\u4e2a\u5177\u4f53\u7684\u670d\u52a1\u5efa\u7acb\u4e86\u957f\u8fde\u63a5\uff0c\u800c\u8fde\u63a5\u53c8\u4e0d\u4f1a\u65ad\u5f00\uff0c\u4ece\u800c\u5bfc\u81f4\u4e86\u6301\u7eed\u7684\u6d41\u91cf\u503e\u659c\u95ee\u9898\u3002\\n:::\\n\\n\u5982\u4f55\u9009\u62e9\u6709\u6548\u7684 gRPC \u8d1f\u8f7d\u5747\u8861\u65b9\u6848\uff0c\u5177\u4f53\u89e3\u51b3\u7684\u65b9\u6cd5\u6709\u591a\u79cd\uff0c\u6211\u4eec\u4e3b\u8981\u5c06\u5176\u5206\u4e3a\uff1a  \\n* \u7528\u6237\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861\\n* \u670d\u52a1\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861\\n\\n## gRPC \u8d1f\u8f7d\u5747\u8861 - \u7528\u6237\u4fa7\\n\\n\\n### Headless Service\\nk8s \u7684 `Service` \u662f\u4e00\u4e2a\\n`ClusterIP Service`\\n\\n### KubeResolver\\n\\n## gRPC \u8d1f\u8f7d\u5747\u8861 - \u670d\u52a1\u4fa7\\n\\n### \u957f\u8fde\u63a5\u8f6c\u77ed\u8fde\u63a5\\n\\n### \u4e2d\u95f4\u4ef6\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"},{"id":"Github \u642d\u5efa Docusaurus \u7ad9\u70b9","metadata":{"permalink":"/docusaurus/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9","editUrl":"https://github.com/czasg/docusaurus/edit/main/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9/index.md","source":"@site/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9/index.md","title":"Github \u642d\u5efa Docusaurus \u7ad9\u70b9","description":"1\u3001\u65b0\u5efa Github \u4ed3\u5e93","date":"2021-12-03T00:00:00.000Z","formattedDate":"December 3, 2021","tags":[{"label":"\u90e8\u7f72","permalink":"/docusaurus/blog/tags/\u90e8\u7f72"},{"label":"docusaurus","permalink":"/docusaurus/blog/tags/docusaurus"}],"readingTime":3.585,"truncated":true,"authors":[{"name":"Czasg","title":"Maintainer of Site","url":"https://github.com/czasg","imageURL":"https://github.com/czasg.png","key":"czasg"}],"prevItem":{"title":"\u57fa\u4e8e gRPC \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861","permalink":"/docusaurus/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861"}},"content":"\x3c!--truncate--\x3e\\n\\n## 1\u3001\u65b0\u5efa Github \u4ed3\u5e93\\n\u9996\u5148\uff0c\u767b\u5f55[Github\u4ed3\u5e93\u521b\u5efa\u9875\u9762](https://github.com/new)\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684\u7a7a\u767d\u4ed3\u5e93\uff0c\u9879\u76ee\u540d\u547d\u540d\u4e3a `testDocusaurus`\u3002\\n\\n\u7136\u540e\u901a\u8fc7 `git` \u5c06\u4ed3\u5e93\u62c9\u53d6\u5230\u672c\u5730\uff0c\u81f3\u6b64\uff0c\u6211\u4eec\u62e5\u6709\u4e86\u4e00\u4e2a\u5168\u65b0\u7684\u7a7a\u767d\u4ed3\u5e93 `testDocusaurus`\u3002  \\n\\n![](gitindex.png)\\n\\n## 2\u3001\u521d\u59cb\u5316 Docusaurus \u9879\u76ee\\n> [Docusaurus\u9879\u76ee\u521d\u59cb\u5316\u7ec6\u8282\u8bf7\u53c2\u8003\u5b98\u65b9\u6587\u6863](https://docusaurus.io/zh-CN/docs/installation)\\n\\n\u8fdb\u5165\u5230\u4ed3\u5e93 `testDocusaurus` \u6240\u5728\u7684\u7a7a\u767d\u76ee\u5f55\uff0c\u5e76\u5728\u6b64\u76ee\u5f55\u6253\u5f00\u7ec8\u7aef\u754c\u9762\u3002\\n\\n\u4e3a\u4e86\u66f4\u597d\u7684\u5b8c\u6210\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u9884\u5148\u5b89\u88c5**nodejs**\u3002\u5728\u6b64\uff0c\u5047\u8bbe\u4f60\u5df2\u7ecf\u51c6\u5907\u5b8c\u6bd5\u3002  \\n\u90a3\u6211\u4eec\u63a5\u4e0b\u6765\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u521d\u59cb\u5316\u4e00\u4e2a `Docusaurus` \u9879\u76ee\u3002\\n```shell script\\n>>> npx create-docusaurus@latest website classic\\n...\\n...\\nSuccessfully created \\"website\\".\\nInside that directory, you can run several commands:\\n\\n  npm start\\n    Starts the development server.\\n\\n  npm run build\\n    Bundles your website into static files for production.\\n\\n  npm run serve\\n    Serves the built website locally.\\n\\n  npm deploy\\n    Publishes the website to GitHub pages.\\n\\nWe recommend that you begin by typing:\\n\\n  cd website\\n  npm start\\n\\nHappy building awesome websites!\\n```\\n\\n\u8be5\u6307\u4ee4\u8fd0\u884c\u5b8c\u540e\uff0c\u4f1a\u8f93\u51fa\u4e00\u4e9b\u7b80\u5355\u7684\u8fd0\u884c\u6307\u4ee4\uff0c\u800c\u4e14\u6211\u4eec\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a `website` \u7684\u76ee\u5f55\uff0c\u6211\u4eec\u5148\u5c06\u91cc\u9762\u7684\u5185\u5bb9\u526a\u8d34\u51fa\u6765\uff0c\u653e\u5230\u6211\u4eec\u7a7a\u767d\u4ed3\u5e93\u76ee\u5f55\u4e0b\u9762\u3002\\n\\n\u6b64\u65f6\uff0c\u6211\u4eec\u6309\u7167\u63d0\u793a\uff0c\u8fd0\u884c `npm start` \u6307\u4ee4\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8fd0\u884c\u6b64\u9879\u76ee\u3002\\n\\n\u901a\u5e38\u542f\u52a8\u7aef\u53e3\u4e3a3000\uff0c\u5219\u9ed8\u8ba4\u8def\u5f84\u4e3a\uff1ahttp://localhost:3000/  \\n\\n![](websiteindex.png)\\n\\n## 3\u3001\u642d\u5efa Github Actions\\n> Github Actions\u90e8\u7f72\u7ec6\u8282\u53c2\u8003[\u5b98\u65b9\u6587\u6863](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages)\\n\\n\u63a5\u5165 `Github Actions` \u9700\u8981\u521b\u5efa\u4e00\u5bf9\u65b0\u7684 **SSH Key**\uff0c\u5e76\u5c06\u516c\u94a5\u548c\u5bc6\u94a5\u5747\u914d\u7f6e\u5230 Github\uff0c\u6211\u4eec\u6765\u5177\u4f53\u770b\u4e0b\u64cd\u4f5c\u3002\\n\\n\u9996\u5148\u521b\u5efa\u5bc6\u94a5\uff0c\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u65b0\u7684\u76ee\u5f55\uff0c\u7136\u540e\u5f97\u5230\u516c\u94a5\uff08id_rsa.pub\uff09\u548c\u79c1\u94a5\uff08id_rsa\uff09\\n```shell script\\n>>> ssh-keygen -t rsa -C \\"email\\"\\n...\\n...\\nThe key\'s randomart image is:\\n+---[RSA 3072]----+\\n| .=oo*=o=o.      |\\n| o+.=o==.o       |\\n|  .O.O=+o        |\\n|  ..=o@.oo       |\\n| . o +.+S+..     |\\n|  . + . E.o      |\\n|   o . .         |\\n|  .              |\\n|                 |\\n+----[SHA256]-----+\\n```\\n\\n\u6211\u4eec\u6253\u5f00\u4ed3\u5e93\u7684 `deploy keys`\uff0c\u9009\u62e9\u65b0\u589e\uff0c\u5c06 `id_rsa.pub` \u4e2d\u7684\u5185\u5bb9\u590d\u5236\u8fdb\u53bb\uff0c\u5e76\u9009\u4e2d `Allow write access` \u6846\uff0c\u8868\u793a\u8d4b\u4e88\u90e8\u7f72\u5199\u6743\u9650\u3002\\n![](deploykey.png)\\n\\n\u6b64\u65f6\u90e8\u7f72\u516c\u94a5\u5df2\u7ecf\u5b8c\u6210\uff0c\u6211\u4eec\u518d\u5c06\u79c1\u94a5\u4e5f\u914d\u7f6e\u4e0a\u3002\u6253\u5f00\u540c\u7ea7\u914d\u7f6e\u4e0b\u7684 Secret\uff0c\u9009\u62e9\u65b0\u589e\u5bc6\u94a5\uff0c\\n\u6211\u4eec\u5c06\u79c1\u94a5\u5185\u5bb9\u590d\u5236\u5230 `Value` \u4e2d\uff0c\u800c `Name` \u586b\u5199 `GH_PAGES_DEPLOY` \u5373\u53ef\u3002\\n\\n\u6700\u540e\uff0c\u6211\u4eec\u521b\u5efa `Github Actions`\uff0c\u5c06\u6a21\u677f\u590d\u5236\u8fdb\u53bb\uff0c\u5219\u6574\u4e2a\u6d41\u6c34\u7ebf\u5c31\u5df2\u7ecf\u914d\u7f6e\u597d\u4e86\u3002\u590d\u5236\u65f6\uff0c\u5c06\u5bf9\u5e94\u7684\u57fa\u7840\u914d\u7f6e\u6539\u4e0b\u5373\u53ef\uff0c\u5982\u4e0b\uff1a\\n```shell script\\ngit config --global user.email \\"email\\"\\ngit config --global user.name \\"name\\"\\n```\\n\u8fd9\u91cc\u7684 `email` \u9700\u8981\u662f github \u914d\u7f6e\u7684 email\uff0c\u800c `name` \u5219\u662f github \u7528\u6237\u540d\u3002\\n\\n## 4\u3001\u66f4\u65b0\u4ed3\u5e93\uff0c\u5c1d\u8bd5\u81ea\u52a8\u90e8\u7f72\\n\\n\u786e\u4fdd Github Pages \u5df2\u7ecf\u521d\u59cb\u5316\u597d\uff0c\u90a3\u4e48\u6211\u4eec\u5f80\u4ed3\u5e93\u63a8\u9001\u4fee\u6539\u65f6\uff0c\u5c31\u53ef\u4ee5\u89e6\u53d1\u81ea\u52a8\u90e8\u7f72\u4e86\u3002\\n\\n\\n<br/>\\n\\n:::info \ud83d\udc47\ud83d\udc47\ud83d\udc47\\n**\u672c\u6587\u4f5c\u8005:** Czasg     \\n**\u7248\u6743\u58f0\u660e:** \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    \\n:::"}]}')}}]);