---
title: postgres
---

## docker

```shell script
docker pull postgres
docker run -it --rm --name postgres -p 5432:5432 postgres
```

## kubectl

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: junkv
  name: junkv
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: junkv
  template:
    metadata:
      labels:
        app: junkv
    spec:
      initContainers:
        - image: busybox:latest
          name: fill-pgdata
          command: ["sh", "-c", "cp -r /data/* /pgdata/"]
          volumeMounts:
            - mountPath: /pgdata
              name: pgdata
            - mountPath: /data
              name: data
      containers:
        - image: postgres:latest
          imagePullPolicy: Always
          name: postgres
          lifecycle:
            postStart:
              exec:
                command: ["/bin/sh", "-c", "while ! pg_isready ; do sleep 3; done; echo success;"]
          resources:
            limits:
              cpu: 1000m
              memory: 2000Mi
            requests:
              cpu: 1000m
              memory: 2000Mi
          volumeMounts:
            - mountPath: /etc/localtime
              name: host-time
              readOnly: true
            - mountPath: /var/lib/postgresql/data
              name: pgdata
      restartPolicy: Always
      volumes:
        - hostPath:
            path: /etc/localtime
            type: ""
          name: host-time
        - name: pgdata
          emptyDir: {}
        - name: data
          emptyDir: {}
```
