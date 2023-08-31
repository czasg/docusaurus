---
title: RabbitMQ
sidebar_label: RabbitMQ
hide_title: true
hide_table_of_contents: false
slug: rabbitmq
---

#### 参考文档：
- https://hub.docker.com/r/bitnami/rabbitmq

### Docker 部署
```bash
docker run --rm -it --name rabbitmq --hostname rabbitmq -p 5672:5672 -p 15672:15672 \
    -v /path/to/rabbitmq-persistence:/bitnami/rabbitmq/mnesia \
    -e RABBITMQ_USERNAME=admin \
    -e RABBITMQ_PASSWORD=admin \
    bitnami/rabbitmq:latest
```

### DockerCompose 部署
```yaml title="主从集群"
version: '2'
services:
  stats:
    image: bitnami/rabbitmq
    environment:
      - RABBITMQ_NODE_TYPE=stats
      - RABBITMQ_NODE_NAME=rabbit@stats
      - RABBITMQ_ERL_COOKIE=s3cr3tc00ki3
    ports:
      - '15672:15672'
    volumes:
      - 'rabbitmqstats_data:/bitnami/rabbitmq/mnesia'
  queue-disc1:
    image: bitnami/rabbitmq
    environment:
      - RABBITMQ_NODE_TYPE=queue-disc
      - RABBITMQ_NODE_NAME=rabbit@queue-disc1
      - RABBITMQ_CLUSTER_NODE_NAME=rabbit@stats
      - RABBITMQ_ERL_COOKIE=s3cr3tc00ki3
    volumes:
      - 'rabbitmqdisc1_data:/bitnami/rabbitmq/mnesia'
  queue-ram1:
    image: bitnami/rabbitmq
    environment:
      - RABBITMQ_NODE_TYPE=queue-ram
      - RABBITMQ_NODE_NAME=rabbit@queue-ram1
      - RABBITMQ_CLUSTER_NODE_NAME=rabbit@stats
      - RABBITMQ_ERL_COOKIE=s3cr3tc00ki3
    volumes:
      - 'rabbitmqram1_data:/bitnami/rabbitmq/mnesia'
volumes:
  rabbitmqstats_data:
    driver: local
  rabbitmqdisc1_data:
    driver: local
  rabbitmqram1_data:
    driver: local
```

### K8S 部署
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: rabbitmq
  name: rabbitmq
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: rabbitmq
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: rabbitmq
      annotations:
        co.elastic.logs: "false"
        co.elastic.logs/enabled: "false"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.add_fields.fields.index: elk-index-rabbitmq
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
    spec:
      hostname: rabbitmq
      containers:
        - image: bitnami/rabbitmq:latest
          imagePullPolicy: Always
          envFrom:
            - configMapRef:
                name: rabbitmq
          name: rabbitmq
          livenessProbe:
            failureThreshold: 3
            initialDelaySeconds: 300
            periodSeconds: 20
            successThreshold: 1
            tcpSocket:
              port: 5672
            timeoutSeconds: 5
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 5
            periodSeconds: 40
            successThreshold: 1
            tcpSocket:
              port: 5672
            timeoutSeconds: 2
          ports:
            - containerPort: 5672
              name: tcp5672
              protocol: TCP
            - containerPort: 15672
              name: tcp15672
              protocol: TCP
          resources:
            limits:
              cpu: 1000m
              memory: 1000Mi
            requests:
              cpu: 100m
              memory: 100Mi
          volumeMounts:
            - mountPath: /etc/localtime
              name: host-time
              readOnly: true
            - mountPath: /bitnami/rabbitmq/mnesia
              name: storage
      restartPolicy: Always
      volumes:
        - name: host-time
          hostPath:
            path: /etc/localtime
            type: ""
        - name: storage
          emptyDir: {}
---
apiVersion: v1
kind: Service
metadata:
  name: rabbitmq
spec:
  ports:
    - name: tcp5672
      port: 5672
      protocol: TCP
      targetPort: 5672
    - name: tcp15672
      port: 15672
      protocol: TCP
      targetPort: 15672
    - name: management80
      port: 80
      protocol: TCP
      targetPort: 15672
  selector:
    app: rabbitmq
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: rabbitmq
data:
  RABBITMQ_PASSWORD: "admin"
  RABBITMQ_SECURE_PASSWORD: "admin"
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: rabbitmq
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "5M"
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "1200"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "1200"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "1200"
spec:
  rules:
    - host: rabbitmq.domain
      http:
        paths:
          - backend:
              serviceName: rabbitmq
              servicePort: 80
```
