import os

from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models import ForeignKey, CharField, DateTimeField, DateField, BooleanField, IntegerField, FloatField, FileField, ImageField, TextField
from tyadmin_api_cli.antd.constant import PASSWORD_UPDATE_FORM, UPDATE_PASSWORD_METHOD, PASSWORD_PLACE, PASSWORD_FORM
from tyadmin_api_cli.antd.field import *
from tyadmin_api_cli.adapters.field_adapter import FIELD_ADAPTER
from tyadmin_api_cli.contants import SYS_LABELS
from tyadmin_api_cli.fields import richTextField, SImageField
from tyadmin_api_cli import ty_admin_settings
from tyadmin_api_cli.utils import init_django_env, get_lower_case_name, trans


def adapter_priority(app_label, model_name, field_name, key):
    try:
        if key in FIELD_ADAPTER[app_label][model_name][field_name]:
            return True
    except KeyError:
        return False


def style_adapter_priority(app_label, model_name, field_name, key):
    try:
        if key in settings.TY_ADMIN_CONFIG["REWRITE"][app_label][model_name][field_name]:
            return True
    except KeyError:
        try:
            if key in ty_admin_settings.TY_ADMIN_CONFIG["REWRITE"][app_label][model_name][field_name]:
                return True
        except KeyError:
            return False


def gen_antd_pages(project_name_settings, user_label_list, focus_model=None, template_type="base"):
    init_django_env(project_name_settings)
    import django
    from django.conf import settings
    if not user_label_list:
        user_label_list = settings.TY_ADMIN_CONFIG["GEN_APPS"]
    gen_labels = SYS_LABELS + user_label_list
    model_pic_dict = {}
    model_date_dict = {}
    model_service_dict = {}
    user = get_user_model()
    model_list = django.apps.apps.get_models()
    for one in model_list:
        columns = []
        model_name = one._meta.model.__name__
        model_ver_name = trans(one._meta.verbose_name_raw)
        app_name = one._meta.app_label
        model_meta = one.objects.model._meta
        if focus_model and model_name != focus_model:
            continue
        if app_name in gen_labels:
            img_field_list = []
            date_row_list = []
            model_add_item_list = []
            model_many_to_many_list = []
            model_import_item_list = []
            model_service_item_list = []
            date_field_list = []
            fields_count = len(model_meta.fields)

            # 处理字段类型
            for field in model_meta.fields:
                field_name = field.name
                # 进行第三方Field重写，优先级高
                try:
                    cur_adapter = FIELD_ADAPTER[app_name][model_name][field_name]
                except KeyError:
                    cur_adapter = None
                if cur_adapter and adapter_priority(app_name, model_name, field_name, "index_import"):
                    model_import_item_list.append(cur_adapter["index_import"])
                if cur_adapter and adapter_priority(app_name, model_name, field_name, "effect_state"):
                    model_add_item_list.append(cur_adapter["effect_state"])
                if cur_adapter and adapter_priority(app_name, model_name, field_name, "services"):
                    model_service_item_list.append(cur_adapter["services"])
                if cur_adapter and adapter_priority(app_name, model_name, field_name, "field"):
                    current_field = cur_adapter["field"]

                elif isinstance(field, ForeignKey):
                    associated_model = field.related_model._meta.object_name
                    current_field = Field_Template_Factory(field)
                    # print(current_field)
                    field_first_up = field_name[0].upper() + field_name[1:]
                    model_add_item = f"""
                                const [{field_name}ForeignKeyList, set{field_first_up}ForeignKeyList] = useState([]);
                                useEffect(() => {{
                                query{associated_model}({{all: 1}}).then(value => {{
                                     set{field_first_up}ForeignKeyList(value);
                                }});
                                }}, []);
                                const [{field_name}VerboseNameMap, set{field_first_up}VerboseNameMap] = useState([]);
                                useEffect(() => {{
                                query{associated_model}VerboseName().then(value => {{
                                    set{field_first_up}VerboseNameMap(value);
                                }});
                                }}, []);"""
                    model_add_item_list.append(model_add_item)
                    model_import_item = f"""import {{query{associated_model}, query{associated_model}VerboseName}} from '@/pages/AutoGenPage/{associated_model}List/service';"""
                    if model_import_item not in model_import_item_list and model_name != associated_model:
                        # 外键self 处理
                        model_import_item_list.append(model_import_item)
                elif isinstance(field, CharField):
                    current_field = Field_Template_Factory(field)
                elif isinstance(field, DateTimeField):
                    current_field = Field_Template_Factory(field)
                    date_field_list.append('"' + field_name + '"')
                    date_row_list.append(f'record.{field_name} = record.{field_name} === null ? record.{field_name} : moment(record.{field_name});')
                elif isinstance(field, DateField):
                    current_field = Field_Template_Factory(field)
                    date_field_list.append('"' + field_name + '"')
                    date_row_list.append(f'record.{field_name} = record.{field_name} === null ? record.{field_name} : moment(record.{field_name});')
                elif isinstance(field, BooleanField):
                    current_field = Field_Template_Factory(field)
                elif isinstance(field, IntegerField):
                    current_field = Field_Template_Factory(field)
                elif isinstance(field, FloatField):
                    current_field = Field_Template_Factory(field)
                elif isinstance(field, ImageField) or isinstance(field, SImageField):
                    img_field_list.append('"' + field_name + '"')
                    current_field = Field_Template_Factory(field)
                elif isinstance(field, FileField):
                    img_field_list.append('"' + field_name + '"')
                    current_field = Field_Template_Factory(field)
                elif isinstance(field, TextField):
                    current_field = Field_Template_Factory(field)
                elif field.__class__.__name__ == "UEditorField" or isinstance(field, richTextField):
                    current_field = Field_Template_Factory(field)
                elif field.__class__.__name__ == "TimeZoneField":
                    current_field = Field_Template_Factory(field)
                else:
                    current_field = Field_Template_Factory(field)
                # print(current_field)
                model_pic_dict[model_name] = img_field_list
                model_date_dict[model_name] = date_field_list
                columns.append(current_field)

            model_service_dict[model_name] = model_service_item_list
            # 处理多对多关系
            for field in model_meta.many_to_many:
                associated_model = field.related_model._meta.object_name
                if style_adapter_priority(app_name, model_name, field.name, "many_to_many"):
                    try:
                        many_style = settings.TY_ADMIN_CONFIG["REWRITE"][app_name][model_name][field.name]["many_to_many"]
                    except KeyError:
                        many_style = ty_admin_settings.TY_ADMIN_CONFIG["REWRITE"][app_name][model_name][field.name]["many_to_many"]
                else:
                    many_style = None
                current_field = Field_Template_Factory(field, many=True, manyStyle=many_style)
                field_name = field.name
                field_first_up = field_name[0].upper() + field_name[1:]
                model_many_to_many_item = f"""const [{field.name}ManyToManyList, set{field_first_up}ManyToManyList] = useState([]);
                        useEffect(() => {{
                          query{associated_model}({{all:1}}).then(value => {{
                            set{field_first_up}ManyToManyList(value);
                          }});
                        }}, []);"""
                model_many_to_many_list.append(model_many_to_many_item)
                model_import_item = f"""import {{query{associated_model}}} from '@/pages/AutoGenPage/{associated_model}List/service';"""
                if model_import_item not in model_import_item_list and model_name != associated_model:
                    model_import_item_list.append(model_import_item)
                columns.append(current_field)
            if app_name == user._meta.app_label and model_name == user._meta.object_name:
                opera = UserOptionColumn.replace(">>MODEL_NAME<<", model_ver_name)
            else:
                opera = GeneralOptionColumn.replace(">>MODEL_NAME<<", model_ver_name)
            opera = opera.replace(">>TIME_DEAL_PLACEHOLDER<<", "".join(date_row_list))
            columns.append(opera)
            dest_path = f'{os.path.dirname(__file__)}/antd_page_templates/{template_type}'
            with open(f'{dest_path}/index.jsx', encoding='utf-8') as fr:

                content = fr.read()
                if fields_count > 8:
                    new_content = content.replace(">>TWO_COLUMNS_COL<<", "twoColumns")
                else:
                    new_content = content.replace(">>TWO_COLUMNS_COL<<", "{}")
                new_content = new_content.replace(">>COLUMNS_LIST<<", "".join(columns))
                new_content = new_content.replace(">>MODEL_NAME<<", model_name)
                new_content = new_content.replace(">>MODEL_VERBOSE_NAME<<", str(model_ver_name))
                new_content = new_content.replace(">>FOREIGNKEY_PLACE<<", "".join(model_add_item_list))
                new_content = new_content.replace(">>MANY_TO_MANY_PLACE<<", "".join(model_many_to_many_list))
                new_content = new_content.replace(">>IMPORT_PLACE<<", "".join(model_import_item_list))
                new_content = new_content.replace(">>TIME_PLACE<<", ",".join(model_date_dict[model_name]))
                if app_name == user._meta.app_label and model_name == user._meta.object_name:
                    # 更新自己的密码
                    new_content = new_content.replace(">>PASSWORD_FORM<<", PASSWORD_FORM)
                    new_content = new_content.replace(">>PASSWORD_PLACE<<", PASSWORD_PLACE)
                    new_content = new_content.replace(">>UPDATE_PASSWORD_METHOD<<", UPDATE_PASSWORD_METHOD)
                    new_content = new_content.replace(">>PASSWORD_UPDATE_FORM<<", PASSWORD_UPDATE_FORM)
                else:
                    new_content = new_content.replace(">>PASSWORD_FORM<<", "")
                    new_content = new_content.replace(">>PASSWORD_PLACE<<", '')
                    new_content = new_content.replace(">>UPDATE_PASSWORD_METHOD<<", '')
                    new_content = new_content.replace(">>PASSWORD_UPDATE_FORM<<", '')
            with open(f'{dest_path}/service.js', encoding='utf-8') as fr:
                content = fr.read()

                new_services = content.replace(">>MODEL_NAME_LOWER_CASE<<", get_lower_case_name(model_name))
                new_services = new_services.replace(">>MODEL_NAME<<", model_name)
                new_services = new_services.replace(">>IMAGE_FIELD_LIST<<", ",".join(model_pic_dict[model_name]))
                new_services = new_services.replace(">>ADAPTER_SERVICE<<", "\n".join(model_service_dict[model_name]))
                if app_name == user._meta.app_label:
                    new_services = new_services.replace(">>UPDATE_PASSWORD_SERVICE<<", """
export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}""")
                else:
                    new_services = new_services.replace(">>UPDATE_PASSWORD_SERVICE<<", "")
            with open(f'{dest_path}/components/CreateForm.jsx', encoding='utf-8') as fr:
                create_form = fr.read()
                create_form = create_form.replace(">>MODEL_VERBOSE_NAME<<", str(model_ver_name))
                if fields_count > 8:
                    create_form = create_form.replace(">>WIDTH_PLACEHOLDER<<", 'width={1200}')
                else:
                    create_form = create_form.replace(">>WIDTH_PLACEHOLDER<<", "width={800}")
            with open(f'{dest_path}/components/UpdateForm.jsx', encoding='utf-8') as fr:
                update_form = fr.read()
                update_form = update_form.replace(">>MODEL_VERBOSE_NAME<<", str(model_ver_name))
                if fields_count > 8:
                    update_form = update_form.replace(">>WIDTH_PLACEHOLDER<<", 'width={1200}')
                else:
                    update_form = update_form.replace(">>WIDTH_PLACEHOLDER<<", "width={800}")
            with open(f'{dest_path}/components/UpdatePasswordForm.jsx', encoding='utf-8') as fr:
                change_password_form = fr.read()

            target_path = f'{settings.BASE_DIR}/tyadmin/src/pages/AutoGenPage'
            cur_path = f'{target_path}/{model_name}List'
            if not os.path.exists(cur_path):
                os.makedirs(cur_path)

            cur_path_co = f'{target_path}/{model_name}List/components'
            if not os.path.exists(cur_path_co):
                os.makedirs(cur_path_co)
            with open(f'{target_path}/{model_name}List/index.jsx', 'w', encoding='utf-8') as fw:
                fw.write(new_content)

            with open(f'{target_path}/{model_name}List/service.js', 'w', encoding='utf-8') as fw:
                fw.write(new_services)

            with open(f'{target_path}/{model_name}List/components/CreateForm.jsx', 'w', encoding='utf-8') as fw:
                fw.write(create_form)

            with open(f'{target_path}/{model_name}List/components/UpdateForm.jsx', 'w', encoding='utf-8') as fw:
                fw.write(update_form)
            if app_name == user._meta.app_label:
                with open(f'{target_path}/{model_name}List/components/UpdatePasswordForm.jsx', 'w', encoding='utf-8') as fw:
                    fw.write(change_password_form)


if __name__ == '__main__':
    # settings_name = input("请输入项目settings位置:")
    name = "tyadmin_demo.settings"
    gen_antd_pages(name, None)
