---
title: Kafka
sidebar_label: Kafka
hide_title: true
hide_table_of_contents: false
slug: kafka
---

#### 参考文档：
- https://hub.docker.com/r/bitnami/kafka

### Docker 部署
```bash
docker run --rm -it --name kafka --hostname kafka -p 9092:9092 \
    -e KAFKA_CFG_NODE_ID=0 \
    -e KAFKA_CFG_PROCESS_ROLES=controller,broker \
    -e KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093 \
    -e KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT \
    -e KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka:9093 \
    -e KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER \
    bitnami/kafka:latest
```

### K8S 部署

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: kafka
  name: kafka
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: kafka
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: kafka
      annotations:
        co.elastic.logs: "false"
        co.elastic.logs/enabled: "false"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.add_fields.fields.index: elk-index-kafka
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
    spec:
      hostname: kafka
      containers:
        - image: bitnami/kafka:latest
          imagePullPolicy: Always
          env:
            - name: KAFKA_HEAP_OPTS
              value: -Xmx1G -Xms1G
            - name: KAFKA_OPTS
              value: -Dlogging.level=INFO
          envFrom:
            - configMapRef:
                name: kafka
          name: kafka
          ports:
            - containerPort: 9092
              name: kafka
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
      restartPolicy: Always
      volumes:
        - hostPath:
            path: /etc/localtime
            type: ""
          name: host-time
---
apiVersion: v1
kind: Service
metadata:
  name: kafka
spec:
  ports:
    - name: kafka9092
      port: 9092
      protocol: TCP
      targetPort: 9092
    - name: kafka9093
      port: 9093
      protocol: TCP
      targetPort: 9093
  selector:
    app: kafka
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: Service
metadata:
  name: kafka-nodeport
spec:
  ports:
    - name: kafka-nodeport
      port: 9092
      protocol: TCP
      targetPort: 9092
  selector:
    app: kafka
  sessionAffinity: None
  type: NodePort
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: kafka
data:
  KAFKA_CFG_NODE_ID: "0"
  KAFKA_CFG_PROCESS_ROLES: "controller,broker"
  KAFKA_CFG_LISTENERS: "PLAINTEXT://:9092,CONTROLLER://:9093"
  KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP: "CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT"
  KAFKA_CFG_CONTROLLER_QUORUM_VOTERS: "0@kafka:9093"
  KAFKA_CFG_CONTROLLER_LISTENER_NAMES: "CONTROLLER"
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: kafka
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "5M"
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "1200"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "1200"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "1200"
spec:
  rules:
    - host: kafka.domain
      http:
        paths:
          - backend:
              serviceName: kafka
              servicePort: 9092
```
