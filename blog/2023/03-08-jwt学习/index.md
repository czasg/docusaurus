---
title: jwt学习
authors: [czasg]
tags: [后端]
---

JWT 全称 JSON Web Token，是一种允许携带非敏感信息的认证机制。常用于服务之间的认证校验。

<!--truncate-->

JWT 结构组成包括三个部分：
- Header：一般用于指定token类型，包括`alg`和`typ`两个字段
- Payload：数据载体，一般需要包含`exp`表示过期时间
- Signature：摘要，是前面两个部分的摘要运算

组成形式为 Header计算Base64 . Payload计算Base64 . 前两部分哈希运算

```python title="https://github.com/czasg/pywss/blob/master/pywss/middleware/jwt.py"
import json
import time
import base64
import hashlib


class JWT:

    def __init__(self, secret: str, expire: int = 3600):
        self.secret = secret.encode()
        self.expire = expire
        self.header = base64.b64encode(json.dumps({
            "alg": "HS256",
            "typ": "JWT",
        }, ensure_ascii=False).encode())

    def encrypt(self, **kwargs):
        kwargs.update(exp=int(time.time()) + self.expire)
        payload = base64.b64encode(json.dumps(kwargs, ensure_ascii=False).encode())

        sha256 = hashlib.sha256()
        sha256.update(self.header)
        sha256.update(payload)
        sha256.update(self.secret)
        signature = sha256.hexdigest()

        return f"{self.header.decode()}.{payload.decode()}.{signature}"

    def decrypt(self, token: str) -> dict:
        if token.startswith("Bearer"):
            token = token.replace("Bearer", "", 1).strip()

        tokens = token.split(".")
        if len(tokens) != 3:
            raise Exception("Invalid JWT Token")

        header, payload, signature = tokens  # type: str
        sha256 = hashlib.sha256()
        sha256.update(header.encode())
        sha256.update(payload.encode())
        sha256.update(self.secret)
        if sha256.hexdigest() != signature:
            raise Exception("Invalid JWT Token, Signature Except")

        return json.loads(base64.b64decode(payload))
```


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
