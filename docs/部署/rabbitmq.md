---
title: rabbitmq
---

## docker

```shell script
docker pull rabbitmq:management
docker run --rm -it \ 
    -e RABBITMQ_DEFAULT_USER=guest \ 
    -e RABBITMQ_DEFAULT_PASS=guest \
    -p 15672:15672 \
    -p 5672:5672 \
    rabbitmq:management
```
