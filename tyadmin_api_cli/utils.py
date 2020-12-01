import os
import sys
import re
import logging

import django
from django.utils import translation


def init_django_env(project_name_settings):
    pwd = os.path.dirname(os.path.realpath(__file__))
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


zh_pattern = re.compile(u'[\u4e00-\u9fa5]+')

def contain_zh(word):
    global zh_pattern
    match = zh_pattern.search(word)

    return match


def get_model_import_path(model):
    '''
    Get model import path from class.__str__
    # <class 'django.contrib.admin.models.LogEntry'> => django.contrib.admin
    '''
    assert(isinstance(model, django.db.models.base.ModelBase))

    return re.search(r'\'(\S+)\.models', str(model)).group(1)


def format_json_string(raw_s, indent = 4):
    ''' format a json string '''
    formatted_s = ''
    indention = 0

    for line in raw_s.splitlines():
        line = line.lstrip()

        if not line:
            continue

       # apply for current line
        if line[0] in ['}', ']']:
            indention -= 1
 
        formatted_s += ' ' *(indent * indention) + line + '\n'

        # apply for next line
        if line[0] in ['{', '[']:
            indention += 1
   
    return formatted_s
