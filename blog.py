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
slug: $slug
title: $title
authors: [czasg]
tags: $tag
---

Hello, Czasg's World!
""".strip()


def gen(args):
    dir_path = os.path.join("blog", year, month, day)
    if not os.path.exists(dir_path):
        os.mkdir(dir_path)
    file = os.path.join(dir_path, args.filename)
    content = string.Template(template).substitute({
        "slug": args.slug,
        "title": args.title,
        "tag": f"""[{", ".join(args.tag)}]""",
    })
    with open(file, "w") as f:
        f.write(content)

    print(file)
    print(content)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("filename", help="blog filename", nargs='*', default=f"{year}{month}{day}.{int(time.time())}")
    parser.add_argument("--title", help="blog title", default="undefined")
    parser.add_argument("-s", "--slug", help="blog slug", default="undefined")
    parser.add_argument("-t", "--tag", help="blog tag", nargs='*', default=[])
    args = parser.parse_args()
    gen(args)
