import os
from django.db.models import DateTimeField, ForeignKey, BooleanField, IntegerField, CharField, ImageField, TextField

from tyadmin_api_cli.utils import init_django_env
from tyadmin_api_cli.contants import SYS_LABELS

def gen_view(project_name_settings, user_label_list):
    init_django_env(project_name_settings)
    import django
    from django.conf import settings
    if not user_label_list:
        user_label_list = settings.TY_ADMIN_CONFIG["GEN_APPS"]
    model_list = []
    app_name = "tyadmin_api"
    model_search_dict = {}
    app_model_import_dict = {}
    gen_labels = SYS_LABELS + user_label_list
    for one in django.apps.apps.get_models():

        model_name = one._meta.model.__name__
        model_ver_name = one._meta.verbose_name
        app_label = one._meta.app_label
        if app_label in gen_labels:
            try:
                app_model_import_dict[app_label].append(model_name)
            except KeyError:
                app_model_import_dict[app_label] = [model_name]
            search_list = []
            model_list.append(model_name)
            for filed in one.objects.model._meta.fields:
                name = filed.name
                ver_name = filed.verbose_name
                if isinstance(filed, CharField):
                    search_list.append('"' + name + '"')
                elif isinstance(filed, CharField):
                    search_list.append('"' + name + '"')
            model_search_dict[model_name] = search_list
    serializers_list = [one + "ListSerializer" for one in model_list]
    serializers_update_list = [one + "CreateUpdateSerializer" for one in model_list]
    filters_list = [one + "Filter" for one in model_list]
    viewset_txt = f"""
from rest_framework import viewsets
from tyadmin_api.custom import XadminViewSet
$model_import占位$
from {app_name}.auto_serializers import {", ".join(serializers_list)}
from {app_name}.auto_serializers import {", ".join(serializers_update_list)}
from {app_name}.auto_filters import {", ".join(filters_list)}
    """
    model_import_rows = []
    print(app_model_import_dict)
    for app, m_list in app_model_import_dict.items():
        if app in ["auth", "contenttypes"]:
            txt = f'from django.contrib.{app}.models import {", ".join(m_list)}\n'
        else:
            txt = f'from {app}.models import {", ".join(m_list)}\n'
        model_import_rows.append(txt)
    viewset_txt = viewset_txt.replace("$model_import占位$", "".join(model_import_rows))
    for model_name in model_list:
        viewset_txt += f"""
    
class {model_name}ViewSet(XadminViewSet):
        serializer_class = {model_name}ListSerializer
        queryset = {model_name}.objects.all().order_by('-pk')
        filter_class = {model_name}Filter
        search_fields = [{",".join(model_search_dict[model_name])}]

        def get_serializer_class(self):
            if self.action == "list":
                return {model_name}ListSerializer
            else:
                return {model_name}CreateUpdateSerializer
"""
    # if os.path.exists(f'{settings.BASE_DIR}/tyadmin_api/auto_views.py'):
    #     print("已存在views跳过")
    # else:
    with open(f'{settings.BASE_DIR}/tyadmin_api/auto_views.py', 'w') as fw:
        fw.write(viewset_txt)


if __name__ == '__main__':
    # name = input("请输入项目settings位置:")
    name = "skyoms.settings"
    gen_view(name,None)
