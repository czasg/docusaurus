# pymysql游标返回字典对象
```python
import pymysql

conn = pymysql.connect(
    database=database,
    user=user,
    password=password,
    host=host,
    port=port,
    charset="utf8"
)
cursor = conn.cursor(pymysql.cursors.DictCursor)
cursor.execute(sql)
print(cursor.fetchone())
```
游标通过 `pymysql.cursors.DictCursor` 可以返回字典对象
