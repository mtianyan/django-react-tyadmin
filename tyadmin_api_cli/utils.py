import os
import sys

import django
from django.utils import translation


def init_django_env(project_name_settings):
    pwd = os.path.dirname(os.path.realpath(__file__))
    print(pwd)
    # 将项目目录加入setting
    sys.path.append(pwd)
    # manage.py中
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", f"{project_name_settings}")

    django.setup()


def get_lower_case_name(text):
    lst = []
    for index, char in enumerate(text):
        if char.isupper() and index != 0:
            lst.append("_")
        lst.append(char)

    return "".join(lst).lower()


def trans(txt):
    cur_language = translation.get_language()
    try:
        translation.activate(cur_language)
        text = translation.gettext(txt)
    finally:
        translation.activate(cur_language)
    return text


import re

zh_pattern = re.compile(u'[\u4e00-\u9fa5]+')


def contain_zh(word):
    global zh_pattern
    match = zh_pattern.search(word)

    return match
