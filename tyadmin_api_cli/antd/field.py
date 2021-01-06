import django
from django.db.models import ForeignKey, NOT_PROVIDED, DateTimeField, BooleanField, DateField, IntegerField, ImageField, FileField, TextField
from tyadmin_api_cli.fields import SImageField, richTextField

from tyadmin_api_cli.utils import trans, contain_zh

CUSTOM_RENDER_FORM_ITEM_LIST = ["ForeignKey"]


def judge_is_avatar(field):
    if "头像" in field.verbose_name or field.name == "avatar":
        return True
    else:
        return False


def render_factory(field, many=None, manyStyle=None, app_label=None):
    if many:
        if field.name == "permissions" and field.model._meta.app_label == "auth" and field.model._meta.object_name == "Group":
            width_help = "width: '80%',"
        else:
            width_help = ""
    else:
        width_help = ""
    # 自定义字段表单渲染
    if many and manyStyle == "tags":
        render_text = f"""
                           {width_help}
                           renderFormItem: (item, {{value, onChange, type, defaultRender}}) => {{
                                 return dealManyToManyFieldTags(item, value,onChange,type, {field.name}ManyToManyList)
                           }},
                          render: (text, record) => {{
                               return renderManyToMany(text)
                       }}, 
            """
    elif many:
        render_text = f"""
                {width_help}
                renderFormItem: (item, {{value, onChange, type, defaultRender}}) => {{
                      return dealManyToManyField(item, value,onChange,type, {field.name}ManyToManyList)
                }},
               render: (text, record) => {{
                    return renderManyToMany(text)
            }}, 
        """
    elif isinstance(field, ForeignKey):
        associated_model = field.related_model._meta.object_name
        render_text = f"""
                        renderFormItem: (item, {{value, onChange}}) => {{
                                          return dealForeignKeyField(item, value, onChange, {field.name}ForeignKeyList);
                                  }},
                        render: (text, record) => {{
                              return renderForeignKey(text, {field.name}VerboseNameMap);
                            }},"""
    elif field.__class__.__name__ == "UEditorField" or isinstance(field, richTextField):
        render_text = f"""
                                                              customCol:richCol,
                                                              ellipsis: true,
renderFormItem: (_, {{type, defaultRender, ...rest}}, form) => {{
                                  return richForm(form, rest.id);
                                }},"""
    elif not judge_is_avatar(field) and (isinstance(field, ImageField) or isinstance(field, SImageField)):
        render_text = f"""
                                          render: (text, record) => {{
                      return <img src={{text}} width="80px" alt=""/>
                    }},
renderFormItem: (_, {{type, defaultRender, ...rest}}, form) => {{
                              const imageUrl = form.getFieldValue('{field.name}');
                              return <UploadAvatar img={{imageUrl}}/>
                            }},
    """
    elif judge_is_avatar(field) and (isinstance(field, ImageField) or isinstance(field, SImageField)):
        render_text = f"""
        renderFormItem: (_, {{type, defaultRender, ...rest}}, form) => {{
                                      const imageUrl = form.getFieldValue('{field.name}');
                                      return <UploadAvatar img={{imageUrl}}/>
                                    }},
            """
    elif not judge_is_avatar(field) and isinstance(field, FileField):
        render_text = """
                        render: (text, record) => {
                          return <a download={text.split('/').slice(-1)} href={text}>{text.split('/').slice(-1)}</a>;
                        },    renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                          const downloadUrl = form.getFieldValue('%s');
                          return fileUpload(downloadUrl);
                        },""" % field.name
    elif isinstance(field, BooleanField):
        render_text = """
                                     render: (text, record) => {
                                  return BooleanDisplay(text);
                                },
                        renderFormItem: (item, {value, onChange}) => {
                          return BooleanFormItem(value, onChange);
                        },
        """
    else:
        render_text = ""
    return render_text


def rules_factory(field, field_ver_name):
    # 自定义字段校验
    if field.blank or field.default != NOT_PROVIDED:
        rules = ""
    else:
        rules = f"""{{
                      required: true,
                      message: '{field_ver_name}为必填项',
                     }},"""
    return rules


def default_factory(field):
    # 默认值设置
    default_value = ""
    if field.default != NOT_PROVIDED:
        if field.default is not None:
            if isinstance(field, BooleanField):
                if field.default:
                    default_value = f'initialValue: true,'
                else:
                    default_value = f'initialValue: false,'
            elif isinstance(field, IntegerField):
                default_value = f'initialValue: {field.default},'
            elif isinstance(field, DateField) or isinstance(field, DateTimeField):
                default_value = ''
            else:
                default_value = f'initialValue: "{field.default}",'
    return default_value


def valueEnum_factory(field):
    # 字段下拉选择渲染
    if field.__class__.__name__ == "TimeZoneField":
        field_choices_list = []
        for field_one in field.CHOICES:
            one_line = f'"{field_one[0]}":"{field_one[1]}"'
            field_choices_list.append(one_line)
            return f'valueEnum:{{{",".join(field_choices_list)}}}'
    elif field.choices:
        field_choices_list = []
        for field_one in field.choices:
            one_line = f'"{field_one[0]}":"{field_one[1]}"'
            field_choices_list.append(one_line)
        return f'valueEnum:{{{",".join(field_choices_list)}}}'
    else:
        return ""


def hideIn_factory(field):
    if field.__class__.__name__ == "UEditorField" or isinstance(field, richTextField):
        return """
        hideInSearch: true,
        """
    elif isinstance(field, FileField):
        return """
        hideInSearch: true,
        """
    elif isinstance(field, ImageField) or isinstance(field, SImageField):
        return """
        hideInSearch: true,
        """
    elif isinstance(field, DateTimeField):
        if field.default != django.db.models.NOT_PROVIDED or field.auto_now == True:
            return """
            hideInForm: true,
            """
    if field.name == "password":
        return """
        hideInTable: true,
        hideInSearch: true,
        """
    elif field.name == "id":
        return """
        hideInForm: true,
        hideInSearch: true,
        """
    else:
        return ""


def extra_factory(field):
    if field.__class__.__name__ == "UEditorField" or isinstance(field, richTextField):
        return """
        customCol:richCol,
        ellipsis: true,
        """


def value_type_factory(field):
    if isinstance(field, DateTimeField):
        return f"valueType: 'dateTime',"
    elif isinstance(field, DateField):
        return f"valueType: 'date',"
    elif isinstance(field, TextField):
        return f"valueType: 'textarea',"
    elif isinstance(field, IntegerField) and not field.choices:
        return f"valueType: 'digit',"
    elif isinstance(field, ImageField) or isinstance(field, SImageField):
        if judge_is_avatar(field):
            return f"valueType: 'avatar',"
        else:
            return ""
    else:
        return ""


def Field_Template_Factory(field, many=None, manyStyle=None):
    field_name = field.name
    field_ver_name = str(field.verbose_name)
    if not contain_zh(field_ver_name):
        field_ver_name = trans(field.name)

    # 进行字段名，国际化
    rules = rules_factory(field, field_ver_name)
    default = default_factory(field)
    valueEnum = valueEnum_factory(field)
    hideIn = hideIn_factory(field)
    value_type = value_type_factory(field)
    render = render_factory(field, many, manyStyle)
    BASE_TEMPLATE = f"""{{
                             title: '{field_ver_name}',
                             {hideIn}
                             {default}
                             dataIndex: '{field_name}',
                             {value_type}
                             rules: [
                                     {rules}
                             ],
                             {render}
                             {valueEnum}
                        }},
                      """
    return BASE_TEMPLATE


UserOptionColumn = """    {
                                              title: '操作',
                                              dataIndex: 'option',
                                              valueType: 'option',
                                                    fixed: 'right',
                          width: 100,
                                              render: (text, record) => (
                                                <>

                                                  <EditOutlined title="编辑" className="icon" onClick={async () => {
                                                   >>TIME_DEAL_PLACEHOLDER<<
                                                    handleUpdateModalVisible(true);
                                                    setUpdateFormValues(record);
                                                  }} />
                                                  <Divider type="vertical" />
                                                  <KeyOutlined onClick={() => {
                                            handleUpdatePassWordModalVisible(true);
                                              setUpdateFormValues(record);
          }} />
                                                  <Divider type="vertical" />
                                                  <Popconfirm
                                                    title="您确定要删除>>MODEL_NAME<<吗？"
                                                    placement="topRight"
                                                    onConfirm={() => {
                                                      handleRemove([record])
                                                      actionRef.current.reloadAndRest();
                                                    }}
                                                    okText="确定"
                                                    cancelText="取消"
                                                  >
                                                    <DeleteOutlined title="删除" className="icon" />
                                                  </Popconfirm>
                                                </>
                                              ),
                                            },"""

GeneralOptionColumn = """    {
                              title: '操作',
                              dataIndex: 'option',
                              valueType: 'option',
                                    fixed: 'right',
          width: 100,
                              render: (text, record) => (
                                <>

                                  <EditOutlined title="编辑" className="icon" onClick={async () => {
                                   >>TIME_DEAL_PLACEHOLDER<<
                                    handleUpdateModalVisible(true);
                                    setUpdateFormValues(record);
                                  }} />
                                  <Divider type="vertical" />
                                  <Popconfirm
                                    title="您确定要删除>>MODEL_NAME<<吗？"
                                    placement="topRight"
                                    onConfirm={() => {
                                      handleRemove([record])
                                      actionRef.current.reloadAndRest();
                                    }}
                                    okText="确定"
                                    cancelText="取消"
                                  >
                                    <DeleteOutlined title="删除" className="icon" />
                                  </Popconfirm>
                                </>
                              ),
                            },"""
