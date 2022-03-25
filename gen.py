# coding: utf-8
import os
import sys
import time
import string
import argparse

from datetime import datetime

now = datetime.now()
year = str(now.year)
month = str(now.month)
day = str(now.day)

template = """
---
title: $title
authors: [czasg]
tags: [未定义]
---

摘要在此处

<!--truncate-->

正文在此处


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
""".strip()


def gen(args: dict):
    dir_path = os.path.join("blog", year)
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)
    index_dir = os.path.join(dir_path, f"{int(month):02d}-{int(day):02d}-{args.filename}")
    if os.path.exists(index_dir):
        print(f"已存在[{args.filename}]")
        return
    os.makedirs(index_dir)
    file = os.path.join(index_dir, "index.md")
    content = string.Template(template).substitute({
        "title": args.filename,
    })
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

    print(file)
    print(content)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("filename", help="blog filename")
    args = parser.parse_args()
    gen(args)
