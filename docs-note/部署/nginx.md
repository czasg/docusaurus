---
title: nginx 部署
---

## docker

```text title="default.conf"
server {
    listen  80;
    server_name  _;
    proxy_request_buffering  off;
    proxy_buffering  off;
    proxy_set_header  Host $proxy_host;

    location / {
        return  204;
    }

    location /autoindex {
        autoindex  on;
    }
}
```

```shell script title="指定默认配置文件"
docker run -it --rm --name nginx-server \
    -v default.conf:/etc/nginx/conf.d/default.conf \
    -p 8080:80 \
    nginx:latest
```

## docker-compose
```yaml title="docker-compose.yaml"
version: "2.3"
services:
  nginx:
    image: nginx:latest
    ports:
    - "8080:80"
    volumes:
      - "default.conf:/etc/nginx/conf.d/default.conf"
```

## kubectl

```yaml

```

