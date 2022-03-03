---
title: rabbitmq
---

## docker
```shell script
docker run -it --rm --name rabbitmq \
    -e RABBITMQ_DEFAULT_USER=guest \
    -e RABBITMQ_DEFAULT_PASS=guest \
    -p 5672:5672 \
    -p 15672:15672 \
    rabbitmq:management
```

