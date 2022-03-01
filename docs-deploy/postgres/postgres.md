---
title: postgres
---

## docker
```shell script
docker volume create pgdata
docker run -it --rm --name postgres \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_DB=postgres \
    -v pgdata:/var/lib/postgresql/data \
    -p 5432:5432 \
    postgres:latest
```

## kubectl
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: postgres
  name: postgres
spec:
  replicas: 2
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: postgres
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: postgres
      annotations:
        co.elastic.logs: "true"
        co.elastic.logs/enabled: "true"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
        co.elastic.logs/processors.add_fields.fields.index: "postgres-test"
    spec:
      containers:
        - name: postgres
          image: postgres:latest
          imagePullPolicy: Always
          ports:
            - containerPort: 5432
              name: 5432tcp
              protocol: TCP
          lifecycle:
            postStart:
              exec:
                command: ["sh", "-c", "while ! pg_isready; do sleep 3; done; echo success;"]
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 10
            periodSeconds: 60
            successThreshold: 2
            tcpSocket:
               port: 5432
            timeoutSeconds: 10
          resources:
            limits:
              cpu: 200m
              memory: 200Mi
            requests:
              cpu: 200m
              memory: 200Mi
          nodeSelector:
            kubernetes.io/hostname: machine-1
          volumeMounts:
            - mountPath: /etc/localtime
              name: host-time
              readOnly: true
            - mountPath: /etc/lib/postgresql/data
              name: pgdata
      restartPolicy: Always
      volumes:
        - name: host-time
          hostPath:
            path: /etc/localtime
            type: ""
        - name: pgdata
          hostPath:
            path: /postgres/data
            type: DirectoryOrCreate
```
