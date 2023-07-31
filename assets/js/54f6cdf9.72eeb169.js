"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1371],{81:e=>{e.exports=JSON.parse('{"pluginId":"develop","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u6587\u6863\u4ecb\u7ecd","href":"/docusaurus/docs/develop/","docId":"index"},{"type":"category","label":"Docker","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Docker\u5b89\u88c5","href":"/docusaurus/docs/develop/docker/docker-install","docId":"docker/Docker\u5b89\u88c5"},{"type":"link","label":"Docker\u6307\u4ee4","href":"/docusaurus/docs/develop/docker/docker-cmd","docId":"docker/Docker\u6307\u4ee4"},{"type":"link","label":"Docker\u6838\u5fc3\u6280\u672f","href":"/docusaurus/docs/develop/docker/core-technology","docId":"docker/\u6838\u5fc3\u6280\u672f"},{"type":"link","label":"Image\u955c\u50cf","href":"/docusaurus/docs/develop/docker/image","docId":"docker/image\u955c\u50cf"},{"type":"link","label":"Network\u7f51\u7edc","href":"/docusaurus/docs/develop/docker/network","docId":"docker/Network\u7f51\u7edc"},{"type":"link","label":"Volume\u6570\u636e\u5377","href":"/docusaurus/docs/develop/docker/volume","docId":"docker/Volume\u6570\u636e\u5377"},{"type":"category","label":"Dockerfile","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5e38\u7528\u6307\u4ee4","href":"/docusaurus/docs/develop/docker/dockerfile/cmd","docId":"docker/dockerfile/\u5e38\u7528\u6307\u4ee4"},{"type":"link","label":"\u591a\u9636\u6bb5\u7f16\u8bd1","href":"/docusaurus/docs/develop/docker/dockerfile/multi-compile","docId":"docker/dockerfile/\u591a\u9636\u6bb5\u7f16\u8bd1"},{"type":"link","label":"\u4ea4\u53c9\u7f16\u8bd1","href":"/docusaurus/docs/develop/docker/dockerfile/cross-compile","docId":"docker/dockerfile/\u4ea4\u53c9\u7f16\u8bd1"}],"href":"/docusaurus/docs/develop/docker/dockerfile/"}],"href":"/docusaurus/docs/develop/docker/"},{"type":"link","label":"Kubernetes","href":"/docusaurus/docs/develop/kubernetes/","docId":"kubernetes/index"},{"type":"category","label":"MySQL","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"MySQL\u57fa\u7840","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SQL\u57fa\u7840","href":"/docusaurus/docs/develop/mysql/basic/sql","docId":"mysql/basic/sql"}],"href":"/docusaurus/docs/develop/mysql/basic/"}],"href":"/docusaurus/docs/develop/mysql/"},{"type":"link","label":"Python","href":"/docusaurus/docs/develop/python/","docId":"python/index"},{"type":"category","label":"RabbitMQ","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5feb\u901f\u5f00\u59cb","href":"/docusaurus/docs/develop/rabbitmq/how-to-use","docId":"rabbitmq/\u5feb\u901f\u5f00\u59cb"},{"type":"link","label":"\u6d88\u606f\u786e\u8ba4","href":"/docusaurus/docs/develop/rabbitmq/message-confirm","docId":"rabbitmq/\u6d88\u606f\u786e\u8ba4\u673a\u5236"},{"type":"link","label":"\u6b7b\u4fe1\u961f\u5217","href":"/docusaurus/docs/develop/rabbitmq/dead-letter-queue","docId":"rabbitmq/\u6b7b\u4fe1\u961f\u5217"}],"href":"/docusaurus/docs/develop/rabbitmq/"},{"type":"link","label":"Redis","href":"/docusaurus/docs/develop/redis/","docId":"redis/index"}]},"docs":{"docker/dockerfile/index":{"id":"docker/dockerfile/index","title":"Dockerfile\u7b80\u4ecb","description":"Dockerfile \u662f Docker \u5bb9\u5668\u7684\u6784\u5efa\u6587\u4ef6\uff0c\u5b83\u662f\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u7cfb\u5217\u547d\u4ee4\u548c\u6307\u4ee4\uff0c\u7528\u4e8e\u81ea\u52a8\u5316\u5730\u6784\u5efaDocker\u955c\u50cf\u3002","sidebar":"tutorialSidebar"},"docker/dockerfile/\u4ea4\u53c9\u7f16\u8bd1":{"id":"docker/dockerfile/\u4ea4\u53c9\u7f16\u8bd1","title":"\u4ea4\u53c9\u7f16\u8bd1","description":"Docker\u7684\u4ea4\u53c9\u7f16\u8bd1\u662f\u6307\u5728\u4e00\u4e2a\u5e73\u53f0\u4e0a\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u955c\u50cf\uff0c\u4f46\u8be5\u5e94\u7528\u7a0b\u5e8f\u662f\u4e3a\u4e0d\u540c\u7684\u76ee\u6807\u5e73\u53f0\u7f16\u8bd1\u7684\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u6784\u5efa\u8fd0\u884c\u5728\u5bbf\u4e3b\u673a\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u8fd9\u4f7f\u5f97\u53ef\u4ee5\u5728\u4e00\u4e2aDocker\u5bb9\u5668\u4e2d\u6784\u5efa\u9002\u7528\u4e8e\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4ece\u800c\u7b80\u5316\u4e86\u8de8\u5e73\u53f0\u5f00\u53d1\u548c\u90e8\u7f72\u7684\u8fc7\u7a0b\u3002","sidebar":"tutorialSidebar"},"docker/dockerfile/\u591a\u9636\u6bb5\u7f16\u8bd1":{"id":"docker/dockerfile/\u591a\u9636\u6bb5\u7f16\u8bd1","title":"\u591a\u9636\u6bb5\u7f16\u8bd1","description":"Docker\u7684\u591a\u9636\u6bb5\u6784\u5efa\uff08Multi-stage build\uff09\u662f\u4e00\u79cd\u6280\u672f\uff0c\u5b83\u5141\u8bb8\u4f60\u5728\u5355\u4e2aDockerfile\u4e2d\u4f7f\u7528\u591a\u4e2a\u6784\u5efa\u9636\u6bb5\u6765\u6784\u5efa\u6700\u7ec8\u7684Docker\u955c\u50cf\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u4e3b\u8981\u4f18\u52bf\u662f\u51cf\u5c0f\u955c\u50cf\u7684\u5927\u5c0f\uff0c\u5e76\u4e14\u53ea\u5305\u542b\u6784\u5efa\u6240\u9700\u7684\u7ec4\u4ef6\uff0c\u800c\u4e0d\u5305\u542b\u6784\u5efa\u8fc7\u7a0b\u4e2d\u751f\u6210\u7684\u4e34\u65f6\u6587\u4ef6\u548c\u5de5\u5177\u3002\u8fd9\u6709\u52a9\u4e8e\u4f18\u5316\u955c\u50cf\u7684\u6027\u80fd\u548c\u5b89\u5168\u6027\u3002","sidebar":"tutorialSidebar"},"docker/dockerfile/\u5e38\u7528\u6307\u4ee4":{"id":"docker/dockerfile/\u5e38\u7528\u6307\u4ee4","title":"\u5e38\u7528\u6307\u4ee4","description":"\u6700\u65b0 Dockerfile \u6307\u4ee4\u89c1\u5b98\u65b9\u6587\u6863","sidebar":"tutorialSidebar"},"docker/Docker\u5b89\u88c5":{"id":"docker/Docker\u5b89\u88c5","title":"Docker\u5b89\u88c5","description":"Window","sidebar":"tutorialSidebar"},"docker/Docker\u6307\u4ee4":{"id":"docker/Docker\u6307\u4ee4","title":"Docker\u6307\u4ee4","description":"\u62c9\u53d6\u955c\u50cf","sidebar":"tutorialSidebar"},"docker/image\u955c\u50cf":{"id":"docker/image\u955c\u50cf","title":"Image\u955c\u50cf","description":"\u4ec0\u4e48\u662f\u955c\u50cf\uff1f","sidebar":"tutorialSidebar"},"docker/index":{"id":"docker/index","title":"Docker\u7b80\u4ecb","description":"\u77e5\u8bc6\u5168\u666f\u56fe","sidebar":"tutorialSidebar"},"docker/Network\u7f51\u7edc":{"id":"docker/Network\u7f51\u7edc","title":"Network\u7f51\u7edc","description":"\u4ec0\u4e48\u662fDocker\u7f51\u7edc\uff1f","sidebar":"tutorialSidebar"},"docker/Volume\u6570\u636e\u5377":{"id":"docker/Volume\u6570\u636e\u5377","title":"Volume\u6570\u636e\u5377","description":"\u4ec0\u4e48\u662f\u6570\u636e\u5377\uff1f","sidebar":"tutorialSidebar"},"docker/\u6838\u5fc3\u6280\u672f":{"id":"docker/\u6838\u5fc3\u6280\u672f","title":"\u6838\u5fc3\u6280\u672f","description":"Docker \u6838\u5fc3\u6280\u672f\u6709\uff1a","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"\u6587\u6863\u4ecb\u7ecd","description":"\u5f00\u53d1\u8005\u77e5\u8bc6\u5e93\uff0c\u8bb0\u5f55\u4e2a\u4eba\u7ecf\u9a8c\u4e0e\u603b\u7ed3~","sidebar":"tutorialSidebar"},"kubernetes/index":{"id":"kubernetes/index","title":"Kubernetes","description":"","sidebar":"tutorialSidebar"},"mysql/basic/index":{"id":"mysql/basic/index","title":"MySQL\u57fa\u7840","description":"MySQL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002","sidebar":"tutorialSidebar"},"mysql/basic/sql":{"id":"mysql/basic/sql","title":"SQL\u57fa\u7840","description":"SQL \u5168\u79f0 Structured Query Language\uff0c\u662f\u4e00\u79cd\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u53e5\u3002","sidebar":"tutorialSidebar"},"mysql/index":{"id":"mysql/index","title":"MySQL","description":"MySQL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002","sidebar":"tutorialSidebar"},"python/index":{"id":"python/index","title":"Python","description":"https://","sidebar":"tutorialSidebar"},"rabbitmq/index":{"id":"rabbitmq/index","title":"RabbitMQ\u7b80\u4ecb","description":"\u77e5\u8bc6\u5168\u666f\u56fe","sidebar":"tutorialSidebar"},"rabbitmq/\u5feb\u901f\u5f00\u59cb":{"id":"rabbitmq/\u5feb\u901f\u5f00\u59cb","title":"\u5feb\u901f\u5f00\u59cb","description":"\u5b89\u88c5","sidebar":"tutorialSidebar"},"rabbitmq/\u6b7b\u4fe1\u961f\u5217":{"id":"rabbitmq/\u6b7b\u4fe1\u961f\u5217","title":"\u6b7b\u4fe1\u961f\u5217","description":"\u6b7b\u4fe1\u961f\u5217\uff08Dead Letter Queue\uff0c\u7b80\u79f0 DLQ\uff09\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u961f\u5217\uff0c\u7528\u4e8e\u63a5\u6536\u5176\u4ed6\u961f\u5217\u4e2d\u7684\u6b7b\u4fe1\uff08Dead Letter\uff09\u6d88\u606f\u3002","sidebar":"tutorialSidebar"},"rabbitmq/\u6d88\u606f\u786e\u8ba4\u673a\u5236":{"id":"rabbitmq/\u6d88\u606f\u786e\u8ba4\u673a\u5236","title":"\u6d88\u606f\u786e\u8ba4","description":"\u5728 RabbitMQ \u4e2d\uff0c\u6d88\u606f\u786e\u8ba4\u673a\u5236\u7528\u4e8e\u786e\u4fdd\u6d88\u606f\u80fd\u591f\u88ab\u6b63\u786e\u7684\u5904\u7406\uff0c\u907f\u514d\u5728\u67d0\u4e9b\u5f02\u5e38\u573a\u666f\u4e0b\u7684\u6d88\u606f\u4e22\u5931\u3002","sidebar":"tutorialSidebar"},"redis/index":{"id":"redis/index","title":"Redis","description":"","sidebar":"tutorialSidebar"}}}')}}]);