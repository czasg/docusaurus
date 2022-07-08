```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo
  namespace: demo
  labels:  # object
    app: demo
  annotations:  # object
    app: demo
spec:
  replicas: 1
  revisionHistoryLimit: 5
  progressDeadlineSeconds: 600
  selector:
    matchLabels:
      name: demo
  strategy:
    type: [RollingUpdate | Recreate]
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:  # object
        app: demo
      annotations:  # object
        app: demo
    spec:
      restartPolicy: [Always | Never | OnFailure]
      nodeSelector:  # object
        kubernetes.io/hostname: node-1
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: nodeHostName
                operator: In
                values:
                - "node-1"
      imagePullSecrets:
      - name: string
      hostNetowrk: false
      volumes:
      - name: emptyDir
        emptyDir: {}
      - name: hostPath
        hostPath:
          path: /hostPath
      - name: configMap
        configMap:
          name: demoConfigMap
          items:
          - key: demo
            path: /configMap
      - name: nfs
        nfs:
          server: 10.10.10.10
          path: /nfs
      containers:
      - name: demo
        image: demo:latest
        imagePullPolicy: [Always | Never | IfNotPresent]
        command: ["sh", "-c", "sleep 3600"]
        args: ["-c", "sleep 3600"]
        workingDir: /workplace
        securityContext:
          privileged: [false | true]
        volumeMounts:
        - name: emptyDir
          mountPath: /emptyDir
          readOnly: [false | true]
        ports:
        - name: http
          containerPort: 8080
          hostPort: int
          protocol: string
        env:
        - name: APP_NAME
          value: demo
        envFrom:
        - configMapRef:
            name: demoConfigMap
        resources:
          limits:
            cpu: "1"
            memory: 200Mi
          requests:
            cpu: "1"
            memory: 200Mi
        livenessProbe:
          exec:
            command: [...string]
          httpGet:
            path: string
            port: int
            host: string
            scheme: string
            httpHeaders:
            - name: string
              value: string
          tcpSocket:
            port: 8080
          initialDelaySeconds: 10
          timeoutSeconds: 5
          periodSeconds: 30
          successThreshold: 1
          failureThreshold: 3
```
