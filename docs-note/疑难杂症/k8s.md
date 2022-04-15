## ingress 如何限制请求大小？
```yaml title="在注解中配置请求大小"
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: sonarqube
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "5M"
```