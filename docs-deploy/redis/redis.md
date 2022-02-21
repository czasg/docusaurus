---
title: redis
---

## docker
```shell script title="部署 nginx"
docker run -it --rm --name nginx-server \
    -v default.conf:/etc/nginx/conf.d/default.conf \
    -p 8080:80 \
    nginx:latest
```

```shell script title="部署 redis"
docker run -it --rm --name nginx-server \
    -v default.conf:/etc/nginx/conf.d/default.conf \
    -p 8080:80 \
    nginx:latest
```

```shell script title="部署 postgres"
docker run -it --rm --name nginx-server \
    -v default.conf:/etc/nginx/conf.d/default.conf \
    -p 8080:80 \
    nginx:latest
```

```shell script title="部署 rabbitmq"
docker run -it --rm --name nginx-server \
    -v default.conf:/etc/nginx/conf.d/default.conf \
    -p 8080:80 \
    nginx:latest
```

## docker-compose
```shell script title="指定默认配置文件"
docker run -it --rm --name nginx-server \
    -v default.conf:/etc/nginx/conf.d/default.conf \
    -p 8080:80 \
    nginx:latest
```


