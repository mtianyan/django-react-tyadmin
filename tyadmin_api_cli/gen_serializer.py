import os

from tyadmin_api_cli.contants import MAIN_DISPLAY, SYS_LABELS
from tyadmin_api_cli.utils import init_django_env
#  获取当前文件的路径，以及路径的父级文件夹名
from django.db.models import DateTimeField, ForeignKey, BooleanField, IntegerField, CharField, ImageField, ManyToManyField


def gen_ser_txt(serializers_txt, model, fk_display_p):
    if model == "CrontabSchedule":
        print("hah")
        append_timezone_adapter = 'timezone = serializers.CharField()'
    else:
        append_timezone_adapter = ''
    for one in fk_display_p:
        if "SelfListSerializer()" in one:
            serializers_txt += f"""

class {model}SelfListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = {model}
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)
"""
    serializers_txt += f"""

class {model}ListSerializer(serializers.ModelSerializer):
    {append_timezone_adapter}
{"".join(fk_display_p)}
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = {model}
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)
"""
    serializers_txt += f"""

class {model}CreateUpdateSerializer(serializers.ModelSerializer):
    {append_timezone_adapter}
    ty_options_display_txt = serializers.SerializerMethodField()
    class Meta:
        model = {model}
        fields = "__all__"
    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)
"""
    return serializers_txt


def gen_serializer(project_name_settings, user_label_list):
    init_django_env(project_name_settings)
    import django
    from django.conf import settings
    if not user_label_list:
        user_label_list = settings.TY_ADMIN_CONFIG["GEN_APPS"]
    model_list = []
    model_fk_dict = {}
    model_many_2_many_dict = {}
    app_model_import_dict = {}
    gen_labels = SYS_LABELS + user_label_list
    finish_model_list = []
    finish_many_list = []
    for one in django.apps.apps.get_models():
        columns = []
        model_name = one._meta.model.__name__
        model_ver_name = one._meta.verbose_name
        app_label = one._meta.app_label
        if app_label in gen_labels:
            fk_field_list = []
            try:
                app_model_import_dict[app_label].append(model_name)
            except KeyError:
                app_model_import_dict[app_label] = [model_name]
            for field in one.objects.model._meta.fields:
                name = field.name
                ver_name = field.verbose_name
                if isinstance(field, ForeignKey):
                    field_object_name = field.target_field.model._meta.object_name
                    fk_field_list.append(name + "$分割$" + field_object_name)

            model_fk_dict[model_name] = fk_field_list
            model_list.append(model_name)
            many_2_many_list = []
            for filed in one.objects.model._meta.many_to_many:
                name = filed.name
                rela_model = filed.related_model._meta.object_name
                print("&&&" * 30)
                print(one._meta.app_label, one._meta.model.__name__, rela_model)
                many_2_many_list.append(name + "$分割$" + rela_model)
                print("&&&" * 30)
            model_many_2_many_dict[one._meta.model.__name__] = many_2_many_list
    # status_text = serializers.CharField(source="status.text", read_only=True)
    print(model_fk_dict)
    print(model_many_2_many_dict)
    app_name = "tyadmin_api"
    serializers_txt = f"""from rest_framework import serializers
$model_import占位$"""
    model_import_rows = []
    for app, m_list in app_model_import_dict.items():
        if app in ["auth", "contenttypes"]:
            txt = f'from django.contrib.{app}.models import {", ".join(m_list)}\n'
        else:
            txt = f'from {app}.models import {", ".join(m_list)}\n'
        model_import_rows.append(txt)
    serializers_txt = serializers_txt.replace("$model_import占位$", "".join(model_import_rows))

    print(model_fk_dict)
    wait_model_list = list(model_fk_dict.keys())
    for (model, fk_field_l), (_, many_2) in zip(model_fk_dict.items(), model_many_2_many_dict.items()):
        fk_display_p = inner_deal_foreign(model, fk_field_l, many_2)
        fk_list = model_fk_dict[model]
        my_list = model_many_2_many_dict[model]
        if len(fk_list) == 0 and len(my_list) == 0:
            serializers_txt = gen_ser_txt(serializers_txt, model, fk_display_p)
            wait_model_list.remove(model)
            finish_model_list.append(model)
            finish_many_list.append(model)
    for model in wait_model_list:
        fk_display_p = inner_deal_foreign(model, model_fk_dict[model], model_many_2_many_dict[model])
        serializers_txt = gen_ser_txt(serializers_txt, model, fk_display_p)
    # serializers_txt = deal_write(finish_model_list, model_fk_dict, model_many_2_many_dict, serializers_txt, wait_model_list, finish_many_list)

    #
    # if os.path.exists(f'{settings.BASE_DIR}/tyadmin_api/auto_serializers.py'):
    #     print("已存在serializers跳过")
    # else:
    with open(f'{settings.BASE_DIR}/tyadmin_api/auto_serializers.py', 'w') as fw:
        fw.write(serializers_txt)


def inner_deal_foreign(model, fk_field_l, many_2):
    fk_display_p = []
    for one_fk in fk_field_l:
        fk_name, fk_object_name = one_fk.split("$分割$")
        if fk_object_name == model:
            fk_one_line = f'    {fk_name} = {fk_object_name}SelfListSerializer()\n'
        else:
            fk_one_line = f'    {fk_name} = {fk_object_name}CreateUpdateSerializer()\n'
        fk_display_p.append(fk_one_line)
    for one in many_2:
        many_name, many_object_name = one.split("$分割$")
        fk_one_line = f'    {many_name} = {many_object_name}CreateUpdateSerializer(many=True)\n'
        fk_display_p.append(fk_one_line)
    return fk_display_p


# def deal_write(finish_model_list, model_fk_dict, model_many_2_many_dict, serializers_txt, wait_model_list, finish_many_list):
#     fk_display_p = []
#     for (_, fk_field_l), (_, many_2) in zip(model_fk_dict.items(), model_many_2_many_dict.items()):
#         fk_display_p = inner_deal_foreign(fk_field_l, many_2)
#         print(fk_display_p)
#     for wait_model in wait_model_list:
#         fk_field_l = model_fk_dict[wait_model]
#         if can_gen(finish_model_list, wait_model, model_fk_dict,model_many_2_many_dict, finish_many_list):
#             finish_model_list.append()
#             serializers_txt = gen_ser_txt(serializers_txt, wait_model, fk_display_p)
#         else:
#             serializers_txt = gen_ser_txt(serializers_txt, wait_model, fk_display_p)
#     return serializers_txt


def can_gen(finish_model_list, model, model_fk_dict,model_many_2_many_dict, finish_many_list):
    can_gen_flag = True
    for one_fk, one_my in zip(model_fk_dict[model],model_many_2_many_dict[model]):
        _, fk_object_name = one_fk.split("$分割$")
        _, my_object_name = one_my.split("$分割$")
        if fk_object_name != model and fk_object_name not in finish_model_list:
            can_gen_flag = False
        if my_object_name not in finish_many_list:
            can_gen_flag = False
    return can_gen_flag


if __name__ == '__main__':
    # name = input("请输入项目settings位置:")
    name = "skyoms.settings"
    gen_serializer(name, None)
